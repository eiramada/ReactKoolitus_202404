import React from "react";
import { useParams } from "react-router-dom";
import productsFromFile from "./../../data/products.json";
import NotFound from "./NotFound";
import StarRating from "../../components/StarRating";

function SingleProduct() {
  // const { productId } = useParams();
  // const product = productsFromFile.find((p) => p.id === parseInt(productId));

  const { productTitle } = useParams();
  const product = productsFromFile.find(
    (p) =>
      p.title.replaceAll(" ", "-").replaceAll(",", "").toLowerCase() ===
      productTitle
  );

  if (!product) {
    return <NotFound />;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <div>Price: ${product.price}</div>
      <div>Description: {product.description}</div>
      <div>Category: {product.category}</div>
      <div>
        <StarRating rating={product.rating.rate} />
        Rating: {product.rating.rate} from {product.rating.count} reviews
      </div>
    </div>
  );
}

export default SingleProduct;
