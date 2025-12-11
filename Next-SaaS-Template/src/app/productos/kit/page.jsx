"use client";
import React, { useState } from "react";
// import Link from "next/link";
import Image from "next/image";
// Usaremos <img> estándar por ahora.
import Header from "@/app/components/Header"; // Asegúrate que la ruta es correcta
import Footer from "@/app/components/Footer"; // Asegúrate que la ruta es correcta
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTheme } from "@/app/theme-provider"; // Asegúrate que la ruta es correcta
import Link from "next/link"; // Mantenemos Link para los botones y otros enlaces

export default function KitLinkedInPage() {
  const { darkMode } = useTheme(); // Hook para el modo oscuro/claro
  const [openFAQ, setOpenFAQ] = useState(null); // Para el acordeón FAQ (un solo item abierto)

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // --- Datos para secciones ---
  const heroListItems = [
    "Optimice todos los aspectos de su perfil de LinkedIn que realmente importan.",
    "Optimice la creación de contenido y cree historias que conecten y generen interacciones significativas.",
    "Estrategias probadas y verdaderas que potencialmente podrían triplicar el alcance de su perfil.",
    "Utilice nuestras plantillas para escribir titulares que cautiven y dejen una marca duradera, todo ello fácil con nuestro kit de herramientas.",
    "Aproveche nuestras plantillas de mensajería en frío para construir relaciones valiosas y establecer contactos como un profesional.", //
  ];
  const testimonials = [
    {
      name: "Aashna Bansal",
      avatar: "https://via.placeholder.com/100", // Placeholder - Reemplazar con imagen real
      text: "Como profesional en activo, las 40 plantillas de mensajes en frío me permitieron ponerme en contacto con confianza, lo que resultó en conexiones significativas e incluso oportunidades laborales. Este kit de herramientas es imprescindible para cualquiera que desee ser notado, ya sea estudiante, freelance o profesional. Muy recomendable.",
    }, //
    {
      name: "Vansh Mohan",
      avatar: "https://via.placeholder.com/100", // Placeholder - Reemplazar con imagen real
      text: "¡El kit de herramientas de Resumeguru es un salvavidas en LinkedIn! Como recién graduado, no sabía cómo crear un perfil de LinkedIn impactante. Las plantillas del kit facilitaron el proceso, y las plantillas de mensajes en frío me ayudaron a iniciar conversaciones con confianza. Las plantillas de imagen de portada añadieron un toque profesional a mi perfil.",
    }, //
    {
      name: "Bhoomi Arora",
      avatar: "https://via.placeholder.com/100", // Placeholder - Reemplazar con imagen real
      text: "Pasé de sentirme abrumado en LinkedIn a navegar con confianza gracias al kit de herramientas de Resumeguru. Las plantillas de mensajería concisas y estratégicas llevaron mis esfuerzos de networking a otro nivel. Con las más de 30 ideas de contenido perenne del kit, ahora participo consistentemente con mi audiencia. Es una inversión que vale la pena.", //
    },
    {
      name: "Quincy",
      avatar: "https://via.placeholder.com/100", // Placeholder - Reemplazar con imagen real
      text: "Como freelance, luchaba con LinkedIn hasta que encontré este kit. Las plantillas personalizadas y las estrategias accionables me ayudaron a conectarme con clientes y mostrar mis habilidades de manera efectiva. Los consejos del e-book revelaron los secretos de un perfil de LinkedIn convincente, y las plantillas de portada aportaron un atractivo visual a mi marca.", //
    },
  ];

  const whoIsItForData = [
    {
      img: "https://resumeguru.in/wp-content/uploads/elementor/thumbs/20230824_130216_0009-qbdho1beseyy6hojga4ed58iayandl0t2rttjb5tz8.png",
      title: "College Students",
      intro:
        "As a college student, your future begins now. Our LinkedIn Toolkit provides you with the tools to:", //
      points: [
        "Crea un impresionante perfil de LinkedIn incluso antes de ingresar al mundo profesional.",
        "Aprovecha el poder de tu perfil de LinkedIn para descubrir y asegurar pasantías que se alineen con tu campo de estudio.",
        "Conéctate con profesionales de la industria y mentores que te pueden guiar hacia el éxito.", //
      ],
    },
    {
      img: "https://resumeguru.in/wp-content/uploads/elementor/thumbs/4-1-qbfrxcwo56spce72etu8ad6k54beky9jvyesb2dp1g.png", //
      title: "Freelancers",
      intro:
        "For Freelancers, your LinkedIn profile is your brand. With our toolkit, you can:", //
      points: [
        "Muestra tu experiencia a través de un perfil bien elaborado que resuene con posibles clientes.",
        "Posiciónate como una autoridad profesional en tu nicho y atrae un flujo constante de clientes.",
        "Utiliza estrategias de contenido persuasivas para atraer consultas y proyectos de manera consistente.", //
      ],
    },
    {
      img: "https://resumeguru.in/wp-content/uploads/elementor/thumbs/4-1-qbfrxcwo56spce72etu8ad6k54beky9jvyesb2dp1g.png",
      title: "Business Owners", //
      intro:
        "For Businesses, your LinkedIn presence speaks volumes. With our toolkit, you can:", //
      points: [
        "Fomenta conexiones con clientes potenciales, socios y líderes de la industria.",
        "Implementa estrategias de contenido efectivas que posicionen tu negocio como líder de la industria.",
        "Maximiza tu alcance y visibilidad, lo que conlleva un aumento de oportunidades de negocio y crecimiento.", //
      ],
    },
    {
      img: "https://resumeguru.in/wp-content/uploads/elementor/thumbs/20230824_130216_0009-qbdho1beseyy6hojga4ed58iayandl0t2rttjb5tz8.png",
      title: "Working Professionals", //
      intro:
        "For Working professionals, your LinkedIn profile is your career's digital representation. Our toolkit helps you:", //
      points: [
        "Optimiza tu perfil para alinearlo con tus objetivos profesionales, desde ascensos hasta cambios de trabajo.",
        "Haz networking de manera estratégica con colegas, mentores e influenciadores de tu industria.",
        "Fortalece tu marca profesional y mantente a la vanguardia en un mercado laboral competitivo.", //
      ],
    },
  ];

  const faqData = [
    {
      question: "¿Qué incluye el kit de herramientas?", //
      answer:
        "El kit de herramientas incluye una variedad de recursos, como más de 120 plantillas de titulares y resúmenes, más de 40 plantillas de mensajes en frío, 20 plantillas de imágenes de portada, ideas para la creación de contenido y un e-book repleto con más de 50 consejos para todos los parámetros esenciales de un perfil de LinkedIn.", //
    },
    {
      question: "¿Para quién es adecuado este kit de herramientas?",
      answer:
        "Este kit de herramientas se adapta a una audiencia diversa, incluidos estudiantes universitarios, profesionales, freelancers y negocios. Está diseñado para cubrir varias etapas de la carrera y diferentes objetivos.", //
    },
    {
      question: "¿Cómo me beneficiará este kit de herramientas?",
      answer:
        "“Supercharge Your LinkedIn” te ofrece las herramientas para optimizar tu perfil de LinkedIn, permitiéndote destacar, conectar con las personas adecuadas y desbloquear oportunidades profesionales. Ya estés buscando pasantías, clientes, colaboraciones u ofertas de trabajo, este kit te empodera para alcanzar tus metas.", //
    },
    {
      question:
        "¿Puedo usar este kit de herramientas aunque sea nuevo en LinkedIn?",
      answer:
        "¡Por supuesto! El kit de herramientas está diseñado para ofrecer orientación paso a paso, por lo que es adecuado tanto para principiantes como para usuarios de LinkedIn con experiencia. Encontrarás todo lo que necesitas para mejorar tu perfil y maximizar tu impacto en LinkedIn.", //
    },
    {
      question: "¿Se pueden personalizar las plantillas?",
      answer:
        "¡Absolutamente! Las plantillas están diseñadas para ser adaptables, permitiéndote personalizarlas para que se ajusten a tu estilo y objetivos únicos. De esta manera, tu perfil de LinkedIn se mantiene auténtico y reflejando tu individualidad.", //
    },
    {
      question: "¿Cuál es el formato del e-book?",
      answer:
        "El kit se proporciona como una página de Notion, accesible tanto desde tu navegador como desde la aplicación de Notion. Este formato permite un acceso fluido y la posibilidad de realizar actualizaciones continuas. Podrás ver y utilizar los recursos del kit de herramientas dondequiera que estés. Cualquier actualización que realicemos se reflejará en tiempo real, asegurándote siempre el contenido más actualizado y valioso.", //
    },
  ];

  // --- Estilos Comunes ---
  const getSectionStyles = (isAlternate) => {
    const backgroundPattern = darkMode
      ? "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)"
      : "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";
    const baseBg = darkMode ? "bg-black" : "bg-white";
    const alternateBg = darkMode ? "bg-gray-900" : "bg-gray-100";
    const textColor = darkMode ? "text-white" : "text-gray-800"; //
    const currentBg = isAlternate ? alternateBg : baseBg;

    return {
      className: `relative py-16 md:py-20 ${currentBg} ${textColor}`,
      style: {
        backgroundImage: backgroundPattern,
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      },
    }; //
  };

  const heroSectionStyles = getSectionStyles(false);
  const eresTuSectionStyles = getSectionStyles(true);
  const customersSectionStyles = getSectionStyles(false);
  const whoIsItForSectionStyles = getSectionStyles(true);
  const aboutUsSectionStyles = getSectionStyles(false); //
  const faqSectionStyles = getSectionStyles(true);
  return (
    <>
      <Header />
      <main>
        {/* --- Sección Hero --- */}
        <section
          id="linkedin-hero"
          {...heroSectionStyles}
          className={`${heroSectionStyles.className} pt-32`}
        >
          <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl"> {/* */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Columna izquierda: Imagen */}
              <div className="flex justify-center md:justify-center"> {/* Centrado en todos los tamaños */}
                 {/* MODIFICADO: Eliminado Link alrededor de la imagen */}
                 <img
                    src="https://resumeguru.in/wp-content/uploads/2023/08/Untitled-design-21-1.png"
                    alt="Imagen Kit LinkedIn"
                    className="max-w-sm w-full h-auto rounded shadow-md" // Eliminado pointer-events-none si ya no es link
                 /> {/* */}
              </div>
              {/* Columna derecha: Textos y botón */}
              <div className="flex flex-col items-center text-center">
                <p className="text-xl md:text-2xl font-semibold mb-3">
                  Pase de Básico a PRO en LinkedIn
                </p> {/* */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                  Impulsa tu LinkedIn
                </h1>
                 <p className="text-lg md:text-xl mb-6 max-w-md">
                    ¡Cree un perfil de LinkedIn que le permita conseguir trabajo en
                  15 minutos con este kit de herramientas!
                 </p> {/* */}
                {/* ***** MODIFICADO ***** Separador 1 - Uso de style condicional */}
                <div className="w-full max-w-md flex justify-center my-4">
                    <div
                      className={`h-0.5 w-full`}
                      style={{ backgroundColor: darkMode ? 'white' : 'black' }}
                    ></div> {/* */}
                </div>
                <p className="text-base md:text-lg mb-8 max-w-md">
                  Obtenga acceso a más de 200 plantillas potentes y un libro
                  electrónico para mejorar varios aspectos de su perfil de
                  LinkedIn.
                </p> {/* */}
                <Link href="#" className="mb-4"> {/* Mantenemos Link para el botón */}
                  <button className="flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer text-lg">
                    <CheckCircleIcon color="success" className="mr-2" />
                    ¡Multiplica por 10 tu LinkedIn por ₹497!
                  </button> {/* */}
                </Link>
                <p className="text-sm text-yellow-500 dark:text-yellow-400 mb-1">
                  PRECIO ORIGINAL: <del>₹3994</del>
                </p>
                <p className="text-sm font-semibold">
                   ¡OFERTA POR TIEMPO LIMITADO! ¡90% DE DESCUENTO! ⚠ {/* */}
                </p>
              </div>
            </div>

            {/* Lista de Beneficios */}
            <div className="mt-12 md:mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">
                Un kit de herramientas verdaderamente autosuficiente. Conviértete en un experto en LinkedIn. 💯 {/* */}
              </h3>
              <ul className="space-y-4 max-w-3xl mx-auto">
                {heroListItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    {/* Uso de style condicional para el icono */}
                    <CheckCircleIcon style={{ color: darkMode ? "#fff" : "#000", fontSize: '1.4rem' }} className="mr-3 mt-1 flex-shrink-0" /> {/* */}
                    <span className="text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-center mt-8 text-gray-600 dark:text-gray-400">Y mucho más......</p> {/* */}
            </div>
          </div>
        </section>

        {/* --- Sección: "¿Eres tú?" --- */} {/* */}
        <section {...eresTuSectionStyles}>
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex flex-col md:flex-row items-center justify-center mb-12 md:mb-16 text-center md:text-left">
               {/* MODIFICADO: Eliminado Link alrededor de la imagen */}
               <div className="flex-shrink-0 md:mr-8 mb-4 md:mb-0">
                 <img
                    src="https://resumeguru.in/wp-content/uploads/2023/08/20230824_130215_0000-1024x1024.png"
                    alt="¿Eres tú?"
                    className="w-32 h-auto" // Eliminado pointer-events-none
                  /> {/* */}
               </div>
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-center md:text-left">
                   😭 ¿Eres tú? {/* */}
                </h3>
                <p className="text-base md:text-lg leading-relaxed">
                  ¿Tiene dificultades para destacarse en LinkedIn? <br /> {/* */}
                  ¿Preocupado por las oportunidades perdidas? <br /> {/* */}
                  ¿Está confundido acerca de cómo utilizar LinkedIn para lograr
                  el máximo impacto? <br /> {/* */}
                  ¿Estás buscando un trabajo o una pasantía? {/* */}
                </p>
                 {/* Separador 2 - Uso de style condicional */}
                <hr
                  className="border-t-4 my-8"
                  style={{ borderColor: darkMode ? 'white' : 'black' }}
                /> {/* */}
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center mb-12 md:mb-16 text-center md:text-left">
              {/* MODIFICADO: Eliminado Link alrededor de la imagen */} {/* */}
               <div className="md:order-2 md:ml-8 mb-4 md:mb-0 flex-shrink-0">
                 <img
                   src="https://resumeguru.in/wp-content/uploads/2023/08/20230824_130216_0001-1024x1024.png"
                   alt="Imagina si pudieras"
                   className="w-32 h-auto" // Eliminado pointer-events-none
                 /> {/* */}
               </div>
               <div className="md:order-1 text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-center md:text-left">
                    🤩 Imagina si pudieras: {/* */}
                </h3>
                <p className="text-base md:text-lg leading-relaxed">
                   Optimice cada elemento del perfil para lograr el máximo
                   impacto. <br /> {/* */}
                  Cree contenido irresistible que cautive a empleadores y
                  conexiones. <br /> {/* */}
                  Contacte con contactos potenciales y construya relaciones
                  significativas. <br /> {/* */}
                  Triplica el impacto de tu perfil y eleva tus perspectivas
                  profesionales a nuevas alturas. {/* */}
                </p>
                 {/* Separador 3 - Uso de style condicional */}
                 <hr
                  className="border-t-4 my-8"
                  style={{ borderColor: darkMode ? 'white' : 'black' }}
                /> {/* */}
              </div>
            </div>

            <div className="text-center mb-12 md:mb-16">
              <p className="text-xl md:text-2xl font-bold mb-3">
                ¡¡¡Todo esto ahora es posible!!! 🎯 {/* */}
              </p>
              <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto">
                Con nuestro completo kit de herramientas que le ayudará a
                potenciar su perfil de LinkedIn y desbloquear nuevas
                oportunidades. {/* */}
              </p>
              <Link href="#"> {/* Mantenemos Link para el botón */}
                <button className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer text-lg">
                  Consigue el Kit Definitivo de LinkedIn
                </button>
              </Link> {/* */}
             </div>

            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Esto es lo que obtendrás ⤵
            </h3>
             <div className="space-y-8 md:space-y-10">
              {[
                  {
                  img: "https://resumeguru.in/wp-content/uploads/2023/08/20230824_130216_0002-300x300.png",
                  title: "Impulsa tu LinkedIn con un ebook (valorado en ₹599)",
                  text: "Accede a nuestro fantástico ebook con más de 50 consejos prácticos que cubren los 8 parámetros esenciales de un perfil de LinkedIn atractivo. Este libro te ofrece una visión increíble de lo que implica un perfil de LinkedIn completamente optimizado.", //
                },
                {
                  img: "https://resumeguru.in/wp-content/uploads/2023/08/20230824_130216_0002-300x300.png",
                  title:
                    "Más de 120 plantillas de resúmenes y titulares (valoradas en ₹1099)", //
                  text: "Consigue una ventaja competitiva con más de 120 plantillas de titulares y resúmenes diseñadas profesionalmente. Adaptadas a estudiantes de diversos ámbitos, así como a 10 sectores, autónomos y empresas diferentes.", //
                },
                {
                  img: "https://resumeguru.in/wp-content/uploads/2023/08/20230824_130216_0002-300x300.png",
                  title:
                    "Más de 40 plantillas de mensajes en frío (valoradas en ₹599)", //
                  text: "Utiliza 40 plantillas estratégicas de mensajería en frío para estudiantes universitarios, autónomos y empresas. Forja conexiones y colaboraciones significativas comunicándote eficazmente con mensajes probados y personalizables.", //
                },
                {
                  img: "https://resumeguru.in/wp-content/uploads/2023/08/20230824_130216_0002-300x300.png",
                  title:
                    "Más de 30 ideas atractivas para crear contenido (valoradas en ₹599)", //
                  text: "Accede a un tesoro de más de 30 ideas para publicaciones imperecederas y 10 consejos y trucos de contenido de gran valor. Mantén tu feed de LinkedIn activo y atractivo, atrayendo contactos y clientes potenciales sin esfuerzo.", //
                },
                {
                  img: "https://resumeguru.in/wp-content/uploads/2023/08/20230824_130216_0002-300x300.png",
                  title:
                    "Más de 20 diseños de portada llamativos (valorados en ₹799)", //
                  text: "Elija entre una colección de más de 20 plantillas de imágenes de portada que captan la atención y transmiten su marca personal o identidad comercial con estilo y profesionalismo.", //
                },
                 {
                  img: "https://resumeguru.in/wp-content/uploads/2023/08/20230824_130216_0002-300x300.png", //
                  title:
                    "Consejos y trucos de alto valor para publicar en LinkedIn (VALOR DE ₹799)",
                  text: "Sabemos bastante sobre la marca personal en LinkedIn. Estos conocimientos se basan en nuestra amplia experiencia en el uso de LinkedIn para construir una marca personal, impulsar un negocio y generar ventas.", //
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center text-center md:text-left" //
                >
                   {/* MODIFICADO: Eliminado Link alrededor de la imagen */}
                  <div className="flex-shrink-0 md:mr-6 mb-4 md:mb-0">
                    <img
                       src={item.img} //
                       alt={item.title}
                       className="w-20 h-auto" // Eliminado pointer-events-none
                    />
                  </div> {/* */}
                  <div className="flex-grow">
                     <h4 className="text-lg md:text-xl font-bold mb-2">
                      {item.title}
                    </h4>
                     <p className="text-base leading-relaxed">{item.text}</p> {/* */}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 md:mt-16 text-center">
                 <p className="text-xl md:text-2xl font-bold mb-4">
                 <del className="text-red-500">VALOR TOTAL: ₹3994</del>
                <br />
                <span className="text-green-500">OFERTA ACTUAL: ₹497 ✨</span>
              </p> {/* */}
              <Link href="#"> {/* Mantenemos Link para el botón */} {/* */}
                <button className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer text-lg mb-4">
                  ¡ESTOY LISTO PARA SUBIR DE NIVEL EN LINKEDIN! 🎯 {/* */}
                </button>
              </Link>
              <p className="text-base md:text-lg max-w-xl mx-auto">
                BONIFICACIÓN✨: Seguiremos actualizando el Kit. Mejorará con el
                tiempo. Recibirás las nuevas funciones GRATIS. 😉 {/* */}
              </p>
            </div>
          </div>
        </section>

        {/* --- Sección de Testimonios --- */}
        <section {...customersSectionStyles}>
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Esto es lo que nuestros clientes dicen ❤ {/* */}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg shadow-md flex flex-col text-center ${
                    darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
                  }`} //
                >
                  {/* MODIFICADO: Eliminado Link alrededor de la imagen */} {/* */}
                   <div className="flex justify-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name} //
                       className="w-20 h-20 rounded-full object-cover" // Eliminado pointer-events-none
                    />
                   </div>
                  <h4 className="font-bold mb-2">
                        {testimonial.name} {/* */}
                   </h4>
                   <p className={`text-sm italic flex-grow ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    “{testimonial.text}” {/* */}
                  </p>
                </div>
              ))}
            </div>
           </div>
         </section> {/* */}

        {/* --- Sección: "¿Para quién es este Kit?" --- */} {/* */}
        <section {...whoIsItForSectionStyles}>
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              ¿Para quién es este Kit de Herramientas? 🤔 {/* */}
            </h2>

            <div className="space-y-10">
              {whoIsItForData.map(({ img, title, intro, points }, idx) => (
                <React.Fragment key={title}>
                  <div className="flex flex-col md:flex-row items-center text-center md:items-start md:text-left">
                      {/* MODIFICADO: Eliminado Link alrededor de la imagen y el título */} {/* */}
                     <div className="flex flex-col items-center flex-shrink-0 md:mr-8 mb-4 md:mb-0 md:w-48">
                       <img
                         src={img}
                         alt={title} //
                         className="w-24 h-auto mx-auto mb-2" // Eliminado pointer-events-none
                      />
                     <p className="font-bold text-xl md:text-2xl">{title}</p> {/* */}
                     </div>
                     <div className="flex-grow">
                      <p className="mb-4 text-base md:text-lg">{intro}</p>
                      <ul className="space-y-2">
                           {points.map((point, pIdx) => ( //
                           <li key={pIdx} className="flex items-start text-left">
                            <CheckCircleIcon
                              className="text-green-500 mr-2 mt-1 flex-shrink-0" //
                                fontSize="small"
                            />
                             <span className="text-base">{point}</span> {/* */}
                           </li>
                         ))}
                      </ul>
                    </div>
                   </div> {/* */}
                   {/* Separadores sección "Para quién" - Uso de style condicional */}
                   {idx < whoIsItForData.length - 1 && (
                     <hr
                      className="border-t-2 my-8 md:my-10" // Mantenemos clases para grosor y margen
                      style={{ borderColor: darkMode ? 'white' : 'black' }} // Aplicamos color de borde con style
                    />
                  )}
                </React.Fragment>
               ))}
             </div> {/* */}

            <div className="text-center mt-12 md:mt-16">
              <Link href="#"> {/* Mantenemos Link para el botón */}
                <button className="bg-purple-600 text-white py-3 px-8 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer text-lg">
                  ¡Impulsar mi Perfil de LinkedIn! 🎯 {/* */}
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* --- Sección ABOUT US --- */}
        <section {...aboutUsSectionStyles}>
           <div className="container mx-auto px-6 max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center"> {/* */}
              {/* Columna Izquierda: Imagen */}
              <div className="flex justify-center md:justify-start md:col-span-1">
                 {/* MODIFICADO: Eliminado Link alrededor de la imagen */}
                 <img
                     src="https://resumeguru.in/wp-content/uploads/2023/08/LOGO-4-300x300.png" //
                    alt="Logo Resumeguru"
                    className="rounded w-56 h-56 md:w-72 md:h-72 object-contain" // Eliminado pointer-events-none
                  />
                </div>
              {/* Columna Derecha: Texto */} {/* */}
              <div className="md:col-span-2 flex flex-col items-center text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                   SOBRE NOSOTROS
                </h2>
                  <h3
                  className={`text-lg md:text-xl font-semibold mb-4 ${
                     darkMode ? "text-gray-300" : "text-gray-600" //
                  }`}
                >
                  Empoderando Tu Carrera con ResumeGuru 🙌
                </h3>
                 <div className="space-y-4 text-base md:text-lg leading-relaxed text-left">
                   <p>
                    😁 En Resumeguru, creemos que tu trayectoria profesional
                    merece el máximo apoyo y orientación. {/* */}
                  </p>
                  <p>
                    💪 Nuestra marca es tu aliada dedicada a abrir puertas
                    hacia la excelencia profesional y el éxito laboral. {/* */}
                  </p>
                  <p>
                    🎯 Con un compromiso firme de proveer herramientas y
                    servicios de vanguardia, empoderamos a las personas para
                    brillar en sus carreras, superar a la competencia y asegurar
                    las oportunidades que merecen. {/* */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Sección FAQ --- */}
        <section {...faqSectionStyles}>
            <div className="container mx-auto px-6 max-w-3xl">
                 <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                    Preguntas Frecuentes (FAQ) {/* */}
                </h2>
                <div className="space-y-2">
                     {faqData.map((faq, i) => {
                         const isOpen = openFAQ === i; //
                        return (
                           <div
                              key={i} //
                                className={`
                                    rounded-md p-3 cursor-pointer
                                      ${darkMode ? "bg-gray-800" : "bg-gray-50"}
                                    hover:bg-purple-600/20
                                    hover:shadow-[0_0_10px_rgba(128,0,128,0.2)]
                                      ${darkMode ? "hover:text-white" : "hover:text-gray-900"}
                                    transition-all duration-700
                                `} //
                                onClick={() => toggleFAQ(i)} //
                            >
                                <div className="flex items-center justify-between">
                                  <h3
                                         className={`
                                            text-base font-semibold
                                            ${darkMode ? "text-gray-100" : "text-gray-900"}
                                        `} //
                                    >
                                      {faq.question} {/* */}
                                    </h3>
                                   <span className="text-purple-600 font-bold text-xl">
                                         {isOpen ? "-" : "+"} {/* */}
                                    </span>
                                </div>
                                   <div
                                    className={`
                                        overflow-hidden transition-all duration-700 ease-in-out
                                        ${isOpen ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"}
                                    `} //
                                >
                                      <p
                                        className={`
                                            text-base pt-2
                                             ${darkMode ? "text-gray-300" : "text-gray-700"}
                                        `} //
                                    >
                                         {faq.answer} {/* */}
                                    </p>
                                </div>
                               </div> //
                        );
                    })} {/* */}
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
