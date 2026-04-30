import "../styles/products.css";
import { useNavigate } from "react-router-dom";

import img500 from "../images/500.png";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img5 from "../images/5.png";
import img10 from "../images/10.png";
import img20 from "../images/20.png";

const products = [
  { id: 1, name: "Muratina 500ml", price: "Ksh 80", volume: "500ml", img: img500 },
  { id: 2, name: "Muratina 1L", price: "Ksh 150", volume: "1 Litre", img: img1 },
  { id: 3, name: "Muratina 2L", price: "Ksh 300", volume: "2 Litres", img: img2 },
  { id: 4, name: "Muratina 3L", price: "Ksh 450", volume: "3 Litres", img: img3 },
  { id: 5, name: "Muratina 5L", price: "Ksh 750", volume: "Best Seller", img: img5, highlight: true },
  { id: 6, name: "Muratina 10L", price: "Ksh 1500", volume: "Party Size", img: img10 },
  { id: 7, name: "Muratina 20L", price: "Ksh 3000", volume: "Bulk Pack", img: img20 }
];

function Products() {
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/orders");
  };

  return (
    <div className="products-page">

      <div className="products-header">
        <h1>Our Muratina Collection</h1>
        <p>Crafted traditionally. Delivered fresh 🍯</p>
      </div>

      <div className="product-grid">
        {products.map((item) => (
          <div
            className={`product-card ${item.highlight ? "highlight" : ""}`}
            key={item.id}
          >

            <div className="image-wrap">
              <img src={item.img} alt={item.name} />
              <span className="badge">{item.volume}</span>
            </div>

            <div className="card-content">
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>

              <button className="btn-order" onClick={handleOrder}>
                Order Now
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Products;