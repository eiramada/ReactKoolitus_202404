import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ChangeView from "./ChangeView";
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map(props) {
  const shopUrl = process.env.REACT_APP_SHOPS_DB_URL;
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch(shopUrl)
      .then((res) => res.json())
      .then((json) => setShops(json || []));
  }, [shopUrl]);

  return (
    <div>
      <MapContainer
        className="map"
        center={props.mapCoordinaates.lngLat}
        zoom={props.mapCoordinaates.zoom}
        scrollWheelZoom={false}
      >
        <ChangeView
          center={props.mapCoordinaates.lngLat}
          zoom={props.mapCoordinaates.zoom}
        />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {shops.map((shop) => (
          <Marker position={[shop.lat, shop.long]}>
            <Popup>
              {shop.name} <br /> Avatud {shop.openTime}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
