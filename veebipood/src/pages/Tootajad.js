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
    tootajad.sort((a, b) => a.length - b.length); //tahab saada - / + märki, mitte true/false

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

  function filteeriAllaViis() {
    const result = tootajad.filter((nimi) => nimi.length < 5);
    muudaTootajad(result);
  }

  function filtreeriK() {
    const result = tootajad.filter((nimi) => nimi.startsWith("K") === true);
    muudaTootajad(result);
  }

  //sorteeri:
  // teine täht a-z.

  //filtreeri
  //1. täpselt kolmetähelised jäta alles
  //2.jäta alles 5-tähelised
  //3. jäta alles "ai" sisaldavad
  //4. kellel on kolmas täht "i"
  //5. 'M' tähega algav.
  //6. paarisarv tähti

  return (
    <div>
      <button onClick={reset}>Reset</button>
      <button onClick={sortAZ}>Sorteeri A-Z</button>
      <button onClick={sortZA}>sorteeri z-a</button>
      <button onClick={sortKasv}>sorteeri kasvavalt</button>
      <button onClick={sortKahan}>sorteeri kahanevalt</button>
      <button onClick={sortKolmasTähtAZ}>sorteeri kolmanda tähe järgi</button>
      <button onClick={filteeriAllaViis}>vähem kui 5 tähte</button>
      <button onClick={filtreeriK}>K tähega algavad</button>
      <div>Töötajate koguarv: {tootajad.length}</div>
      {tootajad.map((t) => (
        <div key={t}> {t} </div>
      ))}
    </div>
  );
}

export default Tootajad;
