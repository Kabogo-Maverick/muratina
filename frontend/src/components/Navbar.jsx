import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Nektar Ratish</div>

      <div className="links">
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        <a href="/dashboard">Dashboard</a>
      </div>
    </nav>
  );
}

export default Navbar;