"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { DevelopersContent } from "@/data/landing-content";

interface DevelopersSectionProps {
  content?: DevelopersContent | null;
}

export default function DevelopersSection({ content }: DevelopersSectionProps) {
  const { t } = useTranslation();

  if (content?.hidden) return null;

  // Generate array of 10 developer images
  const developers = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    src: `/developer/developer${i + 1}.png`,
    alt: `${t("developers.partner")} ${i + 1}`,
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Determine items per view based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerView(4); // Desktop
      else if (window.innerWidth >= 768) setItemsPerView(3); // Tablet
      else setItemsPerView(1); // Mobile
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate total pages/slides needed
  const totalSlides = Math.ceil(developers.length / itemsPerView);

  // Navigation handlers
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Autoplay logic
  useEffect(() => {
    if (isPaused) return;
    
    autoplayRef.current = setInterval(nextSlide, 4000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isPaused, nextSlide]);

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();

    setIsPaused(false);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  };

  return (
    <section className="h-[80vh] w-full flex items-center justify-center bg-gray-50 p-4 md:p-6">
      <div className="w-full h-full bg-white rounded-[3rem] shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center p-8 md:p-12 relative overflow-hidden">
        
        {/* Subtle decorative background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50/50 pointer-events-none"></div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center justify-center h-full w-full">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-gray-900 mb-12 leading-tight">
            {t("developers.title")}
          </h2>
          
          {/* Carousel Container */}
          <div 
            className="w-full relative group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label={t("developers.carousel_label")}
          >
            {/* Slides Track */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                {/* Group items into slides based on itemsPerView */}
                {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                   // Calculate start index for this slide
                   const startIndex = slideIndex * itemsPerView;
                   // Get items for this slide, filling with empty if needed for last slide logic or just slicing
                   // For a simple visual carousel, we just render chunks. 
                   // However, simpler approach for "infinite-like" feel in React without complex cloning:
                   // Just render the whole list in pages.
                   const slideItems = developers.slice(startIndex, startIndex + itemsPerView);
                   
                   return (
                     <div key={slideIndex} className="min-w-full flex justify-center items-center gap-8 px-4">
                       {slideItems.map((dev) => (
                         <div 
                           key={dev.id} 
                           className="flex items-center justify-center h-40 w-full max-w-[200px] grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105"
                           style={{ flex: `0 0 ${100 / itemsPerView}%` }} // Approximate width distribution
                         >
                           <img
                             src={dev.src}
                             alt={dev.alt}
                             className="max-h-full max-w-full object-contain"
                             loading="lazy"
                           />
                         </div>
                       ))}
                     </div>
                   );
                })}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 p-3 rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 p-3 rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20"
              aria-label="Next Slide"
            >
              <ChevronRight size={24} />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "w-8 bg-gray-900" : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`${t("developers.go_to_slide")} ${idx + 1}`}
                  aria-current={currentIndex === idx}
                />
              ))}
            </div>
          </div>

          <div className="flex-grow"></div>
        </div>
      </div>
    </section>
  );
}
