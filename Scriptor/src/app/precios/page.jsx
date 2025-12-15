"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
// Assuming Image component is correctly imported
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from '@mui/icons-material/Cancel'; // <-- Importar icono X (Cancel)
// Importa tu lógica de theme:
import { useTheme } from "@/app/theme-provider";

// ---------------------------------------------------------------------
//                           NUEVO CARRUSEL DE TESTIMONIOS (DEL MODELO)
// ---------------------------------------------------------------------
function TestimonialCarousel({ testimonials }) {
  const { darkMode } = useTheme();
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3); // Default to 3

  // Duplicamos el array para efecto "infinito" (3 veces)
  const items = [...testimonials, ...testimonials, ...testimonials];

  // Al montar, arrancamos desde la posición "central"
  useEffect(() => {
    // Initialize currentIndex only once when testimonials change length
    setCurrentIndex(testimonials.length);
  }, [testimonials.length]);

  // Mide el ancho del contenedor y ajusta cardsPerView
  useEffect(() => {
    const measureWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        // *** MODIFICATION START ***
        // Show 3 cards on mobile devices as requested
        if (width < 768) { // Less than md breakpoint
             setCardsPerView(3); // Show 3 cards on mobile
        } else if (width < 1024) { // Less than lg breakpoint
             setCardsPerView(2); // Keep 2 for tablets or adjust as needed
        } else {
             setCardsPerView(3); // Keep 3 for desktop
        }
        // *** MODIFICATION END ***
        setContainerWidth(width);
      }
    };

    measureWidth(); // Measure on initial render
    window.addEventListener("resize", measureWidth); // Measure on resize

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", measureWidth);
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount


  // Manejo de autoplay
  const autoPlayRef = useRef(null);
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // <-- MODIFICACIÓN: Se quitó [currentIndex] para que el intervalo se establezca solo una vez

  const startAutoPlay = () => {
    stopAutoPlay(); // Limpia interval previo
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 5000); // Cambia cada 5 segundos
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  const cardWidth = containerWidth > 0 ? (containerWidth - (cardsPerView - 1) * 16) / cardsPerView : 0; // Ajuste para el gap (16px = gap-4)
  const totalItems = items.length;

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
    // Ya no se reinicia autoplay aquí manualmente, el intervalo sigue corriendo
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
    // Ya no se reinicia autoplay aquí manualmente, el intervalo sigue corriendo
  };

  const handleTransitionEnd = () => {
    let newIndex = currentIndex;
    // Lógica para el bucle infinito
    if (currentIndex < testimonials.length) {
      newIndex = currentIndex + testimonials.length;
    } else if (currentIndex >= testimonials.length * 2) {
      newIndex = currentIndex - testimonials.length;
    }
    // Solo actualiza si el índice realmente cambió para evitar re-render innecesario
    if (newIndex !== currentIndex) {
        // Aplicamos la transición sin animación para el "salto"
        setIsTransitioning(false); // Temporalmente desactivar transición
        setCurrentIndex(newIndex);
        // Forzar un reflow si es necesario (a veces útil, pero probar sin él primero)
        // void containerRef.current?.offsetWidth;
        // Reactivar transición para el siguiente movimiento
        // requestAnimationFrame(() => setIsTransitioning(true)); // Puede ser complejo, probar sin esto primero
    } else {
       setIsTransitioning(false); // Asegurar que la transición se marca como terminada
    }
  };

  // Eventos de arrastre
   const handleMouseDown = (e) => {
     if (e.button !== 0) return; // Solo botón izquierdo
     setIsDragging(true);
     setStartX(e.clientX);
     stopAutoPlay();
     // Evitar selección de texto al arrastrar
     e.target.style.userSelect = 'none';
     // Cambiar cursor
     if (containerRef.current) containerRef.current.style.cursor = 'grabbing';
   };

   const handleMouseMove = (e) => {
     if (!isDragging) return;
     const diff = e.clientX - startX;
     setOffsetX(diff);
   };

   const handleMouseUp = () => {
     if (!isDragging) return;
     finishDrag();
     startAutoPlay(); // Reiniciar autoplay al soltar
     // Restaurar selección de texto y cursor
     if (document.body) document.body.style.userSelect = '';
     if (containerRef.current) containerRef.current.style.cursor = 'grab';
   };

   const handleMouseLeave = () => {
     if (!isDragging) return;
     finishDrag();
     startAutoPlay(); // Reiniciar autoplay al salir
      if (document.body) document.body.style.userSelect = '';
      if (containerRef.current) containerRef.current.style.cursor = 'grab';
   };

   const handleTouchStart = (e) => {
     setIsDragging(true);
     setStartX(e.touches[0].clientX);
     stopAutoPlay();
     if (containerRef.current) containerRef.current.style.cursor = 'grabbing';
   };

   const handleTouchMove = (e) => {
     if (!isDragging) return;
     const diff = e.touches[0].clientX - startX;
     setOffsetX(diff);
   };

   const handleTouchEnd = () => {
     if (!isDragging) return;
     finishDrag();
     startAutoPlay(); // Reiniciar autoplay al soltar touch
     if (containerRef.current) containerRef.current.style.cursor = 'grab';
   };

   const finishDrag = () => {
     // Solo considera el drag si el offset es significativo
     if (Math.abs(offsetX) > 5) { // Umbral pequeño para evitar clics accidentales
         const threshold = cardWidth / 4; // Umbral más sensible
         if (offsetX > threshold) {
           handlePrev(); // Llama a la función para ir al anterior
         } else if (offsetX < -threshold) {
           handleNext(); // Llama a la función para ir al siguiente
         }
     }
     setOffsetX(0); // Siempre resetea el offset
     setIsDragging(false);
   };

   // Calcula el translateX asegurándose de que currentIndex es válido
   const safeCurrentIndex = isNaN(currentIndex) || currentIndex < 0 ? testimonials.length : currentIndex; // Ajuste para empezar en el medio
   const totalCardWidthAndGap = cardWidth > 0 ? cardWidth + 16 : 0; // cardWidth + gap (16px = gap-4)
   const translateX = totalCardWidthAndGap > 0 ? -(safeCurrentIndex * totalCardWidthAndGap) + offsetX : 0;


  // Estilo del contenedor del carrusel
  const carouselContainerStyle = {
    transform: `translateX(${translateX}px)`,
    // Aplicar transición SÓLO cuando isTransitioning es true Y no se está arrastrando
    transition: isTransitioning && !isDragging ? "transform 300ms ease-out" : "none",
    // No es necesario calcular el width total aquí si el contenedor flex se ajusta
    cursor: isDragging ? "grabbing" : "grab",
  };

  // Estilo de cada tarjeta del carrusel
  const cardStyle = {
    width: cardWidth > 0 ? cardWidth : '100%', // Asegura que la tarjeta tenga ancho
    flexShrink: 0,
  };

  return (
    <div className="relative max-w-6xl mx-auto overflow-hidden group" ref={containerRef}>
       {/* ***** MODIFICACIÓN AQUÍ: Añadido gap-4 para separación ***** */}
      <div
        className="flex gap-4" // <--- AÑADIDO gap-4 para separar los items
        style={carouselContainerStyle}
        onTransitionEnd={handleTransitionEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((test, i) => (
          <div
            key={`${test.id}-${i}`} // Clave más única incluyendo el índice del duplicado
            style={cardStyle}
             // ***** MODIFICACIÓN AQUÍ: Eliminado mx-0 md:mx-2 *****
            className={`p-4 flex-shrink-0 rounded shadow my-2 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`} // <--- ELIMINADO mx-0 md:mx-2
             // Prevenir drag de imagen nativo
             onDragStart={(e) => e.preventDefault()}
          >
            {/* Contenido de la tarjeta */}
             <div className="flex flex-col items-center mb-2">
               {/* ***** MODIFICACIÓN AQUÍ: Se eliminó el Link que envolvía la imagen ***** */}
               <img
                 src={test.avatar || "https://via.placeholder.com/80"} // Placeholder si no hay avatar
                 alt={test.name}
                 className="w-16 h-16 rounded-full object-cover mb-2" // Se eliminó cursor-pointer
                 width={64} // Añadir width y height para img es buena práctica
                 height={64}
               />
               {/* ***** FIN DE LA MODIFICACIÓN ***** */}
               <h4 className="font-bold text-sm">{test.name}</h4>
               <span className="text-xs text-gray-500 dark:text-gray-400">{test.date}</span>
             </div>
             {/* Estrellas */}
             <div className="flex items-center justify-center mt-2">
                 {[...Array(5)].map((_, idx) => (
                 <svg
                   key={idx}
                   className="w-4 h-4 text-yellow-400 mr-1"
                   fill="currentColor"
                   viewBox="0 0 20 20"
                 >
                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.785.57-1.84-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.957z" />
                 </svg>
                 ))}
             </div>
             {/* Texto */}
             <p className={`mt-2 italic text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                 “{test.text}”
             </p>
          </div>
        ))}
      </div>

      {/* Botón Anterior */}
      <button
        onClick={handlePrev}
        className="cursor-pointer absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-600 bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Anterior Testimonio" // Accesibilidad
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Botón Siguiente */}
      <button
        onClick={handleNext}
        className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-600 bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Siguiente Testimonio" // Accesibilidad
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}


// ---------------------------------------------------------------------
//                           NUEVO ACORDEÓN (FAQ - DEL MODELO)
// ---------------------------------------------------------------------
// Componente AccordionItem individual reutilizable
function AccordionItem({ title, content, isOpen, onClick, darkMode }) {
  return (
    <div
      className={`
        rounded-md p-3 cursor-pointer mb-2
        ${darkMode ? "bg-gray-800" : "bg-gray-50"}
        hover:bg-purple-600/20
        hover:shadow-[0_0_10px_rgba(128,0,128,0.2)]
        ${darkMode ? "hover:text-white" : "hover:text-gray-900"}
        transition-all duration-700
      `}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <h3 className={`text-base font-semibold ${darkMode ? "text-gray-100" : "text-gray-900"}`}>
          {title}
        </h3>
        <span className="text-purple-600 font-bold transform transition-transform duration-300">
          {isOpen ? "-" : "+"} {/* Cambia el icono basado en isOpen */}
        </span>
      </div>
      <div
        className={`
          overflow-hidden transition-all duration-700 ease-in-out
          ${isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}
        `}
      >
        <p className={`text-base ${darkMode ? "text-gray-100" : "text-gray-700"}`}>
            {content}
        </p>
      </div>
    </div>
  );
}

// Componente contenedor del FAQ que maneja el estado de apertura
function FaqAccordionContainer({ faqData, darkMode }) {
  // Estado para controlar qué ítem está abierto ([catIndex, itemIndex] o null)
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (catIdx, itemIdx) => {
    // Si se hace clic en el mismo ítem abierto, ciérralo. Si no, abre el nuevo.
    setOpenIndex(
        openIndex && openIndex[0] === catIdx && openIndex[1] === itemIdx
        ? null
        : [catIdx, itemIdx]
    );
  };

  return (
    <>
      {faqData.map((cat, catIndex) => (
        <div key={catIndex} className="mb-8">
          <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{cat.category}</h3>
          <div className="space-y-2">
            {cat.items.map((faq, itemIndex) => {
              // Determina si este ítem específico es el que debe estar abierto
              const isOpen =
                openIndex !== null &&
                openIndex[0] === catIndex &&
                openIndex[1] === itemIndex;

              return (
                <AccordionItem
                    key={`${catIndex}-${itemIndex}`} // Clave única para cada ítem
                    title={faq.title}
                  content={faq.content}
                  isOpen={isOpen}
                  onClick={() => handleToggle(catIndex, itemIndex)} // Pasa el handler
                  darkMode={darkMode}
                />
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}


// ---------------------------------------------------------------------
//             OBJETO PARA TACHAR ELEMENTOS DE CADA TARJETA
// ---------------------------------------------------------------------
const strikeItems = {
  "0-3": {
    "$20": [
      "Obtén tu currículum en 3 plantillas diferentes",
      "Carta de presentación",
      "Optimización de LinkedIn",
      "E-Book de LinkedIn y Prompts de ChatGPT",
    ],
    "$30": [
      "Obtén tu currículum en 3 plantillas diferentes",
      "Optimización de LinkedIn",
      "E-Book de LinkedIn y Prompts de ChatGPT",
    ],
    "$40": [
      "Obtén tu currículum en 3 plantillas diferentes",
      "E-Book de LinkedIn y Prompts de ChatGPT",
    ],
  },
  "3-6": {
    "$25": [
      "Obtén tu currículum en 3 plantillas diferentes",
      "Carta de presentación",
      "Optimización de LinkedIn",
      "E-Book de LinkedIn y Prompts de ChatGPT",
    ],
    "$35": [
      "Obtén tu currículum en 3 plantillas diferentes",
      "Optimización de LinkedIn",
      "E-Book de LinkedIn y Prompts de ChatGPT",
    ],
    "$45": [
      "Obtén tu currículum en 3 plantillas diferentes",
      "E-Book de LinkedIn y Prompts de ChatGPT",
    ],
  },
  "6-15": {
    "$40": [
      "Obtén tu currículum en 3 plantillas diferentes",
      "Carta de presentación",
      "Optimización de LinkedIn",
      "E-Book de LinkedIn y Prompts de ChatGPT",
    ],
    "$50": [
      "Obtén tu currículum en 3 plantillas diferentes",
      "Optimización de LinkedIn",
      "E-Book de LinkedIn y Prompts de ChatGPT",
    ],
    "$60": [
      "Obtén tu currículum en 3 plantillas diferentes",
      "E-Book de LinkedIn y Prompts de ChatGPT",
    ],
  },
  "15-20": {
    "$50": [
      "Obtén tu currículum en 3 plantillas diferentes",
      "Carta de presentación",
      "Optimización de LinkedIn",
      "E-Book de LinkedIn y Prompts de ChatGPT",
    ],
    "$60": [
      "Optimización de LinkedIn",
      "Obtén tu currículum en 3 plantillas diferentes",
      "E-Book de LinkedIn y Prompts de ChatGPT",
     ],
    "$70": [
      "Obtén tu currículum en 3 plantillas diferentes",
      "E-Book de LinkedIn y Prompts de ChatGPT",
    ],
  },
  CXO: {
    "$80": [
      "Redacción de carta de presentación optimizada para el trabajo",
      "Optimización de perfil de LinkedIn",
      "E-Book de LinkedIn y Prompts de ChatGPT",
    ],
    "$100": [
      "Optimización de perfil de LinkedIn",
       "E-Book de LinkedIn y Prompts de ChatGPT",
    ],
    // Añadido para la tarjeta de $120 si es necesario
     "$120": [
        // Si hay items específicos que tachar para $120
     ]
  },
};

// ---------------------------------------------------------------------
//                       PÁGINA PRINCIPAL DE PRECIOS
// ---------------------------------------------------------------------
export default function PreciosPage() {
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("0-3");
  const [showCards, setShowCards] = useState(true);
  const [chosenExperience, setChosenExperience] = useState(
    "Has elegido el nivel de experiencia de 0-3 años."
  );

  // Estilos de botones (diseño original mantenido para estos 5 botones)
  const buttonActiveBg = "bg-purple-600";
  const buttonActiveText = "text-white";
  const buttonInactiveBg = darkMode ? "bg-gray-700" : "bg-gray-200"; // Ajustado para que inactivo sea blanco en light mode
  const buttonInactiveText = darkMode ? "text-white" : "text-gray-800";
  const buttonHoverBg = "hover:bg-purple-500"; // Hover morado más claro
  const buttonHoverText = "hover:text-white";

  const handleTabChange = (tabKey) => {
    setShowCards(false);
    setActiveTab(tabKey);
    switch (tabKey) {
      case "0-3":
        setChosenExperience("Has elegido el nivel de experiencia de 0-3 años.");
        break;
      case "3-6":
        setChosenExperience("Has elegido el nivel de experiencia de 3-6 años.");
        break;
      case "6-15":
        setChosenExperience("Has elegido el nivel de experiencia de 6-15 años.");
        break;
      case "15-20":
        setChosenExperience("Has elegido el nivel de experiencia de 15-20 años.");
        break;
      case "CXO":
        setChosenExperience("Has elegido el nivel de experiencia CXO / Alta Dirección (20+ años).");
        break;
      default:
        setChosenExperience("");
    }
    setTimeout(() => {
      setShowCards(true);
    }, 50);
  };

  // ---------------------------------------------------------------------
  //                       DATOS DE LAS TARJETAS
  // ---------------------------------------------------------------------
  const pricingCardsData = {
    "0-3": [
       {
         title: "Básico", price: "$20", features: [
           "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Entrega en 3-4 días",
           "Obtén tu currículum en 3 plantillas diferentes", "Carta de presentación", "Optimización de LinkedIn",
           "E-Book de LinkedIn y Prompts de ChatGPT",
         ], href:"#" // Añadido href
       },
       {
         title: "Intermedio", price: "$30", features: [
           "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Carta de presentación",
           "Entrega en 3-4 días", "Obtén tu currículum en 3 plantillas diferentes", "Optimización de LinkedIn",
           "E-Book de LinkedIn y Prompts de ChatGPT",
         ], href:"#"
       },
       {
         title: "Premium", price: "$40", features: [
           "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Carta de presentación",
            "Entrega en 3-4 días", "Optimización de LinkedIn", "Obtén tu currículum en 3 plantillas diferentes",
           "E-Book de LinkedIn y Prompts de ChatGPT",
         ], href:"#"
       },
       {
         title: "Platinum", price: "$50", features: [
           "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Carta de presentación",
            "Entrega en 3-4 días", "Optimización de LinkedIn", "Obtén tu currículum en 3 plantillas diferentes",
           "E-Book de LinkedIn y Prompts de ChatGPT",
         ], href:"#"
       },
     ],
     "3-6": [
       {
         title: "Básico", price: "$25", features: [
           "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Entrega en 3-4 días",
           "Obtén tu currículum en 3 plantillas diferentes", "Carta de presentación", "Optimización de LinkedIn",
           "E-Book de LinkedIn y Prompts de ChatGPT",
         ], href:"#"
       },
       {
         title: "Intermedio", price: "$35", features: [
           "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Carta de presentación",
           "Entrega en 3-4 días", "Obtén tu currículum en 3 plantillas diferentes", "Optimización de LinkedIn",
           "E-Book de LinkedIn y Prompts de ChatGPT",
         ], href:"#"
       },
       {
         title: "Premium", price: "$45", features: [
           "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Carta de presentación",
           "Entrega en 3-4 días", "Optimización de LinkedIn", "Obtén tu currículum en 3 plantillas diferentes",
           "E-Book de LinkedIn y Prompts de ChatGPT",
         ], href:"#"
       },
       {
         title: "Platinum", price: "$60", features: [
           "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Carta de presentación",
           "Entrega en 3-4 días", "Optimización de LinkedIn", "Obtén tu currículum en 3 plantillas diferentes",
           "E-Book de LinkedIn y Prompts de ChatGPT",
         ], href:"#"
       },
     ],
     "6-15": [
       {
         title: "Básico", price: "$40", features: [
            "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Entrega en 3-4 días",
           "Obtén tu currículum en 3 plantillas diferentes", "Carta de presentación", "Optimización de LinkedIn",
           "E-Book de LinkedIn y Prompts de ChatGPT",
         ], href:"#"
       },
       {
         title: "Intermedio", price: "$50", features: [
            "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Carta de presentación",
           "Entrega en 3-4 días", "Obtén tu currículum en 3 plantillas diferentes", "Optimización de LinkedIn",
           "E-Book de LinkedIn y Prompts de ChatGPT",
         ], href:"#"
       },
       {
         title: "Premium", price: "$60", features: [
            "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Carta de presentación",
           "Entrega en 3-4 días", "Optimización de LinkedIn", "Obtén tu currículum en 3 plantillas diferentes",
           "E-Book de LinkedIn y Prompts de ChatGPT",
         ], href:"#"
       },
       {
         title: "Platinum", price: "$70", features: [
            "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Carta de presentación",
           "Entrega en 3-4 días", "Optimización de LinkedIn", "Obtén tu currículum en 3 plantillas diferentes",
           "E-Book de LinkedIn y Prompts de ChatGPT",
         ], href:"#"
       },
     ],
     "15-20": [
       {
         title: "Básico", price: "$50", features: [
           "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Entrega en 3-4 días",
           "Obtén tu currículum en 3 plantillas diferentes", "Carta de presentación", "Optimización de LinkedIn",
           "E-Book de LinkedIn y Prompts de ChatGPT",
         ], href:"#"
       },
       {
         title: "Intermedio", price: "$60", features: [
           "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Carta de presentación",
           "Entrega en 3-4 días", "Optimización de LinkedIn", "Obtén tu currículum en 3 plantillas diferentes",
           "E-Book de LinkedIn y Prompts de ChatGPT",
         ], href:"#"
       },
       {
          title: "Premium", price: "$70", features: [
           "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Carta de presentación",
           "Entrega en 3-4 días", "Optimización de LinkedIn", "Obtén tu currículum en 3 plantillas diferentes",
           "E-Book de LinkedIn y Prompts de ChatGPT",
         ], href:"#"
       },
       {
         title: "Platinum", price: "$80", features: [
           "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Carta de presentación",
           "Entrega en 3-4 días", "Optimización de LinkedIn", "Obtén tu currículum en 3 plantillas diferentes",
           "E-Book de LinkedIn y Prompts de ChatGPT",
         ], href:"#"
       },
     ],
     CXO: [
       {
         title: "Básico", price: "$80", features: [
           "Redacción de currículum a nivel ejecutivo", "Soporte de edición por 6 meses",
           "Redacción de carta de presentación optimizada para el trabajo", "Optimización de perfil de LinkedIn",
           "E-Book de LinkedIn y Prompts de ChatGPT",
         ], href:"#"
       },
       {
         title: "Premium", price: "$120", isPopular: true, features: [ // Añadido isPopular
           "Redacción de currículum a nivel ejecutivo", "Soporte de edición por 6 meses",
           "Redacción de carta de presentación optimizada para el trabajo", "Optimización de perfil de LinkedIn",
           "E-Book de LinkedIn y Prompts de ChatGPT",
            "El 80% de nuestros clientes eligen Premium por su gran valor",
         ], href:"#"
       },
       {
         title: "Intermedio", price: "$100", features: [
           "Redacción de currículum a nivel ejecutivo", "Soporte de edición por 6 meses",
           "Redacción de carta de presentación optimizada para el trabajo", "Optimización de perfil de LinkedIn",
           "E-Book de LinkedIn y Prompts de ChatGPT",
         ], href:"#"
       },
     ],
   };

  const gridColsClass =
    activeTab === "CXO"
      ? "grid-cols-1 md:grid-cols-3 justify-items-center"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";

  // ---------------------------------------------------------------------
  //                 FUNCIÓN PARA RENDERIZAR TARJETAS DE PRECIOS
  // ---------------------------------------------------------------------
  const renderPricingCards = () => (
    <>
      {/* Container for buttons and descriptive text */}
      <div className="mb-10 text-center flex flex-col items-center space-y-4">
         {/* --- TÍTULOS --- */}
         <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
           Realiza tu Pedido
         </h2>
         <p className="text-lg md:text-xl max-w-3xl mx-auto text-center mb-10">
             Haz clic abajo para seleccionar tu nivel de experiencia.
         </p>
         {/* --- FIN TÍTULOS --- */}

        {/* Buttons container (MANTENIENDO DISEÑO ORIGINAL DE BOTONES) */}
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-10"> {/* Ajustado max-w y gap */}
          {[
            { label: "0-3 Años de Experiencia", key: "0-3" },
            { label: "3-6 Años de Experiencia", key: "3-6" },
            { label: "6-15 Años de Experiencia", key: "6-15" },
            { label: "15-20 Años de Experiencia", key: "15-20" },
            { label: "CXO / Alta Dirección", key: "CXO" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              // Estilos originales de los botones de la página a modificar
              className={`px-4 py-2 h-12 rounded-md transition duration-300 ease-in-out cursor-pointer font-semibold text-sm flex items-center justify-center text-center w-auto flex-grow sm:flex-grow-0
                        ${activeTab === tab.key
                          ? `${buttonActiveBg} ${buttonActiveText} shadow-md`
                          : `${buttonInactiveBg} ${buttonInactiveText} ${buttonHoverBg} ${buttonHoverText} hover:shadow-lg`
                        }
              `} // Ajustado flex-grow
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Descriptive text showing the selected experience level */}
        {chosenExperience && (
          <p className={`text-sm mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}> {/* Color ajustado */}
            {chosenExperience}
          </p>
         )}
      </div>

      {/* Pricing cards container with animation */}
      <div
        key={activeTab}
        className={`grid ${gridColsClass} gap-8 transition-all duration-700 transform ${
          showCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {pricingCardsData[activeTab].map((card, index) => {
          const itemsToStrike = strikeItems[activeTab]?.[card.price] || [];

          return (
            <div
              key={index}
              className={`relative p-6 border rounded-lg flex flex-col hover:shadow-xl transition-shadow duration-300 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-black'}`} // Estilo tarjeta del modelo
            >
              {/* Etiqueta "Más Popular" (usando card.isPopular) */}
              {card.isPopular && ( // Condición ajustada
                <div className="absolute top-3 right-[-30px] transform rotate-45 bg-red-600 text-white text-xs px-3 py-1 z-10 shadow">
                    Más Popular
                </div>
              )}

              <h4 className="text-xl font-semibold mb-2 text-center">{card.title}</h4>
              <p className="text-3xl font-bold text-purple-600 mb-4 text-center">{card.price}</p>
              <ul className="space-y-2 mb-4 flex-1 text-left">
                {card.features.map((feature, i) => {
                  const isStriked = itemsToStrike.includes(feature);
                  // Evitar tachar la característica "Más Popular" si está en la lista
                  const isPopularFeature = feature === "El 80% de nuestros clientes eligen Premium por su gran valor";
                  return (
                    <li key={i} className="flex items-center">
                      {/* --- ICONO CONDICIONAL --- */}
                      {isStriked && !isPopularFeature ? (
                           <CancelIcon
                            className="text-red-500 mr-2 flex-shrink-0"
                            fontSize="small"
                          />
                       ) : (
                          <CheckCircleIcon
                            className="text-green-500 mr-2 flex-shrink-0"
                            fontSize="small"
                           />
                      )}
                      {/* --- FIN ICONO CONDICIONAL --- */}

                      {/* --- TEXTO CONDICIONAL (TACHADO Y COLOR DARK MODE) --- */}
                       <span className={`
                            ${isStriked && !isPopularFeature
                              ? `line-through ${darkMode ? 'text-gray-400' : 'text-gray-500'}` // Color gris más claro en dark mode para tachados
                              : ''
                            }
                       `}>
                           {feature}
                        </span>
                      {/* --- FIN TEXTO CONDICIONAL --- */}
                    </li>
                   );
                })}
              </ul>
               {/* Botón Ordenar ahora con Link */}
               <Link href={card.href || "#"} passHref>
                 <button className="bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer w-full mt-auto"> {/* hover:bg-purple-700 como en modelo */}
                   Ordenar ahora
                 </button>
               </Link>
                <p className={`text-sm text-center mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}> {/* Color nota satisfacción */}
                 95% de satisfacción del cliente
              </p>
            </div>
          );
        })}
      </div>
    </>
  );

  // ---------------------------------------------------------------------
  //                       DATOS DE TESTIMONIOS
  // ---------------------------------------------------------------------
   const testimonials = [
     {
       id: 1, name: "Abith K.", date: "2025-02-24",
       text: "Trabajo excelente y profesional. Se agradece el soporte de edición posterior al trabajo.",
       avatar: "https://via.placeholder.com/80", href:"#" // Placeholder avatar y href
     },
     {
       id: 2, name: "Raghupathruni Venkatesh", date: "2025-02-24",
       text: "Las plantillas son realmente geniales y la carta de presentación es muy útil... El tiempo de respuesta es muy corto.",
       avatar: "https://via.placeholder.com/80", href:"#"
     },
     {
       id: 3, name: "Dhanlaxmi Prathmesh", date: "2025-02-24",
       text: "Gran servicio 😇",
       avatar: "https://via.placeholder.com/80", href:"#"
     },
     {
       id: 4, name: "Raaj Sharma", date: "2025-02-22",
       text: "¡Increíble! Un servicio excelente... Altamente recomendado.",
       avatar: "https://via.placeholder.com/80", href:"#"
     },
     {
       id: 5, name: "Suhail Suhai", date: "2025-02-17",
       text: "Tu experiencia profesional realmente destaca... Me encanta que incluyas habilidades específicas.",
       avatar: "https://via.placeholder.com/80", href:"#"
     },
     {
       id: 6, name: "Abhay Aswal", date: "2025-02-17",
       text: "Servicio increíble; obtuve mi currículum el mismo día con un buen puntaje ATS.",
       avatar: "https://via.placeholder.com/80", href:"#"
     },
      // Añadir más si es necesario para llenar los slides
       {
         id: 7, name: "Cliente Feliz 7", date: "2025-03-01",
         text: "Muy satisfecho con el resultado final, superó mis expectativas.",
         avatar: "https://via.placeholder.com/80", href:"#"
       },
       {
         id: 8, name: "Profesional Éxito 8", date: "2025-03-05",
         text: "El nuevo CV me abrió puertas a entrevistas que antes no conseguía.",
         avatar: "https://via.placeholder.com/80", href:"#"
       },
       {
         id: 9, name: "Usuario Contento 9", date: "2025-03-10",
         text: "El proceso fue rápido y la comunicación excelente. Lo recomiendo.",
         avatar: "https://via.placeholder.com/80", href:"#"
       },
   ];

  // ---------------------------------------------------------------------
  //         CONTENIDO DE PREGUNTAS FRECUENTES (ESTRUCTURA DEL MODELO)
  // ---------------------------------------------------------------------
  const faqData = [
    {
      category: "Preguntas sobre el Servicio",
      items: [
        { title: "¿Crearás un currículum desde cero o proporcionarás una plantilla?", content: "Creamos un currículum completamente nuevo para cada cliente, asegurándonos de que sea compatible con ATS y se adapte al puesto al que postulas." },
        { title: "¿Es una suscripción o un servicio de pago único?", content: "Nuestros servicios se cobran como un pago único. Además, obtienes revisiones ilimitadas durante una semana tras el primer borrador." },
        { title: "¿Cuál es el tiempo de entrega?", content: "Normalmente, en 3-5 días hábiles tendrás tu currículum listo, siempre que nos facilites toda la información necesaria." },
        { title: "¿Qué incluye la optimización de LinkedIn?", content: "Secciones de foto, banner, titular con palabras clave, resumen y experiencia actualizada, además de habilidades relevantes." },
        { title: "¿Qué métodos de pago aceptan?", content: "UPI (Google Pay, PhonePe, Paytm UPI), tarjetas de débito/crédito y banca en línea de los principales bancos." },
        { title: "¿Crean currículums en formato Europass?", content: "Sí, podemos adaptarnos a estándares internacionales como EAU, EE.UU., Canadá y Europass." },
      ],
    },
    {
      category: "Opciones de Personalización y Flexibilidad",
      items: [
        { title: "¿Puedo elegir la plantilla del currículum?", content: "¡Por supuesto! Tenemos un catálogo de plantillas amigables para ATS y te enviamos la que elijas." },
        { title: "¿Qué es el ATS?", content: "Applicant Tracking Systems filtran currículums. Nuestro formato y palabras clave ayudan a que tu CV sea compatible." },
        { title: "¿Qué puntuación ATS garantizan?", content: "Prometemos un mínimo del 75% en Jobscan, un escáner ATS de renombre." },
        { title: "¿Cómo adapto el CV a cada oferta si solo me dan un currículum?", content: "Te proporcionamos prompts de ChatGPT para modificar y personalizar tu currículum ante cada vacante." },
      ],
    },
    {
      category: "Soporte Posterior a la Entrega",
      items: [
         { title: "¿Qué pasa si no estoy satisfecho?", content: "Nuestro equipo hará lo necesario para ajustar tu currículum hasta que estés satisfecho. Solo necesitamos tu retroalimentación constructiva." },
         { title: "¿Cuántas revisiones tendré?", content: "Te ofrecemos revisiones ilimitadas por una semana tras recibir el primer borrador." },
        { title: "¿Qué pasa si necesito cambios después de unas semanas?", content: "Te entregamos un archivo Word para que puedas editarlo. O contáctanos para actualizaciones profesionales a bajo costo." },
        { title: "¿En qué formatos me entregan el currículum?", content: "En Word (editable) y PDF (listo para enviar)." },
        { title: "¿Garantizan que consiga un empleo?", content: "No podemos prometer un empleo, pero sí un CV optimizado con un 75% ATS mínimo, incrementando tus probabilidades de ser visto por reclutadores." },
      ],
    },
  ];


  // useEffect para asegurar renderizado del lado cliente consistente para el tema
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Evita mismatch de hidratación
  }

  // Define los patrones de fondo basados en el modo oscuro/claro (del modelo)
  const backgroundPatternLight = "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";
  const backgroundPatternDark = "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)";

  // Define los colores base de fondo para alternar (del modelo)
  const baseBackgroundLight = "bg-white";
  const baseBackgroundDark = "bg-black";
  const alternateBackgroundLight = "bg-gray-100";
  const alternateBackgroundDark = "bg-gray-900";

  // Helper para obtener estilos de sección alternados
  const getSectionStyles = (index) => {
    const isEven = index % 2 === 0;
    const baseBg = darkMode
      ? (isEven ? baseBackgroundDark : alternateBackgroundDark)
      : (isEven ? baseBackgroundLight : alternateBackgroundLight);
    const textColor = darkMode ? "text-white" : "text-gray-800";
    const pattern = darkMode ? backgroundPatternDark : backgroundPatternLight;

    return {
      className: `relative py-16 ${baseBg} ${textColor}`,
      style: {
        backgroundImage: pattern,
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      },
    };
  };

  // Datos para la sección "Todos los planes incluyen"
  const includedFeatures = [
      "Garantía de puntuación ATS del 75%",
      "Opción de elegir tu plantilla",
      "20 días de soporte ilimitado para ediciones",
      "Los formatos ATS más recientes y de la más alta calidad",
      "La mejor relación calidad-precio",
  ];

  return (
    <>
      <Header /> {/* Asumiendo que Header maneja el botón de cambio de tema */}

      <main className="scroll-smooth">
        {/* Sección 1: Hero (Precios) */}
        <section id="precios-hero" {...getSectionStyles(0)}> {/* Índice 0 */}
          <div className="container mx-auto px-6 text-center relative z-10 flex flex-col justify-center min-h-screen pt-32"> {/* Ajustado para centrar verticalmente */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
               Servicios de Redacción de Currículums: Precios
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Nuestros paquetes de servicios de redacción de currículums están diseñados específicamente para satisfacer tus requerimientos.
              {/* Texto movido a la siguiente sección */}
            </p>
          </div>
        </section>

        {/* Sección 2: Realiza tu Pedido (Tabs y Precios) */}
        <section id="realiza-pedido" {...getSectionStyles(1)}> {/* Índice 1 */}
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            {renderPricingCards()} {/* Renderiza títulos, botones y tarjetas */}
          </div>
        </section>

        {/* Sección 3: Todos los planes incluyen */}
        <section id="planes-incluyen" {...getSectionStyles(2)}> {/* Índice 2 */}
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10"> {/* Estilo título modelo */}
              Todos los planes incluyen:
             </h2>
            {/* --- NUEVA ESTRUCTURA GRID 5 TARJETAS --- */}
             <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 max-w-4xl mx-auto justify-items-center items-stretch"> {/* items-stretch para igualar altura */}
               {includedFeatures.map((item, idx) => {
                 let gridClasses = "";
                 switch (idx) {
                   case 0: // Top-left
                     gridClasses = "md:col-start-1 md:row-start-1";
                     break;
                   case 1: // Top-right
                     gridClasses = "md:col-start-3 md:row-start-1";
                     break;
                   case 2: // Bottom-left
                     gridClasses = "md:col-start-1 md:row-start-2";
                     break;
                   case 3: // Bottom-right
                     gridClasses = "md:col-start-3 md:row-start-2";
                     break;
                   case 4: // Center (Top-center)
                     gridClasses = "md:col-start-2 md:row-span-2 self-center";
                     break;
                   default: // Por si acaso hay más items
                     gridClasses = "";
                 }
                 return (
                   <div key={idx} className={`p-4 rounded-lg shadow flex items-center w-full ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} ${gridClasses}`}> {/* Tarjeta */}
                     <CheckCircleIcon className="text-green-500 mr-3 flex-shrink-0" fontSize="medium"/> {/* Icono */}
                     <span className={`text-left ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{item}</span> {/* Texto */}
                   </div>
                 );
               })}
             </div>
             {/* --- FIN NUEVA ESTRUCTURA GRID --- */}
          </div>
        </section>

        {/* Sección 4: EXCELLENT (Testimonios) */}
        <section id="excellent" {...getSectionStyles(3)}> {/* Índice 3 */}
          <div className="container mx-auto px-6 relative z-10">
             <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              EXCELLENT
            </h2>
            <TestimonialCarousel testimonials={testimonials} /> {/* Usar el carrusel del modelo */}
          </div>
        </section>

        {/* Sección 5: Preguntas Frecuentes (FAQ) */}
        <section id="faq" {...getSectionStyles(4)}> {/* Índice 4 */}
          <div className="container mx-auto px-6 relative z-10 max-w-4xl"> {/* max-w para centrar contenido */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Preguntas Frecuentes
            </h2>
             {/* Usar el contenedor de acordeón del modelo */}
             <FaqAccordionContainer faqData={faqData} darkMode={darkMode} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
