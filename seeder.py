# PK has been using this file to test functions for seeding db.
from faker import Faker
from datetime import timedelta, date
from random import randint, seed

seed(1)
fake = Faker()


print("username = ", fake.simple_profile()["username"])
print("first_name = ", fake.first_name())
print("last_name = ", fake.last_name())
DOB = fake.date_of_birth(minimum_age=13, maximum_age=100)
print("DOB = ", DOB)
created_at = fake.date_between_dates(date_start=DOB+timedelta(days=12*365))
print("created_at = ", created_at)
print("updated_at = ", fake.date_between_dates(date_start=created_at))
