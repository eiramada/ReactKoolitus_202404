import Button from "@mui/material/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/HomePage.css";
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
      <div className="button-group">
        <Button>Sort A-Z</Button>
        <Button>Sort Z-A</Button>
        <Button>Sort Price asc</Button>
        <Button>Sort Price desc</Button>

        <Button>men's clothing</Button>
        <Button>jewelery</Button>
        <Button>electronics</Button>
      </div>
      <div className="products">
        {products.map((product) => (
          <div className="home-product" key={product.id}>
            <img style={{ width: "100px" }} src={product.image} alt="" />
            <div>
              {product.title.length > 50
                ? product.title.substring(0, 50) + "..."
                : product.title}
            </div>
            <div>{product.price.toFixed(2)} €</div>
            <Button onClick={() => addToCart(product)} variant="contained">
              Add to Cart
            </Button>
            <Link
              to={`/product/${product.title
                .replaceAll(" ", "-")
                .replaceAll(",", "")
                .toLowerCase()}`}
            >
              <Button variant="outlined">View Details</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
