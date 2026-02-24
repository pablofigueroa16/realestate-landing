"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function HomeInvestmentModelsSection() {
  const { t } = useTranslation();

  const models = [
    {
      title: t("home.investment_models.models.0.title"),
      description: t("home.investment_models.models.0.description"),
    },
    {
      title: t("home.investment_models.models.1.title"),
      description: t("home.investment_models.models.1.description"),
    },
    {
      title: t("home.investment_models.models.2.title"),
      description: t("home.investment_models.models.2.description"),
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
            {t("home.investment_models.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight">
            {t("home.investment_models.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {models.map((model) => (
            <article
              key={model.title}
              className="relative bg-gray-50 rounded-3xl border border-gray-100 p-7 md:p-8"
            >
              <div className="absolute -top-2 left-8 right-8 h-px bg-gray-300 hidden md:block" />
              <h3 className="text-2xl font-medium text-gray-900 mb-4">{model.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-0 whitespace-pre-line">
                {model.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
