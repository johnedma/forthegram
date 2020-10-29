from flask import Blueprint, jsonify, request, redirect
from petstagram.models import User, db
from datetime import datetime
from flask_login import login_required

user_routes = Blueprint('users', __name__)


@user_routes.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        response = User.query.all()
        return {"users": [user.to_dict() for user in response]}

    if request.method == 'POST':
        user_name = request.form['userName']
        first_name = request.form['firstName']
        last_name = request.form['lastName']
        DOB = request.form['dob']
        password = request.form['password']
        created_at = datetime.now()
        updated_at = datetime.now()

        new_user = User(
            user_name=user_name,
            first_name=first_name,
            last_name=last_name,
            DOB=DOB,
            password=password,
            created_at=created_at,
            updated_at=updated_at
        )
        db.session.add(new_user)
        db.session.commit()
        return redirect('/api/users')


@user_routes.route('/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def user_info(id):
    user = User.query.filter(User.id == int(id))[0]
    print("user.to_dict() = ", user.to_dict())
    if request.method == "GET":
        return user.to_dict()
    if request.method == 'DELETE':
        user.delete()
        db.session.commit()
        return redirect("/api/users")
    if request.method == 'PUT':
        user = user.to_dict()
        print(user)
        if not request.is_json:
            return jsonify({"msg": "Missing JSON in request"}), 400
        user.username = request.json.get('username', None) or user.username
        #user.password = request.json.get('password', None) or user.password
        # user.password2 = request.json.get('password2', None) or user.password2
        user.firstname = request.json.get('firstname', None) or user.firstname
        user.lastname = request.json.get("lastname", None) or user.lastname
        user.email = request.json.get('email', None) or user.email
        user.fullname = request.json.get('fullname', None) or user.fullname
        user.website = request.json.get('website', None) or user.website
        user.bio = request.json.get('bio', None) or user.bio
        user.phone = request.json.get('phone', None) or user.phone
        user.gender = request.json.get('gender', None) or user.gender
        user.updated_at = datetime.now(),

        db.session.commit()
        # return redirect('/api/users')
        return {"current_user_id": current_user.id}
