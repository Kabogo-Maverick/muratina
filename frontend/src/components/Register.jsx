import { useState } from "react";
import { registerUser } from "../api/auth";
import "../styles/register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const data = await registerUser({ email, password });

    console.log("REGISTER RESPONSE:", data);

    if (data.user_id) {
      alert("Registered successfully");

      // redirect to login
      window.location.href = "/login";
    } else {
      alert(data.detail || "Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create Account</h2>
        <p>Join Nektar Ratish today</p>

        <form onSubmit={handleRegister}>
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

          <button type="submit">Register</button>
        </form>

        <p className="switch">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;