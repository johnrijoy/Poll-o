# to manage polls
from flask import Blueprint
from flask import render_template, request, redirect, url_for
from flask import g, jsonify

from . import db
from . import auth

bp = Blueprint("polls", "polls", url_prefix="/polls")

@bp.route("/viewpoll")
def viewpoll():
    # to view all the available polls
    conn = db.get_db()
    cur = conn.cursor()

    cur.execute("SELECT id, question FROM polldata")
    poll_list = cur.fetchall()
    
    cur.close()

    if (request.accept_mimetypes.best == 'application/json'):
        return jsonify(dict(polls = [dict(id=id, question=question) for id, question in poll_list])) 
    else:
        return render_template("viewpoll.html", poll_list=poll_list )

@bp.route("/pollform/<qid>", methods=["GET", "POST"])
def pollform(qid):
    # 
    conn = db.get_db()
    cur = conn.cursor()

    if request.method == "GET":
        # fetching the question from polldata for the given id
        cur.execute("SELECT question FROM polldata where id=?", [qid])
        question = cur.fetchone()[0]

        # fetching options related to question qid
        cur.execute("SELECT id,option FROM polloption WHERE polldata_id=?", [qid])
        options = cur.fetchall()
        
        # close db cursor
        cur.close()
        return render_template("pollform.html", question=question, options=options, qid=qid)

    if request.method == "POST":
        # the form will be submitted in post with an option radio marked
        # update the tables polloption, userattempt 
        # polloption - update the number of votes
        # userattempt - add the user who voted for this poll, 
        #               only one vote per user per poll

        option_id = request.form.get("option")

        # if no option was selected or error in collecting option, redirect to viewpoll
        if option_id == None:
            return redirect(url_for('polls.viewpoll'))

        # redirecting unauthenticated user to login
        if g.user == None:
            return redirect(url_for('auth.signin'))

        # fetch the number of votes for that option
        cur.execute("SELECT votes FROM polloption WHERE id=?", [option_id])
        votes = cur.fetchone()[0]
        votes += 1
        # update votes for the option in poll option
        cur.execute("UPDATE polloption SET votes=? WHERE id=?", [votes, option_id])
        # need to change after implementing authentication system
        user_id = g.user["user_id"]
        cur.execute("INSERT INTO userpoll(poll_id, user_id) VALUES (?, ?)", [qid, user_id])

        conn.commit()
        cur.close()
        return redirect(url_for('polls.viewpoll'))

@bp.route("/createpoll", methods=["GET", "POST"])
@auth.login_required
def createpoll():
    # createpost will have two methods: 
    # GET - to send a form page
    # POST - to create the poll and update db
    conn = db.get_db()
    cur = conn.cursor()

    if request.method == "GET":
        cur.close()
        return render_template("createpoll.html")
    elif request.method == "POST":
        # creating a new poll involves accepting form details 
        # and updating db tables
        # the tables to be updated are:
        # polldata, polloption, userpoll

        question = request.form.get('question')
        options =[request.form.get('opt1'),
                request.form.get('opt2'),
                request.form.get('opt3'),
                request.form.get('opt4')
                ]
        print(question, options)
        cur.execute("INSERT INTO polldata(question) VALUES (?)", [question])
        cur.execute("SELECT id FROM polldata WHERE question = ?", [question])
        question_id = cur.lastrowid
        for opt in options:
            cur.execute("INSERT INTO polloption(option, polldata_id) VALUES (?, ?)", [opt, question_id])
        # collect user id from g which is loaded by session
        user_id = g.user["user_id"] 
        cur.execute("INSERT INTO userpoll(poll_id, user_id) VALUES (?,?)", [question_id, user_id])
        
        conn.commit()
        cur.close()
        return redirect(url_for("polls.viewpoll"), 302)
