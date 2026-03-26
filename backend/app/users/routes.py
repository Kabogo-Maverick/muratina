# routes for user-related operations
# This file defines the API endpoints for user management, 
# including retrieving user information and updating user details.

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import User
from app.auth.dependencies import get_current_user
from app.schemas import UserUpdate

# Dependency to get DB session
router = APIRouter(prefix="/users", tags=["users"])

# Get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# get current user info
@router.get("/me")
def get_me(user=Depends(get_current_user)):
    return user

# 🔹 UPDATE USER
@router.put("/update")
def update_user(data: UserUpdate, db: Session = Depends(get_db), user=Depends(get_current_user)):
    db_user = db.query(User).filter(User.email == user["email"]).first()
    db_user.email = data.email
    db.commit()
    db.refresh(db_user)
    return {"message": "User updated"}


# 🔹 DELETE USER
@router.delete("/delete")
def delete_user(db: Session = Depends(get_db), user=Depends(get_current_user)):
    db_user = db.query(User).filter(User.email == user["email"]).first()
    db.delete(db_user)
    db.commit()
    return {"message": "User deleted"}