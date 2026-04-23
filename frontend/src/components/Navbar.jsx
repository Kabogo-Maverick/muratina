import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  // 🔥 CHECK LOGIN STATE
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">

      <div className="logo" onClick={() => navigate("/")}>
        Nektar Ratish
      </div>

      <div className={`links ${open ? "active" : ""}`}>

        <a href="/">Home</a>

        {/* BEFORE LOGIN */}
        {!isLoggedIn && (
          <>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </>
        )}

        {/* AFTER LOGIN */}
        {isLoggedIn && (
          <>
            <a href="/orders">Orders</a>
            <a href="/dashboard">Dashboard</a>

            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}

      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

    </nav>
  );
}

export default Navbar;