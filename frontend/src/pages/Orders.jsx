import { useState } from "react";
import "../styles/orders.css";

import img500 from "../images/500.png";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img5 from "../images/5.png";
import img10 from "../images/10.png";
import img20 from "../images/20.png";

/* PRODUCTS */
const products = [
  { name: "500ml", price: 80, img: img500 },
  { name: "1 Litre", price: 150, img: img1 },
  { name: "2 Litres", price: 300, img: img2 },
  { name: "3 Litres", price: 450, img: img3 },
  { name: "5 Litres", price: 750, img: img5 },
  { name: "10 Litres", price: 1500, img: img10 },
  { name: "20 Litres", price: 3000, img: img20 }
];

/* DELIVERY ZONES (FROM KAHAWA SUKARI) */
const zones = [
  { name: "Kahawa Sukari", fee: 0 },
  { name: "Ruiru", fee: 100 },
  { name: "Kahawa West", fee: 150 },
  { name: "Thika Road", fee: 200 },
  { name: "Juja", fee: 250 },
  { name: "Nairobi CBD", fee: 300 }
];

function Orders() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [deliveryType, setDeliveryType] = useState("pickup");
  const [selectedZone, setSelectedZone] = useState(null);
  const [quantity, setQuantity] = useState(1);

  /* CALCULATIONS */
  const deliveryFee =
    deliveryType === "delivery" && selectedZone
      ? selectedZone.fee
      : 0;

  const total = selectedProduct.price * quantity + deliveryFee;

  return (
    <div className="orders-page">

      <h1>Place Your Order</h1>

      <div className="orders-container">

        {/* LEFT SIDE */}
        <div className="order-form">

          {/* PRODUCT SELECT */}
          <label>Select Product</label>
          <select
            onChange={(e) =>
              setSelectedProduct(
                products.find(p => p.name === e.target.value)
              )
            }
          >
            {products.map((p) => (
              <option key={p.name} value={p.name}>
                {p.name} - Ksh {p.price}
              </option>
            ))}
          </select>

          {/* IMAGE PREVIEW */}
          <div className="preview">
            <img src={selectedProduct.img} alt="preview" />
          </div>

          {/* QUANTITY */}
          <label>Quantity</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />

          {/* DELIVERY TYPE */}
          <label>Delivery Option</label>
          <div className="delivery-options">
            <button
              className={deliveryType === "pickup" ? "active" : ""}
              onClick={() => setDeliveryType("pickup")}
            >
              Pickup
            </button>

            <button
              className={deliveryType === "delivery" ? "active" : ""}
              onClick={() => setDeliveryType("delivery")}
            >
              Delivery
            </button>
          </div>

          {/* LOCATION GRID */}
          {deliveryType === "delivery" && (
            <>
              <label>Select Location</label>

              <div className="zone-grid">
                {zones.map((zone) => (
                  <div
                    key={zone.name}
                    className={`zone ${
                      selectedZone?.name === zone.name ? "selected" : ""
                    }`}
                    onClick={() => setSelectedZone(zone)}
                  >
                    <h4>{zone.name}</h4>
                    <p>Ksh {zone.fee}</p>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>

        {/* RIGHT SIDE (SUMMARY) */}
        <div className="order-summary">

          <h2>Order Summary</h2>

          <p><strong>Product:</strong> {selectedProduct.name}</p>
          <p><strong>Price:</strong> Ksh {selectedProduct.price}</p>
          <p><strong>Quantity:</strong> {quantity}</p>

          <p><strong>Delivery:</strong> {deliveryType}</p>

          {deliveryType === "delivery" && selectedZone && (
            <p><strong>Location:</strong> {selectedZone.name}</p>
          )}

          <hr />

          <p>Subtotal: Ksh {selectedProduct.price * quantity}</p>
          <p>Delivery Fee: Ksh {deliveryFee}</p>

          <h3>Total: Ksh {total}</h3>

          <button className="confirm-btn">
            Confirm Order
          </button>

        </div>

      </div>

    </div>
  );
}

export default Orders;