import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = await loginUser({ email, password });

    console.log("LOGIN RESPONSE:", data);

    if (data.access_token) {
      localStorage.setItem("token", data.access_token);

      // 🔥 REDIRECT TO HOME
      navigate("/");
      window.location.reload();
    } else {
      alert(data.detail || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Welcome Back</h2>
        <p>Login to continue to Nektar Ratish</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        <p className="switch">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;