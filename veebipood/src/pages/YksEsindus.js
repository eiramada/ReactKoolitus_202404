import React from "react";
import { useParams } from "react-router-dom";
import esindused from "../data/keskused.json";

function YksEsindus() {
  const { linn, index } = useParams();
  // const esindus = esindused[linn] ? esindused[linn][index] : null;
  const esindus = esindused.find(e => e[linn].name === index)

  if (!esindus) {
    return <div>Esindust ei leitud.</div>;
  }

  const { name, phone, address } = esindus;

  return (
    <div>
      <h1>Esindus: {name}</h1>
      <p>
        <strong>Linn:</strong> {linn}
      </p>
      <p>
        <strong>Telefon:</strong> {phone}
      </p>
      <p>
        <strong>Aadress:</strong> {address}
      </p>
    </div>
  );
}

export default YksEsindus;
