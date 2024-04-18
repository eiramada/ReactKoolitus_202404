import React, { useState } from "react";

function Avaleht() {
  const [kogus, muudaKogus] = useState(0);
  const [sonum, muudaSonum] = useState("Muuda kogust!");
  const [laigitud, muudaLaigitud] = useState(false);

  function nulli() {
    muudaKogus(0);
    muudaSonum("Nullisid");
  }

  function vähenda() {
    muudaKogus(kogus - 1);
    muudaSonum("Vähendasid kogust");
  }

  function suurenda() {
    muudaKogus(kogus + 1);
    muudaSonum("Suurendasid kogust");
  }

  return (
    <div>
      {laigitud === false && <img src="/mitteLaigitud.svg" alt="" />}
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      <button onClick={() => muudaLaigitud(!laigitud)}>Muuda laiki</button>

      <div>{sonum}</div>
      
      {/* Pole vahet, kas onclick= "()=>funktsioon()" või lihtsalt "funktsioon" */}
      {kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>}
      <button disabled={kogus === 0} onClick={vähenda}>
        -
      </button>
      <span>{kogus}</span>
      <button onClick={() => suurenda()}>+</button>
    </div>
  );
}

export default Avaleht;
