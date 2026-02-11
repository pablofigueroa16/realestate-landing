import { Download } from "lucide-react";

export default function PresentationSection() {
  return (
    <section className="h-[80vh] w-full flex items-center justify-center bg-gray-50 p-4 md:p-6">
      <div className="w-full h-full bg-white rounded-[3rem] shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center p-8 md:p-12 relative overflow-hidden">
        
        {/* Subtle decorative background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50/50 pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
            OFERTA EXCLUSIVA
          </p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-gray-900 mb-8 leading-tight">
            Recibe la presentación detallada del proyecto
          </h2>
          
          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Hemos preparado una presentación completa con precios actualizados, planes de pago flexibles y cálculos detallados de rentabilidad (ROI) para cada tipo de unidad.
          </p>

          <button className="bg-gray-900 text-white pl-8 pr-6 py-4 rounded-full font-medium text-sm hover:bg-black transition-all hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto shadow-lg shadow-gray-900/20">
            Agendar consultoria
          </button>

          <p className="text-gray-400 text-xs mt-6 whitespace-pre-line">
            Te enviaremos la presentación de forma inmediata por WhatsApp o email. 
            Sin compromiso · Información clara · Atención en español
          </p>
        </div>
      </div>
    </section>
  );
}
