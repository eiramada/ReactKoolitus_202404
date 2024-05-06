import React, { useState } from "react";
import { Link } from "react-router-dom";
import ostukorvFailist from "../data/ostukorv.json";
import tootedFailist from "../data/tooted.json";

function Tooted() {
  const [tooted, muudaTooted] = useState(tootedFailist.slice());

  const sorteeriAZ = () => {
    tooted.sort((a, b) => a.nimi.localeCompare(b.nimi));
    muudaTooted(tooted.slice());
  };

  const sorteeriZA = () => {
    tooted.sort((a, b) => b.nimi.localeCompare(a.nimi));
    muudaTooted(tooted.slice());
  };

  const sorteeriTahemargidVaiksemast = () => {
    tooted.sort((a, b) => a.nimi.length - b.nimi.length);
    muudaTooted(tooted.slice());
  };

  const sorteeriTahemargidKah = () => {
    tooted.sort((a, b) => b.nimi.length - a.nimi.length);
    muudaTooted(tooted.slice());
  };

  const sorteeriKolmasTähtAZ = () => {
    tooted.sort((a, b) => a.nimi[2].localeCompare(b.nimi[2]));
    muudaTooted(tooted.slice());
  };

  const lisa = (toode) => {
    ostukorvFailist.push(toode);
    alert("Edukalt lisatud " + toode.nimi);
  };

  return (
    <div>
      <br />
      <button className="nuppFilter" onClick={sorteeriAZ}>
        Sorteeri A-Z
      </button>
      <button className="nuppFilter" onClick={sorteeriZA}>
        Sorteeri Z-A
      </button>
      <button className="nuppFilter" onClick={sorteeriTahemargidVaiksemast}>
        Sorteeri tähemärgid kasvavalt
      </button>
      <button className="nuppFilter" onClick={sorteeriTahemargidKah}>
        Sorteeri tähemärgid kahanevalt
      </button>
      <button className="nuppFilter" onClick={sorteeriKolmasTähtAZ}>
        Sorteeri kolmandast tähest A-Z
      </button>
      <br />
      <br />
      <div>
        <span className="vastusText">Toodete koguarv:</span> {tooted.length}{" "}
        <span className="vastusText">tk</span>
        <br />
        <br />
        {tooted.map((t, index) => (
          <div key={index}>
            <img className="Pilt" src={t.pilt} alt="" />
            <div>{t.nimi}</div>
            <div>{t.hind} €</div>
            <button disabled={t.aktiivne === false} onClick={() => lisa(t)}>
              Lisa ostukorvi
            </button>
            {/* <Link to={"/toode/" + index}> Vaata lähemalt */}
            <Link to={"/toode/" + t.nimi}>Vaata lähemalt</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tooted;
