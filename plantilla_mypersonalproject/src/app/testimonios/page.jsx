"use client";
import React, { useState, useRef, useEffect } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image"; // Keep Image import if you might use it later

// Importa tu lógica de theme:
import { useTheme } from "@/app/theme-provider";

// --- Componente Slider (Ajustado para tamaño y espaciado) ---
const SliderDosImagenes = ({ slides, hideArrows = false }) => {
  const { darkMode } = useTheme();
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

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    setOffsetX(0);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setOffsetX(0);
  };

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length]);

  // Drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setOffsetX(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    finishDrag();
  };

  const handleMouseLeave = () => {
    if (!isDragging) return;
    finishDrag();
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    setOffsetX(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    finishDrag();
  };

  const finishDrag = () => {
    const threshold = containerWidth ? containerWidth / 4 : 100;
    if (offsetX > threshold) {
      prevSlide();
    } else if (offsetX < -threshold) {
      nextSlide();
    } else {
      setOffsetX(0);
    }
    setIsDragging(false);
  };

  const translateX = containerWidth ? -(currentIndex * containerWidth) + offsetX : -(currentIndex * 100) + offsetX;
  const transitionStyle = isDragging ? "none" : "transform 0.5s ease";
  const transformStyle = containerWidth ? `translateX(${translateX}px)` : `translateX(${translateX}%)`;

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={containerRef}
        className="relative group"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        <div
          className="flex"
          style={{
            transform: transformStyle,
            transition: transitionStyle,
            width: containerWidth ? `${slides.length * containerWidth}px` : `${slides.length * 100}%`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              // Mobile: stack vertically; Desktop: row with gap
              className="flex flex-col md:flex-row flex-shrink-0 items-center justify-center md:px-2 space-y-4 md:space-y-0 md:space-x-4" // Use space-y for mobile stacking, space-x for desktop gap
              style={{ width: containerWidth ? `${containerWidth}px` : '100%'}}
            >
              {slide.map((src, idx) => (
                 // Mobile: full width; Desktop: ~half width
                 <div key={idx} className="w-full md:w-[48%]">
                     <img
                      src={src || "#"}
                      alt={`Ejemplo de CV ${index}-${idx}`}
                      onDragStart={(e) => e.preventDefault()}
                      // Adjusted classes for styling and size
                      className="w-full h-auto object-contain border border-gray-300 dark:border-gray-700 rounded shadow-md"
                     />
                 </div>
              ))}
            </div>
          ))}
        </div>

        {/* Arrows */}
        {!hideArrows && (
          <>
             <button
                onClick={prevSlide}
                className="cursor-pointer absolute left-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-600 bg-opacity-50 rounded-full p-1 hover:bg-opacity-70 z-10"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                 </svg>
            </button>
            <button
                onClick={nextSlide}
                className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-600 bg-opacity-50 rounded-full p-1 hover:bg-opacity-70 z-10"
            >
                 <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
          </>
        )}
      </div>

       {/* Dots */}
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setOffsetX(0);
            }}
            className={`cursor-pointer w-3 h-3 rounded-full mx-1 focus:outline-none ${
              currentIndex === index
                ? "bg-purple-600"
                : "bg-gray-300 dark:bg-gray-700"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};


// --- Componente para las imágenes del slider (sección ATS) ---
const StaticCVImagesWithDots = () => {
  const slides = [
    [
      "https://resumeguru.in/wp-content/uploads/2024/02/Two-Column-Resume-for-Experienced-Candidates-Final-1.png",
      "https://resumeguru.in/wp-content/uploads/2024/02/Classy-Two-Column-Resume-Experienced-Final-1.png",
    ],
    [
      "https://resumeguru.in/wp-content/uploads/2025/01/2-1.png",
      "https://resumeguru.in/wp-content/uploads/2025/01/3-1.png",
    ],
     [
      "https://resumeguru.in/wp-content/uploads/2025/01/4-1.png",
      "https://resumeguru.in/wp-content/uploads/2025/01/5-1.png",
    ],
     [
      "https://resumeguru.in/wp-content/uploads/2025/01/6-1.png",
      "https://resumeguru.in/wp-content/uploads/2025/01/7-1.png",
     ],
      [
      "https://via.placeholder.com/400x565/cccccc/808080?text=CV+Sample+9",
      "https://via.placeholder.com/400x565/dddddd/808080?text=CV+Sample+10",
    ],
    [
      "https://via.placeholder.com/400x565/eeeeee/808080?text=CV+Sample+11",
      "https://via.placeholder.com/400x565/ffffff/808080?text=CV+Sample+12",
    ],
     [
      "https://via.placeholder.com/400x565/f0f0f0/808080?text=CV+Sample+13",
      "https://via.placeholder.com/400x565/e0e0e0/808080?text=CV+Sample+14",
    ],
     [
      "https://via.placeholder.com/400x565/d0d0d0/808080?text=CV+Sample+15",
      "https://via.placeholder.com/400x565/c0c0c0/808080?text=CV+Sample+16",
    ],
  ];
  return <SliderDosImagenes slides={slides} />;
};


// --- Página Principal ---
export default function TestimoniosYMuestrasPage() {
  const { darkMode } = useTheme();

  const getBackgroundPattern = () => darkMode
    ? "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)"
    : "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";

  const getSectionColors = (isAlternate) => {
      const baseBgLight = "bg-white";
      const baseBgDark = "bg-black";
      const alternateBgLight = "bg-gray-100";
      const alternateBgDark = "bg-gray-900";
      const textLight = "text-gray-800";
      const textDark = "text-white";

      if (darkMode) {
          return {
              baseBackground: isAlternate ? alternateBgDark : baseBgDark,
              textColor: textDark
          };
      } else {
          return {
              baseBackground: isAlternate ? alternateBgLight : baseBgLight,
              textColor: textLight
          };
      }
  };

  const heroColors = getSectionColors(false);
  const examplesCvColors = getSectionColors(true);
  const reviewsColors = getSectionColors(false);
  const caseStudiesColors = getSectionColors(true);

  return (
    <>
      <Header />
      <main>
        {/* Sección Hero */}
        <section
          className={`relative flex items-center justify-center min-h-screen ${heroColors.baseBackground} ${heroColors.textColor} pt-32`}
          style={{
            backgroundImage: getBackgroundPattern(),
            backgroundSize: "40px 40px",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Testimonios, Muestras y Más
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              El servicio al cliente está en el corazón de ResumeGuru. Revisa testimonios de clientes anteriores, estudios de caso y muestras para conocer nuestros servicios.
            </p>
          </div>
        </section>

        {/* Sección de Ejemplos de CV Compatibles con ATS */}
        <section
            className={`py-16 ${examplesCvColors.baseBackground} ${examplesCvColors.textColor}`}
            style={{
                backgroundImage: getBackgroundPattern(),
                backgroundSize: "40px 40px",
                backgroundPosition: "center",
            }}
        >
           <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Columna izquierda: Texto y botón */}
              {/* Mobile: Center Text; Desktop: Left Text */}
              <div className="text-center md:text-left md:order-1">
                 <h2 className="text-2xl md:text-3xl font-bold mb-4">
                   Ejemplos de CV Compatibles con ATS que Han Conseguido Entrevistas
                 </h2>
                 <p className="text-base mb-4">
                    ¿Quieres ver cómo hacemos tu CV? Revisa los CV compatibles con ATS que hemos elaborado para nuestros clientes en diversos campos.
                 </p>
                 {/* Button centered on all screens, adjusted padding */}
                 <div className="flex mt-4 justify-center">
                   <Link href="#">
                     {/* Adjusted button padding for uniformity */}
                     <button className="bg-purple-600 text-white px-6 py-3 md:px-10 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
                       Haz clic aquí para ver Muestras de CV
                     </button>
                   </Link>
                 </div>
              </div>

              {/* Columna derecha: Slider */}
              <div className="flex justify-center md:order-2">
                <div className="w-full">
                   <StaticCVImagesWithDots />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Reseñas Reales de Clientes */}
        <section
            className={`py-16 ${reviewsColors.baseBackground} ${reviewsColors.textColor}`}
            style={{
                backgroundImage: getBackgroundPattern(),
                backgroundSize: "40px 40px",
                backgroundPosition: "center",
            }}
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
               {/* Columna izquierda: Imagen */}
               <div className="flex justify-center">
                   {/* Removed Link, added fixed size */}
                   <img
                        src="https://resumeguru.in/wp-content/uploads/2024/05/Screenshot-6-e1715945247175-1536x697.png"
                        alt="Testimonios en Redes Sociales"
                        // Matched dimensions from model page [cite: 272]
                        className="rounded shadow-md w-[400px] h-[400px] object-cover border border-gray-300 dark:border-gray-700"
                     />
               </div>

               {/* Columna derecha: Texto y botón */}
               {/* Mobile: Center Text; Desktop: Left Text */}
               <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Reseñas Reales de Clientes en Redes Sociales
                 </h2>
                 <p className="text-base mb-4">
                   Queremos que sepas que puedes confiar en nosotros. Revisa testimonios de clientes reales publicados en plataformas sociales. Estos son comentarios auténticos y sin editar de nuestros apreciados clientes.
                 </p>
                 {/* Button centered on all screens, adjusted padding */}
                 <div className="flex mt-4 justify-center">
                   <Link href="#">
                     {/* Adjusted button padding for uniformity */}
                     <button className="bg-purple-600 text-white px-6 py-3 md:px-10 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
                       Haz clic aquí para ver Testimonios de Clientes
                     </button>
                   </Link>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Sección de Estudios de Caso */}
        <section
            className={`py-16 ${caseStudiesColors.baseBackground} ${caseStudiesColors.textColor}`}
            style={{
                backgroundImage: getBackgroundPattern(),
                backgroundSize: "40px 40px",
                backgroundPosition: "center",
            }}
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Columna izquierda: Texto y botón */}
               {/* Mobile: Center Text; Desktop: Left Text */}
               <div className="text-center md:text-left md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Estudios de Caso: Transformando CV en Historias de Éxito
                </h2>
                <p className="text-base mb-4">
                   Lee estudios de caso reales de cómo transformamos CV para crear historias de éxito. Hemos manejado metódicamente incluso las historias profesionales más desafiantes. Descubre cómo ayudamos a nuestros clientes.
                 </p>
                 {/* Button centered on all screens, adjusted padding */}
                <div className="flex mt-4 justify-center">
                  <Link href="#">
                    {/* Adjusted button padding for uniformity */}
                    <button className="bg-purple-600 text-white px-6 py-3 md:px-10 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
                       Revisa Estudios de Caso
                    </button>
                  </Link>
                </div>
              </div>

              {/* Columna derecha: Imagen */}
              <div className="flex justify-center md:order-2">
                 {/* Removed Link, added fixed size */}
                  <img
                    src="https://resumeguru.in/wp-content/uploads/2024/05/istockphoto-1354842602-612x612-1.jpg"
                    alt="Estudios de Caso"
                    // Matched dimensions from model page [cite: 294]
                    className="rounded shadow-md w-[400px] h-[400px] object-cover border border-gray-300 dark:border-gray-700"
                  />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
