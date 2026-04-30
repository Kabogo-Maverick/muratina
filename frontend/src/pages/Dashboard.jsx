import { useState } from "react";
import "../styles/dashboard.css";

const dummyOrders = [
  { id: 1, product: "3 Litres", price: 450, status: "Pending", user: "John" },
  { id: 2, product: "10 Litres", price: 1500, status: "Dispatched", user: "Mary" },
  { id: 3, product: "5 Litres", price: 750, status: "Packed", user: "Alex" }
];

function Dashboard() {
  const [orders, setOrders] = useState(dummyOrders);

  const isAdmin = true; // 🔥 change later from backend

  const updateStatus = (id, newStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: newStatus } : o))
    );
  };

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <h2 className="logo">Nektar</h2>

          <nav>
            <a className="active">Overview</a>
            <a>Orders</a>
            <a>Profile</a>
          </nav>
        </div>

        <button className="logout">Logout</button>
      </aside>

      {/* MAIN */}
      <main className="main">

        {/* HEADER */}
        <div className="topbar">
          <div>
            <h1>{isAdmin ? "Admin Dashboard" : "My Dashboard"}</h1>
            <p>
              {isAdmin
                ? "Manage and track all customer orders"
                : "Track your orders in real time"}
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="stats">
          <div className="card">
            <h3>{orders.length}</h3>
            <p>Total Orders</p>
          </div>

          <div className="card">
            <h3>{orders.filter(o => o.status === "Delivered").length}</h3>
            <p>Delivered</p>
          </div>

          <div className="card">
            <h3>{orders.filter(o => o.status !== "Delivered").length}</h3>
            <p>Active Orders</p>
          </div>
        </div>

        {/* ORDERS */}
        <div className="orders-section">
          <div className="orders-header">
            <h2>Orders</h2>
          </div>

          <table className="orders-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product</th>
                {isAdmin && <th>User</th>}
                <th>Price</th>
                <th>Status</th>
                {isAdmin && <th>Update</th>}
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>#{order.id}</td>
                  <td>{order.product}</td>
                  {isAdmin && <td>{order.user}</td>}
                  <td>Ksh {order.price}</td>

                  <td>
                    <span className={`status ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>

                  {isAdmin && (
                    <td>
                      <select
                        value={order.status}
                        onChange={(e) =>
                          updateStatus(order.id, e.target.value)
                        }
                      >
                        <option>Pending</option>
                        <option>Packed</option>
                        <option>Dispatched</option>
                        <option>Delivered</option>
                      </select>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}

export default Dashboard;