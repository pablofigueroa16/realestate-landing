"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import Image from "next/image";

// Internal Component for the Nested Image Carousel
function ProjectImageCarousel({ images, alt, badgeText }: { images: string[]; alt: string; badgeText: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState<Record<string, boolean>>({});
  const [unoptimizedImages, setUnoptimizedImages] = useState<Record<string, boolean>>({});

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageError = (imgSrc: string) => {
    if (!unoptimizedImages[imgSrc]) {
      // First try loading unoptimized (bypassing Next.js optimization)
      setUnoptimizedImages((prev) => ({ ...prev, [imgSrc]: true }));
    } else {
      // If it fails even unoptimized, show error placeholder
      setImgError((prev) => ({ ...prev, [imgSrc]: true }));
    }
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
            {imgError[img] ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 text-gray-400">
                    <ImageOff size={32} />
                    <span className="text-xs mt-2">Image not found</span>
                </div>
            ) : (
                <Image
                    src={img}
                    alt={`${alt} - View ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={idx === 0} // Prioritize loading the first image
                    unoptimized={unoptimizedImages[img]}
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
          aria-label="Previous image"
        >
          <ChevronLeft size={16} className="text-white" />
        </button>
        <button
          onClick={nextImage}
          className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center hover:bg-white/50 transition-colors"
          aria-label="Next image"
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Full image lists based on file structure
  const units = [
    {
      title: "Sobha Hartland II",
      description: "Exclusiva comunidad residencial waterfront de lujo desarrollada por Sobha Realty, ubicada en el corazón de Dubái.",
      size: "Off-plan",
      images: [
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO1/Community_Street_View.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO1/Amenities_Street_View.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO1/Skate_Park.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO1/Garden.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO1/Community_Podium.webp",
      ],
      alt: "Sobha Hartland II",
    },
    {
      title: "Sobha Central",
      description: "Complejo residencial y de uso mixto ubicado sobre Sheikh Zayed Road, compuesto por seis torres interconectadas.",
      size: "Off-plan",
      images: [
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO2/2.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO2/3.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO2/4.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO2/1.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO2/5.webp",
      ],
      alt: "Sobha Central",
    },
    {
      title: "Sobha Sanctuary",
      description: "Comunidad residencial premium diseñada como un santuario urbano donde la naturaleza y el bienestar se integran.",
      size: "Off-plan",
      images: [
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO3/1_Pond.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO3/2_Green_Spine_1.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO3/3_TownHouse_park.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO3/4_Arrival_Park.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO3/5_Aerial.webp"
      ],
      alt: "Sobha Sanctuary",
    },
    {
      title: "Azizi Milan",
      description: "Desarrollo urbano de gran escala inspirado en la esencia de Milán, ubicado estratégicamente frente al distrito Majan.",
      size: "Off-plan",
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
      title: "Azizi Venice",
      description: "Mega desarrollo residencial y lifestyle inspirado en Venecia, ubicado en Dubai South, que redefine la vida junto al agua.",
      size: "Off-plan",
      images: [
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO5/4_AV_Boulevard_View.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO5/2_A001_C1.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO5/3_AM04_Boulevard.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO5/5_AZIZI_VENICE_BATHROOM_VIEW.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO5/1_23770800_AZIZI_Balcony_20230908.webp",
      ],
      alt: "Azizi Venice",
    },
    {
      title: "Azizi Monaco Mansions",
      description: "Colección exclusiva de mansiones ultra lujo frente a la laguna cristalina en Dubai South, dentro de Azizi Venice.",
      size: "Off-plan",
      images: [
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO6/3_G_Bedroom.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO6/4_Formal_Living.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO6/10_Basement.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO6/1_Hall_Foyer.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO6/2_Men_Mejlis.webp",
      ],
      alt: "Azizi Monaco Mansions",
    },
    {
      title: "Azizi Wasel",
      description: "Proyecto residencial frente al mar ubicado en Dubai Islands que combina vistas panorámicas al océano y skyline.",
      size: "Off-plan",
      images: [
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO7/Architectural_Render_01.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO7/Architectural_Render_02.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO7/Architectural_Render_03.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO7/Architectural_Render_04.webp",
        "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO7/Architectural_Render_05.webp"
      ],
      alt: "Azizi Wasel",
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
              Formatos de inversión inmobiliaria
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Selecciona entre distintos tipos de unidades off-plan en Dubái según rentabilidad, plazo y objetivo de inversión.
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

                                <button className="w-full py-4 border border-gray-200 rounded-2xl flex items-center justify-center gap-2 text-gray-900 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all group/btn">
                                    Ver detalles
                                    <ArrowUpRight size={18} className="text-gray-400 group-hover/btn:text-gray-900 transition-colors" />
                                </button>
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
