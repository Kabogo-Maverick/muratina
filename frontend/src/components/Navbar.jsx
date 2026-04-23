import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  // 🔥 CHECK LOGIN STATE (runs on load + when storage changes)
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkAuth();

    // update navbar instantly when login/logout happens in other components
    window.addEventListener("storage", checkAuth);

    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo" onClick={() => navigate("/")}>
        Nektar Ratish
      </div>

      {/* LINKS */}
      <div className={`links ${open ? "active" : ""}`}>

        {/* ALWAYS VISIBLE */}
        <a href="/">Home</a>
        <a href="/products">Products</a>

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

      {/* MOBILE MENU */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

    </nav>
  );
}

export default Navbar;