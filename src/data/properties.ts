export interface Property {
  id: string;
  slug: string;
  hero: {
    title: string;
    subtitle: string;
    description: string;
    badges: string[];
    bgVideo?: string;
    bgImage?: string;
  };
  summary: {
    title: string;
    text: string;
  };
  concept: {
    title: string;
    text: string;
  };
  community: {
    title: string;
    text: string;
  };
  privacy: {
    title: string;
    text: string;
  };
  views: {
    title: string;
    text: string;
  };
  design: {
    title: string;
    text: string;
  };
  location: {
    title: string;
    intro: string;
    nearby: (string | NearbyPlace)[];
    latitude?: number;
    longitude?: number;
  };
  project: {
    title: string;
    text: string;
  };
  subCommunities: {
    title: string;
    text: string;
  }[];
  amenities: {
    title: string;
    intro: string;
    categories: {
      name: string;
      items: string[];
    }[];
  };
  developer: {
    title: string;
    intro: string;
    bullets: string[];
  };
  faq: {
    question: string;
    answer: string;
  }[];
  disclaimers: {
    renders: string;
    availability: string;
  };
  images: string[];
  description?: string;
  size?: string;
  externalLink?: string;
}

export interface NearbyPlace {
  name: string;
  latitude: number;
  longitude: number;
  category?: string;
}

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

export const properties: Property[] = [
  {
    id: "sobha-hartland-ii",
    slug: "sobha-hartland-ii",
    hero: {
      title: "Sobha Hartland II",
      subtitle: "El epítome de la vida de lujo frente al agua.",
      description: "Sobha Hartland II es un nuevo distrito residencial waterfront de 8 millones de pies², creado como continuidad del éxito de Sobha Hartland. Un estilo de vida premium, cerca de los principales hubs de Dubái.",
      badges: [
        "Comunidad waterfront de lujo",
        "8 millones ft²",
        "Cerca del corazón de la ciudad"
      ],
      bgVideo: "/VIDEOHERO.mp4", // Using existing video as placeholder
      bgImage: "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO1/Amenities_Street_View.webp"
    },
    summary: {
      title: "Lo mejor de la ciudad… con calma frente al agua",
      text: "Vive la combinación perfecta: centros comerciales, distritos de negocios y hotspots a pocos minutos, mientras vuelves a casa a un paraíso urbano junto al agua. Lejos del ruido, pero siempre cerca."
    },
    concept: {
      title: "Naturaleza serena. Agua en total tranquilidad.",
      text: "Sobha Hartland II presenta una mezcla única entre un estilo de vida waterfront opulento y sostenible. Sumérgete en lagunas azules y frentes de playa en medio de una ciudad vibrante: corre por el boardwalk al atardecer y recorre las lagunas a tu ritmo."
    },
    community: {
      title: "Una comunidad para conectar",
      text: "Descubre tu tribu en una comunidad vibrante, rodeada de posibilidades. Crea nuevas conexiones, disfruta de los detalles de una vida elevada y encuentra tu propio ritmo, en sintonía con la serenidad de la naturaleza."
    },
    privacy: {
      title: "Un refugio exclusivo, diseñado para ti",
      text: "Disfruta la privacidad de una comunidad cerrada rodeada de un frente de playa resplandeciente y vegetación. Aquí, los espacios elevados se integran con la belleza natural para ofrecer una experiencia que va más allá de lo ordinario."
    },
    views: {
      title: "La ventana a posibilidades infinitas",
      text: "Entra a tu santuario privado y déjate llevar por vistas panorámicas: aguas azules, verdor y una serenidad incomparable. Desde el murmullo de las hojas hasta el sonido del agua en la orilla, reconecta con la naturaleza y descubre vivir en su máxima expresión."
    },
    design: {
      title: "Abraza lo extraordinario",
      text: "Un mundo de diseño contemporáneo e infraestructura sostenible, con privacidad y conveniencia en el corazón de la ciudad. Materiales opulentos, detalles meticulosos y experiencias convertidas en arte para crear un santuario de sofisticación y elegancia."
    },
    location: {
      title: "Ubicación estratégica, cerca de todo",
      intro: "Sobha Hartland II se ubica con conexión directa a zonas clave, con acceso cómodo a los principales puntos de la ciudad.",
      latitude: 25.1856,
      longitude: 55.3113,
      nearby: [
        {
          name: "Downtown Dubai",
          latitude: 25.1972,
          longitude: 55.2744,
          category: "Distrito Urbano",
        },
        {
          name: "Dubai Design District",
          latitude: 25.1864,
          longitude: 55.2999,
          category: "Negocios y Diseño",
        },
        {
          name: "Dubai Creek Harbour",
          latitude: 25.2065,
          longitude: 55.3386,
          category: "Waterfront",
        },
        {
          name: "Ras Al Khor Wetlands",
          latitude: 25.1825,
          longitude: 55.3576,
          category: "Naturaleza",
        },
        {
          name: "Meydan / Nad Al Sheba",
          latitude: 25.1597,
          longitude: 55.3033,
          category: "Zona Residencial",
        },
      ]
    },
    project: {
      title: "Un hogar para cada deseo",
      text: "Sobha Hartland II es una comunidad residencial junto al agua, de 8 millones de pies², con amplias áreas verdes, jardines comunitarios y múltiples amenidades para respaldar un estilo de vida sostenible."
    },
    subCommunities: [
      {
        title: "Sobha Estates",
        text: "Comunidad privada y cerrada de villas dentro de Sobha Hartland II: tres clústeres con mansiones diseñadas de forma exclusiva, villas de 5 y 6 habitaciones, estacionamiento cerrado para tres autos, tres niveles, terraza rooftop y un amplio acceso tipo “entrance court”. Vive la fusión entre naturaleza y hogar dentro de un santuario verde con grandes lagunas."
      },
      {
        title: "Riverside Crescent",
        text: "Diseñado como una media luna, Riverside Crescent es un clúster de apartamentos único que redefine el waterfront living dentro de una comunidad verde. Con vistas envolventes al agua, áreas verdes y skyline, estos hogares inspiran un estilo de vida de lujo verdaderamente excepcional."
      }
    ],
    amenities: {
      title: "En Sobha Hartland II, las amenidades se vuelven necesidades",
      intro: "Todo está pensado para atender tus deseos y nutrirte con una experiencia de vida integral.",
      categories: [
        {
          name: "MIND / BODY / SOUL / COMMUNITY",
          items: [
            "Outdoor workstations, Co-working spaces",
            "Gardening zone, Central Square/Plaza, Boulevard con F&B",
            "Reading Room, Library, Observation deck / Bird watching",
            "Meditation lounge",
            "Cards room (chess, carrom), Garden, Water fountain",
            "Splash pad / Spray Park",
            "Submerged seating in the pool, Sun loungers, Day bed / Cabana",
            "Cycle path walkway",
            "Spa & massage rooms, Sauna, Steam",
            "Circuit training, Battle ropes + jumping blocks",
            "Indoor & outdoor gym, Aerobic zone",
            "Walking / jogging track",
            "Lotus pond, Sensory garden, Zen garden, Yoga zone",
            "Water bodies, Beach edge",
            "Multi-purpose space (market / food truck / kiosk / water feature)",
            "40-seater indoor movie theatre",
            "Open air theatre / amphitheatre, Theatre plaza",
            "Party terrace, Putting garden, Barbeque area",
            "Lawn with organic seating furniture",
            "Majlis (tensile gazebos)",
            "Sun deck"
          ]
        },
        {
          name: "CONVENIENCE / CREATIVITY / PLAY / PETS",
          items: [
            "Supermarket, ATM, Retail, Vending machines",
            "Music room, Art room",
            "Pool / Billiards / Snooker, Table tennis, Foosball",
            "Pickleball / Paddle tennis",
            "Rock climbing, Outdoor chess",
            "Obstacle course, Disc hockey",
            "Golf simulators",
            "Multi-purpose sports court, Squash court, Volleyball",
            "Indoor video game room, VR room",
            "Skate park",
            "Pet park, Pet washing station, Pet salon",
            "Pet concierge services, Pet obstruction course"
          ]
        }
      ]
    },
    developer: {
      title: "La forma Sobha de construir",
      intro: "Sobha Realty redefine el lujo residencial en Dubái con un enfoque implacable en calidad e innovación. Su modelo de “Backward Integration” integra diseño, ingeniería, abastecimiento, artesanía y control de calidad con estándares globales.",
      bullets: [
        "Diseño: conceptualización eficiente",
        "Ingeniería y construcción: precisión al detalle",
        "Material sourcing: tecnología y manufactura de nivel mundial",
        "Artesanía: atención impecable del concepto a la entrega",
        "Control de calidad: benchmark global"
      ]
    },
    faq: [
      {
        question: "¿Qué es Sobha Hartland II?",
        answer: "Una nueva comunidad de lujo frente al agua de 8 millones de pies², creada como legado del éxito de Sobha Hartland."
      },
      {
        question: "¿Qué tipo de estilo de vida ofrece?",
        answer: "Un equilibrio entre naturaleza, lagunas azules, boardwalk y vida urbana, con privacidad y amenidades para una experiencia integral."
      },
      {
        question: "¿Qué amenidades incluye la comunidad?",
        answer: "Desde coworking, jardines sensoriales y yoga, hasta cines, teatros, deportes, VR room y servicios pet-friendly."
      }
    ],
    disclaimers: {
      renders: "Todas las imágenes y renders son referenciales y pueden variar en el resultado final.",
      availability: "Precios, unidades y condiciones sujetos a disponibilidad y cambios sin previo aviso."
    },
    images: [
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO1/Amenities_Street_View.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO1/Community_Podium.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO1/Community_Street_View.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO1/Garden.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO1/Skate_Park.webp"
    ]
  },
  {
    id: "sobha-central",
    slug: "sobha-central",
    hero: {
      title: "Sobha Central",
      subtitle: "El nuevo epicentro de la vida urbana en Dubái",
      description: "Sobha Central redefine la experiencia de vivir en la ciudad, combinando ubicación estratégica, diseño contemporáneo y conectividad total. Un desarrollo icónico que pone todo al alcance, elevando el estándar del lifestyle urbano.",
      badges: [
        "Ubicación central estratégica",
        "Conectividad inmediata",
        "Diseño contemporáneo",
        "Desarrollo integrado"
      ],
      bgImage: "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO2/1.webp"
    },
    summary: {
      title: "El corazón vibrante de la ciudad",
      text: "Sobha Central es más que un desarrollo residencial: es un destino urbano diseñado para quienes buscan dinamismo, conectividad y una vida que fluye al ritmo de la ciudad. Aquí, la arquitectura moderna se encuentra con espacios sociales, comercio, bienestar y conectividad, creando un entorno integral que redefine el concepto de “vivir en el centro”."
    },
    concept: {
      title: "Conectado a todo lo que importa",
      text: "Sobha Central se posiciona estratégicamente con acceso directo a las principales arterias de Dubái, permitiendo movilidad fluida hacia distritos comerciales, centros financieros y destinos icónicos. La ubicación no solo facilita desplazamientos, sino que maximiza el valor a largo plazo gracias a su centralidad y accesibilidad."
    },
    community: {
      title: "Un desarrollo urbano integrado",
      text: "Sobha Central está concebido como una comunidad completa donde residencial, retail y espacios sociales conviven en perfecta armonía. El diseño del masterplan prioriza espacios abiertos, áreas sociales dinámicas, conectividad peatonal e infraestructura moderna integrada. Un entorno pensado para quienes valoran la eficiencia y el acceso inmediato a todo."
    },
    privacy: {
      title: "Espacios diseñados para la vida contemporánea",
      text: "Las residencias de Sobha Central destacan por su arquitectura elegante, líneas limpias y distribución eficiente. Cada unidad está diseñada para maximizar luz natural, funcionalidad y confort, ofreciendo un equilibrio entre sofisticación urbana y calidez residencial."
    },
    views: {
      title: "Donde la energía urbana se convierte en inspiración",
      text: "Vivir en Sobha Central significa formar parte de un entorno activo, dinámico y conectado. Desde encuentros sociales hasta espacios de relajación, cada rincón está pensado para adaptarse al ritmo de quienes viven intensamente la ciudad."
    },
    design: {
      title: "Innovación con propósito",
      text: "El desarrollo incorpora infraestructura moderna y planificación estratégica que garantizan eficiencia, sostenibilidad y calidad constructiva. Respaldado por la filosofía de integración total de Sobha Realty, cada detalle responde a estándares internacionales de excelencia."
    },
    location: {
      title: "Ubicación estratégica",
      intro: "Con acceso directo a las principales arterias de Dubái, permitiendo movilidad fluida hacia distritos comerciales, centros financieros y destinos icónicos.",
      latitude: 25.1760,
      longitude: 55.2890,
      nearby: [
        {
          name: "Sheikh Zayed Road",
          latitude: 25.1831,
          longitude: 55.2616,
          category: "Conectividad",
        },
        {
          name: "Downtown Dubai",
          latitude: 25.1972,
          longitude: 55.2744,
          category: "Distrito Urbano",
        },
        {
          name: "Business Bay",
          latitude: 25.1867,
          longitude: 55.2654,
          category: "Financiero",
        },
        {
          name: "Dubai Marina",
          latitude: 25.0800,
          longitude: 55.1404,
          category: "Lifestyle",
        },
      ]
    },
    project: {
      title: "Un hogar para cada deseo",
      text: "Sobha Central ofrece una variedad de residencias diseñadas para diferentes estilos de vida, desde apartamentos compactos hasta amplias unidades familiares."
    },
    subCommunities: [],
    amenities: {
      title: "Todo dentro de tu entorno",
      intro: "Sobha Central integra una amplia gama de amenidades que acompañan el ritmo de la vida moderna.",
      categories: [
        {
          name: "LIFESTYLE & WELLNESS",
          items: [
            "Espacios de bienestar",
            "Áreas sociales",
            "Retail integrado",
            "Zonas recreativas",
            "Áreas comunes contemporáneas"
          ]
        }
      ]
    },
    developer: {
      title: "Sobre Sobha Realty",
      intro: "Sobha Realty, fundada en 1976, se distingue por su modelo de “Backward Integration”, integrando diseño, ingeniería y construcción bajo control propio para asegurar calidad superior y consistencia en cada desarrollo.",
      bullets: [
        "Construido desde dentro",
        "Diseñado para perdurar",
        "Calidad superior garantizada",
        "Consistencia en cada desarrollo"
      ]
    },
    faq: [],
    disclaimers: {
      renders: "Las imágenes y renders son referenciales y pueden no representar el producto final.",
      availability: "Las especificaciones, amenidades y configuraciones están sujetas a cambios según aprobación de autoridades y decisiones del desarrollador."
    },
    images: [
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO2/1.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO2/2.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO2/3.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO2/4.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO2/5.webp"
    ]
  },
  {
    id: "sobha-sanctuary",
    slug: "sobha-sanctuary",
    hero: {
      title: "Sobha Sanctuary",
      subtitle: "A Life Within",
      description: "Un santuario donde la vida desacelera, la claridad regresa y el equilibrio se convierte en parte del día a día. No es un escape del mundo. Es una forma más profunda de vivir dentro de él.",
      badges: [
        "50,000+ árboles",
        "800,000 sq.ft. de parque central",
        "9+ km Wellness Loop",
        "20 km red de ciclismo"
      ],
      bgImage: "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO3/4_Arrival_Park.webp"
    },
    summary: {
      title: "Un lugar donde la vida vuelve a sentirse plena",
      text: "En un mundo que no se detiene, donde el ruido crece y los días se mezclan, Sobha Sanctuary nace como una respuesta: un entorno diseñado para respirar, reconectar y volver a sentir lo que significa estar plenamente vivo. No es algo que visitas. Es algo que te rodea cada día y transforma suavemente tu manera de vivir."
    },
    concept: {
      title: "Sanctuary (noun)",
      text: "Un espacio de serenidad donde la vida desacelera y la claridad regresa. Un entorno diseñado para calma, confort y restauración — no lejos de la vida, sino más profundamente dentro de ella."
    },
    community: {
      title: "Una comunidad diseñada para la vida a gran escala",
      text: "Sobha Sanctuary está concebido para albergar aproximadamente 20,000 familias, manteniendo siempre su esencia de tranquilidad, naturaleza y equilibrio diario. Un diseño urbano donde la naturaleza no es un complemento, sino el eje central de la experiencia."
    },
    privacy: {
      title: "Un entorno completo moldeado por el bienestar",
      text: "Sobha Sanctuary se construye sobre cuatro pilares esenciales: Naturaleza (integrada en cada rincón), Agua (que define la atmósfera), Wellness (espacios amplios y movimiento fluido) y Comunidad (un destino para la vida diaria)."
    },
    views: {
      title: "Naturaleza como experiencia diaria",
      text: "Aproximadamente el 50% del desarrollo está compuesto por espacios abiertos y verdes, conectados a través de corredores naturales, senderos forestales y jardines botánicos. Un parque central de 800,000 sq.ft. actúa como corazón verde del proyecto, generando espacios de contemplación, conexión y equilibrio."
    },
    design: {
      title: "Wellness construido dentro del día",
      text: "Espacios de entrenamiento al aire libre, canchas deportivas, campo de fútbol reglamentario, tenis y cricket forman parte de la experiencia diaria. También incluye áreas de bienestar inclusivas para adultos mayores, fomentando conexión social y rutinas saludables."
    },
    location: {
      title: "Ubicación estratégica",
      intro: "Un entorno diseñado para que la conexión ocurra de forma natural, con acceso directo a las principales vías de la ciudad.",
      latitude: 25.1850,
      longitude: 55.3100,
      nearby: [
        {
          name: "Meydan Racecourse",
          latitude: 25.1579,
          longitude: 55.2985,
          category: "Deporte",
        },
        {
          name: "Dubai Creek Harbour",
          latitude: 25.2065,
          longitude: 55.3386,
          category: "Waterfront",
        },
        {
          name: "Downtown Dubai",
          latitude: 25.1972,
          longitude: 55.2744,
          category: "Distrito Urbano",
        },
        {
          name: "Dubai International Airport",
          latitude: 25.2532,
          longitude: 55.3657,
          category: "Transporte",
        },
      ]
    },
    project: {
      title: "Agua como lenguaje del paisaje",
      text: "El diseño integra instalaciones de hidroterapia, saunas, salas de vapor, una laguna de playa estilo resort, plazas de esculturas de agua y un splash pad familiar. Un paisaje moldeado por el agua para generar calma, energía y descanso."
    },
    subCommunities: [
      {
        title: "Exclusive Villa Enclave",
        text: "Un enclave exclusivo de villas con amplios espacios, privacidad refinada y paisajes cuidadosamente curados."
      },
      {
        title: "Dynamic Neighbourhood",
        text: "Un vecindario dinámico para quienes prosperan con movimiento, energía y vitalidad diaria."
      },
      {
        title: "Calm Nature-Immersed Community",
        text: "Una comunidad de villas inmersa en naturaleza, diseñada para quienes buscan equilibrio, privacidad y vida restaurativa."
      }
    ],
    amenities: {
      title: "Vida social, familiar y sostenible",
      intro: "Desde clubes sociales vibrantes hasta zonas para mascotas y una infraestructura sostenible integrada.",
      categories: [
        {
          name: "WELLNESS & NATURE",
          items: [
            "5 km Leisure Loop",
            "9+ km Wellness Loop",
            "Hydrotherapy facilities",
            "Beach lagoon estilo resort",
            "Senderos forestales y jardines botánicos"
          ]
        },
        {
          name: "SOCIAL & FAMILY",
          items: [
            "Amphitheatre settings",
            "Co-working spaces",
            "Multi-purpose halls",
            "Zonas infantiles y juveniles",
            "Retail caminable y Farmers' market",
            "Pet friendly: jardines terapéuticos y zonas de juego"
          ]
        }
      ]
    },
    developer: {
      title: "Sobre Sobha Realty",
      intro: "Fundada en 1976, Sobha Realty ha construido durante casi cinco décadas bajo una filosofía de integración total (“Backward Integration”), controlando diseño, ingeniería y construcción para garantizar calidad duradera.",
      bullets: [
        "Built from Within",
        "Designed to Endure",
        "Calidad controlada",
        "Excelencia en ingeniería"
      ]
    },
    faq: [],
    disclaimers: {
      renders: "Las imágenes mostradas son referenciales y pueden no representar el producto final. Los renders son ilustrativos y están sujetos a cambios.",
      availability: "Las amenidades mencionadas son indicativas y pueden variar según aprobaciones y decisiones del desarrollador."
    },
    images: [
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO3/4_Arrival_Park.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO3/2_Green_Spine_1.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO3/3_TownHouse_park.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO3/5_Aerial.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO3/1_Pond.webp",
    ]
  },
  {
    id: "azizi-milan",
    slug: "azizi-milan",
    hero: {
      title: "Azizi Milan",
      subtitle: "A Statement of Style",
      description: "No es solo una residencia, es un ritmo italiano. Un lugar donde la naturaleza florece y el estilo vive en cada detalle. Inspirado en Milán. Diseñado para Dubái. Hecho para ti.",
      badges: [
        "Ciudad dentro de la ciudad",
        "Net-Zero Carbon City",
        "Canal lifestyle & Galleria District",
        "Business & Cultural Hub integrado"
      ],
      bgImage: "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO4/1_Aerial.webp"
    },
    summary: {
      title: "Inspirado en Milán. Diseñado para Dubái.",
      text: "Azizi Milan trae la elegancia effortless de Italia al skyline de Dubái. Una comunidad que captura el arte de vivir con estilo, donde moda, arquitectura y lifestyle convergen en perfecta armonía. Cada detalle ha sido meticulosamente diseñado para transformar cada momento en una experiencia sofisticada y memorable."
    },
    concept: {
      title: "Una ciudad dentro de la ciudad",
      text: "Más allá de su comunidad cerrada, Azizi Milan es un desarrollo autosuficiente que integra residencias modernas, retail y boulevard peatonal, distritos culturales, centro empresarial, espacios verdes y canal waterfront. Un ecosistema urbano completo con el flair de la moda milanesa."
    },
    community: {
      title: "Galleria District: El corazón vibrante del estilo",
      text: "Un destino inmersivo donde lujo, lifestyle y moda se encuentran. Más que un espacio comercial, es una experiencia que celebra la cultura, el diseño y la sofisticación italiana. Boutiques, fashion shows, pop-ups y eventos posicionan a Azizi Milan como la capital de la moda en Medio Oriente."
    },
    privacy: {
      title: "Canal District: La energía del distrito",
      text: "Un boulevard peatonal inspirado en las avenidas de Milán, con cafés, restaurantes y mercados de fin de semana. Desde restaurantes flotantes hasta terrazas al aire libre, cada rincón combina sofisticación europea con dinamismo urbano."
    },
    views: {
      title: "Arts & Culture Quarter",
      text: "Creatividad como estilo de vida. Un distrito dedicado al arte y la expresión cultural, con galerías, exposiciones, workshops y música en vivo. Un entorno donde la inspiración forma parte del día a día."
    },
    design: {
      title: "Net-Zero Carbon City",
      text: "Azizi Milan está diseñado como una ciudad de carbono neutral, incorporando infraestructura energéticamente eficiente, paneles solares, materiales de origen local, jardines verticales y green roofs en cada edificio. Un desarrollo que une diseño inteligente y responsabilidad ambiental."
    },
    location: {
      title: "Ubicación estratégica",
      intro: "Un nuevo mundo, al alcance. Ubicado estratégicamente en uno de los distritos más dinámicos de Dubái, garantizando conectividad total y valorización a largo plazo.",
      latitude: 25.0740,
      longitude: 55.3180,
      nearby: [
        {
          name: "Sheikh Mohammed Bin Zayed Road",
          latitude: 25.0792,
          longitude: 55.3227,
          category: "Conectividad",
        },
        {
          name: "IMG Worlds of Adventure",
          latitude: 25.0834,
          longitude: 55.2992,
          category: "Entretenimiento",
        },
        {
          name: "Global Village",
          latitude: 25.0715,
          longitude: 55.3084,
          category: "Lifestyle",
        },
        {
          name: "Dubai International Airport",
          latitude: 25.2532,
          longitude: 55.3657,
          category: "Transporte",
        },
        {
          name: "Al Maktoum International Airport",
          latitude: 24.8964,
          longitude: 55.1614,
          category: "Transporte",
        },
      ]
    },
    project: {
      title: "Residencias: Tipologías disponibles",
      text: "Disponibles en edificios high-rise y low-rise, con vistas al Community Park o al Waterfront Canal. Studios con diseño inteligente, 1 Bedroom con layout open-plan, 2 Bedroom ideales para vida familiar y 3 Bedroom con acabados sofisticados."
    },
    subCommunities: [
      {
        title: "Business Innovation Hub",
        text: "Ubicado dentro de torres de oficinas, el distrito empresarial ofrece centros de conferencias, espacios de coworking, internet de alta velocidad y áreas públicas diseñadas estratégicamente. Ideal para freelancers, startups y grandes corporaciones."
      },
      {
        title: "Wellness District",
        text: "Vida saludable, todos los días. Calles caminables, rooftops verdes y un estilo de vida centrado en el bienestar. Incluye Community Park, senderos naturales, running tracks y espacios de yoga al aire libre."
      }
    ],
    amenities: {
      title: "Amenidades Premium",
      intro: "Un mundo completo dentro de un solo destino, con infraestructura completa que incluye hoteles 5 estrellas, escuela internacional, hospital comunitario, mezquita y estación de metro conectada.",
      categories: [
        {
          name: "LEISURE & LIFESTYLE",
          items: [
            "Podium Pool & Urban Retreat",
            "BBQ Area",
            "Multi-purpose Hall",
            "Private Cinema",
            "Supermarkets & Nightlife District"
          ]
        },
        {
          name: "SPORTS & FAMILY",
          items: [
            "State-of-the-art Gym",
            "Tennis Courts",
            "Kids’ Playroom",
            "Games Room"
          ]
        }
      ]
    },
    developer: {
      title: "Sobre Azizi Developments",
      intro: "Fundada en 2007, Azizi Developments es uno de los desarrolladores líderes de Dubái, especializado en comunidades residenciales y proyectos mixtos estratégicamente ubicados en zonas prime de la ciudad.",
      bullets: [
        "Líder en Dubái",
        "Comunidades estratégicas",
        "Proyectos mixtos",
        "Zonas prime"
      ]
    },
    faq: [],
    disclaimers: {
      renders: "Las imágenes y renders son ilustrativos y pueden no representar el producto final.",
      availability: "Las especificaciones y amenidades están sujetas a cambios según decisiones del desarrollador y aprobaciones regulatorias."
    },
    images: [
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO4/1_Aerial.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO4/2_AZIZI_MILAN_CGI09_Opt_01_12k.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO4/3_Balcony_2.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO4/4_CAM14-BBQ.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO4/5_District_Galleria.webp"
    ]
  },
  {
    id: "azizi-venice",
    slug: "azizi-venice",
    hero: {
      title: "Azizi Venice",
      subtitle: "Dubai’s Next Legacy",
      description: "Una comunidad de lujo inspirada en el agua, donde la laguna cristalina, playas privadas y un boulevard vibrante crean una experiencia única en Dubái. Un oasis extraordinario dentro de Dubai South.",
      badges: [
        "136 hectáreas de desarrollo",
        "Crystal Lagoon navegable",
        "Boulevard retail de 1 km",
        "Opera House flotante (2,000 asientos)"
      ],
      bgImage: "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO5/1_23770800_AZIZI_Balcony_20230908.webp"
    },
    summary: {
      title: "Water-Inspired Living Like No Other",
      text: "Azizi Venice redefine el lujo junto al agua. Una comunidad nunca antes vista en Dubái, donde residentes, visitantes y turistas se reúnen para vivir una experiencia sensorial rodeada por el elixir de la vida: el agua. Aquí, la vida fluye con naturalidad entre lagunas cristalinas, playas privadas y un destino de entretenimiento sin precedentes."
    },
    concept: {
      title: "Una ciudad dentro del agua",
      text: "Con más de 136 hectáreas, Azizi Venice integra: Comunidad cerrada de villas frente a la laguna, Apartamentos residenciales de lujo, Crystal Lagoon navegable, Boulevard comercial vibrante. Todo conectado por una laguna cristalina apta para nadar y navegar."
    },
    community: {
      title: "Where Life Effortlessly Flows",
      text: "Despierta cada mañana con vistas a la laguna, rodeado de naturaleza exuberante y el sonido relajante del agua. Disfruta de: Kayak, Sailing, Caminatas frente a la playa, Días soleados junto al agua. Un entorno diseñado para reconectar con la naturaleza y contigo mismo."
    },
    privacy: {
      title: "A Boulevard, Brimming with Possibilities",
      text: "Un boulevard peatonal de 1 kilómetro frente al agua, con boutiques, restaurantes de clase mundial y cafés exclusivos. Un destino vibrante, activo todo el año, donde vivir, trabajar y disfrutar se integran en un solo espacio."
    },
    views: {
      title: "The Opera House – A Floating Masterpiece",
      text: "Una impresionante Opera House de 2,000 asientos ubicada en el corazón de la comunidad, sobre una plataforma flotante dentro de la laguna. Ofrece: Musicales, Conciertos, Ballet, Comedia, Eventos privados y bodas exclusivas. Un distrito cultural sin precedentes en Dubai South."
    },
    design: {
      title: "Luxury Apartments",
      text: "Diseñados con arquitectura contemporánea, acabados premium y ventanales de piso a techo que enmarcan la laguna. Características destacadas: Mármol Calcutta en áreas comunes, Elevadores con detalles dorados, Cocinas con waterfall countertops, Electrodomésticos integrados, Iluminación integrada, Baños con acabados en cuarzo."
    },
    location: {
      title: "En el corazón de Dubai South",
      intro: "Ubicado en Dubai South, el mayor desarrollo urbano integral de la ciudad, Azizi Venice forma parte de una metrópolis inteligente y futurista. Una ubicación estratégica pensada para el crecimiento y la valorización futura.",
      latitude: 24.8870,
      longitude: 55.1520,
      nearby: [
        {
          name: "Al Maktoum International Airport (DWC)",
          latitude: 24.8964,
          longitude: 55.1614,
          category: "Transporte",
        },
        {
          name: "Emirates Road",
          latitude: 24.9303,
          longitude: 55.2391,
          category: "Conectividad",
        },
        {
          name: "Expo City Dubai",
          latitude: 24.9576,
          longitude: 55.1510,
          category: "Negocios",
        },
        {
          name: "Sheikh Mohammed Bin Zayed Road",
          latitude: 24.9875,
          longitude: 55.2033,
          category: "Conectividad",
        },
      ]
    },
    project: {
      title: "Magnificent Mansions",
      text: "Ubicadas en una comunidad privada frente a la laguna, diseñadas para quienes buscan máxima exclusividad. Incluyen: Piscina infinity privada, Jardín paisajístico, Spa privado con hammam turco y sauna, Snow Room exclusiva, Gimnasio privado, Sala de entretenimiento, Piano room. Cada mansión fusiona diseño biophilic, tecnología avanzada y privacidad absoluta."
    },
    subCommunities: [
      {
        title: "A World of Wellness",
        text: "Azizi Venice integra: Pistas de jogging y ciclismo (5 km), Vertical garden con más de 1 millón de flores, Waterpark familiar, Hotel 5 estrellas frente a la laguna. Un entorno diseñado para bienestar, ocio y equilibrio."
      },
      {
        title: "Infraestructura Completa",
        text: "Azizi Venice integra dentro de su desarrollo: Hotel 5 estrellas, International School, Community Hospital, Mezquita. Un destino completamente autosuficiente."
      }
    ],
    amenities: {
      title: "Amenidades de clase mundial",
      intro: "Todo lo que necesitas para una vida de lujo.",
      categories: [
        {
          name: "WELLNESS & LEISURE",
          items: [
            "Infinity rooftop pool",
            "Kids play area",
            "Gym de última generación",
            "Pistas de jogging y ciclismo",
            "Waterpark familiar"
          ]
        },
        {
          name: "LUXURY & COMFORT",
          items: [
            "Spa privado",
            "Snow Room",
            "Cinema privado",
            "Opera House"
          ]
        },
        {
          name: "COMMUNITY",
          items: [
            "Hotel 5 estrellas",
            "International School",
            "Community Hospital",
            "Mezquita"
          ]
        }
      ]
    },
    developer: {
      title: "Sobre Azizi Developments",
      intro: "Azizi Developments, fundada en 2007, es una de las desarrolladoras más reconocidas de Dubái, especializada en comunidades residenciales y proyectos mixtos estratégicamente ubicados en zonas prime.",
      bullets: [
        "Fundada en 2007",
        "Comunidades residenciales",
        "Proyectos mixtos",
        "Ubicaciones prime"
      ]
    },
    faq: [],
    disclaimers: {
      renders: "Las imágenes y renders son ilustrativos y pueden no representar el producto final.",
      availability: "Las especificaciones, amenidades y configuraciones están sujetas a cambios según decisiones del desarrollador y aprobaciones regulatorias."
    },
    images: [
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO5/1_23770800_AZIZI_Balcony_20230908.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO5/2_A001_C1.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO5/3_AM04_Boulevard.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO5/4_AV_Boulevard_View.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO5/5_AZIZI_VENICE_BATHROOM_VIEW.webp"
    ]
  },
  {
    id: "azizi-monaco-mansions",
    slug: "azizi-monaco-mansions",
    hero: {
      title: "Azizi Monaco Mansions",
      subtitle: "A New Era of Mansion Living by the Waters",
      description: "Una nueva era de mansiones frente al agua comienza en Dubai South. Inspiradas en el encanto clásico europeo y diseñadas para el futuro, Monaco Mansions redefine la vida ultra exclusiva junto a la laguna cristalina.",
      badges: [
        "Waterfront Mansions privadas",
        "Comunidad cerrada ultra exclusiva",
        "Arquitectura clásica reinterpretada",
        "Diseño interior de mármol y cristal"
      ],
      bgImage: "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO6/1_Hall_Foyer.webp"
    },
    summary: {
      title: "Relish Majesty on Water’s Edge",
      text: "Azizi Monaco Mansions ofrece una experiencia residencial majestuosa, donde la elegancia clásica se encuentra con la serenidad del agua. Un santuario veneciano en medio de Dubai South, rodeado por lagunas cristalinas y playas privadas que redefinen el lujo."
    },
    concept: {
      title: "Twofold Escape, Infinite Relaxation",
      text: "Las mansiones se encuentran dentro de un enclave privado frente a la laguna, combinando privacidad absoluta con acceso al vibrante lifestyle del boulevard y la Opera House. Cada residencia está estratégicamente posicionada para ofrecer vistas panorámicas al agua y máxima exclusividad."
    },
    community: {
      title: "Entretenimiento y Cultura",
      text: "Como parte del desarrollo Azizi Venice, los residentes tienen acceso a un entorno cultural vibrante a pocos pasos de su puerta, incluyendo la Opera House flotante, el boulevard retail frente al agua y una selección de restaurantes y cafés premium."
    },
    privacy: {
      title: "A World of Wellness Within",
      text: "Un retiro de bienestar diseñado para revitalizar cuerpo y mente. Dentro de tu mansión encontrarás gimnasio state-of-the-art, spa privado, hammam turco, sauna escandinava y jacuzzi. Además, disfruta de una experiencia única en tu propia Snow Room, donde el techo se transforma en un espectáculo de nieve artificial."
    },
    views: {
      title: "The Eternal Bliss of Water",
      text: "Una experiencia sensorial donde el agua es protagonista. Cada mansión ofrece piscina infinity privada, acceso directo a playa privada, jardines paisajísticos y terrazas frente al agua."
    },
    design: {
      title: "A Palace of Classic Enchantment",
      text: "Con fachadas inspiradas en palacios europeos, arcos majestuosos y proporciones monumentales, cada mansión es una obra arquitectónica. Los interiores son una sinfonía de mármol y cristal, con suelos de lujo, candelabros, detalles dorados y acabados en materiales nobles como madera y oro cepillado."
    },
    location: {
      title: "A Venetian Oasis in Dubai South",
      intro: "Ubicado dentro del icónico desarrollo Azizi Venice, en Dubai South, Monaco Mansions forma parte de un destino estratégico pensado para el crecimiento futuro y la valorización de largo plazo.",
      latitude: 24.8870,
      longitude: 55.1520,
      nearby: [
        {
          name: "Al Maktoum International Airport",
          latitude: 24.8964,
          longitude: 55.1614,
          category: "Transporte",
        },
        {
          name: "Emirates Road",
          latitude: 24.9303,
          longitude: 55.2391,
          category: "Conectividad",
        },
        {
          name: "Expo City Dubai",
          latitude: 24.9576,
          longitude: 55.1510,
          category: "Negocios",
        },
        {
          name: "Sheikh Mohammed Bin Zayed Road",
          latitude: 24.9875,
          longitude: 55.2033,
          category: "Conectividad",
        },
      ]
    },
    project: {
      title: "The Pinnacle of Living",
      text: "Espacios diseñados para recibir, celebrar y vivir en grande. Las mansiones cuentan con amplias áreas sociales, ventanales de piso a techo, salones formales, piano room y áreas de entretenimiento privadas."
    },
    subCommunities: [],
    amenities: {
      title: "Exclusividad y Confort Absoluto",
      intro: "Un nivel de amenidades privadas nunca antes visto.",
      categories: [
        {
          name: "PRIVATE WELLNESS",
          items: [
            "Gimnasio state-of-the-art",
            "Spa privado",
            "Hammam turco",
            "Sauna escandinava",
            "Jacuzzi",
            "Snow Room exclusiva"
          ]
        },
        {
          name: "WATERFRONT LIVING",
          items: [
            "Piscina infinity privada",
            "Acceso directo a playa privada",
            "Jardines paisajísticos",
            "Terrazas frente al agua"
          ]
        },
        {
          name: "COMMUNITY ACCESS",
          items: [
            "Opera House flotante",
            "Boulevard retail",
            "Restaurantes y cafés premium"
          ]
        }
      ]
    },
    developer: {
      title: "Sobre Azizi Developments",
      intro: "Azizi Developments, fundada en 2007, es una de las desarrolladoras más prestigiosas de Dubái, especializada en proyectos residenciales y desarrollos mixtos estratégicamente ubicados en zonas prime.",
      bullets: [
        "Fundada en 2007",
        "Proyectos residenciales de lujo",
        "Desarrollos mixtos",
        "Zonas prime"
      ]
    },
    faq: [],
    disclaimers: {
      renders: "Las imágenes y renders son ilustrativos y pueden no representar el producto final.",
      availability: "Las especificaciones y amenidades están sujetas a cambios según decisiones del desarrollador y aprobaciones regulatorias."
    },
    images: [
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO6/1_Hall_Foyer.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO6/2_Men_Mejlis.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO6/3_G_Bedroom.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO6/4_Formal_Living.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO6/10_Basement.webp"
    ]
  },
  {
    id: "azizi-wasel",
    slug: "azizi-wasel",
    hero: {
      title: "Azizi Wasel",
      subtitle: "An Oceanic Retreat Along the Shores of Dubai Islands",
      description: "Un refugio oceánico frente al mar en Dubai Islands, donde las vistas infinitas al mar se combinan con el icónico skyline de Dubái. Azizi Wasel fusiona elegancia, confort moderno y una ubicación estratégica para quienes buscan equilibrio entre energía urbana y tranquilidad costera.",
      badges: [
        "Waterfront living en Dubai Islands",
        "Vistas panorámicas al mar y skyline",
        "Marina & Yacht Club planificado",
        "Hub emergente de inversión premium"
      ],
      bgImage: "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO7/Architectural_Render_01.webp"
    },
    summary: {
      title: "Un retiro oceánico en el nuevo frente marítimo de Dubái",
      text: "Azizi Wasel es el más reciente ícono residencial de Azizi Developments en Dubai Islands. Diseñado para maximizar las vistas al mar y al skyline, el proyecto ofrece una experiencia de vida costera sofisticada sin renunciar a la vibrante cultura de la ciudad. Una combinación perfecta entre serenidad frente al agua y conexión directa con las principales atracciones de Dubái."
    },
    concept: {
      title: "Elegancia frente al mar",
      text: "Azizi Wasel ofrece una selección exclusiva de Studios, 1, 2 y 3 dormitorios y Penthouses panorámicos. Cada unidad está diseñada con un enfoque moderno que maximiza las vistas al waterfront y al skyline, creando interiores luminosos y sofisticados."
    },
    community: {
      title: "Donde el mar y la ciudad convergen",
      text: "Disfruta de playas extensas, parques abiertos y espacios recreativos en un entorno tranquilo junto al mar. Azizi Wasel forma parte de un destino emergente pensado para convertirse en un nuevo epicentro de lujo, marina y estilo de vida náutico. Un paraíso para amantes de deportes acuáticos con acceso directo al mar abierto."
    },
    privacy: {
      title: "Un nuevo hub de inversión costera",
      text: "Dubai Islands está emergiendo como uno de los destinos más prometedores para lifestyle e inversión en Dubái. Con marina de clase mundial y club náutico planificado, Azizi Wasel se posiciona como una oportunidad estratégica dentro del crecimiento del frente marítimo de la ciudad."
    },
    views: {
      title: "Vistas Panorámicas",
      text: "Diseñado para maximizar las vistas al mar y al skyline, el proyecto ofrece una experiencia visual inigualable, conectando el azul del océano con la silueta moderna de Dubái."
    },
    design: {
      title: "Diseño Moderno y Sofisticado",
      text: "Interiores luminosos y sofisticados con un enfoque moderno que maximiza las vistas al waterfront y al skyline, creando espacios que invitan a la relajación y el disfrute."
    },
    location: {
      title: "Dubai Islands – El nuevo destino costero de lujo",
      intro: "Parte de un desarrollo visionario que redefine la costa de Dubái, Azizi Wasel se posiciona estratégicamente con excelente conectividad y acceso rápido a puntos clave de la ciudad. Además, conexión directa con Sheikh Zayed Road y principales hubs de transporte.",
      latitude: 25.3000,
      longitude: 55.3400,
      nearby: [
        {
          name: "Waterfront Market",
          latitude: 25.3033,
          longitude: 55.3350,
          category: "Comercio",
        },
        {
          name: "Port Rashid",
          latitude: 25.2793,
          longitude: 55.2710,
          category: "Puerto",
        },
        {
          name: "Dubai Hospital",
          latitude: 25.2369,
          longitude: 55.3222,
          category: "Salud",
        },
        {
          name: "Dubai International Airport",
          latitude: 25.2532,
          longitude: 55.3657,
          category: "Transporte",
        },
        {
          name: "Dubai Frame",
          latitude: 25.2355,
          longitude: 55.3003,
          category: "Landmark",
        },
        {
          name: "City Centre Deira",
          latitude: 25.2515,
          longitude: 55.3333,
          category: "Comercio",
        },
      ]
    },
    project: {
      title: "Residencias Exclusivas",
      text: "Azizi Wasel ofrece una selección exclusiva de Studios, 1, 2 y 3 dormitorios y Penthouses panorámicos."
    },
    subCommunities: [],
    amenities: {
      title: "Community Amenities",
      intro: "Azizi Wasel integra amenidades diseñadas para la vida moderna. Un entorno seguro, funcional y diseñado para familias y profesionales.",
      categories: [
        {
          name: "LEISURE & LIFESTYLE",
          items: [
            "Cinema",
            "Clubhouse",
            "Retail spaces",
            "Swimming pools"
          ]
        },
        {
          name: "FAMILY & FITNESS",
          items: [
            "Fully-equipped gym",
            "Children’s play area",
            "Amplio estacionamiento",
            "Seguridad 24 horas"
          ]
        }
      ]
    },
    developer: {
      title: "Sobre Azizi Developments",
      intro: "Azizi Developments es una de las desarrolladoras líderes de Dubái, reconocida por crear comunidades residenciales y proyectos mixtos estratégicamente ubicados en zonas prime.",
      bullets: [
        "Líder en Dubái",
        "Comunidades residenciales",
        "Proyectos mixtos",
        "Ubicaciones prime"
      ]
    },
    faq: [],
    disclaimers: {
      renders: "Las imágenes y renders son ilustrativos y pueden no representar el producto final.",
      availability: "Las especificaciones y amenidades están sujetas a cambios según decisiones del desarrollador y aprobaciones regulatorias."
    },
    images: [
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO7/Architectural_Render_01.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO7/Architectural_Render_02.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO7/Architectural_Render_03.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO7/Architectural_Render_04.webp",
      "https://real-state-landing.s3.us-east-1.amazonaws.com/propiedades/PROYECTO7/Architectural_Render_05.webp"
    ]
  }
];

const propertyContentEn: Record<string, DeepPartial<Property>> = {
  "sobha-hartland-ii": {
    hero: {
      subtitle: "The epitome of luxury waterfront living.",
      description:
        "Sobha Hartland II is a new 8 million sq. ft. waterfront residential district, created as the continuation of Sobha Hartland’s success. A premium lifestyle close to Dubai’s main hubs.",
      badges: [
        "Luxury waterfront community",
        "8 million sq. ft.",
        "Close to the city core",
      ],
    },
    summary: {
      title: "The best of the city... with calm by the water",
      text: "Live the perfect combination: malls, business districts, and hotspots just minutes away, while returning home to an urban waterfront paradise.",
    },
    concept: {
      title: "Serene nature. Total waterfront calm.",
      text: "Sobha Hartland II presents a unique blend of opulent and sustainable waterfront living, with blue lagoons and beach edges in the middle of a vibrant city.",
    },
    community: {
      title: "A community built to connect",
      text: "Discover your tribe in a vibrant community full of possibilities. Build new connections and enjoy an elevated lifestyle in harmony with nature.",
    },
    privacy: {
      title: "An exclusive retreat designed for you",
      text: "Enjoy the privacy of a gated community surrounded by luminous beachfront and greenery. Elevated spaces blend with natural beauty for an extraordinary daily experience.",
    },
    views: {
      title: "A window to endless possibilities",
      text: "Step into your private sanctuary and embrace panoramic views: blue waters, greenery, and unmatched serenity.",
    },
    design: {
      title: "Embrace the extraordinary",
      text: "A world of contemporary design and sustainable infrastructure, where premium materials and refined details shape a sophisticated sanctuary.",
    },
    location: {
      title: "Strategic location close to everything",
      intro: "Sobha Hartland II is directly connected to key zones, with smooth access to the city’s main destinations.",
    },
    project: {
      title: "A home for every desire",
      text: "Sobha Hartland II is an 8 million sq. ft. waterfront residential community with generous green spaces, community gardens, and premium lifestyle amenities.",
    },
    subCommunities: [
      {
        title: "Sobha Estates",
        text: "A private gated villa enclave within Sobha Hartland II, featuring bespoke 5- and 6-bedroom mansions with rooftop terraces and grand arrival courts.",
      },
      {
        title: "Riverside Crescent",
        text: "A distinctive crescent-shaped apartment cluster that redefines waterfront living with panoramic water, greenery, and skyline views.",
      },
    ],
    amenities: {
      title: "At Sobha Hartland II, amenities become essentials",
      intro: "Everything is designed to meet your needs and support a complete lifestyle.",
    },
    developer: {
      title: "The Sobha way of building",
      intro:
        "Sobha Realty redefines residential luxury in Dubai with an uncompromising focus on quality and innovation.",
      bullets: [
        "Design: efficient conceptualization",
        "Engineering and construction: precision in every detail",
        "Material sourcing: world-class technology and manufacturing",
        "Craftsmanship: excellence from concept to delivery",
        "Quality control: global benchmark standards",
      ],
    },
    disclaimers: {
      renders: "All images and renders are illustrative and may vary from the final delivered product.",
      availability: "Prices, unit availability, and terms are subject to change without prior notice.",
    },
    faq: [
      {
        question: "What is Sobha Hartland II?",
        answer:
          "A new 8 million sq. ft. luxury waterfront community built as the next chapter of Sobha Hartland.",
      },
      {
        question: "What kind of lifestyle does it offer?",
        answer:
          "A balance of nature and urban access, with blue lagoons, boardwalks, privacy, and world-class amenities.",
      },
      {
        question: "What amenities are included?",
        answer:
          "From coworking, sensory gardens and yoga to cinemas, theaters, sports, VR rooms, and pet-friendly services.",
      },
    ],
  },
  "sobha-central": {
    hero: {
      subtitle: "The new epicenter of urban living in Dubai",
      description:
        "Sobha Central redefines city living by combining strategic location, contemporary design, and seamless connectivity.",
      badges: [
        "Strategic central location",
        "Immediate connectivity",
        "Contemporary design",
        "Integrated development",
      ],
    },
    summary: {
      title: "The city’s vibrant core",
      text: "Sobha Central is more than a residential development: it is an urban destination built for people who seek dynamism, connectivity, and city-paced living.",
    },
    concept: {
      title: "Connected to everything that matters",
      text: "Sobha Central offers direct access to Dubai’s main arteries, ensuring seamless mobility to business districts, financial hubs, and iconic destinations.",
    },
    community: {
      title: "An integrated urban development",
      text: "Residential, retail, and social spaces coexist in balance. The masterplan prioritizes open spaces, pedestrian connectivity, and integrated modern infrastructure.",
    },
    privacy: {
      title: "Spaces designed for contemporary living",
      text: "Residences stand out for elegant architecture, clean lines, and efficient layouts that maximize natural light, function, and comfort.",
    },
    views: {
      title: "Where urban energy becomes inspiration",
      text: "Living in Sobha Central means being part of an active and connected environment designed for social, dynamic, and modern lifestyles.",
    },
    design: {
      title: "Innovation with purpose",
      text: "The development combines modern infrastructure with strategic planning to deliver efficiency, sustainability, and lasting construction quality.",
    },
    location: {
      title: "Strategic location",
      intro:
        "Direct access to Dubai’s main arteries, enabling smooth mobility to business hubs, financial centers, and iconic destinations.",
    },
    project: {
      title: "A home for every desire",
      text: "Sobha Central offers a broad mix of residences, from compact apartments to spacious family-oriented layouts.",
    },
    developer: {
      title: "About Sobha Realty",
      intro: "Founded in 1976, Sobha Realty is known for its Backward Integration model, unifying design, engineering, and construction under one quality system.",
      bullets: [
        "Built from within",
        "Designed to endure",
        "Superior quality assurance",
        "Consistency in every development",
      ],
    },
    disclaimers: {
      renders: "Images and renders are illustrative and may not represent the final delivered product.",
      availability: "Specifications, amenities, and configurations are subject to change according to approvals and developer decisions.",
    },
  },
  "sobha-sanctuary": {
    hero: {
      subtitle: "A Life Within",
      description:
        "A sanctuary where life slows down, clarity returns, and balance becomes part of everyday living.",
      badges: [
        "50,000+ trees",
        "800,000 sq.ft. central park",
        "9+ km Wellness Loop",
        "20 km cycling network",
      ],
    },
    summary: {
      title: "A place where life feels whole again",
      text: "In a world that never slows down, Sobha Sanctuary offers space to breathe, reconnect, and rediscover what it means to feel fully alive.",
    },
    concept: {
      title: "Sanctuary (noun)",
      text: "A space of serenity where life slows down and clarity returns. Not far from life, but deeper within it.",
    },
    community: {
      title: "A community designed for life at scale",
      text: "Planned for approximately 20,000 families while preserving its essence of tranquility, nature, and daily balance.",
    },
    privacy: {
      title: "A complete environment shaped by wellness",
      text: "The project is built on four pillars: Nature, Water, Wellness, and Community, integrated into everyday experience.",
    },
    views: {
      title: "Nature as a daily experience",
      text: "Around 50% of the development is dedicated to open green spaces linked by natural corridors, forest trails, and botanical gardens.",
    },
    design: {
      title: "Wellness built into everyday life",
      text: "Outdoor training zones, sports courts, football, tennis, and wellness spaces for all generations are part of daily life.",
    },
    location: {
      title: "Strategic location",
      intro:
        "An environment designed for natural connection, with direct access to the city’s main routes.",
    },
    project: {
      title: "Water as the language of the landscape",
      text: "Hydrotherapy facilities, saunas, steam rooms, resort-style beach lagoon, and water plazas shape an environment of calm and vitality.",
    },
    amenities: {
      title: "Social, family, and sustainable living",
      intro: "From vibrant social clubs to pet-friendly zones and integrated sustainable infrastructure.",
    },
    developer: {
      title: "About Sobha Realty",
      intro: "Founded in 1976, Sobha Realty has spent nearly five decades building under a fully integrated quality philosophy.",
      bullets: [
        "Built from within",
        "Designed to endure",
        "Quality-controlled execution",
        "Engineering excellence",
      ],
    },
    disclaimers: {
      renders: "Displayed images are illustrative and may not represent the final product. Renders are subject to change.",
      availability: "Mentioned amenities are indicative and may vary according to approvals and developer decisions.",
    },
  },
  "azizi-milan": {
    hero: {
      subtitle: "A Statement of Style",
      description:
        "Not just a residence, but an Italian rhythm of life. Inspired by Milan, designed for Dubai, crafted for those who value style and substance.",
      badges: [
        "A city within a city",
        "Net-Zero Carbon City",
        "Canal lifestyle & Galleria District",
        "Integrated business and culture hub",
      ],
    },
    summary: {
      title: "Inspired by Milan. Designed for Dubai.",
      text: "Azizi Milan brings Italian effortless elegance to Dubai’s skyline, where fashion, architecture, and lifestyle converge.",
    },
    concept: {
      title: "A city within a city",
      text: "Beyond a gated community, Azizi Milan is a self-sufficient ecosystem integrating residences, retail, business, culture, green space, and waterfront living.",
    },
    community: {
      title: "Galleria District: The vibrant heart of style",
      text: "An immersive destination where luxury, fashion, and culture meet through boutiques, events, and curated lifestyle experiences.",
    },
    privacy: {
      title: "Canal District: The pulse of the district",
      text: "A walkable boulevard inspired by Milanese avenues, with cafes, restaurants, and markets that blend European sophistication with urban energy.",
    },
    views: {
      title: "Arts & Culture Quarter",
      text: "A district dedicated to creativity, featuring galleries, exhibitions, workshops, and live performances.",
    },
    design: {
      title: "Net-Zero Carbon City",
      text: "Designed as a carbon-neutral city with efficient infrastructure, solar integration, local materials, and green roofs.",
    },
    location: { title: "Strategic location" },
    project: {
      title: "Residences: Available typologies",
      text: "Available in high-rise and low-rise buildings with park or canal views, including studios, 1BR, 2BR, and 3BR residences.",
    },
    subCommunities: [
      {
        title: "Business Innovation Hub",
        text: "A district within office towers offering conference centers, coworking spaces, and high-speed connectivity for startups and established companies.",
      },
      {
        title: "Wellness District",
        text: "A walkable, wellness-led environment with green rooftops, community parks, natural trails, and outdoor yoga areas.",
      },
    ],
    amenities: {
      title: "Premium Amenities",
      intro:
        "A complete world in one destination, including 5-star hospitality, international education, healthcare, and metro connectivity.",
    },
    developer: { title: "About Azizi Developments" },
    disclaimers: {
      renders: "Images and renders are illustrative and may not represent the final delivered product.",
      availability: "Specifications and amenities are subject to change according to developer decisions and regulatory approvals.",
    },
  },
  "azizi-venice": {
    hero: {
      subtitle: "Dubai’s Next Legacy",
      description:
        "A luxury community inspired by water, where crystal lagoons, private beaches, and a vibrant boulevard create a one-of-a-kind Dubai lifestyle.",
      badges: [
        "136 hectares of development",
        "Navigable Crystal Lagoon",
        "1 km retail boulevard",
        "Floating Opera House (2,000 seats)",
      ],
    },
    summary: {
      title: "Water-Inspired Living Like No Other",
      text: "Azizi Venice redefines waterfront luxury with crystal lagoons, private beaches, and a destination-level entertainment ecosystem.",
    },
    concept: {
      title: "A city within the water",
      text: "With over 136 hectares, Azizi Venice integrates villas, luxury apartments, a navigable crystal lagoon, and a vibrant retail boulevard.",
    },
    community: {
      title: "Where life effortlessly flows",
      text: "Wake up to lagoon views and enjoy beachside walks, kayaking, and sailing in a setting designed for daily connection with nature.",
    },
    privacy: {
      title: "A boulevard brimming with possibilities",
      text: "A 1 km walkable waterfront boulevard with world-class dining, boutiques, and year-round lifestyle experiences.",
    },
    views: {
      title: "The Opera House – A floating masterpiece",
      text: "A 2,000-seat floating Opera House at the heart of the community, hosting performances, events, and private experiences.",
    },
    design: {
      title: "Luxury Apartments",
      text: "Contemporary architecture, premium finishes, floor-to-ceiling glazing, and curated interiors designed around lagoon views.",
    },
    location: {
      title: "In the heart of Dubai South",
      intro:
        "Located in Dubai South, the city’s largest integrated urban development, built for future growth and long-term value appreciation.",
    },
    project: {
      title: "Magnificent Mansions",
      text: "Private lagoonfront mansions with infinity pools, landscaped gardens, private spa zones, entertainment rooms, and advanced design.",
    },
    subCommunities: [
      {
        title: "A World of Wellness",
        text: "The project includes jogging and cycling tracks, a vertical garden with over a million flowers, family waterpark, and a 5-star lagoonfront hotel.",
      },
      {
        title: "Complete Infrastructure",
        text: "Integrated essentials include a 5-star hotel, international school, community hospital, and mosque within the development.",
      },
    ],
    amenities: {
      title: "World-class amenities",
      intro: "Everything needed for an elevated lifestyle in one place.",
    },
    developer: {
      title: "About Azizi Developments",
      intro:
        "Founded in 2007, Azizi Developments is one of Dubai’s leading developers, focused on premium residential and mixed-use communities.",
      bullets: ["Founded in 2007", "Residential communities", "Mixed-use projects", "Prime locations"],
    },
    disclaimers: {
      renders: "Images and renders are illustrative and may not represent the final delivered product.",
      availability: "Specifications, amenities, and configurations are subject to change according to developer decisions and regulatory approvals.",
    },
  },
  "azizi-monaco-mansions": {
    hero: {
      subtitle: "A New Era of Mansion Living by the Waters",
      description:
        "A new era of ultra-exclusive lagoonfront mansions begins in Dubai South, blending classical elegance with future-forward luxury.",
      badges: [
        "Private waterfront mansions",
        "Ultra-exclusive gated community",
        "Reimagined classical architecture",
        "Marble and crystal interiors",
      ],
    },
    summary: {
      title: "Relish Majesty on Water’s Edge",
      text: "Azizi Monaco Mansions delivers a majestic residential experience where timeless elegance meets lagoonfront serenity.",
    },
    concept: {
      title: "Twofold Escape, Infinite Relaxation",
      text: "A private waterfront enclave offering absolute privacy with direct access to the vibrant boulevard and cultural core of Azizi Venice.",
    },
    community: {
      title: "Entertainment & Culture",
      text: "Residents enjoy immediate access to a dynamic cultural district with the floating Opera House, premium dining, and curated retail.",
    },
    privacy: {
      title: "A World of Wellness Within",
      text: "Each mansion includes private wellness facilities such as gym, spa, Turkish hammam, sauna, jacuzzi, and a signature snow room.",
    },
    views: {
      title: "The Eternal Bliss of Water",
      text: "Infinity pool, private beach access, landscaped gardens, and generous waterfront terraces define a fully immersive water experience.",
    },
    design: {
      title: "A Palace of Classic Enchantment",
      text: "European palace-inspired facades, monumental proportions, and curated interiors in marble, crystal, and noble materials create a timeless statement.",
    },
    location: { title: "A Venetian Oasis in Dubai South" },
    project: {
      title: "The Pinnacle of Living",
      text: "Grand social areas, floor-to-ceiling windows, formal lounges, piano room, and private entertainment zones built for elevated living.",
    },
    amenities: {
      title: "Absolute exclusivity and comfort",
      intro: "A level of private amenities rarely seen in the region.",
    },
    developer: {
      title: "About Azizi Developments",
      intro:
        "Azizi Developments, founded in 2007, is one of Dubai’s most recognized developers in premium residential and mixed-use projects.",
      bullets: ["Founded in 2007", "Luxury residential projects", "Mixed-use developments", "Prime locations"],
    },
    disclaimers: {
      renders: "Images and renders are illustrative and may not represent the final delivered product.",
      availability: "Specifications and amenities are subject to change according to developer decisions and regulatory approvals.",
    },
  },
  "azizi-wasel": {
    hero: {
      subtitle: "An Oceanic Retreat Along the Shores of Dubai Islands",
      description:
        "A coastal retreat at Dubai Islands, where infinite sea views meet Dubai’s iconic skyline in a refined residential setting.",
      badges: [
        "Waterfront living at Dubai Islands",
        "Panoramic sea and skyline views",
        "Planned marina & yacht club",
        "Emerging premium investment hub",
      ],
    },
    summary: {
      title: "An ocean retreat in Dubai’s new luxury waterfront",
      text: "Azizi Wasel is a refined coastal address combining sea views, skyline perspectives, and direct connectivity to Dubai’s key hubs.",
    },
    concept: {
      title: "Seaside elegance",
      text: "A curated selection of studios, 1–3 bedroom residences, and panoramic penthouses designed to maximize waterfront and skyline views.",
    },
    community: {
      title: "Where sea and city converge",
      text: "Enjoy beaches, parks, and lifestyle amenities in a calm seaside setting that still connects directly to Dubai’s urban energy.",
    },
    privacy: {
      title: "A new coastal investment hub",
      text: "Dubai Islands is emerging as one of the city’s most promising lifestyle and investment destinations, with marina and yachting infrastructure.",
    },
    views: {
      title: "Panoramic Views",
      text: "Architecture and layouts are crafted to frame both the open sea and Dubai skyline with expansive visual continuity.",
    },
    design: {
      title: "Modern and Sophisticated Design",
      text: "Bright interiors and contemporary planning create elegant spaces built for comfort, lifestyle, and long-term value.",
    },
    location: {
      title: "Dubai Islands – The new luxury coastal destination",
      intro:
        "Part of a visionary development reshaping Dubai’s coastline, with excellent connectivity and fast access to key city destinations.",
    },
    project: {
      title: "Exclusive Residences",
      text: "Azizi Wasel offers studios, 1-, 2-, and 3-bedroom residences, plus panoramic penthouses crafted for modern coastal living.",
    },
    amenities: {
      title: "Community Amenities",
      intro: "Designed for modern family and professional lifestyles in a secure, functional environment.",
    },
    developer: {
      title: "About Azizi Developments",
      intro:
        "Azizi Developments is recognized for creating high-quality residential communities and mixed-use projects in strategic prime locations.",
      bullets: ["Leading developer in Dubai", "Residential communities", "Mixed-use projects", "Prime locations"],
    },
    disclaimers: {
      renders: "Images and renders are illustrative and may not represent the final delivered product.",
      availability: "Specifications and amenities are subject to change according to developer decisions and regulatory approvals.",
    },
  },
  "body-sense": {
    hero: {
      subtitle: "Living Wellness by the Ocean",
      description:
        "A next-generation oceanfront wellness complex designed to restore body and mind through high-impact experiences: spa, biohacking, and recovery protocols in an unmatched natural Bali setting.",
      badges: ["Wellness Living", "Oceanfront", "High ROI"],
    },
    summary: {
      title: "Quick Summary",
      text: "An exclusive villa and suite project with ocean views in Pandawa Beach, combining living, investment, and holistic wellness surrounded by tropical nature and Indian Ocean panoramas.",
    },
    concept: {
      title: "Next-generation wellness retreat",
      text: "Body Sense redefines oceanfront living through a holistic wellness approach that integrates biohacking technologies, recovery spaces, and advanced treatments within a premium residential community. It is not just a place to live or invest, but an environment dedicated to full rejuvenation where each space is designed to balance rhythm, energy, and integral health.",
    },
    location: {
      title: "Pandawa Beach, Bali",
      intro: "Set right by the ocean at Pandawa Beach, one of Bali’s most prestigious and sought-after destinations, known for crystal-clear waters, white sand, and a calm yet sophisticated atmosphere.",
      nearby: [
        {
          name: "Pandawa Beach",
          latitude: -8.8446,
          longitude: 115.1882,
          category: "Beach",
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
          category: "Sports",
        },
      ],
    },
    project: {
      title: "Villas & Suites",
      text: "Body Sense consists of villas and apartments built on a panoramic cliff, featuring ocean views and a design that combines privacy, comfort, and direct connection to nature.",
    },
    subCommunities: [
      {
        title: "Deluxe SPA Suite",
        text: "From $155,000. 15 units available. 50 m² with balcony and ocean view. Private infrared sauna and copper bathtub for deep detox. Equipped with premium wellness amenities. Estimated ROI ~14.35%. Highlight: an intimate space perfect for daily rest and regeneration rituals.",
      },
      {
        title: "Premium SPA Suite",
        text: "From $115,000. 36 units available. 32 m² with ocean, pool, or nature views. Infrared lamp and spaces designed for daily wellness. Estimated ROI ~14.40%. Highlight: ideal for residential investment with strong profitability potential.",
      },
    ],
    amenities: {
      title: "Complex Infrastructure",
      intro: "Body Sense offers premium infrastructure designed to enhance the physical and mental health of residents and guests.",
      categories: [
        {
          name: "INFRASTRUCTURE",
          items: [
            "Pool with lounge area and panoramic views",
            "Restaurant with a healthy, balanced menu",
            "Functional gym",
            "Relax zones & ocean-view terraces",
            "Full spa with snow room, salt room, and cold plunge",
          ],
        },
        {
          name: "FULL-SERVICE SPA",
          items: [
            "Advanced infrared sauna",
            "Biohacking and restoration treatments",
            "Snow & salt rooms + cold plunge",
          ],
        },
      ],
    },
    developer: {
      title: "About IJI Group Estate",
      intro: "IJI Group Estate has operated in Bali for over 15 years, developing and managing premium villas and apartments focused on hospitality service, high occupancy, and full transparency.",
      bullets: [
        "15 years of experience",
        "Hospitality-focused model",
        "High occupancy performance",
        "Full transparency",
      ],
    },
    disclaimers: {
      renders: "Images, renders, and amenities are illustrative and may vary in final execution based on developer decisions and regulatory approvals.",
      availability: "",
    },
    description:
      "Oceanfront wellness complex in Pandawa Beach with suites and villas designed for biohacking, spa, and high profitability in Bali.",
  },
  "rahya-villas-complex": {
    hero: {
      subtitle: "Your Oceanview Villa Retreat in Bali",
      description:
        "An exclusive collection of premium ocean-view villas in the picturesque Bukit area, just 500 m from Pandawa Beach. Ideal for both living and investing with stable returns in a top tourism destination.",
      badges: ["Oceanview Villas", "Smart Investment", "High Occupancy"],
    },
    summary: {
      title: "Quick Summary",
      text: "Modern villas and apartments with panoramic Indian Ocean views, surrounded by tropical nature and tranquility, combining a relaxed lifestyle with strong rental-income potential.",
    },
    concept: {
      title: "The Concept",
      text: "Rahya Villas Complex is a boutique luxury development for those seeking quality of life, oceanfront relaxation, and smart investment opportunities in Bali. Each unit offers modern comfort, privacy, and spectacular sea views that maximize both residential and rental experience.",
    },
    location: {
      title: "Pandawa Beach, Bukit, Bali",
      intro: "Located in the southern Bali hills, just 500 m from the famous Pandawa Beach, one of the island’s most prestigious enclaves known for white sand, crystal-clear waters, and an exclusive atmosphere.",
      nearby: [
        {
          name: "Pandawa Beach",
          latitude: -8.8446,
          longitude: 115.1882,
          category: "Beach",
        },
        {
          name: "Green Bowl Beach",
          latitude: -8.8458,
          longitude: 115.1727,
          category: "Beach",
        },
        {
          name: "Uluwatu Area (Bukit Lifestyle)",
          latitude: -8.8297,
          longitude: 115.087,
          category: "Lifestyle",
        },
      ],
    },
    project: {
      title: "Luxury Villas",
      text: "Rahya Villas Complex features a collection of two villa typologies, each carefully designed to deliver maximum comfort, contemporary style, and direct connection to Bali’s oceanfront lifestyle.",
    },
    subCommunities: [
      {
        title: "Rahya Villa",
        text: "Detached villas. 2 bedrooms + 3 bathrooms. 2 floors with parking and private pool. Approx. 112 m². Estimated annual rental model: ~$64,800/year. Ideal as a vacation residence, second home, or high-yield investment unit.",
      },
      {
        title: "Rahya Villa with Rooftop (Ocean View)",
        text: "Premium villas with rooftop and panoramic sea views. 2 bedrooms + 3 bathrooms. Parking and private pool. Approx. 184 m². Approx. daily rental/year: ~$38,880 (based on market performance). A more exclusive option with wide ocean views and private rooftop.",
      },
    ],
    amenities: {
      title: "Infrastructure & Amenities",
      intro: "The complex provides facilities designed for lifestyle, tourism, and profitability.",
      categories: [
        {
          name: "LIFESTYLE",
          items: [
            "Private pool per villa",
            "Dedicated parking",
            "Natural surroundings near Pandawa Beach",
            "Close to restaurants, cafes, and local entertainment",
          ],
        },
      ],
    },
    developer: {
      title: "About IJI Group Estate",
      intro: "IJI Group Estate operates in Bali with over 15 years of experience, specializing in premium development and management with high effective return performance, full property management services, and owner support at every stage.",
      bullets: [
        "15 years of experience",
        "High performance",
        "Property management",
        "Owner support",
      ],
    },
    disclaimers: {
      renders: "Images, renders, and amenities are illustrative and subject to change based on developer decisions or regulatory permissions.",
      availability: "Estimated profitability is based on property management averages and local tourism occupancy performance.",
    },
    description:
      "Modern villas with private pool 500 m from Pandawa Beach, ideal for living or generating income with high tourist occupancy.",
  },
  "eighth-sense": {
    hero: {
      subtitle: "Open Up New Senses",
      description:
        "An exclusive cliffside residential complex in Bali, with modern-design villas and apartments, panoramic ocean views, and spaces created to live in harmony with nature.",
      badges: ["Cliffside Living", "Panoramic Ocean View", "High Yield"],
    },
    summary: {
      title: "Quick Summary",
      text: "Eighth Sense offers 60 apartments and 8 ocean-view villas on Bali’s iconic coast, combining privacy, comfort, contemporary design, and high investment potential.",
    },
    concept: {
      title: "The Concept",
      text: "A community built on a sensory principle: each space reflects and awakens one of the 'eight senses', designed to maximize daily comfort, connection with nature, and contemporary oceanfront lifestyle. The project combines panoramic views, premium materials, and infrastructure built for both living and high-yield income generation.",
    },
    location: {
      title: "Pandawa Beach, Bali",
      intro: "Located on a cliff facing the Indian Ocean in Bali’s prestigious Bukit Peninsula, just 3 minutes from Pandawa Beach.",
      nearby: [
        {
          name: "Pandawa Beach",
          latitude: -8.8446,
          longitude: 115.1882,
          category: "Beach",
        },
        {
          name: "Melasti Beach",
          latitude: -8.8442,
          longitude: 115.1613,
          category: "Beach",
        },
        {
          name: "Nusa Dua",
          latitude: -8.8078,
          longitude: 115.23,
          category: "Premium Area",
        },
      ],
    },
    project: {
      title: "Villas & Apartments",
      text: "Eighth Sense spans a 5,000 m² plot on Bali’s southern coast, with architecture designed to fully capture ocean views and sea breeze.",
    },
    subCommunities: [
      {
        title: "1-Bedroom Villas with Rooftop",
        text: "Starting from $280,000. 8 villas total. Approx. 143 m². Private pool and rooftop with ocean view. Estimated ROI ~15%.",
      },
      {
        title: "1-Bedroom Villas",
        text: "Starting from $199,000. 5 villas total. Approx. 60 m². Private pool and premium design. Estimated ROI ~15%.",
      },
      {
        title: "1-Bedroom Apartments",
        text: "Starting from $115,000. 42 units total. From 35 m². Fully furnished. Estimated ROI ~15%.",
      },
      {
        title: "2-Bedroom Apartments with Rooftop",
        text: "Starting from $170,000. 19 units total. Approx. 70 m² with rooftop. Panoramic views. Estimated ROI ~15%.",
      },
    ],
    amenities: {
      title: "Complex Infrastructure",
      intro: "Eighth Sense includes premium amenities designed for comfort, lifestyle, and vacation-rental appeal.",
      categories: [
        {
          name: "AMENITIES",
          items: [
            "24/7 reception and concierge",
            "SPA zone with massage rooms",
            "Infinity pool with sunset view",
            "European restaurant within the complex",
            "Free shuttles to top nearby beaches",
            "Summer cafe and chill areas",
            "Ice bath and yoga zones",
            "High-speed StarLink internet",
            "Parking with 65 spaces",
            "Art zones and oceanfront walk areas",
          ],
        },
      ],
    },
    developer: {
      title: "About IJI Group Estate",
      intro: "IJI Group Estate is a developer and real estate operator with over 15 years of experience in Bali, specialized in premium projects with high occupancy and full asset management for owners and investors.",
      bullets: [
        "15 years of experience",
        "Full asset management",
        "Premium projects",
        "High occupancy",
      ],
    },
    disclaimers: {
      renders: "Images, renders, and amenities are illustrative and may be subject to change according to developer decisions or regulatory requirements.",
      availability: "Estimated ~15% profitability is projected under professional management.",
    },
    description:
      "Cliffside residences and villas with panoramic ocean views, private rooftop, and estimated profitability up to 15% annually.",
  },
  "buena-vista-modern-residence": {
    hero: {
      title: "Buena Vista Modern Residence",
      subtitle: "Modern Luxury Living | Design District Area",
      description:
        "Luxury residence with private pool and independent guest house, located minutes from the Design District. Ideal for USD wealth investment and appreciation in a prime Miami area.",
      badges: ["New Construction 2026", "Design District Area", "Modern Luxury"],
    },
    summary: {
      title: "BUENA VISTA SHOWSTOPPER",
      text: "A contemporary design residence in one of Miami’s highest-appreciation submarkets. High ceilings, open spaces, and large-format glazing create a sophisticated architectural experience with abundant natural light.",
    },
    concept: {
      title: "Exterior & Lifestyle",
      text: "A property designed for Miami’s indoor-outdoor lifestyle: heated saltwater private pool, outdoor BBQ area, independent guest house with full bath and kitchenette, tropical landscaping, convertible carport/garage, and EV charging station.",
    },
    community: {
      title: "Ideal Investor Profile",
      text: "Perfect for: wealth-focused investors, high-end primary residence buyers, long-term luxury rentals, and the international market (U.S. + LATAM).",
    },
    privacy: {
      title: "Financial Data",
      text: "Price per sqft: $888 USD. Estimated annual tax: $8,505. No HOA. New construction with a favorable long-term appreciation profile.",
    },
    views: {
      title: "Design & Light",
      text: "High ceilings and open-plan design. Hurricane-impact windows and doors. Premium appliance kitchen with oversized pantry and flush cabinetry.",
    },
    design: {
      title: "Key Features",
      text: "5 Bedrooms | 6 Bathrooms (5 full + 1 half) | 3,321 interior sqft | 5,800 lot sqft | 2 levels | New construction (2026). Integrated Sonos system and custom-designed closets.",
    },
    location: {
      title: "Strategic Location",
      intro: "Growing residential zone with strong premium demand.",
      nearby: [
        {
          name: "Miami Design District",
          latitude: 25.8132,
          longitude: -80.1936,
          category: "Urban District",
        },
        {
          name: "Wynwood",
          latitude: 25.8004,
          longitude: -80.1992,
          category: "Art & Lifestyle",
        },
        {
          name: "Midtown Miami",
          latitude: 25.8077,
          longitude: -80.1938,
          category: "Residential",
        },
        {
          name: "Miami Beach",
          latitude: 25.7907,
          longitude: -80.13,
          category: "Beach",
        },
      ],
    },
    project: {
      title: "Investment Potential",
      text: "Buena Vista benefits from continuous Design District expansion and luxury urban corridor repositioning. Strong executive rental demand, USD-denominated market, and sustained appreciation near cultural and commercial hubs.",
    },
    amenities: {
      title: "Highlights",
      intro: "Details that define a true luxury asset.",
      categories: [
        {
          name: "EXTERIOR",
          items: [
            "Heated saltwater pool",
            "Independent guest house",
            "Tropical landscaping",
            "EV charging station",
          ],
        },
        {
          name: "INTERIOR",
          items: [
            "High ceilings",
            "Premium kitchen",
            "Integrated Sonos system",
            "Impact windows and doors",
          ],
        },
      ],
    },
    developer: {
      title: "Ideal Investor Type",
      intro: "Property designed for investors seeking medium- to long-term appreciation, buyers diversifying capital in USD, and international families searching for a second home in Miami.",
      bullets: ["Medium/long-term appreciation", "USD diversification", "Second residence"],
    },
    disclaimers: {
      renders: "Images are illustrative.",
      availability: "Prices and availability are subject to change.",
    },
    description:
      "Luxury residence with private pool and independent guest house, located minutes from the Design District. Ideal for USD wealth investment in a prime Miami area.",
  },
  "aston-martin-residences": {
    hero: {
      title: "ASTON MARTIN RESIDENCES",
      subtitle: "The Pinnacle of Waterfront Luxury - Downtown Miami",
      description:
        "Iconic waterfront residences in Downtown Miami, designed by the legendary British brand. A landmark tower with panoramic Biscayne Bay views and private marina access.",
      badges: ["Waterfront Luxury", "Downtown Miami", "Private Marina"],
    },
    summary: {
      title: "The Pinnacle of Waterfront Luxury",
      text: "Located at 300 Biscayne Boulevard Way, one of the last waterfront plots in Downtown Miami, Aston Martin Residences merges British engineering, contemporary architecture, and cosmopolitan lifestyle.",
    },
    concept: {
      title: "Interiors & Design",
      text: "Bulthaup kitchens, Gaggenau appliances, premium marble floors, floor-to-ceiling glazing, panoramic-view bathrooms, and European craftsmanship. Each residence is conceived to maximize light, space, and views with Aston Martin precision.",
    },
    community: {
      title: "Investment Profile",
      text: "Global iconic brand product. Irreplaceable waterfront location. Strong international demand. Prime USD asset with long-term appreciation potential.",
    },
    privacy: {
      title: "Signature Collection",
      text: "A limited collection designed as individual masterpieces. Contemporary architecture, noble finishes, and uninterrupted views elevate the residential experience to an artistic level.",
    },
    views: {
      title: "Unmatched Views",
      text: "Uninterrupted views of Biscayne Bay, Miami River, and Miami skyline from an iconic 66-story tower.",
    },
    design: {
      title: "Project",
      text: "391 exclusive residences. 66 residential levels. 1-5 bedrooms + duplexes + penthouses. Unique Triple Penthouse (levels 63-65). On-site private marina.",
    },
    location: {
      title: "Strategic Location",
      intro: "Downtown and Brickell continue to consolidate as Florida’s financial and luxury residential epicenter, with strong international demand and sustained appreciation in branded waterfront assets.",
      nearby: [
        {
          name: "Brickell Financial District",
          latitude: 25.7617,
          longitude: -80.1918,
          category: "Financial",
        },
        {
          name: "MiamiCentral Station",
          latitude: 25.7782,
          longitude: -80.1959,
          category: "Transport",
        },
        {
          name: "PortMiami",
          latitude: 25.7781,
          longitude: -80.1794,
          category: "Port",
        },
        {
          name: "Miami Design District",
          latitude: 25.8132,
          longitude: -80.1936,
          category: "Urban District",
        },
        {
          name: "Miami Beach",
          latitude: 25.7907,
          longitude: -80.13,
          category: "Beach",
        },
      ],
    },
    project: {
      title: "Residence Types",
      text: "Studios from 698 SF. 1BR: 754-1,001 SF. 2BR: 1,001-1,317 SF. 3BR: 2,236-3,075 SF. 4BR: 3,235-4,434 SF. 5BR: 3,764-3,994 SF. Penthouses: 8,977-10,463 SF. Triple Penthouse: levels 63-65.",
    },
    amenities: {
      title: "Ultra-Luxury Amenities",
      intro: "A world of exclusive privileges.",
      categories: [
        {
          name: "AMENITIES",
          items: [
            "Panoramic pool",
            "Spa & wellness center",
            "State-of-the-art fitness center",
            "Private lounges and salons",
            "Private marina",
            "Exclusive social areas",
          ],
        },
      ],
    },
    developer: {
      title: "Aston Martin",
      intro: "The legendary British brand brings its engineering and precision design legacy into Miami’s luxury real estate market.",
      bullets: ["Global iconic brand", "Precision design", "Exclusivity"],
    },
    disclaimers: {
      renders: "Images are illustrative.",
      availability: "Prices and availability are subject to change.",
    },
    description:
      "Iconic waterfront residences in Downtown Miami by the legendary British brand, with panoramic Biscayne Bay views and private marina.",
  },
  "ritz-carlton-residences": {
    hero: {
      title: "THE RITZ-CARLTON RESIDENCES",
      subtitle: "South Beach, Miami",
      description:
        "Exclusive oceanfront boutique collection in South Beach with VIP access to the Ritz-Carlton hotel and panoramic Atlantic views.",
      badges: ["South Beach", "Oceanfront", "Branded Residences"],
    },
    summary: {
      title: "South Beach, Miami",
      text: "An ultra-exclusive boutique collection of only 30 oceanfront residences, where Ritz-Carlton heritage merges with contemporary design and iconic South Beach lifestyle.",
    },
    concept: {
      title: "Culinary Experience - Jose Andres",
      text: "A gastronomic program curated by Michelin-starred chef Jose Andres, including Zaytinya, DiLido Beach Club, Lapidus Bar, and a new cafe in the historic Sagamore lobby.",
    },
    community: {
      title: "Investment Value",
      text: "Boutique product with limited inventory. Irreplaceable oceanfront location. Prestigious global brand. Strong international demand in South Beach.",
    },
    privacy: {
      title: "Boutique Residences",
      text: "Only 30 boutique condos with panoramic Atlantic and Miami Beach views, open layouts, natural light, and expansive private terraces.",
    },
    views: {
      title: "Panoramic Views",
      text: "Panoramic Atlantic and Miami Beach views. The connection between sand, sea, and sky is central to the design concept.",
    },
    design: {
      title: "Architecture & Design",
      text: "Designed by renowned architect Kobi Karp, inspired by Morris Lapidus’s iconic architecture and Miami Beach Art Deco heritage. Features full-height glass panels, private balconies, custom Italian kitchens by Alessandro Munge, and premium finishes.",
    },
    location: {
      title: "Prime Location",
      intro: "Set on one of the most coveted addresses in the U.S. South Beach blends European influence, art, gastronomy, and international lifestyle in one enclave.",
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
          category: "Park",
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
          category: "Culture & Lifestyle",
        },
        {
          name: "Atlantic Oceanfront",
          latitude: 25.7907,
          longitude: -80.127,
          category: "Beach",
        },
      ],
    },
    project: {
      title: "Strategic Summary",
      text: "30 boutique residences. Direct Atlantic frontage. Ritz-Carlton brand. Premium cultural and culinary lifestyle.",
    },
    amenities: {
      title: "Amenities & Services",
      intro: "Residents enjoy a dedicated world of comfort and privileges.",
      categories: [
        {
          name: "PRIVATE RESIDENTIAL",
          items: [
            "Rooftop oasis with pool",
            "Private screening room",
            "Entertainment lounge with kitchen",
            "24/7 fitness center",
            "Personalized concierge service",
          ],
        },
        {
          name: "VIP HOTEL ACCESS",
          items: [
            "World-class spa",
            "Beach Club",
            "Ritz Kids program",
            "Premium concierge services",
          ],
        },
      ],
    },
    developer: {
      title: "Ritz-Carlton",
      intro: "The Ritz-Carlton brand stands for legendary service and timeless luxury worldwide.",
      bullets: ["Legendary service", "Timeless luxury", "Global recognition"],
    },
    disclaimers: {
      renders: "Images are illustrative.",
      availability: "Prices and availability are subject to change.",
    },
    description:
      "Exclusive oceanfront boutique collection in South Beach with VIP hotel access and panoramic Atlantic views.",
  },
};

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function deepMerge<T extends Record<string, unknown>, U extends Record<string, unknown>>(
  target: T,
  source: U
): T & U {
  const output = { ...target } as Record<string, unknown>;

  Object.keys(source).forEach((key) => {
    const sourceValue = source[key];
    const targetValue = output[key];

    if (isObject(targetValue) && isObject(sourceValue)) {
      output[key] = deepMerge(targetValue, sourceValue);
    } else {
      output[key] = sourceValue;
    }
  });

  return output as T & U;
}

export function getLocalizedProperty(property: Property, locale: "es" | "en"): Property {
  if (locale === "es") return property;

  const translation = propertyContentEn[property.slug];
  if (!translation) return property;

  return deepMerge(
    property as unknown as Record<string, unknown>,
    translation as Record<string, unknown>
  ) as unknown as Property;
}
