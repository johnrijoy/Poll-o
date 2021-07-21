# to manage polls
from flask import Blueprint
from flask import render_template, request, redirect, url_for
from flask import g

from . import db

bp = Blueprint("polls", "polls", url_prefix="/polls")

@bp.route("/viewpoll")
def viewpoll():

    return render_template("home.html")

@bp.route("/pollform/<qid>", methods=["GET", "POST"])
def pollform(qid):
        conn = db.get_db()
        cur = conn.cursor()

        if request.method == "GET":
            cur.execute("SELECT ")
    return render_template("pollform.html")
        
@bp.route("/createpoll", methods=["GET", "POST"])
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
            cur.execute("INSERT INTO polloption(options, polldata_id) VALUES (?, ?)", [opt, question_id])
        cur.execute("SELECT id FROM userdata WHERE email='admin@admin.com'")
        user_id = cur.fetchone()[0]
        cur.execute("INSERT INTO userpoll(poll_id, user_id) VALUES (?,?)", [question_id, user_id])
        
        conn.commit()
        conn.close()
        return redirect(url_for("polls.viewpoll"), 302)
