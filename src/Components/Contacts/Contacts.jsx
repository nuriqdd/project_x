import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Contacts = () => {
  const position = [42.82881661578283, 74.58419582287019];
  return (
    <div className="contacts">
      <div className="contacts-uptext">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
        perspiciatis blanditiis quod nihil deserunt nulla.
      </div>
      <div className="contacts-block">
        <div className="contacts-block-div">
          insta: <br /> facebook: <br /> phone number: <br /> address:
        </div>
        <div className="contacts-block-div">
          melsov013 <br /> Nurlan <br /> 0700250270 <br /> syinbaeva
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={false}
          style={{ margin: "0 auto", marginTop: "50px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[42.82881661578283, 74.58419582287019]}>
            <Popup>
              Shop Wine <br />
              Магазин Вина <br />
              <a href="https://2gis.kg/bishkek/geo/15763234351062857?m=74.586734%2C42.871584%2F16">
                2-GIS
              </a>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Contacts;
