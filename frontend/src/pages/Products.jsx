import "../styles/products.css";

const products = [
  {
    id: 1,
    name: "Chicken Burger",
    price: "Ksh 250",
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086"
  },
  {
    id: 2,
    name: "Pizza Margherita",
    price: "Ksh 600",
    img: "https://images.unsplash.com/photo-1548365328-8b849e5a3f5d"
  },
  {
    id: 3,
    name: "Fried Chicken",
    price: "Ksh 400",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349"
  }
];

function Products() {
  return (
    <div className="products-page">

      <h1>Our Products</h1>
      <p>Browse items (login required to order)</p>

      <div className="product-grid">

        {products.map((item) => (
          <div className="product-card" key={item.id}>

            <img src={item.img} alt={item.name} />

            <h3>{item.name}</h3>
            <p>{item.price}</p>

            <button>View</button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Products;