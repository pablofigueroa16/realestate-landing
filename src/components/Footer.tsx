"use client";

import Link from "next/link";
import { Mail, Phone, Building2 } from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useTranslation } from "@/hooks/useTranslation";
import { useState } from "react";

const WHATSAPP_NUMBER = "971543034346";

export default function Footer() {
  const { scrollToId } = useSmoothScroll();
  const { t } = useTranslation();
  const [message, setMessage] = useState("");

  const handleWhatsApp = () => {
    const text = message.trim() || t("footer.form.message_placeholder");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <footer id="contacto" className="h-screen w-full bg-gray-50 flex flex-col justify-between p-4 md:p-6 overflow-hidden">
      {/* Contact Card */}
      <div className="grow w-full bg-white rounded-[3rem] shadow-sm p-8 md:p-12 lg:p-20 flex flex-col justify-center mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 h-full">
          {/* Left Column: Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-8">
              {t("footer.contact.title")}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-md font-light">
              {t("footer.contact.description")}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 group-hover:border-gray-900 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    {t("footer.contact.email_label")}
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
                    {t("footer.contact.phone_label")}
                  </p>
                  <p className="text-gray-900 font-medium text-lg">
                    +62 812 3983 8440
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp Form */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6 w-full max-w-lg mx-auto lg:mx-0">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  {t("footer.form.message_label")}
                </label>
                <textarea
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("footer.form.message_placeholder")}
                  className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-gray-900 transition-all resize-none leading-relaxed"
                />
              </div>

              <button
                onClick={handleWhatsApp}
                className="w-full bg-black text-white rounded-xl py-4 font-medium flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t("footer.form.submit")}
              </button>
            </div>
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
            {t("nav.about")}
          </Link>
          <Link href="#proyectos" onClick={(e) => scrollToId(e, "#proyectos")} scroll={false} className="hover:text-gray-900 transition-colors">
            {t("nav.projects")}
          </Link>
          <Link href="#unidades" onClick={(e) => scrollToId(e, "#unidades")} scroll={false} className="hover:text-gray-900 transition-colors">
            {t("nav.units")}
          </Link>
          <Link href="#video" onClick={(e) => scrollToId(e, "#video")} scroll={false} className="hover:text-gray-900 transition-colors">
            {t("nav.video")}
          </Link>
          <Link href="#contacto" onClick={(e) => scrollToId(e, "#contacto")} scroll={false} className="hover:text-gray-900 transition-colors">
            {t("nav.contact")}
          </Link>
        </nav>

        <div>
          <p>&copy; {new Date().getFullYear()} {t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
