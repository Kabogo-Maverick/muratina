#in here we will create the auth routes

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import User
from app.auth.utils import hash_password, verify_password, create_access_token

# then we will create a router for authentication
router = APIRouter(
    prefix="/auth",
    tags=["auth"]
)

# then we create a dependency to get the database session
# dependency is a function that can be used to provide
#     a value to the path operation functions

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# 1. Register route endpoint for user registration
@router.post("/register")
def register(email: str, password: str, db: Session = Depends(get_db)):
    # Check if user exists
    existing_user = db.query(User).filter(User.email == email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # Hash password and create user
    hashed_pwd = hash_password(password)
    user = User(email=email, password=hashed_pwd, is_admin=False)
    db.add(user)
    db.commit()
    db.refresh(user)
    return {"message": "User registered successfully", "user_id": user.id}

# 2. Login route endpoint for user authentication
@router.post("/login")

def login(email: str, password: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == email).first()
    if not user or not verify_password(password, user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    # Generate token
    token = create_access_token({"sub": user.email, "is_admin": user.is_admin}) 
    return {"access_token": token, "token_type": "bearer"}