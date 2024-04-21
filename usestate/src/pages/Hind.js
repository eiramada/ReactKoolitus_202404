import React, { useState } from "react";

function Hind() {
  const [hind, uuendaHind] = useState(0);
  const options = [
    { size: "16GB", price: 30 },
    { size: "32GB", price: 50 },
    { size: "64GB", price: 80 },
    { size: "128GB", price: 110 },
    { size: "256GB", price: 130 },
    { size: "512GB", price: 150 },
  ];

  return (
    // <div>
    //   {hind === 0 ? (
    //     <div>Mälukaart on valimata!</div>
    //   ) : (
    //     <div>Valitud mälukaardiga telefoni hind: {hind}</div>
    //   )}
    //   <div>Valitud mälukaardiga telefoni hind {hind}</div>
    // <button className={hind === 30 ? "aktiivne" : ""} onClick={() => uuendaHind(30)}>Mälukaart 16GB</button>
    // <button className={hind === 50 ? "aktiivne" : ""} onClick={() => uuendaHind(50)}>Mälukaart 32GB</button>
    // <button className={hind === 80 ? "aktiivne" : ""} onClick={() => uuendaHind(80)}>Mälukaart 64GB</button>
    // <button className={hind === 110 ? "aktiivne" : ""} onClick={() => uuendaHind(110)}>Mälukaart 128GB</button>
    // <button className={hind === 130 ? "aktiivne" : ""} onClick={() => uuendaHind(130)}>Mälukaart 256GB</button>
    // <button className={hind === 150 ? "aktiivne" : ""} onClick={() => uuendaHind(150)}>Mälukaart 512GB</button>
    // </div>
    
    <div>
      {hind === 0 ? (
        <div>Mälukaart on valimata!</div>
      ) : (
        <div>Valitud mälukaardiga telefoni hind: {hind}</div>
      )}
      {options.map((option) => (
        <button
          key={option.size}
          className={hind === option.price ? "aktiivne" : ""}
          onClick={() => uuendaHind(option.price)}
        >
          Mälukaart {option.size}
        </button>
      ))}
    </div>
  );
}

export default Hind;
