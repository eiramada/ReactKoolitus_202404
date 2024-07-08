import React from "react";
import { useParams } from "react-router-dom";

function YksUudis() {
  const { index } = useParams();
  const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
  const uudis = uudised[index];

  return (
    <div>
      <h1>Uudis</h1>
      {uudis ? <div>{uudis}</div> : <div>Uudis ei leitud</div>}
    </div>
  );
}

export default YksUudis;
