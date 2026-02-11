import { CheckCircle2, Play } from "lucide-react";

export default function WhyChooseSection() {
  const benefits = [
    "Dubái: visión económica y crecimiento sostenido a 20 años.",
    "Alianza estratégica basada en datos, no solo intermediación.",
    "Consultoría inmobiliaria estratégica en tu idioma.",
    "Tour de inversión personalizado en Dubái.",
    "Acceso a propiedades VIP y oportunidades off-market",
  ];

  return (
    <section className="h-screen w-full flex items-center justify-center bg-gray-50 py-10 lg:py-0 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center h-full">
        {/* Left Column: Image/Video */}
        <div className="relative h-[40vh] lg:h-[60vh] w-full group cursor-pointer">
          <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              src="https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=1000&auto=format&fit=crop"
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 transition-transform duration-300 group-hover:scale-110">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Play size={20} className="ml-1 text-gray-900 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col justify-center h-full max-w-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 leading-tight">
            Por qué Dubái es el centro de la inversión inmobiliaria del futuro 
            y por qué invertir con nosotros
          </h2>
          
          <p className="text-gray-500 text-base lg:text-lg font-light mb-6 leading-relaxed">
            Dubái se ha posicionado como uno de los mercados inmobiliarios más sólidos, visionarios y rentables del mundo, con una estrategia clara de crecimiento para las próximas dos décadas. 
            Nuestro rol como agencia es acompañar a los inversores extranjeros a capitalizar esta oportunidad con criterio, datos y una estrategia clara desde el primer día.
          </p>

          <div className="space-y-3 mb-8">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 size={20} className="text-gray-900 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-base lg:text-lg font-light">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-900 font-medium italic text-base lg:text-lg border-l-4 border-gray-900 pl-4 py-1">
            "Para nosotros, la reputación importa más que un trato rápido."
          </p>
        </div>
      </div>
    </section>
  );
}
