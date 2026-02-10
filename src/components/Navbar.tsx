"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl border border-white/20 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg py-3 text-gray-800"
          : "bg-white/10 backdrop-blur-sm py-4 text-white hover:bg-white/20"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold tracking-wider">
          BALI ESTATES
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#"
            className="text-sm font-medium hover:text-emerald-500 transition-colors"
          >
            HOME
          </Link>
          <Link
            href="#properties"
            className="text-sm font-medium hover:text-emerald-500 transition-colors"
          >
            PROPERTIES
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:text-emerald-500 transition-colors"
          >
            ABOUT
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-emerald-500 transition-colors"
          >
            CONTACT
          </Link>
          <Link
            href="#properties"
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              isScrolled
                ? "bg-emerald-600 text-white hover:bg-emerald-700"
                : "bg-white text-emerald-900 hover:bg-gray-100"
            }`}
          >
            View Properties
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 flex flex-col space-y-4 text-gray-800 animate-in slide-in-from-top-5">
          <Link
            href="#"
            className="text-sm font-medium hover:text-emerald-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
            href="#properties"
            className="text-sm font-medium hover:text-emerald-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            PROPERTIES
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:text-emerald-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-emerald-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            CONTACT
          </Link>
          <Link
            href="#properties"
            className="px-5 py-2 rounded-full bg-emerald-600 text-white text-center text-sm font-medium hover:bg-emerald-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            View Properties
          </Link>
        </div>
      )}
    </nav>
  );
}
