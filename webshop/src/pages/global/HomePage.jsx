import React, { useState } from "react";
import { Link } from "react-router-dom";
import productsFromFile from "./../../data/products.json";

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  function addToCart(product) {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];

    const index = cartLS.findIndex((p) => p === product);
    const foundProduct = cartLS.find((p) => p.toode.id === product.id);
    if (foundProduct !== undefined) {
      //index >= 0 või index !== -1    <-- toodet ja selle indexit ei leitud
      cartLS[index] = "";
      foundProduct.kogus++;
    } else {
      cartLS.push({ kogus: 1, toode: product });
    }

    localStorage.setItem("cart", JSON.stringify(cartLS));
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img style={{ width: "100px" }} src={product.image} alt="" />
          <div>{product.title}</div>
          <div>{product.price.toFixed(2)} €</div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <Link
            to={`/product/${product.title
              .replaceAll(" ", "-")
              .replaceAll(",", "")
              .toLowerCase()}`}
          >
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
