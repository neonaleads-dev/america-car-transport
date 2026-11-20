// Spanish landing-page content. Prices match the English state and route pages.
export interface EsGuide {
  url: string;
  respuesta: string;
  preciosTitulo: string;
  precios: Array<{ ruta: string; millas: string; precio: string; dias: string }>;
  secciones: Array<{ titulo: string; parrafos: string[]; lista?: string[] }>;
  faqs: Array<{ q: string; a: string }>;
  enlaces: Array<{ href: string; label: string }>;
}

const BASE = "https://www.americacartransport.com/es";

const enlacesComunes = [
  { href: "/es/calculadora", label: "Calculadora de costo de envío" },
  { href: "/es/cuanto-cuesta-enviar-un-carro", label: "¿Cuánto cuesta enviar un carro?" },
  { href: "/es/estafas-de-transporte-de-autos", label: "Cómo evitar estafas" },
];

const pasosEnvio = [
  "Pida su cotización gratis en línea o por teléfono al (530) 725-5383, en español.",
  "Le asignamos un transportista con licencia y seguro para su ruta, sin depósito por adelantado.",
  "El chofer inspecciona el carro con usted en la recogida y firman el Bill of Lading (reporte de condición).",
  "Su carro viaja en el camión y se lo entregamos puerta a puerta; revise el carro antes de firmar la entrega.",
];

export const esGuides: Record<string, EsGuide> = {
  "entre-estados": {
    url: `${BASE}/transporte-de-carros-entre-estados`,
    respuesta:
      "Enviar un carro de un estado a otro dentro de Estados Unidos cuesta en promedio entre $500 y $1,600 en transporte abierto y toma de 1 a 9 días según la distancia. Solo necesita su identificación, el registro o título del carro y comprobante de seguro. America Car Transport no pide depósito por adelantado.",
    preciosTitulo: "Precios de Transporte de Carros Entre Estados (2026)",
    precios: [
      { ruta: "Nueva York, NY → Miami, FL", millas: "1,280", precio: "$900 – $1,400", dias: "3 – 6 días" },
      { ruta: "Los Ángeles, CA → Miami, FL", millas: "2,700", precio: "$1,100 – $1,600", dias: "5 – 7 días" },
      { ruta: "Houston, TX → Los Ángeles, CA", millas: "1,540", precio: "$980 – $1,280", dias: "3 – 5 días" },
      { ruta: "Dallas, TX → Miami, FL", millas: "1,150", precio: "$850 – $1,100", dias: "3 – 4 días" },
      { ruta: "Atlanta, GA → Nueva York, NY", millas: "870", precio: "$600 – $950", dias: "2 – 4 días" },
      { ruta: "Miami, FL → Orlando, FL", millas: "235", precio: "$400 – $650", dias: "1 día" },
    ],
    secciones: [
      {
        titulo: "Documentos para Transportar un Carro Entre Estados",
        parrafos: [
          "Para enviar su carro dentro de Estados Unidos no necesita permisos especiales. Tenga listos estos papeles el día de la recogida:",
        ],
        lista: [
          "Identificación con foto (licencia de conducir, pasaporte o ID estatal).",
          "Registro del vehículo o, si no está registrado, el título de propiedad.",
          "Comprobante de seguro del carro.",
          "Si otra persona entrega o recibe el carro, una carta firmada que la autorice.",
          "Al recoger y al entregar firmará el Bill of Lading; guarde una copia de ambos momentos.",
        ],
      },
      {
        titulo: "Cómo Funciona el Envío de su Carro",
        parrafos: ["El proceso es sencillo y lo acompañamos en español de principio a fin:"],
        lista: pasosEnvio,
      },
      {
        titulo: "Rutas Más Económicas para Transportar su Carro",
        parrafos: [
          "Las rutas con mucho tráfico de camiones suelen ser más baratas porque es más fácil llenar el camión. Los corredores entre Nueva York y Florida, California y Texas, y Texas y Florida son de los más económicos por milla.",
          "También ahorra si es flexible con la fecha de recogida, si evita el verano y la temporada de \"snowbirds\" en otoño, y si elige transporte abierto en lugar de cerrado.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta enviar un carro de un estado a otro en Estados Unidos?",
        a: "Entre $500 y $1,600 en promedio en transporte abierto. Para estados vecinos (menos de 500 millas) el precio suele estar entre $400 y $850, y de costa a costa entre $1,050 y $1,750.",
      },
      {
        q: "¿Qué documentos necesito para mover un carro entre estados?",
        a: "Su identificación con foto, el registro o título del vehículo y comprobante de seguro. Al recoger y entregar firmará el Bill of Lading. Si otra persona entrega o recibe el carro, necesita una carta de autorización firmada.",
      },
      {
        q: "¿Cuánto tarda el transporte de un carro entre estados?",
        a: "De 1 a 3 días en distancias cortas, de 3 a 5 días en distancias medias y de 6 a 9 días de costa a costa, más el tiempo para asignar el camión después de reservar (normalmente 1 a 5 días).",
      },
      {
        q: "¿Necesito cambiar las placas o el registro al mudarme de estado?",
        a: "No para el envío. El carro viaja con su registro actual. Después de mudarse, cada estado le da un plazo para registrar el carro y cambiar la licencia; consulte el DMV de su nuevo estado.",
      },
      {
        q: "¿Envían carros fuera de Estados Unidos, como a México o Canadá?",
        a: "Nuestro servicio es para envíos dentro de los 48 estados continentales de Estados Unidos, además de Hawái y Alaska por puerto. No hacemos envíos internacionales por tierra a otros países.",
      },
      {
        q: "¿Puedo dejar cosas personales dentro del carro?",
        a: "Generalmente hasta unas 100 libras en la cajuela, debajo de la línea de las ventanas. El seguro del transportista cubre el carro, no sus pertenencias, así que no deje objetos de valor.",
      },
    ],
    enlaces: [
      ...enlacesComunes,
      { href: "/es/transporte-de-autos-estados-unidos", label: "Transporte de autos en EE.UU." },
      { href: "/es/transporte-de-carros-florida", label: "Transporte de carros en Florida" },
      { href: "/es/transporte-de-carros-texas", label: "Transporte de carros en Texas" },
    ],
  },

  "nueva-york": {
    url: `${BASE}/transporte-de-carros-nueva-york`,
    respuesta:
      "Enviar un carro desde o hacia Nueva York cuesta entre $600 y $1,750 en transporte abierto según la distancia. La ruta más popular, Nueva York a Florida, cuesta de $900 a $1,400 y toma de 3 a 6 días. Recogemos en los cinco condados de NYC, Long Island, Westchester y el norte del estado.",
    preciosTitulo: "Precios de Envío de Carros Desde y Hacia Nueva York",
    precios: [
      { ruta: "Nueva York, NY → Miami, FL", millas: "1,280", precio: "$920 – $1,250", dias: "3 – 5 días" },
      { ruta: "Miami, FL → Nueva York, NY", millas: "1,280", precio: "$850 – $1,150", dias: "3 – 4 días" },
      { ruta: "Nueva York, NY → Los Ángeles, CA", millas: "2,790", precio: "$1,350 – $1,750", dias: "6 – 8 días" },
      { ruta: "Houston, TX → Nueva York, NY", millas: "1,630", precio: "$850 – $1,350", dias: "3 – 5 días" },
      { ruta: "Atlanta, GA → Nueva York, NY", millas: "870", precio: "$600 – $950", dias: "2 – 4 días" },
    ],
    secciones: [
      {
        titulo: "Recogida y Entrega en la Ciudad de Nueva York",
        parrafos: [
          "Los camiones de transporte miden hasta 75 pies y muchas calles de Manhattan y Brooklyn no permiten su paso por curvas cerradas, puentes bajos y límites de peso. En esos casos el chofer coordina con usted un punto cercano y amplio, como el estacionamiento de un centro comercial.",
          "En Long Island, Westchester, el valle del Hudson y ciudades como Albany, Buffalo, Rochester y Syracuse el servicio es normalmente puerta a puerta.",
        ],
      },
      {
        titulo: "Temporada de Snowbirds: Nueva York ↔ Florida",
        parrafos: [
          "Cada otoño miles de personas envían su carro de Nueva York a Florida y en primavera lo regresan. En esas semanas los precios suben y los camiones se llenan rápido, así que conviene reservar con 1 a 2 semanas de anticipación.",
        ],
      },
      {
        titulo: "Antes de Entregar su Carro",
        parrafos: ["Prepare su carro para el viaje:"],
        lista: [
          "Quite el E-ZPass u otro transpondedor de peajes para que no le cobren peajes durante el viaje.",
          "Deje el tanque con 1/4 de gasolina o menos.",
          "Tome fotos con fecha de todos los lados del carro.",
          "Retire objetos de valor y accesorios sueltos.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta enviar un carro de Nueva York a Florida?",
        a: "Entre $900 y $1,400 en transporte abierto y de $1,300 a $2,000 en transporte cerrado, con 3 a 6 días de tránsito. De la ciudad de Nueva York a Miami suele costar de $920 a $1,250.",
      },
      {
        q: "¿Cuánto cuesta enviar un carro de Nueva York a California?",
        a: "Alrededor de $1,350 a $1,750 en transporte abierto, con 6 a 8 días de tránsito para este viaje de costa a costa de unas 2,800 millas.",
      },
      {
        q: "¿Pueden recoger mi carro en Manhattan o Brooklyn?",
        a: "Sí. Si el camión no puede entrar a su calle, el chofer acuerda con usted un lugar cercano y accesible para la recogida o la entrega.",
      },
      {
        q: "¿Cuál es la mejor época para enviar un carro desde Nueva York?",
        a: "Finales del invierno y principios de la primavera, fuera de la temporada de snowbirds. Los precios más altos son en otoño (hacia Florida) y en verano.",
      },
      {
        q: "¿Conviene el transporte cerrado en Nueva York?",
        a: "Para carros clásicos, de lujo o exóticos, sí. En invierno también protege la pintura de la sal y la nieve de las carreteras. Cuesta alrededor de 40–60% más que el abierto.",
      },
    ],
    enlaces: [
      ...enlacesComunes,
      { href: "/es/transporte-de-carros-florida", label: "Transporte de carros en Florida" },
      { href: "/es/transporte-de-carros-entre-estados", label: "Transporte entre estados" },
      { href: "/locations/new-york", label: "New York car shipping (English)" },
    ],
  },

  texas: {
    url: `${BASE}/transporte-de-carros-texas`,
    respuesta:
      "Enviar un carro desde o hacia Texas cuesta entre $400 y $1,500 en transporte abierto según la distancia. Dentro de Texas (por ejemplo Houston a Dallas) el precio suele estar entre $400 y $850; de Texas a California entre $920 y $1,280, y de Texas a Florida entre $650 y $1,100.",
    preciosTitulo: "Precios de Envío de Carros Desde y Hacia Texas",
    precios: [
      { ruta: "Houston, TX → Dallas, TX", millas: "240", precio: "$400 – $850", dias: "1 – 3 días" },
      { ruta: "Dallas, TX → Los Ángeles, CA", millas: "1,435", precio: "$920 – $1,180", dias: "3 – 5 días" },
      { ruta: "Houston, TX → Chicago, IL", millas: "1,080", precio: "$780 – $1,020", dias: "3 – 4 días" },
      { ruta: "Dallas, TX → Miami, FL", millas: "1,150", precio: "$850 – $1,100", dias: "3 – 4 días" },
      { ruta: "Houston, TX → Nueva York, NY", millas: "1,630", precio: "$850 – $1,350", dias: "3 – 5 días" },
      { ruta: "Austin, TX → Seattle, WA", millas: "2,120", precio: "$1,150 – $1,480", dias: "5 – 6 días" },
    ],
    secciones: [
      {
        titulo: "Ciudades de Texas que Atendemos",
        parrafos: [
          "Recogemos y entregamos puerta a puerta en Houston, Dallas, Fort Worth, San Antonio, Austin, El Paso y el Valle del Río Grande, además de pueblos y zonas rurales de todo el estado. Las autopistas I-10, I-35, I-45 e I-20 tienen mucho tráfico de camiones, lo que ayuda a conseguir buenos precios.",
        ],
      },
      {
        titulo: "Cómo Funciona el Envío de su Carro",
        parrafos: ["El proceso, en español y sin depósito por adelantado:"],
        lista: pasosEnvio,
      },
      {
        titulo: "Consejos para Ahorrar en Texas",
        parrafos: [
          "Texas es uno de los estados con más camiones de transporte, así que con un poco de flexibilidad en la fecha de recogida casi siempre se consigue un buen precio. En verano el calor es fuerte: revise la presión de las llantas y el anticongelante antes del viaje.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta enviar un carro de Texas a California?",
        a: "Alrededor de $920 a $1,280 en transporte abierto (por ejemplo Dallas o Houston a Los Ángeles), con 3 a 5 días de tránsito.",
      },
      {
        q: "¿Cuánto cuesta enviar un carro de Texas a Florida?",
        a: "Entre $650 y $1,100 en transporte abierto según la ciudad; Dallas a Miami suele costar de $850 a $1,100 y toma de 3 a 4 días.",
      },
      {
        q: "¿Cuánto cuesta mover un carro dentro de Texas?",
        a: "Para trayectos dentro del estado, como Houston a Dallas o San Antonio a Austin, el precio suele estar entre $400 y $850 y el carro llega en 1 a 3 días.",
      },
      {
        q: "¿Recogen carros en el Valle del Río Grande y El Paso?",
        a: "Sí, atendemos todo Texas. En zonas más alejadas la recogida puede tardar uno o dos días más en programarse.",
      },
      {
        q: "¿Tengo que pagar un depósito?",
        a: "No. America Car Transport no pide depósito por adelantado.",
      },
    ],
    enlaces: [
      ...enlacesComunes,
      { href: "/es/transporte-de-carros-california", label: "Transporte de carros en California" },
      { href: "/es/transporte-de-carros-entre-estados", label: "Transporte entre estados" },
      { href: "/locations/texas", label: "Texas car shipping (English)" },
    ],
  },

  california: {
    url: `${BASE}/transporte-de-carros-california`,
    respuesta:
      "Enviar un carro desde o hacia California cuesta entre $400 y $1,750 en transporte abierto según la distancia. Dentro de California (por ejemplo San Francisco a Los Ángeles) cuesta de $450 a $650; de California a Florida de $1,100 a $1,600, y de California a Nueva York de $1,150 a $1,650.",
    preciosTitulo: "Precios de Envío de Carros Desde y Hacia California",
    precios: [
      { ruta: "San Francisco, CA → Los Ángeles, CA", millas: "380", precio: "$450 – $650", dias: "1 – 2 días" },
      { ruta: "Los Ángeles, CA → Miami, FL", millas: "2,700", precio: "$1,100 – $1,600", dias: "5 – 7 días" },
      { ruta: "Los Ángeles, CA → Nueva York, NY", millas: "2,789", precio: "$1,150 – $1,650", dias: "5 – 7 días" },
      { ruta: "San Francisco, CA → Chicago, IL", millas: "2,100", precio: "$950 – $1,350", dias: "4 – 6 días" },
      { ruta: "Houston, TX → Los Ángeles, CA", millas: "1,540", precio: "$980 – $1,280", dias: "3 – 5 días" },
      { ruta: "Miami, FL → Los Ángeles, CA", millas: "2,700", precio: "$1,100 – $1,600", dias: "5 – 7 días" },
    ],
    secciones: [
      {
        titulo: "Ciudades de California que Atendemos",
        parrafos: [
          "Recogemos y entregamos puerta a puerta en Los Ángeles, San Diego, San Francisco, San José, Sacramento, Fresno, Long Beach y Oakland, y en todo el estado. Las autopistas I-5, I-10, I-15 e I-80 conectan California con el resto del país, y por eso suele haber camiones disponibles en 24 a 48 horas.",
        ],
      },
      {
        titulo: "Cómo Funciona el Envío de su Carro",
        parrafos: ["El proceso, en español y sin depósito por adelantado:"],
        lista: pasosEnvio,
      },
      {
        titulo: "Clima y Temporadas en California",
        parrafos: [
          "En verano el interior del estado es muy caluroso: revise llantas y anticongelante antes del viaje. En invierno el paso de Donner en la I-80 puede requerir cadenas y retrasar uno o dos días. Los precios suelen ser más bajos de febrero a abril.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta enviar un carro de California a Florida?",
        a: "Entre $1,100 y $1,600 en transporte abierto para unas 2,700 millas, con 5 a 7 días de tránsito.",
      },
      {
        q: "¿Cuánto cuesta enviar un carro de Florida a California?",
        a: "Entre $1,050 y $1,600 en transporte abierto; de Miami a Los Ángeles suele costar de $1,100 a $1,600 y toma de 5 a 7 días.",
      },
      {
        q: "¿Cuánto cuesta mover un carro dentro de California?",
        a: "Trayectos como San Francisco a Los Ángeles o Sacramento a San Diego cuestan de $450 a $750 en transporte abierto y toman de 1 a 2 días.",
      },
      {
        q: "¿Cuánto tarda enviar un carro de California a Nueva York?",
        a: "De 5 a 7 días en tránsito para este viaje de costa a costa, más el tiempo para asignar el camión.",
      },
      {
        q: "¿Envían carros a Hawái desde California?",
        a: "Sí, por barco desde el puerto. El tránsito total suele ser de 9 a 24 días según el puerto y la fecha de salida.",
      },
    ],
    enlaces: [
      ...enlacesComunes,
      { href: "/es/transporte-de-carros-florida", label: "Transporte de carros en Florida" },
      { href: "/es/transporte-de-carros-texas", label: "Transporte de carros en Texas" },
      { href: "/locations/california", label: "California car shipping (English)" },
    ],
  },

  florida: {
    url: `${BASE}/transporte-de-carros-florida`,
    respuesta:
      "Enviar un carro desde o hacia Florida cuesta entre $400 y $1,800 en transporte abierto según la distancia. Dentro de Florida (por ejemplo Miami a Orlando) cuesta de $400 a $650; de Florida a Nueva York de $900 a $1,200, y de Florida a California de $1,100 a $1,800.",
    preciosTitulo: "Precios de Envío de Carros Desde y Hacia Florida",
    precios: [
      { ruta: "Miami, FL → Orlando, FL", millas: "235", precio: "$400 – $650", dias: "1 día" },
      { ruta: "Miami, FL → Atlanta, GA", millas: "660", precio: "$550 – $800", dias: "2 – 3 días" },
      { ruta: "Miami, FL → Nueva York, NY", millas: "1,280", precio: "$900 – $1,200", dias: "3 – 5 días" },
      { ruta: "Orlando, FL → Dallas, TX", millas: "1,150", precio: "$850 – $1,100", dias: "3 – 4 días" },
      { ruta: "Jacksonville, FL → Chicago, IL", millas: "1,050", precio: "$800 – $1,150", dias: "4 – 5 días" },
      { ruta: "Tampa, FL → Los Ángeles, CA", millas: "2,700", precio: "$1,400 – $1,800", dias: "6 – 8 días" },
    ],
    secciones: [
      {
        titulo: "Ciudades de Florida que Atendemos",
        parrafos: [
          "Recogemos y entregamos puerta a puerta en Miami, Orlando, Tampa, Jacksonville, Fort Lauderdale, West Palm Beach, Fort Myers y Tallahassee, y en todo el estado. La I-95, la I-75 y la I-10 conectan Florida con el norte y el oeste del país.",
        ],
      },
      {
        titulo: "Temporada de Snowbirds en Florida",
        parrafos: [
          "De octubre a diciembre muchas personas del norte envían su carro a Florida, y de marzo a mayo lo regresan. En esas semanas los precios suben y conviene reservar con 1 a 2 semanas de anticipación. Fuera de esas fechas suele haber mejores precios.",
        ],
      },
      {
        titulo: "Cómo Funciona el Envío de su Carro",
        parrafos: ["El proceso, en español y sin depósito por adelantado:"],
        lista: pasosEnvio,
      },
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta enviar un carro de Florida a Nueva York?",
        a: "Entre $900 y $1,200 en transporte abierto (por ejemplo Miami a Nueva York), con 3 a 5 días de tránsito.",
      },
      {
        q: "¿Cuánto cuesta enviar un carro de Florida a California?",
        a: "Entre $1,100 y $1,800 en transporte abierto para unas 2,700 millas, con 5 a 8 días de tránsito.",
      },
      {
        q: "¿Cuánto cuesta mover un carro dentro de Florida?",
        a: "Trayectos como Miami a Orlando o Tampa a Jacksonville cuestan de $400 a $650 y el carro llega en aproximadamente 1 día.",
      },
      {
        q: "¿Cuándo es más caro enviar un carro a Florida?",
        a: "En la temporada de snowbirds, de octubre a diciembre hacia Florida y de marzo a mayo de regreso al norte.",
      },
      {
        q: "¿Tengo que pagar un depósito?",
        a: "No. America Car Transport no pide depósito por adelantado.",
      },
    ],
    enlaces: [
      ...enlacesComunes,
      { href: "/es/transporte-de-carros-nueva-york", label: "Transporte de carros en Nueva York" },
      { href: "/es/transporte-de-carros-california", label: "Transporte de carros en California" },
      { href: "/locations/florida", label: "Florida car shipping (English)" },
    ],
  },

  estafas: {
    url: `${BASE}/estafas-de-transporte-de-autos`,
    respuesta:
      "Para evitar estafas al enviar su carro: verifique el número USDOT y MC de la empresa en el sitio oficial de la FMCSA, no pague depósitos grandes antes de que le asignen un camión, desconfíe de precios mucho más bajos que los demás y pida todo por escrito antes de reservar.",
    preciosTitulo: "",
    precios: [],
    secciones: [
      {
        titulo: "Señales de Alerta de una Estafa",
        parrafos: ["Tenga cuidado si la empresa:"],
        lista: [
          "Le da un precio mucho más bajo que todas las demás cotizaciones y luego lo sube días antes de la recogida.",
          "Le pide un depósito grande por adelantado, antes de asignar un transportista verificado.",
          "No le da su número USDOT ni MC, o el número no aparece en el registro de la FMCSA.",
          "Solo acepta pagos por métodos difíciles de rastrear, como tarjetas de regalo o transferencias a personas.",
          "No le entrega un contrato o cotización por escrito.",
          "El chofer no hace la inspección ni firma el Bill of Lading en la recogida.",
        ],
      },
      {
        titulo: "Cómo Verificar una Empresa de Transporte",
        parrafos: [
          "Toda empresa que mueve carros entre estados debe estar registrada con la FMCSA (Administración Federal de Seguridad de Autotransportes). Pida el número USDOT y el número MC, búsquelos en el sitio oficial SAFER de la FMCSA y confirme que el nombre y el estado de la licencia coincidan.",
          "Pida también el certificado de seguro del transportista y revise reseñas en varias plataformas independientes, no solo en la página de la empresa.",
        ],
      },
      {
        titulo: "Qué Hacer el Día de la Recogida y la Entrega",
        parrafos: ["Proteja su carro y su dinero:"],
        lista: [
          "Tome fotos con fecha de todos los lados del carro antes de entregarlo.",
          "Revise con el chofer cada marca anotada en el Bill of Lading y guarde una copia.",
          "Al recibir el carro, inspecciónelo antes de firmar y anote cualquier daño nuevo en el Bill of Lading.",
          "Pague el saldo solo como se acordó por escrito.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cómo sé si una empresa de transporte de autos es legítima?",
        a: "Pida su número USDOT y MC y verifíquelos en el sitio SAFER de la FMCSA. Confirme que tenga seguro de carga, revise reseñas independientes y pida una cotización por escrito.",
      },
      {
        q: "¿Es normal pagar un depósito para enviar un carro?",
        a: "Algunas empresas lo piden, pero un depósito grande antes de asignar un camión es una señal de alerta. America Car Transport no pide depósito por adelantado.",
      },
      {
        q: "¿Por qué una cotización muy barata puede ser una estafa?",
        a: "Es una táctica común de \"cebo y cambio\": ofrecen un precio muy bajo para que reserve y días antes de la recogida le dicen que necesita pagar más para conseguir camión.",
      },
      {
        q: "¿Qué hago si mi carro llega dañado?",
        a: "Anote el daño en el Bill of Lading antes de firmar la entrega, tome fotos y presente el reclamo al seguro del transportista con sus fotos de antes y después.",
      },
    ],
    enlaces: [
      ...enlacesComunes.filter((l) => l.href !== "/es/estafas-de-transporte-de-autos"),
      { href: "/es/transporte-de-carros-entre-estados", label: "Transporte entre estados" },
      { href: "/resources/how-to-avoid-car-shipping-scams", label: "Avoid car shipping scams (English)" },
    ],
  },
};
