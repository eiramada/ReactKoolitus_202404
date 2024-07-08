import React, { useRef } from "react";
import { useParams } from "react-router-dom";

function MuudaUudis() {
  const { index } = useParams();
  const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
  const uudis = uudised[index];
  const uudisRef = useRef();

function muuda() {
    uudised[index] = uudisRef.current.value;
    localStorage.setItem("uudised", JSON.stringify(uudised));
}

  return (
    <div>
      <label htmlFor="uudis">Uudis:</label> <br />
      <input defaultValue={uudis} id="uudis" type="text" ref={uudisRef} />{" "}
      <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  );
}

export default MuudaUudis;
