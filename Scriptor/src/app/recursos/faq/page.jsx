"use client";
import React, { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
// Importa tu lógica de theme y los íconos necesarios:
import { useTheme } from "@/app/theme-provider";
import Link from "next/link";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Solo necesario si se usan bullet points, pero lo dejamos por si acaso

export default function FaqPage() {
  const { darkMode } = useTheme();
// Estado para la pestaña activa
  const [activeTab, setActiveTab] = useState("consultasServicio");
  const [showFaqs, setShowFaqs] = useState(true);
// Para animación de fade-in

  // Estado para controlar qué acordeón está abierto (un solo ítem abierto en toda la sección)
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // --- INICIO: Definición de colores de botones (copiado de pagina modelo) ---
  const buttonActiveBg = "bg-purple-600"; // Model active button
  const buttonActiveText = "text-white"; // Model active button text
  const buttonInactiveBg = darkMode ? "bg-gray-700" : "bg-gray-200"; // Adjusted for blog context, similar to model pagination/inactive tabs
  const buttonInactiveText = darkMode ? "text-white" : "text-gray-800"; // Adjusted for blog context
  const buttonHoverBg = "hover:bg-purple-600"; // Fondo morado en hover
  const buttonHoverText = "hover:text-white"; // Texto blanco en hover
  // --- FIN: Definición de colores de botones ---


const handleTabChange = (tabKey) => {
    setShowFaqs(false);
    setActiveTab(tabKey);
    setOpenFaqIndex(null);
// Resetea el acordeón abierto al cambiar de pestaña

    // Ya no necesitamos actualizar el mensaje de categoría
    // setChosenCategory(...);
setTimeout(() => {
      setShowFaqs(true);
    }, 50); // Duración corta para la transición
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index); 
  };

  // Datos de FAQ por categoría (Restaurado completo)
  const faqData = {
    consultasServicio: {
      title: "Consultas de Servicio",
      faqs: [
        {
          question: "¿Qué servicios ofrece ResumeGuru.in?",
          answer:
            "ResumeGuru.in ofrece redacción de currículum compatible con ATS, creación de cartas de presentación y optimización de perfil de LinkedIn para profesionales de todos los niveles." ,
        },
        {
          question: "¿Qué métodos de pago están disponibles?",
          answer:
            "Aceptamos pagos tanto nacionales como internacionales, incluyendo UPI, tarjetas de débito/crédito y banca en línea. Para clientes internacionales, se ofrecen opciones adicionales como transferencias bancarias y PayPal.",
        },
        {
          question: "¿Crean currículums internacionales o en formato Europass?", 
          answer:
            "Sí, nuestro equipo se especializa en crear currículums adaptados a los requisitos de todas las profesiones y países, incluyendo formatos Europass." ,
        },
        {
          question: "¿Es genuino ResumeGuru.in?",
          answer:
            "¡Absolutamente! ResumeGuru.in es confiable, respaldado por más de 2,000 buscadores de empleo y cuenta con una calificación superior a 4.5 en Google, lo que lo convierte en un proveedor de servicios fiable y genuino." ,
        },
        {
          question: "¿Es gratis ResumeGuru.in?",
          answer:
            "ResumeGuru.in ofrece servicios de redacción de currículum de pago, pero puedes acceder a recursos gratuitos en forma de kits, blogs y más en la sección de recursos de nuestro sitio web." ,
        },
        {
          question: "¿ResumeGuru.in crea currículums compatibles con ATS?",
          answer:
            "Sí, nos especializamos en crear currículums amigables con ATS para nuestros clientes, adaptados a los roles que buscas." ,
        },
        {
          question: "¿Garantiza ResumeGuru.in una puntuación ATS en los currículums que crea?",
          answer:
            "Sí, garantizamos una puntuación superior al 75% utilizando escáneres confiables como Jobscan, asegurando que tu currículum se alinee con la descripción del puesto." ,
        },
        {
          question: "¿Cuál es el tiempo de entrega (TAT) de los servicios de ResumeGuru.in?" ,
          answer:
            "Entregamos en 3–4 días hábiles. Sin embargo, pueden ocurrir demoras durante temporadas altas o festividades." ,
        },
        {
          question: "¿ResumeGuru.in ofrece servicios puntuales?",
          answer:
            "Sí, ofrecemos servicios puntuales, que incluyen 20 días de ediciones ilimitadas y un archivo Word editable, para que puedas realizar cambios urgentes. Las ediciones después de 20 días tienen costo adicional." ,
        },
        {
          question: "¿ResumeGuru.in ofrece consultas personalizadas?",
          answer:
            "Sí, brindamos soporte personalizado a través de WhatsApp. Generalmente respondemos a las consultas en un plazo de 24 horas." ,
        },
        {
          question: "¿Cómo puedo contactar a ResumeGuru.in?",
          answer:
            "Puedes contactarnos a través de: Instagram DM: @resumeguru.in, WhatsApp: +91 99155 53497, Email: rohit@resumeguru.in.",
        },
        {
          question: "¿ResumeGuru.in acepta pedidos al por mayor?" ,
          answer:
            "Sí, atendemos pedidos en grandes cantidades para instituciones educativas, orientadores de carrera o cualquier persona que necesite servicios de redacción de currículum, carta de presentación, optimización de LinkedIn y más. Contáctanos por email o teléfono para más información." ,
        },
        {
          question:
            "¿Qué incluye el servicio de optimización de perfil de LinkedIn ofrecido por ResumeGuru.in?",
          answer:
            "Nuestro servicio de optimización de perfil de LinkedIn incluye: banner personalizado, titular con palabras clave, resumen atractivo, sección de experiencia detallada y 30 habilidades específicas. Toda la información se entrega en un documento para que puedas actualizar tu perfil." ,
        },
        {
          question:
            "¿ResumeGuru.in proporciona plantillas de currículum o redacta currículums desde cero?",
          answer:
            "¡Ofrecemos ambas opciones! Puedes adquirir plantillas de currículum en nuestro sitio web o elegir un currículum totalmente personalizado redactado desde cero." ,
        },
        {
          question:
            "¿Puedo elegir la plantilla o el formato para mi currículum?",
          answer:
            "Sí, los clientes pueden seleccionar entre una variedad de plantillas compatibles con ATS antes de que comencemos a trabajar en su currículum." ,
        },
        {
          question: "¿Cuál es el proceso después de adquirir nuestros servicios?",
          answer:
            "Después de la compra: nuestro equipo se pondrá en contacto contigo por email o WhatsApp, se te enviará un formulario detallado para recopilar la información necesaria, seleccionarás una plantilla y crearemos el primer borrador, el cual te será enviado por email. Se resolverán consultas adicionales según sea necesario durante el proceso." ,
        },
        {
          question: "¿Por qué utilizan Jobscan para el análisis ATS?",
          answer:
            "Jobscan es una herramienta confiable que compara tu currículum con la descripción del puesto para proporcionar una puntuación ATS precisa, a diferencia de herramientas basadas en IA que dependen de algoritmos genéricos." ,
        },
        {
          question: "¿Qué sucede si no estoy satisfecho con el servicio?",
          answer:
            "Estamos comprometidos con tu satisfacción. Si el primer borrador no cumple con tus expectativas, ofrecemos múltiples revisiones hasta que quedes completamente satisfecho." ,
        },
        {
          question: "¿Recibiré un archivo Word editable?",
          answer:
            "Sí, todos nuestros clientes reciben un archivo Word editable, permitiéndote realizar actualizaciones de manera rápida.",
        },
        {
          question:
            "¿Puedo solicitar ediciones una vez finalizado el currículum?" ,
          answer:
            "Sí, puedes solicitar ediciones ilimitadas hasta 20 días después de la entrega. Después de este período, las ediciones tendrán costo adicional." ,
        },
      ],
    },
    redaccionCurriculum: { // Preguntas restauradas aquí
      title: "Redacción de Currículum",
      faqs: [
        {
          question: "¿Qué es un currículum?",
          answer:
            "Un currículum es un documento profesional que resume tus habilidades, experiencia laboral y educación. Es tu primera impresión en el proceso de selección, ayudando a los reclutadores a decidir si te invitan a una entrevista. Un currículum bien estructurado puede incrementar significativamente tus posibilidades de ser preseleccionado." ,
        },
        {
          question: "¿Qué es un CV?",
          answer:
            "Un CV (Curriculum Vitae) es un documento detallado que destaca tus logros académicos, experiencia laboral, publicaciones e investigaciones. Se utiliza principalmente en ámbitos académicos, de investigación y educativos. A diferencia del currículum, el CV suele incluir un historial completo de tu carrera y logros académicos." ,
        },
        {
          question: "¿Cuál es la diferencia entre un CV y un currículum?",
          answer:
            "Las diferencias clave son:  • Longitud: los CV son más largos y detallados, mientras que los currículums son concisos. • Propósito: los CV se usan para roles académicos o de investigación, mientras que los currículums se utilizan para solicitudes de empleo. • Personalización: los currículums se adaptan a cada oferta, mientras que los CV permanecen estáticos. • Contenido: los CV incluyen todos los logros, mientras que los currículums resaltan experiencias relevantes. • Orden: los CV siguen un formato cronológico, mientras que los currículums usan un orden cronológico inverso." ,
        },
        {
          question: "¿Son lo mismo un CV y un currículum?",
          answer:
            "No, no son lo mismo. Un CV se utiliza para fines académicos y de investigación, mientras que un currículum es un documento conciso para solicitudes de empleo. Sin embargo, en países como India, Europa y Sudáfrica, los términos se usan a menudo de manera intercambiable." ,
        },
        {
          question:
            "¿Qué debo incluir en mi currículum si soy recién egresado?",
          answer:
            "Como recién egresado, incluye: información de contacto, resumen o perfil profesional, educación, habilidades (técnicas y blandas) y secciones relevantes como pasantías, proyectos, certificaciones, voluntariado y actividades extracurriculares." ,
        },
        {
          question: "¿Cuánto debe extenderse mi currículum?",
          answer:
            "La extensión ideal depende de tu nivel de experiencia:  • Recién egresados (0–3 años): 1 página. • Profesionales de nivel medio (3–8 años): hasta 1.5 páginas. • Profesionales senior (8+ años): hasta 2 páginas." ,
        },
        {
          question: "¿Qué tipografías puedo usar en mi currículum?",
          answer:
            "Utiliza fuentes profesionales y legibles. Se recomiendan: Calibri, Arial, Garamond, Helvetica, Times New Roman, Verdana y Cambria." ,
        },
        {
          question: "¿Cuál es el mejor formato para redactar un currículum?",
          answer:
            "El mejor formato es un diseño limpio y profesional que garantice legibilidad y compatibilidad con ATS. Usa un diseño moderno con encabezados claros, fuente y espaciado consistente, y sin gráficos o colores innecesarios. Consulta ejemplos para más detalles." ,
        },
        {
          question:
            "¿Puedo aplicar el mismo currículum a cada oferta de trabajo?",
          answer:
            "No, debes personalizar tu currículum para cada solicitud de empleo. Esto implica incluir palabras clave específicas, resaltar experiencias relevantes y alinear tus habilidades y logros con la descripción del puesto, aumentando así tus posibilidades de ser preseleccionado." ,
        },
        // --- Más preguntas que podrían haber estado aquí originalmente ---
        // Añade aquí el resto de las ~35 preguntas faltantes si las tienes.
        // Ejemplo de cómo añadir más:
        // {
        //   question: "¿Pregunta Adicional 1?", 
        //   answer: "Respuesta a la pregunta adicional 1.",
        // },
        // {
        //   question: "¿Pregunta Adicional 2?",
        //   answer: "Respuesta a la pregunta adicional 2.",
        // },
        // ... y así sucesivamente hasta completar las ~44
       ], 
    },
    ats: {
      title: "Sistema de Seguimiento de Candidatos (ATS)",
      faqs: [
        {
          question: "¿Qué es ATS?",
          answer:
            "ATS (Sistema de Seguimiento de Candidatos) es un software utilizado por los empleadores para gestionar el proceso de selección. Escanea, analiza y clasifica currículums en función de palabras clave específicas, facilitando la preselección de candidatos." ,
        },
        {
          question: "¿Cómo hacer que tu currículum sea compatible con ATS?",
          answer:
            "Para crear un currículum compatible con ATS: • Utiliza un formato sencillo sin gráficos ni tablas. • Incluye palabras clave de la descripción del puesto. • Usa encabezados estándar como 'Experiencia' y 'Habilidades'. • Guarda tu currículum en un formato compatible, como PDF o Word." ,
        },
        {
          question: "¿Cuál es el mejor formato de currículum compatible con ATS?",
          answer:
            "El formato cronológico inverso es el más adecuado para ATS. Resalta la experiencia reciente, utiliza encabezados claros y mantiene una estructura sencilla sin elementos de diseño distractores. Consulta algunos ejemplos." ,
        },
        {
          question: "¿Cuál es el mejor sitio para verificar tu puntuación ATS?",
          answer:
            "Plataformas confiables como Jobscan son ideales para verificar la puntuación ATS. Analizan tu currículum en comparación con la descripción del puesto y brindan retroalimentación para mejorar la adecuación." ,
        },
        {
          question: "¿ATS rechaza automáticamente mi currículum?",
          answer:
            "Sí, ATS puede rechazar automáticamente los currículums si: • Carecen de palabras clave relevantes. • Tienen un formato deficiente o incluyen elementos no legibles como gráficos. • No cumplen con los requisitos básicos de la descripción del puesto." ,
        },
        {
          question: "¿Cuántas empresas utilizan ATS?",
          answer:
            "Más del 90% de las empresas Fortune 500 y muchas pymes utilizan ATS para agilizar sus procesos de selección, convirtiéndolo en una herramienta estándar en la contratación.",
        },
        {
          question: "¿Por qué debo preocuparme por ATS?" ,
          answer:
            "ATS suele ser el primer filtro en el proceso de selección. Un currículum mal optimizado puede no llegar a ser visto por un reclutador humano, reduciendo significativamente tus oportunidades de entrevista." ,
        },
        {
          question: "¿Funciona un currículum infográfico en ATS?",
          answer:
            "No, los currículums infográficos suelen fallar en ATS, ya que el sistema no puede leer imágenes, gráficos o formatos de texto no estándar. Es preferible utilizar formatos basados en texto y estructurados." ,
        },
        {
          question:
            "¿Cuáles son las características de un currículum compatible con ATS?",
          answer:
            "Debe utilizar fuentes estándar como Arial o Calibri, evitar gráficos, imágenes o tablas, incluir palabras clave específicas y seguir una estructura clara con encabezados estándar. Además, debe guardarse en formatos compatibles como PDF o Word." ,
        },
        {
          question: "¿ATS puede leer archivos PDF?",
          answer:
            "Sí, ATS puede leer archivos PDF, pero depende de cómo se haya creado el PDF. Evita PDFs escaneados o con diseños excesivamente elaborados, ya que podrían no ser interpretados correctamente." ,
        },
      ],
    },
    cartaPresentacion: {
      title: "Redacción de Carta de Presentación",
      faqs: [
        {
          question:
            "¿Debo adjuntar una carta de presentación con mi currículum?",
          answer:
            "Un currículum es un documento profesional que resume tus habilidades, experiencia laboral y educación. Es tu primera impresión en el proceso de selección, ayudando a los reclutadores a decidir si te invitan a una entrevista. Un currículum bien estructurado puede marcar la diferencia." ,
        },
        {
          question: "¿Cómo redactar una buena carta de presentación?",
          answer:
            "Para escribir una carta de presentación efectiva: • Comienza con un saludo profesional. • Preséntate y menciona el puesto al que postulas. • Destaca tus habilidades, logros y experiencias relevantes. • Demuestra entusiasmo por el puesto y la empresa. • Finaliza con una llamada a la acción cortés." ,
        },
        {
          question:
            "¿Cómo resaltar un lapso en mi carrera en la carta de presentación?",
          answer:
            "Para abordar un lapso en tu carrera: • Explica brevemente la razón (por ejemplo, crecimiento personal, formación adicional, cuidado familiar). • Enfatiza las habilidades adquiridas durante ese periodo, como certificaciones o trabajo freelance. • Reafirma tu compromiso y disposición para contribuir." ,
        },
        {
          question: "¿Qué es una carta de presentación y por qué utilizarla?",
          answer:
            "Una carta de presentación es un documento personalizado que se envía junto con tu currículum. Te introduce al empleador, explica tus calificaciones y demuestra tu entusiasmo por el puesto, añadiendo un toque personal que diferencia tu aplicación." ,
        },
        {
          question: "¿Cómo elaborar una carta de presentación para mi currículum?",
          answer:
            "Utiliza un formato profesional que incluya tu información de contacto y los datos del empleador. Dirígela al encargado de contratación, enfócate en cómo tus habilidades y experiencias se alinean con la descripción del puesto, y asegúrate de que sea concisa (250-400 palabras) y sin errores." ,
        },
        {
          question: "¿Por qué es necesaria una carta de presentación?",
          answer:
            "La carta de presentación te permite: • Brindar contexto a tu currículum. • Destacar habilidades y logros específicos. • Mostrar tu entusiasmo por el puesto y la empresa, lo que te da ventaja frente a candidatos que solo envían el currículum." ,
        },
        {
          question: "¿Cómo adjunto una carta de presentación a mi currículum?",
          answer:
            "Guarda tu carta de presentación y currículum en un solo archivo PDF, etiquetado profesionalmente (por ejemplo, 'Nombre_Apellido_Curriculum_Carta.pdf'). Alternativamente, envía la carta por separado si se indica." ,
        },
        {
          question:
            "¿Debe estar orientada la carta de presentación al puesto?",
          answer:
            "Sí, es esencial que la carta de presentación esté dirigida al puesto específico, mencionando el título del trabajo, el nombre de la empresa y resaltando cómo tus habilidades se ajustan a los requisitos del puesto, demostrando conocimiento de la empresa." ,
        },
      ],
    },
    perfilLinkedIn: {
      title: "Perfil de LinkedIn",
      faqs: [
        {
          question: "¿Cómo crear un perfil de LinkedIn para encontrar empleo?" ,
          answer:
            "Para crear un perfil de LinkedIn optimizado para empleo, asegúrate de incluir: • Foto de perfil profesional. • Titular que mencione claramente tu rol y habilidades. • Sección 'Acerca de' con un resumen conciso de tu experiencia, habilidades y objetivos profesionales. • Detalle de tu experiencia laboral y logros. • Educación, certificaciones y cursos relevantes. • Habilidades y endorsements. • Recomendaciones de colegas o mentores. La optimización de palabras clave es crucial para aumentar tu visibilidad ante reclutadores." ,
        },
        {
          question: "¿Cómo utilizar LinkedIn para encontrar empleo?",
          answer:
            "Sigue estos pasos para aprovechar LinkedIn en la búsqueda de empleo: • Optimiza tu perfil completándolo y utilizando palabras clave relevantes. • Utiliza la pestaña 'Empleos' para buscar oportunidades en empresas de tu interés. • Aplica directamente mediante la opción 'Postulación Fácil' cuando esté disponible. • Contacta a empleadores o reclutadores con mensajes personalizados y profesionales. • Activa alertas de empleo y participa en grupos de la industria." ,
        },
        {
          question: "¿Cómo redactar un buen titular en LinkedIn?",
          answer:
            "Un titular efectivo sigue esta fórmula: [Puesto] | [Habilidades/Experiencia] | [Propuesta de Valor] | [Llamado a la Acción].\nEjemplos:\n“Analista de Datos | Experto en SQL y Python | Transformando datos en información | Disponible para oportunidades”\n“Especialista en Marketing | SEO y Content Marketing | Impulsando el crecimiento de marcas | Conectemos”" ,
        },
        {
          question: "¿Cómo enviar mensajes a reclutadores en LinkedIn?",
          answer:
            "Al contactar reclutadores: • Comienza con un saludo y una breve presentación. • Menciona el puesto de interés y por qué eres adecuado. • Resume tus habilidades o experiencia relevantes. • Concluye con un agradecimiento y una invitación a dialogar.\nEjemplo: “Hola [Nombre del Reclutador], he visto la vacante para [Puesto] en [Empresa] y creo que mi experiencia en [Área] me hace un candidato ideal. Me encantaría conversar sobre cómo puedo contribuir a su equipo. ¡Gracias!”" ,
        },
        {
          question: "¿Debo usar la función 'Open to Work' en LinkedIn?" ,
          answer:
            "Considera los pros y contras:\nPros:\n • Aumenta la visibilidad ante reclutadores.\n • Señala que estás activamente buscando oportunidades.\nContras:\n • Puede parecer un signo de desesperación si se abusa.\n • No todos los empleadores le dan el mismo valor.\nUtilízala de forma estratégica, limitando la visibilidad a reclutadores si prefieres no mostrarlo públicamente." ,
        },
        {
          question: "¿Qué es la función 'Postulación Fácil' de LinkedIn?" ,
          answer:
            "La función 'Postulación Fácil' permite aplicar a empleos directamente usando la información de tu perfil.\nBeneficios:\n • Ahorra tiempo al evitar formularios largos.\n • Es fácil y rápida de utilizar.\nDesventajas:\n • Limita la personalización de tu aplicación, ya que en algunos casos no se pueden adjuntar currículums o cartas personalizados." ,
        },
        {
          question: "¿Puedo usar LinkedIn de forma gratuita?" ,
          answer:
            "Sí, LinkedIn ofrece una versión gratuita que incluye funcionalidades esenciales como crear perfil, conectar, postular a empleos y participar en discusiones. LinkedIn Premium ofrece características adicionales, como mensajes InMail y acceso a LinkedIn Learning." ,
        },
        {
          question: "¿Cómo utilizar LinkedIn siendo principiante?",
          answer:
            "Como principiante:\n • Completa tu perfil con una foto profesional, titular y resumen.\n • Conecta con colegas, exalumnos y profesionales de la industria.\n • Participa dando 'me gusta', comentando y compartiendo publicaciones.\n • Sigue a empresas e influenciadores de tu sector para obtener información.\n • Comparte contenido relevante para construir credibilidad." ,
        },
        {
          question: "¿Qué es LinkedIn Learning?",
          answer:
            "LinkedIn Learning es una plataforma en línea que ofrece cursos sobre negocios, tecnología, habilidades creativas y más. Forma parte de LinkedIn Premium, pero también se puede acceder de manera independiente, permitiéndote adquirir nuevas competencias y certificados." ,
        },
        {
          question: "¿Cómo aumentar tu visibilidad en LinkedIn?",
          answer:
            "Para mejorar tu visibilidad:\n • Añade palabras clave relevantes en tu titular, resumen y sección de habilidades.\n • Comparte contenido de manera regular.\n • Interactúa con publicaciones dando 'me gusta', comentando y compartiendo.\n • Establece conexiones significativas en tu sector.\n • Participa en grupos relacionados con tu industria." ,
        },
        {
          question: "¿Cómo encontrar el enlace de tu perfil de LinkedIn?",
          answer:
            "Para encontrar el enlace de tu perfil:\n • Visita tu perfil.\n • Haz clic en 'Información de contacto' bajo tu foto.\n • Se mostrará tu enlace personalizado en la ventana emergente." ,
        },
        {
          question:
            "¿Qué son las conexiones de primer, segundo y tercer grado en LinkedIn?",
          answer:
            "Conexiones de primer grado: personas con las que estás directamente conectado.\nConexiones de segundo grado: conexiones de tus contactos de primer grado.\nConexiones de tercer grado: conexiones de tus contactos de segundo grado. Cada nivel amplía tu red profesional." ,
        },
        {
          question:
            "¿Qué son las recomendaciones en LinkedIn y cómo puedo obtenerlas?",
          answer:
            "Las recomendaciones son testimonios escritos por tus conexiones acerca de tus habilidades, ética laboral o experiencia. Se muestran en tu perfil y aportan credibilidad. Solicita recomendaciones a jefes, colegas o mentores." ,
        },
        {
          question: "¿Cómo añadir más secciones a un perfil de LinkedIn?",
          answer:
            "Para agregar más secciones:\n • Ve a tu perfil y haz clic en el botón 'Añadir sección'.\n • Elige entre opciones como Habilidades, Certificaciones, Proyectos, Experiencia de voluntariado, Cursos, Recomendaciones y más.\nEsto enriquecerá tu perfil y lo hará destacar." ,
        },
      ],
    },
  };

  // Define los patrones de fondo como en la página modelo
  const backgroundPatternLight =
    "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";
  const backgroundPatternDark =
    "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)";

  const getSectionStyle = (isAlternateSection) => {
    const baseBg = darkMode
      ? isAlternateSection
        ? "bg-gray-900" 
        : "bg-black" 
      : isAlternateSection
      ? "bg-gray-100" 
      : "bg-white"; 
    const pattern = darkMode ? backgroundPatternDark : backgroundPatternLight;
    const textColor = darkMode ? "text-white" : "text-gray-800"; 

    return {
      sectionClassName: `py-16 ${baseBg} ${textColor}`,
      sectionStyle: {
        backgroundImage: pattern,
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      },
    }; 
  };

  const { sectionClassName: heroClassName, sectionStyle: heroStyle } =
    getSectionStyle(false); // Primera sección, fondo principal
  const { sectionClassName: faqClassName, sectionStyle: faqStyle } =
    getSectionStyle(true); // Segunda sección, fondo alterno
  const { sectionClassName: ctaClassName, sectionStyle: ctaStyle } =
    getSectionStyle(false); // Tercera sección, fondo principal

  return (
    <>
      <Header />
      <main>
        {/* Sección Hero - Estilo copiado de Hero75Section (SIN bullet points) */}
        <section
          id="faq-hero"
          className={`${heroClassName} relative flex items-center justify-center min-h-screen pt-32`}
          style={heroStyle}
        >
          <div className="container mx-auto px-6 text-center relative z-10"> 
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Preguntas Frecuentes (FAQ)
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Resuelve tus dudas sobre nuestros servicios de currículum, LinkedIn,
              herramientas de optimización y más. 
            </p>
            {/* Bullet points eliminados */}
          </div>
        </section>

        {/* Sección de FAQ con pestañas y acordeones - Estilo de FaqSection y OrderSection */}
        <section id="faq-content" className={faqClassName} style={faqStyle}>
          <div className="container mx-auto px-6 max-w-4xl"> 
            {/* Botones de pestañas - Estilo COPIADO de la pagina modelo */}
            <div className="mb-10 text-center flex flex-col items-center space-y-4">
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { label: "Consultas de Servicio", key: "consultasServicio" }, 
                  { label: "Redacción de Currículum", key: "redaccionCurriculum" }, 
                  { label: "Sistema de Seguimiento de Candidatos (ATS)", key: "ats" }, 
                  { label: "Redacción de Carta de Presentación", key: "cartaPresentacion" }, 
                  { label: "Perfil de LinkedIn", key: "perfilLinkedIn" }, 
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => handleTabChange(tab.key)}
                    // --- ESTILOS COPIADOS DE PAGINA MODELO (BOTONES CATEGORÍA) ---
                    className={`px-4 py-2 h-12 rounded-md transition duration-300 ease-in-out cursor-pointer font-semibold text-sm flex items-center justify-center text-center w-auto shadow-sm hover:shadow-lg
                      ${activeTab === tab.key
                        ? `${buttonActiveBg} ${buttonActiveText}` // Active style 
                        : `${buttonInactiveBg} ${buttonInactiveText} ${buttonHoverBg} ${buttonHoverText}` // Inactive style + hover 
                      }
                     `}
                     // --- FIN DE ESTILOS COPIADOS ---
                  >
                    {tab.label}
                   </button> 
                ))}
              </div>
              {/* Texto "Has elegido..." eliminado */}
             </div> 

            {/* Contenido de la pestaña activa - Estilo de FaqSection del modelo */}
            <div
              key={activeTab}
              className={`space-y-2 transition-all duration-700 transform ${
                showFaqs ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8" 
              }`}
            >
              {faqData[activeTab].faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                    <div
                    key={index} 
                    className={`
                      rounded-md p-3 cursor-pointer
                      ${darkMode ? "bg-gray-800" : "bg-gray-50"} 
                      hover:bg-purple-600/20 
                      hover:shadow-[0_0_10px_rgba(128,0,128,0.2)] 
                      ${darkMode ? "hover:text-white" : "hover:text-gray-900"} 
                      transition-all duration-700 
                     `}
                    onClick={() => toggleFaq(index)} 
                  >
                    <div className="flex items-center justify-between">
                      <h3
                          className={`
                          text-base font-semibold 
                          ${darkMode ? "text-gray-100" : "text-gray-900"} 
                        `}
                      >
                        {faq.question}
                      </h3>
                      <span className="text-purple-600 font-bold"> 
                        {isOpen ? "-" : "+"} 
                      </span>
                    </div>
                    <div
                      className={`
                        overflow-hidden transition-all duration-700 ease-in-out 
                        ${isOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"}  // Aumentado max-h para respuestas largas 
                      `}
                    >
                      <p
                        className={`
                          text-base whitespace-pre-line // Para respetar saltos de línea en las respuestas 
                          ${darkMode ? "text-gray-100" : "text-gray-800"} 
                        `}
                      >
                        {faq.answer}
                      </p>
                     </div> 
                  </div>
                ); 
              })}
            </div>
          </div>
        </section>

        {/* Sección CTA - Estilo de título/párrafo COPIADO de Hero pagina modelo */}
        <section id="cta-contact" className={ctaClassName} style={ctaStyle}>
          <div className="container mx-auto px-6 text-center">
             <div className="max-w-xl mx-auto">
                 {/* --- INICIO: ESTILOS COPIADOS DE TITULO HERO PAGINA MODELO --- */}
                 <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6"> 
                     ¿Aún Tienes Preguntas? 
                 </h2>
                 {/* --- FIN: ESTILOS COPIADOS DE TITULO --- */}
                 {/* --- INICIO: ESTILOS COPIADOS DE PARRAFO HERO PAGINA MODELO --- */}
                 <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8"> 
                    Si no encontraste respuesta a tu duda en nuestra sección de FAQ,
                    contáctanos y te responderemos con gusto. 
                 </p>
                 {/* --- FIN: ESTILOS COPIADOS DE PARRAFO --- */}
                <div className="flex justify-center mt-2">
                    <Link href="#">
                        <button className="bg-purple-600 text-white px-10 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
                        Contactar Soporte
                         </button> 
                    </Link>
                </div>
             </div>
          </div>
        </section>
      </main>
        <Footer /> 
    </>
  );
}
