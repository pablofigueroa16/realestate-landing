"use client";

import { useEffect, useState } from "react";
import {
  Clock,
  TrendingUp,
  Globe,
  Briefcase,
  Building2,
  LucideIcon
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Clock,
  TrendingUp,
  Globe,
  Briefcase,
  Building2
};

interface Stat {
  value: string;
  iconName?: string;
  text: string;
}

interface HeroCarouselProps {
  items: Stat[];
}

export default function HeroCarousel({ items }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    // Basic check for empty or single item
    if (items.length <= 1) return;

    const interval = setInterval(() => {
      // Check screen width to decide if we should scroll
      // Desktop (>= 768px): Show 2 items. Scroll only if items.length > 2
      // Mobile (< 768px): Show 1 item. Scroll if items.length > 1 (already checked above)
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      
      if (isDesktop && items.length <= 2) {
        // Reset index to 0 if we resized to desktop and have <= 2 items to ensure they are visible
        setCurrentIndex(0);
        return;
      }

      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="absolute bottom-6 right-0 left-0 md:left-auto md:right-10 lg:right-16 z-40 w-full md:w-80 overflow-hidden px-6 md:px-0">
      <div 
        className="carousel-container md:h-80 relative w-full"
        style={{
          "--num-items": items.length,
          "--current-index": currentIndex,
        } as React.CSSProperties}
      >
        <div className="carousel-track flex flex-row md:flex-col transition-transform duration-700 ease-in-out h-full w-full transform-[translateX(calc(-100%*var(--current-index)))] md:transform-[translateY(calc(-100%/var(--num-items)*var(--current-index)))] md:h-auto">
          {items.map((stat, idx) => {
            const IconComponent = stat.iconName ? ICON_MAP[stat.iconName] : null;
            const DefaultIcon = idx === 0 ? Clock : TrendingUp;
            const IconToRender = IconComponent || DefaultIcon;

            return (
              <div 
                key={idx} 
                className="carousel-item shrink-0 w-full md:h-40 p-2 box-border"
              >
                <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-4 rounded-2xl text-white h-full flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-2xl font-medium">{stat.value}</span>
                    <IconToRender className="text-white/60" size={18} />
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed line-clamp-3">
                    {stat.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
