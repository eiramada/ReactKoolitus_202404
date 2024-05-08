import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import tooted from "../data/tooted.json";
import NotFound from "./NotFound";

function YksToode() {
  const { index } = useParams();
  const toode = tooted.find((t) => t.nimi === index);

  if (toode === undefined) {
    return <NotFound />;
  }

  return (
    <div>
      <div key={index}>Toote nimi: {toode.nimi}</div>
      <div key={index}>Hind: {toode.hind} € </div>
      <div>
        Kirjeldus:
        {toode.aktiivne ? (
          <span> toodet saab osta</span>
        ) : (
          <span> toode on otsas</span>
        )}
      </div>
      <img src={toode.pilt} alt="Toote pilt" />
    </div>
  );
}

export default YksToode;
