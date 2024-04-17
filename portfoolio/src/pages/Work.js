import React from "react";
import { Link } from "react-router-dom";

function Work() {
  return (
    <div>
      <Link to="/">
        <button>Tagasi</button>
      </Link>
      <div>
        Siin on veidi juttu tööst
      </div>
    </div>
  );
}

export default Work;
