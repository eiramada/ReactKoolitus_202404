import React, { useState } from "react";

function Meist() {
  const [kontakt, n2itaKontakt] = useState("");
  const [valitud, setValitud] = useState("");

  const contacts = [
    {
      name: "John Doe",
      area: "Marketing",
      phone: "123-456-7890",
    },
    {
      name: "Jane Smith",
      area: "Finance",
      phone: "987-654-3210",
    },
    {
      name: "Sam Brown",
      area: "IT",
      phone: "555-666-7777",
    },
    {
      name: "Lisa White",
      area: "HR",
      phone: "222-333-4444",
    },
    {
      name: "Mark Black",
      area: "Operations",
      phone: "888-999-0000",
    },
  ];

  function v6taYhendust(töötaja) {
    n2itaKontakt(töötaja.phone);
    setValitud(töötaja.name);
  }

  return (
    <div>
      <div>Meie töötajad:</div>
      <br />
      <div>
        {contacts.map((c, index) => (
          // <div key={index} className={valitud === c.name ? "valitud" : undefined}>
          <div
            key={index}
            className={valitud === c.name ? "valitud" : undefined}
          >
            <div>
              <strong>Name:</strong> {c.name}
            </div>
            <div>
              <strong>Area:</strong> {c.area}
            </div>
            <button onClick={() => v6taYhendust(c)}>Võta ühendust</button>

            <div>
              <br />
            </div>
          </div>
        ))}
      </div>

      {kontakt !== "" && <div>Tema kontakt {kontakt}</div>}
    </div>
  );
}

export default Meist;
