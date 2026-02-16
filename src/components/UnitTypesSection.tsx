"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

// Internal Component for the Nested Image Carousel
function ProjectImageCarousel({ images, alt, badgeText }: { images: string[]; alt: string; badgeText: string }) {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imgStatus, setImgStatus] = useState<Record<string, 'retry' | 'error'>>({});

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageError = (imgSrc: string) => {
    setImgStatus((prev) => {
      const current = prev[imgSrc];
      if (!current) {
        // First failure: retry with unoptimized
        return { ...prev, [imgSrc]: "retry" };
      } else if (current === "retry") {
        // Second failure: show error
        return { ...prev, [imgSrc]: "error" };
      }
      return prev;
    });
  };

  return (
    <div 
      className="relative h-64 rounded-[1.5rem] overflow-hidden mb-6 group/carousel bg-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      <div className="absolute top-4 left-4 z-20">
        <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-medium text-gray-900 shadow-sm">
          {badgeText}
        </span>
      </div>

      {/* Images */}
      {images.map((img, idx) => (
        <div
            key={img}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
            {imgStatus[img] === "error" ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 text-gray-400">
                    <ImageOff size={32} />
                    <span className="text-xs mt-2">{t("common.image_not_found")}</span>
                </div>
            ) : (
                <Image
                    src={img}
                    alt={`${alt} - View ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={idx === 0} // Prioritize loading the first image
                    unoptimized={imgStatus[img] === "retry"}
                    onError={() => handleImageError(img)}
                />
            )}
        </div>
      ))}

      {/* Navigation Overlay (Visible on Hover) */}
      <div className={`absolute inset-0 flex items-center justify-between px-2 transition-opacity duration-300 z-20 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <button
          onClick={prevImage}
          className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center hover:bg-white/50 transition-colors"
          aria-label={t("common.prev_image")}
        >
          <ChevronLeft size={16} className="text-white" />
        </button>
        <button
          onClick={nextImage}
          className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center hover:bg-white/50 transition-colors"
          aria-label={t("common.next_image")}
        >
          <ChevronRight size={16} className="text-white" />
        </button>
      </div>

      {/* Dots Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {images.slice(0, 5).map((_, idx) => ( // Limit dots to 5 for cleanliness
          <div
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
              currentIndex === idx ? "w-4 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function UnitTypesSection() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Full image lists based on file structure
  const units = [
    {
      title: t("unit_types.units.sobha_hartland_ii.title"),
      description: t("unit_types.units.sobha_hartland_ii.description"),
      size: t("unit_types.units.sobha_hartland_ii.size"),
      images: [
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO1/Amenities_Street_View.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO1/Community_Podium.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO1/Community_Street_View.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO1/Garden.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO1/Skate_Park.webp"
      ],
      alt: "Sobha Hartland II",
    },
    {
      title: t("unit_types.units.sobha_central.title"),
      description: t("unit_types.units.sobha_central.description"),
      size: t("unit_types.units.sobha_central.size"),
      images: [
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO2/1.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO2/2.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO2/3.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO2/4.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO2/5.webp",
      ],
      alt: "Sobha Central",
    },
    {
      title: t("unit_types.units.sobha_sanctuary.title"),
      description: t("unit_types.units.sobha_sanctuary.description"),
      size: t("unit_types.units.sobha_sanctuary.size"),
      images: [
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO3/4_Arrival_Park.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO3/2_Green_Spine_1.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO3/3_TownHouse_park.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO3/5_Aerial.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO3/1_Pond.webp",
      ],
      alt: "Sobha Sanctuary",
    },
    {
      title: t("unit_types.units.azizi_milan.title"),
      description: t("unit_types.units.azizi_milan.description"),
      size: t("unit_types.units.azizi_milan.size"),
      images: [
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO4/1_Aerial.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO4/2_AZIZI_MILAN_CGI09_Opt_01_12k.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO4/3_Balcony_2.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO4/4_CAM14-BBQ.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO4/5_District_Galleria.webp"
      ],
      alt: "Azizi Milan",
    },
    {
      title: t("unit_types.units.azizi_venice.title"),
      description: t("unit_types.units.azizi_venice.description"),
      size: t("unit_types.units.azizi_venice.size"),
      images: [
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO5/1_23770800_AZIZI_Balcony_20230908.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO5/2_A001_C1.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO5/3_AM04_Boulevard.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO5/4_AV_Boulevard_View.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO5/5_AZIZI_VENICE_BATHROOM_VIEW.webp"
      ],
      alt: t("unit_types.units.azizi_venice.title"),
    },
    {
      title: t("unit_types.units.azizi_monaco_mansions.title"),
      description: t("unit_types.units.azizi_monaco_mansions.description"),
      size: t("unit_types.units.azizi_monaco_mansions.size"),
      images: [
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO6/1_Hall_Foyer.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO6/2_Men_Mejlis.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO6/3_G_Bedroom.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO6/4_Formal_Living.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO6/10_Basement.webp"
      ],
      alt: "Azizi Monaco Mansions",
    },
    {
      title: t("unit_types.units.azizi_wasel.title"),
      description: t("unit_types.units.azizi_wasel.description"),
      size: t("unit_types.units.azizi_wasel.size"),
      images: [
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO7/Architectural_Render_01.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO7/Architectural_Render_02.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO7/Architectural_Render_03.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO7/Architectural_Render_04.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO7/Architectural_Render_05.webp"
      ],
      alt: t("unit_types.units.azizi_wasel.title"),
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (units.length - itemsPerView + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (units.length - itemsPerView + 1)) % (units.length - itemsPerView + 1));
  };
  
  const canGoNext = currentIndex < units.length - itemsPerView;
  const canGoPrev = currentIndex > 0;

  const handleNext = () => {
    if (canGoNext) setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (canGoPrev) setCurrentIndex(prev => prev - 1);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && canGoNext) handleNext();
    if (isRightSwipe && canGoPrev) handlePrev();
  };

  return (
    <section id="unidades" className="py-20 bg-gray-50 min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
              {t("unit_types.title")}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              {t("unit_types.subtitle")}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
                onClick={handlePrev}
                disabled={!canGoPrev}
                className={`w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center transition-all ${!canGoPrev ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-900 hover:text-white hover:border-gray-900'}`}
            >
                <ChevronLeft size={20} />
            </button>
            <button 
                onClick={handleNext}
                disabled={!canGoNext}
                className={`w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center transition-all ${!canGoNext ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-900 hover:text-white hover:border-gray-900'}`}
            >
                <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div 
            className="overflow-hidden -mx-4 px-4 py-8"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <div 
                className="flex gap-8 transition-transform duration-500 ease-out"
                style={{ transform: `translateX(calc(-${currentIndex} * (100% + 32px) / ${itemsPerView}))` }} 
            >
                {units.map((unit, index) => (
                    <div
                        key={index}
                        className="shrink-0 transition-all duration-500"
                        style={{ width: `calc(${100 / itemsPerView}% - ${(32 * (itemsPerView - 1)) / itemsPerView}px)` }}
                    >
                        <div className="bg-white p-4 rounded-4xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full group">
                            
                            {/* Nested Image Carousel */}
                            <ProjectImageCarousel images={unit.images} alt={unit.alt} badgeText={unit.size} />



                            {/* Content */}
                            <div className="px-2 pb-2 grow flex flex-col">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-1">
                                    {unit.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8 grow line-clamp-3">
                                    {unit.description}
                                </p>

                                <a 
                                    href={`https://wa.me/971543034346?text=${encodeURIComponent(t("unit_types.whatsapp_message"))}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-4 rounded-2xl flex items-center justify-center gap-2 text-white font-bold transition-all hover:opacity-90 hover:shadow-lg group/btn"
                                    style={{ backgroundColor: '#25D366' }}
                                >
                                    <svg 
                                        viewBox="0 0 24 24" 
                                        width="24" 
                                        height="24" 
                                        fill="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                    </svg>
                                    {t("unit_types.whatsapp_button")}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: units.length - itemsPerView + 1 }).map((_, idx) => (
                <div 
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-gray-900' : 'w-2 bg-gray-300'}`}
                />
            ))}
        </div>

      </div>
    </section>
  );
}
