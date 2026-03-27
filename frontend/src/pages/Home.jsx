import "../styles/home.css";
import logo from "../images/logo.jpg";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";

function Home() {
  return (
    <div className="home">

      {/* NAV HERO WRAPPER */}
      <section className="hero">

        {/* LEFT CONTENT */}
        <div className="hero-left">

          <div className="brand">
            <img src={logo} alt="logo" />
            <span>Nektar Ratish</span>
          </div>

          <h1>
            Fast. Clean. <br />
            Delivered instantly.
          </h1>

          <p>
            Order food, groceries, and essentials from your favorite places —
            delivered to your door in minutes. A modern delivery experience built for speed.
          </p>

          <div className="cta">
            <button className="btn primary">Get Started</button>
            <button className="btn outline">Explore</button>
          </div>

          <div className="stats">
            <div>
              <h3>10k+</h3>
              <p>Users</p>
            </div>
            <div>
              <h3>500+</h3>
              <p>Restaurants</p>
            </div>
            <div>
              <h3>24/7</h3>
              <p>Delivery</p>
            </div>
          </div>

        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="hero-right">
          <img src={image1} className="img img1" />
          <img src={image2} className="img img2" />
          <img src={image3} className="img img3" />
          <img src={image4} className="img img4" />
        </div>

      </section>

      {/* FEATURES SECTION */}
      <section className="features">

        <div className="feature-card">
          ⚡ <h3>Instant Delivery</h3>
          <p>Get what you want in minutes, not hours.</p>
        </div>

        <div className="feature-card">
          🍔 <h3>Top Restaurants</h3>
          <p>Order from the best local food spots.</p>
        </div>

        <div className="feature-card">
          📍 <h3>Live Tracking</h3>
          <p>Know exactly where your order is.</p>
        </div>

      </section>

    </div>
  );
}

export default Home;