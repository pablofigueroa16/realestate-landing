"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function HomeFundCapitalSection() {
  const { t } = useTranslation();

  const bullets = [
    t("home.fund_capital.bullets.0"),
    t("home.fund_capital.bullets.1"),
    t("home.fund_capital.bullets.2"),
    t("home.fund_capital.bullets.3"),
  ];

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-3xl p-8 md:p-12">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
            {t("home.fund_capital.eyebrow")}
          </p>

          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight mb-6">
            {t("home.fund_capital.title")}
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {t("home.fund_capital.description")}
          </p>

          <ul className="space-y-3 mb-8">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-gray-700">
                <span className="mt-3 block w-1.5 h-1.5 rounded-full bg-gray-700" />
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="pt-6 border-t border-gray-100">
            <p className="text-xl md:text-2xl font-medium text-gray-900 mb-0">
              {t("home.fund_capital.strong_message")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
