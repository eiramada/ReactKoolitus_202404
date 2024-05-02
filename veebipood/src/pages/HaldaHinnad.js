import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import hinnadJSON from "../data/hinnad.json";

function HaldaHinnad() {
  const [hinnad, muudaHinnad] = useState(hinnadJSON);
  const hindRef = useRef();

  // const sort = () => {
  //   hinnad.sort(); //tahan sorteerimist näha ainult HaldaHinnad lehel.
  // };

  const kustuta = (index) => {
    // hinnad.splice(index, 1);
    hinnadJSON.splice(index, 1);
    muudaHinnad(hinnad.slice());
  };

  const lisa = (hind) => {
    // hinnad.push(hind);
    hinnadJSON.push(hind);
    muudaHinnad(hinnad.slice());
  };

  const lisaHind = () => {
    hinnadJSON.push(hindRef.current.value);
    muudaHinnad(hinnadJSON.slice());
  };

  return (
    <div>
      <button onClick={() => lisa(Math.floor(Math.random() * (200 - 2) + 2))}>
        Lisa random
      </button>{" "}
      <br />
      <label>Uus Hind</label> <br />
      <input ref={hindRef} type="text" /> <br />
      <button onClick={lisaHind}>Lisa</button>
      <br />
      <div>Mitu toodet on hinnastatud: {hinnadJSON.length} tk</div>
      <div>
        {hinnadJSON.map((hind, index) => (
          <div key={index}>
            {hind}€<button onClick={() => kustuta(index)}>x</button>
            <button onClick={() => lisa(hind)}>lisa lõppu</button>
            <Link to={"/muuda-hind/" + index}>
              <button>Muuda</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HaldaHinnad;
