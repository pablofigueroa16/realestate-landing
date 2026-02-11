import {
  Percent,
  TrendingUp,
  Key,
  Coins,
  Globe,
  ShieldCheck,
  Rocket,
} from "lucide-react";

export default function AboutSection() {
  const benefits = [
    { icon: Percent, label: "0% impuestos sobre rentas y ganancias de capital" },
    { icon: TrendingUp, label: "Alta rentabilidad anual (7%–12% promedio)" },
    { icon: Key, label: "Propiedad Freehold para extranjeros" },
    { icon: Coins, label: "Moneda estable (AED vinculado al USD)" },
    { icon: Globe, label: "Alta demanda internacional de alquiler" },
    { icon: ShieldCheck, label: "Marco legal claro y transparente" },
    { icon: Rocket, label: "Economía en crecimiento constante" },
  ];

  return (
    <section
      id="about"
      className="lg:h-screen w-full flex items-center justify-center bg-gray-50 py-20 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">
        {/* Left Column: Text & Benefits */}
        <div className="flex flex-col justify-center h-full max-w-xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-8 leading-tight">
             ¿POR QUÉ INVERTIR EN DUBÁI? 
          </h2>
          
          <div className="space-y-6 text-gray-500 text-lg font-light mb-12 leading-relaxed">
            <p>
              El mercado inmobiliario de Dubái ofrece alta demanda de alquiler, fuerte apreciación de capital y condiciones fiscales altamente favorables, lo que permite a los inversores obtener rentabilidad en dólares sin impuestos sobre ingresos por alquiler ni plusvalía.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-700">
                <div className="min-w-[24px]">
                    <item.icon size={24} strokeWidth={1.5} className="text-gray-900"/>
                </div>
                <span className="text-base font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-[60vh] lg:h-[85vh] w-full">
          <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img
              src="/dubai.png"
              alt="Dubai Skyline"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for mood (optional, based on reference image style) */}
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
          </div>

          {/* Floating Concept Card */}
          <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-xs">
            <p className="text-xs text-gray-500 font-bold tracking-wider uppercase mb-1">
              MERCADO INMOBILIARIO
            </p>
            <p className="text-gray-900 font-medium text-lg leading-snug">
              Estabilidad, crecimiento y seguridad jurídica
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
