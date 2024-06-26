import React, { useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";

function MaintainCategories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const categoryRef = useRef();
  const url = process.env.REACT_APP_CATEGORIES_DB_URL;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setCategories(json || []);
        setLoading(false);
      });
  }, [url]); //ära remove'i dependcy array'd, see läheb loopima ja firebase hakkab raha küsima.
  //, [] - sinna tuleb väliseid muutujaid lisada, sest useEffect kardab, et äkki muutujad muutuvad.
  //Ja kui muutujad muutuvad, siis ta läheb uuesti useeffecti tegema. Ka juhul, kui meil URL tegelt ei muutu

  function add() {
    const newCategory = { name: categoryRef.current.value.toLowerCase() };
    categories.push(newCategory);
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(categories),
    });
    setCategories(categories.slice());
    //toast?
    categoryRef.current.value = "";
  }

  function remove(index) {
    categories.splice(index, 1);
    setCategories(categories.slice());

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(categories),
    });
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <label>Category</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <button onClick={add}>Add</button>
      <hr />
      {categories?.map((category, index) => (
        <div key={category.name}>
          {category.name}
          <button onClick={() => remove(index)}>x</button>
        </div>
      ))}
    </div>
  );
}

export default MaintainCategories;
