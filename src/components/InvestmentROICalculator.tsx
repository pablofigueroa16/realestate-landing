"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const RATES: Record<number, number> = {
  0: 0.11,
  1: 0.09,
  2: 0.15,
};

function formatUSD(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export default function InvestmentROICalculator() {
  const { t } = useTranslation();
  const [amount, setAmount] = useState("");
  const [modelIndex, setModelIndex] = useState(0);
  const [years, setYears] = useState(3);
  const [result, setResult] = useState<{
    final: number;
    initial: number;
    gain: number;
    rate: number;
  } | null>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const animFrameRef = useRef<number>(0);
  const resultRef = useRef<HTMLDivElement>(null);

  const modelLabels = [
    t("inversiones.calculator.model_options.0"),
    t("inversiones.calculator.model_options.1"),
    t("inversiones.calculator.model_options.2"),
  ];

  const animateCount = useCallback((target: number) => {
    const duration = 1200;
    const startTime = performance.now();
    const startVal = 0;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(startVal + (target - startVal) * eased));

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(step);
      }
    };

    cancelAnimationFrame(animFrameRef.current);
    animFrameRef.current = requestAnimationFrame(step);
  }, []);

  const handleSimulate = () => {
    const capital = parseFloat(amount.replace(/,/g, ""));
    if (!capital || capital < 1) return;

    const rate = RATES[modelIndex] ?? 0.11;
    const finalVal = capital * Math.pow(1 + rate, years);
    const gain = finalVal - capital;

    setResult({
      final: Math.round(finalVal),
      initial: capital,
      gain: Math.round(gain),
      rate: rate * 100,
    });

    animateCount(Math.round(finalVal));

    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  useEffect(() => {
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

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
            {t("inversiones.calculator.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-4">
            {t("inversiones.calculator.title")}
          </h2>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 mb-6">
            <p className="text-white/60 text-sm leading-relaxed mb-1">
              {t("inversiones.calculator.intro_1")}
            </p>
            <p className="text-white/60 text-sm">
              {t("inversiones.calculator.intro_2")}{" "}
              <span className="text-amber-400 font-semibold">
                {t("inversiones.calculator.intro_amount")}
              </span>
            </p>
            <p className="text-white/40 text-sm italic mt-1">
              {t("inversiones.calculator.intro_3")}
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-10">
            <div className="space-y-8">
              {/* Amount */}
              <div>
                <label className="block text-xs font-bold tracking-widest text-white/50 uppercase mb-3">
                  {t("inversiones.calculator.field_amount_label")}
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder={t("inversiones.calculator.field_amount_placeholder")}
                  value={amount}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^0-9]/g, "");
                    if (raw) {
                      setAmount(Number(raw).toLocaleString("en-US"));
                    } else {
                      setAmount("");
                    }
                  }}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-lg placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all"
                />
                <p className="text-white/30 text-xs mt-2">
                  {t("inversiones.calculator.field_amount_hint")}
                </p>
              </div>

              {/* Model */}
              <div>
                <label className="block text-xs font-bold tracking-widest text-white/50 uppercase mb-3">
                  {t("inversiones.calculator.field_model_label")}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {modelLabels.map((label, idx) => (
                    <button
                      key={idx}
                      onClick={() => setModelIndex(idx)}
                      className={`cursor-pointer px-4 py-3 rounded-xl text-sm font-medium transition-all border ${
                        modelIndex === idx
                          ? "bg-amber-400/20 border-amber-400/50 text-amber-300"
                          : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white/80"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Years Slider */}
              <div>
                <label className="block text-xs font-bold tracking-widest text-white/50 uppercase mb-3">
                  {t("inversiones.calculator.field_years_label")}
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={1}
                    max={7}
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="flex-1 accent-amber-400 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-white text-2xl font-semibold min-w-12 text-center">
                    {years}
                  </span>
                </div>
                <p className="text-white/30 text-xs mt-2">
                  {t("inversiones.calculator.field_years_hint")}
                </p>
              </div>

              {/* Simulate Button */}
              <button
                onClick={handleSimulate}
                className="cursor-pointer w-full bg-linear-to-r from-amber-500 to-amber-600 text-gray-950 font-bold text-base py-4 rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all active:scale-[0.98] tracking-wide"
              >
                {t("inversiones.calculator.simulate_btn")}
              </button>
            </div>
          </div>

          {/* Result */}
          {result && (
            <div
              ref={resultRef}
              className="mt-8 bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-3xl p-8 md:p-12 text-center"
            >
              <p className="text-xs font-bold tracking-[0.2em] text-amber-400/80 uppercase mb-4">
                {t("inversiones.calculator.result_title")}
              </p>
              <p className="text-5xl md:text-7xl font-bold text-white mb-8 tabular-nums">
                {formatUSD(displayValue)}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 rounded-2xl p-4">
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                    {t("inversiones.calculator.result_initial")}
                  </p>
                  <p className="text-white text-lg font-semibold">
                    {formatUSD(result.initial)}
                  </p>
                </div>
                <div className="bg-white/5 rounded-2xl p-4">
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                    {t("inversiones.calculator.result_gain")}
                  </p>
                  <p className="text-amber-400 text-lg font-semibold">
                    +{formatUSD(result.gain)}
                  </p>
                </div>
                <div className="bg-white/5 rounded-2xl p-4">
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                    {t("inversiones.calculator.result_rate")}
                  </p>
                  <p className="text-white text-lg font-semibold">
                    {result.rate}%
                  </p>
                </div>
              </div>

              <p className="text-white/30 text-xs max-w-xl mx-auto mb-8 leading-relaxed">
                {t("inversiones.calculator.disclaimer")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#contacto"
                  className="group flex items-center justify-center gap-3 bg-white text-gray-950 pl-6 pr-2 py-3 rounded-full text-sm font-bold hover:bg-gray-100 transition-all"
                >
                  {t("inversiones.calculator.cta_advisor")}
                  <div className="w-8 h-8 bg-gray-950 rounded-full flex items-center justify-center text-white group-hover:bg-gray-800 transition-colors">
                    <ArrowRight size={14} />
                  </div>
                </Link>
                <Link
                  href="/#unidades"
                  className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/20 transition-all"
                >
                  {t("inversiones.calculator.cta_opportunities")}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
