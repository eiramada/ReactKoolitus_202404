import React, { useEffect, useState } from "react";

function Avaleht() {
  const initialTegelased = [
    {
      firstName: "Mickey",
      lastName: "Mouse",
      location: "Disneyland",
      age: 30,
    },
    {
      firstName: "Minnie",
      lastName: "Mouse",
      location: "Disneyland",
      age: 29,
    },
    {
      firstName: "Winnie",
      lastName: "Pooh",
      location: "Hundred Acre Wood",
      age: 44,
    },
    {
      firstName: "Roo",
      lastName: "Kangaroo",
      location: "Hundred Acre Wood",
      age: 9,
    },
    {
      firstName: "Scooby",
      lastName: "Doo",
      location: "Crystal Cove",
      age: 21,
    },
  ];

  const [tegelane, setTegelane] = useState("");
  const [LSTegelased, setLSTegelased] = useState([]);

  useEffect(() => {
    const storedTegelased = localStorage.getItem("tegelased");
    if (storedTegelased) {
      setLSTegelased(JSON.parse(storedTegelased));
    } else {
      localStorage.setItem("tegelased", JSON.stringify(initialTegelased));
      setLSTegelased(initialTegelased);
    }
  }, []);

  const kuvaNimi = (tegelane) => {
    console.log(tegelane.firstName);
    setTegelane(tegelane.firstName + " " + tegelane.lastName);
  };

  function vali(tegelane) {
    const updatedTegelased = [...LSTegelased, tegelane];
    setLSTegelased(updatedTegelased);
    localStorage.setItem("tegelased", JSON.stringify(updatedTegelased));
  }

  return (
    <div>
      <br />
      {tegelane !== "" && <div>Klikkisid tegelese {tegelane} peal</div>}
      <br />
      {LSTegelased.map((t, index) => (
        <div key={index}>
          <div>
            {t.firstName} {t.lastName}
          </div>
          <div>{t.location}</div>
          <div>{t.age}</div>
          <button onClick={() => kuvaNimi(t)}>Kuva nimi</button>
          <button onClick={() => vali(t)}>Vali</button>
        </div>
      ))}
    </div>
  );
}

export default Avaleht;
