import React, { useState } from "react";

function Tootajad() {
  const [tootajad, muudaTootajad] = useState([
    "Urmet",
    "Kaido",
    "Liina",
    "Maiki",
    "Heidi",
    "Epp",
    "Kaire",
    "Anet",
    "Maarja",
  ]);

  function reset() {
    muudaTootajad([
      "Urmet",
      "Kaido",
      "Liina",
      "Maiki",
      "Heidi",
      "Epp",
      "Kaire",
      "Anet",
      "Maarja",
    ]);
  }

  function sortAZ() {
    // tootajad.sort(); //default ongi A-Z, locale'i ei võta, kõik tundmatud lükkab lõppu, nt täpitähed
    tootajad.sort((a, b) => a.localeCompare(b)); //locale saab muuta "et"'ks.

    //slice - mälukoha äralõikaja, ehk kasutab sorteeritud töötajaid.
    muudaTootajad(tootajad.slice());
    //võib ka muudaTootajad([...tootajad]),
    //  mis on ka mälukoha ära kustutamine, muidu uuendab iseennast iseenda kaudu.
  }

  function sortZA() {
    // tootajad.sort((a, b) => {
    //   const nameA = a.toUpperCase();
    //   const nameB = b.toUpperCase();
    //   if (nameA < nameB) return 1; //muudab asukohta
    //   if (nameA > nameB) return -1; ///jätab asukoha samaks
    //   return 0; //nameA >= nameB teeb sama välja; 0 asemel võib olla -1. //nameA = nameB, ehk neeed on võrdsed
    // });

    tootajad.sort((a, b) => b.localeCompare(a)); //see pmst teeb sama, mis ülemine, aga taustal. + kasutab locale't.

    muudaTootajad(tootajad.slice()); //mine uuenda html-i
  }

  function sortKasv() {
    tootajad.sort((a, b) => a.length - b.length); //tahab saada -/+ märki, mitte true/false

    muudaTootajad(tootajad.slice());
  }

  function sortKahan() {
    tootajad.sort((a, b) => b.length - a.length);
    muudaTootajad(tootajad.slice());
  }

  function sortKolmasTähtAZ() {
    tootajad.sort((a, b) => a[2].localeCompare(b[2]));
    muudaTootajad(tootajad.slice());
  }

  function sortTeineTähtAZ() {
    tootajad.sort((a, b) => a[1].localeCompare(b[1]));
    muudaTootajad(tootajad.slice());
  }

  function filteeriAllaViis() {
    const result = tootajad.filter((nimi) => nimi.length < 5);
    muudaTootajad(result);
  }
  function filteeriÜleViis() {
    const result = tootajad.filter((nimi) => nimi.length > 5);
    muudaTootajad(result);
  }

  function filtreeriK() {
    const result = tootajad.filter((nimi) => nimi.startsWith("K") === true);
    muudaTootajad(result);
  }

  function filtreeriM() {
    const result = tootajad.filter((nimi) => nimi.startsWith("M") === true);
    muudaTootajad(result);
  }

  function filtreeriI() {
    const result = tootajad.filter((nimi) => nimi[2] === "i");
    muudaTootajad(result);
  }

  function filteeriKolm() {
    const result = tootajad.filter((nimi) => nimi.length === 3);
    muudaTootajad(result);
  }

  function filtreeriAI() {
    const result = tootajad.filter((nimi) => nimi.includes("ai") === true);
    muudaTootajad(result);
  }

  function filtreeriPaarisTähti() {
    const result = tootajad.filter((nimi) => nimi.length % 2 === 0);
    muudaTootajad(result);
  }

  return (
    <div>
      <button className="button" onClick={reset}>
        Reset
      </button>
      <button className="button" onClick={sortAZ}>
        sort A-Z
      </button>
      <button className="button" onClick={sortZA}>
        sort z-a
      </button>
      <button className="button" onClick={sortKasv}>
        <img
          className="buttonImg"
          src="sort_asc.png"
          alt=""
          title="sort ascending"
        />
      </button>
      <button className="button" onClick={sortKahan}>
        <img
          className="buttonImg"
          src="sort_desc.png"
          alt=""
          title="sort descending"
        />
      </button>
      <button className="button" onClick={sortKolmasTähtAZ}>
        sort 3. tähe järgi
      </button>
      <button className="button" onClick={sortTeineTähtAZ}>
        sort 2. tähe järgi
      </button>
      <button className="button" onClick={filteeriAllaViis}>
        vähem kui 5
      </button>
      <button className="button" onClick={filteeriÜleViis}>
        rohkem kui 5
      </button>
      <button className="button" onClick={filtreeriK}>
        "K" tähega algavad
      </button>
      <button className="button" onClick={filtreeriM}>
        "M" tähega algavad
      </button>
      <button className="button" onClick={filtreeriI}>
        3. täht "i"
      </button>
      <button className="button" onClick={filteeriKolm}>
        3-tähelised
      </button>
      <button className="button" onClick={filtreeriAI}>
        "ai" nimes
      </button>
      <button className="button" onClick={filtreeriPaarisTähti}>
        paaris arv tähti nimes
      </button>

      <div>Töötajate arv: {tootajad.length}</div>
      {tootajad.map((t) => (
        <div key={t}> {t} </div>
      ))}
    </div>
  );
}

export default Tootajad;
