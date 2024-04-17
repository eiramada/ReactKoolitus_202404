import React from "react";
import { useState } from "react";

function LisaArvuti() {
  const [message, setMessage] = useState("Lisa arvuti!");

  return (
    <div>
      <div>Sõnum: {message}</div>
      <label>Mark</label> <br />
      <input type="text" /> <br />
      <label>Mudel</label> <br />
      <input type="text" /> <br />
      <label>Maksumus</label> <br />
      <input type="number" /> <br />
      {message === "Lisa arvuti!" && (
        <button onClick={() => setMessage("Lisatud!")}>Sisesta</button>
      )}
    </div>
  );
}

export default LisaArvuti;
