import React, { useRef, useState } from "react";
import productsFromFile from "./../../data/products.json";

function AddProduct() {
  const [message, setMessage] = useState("Add a new product");
  const [products, setProducts] = useState(productsFromFile);
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();

  const validateForm = () => {
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    if (!name) {
      return "Error: Product must have a name";
    } else if (name[0] !== name[0].toUpperCase()) {
      return "Error: Product name must start with a capital letter";
    } else if (name.includes("/")) {
      return "Error: Product name cannot contain slashes";
    } else if (price && isNaN(price)) {
      return "Error: Price must be numeric";
    } else if (price && Number(price) <= 0) {
      return "Error: Price must be greater than 0";
    }
    return "";
  };

  const addProduct = () => {
    const validationMessage = validateForm();
    if (validationMessage) {
      setMessage(validationMessage);
    } else {
      const newProduct = {
        id: products.length + 1,
        title: nameRef.current.value,
        price: Number(priceRef.current.value),
        image: imageRef.current.value,
        description: descriptionRef.current.value,
        category: categoryRef.current.value,
      };

      products.push(newProduct);

      setProducts(products);
      setMessage(`Product ${nameRef.current.value} added!`);
      resetFields();
    }
  };

  const resetFields = () => {
    nameRef.current.value = "";
    priceRef.current.value = "";
    imageRef.current.value = "";
    descriptionRef.current.value = "";
    categoryRef.current.value = "";
  };

  return (
    <div>
      <div>{message}</div>
      <label htmlFor="name">Name</label>
      <input id="name" ref={nameRef} type="text" />
      <br />
      <label htmlFor="price">Price</label>
      <input id="price" ref={priceRef} type="number" />
      <br />
      <label htmlFor="image">Image URL</label>
      <input id="image" ref={imageRef} type="text" />
      <br />
      <label htmlFor="description">Description</label>
      <input id="description" ref={descriptionRef} type="text" />
      <br />
      <label htmlFor="category">Category</label>
      <input id="category" ref={categoryRef} type="text" />
      <br />
      <br />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default AddProduct;
