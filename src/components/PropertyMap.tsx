"use client";

import dynamic from "next/dynamic";
import { useTranslation } from "@/hooks/useTranslation";

interface PropertyMapProps {
  latitude: number;
  longitude: number;
  title: string;
  nearbyPlaces?: Array<{
    name: string;
    latitude: number;
    longitude: number;
    category?: string;
  }>;
}

function MapLoading() {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full bg-gray-900 flex items-center justify-center">
      <span className="text-white/30 uppercase tracking-widest text-sm animate-pulse">
        {t("property_details.map_loading")}
      </span>
    </div>
  );
}

const PropertyMapClient = dynamic(() => import("./PropertyMapClient"), {
  ssr: false,
  loading: () => <MapLoading />,
});

export default function PropertyMap({
  latitude,
  longitude,
  title,
  nearbyPlaces = [],
}: PropertyMapProps) {
  return (
    <PropertyMapClient
      latitude={latitude}
      longitude={longitude}
      title={title}
      nearbyPlaces={nearbyPlaces}
    />
  );
}
