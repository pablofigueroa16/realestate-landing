"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  }, [lightboxIndex, images.length]);

  const next = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  }, [lightboxIndex, images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, prev, next]);

  if (!images || images.length === 0) return null;

  const main = images[0];
  const thumb1 = images[1];
  const thumb2 = images[2];
  const remaining = images.length - 3;

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-[3fr_2fr] gap-2 md:gap-3 h-[340px] md:h-[500px]">
        {/* Large left image */}
        <button
          onClick={() => openLightbox(0)}
          className="relative rounded-3xl cursor-pointer overflow-hidden group focus:outline-none"
        >
          <Image
            src={main}
            alt={`${title} 1`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </button>

        {/* Right column: 2 stacked thumbnails */}
        <div className="grid grid-rows-2 gap-2 md:gap-3">
          {/* Top thumbnail */}
          {thumb1 && (
            <button
              onClick={() => openLightbox(1)}
              className="relative rounded-3xl cursor-pointer overflow-hidden group focus:outline-none"
            >
              <Image
                src={thumb1}
                alt={`${title} 2`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          )}

          {/* Bottom thumbnail — with "+N Photos" badge */}
          {thumb2 && (
            <button
              onClick={() => openLightbox(2)}
              className="relative rounded-3xl cursor-pointer overflow-hidden group focus:outline-none"
            >
              <Image
                src={thumb2}
                alt={`${title} 3`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {remaining > 0 && (
                <div className="absolute inset-0 bg-black/40 flex items-end justify-end p-4">
                  <span className="bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-full shadow-md">
                    +{remaining} Photos
                  </span>
                </div>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 cursor-pointer right-5 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <X size={18} />
          </button>

          {/* Counter */}
          <span className="absolute top-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium tracking-widest">
            {lightboxIndex + 1} / {images.length}
          </span>

          {/* Prev */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 cursor-pointer w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-full max-w-5xl mx-12 aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex]}
              alt={`${title} ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 w-11 cursor-pointer h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRight size={22} />
            </button>
          )}

          {/* Thumbnail strip */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(idx); }}
                className={`relative cursor-pointer w-14 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                  idx === lightboxIndex ? "border-white scale-110" : "border-white/30 opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
