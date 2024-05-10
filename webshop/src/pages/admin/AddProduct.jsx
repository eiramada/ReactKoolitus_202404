import React, { useRef, useState } from 'react'
import productsFromFile from "./../../data/products.json";


function AddProduct() {

  const [message, setMessage] = useState("Add a new product");
  const [products, setProducts] = useState([]);
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const activeRef = useRef();

  return (
    <div>
      


    </div>
  )
}

export default AddProduct