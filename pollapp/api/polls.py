# to manage polls
from flask import Blueprint
from flask import request, jsonify

from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required


from .. import db

bp = Blueprint("api_polls", "api_polls", url_prefix="/api/polls")

@bp.route("/viewpoll")
def view_poll():
    # to view all the available polls
    # authentication not required
    conn = db.get_db()
    cur = conn.cursor()

    cur.execute("""SELECT id, question, name, email FROM polldata 
                JOIN userdata ON polldata.user_id = userdata.id
            """)
    poll_list = cur.fetchall()
    
    cur.close()

    if (request.accept_mimetypes.best == 'application/json'):
        ret = dict(polls = [dict(id=id, question=question, name=name, email=email) for id, question, name, email in poll_list])
        return jsonify(ret), 200 
    else:
        return jsonify({"msg": "bad request"}), 400

@bp.route("/getpoll", methods=["GET"], endpoint="get_poll")
@jwt_required()
def get_poll():
    # API request will also contain question id
    # have to return pollid, question, polloptions, optionid, votes

    # get poll id and user id from qpi request
    print(request.args.get("poll_id"))
    poll_id = request.args.get("poll_id")
    email = get_jwt_identity()
    userdata = db.get_user_by_email(email)
    user_id = userdata["user_id"]

    # opening database connection
    conn = db.get_db()
    cur = conn.cursor()

    # fetching the question from polldata for the given id
    cur.execute("SELECT question FROM polldata where id=?", [poll_id])
    question = cur.fetchone()[0]

    # fetching options related to question qid
    cur.execute("SELECT id,option,votes FROM polloption WHERE polldata_id=?", [poll_id])
    options = cur.fetchall()

    # fetching details regarding user attempt on this poll
    cur.execute("SELECT * FROM userattempt WHERE user_id=? AND poll_id=?", [user_id, poll_id])
    attempted = cur.fetchone()
    # attempted will be None if user has not attempted the poll
    if attempted:
        attempted = True
    else:
        attempted = False

    # close db cursor
    cur.close()
    
    # pack all data into a dictionary
    ret = {}
    ret["polldata"] = dict(poll_id=poll_id, question=question, attempted=attempted)
    ret["polloptions"] = {option_id: option for option_id,option,votes in options}
    ret["pollvotes"] = {option_id: votes for option_id,option,votes in options}

    return jsonify(ret)

@bp.route("/votepoll", methods=["POST"], endpoint="vote_poll")
@jwt_required
def vote_poll():
    # the form will be submitted in post with an option radio marked
    # update the tables polloption, userattempt 
    # polloption - update the number of votes
    # userattempt - add the user who voted for this poll, 
    #               only one vote per user per poll

    option_id = request.json.get("option_id")
    poll_id = request.json.get("poll_id")

    # if no option was selected or error in collecting option, redirect to viewpoll
    if option_id == None:
        return 404

    # get user id
    email = get_jwt_identity()
    userdata = db.get_user_by_email(email)
    user_id = userdata["user_id"]

    # check userattempt table, if poll attempted return invalid status code
    cur.execute("SELECT * FROM userattempt WHERE user_id=? AND poll_id=?", [user_id, poll_id])
    attempted = cur.fetchone()
    if attempted: # check if attempted is not None
        return {"msg": "Already attempted"}, 400

    # fetch the number of votes for that option
    cur.execute("SELECT votes FROM polloption WHERE id=?", [option_id])
    votes = cur.fetchone()[0]
    votes += 1
    # update votes for the option in poll option
    cur.execute("UPDATE polloption SET votes=? WHERE id=?", [votes, option_id])
   
    # update the userattempt table with the details of authenticated user 
    cur.execute("INSERT INTO userpoll(poll_id, user_id, option_id) VALUES (?, ?)", [poll_id, user_id, option_id])

    conn.commit()
    cur.close()
    return jsonify({"msg":"vote successful"}), 200

@bp.route("/createpoll", methods=["POST"], endpoint="create_poll")
@jwt_required()
def create_poll():
    # POST - to accept create poll request, get poll data and update db

    # creating a new poll involves accepting form details 
    # and updating db tables
    # the tables to be updated are:
    # polldata, polloption, userpoll

    # get poll question, user details and poll options from request
    print(request.data)
    question = request.json.get("question")
    options = request.json.get("options")
    options = options.strip('][').split(', ')
    print(options)

    #get user_id
    email = get_jwt_identity()
    userdata = db.get_user_by_email(email)
    user_id = userdata["user_id"]

    # for server debug
    print(question, options)

    # connect to db
    conn = db.get_db()
    cur = conn.cursor()

    # add the new question and get the id
    cur.execute("INSERT INTO polldata(question, user_id) VALUES (?,?)", [question, user_id])
    question_id = cur.lastrowid

    #add the options
    for opt in options:
        print(opt)
        cur.execute("INSERT INTO polloption(option, polldata_id) VALUES (?, ?)", [opt, question_id])
    
    
    conn.commit()
    cur.close()

    return jsonify({"msg":"poll created successfully"}), 200

