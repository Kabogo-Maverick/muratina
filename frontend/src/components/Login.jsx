import "../styles/Login.css";

function Login() {
  return (
    <div className="auth-container">

      <div className="auth-box">

        <h2>Welcome Back</h2>
        <p>Login to continue to Nektar Ratish</p>

        <form>

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