from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
# from sqlalchemy.ext.declarative import declarative_base
# from sqlalchemy.schema import Table, Column, ForeignKey, Table

db = SQLAlchemy()

likes = db.Table(
    'likes',
    db.Model.metadata,
    db.Column(
        "user_id", db.Integer, db.ForeignKey("users.id"), primary_key=True
        ),
    db.Column(
        "post_id", db.Integer, db.ForeignKey("posts.id"), primary_key=True
        ),
    db.Column("created_at", db.DateTime, nullable=False)
)

follows = db.Table(
    "follows",
    db.Model.metadata,
    db.Column(
        "follower_id", db.Integer, db.ForeignKey("users.id"), primary_key=True
        ),
    db.Column(
        "followed_id", db.Integer, db.ForeignKey("users.id"), primary_key=True
        ),
    db.Column("created_at", db.DateTime, nullable=False)
    # follower=db.relationship("User", foreign_keys=[follower_id]),
    # followed=db.relationship("User", foreign_keys=[followed_id]),
)


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(40), nullable=False, unique=True)
    first_name = db.Column(db.String(40))
    last_name = db.Column(db.String(40))
    DOB = db.Column(db.Date, nullable=False)
    hashed_password = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    posts = db.relationship("Post", secondary="likes", back_populates="users")
    # users = db.relationship("User", secondary="follows", back_populates="users")
    comments = db.relationship("Comment", back_populates="user")
    # following is for a self-referential many-to-many relationship
    followers = db.relationship("User",
        secondary="follows",
        primaryjoin=id == follows.c.followed_id,
        secondaryjoin=id == follows.c.follower_id,
        backref="followeds"
        )

    def to_dict(self):
        return {
            "id": self.id,
            "user_name": self.user_name,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "DOB": self.DOB,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(
        db.Integer, db.ForeignKey("users.id"), nullable=False
        )
    photo_url = db.Column(db.String(20), unique=True)
    caption = db.Column(db.Text)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    users = db.relationship("User", secondary="likes", back_populates="posts")
    comments = db.relationship("Comment", back_populates="post")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "photo_url": self.photo_url,
            "caption": self.caption,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey("posts.id"), nullable=False)
    content = db.Column(db.Text)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    user = db.relationship("User", back_populates="comments")
    post = db.relationship("Post", back_populates="comments")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "post_id": self.post_id,
            "content": self.content,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }


class DirectMessage(db.Model):
    __tablename__ = 'direct_messages'

    id = db.Column(db.Integer, primary_key=True)
    sender_id = db.Column(
        db.Integer, db.ForeignKey("users.id"), nullable=False
        )
    recipient_id = db.Column(
        db.Integer,
        db.ForeignKey("users.id"),
        nullable=False
        )
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    # figure out how to insert back_populates=
    #   "direct_messages" into following 2 lines
    sender = db.relationship("User", foreign_keys=[sender_id])
    recipient = db.relationship("User", foreign_keys=[recipient_id])

    def to_dict(self):
        return {
            "id": self.id,
            "sender_id": self.sender_id,
            "recipient_id": self.recipient_id,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
