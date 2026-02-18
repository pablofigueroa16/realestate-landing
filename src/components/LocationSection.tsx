"use client";

import { useState } from "react";
import { TrendingUp, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { LocationProject } from "@/data/landing-content";

interface LocationSectionProps {
  projects?: LocationProject[];
}

export default function LocationSection({ projects: propProjects }: LocationSectionProps) {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const defaultProjects = [
    {
      area: t("location.projects.one_river_point.area"),
      title: t("location.projects.one_river_point.title"),
      description: t("location.projects.one_river_point.description"),
      features: t("location.projects.one_river_point.features") as unknown as string[],
      marketInsight: t("location.projects.one_river_point.market_insight"),
      image: "/ONE RIVER PONT PROJECT ELLINGTON.png",
    },
    {
      area: t("location.projects.costa_mare.area"),
      title: t("location.projects.costa_mare.title"),
      description: t("location.projects.costa_mare.description"),
      features: t("location.projects.costa_mare.features") as unknown as string[],
      marketInsight: t("location.projects.costa_mare.market_insight"),
      image: "/Costa Mare.jpg",
    },
    {
      area: t("location.projects.mercer_house.area"),
      title: t("location.projects.mercer_house.title"),
      description: t("location.projects.mercer_house.description"),
      features: t("location.projects.mercer_house.features") as unknown as string[],
      marketInsight: t("location.projects.mercer_house.market_insight"),
      image: "/Mercer House.jpg",
    },
    {
      area: t("location.projects.sobha_central.area"),
      title: t("location.projects.sobha_central.title"),
      description: t("location.projects.sobha_central.description"),
      features: t("location.projects.sobha_central.features") as unknown as string[],
      marketInsight: t("location.projects.sobha_central.market_insight"),
      image: "/SC-TH-401.jpg",
    },
    {
      area: t("location.projects.sobha_hartland_ii.area"),
      title: t("location.projects.sobha_hartland_ii.title"),
      description: t("location.projects.sobha_hartland_ii.description"),
      features: t("location.projects.sobha_hartland_ii.features") as unknown as string[],
      marketInsight: t("location.projects.sobha_hartland_ii.market_insight"),
      image: "/proyecto4.png",
    },
    {
      area: t("location.projects.azizi_milan.area"),
      title: t("location.projects.azizi_milan.title"),
      description: t("location.projects.azizi_milan.description"),
      features: t("location.projects.azizi_milan.features") as unknown as string[],
      marketInsight: t("location.projects.azizi_milan.market_insight"),
      image: "/Aerial.jpg",
    },
  ];

  const projects = propProjects || defaultProjects;

  if (projects.length === 0) return null;

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
