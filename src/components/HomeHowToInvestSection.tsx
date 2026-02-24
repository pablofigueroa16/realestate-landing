"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function HomeHowToInvestSection() {
  const { t } = useTranslation();

  const steps = [
    {
      title: t("home.how_to_invest.steps.0.title"),
      description: t("home.how_to_invest.steps.0.description"),
    },
    {
      title: t("home.how_to_invest.steps.1.title"),
      description: t("home.how_to_invest.steps.1.description"),
    },
    {
      title: t("home.how_to_invest.steps.2.title"),
      description: t("home.how_to_invest.steps.2.description"),
    },
    {
      title: t("home.how_to_invest.steps.3.title"),
      description: t("home.how_to_invest.steps.3.description"),
    },
  ];

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
            {t("home.how_to_invest.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight">
            {t("home.how_to_invest.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, idx) => (
            <article
              key={step.title}
              className="bg-white rounded-3xl border border-gray-100 p-7 md:p-8 shadow-sm"
            >
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">
                {t("home.how_to_invest.step_label")} {idx + 1}
              </p>
              <h3 className="text-2xl font-medium text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-0">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
