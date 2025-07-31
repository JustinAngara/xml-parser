// Helper: Convert miles to degrees for longitude and latitude
const milesToDegrees = (miles, lat) => {
  const latDeg = miles * 0.01449; 
  const lngDeg = miles * 0.01449 / Math.cos(lat * Math.PI / 180);
  return { latDeg, lngDeg };
};

// Generate circular coordinates using miles
const createCircle = (centerLng, centerLat, radiusMiles, points = 1024) => {
  const { latDeg, lngDeg } = milesToDegrees(radiusMiles, centerLat);
  const coordinates = [];

  for (let i = 0; i < points; i++) {
    const angle = (i * 2 * Math.PI) / points;
    const lng = centerLng + lngDeg * Math.cos(angle);
    const lat = centerLat + latDeg * Math.sin(angle);
    coordinates.push([lng, lat]);
  }

  // Close the polygon by repeating the first coordinate
  coordinates.push(coordinates[0]);

  return coordinates;
};

export const usStatesGeoJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { id: "AREA1", name: "Kansas City", value: 85 },
      geometry: {
        type: "Polygon",
        coordinates: [createCircle(-94.5786, 39.0997, 5)]
      }
    },
    {
      type: "Feature",
      properties: { id: "AREA2", name: "New York City", value: 72 },
      geometry: {
        type: "Polygon",
        coordinates: [createCircle(-74.0060, 40.7128, 5)]
      }
    },
    {
      type: "Feature",
      properties: { id: "AREA3", name: "Los Angeles", value: 93 },
      geometry: {
        type: "Polygon",
        coordinates: [createCircle(-118.2437, 34.0522, 5)]
      }
    }
  ]
};

export const getStateColor = (value) => {
  if (value >= 80) return '#ff6b6b';
  if (value >= 60) return '#4ecdc4';
  return '#96ceb4';
};
