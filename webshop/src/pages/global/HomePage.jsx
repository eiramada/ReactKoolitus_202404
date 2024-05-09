import React, { useState } from "react";
import productsFromFile from "./../../data/products.json";
import cart from "./../../data/cart.json";

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  function addToCart(product) {
    cart.push(product);
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img style={{ width: "100px" }} src={product.image} alt="" />
          <div>{product.title}</div>
          <div>{product.price}</div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
