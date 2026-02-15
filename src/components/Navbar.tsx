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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToId } = useSmoothScroll();

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
      className={`fixed z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "top-0 left-0 right-0 w-full rounded-none backdrop-blur-md py-3 shadow-md border-b border-white/10"
          : "top-3 left-3 right-3 md:top-4 md:left-4 md:right-4 w-auto rounded-t-[2rem] bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          onClick={(e) => handleMobileNavClick(e, "#inicio")}
          className="flex items-center gap-2 text-white z-50 relative"
        >
          <div className="w-8 h-8 border border-white rounded-lg flex items-center justify-center">
            <Building2 size={16} />
          </div>
          <span className="text-xl font-serif font-bold tracking-wide">
            Estetico.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex items-center gap-6 rounded-full px-6 py-2.5 text-sm font-medium text-white/90 transition-all duration-300 ${
            isScrolled
              ? "bg-white/5 border border-white/5"
              : "bg-white/10 backdrop-blur-md border border-white/10"
          }`}
        >
          {[
            { name: "Nosotros", id: "#nosotros" },
            { name: "Proyectos", id: "#proyectos" },
            { name: "Unidades", id: "#unidades" },
            { name: "Video", id: "#video" },
            { name: "Contacto", id: "#contacto" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.id}
              onClick={(e) => scrollToId(e, item.id)}
              scroll={false}
              className="hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-2">
          <button className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <Instagram size={16} />
          </button>
          <button className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <Phone size={16} />
          </button>
          <Link
            href="#contacto"
            onClick={(e) => scrollToId(e, "#contacto")}
            scroll={false}
            className="flex items-center gap-2 bg-white text-black pl-4 pr-1.5 py-1.5 rounded-full font-medium text-xs hover:bg-gray-100 transition-colors group"
          >
            Agendar consultoria
            <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center text-white group-hover:bg-gray-800 transition-colors">
              <ArrowUpRight size={14} />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-white p-2"
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
              { name: "Inicio", id: "#inicio" },
              { name: "Nosotros", id: "#nosotros" },
              { name: "Proyectos", id: "#proyectos" },
              { name: "Unidades", id: "#unidades" },
              { name: "Video", id: "#video" },
              { name: "Contacto", id: "#contacto" },
            ].map((item) => (
              <Link
                key={item.name}
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
            Agendar consultoria
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white group-hover:bg-gray-800 transition-colors">
              <ArrowUpRight size={16} />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
