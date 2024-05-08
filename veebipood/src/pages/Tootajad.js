import React, { useState } from "react";
import töötajad from "../data/tootajad.json";
import { Link } from "react-router-dom";

function Tootajad() {
  //pane const enamasti. kui ma tahan muuta muutujat, siis erandkorras let -> käe sees võiks olla const
  const [tootajad, muudaTootajad] = useState(töötajad);

  function reset() {
    muudaTootajad(töötajad);
  }

  function sortAZ() {
    // tootajad.sort(); //default ongi A-Z, locale'i ei võta, kõik tundmatud lükkab lõppu, nt täpitähed
    tootajad.sort((a, b) => a.nimi.localeCompare(b.nimi)); //locale saab muuta "et"'ks.

    //slice - mälukoha äralõikaja, ehk kasutab sorteeritud töötajaid.
    muudaTootajad(tootajad.slice());
    //võib ka muudaTootajad([...tootajad]),
    //  mis on ka mälukoha ära kustutamine, muidu uuendab iseennast iseenda kaudu.
  }

  function sortZA() {
    // tootajad.sort((a, b) => {
    //   const nimiA = a.toUpperCase();
    //   const nimiB = b.toUpperCase();
    //   if (nimiA < nimiB) return 1; //muudab asukohta
    //   if (nimiA > nimiB) return -1; ///jätab asukoha samaks
    //   return 0; //nimiA >= nimiB teeb sama välja; 0 asemel võib olla -1. //nimiA = nimiB, ehk neeed on võrdsed
    // });

    tootajad.sort((a, b) => b.nimi.localeCompare(a.nimi)); //see pmst teeb sama, mis ülemine, aga taustal. + kasutab locale't.
    muudaTootajad(tootajad.slice()); //mine uuenda html-i
  }

  function sortKasv() {
    tootajad.sort((a, b) => a.nimi.length - b.nimi.length); //tahab saada -/+ märki, mitte true/false

    muudaTootajad(tootajad.slice());
  }

  function sortKahan() {
    tootajad.sort((a, b) => b.nimi.length - a.nimi.length);
    muudaTootajad(tootajad.slice());
  }

  function sortKolmasTähtAZ() {
    tootajad.sort((a, b) => a.nimi[2].localeCompare(b.nimi[2]));
    muudaTootajad(tootajad.slice());
  }

  function sortTeineTähtAZ() {
    tootajad.sort((a, b) => a.nimi[1].localeCompare(b.nimi[1]));
    muudaTootajad(tootajad.slice());
  }

  function filteeriAllaViis() {
    const result = tootajad.filter((töötaja) => töötaja.nimi.length < 5);
    muudaTootajad(result);
  }
  function filteeriÜleViis() {
    const result = tootajad.filter((t) => t.nimi.length > 5);
    muudaTootajad(result);
  }

  function filtreeriK() {
    const result = tootajad.filter((t) => t.nimi.startsWith("K") === true);
    muudaTootajad(result);
  }

  function filtreeriM() {
    const result = tootajad.filter((t) => t.nimi.startsWith("M") === true);
    muudaTootajad(result);
  }

  function filtreeriI() {
    const result = tootajad.filter((t) => t.nimi[2] === "i");
    muudaTootajad(result);
  }

  function filteeriKolm() {
    const result = tootajad.filter((t) => t.nimi.length === 3);
    muudaTootajad(result);
  }

  function filtreeriAI() {
    const result = tootajad.filter((t) => t.nimi.includes("ai") === true);
    muudaTootajad(result);
  }

  function filtreeriPaarisTähti() {
    const result = tootajad.filter((t) => t.nimi.length % 2 === 0);
    muudaTootajad(result);
  }

  const kokku = () => {
    let summa = 0;
    tootajad.forEach((t) => (summa = summa + t.nimi.length));
    return summa;
  };

  return (
    <div>
      <div>Tähemärgid kokku {kokku()}</div>
      <button classnimi="button" onClick={reset}>
        Reset
      </button>
      <div>
        <button classnimi="button" onClick={sortAZ}>
          sort A-Z
        </button>
        <button classnimi="button" onClick={sortZA}>
          sort z-a
        </button>
        <button classnimi="button" onClick={sortKasv}>
          <img
            classnimi="buttonImg"
            src="sort_asc.png"
            alt=""
            title="sort ascending"
          />
        </button>
        <button classnimi="button" onClick={sortKahan}>
          <img
            classnimi="buttonImg"
            src="sort_desc.png"
            alt=""
            title="sort descending"
          />
        </button>
        <button classnimi="button" onClick={sortKolmasTähtAZ}>
          sort 3. tähe järgi
        </button>
        <button classnimi="button" onClick={sortTeineTähtAZ}>
          sort 2. tähe järgi
        </button>
      </div>
      <div>
        <button classnimi="button" onClick={filteeriAllaViis}>
          vähem kui 5
        </button>
        <button classnimi="button" onClick={filteeriÜleViis}>
          rohkem kui 5
        </button>
        <button classnimi="button" onClick={filtreeriK}>
          "K" tähega algavad
        </button>
        <button classnimi="button" onClick={filtreeriM}>
          "M" tähega algavad
        </button>
        <button classnimi="button" onClick={filtreeriI}>
          3. täht "i"
        </button>
        <button classnimi="button" onClick={filteeriKolm}>
          3-tähelised
        </button>
        <button classnimi="button" onClick={filtreeriAI}>
          "ai" nimes
        </button>
        <button classnimi="button" onClick={filtreeriPaarisTähti}>
          paaris arv tähti nimes
        </button>
      </div>

      <div>Töötajate arv: {tootajad.length}</div>
      {tootajad.map((t, index) => (
        <div key={t.nimi}>
          {t.nimi}
          <Link to={"/tootaja/" + index}>Vaata lähemalt</Link>
        </div>
      ))}
    </div>
  );
}

export default Tootajad;
