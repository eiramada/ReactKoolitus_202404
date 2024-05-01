import React, { useRef, useState } from "react";
import "./tagasisideAndjad.css";

import names from "../nimed.json";

const filtrid = ["Algavad_M_tähega", "6_kohalised", "Lõppevad_Y_tahega", "Z-A"];

function TagasisideAndjad() {
  const [nimed, muudaNimed] = useState(names);
  const [dropdownAvatud, setDropdownAvatud] = useState(false);

  const addNameRef = useRef(null);

  const handleFiltering = (filter) => {
    let filtreeritudNimed = [...names];

    switch (true) {
      case filter === filtrid[0]:
        filtreeritudNimed = filtreeritudNimed.filter((n) =>
          n.toLowerCase().startsWith("m")
        );
        break;
      case filter === filtrid[1]:
        filtreeritudNimed = filtreeritudNimed.filter((n) => n.length === 6);
        break;
      case filter === filtrid[2]:
        filtreeritudNimed = filtreeritudNimed.filter((n) =>
          n.toLowerCase().endsWith("y")
        );
        break;
      case filter === filtrid[3]:
        filtreeritudNimed = filtreeritudNimed.sort((a, b) =>
          b.localeCompare(a)
        );
        break;

      default:
        break;
    }
    muudaNimed(filtreeritudNimed);
  };

  const handleRemoveTagasisideAndja = (index) => {
    names?.splice(index, 1);
    muudaNimed(names?.slice());
  };

  const handleAddTagasisisdeAndja = () => {
    const addedTagasiside = addNameRef?.current?.value;
    names?.splice(nimed?.length, 1, addedTagasiside);
    muudaNimed(names?.slice());

    addNameRef.current.value = null;
  };

  return (
    <>
      <div className="tagasiside-andja__row my-2">
        <p className="tagasiside-andja__name">Lisa uus tagasisideandja</p>
        <input ref={addNameRef} className="tagasisided__name" />
        <button onClick={handleAddTagasisisdeAndja}>Sisesta</button>
      </div>
      <div>
        <button
          className="btn btn-sm btn-secondary mt-2 mb-1"
          onClick={() => setDropdownAvatud(!dropdownAvatud)}
        >
          Filtrid
        </button>
        {dropdownAvatud && (
          <div className="bg-secondary drop-down">
            {filtrid.map((filter, i) => (
              <p
                key={i}
                className="d-flex btn btn-sm btn-secondary text-left text-nowrap"
                onClick={() => handleFiltering(filter)}
              >
                {filter.split("_").join(" ")}
              </p>
            ))}
          </div>
        )}
      </div>
      <div>
        {nimed &&
          nimed.map((nimi, i) => (
            <p
              onClick={() => handleRemoveTagasisideAndja(i)}
            >{`EST-${nimi}`}</p>
          ))}
      </div>
    </>
  );
}

export default TagasisideAndjad;
