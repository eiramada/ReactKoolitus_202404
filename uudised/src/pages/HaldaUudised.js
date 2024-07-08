import React, { useState } from "react";
import { Link } from "react-router-dom";

const HaldaUudiseid = () => {
  const [uudised, setUudised] = useState(
    JSON.parse(localStorage.getItem("uudised")) || []
  );

  function eemaldaUudis(index) {
    const updatedUudised = [...uudised];
    updatedUudised.splice(index, 1);

    setUudised(updatedUudised);
    localStorage.setItem("uudised", JSON.stringify(updatedUudised));
  }

  return (
    <div>
      {uudised.map((uudis, index) => (
        <div key={index}>
          {uudis}
          <button onClick={() => eemaldaUudis(index)}>X</button>
          <Link to={"/muuda-uudis/" + index}>
            <button>Muuda</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HaldaUudiseid;
