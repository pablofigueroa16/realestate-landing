import { TrendingUp } from "lucide-react";

export default function LocationSection() {
  const distances = [
    { time: "02", label: "Minutes to Pandawa Beach" },
    { time: "08", label: "Minutes to Melasti Beach" },
    { time: "10", label: "Minutes to Nusa Dua" },
  ];

  return (
    <section className="p-3 md:p-4 min-h-screen w-full flex flex-col box-border">
      <div className="relative flex-grow rounded-[2.5rem] overflow-hidden flex items-center">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000&auto=format&fit=crop"
            alt="Bali Temple Landscape"
            className="w-full h-full object-cover grayscale-[30%]"
          />
          <div className="absolute inset-0 bg-black/80 z-10"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 h-full items-center">
          
          {/* Left Column Content */}
          <div className="max-w-2xl py-12">
            <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-4">
              Pandawa Area
            </p>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium mb-6">
              Prime Location — <span className="text-gray-300">South Bali</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
              The project is located in the Pandawa area — one of the fastest-growing
              destinations on the island, combining premium beaches, developed
              infrastructure, and strong investment potential.
            </p>

            {/* Distances List */}
            <div className="space-y-6 mb-12">
              {distances.map((item, index) => (
                <div key={index} className="flex items-center gap-6 group">
                  <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white text-sm font-medium group-hover:border-white transition-colors">
                    {item.time}
                  </div>
                  <span className="text-gray-300 text-lg font-light group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Market Insight Card */}
            <div className="bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 max-w-lg">
              <div className="text-emerald-400 mb-4">
                <TrendingUp size={24} />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="text-white font-medium">Market Insight:</span> The area is actively developing, driving property value growth and
                attracting strong interest from investors.
              </p>
            </div>
          </div>

          {/* Right Column (Spacer for visual balance with background) */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
