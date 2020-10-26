from dotenv import load_dotenv
from datetime import date, datetime, timedelta
from faker import Faker
from random import randrange, seed, random
from werkzeug.security import generate_password_hash, check_password_hash

seed(1)
fake = Faker()
load_dotenv()

from starter_app import app, db
from starter_app.models import User, Post, Comment, likes

with app.app_context():
    db.drop_all()
    db.create_all()
    # number of users, including demo_user
    n_user = 2
    follow_prob = 1.0
    users = [{
      "user_name": "demo_user",
      "first_name": "Demo",
      "last_name": "User",
      "DOB": datetime(1980, 10, 31),
      "password": "password",
      "created_at": datetime(2000, 1, 15),
      "updated_at": datetime(2005, 2, 25),
      }]
    user_objs = [User(**users[0])]
    for _ in range(1, n_user):
        DOB = fake.date_of_birth(minimum_age=14, maximum_age=100)
        created_at = fake.date_time_between(start_date=DOB)
        next_user = {
            "user_name": fake.simple_profile()["username"],
            "first_name": fake.first_name(),
            "last_name": fake.last_name(),
            "DOB": DOB,
            "password": "password",
            "created_at": created_at,
            "updated_at": fake.date_time_between(start_date=created_at)
        }
        users.append(next_user)
        user_objs.append(User(**next_user))
    print("len(users) = ", len(users))
    for user1 in users:
        user_obj = User(**user1)
        followers = []
        for user2 in users:
            if user1 != user2 and random() < follow_prob:
                print("user1 = ", user1)
                print("user2 = ", user2)
                followers.append(User(**user2))
        print("followers = ", followers)
        print("len(followers) = ", len(followers))
        # user_obj.followers = followers
        # db.session.add(User(
        #     # followers=followers,
        #     **user1))
        db.session.add(user_obj)
    db.session.commit()
    # db.session.commit()

    # number of users, including demo_user
    # n_user = 3
    # demo = {
    #   "user_name": "demo_user",
    #   "first_name": "Demo",
    #   "last_name": "User",
    #   "DOB": datetime(1980, 10, 31),
    #   "password": "password",
    #   "created_at": datetime(2000, 1, 15),
    #   "updated_at": datetime(2005, 2, 25)
    #   }
    # demo_user = User(**demo)
    # # db.session.add(demo_user)
    # user_t = [demo["created_at"]]
    # for _ in range(n_user - 1):
    #     DOB = fake.date_of_birth(minimum_age=14, maximum_age=100)
    #     created_at = fake.date_time_between(start_date=DOB)
    #     user_t.append(created_at)
    #     db.session.add(User(
    #         user_name=fake.simple_profile()["username"],
    #         first_name=fake.first_name(),
    #         last_name=fake.last_name(),
    #         DOB=DOB,
    #         password="password",
    #         followers=[demo_user],
    #         created_at=created_at,
    #         updated_at=fake.date_time_between(start_date=created_at)
    #     ))

with app.app_context():

    # avg number of posts per user
    n_post_per_user = 2
    n_post = n_user * n_post_per_user

    post_t = []
    for _ in range(n_post):
        user_id = randrange(n_user)
        created_at = fake.date_time_between(start_date=users[user_id]["created_at"])
        post_t.append(created_at)
        db.session.add(Post(
            user_id=user_id + 1,
            photo_url=fake.isbn10(),
            created_at=created_at,
            updated_at=created_at,
            caption=fake.paragraph(nb_sentences=2, variable_nb_sentences=True),
            # users=[demo_user]
        ))

    db.session.commit()
with app.app_context():

# avg number of comments per post
    n_comment_per_post = 2
    n_comment = n_post * n_comment_per_post

    for _ in range(n_comment):
        comment_t = []
        user_id = randrange(n_user)
        post_id = randrange(n_post)
        t_user = users[user_id]["created_at"]
        t_post = post_t[post_id]
        latest_t = t_user if t_user < t_post else t_post
        created_at = fake.date_time_between(start_date=latest_t)
        comment_t.append(created_at)
        db.session.add(Comment(
            user_id=user_id + 1,
            post_id=post_id + 1,
            created_at=created_at,
            updated_at=created_at,
            content=fake.paragraph(nb_sentences=2, variable_nb_sentences=True)
        ))
    db.session.commit()

    # avg number of likes per post
    # n_like_per_post = 3
    # n_like = n_post * n_like_per_post

    # for _ in range(n_like):
    #     like_t = []
    #     user_id = randrange(n_user)
    #     post_id = randrange(n_post)
    #     t_user = user_t[user_id]
    #     t_post = post_t[post_id]
    #     latest_t = t_user if t_user < t_post else t_post
    #     created_at = fake.date_time_between(start_date=latest_t)
    #     like_t.append(created_at)
    #     db.session.add(Like(
    #         user_id=user_id + 1,
    #         post_id=post_id + 1,
    #         created_at=created_at,
    #     ))

    # avg number of follows per user
    # Following was copied from "Likes", w/intent to change it for "Folows".
    # n_follow_per_user = 3
    # n_follow = n_user * n_follow_per_user

    # for _ in range(n_follow):
    #     like_t = []
    #     user_id = randrange(n_user)
    #     post_id = randrange(n_post)
    #     t_user = user_t[user_id]
    #     t_post = post_t[post_id]
    #     latest_t = t_user if t_user < t_post else t_post
    #     created_at = fake.date_time_between(start_date=latest_t)
    #     like_t.append(created_at)
    #     db.session.add(Follow(
    #         user_id=user_id + 1,
    #         post_id=post_id + 1,
    #         created_at=created_at,
    #     ))


# with app.app_context():
#     db.session.add(tables(follower_id=1, followed=2))
# db.session.commit()
