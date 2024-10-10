import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { SvgIcon } from '@mui/material';

const createCustomIcon = () => {
  const svgIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40" fill="red">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  `;

  return L.divIcon({
    className: 'custom-icon', // Optional: Add a class for additional styling
    html: svgIcon,
    iconSize: [40, 40], // Size of the icon
    iconAnchor: [20, 40], // Position the icon properly on the map
    popupAnchor: [0, -40], // Popup will open above the icon
  });
};


const MapComponent = () => {
  const position = [9.770004, 77.090713];

  return (
    <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={createCustomIcon()}>
        <Popup>Our Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
