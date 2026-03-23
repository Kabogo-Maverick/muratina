#import some utilites for authentication

from datetime import datetime, timedelta
from passlib.context import CryptContext
from jose import jwt 

#secret key used to encode and decode the JWT token
SECRET_KEY = "myownkey123"  
#algorithm used to encode the JWT token

ALGORITHM = "HS256"

#expiration time of the JWT token        
ACCESS_TOKEN_EXPIRE_MINUTES = 60
#PASSWORD CONTEXT
pwd_context = CryptContext(schemes=["bcrypt"], deprecated = "auto")




# 1️⃣ Hash a plain password
def hash_password(password: str) -> str:
    # Truncate to 72 bytes to prevent bcrypt errors
    truncated = password.encode("utf-8")[:72]
    return pwd_context.hash(truncated)




# 2️⃣ Verify password
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)




# 3️⃣ Create JWT access token
def create_access_token(data: dict):
    to_encode = data.copy()
    # optionally add expiry here
    # expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    # to_encode.update({"exp": expire})
    token = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return token

# /////////////////////////////////////////

#  Explanation:

 # hash_password → securely hashes passwords (no plain text storage)
 # verify_password → compares login input to hashed password
 # create_access_token → generates a JWT token with expiration

# ////////////////////////////////////////////