# routes for user-related operations
# This file defines the API endpoints for user management

from fastapi import APIRouter, Depends, HTTPException   # ✅ FIXED
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import User
from app.auth.dependencies import get_current_user
from app.schemas import UserUpdate

router = APIRouter(prefix="/users", tags=["users"])

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# 🔹 GET CURRENT USER
@router.get("/me")
def get_me(current_user: User = Depends(get_current_user)):
    return {
        "id": current_user.id,
        "email": current_user.email,
        "is_admin": current_user.is_admin
    }


# 🔹 UPDATE USER
@router.put("/me")
def update_user(
    user_update: UserUpdate,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)   # dict
):
    # DEBUG
    print("CURRENT USER:", current_user)

    user_email = current_user.get("email")

    if not user_email:
        raise HTTPException(status_code=400, detail="Invalid token data")

    user = db.query(User).filter(User.email == user_email).first()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    try:
        user.email = user_update.email
        db.commit()
        db.refresh(user)

        return {
            "message": "User updated successfully",
            "email": user.email
        }

    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

# 🔹 DELETE USER
@router.delete("/me")
def delete_user(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    user = db.query(User).filter(User.id == current_user.id).first()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    db.delete(user)
    db.commit()

    return {"message": "User deleted successfully"}