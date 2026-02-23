"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useMemo } from "react";
import { useTranslation } from "@/hooks/useTranslation";

interface PropertyMapClientProps {
  latitude: number;
  longitude: number;
  title: string;
  nearbyPlaces: Array<{
    name: string;
    latitude: number;
    longitude: number;
    category?: string;
  }>;
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

const nearbyIcon = L.divIcon({
  className: "nearby-point-icon",
  html: '<span style="display:block;width:12px;height:12px;border-radius:9999px;background:#ffffff;border:2px solid #111827;box-shadow:0 0 0 2px rgba(255,255,255,0.25);"></span>',
  iconSize: [12, 12],
  iconAnchor: [6, 6],
});

const CATEGORY_LABELS = {
  connectivity: { es: "Conectividad", en: "Connectivity" },
  urban_district: { es: "Distrito Urbano", en: "Urban District" },
  finance: { es: "Financiero", en: "Financial" },
  lifestyle: { es: "Lifestyle", en: "Lifestyle" },
  sport: { es: "Deporte", en: "Sports" },
  waterfront: { es: "Waterfront", en: "Waterfront" },
  transport: { es: "Transporte", en: "Transport" },
  entertainment: { es: "Entretenimiento", en: "Entertainment" },
  business: { es: "Negocios", en: "Business" },
  commerce: { es: "Comercio", en: "Commerce" },
  port: { es: "Puerto", en: "Port" },
  health: { es: "Salud", en: "Health" },
  landmark: { es: "Landmark", en: "Landmark" },
} as const;

const CATEGORY_ALIASES: Record<string, keyof typeof CATEGORY_LABELS> = {
  "conectividad": "connectivity",
  "connectivity": "connectivity",
  "distrito urbano": "urban_district",
  "urban district": "urban_district",
  "financiero": "finance",
  "financial": "finance",
  "lifestyle": "lifestyle",
  "deporte": "sport",
  "sports": "sport",
  "waterfront": "waterfront",
  "transporte": "transport",
  "transport": "transport",
  "entretenimiento": "entertainment",
  "entertainment": "entertainment",
  "negocios": "business",
  "business": "business",
  "comercio": "commerce",
  "commerce": "commerce",
  "puerto": "port",
  "port": "port",
  "salud": "health",
  "health": "health",
  "landmark": "landmark",
};

function getLocalizedCategory(category: string | undefined, locale: "es" | "en") {
  if (!category) return undefined;
  const key = CATEGORY_ALIASES[category.trim().toLowerCase()];
  if (!key) return category;
  return CATEGORY_LABELS[key][locale];
}

export default function PropertyMapClient({
  latitude,
  longitude,
  title,
  nearbyPlaces,
}: PropertyMapClientProps) {
  const { locale } = useTranslation();
  const position: [number, number] = [latitude, longitude];
  const mapKey = useMemo(
    () => `${latitude}-${longitude}-${title}-${nearbyPlaces.length}`,
    [latitude, longitude, title, nearbyPlaces.length]
  );

  return (
    <MapContainer
      key={mapKey}
      center={position}
      zoom={12}
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
      {nearbyPlaces.map((place) => (
        <Marker
          key={`${place.name}-${place.latitude}-${place.longitude}`}
          position={[place.latitude, place.longitude]}
          icon={nearbyIcon}
        >
          <Popup>
            <div className="font-sans">
              <p className="text-sm font-semibold">{place.name}</p>
              {place.category ? (
                <p className="text-xs text-gray-500 mt-0.5">
                  {getLocalizedCategory(place.category, locale)}
                </p>
              ) : null}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
