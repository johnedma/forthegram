# PK has been using this file to test functions for seeding db.
from faker import Faker
from datetime import timedelta, date
from random import randint, seed

seed(1)
fake = Faker()

print("caption = ", fake.paragraph(nb_sentences=2, variable_nb_sentences=True))
