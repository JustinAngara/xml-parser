import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, Popup } from 'react-leaflet';
import { usStatesGeoJSON, getStateColor as getValueColor } from '../data/usStatesGeoJSON';
import 'leaflet/dist/leaflet.css';
import './Map.css';

const Map = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  const handleStateHover = (state) => {
    setHoveredState(state);
  };

  const handleStateLeave = () => {
    setHoveredState(null);
  };

  const getStateColor = (state) => {
    if (selectedState && selectedState.properties.id === state.properties.id) {
      return '#ff4757';
    }
    if (hoveredState && hoveredState.properties.id === state.properties.id) {
      return '#ffa502';
    }
    return getValueColor(state.properties.value);
  };

  const geoJsonStyle = (feature) => {
    return {
      fillColor: getStateColor(feature),
      weight: 2,
      opacity: 1,
      color: '#333',
      fillOpacity: 0.7
    };
  };

  const onEachFeature = (feature, layer) => {
    layer.on({
      click: () => handleStateClick(feature),
      mouseover: () => handleStateHover(feature),
      mouseout: handleStateLeave
    });
  };

  return (
    <div className="map-page">
      <div className="map-header">
        <h1>United States Map</h1>
        <p>Interactive map with dynamic GeoJSON data visualization</p>
      </div>

      <div className="map-container">
        <div className="map-controls">
          <div className="control-group">
            <h3>Map Controls</h3>
            <button 
              className="control-button"
              onClick={() => setSelectedState(null)}
            >
              Clear Selection
            </button>
            <button 
              className="control-button"
              onClick={() => {
                const randomState = states[Math.floor(Math.random() * states.length)];
                setSelectedState(randomState);
              }}
            >
              Random State
            </button>
          </div>

          {selectedState && (
            <div className="state-info">
              <h3>Selected State</h3>
              <div className="info-card">
                <h4>{selectedState.properties.name}</h4>
                <p><strong>Value:</strong> {selectedState.properties.value}</p>
                <p><strong>ID:</strong> {selectedState.properties.id}</p>
                <div 
                  className="color-indicator" 
                  style={{ backgroundColor: getValueColor(selectedState.properties.value) }}
                ></div>
              </div>
            </div>
          )}
        </div>

        <div className="map-visualization">
          <MapContainer
            center={[39.8283, -98.5795]}
            zoom={4}
            className="us-map"
            style={{ height: '500px', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <GeoJSON
              data={usStatesGeoJSON}
              style={geoJsonStyle}
              onEachFeature={onEachFeature}
            />
            {selectedState && (
              <Popup 
                position={[
                  (selectedState.geometry.coordinates[0][0][1] + selectedState.geometry.coordinates[0][2][1]) / 2,
                  (selectedState.geometry.coordinates[0][0][0] + selectedState.geometry.coordinates[0][2][0]) / 2
                ]}
              >
                <div>
                  <h3>{selectedState.properties.name}</h3>
                  <p><strong>Value:</strong> {selectedState.properties.value}</p>
                  <p><strong>ID:</strong> {selectedState.properties.id}</p>
                </div>
              </Popup>
            )}
          </MapContainer>
        </div>

        <div className="map-legend">
          <h3>Data Legend</h3>
          <div className="legend-items">
            <div className="legend-item">
              <div className="legend-color" style={{ backgroundColor: '#ff6b6b' }}></div>
              <span>High Value (80-100)</span>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{ backgroundColor: '#4ecdc4' }}></div>
              <span>Medium Value (60-79)</span>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{ backgroundColor: '#96ceb4' }}></div>
              <span>Low Value (40-59)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map; 