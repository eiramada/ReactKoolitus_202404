import React, { useState } from "react";
import productsFromFile from "./../../data/products.json";
import { Link } from "react-router-dom";

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  function addToCart(product) {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    cartLS.push(product);
    localStorage.setItem("cart", JSON.stringify(cartLS));
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img style={{ width: "100px" }} src={product.image} alt="" />
          <div>{product.title}</div>
          <div>{product.price} €</div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <Link to={`/product/${product.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
