"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { PresentationContent } from "@/data/landing-content";

interface PresentationSectionProps {
  content?: PresentationContent | null;
}

export default function PresentationSection({ content }: PresentationSectionProps) {
  const { t } = useTranslation();

  if (content?.hidden) return null;

  return (
    <section className="h-[80vh] w-full flex items-center justify-center bg-gray-50 p-4 md:p-6">
      <div className="w-full h-full bg-white rounded-[3rem] shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center p-8 md:p-12 relative overflow-hidden">
        
        {/* Subtle decorative background gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-50/50 pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
            {content?.badge || t("presentation.badge")}
          </p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-gray-900 mb-8 leading-tight">
            {content?.title || t("presentation.title")}
          </h2>
          
          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            {content?.description || t("presentation.description")}
          </p>

          <button className="bg-gray-900 text-white pl-8 pr-6 py-4 rounded-full font-medium text-sm hover:bg-black transition-all hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto shadow-lg shadow-gray-900/20">
            {content?.cta || t("presentation.cta")}
          </button>

          <p className="text-gray-400 text-xs mt-6 whitespace-pre-line">
            {content?.disclaimer || t("presentation.disclaimer")}
          </p>
        </div>
      </div>
    </section>
  );
}
