import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Instagram,
  ArrowUpRight,
  Clock,
  TrendingUp,
  Building2,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="p-3 md:p-4 h-screen w-full flex flex-col box-border overflow-hidden">
      <div className="relative flex-grow rounded-[2rem] overflow-hidden flex flex-col">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/VIDEOHERO.mp4" type="video/mp4" />
          </video>
          {/* Subtle gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/20 z-10"></div>
          
          {/* Large Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-10">
            <h1 className="text-[20vw] font-bold text-white tracking-widest translate-y-10">
              DUBAI
            </h1>
          </div>
        </div>

        {/* Top Navigation Bar */}
        <div className="relative z-50 flex flex-col md:flex-row justify-between items-center px-6 py-4 md:px-8 md:py-5">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white mb-2 md:mb-0">
            <div className="w-8 h-8 border border-white rounded-lg flex items-center justify-center">
              <Building2 size={16} />
            </div>
            <span className="text-xl font-serif font-bold tracking-wide">
              Estetico.
            </span>
          </div>

          {/* Center Navigation Pill */}
          <nav className="hidden md:flex items-center gap-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-6 py-2.5 text-sm font-medium text-white/90">
            <Link href="#nosotros" className="hover:text-white transition-colors">
              Nosotros
            </Link>
            <Link href="#proyectos" className="hover:text-white transition-colors">
              Proyectos
            </Link>
            <Link href="#unidades" className="hover:text-white transition-colors">
              Unidades
            </Link>
            <Link href="#video" className="hover:text-white transition-colors">
              Video
            </Link>
            <Link href="#contacto" className="hover:text-white transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <button className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
              <Instagram size={16} />
            </button>
            <button className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
              <Phone size={16} />
            </button>
            <button className="flex items-center gap-2 bg-white text-black pl-4 pr-1.5 py-1.5 rounded-full font-medium text-xs hover:bg-gray-100 transition-colors group">
              Agendar consultoria
              <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center text-white group-hover:bg-gray-800 transition-colors">
                <ArrowUpRight size={14} />
              </div>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-40 flex-grow flex flex-col justify-center px-6 md:px-12 lg:px-20 -mt-8">
          <div className="max-w-4xl">
            <div className="inline-block mb-4">
              <span className="bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-lg uppercase">
                Hasta +8–12% anual en zonas prime
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-medium leading-[1.1] mb-6">
              Invierte en bienes raíces en Dubái de forma segura, rentable y 100% guiada
            </h1>

            <p className="text-white/80 text-base md:text-lg max-w-lg mb-8 font-light leading-relaxed">
              Proyectos verificados, alta demanda de alquiler y soporte completo para inversores extranjeros.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <button className="group flex items-center gap-3 bg-white text-black pl-6 pr-1.5 py-2 rounded-full text-base font-medium hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 w-fit">
                  Ver oportunidades de inversión
                  <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white group-hover:bg-gray-800 transition-colors">
                    <ArrowRight size={18} />
                  </div>
                </button>
                
                <button className="group flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white pl-6 pr-6 py-2 rounded-full text-base font-medium hover:bg-white/20 transition-all hover:scale-105 active:scale-95 w-fit">
                  Hablar con un asesor en español
                </button>
            </div>
          </div>
        </div>

        {/* Floating Cards (Bottom Right) */}
        <div className="absolute bottom-6 right-6 md:right-10 lg:right-16 z-40 flex flex-col gap-3 max-w-[300px] w-full hidden md:flex">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-4 rounded-2xl text-white">
            <div className="flex justify-between items-start mb-1">
              <span className="text-2xl font-medium">30%</span>
              <Clock className="text-white/60" size={18} />
            </div>
            <p className="text-xs text-white/80 leading-relaxed">
              Pago inicial. Plan de cuotas hasta 30 meses
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-4 rounded-2xl text-white">
            <div className="flex justify-between items-start mb-1">
              <span className="text-2xl font-medium">1%</span>
              <TrendingUp className="text-white/60" size={18} />
            </div>
            <p className="text-xs text-white/80 leading-relaxed">
              Mensual. Pie inicial del 20%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
