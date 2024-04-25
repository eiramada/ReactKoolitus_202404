import React, { useState } from "react";
import hinnadJSON from "../data/hinnad.json";

function Hinnad() {
  const [hinnad, muudaHinnad] = useState(hinnadJSON.slice()); //võtame ainult mälukoha, et sort/filtreerimine sort/filtr ka HaldaHinnad.js-s

  const originaal = () => {
    muudaHinnad(hinnadJSON.slice());
  };

  function kasvavalt() {
    hinnad.sort((a, b) => a - b);
    muudaHinnad(hinnad.slice()); //mine uuenda html-i
  }

  function sortZA() {
    hinnad.sort((a, b) => b.toString().localeCompare(a));
    muudaHinnad(hinnad.slice()); //mine uuenda html-i
  }

  function filtreeriSuuremKui50() {
    const result = hinnad.filter((hind) => hind > 50);
    muudaHinnad(result);
  }

  return (
    <div>
      <div>Mitu toodet on hinnastatud: {hinnad.length} tk</div>
      <button onClick={originaal}>Originaal</button>
      <button onClick={() => muudaHinnad([])}>Kustuta kõik</button>
      <button onClick={kasvavalt}>Kasvavalt</button>
      <button onClick={sortZA}> Z-A</button>
      <button onClick={filtreeriSuuremKui50}>suurem kui 50</button>

      <div>
        {hinnad.map((hind, index) => (
          <div key={index}>{hind}€</div>
        ))}
      </div>
    </div>
  );
}

export default Hinnad;
