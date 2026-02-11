import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function UnitTypesSection() {
  const units = [
    {
      title: "Smart Villas",
      description:
        "Compact standalone units optimized for high rental yields and privacy.",
      size: "from 30 m²",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop", // Abstract/Colorful vibe
      alt: "Smart Villas Concept",
    },
    {
      title: "Penthouses",
      description:
        "Top-floor premium units offering panoramic views and exclusive amenities.",
      size: "from 35 m²",
      image:
        "https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=1000&auto=format&fit=crop", // High fashion/B&W vibe
      alt: "Penthouse Lifestyle",
    },
    {
      title: "Apartments",
      description:
        "Spacious layouts designed for long-term comfort and family living.",
      size: "from 47 m²",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1000&auto=format&fit=crop", // Interior
      alt: "Apartment Interior",
    },
  ];

  return (
    <section id="units" className="py-20 bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
              Formatos de inversión inmobiliaria
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Selecciona entre distintos tipos de unidades off-plan en Dubái según rentabilidad, plazo y objetivo de inversión.
            </p>
          </div>
          
          <button className="flex items-center gap-2 text-gray-900 font-medium hover:text-emerald-600 transition-colors group">
            Get full catalog
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {units.map((unit, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-[2rem] shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 rounded-[1.5rem] overflow-hidden mb-6">
                <img
                  src={unit.image}
                  alt={unit.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-gray-900 shadow-sm">
                  {unit.size}
                </div>
              </div>

              {/* Content */}
              <div className="px-2 pb-2 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {unit.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                  {unit.description}
                </p>

                <button className="w-full py-4 border border-gray-200 rounded-2xl flex items-center justify-center gap-2 text-gray-900 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all group">
                  Check Details
                  <ArrowUpRight size={18} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
