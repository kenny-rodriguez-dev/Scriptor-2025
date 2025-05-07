"use client";

import React, { useState, useRef, useEffect } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from "next/link";
import { useTheme } from "@/app/theme-provider";

/* ---------------------------------------------------------------------
 * Utilidad para crear el fondo punteado (dotted pattern) acorde al tema
 * ------------------------------------------------------------------ */
const dottedPattern = (dark) =>
  dark
    ? "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)"
    : "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";

/* ---------------------------------------------------------------------
 * Texto reutilizable para todos los desplegables
 * ------------------------------------------------------------------ */
const BENEFITS_TEXT = `Por qué funciona esta plantilla : Limpia y bien estructurada, con encabezados de sección y viñetas claros. Compatible con ATS gracias a su formato simple, elementos de diseño minimalistas y fuentes estándar.
Campos adecuados : RRHH, marketing, gestión empresarial, consultoría.
Nivel de experiencia : Nivel inicial a nivel medio (0-5 años).
Países: Aplicación universal (EE. UU., Canadá, Reino Unido, India, Australia, Europa).`;

/* ---------------------------------------------------------------------
 * Accordion (mismo diseño que la sección FAQ del modelo)
 * ------------------------------------------------------------------ */
const Accordion = () => {
  const { darkMode } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`
        rounded-md p-3 cursor-pointer
        ${darkMode ? "bg-gray-800" : "bg-gray-50"}
        hover:bg-purple-600/20 hover:shadow-[0_0_10px_rgba(128,0,128,0.2)]
        ${darkMode ? "hover:text-white" : "hover:text-gray-900"}
        transition-all duration-700
      `}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between">
        <h3
          className={`text-base font-semibold ${
            darkMode ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Beneficios de esta plantilla
        </h3>
        <span className="text-purple-600 font-bold">{open ? "-" : "+"}</span>
      </div>
      <div
        className={`
          overflow-hidden transition-all duration-700 ease-in-out
          ${open ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"}
        `}
      >
        <p
          className={`text-base whitespace-pre-wrap ${
            darkMode ? "text-gray-100" : "text-gray-800"
          }`}
        >
          {BENEFITS_TEXT}
        </p>
      </div>
    </div>
  );
};

/* ---------------------------------------------------------------------
 * Botón morado (mismo diseño que los de la sección Hero del modelo)
 * ------------------------------------------------------------------ */
const ActionButton = () => (
  <a
    href="#"
    className="flex items-center justify-center mx-auto mt-4 bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer"
  >
    <CheckCircleIcon className="mr-2" fontSize="small" />
    Obtenga su currículum en esta plantilla
  </a>
);

/* ---------------------------------------------------------------------
 * Slider de imágenes (mismo diseño y funcionalidad que CvSliderLeft)
 * ------------------------------------------------------------------ */
const ResumeSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  /* ---------------- Medir ancho del contenedor ------------------- */
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

  /* ------------------------ Autoplay ---------------------------- */
  const autoPlayRef = useRef(null);
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
  };
  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  /* ------------------ Navegación manual ------------------------- */
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setOffsetX(0);
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setOffsetX(0);
  };

  /* -------------------- Drag (mouse / touch) -------------------- */
  const handleMouseDown = (e) => {
    if (images.length === 1) return;
    setIsDragging(true);
    setStartX(e.clientX);
    stopAutoPlay();
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setOffsetX(e.clientX - startX);
  };
  const handleMouseUp = () => {
    if (!isDragging) return;
    finishDrag();
    startAutoPlay();
  };
  const handleMouseLeave = () => handleMouseUp();

  const handleTouchStart = (e) => {
    if (images.length === 1) return;
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    stopAutoPlay();
  };
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setOffsetX(e.touches[0].clientX - startX);
  };
  const handleTouchEnd = () => {
    if (!isDragging) return;
    finishDrag();
    startAutoPlay();
  };

  const finishDrag = () => {
    const threshold = containerWidth / 3;
    if (offsetX > threshold) prevSlide();
    else if (offsetX < -threshold) nextSlide();
    else setOffsetX(0);
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
        {/* Marco con borde */}
        <div
          className="border-2 border-black dark:border-white"
          style={{
            margin: "auto",
            overflow: "hidden",
            cursor:
              images.length > 1
                ? isDragging
                  ? "grabbing"
                  : "grab"
                : "default",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: isDragging ? "none" : "transform 0.5s ease",
              width: `${images.length * containerWidth}px`,
            }}
          >
            {images.map((src, idx) => (
              <div key={idx} style={{ width: containerWidth, height: "auto" }}>
                <Link href="#">
                  <img
                    src={src}
                    alt={`CV sample ${idx}`}
                    style={{ width: "100%", height: "auto" }}
                    onDragStart={(e) => e.preventDefault()}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {images.length > 1 && (
          <>
            {/* Flecha izquierda */}
            <button
              onClick={prevSlide}
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
            {/* Flecha derecha */}
            <button
              onClick={nextSlide}
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
          </>
        )}
      </div>

      {/* Puntos de navegación */}
      {images.length > 1 && (
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setOffsetX(0);
              }}
              className={`w-3 h-3 rounded-full mx-1 ${
                currentIndex === index
                  ? "bg-blue-500"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

/* ---------------------------------------------------------------------
 * Tarjeta completa que agrupa Slider + Accordion + Botón
 * ------------------------------------------------------------------ */
const ExampleCard = ({ title, images }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-center break-words">{title}</h3>
    <ResumeSlider images={images} />
    <Accordion />
    <ActionButton />
  </div>
);

/* =====================================================================
 * Página principal
 * =================================================================== */
export default function EjemplosCurriculumPage() {
  const { darkMode } = useTheme();

  /* ----------------------------- Smooth scroll ------------------- */
  useEffect(() => {
    // Activamos desplazamiento suave para toda la página
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  /* ----------------------------- Datos ---------------------------- */
  const buildArray = (start, end, images) =>
    Array.from({ length: end - start + 1 }, (_, idx) => ({
      title: `Ejemplo de currículum ${start + idx}`,
      images,
    }));

  const initialExamples = buildArray(1, 8, ["/curriculum.webp"]);
  const middleExamples = buildArray(9, 17, [
    "/curriculum.webp",
    "/curriculum2.webp",
  ]);
  const seniorExamples = buildArray(18, 36, [
    "/curriculum.webp",
    "/curriculum2.webp",
  ]);

  /* ----------------------- Estilos Hero -------------------------- */
  const heroBaseBackground = darkMode ? "bg-black" : "bg-white";
  const heroTextColor = darkMode ? "text-white" : "text-gray-800";

  /* Helpers para alternar colores */
  const baseBg = darkMode ? "bg-black" : "bg-white";
  const altBg = darkMode ? "bg-gray-900" : "bg-gray-100";
  const textColor = darkMode ? "text-white" : "text-gray-800";

  return (
    <>
      <Header />

      <main>
        {/* --------------------------- Hero -------------------------- */}
        <section
          className={`relative flex items-center justify-center min-h-screen ${heroBaseBackground} ${heroTextColor} pt-32`}
          style={{
            backgroundImage: dottedPattern(darkMode),
            backgroundSize: "40px 40px",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Ejemplos de Curriculum
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Descubre los CV de alta calidad y compatibles con ATS que hemos
              creado para nuestros clientes de diversos campos. Garantizamos una
              puntuación ATS mínima del 75 % en estas plantillas.
            </p>

            {/* Botones de navegación */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <a
                href="#nivel-inicial"
                className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer"
              >
                Nivel de entrada
              </a>
              <a
                href="#nivel-medio"
                className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer"
              >
                Nivel medio
              </a>
              <a
                href="#nivel-superior"
                className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer"
              >
                Nivel superior
              </a>
            </div>
          </div>
        </section>

        {/* ------------------ Nivel inicial --------------------------- */}
        <section
          id="nivel-inicial"
          className={`py-16 ${altBg} ${textColor}`}
          style={{
            backgroundImage: dottedPattern(darkMode),
            backgroundSize: "40px 40px",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              Ejemplos de currículum de nivel inicial
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {initialExamples.map((ex) => (
                <ExampleCard
                  key={ex.title}
                  title={ex.title}
                  images={ex.images}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ------------------ Nivel medio ----------------------------- */}
        <section
          id="nivel-medio"
          className={`py-16 ${baseBg} ${textColor}`}
          style={{
            backgroundImage: dottedPattern(darkMode),
            backgroundSize: "40px 40px",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              Ejemplos de currículum de nivel medio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {middleExamples.map((ex) => (
                <ExampleCard
                  key={ex.title}
                  title={ex.title}
                  images={ex.images}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ------------------ Nivel superior -------------------------- */}
        <section
          id="nivel-superior"
          className={`py-16 ${altBg} ${textColor}`}
          style={{
            backgroundImage: dottedPattern(darkMode),
            backgroundSize: "40px 40px",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              Ejemplos de currículum de nivel superior
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {seniorExamples.map((ex) => (
                <ExampleCard
                  key={ex.title}
                  title={ex.title}
                  images={ex.images}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
