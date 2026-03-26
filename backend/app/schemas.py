from pydantic import BaseModel

# 🔹 USER
class UserCreate(BaseModel):
    email: str
    password: str


class UserLogin(BaseModel):
    email: str
    password: str


class UserUpdate(BaseModel):
    email: str


# 🔹 ORDER CREATE
class OrderCreate(BaseModel):
    item: str
    quantity: int


# 🔹 ORDER UPDATE (ADMIN)
class OrderUpdate(BaseModel):
    status: str