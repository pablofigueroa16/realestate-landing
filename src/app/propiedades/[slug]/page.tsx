"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, ChevronDown, ChevronUp, MapPin, ExternalLink } from "lucide-react";
import { properties, Property, NearbyPlace, getLocalizedProperty } from "@/data/properties";
import { landingContent } from "@/data/landing-content";
import { useTranslation } from "@/hooks/useTranslation";
import { Building2 } from "lucide-react";
import PropertyMap from "@/components/PropertyMap";
import PropertyGallery from "@/components/PropertyGallery";

export default function PropertyDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { t, locale } = useTranslation();
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const slugParam = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const resolvedProperty = useMemo(() => {
    if (!slugParam) {
      return { property: null as Property | null, backLink: "/#unidades" };
    }

    let foundProperty: Property | undefined;
    let backPath = "/#unidades";

    for (const [key, content] of Object.entries(landingContent)) {
      if (!content.units) continue;

      const found = content.units.find((p) => p.slug === slugParam);
      if (found) {
        foundProperty = found;
        if (key === "home") backPath = "/#unidades";
        else if (key === "dubai") backPath = "/dubai#unidades";
        else backPath = `/${key}#unidades`;
        break;
      }
    }

    if (!foundProperty) {
      foundProperty = properties.find((p) => p.slug === slugParam);
      if (foundProperty) backPath = "/dubai#unidades";
    }

    return {
      property: foundProperty ? getLocalizedProperty(foundProperty, locale) : null,
      backLink: backPath,
    };
  }, [slugParam, locale]);

  useEffect(() => {
    if (slugParam && !resolvedProperty.property) {
      router.push("/#unidades");
    }
  }, [slugParam, resolvedProperty.property, router]);

  const property = resolvedProperty.property;
  const backLink = resolvedProperty.backLink;

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

  const nearbyPlacesForMap: NearbyPlace[] = property.location.nearby
    .map((place) => {
      if (
        typeof place === "object" &&
        typeof place.latitude === "number" &&
        typeof place.longitude === "number"
      ) {
        return place;
      }

      return null;
    })
    .filter((place): place is NearbyPlace => place !== null);
  const displayedImageIndex =
    property.images && property.images.length > 0
      ? currentImageIndex % property.images.length
      : 0;

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      {/* 1) HERO SECTION */}
      <section className="p-3 md:p-4 h-screen w-full flex flex-col box-border overflow-hidden">
        <div className="relative grow rounded-4xl overflow-hidden flex flex-col justify-end pb-12 md:pb-20 isolate mask-[linear-gradient(white,white)]">
          {/* Background Media */}
          <div className="absolute inset-0 z-0">
            {property.images && property.images.length > 0 ? (
              // Carousel Mode
              property.images.map((img, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    idx === displayedImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
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
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20 z-20"></div>
          </div>

          {/* Content */}
          <div className="relative z-30 container mx-auto px-6 md:px-12 flex flex-col justify-end h-full pb-10">
            <Link 
              href={backLink}
              className="absolute top-8 left-6 md:left-12 flex items-center gap-2 text-white/80 hover:text-white transition-colors text-xs font-bold tracking-widest backdrop-blur-md bg-white/10 px-4 py-2 rounded-full border border-white/20 w-fit uppercase"
            >
              <ArrowLeft size={14} />
              {t("property_details.back")}
            </Link>

            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-2 mb-6">
                {property.hero.badges.map((badge, idx) => (
                  <span 
                    key={idx}
                    className="bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-lg uppercase"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-medium text-white mb-6 leading-[1.1]">
                {property.hero.title}
              </h1>
              
              <p className="text-white/80 text-base md:text-lg font-light max-w-lg mb-8 leading-relaxed">
                {property.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group flex items-center gap-3 bg-white text-black pl-6 pr-1.5 py-2 rounded-full text-base font-medium hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 w-fit">
                  {t("property_details.request_availability")}
                  <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white group-hover:bg-gray-800 transition-colors">
                    <ArrowRight size={18} />
                  </div>
                </button>
                <button className="group flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white pl-6 pr-6 py-2 rounded-full text-base font-medium hover:bg-white/20 transition-all hover:scale-105 active:scale-95 w-fit">
                  {t("property_details.whatsapp_brochure")}
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) RESUMEN RÁPIDO */}
      {property.summary.title && (
        <section className="py-24 md:py-32 container mx-auto px-6 md:px-12 border-b border-gray-100">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-4">{t("property_details.summary")}</span>
              <h2 className="text-3xl md:text-4xl font-sans font-medium text-gray-900 leading-tight">
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
              <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-6">{t("property_details.concept")}</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-gray-900 mb-10 leading-tight">
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
                 <h3 className="text-2xl md:text-3xl font-sans font-medium text-gray-900 mb-6">
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
                <span className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase block mb-6">{t("property_details.location")}</span>
                <h2 className="text-4xl md:text-5xl font-sans font-medium mb-8 leading-tight">
                  {property.location.title}
                </h2>
                <p className="text-white/70 text-lg font-light mb-12 leading-relaxed">
                  {property.location.intro}
                </p>
                
                <ul className="space-y-4">
                  {property.location.nearby.map((place, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-white/90 py-3 border-b border-white/10">
                      <MapPin size={18} className="text-white/60" />
                      <span className="font-light tracking-wide">
                        {typeof place === "string" ? place : place.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[500px] bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
                {typeof property.location.latitude === "number" &&
                typeof property.location.longitude === "number" ? (
                  <PropertyMap 
                    latitude={property.location.latitude} 
                    longitude={property.location.longitude} 
                    title={property.hero.title}
                    nearbyPlaces={nearbyPlacesForMap}
                  />
                ) : (
                  /* Placeholder for Map when no coordinates */
                  <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                     <span className="text-white/30 uppercase tracking-widest text-sm">{t("property_details.map_unavailable")}</span>
                  </div>
                )}
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
                <h2 className="text-3xl md:text-4xl font-sans font-medium text-gray-900 mb-6">
                  {property.project.title}
                </h2>
                <p className="text-gray-600 text-lg font-light leading-relaxed">
                  {property.project.text}
                </p>
             </div>
           )}

           <div className="grid gap-12">
            {property.subCommunities.map((sub, idx) => (
              <div key={idx} className="bg-gray-50 p-8 md:p-12 border border-gray-100 hover:shadow-lg transition-shadow duration-300 rounded-3xl">
                <h3 className="text-2xl font-sans font-medium text-gray-900 mb-4">{sub.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{sub.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12) AMENITIES */}
      {property.amenities.title && (
        <section className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-sans font-medium mb-6">
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

            {/* 11) GALERÍA */}
      {property.images && property.images.length > 0 && (
        <section className="pb-12 bg-gray-900 md:pb-16 container mx-auto px-6 md:px-12">
          <PropertyGallery images={property.images} title={property.hero.title} />
        </section>
      )}

      {/* 12) DEVELOPER */}
      {property.developer.title && (
        <section className="py-24 container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl font-sans font-medium text-gray-900 mb-6">
                {property.developer.title}
              </h2>
              <p className="text-gray-600 font-light mb-8">
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
            <h2 className="text-3xl font-sans font-medium text-gray-900 mb-12 text-center">{t("property_details.faq_title")}</h2>
            <div className="space-y-4">
              {property.faq.map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
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
