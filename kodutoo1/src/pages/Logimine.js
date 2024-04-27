import React, { useRef, useState } from "react";

function Logimine() {
  const [sonum, muudaSonumit] = useState("");
  const [paroolKorrektne, setParoolKorrektne] = useState(true);

  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  function kontrolliParooli() {
    if (
      paroolRef.current.value.length < 8 ||
      paroolRef.current.value.toLowerCase() === paroolRef.current.value ||
      paroolRef.current.value.toUpperCase() === paroolRef.current.value ||
      paroolRef.current.value.includes("%") === false
    ) {
      ValeParooliFunc();
    } else {
      setParoolKorrektne(true);
    }
  }

  function ValeParooliFunc() {
    muudaSonumit("Viga: parool pole korrektne");
    setParoolKorrektne(false);
  }

  return (
    <div>
      LOGIMINE:
      {/* Ülesandes oli hoopis öeldud, et veateade kuvatakse, kui parool on true :) */}
      {!paroolKorrektne && <div>{sonum}</div>}
      <div>
        <label>Kasutajanimi</label> <br />
        <input ref={kasutajaNimiRef} type="text" /> <br />
        <label>Parool</label> <br />
        <input onChange={kontrolliParooli} ref={paroolRef} type="text" />
        <br />
      </div>
      <br />
    </div>
  );
}

export default Logimine;
