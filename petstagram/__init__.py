import os
from flask import Flask, render_template, request, session, redirect
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager, \
    current_user, login_user, logout_user, login_required

from petstagram.models import db, User
from petstagram.api.user_routes import user_routes
from petstagram.api.posts import posts
from petstagram.api.comments import comments
from petstagram.api.likes import likes
from petstagram.config import Config
from datetime import datetime

app = Flask(__name__)
login_manager = LoginManager(app)

app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(posts, url_prefix='/api/posts')
app.register_blueprint(comments, url_prefix='/api/comments')
app.register_blueprint(likes, url_prefix='/api/likes')
db.init_app(app)


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)


# Application Security
CORS(app)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie(
        'csrf_token',
        generate_csrf(),
        secure=True if os.environ.get('FLASK_ENV') else False,
        samesite='Strict' if os.environ.get('FLASK_ENV') else None,
        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    username_or_email = request.json.get('usernameoremail', None)
    password = request.json.get('password', None)
    print(username_or_email, password)

    if not username_or_email or not password:
        return {"errors": ["Missing required parameters"]}, 400

    authenticated1, user1 = User.authenticate1(username_or_email, password)
    authenticated2, user2 = User.authenticate2(username_or_email, password)

    if authenticated1:
        user = user1
        authenticated = authenticated1
    elif authenticated2:
        user = user2
        authenticated = authenticated2
    else:
        authenticated = False
        user = None

    print(authenticated)
    print(user)
    if authenticated:
        login_user(user)
        return {"current_user_id": current_user.id}

    return {"errors": ["Invalid username, email, and/or password"]}, 401


@app.route('/signup', methods=['POST'])
def signup():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    username = request.json.get('username', None)
    password = request.json.get('password', None)
    firstname = request.json.get('firstname', None)
    lastname = request.json.get("lastname", None)
    email = request.json.get('email', None)

    if not username or not password:
        return {"errors": ["Missing required parameters"]}, 400

    new_user = User(
                    user_name=username,
                    first_name=firstname,
                    last_name=lastname,
                    DOB=datetime.now(),
                    email=email,
                    password=password,
                    created_at=datetime.now(),
                    updated_at=datetime.now()
    )
    db.session.add(new_user)
    db.session.commit()
    # return redirect('/api/users')

    authenticated, user = User.authenticate1(username, password)
    print(authenticated)
    print(user)
    if authenticated:
        login_user(user)
        return {"current_user_id": current_user.id}

    return {"errors": ["Invalid username, email, and/or password"]}, 401


@app.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    return {'msg': 'You have been logged out'}, 200


@app.route('/restore')
def restore():
    id = current_user.id if current_user.is_authenticated else None
    if current_user:
        return {"current_user_id": id}
