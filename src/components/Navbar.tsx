"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Instagram,
  Phone,
  ArrowUpRight,
  Menu,
  X,
  ChevronDown
} from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useTranslation } from "@/hooks/useTranslation";

interface NavbarProps {
  currentDestination?: "dubai" | "bali" | "home" | "miami" | "madrid" | "cdmx";
}

interface NavLinkItem {
  name: string;
  href: string;
  isAnchor?: boolean;
}

export default function Navbar({ currentDestination = "home" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDestinationOpen, setIsDestinationOpen] = useState(false);
  const { scrollToId } = useSmoothScroll();
  const { t, locale, setLocale } = useTranslation();

  const toggleLanguage = () => {
    setLocale(locale === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLElement>, id: string) => {
    scrollToId(e, id);
    setIsMobileMenuOpen(false);
  };

  const isHome = currentDestination === "home";
  const homeLabel = locale === "es" ? "INICIO" : "HOME";

  const navLinks: NavLinkItem[] = isHome
    ? [
      { name: t("nav.investments"), href: "/inversiones" },
      { name: t("nav.projects"), href: "/propiedades" },
      { name: t("nav.agent"), href: "/agentes" },
      { name: t("home.nav.about"), href: "/nosotros" },
      { name: t("home.nav.contact"), href: "#contacto", isAnchor: true },
    ]
    : [
      { name: t("nav.investments"), href: "/inversiones" },
      { name: t("nav.projects"), href: "/propiedades" },
      { name: t("nav.agent"), href: "/agentes" },
      { name: t("nav.about"), href: "/nosotros" },
      { name: t("nav.contact"), href: "#contacto", isAnchor: true },
    ];

  const destinationsList = [
    { name: "DUBAI", path: "/dubai" },
    { name: "BALI", path: "/bali" },
    { name: "MIAMI", path: "/miami" },
    { name: "MADRID", path: "/madrid" },
    { name: "CDMX", path: "/cdmx" },
  ];

  return (
    <header
      className={`fixed z-50  transition-all duration-500 ease-in-out ${isScrolled
        ? "top-0 left-0 right-0 w-full rounded-none bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-gray-100"
        : "top-3 left-3 right-3 md:top-4 md:left-4 md:right-4 w-auto rounded-t-4xl bg-transparent py-5"
        }`}
    >
      <div className="container  mx-auto px-6 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => handleAnchorClick(e, "#inicio")}
          className="z-50 relative"
        >
          <img
            src="/logo.png"
            alt="Estetico Estate"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`hidden border border-gray-200 md:flex items-center gap-6 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${isScrolled
            ? "bg-gray-100/50 text-gray-800"
            : "bg-white/10 backdrop-blur-md border border-white/10 text-white/90"
            }`}
        >
          {/* 1. HOME Link */}
          <Link
            href="/"
            className={`transition-colors cursor-pointer ${isScrolled ? "hover:text-gray-900" : "hover:text-white"
              }`}
          >
            {homeLabel}
          </Link>

          {/* 2. DESTINATION SELECTOR (Moved here) */}
          <div className="relative group">
            <button
              onClick={() => setIsDestinationOpen(!isDestinationOpen)}
              className={`flex items-center gap-1 transition-colors cursor-pointer uppercase ${isScrolled ? "hover:text-gray-900" : "hover:text-white"
                }`}
            >
              {isHome ? t("home.nav.destinations") : t("nav.destinations")}
              <ChevronDown size={14} className={`transition-transform duration-300 ${isDestinationOpen ? "rotate-180" : ""}`} />
            </button>

            <div className={`absolute top-full left-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-1 z-50 transition-all duration-300 ease-out origin-top ${isDestinationOpen
              ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
              }`}>
              {destinationsList.map((dest) => (
                <Link
                  key={dest.path}
                  href={dest.path}
                  className={`block px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${dest.path.includes(currentDestination) && currentDestination !== 'home'
                    ? 'font-bold text-black'
                    : 'text-gray-700'
                    }`}
                  onClick={() => setIsDestinationOpen(false)}
                >
                  {dest.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Remaining Links based on Destination */}
          {navLinks.map((item) => (
            item.isAnchor ? (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToId(e, item.href)}
                scroll={false}
                className={`transition-colors ${isScrolled ? "hover:text-gray-900" : "hover:text-white"
                  }`}
              >
                {item.name}
              </Link>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${isScrolled ? "hover:text-gray-900" : "hover:text-white"
                  }`}
              >
                {item.name}
              </Link>
            )
          ))}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-2">
          {/* Destination Selector Removed from here */}

          <button
            onClick={toggleLanguage}
            className={`h-9 px-3 cursor-pointer rounded-full flex items-center justify-center transition-colors duration-300 text-xs font-bold tracking-wider ${isScrolled
              ? "bg-gray-100 border border-gray-200 text-gray-900 hover:bg-gray-200"
              : "bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20"
              }`}
          >
            {locale === 'es' ? 'EN' : 'ES'}
          </button>
          <button className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${isScrolled
            ? "bg-gray-100 border border-gray-200 text-gray-900 hover:bg-gray-200"
            : "bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20"
            }`}>
            <Instagram size={16} />
          </button>
          <button className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${isScrolled
            ? "bg-gray-100 border border-gray-200 text-gray-900 hover:bg-gray-200"
            : "bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20"
            }`}>
            <Phone size={16} />
          </button>
          <Link
            href="#contacto"
            onClick={(e) => scrollToId(e, "#contacto")}
            scroll={false}
            className={`flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full font-medium text-xs transition-colors group ${isScrolled
              ? "bg-gray-900 text-white hover:bg-black"
              : "bg-white text-black hover:bg-gray-100"
              }`}
          >
            {t('nav.book_consultation')}
            <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${isScrolled
              ? "bg-white text-gray-900 group-hover:bg-gray-200"
              : "bg-black text-white group-hover:bg-gray-800"
              }`}>
              <ArrowUpRight size={14} />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden z-50 p-2 transition-colors duration-300 ${isScrolled && !isMobileMenuOpen ? "text-gray-900" : "text-white"
            }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden h-screen w-screen ${isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
            }`}
        >
          <nav className="flex flex-col items-center gap-6 text-xl font-medium text-white w-full px-6">
            {/* Mobile Destinations Selector */}
            <div className="flex flex-col items-center w-full border-b border-white/10 py-4">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {destinationsList.map((dest) => (
                  <Link
                    key={dest.path}
                    href={dest.path}
                    className={`text-base transition-colors ${(dest.path === '/' && currentDestination === 'home') || dest.path.includes(currentDestination) && currentDestination !== 'home'
                      ? 'text-white font-bold'
                      : 'text-white/60 hover:text-white'
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {dest.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Current Page Title (Like Desktop) */}
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-sans font-bold text-white hover:text-gray-300 transition-colors"
            >
              {homeLabel}
            </Link>

            {/* Mobile Navigation Links */}
            {navLinks.map((item) => (
              item.isAnchor ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  scroll={false}
                  className="hover:text-gray-300 transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-gray-300 transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={toggleLanguage}
              className="cursor-pointer h-12 px-4 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors text-sm font-bold tracking-wider"
            >
              {locale === 'es' ? 'EN' : 'ES'}
            </button>
            <button className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
              <Instagram size={20} />
            </button>
            <button className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
              <Phone size={20} />
            </button>
          </div>

          <Link
            href="#contacto"
            onClick={(e) => handleAnchorClick(e, "#contacto")}
            className="mt-8 flex items-center gap-2 bg-white text-black pl-6 pr-2 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors group"
          >
            {t('nav.book_consultation')}
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white group-hover:bg-gray-800 transition-colors">
              <ArrowUpRight size={16} />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
