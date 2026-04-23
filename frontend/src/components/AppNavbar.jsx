import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/appNavbar.css";
import logo from "../images/logo.jpg";

function AppNavbar() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const goTo = (path) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <nav className="nav">

      {/* BRAND */}
      <div className="nav__brand" onClick={() => goTo("/")}>
        <img src={logo} alt="logo" />
        <h1>Nektar Ratish</h1>
      </div>

      {/* LINKS */}
      <div className={`nav__links ${open ? "active" : ""}`}>

        <a onClick={() => goTo("/")}>Home</a>
        <a onClick={() => goTo("/products")}>Products</a>

        {!isLoggedIn && (
          <>
            <a onClick={() => goTo("/login")}>Login</a>
            <a onClick={() => goTo("/register")}>Register</a>
          </>
        )}

        {isLoggedIn && (
          <>
            <a onClick={() => goTo("/orders")}>Orders</a>
            <a onClick={() => goTo("/dashboard")}>Dashboard</a>

            <button className="logout" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

    </nav>
  );
}

export default AppNavbar;