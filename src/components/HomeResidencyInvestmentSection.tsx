"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function HomeResidencyInvestmentSection() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [mouseStart, setMouseStart] = useState<number | null>(null);
  const [mouseEnd, setMouseEnd] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(1);

  const options = [
    {
      flag: "🇦🇪",
      country: t("home.residency_investment.options.0.country"),
      program: t("home.residency_investment.options.0.program"),
      investment: t("home.residency_investment.options.0.investment"),
      benefits: [
        t("home.residency_investment.options.0.benefits.0"),
        t("home.residency_investment.options.0.benefits.1"),
        t("home.residency_investment.options.0.benefits.2"),
        t("home.residency_investment.options.0.benefits.3"),
      ],
      idealFor: t("home.residency_investment.options.0.ideal_for"),
    },
    {
      flag: "🇺🇸",
      country: t("home.residency_investment.options.1.country"),
      program: t("home.residency_investment.options.1.program"),
      investment: t("home.residency_investment.options.1.investment"),
      benefits: [
        t("home.residency_investment.options.1.benefits.0"),
        t("home.residency_investment.options.1.benefits.1"),
        t("home.residency_investment.options.1.benefits.2"),
      ],
      idealFor: t("home.residency_investment.options.1.ideal_for"),
    },
    {
      flag: "🇨🇱",
      country: t("home.residency_investment.options.2.country"),
      program: t("home.residency_investment.options.2.program"),
      investment: t("home.residency_investment.options.2.investment"),
      benefits: [
        t("home.residency_investment.options.2.benefits.0"),
        t("home.residency_investment.options.2.benefits.1"),
        t("home.residency_investment.options.2.benefits.2"),
        t("home.residency_investment.options.2.benefits.3"),
      ],
      idealFor: t("home.residency_investment.options.2.ideal_for"),
    },
    {
      flag: "🇲🇽",
      country: t("home.residency_investment.options.3.country"),
      program: t("home.residency_investment.options.3.program"),
      investment: t("home.residency_investment.options.3.investment"),
      benefits: [
        t("home.residency_investment.options.3.benefits.0"),
        t("home.residency_investment.options.3.benefits.1"),
        t("home.residency_investment.options.3.benefits.2"),
      ],
      idealFor: t("home.residency_investment.options.3.ideal_for"),
    },
    {
      flag: "🇮🇩",
      country: t("home.residency_investment.options.4.country"),
      program: t("home.residency_investment.options.4.program"),
      investment: t("home.residency_investment.options.4.investment"),
      benefits: [
        t("home.residency_investment.options.4.benefits.0"),
        t("home.residency_investment.options.4.benefits.1"),
        t("home.residency_investment.options.4.benefits.2"),
      ],
      idealFor: t("home.residency_investment.options.4.ideal_for"),
    },
    {
      flag: "🇪🇸",
      country: t("home.residency_investment.options.5.country"),
      program: t("home.residency_investment.options.5.program"),
      investment: t("home.residency_investment.options.5.investment"),
      benefits: [
        t("home.residency_investment.options.5.benefits.0"),
        t("home.residency_investment.options.5.benefits.1"),
        t("home.residency_investment.options.5.benefits.2"),
      ],
      idealFor: t("home.residency_investment.options.5.ideal_for"),
    },
    {
      flag: "🇩🇴",
      country: t("home.residency_investment.options.6.country"),
      program: t("home.residency_investment.options.6.program"),
      investment: t("home.residency_investment.options.6.investment"),
      benefits: [
        t("home.residency_investment.options.6.benefits.0"),
        t("home.residency_investment.options.6.benefits.1"),
        t("home.residency_investment.options.6.benefits.2"),
      ],
      idealFor: t("home.residency_investment.options.6.ideal_for"),
    },
  ];

  const maxIndex = Math.max(0, options.length - itemsPerView);
  const displayedIndex = Math.min(currentIndex, maxIndex);

  const goNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (maxIndex === 0 || isHovered || isDragging) return;
    const autoplay = setInterval(() => {
      goNext();
    }, 4500);

    return () => clearInterval(autoplay);
  }, [maxIndex, isHovered, isDragging]);

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

    if (isLeftSwipe) {
      goNext();
    }
    if (isRightSwipe) {
      goPrev();
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setMouseEnd(null);
    setMouseStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setMouseEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (!mouseStart || !mouseEnd) return;

    const distance = mouseStart - mouseEnd;
    const isLeftDrag = distance > 50;
    const isRightDrag = distance < -50;

    if (isLeftDrag) {
      goNext();
    }
    if (isRightDrag) {
      goPrev();
    }
  };

  const cardWidth = useMemo(
    () => `calc(${100 / itemsPerView}% - ${(24 * (itemsPerView - 1)) / itemsPerView}px)`,
    [itemsPerView]
  );

  return (
    <section className="py-24 bg-linear-to-b from-gray-950 via-gray-900 to-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase mb-4">
            {t("home.residency_investment.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-4">
            {t("home.residency_investment.title")}
          </h2>
          <p className="text-white/75 text-lg leading-relaxed mb-0">
            {t("home.residency_investment.subtitle")}
          </p>
        </div>

        <div
          className={`overflow-hidden select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            onMouseUp();
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
        >
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(-${displayedIndex} * (100% + 24px) / ${itemsPerView}))`,
            }}
          >
            {options.map((option) => (
              <article
                key={option.country}
                className="relative shrink-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-7"
                style={{ width: cardWidth }}
                onDragStart={(e) => e.preventDefault()}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{option.flag}</span>
                  <h3 className="text-xl font-medium">{option.country}</h3>
                </div>

                <p className="text-sm text-white/80 mb-2">{option.program}</p>
                <p className="text-sm text-white/90 font-medium mb-5">{option.investment}</p>

                <ul className="space-y-2 mb-5">
                  {option.benefits.map((benefit) => (
                    <li key={benefit} className="text-sm text-white/75 flex items-start gap-2">
                      <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-white/70" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-white/70 italic mb-0">{option.idealFor}</p>
              </article>
            ))}
          </div>
        </div>

        {maxIndex > 0 ? (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  displayedIndex === idx ? "w-8 bg-white" : "w-2 bg-white/40"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
