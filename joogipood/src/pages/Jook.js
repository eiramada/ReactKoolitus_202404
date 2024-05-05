import React from "react";
import { useParams } from "react-router-dom";
import joogid from "../data/joogid.json";

function Jook() {
  const { number } = useParams();
  const jook = joogid[number];

  if (!jook) {
    return <div>Jook not found</div>;
  }

  return (
    <div>
      <h1>{jook}</h1>
    </div>
  );
}

export default Jook;
