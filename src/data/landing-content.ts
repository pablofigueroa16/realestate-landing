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
  videoSrc?: string;
  videoSrcEn?: string;
  title?: string;
  description?: string;
  benefits?: string[];
  quote?: string;
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
  title?: string;
  partner?: string;
  carouselLabel?: string;
  prevSlide?: string;
  nextSlide?: string;
  goToSlide?: string;
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
        { iconName: "CheckCircle", label: "Soporte post-inversión y estrategia de salida" },
      ]
    },
    whyChoose: {
      videoSrc: "https://real-state-landing.s3.us-east-1.amazonaws.com/home/home_video_es.mp4",
      videoSrcEn: "https://real-state-landing.s3.us-east-1.amazonaws.com/videos_en/home_en.mp4",
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
    unitsConfig: {
      title: "Destinos Globales de Alta Inversión",
      subtitle: "Explora las ciudades que lideran crecimiento, liquidez y demanda internacional en bienes raíces."
    },
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
    whyChoose: {
      videoSrcEn: "https://real-state-landing.s3.us-east-1.amazonaws.com/videos_en/dubai_en.mp4",
    },
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
        { iconName: "TrendingUp", label: "ROI estimado entre 8% y 14% bruto anual" },
        { iconName: "TrendingUp", label: "Mercado emergente con alto potencial de apreciación" }
      ]
    },
    whyChoose: {
      videoSrc: "https://real-state-landing.s3.us-east-1.amazonaws.com/bali/Bali_video.mp4",
      videoSrcEn: "https://real-state-landing.s3.us-east-1.amazonaws.com/videos_en/bali_en.mp4",
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
          latitude: -8.8450,
          longitude: 115.1860,
          nearby: [
            {
              name: "Pandawa Beach",
              latitude: -8.8446,
              longitude: 115.1882,
              category: "Playa",
            },
            {
              name: "Timbis Beach Club",
              latitude: -8.8466,
              longitude: 115.1803,
              category: "Lifestyle",
            },
            {
              name: "Bukit Pandawa Golf & Country Club",
              latitude: -8.8394,
              longitude: 115.1792,
              category: "Deporte",
            },
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
          latitude: -8.8430,
          longitude: 115.1850,
          nearby: [
            {
              name: "Pandawa Beach",
              latitude: -8.8446,
              longitude: 115.1882,
              category: "Playa",
            },
            {
              name: "Green Bowl Beach",
              latitude: -8.8458,
              longitude: 115.1727,
              category: "Playa",
            },
            {
              name: "Uluwatu Area (Bukit Lifestyle)",
              latitude: -8.8297,
              longitude: 115.0870,
              category: "Lifestyle",
            },
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
          latitude: -8.8470,
          longitude: 115.1870,
          nearby: [
            {
              name: "Pandawa Beach",
              latitude: -8.8446,
              longitude: 115.1882,
              category: "Playa",
            },
            {
              name: "Melasti Beach",
              latitude: -8.8442,
              longitude: 115.1613,
              category: "Playa",
            },
            {
              name: "Nusa Dua",
              latitude: -8.8078,
              longitude: 115.2300,
              category: "Zona Premium",
            },
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
      title: "Formatos de inversión inmobiliaria",
      subtitle: "Selecciona entre distintos tipos de unidades off-plan en Bali según rentabilidad, plazo y objetivo de inversión."
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
    whyChoose: {
      videoSrc: "https://real-state-landing.s3.us-east-1.amazonaws.com/miami/miami_video.mp4",
      videoSrcEn: "https://real-state-landing.s3.us-east-1.amazonaws.com/videos_en/miami_en.mp4",
      title: "Por qué los inversionistas eligen invertir en Miami",
      description: "Miami se ha consolidado como uno de los mercados inmobiliarios más dinámicos y resilientes de Estados Unidos, impulsado por migración constante, crecimiento financiero y demanda internacional sostenida.",
      benefits: [
        "Selección estratégica en zonas prime (Brickell, Downtown, Waterfront)",
        "Análisis de rentabilidad, valorización y liquidez en USD",
        "Due diligence completa: desarrollador, HOA y estructura legal",
        "Acompañamiento integral desde compra hasta eventual reventa"
      ],
      quote: "Invertir bien no es cuestión de suerte. Es cuestión de estrategia."
    },
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
          latitude: 25.8130,
          longitude: -80.1920,
          nearby: [
            {
              name: "Miami Design District",
              latitude: 25.8132,
              longitude: -80.1936,
              category: "Distrito Urbano",
            },
            {
              name: "Wynwood",
              latitude: 25.8004,
              longitude: -80.1992,
              category: "Arte y Lifestyle",
            },
            {
              name: "Midtown Miami",
              latitude: 25.8077,
              longitude: -80.1938,
              category: "Residencial",
            },
            {
              name: "Miami Beach",
              latitude: 25.7907,
              longitude: -80.1300,
              category: "Playa",
            },
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
          latitude: 25.7705,
          longitude: -80.1880,
          nearby: [
            {
              name: "Brickell Financial District",
              latitude: 25.7617,
              longitude: -80.1918,
              category: "Financiero",
            },
            {
              name: "MiamiCentral Station",
              latitude: 25.7782,
              longitude: -80.1959,
              category: "Transporte",
            },
            {
              name: "PortMiami",
              latitude: 25.7781,
              longitude: -80.1794,
              category: "Puerto",
            },
            {
              name: "Miami Design District",
              latitude: 25.8132,
              longitude: -80.1936,
              category: "Distrito Urbano",
            },
            {
              name: "Miami Beach",
              latitude: 25.7907,
              longitude: -80.1300,
              category: "Playa",
            },
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
          latitude: 25.7907,
          longitude: -80.1284,
          nearby: [
            {
              name: "Lincoln Road",
              latitude: 25.7901,
              longitude: -80.1403,
              category: "Lifestyle",
            },
            {
              name: "South Pointe Park",
              latitude: 25.7655,
              longitude: -80.1311,
              category: "Parque",
            },
            {
              name: "Sunset Harbour",
              latitude: 25.7923,
              longitude: -80.1485,
              category: "Marina",
            },
            {
              name: "Ocean Drive",
              latitude: 25.7814,
              longitude: -80.1301,
              category: "Cultura y Lifestyle",
            },
            {
              name: "Atlantic Oceanfront",
              latitude: 25.7907,
              longitude: -80.1270,
              category: "Playa",
            },
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
  },
  madrid: {
    hero: {
      videoSrc: "https://real-state-landing.s3.us-east-1.amazonaws.com/madrid/madrid_hero.mp4",
      badge: "Hasta +8–30% anual en zonas prime",
      title: "Invierte en Madrid con Rentabilidad en Euros.",
      subtitle: "Bienes raíces en una de las capitales más sólidas de Europa.\nAlta demanda de alquiler, estabilidad jurídica y valorización a largo plazo.",
      stats: [
        {
          value: "Desde €250.000",
          iconName: "Building2",
          text: "Inversión inicial en zonas estratégicas."
        },
        {
          value: "Hasta 8% bruto anual",
          iconName: "TrendingUp",
          text: "Ingresos por alquiler en distritos de alta demanda."
        }
      ]
    },
    about: {
      imageSrc: "https://real-state-landing.s3.us-east-1.amazonaws.com/madrid/madrid.png",
      title: "Madrid: Capital Europea de Inversión Inmobiliaria",
      description: "Un mercado sólido, transparente y respaldado por una de las economías más estables de Europa.\nMadrid combina seguridad jurídica, moneda fuerte y una demanda constante de vivienda tanto residencial como de alquiler.",
      marketCard: {
        title: "MERCADO MADRID",
        subtitle: "Seguridad, liquidez y crecimiento constante en uno de los mercados más resilientes de Europa."
      },
      benefits: [
        { iconName: "TrendingUp", label: "Alta Demanda de Alquiler" },
        { iconName: "Coins", label: "Ingresos en Euros" },
        { iconName: "Building2", label: "Estabilidad Jurídica" },
        { iconName: "Globe", label: "Capital Internacional" },
      ]
    },
    whyChoose: {
      videoSrc: "https://real-state-landing.s3.us-east-1.amazonaws.com/madrid/madrid_video.mp4",
      videoSrcEn: "https://real-state-landing.s3.us-east-1.amazonaws.com/videos_en/madrid_en.mp4",
      title: "Por qué los inversionistas eligen invertir en Madrid con nosotros",
      description: "Madrid se ha consolidado como uno de los mercados inmobiliarios más estables y estratégicos de Europa. Su combinación de seguridad jurídica, moneda fuerte y demanda constante convierte a la capital española en un destino sólido para proteger y hacer crecer el patrimonio.",
      benefits: [
        "Análisis exhaustivo de cada promotor y proyecto",
        "Enfoque en estabilidad, liquidez y valorización sostenida",
        "Seguridad jurídica bajo normativa europea",
        "Acompañamiento integral hasta reventa o gestión de alquiler"
      ],
      quote: "Invertir en Madrid no es una tendencia, es una estrategia patrimonial."
    },
    units: [
      {
        id: "residencial-zenith",
        slug: "residencial-zenith",
        hero: {
          title: "Residencial Zenith",
          subtitle: "Puerta de Hierro · Arquitectura de Autor · Madrid",
          description: "Un exclusivo proyecto de 117 viviendas de 1, 2 y 3 dormitorios en una de las zonas más prestigiosas de Madrid. Diseñado por el reconocido estudio Cano & Escario, Zenith redefine el concepto de elegancia contemporánea y vida residencial premium.",
          badges: ["Puerta de Hierro", "117 Viviendas", "Energía A"],
          bgImage: "https://real-state-landing.s3.us-east-1.amazonaws.com/madrid/proyecto1/01.jpg"
        },
        images: [
          "https://real-state-landing.s3.us-east-1.amazonaws.com/madrid/proyecto1/01.jpg",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/madrid/proyecto1/02.jpg",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/madrid/proyecto1/03.jpg",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/madrid/proyecto1/05.jpg",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/madrid/proyecto1/06.jpg"
        ],
        description: "Exclusivo residencial de 117 viviendas en Puerta de Hierro, con arquitectura de autor y zonas comunes premium en una de las áreas más prestigiosas de Madrid.",
        size: "Off-plan",
        summary: {
          title: "Un Nuevo Referente Residencial en Madrid",
          text: "Residencial Zenith nace junto a Puerta de Hierro, combinando privacidad, naturaleza y proximidad al centro urbano. Su arquitectura de líneas rectas y depuradas crea una estética moderna y sofisticada que se integra perfectamente con el entorno verde que lo rodea. Zenith no es solo un conjunto de viviendas: es una propuesta de estilo de vida diseñada para quienes valoran diseño, confort y exclusividad."
        },
        concept: {
          title: "Viviendas & Personalización",
          text: "117 viviendas de 1, 2 y 3 dormitorios con posibilidad de personalización: elección de acabados, ajustes en distribución, diferentes líneas de diseño interior y materiales de alta calidad. Cada unidad ha sido diseñada para maximizar luminosidad, amplitud y eficiencia."
        },
        community: {
          title: "Inversión en Madrid",
          text: "Invertir en Zenith significa posicionarse en una de las zonas más exclusivas de Madrid, un mercado respaldado por estabilidad jurídica europea, activos en euros, alta liquidez inmobiliaria y fuerte demanda residencial premium."
        },
        privacy: {
          title: "Sostenibilidad & Eficiencia",
          text: "Preparado para obtener Calificación Energética A. Menor impacto ambiental, reducción en consumo energético, ahorro en facturas y mayor atractivo en reventa futura. La sostenibilidad no es un complemento, es parte del diseño."
        },
        views: { title: "", text: "" },
        design: { title: "", text: "" },
        location: {
          title: "Prime Location — Puerta de Hierro",
          intro: "Ubicado en la Calle Cantalejo, dentro de uno de los enclaves más consolidados y exclusivos de Madrid. Rodeado de naturaleza, junto al Monte de El Pardo.",
          latitude: 40.4750,
          longitude: -3.7350,
          nearby: [
            { name: "Centro de Madrid", latitude: 40.4168, longitude: -3.7038, category: "Ciudad" },
            { name: "Real Club Puerta de Hierro", latitude: 40.4680, longitude: -3.7520, category: "Club Privado" },
            { name: "Monte de El Pardo", latitude: 40.5200, longitude: -3.7700, category: "Naturaleza" }
          ]
        },
        project: {
          title: "Entorno Estratégico",
          text: "10–15 minutos al centro de Madrid. Acceso directo a M-30, M-40 y A-6. Cercanía a colegios internacionales y universidades. Próximo al Real Club de Puerta de Hierro."
        },
        subCommunities: [
          { title: "1 Dormitorio", text: "Viviendas de 1 dormitorio con diseño optimizado, acabados premium y máxima luminosidad." },
          { title: "2 Dormitorios", text: "Viviendas de 2 dormitorios ideales para parejas o inversión, con distribución funcional y zonas comunes premium." },
          { title: "3 Dormitorios", text: "Viviendas de 3 dormitorios para familias, con amplios espacios, personalización de acabados y calificación energética A." }
        ],
        amenities: {
          title: "El Arte de Vivir — Zonas Comunes Premium",
          intro: "Zenith ha sido concebido como un oasis privado dentro de la ciudad. Cada espacio ha sido diseñado bajo estándares de confort, privacidad y funcionalidad contemporánea.",
          categories: [
            {
              name: "WELLNESS & LIFESTYLE",
              items: ["Piscina desbordante y solárium", "Rooftop con terraza panorámica y gastroteca", "Gimnasio interior y exterior", "Sauna"]
            },
            {
              name: "SERVICIOS & COMUNIDAD",
              items: ["Sala Club para celebraciones privadas", "Espacio Coworking", "Zona infantil interior y exterior", "Aparcamiento para bicicletas", "Buzones inteligentes para paquetería"]
            }
          ]
        },
        developer: {
          title: "Cano & Escario Arquitectura",
          intro: "Diseñado por el reconocido estudio Cano & Escario, Zenith redefine el concepto de elegancia contemporánea y vida residencial premium en Madrid.",
          bullets: ["Arquitectura de autor", "Diseño contemporáneo", "Líneas depuradas", "Integración con el entorno"]
        },
        faq: [],
        disclaimers: {
          renders: "Las imágenes son orientativas y pueden no representar el resultado final.",
          availability: "Precios y disponibilidad sujetos a cambios sin previo aviso."
        }
      },
      {
        id: "residencial-ara",
        slug: "residencial-ara",
        hero: {
          title: "Residencial ARA",
          subtitle: "Los Cerros · Vivienda Protegida · Nuevo Desarrollo Madrid",
          description: "Un proyecto de Vivienda Protegida de Precio Limitado en el nuevo barrio de Los Cerros, uno de los mayores desarrollos urbanísticos del sureste de Madrid. Viviendas de 1, 2, 3 y 4 dormitorios con garaje y trastero incluidos.",
          badges: ["Los Cerros", "Vivienda Protegida", "Energía A"],
          bgImage: "https://real-state-landing.s3.us-east-1.amazonaws.com/madrid/proyecto2/1.jpg"
        },
        images: [
          "https://real-state-landing.s3.us-east-1.amazonaws.com/madrid/proyecto2/1.jpg",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/madrid/proyecto2/2.jpg",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/madrid/proyecto2/3.jpg",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/madrid/proyecto2/4.jpg",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/madrid/proyecto2/5.jpg"
        ],
        description: "Viviendas protegidas de 1 a 4 dormitorios en Los Cerros, el nuevo barrio sostenible de Madrid, con piscina, zonas verdes y garaje incluido en precio.",
        size: "Off-plan",
        summary: {
          title: "El Nuevo Madrid — Los Cerros",
          text: "Los Cerros es uno de los cinco grandes desarrollos urbanísticos del sureste de la capital. Un barrio concebido bajo criterios de sostenibilidad, baja ocupación del suelo y conexión directa con la naturaleza. Ubicado junto a El Cañaveral, Coslada y San Fernando, el proyecto se integra dentro del futuro Bosque Metropolitano, el gran cinturón verde que rodeará Madrid."
        },
        concept: {
          title: "Diseño Arquitectónico",
          text: "ARA destaca por un diseño moderno y funcional, donde cada vivienda ha sido concebida para maximizar luz natural, amplitud y eficiencia del espacio. Urbanización cerrada con amplias zonas comunes pensadas para la vida familiar y comunitaria."
        },
        community: {
          title: "Modelo Cooperativa — Precio de Coste",
          text: "Residencial ARA se desarrolla bajo régimen de cooperativa gestionada por Grupo Ibosa. Esto significa: promoción a precio de coste, sin margen promotor tradicional, participación activa del socio cooperativista y mayor control en decisiones del proyecto."
        },
        privacy: {
          title: "Eficiencia Energética & Confort",
          text: "Calificación Energética A. Sistema de climatización centralizado con aerotermia, ventilación mecánica, menor consumo energético y ahorro en costes operativos."
        },
        views: {
          title: "Naturaleza & Sostenibilidad",
          text: "Residencial ARA se integra en un entorno privilegiado: 1,7 millones de m² de espacios naturales, más de 7.000 árboles y 100.000 arbustos, reforestación del Cerro de la Herradura e integración en el Bosque Metropolitano."
        },
        design: { title: "", text: "" },
        location: {
          title: "Ubicación Estratégica — Sureste de Madrid",
          intro: "Los Cerros está proyectado como el barrio más verde de Madrid, con fuerte potencial de revalorización a largo plazo por expansión urbana planificada.",
          latitude: 40.4100,
          longitude: -3.5800,
          nearby: [
            { name: "El Cañaveral", latitude: 40.4200, longitude: -3.5600, category: "Barrio" },
            { name: "Coslada", latitude: 40.4239, longitude: -3.5617, category: "Ciudad" },
            { name: "Bosque Metropolitano", latitude: 40.4000, longitude: -3.6000, category: "Naturaleza" }
          ]
        },
        project: {
          title: "Conectividad Estratégica",
          text: "Acceso directo a M-50, M-45 y R-3. Proyecto de ampliación Línea 7 de Metro. Conexión rápida con centro de Madrid. Cercanía a zonas consolidadas del este de la capital."
        },
        subCommunities: [
          { title: "1 Dormitorio", text: "Viviendas de 1 dormitorio con plaza de garaje y trastero incluidos. Distribución optimizada para primera vivienda o inversión." },
          { title: "2 Dormitorios", text: "Viviendas de 2 dormitorios con garaje y trastero. Ideales para parejas jóvenes o familias pequeñas." },
          { title: "3 Dormitorios", text: "Viviendas de 3 dormitorios con amplios espacios, garaje y trastero incluidos. Perfectas para familias." },
          { title: "4 Dormitorios", text: "Viviendas de 4 dormitorios para familias numerosas. Máxima amplitud con garaje y trastero incluidos en precio." }
        ],
        amenities: {
          title: "Disfruta Tu Tiempo Libre",
          intro: "Las zonas comunes han sido diseñadas para ofrecer calidad de vida y bienestar en una urbanización cerrada.",
          categories: [
            {
              name: "ZONAS COMUNES",
              items: ["Piscina comunitaria", "Zonas verdes", "Área infantil", "Local comunitario para celebraciones", "Espacios pensados para convivencia familiar"]
            }
          ]
        },
        developer: {
          title: "Grupo Ibosa",
          intro: "Grupo Ibosa es uno de los cinco principales operadores activos del sector inmobiliario en la Comunidad de Madrid, con amplia experiencia en desarrollos cooperativos.",
          bullets: ["Promoción a precio de coste", "Sin margen promotor", "Amplia experiencia", "Desarrollos cooperativos"]
        },
        faq: [],
        disclaimers: {
          renders: "Las imágenes son orientativas y pueden no representar el resultado final.",
          availability: "Para acceder a vivienda protegida se requiere cumplir requisitos específicos (mayor de edad, residente en España, límites de ingresos IPREM, no ser titular de otra vivienda)."
        }
      },
      {
        id: "reside-arturo-soria",
        slug: "reside-arturo-soria",
        hero: {
          title: "Reside Arturo Soria",
          subtitle: "Exclusividad Sostenible · Zona Norte de Madrid",
          description: "Un residencial contemporáneo ubicado en Calle Bausá 13–15, junto a Arturo Soria, una de las arterias más prestigiosas y demandadas de Madrid. Elegancia, diseño y sostenibilidad se integran en un proyecto concebido para quienes buscan calidad de vida en el Madrid más exclusivo.",
          badges: ["Arturo Soria", "Energía A", "Premium"],
          bgImage: "https://real-state-landing.s3.us-east-1.amazonaws.com/madrid/proyecto3/1.jpg"
        },
        images: [
          "https://real-state-landing.s3.us-east-1.amazonaws.com/madrid/proyecto3/1.jpg",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/madrid/proyecto3/2.jpg",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/madrid/proyecto3/3.jpg",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/madrid/proyecto3/4.jpg",
          "https://real-state-landing.s3.us-east-1.amazonaws.com/madrid/proyecto3/5.jpg"
        ],
        description: "Residencial exclusivo en Arturo Soria, con arquitectura contemporánea, piscina privada y calificación energética A en una de las zonas más prestigiosas del norte de Madrid.",
        size: "Off-plan",
        summary: {
          title: "Elegante Arquitectura Contemporánea",
          text: "Un edificio icónico que fusiona líneas limpias y materiales vanguardistas con integración armónica en el entorno urbano. Diseño moderno y exclusivo, fachada con sistema SATE y detalles en aluminio, amplios ventanales que maximizan luz natural y estética sofisticada y atemporal. Reside Arturo Soria redefine la arquitectura residencial de alta gama en Madrid."
        },
        concept: {
          title: "Viviendas que Hablan de Ti",
          text: "Distribuciones adaptadas al estilo de vida contemporáneo, con especial atención al confort, eficiencia y tecnología. Grandes ventanales, domótica integrada con control remoto, aislamiento térmico y acústico de última generación, materiales nobles y acabados actuales. Cada vivienda ha sido diseñada como un espacio luminoso, funcional y elegante."
        },
        community: {
          title: "Inversión en Arturo Soria",
          text: "Invertir en Reside Arturo Soria significa posicionarse en una de las zonas más consolidadas del norte de Madrid, mercado premium con baja oferta y alta demanda, activos en euros, estabilidad patrimonial a largo plazo y alta liquidez inmobiliaria. Arturo Soria es sinónimo de prestigio, estabilidad y valor sostenido."
        },
        privacy: {
          title: "Sostenibilidad & Eficiencia Energética",
          text: "El edificio contará con Calificación Energética A. Tecnología y eficiencia integradas: sistema de aerotermia para frío y calor, ventilación mecánica regulada, carpinterías con rotura de puente térmico, doble acristalamiento tipo Climalit, griferías termostáticas y dispositivos de ahorro de agua, sensores de iluminación en zonas comunes."
        },
        views: {
          title: "Memoria de Calidades",
          text: "Materiales seleccionados con máxima exigencia: puerta de entrada acorazada, solados porcelánicos o tarima laminada, instalación domótica con alarmas técnicas (incendio e inundación), aislamientos de alta eficiencia. Cada detalle ha sido concebido para garantizar calidad superior y durabilidad."
        },
        design: { title: "", text: "" },
        location: {
          title: "Prime Location — Arturo Soria",
          intro: "Ubicado en la zona norte de Madrid, en un enclave consolidado rodeado de colegios internacionales, hospitales, embajadas y zonas residenciales premium. Reside Arturo Soria combina entorno natural y conexión urbana estratégica.",
          latitude: 40.4550,
          longitude: -3.6400,
          nearby: [
            { name: "Plaza de Castilla", latitude: 40.4656, longitude: -3.6889, category: "Centro Urbano" },
            { name: "Paseo de la Castellana", latitude: 40.4500, longitude: -3.6900, category: "Financiero" },
            { name: "Aeropuerto Madrid-Barajas", latitude: 40.4719, longitude: -3.5626, category: "Transporte" },
            { name: "Conde Orgaz", latitude: 40.4600, longitude: -3.6300, category: "Residencial Premium" }
          ]
        },
        project: {
          title: "Conectividad Estratégica",
          text: "Acceso inmediato a M-30 y M-40. Rápida conexión al Aeropuerto. Cercanía a Plaza de Castilla y Paseo de la Castellana. Entorno residencial de alto nivel (Conde Orgaz, Pio XII, Hortaleza)."
        },
        subCommunities: [],
        amenities: {
          title: "Exclusividad & Espacios Comunes",
          intro: "El proyecto ofrece zonas comunes diseñadas para el bienestar. Un oasis urbano en una de las áreas más consolidadas de Madrid.",
          categories: [
            {
              name: "EXTERIOR",
              items: ["Piscina privada", "Zonas ajardinadas con paisajismo cuidado", "Espacios exteriores de relax", "Entorno íntimo y exclusivo"]
            }
          ]
        },
        developer: {
          title: "Inversión Premium",
          intro: "Arturo Soria mantiene una demanda sostenida de vivienda premium, con alta estabilidad de valor y fuerte atractivo para familias, directivos y compradores patrimoniales.",
          bullets: ["Zona consolidada", "Alta demanda", "Estabilidad de valor", "Perfil premium"]
        },
        faq: [],
        disclaimers: {
          renders: "Las imágenes son orientativas y pueden no representar el resultado final.",
          availability: "Precios y disponibilidad sujetos a cambios sin previo aviso."
        }
      }
    ],
    unitsConfig: {
      title: "Espacios que Se Adaptan a Tu Estilo de Vida",
      subtitle: "Desde apartamentos funcionales hasta residencias exclusivas, cada tipología ha sido concebida para ofrecer confort, diseño y valor sostenido en el mercado madrileño."
    },
    locationProjects: [
      {
        area: "PUERTA DE HIERRO · MADRID",
        title: "Prime Location — Puerta de Hierro",
        description: "Ubicado en una de las zonas residenciales más exclusivas y consolidadas de Madrid, Residencial Zenith combina privacidad, entorno natural y conexión directa con el centro financiero y cultural de la ciudad. Rodeado por áreas verdes como el Monte de El Pardo y a pocos minutos de las principales arterias viales, este enclave representa una de las ubicaciones más seguras y de mayor prestigio de la capital.",
        features: [
          "10–15 min al centro de Madrid",
          "Acceso inmediato a M-30, M-40 y A-6",
          "Cercanía a colegios internacionales y universidades",
          "Próximo a hospitales y clubes privados"
        ],
        marketInsight: "Puerta de Hierro mantiene una demanda constante de vivienda premium, con alta estabilidad de valor y fuerte atractivo para perfiles ejecutivos y familias internacionales.",
        image: "https://real-state-landing.s3.us-east-1.amazonaws.com/madrid/proyecto1/01.jpg"
      },
      {
        area: "LOS CERROS · MADRID",
        title: "Ubicación Estratégica — Sureste de Madrid",
        description: "El proyecto se ubica en Los Cerros, uno de los mayores desarrollos urbanísticos de la capital, concebido como el futuro barrio más verde de Madrid. Combina expansión planificada, nuevas infraestructuras y un entorno natural privilegiado dentro del Bosque Metropolitano.",
        features: [
          "05 Minutos a M-45",
          "07 Minutos a M-50",
          "15 Minutos al Centro de Madrid",
          "10 Minutos a El Cañaveral"
        ],
        marketInsight: "Los Cerros forma parte del crecimiento estructurado de Madrid hacia el sureste, con baja ocupación del suelo y fuerte inversión en infraestructura y zonas verdes, lo que proyecta valorización sostenida a medio y largo plazo.",
        image: "https://real-state-landing.s3.us-east-1.amazonaws.com/madrid/proyecto2/1.jpg"
      },
      {
        area: "ARTURO SORIA · ZONA NORTE",
        title: "Ubicación Prime — Arturo Soria, Madrid",
        description: "Reside Arturo Soria se ubica en Calle Bausá 13–15, junto a la emblemática Arturo Soria, una de las arterias residenciales más prestigiosas y consolidadas del norte de Madrid. Un enclave que combina exclusividad, entorno residencial de alto nivel y conexión inmediata con el centro financiero y el aeropuerto.",
        features: [
          "02 Minutos a M-30",
          "05 Minutos a Plaza de Castilla",
          "10 Minutos a Paseo de la Castellana",
          "12 Minutos al Aeropuerto Madrid-Barajas"
        ],
        marketInsight: "Arturo Soria es una de las zonas con mayor estabilidad y demanda del norte de Madrid, caracterizada por su perfil residencial premium, proximidad a colegios internacionales y hospitales de prestigio, lo que garantiza protección patrimonial y liquidez inmobiliaria sostenida.",
        image: "https://real-state-landing.s3.us-east-1.amazonaws.com/madrid/proyecto3/1.jpg"
      }
    ],
    presentation: {
      badge: "OFERTA EXCLUSIVA",
      title: "Recibe la presentación detallada del proyecto",
      description: "Hemos preparado un dossier detallado con precios actualizados, disponibilidad real, memoria de calidades, planos y estimaciones de valorización en el mercado madrileño.\nIncluye información estratégica para compradores residenciales e inversores que buscan proteger capital en euros.",
      cta: "Agendar consultoría",
      disclaimer: "Te enviaremos la presentación de forma inmediata por WhatsApp o email.\nSin compromiso · Información clara · Atención en español"
    },
    developers: null
  },
  cdmx: {
    hero: {
      videoSrc: "https://real-state-landing.s3.us-east-1.amazonaws.com/cdmx/cdmx_hero.mp4",
      badges: ["POLANCO", "ROMA", "SANTA FE"],
      title: "Departamentos en Ciudad de México con Alto Potencial de Valorización",
      subtitle: "Invierte en una de las capitales más dinámicas de Latinoamérica. Proyectos seleccionados en zonas prime con fuerte demanda de renta y crecimiento sostenido del mercado inmobiliario.",
      stats: [
        {
          value: "20% – 30%",
          iconName: "Coins",
          text: "Enganche inicial. Planes de pago flexibles durante construcción."
        },
        {
          value: "8% – 12%",
          iconName: "TrendingUp",
          text: "Rendimiento anual estimado en renta tradicional o ejecutiva."
        }
      ]
    },
    about: {
      imageSrc: "https://real-state-landing.s3.us-east-1.amazonaws.com/cdmx/cdmx.png",
      title: "¿Por qué invertir en Ciudad de México?",
      description: "Ciudad de México es el principal centro financiero y corporativo de Latinoamérica. Su tamaño, actividad económica y alta demanda habitacional la convierten en un mercado inmobiliario sólido y constante.\n\nInvertir en zonas estratégicas significa acceder a liquidez, renta estable y potencial de plusvalía.",
      marketCard: {
        title: "ENTORNO DE INVERSIÓN",
        subtitle: "Demanda constante + economía activa + ubicación estratégica."
      },
      benefits: [
        { iconName: "CheckCircle", label: "Alta demanda de renta" },
        { iconName: "CheckCircle", label: "Mercado amplio y líquido" },
        { iconName: "CheckCircle", label: "Crecimiento urbano continuo" },
        { iconName: "CheckCircle", label: "Zonas prime consolidadas" },
        { iconName: "CheckCircle", label: "Potencial de plusvalía" }
      ]
    },
    whyChoose: {
      videoSrc: "https://real-state-landing.s3.us-east-1.amazonaws.com/cdmx/cdmx_video.mp4",
      videoSrcEn: "https://real-state-landing.s3.us-east-1.amazonaws.com/videos_en/cdmx_en.mp4",
      title: "¿Por Qué Invertir con Nosotros en Ciudad de México?",
      description: "Trabajamos exclusivamente con desarrolladores sólidos y proyectos ubicados en zonas estratégicas de CDMX. Nuestro objetivo es ayudarte a tomar decisiones de inversión claras, seguras y rentables.\nSeleccionamos oportunidades en Polanco, Roma, Condesa, Santa Fe y otras áreas con alta demanda y liquidez comprobada.",
      benefits: [
        "Análisis riguroso de cada desarrollador",
        "Enfoque en renta estable y plusvalía",
        "Transparencia legal y acompañamiento notarial",
        "Asesoría integral hasta renta o reventa"
      ],
      quote: "No buscamos cerrar operaciones rápidas, buscamos construir patrimonio sólido."
    },
    units: [],
    unitsConfig: {
      title: "Formatos de inversión inmobiliaria",
      subtitle: "Selecciona entre distintos tipos de unidades en Ciudad de México según rentabilidad, plazo y objetivo de inversión."
    },
    locationProjects: [],
    presentation: {
      badge: "OFERTA EXCLUSIVA",
      title: "Recibe la presentación detallada del proyecto",
      description: "Accede al dossier con precios actualizados, planes de pago disponibles y estimaciones reales de renta en las principales zonas de Ciudad de México.\nIncluye análisis de plusvalía, demanda de alquiler y perfil ideal de inversión en áreas como Polanco, Roma, Condesa y Santa Fe.",
      cta: "Agendar consultoría",
      disclaimer: "Te enviaremos la presentación de forma inmediata por WhatsApp o email.\nSin compromiso · Información clara · Atención en español"
    },
    developers: null
  }
};
