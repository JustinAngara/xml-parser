import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import mapStyle from "./MapTooling/MapStyle";
const Map = () => {
  const mapRef = useRef(null);
  // this is the Google Maps API key with restricted domain to github.io/JustinAngara
  const API_KEY = "";
  

  // run for page on load
  useEffect(() => {
    const loader = new Loader({
      apiKey: API_KEY,
      version: "weekly",
      libraries: ["places"],
    });

    loader.load().then((google) => {
      new google.maps.Map(mapRef.current, {
        center: { lat: 41.8781, lng: -87.6298 },
        zoom: 12,
        styles: mapStyle,
      });
    });
  }, []);

  // lets load up data of network sites (long lat data, radius 5 miles per site)

  return (
    <div>
      {/* This is where the map is at */}
      <div style={{ width: "95vw", height: "95vh" }}>
        <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
      </div>


    </div>
  );
};

export default Map;
