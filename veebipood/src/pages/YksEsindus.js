import React from "react";
import { useParams } from "react-router-dom";
import esindused from "../data/keskused.json";

function YksEsindus() {
  const { linn, index } = useParams();
  const esindus = esindused[linn][index];

  return (
    <div>
      <div key={index}>
        Esindus: {esindus}, {linn}
      </div>
    </div>
  );
}

export default YksEsindus;
