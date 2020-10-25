from dotenv import load_dotenv
from datetime import date, datetime, timedelta
from faker import Faker
from random import randint, seed
from werkzeug.security import generate_password_hash, check_password_hash

seed(1)
fake = Faker()
load_dotenv()

from starter_app import app, db
from starter_app.models import User

## number of users, including demo_user
n1 = 10

with app.app_context():
    db.drop_all()
    db.create_all()
    db.session.add(User(
      user_name="demo_user",
      first_name="Demo",
      last_name="User",
      DOB=date(1980, 10, 31),
      password="password",
      created_at=date(2000, 1, 15),
      updated_at=date(2005, 2, 25)
      ))
    for _ in range(n1 - 1):
        DOB = fake.date_of_birth(minimum_age=14, maximum_age=100)
        created_at = fake.date_time_between(start_date=DOB)
        db.session.add(User(
            user_name=fake.simple_profile()["username"],
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            DOB=DOB,
            password="password",
            created_at=created_at,
            updated_at=fake.date_time_between(start_date=created_at)
        ))
    db.session.commit()
