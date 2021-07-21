# for user specific views
from flask import Blueprint
from flask import render_template, request, redirect, url_for
from flask import g

from . import db
from . import auth

bp = Blueprint("users", "users", url_prefix="/users")

@bp.route("/dashboard")
@auth.login_required
def dashboard():

  return render_template("viewpoll.html")

@bp.route("/profile")
@auth.login_required
def profile():
  
  return render_template("viewpoll.html")

@bp.route("/mypolls")
@auth.login_required
def mypolls():
  
  return render_template("viewpoll/html")
