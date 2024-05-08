import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ostukorvFailist from "../data/ostukorv.json";

function Ostukorv() {
  const [tooted, muudaToodet] = useState(ostukorvFailist.slice());
  const [sonum, muudaSonum] = useState("");

  const reset = () => {
    ostukorvFailist.splice(0); //1 esimeses tootest kuni lõpuni tühjendab
    muudaToodet(ostukorvFailist.slice());
    muudaSonum("Ostukorv on tühi");
  };

  // const kustutaEsimene = () => {
  //   tooted.splice(0, 1); // 0 - mitmendat, 1 - mitu // kustutamiseks
  //   muudaToodet(tooted.splice()) //HTMLi uuenduseks
  // };

  // const kustutaTeine = () => {
  //   tooted.splice(1, 1);
  //   muudaToodet(tooted.slice());
  // };

  // const kustutaKolmas = () => {
  //   tooted.splice(2, 1);
  //   muudaToodet(tooted.slice());
  // };

  const kustuta = (jrknr) => {
    ostukorvFailist.splice(jrknr, 1);
    muudaToodet(ostukorvFailist.slice()); //tooted ei muutu selles hetkes HTMLis, aga kui db tuleb mängu, siis vb oleks vaja tooted.slice() kasutada
  };

  const lisa = (toode) => {
    ostukorvFailist.push(toode);
    muudaToodet(ostukorvFailist.slice());
  };

  function kokku() {
    let summa = 0;
    ostukorvFailist.forEach((t) => (summa = summa + t.hind));
    return summa;
  }

  return (
    <div>
      <Link to="/avaleht">Mine avalehele</Link>
      <br />
      <br />
      <div>{sonum}</div>
      <div>
        <button className="nuppReset" onClick={reset}>
          Tühjenda ostukorv
        </button>
        <span className="vastusText">Ostukorvis olevate esemete arv:</span>{" "}
        {tooted.length} <span className="vastusText">tk</span>
        <br />
        {tooted.map((t, index) => (
          <div key={index}>
            <img className="Pilt" src={t.pilt} alt="TootePilt" />
            {t.nimi} - {t.hind}€
            {/* panin algselt kustuta({index}) ja see on tegelt objekt, aga tahtsin hoopis numbri saata kaasa */}
            <button onClick={() => kustuta(index)}>x</button>
            <button onClick={() => lisa(t)}>Lisa lõppu juurde</button>
          </div>
        ))}
      </div>
      <div>Ostukorv: {kokku()} €</div>
    </div>
  );
}

export default Ostukorv;
