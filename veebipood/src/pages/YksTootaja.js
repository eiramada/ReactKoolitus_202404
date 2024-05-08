import React from "react";
import { useParams } from "react-router-dom";
import töötajad from "../data/tootajad.json";

function YksTootaja() {
  const { index } = useParams();
  const töötaja = töötajad.find(t => t.nimi === index);

  return (
    <div>
      <div key={index}> Töötaja:</div>
      <div>{töötaja.nimi} </div>
      <div>{töötaja.age}</div>
      <div>{töötaja.city}</div>
      <div>{töötaja.occupation}</div>
    </div>
  );
}

export default YksTootaja;
