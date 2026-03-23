# first do some import
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

#SQLite simple db
DATABASE_URL = "sqlite:///./muratina.db"

#afterwards we create the engine which basically is the connection to the database
engine = create_engine(
    DATABASE_URL, 
    connect_args={"check_same_thread": False} #4 sqlite 2 allow mltple threads to access database
)

#we create a session local class
#used to create session objects used to interact with the database
SessionLocal = sessionmaker(
    autocommit=False, 
    autoflush=False, 
    bind=engine
)

# Base = parent class for all database models (tables)
Base = declarative_base()