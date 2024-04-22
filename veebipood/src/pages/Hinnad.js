import React, { useState } from "react";

function Hinnad() {
  const [hinnad, muudaHinnad] = useState([1, 31, 5, 99, 2, 66, 0, 10, 123]);

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
      <button onClick={() => muudaHinnad([])}>Kustuta kõik</button>
      <button onClick={kasvavalt}>Kasvavalt</button>
      <button onClick={sortZA}> Z-A</button>
      <button onClick={filtreeriSuuremKui50}>suurem kui 50</button>
      <div>
        {hinnad.map((hind) => (
          <div key={hind}>{hind}€</div>
        ))}
      </div>
    </div>
  );
}

export default Hinnad;
