"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useMemo } from "react";

interface PropertyMapClientProps {
  latitude: number;
  longitude: number;
  title: string;
}

// Fix for default marker icon missing in Next.js/Webpack.
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function PropertyMapClient({
  latitude,
  longitude,
  title,
}: PropertyMapClientProps) {
  const position: [number, number] = [latitude, longitude];
  const mapKey = useMemo(
    () => `${latitude}-${longitude}-${title}`,
    [latitude, longitude, title]
  );

  return (
    <MapContainer
      key={mapKey}
      center={position}
      zoom={14}
      scrollWheelZoom={false}
      className="w-full h-full z-0"
      style={{ minHeight: "100%", width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
        <Popup>
          <span className="font-sans text-sm font-medium">{title}</span>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
