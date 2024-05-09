//rfce snippet lõi esialge.
//ffc on vanem versioon, millega tuleb natukene veel käsitööd.

import React, { useState } from "react";
import esindused from "../data/keskused.json";
import { Link } from "react-router-dom";

function Esindused() {
  // let linn = "Tallinn"; //tavaline js teeb nii, ei uuenda htmli

  const [linn, muudaLinn] = useState("Tallinn");
  const [keskused, setKeskused] = useState(esindused[linn]);
  const linnad = Object.keys(esindused);

  const changeCity = (newCity) => {
    muudaLinn(newCity);
    setKeskused(esindused[newCity]);
  };

  function sortAZ() {
    keskused.sort((a, b) => a.name.localeCompare(b.name));
    setKeskused(keskused.slice());
  }

  function sortZA() {
    keskused.sort((a, b) => b.name.localeCompare(a.name));
    setKeskused(keskused.slice());
  }

  function sortKasv() {
    keskused.sort((a, b) => a.name.length - b.name.length);
    setKeskused(keskused.slice());
  }

  function sortKahan() {
    keskused.sort((a, b) => b.name.length - a.name.length);
    setKeskused(keskused.slice());
  }

  function sortKolmasTähtAZ() {
    keskused.sort((a, b) => a.name[2].localeCompare(b.name[2]));
    setKeskused(keskused.slice());
  }

  function filteeri9() {
    const result = esindused[linn].filter((k) => k.name.length === 9);
    setKeskused(result);
  }

  function filteeriÜleSeitse() {
    const result = esindused[linn].filter((k) => k.name.length >= 7);
    setKeskused(result);
  }

  function filtreeriIS() {
    const result = esindused[linn].filter((k) => k.name.includes("is") === true);
    setKeskused(result);
  }

  function filtreeriE() {
    const result = esindused[linn].filter((k) => k.name.endsWith("e") === true);
    setKeskused(result);
  }

  return (
    <div>
      {/* tavaline js osa, aga see ei muuda htmli
       <button onClick={() => {linn="Tallinn"}}>Tallinn</button>
      <button onClick={() => {linn="Tartu"}}>Tartu</button>
      <button onClick={() => {linn="Narva"}}>Narva</button>
      <button onClick={() => {linn="Pärnu"}}>Pärnu</button> */}
      <div>Aktiivne linn: {linn}</div>
      {linnad.map((city) => (
        <button
          key={city}
          className={linn === city ? "linn-aktiivne" : "linn"}
          onClick={() => changeCity(city)}
        >
          {city}
        </button>
      ))}
      <div>
        {keskused.map((keskus, index) => (
          <div key={`${keskus.name}-${index}`}>
            {keskus.name}
            <Link to={`/esindus/${linn}/${index}`}>Vaata lähemalt</Link>
          </div>
        ))}
      </div>
      <br />
      <div>Keskuste arv: {keskused.length}</div>
      <div>
        <button onClick={sortAZ}>sort AZ</button>
        <button onClick={sortZA}>sort ZA</button>
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
      </div>
      <div>
        <button onClick={filteeri9}>9-tähelised </button>
        <button onClick={filteeriÜleSeitse}>vähemalt 7-tähelised </button>
        <button onClick={filtreeriIS}>"is"</button>
        <button onClick={filtreeriE}>Lõppeb e-ga</button>
      </div>
    </div>
  );
}

export default Esindused;
