import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Uudised() {
  const [uudised, setUudised] = useState([]);

  useEffect(() => {
    const storedUudised = localStorage.getItem("uudised");
    if (storedUudised) {
      const uudisedArray = JSON.parse(storedUudised);
      setUudised(uudisedArray);
    }
  }, []);
  return (
    <div>
      <div>See on uudiste leht</div>
      {uudised.length > 0 ? (
        uudised.map((uudis, index) => (
          <Link to={"/uudis/" + index} key={index}>
            <div>{uudis}</div>
          </Link>
          
        ))
      ) : (
        <div>Kahjuks uudiseid pole</div>
      )}
    </div>
  );
}

export default Uudised;
