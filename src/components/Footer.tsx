"use client";

import Link from "next/link";
import { Mail, Phone, Building2, ArrowRight } from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Footer() {
  const { scrollToId } = useSmoothScroll();

  return (
    <footer id="contacto" className="h-screen w-full bg-gray-50 flex flex-col justify-between p-4 md:p-6 overflow-hidden">
      {/* Contact Card */}
      <div className="flex-grow w-full bg-white rounded-[3rem] shadow-sm p-8 md:p-12 lg:p-20 flex flex-col justify-center mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 h-full">
          {/* Left Column: Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-8">
              Contáctanos
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-md font-light">
              Permítenos ayudarte a encontrar una propiedad que no solo sea un activo rentable, 
              sino también un lugar de energía, inspiración y crecimiento.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 group-hover:border-gray-900 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    Correo electrónico
                  </p>
                  <p className="text-gray-900 font-medium text-lg">
                    office@estetico.estate
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 group-hover:border-gray-900 transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    Teléfono
                  </p>
                  <p className="text-gray-900 font-medium text-lg">
                    +62 812 3983 8440
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex flex-col justify-center">
            <form className="space-y-6 w-full max-w-lg mx-auto lg:mx-0">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Juan"
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-gray-900 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Apellido
                  </label>
                  <input
                    type="text"
                    placeholder="Pérez"
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-gray-900 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  placeholder="juan@ejemplo.com"
                  className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-gray-900 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Teléfono
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-gray-900 transition-all"
                />
              </div>

              <button className="w-full bg-black text-white rounded-xl py-4 font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors mt-4">
                Recibir presentación del proyecto
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 pb-2 text-gray-500 text-sm">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <div className="w-6 h-6 border border-gray-400 rounded-md flex items-center justify-center text-gray-900">
            <Building2 size={14} />
          </div>
          <span className="font-bold text-gray-900">Estetico.</span>
        </div>

        <nav className="flex gap-8 mb-4 md:mb-0 text-xs font-medium uppercase tracking-wide">
          <Link href="#nosotros" onClick={(e) => scrollToId(e, "#nosotros")} scroll={false} className="hover:text-gray-900 transition-colors">
            Nosotros
          </Link>
          <Link href="#proyectos" onClick={(e) => scrollToId(e, "#proyectos")} scroll={false} className="hover:text-gray-900 transition-colors">
            Proyectos
          </Link>
          <Link href="#unidades" onClick={(e) => scrollToId(e, "#unidades")} scroll={false} className="hover:text-gray-900 transition-colors">
            Unidades
          </Link>
          <Link href="#video" onClick={(e) => scrollToId(e, "#video")} scroll={false} className="hover:text-gray-900 transition-colors">
            Video
          </Link>
          <Link href="#contacto" onClick={(e) => scrollToId(e, "#contacto")} scroll={false} className="hover:text-gray-900 transition-colors">
            Contacto
          </Link>
        </nav>

        <div>
          <p>&copy; {new Date().getFullYear()} Estetico Estate.</p>
        </div>
      </div>
    </footer>
  );
}
