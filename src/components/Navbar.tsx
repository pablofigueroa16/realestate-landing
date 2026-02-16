"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Building2,
  Instagram,
  Phone,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useTranslation } from "@/hooks/useTranslation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const handleMobileNavClick = (e: React.MouseEvent<HTMLElement>, id: string) => {
    scrollToId(e, id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed z-50  transition-all duration-500 ease-in-out ${
        isScrolled
          ? "top-0 left-0 right-0 w-full rounded-none bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-gray-100"
          : "top-3 left-3 right-3 md:top-4 md:left-4 md:right-4 w-auto rounded-t-[2rem] bg-transparent py-5"
      }`}
    >
      <div className="container  mx-auto px-6 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          onClick={(e) => handleMobileNavClick(e, "#inicio")}
          className={`flex items-center gap-2 z-50 relative transition-colors duration-300 ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
        >
          <div className={`w-8 h-8 border rounded-lg flex items-center justify-center transition-colors duration-300 ${
            isScrolled ? "border-gray-900" : "border-white"
          }`}>
            <Building2 size={16} />
          </div>
          <span className="text-xl font-serif font-bold tracking-wide">
            Estetico.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`hidden border border-gray-200 md:flex items-center gap-6 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
            isScrolled
              ? "bg-gray-100/50 text-gray-600"
              : "bg-white/10 backdrop-blur-md border border-white/10 text-white/90"
          }`}
        >
          {[
            { name: t('nav.about'), id: "#nosotros" },
            { name: t('nav.projects'), id: "#proyectos" },
            { name: t('nav.units'), id: "#unidades" },
            { name: t('nav.video'), id: "#video" },
            { name: t('nav.contact'), id: "#contacto" },
          ].map((item) => (
            <Link
              key={item.id}
              href={item.id}
              onClick={(e) => scrollToId(e, item.id)}
              scroll={false}
              className={`transition-colors ${
                isScrolled ? "hover:text-gray-900" : "hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-2">
          <button 
            onClick={toggleLanguage}
            className={`h-9 px-3 rounded-full flex items-center justify-center transition-colors duration-300 text-xs font-bold tracking-wider ${
              isScrolled 
                ? "bg-gray-100 border border-gray-200 text-gray-900 hover:bg-gray-200" 
                : "bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20"
            }`}
          >
            {locale === 'es' ? 'EN' : 'ES'}
          </button>
          <button className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${
            isScrolled 
              ? "bg-gray-100 border border-gray-200 text-gray-900 hover:bg-gray-200" 
              : "bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20"
          }`}>
            <Instagram size={16} />
          </button>
          <button className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${
            isScrolled 
              ? "bg-gray-100 border border-gray-200 text-gray-900 hover:bg-gray-200" 
              : "bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20"
          }`}>
            <Phone size={16} />
          </button>
          <Link
            href="#contacto"
            onClick={(e) => scrollToId(e, "#contacto")}
            scroll={false}
            className={`flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full font-medium text-xs transition-colors group ${
                isScrolled
                ? "bg-gray-900 text-white hover:bg-black"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            {t('nav.book_consultation')}
            <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                isScrolled
                ? "bg-white text-gray-900 group-hover:bg-gray-200"
                : "bg-black text-white group-hover:bg-gray-800"
            }`}>
              <ArrowUpRight size={14} />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden z-50 p-2 transition-colors duration-300 ${
            isScrolled && !isMobileMenuOpen ? "text-gray-900" : "text-white"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center gap-8 text-xl font-medium text-white">
            {[
              { name: t('nav.home'), id: "#inicio" },
              { name: t('nav.about'), id: "#nosotros" },
              { name: t('nav.projects'), id: "#proyectos" },
              { name: t('nav.units'), id: "#unidades" },
              { name: t('nav.video'), id: "#video" },
              { name: t('nav.contact'), id: "#contacto" },
            ].map((item) => (
              <Link
                key={item.id}
                href={item.id}
                onClick={(e) => handleMobileNavClick(e, item.id)}
                scroll={false}
                className="hover:text-gray-300 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 mt-12">
            <button 
              onClick={toggleLanguage}
              className="h-12 px-4 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors text-sm font-bold tracking-wider"
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
            onClick={(e) => handleMobileNavClick(e, "#contacto")}
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
