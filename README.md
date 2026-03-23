<!-- ENTER THE BACKEND DIR -->
cd backend



<!-- CREATE VIRTUAL ENV -->
python -m venv venv



<!-- ACTIVATE VIRTUAL ENV -->
venv\Scripts\activate



<!-- INSTALL DEPENDENCIES -->
pip install fastapi uvicorn sqlalchemy passlib[bcrypt] python-jose

What each does:
fastapi → backend framework
uvicorn → runs the server
sqlalchemy → database ORM
passlib → password hashing
python-jose → JWT authentication