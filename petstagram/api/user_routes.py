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
        print("==========================================================================")
        print(user)
        print(user.to_dict())
        if not request.is_json:
            return jsonify({"msg": "Missing JSON in request"}), 400
        user.user_name = request.json.get('username', None) or user.to_dict()["user_name"]
        # user.password = request.json.get('password', None) or user.password
        # user.password2 = request.json.get('password2', None) or user.password2
        user.first_name = request.json.get('fullname', None) or user.to_dict()["first_name"]
        user.last_name = request.json.get("fullname", None) or user.to_dict()["last_name"]
        user.email = request.json.get('email', None) or user.to_dict()["email"]
        user.full_name = request.json.get('fullname', None) or user.full_name
        user.website = request.json.get('website', None) or user.to_dict()["website"]
        user.bio = request.json.get('bio', None) or user.to_dict()["bio"]
        user.phone = request.json.get('phone', None) or user.to_dict()["phone"]
        user.gender = request.json.get('gender', None) or user.to_dict()["gender"]
        user.updated_at = datetime.now(),

        db.session.commit()
        # return redirect('/api/users')
        return {"current_user_id": user.id}
