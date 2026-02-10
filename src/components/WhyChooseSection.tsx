import { CheckCircle2, Play } from "lucide-react";

export default function WhyChooseSection() {
  const benefits = [
    "Thorough due diligence of developers",
    "Focus on liquidity & high ROI potential",
    "Full transparency & legal safety",
    "End-to-end support including resale assistance",
  ];

  return (
    <section className="h-[89vh] w-full flex items-center justify-center bg-gray-50 py-20 lg:py-0 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center h-full">
        {/* Left Column: Image/Video */}
        <div className="relative h-[50vh] lg:h-[65vh] w-full group cursor-pointer">
          <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              src="https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=1000&auto=format&fit=crop"
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 transition-transform duration-300 group-hover:scale-110">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Play size={24} className="ml-1 text-gray-900 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col justify-center h-full max-w-xl">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-8 leading-tight">
            Why Investors Choose Estetico Estate
          </h2>
          
          <p className="text-gray-500 text-lg font-light mb-10 leading-relaxed">
            We work exclusively with carefully vetted and high-potential projects in
            Bali. Our goal is to help our clients make well-informed and strategic
            investment decisions.
          </p>

          <div className="space-y-5 mb-12">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-center gap-4 text-gray-700">
                <CheckCircle2 size={24} className="text-gray-900 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-lg font-light">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-900 font-medium italic text-lg border-l-4 border-gray-900 pl-4 py-1">
            "For us, reputation matters more than a quick deal."
          </p>
        </div>
      </div>
    </section>
  );
}
