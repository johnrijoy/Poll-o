# to authenticate users
from flask import Blueprint, render_template

bp = Blueprint("users", "users", url_prefix="/users")

@bp.route("/signin")
def signin():
	
	return render_template("signin.html")
	
@bp.route("/signup")
def signup():
	
	return render_template("signup.html")
