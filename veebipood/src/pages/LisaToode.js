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

  function kontrolli() {
    if (luger.current.value === "") {
      muudaSonum("Viga: Tootel peab olema nimi");
      return;
    }

    if (luger.current.value[0].toLowerCase() === luger.current.value[0]) {
      muudaSonum("Viga: Toode peab algama suure tähega");
      return;
    }

    if (luger.current.value.includes("/") === true) {
      muudaSonum("Viga: Toote nimes ei tohi olla kaldkriipsu");
      return;
    }

    muudaSonum("");
  }

  

  return (
    <div>
      <div>{sonum}</div> <br />
      <label>Toote nimi</label> <br />
      <input onChange={kontrolli} ref={luger} type="text" /> <br />
      <button disabled={sonum.startsWith("Viga:")} onClick={lisa}>
        Sisesta
      </button>
      {/* <button onClick={kontrolli}>Sisesta</button> */}
    </div>
  );
}

export default LisaToode;
