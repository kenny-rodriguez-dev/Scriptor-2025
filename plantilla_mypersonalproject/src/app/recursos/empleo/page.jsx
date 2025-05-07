"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link"; // Importado para los enlaces
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import DescriptionIcon from "@mui/icons-material/Description";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Importado del modelo para posibles usos

// Importa tu lógica de theme (asegúrate que la ruta sea correcta)
import { useTheme } from "@/app/theme-provider"; // Ajusta la ruta si es necesario

/* --------------------------------------
 * Sección 1: Hero => "Recursos para Buscadores de Empleo" (Estilo Modelo)
 * -------------------------------------- */
function HeroEmpleoSection() {
  const { darkMode } = useTheme();
  // Patrón punteado centrado (igual que en el modelo)
  const backgroundPattern = darkMode
    ? "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)"
    : "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";
  const baseBackground = darkMode ? "bg-black" : "bg-white"; // Sección 1: Fondo base
  const textColor = darkMode ? "text-white" : "text-gray-800";

  return (
    <section
      id="recursos-hero"
      className={`relative flex items-center justify-center min-h-screen ${baseBackground} ${textColor} pt-32`} // Ajusta pt-32 si tu Header tiene altura diferente
      style={{
        backgroundImage: backgroundPattern,
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Recursos para Buscadores de Empleo
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Hemos creado una colección exclusiva de herramientas, listas de
          verificación y otros recursos para ayudarte a potenciar tu búsqueda de
          empleo, mejorar tu currículum y aprovechar el poder de LinkedIn.
        </p>
        {/* Botones y bullet points del modelo eliminados según solicitud implícita de mantener esta sección como estaba */}
      </div>
    </section>
  );
}

/* --------------------------------------
 * Sección 2: Recursos y Servicios (Estilo "Realiza tu Pedido" Modificado)
 * -------------------------------------- */
function RecursosServiciosSection() {
  const { darkMode } = useTheme();
  const backgroundPattern = darkMode
    ? "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)"
    : "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";
  // Sección 2: Fondo alternado
  const baseBackground = darkMode ? "bg-gray-900" : "bg-gray-100";
  const textColor = darkMode ? "text-white" : "text-gray-800";

  // Estilos de botones tomados del modelo BlogPage
  const buttonActiveBg = "bg-purple-600"; // Model active button
  const buttonActiveText = "text-white"; // Model active button text
  const buttonInactiveBg = darkMode ? "bg-gray-700" : "bg-gray-200"; // Adjusted from model
  const buttonInactiveText = darkMode ? "text-white" : "text-gray-800"; // Adjusted from model
  const buttonHoverBg = "hover:bg-purple-600"; // Fondo morado en hover
  const buttonHoverText = "hover:text-white"; // Texto blanco en hover

  const [activeTab, setActiveTab] = useState("ayudaCurriculum");
  const [showCards, setShowCards] = useState(true); // Para la animación
  // Eliminado el estado chosenTab según solicitud

  const handleTabChange = (tabKey) => {
    setShowCards(false); // Oculta las tarjetas para animar
    setActiveTab(tabKey); // Eliminado el switch y setChosenTab

    // Espera un poco antes de mostrar las nuevas tarjetas con animación
    setTimeout(() => {
      setShowCards(true);
    }, 50); // Un delay corto es suficiente
  };

  // Datos para las tarjetas de cada pestaña
  const cardsData = {
    ayudaCurriculum: [
      {
        imgSrc:
          "https://resumeguru.in/wp-content/uploads/2025/01/3-2-1024x1024.png", // Placeholder
        alt: "Lista de 100+ Verbos de Acción para el Currículum",
        title: "Lista de 100+ Verbos de Acción para el Currículum",
        buttonText: "Descarga Gratis",
        buttonLink: "#", // Placeholder
      },
      {
        imgSrc:
          "https://resumeguru.in/wp-content/uploads/2025/01/3-2-1024x1024.png", // Placeholder
        alt: "Lista de Verificación para Optimizar tu Currículum",
        title: "Lista de Verificación para Optimizar tu Currículum",
        buttonText: "Descarga Gratis",
        buttonLink: "#", // Placeholder
      },
      {
        imgSrc:
          "https://resumeguru.in/wp-content/uploads/2025/01/3-2-1024x1024.png", // Placeholder
        alt: "Plantillas de Currículum",
        title: "Plantillas de Currículum",
        buttonText: "Descargar @ ₹200 cada uno",
        buttonLink: "#", // Placeholder
      },
    ],
    ayudaLinkedin: [
      {
        imgSrc:
          "https://resumeguru.in/wp-content/uploads/2025/01/3-2-1024x1024.png", // Placeholder
        alt: "E-Book de LinkedIn para Potenciar tu Perfil",
        title: "E-Book de LinkedIn para Potenciar tu Perfil",
        buttonText: "Descarga Gratis",
        buttonLink: "#", // Placeholder
      },
      {
        imgSrc:
          "https://resumeguru.in/wp-content/uploads/2025/01/3-2-1024x1024.png", // Placeholder
        alt: "Potencia tu Kit de Herramientas de LinkedIn",
        title: "Potencia tu Kit de Herramientas de LinkedIn",
        buttonText: "Descargar @ ₹497",
        buttonLink: "#", // Placeholder
      },
      {
        imgSrc:
          "https://resumeguru.in/wp-content/uploads/2025/01/3-2-1024x1024.png", // Placeholder
        alt: "Lista de Verificación Definitiva para Optimizar tu Perfil en LinkedIn",
        title:
          "Lista de Verificación Definitiva para Optimizar tu Perfil en LinkedIn",
        buttonText: "Descarga Gratis",
        buttonLink: "#", // Placeholder
      },
    ],
    ayudaCarta: [
      {
        imgSrc:
          "https://resumeguru.in/wp-content/uploads/2025/01/3-2-1024x1024.png", // Placeholder
        alt: "Plantilla Gratuita de Carta de Presentación",
        title:
          "Plantilla Gratuita de Carta de Presentación para Impresionar a los Reclutadores",
        buttonText: "Descarga Gratis",
        buttonLink: "#", // Placeholder
      },
    ],
    servicios: [
      {
        icon: DescriptionIcon,
        title: "Redacción de Currículum",
        link: "#", // Placeholder
        color: "#2196F3" // Azul para Documento
      },
      {
        icon: MailOutlineIcon,
        title: "Redacción de Carta",
        link: "#", // Placeholder
        color: darkMode ? '#D1D5DB' : '#374151' // Color por defecto o tema
      },
      {
        icon: LinkedInIcon,
        title: "Optimización de Perfil",
        link: "#", // Placeholder
        color: "#0A66C2" // Azul LinkedIn
      },
    ],
  };

  const renderCardsContent = () => {
    const currentCards = cardsData[activeTab] || [];
    let gridColsClass = "grid-cols-1 md:grid-cols-3"; // Default para 3 tarjetas

    if (activeTab === "ayudaCarta") {
      gridColsClass = "grid-cols-1 justify-items-center"; // Para centrar la única tarjeta
    } else if (activeTab === "servicios") {
      gridColsClass = "grid-cols-1 sm:grid-cols-3"; // Para los iconos de servicio
    }

    return (
      <div
        key={activeTab} // key para forzar re-render en cambio de tab
        className={`grid ${gridColsClass} gap-8 transition-all duration-700 transform ${
          showCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8" // Animación
        }`}
      >
        {currentCards.map((card, index) => {
          // Lógica específica para la pestaña "servicios" que usa iconos
          if (activeTab === "servicios") {
            const IconComponent = card.icon;
            return (
              <Link href={card.link || "#"} key={index} className="block group"> {/* Added group class */}
                <div
                  className={`
                                    p-6 rounded-lg flex flex-col items-center max-w-xs mx-auto
                                    transition-all duration-300 cursor-pointer
                                    ${darkMode ? "bg-gray-800 hover:shadow-purple-dark" : "bg-white hover:shadow-lg"}
                                    text-center
                                    border ${darkMode ? 'border-gray-700' : 'border-gray-200'}
                                    hover:shadow-purple-md /* Sombra morada al hacer hover */
                                    hover:bg-purple-600 /* MODIFICACIÓN: Fondo morado al hover */
                                `}
                  style={{ boxShadow: darkMode ? '0 4px 6px -1px rgba(168, 85, 247, 0.1), 0 2px 4px -1px rgba(168, 85, 247, 0.06)' : '0 4px 6px -1px rgba(168, 85, 247, 0.1), 0 2px 4px -1px rgba(168, 85, 247, 0.06)'}} /* Sombra morada inicial */
                >
                  <IconComponent
                    // Aplicar el color específico del icono
                    style={{ fontSize: "64px", color: card.color }}
                  />
                  <h3 className={`text-xl font-semibold mb-2 mt-4 ${darkMode ? 'text-gray-100' : 'text-gray-900'} group-hover:text-white /* MODIFICACIÓN: Texto blanco al hover */`}>
                    {card.title}
                  </h3>
                </div>
              </Link>
            );
          }

          // Renderizado normal para las otras pestañas
          return (
            <div
              key={index}
              className={`
                                p-6 rounded-lg flex flex-col items-center
                                transition-all duration-300
                                ${darkMode ? "bg-gray-800" : "bg-white"}
                                ${activeTab === 'ayudaCarta' ? 'max-w-md mx-auto' : ''} /* Centrar si es la única tarjeta */
                                border ${darkMode ? 'border-gray-700' : 'border-gray-200'}
                                text-center ${darkMode ? 'text-gray-100' : 'text-gray-900'}
                                hover:shadow-purple-md /* Sombra morada al hover */
                           `}
              style={{ boxShadow: darkMode ? '0 4px 6px -1px rgba(168, 85, 247, 0.1), 0 2px 4px -1px rgba(168, 85, 247, 0.06)' : '0 4px 6px -1px rgba(168, 85, 247, 0.1), 0 2px 4px -1px rgba(168, 85, 247, 0.06)'}} /* Sombra morada inicial */
            >
              <img
                src={card.imgSrc || "https://via.placeholder.com/300x200"} // Placeholder si no hay src
                alt={card.alt || "Placeholder Image"}
                className="w-full h-64 object-contain mb-4" // object-contain para evitar distorsión
                onError={(e) => {
                  e.target.onerror = null; // Previene loop infinito
                  e.target.src="https://via.placeholder.com/300x200"; // Imagen fallback
                }}
              />
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <Link href={card.buttonLink || "#"} className="mt-auto block w-full">
                <button className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 hover:shadow-lg transition cursor-pointer w-full font-semibold">
                  {card.buttonText}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    );
  };

  const tabsInfo = [
    { label: "Ayuda con el Currículum", key: "ayudaCurriculum" },
    { label: "Ayuda en LinkedIn", key: "ayudaLinkedin" },
    { label: "Ayuda de Carta de Presentación", key: "ayudaCarta" },
    { label: "Servicios", key: "servicios" },
  ]; // Datos de los botones

  return (
    <section
      className={`relative py-16 ${baseBackground} ${textColor}`} // Added relative positioning
      style={{
        backgroundImage: backgroundPattern,
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      {/* Container matching model */}
      <div className="container mx-auto px-6 max-w-6xl relative z-10"> {/* Added relative z-10 */}
        {/* Título de la sección */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center"> {/* Adjusted margin bottom */}
            Explora Nuestros Recursos y Servicios
        </h2>
        {/* Párrafo eliminado según solicitud */}

        {/* Botones de Pestañas (Estilo BlogPage) */}
        {/* Usando grid y flex para replicar el layout del modelo */}
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-3 max-w-md mx-auto sm:max-w-none mb-10"> {/* Added mb-10 */}
          {tabsInfo.map((tab, index) => {
            const isLastItem = index === tabsInfo.length - 1;
            const isOddNumber = tabsInfo.length % 2 !== 0;
            return (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`px-4 py-2 h-12 rounded-md transition duration-300 ease-in-out cursor-pointer font-semibold text-sm flex items-center justify-center text-center w-full sm:w-auto
                           ${activeTab === tab.key
                            ? `${buttonActiveBg} ${buttonActiveText} shadow-md` // Active style from model
                            // Inactive style using hover from model
                            : `${buttonInactiveBg} ${buttonInactiveText} ${buttonHoverBg} ${buttonHoverText} hover:shadow-lg`
                          }
                           ${isOddNumber && isLastItem ? 'col-span-2 justify-self-center max-w-[calc(50%-0.25rem)] sm:col-span-1 sm:max-w-none' : ''} ` // Center last odd item on mobile
                }
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        {/* Mensaje descriptivo eliminado según solicitud */}

        {/* Contenido de las Tarjetas */}
        {renderCardsContent()}
      </div>
    </section>
  );
}

/* --------------------------------------
 * Página principal: EmpleoPage
 * -------------------------------------- */
export default function EmpleoPage() {
  // useEffect para asegurar que el renderizado inicial del cliente coincida con el servidor
  // y evitar errores de hidratación con el tema.
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Renderiza un estado vacío o un loader hasta que el cliente se hidrate
  if (!isClient) {
    return null; // O un componente de carga si prefieres
  }

  return (
    <>
      <Header />
      <main>
        {/* 1) Sección Hero (Sin cambios) */}
        <HeroEmpleoSection />

        {/* 2) Sección Recursos y Servicios (Modificada) */}
        <RecursosServiciosSection />

        {/* Espacio para futuras secciones (como en el original) */}
        {/* <section className={`py-16 ${darkMode ? 'bg-black' : 'bg-white'} ${textColor}`}>
             Contenido Sección 3
           </section> */}

        {/* <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} ${textColor}`}>
             Contenido Sección 4
           </section> */}

      </main>
      <Footer />
    </>
  );
}
