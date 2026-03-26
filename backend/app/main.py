# necessary imports because main.py is the entry point of the application
from fastapi import FastAPI
from app.database import engine, Base


from app.auth.routes import router as auth_router
from app.users.routes import router as users_router
from app.orders.routes import router as orders_router
from app.admin.routes import router as admin_router



#create the database tables
Base.metadata.create_all(bind=engine)

#initialize the FastAPI app
app = FastAPI(title="Ratish API")

# Include auth routes
app.include_router(auth_router)
app.include_router(users_router)
app.include_router(orders_router)
app.include_router(admin_router)

# define a simple route to test the API
@app.get('/')
def read_root():
    return {"message": "Welcome to the MAvo RAtish!"}    