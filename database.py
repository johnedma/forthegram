from dotenv import load_dotenv
from datetime import date, datetime, timedelta
from faker import Faker
from random import randrange, seed
from werkzeug.security import generate_password_hash, check_password_hash

seed(1)
fake = Faker()
load_dotenv()

from starter_app import app, db
from starter_app.models import User, Post

with app.app_context():
    db.drop_all()
    db.create_all()

    # number of users, including demo_user
    n_user = 5
    demo = {
      "user_name": "demo_user",
      "first_name": "Demo",
      "last_name": "User",
      "DOB": date(1980, 10, 31),
      "password": "password",
      "created_at": date(2000, 1, 15),
      "updated_at": date(2005, 2, 25)
      }
    db.session.add(User(**demo))
    user_t = [demo["created_at"]]
    for _ in range(n_user - 1):
        DOB = fake.date_of_birth(minimum_age=14, maximum_age=100)
        created_at = fake.date_time_between(start_date=DOB)
        user_t.append(created_at)
        db.session.add(User(
            user_name=fake.simple_profile()["username"],
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            DOB=DOB,
            password="password",
            created_at=created_at,
            updated_at=fake.date_time_between(start_date=created_at)
        ))

    #avg number of posts per user
    n_post_per_user = 5
    n_post = n_user * n_post_per_user

    for _ in range(n_post):
        post_t = []
        user_id = randrange(n_user)
        created_at = fake.date_time_between(start_date=user_t[user_id])
        post_t.append(created_at)
        db.session.add(Post(
            user_id=user_id + 1,
            photo_url=fake.isbn10(),
            created_at=created_at,
            updated_at=created_at,
            caption=fake.paragraph(nb_sentences=2, variable_nb_sentences=True)
        ))
    db.session.commit()
