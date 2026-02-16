"use client";

import Link from "next/link";
import {
  ArrowRight,
  Clock,
  TrendingUp,
} from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useTranslation } from "@/hooks/useTranslation";
import Navbar from "./Navbar";

export default function Hero() {
  const { scrollToId } = useSmoothScroll();
  const { t } = useTranslation();

  return (
    <section id="inicio" className="p-3 md:p-4 h-screen w-full flex flex-col box-border overflow-hidden">
      <Navbar />
      <div className="relative flex-grow rounded-[2rem] overflow-hidden flex flex-col">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/VIDEOHERO.mp4" type="video/mp4" />
          </video>
          {/* Subtle gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/20 z-10"></div>
          
          {/* Large Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-10">
            <h1 className="text-[20vw] font-bold text-white tracking-widest translate-y-10">
              DUBAI
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-40 flex-grow flex flex-col justify-center px-6 md:px-12 lg:px-20 -mt-8">
          <div className="max-w-4xl">
            <div className="inline-block mb-4">
              <span className="bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-lg uppercase">
                {t("hero.badge")}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-medium leading-[1.1] mb-6">
              {t("hero.title")}
            </h1>

            <p className="text-white/80 text-base md:text-lg max-w-lg mb-8 font-light leading-relaxed">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#proyectos"
                  onClick={(e) => scrollToId(e, "#proyectos")}
                  scroll={false}
                  className="group flex items-center gap-3 bg-white text-black pl-6 pr-1.5 py-2 rounded-full text-base font-medium hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 w-fit"
                >
                  {t("hero.cta")}
                  <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white group-hover:bg-gray-800 transition-colors">
                    <ArrowRight size={18} />
                  </div>
                </Link>
                
                <Link 
                  href="#contacto"
                  onClick={(e) => scrollToId(e, "#contacto")}
                  scroll={false}
                  className="group flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white pl-6 pr-6 py-2 rounded-full text-base font-medium hover:bg-white/20 transition-all hover:scale-105 active:scale-95 w-fit"
                >
                  {t("hero.cta_consultation")}
                </Link>
            </div>
          </div>
        </div>

        {/* Floating Cards (Bottom Right) */}
        <div className="absolute bottom-6 right-6 md:right-10 lg:right-16 z-40 flex flex-col gap-3 max-w-[300px] w-full hidden md:flex">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-4 rounded-2xl text-white">
            <div className="flex justify-between items-start mb-1">
              <span className="text-2xl font-medium">30%</span>
              <Clock className="text-white/60" size={18} />
            </div>
            <p className="text-base text-white/80 leading-relaxed">
              {t("hero.card_1_text")}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-4 rounded-2xl text-white">
            <div className="flex justify-between items-start mb-1">
              <span className="text-2xl font-medium">1%</span>
              <TrendingUp className="text-white/60" size={18} />
            </div>
            <p className="text-base text-white/80 leading-relaxed">
              {t("hero.card_2_text")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
