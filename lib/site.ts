/* ============================================================================
   DAVID ECOM — CONFIGURACIÓN CENTRAL
   ----------------------------------------------------------------------------
   Configuración de identidad, contacto, métricas y contenido compartido.
   El contenido de las secciones también vive en components/sections.
   Busca los comentarios "TODO" para confirmar datos antes de publicar.

   Las métricas visibles se contrastaron con las capturas suministradas.
   Dominio, agenda y perfiles sociales requieren confirmación.
   Los bloques heredados no montados conservan su contenido de referencia.
   ============================================================================ */

export const site = {
  // ---- Identidad ---------------------------------------------------------
  brand: "David Ecom",
  mentor: "David",
  role: "Mentoría 1:1 para crear tu negocio con dropshipping",
  // TODO: dominio real para SEO / Open Graph
  url: "https://davidecom.co",
  locale: "es_CO",
  description:
    "Crea tu negocio con dropshipping junto a David Ecom. Mentoría 1:1 para elegir tu producto, construir tu tienda y lanzar tus primeras campañas de Meta Ads, con el acompañamiento de un operador activo.",
  keywords: [
    "mentoría dropshipping",
    "mentoría de Meta Ads Colombia",
    "acompañamiento 1 a 1 dropshipping",
    "crear un negocio con dropshipping",
    "dropshipping desde cero",
    "David Ecom",
  ],

  // ---- Contacto / conversión --------------------------------------------
  contact: {
    // Número que ya utilizaba el hero; compartido por todos los enlaces y el formulario.
    whatsapp: "573013965167",
    whatsappMessage:
      "Hola David, vengo de tu página. Quiero crear mi negocio con dropshipping y saber cómo me puedes acompañar en la mentoría 1:1.",
    // TODO: enlace real de agenda (Cal.com, Calendly, TidyCal, etc.)
    bookingUrl: "https://cal.com/david-ecom/diagnostico",
    // TODO: correo real (opcional)
    email: "hola@davidecom.co",
    social: {
      instagram: "https://instagram.com/", // TODO
      tiktok: "https://tiktok.com/", // TODO
      youtube: "", // opcional
    },
  },

  cta: {
    primary: "Agendar diagnóstico",
    secondary: "Escribir por WhatsApp",
    micro: "Cupos limitados · Solo por aplicación",
  },

  nav: [
    { label: "Resultados", href: "#evidencia" },
    { label: "Historia", href: "#historia" },
    { label: "La mentoría", href: "#propuesta" },
    { label: "Metodología", href: "#metodologia" },
    { label: "Para quién es", href: "#para-quien" },
    { label: "Preguntas", href: "#faq" },
  ],

  // ---- Hero --------------------------------------------------------------
  hero: {
    badge: "Dropshipping + Meta Ads · Acompañamiento 1:1",
    titleTop: "Deja de operar",
    titleHighlight: "a ciegas.",
    titleBottom: "Escala con criterio real.",
    subtitle:
      "Acompañamiento personalizado de un operador que construyó y escaló su propio dropshipping hasta superar los USD 100.000 en ventas con Meta Ads. Reviso tu tienda, tus productos, tus campañas y tus números contigo — no en un grupo de 20 personas.",
    points: [
      "Diagnóstico real de tu negocio",
      "Estrategia adaptada a tus números",
      "Acceso directo por WhatsApp",
    ],
  },

  // ---- Logos / herramientas (prueba de contexto) ------------------------
  tools: ["Shopify", "Meta Ads", "TikTok Ads", "Dropi", "Google Analytics"],

  // ---- Métricas de las capturas suministradas --------------------------
  // 'value' es el número final que anima; 'prefix'/'suffix' lo formatean.
  stats: [
    { value: 84, prefix: "$", suffix: "M", label: "Ventas registradas · COP", note: "" },
    { value: 327, prefix: "", suffix: "", label: "Pedidos generados", note: "" },
    { value: 10, prefix: "$", suffix: "M+", label: "Invertido en Meta Ads · COP", note: "" },
    { value: 3873, prefix: "", suffix: "", label: "Conversaciones en Meta", note: "" },
  ],
  // Foto del mentor: recorte sin fondo (mentor-cutout.png) + original.
  media: {
    mentorCutout: "/media/JOSEXXO_3.png",
    mentorPhoto: "/media/JOSEXXO_3.png",
    // Sube un PNG/WebP transparente a public/media y escribe aquí su ruta pública.
    // Vacío = espacio reservado sin marco, fondo añadido ni imagen rota.
    proposalImage: "/media/JOSEXXO.png",
    proposalImageAlt: "David trabajando en su portátil durante una sesión de mentoría",
  },

  // ---- El problema -------------------------------------------------------
  problem: {
    eyebrow: "El punto de partida",
    title: "El problema no es la falta de información. Es tomar decisiones sin criterio.",
    lead: "Hay miles de cursos, videos y grupos. Y aun así la mayoría de tiendas no despega. No porque falte teoría, sino porque nadie mira TU negocio en concreto.",
    pains: [
      {
        icon: "flame",
        title: "No sabes por dónde empezar",
        text: "Ves información sobre productos, tiendas y anuncios, pero te falta una ruta para convertirla en un negocio.",
      },
      {
        icon: "shuffle",
        title: "Elegir qué vender",
        text: "Necesitas evaluar productos y proveedores, calcular costes y entender si una idea tiene sentido antes de invertir.",
      },
      {
        icon: "eye-off",
        title: "Miedo a invertir a ciegas",
        text: "Quieres lanzar tus primeros anuncios con un presupuesto definido y saber qué mirar para decidir el siguiente paso.",
      },
      {
        icon: "users",
        title: "Avanzar sin acompañamiento",
        text: "Al llevar una idea a la práctica aparecen dudas concretas. Necesitas a alguien que conozca tu proyecto y lo revise contigo.",
      },
    ],
  },

  // ---- Historia del mentor ----------------------------------------------
  story: {
    eyebrow: "La historia",
    title: "Operador primero. Mentor después.",
    lead: "Esto no empezó como una marca de mentorías. Empezó como una tienda, un producto y muchas pruebas.",
    // Reemplaza/edita estos párrafos con la historia real de David.
    paragraphs: [
      "Empecé como la mayoría: probando productos, quemando presupuesto en anuncios y aprendiendo a los golpes qué funcionaba y qué no. No había atajos ni fórmulas mágicas — había datos, iteración y decisiones.",
      "Con el tiempo dejé de improvisar. Aprendí a leer las métricas que de verdad importan, a construir ofertas que convierten y a escalar campañas sin destruir el margen. Esa operación superó los USD 100.000 en ventas.",
      "En el camino cometí errores caros: escalé lo que no debía, confié en proveedores que no cumplían y aposté a productos sin validar. Cada error me dejó un criterio que hoy aplico antes de gastar el primer peso.",
      "Empecé a mentorizar porque vi a demasiada gente capaz perdiendo dinero por falta de acompañamiento real. No por falta de ganas — por falta de alguien que mirara su negocio con ellos.",
    ],
    // Hitos clave (edítalos o quítalos)
    milestones: [
      { k: "Inicio", v: "Primeras pruebas y primeros errores" },
      { k: "Aprendizaje", v: "Lectura de métricas y control de margen" },
      { k: "Escala", v: "+USD 100.000 en ventas operando" },
      { k: "Hoy", v: "Acompañamiento 1:1 a operadores serios" },
    ],
  },

  // ---- Evidencia / resultados (SLOTS para capturas reales) --------------
  evidence: {
    eyebrow: "Pruebas, no promesas",
    title: "Resultados que se muestran, no que se prometen",
    lead: "Capturas reales de la operación: Meta Ads, Shopify y los abonos al banco. Sin maquillaje.",
    feature: {
      src: "/media/meta-ads-tabla.jpg",
      label: "Cuenta de Meta Ads — gasto y conversiones reales",
      fit: "contain" as const,
    },
    grid: [
      { src: "/media/shopify-pedidos.jpg", label: "Pedidos entrando en Shopify", fit: "cover" as const, icon: "shopping-bag" },
      { src: "/media/banco-abonos.jpg", label: "Abonos recibidos al banco", fit: "contain" as const, icon: "line-chart" },
      { placeholder: true, label: "Dashboard de Shopify — sube tu captura", fit: "cover" as const, icon: "line-chart" },
    ],
  },

  // ---- La propuesta ------------------------------------------------------
  proposal: {
    eyebrow: "La mentoría",
    title: "Un sistema de acompañamiento, no una lista de videos",
    lead: "Entras a un proceso donde reviso tu negocio contigo y trabajamos sobre decisiones reales — no sobre teoría genérica.",
    is: [
      "Acompañamiento 1:1 con acceso directo al operador",
      "Estrategia construida sobre TUS métricas y tu producto",
      "Revisión de campañas, tienda y números reales",
      "Un plan de escalamiento adaptado a tu punto de partida",
    ],
    isNot: [
      "Un curso pregrabado más para acumular",
      "Llamadas grupales con 20 personas a la vez",
      "Promesas de dinero fácil o resultados garantizados",
      "Una fórmula igual para todos los negocios",
    ],
  },

  // ---- Qué incluye -------------------------------------------------------
  includes: {
    eyebrow: "Qué recibes",
    title: "Todo enfocado en decisiones, no en relleno",
    items: [
      { icon: "stethoscope", title: "Diagnóstico profundo", text: "Análisis de tu situación actual: tienda, producto, oferta, márgenes y punto de partida." },
      { icon: "store", title: "Revisión de tienda", text: "Estructura, página de producto, checkout y experiencia orientada a conversión." },
      { icon: "target", title: "Estrategia de adquisición", text: "Plan de campañas en Meta/TikTok según tu producto, país y presupuesto real." },
      { icon: "line-chart", title: "Lectura de métricas", text: "Aprendes a leer ROAS, CPA y tasa de entrega para decidir con datos, no corazonadas." },
      { icon: "sliders", title: "Optimización continua", text: "Ajustes sobre campañas y oferta con base en lo que muestran tus números." },
      { icon: "trending-up", title: "Plan de escalamiento", text: "Cómo y cuándo escalar sin destruir el margen ni la operación." },
      { icon: "message-circle", title: "Acceso por WhatsApp", text: "Canal directo para resolver dudas puntuales entre sesiones. Tú y yo, no un grupo." },
      { icon: "repeat", title: "Seguimiento real", text: "Feedback sobre lo ejecutado y responsabilidad sobre los siguientes pasos." },
    ],
  },

  // ---- Cómo funciona (el sistema) ---------------------------------------
  how: {
    eyebrow: "Cómo funciona",
    title: "Personalizado de principio a fin",
    steps: [
      { title: "Aplicas", text: "Cuéntame dónde está tu negocio hoy. Filtramos para asegurar que realmente puedo ayudarte." },
      { title: "Diagnóstico", text: "Una llamada donde revisamos tu punto de partida y definimos si hay match." },
      { title: "Plan a medida", text: "Diseñamos la ruta según tus números, tu producto y tu objetivo." },
      { title: "Ejecución acompañada", text: "Trabajamos sobre decisiones reales, con revisión y ajustes constantes." },
    ],
  },

  // ---- Metodología (5 etapas) -------------------------------------------
  methodology: {
    eyebrow: "Metodología",
    title: "El proceso, en cinco etapas",
    stages: [
      { n: "01", title: "Punto de partida", text: "Hablamos de tu idea, tu experiencia, tu tiempo y tu presupuesto para definir una ruta realista." },
      { n: "02", title: "Producto y oferta", text: "Evaluamos qué vender, con qué proveedores trabajar y cómo calcular tus costes y tu margen." },
      { n: "03", title: "Tu tienda", text: "Te acompaño a preparar tu tienda, la página de producto y el proceso de compra." },
      { n: "04", title: "Primeras campañas", text: "Preparamos anuncios en Meta Ads, definimos un presupuesto de prueba y aprendemos a leer los resultados." },
      { n: "05", title: "Ajustes y crecimiento", text: "Revisamos lo que pasa en tu negocio y decidimos qué mejorar antes de aumentar la inversión." },
    ],
  },

  // ---- Diferencial: masiva vs 1:1 ---------------------------------------
  compare: {
    eyebrow: "El diferencial",
    title: "Mentoría masiva vs. acompañamiento 1:1",
    lead: "No se trata de atacar a nadie. Se trata de entender qué necesita tu negocio.",
    mass: {
      title: "Mentoría masiva",
      points: [
        "Contenido general para todos",
        "Una sola metodología estándar",
        "Dudas dentro de un grupo grande",
        "Poco contexto sobre tu negocio",
        "Seguimiento limitado",
      ],
    },
    ours: {
      title: "Acompañamiento 1:1",
      points: [
        "Diagnóstico individual de tu negocio",
        "Estrategia adaptada a tus métricas",
        "Revisión de tus campañas y números reales",
        "Comunicación directa con el operador",
        "Seguimiento y responsabilidad",
      ],
    },
  },

  // ---- Para quién es / no es --------------------------------------------
  forWho: {
    eyebrow: "Filtro honesto",
    title: "Esto no es para todos. Y está bien.",
    is: {
      title: "Esta mentoría es para usted si…",
      points: [
        "Ya tiene una tienda o está listo para construirla",
        "Cuenta con capital para operar y pautar",
        "Está dispuesto a ejecutar, no solo a consumir contenido",
        "Quiere entender de verdad su negocio",
        "Busca escalar con criterio",
        "Quiere acompañamiento directo, no un grupo masivo",
      ],
    },
    isNot: {
      title: "NO es para usted si…",
      points: [
        "Busca dinero rápido o fácil",
        "No está dispuesto a ejecutar",
        "Quiere que alguien haga todo por usted",
        "Espera una fórmula mágica o garantías imposibles",
        "No tiene recursos para operar",
      ],
    },
  },

  // ---- Casos de éxito (PLACEHOLDERS) ------------------------------------
  cases: {
    eyebrow: "Casos",
    title: "Alumnos que ya vieron sus primeras ventas",
    disclaimer:
      "Conversaciones reales del acompañamiento. Cambia o agrega capturas cuando tengas más resultados que puedas respaldar.",
    items: [
      { src: "/media/testimonio-jose.jpg", caption: "Primera venta de un alumno", detail: "«Ya está funcionando»" },
      { src: "/media/testimonio-primera-campana.jpg", caption: "Resultados en menos de un mes", detail: "Primera campaña" },
      { placeholder: true, caption: "Sube aquí otra captura real", detail: "[Nicho / país]" },
    ],
  },

  // ---- Sobre el mentor ---------------------------------------------------
  about: {
    eyebrow: "Sobre David",
    title: "Un operador que sigue en la cancha",
    paragraphs: [
      "No enseño teoría de manual. Comparto el criterio que construí operando de verdad, con dinero real en juego.",
      "Mi enfoque es simple: datos por encima de opiniones, ejecución por encima de excusas y acompañamiento por encima de contenido acumulado.",
    ],
    credentials: [
      "Operador activo de dropshipping",
      "+USD 100.000 en ventas",
      "Experiencia en Meta y TikTok Ads",
      "Enfoque en margen y escalamiento",
    ],
  },

  // ---- FAQ ---------------------------------------------------------------
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Lo que probablemente te estás preguntando",
    items: [
      { q: "¿Cuánto cuesta la mentoría?", a: "El valor depende del punto de partida y de tus objetivos. Por eso el primer paso es una llamada de diagnóstico: primero revisamos si puedo ayudarte y qué necesitas, y sobre eso hablamos de la inversión." },
      { q: "¿Es 1:1 o grupal?", a: "Es acompañamiento 1:1 conmigo. Trabajamos sobre tu proyecto, resolvemos tus dudas y definimos los siguientes pasos según lo que vas construyendo." },
      { q: "¿Puedo empezar desde cero, sin tener una tienda?", a: "Sí. La mentoría está pensada para acompañarte a crear tu negocio con dropshipping: elegir un producto, evaluar proveedores, montar tu tienda y preparar tus primeras campañas. Necesitas tiempo para ejecutar y presupuesto para ponerlo en marcha. Si ya has empezado, adaptamos la ruta a tu avance." },
      { q: "¿Me garantizas resultados?", a: "No prometo resultados garantizados — sería deshonesto. Lo que garantizo es criterio, acompañamiento real y decisiones basadas en tus datos. Los resultados dependen también de tu ejecución." },
      { q: "¿Cuánto capital necesito para operar?", a: "El ecommerce con pauta requiere presupuesto para probar productos y campañas. En la llamada revisamos tu situación para ser realistas sobre lo que se puede lograr con tus recursos." },
      { q: "¿Cómo es el acompañamiento entre sesiones?", a: "Tienes acceso directo por WhatsApp para dudas puntuales. No es un grupo: es comunicación directa para que no te quedes trancado en decisiones clave." },
      { q: "¿Cómo sé si esta mentoría es lo que necesito?", a: "Cuéntame por WhatsApp qué te gustaría construir, qué has intentado y qué necesitas aprender. No hace falta tener una tienda. Revisamos tu punto de partida y definimos si el acompañamiento 1:1 encaja contigo." },
    ],
  },

  // ---- CTA final ---------------------------------------------------------
  finalCta: {
    eyebrow: "El siguiente paso",
    title: "Revisemos dónde estás hoy",
    lead: "No se trata de venderte una mentoría. Se trata de mirar tu negocio con honestidad y ver si realmente puedo ayudarte a escalar. Si hay match, avanzamos. Si no, te lo digo de frente.",
    micro: "Cupos limitados por acompañamiento personalizado · Solo por aplicación",
  },

  // ---- Escasez / cupos (honesto y editable) -----------------------------
  scarcity: {
    total: 6,
    taken: 4,
    open: true,
    openLabel: "Abierto para nuevas plazas",
    closedLabel: "Lista de espera",
    headline: "Trabajo con pocas personas a la vez. A propósito.",
    sub: "El acompañamiento es 1:1 y real: reviso tu negocio contigo. Por eso cada mes los cupos son limitados.",
    // TODO: mantén total/taken reales. No inventes escasez que no exista.
  },

  // ---- Expectativa vs. realidad (gurú vs. operador) ---------------------
  gap: {
    eyebrow: "Expectativa vs. realidad",
    title: "Lo que vende el gurú vs. lo que de verdad pasa",
    lead: "Si ya te quemaste con promesas, esto te va a sonar. Aquí no vendemos humo.",
    rows: [
      { promise: "«Hazte millonario en 30 días»", reality: "Meses de pruebas, iteración y decisiones con datos" },
      { promise: "«Ingresos 100% pasivos»", reality: "Atención al cliente, devoluciones y gestión diaria" },
      { promise: "«El producto ganador secreto»", reality: "Validación, oferta y creativos que se prueban y ajustan" },
      { promise: "«Solo copia mi tienda»", reality: "Tu país, tu margen y tu producto exigen tu propia estrategia" },
      { promise: "«Resultados garantizados»", reality: "Los resultados dependen de tu ejecución y tu capital" },
    ],
  },

  // ---- El costo de esperar (FOMO honesto) -------------------------------
  cost: {
    eyebrow: "El costo de esperar",
    title: "El próximo trimestre pasa contigo o sin ti",
    lead: "Cada mes sin criterio es presupuesto quemado en campañas a ciegas y decisiones por corazonada.",
    points: [
      "Presupuesto gastado sin datos para decidir",
      "Meses perdidos probando sin método",
      "El cupo de este mes se lo lleva otro",
    ],
    reframe: "No es presión. Es el calendario: la temporada alta no espera.",
  },

  // ---- Mini-aplicación (enruta a WhatsApp con las respuestas) -----------
  apply: {
    eyebrow: "Aplicar",
    title: "Cuéntame de tu negocio",
    lead: "Responde 3 cosas y te escribo yo directamente por WhatsApp para ver si puedo ayudarte. Sin compromiso.",
    questions: [
      { id: "Etapa", label: "¿En qué etapa estás?", options: ["Aún no tengo tienda", "Tengo tienda, poco o nada de ventas", "Ya vendo y quiero escalar"] },
      { id: "Capital", label: "¿Con cuánto puedes operar/pautar al mes?", options: ["Menos de US$300", "US$300 – US$1.000", "Más de US$1.000"] },
      { id: "Compromiso", label: "¿Puedes ejecutar cada semana?", options: ["Sí, tengo el tiempo", "Tengo tiempo limitado", "Aún no estoy seguro"] },
    ],
    success: "¡Listo! Te escribo yo en persona por WhatsApp, no un bot. Revisamos tu caso con calma.",
    cta: "Enviar y abrir WhatsApp",
  },

  // ---- Garantías / reversión de objeciones ------------------------------
  guarantees: [
    { title: "Sin compromiso", text: "La llamada de diagnóstico es para ver si encajamos. Si no puedo ayudarte, te lo digo de frente." },
    { title: "Acceso directo", text: "Hablas conmigo, el operador — no con un empleado ni un grupo de 20 personas." },
    { title: "Honestidad primero", text: "No prometo resultados garantizados. Prometo criterio, datos y acompañamiento real." },
  ],

  footerNote:
    "Este sitio no promete enriquecimiento ni resultados garantizados. El ecommerce implica riesgo e inversión, y los resultados dependen de la ejecución de cada persona.",
} as const;

export type Site = typeof site;

/** Enlace de WhatsApp listo para usar (con mensaje pre-cargado). */
export const whatsappConfigured = /^\d{8,15}$/.test(site.contact.whatsapp) &&
  String(site.contact.whatsapp) !== "573000000000";

export function whatsappHref(message: string = site.contact.whatsappMessage) {
  const msg = encodeURIComponent(message);
  return `https://wa.me/${site.contact.whatsapp}?text=${msg}`;
}
