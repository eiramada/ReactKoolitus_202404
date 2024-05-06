import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import hinnad from "../data/hinnad.json";
import NotFound from "./NotFound";

function MuudaHind() {
  const { index } = useParams();
  const hind = hinnad[index];
  // const hind = hinnad.find((hind) => hind.nr === Number(index));
  const nimiRef = useRef();
  const navigate = useNavigate();

  function muuda() {
    if (hind === undefined) {
      return <NotFound />;
    }

    const changedHind = {
      lisaja: hind.lisaja,
      nr: Number(nimiRef.current.value),
    };

    hinnad[index] = changedHind;
    navigate("/halda-hinnad");
  }

  return (
    <div>
      {/* htmlFor: kui label peale vajutad, läheb inputi lahtrisse. */}
      <label htmlFor="nimi">Hind </label> <br />
      <input id="nimi" ref={nimiRef} type="number" defaultValue={hind.nr} />
      <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  );
}

export default MuudaHind;
