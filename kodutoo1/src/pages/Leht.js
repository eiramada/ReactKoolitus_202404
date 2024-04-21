import React, { useRef, useState } from "react";

function Leht() {
  const inputistLugeja = useRef();
  const [muutuvHTMLs, funktsioonMuutujaMuutmiseks] = useState("");

  function onClickFunktsioon() {
    funktsioonMuutujaMuutmiseks(inputistLugeja.current.value);
  }

  const [kasLaeb, uuendaLaadimist] = useState(true);

  return (
    <div className="center">
      <input ref={inputistLugeja} type="text" />
      <button onClick={onClickFunktsioon}>Muuda</button>
      <div>{muutuvHTMLs}</div>

      {kasLaeb === true && (
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
      )}
      <button onClick={() => uuendaLaadimist(false)}>Lõpeta laadimine</button>
    </div>
  );
}

export default Leht;
