/* ============================================================================
   DAVID ECOM — CONTENIDO CENTRAL
   ----------------------------------------------------------------------------
   Textos tomados de "David_Ecom_Textos_y_Plan_Web.md" (oct. 2026).
   Ocho secciones: portada, experiencia, método, servicios, experiencias de
   alumnos, para quién es, preguntas y contacto.
   Busca "TODO" para los datos que David aún debe confirmar.
   ============================================================================ */

export const site = {
  brand: "David Ecom",
  mentor: "David Hernández",
  // TODO: dominio real para SEO / Open Graph
  url: "https://davidecom.co",
  locale: "es_CO",
  seoTitle: "David Ecom | Mentoría 1:1 de Meta Ads y ventas por WhatsApp",
  description:
    "Aprende con David Hernández a elegir productos, crear anuncios y vender por WhatsApp. Mentoría 1:1: ocho sesiones en vivo al mes por $200.000 COP.",
  keywords: [
    "mentoría Meta Ads Colombia",
    "ventas por WhatsApp",
    "mentoría ecommerce 1:1",
    "gestión de campañas Meta Ads",
    "dropshipping Colombia",
    "David Ecom",
  ],

  contact: {
    whatsapp: "573013965167",
    whatsappMessage:
      "Hola David, vengo de tu página. Quiero contarte mi situación y resolver unas dudas sobre la mentoría o la gestión de campañas.",
    mentoriaMessage:
      "Hola David, vengo de tu página. Quiero información de la mentoría 1:1 de $200.000 COP al mes.",
    gestionMessage:
      "Hola David, vengo de tu página. Quiero solicitar una propuesta para la gestión de mis campañas publicitarias.",
    // TODO: correo y redes reales
    email: "",
  },

  nav: [
    { label: "Método", href: "#metodo" },
    { label: "Servicios", href: "#servicios" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Preguntas", href: "#preguntas" },
  ],
  navCta: "Solicitar información",

  // ---- 1. Portada ---------------------------------------------------------
  hero: {
    badge: "David Ecom · Mentoría 1:1",
    lead: "Que el miedo a invertir no te deje sin empezar.",
    titleTop: "Aprende a vender",
    titleAccent: "con un plan.",
    text: "Soy David Hernández. Te enseño a crear anuncios en Meta Ads, atender a tus clientes por WhatsApp y organizar tu propia logística.",
    // Cifras confirmadas por David (oct. 2026). Redacción exacta:
    // "Más de 1.000 millones vendidos en un año" y "Más de 10.000 pedidos".
    stats: [
      { value: 1000, prefix: "+", unit: "millones", label: "vendidos en un año", sr: "Más de 1.000 millones vendidos en un año" },
      { value: 10000, prefix: "+", unit: "", label: "pedidos", sr: "Más de 10.000 pedidos" },
    ],
    offer: ["8 sesiones 1:1 de 1 hora al mes", "Clases en vivo"],
    price: "$200.000",
    priceUnit: "COP / mes",
    priceNote: "La mensualidad cubre la mentoría. Anuncios y operación se presupuestan aparte.",
    primary: "Consultar la mentoría",
    secondary: "Conocer la gestión de campañas",
  },

  // ---- 2. Experiencia -----------------------------------------------------
  about: {
    kicker: "Experiencia",
    title: "Soy David Hernández. Enseño desde mi propia operación.",
    paragraphs: [
      "Llevo dos años trabajando en ecommerce. Empecé desde cero, me formé en mentorías de dropshipping y apliqué lo aprendido en mi propia operación, con tienda y equipo de trabajo.",
      "Hoy cuento con una operación preparada para despachar pedidos: selección de productos, publicidad digital, atención por WhatsApp y coordinación logística.",
      "En la mentoría comparto ese proceso contigo. Revisamos tu proyecto, definimos metas y tomamos decisiones con lo que vas ejecutando y con los datos de tu negocio.",
    ],
    promise:
      "Quiero que entiendas las oportunidades, los costos y las dificultades del proceso. En cada sesión revisamos tus dudas y el porqué de cada decisión.",
    stats: [
      { value: 1000, prefix: "+", unit: "millones", label: "vendidos en un año", sr: "Más de 1.000 millones vendidos en un año" },
      { value: 10000, prefix: "+", unit: "", label: "pedidos", sr: "Más de 10.000 pedidos" },
      { value: 2, prefix: "", unit: "años", label: "operando ecommerce", sr: "2 años operando ecommerce" },
      { value: 8, prefix: "", unit: "sesiones", label: "1:1 al mes en la mentoría", sr: "8 sesiones 1:1 al mes en la mentoría" },
    ],
    strip: ["Productos", "Publicidad", "Ventas por WhatsApp", "Logística"],
  },

  // ---- Sistema (sección de video) ----------------------------------------
  system: {
    kicker: "El sistema",
    title: "Del anuncio a la conversación. De la conversación al pedido.",
    text: "La tienda es una herramienta. Lo central es atraer consultas con anuncios, cerrar la venta por WhatsApp y despachar con tu propia logística.",
    // Ruta pública de un video (mp4/webm). Vacío = se muestra la foto.
    // Video de stock (Mixkit, licencia gratuita comercial) hasta tener uno de David.
    video: "/media/sistema-pedidos.mp4",
  },

  // ---- 3. Método ----------------------------------------------------------
  method: {
    kicker: "Método",
    title: "Antes de invertir más, entiende el siguiente paso.",
    lead: "No tienes que llegar sabiendo elegir un producto, crear anuncios o coordinar un despacho. Organizamos el proceso según tus recursos y objetivos, con tareas concretas y revisión de avances.",
    doubts: [
      { q: "¿Y si elijo un producto que nadie compra?", a: "Evaluamos producto, proveedor, costos y margen, y definimos pruebas para recoger información antes de aumentar la inversión." },
      { q: "¿Y si gasto en anuncios y no sé qué pasó?", a: "Aprendes qué indican las métricas y cómo usarlas para ajustar una prueba." },
      { q: "¿Y si me escriben y no sé cómo vender?", a: "Trabajamos la atención por WhatsApp, las respuestas a consultas y el seguimiento de conversaciones." },
      { q: "¿Y si recibo pedidos y no sé despacharlos?", a: "Organizamos confirmación, despacho y seguimiento según tu operación." },
      { q: "¿Y si pago por aprender y sigo sin saber qué hacer?", a: "En cada sesión revisamos tu proyecto, lo que ejecutaste y la siguiente tarea." },
    ],
    stages: [
      { n: "01", title: "Producto y números", work: "Evaluamos productos con potencial de venta, proveedores, costos, precio y margen.", result: "Un producto seleccionado y una estructura inicial de costos." },
      { n: "02", title: "Preparación comercial", work: "Preparamos perfiles, cuenta publicitaria, presencia comercial y canal de WhatsApp. La tienda, cuando el proyecto la requiere.", result: "Canales preparados para empezar a probar." },
      { n: "03", title: "Anuncios y conversaciones", work: "Creamos anuncios, definimos pruebas y revisamos cómo responder consultas y dar seguimiento por WhatsApp.", result: "Campañas de prueba y una guía para atender mensajes." },
      { n: "04", title: "Pedidos y logística", work: "Trabajamos confirmación de pedidos, coordinación de despachos, seguimiento y lectura de resultados.", result: "Un flujo para gestionar pedidos y decidir qué ajustar." },
    ],
    tools: ["Meta Ads", "WhatsApp", "Shopify", "Dropi", "TikTok Ads*"],
    toolsNote: "*TikTok Ads según las necesidades y el alcance acordado. Los productos se evalúan y se prueban: su desempeño lo determinan los resultados reales del mercado.",
  },

  // ---- 4. Servicios -------------------------------------------------------
  services: {
    kicker: "Servicios",
    title: "Elige el acompañamiento que necesita tu negocio.",
    mentoria: {
      name: "Mentoría personalizada 1:1",
      price: "$200.000",
      unit: "COP al mes",
      for: "Para quien quiere empezar o mejorar su negocio y necesita entender qué hacer, por qué hacerlo y cómo revisar lo que está pasando.",
      includes: [
        "8 sesiones individuales al mes, de 1 hora",
        "Días y horarios acordados entre los dos",
        "Clases en vivo según tu punto de partida",
        "Documentos de apoyo",
        "Guía para elegir y probar productos",
        "Perfiles y cuenta publicitaria listos",
        "Creación y revisión de anuncios",
        "Atención y ventas por WhatsApp",
        "Orientación para tu propia logística",
        "Metas y revisión de avances",
      ],
      terms: [
        { k: "Asistencia", v: "Si no puedes asistir a una sesión acordada, pierdes esa clase. No se repone." },
        { k: "Modalidad", v: "Mensual. Continúas el tiempo que quieras, renovando cada mes." },
        { k: "Tu parte", v: "Tú ejecutas las tareas; trabajamos sobre tus avances en las sesiones." },
      ],
      cta: "Quiero información de la mentoría",
    },
    gestion: {
      name: "Gestión de campañas publicitarias",
      price: "$500.000 – $2.000.000",
      unit: "COP al mes, según alcance",
      for: "Para quien quiere delegar sus cuentas publicitarias y concentrarse en atender clientes y coordinar su operación.",
      we: "Preparación y revisión de la cuenta, configuración de campañas, publicación de anuncios con los materiales acordados, seguimiento, ajustes y reporte.",
      you: "Responder WhatsApp, cerrar ventas, confirmar pedidos, coordinar despachos y atender novedades.",
      price_factors: "El valor depende de las plataformas, los productos y el alcance del seguimiento. El presupuesto de anuncios se paga aparte, directamente a la plataforma.",
      cta: "Solicitar propuesta de gestión",
    },
  },

  // ---- 5. Experiencias de alumnos -----------------------------------------
  cases: {
    kicker: "Experiencias",
    title: "El proceso, visto desde los proyectos de mis alumnos.",
    lead: "Cada proyecto empieza en una situación diferente. Estas conversaciones muestran avances reales del acompañamiento.",
    // Testimonios autorizados por los alumnos (confirmado por David, oct. 2026).
    items: [
      { src: "/media/testimonio-jose.jpg", alt: "Conversación de WhatsApp: un alumno avisa que le salió su primera venta y que ya está funcionando", title: "Primera venta confirmada", text: "Un alumno comparte su primera venta y su panel de Shopify durante el acompañamiento." },
      { src: "/media/testimonio-primera-campana.jpg", alt: "Conversación de WhatsApp: felicitación a un alumno por su primera campaña en menos de un mes", title: "Primera campaña", text: "Primeros pedidos de una campaña lanzada en menos de un mes de trabajo." },
    ],
    note: "Los resultados corresponden a experiencias particulares. No representan una promesa de ventas o de ganancias para otros alumnos.",
  },

  // ---- 6. Para quién es ---------------------------------------------------
  forWho: {
    kicker: "Para quién es",
    title: "Puedes empezar con dudas. Lo importante es estar dispuesto a trabajar en ellas.",
    profiles: [
      { title: "Si comienzas desde cero", text: "Te ayudo a entender el modelo y organizar los primeros pasos: producto, cuentas, anuncios, atención y logística." },
      { title: "Si ya tienes experiencia", text: "Revisamos lo que has construido y trabajamos en los puntos que necesitan mejorar." },
      { title: "Si quieres delegar publicidad", text: "Consulta la gestión de campañas y mantén a tu cargo la atención al cliente y la logística." },
    ],
    requirements: [
      "Tiempo para asistir a las sesiones y ejecutar tareas",
      "Presupuesto para la mentoría y para la operación del negocio",
      "Disposición para probar, revisar datos y ajustar",
      "Acceso a las herramientas que necesite tu proyecto",
    ],
    age: "La experiencia previa no es un requisito. Si eres menor de edad, consulta los requisitos de participación y de apertura de cuentas.",
  },

  // ---- 7. Preguntas frecuentes -------------------------------------------
  faq: {
    kicker: "Preguntas",
    title: "Precio, sesiones y condiciones, sin letra pequeña.",
    items: [
      { q: "¿Cuánto cuesta la mentoría y qué incluye?", a: "$200.000 COP mensuales. Incluye ocho sesiones individuales en vivo de una hora cada una y documentos de apoyo." },
      { q: "¿Las sesiones son grupales?", a: "No. Son sesiones uno a uno con David, enfocadas en tu proyecto. Los días y horarios se acuerdan según la disponibilidad de ambas partes." },
      { q: "¿Qué pasa si no puedo asistir a una sesión?", a: "Si no puedes asistir a una sesión acordada, pierdes esa clase y no se repone. Por eso es importante elegir horarios en los que puedas participar." },
      { q: "¿Cuánto dura el proceso?", a: "El acompañamiento es mensual y puedes continuar el tiempo que quieras. El avance depende de tu punto de partida, del tiempo que dediques y de lo que ejecutes." },
      { q: "¿Puedo empezar sin experiencia en anuncios o tecnología?", a: "Sí. Trabajamos las herramientas según tu nivel, con tareas que puedas llevar a la práctica. Si ya tienes un negocio, revisamos lo que tienes para definir prioridades." },
      { q: "¿Necesito dinero adicional?", a: "Sí. La mensualidad corresponde a la mentoría. Necesitas presupuesto para probar anuncios y cubrir los costos de puesta en marcha y operación de tu negocio." },
      { q: "¿Y si me preocupa perder dinero al empezar?", a: "Es una preocupación válida. Antes de lanzar una prueba trabajamos costos, presupuesto y qué información queremos obtener. Toda prueba comercial tiene incertidumbre y puede generar pérdidas." },
      { q: "¿Qué herramientas se utilizan?", a: "Meta Ads, WhatsApp, Shopify y Dropi. TikTok Ads cuando corresponde al proyecto y al alcance acordado. El formato es en vivo, complementado con documentos; no incluye cursos grabados." },
      { q: "¿Se garantizan ventas?", a: "No. El acompañamiento incluye sesiones, guía y trabajo sobre tu proyecto. Las ventas dependen de producto, mercado, inversión, atención al cliente y ejecución." },
      { q: "¿Pueden gestionar mis campañas?", a: "Sí, es un servicio aparte: entre $500.000 y $2.000.000 COP mensuales según plataformas, cuentas, productos y seguimiento. El presupuesto de anuncios se paga aparte y tú mantienes la atención, las ventas y la logística. Antes de empezar acordamos por escrito el alcance y quién aporta los materiales." },
    ],
  },

  // ---- 8. Contacto --------------------------------------------------------
  contactSection: {
    kicker: "Contacto",
    title: "Cuéntame qué te frena. Revisemos por dónde empezar.",
    lead: "Tal vez tienes una idea y no sabes cómo ponerla en marcha. O ya invertiste y necesitas entender qué mejorar. Antes de contratar aclaramos alcance, precio y lo que necesitas para trabajar en tu negocio.",
  },

  footerNote:
    "Este sitio no promete ventas ni ganancias. El ecommerce implica riesgo e inversión, y los resultados dependen de factores como producto, mercado y ejecución.",
} as const;

export type Site = typeof site;

export const whatsappConfigured = /^\d{8,15}$/.test(site.contact.whatsapp);

export function whatsappHref(message: string = site.contact.whatsappMessage) {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
