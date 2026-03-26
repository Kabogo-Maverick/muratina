#in here we will create the auth routes

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import User
from app.auth.utils import hash_password, verify_password, create_access_token

from app.schemas import UserCreate, UserLogin


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
def register(user: UserCreate, db: Session = Depends(get_db)):
    # check if user exists
    existing_user = db.query(User).filter(User.email == user.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # hash password
    hashed_pwd = hash_password(user.password)

    # create user
    new_user = User(
        email=user.email,
        password=hashed_pwd,
        is_admin=False
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "User registered successfully",
        "user_id": new_user.id
    }




# 2. Login route endpoint for user authentication
@router.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.email == user.email).first()

    if not db_user or not verify_password(user.password, db_user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token({
        "sub": db_user.email,
        "is_admin": db_user.is_admin
    })

    return {
        "access_token": token,
        "token_type": "bearer"
    }