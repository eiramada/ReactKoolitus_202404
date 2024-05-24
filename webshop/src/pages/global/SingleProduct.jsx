import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "../../components/StarRating";
import NotFound from "./NotFound";
import { Spinner } from "react-bootstrap";

function SingleProduct() {
  const { productTitle } = useParams();

  const [isLoading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);
  const product = products.find(
    (p) =>
      p.title.replaceAll(" ", "-").replaceAll(",", "").toLowerCase() ===
      productTitle
  );
  const url = process.env.REACT_APP_PRODUCTS_DB_URL;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json || []);
        setLoading(false);
      });
  }, [url]);

  if (isLoading) {
    return <Spinner />;
  }

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
