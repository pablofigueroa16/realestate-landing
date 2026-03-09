"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Layout,
  Briefcase,
  Building2,
  GraduationCap,
  DollarSign,
  Plane,
  Users,
  ShieldCheck,
  Rocket,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ───────────────── HERO ───────────────── */
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
      <div className="absolute bottom-0 left-0 w-2/3 h-1/2 opacity-5">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-emerald-400 blur-[180px]" />
      </div>

      <div className="relative container mx-auto px-6 md:px-12 py-32 md:py-30">
        <div className="max-w-4xl">

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.05] mb-3">
            {t("agentes.hero.title")}
          </h1>
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium text-emerald-400/90 leading-[1.1] mb-8">
            {t("agentes.hero.title_highlight")}
          </p>

          <div className="flex items-start gap-3 mb-10">
            <div className="border-l-2 border-emerald-400/40 pl-4">
              <p className="text-white font-medium text-lg">{t("agentes.hero.closing_1")}</p>
              <p className="text-white/50 font-light text-lg">{t("agentes.hero.closing_2")}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contacto"
              onClick={(e) => scrollToId(e, "#contacto")}
              scroll={false}
              className="group flex items-center gap-3 bg-white text-gray-950 pl-6 pr-1.5 py-2.5 rounded-full text-base font-bold hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 w-fit"
            >
              {t("agentes.hero.cta")}
              <div className="w-9 h-9 bg-gray-950 rounded-full flex items-center justify-center text-white group-hover:bg-gray-800 transition-colors">
                <ArrowRight size={18} />
              </div>
            </Link>
            <Link
              href="#contacto"
              onClick={(e) => scrollToId(e, "#contacto")}
              scroll={false}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2.5 rounded-full text-base font-medium hover:bg-white/20 transition-all hover:scale-105 active:scale-95 w-fit"
            >
              {t("agentes.hero.cta_secondary")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── WHAT IS ───────────────── */
function WhatIsSection() {
  const { t } = useTranslation();

  const offerings = [0, 1, 2, 3, 4, 5].map((i) => t(`agentes.what_is.offerings.${i}`));
  const icons = [Building2, MapPin, Globe, Briefcase, Plane, Layout];

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
            {t("agentes.what_is.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight mb-4">
            {t("agentes.what_is.title")}
          </h2>
          <p className="text-gray-500 text-lg mb-10 font-light">
            {t("agentes.what_is.subtitle")}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {offerings.map((offer, idx) => {
              const Icon = icons[idx] ?? Globe;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-emerald-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{offer}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 space-y-2">
            <p className="text-gray-500">{t("agentes.what_is.no_1")}</p>
            <p className="text-gray-500">{t("agentes.what_is.no_2")}</p>
            <p className="text-gray-900 font-medium">{t("agentes.what_is.no_3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── STARTER KIT ───────────────── */
function StarterKitSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
            {t("agentes.starter_kit.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight mb-14">
            {t("agentes.starter_kit.title")}
          </h2>

          <div className="space-y-6">
            {/* Kit 1 — Landing */}
            <KitCard
              tag={t("agentes.kit_landing.tag")}
              title={t("agentes.kit_landing.title")}
              icon={<Layout size={22} />}
              accent="stone"
            >
              <ul className="space-y-2 mb-5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 size={16} className="text-gray-400 shrink-0" />
                    {t(`agentes.kit_landing.features.${i}`)}
                  </li>
                ))}
              </ul>
              <p className="text-gray-900 font-medium italic">{t("agentes.kit_landing.closing")}</p>
            </KitCard>

            {/* Kit 2 — Portfolio */}
            <KitCard
              tag={t("agentes.kit_portfolio.tag")}
              title={t("agentes.kit_portfolio.title")}
              icon={<Globe size={22} />}
              accent="slate"
            >
              <p className="text-gray-500 mb-4 text-sm">{t("agentes.kit_portfolio.subtitle")}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <span
                    key={i}
                    className="bg-gray-100 border border-gray-200 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-lg"
                  >
                    {t(`agentes.kit_portfolio.destinations.${i}`)}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-sm">{t("agentes.kit_portfolio.closing")}</p>
            </KitCard>

            {/* Kit 3 — Developers */}
            <KitCard
              tag={t("agentes.kit_developers.tag")}
              title={t("agentes.kit_developers.title")}
              icon={<Building2 size={22} />}
              accent="zinc"
            >
              <ul className="space-y-2 mb-5">
                {[0, 1, 2, 3].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 size={16} className="text-gray-400 shrink-0" />
                    {t(`agentes.kit_developers.features.${i}`)}
                  </li>
                ))}
              </ul>
              <p className="text-gray-500">{t("agentes.kit_developers.closing_1")}</p>
              <p className="text-gray-900 font-medium">{t("agentes.kit_developers.closing_2")}</p>
            </KitCard>

            {/* Kit 4 — Training */}
            <KitCard
              tag={t("agentes.kit_training.tag")}
              title={t("agentes.kit_training.title")}
              icon={<GraduationCap size={22} />}
              accent="dark"
            >
              <p className="text-white/50 mb-3 text-sm">{t("agentes.kit_training.subtitle")}</p>
              <ul className="space-y-2 mb-6">
                {[0, 1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-white/70">
                    <CheckCircle2 size={16} className="text-white/40 shrink-0" />
                    {t(`agentes.kit_training.topics.${i}`)}
                  </li>
                ))}
              </ul>
              <p className="text-white/40 text-sm font-semibold mb-2">{t("agentes.kit_training.extras_title")}</p>
              <ul className="space-y-1.5">
                {[0, 1, 2].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-white/60 text-sm">
                    <span className="block w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                    {t(`agentes.kit_training.extras.${i}`)}
                  </li>
                ))}
              </ul>
            </KitCard>

            {/* Kit 5 — Commission */}
            <KitCard
              tag={t("agentes.kit_commission.tag")}
              title={t("agentes.kit_commission.title")}
              icon={<DollarSign size={22} />}
              accent="stone"
            >
              <ul className="space-y-2 mb-5">
                {[0, 1, 2].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 size={16} className="text-gray-400 shrink-0" />
                    {t(`agentes.kit_commission.features.${i}`)}
                  </li>
                ))}
              </ul>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 space-y-1">
                <p className="text-gray-500 text-sm">{t("agentes.kit_commission.no_1")}</p>
                <p className="text-gray-500 text-sm">{t("agentes.kit_commission.no_2")}</p>
                <p className="text-gray-900 text-sm font-medium">{t("agentes.kit_commission.no_3")}</p>
              </div>
            </KitCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function KitCard({
  tag,
  title,
  icon,
  accent,
  children,
}: {
  tag: string;
  title: string;
  icon: React.ReactNode;
  accent: "stone" | "slate" | "zinc" | "dark";
  children: React.ReactNode;
}) {
  const styles = {
    stone: { wrapper: "bg-white border-gray-200",    headerBg: "bg-stone-50",  headerBorder: "border-stone-200",  iconBg: "bg-stone-100 text-stone-700",  tag: "text-stone-600" },
    slate: { wrapper: "bg-white border-gray-200",    headerBg: "bg-slate-50",  headerBorder: "border-slate-200",  iconBg: "bg-slate-100 text-slate-700",  tag: "text-slate-600" },
    zinc:  { wrapper: "bg-white border-gray-200",    headerBg: "bg-zinc-50",   headerBorder: "border-zinc-200",   iconBg: "bg-zinc-100 text-zinc-700",    tag: "text-zinc-600"  },
    dark:  { wrapper: "bg-gray-950 border-gray-800", headerBg: "bg-black",     headerBorder: "border-gray-800",   iconBg: "bg-white/10 text-white",       tag: "text-white/50"  },
  };
  const s = styles[accent];
  const isDark = accent === "dark";

  return (
    <article className={`rounded-3xl border shadow-sm overflow-hidden ${s.wrapper}`}>
      <div className={`${s.headerBg} ${s.headerBorder} border-b px-8 py-5 flex items-center gap-4`}>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${s.iconBg}`}>
          {icon}
        </div>
        <div className="flex items-center gap-3">
          <span className={`text-xs font-bold tracking-widest ${s.tag}`}>{tag}</span>
          <h3 className={`text-xl font-medium ${isDark ? "text-white" : "text-gray-900"}`}>{title}</h3>
        </div>
      </div>
      <div className="p-8">{children}</div>
    </article>
  );
}

/* ───────────────── ELITE PROGRAM ───────────────── */
function EliteSection() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-amber-400 blur-[150px]" />
      </div>

      <div className="relative container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] text-amber-400/80 uppercase mb-4">
            {t("agentes.elite.eyebrow")}
          </p>
          <h2 className="text-4xl md:text-6xl font-medium text-white leading-tight mb-3">
            <Plane size={36} className="inline-block text-amber-400 mr-3 -mt-1" />
            {t("agentes.elite.title")}
          </h2>
          <p className="text-white/50 text-lg mb-10 font-light">
            {t("agentes.elite.subtitle")}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex items-start gap-3"
              >
                <CheckCircle2 size={18} className="text-amber-400 mt-0.5 shrink-0" />
                <p className="text-white/80">{t(`agentes.elite.benefits.${i}`)}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-white/40 text-lg">{t("agentes.elite.closing_1")}</p>
            <p className="text-2xl md:text-3xl font-medium text-white mt-1">
              {t("agentes.elite.closing_2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── WHO IS IT FOR ───────────────── */
function WhoSection() {
  const { t } = useTranslation();

  const profileIcons = [Building2, Briefcase, DollarSign, Users, Rocket];

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
            {t("agentes.who.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight mb-10">
            {t("agentes.who.title")}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[0, 1, 2, 3, 4].map((i) => {
              const Icon = profileIcons[i] ?? Users;
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-gray-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{t(`agentes.who.profiles.${i}`)}</p>
                </div>
              );
            })}
          </div>

          <p className="text-xl md:text-2xl font-medium text-gray-900 text-center">
            {t("agentes.who.closing")}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── OUR DIFFERENCE ───────────────── */
function DifferenceSection() {
  const { t } = useTranslation();

  const benefitIcons = [Layout, ShieldCheck, Globe, Building2, Rocket];

  return (
    <section className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
            {t("agentes.difference.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight mb-1">
            {t("agentes.difference.title")}
          </h2>
          <p className="text-2xl md:text-4xl font-medium text-emerald-600 mb-12">
            {t("agentes.difference.title_highlight")}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {[0, 1, 2, 3, 4].map((i) => {
              const Icon = benefitIcons[i] ?? Globe;
              return (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-2xl p-6 flex items-start gap-4 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-emerald-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{t(`agentes.difference.benefits.${i}`)}</p>
                </div>
              );
            })}
          </div>

          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-xl text-gray-400 font-light">
              {t("agentes.difference.closing_1")}
            </p>
            <p className="text-2xl md:text-3xl font-medium text-gray-900 mt-1">
              {t("agentes.difference.closing_2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── HOW TO APPLY ───────────────── */
function ApplySection() {
  const { t } = useTranslation();
  const { scrollToId } = useSmoothScroll();

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="relative container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] text-emerald-400/80 uppercase mb-4">
            {t("agentes.apply.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-12">
            {t("agentes.apply.title")}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
              >
                <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {t(`agentes.apply.steps.${i}`)}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contacto"
              onClick={(e) => scrollToId(e, "#contacto")}
              scroll={false}
              className="group flex items-center justify-center gap-3 bg-white text-gray-950 pl-6 pr-2 py-3 rounded-full text-sm font-bold hover:bg-gray-100 transition-all"
            >
              {t("agentes.apply.cta_primary")}
              <div className="w-8 h-8 bg-gray-950 rounded-full flex items-center justify-center text-white group-hover:bg-gray-800 transition-colors">
                <ArrowRight size={14} />
              </div>
            </Link>
            <Link
              href="#contacto"
              onClick={(e) => scrollToId(e, "#contacto")}
              scroll={false}
              className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/20 transition-all"
            >
              {t("agentes.apply.cta_secondary")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── MAIN PAGE ───────────────── */
export default function AgentLandingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar currentDestination="home" />
      <HeroSection />
      <WhatIsSection />
      <StarterKitSection />
      <EliteSection />
      <WhoSection />
      <DifferenceSection />
      <ApplySection />
      <Footer />
    </main>
  );
}
