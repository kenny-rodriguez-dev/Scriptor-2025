"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
// Assuming Image component is correctly imported
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from '@mui/icons-material/Cancel'; // <-- Importar icono X (Cancel)
import PhoneIcon from "@mui/icons-material/Phone";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SearchIcon from "@mui/icons-material/Search";
import DraftsIcon from "@mui/icons-material/Drafts";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
// Importa tu lógica de theme:
import { useTheme } from "@/app/theme-provider";

/* --------------------------------------
 * Componente CountUp (estadísticas)
 * -------------------------------------- */
function CountUp({ end, duration = 2, decimals = 0, separator = "" }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const totalFrames = Math.round(duration * 60);
    const increment = end / totalFrames;

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(start);
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [end, duration]);

  return (
    <span>
      {count.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, separator)}
    </span>
  );
}

/* --------------------------------------
 * Sección 1: Hero => "Garantizado un puntaje ATS mínimo del 75%*"
 * -------------------------------------- */
function Hero75Section() {
  const { darkMode } = useTheme();
  // Patrón punteado centrado
  const backgroundPattern = darkMode
    ? "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)"
    : "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";
  const baseBackground = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-gray-800";

  return (
    <section
      id="garantizado-75"
      className={`relative flex items-center justify-center min-h-screen ${baseBackground} ${textColor} pt-32`}
      style={{
        backgroundImage: backgroundPattern,
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Hola mundo
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Servicios de redacción de currículums ATS que realmente funcionan.
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Ofrecemos servicios destacados de redacción de currículums ATS,
          redacción de cartas de presentación y optimización de perfiles de
          LinkedIn. Los únicos redactores que pueden garantizar la compatibilidad
          ATS.
        </p>

        {/* Botones */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
          <Link href="/precios"> {/* MODIFIED: Added href */}
            <button className="flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
              <CheckCircleIcon color="success" className="mr-2" />
              Contrata nuestros servicios
            </button>
          </Link>
          <Link href="/contacto"> {/* MODIFIED: Added href */}
            <button className="flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
              <CheckCircleIcon color="success" className="mr-2" />
              Solicitar llamada
            </button>
          </Link>
        </div>

        {/* 3 textos (bullet points) en la misma fila para desktop, centrados en mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-4xl mx-auto">
          {/* 1er texto */}
          <div className="flex flex-col items-center md:flex-row md:justify-center">
            <CheckCircleIcon style={{ color: darkMode ? "#fff" : "#000" }} />
            <p className="text-sm mt-2 md:mt-0 md:ml-2 text-center md:text-left">
              Clientes en Google, Amazon, IBM, Reliance y otras empresas Fortune 500
            </p>
          </div>
          {/* 2do texto */}
          <div className="flex flex-col items-center md:flex-row md:justify-center">
            <CheckCircleIcon style={{ color: darkMode ? "#fff" : "#000" }} />
            <p className="text-sm mt-2 md:mt-0 md:ml-2 text-center md:text-left">
              Experiencia en India, Canadá, EE.UU., Reino Unido, Medio Oriente,
              Australia y más.
            </p>
          </div>
          {/* 3er texto */}
          <div className="flex flex-col items-center md:flex-row md:justify-center">
            <CheckCircleIcon style={{ color: darkMode ? "#fff" : "#000" }} />
            <p className="text-sm mt-2 md:mt-0 md:ml-2 text-center md:text-left">
              95% de Satisfacción del Cliente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------
 * Sección 2: "Obtenemos resultados..."
 * -------------------------------------- */
function ATSStatsSection() {
  const { darkMode } = useTheme();
  const backgroundPattern = darkMode
    ? "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)"
    : "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";
  const baseBackground = darkMode ? "bg-gray-900" : "bg-gray-100";
  const textColor = darkMode ? "text-white" : "text-gray-800";

  return (
    <section
      className={`py-16 ${baseBackground} ${textColor}`}
      style={{
        backgroundImage: backgroundPattern,
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 text-center">
        <p className="mb-8 text-lg font-semibold">
          Obtenemos resultados para nuestros clientes. Puntaje mínimo de ATS del
          75% con cada pedido.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={15} duration={2} />+
            </h3>
            <p className="mt-2">Países</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={2000} duration={2} separator="," />+
            </h3>
            <p className="mt-2">Clientes Atendidos</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={4.9} duration={2} decimals={1} />+
            </h3>
            <p className="mt-2">Calificación en Google</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={75} duration={2} />%+
            </h3>
            <p className="mt-2">Puntaje ATS</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------
//                           NUEVO CARRUSEL DE TESTIMONIOS (MODIFIED ExcellentSection)
// ---------------------------------------------------------------------
function TestimonialCarousel({ testimonials }) { // This is the new TestimonialCarousel from the model
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
        // *** MODIFICACIÓN INICIO: Ajuste para 3 tarjetas en móvil ***
        // Mostrar 3 tarjetas en dispositivos móviles como se solicita
        if (width < 768) { // Menor que el breakpoint 'md' (móviles)
          setCardsPerView(3); // Mostrar 3 tarjetas en móvil
        } else if (width < 1024) { // Menor que el breakpoint 'lg' (tablets)
          setCardsPerView(2); // Mantener 2 para tablets o ajustar según necesidad
        } else {
          setCardsPerView(3); // Mantener 3 para escritorio
        }
        // *** MODIFICACIÓN FIN ***
        setContainerWidth(width);
      }
    };

    measureWidth(); // Medir en el renderizado inicial
    window.addEventListener("resize", measureWidth); // Medir al cambiar tamaño de ventana

    // Limpiar listener al desmontar el componente
    return () => window.removeEventListener("resize", measureWidth);
  }, []); // Array de dependencias vacío significa que esto se ejecuta una vez al montar y se limpia al desmontar


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
            {/* INICIO MODIFICACIÓN: Estructura interna de la tarjeta para alinear imagen y texto */}
            <div className="flex flex-col items-center text-center"> {/* Centra el contenido de la tarjeta */}
              {/* Imagen de perfil */}
              <img
                src={test.avatar || "https://via.placeholder.com/80"} // Placeholder si no hay avatar
                alt={test.name}
                // MODIFICACIÓN: Tamaño de imagen estandarizado a w-16 h-16 (64px) y object-cover
                className="w-16 h-16 rounded-full object-cover mb-2"
                width={64} 
                height={64}
              />
              {/* Nombre y fecha */}
              <h4 className="font-bold text-sm">{test.name}</h4>
              <span className="text-xs text-gray-500 dark:text-gray-400 mb-2">{test.date}</span>
              {/* Estrellas */}
              <div className="flex items-center justify-center">
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
              {/* Texto del testimonio */}
              <p className={`mt-2 italic text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                “{test.text}”
              </p>
            </div>
            {/* FIN MODIFICACIÓN */}
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


function ExcellentSection() { // This is the MODIFIED ExcellentSection
  const { darkMode } = useTheme();
  // Patrón punteado centrado (del modelo)
  const backgroundPattern = darkMode
    ? "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)"
    : "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";
  // Define los colores base de fondo para alternar (del modelo)
  const baseBackground = darkMode ? "bg-black" : "bg-white";
  // Assuming index 3 for this section (0-indexed) will be odd, so alternate.
  const textColor = darkMode ? "text-white" : "text-gray-800";

  // Datos de testimonios (del modelo)
  // COMENTARIO: Estos son los datos de ejemplo para los testimonios.
  const testimonials = [
    {
      id: 1, name: "Abith K.", date: "2025-02-24",
      text: "Trabajo excelente y profesional. Se agradece el soporte de edición posterior al trabajo.",
      avatar: "https://via.placeholder.com/80" // MODIFIED: Removed href, ensured src
    },
    {
      id: 2, name: "Raghupathruni Venkatesh", date: "2025-02-24",
      text: "Las plantillas son realmente geniales y la carta de presentación es muy útil... El tiempo de respuesta es muy corto.",
      avatar: "https://via.placeholder.com/80" // MODIFIED: Removed href, ensured src
    },
    {
      id: 3, name: "Dhanlaxmi Prathmesh", date: "2025-02-24",
      text: "Gran servicio 😇",
      avatar: "https://via.placeholder.com/80" // MODIFIED: Removed href, ensured src
    },
    {
      id: 4, name: "Raaj Sharma", date: "2025-02-22",
      text: "¡Increíble! Un servicio excelente... Altamente recomendado.",
      avatar: "https://via.placeholder.com/80" // MODIFIED: Removed href, ensured src
    },
    {
      id: 5, name: "Suhail Suhai", date: "2025-02-17",
      text: "Tu experiencia profesional realmente destaca... Me encanta que incluyas habilidades específicas.",
      avatar: "https://via.placeholder.com/80" // MODIFIED: Removed href, ensured src
    },
    {
      id: 6, name: "Abhay Aswal", date: "2025-02-17",
      text: "Servicio increíble; obtuve mi currículum el mismo día con un buen puntaje ATS.",
      avatar: "https://via.placeholder.com/80" // MODIFIED: Removed href, ensured src
    },
    // Añadir más si es necesario para llenar los slides
    {
      id: 7, name: "Cliente Feliz 7", date: "2025-03-01",
      text: "Muy satisfecho con el resultado final, superó mis expectativas.",
      avatar: "https://via.placeholder.com/80" // MODIFIED: Removed href, ensured src
    },
    {
      id: 8, name: "Profesional Éxito 8", date: "2025-03-05",
      text: "El nuevo CV me abrió puertas a entrevistas que antes no conseguía.",
      avatar: "https://via.placeholder.com/80" // MODIFIED: Removed href, ensured src
    },
    {
      id: 9, name: "Usuario Contento 9", date: "2025-03-10",
      text: "El proceso fue rápido y la comunicación excelente. Lo recomiendo.",
      avatar: "https://via.placeholder.com/80" // MODIFIED: Removed href, ensured src
    },
  ];

  // Helper para obtener estilos de sección alternados (del modelo, adaptado)
  const getSectionStyles = () => {
    const pattern = darkMode ? backgroundPatternDark : backgroundPatternLight;
    return {
      className: `relative py-16 ${baseBackground} ${textColor}`, // Using baseBackground as per section 3 model
      style: {
        backgroundImage: pattern,
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      },
    };
  };
  // Define los patrones de fondo basados en el modo oscuro/claro (del modelo)
  const backgroundPatternLight = "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";
  const backgroundPatternDark = "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)";

  return (
    // COMENTARIO: Sección "EXCELLENT" que muestra testimonios en un carrusel.
    <section id="excellent" {...getSectionStyles()}> {/* Usando el helper */}
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          EXCELLENT
        </h2>
        {/* COMENTARIO: Componente TestimonialCarousel para mostrar los testimonios. */}
        <TestimonialCarousel testimonials={testimonials} /> {/* Usar el carrusel del modelo */}
      </div>
    </section>
  );
}


/* --------------------------------------
 * Slider de CV (izquierda)
 * -------------------------------------- */
function CvSliderLeft({ sliderImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const measureWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    measureWidth();
    window.addEventListener("resize", measureWidth);
    return () => window.removeEventListener("resize", measureWidth);
  }, []);

  // Auto-slide cada 6s
  const autoPlayRef = useRef(null);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 6000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length
    );
    setOffsetX(0);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    setOffsetX(0);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    stopAutoPlay();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setOffsetX(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    finishDrag();
    startAutoPlay();
  };

  const handleMouseLeave = () => {
    if (!isDragging) return;
    finishDrag();
    startAutoPlay();
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    stopAutoPlay();
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    setOffsetX(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    finishDrag();
    startAutoPlay();
  };

  const finishDrag = () => {
    const threshold = containerWidth / 3;
    if (offsetX > threshold) {
      handlePrev();
    } else if (offsetX < -threshold) {
      handleNext();
    } else {
      setOffsetX(0);
    }
    setIsDragging(false);
  };

  const translateX = -(currentIndex * containerWidth) + offsetX;

  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden">
      <div
        ref={containerRef}
        className="relative group overflow-hidden"
        style={{ width: "100%", maxWidth: "450px" }}
      >
        <div
          className="border-2 border-black dark:border-white"
          style={{
            margin: "auto",
            overflow: "hidden",
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          <div
            className="flex"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: isDragging ? "none" : "transform 0.5s ease",
              width: `${sliderImages.length * containerWidth}px`,
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {sliderImages.map((src, i) => (
              <div
                key={i}
                style={{ width: containerWidth, height: "auto" }}
              >
                <img // MODIFIED: Removed Link wrapper, img is not clickable
                  src={src}
                  alt={`CV sample ${i}`}
                  style={{ width: "100%", height: "auto" }}
                  onDragStart={(e) => e.preventDefault()}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Flechas */}
        <button
          onClick={handlePrev}
          className="cursor-pointer absolute left-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-600 bg-opacity-50 rounded-full p-1 hover:bg-opacity-70"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-600 bg-opacity-50 rounded-full p-1 hover:bg-opacity-70"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Puntos */}
      <div className="flex justify-center mt-4">
        {sliderImages.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentIndex(i);
              setOffsetX(0);
            }}
            className={`cursor-pointer w-3 h-3 rounded-full mx-1 focus:outline-none ${currentIndex === i
                ? "bg-purple-600" // MODIFICADO: Color del punto activo a morado
                : "bg-gray-300 dark:bg-gray-700"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

/* --------------------------------------
 * CARRUSEL INFINITO => "Obtenemos Resultados para Nuestros Clientes"
 * -------------------------------------- */
// COMENTARIO: Este carrusel muestra resultados de clientes y ha sido modificado para simetría móvil y tamaño de imagen.
function ClientResultsCarousel({ results }) {
  const { darkMode } = useTheme();
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0); // Comienza en el primer set real
  const [offsetX, setOffsetX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // Para manejar el "salto" del bucle infinito
  const [isDragging, setIsDragging] = useState(false);
  const [startXvalue, setStartXValue] = useState(0); // Renombrado para evitar conflicto
  
  // INICIO MODIFICACIÓN: Lógica para tarjetas por vista responsiva
  const [cardsPerView, setCardsPerView] = useState(3); // Por defecto 3, se ajustará
  // FIN MODIFICACIÓN

  const autoPlayInterval = 4000;
  const items = [...results, ...results, ...results]; // Clonamos 3 veces para el bucle

  // INICIO MODIFICACIÓN: useEffect para ajustar cardsPerView y medir ancho
  useEffect(() => {
    const measureAndSetCards = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setContainerWidth(width);
        // Lógica para ajustar cardsPerView similar a TestimonialCarousel
        if (width < 768) { // Móviles (ej. breakpoint 'md' de Tailwind)
          setCardsPerView(3); // Mostrar 3 tarjetas en móvil para simetría
        } else if (width < 1024) { // Tablets (ej. breakpoint 'lg')
          // Podrías mantener 2 o ajustar a 3 si el diseño lo permite y se ve bien
          setCardsPerView(2); // O 3, según preferencia de diseño en tablet
        } else { // Escritorio
          setCardsPerView(3);
        }
      }
    };
    measureAndSetCards();
    window.addEventListener("resize", measureAndSetCards);
    return () => window.removeEventListener("resize", measureAndSetCards);
  }, []); // Se ejecuta al montar y al cambiar el tamaño de la ventana
  // FIN MODIFICACIÓN

  useEffect(() => {
    // Inicializar currentIndex al primer conjunto de 'results' para el efecto de bucle
    setCurrentIndex(results.length > 0 ? results.length : 0);
  }, [results.length]); // Dependencia de results.length para reinicio si cambia


  // Auto-play
  const autoPlayRef = useRef(null);
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]); // Reinicia autoplay si el índice cambia (puede ser opcional)

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, autoPlayInterval);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  // INICIO MODIFICACIÓN: cardWidth ahora depende de cardsPerView dinámico
  const cardWidth = containerWidth > 0 ? (containerWidth - (cardsPerView - 1) * 16) / cardsPerView : 0; // 16px es el gap-4
  // FIN MODIFICACIÓN
  const totalItems = items.length;

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    let newIndex = currentIndex;
    // Lógica para el bucle infinito: si llegamos a los clones, saltar sin animación
    if (currentIndex < results.length) { // Si estamos en el primer set de clones (izquierda)
      newIndex = currentIndex + results.length;
      setIsTransitioning(false); // Desactivar transición para el salto
      setCurrentIndex(newIndex);
    } else if (currentIndex >= results.length * 2) { // Si estamos en el último set de clones (derecha)
      newIndex = currentIndex - results.length;
      setIsTransitioning(false); // Desactivar transición para el salto
      setCurrentIndex(newIndex);
    } else {
      setIsTransitioning(false); // En cualquier otro caso, la transición normal ha terminado
    }
  };
  
  // Lógica de arrastre (Drag)
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setStartXValue(e.clientX);
    setOffsetX(0); // Resetea offset al iniciar nuevo drag
    stopAutoPlay();
    e.target.style.userSelect = 'none';
    if (containerRef.current) containerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startXvalue;
    setOffsetX(diff);
  };

  const handleMouseUpOrLeave = () => { // Unificada para mouseup y mouseleave
    if (!isDragging) return;
    
    // Lógica para determinar si cambiar de slide basado en el arrastre
    if (Math.abs(offsetX) > cardWidth / 4) { // Umbral para cambiar
      if (offsetX > 0) { // Arrastre hacia la derecha (ver anterior)
        handlePrev();
      } else { // Arrastre hacia la izquierda (ver siguiente)
        handleNext();
      }
    }
    
    setOffsetX(0); // Resetea el offset visual para el próximo frame
    setIsDragging(false);
    startAutoPlay();
    if (document.body) document.body.style.userSelect = '';
    if (containerRef.current) containerRef.current.style.cursor = 'grab';
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartXValue(e.touches[0].clientX);
    setOffsetX(0);
    stopAutoPlay();
    if (containerRef.current) containerRef.current.style.cursor = 'grabbing';
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startXvalue;
    setOffsetX(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
     if (Math.abs(offsetX) > cardWidth / 4) {
      if (offsetX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    setOffsetX(0);
    setIsDragging(false);
    startAutoPlay();
    if (containerRef.current) containerRef.current.style.cursor = 'grab';
  };

  // Cálculo de la posición del carrusel
  // SafeCurrentIndex asegura que no haya NaN si results.length es 0 al inicio.
  const safeCurrentIndex = (isNaN(currentIndex) || currentIndex < 0) ? (results.length > 0 ? results.length : 0) : currentIndex;
  const totalCardWidthAndGap = cardWidth > 0 ? cardWidth + 16 : 0; // cardWidth + gap (16px = gap-4)
  const currentTranslateX = totalCardWidthAndGap > 0 ? -(safeCurrentIndex * totalCardWidthAndGap) : 0;


  const carouselStyle = {
    transform: `translateX(${currentTranslateX + offsetX}px)`,
    transition: isDragging ? 'none' : (isTransitioning ? 'transform 300ms ease-out' : 'none'),
    // Width calculado para todos los items (originales + clones)
    width: `${totalItems * totalCardWidthAndGap}px`, 
    cursor: isDragging ? "grabbing" : "grab",
  };
  
  const itemStyle = {
    width: cardWidth > 0 ? cardWidth : '100%', // Asegura que la tarjeta tenga ancho
    flexShrink: 0, // Evita que las tarjetas se encojan
  };

  // Usamos el mismo fondo punteado
  const backgroundPattern = darkMode
    ? "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)"
    : "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";

  return (
    <div
      className="relative w-full overflow-hidden group" // group para mostrar flechas en hover
      ref={containerRef}
      style={{
        // COMENTARIO: Patrón de fondo punteado aplicado al contenedor del carrusel.
        backgroundImage: backgroundPattern,
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      <div
        className="flex gap-4" // gap-4 para el espacio entre tarjetas
        style={carouselStyle}
        onTransitionEnd={handleTransitionEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave} // Usar la misma lógica para mouseleave
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, i) => (
          <div
            key={`${item.name}-${i}`} // Clave única para cada item clonado
            style={itemStyle}
            className={`p-4 flex-shrink-0 rounded shadow my-2 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
            onDragStart={(e) => e.preventDefault()} // Prevenir drag de imagen nativo
          >
            {/* COMENTARIO: Contenido de cada tarjeta de cliente. Se ajusta imagen y texto. */}
            {/* Estructura interna para alinear imagen y texto verticalmente y asegurar que la imagen no se mueva */}
            <div className="flex flex-col items-center text-center h-full"> {/* items-center y text-center para la imagen y texto debajo */}
              {/* Imagen de Perfil */}
              <Image
                src={item.avatar || "/images/avatars/default.png"} // Usar un placeholder local si es posible
                alt={item.name}
                // INICIO MODIFICACIÓN: Tamaño de imagen estandarizado a w-16 h-16 (64px)
                width={64} 
                height={64}
                className="rounded-full object-cover mb-2 w-16 h-16 flex-shrink-0" // flex-shrink-0 para evitar que se encoja
                // FIN MODIFICACIÓN
              />
              {/* Contenido de Texto */}
              <div className="flex flex-col justify-center">
                <p className={`font-bold text-base mb-1 break-words ${darkMode ? 'text-white' : 'text-black'}`}>
                  {item.name}
                </p>
                <p className={`text-sm leading-5 break-words ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}> {/* Ajustado color de texto en modo claro */}
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Flechas de Navegación */}
      <button
        onClick={handlePrev}
        className="cursor-pointer absolute left-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-600 bg-opacity-50 rounded-full p-1 hover:bg-opacity-70 z-10"
        aria-label="Anterior Cliente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-600 bg-opacity-50 rounded-full p-1 hover:bg-opacity-70 z-10"
        aria-label="Siguiente Cliente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

/* --------------------------------------
 * Sección 4: "Hacemos tu CV realmente amigable para ATS"
 * -------------------------------------- */
function CvServicesSection() {
  const { darkMode } = useTheme();
  const backgroundPattern = darkMode
    ? "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)"
    : "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";
  const baseBackground = darkMode ? "bg-gray-900" : "bg-gray-100";
  const textColor = darkMode ? "text-white" : "text-gray-800";

  // Imágenes del slider
  const sliderImages = [ // MODIFIED: Ensured all images have src
    "https://resumeguru.in/wp-content/uploads/2025/01/2-1.png",
    "https://resumeguru.in/wp-content/uploads/2025/01/3-1.png", // Corrected if it was a duplicate before
    "https://resumeguru.in/wp-content/uploads/2025/01/4-1.png",
    "https://resumeguru.in/wp-content/uploads/2025/01/5-1.png",
    "https://resumeguru.in/wp-content/uploads/2025/01/6-1.png",
    "https://resumeguru.in/wp-content/uploads/2025/01/7-1.png",
    "https://via.placeholder.com/450x600?text=CV+Sample+1" // Added placeholder if one was missing
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggle = (i) => {
    setActiveIndex(i === activeIndex ? null : i);
  };

  // Menús desplegables
  const dropdownItems = [
    {
      question: "Garantizamos un puntaje ATS del 75%*",
      answer:
        "Somos los únicos redactores de currículums que garantizan un puntaje de 75% en ATS, usando Jobscan.",
    },
    {
      question: "Elige tu Plantilla de CV",
      answer:
        "Puedes elegir tu plantilla de entre 29 opciones, todas amigables para ATS.",
    },
    {
      question: "Adaptado a tu Rol Objetivo",
      answer:
        "Optimizamos el CV según la descripción del puesto y agregamos palabras clave.",
    },
    {
      question: "Soporte de Edición por 20 Días",
      answer:
        "Si necesitas ajustes después de la entrega, puedes solicitarlos sin problema.",
    },
    {
      question: "Resultados Comprobados",
      answer:
        "La mayoría de nuestros clientes incrementa entrevistas tras usar nuestros servicios.",
    },
    {
      question: "Entrega en 2-3 Días",
      answer: "Recibirás tu primer borrador en 2-3 días. Proceso rápido y fluido.",
    },
    {
      question: "BONO: E-Book de LinkedIn + Prompts de ChatGPT Gratis",
      answer:
        "Incluimos recursos extra para mejorar tu búsqueda laboral y personalizar tu CV para distintas ofertas.",
    },
  ];

  // Carrusel
  // COMENTARIO: Datos para el carrusel de resultados de clientes. Asegurarse que 'avatar' tenga paths correctos.
  const clientResults = [ // MODIFIED: Ensured all images have src
    {
      name: "Ayush Pathak",
      text: "Consiguió trabajo en Extramarks",
      avatar: "/images/avatars/user1.jpg", // Assuming this path is correct
    },
    {
      name: "Jayati Katyal",
      text: "Consiguió trabajo en S&P500 Global",
      avatar: "/images/avatars/user2.jpg",
    },
    {
      name: "Pragati Lata",
      text: "Consiguió trabajo en Ranstad (Soporte para Google)",
      avatar: "/images/avatars/user3.jpg",
    },
    {
      name: "Rahul Singh",
      text: "Consiguió trabajo en Publicis Sapient",
      avatar: "/images/avatars/user4.jpg",
    },
    {
      name: "Shivani Sahu",
      text: "Consiguió trabajo en IBM",
      avatar: "/images/avatars/user5.jpg",
    },
    {
      name: "Rohit More",
      text: "Consiguió trabajo en Fisher & Paykel Healthcare",
      avatar: "/images/avatars/user6.jpg",
    },
    {
      name: "Kishen Mallick",
      text: "Consiguió trabajo en Blue Yonder",
      avatar: "/images/avatars/user7.jpg",
    },
  ];

  return (
    // COMENTARIO: Sección que detalla los servicios de CV y muestra resultados de clientes.
    <section
      className={`py-16 ${baseBackground} ${textColor}`}
      style={{
        backgroundImage: backgroundPattern,
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Hacemos tu CV realmente amigable para ATS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Slider a la izquierda */}
          <div className="flex justify-center">
            <CvSliderLeft sliderImages={sliderImages} />
          </div>

          {/* Menús + Carrusel a la derecha */}
          <div className="flex flex-col justify-start">
            <div className="space-y-2">
              {dropdownItems.map((item, i) => (
                <div
                  key={i}
                  className={`
                    rounded-md p-3 cursor-pointer
                    ${darkMode ? "bg-gray-800" : "bg-gray-50"}
                    hover:bg-purple-600/20
                    hover:shadow-[0_0_10px_rgba(128,0,128,0.2)]
                    ${darkMode ? "hover:text-white" : "hover:text-gray-900"}
                    transition-all duration-700
                  `}
                  onClick={() => toggle(i)}
                >
                  <div className="flex items-center justify-between">
                    <h3
                      className={`
                        text-base font-semibold
                        ${darkMode ? "text-gray-100" : "text-gray-900"}
                      `}
                    >
                      {item.question}
                    </h3>
                    <span className="text-purple-600 font-bold">
                      {activeIndex === i ? "-" : "+"}
                    </span>
                  </div>
                  <div
                    className={`
                      overflow-hidden transition-all duration-700 ease-in-out
                      ${activeIndex === i
                        ? "max-h-60 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <p
                      className={`
                        text-base
                        ${darkMode ? "text-gray-100" : "text-gray-800"}
                      `}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold mt-6 text-center">
              Obtenemos Resultados para Nuestros Clientes
            </h3>
            {/* COMENTARIO: Instancia del ClientResultsCarousel modificado. */}
            <ClientResultsCarousel results={clientResults} />

            <div className="flex justify-center mt-8">
              <Link href="/contacto"> {/* MODIFIED: Added href */}
                <button className="flex items-center bg-purple-600 text-white px-14 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
                  <PhoneIcon className="mr-2" fontSize="small" />
                  Solicitar Llamada
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------
 * Sección 5: "Realiza tu Pedido" (MODIFIED to match model)
 * -------------------------------------- */
// Objeto para tachar elementos de cada tarjeta (del modelo)
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

function OrderSection() {
  const { darkMode } = useTheme();
  // Estilos y lógica de la sección "Realiza tu Pedido" del MODELO
  const [activeTab, setActiveTab] = useState("0-3");
  const [showCards, setShowCards] = useState(true);
  const [chosenExperience, setChosenExperience] = useState(
    "Has elegido el nivel de experiencia de 0-3 años." // Estado inicial del modelo
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
    }, 50); // Retraso del modelo
  };

  // DATOS DE LAS TARJETAS (del modelo)
  const pricingCardsData = {
    "0-3": [
      {
        title: "Básico", price: "$20", features: [
          "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Entrega en 3-4 días",
          "Obtén tu currículum en 3 plantillas diferentes", "Carta de presentación", "Optimización de LinkedIn",
          "E-Book de LinkedIn y Prompts de ChatGPT",
        ], href: "/checkout?plan=basico_0-3" // MODIFIED: Added href
      },
      {
        title: "Intermedio", price: "$30", features: [
          "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Carta de presentación",
          "Entrega en 3-4 días", "Obtén tu currículum en 3 plantillas diferentes", "Optimización de LinkedIn",
          "E-Book de LinkedIn y Prompts de ChatGPT",
        ], href: "/checkout?plan=intermedio_0-3" // MODIFIED: Added href
      },
      {
        title: "Premium", price: "$40", features: [
          "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Carta de presentación",
          "Entrega en 3-4 días", "Optimización de LinkedIn", "Obtén tu currículum en 3 plantillas diferentes",
          "E-Book de LinkedIn y Prompts de ChatGPT",
        ], href: "/checkout?plan=premium_0-3" // MODIFIED: Added href
      },
      {
        title: "Platinum", price: "$50", features: [
          "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Carta de presentación",
          "Entrega en 3-4 días", "Optimización de LinkedIn", "Obtén tu currículum en 3 plantillas diferentes",
          "E-Book de LinkedIn y Prompts de ChatGPT",
        ], href: "/checkout?plan=platinum_0-3" // MODIFIED: Added href
      },
    ],
    "3-6": [
      {
        title: "Básico", price: "$25", features: [
          "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Entrega en 3-4 días",
          "Obtén tu currículum en 3 plantillas diferentes", "Carta de presentación", "Optimización de LinkedIn",
          "E-Book de LinkedIn y Prompts de ChatGPT",
        ], href: "/checkout?plan=basico_3-6" // MODIFIED: Added href
      },
      {
        title: "Intermedio", price: "$35", features: [
          "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Carta de presentación",
          "Entrega en 3-4 días", "Obtén tu currículum en 3 plantillas diferentes", "Optimización de LinkedIn",
          "E-Book de LinkedIn y Prompts de ChatGPT",
        ], href: "/checkout?plan=intermedio_3-6" // MODIFIED: Added href
      },
      {
        title: "Premium", price: "$45", features: [
          "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Carta de presentación",
          "Entrega en 3-4 días", "Optimización de LinkedIn", "Obtén tu currículum en 3 plantillas diferentes",
          "E-Book de LinkedIn y Prompts de ChatGPT",
        ], href: "/checkout?plan=premium_3-6" // MODIFIED: Added href
      },
      {
        title: "Platinum", price: "$60", features: [
          "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Carta de presentación",
          "Entrega en 3-4 días", "Optimización de LinkedIn", "Obtén tu currículum en 3 plantillas diferentes",
          "E-Book de LinkedIn y Prompts de ChatGPT",
        ], href: "/checkout?plan=platinum_3-6" // MODIFIED: Added href
      },
    ],
    "6-15": [
      {
        title: "Básico", price: "$40", features: [
          "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Entrega en 3-4 días",
          "Obtén tu currículum en 3 plantillas diferentes", "Carta de presentación", "Optimización de LinkedIn",
          "E-Book de LinkedIn y Prompts de ChatGPT",
        ], href: "/checkout?plan=basico_6-15" // MODIFIED: Added href
      },
      {
        title: "Intermedio", price: "$50", features: [
          "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Carta de presentación",
          "Entrega en 3-4 días", "Obtén tu currículum en 3 plantillas diferentes", "Optimización de LinkedIn",
          "E-Book de LinkedIn y Prompts de ChatGPT",
        ], href: "/checkout?plan=intermedio_6-15" // MODIFIED: Added href
      },
      {
        title: "Premium", price: "$60", features: [
          "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Carta de presentación",
          "Entrega en 3-4 días", "Optimización de LinkedIn", "Obtén tu currículum en 3 plantillas diferentes",
          "E-Book de LinkedIn y Prompts de ChatGPT",
        ], href: "/checkout?plan=premium_6-15" // MODIFIED: Added href
      },
      {
        title: "Platinum", price: "$70", features: [
          "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Carta de presentación",
          "Entrega en 3-4 días", "Optimización de LinkedIn", "Obtén tu currículum en 3 plantillas diferentes",
          "E-Book de LinkedIn y Prompts de ChatGPT",
        ], href: "/checkout?plan=platinum_6-15" // MODIFIED: Added href
      },
    ],
    "15-20": [
      {
        title: "Básico", price: "$50", features: [
          "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Entrega en 3-4 días",
          "Obtén tu currículum en 3 plantillas diferentes", "Carta de presentación", "Optimización de LinkedIn",
          "E-Book de LinkedIn y Prompts de ChatGPT",
        ], href: "/checkout?plan=basico_15-20" // MODIFIED: Added href
      },
      {
        title: "Intermedio", price: "$60", features: [
          "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Carta de presentación",
          "Entrega en 3-4 días", "Optimización de LinkedIn", "Obtén tu currículum en 3 plantillas diferentes",
          "E-Book de LinkedIn y Prompts de ChatGPT",
        ], href: "/checkout?plan=intermedio_15-20" // MODIFIED: Added href
      },
      {
        title: "Premium", price: "$70", features: [
          "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Carta de presentación",
          "Entrega en 3-4 días", "Optimización de LinkedIn", "Obtén tu currículum en 3 plantillas diferentes",
          "E-Book de LinkedIn y Prompts de ChatGPT",
        ], href: "/checkout?plan=premium_15-20" // MODIFIED: Added href
      },
      {
        title: "Platinum", price: "$80", features: [
          "Currículum ATS Amigable", "Garantía de puntuación ATS del 75%", "Carta de presentación",
          "Entrega en 3-4 días", "Optimización de LinkedIn", "Obtén tu currículum en 3 plantillas diferentes",
          "E-Book de LinkedIn y Prompts de ChatGPT",
        ], href: "/checkout?plan=platinum_15-20" // MODIFIED: Added href
      },
    ],
    CXO: [
      {
        title: "Básico", price: "$80", features: [
          "Redacción de currículum a nivel ejecutivo", "Soporte de edición por 6 meses",
          "Redacción de carta de presentación optimizada para el trabajo", "Optimización de perfil de LinkedIn",
          "E-Book de LinkedIn y Prompts de ChatGPT",
        ], href: "/checkout?plan=basico_cxo" // MODIFIED: Added href
      },
      {
        title: "Premium", price: "$120", isPopular: true, features: [ // Añadido isPopular del modelo
          "Redacción de currículum a nivel ejecutivo", "Soporte de edición por 6 meses",
          "Redacción de carta de presentación optimizada para el trabajo", "Optimización de perfil de LinkedIn",
          "E-Book de LinkedIn y Prompts de ChatGPT",
          "El 80% de nuestros clientes eligen Premium por su gran valor", // Característica del modelo
        ], href: "/checkout?plan=premium_cxo" // MODIFIED: Added href
      },
      {
        title: "Intermedio", price: "$100", features: [
          "Redacción de currículum a nivel ejecutivo", "Soporte de edición por 6 meses",
          "Redacción de carta de presentación optimizada para el trabajo", "Optimización de perfil de LinkedIn",
          "E-Book de LinkedIn y Prompts de ChatGPT",
        ], href: "/checkout?plan=intermedio_cxo" // MODIFIED: Added href
      },
    ],
  };

  const gridColsClass =
    activeTab === "CXO"
      ? "grid-cols-1 md:grid-cols-3 justify-items-center" // Clase del modelo para CXO
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"; // Clase del modelo para otros

  const renderPricingCards = () => (
    <>
      {/* Container for buttons and descriptive text (del modelo) */}
      <div className="mb-10 text-center flex flex-col items-center space-y-4">
        {/* --- TÍTULOS (del modelo) --- */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Realiza tu Pedido
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-center mb-10">
          Haz clic abajo para seleccionar tu nivel de experiencia.
        </p>
        {/* --- FIN TÍTULOS --- */}

        {/* Buttons container (MANTENIENDO DISEÑO ORIGINAL DE BOTONES DEL MODELO) */}
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-10"> {/* Ajustado max-w y gap del modelo */}
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
              // Estilos de los botones de la página modelo
              className={`px-4 py-2 h-12 rounded-md transition duration-300 ease-in-out cursor-pointer font-semibold text-sm flex items-center justify-center text-center w-auto flex-grow sm:flex-grow-0
                        ${activeTab === tab.key
                  ? `${buttonActiveBg} ${buttonActiveText} shadow-md`
                  : `${buttonInactiveBg} ${buttonInactiveText} ${buttonHoverBg} ${buttonHoverText} hover:shadow-lg`
                }
              `} // Ajustado flex-grow del modelo
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Descriptive text showing the selected experience level (del modelo) */}
        {chosenExperience && (
          <p className={`text-sm mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}> {/* Color ajustado del modelo */}
            {chosenExperience}
          </p>
        )}
      </div>

      {/* Pricing cards container with animation (del modelo) */}
      <div
        key={activeTab} // Key para re-animar en cambio de tab (del modelo)
        className={`grid ${gridColsClass} gap-8 transition-all duration-700 transform ${showCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        {pricingCardsData[activeTab].map((card, index) => {
          const itemsToStrike = strikeItems[activeTab]?.[card.price] || [];

          return (
            <div
              key={index}
              className={`relative p-6 border rounded-lg flex flex-col hover:shadow-xl transition-shadow duration-300 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-black'}`} // Estilo tarjeta del modelo
            >
              {/* Etiqueta "Más Popular" (usando card.isPopular del modelo) */}
              {card.isPopular && ( // Condición ajustada del modelo
                <div className="absolute top-3 right-[-30px] transform rotate-45 bg-red-600 text-white text-xs px-3 py-1 z-10 shadow">
                  Más Popular
                </div>
              )}

              <h4 className="text-xl font-semibold mb-2 text-center">{card.title}</h4>
              <p className="text-3xl font-bold text-purple-600 mb-4 text-center">{card.price}</p>
              <ul className="space-y-2 mb-4 flex-1 text-left"> {/* text-left del modelo */}
                {card.features.map((feature, i) => {
                  const isStriked = itemsToStrike.includes(feature);
                  // Evitar tachar la característica "Más Popular" si está en la lista (lógica del modelo)
                  const isPopularFeature = feature === "El 80% de nuestros clientes eligen Premium por su gran valor";
                  return (
                    <li key={i} className="flex items-center">
                      {/* --- ICONO CONDICIONAL (del modelo) --- */}
                      {isStriked && !isPopularFeature ? (
                        <CancelIcon // Icono X del modelo
                          className="text-red-500 mr-2 flex-shrink-0"
                          fontSize="small"
                        />
                      ) : (
                        <CheckCircleIcon
                          className="text-green-500 mr-2 flex-shrink-0" // Icono check del modelo
                          fontSize="small"
                        />
                      )}
                      {/* --- FIN ICONO CONDICIONAL --- */}

                      {/* --- TEXTO CONDICIONAL (TACHADO Y COLOR DARK MODE del modelo) --- */}
                      <span className={`
                            ${isStriked && !isPopularFeature
                          ? `line-through ${darkMode ? 'text-gray-400' : 'text-gray-500'}` // Color gris más claro en dark mode para tachados (del modelo)
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
              {/* Botón Ordenar ahora con Link (del modelo) */}
              <Link href={card.href || "#"} passHref>
                <button className="bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer w-full mt-auto"> {/* hover:bg-purple-700 como en modelo */}
                  Ordenar ahora
                </button>
              </Link>
              <p className={`text-sm text-center mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}> {/* Color nota satisfacción (del modelo) */}
                95% de satisfacción del cliente
              </p>
            </div>
          );
        })}
      </div>
    </>
  );

  // Define los patrones de fondo basados en el modo oscuro/claro (del modelo)
  const backgroundPatternLight = "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";
  const backgroundPatternDark = "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)";

  // Define los colores base de fondo para alternar (del modelo)
  const baseBackground = darkMode ? "bg-black" : "bg-white"; // Usar base para esta sección según modelo (index 1 -> par)
  const textColor = darkMode ? "text-white" : "text-gray-800";

  const getSectionStyles = () => { // Helper del modelo adaptado
    const pattern = darkMode ? backgroundPatternDark : backgroundPatternLight;
    return {
      className: `relative py-16 ${baseBackground} ${textColor}`, // Usando baseBackground
      style: {
        backgroundImage: pattern,
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      },
    };
  };

  return (
    // Aplicando el estilo de sección del modelo
    <section id="realiza-pedido" {...getSectionStyles()}>
      <div className="container mx-auto px-6 max-w-6xl relative z-10"> {/* max-w-6xl del modelo */}
        {renderPricingCards()} {/* Renderiza títulos, botones y tarjetas */}
      </div>
    </section>
  );
}


/* --------------------------------------
 * Sección 6: "¿Cómo funcionan nuestros servicios?"
 * -------------------------------------- */
function HowServicesWorkSection() {
  const { darkMode } = useTheme();
  const backgroundPattern = darkMode
    ? "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)"
    : "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";
  const baseBackground = darkMode ? "bg-gray-900" : "bg-gray-100"; // Corresponds to alternate background in model pattern
  const textColor = darkMode ? "text-white" : "text-gray-800";

  return (
    <section
      className={`py-16 ${baseBackground} ${textColor} text-center`}
      style={{
        backgroundImage: backgroundPattern,
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Cómo funcionan nuestros servicios de redacción de currículums?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-5xl mx-auto items-start justify-items-center">
          {/* Paso 1 */}
          <div className="flex flex-col items-center max-w-xs">
            <UploadFileIcon style={{ fontSize: "3rem" }} />
            <p className="text-xl font-bold mt-2">Paso 1 - Sube tus detalles</p>
            <p className="text-base mt-2">
              Sube tu currículum en nuestro formulario y agenda una consulta.
            </p>
          </div>
          {/* Paso 2 */}
          <div className="flex flex-col items-center max-w-xs">
            <SearchIcon style={{ fontSize: "3rem" }} />
            <p className="text-xl font-bold mt-2">
              Paso 2 - Analizamos tus necesidades
            </p>
            <p className="text-base mt-2">
              Nuestro experto te contacta para entender tus objetivos y área de
              trabajo.
            </p>
          </div>
          {/* Paso 3 */}
          <div className="flex flex-col items-center max-w-xs">
            <WatchLaterIcon style={{ fontSize: "3rem" }} />
            <p className="text-xl font-bold mt-2">
              Paso 3 - Empezamos a trabajar
            </p>
            <p className="text-base mt-2">
              Nuestro equipo de redactores inicia la elaboración de tu CV
              optimizado.
            </p>
          </div>
          {/* Paso 4 */}
          <div className="flex flex-col items-center max-w-xs">
            <DraftsIcon style={{ fontSize: "3rem" }} />
            <p className="text-xl font-bold mt-2">Paso 4 - Primer borrador</p>
            <p className="text-base mt-2">
              En 3-5 días te enviamos el borrador. Podrás dar tu
              retroalimentación.
            </p>
          </div>
          {/* Paso 5 */}
          <div className="flex flex-col items-center max-w-xs">
            <CheckCircleIcon style={{ fontSize: "3rem" }} />
            <p className="text-xl font-bold mt-2">Paso 5 - Entrega final</p>
            <p className="text-base mt-2">
              Ajustamos lo necesario y te mandamos el CV final listo para
              postularte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------
 * Sección 7: "¿Por qué elegir nuestros servicios?"
 * (Acordeones con un solo ítem abierto a la vez)
 * -------------------------------------- */
function WhyChooseServicesSection() {
  const { darkMode } = useTheme();
  const backgroundPattern = darkMode
    ? "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)"
    : "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";
  const baseBackground = darkMode ? "bg-black" : "bg-white"; // Corresponds to base background in model pattern
  const textColor = darkMode ? "text-white" : "text-gray-800";

  // Un solo ítem abierto a la vez en esta sección
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: "Servicios de Redacción de Currículums Optimizados y Compatibles con ATS",
      content:
        "Formateamos el currículum con palabras clave y secciones efectivas para aprobar escáneres ATS. Maximiza tus probabilidades de entrevista.",
    },
    {
      title: "75% de Puntuación ATS Garantizada",
      content:
        "Validamos con Jobscan y aseguramos ese puntaje mínimo. Nadie más te garantiza esto.",
    },
    {
      title: "Servicio al Cliente como Prioridad",
      content:
        "Con 95% de satisfacción, estamos comprometidos con tu éxito. Brindamos atención personalizada y revisiones gratuitas por una semana.",
    },
    {
      title: "Resultados Comprobados para Nuestros Clientes",
      content:
        "Hemos ayudado a candidatos a entrar en Google, Amazon, IBM y más. Ellos avalan nuestro trabajo.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={`py-16 ${baseBackground} ${textColor}`}
      style={{
        backgroundImage: backgroundPattern,
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6">
        {/* MODIFICADO: Añadido flex y items-center para centrar verticalmente el contenido de la derecha */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Imagen (más grande, 400x400) */}
          <div className="flex justify-center md:col-span-1">
            {/* MODIFIED: Removed Link wrapper, img is not clickable. Ensured src */}
            <img
              src="https://resumeguru.in/wp-content/uploads/2024/02/Rohit-Goyal-1-1024x787.jpg"
              alt="Resume Expert"
              className="rounded shadow-md w-[400px] h-[400px] object-cover" // Removed cursor-pointer
            />
          </div>

          {/* Contenido */}
          {/* MODIFICADO: Añadido flex flex-col justify-center para centrar el contenido */}
          <div className="md:col-span-2 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              ¿Por qué elegir nuestros servicios de redacción de currículums?
            </h2>
            <div className="space-y-2">
              {items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    className={`
                      rounded-md p-3 cursor-pointer
                      ${darkMode ? "bg-gray-800" : "bg-gray-50"}
                      hover:bg-purple-600/20
                      hover:shadow-[0_0_10px_rgba(128,0,128,0.2)]
                      ${darkMode ? "hover:text-white" : "hover:text-gray-900"}
                      transition-all duration-700
                    `}
                    onClick={() => handleToggle(i)}
                  >
                    <div className="flex items-center justify-between">
                      <h3
                        className={`
                          text-base font-semibold
                          ${darkMode ? "text-gray-100" : "text-gray-900"}
                        `}
                      >
                        {item.title}
                      </h3>
                      <span className="text-purple-600 font-bold">
                        {isOpen ? "-" : "+"}
                      </span>
                    </div>
                    <div
                      className={`
                        overflow-hidden transition-all duration-700 ease-in-out
                        ${isOpen ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
                        }
                      `}
                    >
                      <p
                        className={`
                          text-base
                          ${darkMode ? "text-gray-100" : "text-gray-800"}
                        `}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------
 * Sección 8: "Lee casos de estudio reales..."
 * -------------------------------------- */
function CaseStudiesSection() {
  const { darkMode } = useTheme();
  const backgroundPattern = darkMode
    ? "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)"
    : "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";
  // MODIFICADO: Se asegura que el fondo de esta sección sea el gris claro en modo light y gris oscuro en dark
  const baseBackground = darkMode ? "bg-gray-900" : "bg-gray-100";
  const textColor = darkMode ? "text-white" : "text-gray-800";

  return (
    <section
      className={`py-16 ${baseBackground} ${textColor}`}
      style={{
        backgroundImage: backgroundPattern,
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Col izquierda */}
          {/* MODIFICADO: Textos centrados y botón centrado */}
          <div className="text-center md:text-left"> {/* Mantenemos text-left en desktop por si acaso, pero centramos contenido interno */}
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                Lee casos de estudio reales de cómo transformamos CVs para crear
                historias de éxito.
              </h2>
              <p className="text-base mb-4 text-center">
                Hemos manejado metódicamente incluso las historias de carrera más
                desafiantes. Descubre cómo ayudamos a nuestros clientes revisando
                algunos de nuestros casos reales.
              </p>
              <div className="flex mt-2 justify-center w-full"> {/* Botón centrado */}
                <Link href="/casos-de-estudio"> {/* MODIFIED: Added href */}
                  <button className="bg-purple-600 text-white px-10 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
                    Ver Casos de Estudio
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Col derecha (más grande, 400x400) */}
          <div className="flex justify-center">
            {/* MODIFIED: Removed Link wrapper, img is not clickable. Ensured src */}
            <img
              src="https://resumeguru.in/wp-content/uploads/2024/05/istockphoto-1354842602-612x612-1.jpg"
              alt="Case Studies"
              className="rounded shadow-md w-[400px] h-[400px] object-cover" // Removed cursor-pointer
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------
 * Sección 9: FAQ (un solo ítem abierto a la vez en toda la sección)
 * -------------------------------------- */
function FaqSection() {
  const { darkMode } = useTheme();
  const backgroundPattern = darkMode
    ? "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)"
    : "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";
  // MODIFICADO: Se asegura que el fondo de la sección FAQ sea blanco en modo light y negro en dark
  const baseBackground = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-gray-800";

  // Un solo ítem abierto a la vez en TODO el FAQ
  // Guardaremos [catIndex, itemIndex] o null si ninguno está abierto.
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (catIdx, itemIdx) => {
    if (openIndex && openIndex[0] === catIdx && openIndex[1] === itemIdx) {
      setOpenIndex(null); // Cerrar si se da clic en el mismo
    } else {
      setOpenIndex([catIdx, itemIdx]);
    }
  };

  const faqData = [
    {
      category: "Preguntas sobre el Servicio",
      items: [
        {
          question:
            "¿Crearás un currículum desde cero o proporcionarás una plantilla?",
          answer:
            "Creamos un currículum completamente nuevo para cada cliente, asegurándonos de que sea compatible con ATS y se adapte al puesto al que postulas.",
        },
        {
          question: "¿Es una suscripción o un servicio de pago único?",
          answer:
            "Nuestros servicios se cobran como un pago único. Además, obtienes revisiones ilimitadas durante una semana tras el primer borrador.",
        },
        {
          question: "¿Cuál es el tiempo de entrega?",
          answer:
            "Normalmente, en 3-5 días hábiles tendrás tu currículum listo, siempre que nos facilites toda la información necesaria.",
        },
        {
          question: "¿Qué incluye la optimización de LinkedIn?",
          answer:
            "Secciones de foto, banner, titular con palabras clave, resumen y experiencia actualizada, además de habilidades relevantes.",
        },
        {
          question: "¿Qué métodos de pago aceptan?",
          answer:
            "UPI (Google Pay, PhonePe, Paytm UPI), tarjetas de débito/crédito y banca en línea de los principales bancos.",
        },
        {
          question: "¿Crean currículums en formato Europass?",
          answer:
            "Sí, podemos adaptarnos a estándares internacionales como EAU, EE.UU., Canadá y Europass.",
        },
      ],
    },
    {
      category: "Opciones de Personalización y Flexibilidad",
      items: [
        {
          question: "¿Puedo elegir la plantilla del currículum?",
          answer:
            "¡Por supuesto! Tenemos un catálogo de plantillas amigables para ATS y te enviamos la que elijas.",
        },
        {
          question: "¿Qué es el ATS?",
          answer:
            "Applicant Tracking Systems filtran currículums. Nuestro formato y palabras clave ayudan a que tu CV sea compatible.",
        },
        {
          question: "¿Qué puntuación ATS garantizan?",
          answer:
            "Prometemos un mínimo del 75% en Jobscan, un escáner ATS de renombre.",
        },
        {
          question:
            "¿Cómo adapto el CV a cada oferta si solo me dan un currículum?",
          answer:
            "Te proporcionamos prompts de ChatGPT para modificar y personalizar tu currículum ante cada vacante.",
        },
      ],
    },
    {
      category: "Soporte Posterior a la Entrega",
      items: [
        {
          question: "¿Qué pasa si no estoy satisfecho?",
          answer:
            "Nuestro equipo hará lo necesario para ajustar tu currículum hasta que estés satisfecho. Solo necesitamos tu retroalimentación constructiva.",
        },
        {
          question: "¿Cuántas revisiones tendré?",
          answer:
            "Te ofrecemos revisiones ilimitadas por una semana tras recibir el primer borrador.",
        },
        {
          question: "¿Qué pasa si necesito cambios después de unas semanas?",
          answer:
            "Te entregamos un archivo Word para que puedas editarlo. O contáctanos para actualizaciones profesionales a bajo costo.",
        },
        {
          question: "¿En qué formatos me entregan el currículum?",
          answer: "En Word (editable) y PDF (listo para enviar).",
        },
        {
          question: "¿Garantizan que consiga un empleo?",
          answer:
            "No podemos prometer un empleo, pero sí un CV optimizado con un 75% ATS mínimo, incrementando tus probabilidades de ser visto por reclutadores.",
        },
      ],
    },
  ];
  // Estilos de sección del modelo aplicados
  const backgroundPatternLight = "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";
  const backgroundPatternDark = "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)";

  const getSectionStyles = () => {
    const pattern = darkMode ? backgroundPatternDark : backgroundPatternLight;
    // Se usa el baseBackground definido al inicio de la función FaqSection
    return {
      className: `relative py-16 ${baseBackground} ${textColor}`,
      style: {
        backgroundImage: pattern,
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      },
    };
  };


  return (
    <section id="faq" {...getSectionStyles()}> {/* Aplicando estilos del modelo */}
      <div className="container mx-auto px-6 relative z-10 max-w-4xl"> {/* max-w-4xl del modelo */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10"> {/* Estilo título modelo */}
          Preguntas Frecuentes
        </h2>

        {faqData.map((cat, catIndex) => (
          <div key={catIndex} className="mb-8">
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{cat.category}</h3> {/* Estilo categoría modelo */}
            <div className="space-y-2">
              {cat.items.map((faq, i) => {
                const isOpen =
                  openIndex &&
                  openIndex[0] === catIndex &&
                  openIndex[1] === i;
                return (
                  <div
                    key={i}
                    className={`
                      rounded-md p-3 cursor-pointer
                       ${darkMode ? "bg-gray-800" : "bg-gray-50"}
                      hover:bg-purple-600/20
                      hover:shadow-[0_0_10px_rgba(128,0,128,0.2)]
                      ${darkMode ? "hover:text-white" : "hover:text-gray-900"}
                       transition-all duration-700
                    `} // Estilos item acordeón modelo
                    onClick={() => toggle(catIndex, i)}
                  >
                    <div className="flex items-center justify-between">
                      <h3
                        className={`
                          text-base font-semibold
                          ${darkMode ? "text-gray-100" : "text-gray-900"}
                         `} // Estilo pregunta modelo
                      >
                        {faq.question}
                      </h3>
                      <span className="text-purple-600 font-bold transform transition-transform duration-300"> {/* Icono +/- modelo */}
                        {isOpen ? "-" : "+"}
                      </span>
                    </div>
                    <div
                      className={`
                        overflow-hidden transition-all duration-700 ease-in-out
                        ${isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                        }
                      `} // Animación y display contenido modelo
                    >
                      <p
                        className={`
                          text-base
                          ${darkMode ? "text-gray-100" : "text-gray-700"}
                        `} // Estilo respuesta modelo
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


/* --------------------------------------
 * Página principal: Home
 * -------------------------------------- */
export default function Home() {
  const { darkMode } = useTheme();
  // Necesario para el helper getSectionStyles

  // useEffect para asegurar renderizado del lado cliente consistente para el tema (del modelo)
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Evita mismatch de hidratación (del modelo)
  }

  // Define los patrones de fondo basados en el modo oscuro/claro (del modelo)
  const backgroundPatternLight = "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";
  const backgroundPatternDark = "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)";

  // Define los colores base de fondo para alternar (del modelo)
  const baseBackgroundLight = "bg-white";
  const baseBackgroundDark = "bg-black";
  const alternateBackgroundLight = "bg-gray-100";
  const alternateBackgroundDark = "bg-gray-900";

  // Helper para obtener estilos de sección alternados (del modelo)
  // ESTE HELPER NO SE USARÁ DIRECTAMENTE EN LAS SECCIONES MODIFICADAS, YA QUE CADA UNA GESTIONA SU PROPIO FONDO.
  // SE MANTIENE POR SI OTRAS SECCIONES LO REQUIEREN O PARA FUTURAS REFERENCIAS.
  const getSectionStyles = (index) => {
    const isEven = index % 2 === 0;
    const currentBaseBg = darkMode
      ? (isEven ? baseBackgroundDark : alternateBackgroundDark)
      : (isEven ? baseBackgroundLight : alternateBackgroundLight);
    const textColor = darkMode ? "text-white" : "text-gray-800";
    const pattern = darkMode ? backgroundPatternDark : backgroundPatternLight;

    return {
      className: `relative py-16 ${currentBaseBg} ${textColor}`,
      style: {
        backgroundImage: pattern,
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      },
    };
  };


  return (
    <>
      <Header />
      {/* Apply getSectionStyles to all direct child sections of main */}
      <main className="scroll-smooth"> {/* scroll-smooth del modelo */}
        {/* 1) Sección Hero */}
        {/* Hero75Section already has its own specific styling from the model, so we don't apply getSectionStyles here */}
        <Hero75Section />

        {/* 2) Sección "Obtenemos resultados..." */}
        {/* ATSStatsSection already has its own specific styling from the model */}
        <ATSStatsSection />

        {/* 3) Sección "EXCELLENT" */}
        {/* ExcellentSection now uses the model's TestimonialCarousel and styling */}
        <ExcellentSection />

        {/* 4) Sección "Hacemos tu CV realmente amigable para ATS" */}
        {/* CvServicesSection already has its own specific styling from the model */}
        <CvServicesSection />

        {/* 5) Sección "Realiza tu Pedido" */}
        {/* OrderSection is now styled like the model's "Realiza tu Pedido" */}
        <OrderSection />

        {/* 6) Sección "¿Cómo funcionan nuestros servicios..." */}
        {/* HowServicesWorkSection already has its own specific styling from the model */}
        <HowServicesWorkSection />

        {/* 7) Sección "¿Por qué elegirnos?" */}
        {/* WhyChooseServicesSection already has its own specific styling from the model */}
        <WhyChooseServicesSection />

        {/* 8) Sección "Lee casos de estudio reales..." */}
        {/* CaseStudiesSection is now explicitly styled to be different from FaqSection */}
        <CaseStudiesSection />

        {/* 9) Sección FAQ */}
        {/* FaqSection is now explicitly styled with a white/black background */}
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
