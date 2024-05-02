import React from "react";
import { useParams } from "react-router-dom";
import tooted from "../data/tooted.json";
import hinnad from "../data/hinnad.json";

function YksToode() {
  const { index } = useParams();
  const toode = tooted[index];
  const hind = hinnad[index];

  return (
    <div>
      <div key={index}>Toote nimi: {toode}</div>
      <div key={index}>Hind: {hind} € </div>
    </div>
  );
}

export default YksToode;
