import "../styles/register.css";

function Register() {
  return (
    <div className="auth-container">

      <div className="auth-box">

        <h2>Create Account</h2>
        <p>Join Nektar Ratish today</p>

        <form>

          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email"
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
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