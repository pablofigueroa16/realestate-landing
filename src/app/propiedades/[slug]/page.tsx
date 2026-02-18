"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ChevronDown, ChevronUp, MapPin, ExternalLink } from "lucide-react";
import { properties, Property } from "@/data/properties";
import { landingContent } from "@/data/landing-content";
import { useTranslation } from "@/hooks/useTranslation";
import { Building2 } from "lucide-react";

export default function PropertyDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { t } = useTranslation();
  const [property, setProperty] = useState<Property | null>(null);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [backLink, setBackLink] = useState("/#unidades");

  useEffect(() => {
    if (params.slug) {
      // Search in default properties (Dubai)
      let foundProperty = properties.find((p) => p.slug === params.slug);
      let isBali = false;
      
      // If not found, search in Bali properties
      if (!foundProperty) {
        const baliUnits = landingContent.bali.units;
        if (baliUnits) {
             foundProperty = baliUnits.find((p) => p.slug === params.slug);
             if (foundProperty) isBali = true;
        }
      }

      if (foundProperty) {
        setProperty(foundProperty);
        setBackLink(isBali ? "/bali#unidades" : "/#unidades");
      } else {
        // Handle not found - redirect or show error
        router.push("/#unidades");
      }
    }
  }, [params.slug, router]);

  // Carousel auto-rotation effect
  useEffect(() => {
    if (!property || !property.images || property.images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [property]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  const toggleAccordion = (category: string) => {
    setActiveAccordion(activeAccordion === category ? null : category);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      {/* 1) HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Media */}
        <div className="absolute inset-0 z-0">
          {property.images && property.images.length > 0 ? (
            // Carousel Mode
            property.images.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={img}
                  alt={`${property.hero.title} - ${idx + 1}`}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
              </div>
            ))
          ) : property.hero.bgVideo ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={property.hero.bgVideo} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={property.hero.bgImage || ""}
              alt={property.hero.title}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/40 z-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-20"></div>
        </div>

        {/* Content */}
        <div className="relative z-30 h-full container mx-auto px-6 md:px-12 flex flex-col justify-end pb-24 md:pb-32">
          <Link 
            href={backLink}
            className="absolute top-8 left-6 md:left-12 flex items-center gap-2 text-white/80 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest backdrop-blur-md bg-white/10 px-4 py-2 rounded-full border border-white/20 w-fit"
          >
            <ArrowLeft size={14} />
            Volver
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-6">
              {property.hero.badges.map((badge, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium uppercase tracking-wider rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-none">
              {property.hero.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mb-10 leading-relaxed">
              {property.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-black font-medium text-sm tracking-wide uppercase hover:bg-gray-100 transition-colors rounded-none">
                Solicitar disponibilidad
              </button>
              <button className="px-8 py-4 bg-transparent border border-white text-white font-medium text-sm tracking-wide uppercase hover:bg-white/10 transition-colors rounded-none flex items-center justify-center gap-2">
                Brochure por WhatsApp
                <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2) RESUMEN RÁPIDO */}
      {property.summary.title && (
        <section className="py-24 md:py-32 container mx-auto px-6 md:px-12 border-b border-gray-100">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-4">Resumen</span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 leading-tight">
                {property.summary.title}
              </h2>
            </div>
            <div className="md:col-span-8 md:pl-12 border-l border-gray-100">
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                {property.summary.text}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 3) EL CONCEPTO */}
      {property.concept.title && (
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-6">El Concepto</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-gray-900 mb-10 leading-tight">
                {property.concept.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                {property.concept.text}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 4-7) CONTENT GRID (Community, Privacy, Views, Design) */}
      <section className="py-24 container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
          {[property.community, property.privacy, property.views, property.design].map((section, idx) => (
            section.title ? (
              <div key={idx} className="group">
                 <div className="h-px w-full bg-gray-200 mb-8 group-hover:bg-gray-900 transition-colors duration-500"></div>
                 <h3 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 mb-6">
                   {section.title}
                 </h3>
                 <p className="text-gray-600 leading-relaxed font-light">
                   {section.text}
                 </p>
              </div>
            ) : null
          ))}
        </div>
      </section>

      {/* 8) UBICACIÓN */}
      {property.location.title && (
        <section className="py-24 bg-black text-white relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase block mb-6">Ubicación</span>
                <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 leading-tight">
                  {property.location.title}
                </h2>
                <p className="text-white/70 text-lg font-light mb-12 leading-relaxed">
                  {property.location.intro}
                </p>
                
                <ul className="space-y-4">
                  {property.location.nearby.map((place, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-white/90 py-3 border-b border-white/10">
                      <MapPin size={18} className="text-white/60" />
                      <span className="font-light tracking-wide">{place}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[500px] bg-white/5 rounded-none border border-white/10 p-4">
                {/* Placeholder for Map */}
                <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                   <span className="text-white/30 uppercase tracking-widest text-sm">Mapa Interactivo</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 9 & 10) PROYECTO & SUB-COMUNIDADES */}
      <section className="py-24 md:py-32 container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
           {property.project.title && (
             <div className="mb-20 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-6">
                  {property.project.title}
                </h2>
                <p className="text-gray-600 text-lg font-light leading-relaxed">
                  {property.project.text}
                </p>
             </div>
           )}

           <div className="grid gap-12">
             {property.subCommunities.map((sub, idx) => (
               <div key={idx} className="bg-gray-50 p-8 md:p-12 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                 <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">{sub.title}</h3>
                 <p className="text-gray-600 font-light leading-relaxed">{sub.text}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 11) AMENITIES */}
      {property.amenities.title && (
        <section className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                {property.amenities.title}
              </h2>
              <p className="text-white/70 font-light text-lg">
                {property.amenities.intro}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {property.amenities.categories.map((cat, idx) => (
                <div key={idx}>
                  <h4 className="text-sm font-bold tracking-widest uppercase text-white/40 mb-8 border-b border-white/10 pb-4">
                    {cat.name}
                  </h4>
                  <ul className="space-y-3">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 font-light text-sm">
                        <span className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 12) DEVELOPER */}
      {property.developer.title && (
        <section className="py-24 container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/3 flex justify-center">
               <div className="w-32 h-32 border border-gray-200 flex items-center justify-center">
                  <Building2 size={48} className="text-gray-400" />
               </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-6">
                {property.developer.title}
              </h2>
              <p className="text-gray-600 font-light mb-8 leading-relaxed">
                {property.developer.intro}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {property.developer.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                    <Check size={16} className="text-gray-900 shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 13) FAQ */}
      {property.faq.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <h2 className="text-3xl font-serif font-medium text-gray-900 mb-12 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {property.faq.map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-100">
                  <button 
                    onClick={() => toggleAccordion(`faq-${idx}`)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">{item.question}</span>
                    {activeAccordion === `faq-${idx}` ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {activeAccordion === `faq-${idx}` && (
                    <div className="px-6 pb-6 text-gray-600 font-light leading-relaxed animate-in slide-in-from-top-2 duration-200">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 14) DISCLAIMERS */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-xs text-gray-400 max-w-2xl mx-auto mb-2">
            {property.disclaimers.renders}
          </p>
          <p className="text-xs text-gray-400 max-w-2xl mx-auto">
            {property.disclaimers.availability}
          </p>
        </div>
      </footer>
    </main>
  );
}
