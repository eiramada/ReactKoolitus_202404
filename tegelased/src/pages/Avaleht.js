import React, { useState } from "react";

function Avaleht() {
  const [tegelane, setTegelane] = useState("");

  const tegelased = [
    {
      firstName: "Mickey",
      lastName: "Mouse",
      location: "Disneyland",
    },
    {
      firstName: "Minnie",
      lastName: "Mouse",
      location: "Disneyland",
    },
    {
      firstName: "Winnie",
      lastName: "Pooh",
      location: "Hundred Acre Wood",
    },
    {
      firstName: "Roo",
      lastName: "Kangaroo",
      location: "Hundred Acre Wood",
    },
    {
      firstName: "Scooby",
      lastName: "Doo",
      location: "Crystal Cove",
    },
  ];

  const kuvaNimi = (tegelane) => {
    console.log(tegelane.firstName);
    setTegelane(tegelane.firstName + " " + tegelane.lastName);
  };

  return (
    <div>
      <br />
      {tegelane !== "" && <div>Klikkisid tegelese {tegelane} peal</div>}
      <br />
      {tegelased.map((t, index) => (
        <div>
          <div key={index}>{t.firstName}</div>
          <div>{t.lastName}</div>
          <div>{t.location}</div>
          <button onClick={() => kuvaNimi(t)}>Kuva nimi</button>
        </div>
      ))}
    </div>
  );
}

export default Avaleht;
