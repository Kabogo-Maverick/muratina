import "../styles/home.css";
import logo from "../images/logo.jpg";
import image1 from "../images/image1.jpg";

function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">

        {/* LEFT */}
        <div className="hero-left">

          <div className="tag">
            Premium Traditional Brew
          </div>

          <h1>
            Muratina<br />
            Reimagined for Today.
          </h1>

          <p>
            Experience authentic Kenyan traditional Muratina,
            crafted with heritage, purity, and modern delivery convenience.
            From culture to your doorstep.
          </p>

          <div className="cta">
            <button className="btn primary">Order Now</button>
            <button className="btn outline">Explore Menu</button>
          </div>

          <div className="mini-info">
            <div>
              <h4>100% Natural</h4>
              <p>No additives</p>
            </div>

            <div>
              <h4>24h Delivery</h4>
              <p>Fresh batches</p>
            </div>

            <div>
              <h4>Premium Taste</h4>
              <p>Authentic recipe</p>
            </div>
          </div>

        </div>

        {/* RIGHT VISUAL */}
        <div className="hero-right">

          <div className="glass-card card1">
            <img src={image1} alt="" />
            <span>Muratina Classic</span>
          </div>

          <div className="main-image">
            <img src={logo} alt="hero" />
          </div>

          <div className="glass-card card2">
            <p>🔥 Fresh Batch Today</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;