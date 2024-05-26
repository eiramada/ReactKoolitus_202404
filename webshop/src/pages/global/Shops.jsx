import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Map from "../../components/Map";

function Shops() {
  const [coordinaates, setCoordinates] = useState({
    lngLat: [58.888, 25.5425],
    zoom: 7,
  });

  const shopUrl = process.env.REACT_APP_SHOPS_DB_URL;
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch(shopUrl)
      .then((res) => res.json())
      .then((json) => setShops(json || []));
  }, [shopUrl]);

  return (
    <div>
      <Button
        onClick={() => setCoordinates({ lngLat: [58.888, 25.5425], zoom: 7 })}
      >
        Kõik poed
      </Button>

      {shops.map((shop) => (
        <Button
          onClick={() =>
            setCoordinates({ lngLat: [shop.lat, shop.long], zoom: 15 })
          }
        >
          {shop.name}
        </Button>
      ))}

      <Map mapCoordinaates={coordinaates} />
    </div>
  );
}

export default Shops;
