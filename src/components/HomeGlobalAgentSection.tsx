"use client";

import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function HomeGlobalAgentSection() {
  const { t } = useTranslation();

  const benefits = [
    t("home.global_agent.benefits.0"),
    t("home.global_agent.benefits.1"),
    t("home.global_agent.benefits.2"),
    t("home.global_agent.benefits.3"),
    t("home.global_agent.benefits.4"),
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8 md:p-12">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
            {t("home.global_agent.eyebrow")}
          </p>

          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight mb-8">
            {t("home.global_agent.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-3 mb-10">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3"
              >
                <span className="mt-3 block w-1.5 h-1.5 rounded-full bg-gray-700" />
                <p className="text-gray-700 leading-relaxed mb-0">{benefit}</p>
              </div>
            ))}
          </div>

          <button className="group cursor-pointer inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-black transition-colors">
            {t("home.global_agent.cta")}
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
