import { useEffect, useRef, useState } from "react";
import { Category } from "../../models/Category";
import { Product } from "../../models/Product";

function AddProduct() {
  const [message, setMessage] = useState("Add a new product");
  const [products, setProducts] = useState<Product[]>([]); //usestate & db päring käivad kokku, kuigi tavaliselt on usestate htmliga kokku

  const [idUnique, setIdUnique] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);

  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  const url = process.env.REACT_APP_PRODUCTS_DB_URL || "";
  const categoriesUrl = process.env.REACT_APP_CATEGORIES_DB_URL || "";

  useEffect(() => {
    fetch(categoriesUrl)
      .then((result) => result.json())
      .then((json) => setCategories(json || []));
  }, [categoriesUrl]);

  
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setProducts(json || []));
  }, [url]);

  const validateForm = () => {
    if (!nameRef.current || !priceRef.current) return;

    const name = nameRef.current.value;
    const price = priceRef.current.value;
    if (!name) {
      return "Error: Product must have a name";
    } else if (name[0] !== name[0].toUpperCase()) {
      return "Error: Product name must start with a capital letter";
    } else if (name.includes("/")) {
      return "Error: Product name cannot contain slashes";
    } else if (price && isNaN(Number(price))) {
      return "Error: Price must be numeric";
    } else if (price && Number(price) <= 0) {
      return "Error: Price must be greater than 0";
    }
    return "";
  };

  const checkIdUniqueness = () => {
    const idInput = idRef.current; //see on kummaline koht, aga miskipärast töötab.

    if (idInput === null) {
      return;
    }

    const result = products.find((p) => p.id === Number(idInput.value));
    setIdUnique(result === undefined);
  };

  const addProduct = () => {
    const validationMessage = validateForm();
    if (!idUnique) {
      setMessage("Error: Product ID must be unique");
      return;
    }
    if (validationMessage) {
      setMessage(validationMessage);
    } else {
      const newProduct = {
        id: idRef.current ? Number(idRef.current.value) : 0,
        title: nameRef.current ? nameRef.current.value : "",
        price: priceRef.current ? Number(priceRef.current.value) : 0,
        image: imageRef.current ? imageRef.current.value : "",
        description: descriptionRef.current ? descriptionRef.current.value : "",
        rating: {
          rate: 0,
          count: 0,
        },
        active: true,
        category: categoryRef.current ? categoryRef.current.value : "",
      };

      products.push(newProduct);
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(products),
      });

      setProducts(products);
      setMessage(
        `Product ${nameRef.current ? nameRef.current.value : ""} added!`
      );
      resetFields();
    }
  };

  const resetFields = () => {
    if (idRef.current) idRef.current.value = "";
    if (nameRef.current) nameRef.current.value = "";
    if (priceRef.current) priceRef.current.value = "";
    if (imageRef.current) imageRef.current.value = "";
    if (descriptionRef.current) descriptionRef.current.value = "";
    if (categoryRef.current) categoryRef.current.value = "";
  };

  return (
    <div>
      <br />
      <div>{message}</div> <br />
      <br />
      <label htmlFor="id">ID</label>
      <br />
      <input id="id" ref={idRef} type="number" onChange={checkIdUniqueness} />
      <br />
      <br />
      <label htmlFor="name">Name</label> <br />
      <input id="name" ref={nameRef} type="text" />
      <br /> <br />
      <label htmlFor="price">Price</label>
      <br />
      <input id="price" ref={priceRef} type="number" />
      <br /> <br />
      <label htmlFor="image">Image URL</label> <br />
      <input id="image" ref={imageRef} type="text" />
      <br /> <br />
      <label htmlFor="description">Description</label> <br />
      <input id="description" ref={descriptionRef} type="text" />
      <br /> <br />
      <label htmlFor="category">Category</label> <br />
      <select ref={categoryRef}>
        <option key="0">--- SELECT CATEGORY ---</option>
        {categories.map((c) => (
          <option key={c.name}>{c.name}</option>
        ))}
      </select>
      {/* <input id="category" ref={categoryRef} type="text" /> */}
      <br />
      <br />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default AddProduct;
