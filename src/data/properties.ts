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
    nearby: string[];
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
}

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
      nearby: [
        "Downtown Dubai",
        "Dubai Design District",
        "Dubai Creek Harbour",
        "Ras Al Khor Wetlands",
        "Meydan / Nad Al Sheba"
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
      nearby: [
        "Sheikh Zayed Road",
        "Downtown Dubai",
        "Business Bay",
        "Dubai Marina"
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
      nearby: [
        "Meydan Racecourse",
        "Dubai Creek Harbour",
        "Downtown Dubai",
        "Dubai International Airport"
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
      nearby: [
        "Sheikh Mohammed Bin Zayed Road",
        "IMG Worlds of Adventure",
        "Global Village",
        "Dubai International Airport",
        "Al Maktoum International Airport"
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
      nearby: [
        "Al Maktoum International Airport (DWC)",
        "Emirates Road",
        "Expo City Dubai",
        "Sheikh Mohammed Bin Zayed Road"
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
      nearby: [
        "Al Maktoum International Airport",
        "Emirates Road",
        "Expo City Dubai",
        "Sheikh Mohammed Bin Zayed Road"
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
      nearby: [
        "5 min – Waterfront Market",
        "10 min – Port Rashid",
        "12 min – Dubai Hospital",
        "15 min – Dubai International Airport",
        "15 min – Dubai Frame",
        "20 min – City Centre Deira"
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
