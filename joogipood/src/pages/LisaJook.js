import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import joogid from "../data/joogid.json";

function LisaJook() {
  const jookRef = useRef();
  const navigate = useNavigate();
  const [joogidState, uuendaJoogid] = useState(joogid);

  const lisaUusJook = () => {
    joogid.push(jookRef.current.value);
    uuendaJoogid(joogidState.slice());
    navigate("/");
  };

  return (
    <div>
      <h2>Lisa uus jook</h2>
      <label>Jook:</label>
      <input ref={jookRef} type="text" />
      <button onClick={lisaUusJook}>Lisa jook</button>
    </div>
  );
}

export default LisaJook;
