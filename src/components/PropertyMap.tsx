"use client";

import dynamic from "next/dynamic";

interface PropertyMapProps {
  latitude: number;
  longitude: number;
  title: string;
}

const PropertyMapClient = dynamic(() => import("./PropertyMapClient"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-900 flex items-center justify-center">
      <span className="text-white/30 uppercase tracking-widest text-sm animate-pulse">
        Cargando Mapa...
      </span>
    </div>
  ),
});

export default function PropertyMap({ latitude, longitude, title }: PropertyMapProps) {
  return <PropertyMapClient latitude={latitude} longitude={longitude} title={title} />;
}
