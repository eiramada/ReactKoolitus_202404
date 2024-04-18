import React, { useRef, useState } from "react";

function LisaToode() {
  const [sonum, muudaSonum] = useState("Lisa uus toode");
  const luger = useRef(); //inputi lugemiseks, ingl. k. nameRef näiteks

  // võib ka nii:
  // function lisa() {
  // }

  const lisa = () => {
    if (luger.current.value === "") {
      muudaSonum("Tootel peab olema nimi");
    } else {
      muudaSonum("Toode " + luger.current.value + " lisatud!");
      luger.current.value = ""; //nii ootamatu kui ka see pole, siis see rida ei muuda ülemise rea väärtust. 
    }
  };

  return (
    <div>
      <div>{sonum}</div> <br />
      <label>Toote nimi</label> <br />
      <input ref={luger} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button>
    </div>
  );
}

export default LisaToode;
