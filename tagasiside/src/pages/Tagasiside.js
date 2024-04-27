import React, { useState } from "react";

function Tagasiside() {
  const [tagasisided, muudaTagasiside] = useState([
    "Oli hea",
    "Huvitav",
    "Teistsugune",
    "Põnev",
  ]);

  return (
    <div>
      Tagasisided:
      <div>
        {tagasisided.map((t) => 
          <div>{t}</div>
        )}
      </div>
    </div>
  );
}

export default Tagasiside;
