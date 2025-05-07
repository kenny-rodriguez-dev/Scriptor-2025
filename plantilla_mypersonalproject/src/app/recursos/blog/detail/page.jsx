"use client";
import React, { useState } from "react"; // Added useState
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useRouter } from "next/navigation";
import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from '@mui/icons-material/X'; // Using X icon
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
// Import the theme logic
import { useTheme } from "@/app/theme-provider"; // Ensure this path is correct

// --- Accordion Item Component (similar to FaqSection logic) ---
function AccordionItem({ question, answer, guide, index, openIndex, onToggle, darkMode }) {
  const isOpen = openIndex === index;
  const textColor = darkMode ? "text-white" : "text-gray-800";
  const hoverTextColor = darkMode ? "hover:text-white" : "hover:text-gray-900";
  const bgColor = darkMode ? "bg-gray-800" : "bg-gray-50";
  const hoverBgColor = "hover:bg-purple-600/20";
  const hoverShadow = "hover:shadow-[0_0_10px_rgba(128,0,128,0.2)]";
  const transition = "transition-all duration-700 ease-in-out";

  return (
    <div
      className={`rounded-md p-3 cursor-pointer ${bgColor} ${hoverBgColor} ${hoverShadow} ${hoverTextColor} ${transition}`}
      onClick={() => onToggle(index)}
    >
      <div className="flex items-center justify-between">
        <h3 className={`text-base font-semibold ${darkMode ? "text-gray-100" : "text-gray-900"}`}>
          {question}
        </h3>
        <span className="text-purple-600 font-bold text-xl ml-2"> {/* Added ml-2 for spacing */}
          {isOpen ? "-" : "+"}
        </span>
      </div>
      <div
        className={`overflow-hidden ${transition} ${isOpen ? "max-h-[1000px] opacity-100 mt-2" : "max-h-0 opacity-0"}`} // Increased max-height
      >
         {/* Display Answer */}
         {answer && (
           <p className={`text-base mt-2 ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
             <em>Mejor respuesta:</em> {answer}
           </p>
         )}
         {/* Display Guide */}
         {guide && (
            <p className={`text-sm mt-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              <em>Guía:</em> {guide}
            </p>
         )}
      </div>
    </div>
  );
}
// --- End Accordion Item Component ---

export default function BlogDetail() {
  const router = useRouter();
  const { darkMode } = useTheme(); // Get darkMode state

  // State for managing open accordion item index (null means all closed)
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Toggle function for Questions
  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  // Toggle function for FAQs
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };


  // Define background pattern styles based on the theme
  const backgroundPattern = darkMode
    ? "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)"
    : "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";

  // Function to get section classes, alternating background based on index
  const getSectionClasses = (index) => {
    const isEven = index % 2 === 0;
    const baseBackground = darkMode
      ? isEven
        ? "bg-black"
        : "bg-gray-900"
      : isEven
      ? "bg-white"
      : "bg-gray-100";
    const textColor = darkMode ? "text-white" : "text-gray-800";
    // Consistent padding
    return `py-16 ${baseBackground} ${textColor}`;
  };

  // Data for Recent Posts
  const recentPosts = [
    "Más de 70 preguntas de entrevista para la industria farmacéutica: ejecutivo de documentación",
    "Más de 100 preguntas de entrevista sobre desarrollo empresarial",
    "Más de 100 preguntas de entrevista sobre control de calidad de Salesforce",
    "Más de 80 preguntas de entrevista sobre bienes raíces",
    "Más de 100 preguntas de entrevista sobre gestión de la cadena de suministro",
    "Más de 80 preguntas de entrevista sobre recepción",
    "Más de 90 preguntas de entrevista sobre control de calidad en la industria farmacéutica",
    "Más de 90 preguntas de entrevista sobre secretaría de empresa",
    "Más de 70 preguntas de entrevista sobre representantes médicos",
    "Más de 100 preguntas formuladas en la entrevista de MBA",
  ];


  // Data for Recent Images
  const recentImages = [
    {
      src: "https://resumeguru.in/wp-content/uploads/2024/04/1-1-e1738830530285.png",
      alt: "Recent Post Image 1",
      href: "#", // Placeholder link
    },
    {
      src: "https://resumeguru.in/wp-content/uploads/2024/04/2-1-e1738830622999.png",
      alt: "Recent Post Image 2",
      href: "#", // Placeholder link
    },
  ];


  // --- Data for Accordion Questions ---
  const salesforceQuestions = [
      // Section 1: Técnicas y de Configuración
      {
        category: "1. Preguntas Técnicas y de Configuración",
        items: [
          {
            question: "¿Qué es Salesforce y cuáles son sus beneficios principales?",
            answer: "Salesforce es una plataforma CRM basada en la nube que proporciona un conjunto de herramientas para ventas, servicio, marketing y más. Sus beneficios incluyen escalabilidad, personalización, acceso a datos en tiempo real, facilidad de integración y un vasto ecosistema de aplicaciones que respaldan el crecimiento empresarial.",
            guide: "Comienza definiendo Salesforce de manera concisa, luego enfatiza su naturaleza en la nube y enumera los beneficios clave. Relaciona estos beneficios con cómo ayudan a las empresas a optimizar procesos y mejorar la eficiencia."
          },
          {
            question: "¿Cuál es la diferencia entre un objeto personalizado y un objeto estándar?",
            answer: "Los objetos estándar son predefinidos por Salesforce (p. ej., Cuentas, Contactos, Oportunidades) e incluyen funcionalidades predeterminadas. Por otro lado, los objetos personalizados son creados por una organización para almacenar datos específicos de sus procesos de negocio, lo que ofrece mayor flexibilidad y funcionalidad personalizada.",
            guide: "Aclare que los objetos estándar están disponibles de fábrica, mientras que los objetos personalizados se crean para satisfacer necesidades comerciales específicas. Proporcione ejemplos para ilustrar cuándo usar cada tipo."
          },
          {
            question: "Explique los tipos de relaciones disponibles en Salesforce.",
            answer: "Salesforce admite varios tipos de relaciones: Relaciones de búsqueda: crea una asociación flexible entre objetos. Relaciones maestro-detalle: crea una relación estrechamente acoplada donde el registro secundario hereda propiedades del principal, incluido el uso compartido y la eliminación. Relaciones de muchos a muchos: se implementan utilizando un objeto de unión que vincula dos objetos entre sí.",
            guide: "Defina claramente cada tipo de relación, compare sus diferencias en términos de dependencia y compartición de datos y proporcione ejemplos simples para el contexto."
          },
           {
            question: "¿Cómo se crea un campo personalizado y qué tipos de campos están disponibles?",
            answer: "Para crear un campo personalizado, vaya al Administrador de Objetos, seleccione el objeto deseado y luego vaya a \"Campos y Relaciones\" para hacer clic en \"Nuevo\". Los tipos de campo disponibles incluyen texto, número, fecha, lista de selección, casilla de verificación, fórmula, moneda y porcentaje, entre otros.",
            guide: "Explique brevemente el proceso paso a paso y enumere los tipos de campo más comunes. Resalte la importancia de elegir el tipo de campo adecuado según los requisitos de los datos."
          },
          {
            question: "¿Qué son las reglas de validación? Da un ejemplo.",
            answer: "Las reglas de validación son criterios definidos para garantizar la integridad de los datos antes de guardar un registro. Por ejemplo, para garantizar que la fecha de cierre de una oportunidad sea posterior, se puede usar la regla: CloseDate > TODAY(). Esto evita que los usuarios guarden una oportunidad con una fecha de cierre no válida.",
            guide: "Explique el propósito de las reglas de validación para mantener la calidad de los datos. Ofrezca un ejemplo claro y sencillo con la fórmula para ilustrar su funcionamiento."
          },
          {
            question: "¿Qué es una regla de flujo de trabajo y cómo se utiliza?",
            answer: "Una regla de flujo de trabajo automatiza los procedimientos internos estándar al activar acciones, como actualizaciones de campos, alertas por correo electrónico o creación de tareas, cuando un registro cumple con los criterios especificados. Esto ayuda a reducir las tareas manuales y garantiza la coherencia en toda la organización.",
            guide: "Describa qué son las reglas de flujo de trabajo y cómo optimizan los procesos empresariales. Mencione las acciones comunes que activan las reglas de flujo de trabajo y observe que Salesforce está en transición hacia herramientas más avanzadas como Process Builder y Flow."
          },
          {
            question: "¿En qué se diferencia Process Builder de las reglas de flujo de trabajo y cuándo elegirías uno sobre el otro?",
            answer: "Process Builder ofrece una interfaz más visual y admite la automatización multipaso, gestionando una lógica compleja que las reglas de flujo de trabajo no pueden. Si bien las reglas de flujo de trabajo son adecuadas para tareas sencillas de una sola acción, Process Builder es la opción preferida para automatizar procesos complejos que pueden involucrar múltiples objetos y condiciones.",
            guide: "Destaque las capacidades mejoradas y la naturaleza visual de Process Builder. Explique que la elección de uno u otro depende de la complejidad de la automatización requerida y reconozca la evolución continua hacia Flow para scenarios aún más avanzados."
          },
          {
            question: "¿Cómo se implementa la validación de datos en Salesforce?",
            answer: "La validación de datos en Salesforce se implementa mediante una combinación de reglas de validación, campos obligatorios, seguridad a nivel de campo y configuraciones específicas para cada tipo de dato. Este enfoque multicapa garantiza que los datos cumplan con los estándares empresariales definidos antes de ingresarlos en la base de datos.",
            guide: "Destaque las diversas herramientas disponibles para la validación de datos y explique cómo funcionan en conjunto. Proporcione ejemplos breves de cómo se puede utilizar cada método para garantizar la calidad de los datos."
          },
          {
            question: "¿Qué son los tipos de registros y los diseños de página y cómo funcionan juntos?",
            answer: "Los tipos de registro permiten a las organizaciones ofrecer diferentes procesos de negocio, valores de lista de selección y experiencias de usuario dentro del mismo objeto. Los diseños de página controlan la organización y la visibilidad de los campos, las listas relacionadas y otros elementos de la interfaz de usuario. Juntos, personalizan la experiencia del usuario, garantizando que los usuarios vean información relevante para su rol o proceso de negocio.",
            guide: "Defina los tipos de registro y los diseños de página, e ilustre cómo interactúan para crear una interfaz de usuario personalizada. Utilice ejemplos como diferentes diseños de página para los equipos de ventas y de soporte."
          },
          {
            question: "Explique el concepto de campos de fórmula y cuándo utilizarlos.",
            answer: "Los campos de fórmula son campos de solo lectura que calculan valores automáticamente basándose en otros campos, funciones o expresiones. Se utilizan para mostrar dinámicamente datos como texto concatenado, porcentajes calculados o fechas sin necesidad de actualizaciones manuales.",
            guide: "Aclare que los campos de fórmula son dinámicos y de solo lectura, diseñados para realizar cálculos en tiempo real. Ofrezca algunos ejemplos de casos de uso típicos, destacando su eficiencia al mostrar datos calculados."
          },
          {
            question: "¿Qué es un campo de resumen y cuáles son sus limitaciones?",
            answer: "Los campos de resumen acumulativos agregan datos de registros secundarios en una relación maestro-detalle mediante funciones como SUMA, CONTAR, MÍNIMO o MÁXIMO. Sus limitations incluyen estar disponibles únicamente en el registro maestro y estar restringidos a agregaciones simples que no admiten cálculos complejos ni relaciones más allá de la relación maestro-detalle.",
            guide: "Describa lo que hacen los campos de resumen, incluidas las funciones de agregación comunes, y establezca claramente las limitaciones, especialmente la dependencia de las relaciones maestro-detalle."
          },
          {
            question: "¿Cómo se gestiona la gestión de duplicados en Salesforce?",
            answer: "La gestión de duplicados se realiza mediante reglas de coincidencia y reglas de duplicado. Estas herramientas permiten a los administradores definir criterios para identificar registros duplicados, alertar a los usuarios cuando se encuentran duplicados y, si se configura, bloquear su creación.",
            guide: "Céntrese en las funciones integradas de gestión de duplicados en Salesforce. Explique cómo funcionan conjuntamente las reglas de coincidencia y de duplicados, y proporcione un breve ejemplo de cómo se pueden configurar estas opciones."
          },
          {
            question: "Describe el uso de Lightning App Builder.",
            answer: "Lightning App Builder es una herramienta intuitiva que permite a los administradores crear y personalizar páginas en Salesforce Lightning Experience. Permite añadir componentes estándar, personalizados y de terceros para crear páginas adaptadas a las necesidades específicas de la empresa, mejorando así la productividad y la experiencia general del usuario.",
            guide: "Explique que Lightning App Builder permite crear páginas personalizadas sin código. Mencione su interfaz de arrastrar y soltar y cómo puede mejorar la interfaz de usuario al integrar varios componentes."
          },
          {
            question: "¿Cómo se configuran las plantillas de correo electrónico en Salesforce?",
            answer: "Las plantillas de correo electrónico se configuran en Salesforce accediendo a Configuración y seleccionando Plantillas de correo electrónico. Se pueden crear en varios formatos, como texto, HTML (con membrete), personalizado o Visualforce, y se utilizan en flujos de trabajo, alertas de correo electrónico y comunicaciones masivas para garantizar la coherencia y la imagen de marca en la correspondencia.",
            guide: "Describa brevemente el proceso y mencione los distintos tipos de plantillas de correo electrónico. Enfatice la importancia de la coherencia y la imagen de marca al comunicarse con los clientes."
          },
          {
            question: "¿Qué es un sandbox y cuáles son sus diferentes tipos?",
            answer: "Un entorno de pruebas es una réplica del entorno de producción que se utiliza para desarrollo, pruebas y formación. Los diferentes tipos incluyen: Developer Sandbox: para codificar y realizar pruebas con un pequeño conjunto de datos. Developer Pro Sandbox: similar a Developer pero con mayor almacenamiento. Sandbox de copia parcial: incluye una muestra de datos de producción junto con metadatos. Sandbox completo: una réplica completa del entorno de producción, incluidos todos los datos.",
            guide: "Defina un entorno de pruebas y enumere los distintos tipos, con una breve descripción de su uso previsto. Resalte la importancia de probar los cambios en un entorno no productivo."
          },
          {
            question: "¿Cómo se implementan los cambios desde un entorno sandbox a producción?",
            answer: "Las implementaciones pueden ejecutarse mediante conjuntos de cambios, la herramienta de migración Ant o Salesforce DX. El proceso implica probar exhaustivamente los cambios en un entorno de pruebas, preparar un paquete de implementación y, posteriormente, implementar y validar los cambios en el entorno de producción para garantizar una transición fluida.",
            guide: "Mencione diversas herramientas de implementación y enfatice la importancia de las pruebas. Describa los pasos típicos de preparación, implementación y validación de cambios, enfatizando la precaución y las mejores prácticas en la implementación en producción."
          },
          {
            question: "¿Cuál es la función de Schema Builder en Salesforce?",
            answer: "El Generador de Esquemas ofrece una representación visual del modelo de datos de Salesforce, mostrando objetos, campos y relaciones. Ayuda a los administradores a comprender y diseñar la arquitectura de datos, simplificando la planificación y la resolución de problemas de personalización.",
            guide: "Explique el propósito del Constructor de Esquemas como herramienta visual. Destaque cómo puede ayudar a planificar personalizaciones y comprender las relaciones entre los distintos objetos."
          },
          {
            question: "¿Cómo se configura un portal de autoservicio en Salesforce?",
            answer: "Un portal de autoservicio, a menudo implementado como una Comunidad de Salesforce, se configura activando las funciones de la Comunidad y configurándolo a través del Creador de Comunidades. Esta configuración permite a los clientes o socios acceder a recursos como bases de conocimiento, herramientas de gestión de casos y foros de la comunidad, integrándose a la perfección con los datos principales de Salesforce.",
            guide: "Describa brevemente el proceso: comience por habilitar las Comunidades y luego configure la interfaz con Community Builder. Destaque los beneficios de brindar a los usuarios finales funciones de autoservicio."
          },
          {
            question: "¿Cuáles son las diferentes formas de automatizar procesos comerciales en Salesforce?",
            answer: "Salesforce ofrece múltiples herramientas de automatización que incluyen: Reglas de flujo de trabajo: para actualizaciones de campos básicos, alertas por correo electrónico y creación de tareas. Process Builder: para la automatización de procesos complejos y de múltiples pasos. Flow Builder: Para una automatización avanzada con pantallas interactivas y procesos guiados. Desencadenantes de Apex: para automatización personalizada basada en código cuando las herramientas declarativas son insuficientes.",
            guide: "Enumere cada herramienta de automatización, describa brevemente su caso de uso principal y tenga en cuenta que la elección depende de la complejidad y los requisitos específicos del proceso comercial."
          },
          {
            question: "¿Puede explicar la importancia de Salesforce AppExchange para la configuración?",
            answer: "Salesforce AppExchange es un mercado para aplicaciones y componentes de terceros que amplían las capacidades de la plataforma Salesforce. Ofrece soluciones prediseñadas para diversas necesidades empresariales, reduciendo el tiempo y el coste de desarrollo, y proporcionando un ecosistema fiable de complementos que se integran a la perfección con Salesforce.",
            guide: "Analice el valor de AppExchange como recurso para ampliar la funcionalidad de Salesforce. Enfatice que ofrece soluciones probadas y listas para usar, que pueden mejorar considerablemente la plataforma sin necesidad de desarrollo personalizado."
          }
        ]
      },
      // Section 2: Basadas en Escenarios
      {
        category: "2. Preguntas Basadas en Escenarios",
        items: [
          {
            question: "Un representante de ventas ingresa datos inexactos en registros de Oportunidad de manera constante. ¿Cómo abordarías este problema?",
            answer: "Comenzaría analizando las causas raíz: ya sea un problema de capacitación, directrices de ingreso de datos poco claras o desafíos de usabilidad del sistema. Implementaría reglas de validación de datos para prevenir entradas incorrectas, ofrecería capacitación específica al equipo de ventas y revisaría los diseños de página para asegurar que los campos necesarios estén claramente marcados y organizados de forma lógica. Además, establecería auditorías periódicas de datos para mantener la integridad continua de la información.",
            guide: "Explica la importancia de entender la causa raíz, luego discute soluciones tanto técnicas (como reglas de validación) como no técnicas (capacitación, auditorías). Enfatiza un enfoque equilibrado para la prevención y corrección."
          },
          {
            question: "Un usuario solicita un cambio en el proceso de aprobación de descuentos que actualmente retrasa las ventas. ¿Cómo abordarías el rediseño del proceso?",
            answer: "Comenzaría por mapear el proceso de aprobación existente para identificar cuellos de botella. A continuación, trabajaría con las partes interesadas para comprender los nuevos requisitos y los resultados deseados. Dependiendo de la complejidad, podría ajustar el proceso de aprobación existente utilizando las funciones del Proceso de Aprobación de Salesforce o implementar una solución más flexible con Process Builder y Flow para automatizar las notificaciones y las aprobaciones. Realizar pruebas en un entorno de pruebas antes de la implementación es crucial.",
            guide: "Describa los pasos: evalúe el proceso actual, recopile las opiniones de las partes interesadas, diseñe una solución (ya sea mediante procesos de aprobación o herramientas más avanzadas) y realice pruebas exhaustivas. Haga hincapié en la colaboración y las pruebas."
          },
           {
             question: "La empresa desea automatizar la distribución mensual de un informe de rendimiento de ventas. ¿Cómo lo configurarías?",
             answer: "Aprovecharía las funciones de generación de informes de Salesforce creando un informe completo y programándolo para que se ejecute mensualmente. Si se necesita más interactividad, también podría configurar un panel con componentes dinámicos. Para una mayor automatización, la integración de alertas por correo electrónico con el informe programado garantiza que las partes interesadas reciban automáticamente los datos de rendimiento actualizados.",
             guide: "Céntrese en el uso de las herramientas estándar de informes y programación de Salesforce. Mencione el potencial de los paneles y las alertas automatizadas por correo electrónico, y enfatice la simplicidad, la eficiencia y la fiabilidad."
          },
          {
            question: "Los usuarios han informado que el rendimiento de Salesforce se ha ralentizado. ¿Qué pasos de solución de problemas tomarías?",
            answer: "Comenzaría por revisar las métricas de rendimiento del sistema y los límites del regulador para identificar cualquier cuello de botella. A continuación, comprobaría si hay automatizaciones ineficientes (como desencadenadores o flujos mal escritos) y analizaría los cambios o implementaciones recientes. También revisaría las estrategias de indexación y archivado de datos si el volumen de datos ha aumentado. Por último, sería importante colaborar con el equipo técnico para solucionar cualquier problema de backend.",
            guide: "Analice un enfoque sistemático para la resolución de problemas: revise las métricas de rendimiento, examine la automatización y el código, y evalúe las prácticas de gestión de datos. Resalte la importancia de la colaboración con los recursos técnicos cuando sea necesario."
          },
          {
             question: "El equipo de marketing necesita integrar una herramienta de correo electrónico de terceros con Salesforce. ¿Qué pasos seguirías?",
             answer: "Primero evaluaría los requisitos de integración consultando al equipo de marketing y revisando la documentación de la API de la herramienta externa. Dependiendo de la complejidad, podría usar las funciones de integración integradas de Salesforce (como la mensajería saliente o los eventos de plataforma) u optar por middleware como Mulesoft. Realizar pruebas en un entorno de pruebas antes de una implementación completa es esencial para garantizar la integridad de los datos y una comunicación adecuada entre los sistemas.",
             guide: "Enfatizar la recopilación de requisitos y la comprensión de las capacidades de la herramienta de terceros. Describir las opciones de integración, como herramientas integradas o middleware, y destacar la importancia de las pruebas en entornos aislados."
          },
          {
             question: "Necesitas migrar personalizaciones de un sandbox a producción con el mínimo tiempo de inactividad. ¿Cómo planificarías y ejecutarías esto?",
             answer: "Comenzaría por asegurarme de que todos los cambios se prueben exhaustivamente en el entorno de pruebas. Después, usaría conjuntos de cambios (o Ant Migration Tool/Salesforce DX para implementaciones más complejas) para empaquetar las personalizaciones. Un plan de implementación incluiría copias de seguridad previas a la implementación, pruebas posteriores y una estrategia de reversión en caso de problemas. Comunicaría el tiempo de inactividad planificado a todas las partes interesadas y programaría la implementación durante las horas de menor actividad.",
             guide: "Describa los pasos clave: pruebas, empaquetado, comunicación y programación. Resalte el uso de herramientas de implementación adecuadas, copias de seguridad y un plan de reversión para mitigar los riesgos."
          },
          {
            question: "Los registros de cuentas duplicadas están causando problemas de calidad de datos. ¿Qué estrategia implementarías?",
            answer: "Implementaría la gestión de duplicados mediante la configuración de reglas de coincidencia y duplicación en Salesforce para identificar y evitar entradas duplicadas. Además, ejecutaría un proceso de deduplicación de los datos existentes utilizando herramientas como Data.com Duplicate Management o soluciones de terceros. La capacitación de los usuarios sobre prácticas adecuadas de entrada de datos y la revisión periódica de los datos también formarían parte de la estrategia.",
            guide: "Explique las medidas preventivas y correctivas. Céntrese en las herramientas nativas de gestión de duplicados de Salesforce y en la importancia del mantenimiento continuo de los datos y la capacitación de los usuarios."
          },
          {
             question: "Un usuario no puede acceder a un registro que necesita a pesar de que las configuraciones de compartición son correctas. ¿Cómo resolverías esto?",
             answer: "Revisaría el perfil del usuario, su rol y cualquier regla de uso compartido que pudiera afectar el acceso. Verificaría al propietario del registro y comprobaría si existe algún uso compartido manual o en equipo. De ser necesario, ajustaría la configuración de uso compartido o crearía una regla específica para otorgar el acceso requerido. Documentar la resolución ayuda a garantizar la coherencia en futuros casos similares.",
             guide: "Describa un enfoque de diagnóstico claro: verifique perfiles, roles y reglas de uso compartido. Explique la importancia de comprender la seguridad a nivel de registro y proporcione ejemplos de ajustes que podrían ser necesarios."
          },
          {
             question: "Tu empresa desea proporcionar a los clientes un portal de autoservicio para la gestión de casos. ¿Cómo implementarías esto?",
             answer: "Configuraría una Comunidad de Salesforce (Experience Cloud) como portal de autoservicio. Esto implica habilitar la comunidad, seleccionar una plantilla que se ajuste a las necesidades del negocio y usar el Creador de Comunidades para personalizar las páginas de envío de casos, seguimiento y acceso a la base de conocimientos. Garantizar la seguridad de los datos y la gestión de usuarios es fundamental durante la configuración.",
             guide: "Describa el proceso desde la habilitación de Comunidades hasta la personalización del portal. Enfatice las ventajas del autoservicio, las consideraciones de seguridad y las opciones de personalización disponibles."
          },
          {
             question: "Un objeto personalizado recientemente creado no aparece en el lanzador de aplicaciones para los usuarios. ¿Qué pasos seguirías para solucionar y arreglar este problema?",
             answer: "Primero, revisaría la configuración del objeto en el Administrador de Objetos para asegurarme de que esté configurado para estar disponible en Lightning. A continuación, revisaría los perfiles de usuario y los conjuntos de permisos para confirmar que se hayan otorgado los permisos necesarios (como \"Leer\" y \"Crear\"). Además, verificaría que la configuración de la aplicación incluya el objeto personalizado en sus ajustes de navegación. Ajustar estos ajustes debería resolver el problema de visibilidad.",
             guide: "Concéntrese en verificar la configuración a nivel de objeto y perfil, así como la configuración de la aplicación. Siga los pasos lógicos para la solución de problemas y enfatice la verificación de permisos y configuraciones de diseño."
          },
          {
             question: "Una nueva unidad de negocio requiere un conjunto distinto de tipos de registro y diseños de página para un objeto existente. ¿Cómo lo implementarías?",
             answer: "Crearía nuevos tipos de registro para capturar los procesos y requisitos de datos específicos de la unidad de negocio. Posteriormente, diseñaría diseños de página personalizados para estos tipos de registro y los asignaría según los perfiles de usuario. Esto garantiza que cada unidad de negocio vea la información y los campos más relevantes durante la entrada de datos y la visualización de registros. Lo ideal sería probar estos cambios con un grupo pequeño de usuarios antes de implementarlos por completo.",
             guide: "Explique los pasos para crear tipos de registro y sus correspondientes diseños de página, y cómo asignarlos según los roles de usuario. Haga hincapié en las pruebas y la comunicación con las partes interesadas."
          },
          {
             question: "Se necesita un panel dinámico que refleje datos basados en el rol del usuario que ha iniciado sesión. ¿Cómo crearías esto?",
             answer: "Crearía un panel y habilitaría la opción \"Ejecutar como usuario conectado\", que permite que el panel muestre datos según los derechos de acceso y la jerarquía de roles del usuario. También configuraría los informes subyacentes para asegurar que filtren los datos con precisión según el contexto del usuario. Este enfoque garantiza que cada usuario vea solo la información relevante para sus responsabilidades.",
             guide: "Destaque el uso de paneles dinámicos y la función \"Ejecutar como usuario conectado\". Explique cómo esta configuración aprovecha el modelo de seguridad de Salesforce para mostrar datos personalizados y mencione las pruebas con diferentes perfiles de usuario."
          },
          {
             question: "Los requisitos de automatización para un proceso exceden lo que las herramientas declarativas pueden manejar. ¿Qué enfoque tomarías?",
             answer: "En este caso, consideraría implementar activadores de Apex o procesos por lotes. Primero documentaría detalladamente los requisitos del negocio y luego evaluaría si se requiere código personalizado para gestionar lógica compleja, volumen de datos o necesidades de procesamiento en tiempo real. Me aseguraría de que la solución siga las mejores prácticas de Salesforce, incluyendo la masificación y la gestión de errores, y la implementaría tras realizar pruebas exhaustivas en un entorno de pruebas.",
             guide: "Analice los criterios para pasar de herramientas declarativas al desarrollo a medida. Explique cómo planificar, codificar y probar soluciones Apex, enfatizando el cumplimiento de las mejores prácticas y la importancia de las pruebas en entornos aislados."
          },
          {
             question: "Al crear un reporte personalizado, notas que los datos agregados no coinciden con las expectativas. ¿Qué pasos de solución de problemas seguirías?",
             answer: "Comenzaría revisando los filtros, la agrupación y los campos de resumen del informe para asegurarme de que se ajusten a los resultados deseados. Verificaría que se incluyan los objetos y las relaciones correctos, y comprobaría si hay inconsistencias en los datos o campos faltantes. De ser necesario, generaría informes paralelos con agrupaciones más simples para aislar el problema y luego ajustaría la configuración según corresponda.",
             guide: "Explique la importancia de revisar metódicamente la configuración del informe y los datos subyacentes. Destaque pasos como la comprobación de filtros, agrupaciones y cálculos de resumen, y el uso de pruebas iterativas para identificar la discrepancia."
          },
          {
             question: "Un aumento repentino en el volumen de datos está causando una generación más lenta de reportes. ¿Cómo optimizarías los reportes?",
             answer: "Evaluaría los filtros del informe para asegurarme de que sean lo más selectivos posible, reduciendo así el tamaño del conjunto de datos. También podría sugerir archivar o purgar datos antiguos e innecesarios y colaborar con el equipo de la base de datos para implementar la indexación en campos clave. Además, optimizar el diseño del informe (como limitar el número de objetos unidos) puede mejorar el rendimiento. Es fundamental probar el impacto de estos cambios en un entorno de pruebas antes de la implementación completa.",
             guide: "Analice el papel de la gestión de datos en la optimización del rendimiento. Describa pasos como el refinamiento de filtros, el archivado de datos antiguos y la consultoría sobre la indexación de bases de datos, y mencione la necesidad de probar cualquier cambio en el rendimiento."
          }
        ]
      },
       // Section 3: Gestión de Datos y Reportes
      {
        category: "3. Preguntas de Gestión de Datos y Reportes",
        items: [
            {
                question: "¿Cómo importas datos en Salesforce?",
                answer: "Los datos se pueden importar utilizando herramientas como el Asistente de Importación de Datos para cargas de datos más sencillas y el Data Loader para volúmenes grandes y procesos más complejos. El proceso implica mapear los campos de origen a los campos de Salesforce, validar los formatos de datos y realizar una prueba antes de ejecutar la importación completa.",
                guide: "Comienza describiendo las herramientas disponibles y sus casos de uso típicos. Enfatiza la importancia del mapeo de datos, la validación y la prueba para garantizar la integridad de los datos durante la importación."
            },
            {
                question: "¿Cuáles son las mejores prácticas para mantener la calidad de los datos en Salesforce?",
                answer: "Mantener la calidad de los datos implica implementar reglas de validación, gestionar duplicados y realizar rutinas regulares de limpieza de datos. Además, es importante garantizar la correcta entrada de datos mediante capacitación, implementar seguridad a nivel de campo y campos obligatorios, y programar auditorías periódicas para identificar y corregir inconsistencias.",
                guide: "Analice tanto las medidas preventivas (como las reglas de validación y la capacitación) como las correctivas (como las auditorías y la deduplicación). Resalte la importancia de una estrategia proactiva para garantizar la integridad de los datos a largo plazo."
            },
            {
                question: "Explica la diferencia entre reportes y paneles.",
                answer: "Los informes son listas o resúmenes detallados y personalizables de datos generados a partir de registros de Salesforce. Los paneles son representaciones visuales que consolidan múltiples informes en gráficos y métricas, ofreciendo una visión general rápida de los indicadores clave de rendimiento.",
                guide: "Aclare que los informes proporcionan datos y detalles granulares, mientras que los paneles están diseñados para obtener información visual. Utilice ejemplos, como un informe que enumera las transacciones de ventas en comparación con un panel que muestra las tendencias generales del rendimiento de las ventas."
            },
            {
                question: "¿Cómo creas y personalizas un reporte en Salesforce?",
                answer: "Crear un informe implica seleccionar el tipo de informe adecuado, definir filtros y elegir los campos que se mostrarán. La personalización incluye agrupar datos, añadir campos de resumen y ajustar las opciones de formato. También es importante guardar y ejecutar informes de prueba para garantizar que la configuración cumpla con los requisitos de análisis previstos.",
                guide: "Describa el proceso paso a paso: seleccione el tipo de informe, aplique filtros y elija los campos. Mencione la importancia de agrupar y resumir los datos, así como de probar y perfeccionar el diseño del informe según los comentarios de las partes interesadas."
            },
            {
                question: "¿Cómo utilizas los tipos de reporte para adaptar las necesidades de reporte?",
                answer: "Los tipos de informe determinan los objetos y las relaciones disponibles para la generación de informes. Se pueden crear tipos de informe personalizados para incluir campos específicos y objetos relacionados que no están disponibles en los tipos de informe estándar, lo que permite un análisis de datos personalizado y la obtención de información que se adapta a las necesidades específicas del negocio.",
                guide: "Explique la función de los tipos de informe al definir los conjuntos de datos disponibles. Proporcione ejemplos de cuándo podría necesitar un tipo de informe personalizado para capturar relaciones entre objetos no contemplados por las opciones predeterminadas."
            },
            {
                question: "¿Cómo programas reportes para su entrega automática?",
                answer: "Los informes se pueden programar para que se ejecuten a intervalos específicos mediante las funciones \"Suscribirse\" o \"Programar ejecuciones futuras\". Esto permite generar informes automáticamente y enviarlos por correo electrónico a los usuarios designados, garantizando así que las partes interesadas reciban actualizaciones oportunas sin intervención manual.",
                guide: "Describa las opciones de programación disponibles en Salesforce. Enfatice las ventajas de la automatización para la generación de informes rutinarios y la importancia de configurar la programación y la lista de destinatarios correcta."
            },
            {
                question: "¿Qué es un campo bucket y cuándo lo utilizarías?",
                answer: "Un campo de contenedor agrupa los registros de informes sin necesidad de una fórmula ni un campo personalizado. Se utiliza para segmentar rápidamente los datos en categorías (por ejemplo, clasificar clientes potenciales por rangos de valor potencial), lo que permite un análisis más dinámico y una personalización más sencilla de los informes.",
                guide: "Explique que los campos de contenedor son una herramienta declarativa que se utiliza para categorizar datos sobre la marcha. Proporcione un ejemplo práctico donde la agrupación de datos mejora la legibilidad de los informes y la toma de decisiones."
            },
            {
                question: "¿Cómo aseguras la integridad de los datos durante una migración?",
                answer: "Garantizar la integridad de los datos requiere una planificación exhaustiva: mapear los campos con precisión, limpiar los datos antes de la migración, usar herramientas que permitan la reversión si es necesario y realizar migraciones de prueba. Tras la migración, es fundamental validar los datos con informes de conciliación y pruebas de aceptación del usuario para confirmar su precisión.",
                guide: "Analice las fases previas a la migración, la migración y la posmigración. Resalte la importancia del mapeo, la limpieza, las pruebas y la verificación de datos para mantener su integridad durante todo el proceso."
            },
             {
                question: "¿Cómo manejas grandes volúmenes de datos en reportes para evitar problemas de rendimiento?",
                answer: "Optimizar informes con grandes volúmenes de datos implica usar filtros selectivos, indexar campos clave y resumir los datos a niveles superiores en lugar de mostrar todos los detalles. También resulta eficaz archivar datos históricos y usar el almacenamiento en caché de informes cuando corresponda, lo que garantiza que los informes se ejecuten eficientemente incluso con conjuntos de datos extensos.",
                guide: "Céntrese en las estrategias para reducir el volumen de datos y el tiempo de procesamiento de los informes. Mencione la importancia de la indexación, el filtrado adecuado y la generación de resúmenes, así como las mejores prácticas para la gestión de datos históricos."
            },
            {
                question: "¿Qué son los reportes combinados y cómo los creas?",
                answer: "Los informes combinados permiten mostrar datos de varios tipos de informes en una sola vista mediante la creación de bloques de informe independientes que se pueden correlacionar mediante campos comunes. Son útiles para comparar datos de diferentes objetos. Para crear uno, seleccione el formato \"Informe combinado\", añada los bloques de informe que desee y configure filtros y agrupaciones comunes para garantizar que los datos estén alineados y permitan una comparación significativa.",
                guide: "Explique el propósito y las ventajas de los informes conjuntos para consolidar datos entre objetos. Detalle los pasos para crearlos, enfatizando la importancia de seleccionar campos comunes para una agrupación y comparación de datos eficaces."
            }
        ]
      },
       // Section 4: Seguridad y Control de Acceso
      {
        category: "4. Preguntas de Seguridad y Control de Acceso",
        items: [
             {
                question: "¿Cuál es la diferencia entre perfiles y conjuntos de permisos?",
                answer: "Los perfiles sirven como base para los permisos de los usuarios, definiendo lo que pueden hacer en objetos y campos. Los conjuntos de permisos extienden estos permisos básicos al otorgar acceso adicional sin modificar el perfil. Esto permite un control de acceso flexible al agregar privilegios extra sobre el perfil del usuario.",
                guide: "Comienza definiendo los perfiles como el mecanismo principal de control de acceso, luego explica cómo los conjuntos de permisos funcionan como herramientas complementarias. Proporciona ejemplos como otorgar acceso temporal o adicional sin modificar el perfil básico."
            },
            {
                question: "¿Cómo funcionan las reglas de compartición en Salesforce?",
                answer: "Las reglas de uso compartido automatizan la extensión del acceso a los registros a los usuarios según criterios como la propiedad del registro o los valores de los campos. Funcionan ampliando el acceso más allá de la configuración de uso compartido predeterminada de toda la organización, permitiendo que grupos o roles específicos vean o editen registros a los que de otro modo no tendrían acceso.",
                guide: "Describa el propósito de las reglas de compartición y explique los dos tipos (basadas en criterios y basadas en el propietario). Enfatice su función para optimizar el acceso, especialmente en jerarquías organizativas complejas."
            },
            {
                question: "¿Cuál es el rol de la jerarquía y cómo afecta la visibilidad de los datos?",
                answer: "La jerarquía de roles en Salesforce determina la visibilidad de los registros, garantizando que los usuarios con mayor jerarquía hereden el acceso a los registros de los usuarios inferiores. Esta estructura refleja el organigrama, lo que permite a los gerentes o líderes de equipo ver los datos ingresados ​​por sus subordinados.",
                guide: "Comience con una definición clara de la jerarquía de roles y luego describa cómo influye en el intercambio y la visibilidad de los datos. Utilice ejemplos organizativos para ilustrar cómo los roles de nivel superior obtienen acceso implícito a los registros subordinados."
            },
            {
                question: "¿Cómo implementas la seguridad a nivel de campo?",
                answer: "La seguridad a nivel de campo se implementa configurando los permisos de campo en perfiles y conjuntos de permisos. Esto controla si un usuario puede ver o editar campos específicos de un objeto. Además, los diseños de página se pueden ajustar para ocultar campos incluso si los usuarios tienen permisos de acceso, lo que ofrece una capa adicional de seguridad.",
                guide: "Explique que la seguridad a nivel de campo gestiona el acceso a cada campo y destaque que funciona en conjunto con los perfiles y los conjuntos de permisos. Mencione las prácticas recomendadas, como usar la seguridad a nivel de campo para proteger datos confidenciales y garantizar la coherencia en toda la plataforma."
            },
            {
                question: "¿Qué son los ajustes de acceso a nivel organizacional (OWD) y cómo influyen en el acceso a los registros?",
                 answer: "Los valores predeterminados de toda la organización (OWD) establecen el nivel de acceso a los registros para todos los usuarios. Definen la configuración de uso compartido predeterminada para cada objeto, desde lectura/escritura pública hasta privada, lo que garantiza que solo los usuarios autorizados tengan acceso a datos confidenciales. Las reglas de uso compartido adicionales, la jerarquía de roles y el uso compartido manual refinan aún más este acceso.",
                guide: "Comience explicando OWD como la configuración de seguridad fundamental. Describa cómo afecta a todos los registros de un objeto y luego indique que OWD puede sobrescribirse o ampliarse con otros mecanismos de compartición."
            },
            {
                question: "¿Cómo auditas y monitoreas el acceso de los usuarios en Salesforce?",
                answer: "Salesforce ofrece herramientas como el Registro de Auditoría de Configuración, el Seguimiento del Historial de Campos y los informes del Historial de Inicio de Sesión para supervisar la actividad de los usuarios y los patrones de acceso. Estas herramientas ayudan a los administradores a realizar un seguimiento de los cambios, identificar actividades sospechosas y garantizar el cumplimiento de las políticas de seguridad. La revisión periódica de estos registros es esencial para mantener un entorno seguro.",
                guide: "Analice la importancia de supervisar el acceso de los usuarios y enumere las herramientas nativas de Salesforce disponibles para auditoría. Enfatice las revisiones periódicas y la supervisión proactiva como componentes clave de una estrategia de seguridad sólida."
            },
            {
                question: "¿Cómo gestionas el acceso de inicio de sesión y configuras restricciones de IP?",
                answer: "El acceso de inicio de sesión y las restricciones de IP se gestionan mediante perfiles y la configuración de acceso a la red. Los administradores pueden definir rangos de IP de confianza y restringir los inicios de sesión a estos rangos, lo que mejora la seguridad al garantizar que los usuarios solo puedan acceder a Salesforce desde redes autorizadas. Las restricciones de IP de inicio de sesión en los perfiles impiden el acceso no autorizado fuera de estos rangos definidos.",
                guide: "Describa el proceso de establecer restricciones de IP, comenzando por identificar redes confiables y luego configurándolas en los ajustes adecuados. Resalte el equilibrio entre la seguridad y la comodidad del usuario al determinar estas restricciones."
            },
            {
                question: "Explica la seguridad a nivel de registro y cómo se logra en Salesforce.",
                answer: "La seguridad a nivel de registro garantiza que los usuarios tengan acceso adecuado a cada registro. Esto se logra mediante una combinación de valores predeterminados para toda la organización, jerarquía de roles, reglas de uso compartido, uso compartido manual y gestión de territorios. En conjunto, estas capas crean un modelo de seguridad flexible que controla el acceso según los roles de usuario y el contexto específico del registro.",
                guide: "Comience con una definición de seguridad a nivel de registro y explique las múltiples capas que contribuyen a ella. Ofrezca una descripción general de la función de cada capa para garantizar que los usuarios solo vean lo que tienen permitido ver, utilizando ejemplos sencillos y claros."
            },
            {
                question: "¿Cómo configuras grupos públicos y colas, y cuál es su importancia en el control de acceso?",
                 answer: "Los grupos públicos son conjuntos de usuarios, roles o territorios que se pueden usar para simplificar las reglas y permisos de uso compartido. Las colas se utilizan para gestionar la carga de trabajo, reteniendo los registros de un grupo de usuarios hasta que alguien asuma la propiedad. Ambas son esenciales para gestionar la asignación de registros, optimizar los procesos y simplificar las configuraciones de uso compartido.",
                guide: "Defina claramente los grupos públicos y las colas, y explique cómo cada uno contribuye a la gestión eficaz del acceso y la carga de trabajo. Utilice escenarios como la asignación de casos o la gestión de clientes potenciales para ilustrar sus aplicaciones prácticas."
            },
            {
                question: "¿Cómo manejas datos sensibles para asegurar el cumplimiento y la seguridad en Salesforce?",
                answer: "El manejo de datos confidenciales requiere un enfoque multicapa que incluye seguridad a nivel de campo, opciones de cifrado, registros de auditoría y enmascaramiento de datos cuando corresponda. También implementaría políticas de contraseñas robustas, utilizaría autenticación de dos factores y revisaría periódicamente la configuración de uso compartido y los derechos de acceso de los usuarios para garantizar el cumplimiento de las normativas del sector.",
                guide: "Analice la importancia de la protección de datos y enumere diversas medidas (tanto técnicas como administrativas) para proteger la información confidencial. Enfatice una estrategia integral que incluya cifrado, control de acceso y supervisión del cumplimiento normativo, y proporcione ejemplos relevantes para las leyes de privacidad de datos."
            }
        ]
      },
      // Section 5: Integración y Automatización
      {
        category: "5. Preguntas de Integración y Automatización",
        items: [
            {
                question: "¿Cuáles son las diferentes opciones de integración disponibles en Salesforce?",
                answer: "Salesforce ofrece varias opciones de integración, incluyendo APIs REST y SOAP para servicios web, Bulk API para manejar grandes volúmenes de datos, Streaming API para actualizaciones en tiempo real y External Services que permiten la integración con APIs de terceros utilizando herramientas declarativas. Además, se pueden utilizar soluciones middleware como MuleSoft para integraciones más complejas.",
                guide: "Comienza enumerando los principales métodos de integración basados en API. Luego, menciona las opciones declarativas y las herramientas middleware, destacando cuándo es más apropiado cada enfoque. Enfatiza que la elección depende del volumen de datos, necesidades en tiempo real y complejidad."
            },
             {
                question: "Explica el rol de las APIs en la integración de Salesforce.",
                answer: "Las API sirven de puente entre Salesforce y los sistemas externos, permitiendo el intercambio de datos de forma segura y eficiente. La API REST de Salesforce es ideal para integraciones sencillas con aplicaciones web modernas, mientras que la API SOAP ofrece un sólido soporte para integraciones empresariales. Estas API permiten realizar operaciones como consultar, actualizar y eliminar registros de sistemas remotos.",
                guide: "Defina qué es una API en el contexto de Salesforce y diferencie entre las API REST y SOAP. Utilice ejemplos de escenarios de integración comunes y enfatice la seguridad y la eficiencia en el intercambio de datos."
            },
            {
                question: "¿Cómo determinas si usarías automatización declarativa o basada en código en un escenario dado?",
                answer: "La decisión depende de la complejidad y los requisitos específicos del proceso. Las herramientas de automatización declarativa, como Process Builder y Flow, son las preferidas para una lógica sencilla y de varios pasos que no exceda sus limitaciones. Si el proceso requiere lógica compleja, procesamiento de un gran volumen de datos u operaciones que superan las que ofrecen las herramientas declarativas, las soluciones basadas en código que utilizan activadores o clases de Apex son más adecuadas.",
                guide: "Analice las ventajas y desventajas entre la facilidad de uso y la complejidad. Haga hincapié en la evaluación de los requisitos del negocio, el volumen de datos y el mantenimiento futuro. Destaque que las herramientas declarativas suelen ser más rápidas de implementar, mientras que Apex proporciona mayor control y escalabilidad cuando es necesario."
            },
            {
                question: "Describe los diferentes tipos de flujos en Salesforce y cuándo usar cada uno.",
                answer: "Salesforce ofrece varios tipos de flujos: Flujos de pantalla: diseñados para experiencias de usuario guiadas e interactivas. Flujos iniciados automáticamente: se ejecutan en segundo plano sin interacción del usuario, ideal para tareas de automatización activadas por eventos del sistema. Flujos programados: Se ejecutan en momentos específicos para realizar tareas rutinarias, como actualizaciones de datos. La elección del tipo de flujo adecuado depende de si se requiere la interacción del usuario, si el proceso tiene un límite de tiempo o si debe ejecutarse automáticamente en segundo plano.",
                guide: "Defina brevemente cada tipo de flujo y proporcione ejemplos de escenarios en los que se utilizarían. Enfatice que la selección depende de los requisitos del proceso: si es interactivo, automatizado o programado."
            },
            {
                question: "¿Qué es un trigger Apex, y cuándo lo preferirías sobre las herramientas de automatización declarativas?",
                answer: "Un disparador de Apex es un fragmento de código que se ejecuta antes o después de operaciones de registro como insertar, actualizar o eliminar. Los disparadores son preferibles cuando se trabaja con lógica compleja, procesamiento masivo o escenarios que requieren ejecución en múltiples objetos, donde las herramientas declarativas podrían ser insuficientes. Proporcionan un control preciso sobre la automatización, pero requieren un diseño cuidadoso para cumplir con las mejores prácticas y evitar sobrepasar los límites del regulador.",
                guide: "Explique qué son los desencadenadores y los contextos en los que operan. Compare su uso con herramientas declarativas, destacando las ventajas de los desencadenadores de Apex para operaciones complejas con múltiples registros, y enfatizando la importancia de las mejores prácticas y la masificación."
            },
            {
                question: "¿Cómo manejas la gestión de errores y la captura de excepciones en procesos de automatización?",
                 answer: "La gestión de errores implica el diseño proactivo de la automatización para detectar y gestionar las excepciones con precisión. En herramientas declarativas como Flow, esto puede incluir rutas de fallo y mensajes de error. En Apex, los bloques try-catch se utilizan para gestionar excepciones, registrar errores y, si es necesario, revertir transacciones. La implementación de un registro y notificaciones de errores robustos garantiza que los problemas se puedan abordar con prontitud.",
                guide: "Analice la importancia de anticipar errores y planificar excepciones. Compare cómo las herramientas declarativas y Apex gestionan los errores, y mencione la necesidad de registros y alertas para facilitar el mantenimiento y la resolución de problemas continuos."
            },
            {
                question: "¿Cómo programas procesos por lotes en Salesforce?",
                answer: "Salesforce permite programar procesos por lotes mediante Apex Scheduler junto con la interfaz Database Batchable. Al crear una clase Apex que implemente estas interfaces, puede programar trabajos para que se ejecuten a intervalos o momentos específicos y procesar grandes volúmenes de datos sin afectar la experiencia del usuario. El uso de trabajos por lotes programados ayuda a gestionar la carga de procesamiento y a evitar alcanzar los límites del regulador durante picos de uso.",
                guide: "Describa la función del procesamiento por lotes en la gestión de grandes conjuntos de datos. Explique los pasos para crear y programar un trabajo por lotes y enfatice cómo la programación ayuda a optimizar el rendimiento, respetando al mismo tiempo los límites de Salesforce."
            },
            {
                question: "Explica cómo se pueden usar los eventos de plataforma para integración en tiempo real.",
                 answer: "Los eventos de plataforma en Salesforce son una potente herramienta de arquitectura basada en eventos que permite la comunicación en tiempo real entre Salesforce y sistemas externos. Permiten la publicación y suscripción a eventos, garantizando que las notificaciones o actualizaciones de datos se procesen de inmediato. Esto resulta especialmente útil en situaciones donde las actualizaciones en tiempo real son cruciales, como el procesamiento de pedidos o la gestión de inventario en tiempo real.",
                guide: "Defina los eventos de plataforma y describa su función en la integración de datos en tiempo real. Proporcione ejemplos de casos de uso y destaque cómo facilitan arquitecturas asincrónicas basadas en eventos para la propagación inmediata de datos."
            },
            {
                question: "¿Qué es Salesforce DX y cómo apoya la integración y automatización?",
                answer: "Salesforce DX es un moderno conjunto de herramientas de desarrollo que optimiza los procesos de integración y entrega continuas (CI/CD). Ofrece desarrollo basado en código fuente, lo que permite el control de versiones, la automatización de pruebas y la optimización de las implementaciones. Esto facilita la integración y la automatización, permitiendo a los desarrolladores gestionar el código en un entorno colaborativo y ágil, y automatizar las implementaciones desde entornos de pruebas hasta producción.",
                guide: "Comience explicando Salesforce DX como un marco de desarrollo avanzado. Resalte su función en el soporte de CI/CD, el control de versiones y las pruebas automatizadas, y mencione cómo se integra con otras herramientas para optimizar el ciclo de vida del desarrollo y la implementación."
            },
            {
                question: "¿Cómo monitoreas y depuras procesos de automatización en Salesforce?",
                 answer: "La monitorización y la depuración se realizan mediante diversas herramientas integradas en Salesforce. Para la automatización declarativa, herramientas como el depurador de flujo y los registros de depuración ayudan a rastrear la ruta de ejecución e identificar problemas. Para el código Apex, la consola de desarrollador, los registros de depuración y herramientas como la CLI de Salesforce son esenciales. Además, configurar notificaciones por correo electrónico para errores y aprovechar las herramientas de monitorización externas puede mejorar aún más la supervisión y la resolución de problemas.",
                guide: "Enfatizar la importancia de la monitorización proactiva para mantener una automatización robusta. Describir las herramientas nativas disponibles para depurar la automatización declarativa y codificada, y sugerir las mejores prácticas para el registro y la notificación de errores, con el fin de facilitar el mantenimiento continuo."
            }
        ]
      },
       // Section 6: Conductuales y Orientadas a Procesos
      {
        category: "6. Preguntas Conductuales y Orientadas a Procesos",
        items: [
             {
                question: "Cuéntame sobre un proyecto desafiante que gestionaste como Administrador de Salesforce.",
                answer: "En mi rol anterior, lideré la migración de nuestro CRM legado a Salesforce, lo que implicó un mapeo de datos complejo, rediseño de procesos y colaboración entre departamentos. Coordiné con diversos equipos para comprender los requisitos del negocio, gestioné la integridad de los datos mediante pruebas rigurosas y comuniqué el progreso a los interesados. A pesar de los plazos ajustados y desafíos imprevistos, el proyecto se completó a tiempo, resultando en un flujo de trabajo más optimizado y una mayor adopción por parte de los usuarios.",
                guide: "Comienza describiendo el contexto del proyecto y tu rol. Enfatiza los desafíos enfrentados, tu enfoque para resolver problemas y cómo tus esfuerzos condujeron a un resultado exitoso. Destaca la colaboración, comunicación y gestión efectiva del proyecto."
            },
             {
                question: "¿Cómo priorizas tareas y gestionas múltiples plazos?",
                answer: "Utilizo una combinación de herramientas de gestión de tareas y una comunicación clara con las partes interesadas para priorizar el trabajo. Empiezo evaluando el impacto y la urgencia de cada tarea, dividiéndolas en componentes más pequeños y manejables, y estableciendo plazos realistas. Las reuniones periódicas de seguimiento y un calendario detallado me ayudan a ajustar las prioridades dinámicamente, asegurándome de que los proyectos de alto impacto reciban la atención necesaria.",
                guide: "Explique su método para organizar el trabajo, mencionando herramientas (como calendarios o software de gestión de proyectos) y estrategias para evaluar la urgencia y el impacto de las tareas. Resalte la importancia de la comunicación y la adaptabilidad para gestionar los plazos."
            },
            {
                question: "Describe una situación en la que tuviste que implementar un cambio significativo en Salesforce.",
                answer: "Se me encargó la modernización del proceso de gestión de leads para alinearlo con las estrategias de ventas actualizadas. Esto implicó rediseñar los diseños de página, actualizar las reglas de validación y crear nuevos flujos de automatización. Colaboré con los equipos de ventas y marketing para recopilar los requisitos y realicé sesiones de capacitación para garantizar una adopción fluida. El cambio mejoró la calidad de los datos y aumentó las tasas de conversión.",
                guide: "Proporcione contexto describiendo la necesidad del cambio. Céntrese en cómo recopiló los requisitos, planificó la implementación, se comunicó con las partes interesadas y garantizó la adopción por parte de los usuarios. Resalte los resultados positivos del cambio."
            },
            {
                question: "¿Cómo aseguras una comunicación clara con partes no técnicas?",
                answer: "Adapto mi estilo de comunicación a la audiencia, evitando la jerga técnica y utilizando ejemplos claros y fáciles de entender. Por ejemplo, al hablar de actualizaciones de sistemas o cambios en los procesos, suelo utilizar recursos visuales como diagramas de flujo o paneles de control. También celebro reuniones periódicas y creo documentación detallada que traduce los conceptos técnicos en beneficios para el negocio, garantizando así que las partes interesadas comprendan plenamente el impacto de los cambios.",
                guide: "Resalte la importancia de adaptar su estilo de comunicación a la audiencia. Menciónelo con imágenes, lenguaje sencillo y actualizaciones periódicas. Enfatice la importancia de una documentación clara y la participación de las partes interesadas."
            },
             {
                question: "Cuéntame sobre una ocasión en la que tuviste que solucionar un problema complejo bajo presión.",
                answer: "Durante una importante implementación de Salesforce, falló una automatización crítica, lo que provocó interrupciones en el proceso de ventas. Reuní rápidamente un equipo multidisciplinario, revisé los registros del sistema e identifiqué una regla de validación mal configurada que entraba en conflicto con un flujo de automatización. Al aislar el problema, ajustar la configuración y probar la solución en un entorno de pruebas, lo resolvimos antes de que afectara significativamente las operaciones. Esta experiencia resaltó la importancia de la rápida identificación de problemas, la colaboración y las pruebas rigurosas.",
                guide: "Narre la situación contextualizando, describiendo la urgencia y detallando los pasos para solucionar el problema. Céntrese en el trabajo en equipo, la resolución eficaz de problemas y las medidas implementadas para prevenir futuros incidentes."
            },
            {
                question: "¿Cómo te mantienes actualizado sobre las mejores prácticas y nuevas funcionalidades de Salesforce?",
                answer: "Participo regularmente en eventos de la comunidad de Salesforce, seminarios web y grupos de usuarios locales para mantenerme al día de las últimas novedades. Me suscribo a los blogs oficiales de Salesforce y a los módulos de Trailhead, lo que me ayuda a perfeccionar mis habilidades continuamente. Además, experimento con nuevas funciones en un entorno de pruebas para comprender sus aplicaciones prácticas antes de recomendarlas a mi equipo.",
                guide: "Destaque su enfoque proactivo hacia el aprendizaje continuo. Mencione recursos específicos, como blogs de Salesforce, Trailhead y eventos comunitarios. Enfatice la importancia de la experimentación práctica y de compartir conocimientos con su equipo."
            },
            {
                question: "Describe tu experiencia colaborando con equipos multifuncionales.",
                answer: "En mi puesto anterior, trabajé en estrecha colaboración con los equipos de ventas, marketing, TI y atención al cliente en diversas iniciativas de Salesforce. Mediante reuniones interdisciplinarias periódicas, me aseguré de que todos los equipos aportaran información sobre los requisitos del sistema y comprendieran el impacto de cualquier cambio. Este enfoque colaborativo fomentó una visión compartida para el éxito y dio como resultado soluciones que satisfacían diversas necesidades empresariales.",
                guide: "Describa el alcance de su colaboración y los equipos involucrados. Enfatice cómo las reuniones periódicas y la comunicación abierta contribuyeron al entendimiento mutuo y a la resolución eficaz de problemas. Resalte el impacto positivo de este enfoque colaborativo en los resultados del proyecto."
            },
            {
                question: "¿Cómo abordas la documentación y capacitación para nuevas funcionalidades de Salesforce?",
                answer: "Creo que una documentación y capacitación exhaustivas son esenciales para una adopción exitosa. Creo guías intuitivas y videotutoriales que desglosan conceptos complejos en pasos fáciles de seguir. Además, realizo sesiones prácticas de capacitación y talleres de preguntas y respuestas para asegurar que los usuarios se sientan cómodos con las nuevas funciones. Recopilamos la retroalimentación posterior a la capacitación para mejorar continuamente el proceso de documentación y capacitación.",
                guide: "Describa su proceso para desarrollar documentación clara e impartir capacitación. Enfatice el uso de diversos formatos (escritos, visuales e interactivos) para adaptarse a diferentes estilos de aprendizaje. Mencione cómo recopila retroalimentación para perfeccionar su enfoque continuamente."
            },
            {
                question: "¿Puedes hablar de una vez en que identificaste una mejora de proceso en Salesforce?",
                answer: "Observé que el proceso de aprobación de solicitudes de descuento causaba retrasos. Tras analizar el flujo de trabajo, implementé un proceso de aprobación automatizado con Flow, lo que redujo la intervención manual y los tiempos de aprobación en un 40 %. Esta mejora no solo mejoró la eficiencia, sino que también mejoró la experiencia general del usuario al reducir la frustración y los retrasos.",
                guide: "Proporcione un ejemplo claro que describa el problema, su análisis, la solución implementada y los resultados positivos obtenidos. Enfatiza el impacto de la mejora en la eficiencia y la satisfacción del usuario."
            },
            {
                question: "¿Cómo manejas la retroalimentación y la crítica sobre tu trabajo?",
                answer: "Considero la retroalimentación como una oportunidad de crecimiento. Cuando recibo críticas constructivas, escucho atentamente, hago preguntas aclaratorias y evalúo las sugerencias objetivamente. Posteriormente, incorporo la retroalimentación relevante a mis procesos de trabajo y registro los cambios para medir las mejoras a lo largo del tiempo. Este enfoque proactivo me ha ayudado a perfeccionar mis habilidades y a forjar relaciones más sólidas y colaborativas con mis colegas.",
                guide: "Enfatiza una actitud positiva hacia la retroalimentación y tu disposición a aprender y adaptarte. Explica tu proceso para evaluar e implementar sugerencias, y destaca cómo este enfoque contribuye al desarrollo personal y profesional."
            }
        ]
      }
  ];
  // --- End Data for Accordion Questions ---

   // --- Data for Accordion FAQs ---
   const faqItems = [
      {
        question: "¿Qué son las preguntas de entrevista para administradores de Salesforce?",
        answer: "Son preguntas diseñadas para evaluar tanto las habilidades técnicas como blandas requeridas para un rol de Administrador de Salesforce. Cubren áreas como la configuración del sistema, gestión de datos, integración, seguridad y comunicación en el entorno laboral."
      },
      {
        question: "¿Cómo puedo prepararme de la mejor manera para una entrevista de Administrador de Salesforce?",
        answer: "Prepararte a fondo, practicar respuestas y comprender tanto los aspectos técnicos como los comportamentales del rol es fundamental."
      },
      {
        question: "¿Son estas preguntas adecuadas para principiantes?",
        answer: "Sí, la guía abarca desde conceptos básicos hasta temas más avanzados, por lo que es útil tanto para principiantes como para profesionales con experiencia."
      },
      {
        question: "¿Qué tan importantes son las preguntas conductuales en una entrevista para Administrador de Salesforce?",
        answer: "Son muy importantes, ya que ayudan a evaluar cómo manejas situaciones reales, tu capacidad de comunicación y la forma en que colaboras con el equipo."
      },
      {
        question: "¿Pueden estas preguntas ayudarme a avanzar en mi carrera como Administrador de Salesforce?",
        answer: "Sí, estar bien preparado para responder a estas preguntas te ayudará a destacar en la entrevista y avanzar en tu carrera."
      }
   ];
  // --- End Data for Accordion FAQs ---


  return (
    <>
      <Header /> {/* Assumes Header handles theme toggle */}
      <main>
        {/* Sección Hero: Título, Fecha, Autor e Imagen (Section 1) */}
        <section
          className={`${getSectionClasses(0)} pt-32`}
          style={{
            backgroundImage: backgroundPattern,
            backgroundSize: "40px 40px",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-6">
            {/* Reverted back to 50/50 split for text/image */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              {/* Text content on the left */}
              <div className="md:w-1/2 text-left"> {/* Back to md:w-1/2 */}
                {/* Increased font size and updated dark mode color for date */}
                <p className={`text-xl mb-2 ${darkMode ? 'text-white' : 'text-gray-500'}`}>
                    20 de febrero de 2025
                </p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                   Más de 70 Preguntas y Respuestas para Entrevistas de
                  Administrador de Salesforce
                 </h1>
                {/* Increased font size and updated dark mode color for author */}
                <p className={`text-xl mb-4 ${darkMode ? 'text-white' : 'text-gray-700'}`}>
                   Rohit Goyal
                </p>
              </div>
              {/* Image on the right (larger appearance by removing max-width) */}
              <div className="md:w-1/2"> {/* Back to md:w-1/2 */}
                 <img
                   src="https://resumeguru.in/wp-content/uploads/2025/02/Copy-of-LinkedIn-Article-6th-Dec-5-1024x576.jpg"
                  alt="Imagen del artículo"
                  // Removed max-w-md constraint for larger size
                  className="w-full h-auto rounded shadow-md" // Removed max-w-md
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contenido del Artículo y Sidebar (Section 2) */}
        <section
          className={`${getSectionClasses(1)}`}
           style={{
            backgroundImage: backgroundPattern,
            backgroundSize: "40px 40px",
            backgroundPosition: "center",
          }}
        >
          {/* Container with max-width for document look */}
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col md:flex-row gap-8">
               {/* Columna Principal (Contenido del artículo) */}
               {/* MODIFIED: Changed md:w-7/12 to md:w-8/12 (2/3) */}
              <div className="md:w-8/12">
                {/* Using prose for blog styling */}
                <div
                  className={`prose prose-lg dark:prose-invert max-w-none ${
                     darkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                   {/* Blog content starts here, added margins to titles */}
                  <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">
                     Introducción
                  </h2>
                  <p>
                    Prepararse para una entrevista como Administrador de
                    Salesforce puede ser tanto emocionante como desafiante. En
                    esta guía completa, encontrarás una lista cuidadosamente
                    seleccionada de preguntas de entrevista para administradores
                    de Salesforce, junto con respuestas modelo y consejos sobre
                    cómo estructurar tus respuestas.
                  </p>
                  <p>
                    Ya sea que estés comenzando tu carrera o buscando avanzar a
                    un rol senior, estas preguntas abarcan cada aspecto del rol: desde configuraciones técnicas y gestión de datos hasta
                     integración, seguridad y competencias conductuales.
                  </p>
                  <p>
                    Utiliza esta guía para aumentar tu confianza, repasar
                    conceptos clave y destacar durante tu entrevista.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">
                    Tipos de Preguntas de Entrevista para Administrador de
                    Salesforce
                  </h2>
                   <p>
                    Comprender los diferentes tipos de preguntas de entrevista
                    puede ayudarte a adaptar tu preparación de manera efectiva.
                    Aquí están las principales categorías que se cubren en esta
                    guía:
                  </p>
                  <ul>
                     <li>
                       <strong>Técnicas y de Configuración:</strong> Se centran
                      en los aspectos fundamentales de Salesforce, incluyendo
                      personalización, configuración y las funcionalidades
                      básicas de la plataforma.
                      (Ejemplo: “¿Qué es Salesforce y
                      cuáles son sus beneficios principales?” o “Explica el
                      concepto de campos de fórmula y cuándo los utilizarías.”)
                    </li>
                    <li>
                      <strong>Basadas en Escenarios:</strong> Presentan
                      situaciones reales para evaluar tus habilidades para
                      resolver problemas y cómo aplicas las herramientas de
                      Salesforce para abordar desafíos empresariales.
                      (Ejemplo:
                      “Un representante de ventas ingresa datos inexactos en
                      registros de Oportunidad de manera constante. ¿Cómo
                      abordarías este problema?” o “Los usuarios han informado
                       que el rendimiento de Salesforce se ha ralentizado. ¿Qué
                      pasos de solución de problemas tomarías?”)
                    </li>
                    <li>
                       <strong>Gestión de Datos y Reportes:</strong> Abordan
                      temas relacionados con la importación/exportación de
                      datos, personalización de reportes, creación de paneles y
                      mantenimiento de la calidad de los datos en Salesforce.
                      (Ejemplo: “¿Cómo importas datos en Salesforce?” o “¿Qué es
                      un campo bucket y cuándo lo usarías?”)
                    </li>
                    <li>
                      <strong>Seguridad y Control de Acceso:</strong> Evalúan
                      tu comprensión del modelo de seguridad de Salesforce,
                      incluyendo perfiles, conjuntos de permisos, reglas de
                      compartición y acceso a nivel de registro.
                      (Ejemplo: “Cuál
                      es la diferencia entre perfiles y conjuntos de permisos?” o
                      “¿Qué son los ajustes de acceso a nivel organizacional
                      (OWD) y cómo influyen en el acceso a los registros?”)
                     </li>
                    <li>
                      <strong>Integración y Automatización:</strong> Evalúan tu
                      capacidad para integrar Salesforce con sistemas externos y
                       automatizar procesos empresariales utilizando herramientas
                      declarativas y Apex.
                      (Ejemplo: “¿Cuáles son las diferentes
                      opciones de integración disponibles en Salesforce?” o “¿Cómo
                      determinas si utilizar la automatización declarativa o
                      basada en código en un escenario dado?”)
                     </li>
                    <li>
                      <strong>Conductuales y Orientadas a Procesos:</strong> Se
                      centran en tus habilidades blandas, como gestión de
                       proyectos, comunicación y trabajo en equipo, así como en
                      cómo manejas desafíos y retroalimentación.
                      (Ejemplo:
                      “Cuéntame sobre un proyecto desafiante que gestionaste como
                      Administrador de Salesforce.” o “¿Cómo priorizas tareas y
                      gestionas múltiples plazos?”)
                    </li>
                  </ul>

                  <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">
                    Más de 70 Preguntas y Respuestas para Entrevistas de
                    Administrador de Salesforce
                   </h2>

                  {/* --- Accordion Section Starts --- */}
                   {salesforceQuestions.map((categoryData, catIndex) => (
                    <div key={catIndex} className="mb-8">
                       <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-3">
                            {categoryData.category}
                        </h3>
                        <div className="space-y-2">
                             {categoryData.items.map((item, itemIndex) => (
                                <AccordionItem
                                key={`${catIndex}-${itemIndex}`}
                                 question={item.question}
                                answer={item.answer}
                                guide={item.guide}
                                 index={`${catIndex}-${itemIndex}`} // Use a unique index string
                                openIndex={openQuestionIndex}
                                onToggle={toggleQuestion}
                                 darkMode={darkMode}
                                />
                            ))}
                         </div>
                    </div>
                   ))}
                  {/* --- Accordion Section Ends --- */}


                  <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">Conclusión</h2>
                   <p>
                    Dominar las preguntas de entrevista para administradores de
                    Salesforce es un paso vital para conseguir tu próximo rol en
                    el ecosistema de Salesforce.
                    Esta guía ofrece una visión
                    completa de los tipos de preguntas que podrías enfrentar,
                    desde configuraciones técnicas y automatización de procesos
                    hasta gestión de datos y escenarios conductuales.
                    Al estudiar
                    las respuestas modelo y seguir las guías proporcionadas,
                    estarás bien preparado para presentar tus habilidades de
                    manera confiada y efectiva.
                    Recuerda, una preparación
                    exhaustiva y un aprendizaje continuo son clave para el éxito
                    en cualquier entrevista.
                    ¡Buena suerte, y que tu próxima
                    entrevista como Administrador de Salesforce sea un escalón
                    hacia mayores logros!
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">
                    Preguntas Frecuentes
                  </h2>
                  {/* --- FAQ Accordion Section Starts --- */}
                    <div className="space-y-2">
                       {faqItems.map((faq, index) => (
                         <AccordionItem
                           key={`faq-${index}`}
                            question={faq.question} // Make question bold
                           answer={faq.answer}
                           // No guide for FAQs in this case
                            index={`faq-${index}`} // Use a unique index string for FAQs
                           openIndex={openFaqIndex}
                           onToggle={toggleFaq}
                            darkMode={darkMode}
                         />
                       ))}
                   </div>
                  {/* --- FAQ Accordion Section Ends --- */}

                   {/* --- End of main blog content --- */}

                  {/* Botón de retroceso y botones de iconos (aligned right, specific light mode colors) */}
                  <div className="flex items-center justify-between mt-8"> {/* Reverted centering logic, back to justify-between */}
                     <button
                      onClick={() => router.back()}
                      className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer"
                    >
                      Atrás
                     </button>
                    {/* Icons on the right */}
                    <div className="flex items-center space-x-4 md:space-x-6"> {/* Original spacing */}
                      <IconButton
                         component="a"
                        href="https://www.facebook.com" // Example href
                        aria-label="facebook"
                        // Specific color for light mode, white for dark mode
                        sx={{ color: darkMode ? 'white' : '#1877F2' }}
                      >
                        <FacebookIcon fontSize="large" />
                      </IconButton>
                      <IconButton
                         component="a"
                        href="https://www.x.com" // Example href
                        aria-label="x"
                        // Specific color for light mode (black), white for dark mode
                        sx={{ color: darkMode ? 'white' : '#000000' }}
                      >
                        <XIcon fontSize="large" />
                      </IconButton>
                      <IconButton
                         component="a"
                        href="https://www.linkedin.com" // Example href
                        aria-label="linkedin"
                        // Specific color for light mode, white for dark mode
                        sx={{ color: darkMode ? 'white' : '#0077B5' }}
                      >
                        <LinkedInIcon fontSize="large" />
                      </IconButton>
                    </div>
                   </div>
                </div> {/* End Prose */}
              </div> {/* End Main Column */}

              {/* Columna Sidebar (Posts Recientes) */}
               {/* MODIFIED: Changed md:w-4/12 to md:w-3/12 (1/4) */}
              <aside className="md:w-3/12">
                 <div
                  className={`p-6 rounded shadow-md ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  {/* Centered and larger Recent Posts title */}
                  <h3
                    className={`text-2xl font-semibold mb-4 text-center ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Posts Recientes
                  </h3>
                  <ul className="space-y-2 mb-6 list-disc pl-5">
                    {recentPosts.map((post, index) => (
                      <li key={index} className={`text-sm ${darkMode ? 'marker:text-white' : 'marker:text-black'}`}>
                        <a
                           href="#" // Placeholder link
                          className={`hover:text-purple-600 focus:text-purple-600 transition-colors duration-200 ${
                            darkMode ? "text-white" : "text-black"
                          }`}
                           >
                          {post}
                        </a>
                      </li>
                     ))}
                  </ul>

                  {/* Imagenes Recientes */}
                  <div className="space-y-4">
                    {recentImages.map((image, index) => (
                       <Link
                        key={index}
                        href={image.href} // Ensure href is present
                        passHref
                         legacyBehavior={false} // Use new Link behavior
                      >
                        <img
                          src={image.src}
                           alt={image.alt}
                          // Increased margin-bottom on the first image for spacing
                          className={`w-full h-auto rounded hover:opacity-90 transition-opacity duration-200 cursor-pointer ${index === 0 ? 'mb-6' : ''}`} // Keep increased spacing
                        />
                      </Link>
                    ))}
                  </div>
                 </div>
              </aside> {/* End Sidebar Column */}
            </div> {/* End Flex container */}
          </div>
        </section>

        {/* Sección de Artículos Relacionados (Section 3) */}
        <section
          className={`${getSectionClasses(2)}`}
           style={{
            backgroundImage: backgroundPattern,
            backgroundSize: "40px 40px",
            backgroundPosition: "center",
          }}
        >
           <div className="container mx-auto px-6">
            <h2
               className={`text-2xl md:text-3xl font-bold mb-6 text-center ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Artículos Relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
               <div
                className={`rounded overflow-hidden shadow-md flex flex-col ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } ${darkMode ? "text-white" : "text-black"}`}
              >
                 <Link href="https://www.google.com/?hl=es" passHref>
                   <img
                    src="https://resumeguru.in/wp-content/uploads/2025/02/Thumbnails-For-Blogs.png"
                    alt="Thumbnail 1"
                     className="w-full h-40 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                   />
                </Link>
                <div className="p-4 flex flex-col flex-grow">
                   <Link href="https://www.google.com/?hl=es" passHref>
                     <h3 className="font-bold text-lg cursor-pointer hover:text-purple-600 transition-colors">
                      Cómo Finalizar un Currículum
                    </h3>
                   </Link>
                  {/* Date text color adapts to theme - white in dark mode */}
                  <p className={`text-sm mt-1 mb-2 ${darkMode ? 'text-white' : 'text-gray-500'}`}>
                    19 de febrero de 2025
                  </p>
                  <div className="mt-auto">
                    <Link
                        href="https://www.google.com/?hl=es" // Example href
                      className="text-purple-600 hover:underline font-semibold"
                     >
                      Leer más »
                    </Link>
                   </div>
                </div>
               </div>

              {/* Card 2 */}
              <div
                 className={`rounded overflow-hidden shadow-md flex flex-col ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } ${darkMode ? "text-white" : "text-black"}`}
              >
                <Link href="https://www.google.com/?hl=es" passHref>
                   <img
                    src="https://resumeguru.in/wp-content/uploads/2025/02/Thumbnails-For-Blogs.png" // Ensure unique src if needed
                    alt="Thumbnail 2"
                    className="w-full h-40 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                   />
                </Link>
                <div className="p-4 flex flex-col flex-grow">
                  <Link href="https://www.google.com/?hl=es" passHref>
                     <h3 className="font-bold text-lg cursor-pointer hover:text-purple-600 transition-colors">
                      Preguntas de Entrevista sobre Farmacovigilancia
                    </h3>
                  </Link>
                   {/* Date text color adapts to theme - white in dark mode */}
                  <p className={`text-sm mt-1 mb-2 ${darkMode ? 'text-white' : 'text-gray-500'}`}>
                    19 de febrero de 2025
                  </p>
                  <div className="mt-auto">
                     <Link
                        href="https://www.google.com/?hl=es" // Example href
                      className="text-purple-600 hover:underline font-semibold"
                    >
                       Leer más »
                    </Link>
                   </div>
                </div>
              </div>

             {/* Card 3 */}
              <div
                className={`rounded overflow-hidden shadow-md flex flex-col ${
                   darkMode ? "bg-gray-800" : "bg-white"
                } ${darkMode ? "text-white" : "text-black"}`}
              >
                <Link href="#" passHref>
                   <img
                    src="https://resumeguru.in/wp-content/uploads/2025/02/Thumbnails-For-Blogs.png" // Ensure unique src if needed
                    alt="Thumbnail 3"
                    className="w-full h-40 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                   />
                </Link>
                <div className="p-4 flex flex-col flex-grow">
                     <Link href="#" passHref>
                     <h3 className="font-bold text-lg cursor-pointer hover:text-purple-600 transition-colors">
                      Ejemplo de Auto-Presentación para Entrevista de Trabajo
                      para Recién Graduados
                    </h3>
                   </Link>
                  {/* Date text color adapts to theme - white in dark mode */}
                  <p className={`text-sm mt-1 mb-2 ${darkMode ? 'text-white' : 'text-gray-500'}`}>
                    18 de febrero de 2025
                  </p>
                  <div className="mt-auto">
                    <Link
                       href="#" // Placeholder href
                      className="text-purple-600 hover:underline font-semibold"
                    >
                      Leer más »
                    </Link>
                   </div>
                </div>
              </div>

             {/* Card 4 */}
              <div
                className={`rounded overflow-hidden shadow-md flex flex-col ${
                   darkMode ? "bg-gray-800" : "bg-white"
                } ${darkMode ? "text-white" : "text-black"}`}
              >
                <Link href="#" passHref>
                   <img
                    src="https://resumeguru.in/wp-content/uploads/2025/02/Thumbnails-For-Blogs.png" // Ensure unique src if needed
                    alt="Thumbnail 4"
                    className="w-full h-40 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                   />
                </Link>
                <div className="p-4 flex flex-col flex-grow">
                     <Link href="#" passHref>
                     <h3 className="font-bold text-lg cursor-pointer hover:text-purple-600 transition-colors">
                      Los Mejores Servicios de Redacción de Currículums en India
                    </h3>
                  </Link>
                   {/* Date text color adapts to theme - white in dark mode */}
                  <p className={`text-sm mt-1 mb-2 ${darkMode ? 'text-white' : 'text-gray-500'}`}>
                    18 de febrero de 2025
                  </p>
                  <div className="mt-auto">
                     <Link
                        href="#" // Placeholder href
                      className="text-purple-600 hover:underline font-semibold"
                    >
                       Leer más »
                    </Link>
                   </div>
                </div>
              </div>
             </div> {/* End grid */}
          </div> {/* End container */}
        </section>
      </main>
      <Footer /> {/* Assumes Footer is styled */}
    </>
  );
}
