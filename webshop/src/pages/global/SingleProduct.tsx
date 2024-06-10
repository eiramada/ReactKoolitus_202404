import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import StarRating from "../../components/StarRating";
import { Product } from "../../models/Product";
import NotFound from "./NotFound";

function SingleProduct() {
  const { productTitle } = useParams();

  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const product = products.find(
    (p) =>
      p.title.replaceAll(" ", "-").replaceAll(",", "").toLowerCase() ===
      productTitle
  );
  const url = process.env.REACT_APP_PRODUCTS_DB_URL;

  useEffect(() => {
    if (url === undefined) {
      return;
    }
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
