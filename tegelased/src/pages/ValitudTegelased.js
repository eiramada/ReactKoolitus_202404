import React, { useState } from "react";

function ValitudTegelased() {
  const LS = JSON.parse(localStorage.getItem("tegelased"));
  const [valitudTegelased, setValitudTegelased] = useState(LS || []);

  const eemalda = (index) => {
    const updatedTegelased = valitudTegelased.filter((_, i) => i !== index);
    setValitudTegelased(updatedTegelased);
    localStorage.setItem("tegelased", JSON.stringify(updatedTegelased));
  };

  const eemaldaKõik = () => {
    setValitudTegelased([]);
    localStorage.setItem("tegelased", JSON.stringify([]));
  };

  return (
    <div>
      {valitudTegelased.length > 0 ? (
        <div>
          <div>{valitudTegelased.length} valitud tegelast</div>
          <button onClick={eemaldaKõik}>
            eemalda kõik {valitudTegelased.length} valitut tegelast
          </button>
        </div>
      ) : (
        <div>Ühtegi tegelast pole valitud</div>
      )}{" "}
      {valitudTegelased.map((tegelane, index) => (
        <div key={index}>
          {tegelane.firstName}, {tegelane.lastName}, {tegelane.location},{" "}
          {tegelane.age}
          <button onClick={() => eemalda(index)}> X </button>
        </div>
      ))}
    </div>
  );
}

export default ValitudTegelased;
