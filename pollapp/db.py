import sqlite3

import click
from flask import current_app, g
from flask.cli import with_appcontext

def get_db():
    if 'db' not in g:
        dbname = current_app.config['DATABASE']
        print(dbname)
        g.db = sqlite3.connect(dbname)
        g.db.execute("PRAGMA foreign_keys = ON;")
    return g.db

def close_db(e=None):
    db = g.pop('db', None)
    if db is not None:
        db.close()

def init_db():
    db = get_db()

    f = current_app.open_resource("sql/000_initial.sql")
    sql_code = f.read().decode("ascii")
    cur = db.cursor()
    cur.executescript(sql_code)
    db.commit()
    cur.close()
    close_db()

@click.command('initdb', help="initialise database")
@with_appcontext
def init_db_command():
    init_db()
    click.echo('DB initialised')

def init_app(app):
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)

def get_user_by_email(email):
    conn = get_db()
    cur = conn.cursor()

    cur.execute("SELECT id, name, email FROM userdata WHERE email=?",[email])
    userdata = cur.fetchone()

    cur.close()
    if userdata:
        user_id, name, email = userdata
        userdata = {}
        userdata['user_id'] = user_id
        userdata['name'] = name
        userdata['email'] = email
    else:
        print("user does not exist")
    return userdata
