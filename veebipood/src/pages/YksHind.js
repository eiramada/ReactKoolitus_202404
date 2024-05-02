import React from "react";
import { useParams } from "react-router-dom";
import hinnad from "../data/hinnad.json";

function YksHind() {
  const { index } = useParams();
  const hind = hinnad[index];

  return (
    <div>
      <div key={index}> Hind: {hind} €</div>
    </div>
  );
}

export default YksHind;
