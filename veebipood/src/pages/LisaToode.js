import React, { useEffect, useRef, useState } from "react";
import tootedData from "../data/tooted.json"; // Ensure this import path is correct

function LisaToode() {
  const [sonum, muudaSonum] = useState("Lisa uus toode");
  const [tooted, setTooted] = useState(tootedData); // Managing products with state
  const [isFormValid, setIsFormValid] = useState(true);

  const luger = useRef(); //inputi lugemiseks, ingl. k. nameRef näiteks
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivsusRef = useRef();

  // võib ka nii:
  // function lisa() {
  // }

  const resetFields = () => {
    luger.current.value = ""; //nii ootamatu kui ka see pole, siis see rida ei muuda ülemise rea väärtust.
    hindRef.current.value = "";
    piltRef.current.value = "";
    aktiivsusRef.current.checked = false;
  };

  const validateForm = () => {
    const nimi = luger.current.value;
    const hind = hindRef.current.value;
    if (!nimi) {
      return "Viga: Tootel peab olema nimi";
    } else if (nimi[0] !== nimi[0].toUpperCase()) {
      return "Viga: Toode peab algama suure tähega";
    } else if (nimi.includes("/")) {
      return "Viga: Toote nimes ei tohi olla kaldkriipsu";
    } else if (hind && isNaN(hind)) {
      return "Viga: Hinna väli peab olema numbriline";
    } else if (hind && Number(hind) <= 0) {
      return "Viga: Hind peab olema suurem kui 0";
    }
    return "";
  };

  useEffect(() => {
    // This is safe to call here if needed immediately after mount
    const message = validateForm();
    muudaSonum(message || "Kõik väljad korras");
  }, []);

  const lisa = () => {
    const validationMessage = validateForm();
    if (validationMessage) {
      muudaSonum(validationMessage);
    } else {
      const uusToode = {
        nimi: luger.current.value,
        hind: Number(hindRef.current.value),
        aktiivne: aktiivsusRef.current.checked,
        pilt: piltRef.current.value,
      };

      tooted.push(uusToode);
      setTooted(prevTooted => [...prevTooted, uusToode]);

      muudaSonum(`Toode ${luger.current.value} lisatud!`);
      resetFields();
    }
  };

  const handleInputChange = () => {
    const message = validateForm();
    muudaSonum(message || "Kõik väljad korras");
    setIsFormValid(!message); 
  };



  
  return (
    <div>
      <div>{sonum}</div>
      {/* htmlFor: kui label peale vajutad, läheb inputi lahtrisse. */}
      <label htmlFor="nimi">Nimi </label>
      <br />
      <input onChange={handleInputChange} id="nimi" ref={luger} type="text" />
      <br />
      <label htmlFor="hind">Hind </label>
      <br />
      <input onChange={handleInputChange} id="hind" ref={hindRef} type="number" />
      <br />
      <label htmlFor="pilt">Pilt </label>
      <br />
      <input id="pilt" ref={piltRef} type="text" />
      <br />
      <label htmlFor="aktiivuss">Saadavus </label>
      <br />
      <input id="aktiivuss" ref={aktiivsusRef} type="checkbox" />
      <br />
      <button disabled={!isFormValid} onClick={lisa}>
    Sisesta
  </button>
    </div>
  );
}

export default LisaToode;
