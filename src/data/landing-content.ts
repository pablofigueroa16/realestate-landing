import { Building2, Clock, TrendingUp, Briefcase, Globe, MapPin } from "lucide-react";
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
  badge: string;
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
  locationProjects: LocationProject[];
  presentation: PresentationContent | null;
  developers: DevelopersContent | null;
}

export const landingContent: Record<string, LandingContent> = {
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
      title: "Invierte en Bali. El nuevo epicentro global del turismo, lujo y rentabilidad sostenible.",
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
        },
        {
          value: "Hub",
          iconName: "Briefcase",
          text: "Hub global de nómadas digitales y startups"
        },
        {
          value: "8-14%",
          iconName: "Building2",
          text: "ROI estimado entre 8% y 14% bruto anual en zonas premium"
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
      title: "Por qué Bali es el nuevo epicentro de la inversión inmobiliaria en Asia",
      description: "Bali se ha consolidado como uno de los mercados emergentes más atractivos del Sudeste Asiático, combinando crecimiento turístico récord, demanda internacional sostenida y una nueva generación de inversores digitales que impulsan el mercado inmobiliario de la isla.\nLa isla no solo vende estilo de vida: vende rentabilidad respaldada por ocupación constante y valorización progresiva.",
      benefits: [
        "✓ Bali: crecimiento turístico sostenido y expansión internacional.",
        "✓ Mercado impulsado por nómadas digitales y turismo premium.",
        "✓ Alta demanda de villas, residencias boutique y proyectos wellness.",
        "✓ Rentabilidades competitivas frente a otros destinos globales."
      ],
      quote: "“Invertir en Bali no es solo comprar propiedad, es entrar en el corazón del turismo global.”"
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
        size: "Desde 32 m²",
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
        size: "Desde 112 m²",
        community: { title: "", text: "" },
        privacy: { title: "", text: "" },
        views: { title: "", text: "" },
        design: { title: "", text: "" }
      }
    ],
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
        image: "/bali_placeholder.jpg" // Placeholder as requested (empty images)
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
        image: "/bali_placeholder.jpg" // Placeholder as requested (empty images)
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
        image: "/bali_placeholder.jpg" // Placeholder as requested (empty images)
      }
    ],
    presentation: { hidden: true }, // Hide for Bali
    developers: { hidden: true } // Hide for Bali
  }
};
