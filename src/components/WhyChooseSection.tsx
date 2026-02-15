"use client";

import { CheckCircle2, Play } from "lucide-react";
import { useState, useRef } from "react";

export default function WhyChooseSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const benefits = [
    "Dubái: visión económica y crecimiento sostenido a 20 años.",
    "Alianza estratégica basada en datos, no solo intermediación.",
    "Consultoría inmobiliaria estratégica en tu idioma.",
    "Acceso a propiedades VIP y oportunidades off-market",
  ];

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
        videoRef.current.currentTime = 0; // Reset to start
    }
  };

  return (
    <section id="video" className="h-screen w-full flex items-center justify-center bg-gray-50 py-10 lg:py-0 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center h-full">
        {/* Left Column: Image/Video */}
        <div className="relative h-[40vh] lg:h-[60vh] w-full group">
          <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl bg-black">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              playsInline
              onEnded={handleVideoEnd}
              controls={isPlaying}
            >
              <source src="/video_why.mp4" type="video/mp4" />
            </video>
            
            {/* Play Button Overlay */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer group-hover:bg-black/10 transition-colors"
                onClick={handlePlay}
              >
                {/* Dark overlay for contrast */}
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* YouTube-style Play Button */}
                <div className="relative z-30 w-20 h-14 bg-red-600 rounded-2xl flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 hover:bg-red-700">
                  <Play size={32} className="text-white fill-white ml-1" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col justify-center h-full max-w-xl">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-medium text-gray-900 mb-6 leading-tight">
            Por qué Dubái es el centro de la inversión inmobiliaria del futuro
          </h2>
          
          <p className="text-gray-500 text-base lg:text-lg font-light mb-6 leading-relaxed">
            Dubái se ha posicionado como uno de los mercados inmobiliarios más sólidos, visionarios y rentables del mundo, con una estrategia clara de crecimiento para las próximas dos décadas. 
          </p>

          <div className="space-y-3 mb-8">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 size={20} className="text-gray-900 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-base lg:text-lg font-light">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-900 font-medium italic text-base lg:text-lg border-l-4 border-gray-900 pl-4 py-1">
            &rdquo;Para nosotros, la reputación importa más que un trato rápido.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
