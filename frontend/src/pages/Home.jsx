import "../styles/home.css";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";

function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <h1>Nektar Ratish</h1>

          <p>
            Premium delivery experience. Fast. Minimal. Reliable.
          </p>

          <button className="cta">Explore Menu</button>
        </div>

        <div className="hero-right">
          <img src={image1} className="hero-img" />
        </div>
      </section>

      {/* GRID SECTION */}
      <section className="grid">
        <div className="card">
          <img src={image2} />
          <p>Fresh Meals</p>
        </div>

        <div className="card">
          <img src={image3} />
          <p>Fast Delivery</p>
        </div>

        <div className="card">
          <img src={image4} />
          <p>Premium Quality</p>
        </div>
      </section>

    </div>
  );
}

export default Home;