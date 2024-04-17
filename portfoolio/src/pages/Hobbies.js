import React from "react";
import { Link } from "react-router-dom";

function Hobbies() {
  return (
    <div>
      <Link to="/">
        <button>Tagasi</button>
      </Link>
      <div>Siin on juttu aga hobidest</div>
    </div>
  );
}

export default Hobbies;
