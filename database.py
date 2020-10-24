from dotenv import load_dotenv
from datetime import date, datetime
load_dotenv()

from starter_app import app, db
from starter_app.models import User

with app.app_context():
    db.drop_all()
    db.create_all()
    db.session.add(User(
      user_name="demo_user",
      first_name="Demo",
      last_name="User",
      DOB=date(2020, 10, 31),
      created_at=datetime.now(),
      updated_at=datetime.now()
      ))
    db.session.commit()
