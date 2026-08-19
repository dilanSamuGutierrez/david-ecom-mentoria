/* ============================================================================
   DAVID ECOM — CONFIGURACIÓN CENTRAL
   ----------------------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas editar para cambiar textos, datos de
   contacto y métricas. Busca los comentarios "TODO" para reemplazar los datos
   reales antes de publicar.

   ⚠️  Las cifras de métricas y los casos de éxito son PLACEHOLDERS.
       No publiques números que no puedas demostrar. Reemplázalos por datos
       reales (o deja el placeholder de imagen para subir la captura real).
   ============================================================================ */

export const site = {
  // ---- Identidad ---------------------------------------------------------
  brand: "David Ecom",
  mentor: "David",
  role: "Operador de ecommerce · Mentoría 1:1",
  // TODO: dominio real para SEO / Open Graph
  url: "https://davidecom.co",
  locale: "es_CO",
  description:
    "Acompañamiento 1:1 de ecommerce y dropshipping con un operador real que superó los USD 100.000 en ventas. No es un curso masivo: reviso tu tienda, tus métricas y tus campañas contigo.",
  keywords: [
    "mentoría dropshipping",
    "mentoría ecommerce Colombia",
    "acompañamiento 1 a 1 dropshipping",
    "escalar tienda Shopify",
    "David Ecom",
  ],

  // ---- Contacto / conversión --------------------------------------------
  contact: {
    // TODO: número real de WhatsApp en formato internacional sin "+" ni espacios
    whatsapp: "573000000000",
    whatsappMessage:
      "Hola David, vengo de tu página. Quiero contarte sobre mi negocio y ver si puedo aplicar a la mentoría 1:1.",
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
    badge: "Acompañamiento 1:1 · No es un curso masivo",
    titleTop: "Deja de operar",
    titleHighlight: "a ciegas.",
    titleBottom: "Escala con criterio real.",
    subtitle:
      "Acompañamiento personalizado de un operador que construyó y escaló su propia operación de ecommerce hasta superar los USD 100.000 en ventas. Reviso tu tienda, tus productos, tus campañas y tus números contigo — no en un grupo de 20 personas.",
    points: [
      "Diagnóstico real de tu negocio",
      "Estrategia adaptada a tus números",
      "Acceso directo por WhatsApp",
    ],
  },

  // ---- Logos / herramientas (prueba de contexto) ------------------------
  tools: ["Shopify", "Meta Ads", "TikTok Ads", "Dropi", "Google Analytics"],

  // ---- Métricas (PLACEHOLDERS — reemplazar por datos reales) ------------
  // 'value' es el número final que anima; 'prefix'/'suffix' lo formatean.
  stats: [
    { value: 100, prefix: "+USD ", suffix: "K", label: "Facturados como operador", note: "[Verificar cifra real]" },
    { value: 6, prefix: "", suffix: "+", label: "Años operando ecommerce", note: "[Verificar]" },
    { value: 8, prefix: "", suffix: " países", label: "Alcance de operación LATAM", note: "[Verificar]" },
    { value: 100, prefix: "", suffix: "%", label: "Atención personalizada 1:1", note: "" },
  ],

  // ---- El problema -------------------------------------------------------
  problem: {
    eyebrow: "El punto de partida",
    title: "El problema no es la falta de información. Es tomar decisiones sin criterio.",
    lead: "Hay miles de cursos, videos y grupos. Y aun así la mayoría de tiendas no despega. No porque falte teoría, sino porque nadie mira TU negocio en concreto.",
    pains: [
      {
        icon: "flame",
        title: "Presupuesto que se quema",
        text: "Campañas que gastan sin datos claros para decidir cuándo escalar, cuándo apagar y cuándo optimizar.",
      },
      {
        icon: "shuffle",
        title: "Estrategia genérica",
        text: "Fórmulas “para todos” que ignoran tu producto, tu margen, tu país y tu punto de partida real.",
      },
      {
        icon: "eye-off",
        title: "Decisiones a ciegas",
        text: "Métricas que no sabes leer (ROAS, CPA, tasa de entrega) y que terminan guiándote por corazonadas.",
      },
      {
        icon: "users",
        title: "Soporte diluido",
        text: "Dudas perdidas en un grupo de decenas de personas, donde nadie conoce el contexto de tu tienda.",
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
    lead: "Aquí van las capturas reales. Los espacios están diseñados para tus pruebas: facturación, dashboards y campañas. Reemplaza cada placeholder por la imagen real.",
    slots: [
      { label: "MÉTRICAS DE FACTURACIÓN", icon: "line-chart", span: "lg" },
      { label: "DASHBOARD SHOPIFY", icon: "shopping-bag", span: "sm" },
      { label: "META ADS · ROAS", icon: "target", span: "sm" },
      { label: "TIKTOK ADS", icon: "activity", span: "sm" },
      { label: "PEDIDOS / VENTAS", icon: "package", span: "sm" },
      { label: "REDES SOCIALES", icon: "instagram", span: "md" },
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
      { n: "01", title: "Diagnóstico", text: "Radiografía de tu negocio: tienda, producto, oferta, márgenes y métricas actuales." },
      { n: "02", title: "Estrategia", text: "Definimos el plan: producto, oferta, canales de adquisición y prioridades reales." },
      { n: "03", title: "Implementación", text: "Ejecutamos campañas y ajustes de tienda con criterio, no a ciegas." },
      { n: "04", title: "Optimización", text: "Leemos los datos y afinamos: qué escalar, qué apagar, qué corregir." },
      { n: "05", title: "Escalamiento", text: "Aumentamos volumen cuidando margen, operación y sostenibilidad." },
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
    title: "Lo que dicen quienes ya fueron acompañados",
    disclaimer:
      "Espacios reservados para testimonios y casos reales. Reemplázalos por capturas, videos o citas verificables. No publiques resultados que no puedas respaldar.",
    items: [
      { quote: "[Testimonio real del alumno — resultado concreto y verificable]", name: "[Nombre del alumno]", detail: "[Nicho / país]" },
      { quote: "[Testimonio real del alumno — qué cambió con el acompañamiento]", name: "[Nombre del alumno]", detail: "[Nicho / país]" },
      { quote: "[Testimonio real del alumno — antes y después]", name: "[Nombre del alumno]", detail: "[Nicho / país]" },
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
      "Operador activo de ecommerce",
      "+USD 100.000 en ventas [verificar]",
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
      { q: "¿Es 1:1 o grupal?", a: "Es acompañamiento 1:1. La idea es exactamente lo contrario a una llamada con 20 personas: reviso tu negocio contigo, con tu contexto y tus números." },
      { q: "¿Necesito ya tener una tienda?", a: "Ayuda tenerla, pero no es obligatorio. Trabajo tanto con quienes ya venden y quieren escalar como con quienes están listos para construir su operación con criterio desde el inicio." },
      { q: "¿Me garantizas resultados?", a: "No prometo resultados garantizados — sería deshonesto. Lo que garantizo es criterio, acompañamiento real y decisiones basadas en tus datos. Los resultados dependen también de tu ejecución." },
      { q: "¿Cuánto capital necesito para operar?", a: "El ecommerce con pauta requiere presupuesto para probar productos y campañas. En la llamada revisamos tu situación para ser realistas sobre lo que se puede lograr con tus recursos." },
      { q: "¿Cómo es el acompañamiento entre sesiones?", a: "Tienes acceso directo por WhatsApp para dudas puntuales. No es un grupo: es comunicación directa para que no te quedes trancado en decisiones clave." },
      { q: "¿Por qué debería confiar en ti?", a: "Porque soy un operador real, no solo un creador de contenido. La autoridad viene de la experiencia y de las pruebas — por eso esta página tiene espacio para mostrar datos verificables, no solo frases." },
    ],
  },

  // ---- CTA final ---------------------------------------------------------
  finalCta: {
    eyebrow: "El siguiente paso",
    title: "Revisemos dónde estás hoy",
    lead: "No se trata de venderte una mentoría. Se trata de mirar tu negocio con honestidad y ver si realmente puedo ayudarte a escalar. Si hay match, avanzamos. Si no, te lo digo de frente.",
    micro: "Cupos limitados por acompañamiento personalizado · Solo por aplicación",
  },

  footerNote:
    "Este sitio no promete enriquecimiento ni resultados garantizados. El ecommerce implica riesgo e inversión, y los resultados dependen de la ejecución de cada persona.",
} as const;

export type Site = typeof site;

/** Enlace de WhatsApp listo para usar (con mensaje pre-cargado). */
export function whatsappHref() {
  const msg = encodeURIComponent(site.contact.whatsappMessage);
  return `https://wa.me/${site.contact.whatsapp}?text=${msg}`;
}
