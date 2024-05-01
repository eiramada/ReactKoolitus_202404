import React, { useRef, useState } from "react";
import "./tagasiside.css";

function Tagasiside() {
  const [tagasisided, muudaTagasiside] = useState([
    "Oli hea",
    "Huvitav",
    "Teistsugune",
    "Põnev",
  ]);

  const addTagasisideRef = useRef(null);

  const handleRemoveTagasiside = (index) => {
    // if (Number.isNaN(index)) return;
    // const tagasisidedCopy = [...tagasisided];
    // tagasisidedCopy.splice(index, 1);
    // muudaTagasiside(tagasisidedCopy);

    tagasisided?.splice(index, 1);
    muudaTagasiside(tagasisided?.slice());
  };

  const handleAddTagasisisde = () => {
    const addedTagasiside = addTagasisideRef?.current?.value;
    // muudaTagasiside((prev) => [...prev, addedTagasiside]);
    tagasisided?.splice(tagasisided?.length, 1, addedTagasiside);
    muudaTagasiside(tagasisided?.slice());

    addTagasisideRef.current.value = null;
  };

  return (
    <div>
      <p>Tagasisided:</p>

      <div>
        {tagasisided &&
          tagasisided.length > 0 &&
          tagasisided.map((tagasiside, i) => (
            <div key={i} className="tagasiside__row">
              <p className="tagasisided__name">{tagasiside}</p>
              <button onClick={() => handleRemoveTagasiside(i)}>X</button>
            </div>
          ))}
      </div>
      <div className="tagasiside__row">
        <p className="tagasisided__name">Lisa uus tagasiside</p>
        <input ref={addTagasisideRef} className="tagasisided__name" />
        <button onClick={handleAddTagasisisde}>Sisesta</button>
      </div>
    </div>
  );
}

export default Tagasiside;
