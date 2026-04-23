# necessary imports because main.py is the entry point of the application
from fastapi import FastAPI
from app.database import engine, Base
from fastapi.middleware.cors import CORSMiddleware

from app.auth.routes import router as auth_router
from app.users.routes import router as users_router
from app.orders.routes import router as orders_router
from app.admin.routes import router as admin_router



#create the database tables
Base.metadata.create_all(bind=engine)

#initialize the FastAPI app
app = FastAPI(title="Ratish API")


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Include auth routes
app.include_router(auth_router)
app.include_router(users_router)
app.include_router(orders_router)
app.include_router(admin_router)

# define a simple route to test the API
@app.get('/')
def read_root():
    return {"message": "Welcome to the MAvo RAtish!"}    