import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo">Nektar</div>

        <nav>
          <a href="#">Overview</a>
          <a href="#">Orders</a>
          <a href="#">Restaurants</a>
          <a href="#">Profile</a>
        </nav>

        <button className="logout">Logout</button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main">

        <header className="topbar">
          <h1>Dashboard</h1>
          <p>Welcome back 👋</p>
        </header>

        {/* STATS */}
        <section className="stats">

          <div className="card">
            <h3>120</h3>
            <p>Orders</p>
          </div>

          <div className="card">
            <h3>35</h3>
            <p>Restaurants</p>
          </div>

          <div className="card">
            <h3>98%</h3>
            <p>Success Rate</p>
          </div>

        </section>

        {/* ACTIVITY */}
        <section className="activity">
          <h2>Recent Activity</h2>

          <div className="item">✔ Order #102 delivered</div>
          <div className="item">✔ New restaurant added</div>
          <div className="item">✔ Payment received</div>
        </section>

      </main>

    </div>
  );
}

export default Dashboard;