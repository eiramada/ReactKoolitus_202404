import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Payment from "../../components/cart/Payment";
import StarRating from "../../components/StarRating";

function Supplier() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json()) //<--- jsoni asemel saab mida iganes panna, nt html
      .then((body) => setProducts(body));
  }, []);

  return (
    <div>
      <Payment amount={345} />

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>{product.title}</td>
              <td>{product.price.toFixed(2)} €</td>
              <td>{product.description}</td>
              <td>
                <StarRating rating={product.rating.rate} />
                <span>({product.rating.count} reviews)</span>{" "}
              </td>
              <td>
                <Link to={`/admin/edit-product/${product.id}`}>
                  <button>Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Supplier;
