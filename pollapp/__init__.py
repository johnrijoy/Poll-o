import os
from flask import Flask, render_template

def create_app():
  app = Flask("pollapp")
  app.config.from_mapping(
          DATABASE=os.path.join(app.instance_path, 'pollapp.sqlite')
  )
  try:
    os.makedirs(app.instance_path)
  except OSError:
    pass

  @app.route("/")
  def home():
          
    return render_template("home.html")

  from . import auth
  app.register_blueprint(auth.bp)

  from . import users
  app.register_blueprint(users.bp)

  from . import polls
  app.register_blueprint(polls.bp)

  from . import db
  db.init_app(app)

  return app
