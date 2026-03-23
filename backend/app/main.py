# necessary imports because main.py is the entry point of the application
from fastapi import FastAPI
from app.database import engine, Base
from app.auth.routes import router as auth_router

#create the database tables
Base.metadata.create_all(bind=engine)

#initialize the FastAPI app
app = FastAPI(title="Ratish API")

# Include auth routes
app.include_router(auth_router)

# define a simple route to test the API
@app.get('/')
def read_root():
    return {"message": "Welcome to the MAvo RAtish!"}    