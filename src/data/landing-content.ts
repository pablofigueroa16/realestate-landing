import { Property, properties } from "./properties";

export interface StatCard {
  value: string;
  iconName?: string; // Changed from icon: any to iconName: string
  text: string;
}

export interface Benefit {
  iconName?: string; // Changed from icon: any to iconName: string
  label: string;
}

export interface MarketCard {
  title: string;
  subtitle: string;
}

export interface HeroContent {
  videoSrc: string;
  badge?: string;
  badges?: string[];
  title: string;
  subtitle: string;
  stats: StatCard[];
}

export interface AboutContent {
  benefits: Benefit[];
  imageSrc: string;
  title: string;
  description: string;
  marketCard: MarketCard;
}

export interface WhyChooseContent {
  videoSrc: string;
  title: string;
  description: string;
  benefits: string[];
  quote: string;
  hidden?: boolean;
}

export interface LocationProject {
  area: string;
  title: string;
  description: string;
  features: string[];
  marketInsight: string;
  image: string;
}

export interface PresentationContent {
  badge?: string;
  title?: string;
  description?: string;
  cta?: string;
  disclaimer?: string;
  hidden?: boolean;
}

export interface DevelopersContent {
  hidden?: boolean;
}

export interface LandingContent {
  hero: HeroContent | null; // null means use default/translation
  about: AboutContent | null;
  whyChoose: WhyChooseContent | null;
  units: Property[];
  unitsConfig?: {
    title: string;
    subtitle: string;
  };
  locationProjects: LocationProject[];
  presentation: PresentationContent | null;
  developers: DevelopersContent | null;
}

export const landingContent: Record<string, LandingContent> = {
  home: {
    hero: {
      videoSrc: "https://real-state-landing.s3.us-east-1.amazonaws.com/home/home_video.mp4",
      badges: ["DUBAI", "BALI", "MIAMI"],
      title: "Acceso estratégico a oportunidades inmobiliarias globales.",
      subtitle: "Seleccionamos mercados con fundamentos sólidos, crecimiento sostenido y ventajas fiscales estratégicas.",
      stats: [
        {
          value: "12%",
          text: "ROI promedio anual en mercados seleccionados"
        },
        {
          value: "0%",
          text: "Impuesto sobre renta personal en jurisdicciones estratégicas"
        }
      ]
    },
    about: {
      imageSrc: "https://real-state-landing.s3.us-east-1.amazonaws.com/home/seccion2/realstate.png",
      title: "Estrategia Global, Ejecución Local.",
      description: "Invertir internacionalmente no es solo elegir una propiedad.\nEs estructurar correctamente la asignación de capital en la jurisdicción adecuada, en el momento adecuado y con el socio correcto.\n\nNuestro enfoque combina análisis macroeconómico, acceso directo a desarrolladores líderes y una visión patrimonial a largo plazo para maximizar retorno y minimizar riesgo.",
      marketCard: {
        title: "INVESTMENT APPROACH",
        subtitle: "Inversión estructurada con visión patrimonial internacional"
      },
      benefits: [
        { iconName: "CheckCircle", label: "Acceso directo a desarrolladores top" },
        { iconName: "CheckCircle", label: "Oportunidades seleccionadas y filtradas" },
        { iconName: "CheckCircle", label: "Análisis real de ROI y proyección" },
        { iconName: "CheckCircle", label: "Estructuración legal internacional" },
        { iconName: "CheckCircle", label: "Acompañamiento integral 360°" },
        { iconName: "CheckCircle", label: "Soporte post-inversión y estrategia de salida" },
      ]
    },
    whyChoose: {
      videoSrc: "https://real-state-landing.s3.us-east-1.amazonaws.com/home/home_video.mp4",
      title: "Por qué invertimos en mercados globales estratégicos",
      description: "Seleccionamos destinos con crecimiento sólido, estabilidad jurídica y alta demanda internacional, priorizando valorización a largo plazo y generación de ingresos sostenibles.",
      benefits: [
        "Mercados con crecimiento económico comprobado",
        "Ventajas fiscales estratégicas en jurisdicciones clave",
        "Alta liquidez y demanda internacional",
      ],
      quote: "Capital inteligente se mueve hacia ciudades con fundamentos reales.",
      hidden: false
    },
    units: [
      {
        id: "home-dubai",
        slug: "home-dubai",
        externalLink: "/dubai",
        hero: {
          title: "DUBÁI",
          subtitle: "",
          description: "Capital global de inversión inmobiliaria, con crecimiento sostenido, infraestructura de clase mundial y un entorno fiscal altamente competitivo.",
          badges: [],
          bgVideo: "",
          bgImage: ""
        },
        images: ["https://real-state-landing.s3.us-east-1.amazonaws.com/home/seccion4/dubai.png"],
        description: "Capital global de inversión inmobiliaria, con crecimiento sostenido, infraestructura de clase mundial y un entorno fiscal altamente competitivo.",
        size: "Ver más", // Reusing size field for button text override if needed, or just leave it
        summary: { title: "", text: "" },
        concept: { title: "", text: "" },
        community: { title: "", text: "" },
        privacy: { title: "", text: "" },
        views: { title: "", text: "" },
        design: { title: "", text: "" },
        location: { title: "", intro: "", nearby: [] },
        project: { title: "", text: "" },
        subCommunities: [],
        amenities: { title: "", intro: "", categories: [] },
        developer: { title: "", intro: "", bullets: [] },
        faq: [],
        disclaimers: { renders: "", availability: "" }
      },
      {
        id: "home-miami",
        slug: "home-miami",
        externalLink: "/miami", // Placeholder
        hero: {
          title: "MIAMI",
          subtitle: "",
          description: "Puerta de entrada a Estados Unidos y centro financiero emergente de Latinoamérica, con alta demanda internacional y mercado en USD.",
          badges: [],
          bgVideo: "",
          bgImage: ""
        },
        images: ["https://real-state-landing.s3.us-east-1.amazonaws.com/home/seccion4/miami.png"],
        description: "Puerta de entrada a Estados Unidos y centro financiero emergente de Latinoamérica, con alta demanda internacional y mercado en USD.",
        size: "Ver más",
        summary: { title: "", text: "" },
        concept: { title: "", text: "" },
        community: { title: "", text: "" },
        privacy: { title: "", text: "" },
        views: { title: "", text: "" },
        design: { title: "", text: "" },
        location: { title: "", intro: "", nearby: [] },
        project: { title: "", text: "" },
        subCommunities: [],
        amenities: { title: "", intro: "", categories: [] },
        developer: { title: "", intro: "", bullets: [] },
        faq: [],
        disclaimers: { renders: "", availability: "" }
      },
      {
        id: "home-bali",
        slug: "home-bali",
        externalLink: "/bali",
        hero: {
          title: "BALI",
          subtitle: "",
          description: "Destino turístico consolidado con fuerte crecimiento en renta vacacional y oportunidades en zonas de expansión estratégica.",
          badges: [],
          bgVideo: "",
          bgImage: ""
        },
        images: ["https://real-state-landing.s3.us-east-1.amazonaws.com/home/seccion4/bali.png"],
        description: "Destino turístico consolidado con fuerte crecimiento en renta vacacional y oportunidades en zonas de expansión estratégica.",
        size: "Ver más",
        summary: { title: "", text: "" },
        concept: { title: "", text: "" },
        community: { title: "", text: "" },
        privacy: { title: "", text: "" },
        views: { title: "", text: "" },
        design: { title: "", text: "" },
        location: { title: "", intro: "", nearby: [] },
        project: { title: "", text: "" },
        subCommunities: [],
        amenities: { title: "", intro: "", categories: [] },
        developer: { title: "", intro: "", bullets: [] },
        faq: [],
        disclaimers: { renders: "", availability: "" }
      }
    ],
    locationProjects: [
      {
        area: "DUBAI · UAE",
        title: "Prime Location — Dubai",
        description: "Dubai se ha consolidado como uno de los mercados inmobiliarios más dinámicos y seguros del mundo, combinando crecimiento económico sostenido, infraestructura de clase mundial y ventajas fiscales estratégicas.",
        features: [
          "05 Minutes to Downtown",
          "10 Minutes to Dubai Marina",
          "15 Minutes to International Airport"
        ],
        marketInsight: "Mercado con alta demanda internacional, crecimiento constante de capital extranjero y rentabilidades atractivas en alquiler y revalorización.",
        image: "https://real-state-landing.s3.us-east-1.amazonaws.com/home/seccion3/seccion3/dubai.png"
      },
      {
        area: "MIAMI · FLORIDA",
        title: "Prime Location — Miami",
        description: "Miami es un activo refugio en USD, reconocido por su estabilidad jurídica, fuerte demanda internacional y constante desarrollo urbano en zonas premium.",
        features: [
          "08 Minutes to Brickell",
          "10 Minutes to Miami Beach",
          "15 Minutes to Miami International Airport"
        ],
        marketInsight: "Ciudad con alta liquidez inmobiliaria, apreciación sostenida y fuerte flujo de inversión latinoamericana y europea.",
        image: "https://real-state-landing.s3.us-east-1.amazonaws.com/home/seccion3/miami.png"
      },
      {
        area: "BALI · INDONESIA",
        title: "Prime Location — Bali",
        description: "Bali combina turismo internacional, estilo de vida premium y crecimiento sostenido en el sector hospitality, convirtiéndose en uno de los destinos más atractivos para renta corta.",
        features: [
          "05 Minutes to Prime Beaches",
          "10 Minutes to Lifestyle & Restaurants",
          "20 Minutes to International Airport"
        ],
        marketInsight: "Mercado impulsado por turismo global y ocupación constante en propiedades tipo villa y apart-hotel.",
        image: "https://real-state-landing.s3.us-east-1.amazonaws.com/home/seccion3/bali.png"
      }
    ],
    presentation: {
      badge: "GLOBAL PARTNERSHIP",
      title: "Conecta con nuestro equipo internacional.",
      description: "Accede a nuestro portafolio global, condiciones preferenciales y oportunidades exclusivas para agentes y brokers estratégicos.",
      cta: "Solicitar Conexión Estratégica",
      disclaimer: "Nuestro equipo revisará tu solicitud y coordinará una reunión privada."
    },
    developers: null
  },
  dubai: {
    hero: null, // Use default translations
    about: null, // Use default translations
    whyChoose: null, // Use default translations
    units: properties, // Use imported properties
    locationProjects: [], // Use default translations/logic inside component
    presentation: null, // Use default translations
    developers: null, // Use default translations
  },
  bali: {
    hero: {
      videoSrc: "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/bali_hero.mp4",
      badge: "Hasta +8-35% anual en zonas prime",
      title: "Invierte en Bali. El nuevo epicentro global del turismo y lujo",
      subtitle: "Propiedades estratégicas en la isla más demandada del Sudeste Asiático. Alta valorización, turismo internacional en crecimiento y rentabilidades atractivas en dólares.",
      stats: [
        {
          value: "+5,2M",
          iconName: "Globe",
          text: "Turistas internacionales anuales (2024–2025 recuperación récord)"
        },
        {
          value: ">20%",
          iconName: "TrendingUp",
          text: "Valorización promedio superior al 20% en los últimos años"
        }
      ]
    },
    about: {
      imageSrc: "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/bali.png",
      title: "¿Por qué Bali es el nuevo oro azul del turismo global?",
      description: "Bali no es solo una isla: es una marca internacional consolidada.\nReconocida como uno de los destinos más demandados del mundo, combina turismo de lujo, bienestar, naturaleza y cultura en un ecosistema económico altamente atractivo para inversores inmobiliarios.\nDesde la Cumbre del G20 en 2022 hasta su consolidación como hub de nómadas digitales, Bali se posiciona como termómetro económico del Sudeste Asiático.",
      marketCard: {
        title: "MERCADO INMOBILIARIO",
        subtitle: "Alta demanda turística y potencial de crecimiento"
      },
      benefits: [
        { iconName: "Globe", label: "+5 millones de turistas internacionales al año" },
        { iconName: "TrendingUp", label: "Valorización superior al 20% en los últimos años" },
        { iconName: "Briefcase", label: "Hub global de nómadas digitales" },
        { iconName: "Building2", label: "Alta demanda de alquiler vacacional premium" },
        { iconName: "MapPin", label: "Reconocimiento internacional como destino top" },
        { iconName: "TrendingUp", label: "ROI estimado entre 8% y 14% bruto anual" },
        { iconName: "Building2", label: "Expansión de infraestructura y conectividad" },
        { iconName: "TrendingUp", label: "Mercado emergente con alto potencial de apreciación" }
      ]
    },
    whyChoose: {
      videoSrc: "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/Bali_video.mp4",
      title: "Bali: El nuevo hub inmobiliario de Asia",
      description: "Bali se consolida como un mercado emergente clave en Asia, impulsado por el turismo, la demanda global y los inversores digitales.",
      benefits: [
        "Bali: crecimiento turístico sostenido y expansión internacional.",
        "Mercado impulsado por nómadas digitales y turismo premium.",
        "Alta demanda de villas, residencias boutique y proyectos wellness."
      ],
      quote: "Invertir en Bali no es solo comprar propiedad, es entrar en el corazón del turismo global."
    },
    units: [
      {
        id: "body-sense",
        slug: "body-sense",
        hero: {
          title: "Body Sense",
          subtitle: "Living Wellness by the Ocean",
          description: "Un complejo wellness next-generation frente al mar, diseñado para ofrecer restauración completa del cuerpo y la mente a través de experiencias de alto impacto: spa, biohacking y protocolos de recuperación en un entorno natural incomparable en Bali.",
          badges: ["Wellness Living", "Oceanfront", "High ROI"],
          bgImage: "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/proyecto1/1.png"
        },
        summary: {
          title: "RESUMEN RÁPIDO",
          text: "Un proyecto exclusivo de villas y suites con vista al océano en Pandawa Beach — combina vivienda, inversión y bienestar integral rodeado de naturaleza tropical y panorámicas al océano Índico."
        },
        concept: {
          title: "Next-generation wellness retreat",
          text: "Body Sense redefine el estilo de vida frente al mar con un enfoque holístico de bienestar que integra tecnologías de biohacking, espacios de recuperación y tratamientos avanzados en una comunidad residencial premium. Este proyecto no es solo un lugar para vivir o invertir, sino un entorno dedicado a la rejuvenecimiento completo del cuerpo y la mente, donde cada espacio está pensado para equilibrar ritmo, energía y salud integral."
        },
        location: {
          title: "Pandawa Beach, Bali",
          intro: "Situado justo frente al océano en Pandawa Beach, uno de los destinos más prestigiosos y buscados de Bali, conocido por sus aguas cristalinas, arenas blancas y atmósfera tranquila y sofisticada.",
          nearby: [
            "3 minutos caminando a Pandawa Beach",
            "A pasos de restaurantes, tiendas boutique y zonas recreativas",
            "Entorno natural único del suroeste de la isla"
          ]
        },
        project: {
          title: "Villas & Suites",
          text: "Body Sense consta de villas y apartamentos construidos sobre un acantilado panorámico, con vistas al océano y diseño que combina privacidad, confort y conexión directa con la naturaleza."
        },
        subCommunities: [
          {
            title: "Deluxe SPA Suite",
            text: "Desde $155,000. 15 unidades disponibles. 50 m² con balcón y vista al océano. Infrared sauna privada y bañera de cobre para desintoxicación profunda. Equipado con amenities de bienestar premium. ROI ~14.35% estimado. Destacado: Espacio íntimo perfecto para descanso diario y rituals de regeneración."
          },
          {
            title: "Premium SPA Suite",
            text: "Desde $115,000. 36 unidades disponibles. 32 m² con vistas al océano, piscina o naturaleza. Infrared lamp y espacio pensado para bienestar diario. ROI ~14.40% estimado. Destacado: Ideal para inversión residencial con alto potencial de rentabilidad."
          }
        ],
        amenities: {
          title: "COMPLEX INFRASTRUCTURE",
          intro: "Body Sense ofrece infraestructura premium diseñada para potenciar la salud física y mental de residentes e invitados.",
          categories: [
            {
              name: "INFRASTRUCTURE",
              items: [
                "Pool con zona lounge y vistas panorámicas",
                "Restaurante con menú equilibrado y saludable",
                "Gimnasio funcional",
                "Relax zones & ocean-view terraces",
                "Spa completo con snow room, salt room y cold plunge"
              ]
            },
            {
              name: "FULL-SERVICE SPA",
              items: [
                "Sauna infrarrojo avanzado",
                "Tratamientos de biohacking y restauración",
                "Snow & salt rooms + cold plunge"
              ]
            }
          ]
        },
        developer: {
          title: "SOBRE IJI GROUP ESTATE",
          intro: "IJI Group Estate opera en Bali con más de 15 años de experiencia, gestionando y desarrollando proyectos premium de villas y apartamentos con enfoque en servicio hotelero, ocupación alta y máxima transparencia.",
          bullets: ["15 años de experiencia", "Enfoque en servicio hotelero", "Alta ocupación", "Máxima transparencia"]
        },
        faq: [],
        disclaimers: {
          renders: "Las imágenes, renders y amenidades son referenciales y pueden variar en ejecución final según decisiones del desarrollador y aprobaciones regulatorias.",
          availability: ""
        },
        images: [
          "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/proyecto1/1.png",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/proyecto1/2.png",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/proyecto1/3.jpg",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/proyecto1/4.jpg",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/proyecto1/5.png"
        ],
        // Adding required fields for UnitTypesSection display
        description: "Complejo wellness frente al océano en Pandawa Beach con suites y villas diseñadas para biohacking, spa y alta rentabilidad en Bali.",
        size: "Off-plan",
        community: { title: "", text: "" }, // Placeholder
        privacy: { title: "", text: "" }, // Placeholder
        views: { title: "", text: "" }, // Placeholder
        design: { title: "", text: "" } 
      },// Placeholder
      {
        id: "rahya-villas-complex",
        slug: "rahya-villas-complex",
        hero: {
          title: "Rahya Villas Complex",
          subtitle: "Your Oceanview Villa Retreat in Bali",
          description: "Una colección exclusiva de villas premium frente al océano, ubicada en el pintoresco área de Bukit, a solo 500 m de Pandawa Beach. Perfecta tanto para residir como para invertir con rentabilidad estable en un destino turístico líder.",
          badges: ["Oceanview Villas", "Smart Investment", "High Occupancy"],
          bgImage: "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/proyecto2/1.webp"
        },
        summary: {
          title: "RESUMEN RÁPIDO",
          text: "Villas y apartamentos de diseño moderno con vistas panorámicas al océano Índico, rodeados de naturaleza tropical y tranquilidad, combinando estilo de vida relajado con alto potencial de ingresos por alquiler."
        },
        concept: {
          title: "El Concepto",
          text: "Rahya Villas Complex es un desarrollo boutique de villas de lujo diseñado para quienes buscan calidad de vida, relajación frente al mar y oportunidades de inversión inteligente en Bali. Cada unidad ofrece confort moderno, privacidad y espectaculares vistas oceánicas que maximizan la experiencia residencial o de renta."
        },
        location: {
          title: "Pandawa Beach, Bukit, Bali",
          intro: "Situado en las colinas del sur de Bali, a solo 500 m de la famosa Pandawa Beach, uno de los enclaves más prestigiosos de la isla conocido por su arena blanca, aguas cristalinas y ambiente exclusivo para vivir y vacacionar.",
          nearby: [
            "A 500 m de Pandawa Beach, con acceso fácil y peatonal.",
            "Rodeado de naturaleza tropical, zonas de recreación y restaurantes boutique.",
            "Tranquilidad y privacidad en un entorno premium."
          ]
        },
        project: {
          title: "Villas de Lujo",
          text: "Rahya Villas Complex abarca una colección de villas de dos tipos, cada una cuidadosamente diseñada para ofrecer máximo confort, estilo contemporáneo y una conexión directa con el estilo de vida balinés frente al mar."
        },
        subCommunities: [
          {
            title: "Rahya Villa",
            text: "Villas independientes. 2 dormitorios + 3 baños. 2 plantas con estacionamiento y piscina privada. Área ~112 m². Modelo ideal para renta anual estimada: ~$64,800 / año. Perfecta como residencia vacacional, segunda casa o unidad de inversión de alto rendimiento."
          },
          {
            title: "Rahya Villa with Rooftop (Ocean View)",
            text: "Villas premium con rooftop y vistas panorámicas al mar. 2 dormitorios + 3 baños. Estacionamiento y piscina propia. Área ~184 m². Daily rental/year aprox.: ~$38,880 (según performance de mercado). Una opción más exclusiva con vista oceánica amplia y rooftop privado."
          }
        ],
        amenities: {
          title: "INFRAESTRUCTURA & AMENITIES",
          intro: "El complejo ofrece facilidades pensadas para lifestyle, turismo y rentabilidad.",
          categories: [
            {
              name: "LIFESTYLE",
              items: [
                "Piscina privada por villa",
                "Estacionamiento dedicado",
                "Entorno natural y cerca de Pandawa Beach",
                "Cercanía a restaurantes, cafés y entretenimiento local"
              ]
            }
          ]
        },
        developer: {
          title: "SOBRE IJI GROUP ESTATE",
          intro: "IJI Group Estate opera en Bali con más de 15 años de experiencia, especializada en el desarrollo y gestión de proyectos premium con alta performance de rentabilidad efectiva, servicios completos de property management y soporte al propietario en cada etapa.",
          bullets: ["15 años de experiencia", "Alta performance", "Property management", "Soporte al propietario"]
        },
        faq: [],
        disclaimers: {
          renders: "Las imágenes, renders y amenidades son referenciales y están sujetas a cambios según decisiones del desarrollador o permisos regulatorios.",
          availability: "Rentabilidad estimada basada en promedios de gestión de propiedades y ocupación turística en la zona."
        },
        images: [
          "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/proyecto2/1.webp",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/proyecto2/2.png",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/proyecto2/3.png",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/proyecto2/4.webp",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/proyecto2/5.png"
        ],
        description: "Villas modernas con piscina privada a 500 m de Pandawa Beach, ideales para vivir o generar ingresos con alta ocupación turística.",
        size: "Off-plan",
        community: { title: "", text: "" },
        privacy: { title: "", text: "" },
        views: { title: "", text: "" },
        design: { title: "", text: "" }
      },
      {
        id: "eighth-sense",
        slug: "eighth-sense",
        hero: {
          title: "Eighth Sense",
          subtitle: "Open Up New Senses",
          description: "Un complejo residencial exclusivo en el acantilado de Bali, con villas y apartamentos de diseño moderno, panorámicas vistas al océano y espacios creados para vivir en armonía con la naturaleza.",
          badges: ["Cliffside Living", "Panoramic Ocean View", "High Yield"],
          bgImage: "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/proyecto3/1.png"
        },
        summary: {
          title: "RESUMEN RÁPIDO",
          text: "Eighth Sense ofrece 60 apartamentos y 8 villas con vista al océano en la icónica costa de Bali, combinando privacidad, confort, diseño contemporáneo y alto potencial de inversión."
        },
        concept: {
          title: "El Concepto",
          text: "Una comunidad construida sobre un principio sensorial: cada espacio refleja y despierta uno de los “ocho sentidos”, diseñados para maximizar el confort diario, la conexión con el entorno natural y el estilo de vida contemporáneo frente al mar. El proyecto combina vistas panorámicas, materiales premium y una infraestructura pensada para vivir y generar ingresos con alto rendimiento."
        },
        location: {
          title: "Pandawa Beach, Bali",
          intro: "Situado sobre un acantilado frente al Océano Índico en el prestigioso Bukit Peninsula de Bali, a solo 3 minutos de Pandawa Beach.",
          nearby: [
            "A pocos minutos de Pandawa Beach",
            "Conectividad con zonas premium de Bali",
            "Entorno natural y exclusivo"
          ]
        },
        project: {
          title: "Villas & Apartamentos",
          text: "Eighth Sense ocupa una parcela de 5,000 m² en la costa del sur de Bali, con diseño arquitectónico que aprovecha al máximo las vistas al océano y la brisa marina."
        },
        subCommunities: [
          {
            title: "1-Bedroom Villas with Rooftop",
            text: "Precio desde $280,000. 8 Villas totales. Área ~143 m². Piscina privada y rooftop con vista oceánica. ROI estimado ~15%."
          },
          {
            title: "1-Bedroom Villas",
            text: "Precio desde $199,000. 5 Villas totales. Área ~60 m². Piscina privada y diseño premium. ROI estimado ~15%."
          },
          {
            title: "1-Bedroom Apartments",
            text: "Precio desde $115,000. 42 unidades totales. Desde 35 m². Totalmente amueblados. ROI estimado ~15%."
          },
          {
            title: "2-Bedroom Apartments with Rooftop",
            text: "Precio desde $170,000. 19 unidades totales. Área ~70 m² con rooftop. Vistas panorámicas. ROI estimado ~15%."
          }
        ],
        amenities: {
          title: "COMPLEX INFRASTRUCTURE",
          intro: "Eighth Sense incluye amenidades premium diseñadas para comodidad, estilo de vida y atracción de alquileres vacacionales.",
          categories: [
            {
              name: "AMENITIES",
              items: [
                "Recepción y conserjería 24/7",
                "SPA zone con salas de masaje",
                "Infinity pool con vista al atardecer",
                "Restaurante europeo en el complejo",
                "Shuttles gratuitos a las mejores playas cercanas",
                "Café de verano y áreas chill",
                "Ice bath y zonas para yoga",
                "Internet StarLink de alta velocidad",
                "Parking con 65 espacios",
                "Art zones y áreas de paseo frente al mar"
              ]
            }
          ]
        },
        developer: {
          title: "SOBRE IJI GROUP ESTATE",
          intro: "IJI Group Estate es un desarrollador y gestor inmobiliario con más de 15 años de experiencia en Bali, especializado en proyectos premium, con ocupaciones altas y gestión completa de activos para propietarios e inversores.",
          bullets: ["15 años de experiencia", "Gestión completa de activos", "Proyectos premium", "Ocupación alta"]
        },
        faq: [],
        disclaimers: {
          renders: "Las imágenes, renders y amenidades son referenciales y pueden estar sujetas a cambios según las decisiones del desarrollador o requisitos regulatorios.",
          availability: "Rentabilidad estimada ~15% garantizada con gestión profesional."
        },
        images: [
          "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/proyecto3/1.png",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/proyecto3/2.jpeg",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/proyecto3/3.jpeg",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/proyecto3/4.jpeg",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/proyecto3/5.webp"
        ],
        description: "Residencias y villas en acantilado con vistas panorámicas al océano, rooftop privado y rentabilidad estimada hasta 15% anual.",
        size: "Off-plan",
        community: { title: "", text: "" },
        privacy: { title: "", text: "" },
        views: { title: "", text: "" },
        design: { title: "", text: "" }
      }
    ],
    unitsConfig: {
      title: "Destinos Globales de Alta Inversión",
      subtitle: "Explora las ciudades que lideran crecimiento, liquidez y demanda internacional en bienes raíces."
    },
    locationProjects: [
      {
        area: "PANDawa Area",
        title: "BODY SENSE",
        description: "The project is located in the prestigious Pandawa cliffside area — one of the fastest-growing wellness and lifestyle destinations in Bali, combining ocean views, biohacking infrastructure, and strong rental demand.",
        features: [
          "03 Minutes to Pandawa Beach",
          "10 Minutes to Melasti Beach",
          "20 Minutes to Nusa Dua"
        ],
        marketInsight: "Wellness-focused properties are attracting high-spending tourists, driving premium nightly rates and stable annual returns.",
        image: "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/proyecto1/1.png" // Placeholder as requested (empty images)
      },
      {
        area: "PANDawa Area",
        title: "RAHYA VILLAS COMPLEX",
        description: "The project is located just 500 meters from Pandawa Beach — a rapidly developing premium coastal area known for private villas, white sand beaches, and high occupancy vacation rentals.",
        features: [
          "02 Minutes to Pandawa Beach",
          "08 Minutes to Melasti Beach",
          "15 Minutes to Nusa Dua"
        ],
        marketInsight: "The Bukit area continues to experience strong capital appreciation due to limited land supply and rising tourism demand.",
        image: "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/proyecto2/1.webp" // Placeholder as requested (empty images)
      },
      {
        area: "PANDawa Cliffside",
        title: "EIGHTH SENSE",
        description: "Situated on a panoramic cliff overlooking the Indian Ocean, Eighth Sense offers elevated privacy, ocean sunsets, and proximity to Bali’s most iconic beaches.",
        features: [
          "03 Minutes to Pandawa Beach",
          "08 Minutes to Melasti Beach",
          "20 Minutes to Ngurah Rai International Airport"
        ],
        marketInsight: "Cliffside ocean-view properties consistently outperform standard units in rental pricing and long-term value growth.",
        image: "/bali_placeholder.jpg" // Placeholder as requested (empty images)
      },
      {
        area: "SOUTH BALI",
        title: "IJI HOME",
        description: "Operating across the most demanded areas of South Bali, including Pandawa, Bukit, and Nusa Dua — locations with year-round occupancy and strong international tourism inflow.",
        features: [
          "05 Minutes to Pandawa Beach (managed properties)",
          "10 Minutes to Melasti Beach",
          "15 Minutes to Nusa Dua"
        ],
        marketInsight: "Professional property management significantly increases occupancy rates and annual yield compared to self-managed units.",
        image: "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/proyecto3/1.png" // Placeholder as requested (empty images)
      }
    ],
    presentation: { hidden: true }, // Hide for Bali
    developers: { hidden: true } // Hide for Bali
  },
  miami: {
    hero: {
      videoSrc: "https://real-state-landing.s3.us-east-1.amazonaws.com/miami/miami_hero.mp4",
      badge: "Hasta +8–30% anual en zonas prime",
      title: "Apartamentos y residencias de inversión en Miami",
      subtitle: "Invierte en uno de los mercados inmobiliarios más sólidos de Estados Unidos. Miami combina crecimiento poblacional acelerado, beneficios fiscales estatales (sin impuesto estatal sobre la renta en Florida) y alta demanda internacional en alquileres y compra de propiedades premium.",
      stats: [
        {
          value: "6% – 10%",
          iconName: "TrendingUp",
          text: "Rentabilidad bruta estimada en zonas prime como Brickell, Downtown y Edgewater."
        },
        {
          value: "+140k",
          iconName: "Globe",
          text: "Nuevos residentes (2020–2024). Florida lidera la migración interna en EE.UU., impulsando la demanda."
        }
      ]
    },
    about: {
      imageSrc: "https://real-state-landing.s3.us-east-1.amazonaws.com/miami/miami.png",
      title: "Por qué invertir en Miami",
      description: "Miami es uno de los mercados inmobiliarios más sólidos y atractivos de EE.UU., combinando crecimiento sostenido, seguridad jurídica y alta demanda internacional.\n\nSu dinamismo económico y ventaja fiscal la posicionan como un destino estratégico para proteger y rentabilizar capital en dólares.",
      marketCard: {
        title: "MERCADO INMOBILIARIO",
        subtitle: "Alta demanda y seguridad jurídica en USD"
      },
      benefits: [
        { iconName: "Building2", label: "Crecimiento poblacional constante" },
        { iconName: "Coins", label: "Sin impuesto estatal sobre la renta" },
        { iconName: "Globe", label: "Alta demanda internacional" },
        { iconName: "TrendingUp", label: "Fuerte apreciación en zonas prime" },
        { iconName: "CheckCircle", label: "Turismo y renta activa todo el año" },
        { iconName: "Briefcase", label: "Hub financiero y tecnológico en expansión" }
      ]
    },
    whyChoose: null,
    units: [
      {
        id: "buena-vista-modern-residence",
        slug: "buena-vista-modern-residence",
        hero: {
          title: "Buena Vista Modern Residence",
          subtitle: "Modern Luxury Living | Design District Area",
          description: "Residencia de lujo con piscina privada y guest house independiente, ubicada a minutos del Design District. Ideal para inversión patrimonial en USD y valorización en zona premium de Miami.",
          badges: ["Nueva Construcción 2026", "Design District Area", "Modern Luxury"],
          bgImage: "https://real-state-landing.s3.us-east-1.amazonaws.com/miami/proyecto1/1.webp"
        },
        summary: {
          title: "BUENA VISTA SHOWSTOPPER",
          text: "Residencia de diseño contemporáneo en una de las zonas con mayor proyección de valorización en Miami. Techos altos, espacios abiertos y ventanales de gran formato crean una experiencia arquitectónica sofisticada con abundante luz natural. Ubicada a minutos del Miami Design District, esta propiedad redefine el estándar del lujo moderno en Miami."
        },
        concept: {
          title: "Exterior & Lifestyle",
          text: "Una propiedad diseñada para el estilo de vida indoor-outdoor que define Miami. Piscina privada climatizada de agua salada, Área BBQ exterior, Guest House independiente con baño completo y kitchenette, Patio con paisajismo tropical, Carport convertible a garage y estación de carga para vehículos eléctricos."
        },
        community: {
          title: "Perfil Ideal",
          text: "Perfecto para: Inversor patrimonial, Residencia primaria de alto nivel, Rental de lujo a largo plazo, Mercado internacional (EE.UU. + LATAM)."
        },
        privacy: {
          title: "Datos Financieros",
          text: "Precio por sqft: $888 USD. Impuesto anual aproximado: $8,505. Sin HOA. Nueva construcción (ventaja fiscal en revalorización)."
        },
        views: {
          title: "Diseño y Luz",
          text: "Techos elevados y concepto abierto. Ventanas y puertas de impacto (huracanes). Cocina con electrodomésticos premium, despensa oversized y cabinetry flush."
        },
        design: {
          title: "Características Clave",
          text: "5 Habitaciones | 6 Baños (5 completos + 1 medio baño) | 3,321 sqft interiores | 5,800 sqft lote | 2 niveles | Nueva construcción (2026). Sistema Sonos integrado y closets diseñados a medida."
        },
        location: {
          title: "Ubicación Estratégica",
          intro: "Zona residencial en crecimiento con alta demanda premium.",
          nearby: [
            "A minutos del Design District",
            "Cercano a Wynwood y Midtown",
            "15 min de Miami Beach"
          ]
        },
        project: {
          title: "Potencial de Inversión",
          text: "Buena Vista se beneficia del crecimiento continuo del Design District y el reposicionamiento del corredor urbano de lujo. Alta demanda de renta ejecutiva, mercado dolarizado y valorización sostenida en zonas cercanas a hubs culturales y comerciales."
        },
        subCommunities: [],
        amenities: {
          title: "Highlights",
          intro: "Detalles que marcan la diferencia en una propiedad de lujo.",
          categories: [
            {
              name: "EXTERIOR",
              items: ["Piscina climatizada agua salada", "Guest House independiente", "Paisajismo tropical", "Estación carga EV"]
            },
            {
              name: "INTERIOR",
              items: ["Techos elevados", "Cocina premium", "Sistema Sonos", "Ventanas de impacto"]
            }
          ]
        },
        developer: {
          title: "Tipo de Inversor Ideal",
          intro: "Propiedad pensada para inversores que buscan apreciación a mediano-largo plazo, compradores que desean diversificar capital en USD y familias internacionales que buscan segunda residencia en Miami.",
          bullets: ["Apreciación a mediano-largo plazo", "Diversificación en USD", "Segunda residencia"]
        },
        faq: [],
        disclaimers: {
          renders: "Las imágenes son referenciales.",
          availability: "Precios y disponibilidad sujetos a cambios."
        },
        images: [
          "https://real-state-landing.s3.us-east-1.amazonaws.com/miami/proyecto1/1.webp",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/miami/proyecto1/2.webp",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/miami/proyecto1/3.webp",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/miami/proyecto1/4.webp",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/miami/proyecto1/5.webp"
        ],
        description: "Residencia de lujo con piscina privada y guest house independiente, ubicada a minutos del Design District. Ideal para inversión patrimonial en USD y valorización en zona premium de Miami.",
        size: "Off-plan"
      },
      {
        id: "aston-martin-residences",
        slug: "aston-martin-residences",
        hero: {
          title: "ASTON MARTIN RESIDENCES",
          subtitle: "The Pinnacle of Waterfront Luxury – Downtown Miami",
          description: "Residencias icónicas frente al agua en Downtown Miami, diseñadas por la legendaria marca británica. Un ícono arquitectónico con vistas panorámicas a Biscayne Bay y marina privada.",
          badges: ["Waterfront Luxury", "Downtown Miami", "Marina Privada"],
          bgImage: "https://real-state-landing.s3.us-east-1.amazonaws.com/miami/proyecto2/1.webp"
        },
        summary: {
          title: "The Pinnacle of Waterfront Luxury",
          text: "Ubicado en 300 Biscayne Boulevard Way, una de las últimas parcelas frente al agua en Downtown Miami, Aston Martin Residences representa la fusión perfecta entre ingeniería británica, arquitectura contemporánea y estilo de vida cosmopolita. Un edificio icónico de 66 pisos diseñado para capturar vistas ininterrumpidas de Biscayne Bay, Miami River y el skyline de Miami."
        },
        concept: {
          title: "Interiores & Diseño",
          text: "Cocinas Bulthaup, Electrodomésticos Gaggenau, Pisos en mármol premium, Ventanales piso a techo, Baños con vistas panorámicas, Diseño artesanal europeo. Cada residencia está concebida bajo los principios de maximización de luz, espacio y vistas, manteniendo el ADN de precisión y exclusividad de Aston Martin."
        },
        community: {
          title: "Perfil de Inversión",
          text: "Producto de marca global icónica. Ubicación waterfront irrepetible. Alta demanda internacional. Activo prime en USD. Potencial de valorización a largo plazo."
        },
        privacy: {
          title: "Signature Collection",
          text: "Una colección limitada diseñada como piezas maestras individuales. Arquitectura contemporánea, acabados nobles y vistas ininterrumpidas que elevan la experiencia residencial a nivel artístico."
        },
        views: {
          title: "Vistas Inigualables",
          text: "Vistas ininterrumpidas de Biscayne Bay, Miami River y el skyline de Miami desde un edificio icónico de 66 pisos."
        },
        design: {
          title: "Proyecto",
          text: "391 residencias exclusivas. 66 niveles residenciales. 1–5 habitaciones + dúplex + penthouses. Triple Penthouse único (63–65). Marina privada onsite."
        },
        location: {
          title: "Ubicación Estratégica",
          intro: "Downtown & Brickell continúan consolidándose como el epicentro financiero y residencial de lujo de Florida, con fuerte demanda internacional y apreciación sostenida en propiedades waterfront de marca.",
          nearby: [
            "02 min Brickell Financial District",
            "05 min Miami Central Station",
            "07 min Port of Miami",
            "10 min Design District",
            "15 min Miami Beach"
          ]
        },
        project: {
          title: "Tipos de Residencias",
          text: "Studios desde 698 SF. 1 Habitación: 754 – 1,001 SF. 2 Habitaciones: 1,001 – 1,317 SF. 3 Habitaciones: 2,236 – 3,075 SF. 4 Habitaciones: 3,235 – 4,434 SF. 5 Habitaciones: 3,764 – 3,994 SF. Penthouses: 8,977 – 10,463 SF. Triple Penthouse: Nivel 63–65."
        },
        subCommunities: [],
        amenities: {
          title: "Amenidades de Ultra Lujo",
          intro: "Un mundo de privilegios exclusivos.",
          categories: [
            {
              name: "AMENITIES",
              items: ["Piscina panorámica", "Spa & Wellness Center", "Fitness Center de última generación", "Salones privados & lounges", "Marina privada", "Áreas sociales exclusivas"]
            }
          ]
        },
        developer: {
          title: "Aston Martin",
          intro: "La legendaria marca británica trae su ingeniería y diseño de precisión al mercado inmobiliario de lujo en Miami.",
          bullets: ["Marca global icónica", "Diseño de precisión", "Exclusividad"]
        },
        faq: [],
        disclaimers: {
          renders: "Las imágenes son referenciales.",
          availability: "Precios y disponibilidad sujetos a cambios."
        },
        images: [
          "https://real-state-landing.s3.us-east-1.amazonaws.com/miami/proyecto2/1.webp",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/miami/proyecto2/2.webp",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/miami/proyecto2/3.webp",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/miami/proyecto2/4.webp",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/miami/proyecto2/5.webp"
        ],
        description: "Residencias icónicas frente al agua en Downtown Miami, diseñadas por la legendaria marca británica. Un ícono arquitectónico con vistas panorámicas a Biscayne Bay y marina privada.",
        size: "Off-plan"
      },
      {
        id: "ritz-carlton-residences",
        slug: "ritz-carlton-residences",
        hero: {
          title: "THE RITZ-CARLTON RESIDENCES",
          subtitle: "South Beach, Miami",
          description: "Exclusiva colección boutique frente al mar en South Beach, con acceso VIP al hotel Ritz-Carlton y vistas panorámicas al Atlántico.",
          badges: ["South Beach", "Oceanfront", "Branded Residences"],
          bgImage: "https://real-state-landing.s3.us-east-1.amazonaws.com/miami/proyecto3/1.avif"
        },
        summary: {
          title: "South Beach, Miami",
          text: "Una colección boutique ultra exclusiva de solo 30 residencias frente al mar, donde la historia del Ritz-Carlton se fusiona con el diseño contemporáneo y el estilo de vida icónico de South Beach. Ubicado en la intersección de la playa del Atlántico y Lincoln Road, este proyecto redefine el concepto de branded residences en Miami Beach."
        },
        concept: {
          title: "Experiencia Culinaria – José Andrés",
          text: "Programa gastronómico curado por el chef con estrella Michelin José Andrés, incluyendo: Zaytinya, DiLido Beach Club, Lapidus Bar, Nuevo café en el histórico lobby Sagamore. Una propuesta culinaria de nivel internacional integrada al estilo de vida residencial."
        },
        community: {
          title: "Valor de Inversión",
          text: "Producto boutique con inventario limitado. Ubicación oceanfront irrepetible. Marca global de prestigio. Alta demanda internacional en South Beach. Las branded residences frente al mar en Miami Beach mantienen un posicionamiento sólido dentro del mercado luxury, con fuerte componente patrimonial."
        },
        privacy: {
          title: "Residencias Boutique",
          text: "Solo 30 condominios boutique. Vistas panorámicas al Atlántico y Miami Beach. Diseño abierto con abundante luz natural. Layouts amplios con terrazas privadas. Un inventario extremadamente limitado que refuerza la exclusividad del activo."
        },
        views: {
          title: "Vistas Panorámicas",
          text: "Vistas panorámicas al Atlántico y Miami Beach. La conexión entre arena, mar y cielo es central en el diseño."
        },
        design: {
          title: "Arquitectura & Diseño",
          text: "Diseñado por el reconocido arquitecto Kobi Karp, inspirado en la arquitectura icónica de Morris Lapidus y la herencia Art Deco de Miami Beach. Las residencias cuentan con paneles de vidrio de altura completa, amplios balcones privados, cocinas italianas personalizadas por Alessandro Munge, materiales nobles y acabados de alta gama."
        },
        location: {
          title: "Ubicación Privilegiada",
          intro: "Situado en una de las direcciones más codiciadas de Estados Unidos. South Beach combina influencia europea, arte, gastronomía y lifestyle internacional en un solo enclave.",
          nearby: [
            "Frente directo al Océano Atlántico",
            "A pasos de Lincoln Road",
            "Rodeado de restaurantes Michelin, galerías y cultura",
            "Acceso inmediato a South Pointe, Sunset Harbour y Ocean Drive"
          ]
        },
        project: {
          title: "Resumen Estratégico",
          text: "30 residencias boutique. Frente directo al Atlántico. Marca Ritz-Carlton. Lifestyle cultural y gastronómico premium."
        },
        subCommunities: [],
        amenities: {
          title: "Amenidades & Servicios",
          intro: "Los residentes disfrutan de un mundo propio de comodidades.",
          categories: [
            {
              name: "RESIDENCIALES PRIVADAS",
              items: ["Rooftop oasis con piscina", "Sala de proyección privada", "Salón de entretenimiento con cocina", "Gimnasio 24/7", "Servicio de concierge personalizado"]
            },
            {
              name: "ACCESO VIP HOTEL",
              items: ["Spa de clase mundial", "Beach Club", "Programa Ritz Kids", "Servicios de conserjería premium"]
            }
          ]
        },
        developer: {
          title: "Ritz-Carlton",
          intro: "La marca Ritz-Carlton es sinónimo de servicio legendario y lujo atemporal en todo el mundo.",
          bullets: ["Servicio Legendario", "Lujo Atemporal", "Reconocimiento Global"]
        },
        faq: [],
        disclaimers: {
          renders: "Las imágenes son referenciales.",
          availability: "Precios y disponibilidad sujetos a cambios."
        },
        images: [
          "https://real-state-landing.s3.us-east-1.amazonaws.com/miami/proyecto3/1.avif",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/miami/proyecto3/2.avif",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/miami/proyecto3/3.avif",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/miami/proyecto3/4.avif",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/miami/proyecto3/5.avif"
        ],
        description: "Exclusiva colección boutique frente al mar en South Beach, con acceso VIP al hotel Ritz-Carlton y vistas panorámicas al Atlántico.",
        size: "Off-plan"
      }
    ],
    unitsConfig: {
      title: "Formatos de inversión inmobiliaria",
      subtitle: "Selecciona entre distintos tipos de unidades off-plan en Miami según rentabilidad, plazo y objetivo de inversión."
    },
    locationProjects: [
      {
        area: "BUENA VISTA — MIAMI DESIGN DISTRICT",
        title: "Prime Location — Buena Vista, Miami",
        description: "Ubicada en una de las zonas residenciales con mayor crecimiento de Miami, esta nueva construcción combina diseño arquitectónico moderno, cercanía a hubs culturales y alto potencial de valorización en USD.",
        features: [
          "03 min Miami Design District",
          "08 min Wynwood Arts District",
          "15 min Miami Beach"
        ],
        marketInsight: "Buena Vista se beneficia de la expansión del Design District y el desarrollo continuo del corredor urbano de lujo, impulsando apreciación sostenida y alta demanda de renta ejecutiva.",
        image: "https://real-state-landing.s3.us-east-1.amazonaws.com/miami/proyecto1/1.webp"
      },
      {
        area: "DOWNTOWN MIAMI",
        title: "Prime Location — Biscayne Boulevard Way",
        description: "Ubicado en una de las últimas parcelas frente al agua en Downtown Miami, Aston Martin Residences combina vistas panorámicas a Biscayne Bay, proximidad al distrito financiero de Brickell y acceso directo a los principales centros culturales y gastronómicos de la ciudad.",
        features: [
          "03 min Brickell Financial District",
          "05 min Brickell City Centre",
          "07 min Miami Design District"
        ],
        marketInsight: "Downtown Miami y Brickell continúan liderando la valorización del mercado de lujo en el sur de Florida, impulsados por migración de alto patrimonio, expansión financiera y demanda internacional en activos waterfront premium.",
        image: "https://real-state-landing.s3.us-east-1.amazonaws.com/miami/proyecto2/1.webp"
      },
      {
        area: "THE RITZ-CARLTON RESIDENCES",
        title: "South Beach, Miami",
        description: "Una colección boutique ultra exclusiva de solo 30 residencias frente al mar, donde la historia del Ritz-Carlton se fusiona con el diseño contemporáneo y el estilo de vida icónico de South Beach. Ubicado en la intersección de la playa del Atlántico y Lincoln Road, este proyecto redefine el concepto de branded residences en Miami Beach.",
        features: [
          "Frente directo al Océano Atlántico",
          "A pasos de Lincoln Road",
          "Rodeado de restaurantes Michelin, galerías y cultura",
          "Acceso inmediato a South Pointe, Sunset Harbour y Ocean Drive"
        ],
        marketInsight: "Las branded residences frente al mar en Miami Beach mantienen un posicionamiento sólido dentro del mercado luxury, con fuerte componente patrimonial.",
        image: "https://real-state-landing.s3.us-east-1.amazonaws.com/miami/proyecto3/1.avif"
      }
    ],
    presentation: null,
    developers: null
  }
};
