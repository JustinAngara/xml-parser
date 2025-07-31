import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import mapStyle from "./MapTooling/MapStyle";
import { longLat } from "./MapTooling/MapData";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;


const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: API_KEY,
      version: "weekly",
      libraries: ["places"],
    });

    loader.load().then((google) => {
      const map = createMap(google, mapRef.current);
      generateCircles(map, google);
    });
  }, []);

  return (
    <div style={{ width: "95vw", height: "95vh" }}>
      <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
      <a href="https://justinangara.github.io/personal-website/"></a>
    </div>
  );
};

/** 
 * Create the map instance 
 */
const createMap = (google, mapElement) => {
  return new google.maps.Map(mapElement, {
    center: { lat: 41.8781, lng: -87.6298 }, // Chicago default
    zoom: 6,
    styles: mapStyle,
  });
};

/**
 * Calculate distance between two points using Haversine formula
 */
const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371000; // Earth's radius in meters
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c; // Distance in meters
};

/**
 * Check if two circles overlap
 */
const circlesOverlap = (center1, center2, radius) => {
  const distance = calculateDistance(center1.lat, center1.lng, center2.lat, center2.lng);
  return distance < (radius * 2); // Overlap if distance is less than sum of radii
};

/** 
 * Generate 1-mile radius circles for each location with overlap detection
 */
const generateCircles = (map, google) => {
  // Create a single InfoWindow that will be reused for all circles
  const infoWindow = new google.maps.InfoWindow();
  const radius = 1 * 1609.34; // 1 mile in meters
  const circles = [];

  // First pass: Create all circles and store them
  longLat.data.forEach((location, index) => {
    const circle = new google.maps.Circle({
      strokeColor: "#FF00FF",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF00FF",
      fillOpacity: 0.35,
      map,
      center: { lat: location.lat, lng: location.long },
      radius: radius,
      clickable: true,
    });

    circles.push({
      circle: circle,
      location: location,
      index: index,
      isOverlapping: false
    });
  });

  // Second pass: Check for overlaps and update colors
  circles.forEach((circleData, i) => {
    let hasOverlap = false;
    
    // Check against all other circles
    for (let j = 0; j < circles.length; j++) {
      if (i !== j) {
        if (circlesOverlap(
          { lat: circleData.location.lat, lng: circleData.location.long },
          { lat: circles[j].location.lat, lng: circles[j].location.long },
          radius
        )) {
          hasOverlap = true;
          break;
        }
      }
    }

    // Update circle color based on overlap
    if (hasOverlap) {
      circleData.circle.setOptions({
        strokeColor: "#00FF00",
        fillColor: "#00FF00",
      });
      circleData.isOverlapping = true;
    }

    // Add click event listener to each circle
    circleData.circle.addListener("click", (event) => {
      const overlapStatus = circleData.isOverlapping ? "Yes (Red)" : "No (Magenta)";
      
      // Create the popup content
      const contentString = `
        <div style="padding: 10px; font-family: Arial, sans-serif;">
          <h3 style="margin: 0 0 10px 0; color: #333;">Location ${circleData.index + 1}</h3>
          <div style="margin-bottom: 5px;">
            <strong>Latitude:</strong> ${circleData.location.lat.toFixed(6)}
          </div>
          <div style="margin-bottom: 5px;">
            <strong>Longitude:</strong> ${circleData.location.long.toFixed(6)}
          </div>
          <div style="margin-bottom: 5px;">
            <strong>Radius:</strong> 1 mile (1.61 km)
          </div>
          <div style="margin-bottom: 5px;">
            <strong>Overlapping:</strong> ${overlapStatus}
          </div>
          <div style="font-size: 12px; color: #666; margin-top: 10px;">
            Click coordinates: ${event.latLng.lat().toFixed(6)}, ${event.latLng.lng().toFixed(6)}
          </div>
        </div>
      `;

      // Set the content and position of the InfoWindow
      infoWindow.setContent(contentString);
      infoWindow.setPosition(event.latLng);
      infoWindow.open(map);
    });

    // Add hover effects (maintain original colors but increase opacity)
    circleData.circle.addListener("mouseover", () => {
      const currentStrokeColor = circleData.isOverlapping ? "#00FF00" : "#FF00FF";
      const currentFillColor = circleData.isOverlapping ? "#00FF00" : "#FF00FF";
      
      circleData.circle.setOptions({
        strokeColor: currentStrokeColor,
        fillColor: currentFillColor,
        strokeOpacity: 1.0,
        fillOpacity: 0.5,
      });
    });

    circleData.circle.addListener("mouseout", () => {
      const currentStrokeColor = circleData.isOverlapping ? "#00FF00" : "#FF00FF";
      const currentFillColor = circleData.isOverlapping ? "#00FF00" : "#FF00FF";
      
      circleData.circle.setOptions({
        strokeColor: currentStrokeColor,
        fillColor: currentFillColor,
        strokeOpacity: 0.8,
        fillOpacity: 0.35,
      });
    });
  });
};

export default Map;