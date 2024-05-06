import React from "react";
import { useParams } from "react-router-dom";
import hinnad from "../data/hinnad.json";
import NotFound from "./NotFound";

function YksHind() {
  //parameeter indexi järgi
  // const { index } = useParams();
  // const hind = hinnad[index];

  //parameeter summa järgi, 1. lähenemisviis - object destructioning
  // const { summa } = useParams();
  // const hind = hinnad.find((hind) => hind === summa);

  //useparams järgi, 2. lähenemisviis - object
  const params = useParams();
  const hind = hinnad.find((hind) => hind.nr === Number(params.summa));

  if (hind === undefined) {
    return <NotFound />;
  }

  return (
    <div>
      {/* <div key={index}> Hind: {hind} €</div> */}
      <div key={hind.nr}>
        Hind: {hind.nr} € - lisaja: {hind.lisaja}
      </div>
    </div>
  );
}

export default YksHind;
