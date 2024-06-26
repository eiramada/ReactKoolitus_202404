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

  function sortHindKasv() {
    tooted.sort((a, b) => a.hind - b.hind);
    muudaTooted(tooted.slice());
  }

  function sortHindKaha() {
    tooted.sort((a, b) => b.hind - a.hind);
    muudaTooted(tooted.slice());
  }

  const lisa = (toode) => {
    ostukorvFailist.push(toode);
    alert("Edukalt lisatud " + toode.nimi);
  };

  const reset = () => {
    muudaTooted(tootedFailist.slice());
  };

  const filterActive = () => {
    const result = tootedFailist.filter((t) => t.aktiivne);  //puhtalt lehelt 
    muudaTooted(result);
  };
  const filterCheap = () => {
    const result = tootedFailist.filter((t) => t.hind <= 40000);
    muudaTooted(result);

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
      <button className="nuppFilter" onClick={sortHindKasv}>
        Sorteeri hind kasvavalt
      </button>
      <button className="nuppFilter" onClick={sortHindKaha}>
        Sorteeri hind kahanevalt
      </button>
      <br />
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={filterActive}>Jäta alles aktiivsed</button>
        <button onClick={filterCheap}>Jäta alles odavamad kui 40 000</button>
      </div>
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
