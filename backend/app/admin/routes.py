from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import Order
from app.schemas import OrderUpdate
from app.auth.dependencies import get_current_user

router = APIRouter(prefix="/admin", tags=["Admin"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# 🔒 ADMIN CHECK
def admin_only(user):
    if not user["is_admin"]:
        raise HTTPException(status_code=403, detail="Not authorized")


# 🔹 VIEW ALL ORDERS
@router.get("/orders")
def get_all_orders(db: Session = Depends(get_db), user=Depends(get_current_user)):
    admin_only(user)
    return db.query(Order).all()


# 🔹 UPDATE ORDER STATUS
@router.put("/orders/{order_id}")
def update_order(order_id: int, data: OrderUpdate, db: Session = Depends(get_db), user=Depends(get_current_user)):
    admin_only(user)

    order = db.query(Order).filter(Order.id == order_id).first()
    order.status = data.status

    db.commit()
    db.refresh(order)

    return order