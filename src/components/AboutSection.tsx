import {
  Utensils,
  Wine,
  Waves,
  Dumbbell,
  Laptop,
  Smile,
  Sparkles,
} from "lucide-react";

export default function AboutSection() {
  const amenities = [
    { icon: Utensils, label: "4 Restaurants" },
    { icon: Wine, label: "2 Bars" },
    { icon: Waves, label: "Swimming Pools" },
    { icon: Dumbbell, label: "Fitness Area" },
    { icon: Laptop, label: "Coworking Space" },
    { icon: Smile, label: "Kids' Center" },
    { icon: Sparkles, label: "SPA & Wellness" },
  ];

  return (
    <section
      id="about"
      className="lg:h-screen w-full flex items-center justify-center bg-gray-50 py-20 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">
        {/* Left Column: Text & Amenities */}
        <div className="flex flex-col justify-center h-full max-w-xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-8 leading-tight">
            Modern ALL-IN-ONE Aparthotel
          </h2>
          
          <div className="space-y-6 text-gray-500 text-lg font-light mb-12 leading-relaxed">
            <p>
              A thoughtfully designed investment concept where everything needed for
              living, leisure, and rental income is integrated into a single
              resort complex.
            </p>
            <p>
              The All-in-One format makes the project highly attractive to both
              tourists and long-term residents. This comprehensive resort format
              directly drives strong rental demand and consistently high occupancy
              rates.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-6 gap-x-8">
            {amenities.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-700">
                <item.icon size={20} strokeWidth={1.5} />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-[60vh] lg:h-[85vh] w-full">
          <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop"
              alt="Interior Concept"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for mood (optional, based on reference image style) */}
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
          </div>

          {/* Floating Concept Card */}
          <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-xs">
            <p className="text-xs text-gray-500 font-bold tracking-wider uppercase mb-1">
              INTERIOR CONCEPT
            </p>
            <p className="text-gray-900 font-medium text-lg leading-snug">
              Modern aesthetics with natural materials
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
