import React, { useState } from "react";
import hinnadObjektidJSON from "../data/hinnad.json";
import { Link } from "react-router-dom";

function Hinnad() {
  const hinnadJSON = hinnadObjektidJSON.map((h) => h.nr); //toimib ainult juhul, kui "klient" ei taha "lisajat" ka. kui tahab, siis potentsiaalselt ma hakkan teist korda db-st uurima, ja see on jama.
  const [hinnad, muudaHinnad] = useState(hinnadJSON); //võtame ainult mälukoha, et sort/filtreerimine sort/filtr ka HaldaHinnad.js-s

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

  function kokku() {
    let summa = 0;
    hinnad.forEach((h) => (summa = summa + h));
    return summa;
  }

  return (
    <div>
      <div>Hinnasumma: {kokku()} €</div>
      <div>Mitu toodet on hinnastatud: {hinnad.length} tk</div>
      <button onClick={originaal}>Originaal</button>
      <button onClick={() => muudaHinnad([])}>Kustuta kõik</button>
      <button onClick={kasvavalt}>Kasvavalt</button>
      <button onClick={sortZA}> Z-A</button>
      <button onClick={filtreeriSuuremKui50}>suurem kui 50</button>

      <div>
        {hinnad.map((hind, index) => (
          <div key={index}>
            {/* {hind}€<Link to={"/hind/" + index}>Vaata lähemalt</Link> */}
            {hind}€<Link to={"/hind/" + hind}>Vaata lähemalt</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hinnad;
