"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Building2,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Briefcase,
  Users,
  DollarSign,
  Scale,
  Eye,
  Handshake,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ───────────────── HERO ───────────────── */
function HeroSection() {
  const { t } = useTranslation();

  const approaches = [0, 1, 2, 3, 4].map((i) => t(`nosotros.hero.approach.${i}`));
  const approachIcons = [Building2, BarChart3, TrendingUp, Globe, ShieldCheck];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />
      <div className="absolute top-0 left-0 w-2/3 h-full opacity-5">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-sky-400 blur-[180px]" />
      </div>

      <div className="relative container mx-auto px-6 md:px-12 py-32 md:py-30">
        <div className="max-w-4xl">

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white/60 leading-[1.05] mb-3">
            {t("nosotros.hero.title")}
          </h1>
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.1] mb-8">
            {t("nosotros.hero.title_highlight")}
          </p>

          <div className="mb-4">
            <p className="text-xs font-bold tracking-[0.2em] text-white/30 uppercase mb-5">
              {t("nosotros.hero.approach_title")}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {approaches.map((item, idx) => {
                const Icon = approachIcons[idx] ?? Globe;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3"
                  >
                    <Icon size={16} className="text-white/40 mt-0.5 shrink-0" />
                    <p className="text-white/70 text-sm">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── VISION ───────────────── */
function VisionSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
            {t("nosotros.vision.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight mb-8">
            {t("nosotros.vision.title")}
          </h2>

          <div className="border-l-2 border-gray-200 pl-6 space-y-2">
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              {t("nosotros.vision.line_1")}
            </p>
            <p className="text-gray-900 text-lg font-medium">
              {t("nosotros.vision.line_2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── DIFFERENCE ───────────────── */
function DifferenceSection() {
  const { t } = useTranslation();

  const items = [0, 1, 2, 3, 4].map((i) => t(`nosotros.difference.items.${i}`));
  const icons = [BarChart3, Scale, TrendingUp, Briefcase, Sparkles];

  return (
    <section className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
            {t("nosotros.difference.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight mb-12">
            {t("nosotros.difference.title")}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {items.map((item, idx) => {
              const Icon = icons[idx] ?? Globe;
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-100 rounded-2xl p-6 flex items-start gap-4 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-gray-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              );
            })}
          </div>

          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-xl text-gray-400 font-light">
              {t("nosotros.difference.closing_1")}
            </p>
            <p className="text-2xl md:text-3xl font-medium text-gray-900 mt-1">
              {t("nosotros.difference.closing_2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── CAPITAL ───────────────── */
function CapitalSection() {
  const { t } = useTranslation();

  const items = [0, 1, 2, 3].map((i) => t(`nosotros.capital.items.${i}`));

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />

      <div className="relative container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] text-amber-400/80 uppercase mb-4">
            {t("nosotros.capital.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-12">
            {t("nosotros.capital.title")}
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex items-start gap-4"
              >
                <CheckCircle2 size={18} className="text-amber-400 mt-0.5 shrink-0" />
                <p className="text-white/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-6 text-center">
            <p className="text-white text-lg md:text-xl font-medium">
              {t("nosotros.capital.closing")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── PRESENCE ───────────────── */
function PresenceSection() {
  const { t } = useTranslation();

  const markets = [
    { key: 0, flagCode: "ae" },
    { key: 1, flagCode: "us" },
    { key: 2, flagCode: "es" },
    { key: 3, flagCode: "id" },
    { key: 4, flagCode: "do" },
    { key: 5, flagCode: "cl" },
    { key: 6, flagCode: "mx" },
  ].map(({ key, flagCode }) => ({ name: t(`nosotros.presence.markets.${key}`), flagCode }));

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
            {t("nosotros.presence.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight mb-4">
            {t("nosotros.presence.title")}
          </h2>
          <p className="text-gray-500 text-lg mb-10 font-light">
            {t("nosotros.presence.subtitle")}
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {markets.map((market, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-5 py-3"
              >
                <img
                  src={`https://flagcdn.com/w40/${market.flagCode}.png`}
                  alt={market.name}
                  width={26}
                  height={19}
                  className="rounded-sm object-cover shrink-0"
                />
                <span className="text-gray-800 font-semibold">{market.name}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-500 font-light max-w-xl">
            {t("nosotros.presence.closing")}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── PHILOSOPHY ───────────────── */
function PhilosophySection() {
  const { t } = useTranslation();

  const pillars = [0, 1, 2, 3].map((i) => t(`nosotros.philosophy.pillars.${i}`));

  return (
    <section className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-10">
            {t("nosotros.philosophy.eyebrow")}
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-12">
            {pillars.map((pillar, idx) => (
              <span
                key={idx}
                className="text-2xl md:text-4xl font-medium text-gray-900"
              >
                {pillar}
              </span>
            ))}
          </div>

          <div className="max-w-xl mx-auto">
            <p className="text-gray-400 text-lg font-light mb-1">
              {t("nosotros.philosophy.closing_1")}
            </p>
            <p className="text-gray-900 text-xl md:text-2xl font-medium">
              {t("nosotros.philosophy.closing_2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── AUDIENCE ───────────────── */
function AudienceSection() {
  const { t } = useTranslation();

  const profiles = [0, 1, 2, 3, 4].map((i) => t(`nosotros.audience.profiles.${i}`));
  const profileIcons = [Briefcase, DollarSign, Users, Globe, ShieldCheck];

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
            {t("nosotros.audience.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight mb-12">
            {t("nosotros.audience.title")}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {profiles.map((profile, idx) => {
              const Icon = profileIcons[idx] ?? Users;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-gray-600" />
                  </div>
                  <p className="text-gray-700 font-medium text-sm">{profile}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── COMMITMENT ───────────────── */
function CommitmentSection() {
  const { t } = useTranslation();
  const { scrollToId } = useSmoothScroll();

  const pillars = [0, 1, 2, 3].map((i) => t(`nosotros.commitment.pillars.${i}`));
  const pillarIcons = [Eye, BarChart3, Building2, Handshake];

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="relative container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-4">
            {t("nosotros.commitment.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-12">
            {t("nosotros.commitment.title")}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {pillars.map((pillar, idx) => {
              const Icon = pillarIcons[idx] ?? ShieldCheck;
              return (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon size={20} className="text-white/60" />
                  </div>
                  <p className="text-white font-medium text-sm">{pillar}</p>
                </div>
              );
            })}
          </div>

          <p className="text-white/40 text-lg mb-10 font-light">
            {t("nosotros.commitment.closing")}
          </p>

          <Link
            href="#contacto"
            onClick={(e) => scrollToId(e, "#contacto")}
            scroll={false}
            className="group inline-flex items-center gap-3 bg-white text-gray-950 pl-6 pr-2 py-3 rounded-full text-sm font-bold hover:bg-gray-100 transition-all"
          >
            {t("nosotros.commitment.cta")}
            <div className="w-8 h-8 bg-gray-950 rounded-full flex items-center justify-center text-white group-hover:bg-gray-800 transition-colors">
              <ArrowRight size={14} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────────── MAIN PAGE ───────────────── */
export default function AboutUsLandingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar currentDestination="home" />
      <HeroSection />
      <VisionSection />
      <DifferenceSection />
      <CapitalSection />
      <PresenceSection />
      <PhilosophySection />
      <AudienceSection />
      <CommitmentSection />
      <Footer />
    </main>
  );
}
