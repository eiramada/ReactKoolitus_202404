import { Button } from "@mui/material";
import { useState } from "react";
import Map from "../../components/Map";

function Shops() {
  const [coordinaates, setCoordinates] = useState({
    lngLat: [59.4378, 24.7574],
    zoom: 11,
  });

  return (
    <div>
      <Button
        onClick={() => setCoordinates({ lngLat: [59.4378, 24.7574], zoom: 11 })}
      >
        Kõik poed
      </Button>
      <Button
        onClick={() => setCoordinates({ lngLat: [59.4231, 24.7991], zoom: 13 })}
      >
        Ülemiste
      </Button>
      <Button
        onClick={() => setCoordinates({ lngLat: [59.4277, 24.7193], zoom: 13 })}
      >
        Kristiine
      </Button>
      <Map mapCoordinaates={coordinaates} />
    </div>
  );
}

export default Shops;
