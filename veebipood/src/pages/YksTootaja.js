import React from "react";
import { useParams } from "react-router-dom";
import töötajad from "../data/tootajad.json";

function YksTootaja() {
  const { index } = useParams();
  const töötaja = töötajad[index];

  return (
    <div>
      <div key={index}> Töötaja  {töötaja} </div>
    </div>
  );
}

export default YksTootaja;
