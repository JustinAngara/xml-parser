// Simple GeoJSON with 3 random circular areas
// Helper function to generate circular coordinates
const createCircle = (centerLng, centerLat, radius, points = 32) => {
  const coordinates = [];
  for (let i = 0; i <= points; i++) {
    const angle = (i * 2 * Math.PI) / points;
    const lng = centerLng + radius * Math.cos(angle);
    const lat = centerLat + radius * Math.sin(angle);
    coordinates.push([lng, lat]);
  }
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
        coordinates: [createCircle(-94.5786, 39.0997, 0.1)]
      }
    },
    {
      type: "Feature",
      properties: { id: "AREA2", name: "New York City", value: 72 },
      geometry: {
        type: "Polygon",
        coordinates: [createCircle(-74.0060, 40.7128, 0.1)]
      }
    },
    {
      type: "Feature",
      properties: { id: "AREA3", name: "Los Angeles", value: 93 },
      geometry: {
        type: "Polygon",
        coordinates: [createCircle(-118.2437, 34.0522, 0.1)]
      }
    }
  ]
};

// Color mapping function
export const getStateColor = (value) => {
  if (value >= 80) return '#ff6b6b'; // High value
  if (value >= 60) return '#4ecdc4'; // Medium value
  return '#96ceb4'; // Low value
}; 