from flask import render_template, request, redirect, url_for
from flask import g
from flask import session
from flask import Blueprint

import functools
from . import db

bp = Blueprint("auth", "auth", url_prefix="/auth")


# DECORATOR for login required pages
def login_required(view):
  #View decorator that redirects anonymous users to the login page

  @functools.wraps(view)
  def wrapped_view(**kwargs):
    if g.user is None:
      return redirect(url_for("auth.login"))

    return view(**kwargs)

  return wrapped_view


@bp.before_app_request
def load_logged_in_user():
  """If a user id is stored in the session, load the user object from
  the database into ``g.user``."""
  user_id = session.get("user_id")

  if user_id is None:
    g.user = None
  else:
    #starting db connection
    conn = db.get_db()
    cur = conn.cursor()
    cur.execute("SELECT id,name,email FROM userdata WHERE id=? ", [user_id])
    user_id, name, email = cur.fetch()[0]
    g.user['name'] = name
    g.user['user_id'] = user_id
    g.user['email'] = email
    #closing db connection
    conn.close()

@bp.route("/signin", methods=["GET", "POST"])
def signin():

  if request.method == "GET":
    return render_template("signin.html")
  elif request.method == "POST":
    # starting db connection  
    conn = db.get_db()
    cur = conn.cursor()

    # fetching client form
    email = request.form.get("email")
    password = request.form.get("password")
    
    #fetch details of user details
    cur.execute("SELECT id,name,pass,email FROM userdata WHERE email=?", [email])
    error = None # helps with authentication process 
    # check if the query is empty - user not registered
    if cur.fetchone():
      userid, name, user_password, email = cur.fetchone()[0]
    else:
      # return message: username not found
      error = "Incorrect email"
      pass
    
    # continues if user is already registered
    if error is None:
      # check password
      if password == password:
        session.clear()
        session["user_id"] = userid

        conn.close()
        return redirect(url_for("user.dashboard"))
      else:
        # return message password incorrect
        error = "Incorrect password"
    
    conn.close()
    return render_template(url_for("auth.signin"))

@bp.route("/signup", methods=["GET", "POST"])
def signup():
  # show user registration and also update database
  if request.method == "POST":
    conn = db.get_db()
    cur = conn.cursor()

    # fetch details from client
    name = request.form.get("name")
    email = request.form.get("email")
    password = request.form.get("password")
    
    # check if user is already present
    cur.execute("SELECT id FROM userdata WHERE email=?", [email])
    error = None
    if cur.fetchone():
      error = "User already registered"
    else:
      pass

    # continues with registration if user is not registered
    if error is None:
      # the user is new, update database with the new details
      cur.execute("INSERT INTO userdata(name,pass,email) VALUES (?,?,?)", [name, email, password])
      user_id = cur.lastrowid
      conn.commit()
      
      #login the user
      session.clear()
      session["user_id"] = user_id

      # close db connection
      conn.close()
      return redirect(url_for("users.dashboard"))


  return render_template("signup.html")

@bp.route("/signout")
def signout():
  session.clear()
  return redirect(url_for("home"))
