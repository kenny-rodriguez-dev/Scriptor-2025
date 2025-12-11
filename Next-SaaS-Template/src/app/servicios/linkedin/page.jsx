"use client";

import React, { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useTheme } from "@/app/theme-provider";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // ← nuevo import

/* --------------------------------------------------
 * Utilidad: patrón de fondo punteado coherente
 * --------------------------------------------------*/
const dottedPattern = (darkMode) =>
  darkMode
    ? "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)"
    : "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";

/* --------------------------------------------------
 * 1) HERO – “Servicios de Redacción y Optimización…”
 * --------------------------------------------------*/
function HeroLinkedInSection() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`relative flex items-center justify-center min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-800"
      } pt-32 text-center`}
      style={{
        backgroundImage: dottedPattern(darkMode),
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Servicios de Redacción y Optimización de Perfiles de LinkedIn
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Tener un perfil optimizado es clave. Nuestros expertos triplican el
          rendimiento de tu perfil y causan una excelente primera impresión.
        </p>

        {/* Botones con icono de visto */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
          <a href="/pricing">
            <button className="flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
              <CheckCircleIcon color="success" className="mr-2" />
              Aproveche nuestros servicios
            </button>
          </a>
          <a href="/callback">
            <button className="flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
              <CheckCircleIcon color="success" className="mr-2" />
              Solicitar devolución de llamada
            </button>
          </a>
        </div>

        {/* Beneficios (bullet points) con icono de visto */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            "Impulsa tus oportunidades de entrevista desde LinkedIn",
            "Triplica las impresiones y visitas a tu perfil",
            "Genera una fuerte primera impresión",
          ].map((txt, i) => (
            <li
              key={i}
              className="flex flex-col items-center text-center md:flex-row md:items-center md:justify-start"
            >
              <CheckCircleIcon
                className="mr-0 md:mr-2 flex-shrink-0"
                style={{ color: darkMode ? "#fff" : "#000" }}
              />
              <span className="mt-1 md:mt-0 text-sm md:text-base">{txt}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* --------------------------------------------------
 * 2) DESCRIPCIÓN – (diseño tipo “Casos de Estudio”)
 * --------------------------------------------------*/
function DescriptionLinkedInSection() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`py-16 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
      style={{
        backgroundImage: dottedPattern(darkMode),
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Servicios de Redacción y Optimización de Perfiles de LinkedIn
        </h2>
        <p className="text-lg mb-6">
          ¿Sabías que se contrata a 6 personas cada minuto y se envían 140
          solicitudes de empleo cada segundo en LinkedIn? Con casi 1 billón de
          perfiles, destacar es un reto. Nuestros redactores se aseguran de que
          tu perfil brille y atraiga a los reclutadores correctos.
        </p>
        <a
          href="/get-started"
          className="inline-block bg-purple-600 text-white px-10 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer"
        >
          Comenzar
        </a>
      </div>
    </section>
  );
}

/* --------------------------------------------------
 * 3) SERVICIO DE REDACCIÓN DE PERFIL (imagen + acordeón)
 * --------------------------------------------------*/
function ServiceWritingSection({ data, activeIndex, toggle }) {
  const { darkMode } = useTheme();

  return (
    <section
      className={`py-20 ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-800"
      }`}
      style={{
        backgroundImage: dottedPattern(darkMode),
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Servicio de Redacción de Perfiles de LinkedIn
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Imagen */}
          <div className="flex justify-center md:col-span-1">
            <img
              src="https://resumeguru.in/wp-content/uploads/2023/08/Untitled-design-15.png"
              alt="Servicio LinkedIn"
              className="rounded shadow-md w-[400px] h-auto object-contain"
            />
          </div>

          {/* Acordeón (ligeramente más abajo / centrado) */}
          <div className="md:col-span-2 space-y-2 self-center md:mt-4">
            {data.map((item, i) => {
              const open = activeIndex === i;
              return (
                <div
                  key={i}
                  className={`
                    rounded-md p-3 cursor-pointer
                    ${darkMode ? "bg-gray-800" : "bg-gray-50"}
                    hover:bg-purple-600/20 hover:shadow-[0_0_10px_rgba(128,0,128,0.2)]
                    transition-all duration-700
                  `}
                  onClick={() => toggle(i)}
                >
                  <div className="flex items-center justify-between">
                    <h3
                      className={`text-base font-semibold ${
                        darkMode ? "text-gray-100" : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <span className="text-purple-600 font-bold">
                      {open ? "-" : "+"}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${
                      open ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p
                      className={`text-base ${
                        darkMode ? "text-gray-100" : "text-gray-800"
                      }`}
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
    </section>
  );
}

/* --------------------------------------------------
 * 4) BLOQUE GENÉRICO
 * --------------------------------------------------*/
function SimpleSection({ children, bgDark }) {
  const { darkMode } = useTheme();
  const base = bgDark
    ? darkMode
      ? "bg-gray-900 text-white"
      : "bg-gray-100 text-gray-800"
    : darkMode
    ? "bg-black text-white"
    : "bg-white text-gray-800";

  return (
    <section
      className={`py-16 ${base}`}
      style={{
        backgroundImage: dottedPattern(darkMode),
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      {children}
    </section>
  );
}

/* --------------------------------------------------
 * 5) FAQ
 * --------------------------------------------------*/
function FAQSection({ data, active, toggle }) {
  const { darkMode } = useTheme();

  return (
    <section
      className={`py-20 ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-800"
      }`}
      style={{
        backgroundImage: dottedPattern(darkMode),
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Preguntas Frecuentes
        </h2>

        <div className="max-w-4xl mx-auto space-y-2">
          {data.map((item, i) => {
            const open = active === i;
            return (
              <div
                key={i}
                className={`
                  rounded-md p-3 cursor-pointer
                  ${darkMode ? "bg-gray-800" : "bg-gray-50"}
                  hover:bg-purple-600/20 hover:shadow-[0_0_10px_rgba(128,0,128,0.2)]
                  transition-all duration-700
                `}
                onClick={() => toggle(i)}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-base font-semibold ${
                      darkMode ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <span className="text-purple-600 font-bold">
                    {open ? "-" : "+"}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    open ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <p
                    className={`text-base ${
                      darkMode ? "text-gray-100" : "text-gray-800"
                    }`}
                  >
                    {item.content}
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

/* =====================================================================
 * COMPONENTE PRINCIPAL
 * ====================================================================*/
export default function LinkedinPage() {
  /* -------- datos & estado para acordeón de Servicios ---------- */
  const [activeServiceIndex, setActiveServiceIndex] = useState(null);
  const toggleServiceAccordion = (i) =>
    setActiveServiceIndex(activeServiceIndex === i ? null : i);

  const serviceAccordionData = [
    {
      title: "Triplica las Impresiones de tu Perfil",
      content:
        "Optimizamos todas las secciones principales de tu perfil para hacerlo atractivo y multiplicar las visitas.",
    },
    {
      title: "Tus Solicitudes de Conexión ya no Pasan Desapercibidas",
      content:
        "Garantizamos que tu perfil luzca genuino y profesional, facilitando que tus solicitudes sean aceptadas.",
    },
    {
      title: "Acércate a los Reclutadores con Confianza",
      content:
        "Con un perfil optimizado, darás la impresión adecuada a los reclutadores y mejorarás tus oportunidades.",
    },
    {
      title: "Duplica las Solicitudes de Conexión",
      content:
        "Di adiós a la pantalla de 'Sin solicitudes de conexión'. Más profesionales querrán conectarse contigo.",
    },
    {
      title: "Tu Privacidad se Mantiene",
      content:
        "No solicitamos credenciales. Te entregamos el contenido para que lo copies en menos de 120 s.",
    },
  ];

  /* -------- datos & estado para FAQ ---------- */
  const [activeFAQIndex, setActiveFAQIndex] = useState(null);
  const toggleFAQ = (i) => setActiveFAQIndex(activeFAQIndex === i ? null : i);

  const faqAccordionData = [
    {
      title: "¿Modificarán mi perfil o tendré que hacerlo yo?",
      content:
        "Te entregamos todo el contenido personalizado; solo debes copiar y pegar en tu cuenta.",
    },
    {
      title: "¿Qué pasa si no estoy satisfecho con el contenido?",
      content:
        "Trabajaremos nuevamente basados en tus comentarios hasta que quedes conforme.",
    },
    {
      title: "¿Qué secciones de mi perfil modificarán?",
      content:
        "Resumen, Titular, Experiencia, Habilidades, Imagen de Portada y, si lo deseas, Foto de Perfil.",
    },
    {
      title: "¿Cuánto tiempo tomará?",
      content: "El proceso tarda entre 3 y 5 días desde que recibimos tu info.",
    },
  ];

  return (
    <>
      <Header />

      {/* 1) Hero */}
      <HeroLinkedInSection />

      {/* 2) Descripción */}
      <DescriptionLinkedInSection />

      {/* 3) Servicio de Redacción */}
      <ServiceWritingSection
        data={serviceAccordionData}
        activeIndex={activeServiceIndex}
        toggle={toggleServiceAccordion}
      />

      {/* 4) Antes y Después */}
      <SimpleSection bgDark>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Antes y Después de Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <img
                src="https://resumeguru.in/wp-content/uploads/2024/07/1.jpg"
                alt="Antes de nuestros Servicios"
                className="w-72 md:w-96 h-auto rounded shadow object-cover"
              />
              <p className="mt-2 font-bold text-lg md:text-xl text-center">
                Antes de nuestros Servicios
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://resumeguru.in/wp-content/uploads/2024/07/2.jpg"
                alt="Después de nuestros Servicios"
                className="w-72 md:w-96 h-auto rounded shadow object-cover"
              />
              <p className="mt-2 font-bold text-lg md:text-xl text-center">
                Después de nuestros Servicios
              </p>
            </div>
          </div>
        </div>
      </SimpleSection>

      {/* 5) ¿Por qué necesitas un perfil optimizado? */}
      <SimpleSection bgDark={false}>
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Por qué necesitas un perfil de LinkedIn optimizado?
          </h2>
          <p className="text-lg mb-4">
            Un perfil completo y estratégico mejora tu visibilidad, expande tu
            red profesional y genera confianza en reclutadores y prospectos.
          </p>

          <div className="text-left space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-1">
                Potencia tus oportunidades laborales
              </h3>
              <p>
                Los reclutadores comprenden mejor tu experiencia y pueden
                contactarte directamente, incrementando tus posibilidades de
                contratación.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Marca Personal</h3>
              <p>
                Refuerza tu marca y te posiciona como referente en tu industria.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">
                Destácate entre la multitud
              </h3>
              <p>Un perfil optimizado te diferencia de otros candidatos.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Social Selling</h3>
              <p>
                Construye relaciones efectivas con prospectos y cierra tratos
                importantes.
              </p>
            </div>
          </div>
        </div>
      </SimpleSection>

      {/* 6) Características de Nuestros Servicios */}
      <SimpleSection bgDark>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Características de Nuestros Servicios
          </h2>

          <p className="text-lg mb-10 max-w-3xl mx-auto text-left">
            En ResumeGuru te ayudamos a proyectarte como líder de opinión,
            reforzar tu red y potenciar tu credibilidad con un perfil de
            LinkedIn impecable. Destacamos:
          </p>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                title: "Sección de Resumen",
                txt: "Redactamos un resumen impactante en 2 000 caracteres.",
              },
              {
                title: "Imagen de Portada",
                txt: "Diseño profesional e impactante que atrae la atención.",
              },
              {
                title: "Sección de Habilidades",
                txt: "Lista de 40 habilidades optimizadas para buscadores.",
              },
              {
                title: "Titular",
                txt: "Creamos un titular convincente y optimizado para SEO.",
              },
              {
                title: "Foto de Perfil",
                txt: "Mejoramos tu foto para que luzca profesional y confiable.",
              },
            ].map((c, i) => (
              <div
                key={i}
                className={`p-6 rounded shadow text-left ${
                  useTheme().darkMode
                    ? "bg-gray-700 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                <p>{c.txt}</p>
              </div>
            ))}
          </div>
        </div>
      </SimpleSection>

      {/* 7) FAQ */}
      <FAQSection
        data={faqAccordionData}
        active={activeFAQIndex}
        toggle={toggleFAQ}
      />

      <Footer />
    </>
  );
}
