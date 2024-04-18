//rfce snippet lõi esialge.
//ffc on vanem versioon, millega tuleb natukene veel käsitööd.

import React, { useState } from "react";

function Esindused() {
  // let linn = "Tallinn"; //tavaline js teeb nii, ei uuenda htmli

  const [linn, muudaLinn] = useState("Tallinn"); //React teeb nii, vahetab olekuid

  return (
    <div>
      {/* tavaline js osa, aga see ei muuda htmli
       <button onClick={() => {linn="Tallinn"}}>Tallinn</button>
      <button onClick={() => {linn="Tartu"}}>Tartu</button>
      <button onClick={() => {linn="Narva"}}>Narva</button>
      <button onClick={() => {linn="Pärnu"}}>Pärnu</button> */}

      <div>Aktiivne linn: {linn} </div>

      <button
        className={linn === "Tallinn" ? "linn-aktiivne" : "linn"}
        onClick={() => muudaLinn("Tallinn")}
      >
        Tallinn
      </button>
      <button
        className={linn === "Tartu" ? "linn-aktiivne" : "linn"}
        onClick={() => muudaLinn("Tartu")}
      >
        Tartu
      </button>
      <button
        className={linn === "Narva" ? "linn-aktiivne" : "linn"}
        onClick={() => muudaLinn("Narva")}
      >
        Narva
      </button>
      <button
        className={linn === "Pärnu" ? "linn-aktiivne" : "linn"}
        onClick={() => muudaLinn("Pärnu")}
      >
        Pärnu
      </button>

      {linn === "Tallinn" && (
        <div>
          <div>Ülemiste</div>
          <div>Rocca al Mare</div>
          <div>Magistral</div>
          <div>Järveotsa</div>
          <div>Kristiine</div>
          <div>Vesse</div>
        </div>
      )}

      {linn === "Tartu" && (
        <div>
          <div>Raatuse</div>
          <div>Lõunakeskus</div>
        </div>
      )}

      {linn === "Narva" && <div>Fama</div>}
      {linn === "Pärnu" && <div>Port Artur 2</div>}
    </div>
  );
}

export default Esindused;
