<!-- ENTER THE BACKEND DIR -->
cd backend



<!-- CREATE VIRTUAL ENV -->
python -m venv venv



<!-- ACTIVATE VIRTUAL ENV -->
venv\Scripts\activate

        
uvicorn app.main:app --reload

<!-- INSTALL DEPENDENCIES -->
pip install fastapi uvicorn sqlalchemy passlib[bcrypt] python-jose

What each does:
fastapi → backend framework
uvicorn → runs the server
sqlalchemy → database ORM
passlib → password hashing
python-jose → JWT authentication




WHAT ILL WORK ON LATER
🚀 STEP 4 (NEXT LEVEL UPGRADE — OPTIONAL BUT POWERFUL)

Right now you're at “working app” stage.

We can upgrade to PRO level architecture:

🔥 Instead of reload → global auth state (Context API)
Navbar updates instantly
No reloads ever
Real SaaS architecture

OR

🔥 Protected routes
Block /orders if not logged in
Auto redirect to login

OR

🔥 User dropdown menu (like Uber Eats)
Profile
Settings
Logout in dropdown