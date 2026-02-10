import { Bed, Bath, Move, MapPin } from "lucide-react";

interface PropertyProps {
  image: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  className?: string;
}

export default function PropertyCard({
  image,
  title,
  price,
  location,
  beds,
  baths,
  sqft,
  className = "",
}: PropertyProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl transition-all duration-300 hover:shadow-2xl ${className}`}
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
      </div>

      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
        {price}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
        <div className="flex items-center gap-2 text-emerald-300 text-sm font-medium mb-2">
          <MapPin size={16} />
          {location}
        </div>
        <h3 className="text-2xl font-serif font-bold mb-4">{title}</h3>
        
        <div className="flex items-center justify-between text-gray-200 text-sm border-t border-white/20 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          <div className="flex items-center gap-2">
            <Bed size={18} />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath size={18} />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <Move size={18} />
            <span>{sqft} m²</span>
          </div>
        </div>
      </div>
    </div>
  );
}
