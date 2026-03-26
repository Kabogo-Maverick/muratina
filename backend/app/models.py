#sqlalchemy models for the application
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from app.database import Base
from sqlalchemy.orm import relationship

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    is_admin = Column(Boolean, default=False)


    # Relationship → one user has many orders
    orders = relationship("Order", back_populates="owner")


# 🛒 ORDER MODEL
class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    item = Column(String)
    quantity = Column(Integer)
    status = Column(String, default="received")

    user_id = Column(Integer, ForeignKey("users.id"))

    # Relationship → order belongs to a user
    owner = relationship("User", back_populates="orders")