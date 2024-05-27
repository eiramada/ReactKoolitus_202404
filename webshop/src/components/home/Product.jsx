import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/HomePage.module.css";

//({product}) --> lühendatud versioon (props) variandist, object destructing
function Product({ product }) {
  function addToCart(product) {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];

    const index = cartLS.findIndex((p) => p === product);
    const foundProduct = cartLS.find((p) => p.toode.id === product.id);
    if (foundProduct !== undefined) {
      cartLS[index] = "";
      foundProduct.kogus++;
    } else {
      cartLS.push({ kogus: 1, toode: product });
    }

    localStorage.setItem("cart", JSON.stringify(cartLS));
  }

  return (
    <div className={styles.product} key={product.id}>
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
  );
}

export default Product;
