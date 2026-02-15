"use client";

import { useState } from "react";
import { TrendingUp, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export default function LocationSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      area: "BUSINESS BAY",
      title: "Dubai Water Canal",
      description:
        "One River Point está ubicado en el corazón de Business Bay, sobre una parcela única frente al Dubai Water Canal. Una de las zonas más dinámicas de Dubái, combinando estilo de vida cosmopolita, conexión directa con Downtown y un alto potencial de valorización a largo plazo.",
      features: [
        "01 min Dubai Water Canal Boardwalk",
        "07 min Burj Khalifa & Dubai Mall",
        "10 min DIFC & City Walk",
      ],
      marketInsight:
        "Business Bay continúa consolidándose como uno de los distritos más demandados de Dubái, impulsado por infraestructura de primer nivel, proyectos de alta gama y fuerte interés tanto de residentes como de inversores internacionales.",
      image: "/ONE RIVER PONT PROJECT ELLINGTON.png",
    },
    {
      area: "ISLA AL MARJAN · RAS AL KHAIMAH",
      title: "Luxury Island Resort",
      description:
        "Costa Mare está ubicado frente al mar en Isla Al Marjan, uno de los destinos costeros más exclusivos y con mayor proyección de crecimiento en Emiratos Árabes Unidos. Un desarrollo icónico que combina vida estilo resort, sostenibilidad, tecnología inteligente y acceso directo a la playa.",
      features: [
        "Acceso directo a playa privada",
        "Frente al mar con vistas al Golfo Arábigo",
        "Zona en expansión con resorts, casinos y lifestyle premium",
      ],
      marketInsight:
        "Isla Al Marjan está experimentando una fuerte valorización impulsada por nuevos resorts de lujo, desarrollo turístico internacional y grandes inversiones estratégicas en Ras Al Khaimah, posicionándola como una alternativa sólida a Dubái para inversores de largo plazo.",
      image: "/Costa Mare.jpg",
    },
    {
      area: "UPTOWN DUBAI",
      title: "The New Heart of Uptown",
      description:
        "Mercer House está ubicado en Uptown Dubai, uno de los distritos urbanos de nueva generación más ambiciosos de la ciudad. Un proyecto icónico que combina diseño contemporáneo, bienestar, entretenimiento y una vibrante vida urbana, posicionándose como el nuevo punto de encuentro residencial y social de Dubái.",
      features: [
        "01 min Uptown Plaza",
        "05 min DMCC Metro Station",
        "17 min Palm Jumeirah",
        "22 min Burj Khalifa & Dubai Mall",
      ],
      marketInsight:
        "Uptown Dubai se encuentra en plena revitalización y consolidación como un nuevo centro urbano premium. La combinación de conectividad, lifestyle, espacios comerciales y residenciales de diseño posiciona a Mercer House como una oportunidad atractiva tanto para vivir como para invertir en una zona con fuerte potencial de valorización.",
      image: "/Mercer House.jpg",
    },
    {
      area: "SHEIKH ZAYED ROAD · DUBÁI",
      title: "Urban Connectivity Redefined",
      description:
        "Sobha Central se ubica directamente sobre Sheikh Zayed Road, la arteria más importante de Dubái. Un desarrollo de uso mixto compuesto por seis torres residenciales interconectadas, diseñado para quienes buscan vivir, trabajar e invertir en el verdadero centro del movimiento urbano de la ciudad.",
      features: [
        "05 min Jebel Ali Metro Station",
        "Conexión directa a Sheikh Zayed Road",
        "Vistas panorámicas a Dubai Marina, JLT, Bluewaters y Palm Jumeirah",
      ],
      marketInsight:
        "Los proyectos ubicados sobre Sheikh Zayed Road mantienen una alta demanda tanto residencial como de inversión. La combinación de conectividad, uso mixto, amenities de gran escala y la firma Sobha posicionan a Sobha Central como una oportunidad sólida de valorización y rentabilidad a mediano y largo plazo.",
      image: "/SC-TH-401.jpg",
    },
    {
      area: "MBR CITY · NAD AL SHEBA · DUBÁI",
      title: "Nature at the Heart of the City",
      description:
        "Sobha Hartland II es una comunidad residencial waterfront de lujo de más de 8 millones de pies cuadrados, ubicada estratégicamente cerca del centro de Dubái. Un desarrollo icónico que combina lagunas, playas artificiales, amplias áreas verdes y residencias de alto nivel, ofreciendo un equilibrio perfecto entre naturaleza, exclusividad y conexión urbana.",
      features: [
        "10 min Downtown Dubai & Burj Khalifa",
        "10 min Dubai Design District (D3)",
        "15 min Dubai Creek Harbour",
        "Acceso rápido a Ras Al Khor Road y Al Khail Road",
      ],
      marketInsight:
        "Las comunidades master plan waterfront en zonas centrales como MBR City presentan una de las mayores proyecciones de valorización en Dubái. Sobha Hartland II capitaliza el éxito probado de Sobha Hartland, combinando marca premium, escala, naturaleza y ubicación estratégica, convirtiéndolo en una oportunidad sólida tanto para vivir como para invertir a largo plazo.",
      image: "/proyecto4.png",
    },
    {
      area: "SHEIKH MOHAMMED BIN ZAYED ROAD · DUBÁI",
      title: "The Italian Soul of Dubai",
      description:
        "Azizi Milan es una ciudad dentro de la ciudad, inspirada en el estilo de vida, la moda y la arquitectura de Milán. Ubicado estratégicamente sobre Sheikh Mohammed Bin Zayed Road, este master development combina residencias, retail, oficinas, cultura, bienestar y entretenimiento en una comunidad autosuficiente, sostenible y de nueva generación.",
      features: [
        "Acceso directo a Sheikh Mohammed Bin Zayed Road",
        "Conectividad rápida a Dubai International Airport y Al Maktoum Airport",
        "Cerca de Global Village, IMG Worlds of Adventure y distritos clave de Dubái",
      ],
      marketInsight:
        "Azizi Milan se posiciona como uno de los desarrollos urbanos más ambiciosos de Dubái, destacando por su concepto net-zero carbon city, su enfoque walkable, y su integración de lifestyle, retail y negocios. Los master communities autosuficientes con identidad fuerte y visión sostenible presentan un alto potencial de valorización y demanda a largo plazo, tanto para residentes como para inversores.",
      image: "/Aerial.jpg",
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="proyectos" className="p-3 md:p-4 min-h-screen w-full flex flex-col box-border">
      <div className="relative flex-grow rounded-[2.5rem] overflow-hidden flex items-center transition-all duration-500">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            key={currentProject.image} // Force re-render on image change for animation
            src={currentProject.image}
            alt={currentProject.title}
            className="w-full h-full object-cover grayscale-[30%] transition-opacity duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-black/80 z-10"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 h-full items-center">
          {/* Left Column Content */}
          <div className="max-w-2xl py-12">
            <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-4 animate-fade-in">
              {currentProject.area}
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium mb-6 animate-fade-in">
              {currentProject.title}
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl animate-fade-in">
              {currentProject.description}
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-12">
              {currentProject.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-white flex-shrink-0 group-hover:border-white transition-colors">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-gray-300 text-lg font-light group-hover:text-white transition-colors">
                    {feature}
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
                <span className="text-white font-medium block mb-1">Market Insight</span>
                {currentProject.marketInsight}
              </p>
            </div>
          </div>

          {/* Right Column: Navigation */}
          <div className="hidden lg:flex flex-col items-end justify-center h-full gap-4">
            <div className="flex gap-4">
              <button
                onClick={prevProject}
                className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextProject}
                className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex gap-2 mt-4">
                {projects.map((_, idx) => (
                    <div 
                        key={idx}
                        className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
                    />
                ))}
            </div>
          </div>
          
          {/* Mobile Navigation (Visible only on small screens) */}
           <div className="lg:hidden flex justify-between items-center mt-8 pb-8">
              <button
                onClick={prevProject}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20"
              >
                <ChevronLeft size={20} />
              </button>
              
               <div className="flex gap-2">
                {projects.map((_, idx) => (
                    <div 
                        key={idx}
                        className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/30'}`}
                    />
                ))}
            </div>

              <button
                onClick={nextProject}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20"
              >
                <ChevronRight size={20} />
              </button>
           </div>
        </div>
      </div>
    </section>
  );
}
