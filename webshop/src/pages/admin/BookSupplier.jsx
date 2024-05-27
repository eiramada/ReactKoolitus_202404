import React, { useEffect, useState } from "react";
import Payment from "../../components/cart/Payment";

function BookSupplier() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/search/mongodb")
      .then((response) => response.json())
      .then((body) => setProducts(body.books));
  }, []);

  return (
    <div>
      <Payment amount={Math.random() * 300} />
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Subtitle</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>{product.title}</td>
              <td>{product.price} €</td>
              <td>{product.subtitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookSupplier;
