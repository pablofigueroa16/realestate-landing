"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Globe,
  Landmark,
  BarChart3,
  Users,
  Building2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InvestmentROICalculator from "@/components/InvestmentROICalculator";

function HeroSection() {
  const { t } = useTranslation();
  const { scrollToId } = useSmoothScroll();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-amber-400 blur-[150px]" />
      </div>

      <div className="relative container mx-auto px-6 md:px-12 py-32 md:py-32">
        <div className="max-w-4xl">

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.05] mb-6">
            {t("inversiones.hero.title")}
          </h1>

          <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-4 leading-relaxed font-light">
            {t("inversiones.hero.subtitle")}
          </p>

          <p className="text-white/80 text-base md:text-lg max-w-2xl mb-10 leading-relaxed font-light italic border-l-2 border-amber-400/40 pl-4">
            {t("inversiones.hero.highlight")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contacto"
              onClick={(e) => scrollToId(e, "#contacto")}
              scroll={false}
              className="group flex items-center gap-3 bg-white text-gray-950 pl-6 pr-1.5 py-2.5 rounded-full text-base font-bold hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 w-fit"
            >
              {t("inversiones.hero.cta")}
              <div className="w-9 h-9 bg-gray-950 rounded-full flex items-center justify-center text-white group-hover:bg-gray-800 transition-colors">
                <ArrowRight size={18} />
              </div>
            </Link>
            <Link
              href="#calculadora"
              onClick={(e) => scrollToId(e, "#calculadora")}
              scroll={false}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2.5 rounded-full text-base font-medium hover:bg-white/20 transition-all hover:scale-105 active:scale-95 w-fit"
            >
              {t("inversiones.hero.cta_secondary")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function RealitySection() {
  const { t } = useTranslation();

  const errors = [
    { text: t("inversiones.reality.errors.0"), icon: Globe },
    { text: t("inversiones.reality.errors.1"), icon: Landmark },
    { text: t("inversiones.reality.errors.2"), icon: BarChart3 },
    { text: t("inversiones.reality.errors.3"), icon: ShieldCheck },
  ];

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
            {t("inversiones.reality.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight mb-12">
            {t("inversiones.reality.title")}
          </h2>

          <div className="grid sm:grid-cols-2 gap-5 mb-14">
            {errors.map((err, idx) => {
              const Icon = err.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-red-400" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{err.text}</p>
                </div>
              );
            })}
          </div>

          <div className="border-t border-gray-100 pt-10 grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-medium text-gray-900 leading-snug">
                {t("inversiones.reality.conclusion_1")}
              </p>
            </div>
            <div className="border-x border-gray-100 px-4">
              <p className="text-2xl md:text-3xl font-medium text-gray-900 leading-snug">
                {t("inversiones.reality.conclusion_2")}
              </p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-medium text-gray-900 leading-snug">
                {t("inversiones.reality.conclusion_3")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
            {t("inversiones.solution.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight mb-3">
            {t("inversiones.solution.title")}
          </h2>
          <p className="text-xl text-gray-500 font-light">
            {t("inversiones.solution.subtitle")}
          </p>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            {t("inversiones.solution.description")}
          </p>
        </div>

        {/* Model 1 */}
        <div className="max-w-5xl mx-auto space-y-8">
          <ModelCard
            tag={t("inversiones.model_individual.tag")}
            title={t("inversiones.model_individual.title")}
            tagline={t("inversiones.model_individual.tagline")}
            price={t("inversiones.model_individual.price")}
            icon={<Building2 size={24} />}
            accent="stone"
          >
            <p className="text-gray-500 mb-4">{t("inversiones.model_individual.intro")}</p>
            <ul className="space-y-2 mb-6">
              {[0, 1, 2, 3].map((i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <span className="block w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                  {t(`inversiones.model_individual.benefits.${i}`)}
                </li>
              ))}
            </ul>

            <div className="bg-gray-50 rounded-2xl p-5 mb-5 border border-gray-100">
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">
                {t("inversiones.model_individual.roi_title")}
              </p>
              {[0, 1, 2].map((i) => (
                <p key={i} className="text-gray-600 text-sm leading-relaxed">
                  {t(`inversiones.model_individual.roi_items.${i}`)}
                </p>
              ))}
            </div>

            <p className="text-gray-900 font-medium italic">
              {t("inversiones.model_individual.closing")}
            </p>
          </ModelCard>

          {/* Model 2 */}
          <ModelCard
            tag={t("inversiones.model_coproperty.tag")}
            title={t("inversiones.model_coproperty.title")}
            price={t("inversiones.model_coproperty.price")}
            icon={<Users size={24} />}
            accent="slate"
          >
            <p className="text-gray-500 mb-4">{t("inversiones.model_coproperty.description")}</p>
            <ul className="space-y-2 mb-6">
              {[0, 1, 2, 3].map((i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <span className="block w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                  {t(`inversiones.model_coproperty.benefits.${i}`)}
                </li>
              ))}
            </ul>
            <p className="text-gray-900 font-medium italic">
              {t("inversiones.model_coproperty.closing")}
            </p>
          </ModelCard>

          {/* Model 3 */}
          <ModelCard
            tag={t("inversiones.model_fund.tag")}
            title={t("inversiones.model_fund.title")}
            tagline={t("inversiones.model_fund.tagline")}
            price={t("inversiones.model_fund.price")}
            icon={<TrendingUp size={24} />}
            accent="dark"
          >
            <p className="text-white/50 mb-4">{t("inversiones.model_fund.description")}</p>

            <div className="bg-white/5 rounded-2xl p-5 mb-5 border border-white/10">
              {[0, 1, 2].map((i) => (
                <p key={i} className="text-white/60 text-sm leading-relaxed">
                  {t(`inversiones.model_fund.allocation.${i}`)}
                </p>
              ))}
            </div>

            <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 mb-5">
              <p className="text-white font-semibold text-sm">
                {t("inversiones.model_fund.target_roi")}
              </p>
            </div>

            <p className="text-white/40 mb-3 text-sm">{t("inversiones.model_fund.benefits_title")}</p>
            <ul className="space-y-2 mb-6">
              {[0, 1, 2, 3].map((i) => (
                <li key={i} className="flex items-center gap-2 text-white/70">
                  <span className="block w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                  {t(`inversiones.model_fund.benefits.${i}`)}
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-white/10">
              <p className="text-white font-medium">
                {t("inversiones.model_fund.closing_1")}
              </p>
              <p className="text-white/40 italic">
                {t("inversiones.model_fund.closing_2")}
              </p>
            </div>
          </ModelCard>
        </div>
      </div>
    </section>
  );
}

function ModelCard({
  tag,
  title,
  tagline,
  price,
  icon,
  accent,
  children,
}: {
  tag: string;
  title: string;
  tagline?: string;
  price: string;
  icon: React.ReactNode;
  accent: "stone" | "slate" | "dark";
  children: React.ReactNode;
}) {
  const accentMap = {
    stone: {
      wrapper: "bg-white border-gray-200",
      header: "bg-stone-50 border-stone-200",
      iconBg: "bg-stone-100 text-stone-700",
      tag: "text-stone-600",
      priceBg: "bg-white border-stone-200 text-gray-900",
    },
    slate: {
      wrapper: "bg-white border-gray-200",
      header: "bg-slate-50 border-slate-200",
      iconBg: "bg-slate-100 text-slate-700",
      tag: "text-slate-600",
      priceBg: "bg-white border-slate-200 text-gray-900",
    },
    dark: {
      wrapper: "bg-gray-950 border-gray-800",
      header: "bg-black border-gray-800",
      iconBg: "bg-white/10 text-white",
      tag: "text-white/50",
      priceBg: "bg-white/10 border-white/20 text-white",
    },
  };
  const a = accentMap[accent];
  const isDark = accent === "dark";

  return (
    <article className={`rounded-3xl border shadow-sm overflow-hidden ${a.wrapper}`}>
      <div className={`${a.header} border-b px-8 py-5 flex items-center justify-between`}>
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${a.iconBg}`}>
            {icon}
          </div>
          <div>
            <p className={`text-xs font-bold tracking-widest uppercase ${a.tag}`}>{tag}</p>
            <h3 className={`text-xl font-medium ${isDark ? "text-white" : "text-gray-900"}`}>{title}</h3>
          </div>
        </div>
        <span className={`hidden sm:block text-sm font-semibold border px-4 py-2 rounded-full ${a.priceBg}`}>
          {price}
        </span>
      </div>

      <div className="p-8">
        {tagline && (
          <p className={`font-medium text-lg mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>{tagline}</p>
        )}
        <span className={`sm:hidden inline-block text-sm font-semibold border px-4 py-2 rounded-full mb-4 ${a.priceBg}`}>
          {price}
        </span>
        {children}
      </div>
    </article>
  );
}

function EmotionalSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight mb-6">
            {t("inversiones.emotional.title")}
          </h2>
          <p className="text-gray-500 text-lg md:text-xl mb-8 font-light">
            {t("inversiones.emotional.subtitle")}
          </p>
          <p className="text-xl md:text-2xl font-medium text-gray-900">
            {t("inversiones.emotional.closing")}
          </p>
        </div>
      </div>
    </section>
  );
}

function InstitutionalSection() {
  const { t } = useTranslation();

  const benefits = [0, 1, 2, 3, 4].map((i) => t(`inversiones.institutional.benefits.${i}`));
  const icons = [Building2, BarChart3, ShieldCheck, Users, Globe];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
            {t("inversiones.institutional.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight mb-3">
            {t("inversiones.institutional.title")}
          </h2>
          <p className="text-gray-500 text-lg mb-4 font-light">
            {t("inversiones.institutional.subtitle")}
          </p>
          <p className="text-gray-400 mb-10">
            {t("inversiones.institutional.intro")}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {benefits.map((b, idx) => {
              const Icon = icons[idx] ?? Globe;
              return (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-gray-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{b}</p>
                </div>
              );
            })}
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-lg text-gray-500 font-light max-w-sm">
              {t("inversiones.institutional.closing_1")}
            </p>
            <p className="text-2xl md:text-3xl font-medium text-gray-900 text-right">
              {t("inversiones.institutional.closing_2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingSection() {
  const { t } = useTranslation();
  const { scrollToId } = useSmoothScroll();

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="relative container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.25em] text-white/40 uppercase mb-6">
            {t("inversiones.closing.line_1")}
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-10">
            {t("inversiones.closing.line_2")}
          </h2>

          <div className="border-t border-white/10 pt-8 mb-12 space-y-3">
            <p className="text-white/60 text-base">{t("inversiones.closing.intro")}</p>
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-white/20" />
              <p className="text-white/40 text-sm">{t("inversiones.closing.option_1")}</p>
              <span className="h-px w-12 bg-white/20" />
            </div>
            <p className="text-white text-lg font-medium">{t("inversiones.closing.option_2")}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contacto"
              onClick={(e) => scrollToId(e, "#contacto")}
              scroll={false}
              className="group flex items-center justify-center gap-3 bg-white text-gray-950 pl-6 pr-2 py-3 rounded-full text-sm font-bold hover:bg-gray-100 transition-all"
            >
              {t("inversiones.closing.cta_primary")}
              <div className="w-8 h-8 bg-gray-950 rounded-full flex items-center justify-center text-white group-hover:bg-gray-800 transition-colors">
                <ArrowRight size={14} />
              </div>
            </Link>
            <Link
              href="#calculadora"
              onClick={(e) => scrollToId(e, "#calculadora")}
              scroll={false}
              className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/20 transition-all"
            >
              {t("inversiones.closing.cta_secondary")}
            </Link>
            <Link
              href="#contacto"
              onClick={(e) => scrollToId(e, "#contacto")}
              scroll={false}
              className="flex items-center justify-center gap-2 bg-transparent border border-white/10 text-white/60 px-6 py-3 rounded-full text-sm font-medium hover:text-white hover:border-white/30 transition-all"
            >
              {t("inversiones.closing.cta_advisor")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function InvestmentLandingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar currentDestination="home" />
      <HeroSection />
      <RealitySection />
      <SolutionSection />
      <EmotionalSection />
      <div id="calculadora">
        <InvestmentROICalculator />
      </div>
      <InstitutionalSection />
      <ClosingSection />
      <Footer />
    </main>
  );
}
