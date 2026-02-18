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
  Building2
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
      className="lg:h-screen w-full flex items-center justify-center bg-gray-50 py-20 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">
        {/* Left Column: Text & Benefits */}
        <div className="px-4 flex flex-col justify-center h-full max-w-xl">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-medium text-gray-900 mb-8 leading-tight">
             {title}
          </h2>
          
          <div className="space-y-6 text-gray-500 text-lg font-light mb-12 leading-relaxed">
            <p className="whitespace-pre-line">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {benefits.map((item, index) => {
              const IconComponent = item.iconName ? ICON_MAP[item.iconName] : null;
              return (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <div className="min-w-[24px]">
                      {IconComponent && <IconComponent size={24} strokeWidth={1.5} className="text-gray-900"/>}
                  </div>
                  <span className="text-base font-medium">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-[60vh] lg:h-[85vh] w-full">
          <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img
              src={imageSrc}
              alt="Skyline"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for mood (optional, based on reference image style) */}
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
          </div>

          {/* Floating Concept Card */}
          <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-xs">
            <p className="text-xs text-gray-500 font-bold tracking-wider uppercase mb-1">
              {marketCardTitle}
            </p>
            <p className="text-gray-900 font-medium text-lg leading-snug">
              {marketCardSubtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
