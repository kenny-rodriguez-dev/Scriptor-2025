"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image"; // Import Image from next/image
import Link from "next/link"; // Import Link from next/link
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Import CheckCircleIcon
import PhoneIcon from "@mui/icons-material/Phone"; // Import PhoneIcon

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
 * Página de Servicios Modificada
 * -------------------------------------- */
export default function ServiciosPage() {
  const { darkMode } = useTheme(); // Use the theme hook

  // Define background patterns based on darkMode
  const backgroundPatternLight = "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";
  const backgroundPatternDark = "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)";

  // Helper function to get section styles
  const getSectionStyles = (isAlternate) => {
    const baseBackground = darkMode
      ? (isAlternate ? "bg-gray-900" : "bg-black")
      : (isAlternate ? "bg-gray-100" : "bg-white");
    const textColor = darkMode ? "text-white" : "text-gray-800";
    const backgroundPattern = darkMode ? backgroundPatternDark : backgroundPatternLight;

    return {
      className: `relative py-16 ${baseBackground} ${textColor}`,
      style: {
        backgroundImage: backgroundPattern,
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      },
    };
  };


  return (
    <>
      <Header />
      <main>
        {/* Sección Introductoria - Estilo Hero75Section */}
        <section
          id="nuestros-servicios-hero"
          className={`relative flex items-center justify-center min-h-screen pt-32 ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-800'}`}
          style={{
            backgroundImage: darkMode ? backgroundPatternDark : backgroundPatternLight,
            backgroundSize: "40px 40px",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Conoce más sobre los servicios de redacción de currículums ATS, redacción de cartas de presentación y optimización de perfiles de LinkedIn que ResumeGuru India tiene para ofrecer.
            </p>

            {/* Botones */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
              <Link href="#">
                <button className="flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
                  {/* Icono de visto verde usando color="success" */}
                  <CheckCircleIcon color="success" className="mr-2" />
                  Contrata nuestros servicios
                </button>
              </Link>
              <Link href="#">
                <button className="flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
                   <PhoneIcon className="mr-2" style={{ color: 'white' }} />
                  Solicitar llamada
                </button>
              </Link>
            </div>

            {/* 3 textos (bullet points) */}
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
                  95% de Satisfacción del Cliente
                </p>
              </div>
               {/* 3er texto */}
               <div className="flex flex-col items-center md:flex-row md:justify-center">
                 <CheckCircleIcon style={{ color: darkMode ? "#fff" : "#000" }} />
                <p className="text-sm mt-2 md:mt-0 md:ml-2 text-center md:text-left">
                  Soporte 1:1 al Cliente
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Estadísticas - Estilo ATSStatsSection */}
        <section {...getSectionStyles(true)}> {/* isAlternate = true */}
          <div className="container mx-auto px-6 text-center">
            <p className="mb-8 text-lg font-semibold">
              Obtenemos resultados para nuestros clientes. Puntaje mínimo de ATS del 75% con cada pedido.
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

        {/* Sección: Servicio de Redacción de Currículums ATS - Estilo CaseStudiesSection (Image Left) */}
        <section {...getSectionStyles(false)}> {/* isAlternate = false */}
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Imagen a la izquierda (más grande, no clickeable) */}
              <div className="flex justify-center">
                 {/* Link removido de la imagen */}
                 <img
                    src="https://resumeguru.in/wp-content/uploads/2023/07/Resume-Services-3.png"
                    alt="Servicio de Redacción de Currículums ATS"
                    className="rounded shadow-md w-full max-w-[400px] h-auto md:h-[400px] object-cover" // cursor-pointer removido
                 />
              </div>
              {/* Contenido a la derecha */}
              <div className="text-center md:text-left"> {/* Centrado en mobile, izquierda en desktop */}
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Servicio de Redacción de Currículums ATS
                </h2>
                <p className="mb-4 font-bold">
                  Servicios de Redacción de Currículums ATS que garantizan la optimización ATS.
                </p>
                <p className="text-base mb-4">
                  Nuestros currículums están diseñados para superar los sistemas de seguimiento y asegurar que tu perfil sea notado. Somos líderes en la industria con un puntaje mínimo garantizado en pruebas ATS.
                </p>
                 <div className="flex mt-2 justify-center"> {/* Botón centrado */}
                    <Link href="#">
                        <button className="bg-purple-600 text-white px-10 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
                        Conocer más
                        </button>
                    </Link>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección: Servicio de Redacción de Cartas de Presentación - Estilo CaseStudiesSection (Text Left) */}
        <section {...getSectionStyles(true)}> {/* isAlternate = true */}
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Contenido a la izquierda */}
               <div className="text-center md:text-left md:order-1"> {/* Centrado en mobile, izquierda en desktop */}
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Servicio de Redacción de Cartas de Presentación
                </h2>
                <p className="mb-4 font-bold">
                  Servicios de Redacción de Cartas de Presentación que duplican tus oportunidades de entrevista.
                </p>
                <p className="text-base mb-4">
                  Nuestras cartas están diseñadas para captar la atención de los reclutadores, aumentando significativamente tus posibilidades de ser llamado a una entrevista.
                </p>
                 <div className="flex mt-2 justify-center"> {/* Botón centrado */}
                    <Link href="#">
                        <button className="bg-purple-600 text-white px-10 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
                        Conocer más
                        </button>
                    </Link>
                 </div>
              </div>
              {/* Imagen a la derecha (más grande, no clickeable) */}
              <div className="flex justify-center md:order-2">
                 {/* Link removido de la imagen */}
                 <img
                    src="https://resumeguru.in/wp-content/uploads/2023/07/Resume-Services-8.png"
                    alt="Servicio de Redacción de Cartas de Presentación"
                    className="rounded shadow-md w-full max-w-[400px] h-auto md:h-[400px] object-cover" // cursor-pointer removido
                 />
              </div>
            </div>
          </div>
        </section>

        {/* Sección: Servicio de Optimización de Perfiles de LinkedIn - Estilo CaseStudiesSection (Image Left) */}
         <section {...getSectionStyles(false)}> {/* isAlternate = false */}
           <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
               {/* Imagen a la izquierda (más grande, no clickeable) */}
               <div className="flex justify-center">
                  {/* Link removido de la imagen */}
                  <img
                     src="https://resumeguru.in/wp-content/uploads/2023/07/Resume-Services-14.png"
                     alt="Servicio de Optimización de Perfiles de LinkedIn"
                     className="rounded shadow-md w-full max-w-[400px] h-auto md:h-[400px] object-cover" // cursor-pointer removido
                  />
               </div>
               {/* Contenido a la derecha */}
               <div className="text-center md:text-left"> {/* Centrado en mobile, izquierda en desktop */}
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Servicio de Optimización de Perfiles de LinkedIn
                </h2>
                <p className="mb-4 font-bold">
                  Servicios de Optimización de Perfiles de LinkedIn para triplicar el rendimiento de tu perfil.
                </p>
                <p className="text-base mb-4">
                  Mejora cada sección de tu perfil para que reclutadores y profesionales de la industria te noten, aumentando tu visibilidad y oportunidades de networking.
                 </p>
                  <div className="flex mt-2 justify-center"> {/* Botón centrado */}
                     <Link href="#">
                        <button className="bg-purple-600 text-white px-10 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
                          Conocer más
                        </button>
                     </Link>
                  </div>
               </div>
             </div>
           </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
