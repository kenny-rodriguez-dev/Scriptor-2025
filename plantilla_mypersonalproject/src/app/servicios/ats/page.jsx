"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SearchIcon from "@mui/icons-material/Search";
import DraftsIcon from "@mui/icons-material/Drafts";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

import { useTheme } from "@/app/theme-provider";

/* --------------------------------------------------
 *  Utilidad: patrón de fondo punteado coherente
 * --------------------------------------------------*/
const dottedPattern = (darkMode) =>
  darkMode
    ? "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)"
    : "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";

/* --------------------------------------------------
 *  Section 1 – Hero "Redacción de currículums ATS"
 * --------------------------------------------------*/
function HeroATSSection() {
  const { darkMode } = useTheme();

  const baseBackground = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-gray-800";

  return (
    <section
      id="hero-ats"
      className={`relative flex items-center justify-center min-h-screen ${baseBackground} ${textColor} pt-32`}
      style={{
        backgroundImage: dottedPattern(darkMode),
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Redacción de currículums ATS Servicios
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Los únicos servicios de redacción de currículums ATS que realmente
          funcionan.
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Adaptamos tu currículum a tu campo y garantizamos una puntuación ATS
          mínima del 75 % para ayudarte a superar los bots de filtrado.
        </p>

        {/* Botones */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
          <Link href="#">
            <button className="flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
              <CheckCircleIcon color="success" className="mr-2" />
              Aprovecha nuestros servicios
            </button>
          </Link>
          <Link href="#">
            <button className="flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
              <PhoneIcon className="mr-2" fontSize="small" />
              Solicitar devolución de llamada
            </button>
          </Link>
        </div>

        {/* Bullet points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-4xl mx-auto">
          {[
            "Puntuación ATS mínima garantizada del 75 %",
            "Elige tu plantilla de CV",
            "Atención al cliente 1:1",
          ].map((text, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center md:flex-row md:justify-center"
            >
              <CheckCircleIcon style={{ color: darkMode ? "#fff" : "#000" }} />
              <p className="text-sm mt-2 md:mt-0 md:ml-2 text-center md:text-left">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------
 *  Section 2 – "¿Por qué elegir nuestros servicios…?"
 * --------------------------------------------------*/
function WhyChooseAtsSection({ items }) {
  const { darkMode } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  const baseBackground = darkMode ? "bg-gray-900" : "bg-gray-100";
  const textColor = darkMode ? "text-white" : "text-gray-800";

  return (
    <section
      className={`py-16 ${baseBackground} ${textColor}`}
      style={{
        backgroundImage: dottedPattern(darkMode),
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          ¿Por qué elegir nuestros Servicios de Redacción de currículums ATS?
        </h2>
        <div className="space-y-2">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-md p-3 cursor-pointer ${
                  darkMode ? "bg-gray-800" : "bg-gray-50"
                } hover:bg-purple-600/20 hover:shadow-[0_0_10px_rgba(128,0,128,0.2)] transition-all duration-700`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <span className="text-purple-600 font-bold">
                    {isOpen ? "-" : "+"}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    isOpen ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-base">{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------
 *  Sub‑component: Slider Izquierdo
 * --------------------------------------------------*/
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

  const autoPlayRef = useRef(null);
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(autoPlayRef.current);
  });

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
    setOffsetX(0);
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    setOffsetX(0);
  };

  const handleDragStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    clearInterval(autoPlayRef.current);
  };
  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    setOffsetX(clientX - startX);
  };
  const handleDragEnd = () => {
    if (!isDragging) return;
    const threshold = containerWidth / 3;
    if (offsetX > threshold) handlePrev();
    else if (offsetX < -threshold) handleNext();
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
        <div
          className="border-2 border-black dark:border-white"
          style={{ overflow: "hidden" }}
        >
          <div
            className="flex"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: isDragging ? "none" : "transform 0.5s ease",
              width: `${sliderImages.length * containerWidth}px`,
              cursor: isDragging ? "grabbing" : "grab",
            }}
            onMouseDown={(e) => handleDragStart(e.clientX)}
            onMouseMove={(e) => handleDragMove(e.clientX)}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
            onTouchEnd={handleDragEnd}
          >
            {sliderImages.map((src, i) => (
              <div key={i} style={{ width: containerWidth }}>
                <img
                  src={src}
                  alt={`CV ${i}`}
                  style={{ width: "100%", height: "auto" }}
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
      {/* Dots */}
      <div className="flex justify-center mt-4">
        {sliderImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`cursor-pointer w-3 h-3 rounded-full mx-1 focus:outline-none ${
              currentIndex === i
                ? "bg-purple-600"
                : "bg-gray-300 dark:bg-gray-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* --------------------------------------------------
 *  Section 3 – "Realizamos CVs garantizados…"
 * --------------------------------------------------*/
function CvOptimizedSection({ sliderImages }) {
  const { darkMode } = useTheme();

  // Puntos que reemplazan los menús desplegables
  const bulletPoints = [
    "Plantilla de CV compatible con ATS para una mejor legibilidad por Bots",
    "Adaptado según la descripción del puesto y el campo",
    "Puntuación ATS mínima del 75% garantizada",
    "JobScan se utiliza para escanear su currículum (el escáner ATS con mayor reputación del mundo)",
    "Captura de pantalla de la puntuación ATS adjunta al pedido",
    "Puede elegir la plantilla de nuestra gama de opciones",
    "Llamada 1:1 antes del proceso para recopilar su información",
    "Ediciones ilimitadas durante 20 días después de la entrega para garantizar que su currículum sea perfecto",
    "Entrega en 3-4 días",
  ];

  // Alternamos: esta sección es blanca en modo claro
  const baseBackground = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-gray-800";

  return (
    <section
      className={`py-16 ${baseBackground} ${textColor}`}
      style={{
        backgroundImage: dottedPattern(darkMode),
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Realizamos CVs garantizados optimizados para ATS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Slider */}
          <div className="flex justify-center">
            <CvSliderLeft sliderImages={sliderImages} />
          </div>

          {/* Lista de puntos */}
          <div className="flex flex-col justify-center">
            <ul className="list-disc ml-6 space-y-2 text-base">
              {bulletPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="flex justify-center mt-8">
              <Link href="#">
                <button className="flex items-center bg-purple-600 text-white px-14 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
                  <PhoneIcon className="mr-2" fontSize="small" /> Solicitar
                  Llamada
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------
 *  Section 4 – Descripción centrada (reutilizable)
 * --------------------------------------------------*/
function CenteredDescriptionSection({ id, title, children, whiteBg = true }) {
  const { darkMode } = useTheme();

  const baseBackground = darkMode
    ? whiteBg
      ? "bg-white/5"
      : "bg-gray-900"
    : whiteBg
    ? "bg-white"
    : "bg-gray-100";
  const textColor = darkMode ? "text-gray-200" : "text-gray-800";

  return (
    <section
      id={id}
      className={`py-20 ${baseBackground} ${textColor}`}
      style={{
        backgroundImage: dottedPattern(darkMode),
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <div className="max-w-3xl mx-auto text-lg space-y-4 text-left">
          {children}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------
 *  Section 5 – FAQ
 * --------------------------------------------------*/
function FaqSection({ faqData }) {
  const { darkMode } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  const baseBackground = darkMode ? "bg-gray-900" : "bg-gray-100";
  const textColor = darkMode ? "text-white" : "text-gray-800";

  return (
    <section
      className={`py-16 ${baseBackground} ${textColor}`}
      style={{
        backgroundImage: dottedPattern(darkMode),
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Preguntas frecuentes
        </h2>
        <div className="space-y-2">
          {faqData.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-md p-3 cursor-pointer ${
                  darkMode ? "bg-gray-800" : "bg-gray-50"
                } hover:bg-purple-600/20 hover:shadow-[0_0_10px_rgba(128,0,128,0.2)] transition-all duration-700`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold">{item.question}</h3>
                  <span className="text-purple-600 font-bold">
                    {isOpen ? "-" : "+"}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    isOpen ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-base">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------
 *  Main Page Component
 * --------------------------------------------------*/
export default function AtsPage() {
  // Slider images
  const sliderImages = [
    "/curriculum.webp",
    "/curriculum.webp",
    "/curriculum2.webp",
    "/images/cv4.jpg",
    "/images/cv5.jpg",
    "/images/cv6.jpg",
    "/images/cv7.jpg",
  ];

  // Accordion data (Why Choose)
  const serviceAccordionData = [
    {
      title: "Único servicio que otorga una puntuación ATS garantizada",
      content:
        "Somos los únicos que prometemos y entregamos una puntuación ATS mínima del 75 % usando JobScan.",
    },
    {
      title: "Puedes elegir tu plantilla de currículum",
      content:
        "Disponemos de 29 plantillas, todas compatibles con ATS, para que elijas la que mejor te represente.",
    },
    {
      title: "Consulta 1:1 con nuestro experto en currículums",
      content:
        "Antes de comenzar, tendrás una llamada personalizada donde comprenderemos tu trayectoria y objetivos profesionales.",
    },
    {
      title: "El servicio al cliente en el corazón",
      content:
        "Con 95 % de satisfacción, ofrecemos ediciones ilimitadas por 20 días para garantizar que tu CV sea perfecto.",
    },
    {
      title: "Resultados comprobados para nuestros clientes",
      content:
        "Hemos ayudado a profesionales a ingresar en Google, Amazon, IBM, entre otras compañías Fortune 500.",
    },
  ];

  // FAQ data
  const faqData = [
    {
      question: "¿Mi currículum debe ser compatible con ATS?",
      answer:
        "Sí. Los reclutadores automatizan la selección y el ATS es fundamental. Un CV compatible aumenta tus oportunidades de entrevista.",
    },
    {
      question: "¿Cómo garantizan la optimización ATS para mi currículum?",
      answer:
        "Escaneamos cada currículum en JobScan y garantizamos una puntuación mínima del 75 % antes de entregarlo.",
    },
    {
      question: "¿Qué es JobScan?",
      answer:
        "JobScan es un escáner ATS de prestigio mundial que compara tu CV con la descripción del puesto y otorga una puntuación del 1 al 100.",
    },
    {
      question: "¿Recibo un archivo Word para mi currículum?",
      answer:
        "Sí, recibirás tu CV en formatos Word (editable) y PDF (listo para enviar).",
    },
    {
      question: "¿Podré elegir mi propia plantilla de CV?",
      answer:
        "Claro. Podrás seleccionar la plantilla que prefieras de nuestra biblioteca de opciones optimizadas para ATS.",
    },
    {
      question: "¿Qué pasa si no me gusta mi currículum?",
      answer:
        "Ofrecemos 20 días de soporte de edición ilimitado después de la entrega para que tu CV quede exactamente como lo deseas.",
    },
  ];

  return (
    <>
      <Header />

      {/* 1) Hero Section */}
      <HeroATSSection />

      {/* 2) Why Choose Section */}
      <WhyChooseAtsSection items={serviceAccordionData} />

      {/* 3) Cv Optimized Section (slider + puntos) */}
      <CvOptimizedSection sliderImages={sliderImages} />

      {/* 4) Descripción – Servicios de redacción de currículums de ATS */}
      <CenteredDescriptionSection
        id="services-ats"
        title="Servicios de redacción de currículums de ATS"
        whiteBg={false}
      >
        <p>
          El mundo profesional es más competitivo que nunca. Para conseguir un
          empleo remunerado, es fundamental destacar con un currículum vitae
          adecuado. Sin embargo, redactar un CV perfecto, relevante y que supere
          los filtros ATS no es fácil. Nuestros servicios de redacción de
          currículums están diseñados para ayudarte a alcanzar tus metas
          profesionales.
        </p>
      </CenteredDescriptionSection>

      {/* 5) ¿Por qué necesitas un CV profesional? */}
      <CenteredDescriptionSection
        id="why-professional"
        title="¿Por qué necesitas un currículum elaborado profesionalmente?"
        whiteBg={true}
      >
        <p>
          ¿Sabías que el 80 % de los currículums que llegan a los reclutadores
          son casi idénticos y transmiten una sensación genérica? Destacar entre
          la multitud requiere esfuerzo y estrategia. Con un servicio
          profesional de redacción de CV, podrás llevar tu candidatura al
          siguiente nivel y acercarte al trabajo de tus sueños.
        </p>
        <p>
          Un CV redactado profesionalmente muestra tu competencia y experiencia
          en todo su esplendor. Es la primera impresión que recibe el
          reclutador; debe ser impecable y cautivador.
        </p>
        <p>
          Además, los CV profesionales son más fáciles de escanear y leer,
          superan los filtros ATS y aumentan tus posibilidades de ser convocado
          a entrevista.
        </p>
      </CenteredDescriptionSection>

      {/* 6) ¿Qué es ATS? */}
      <CenteredDescriptionSection
        id="what-is-ats"
        title="¿Qué es ATS (Sistema de Seguimiento de Solicitantes)?"
        whiteBg={false}
      >
        <p>
          El Sistema de Seguimiento de Candidatos (ATS) es una solución de
          software que gestiona el proceso de reclutamiento. Organiza y filtra
          la información de los candidatos, programa entrevistas y automatiza la
          comunicación. Por ello, tu CV debe estar optimizado para pasar este
          filtro y llegar a manos del reclutador.
        </p>
      </CenteredDescriptionSection>

      {/* 7) ¿Por qué es necesario un CV optimizado para ATS? */}
      <CenteredDescriptionSection
        id="why-ats-cv"
        title="¿Por qué es necesario un CV optimizado para ATS?"
        whiteBg={true}
      >
        <p>
          Un currículum ATS tiene varias ventajas, siendo la más importante el
          aumento considerable de tus posibilidades de ser contratado.
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong>Mayor visibilidad:</strong> un currículum compatible con ATS
            aumenta tu visibilidad ante los reclutadores durante el proceso de
            contratación.
          </li>
          <li>
            <strong>Coincidencia de palabras clave:</strong> el ATS analiza los
            currículums y los compara con la descripción del puesto, buscando
            palabras clave y frases relevantes.
          </li>
        </ul>
      </CenteredDescriptionSection>

      {/* 8) FAQ Section */}
      <FaqSection faqData={faqData} />

      <Footer />
    </>
  );
}
