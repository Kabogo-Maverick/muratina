from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import Order, User
from app.schemas import OrderCreate
from app.auth.dependencies import get_current_user

# This file defines the API endpoints for order management,
router = APIRouter(prefix="/orders", tags=["Orders"])

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# 🔹 CREATE ORDER
@router.post("/create")
def create_order(data: OrderCreate, db: Session = Depends(get_db), user=Depends(get_current_user)):
    db_user = db.query(User).filter(User.email == user["email"]).first()

    new_order = Order(
        item=data.item,
        quantity=data.quantity,
        user_id=db_user.id
    )

    db.add(new_order)
    db.commit()
    db.refresh(new_order)

    return new_order


# 🔹 GET MY ORDERS
@router.get("/my-orders")
def get_my_orders(db: Session = Depends(get_db), user=Depends(get_current_user)):
    db_user = db.query(User).filter(User.email == user["email"]).first()
    orders = db.query(Order).filter(Order.user_id == db_user.id).all()
    return orders