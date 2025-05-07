"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/app/theme-provider";

// Material UI Icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SearchIcon from "@mui/icons-material/Search";
import WorkIcon from "@mui/icons-material/Work";
import DraftsIcon from "@mui/icons-material/Drafts";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

/* --------------------------------------------------------------------------------
   1) UTILIDADES para patrones de fondo y CountUp
---------------------------------------------------------------------------------- */
function dottedPattern(darkMode) {
  return darkMode
    ? "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)"
    : "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";
}

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

/* --------------------------------------------------------------------------------
   2) SECCIÓN HERO (Servicios de Redacción de Currículums Ejecutivos)
---------------------------------------------------------------------------------- */
function ExecutiveHeroSection() {
  const { darkMode } = useTheme();

  // Patrón punteado centrado:
  const backgroundPattern = dottedPattern(darkMode);
  const baseBackground = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-gray-800";

  return (
    <section
      className={`relative flex items-center justify-center min-h-screen ${baseBackground} ${textColor} pt-32`}
      style={{
        backgroundImage: backgroundPattern,
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Título principal */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Servicios de Redacción de Currículums Ejecutivos
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Exclusivamente para candidatos CXO y de alto nivel.
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Transforma tu trayectoria profesional con nuestros servicios
          personalizados, diseñados para líderes que aspiran a puestos de
          Dirección, CXO y posiciones ejecutivas de alto nivel.
        </p>

        {/* Botones con CheckCircleIcon */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
          <Link href="/pricing">
            <button className="flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
              <CheckCircleIcon color="success" className="mr-2" />
              Aproveche nuestros servicios
            </button>
          </Link>
          <Link href="/callback">
            <button className="flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
              <CheckCircleIcon color="success" className="mr-2" />
              Solicitar devolución de llamada
            </button>
          </Link>
        </div>

        {/* 3 textos (bullet points) en la misma fila para desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-4xl mx-auto">
          {/* 1er texto */}
          <div className="flex flex-col items-center md:flex-row md:justify-center">
            <CheckCircleIcon style={{ color: darkMode ? "#fff" : "#000" }} />
            <p className="text-sm mt-2 md:mt-0 md:ml-2 text-center md:text-left">
              Adaptado al puesto de trabajo
            </p>
          </div>
          {/* 2do texto */}
          <div className="flex flex-col items-center md:flex-row md:justify-center">
            <CheckCircleIcon style={{ color: darkMode ? "#fff" : "#000" }} />
            <p className="text-sm mt-2 md:mt-0 md:ml-2 text-center md:text-left">
              95% de tasa de satisfacción del cliente
            </p>
          </div>
          {/* 3er texto */}
          <div className="flex flex-col items-center md:flex-row md:justify-center">
            <CheckCircleIcon style={{ color: darkMode ? "#fff" : "#000" }} />
            <p className="text-sm mt-2 md:mt-0 md:ml-2 text-center md:text-left">
              Atención al cliente 1:1
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------------------
   3) SECCIÓN ATSStatsSection => "Obtenemos resultados..."
---------------------------------------------------------------------------------- */
function ATSStatsSection() {
  const { darkMode } = useTheme();

  const backgroundPattern = dottedPattern(darkMode);
  // Sección 2 => fondo opaco
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
              <CountUp end={75} duration={2} />
              %+
            </h3>
            <p className="mt-2">Puntaje ATS</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------------------
   4) SECCIÓN TESTIMONIOS => "EXCELLENT"
---------------------------------------------------------------------------------- */
function TestimonialCarousel({ testimonials }) {
  const { darkMode } = useTheme();
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  // Muestra 3 tarjetas por vista en pantallas grandes
  const [cardsPerView, setCardsPerView] = useState(3);

  // Duplicar el array de testimonios 3 veces para efecto "infinito"
  const items = [...testimonials, ...testimonials, ...testimonials];

  // Al montar, ajustamos el indice para iniciar en la parte central
  useEffect(() => {
    setCurrentIndex(testimonials.length);
  }, [testimonials.length]);

  // Mide el ancho del contenedor
  useEffect(() => {
    const measureWidth = () => {
      if (containerRef.current) {
        setCardsPerView(3);
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    measureWidth();
    window.addEventListener("resize", measureWidth);
    return () => window.removeEventListener("resize", measureWidth);
  }, []);

  // Auto-play
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
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  const cardWidth = containerWidth / cardsPerView;
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
    if (currentIndex < testimonials.length) {
      newIndex = currentIndex + testimonials.length;
    } else if (currentIndex >= testimonials.length * 2) {
      newIndex = currentIndex - testimonials.length;
    }
    setCurrentIndex(newIndex);
    setIsTransitioning(false);
  };

  // Manejo de arrastre (mouse + touch)
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
    }
    setOffsetX(0);
    setIsDragging(false);
  };

  const translateX = -(currentIndex * cardWidth) + offsetX;

  return (
    <div
      className="relative max-w-6xl mx-auto overflow-hidden group"
      ref={containerRef}
    >
      <div
        className="flex transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(${translateX}px)`,
          transitionProperty: isTransitioning ? "transform" : "none",
          width: `${totalItems * cardWidth}px`,
          cursor: isDragging ? "grabbing" : "grab",
        }}
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
            key={i}
            style={{ width: cardWidth }}
            className="p-4 bg-white flex-shrink-0 rounded shadow mx-2 my-2"
          >
            <div className="flex flex-col items-center mb-2">
              <Link href="#">
                <img
                  src="https://via.placeholder.com/80"
                  alt={test.name}
                  className="w-16 h-16 rounded-full object-cover mb-2"
                />
              </Link>
              <h4 className="font-bold text-sm text-black">{test.name}</h4>
              <span className="text-xs text-gray-500">{test.date}</span>
            </div>
            {/* Estrellas fijas (5) */}
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
            {/* Texto de la reseña */}
            <p className="mt-2 italic text-sm text-gray-600">“{test.text}”</p>
          </div>
        ))}
      </div>

      {/* Botón Anterior */}
      <button
        onClick={handlePrev}
        className="cursor-pointer absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-600 bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Botón Siguiente */}
      <button
        onClick={handleNext}
        className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-600 bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}

function ExecutiveTestimonialSection({ testimonials }) {
  const { darkMode } = useTheme();
  const backgroundPattern = dottedPattern(darkMode);
  // Sección 3 => fondo blanco/negro
  const baseBackground = darkMode ? "bg-black" : "bg-white";
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
        <h2 className="text-3xl md:text-4xl font-bold mb-10">EXCELLENT</h2>
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------------------
   5) SECCIÓN "¿Por qué elegir nuestros Servicios...?"
---------------------------------------------------------------------------------- */
function WhyChooseExecutiveSection() {
  const { darkMode } = useTheme();

  const backgroundPattern = dottedPattern(darkMode);
  // Sección 4 => fondo opaco
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Imagen a la izquierda (400x400) */}
          <div className="flex justify-center md:col-span-1">
            <Link href="#">
              <img
                src="/images/executive-resume.jpg"
                alt="Currículum Ejecutivo"
                className="rounded shadow-md w-[400px] h-[400px] object-cover cursor-pointer"
              />
            </Link>
          </div>

          {/* Contenido */}
          <div className="md:col-span-2">
            {/* 
              Agregamos text-center en móviles y text-left en pantallas más grandes
            */}
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
              ¿Por qué elegir nuestros Servicios de Redacción de Currículums
              Ejecutivos?
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-bold">
                  Currículums a medida para ejecutivos:
                </p>
                <p className="text-lg">
                  Elaborados para resaltar tu visión estratégica y logros en
                  liderazgo.
                </p>
              </div>
              <div>
                <p className="text-lg font-bold">Consulta uno a uno:</p>
                <p className="text-lg">
                  Sesiones personalizadas con escritores ejecutivos senior.
                </p>
              </div>
              <div>
                <p className="text-lg font-bold">
                  Optimizado con palabras clave y sectorial:
                </p>
                <p className="text-lg">
                  Asegurando máxima visibilidad en un mercado altamente
                  competitivo.
                </p>
              </div>
              <div>
                <p className="text-lg font-bold">
                  Soporte integral por 6 meses:
                </p>
                <p className="text-lg">
                  Nuestro compromiso con tu éxito es continuo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------------------
   6) SECCIÓN "¿Cómo funcionan nuestros Servicios de Redacción...?"
---------------------------------------------------------------------------------- */
function HowExecutiveServicesWorkSection() {
  const { darkMode } = useTheme();
  const backgroundPattern = dottedPattern(darkMode);
  // Sección 5 => fondo blanco/negro
  const baseBackground = darkMode ? "bg-black" : "bg-white";
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
          ¿Cómo funcionan nuestros Servicios de Redacción de Currículums
          Ejecutivos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-5xl mx-auto items-start justify-items-center">
          {/* Paso 1 */}
          <div className="flex flex-col items-center max-w-xs">
            <UploadFileIcon style={{ fontSize: "3rem" }} />
            <p className="text-xl font-bold mt-2">Paso 1 - Sube tus detalles</p>
            <p className="text-base mt-2">
              Sube tu currículum y reserva una consulta con nuestro equipo para
              analizar tus objetivos profesionales.
            </p>
          </div>
          {/* Paso 2 */}
          <div className="flex flex-col items-center max-w-xs">
            <SearchIcon style={{ fontSize: "3rem" }} />
            <p className="text-xl font-bold mt-2">
              Paso 2 - Analizamos tus necesidades
            </p>
            <p className="text-base mt-2">
              Realizamos una llamada 1:1 para hablar en detalle sobre tu
              experiencia y requerimientos específicos.
            </p>
          </div>
          {/* Paso 3 */}
          <div className="flex flex-col items-center max-w-xs">
            <WorkIcon style={{ fontSize: "3rem" }} />
            <p className="text-xl font-bold mt-2">
              Paso 3 - Comenzamos tu trabajo
            </p>
            <p className="text-base mt-2">
              Nuestro equipo inicia la creación de tu currículum ejecutivo,
              enfocado en tus logros de liderazgo.
            </p>
          </div>
          {/* Paso 4 */}
          <div className="flex flex-col items-center max-w-xs">
            <DraftsIcon style={{ fontSize: "3rem" }} />
            <p className="text-xl font-bold mt-2">
              Paso 4 - Enviamos el primer borrador
            </p>
            <p className="text-base mt-2">
              Recibe el primer borrador en 3-5 días. Podrás solicitar cambios y
              ajustes según tu retroalimentación.
            </p>
          </div>
          {/* Paso 5 */}
          <div className="flex flex-col items-center max-w-xs">
            <CheckCircleIcon style={{ fontSize: "3rem" }} />
            <p className="text-xl font-bold mt-2">Paso 5 - Entrega final</p>
            <p className="text-base mt-2">
              Tras incorporar tus comentarios finales, te entregamos la versión
              definitiva y lista para destacar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------------------
   7) SECCIÓN "Realiza tu Pedido"
---------------------------------------------------------------------------------- */
function OrderSectionExecutives() {
  const { darkMode } = useTheme();

  const backgroundPattern = dottedPattern(darkMode);
  // Sección 6 => fondo opaco
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
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Realiza tu pedido
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-center mb-10">
          Elige el plan que mejor se adapte a tus necesidades ejecutivas.
        </p>

        {/* Grid de 3 tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tarjeta Básico */}
          <div
            className="
              relative p-6 border border-gray-200 dark:border-gray-700 
              rounded-lg flex flex-col 
              bg-white dark:bg-gray-800
              hover:shadow-md transition 
              text-black dark:text-black
            "
          >
            <h4 className="text-xl font-semibold mb-2 text-center">Básico</h4>
            <p className="text-3xl font-bold text-purple-600 mb-4 text-center">
              $6,999
            </p>
            <ul className="space-y-2 mb-4 flex-1 text-left">
              <li className="flex items-center">
                <CheckCircleIcon
                  className="text-green-500 mr-2"
                  fontSize="small"
                />
                Redacción de Currículum Nivel CXO
              </li>
              <li className="flex items-center">
                <CheckCircleIcon
                  className="text-green-500 mr-2"
                  fontSize="small"
                />
                Consulta uno a uno con nuestro experto
              </li>
              <li className="flex items-center">
                <CheckCircleIcon
                  className="text-green-500 mr-2"
                  fontSize="small"
                />
                Soporte de edición por 6 meses
              </li>
              <li className="flex items-center">
                <CheckCircleIcon
                  className="text-green-500 mr-2"
                  fontSize="small"
                />
                Redacción de carta de presentación optimizada
              </li>
              <li className="flex items-center">
                <CheckCircleIcon
                  className="text-green-500 mr-2"
                  fontSize="small"
                />
                Optimización de perfil de LinkedIn
              </li>
              <li className="flex items-center">
                <CheckCircleIcon
                  className="text-green-500 mr-2"
                  fontSize="small"
                />
                E-Book de LinkedIn y ChatGPT
              </li>
            </ul>
            <button className="bg-purple-600 text-white py-2 rounded-md hover:bg-purple-500 hover:shadow-lg transition cursor-pointer w-full">
              Ordenar Ahora
            </button>
            <p className="text-sm text-center mt-2">
              95% de satisfacción del cliente
            </p>
          </div>

          {/* Tarjeta Premium */}
          <div
            className="
              relative p-6 border border-gray-200 dark:border-gray-700 
              rounded-lg flex flex-col 
              bg-white dark:bg-gray-800
              hover:shadow-md transition 
              text-black dark:text-black
            "
          >
            <h4 className="text-xl font-semibold mb-2 text-center">Premium</h4>
            <p className="text-3xl font-bold text-purple-600 mb-4 text-center">
              $8,999
            </p>
            <ul className="space-y-2 mb-4 flex-1 text-left">
              <li className="flex items-center">
                <CheckCircleIcon
                  className="text-green-500 mr-2"
                  fontSize="small"
                />
                Redacción de Currículum Nivel CXO/ejecutivo
              </li>
              <li className="flex items-center">
                <CheckCircleIcon
                  className="text-green-500 mr-2"
                  fontSize="small"
                />
                Consulta uno a uno con nuestro experto
              </li>
              <li className="flex items-center">
                <CheckCircleIcon
                  className="text-green-500 mr-2"
                  fontSize="small"
                />
                Soporte de edición por 6 meses
              </li>
              <li className="flex items-center">
                <CheckCircleIcon
                  className="text-green-500 mr-2"
                  fontSize="small"
                />
                Redacción de carta de presentación optimizada
              </li>
              <li className="flex items-center">
                <CheckCircleIcon
                  className="text-green-500 mr-2"
                  fontSize="small"
                />
                Optimización de perfil de LinkedIn
              </li>
              <li className="flex items-center">
                <CheckCircleIcon
                  className="text-green-500 mr-2"
                  fontSize="small"
                />
                E-Book de LinkedIn y ChatGPT
              </li>
            </ul>
            <button className="bg-purple-600 text-white py-2 rounded-md hover:bg-purple-500 hover:shadow-lg transition cursor-pointer w-full">
              Ordenar Ahora
            </button>
            <p className="text-sm text-center mt-2">
              95% de satisfacción del cliente
            </p>
          </div>

          {/* Tarjeta Intermedio */}
          <div
            className="
              relative p-6 border border-gray-200 dark:border-gray-700 
              rounded-lg flex flex-col 
              bg-white dark:bg-gray-800
              hover:shadow-md transition 
              text-black dark:text-black
            "
          >
            <h4 className="text-xl font-semibold mb-2 text-center">
              Intermedio
            </h4>
            <p className="text-3xl font-bold text-purple-600 mb-4 text-center">
              $7,999
            </p>
            <ul className="space-y-2 mb-4 flex-1 text-left">
              <li className="flex items-center">
                <CheckCircleIcon
                  className="text-green-500 mr-2"
                  fontSize="small"
                />
                Redacción de Currículum Nivel CXO/ejecutivo
              </li>
              <li className="flex items-center">
                <CheckCircleIcon
                  className="text-green-500 mr-2"
                  fontSize="small"
                />
                Consulta uno a uno con nuestro experto
              </li>
              <li className="flex items-center">
                <CheckCircleIcon
                  className="text-green-500 mr-2"
                  fontSize="small"
                />
                Soporte de edición por 6 meses
              </li>
              <li className="flex items-center">
                <CheckCircleIcon
                  className="text-green-500 mr-2"
                  fontSize="small"
                />
                Redacción de carta de presentación optimizada
              </li>
              <li className="flex items-center">
                <CheckCircleIcon
                  className="text-green-500 mr-2"
                  fontSize="small"
                />
                Optimización de perfil de LinkedIn
              </li>
              <li className="flex items-center">
                <CheckCircleIcon
                  className="text-green-500 mr-2"
                  fontSize="small"
                />
                E-Book de LinkedIn y ChatGPT
              </li>
            </ul>
            <button className="bg-purple-600 text-white py-2 rounded-md hover:bg-purple-500 hover:shadow-lg transition cursor-pointer w-full">
              Ordenar Ahora
            </button>
            <p className="text-sm text-center mt-2">
              95% de satisfacción del cliente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------------------
   8) SECCIÓN "Características de nuestros Servicios Premium..."
---------------------------------------------------------------------------------- */
function ExecutiveFeaturesSection() {
  const { darkMode } = useTheme();

  const backgroundPattern = dottedPattern(darkMode);
  // Sección 7 => fondo blanco/negro
  const baseBackground = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-gray-800";

  const features = [
    {
      title: "Consulta 1:1:",
      description:
        "Inicia con una discusión personalizada con nuestro escritor ejecutivo senior para comprender tu trayectoria y aspiraciones.",
    },
    {
      title: "Currículum Enfocado:",
      description:
        "Elaboramos un currículum dirigido a tu rol objetivo, alineando tus logros con las demandas específicas del sector.",
    },
    {
      title: "Optimización de Palabras Clave:",
      description:
        "Cada documento se ajusta meticulosamente con palabras clave estratégicas para superar sistemas ATS y captar la atención.",
    },
    {
      title: "Diseñado para Profesionales de Alto Nivel:",
      description:
        "Nuestra experiencia se centra en crear currículums impactantes para ejecutivos, asegurando que tu narrativa destaque.",
    },
    {
      title: "Soporte por 6 meses:",
      description:
        "Disfruta de soporte continuo y actualizaciones a medida que avanzas en tu carrera.",
    },
    {
      title: "Optimización de LinkedIn:",
      description:
        "Refinamos tu perfil de LinkedIn para que refleje tu marca ejecutiva de forma poderosa.",
    },
    {
      title: "Redacción de Cartas de Presentación:",
      description:
        "Complementa tu currículum con una carta persuasiva que articule tu visión y estilo de liderazgo.",
    },
    {
      title: "Biografía Ejecutiva:",
      description:
        "Desarrolla una biografía atractiva que encapsule tu trayectoria profesional y liderazgo.",
    },
  ];

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
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Características de nuestros Servicios Premium de Redacción de
          Currículums Ejecutivos
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {features.map((feature, index) => (
            <div key={index} className="space-y-2">
              <p className="text-lg font-bold">{feature.title}</p>
              <p className="text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------------------
   9) SECCIÓN "¿Por qué necesitas Servicios de Redacción de Currículums Ejecutivos?"
      -- AÑADIMOS JUSTIFICACIÓN DE TEXTO para corregir la alineación.
---------------------------------------------------------------------------------- */
function WhyYouNeedExecutiveSection() {
  const { darkMode } = useTheme();

  const backgroundPattern = dottedPattern(darkMode);
  // Sección 8 => fondo opaco
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Por qué necesitas Servicios de Redacción de Currículums Ejecutivos?
          </h2>
          <p className="text-lg mb-6 text-justify">
            En el competitivo mercado laboral actual, los profesionales
            ejecutivos necesitan algo más que un currículum estándar; requieren
            una narrativa poderosa que encapsule su liderazgo, visión y logros.
            Nuestros Servicios de Redacción de Currículums Ejecutivos están
            diseñados específicamente para ejecutivos de alto calibre que buscan
            puestos de dirección, CXO y otras posiciones de alto nivel.
          </p>
          <p className="text-lg mb-6 text-justify">
            Nuestro enfoque se basa en la excelencia y la personalización.
            Comenzamos con una consulta uno a uno, en la que nuestros redactores
            experimentados profundizan en tu historia profesional para entender
            tu propuesta de valor única. Esta conversación es crucial para
            elaborar un currículum que no solo refleje tus habilidades, sino que
            se alinee con las expectativas de los reclutadores ejecutivos.
          </p>
          <p className="text-lg text-justify">
            Incorporamos palabras clave y frases específicas del sector para
            optimizar tu currículum en sistemas ATS, dándote una ventaja
            competitiva en el entorno digital. Además, ofrecemos servicios
            complementarios como optimización de LinkedIn, redacción de cartas
            de presentación y biografías ejecutivas, todo con soporte continuo
            de seis meses para mantener tus materiales actualizados y
            competitivos.
          </p>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------------------
   10) SECCIÓN PREGUNTAS FRECUENTES
---------------------------------------------------------------------------------- */
function FaqSectionExecutives() {
  const { darkMode } = useTheme();

  const backgroundPattern = dottedPattern(darkMode);
  // Sección 9 => fondo blanco/negro
  const baseBackground = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-gray-800";

  // Un solo ítem abierto a la vez
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question:
        "¿Qué hace que su servicio de currículum ejecutivo sea diferente de otros servicios de redacción?",
      answer:
        "Nos enfocamos exclusivamente en ejecutivos de alto nivel. Con consultas personalizadas 1:1 y conocimientos estratégicos adaptados a roles de alto impacto, garantizamos que cada documento resalte tus logros y se alinee con las expectativas de la alta dirección.",
    },
    {
      question: "¿Cuánto tiempo dura el proceso completo?",
      answer:
        "Generalmente, el proceso completo —desde la realización del pedido hasta el borrador final— se completa en 3-5 días hábiles. Sin embargo, el plazo puede variar según tus necesidades y la complejidad de tu historia profesional.",
    },
    {
      question:
        "¿Qué pasa si no estoy completamente satisfecho con el primer borrador?",
      answer:
        "Ofrecemos una segunda consulta gratuita para abordar cualquier inquietud o solicitud de cambios, asegurándonos de que el currículum final cumpla con tus expectativas.",
    },
    {
      question:
        "¿Pueden ayudarme con otros materiales profesionales además de mi currículum?",
      answer:
        "Absolutamente. Nuestros paquetes incluyen optimización de perfil de LinkedIn, redacción de cartas de presentación y biografías ejecutivas para asegurar una marca profesional coherente e impactante.",
    },
    {
      question: "¿Cómo se garantiza la confidencialidad de mi información?",
      answer:
        "Tu privacidad es primordial. Todas las consultas y el intercambio de documentos se manejan con estricta confidencialidad, asegurando la seguridad de tu información personal y profesional.",
    },
    {
      question: "¿Qué sucede si mi industria es muy especializada o de nicho?",
      answer:
        "Nuestros redactores ejecutivos poseen un profundo conocimiento en diversas industrias. Nos tomamos el tiempo para comprender tu sector y adaptar tu currículum a las demandas específicas de tu mercado.",
    },
  ];

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
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Preguntas Frecuentes
        </h2>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`
                  mb-4 rounded-md p-3 cursor-pointer 
                  ${darkMode ? "bg-gray-800" : "bg-gray-50"} 
                  hover:bg-purple-600/20 
                  hover:shadow-[0_0_10px_rgba(128,0,128,0.2)]
                  ${darkMode ? "hover:text-white" : "hover:text-gray-900"}
                  transition-all duration-700
                `}
                onClick={() => toggle(index)}
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
                    ${
                      isOpen ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <p
                    className={`
                      text-base
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
  );
}

/* --------------------------------------------------------------------------------
   PÁGINA PRINCIPAL: EjecutivosPage
---------------------------------------------------------------------------------- */
export default function EjecutivosPage() {
  // Array de testimonios de ejemplo
  const testimonials = [
    {
      id: 1,
      name: "Abith K.",
      date: "2025-02-24",
      text: "Trabajo excelente y profesional. Se agradece el soporte de edición posterior al trabajo.",
    },
    {
      id: 2,
      name: "Raghupathruni Venkatesh",
      date: "2025-02-24",
      text: "Las plantillas son realmente geniales y la carta de presentación es muy útil para aplicaciones directas. El equipo es muy amable y se pueden solicitar modificaciones las veces que sea necesario. El tiempo de respuesta es muy corto; una vez proporcionados todos los datos necesarios, el currículum llega muy pronto.",
    },
    {
      id: 3,
      name: "Dhanlaxmi Prathmesh",
      date: "2025-02-24",
      text: "Gran servicio 😇",
    },
    {
      id: 4,
      name: "Raaj Sharma",
      date: "2025-02-22",
      text: "¡Increíble! Un servicio excelente. El Sr. Rohit fue mi punto de contacto y el equipo de redactores entregó exactamente lo que necesitaba con un impresionante puntaje ATS. Altamente recomendado.",
    },
    {
      id: 5,
      name: "Suhail Suhai",
      date: "2025-02-17",
      text: "Tu experiencia profesional realmente destaca: es evidente que has realizado contribuciones significativas en cada rol, y resaltas el impacto de manera efectiva. La presentación es limpia y fácil de seguir, lo que hace la lectura muy agradable. Me encanta que incluyas habilidades específicas y logros medibles, ya que eso definitivamente capta la atención de los reclutadores.",
    },
    {
      id: 6,
      name: "Abhay Aswal",
      date: "2025-02-17",
      text: "Servicio increíble; obtuve mi currículum el mismo día con un buen puntaje ATS.",
    },
  ];

  return (
    <>
      <Header />

      {/* Sección 1 - Hero */}
      <ExecutiveHeroSection />

      {/* Sección 2 - ATS Stats */}
      <ATSStatsSection />

      {/* Sección 3 - Testimonios */}
      <ExecutiveTestimonialSection testimonials={testimonials} />

      {/* Sección 4 - ¿Por qué elegir...? */}
      <WhyChooseExecutiveSection />

      {/* Sección 5 - ¿Cómo funcionan...? */}
      <HowExecutiveServicesWorkSection />

      {/* Sección 6 - Realiza tu pedido */}
      <OrderSectionExecutives />

      {/* Sección 7 - Características */}
      <ExecutiveFeaturesSection />

      {/* Sección 8 - ¿Por qué necesitas...? (con texto justificado) */}
      <WhyYouNeedExecutiveSection />

      {/* Sección 9 - Preguntas Frecuentes */}
      <FaqSectionExecutives />

      <Footer />
    </>
  );
}
