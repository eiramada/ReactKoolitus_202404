import React from "react";
import { useParams } from "react-router-dom";
import esindused from "../data/keskused.json";

function YksEsindus() {
  const { linn, index } = useParams();
   //const esindus = esindused[linn] ? esindused[linn][index] : null;
  const esindus = esindused[linn].find(e => e.name === index)

  if (!esindus) {
    return <div>Esindust ei leitud.</div>;
  }


  return (
    <div>
      <h1>Esindus: {esindus.name}</h1>
      <p>
        <strong>Linn:</strong> {linn}
      </p>
      <p>
        <strong>Telefon:</strong> {esindus.phone}
      </p>
      <p>
        <strong>Aadress:</strong> {esindus.address}
      </p>
    </div>
  );
}

export default YksEsindus;
