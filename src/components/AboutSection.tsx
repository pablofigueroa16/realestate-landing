"use client";

import {
  Percent,
  TrendingUp,
  Key,
  Coins,
  Globe,
  ShieldCheck,
  Rocket,
  MapPin,
  Briefcase,
  Building2,
  CheckCircle,
  LucideIcon
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { AboutContent } from "@/data/landing-content";

// Map of icon names to components
const ICON_MAP: Record<string, LucideIcon> = {
  Percent,
  TrendingUp,
  Key,
  Coins,
  Globe,
  ShieldCheck,
  Rocket,
  MapPin,
  Briefcase,
  Building2,
  CheckCircle
};

interface AboutSectionProps {
  content?: AboutContent | null;
}

export default function AboutSection({ content }: AboutSectionProps) {
  const { t } = useTranslation();

  const defaultBenefits = [
    { iconName: "Percent", label: t("about.benefits.tax_free") },
    { iconName: "TrendingUp", label: t("about.benefits.high_return") },
    { iconName: "Key", label: t("about.benefits.freehold") },
    { iconName: "Coins", label: t("about.benefits.stable_currency") },
    { iconName: "Globe", label: t("about.benefits.high_demand") },
    { iconName: "ShieldCheck", label: t("about.benefits.legal_framework") },
    { iconName: "Rocket", label: t("about.benefits.growing_economy") },
  ];

  const benefits = content?.benefits || defaultBenefits;
  const imageSrc = content?.imageSrc || "/dubai.png";
  const title = content?.title || t("about.title");
  const description = content?.description || t("about.description");
  const marketCardTitle = content?.marketCard.title || t("about.market_card.title");
  const marketCardSubtitle = content?.marketCard.subtitle || t("about.market_card.subtitle");

  return (
    <section
      id="nosotros"
      className="w-full bg-gray-50 py-16 lg:py-0 lg:h-screen lg:flex lg:items-center lg:justify-center"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 lg:items-center lg:h-full">
        {/* Left Column: Text & Benefits */}
        <div className="flex flex-col justify-center max-w-xl">
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-4 md:mb-6 leading-tight">
            {title}
          </h2>

          <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed mb-6 whitespace-pre-line">
            {description}
          </p>

          <div className="flex flex-col gap-3 md:gap-4">
            {benefits.map((item, index) => {
              const IconComponent = item.iconName ? ICON_MAP[item.iconName] : null;
              return (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <div className="min-w-6 shrink-0">
                    {IconComponent && <IconComponent size={22} strokeWidth={1.5} className="text-gray-900" />}
                  </div>
                  <span className="text-sm md:text-base font-medium">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[85vh]">
          <img
            src={imageSrc}
            alt="Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />

          {/* Floating Concept Card */}
          <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg max-w-[200px] md:max-w-xs">
            <p className="text-xs text-gray-500 font-bold tracking-wider uppercase mb-1">
              {marketCardTitle}
            </p>
            <p className="text-gray-900 font-medium text-sm md:text-lg leading-snug">
              {marketCardSubtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
