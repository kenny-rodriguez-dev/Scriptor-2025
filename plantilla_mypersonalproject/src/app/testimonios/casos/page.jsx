"use client";

import React from "react";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useTheme } from "@/app/theme-provider";

/* --------------------------------------------------
 * Utilidad patrón punteado (mismo que en página modelo)
 * --------------------------------------------------*/
const dottedPattern = (dark) =>
  dark
    ? "repeating-radial-gradient(circle,rgba(255,255,255,.2)0,rgba(255,255,255,.2)2px,transparent 2px,transparent 40px)"
    : "repeating-radial-gradient(circle,rgba(0,0,0,.2)0,rgba(0,0,0,.2)2px,transparent 2px,transparent 40px)";

// Clase base de botón (idéntica a la página modelo)
const buttonBase =
  "bg-purple-600 text-white px-10 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer";

/* --------------------------------------------------
 *  Hero: “Casos de Estudio”   (clonado de Hero75Section)
 * --------------------------------------------------*/
function HeroEstudiosSection() {
  const { darkMode } = useTheme();

  const baseBackground = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-gray-800";

  return (
    <section
      id="estudios-hero"
      className={`relative flex items-center justify-center min-h-screen pt-32 ${baseBackground} ${textColor}`}
      style={{
        backgroundImage: dottedPattern(darkMode),
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Casos de Estudio
        </h1>
        <p className="text-lg md:text-xl">
          Hemos manejado metódicamente incluso las historias profesionales más
          desafiantes. Descubre cómo ayudamos a nuestros clientes revisando
          algunas de nuestras historias de éxito reales.
        </p>
        <p className="mt-4 text-md opacity-90">
          Con la confianza de profesionales de la industria
        </p>
      </div>
    </section>
  );
}

/* --------------------------------------------------
 *  Bloque reutilizable para cada caso de estudio
 * --------------------------------------------------*/
function CaseStudyBlock({
  reverse = false,
  imageSrc,
  imageAlt,
  titleSmall,
  titleBold,
  description,
  buttonLabel,
}) {
  const { darkMode } = useTheme();

  // Alternamos color de fondo para efectos white / gray-100
  const baseBackground = reverse
    ? darkMode
      ? "bg-black"
      : "bg-white"
    : darkMode
    ? "bg-gray-900"
    : "bg-gray-100";
  const textColor = darkMode ? "text-white" : "text-gray-800";

  // Dirección del flex según la prop `reverse`
  const flexDirection = reverse ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <section
      className={`py-16 ${baseBackground} ${textColor}`}
      style={{
        backgroundImage: dottedPattern(darkMode),
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`container mx-auto px-6 flex flex-col ${flexDirection} items-center gap-10`}
      >
        {/* Imagen */}
        <div className="md:w-1/2 flex justify-center order-2 md:order-none">
          <Link href="#">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-[400px] h-[400px] object-cover rounded shadow-md cursor-pointer"
            />
          </Link>
        </div>

        {/* Contenido */}
        <div className="md:w-1/2 max-w-xl text-center md:text-left">
          <h2 className="text-lg md:text-xl font-normal mb-2">{titleSmall}</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
            {titleBold}
          </h3>
          <p className="mb-6 text-base leading-relaxed">{description}</p>
          {/* Botón centrado en todos los tamaños */}
          <div className="flex justify-center">
            <button className={buttonBase}>{buttonLabel}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------
 *  CTA final – “¿Quieres saber más?”
 * --------------------------------------------------*/
function CtaMasSection() {
  const { darkMode } = useTheme();
  const textColor = darkMode ? "text-white" : "text-gray-800";

  return (
    <section
      className={`py-24 relative ${textColor}`}
      style={{
        backgroundImage:
          "url('https://resumeguru.in/wp-content/uploads/2024/05/istockphoto-1347993286-612x612-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30 dark:bg-black/60" />
      <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ¿Quieres saber más?
        </h2>
        <p className="mb-10 text-2xl md:text-3xl font-medium">
          Consulta nuestros Testimonios de Clientes
        </p>
        <button className={buttonBase}>Testimonios de Clientes</button>
      </div>
    </section>
  );
}

/* --------------------------------------------------
 *  Página principal
 * --------------------------------------------------*/
export default function CasosEstudioPage() {
  return (
    <>
      <Header />
      <main>
        {/* 1) Hero */}
        <HeroEstudiosSection />

        {/* 2) Casos de estudio */}
        {/* Imagen IZQUIERDA – Texto DERECHA */}
        <CaseStudyBlock
          imageSrc="https://resumeguru.in/wp-content/uploads/2024/05/istockphoto-1354842602-612x612-1.jpg"
          imageAlt="Pragati"
          titleSmall="Pragati | Adquisición de Talento y RRHH"
          titleBold="Ayudando a una especialista en adquisición de talento a conseguir un empleo reclutando para una empresa MAANG"
          description="Pragati es increíble en lo que hace, pero le costaba expresarlo en su currículum. Descubre cómo transformamos su CV para ayudarla a conseguir un nuevo rol reclutando para una empresa MAANG."
          buttonLabel="Conoce la historia de Pragati"
        />

        {/* Imagen DERECHA – Texto IZQUIERDA */}
        <CaseStudyBlock
          reverse
          imageSrc="https://resumeguru.in/wp-content/uploads/2024/05/istockphoto-1347993286-612x612-1.jpg"
          imageAlt="Rohit"
          titleSmall="Rohit | Compras y Abastecimiento Global, Reino Unido"
          titleBold="Ayudamos a un cliente a conseguir su primera entrevista tras enfrentar más de 200 rechazos"
          description="A Rohit se le dificultaba conseguir un empleo en el Reino Unido a pesar de sus calificaciones y habilidades. Descubre cómo transformamos su currículum y consiguió su primera entrevista."
          buttonLabel="Conoce la historia de Rohit"
        />

        {/* Imagen IZQUIERDA – Texto DERECHA */}
        <CaseStudyBlock
          imageSrc="https://resumeguru.in/wp-content/uploads/2024/05/casual-business-man-working-on-desktop-computer-in-modern-open-plan-startup-office-interior-selective-focus-free-photo.jpg"
          imageAlt="Rahul"
          titleSmall="Rahul Singh | Software y Datos"
          titleBold="Ayudando a un ingeniero de software a conseguir un empleo en una multinacional"
          description="Rahul es un triunfador, pero le costaba expresar sus logros en su currículum y fue rechazado varias veces. Descubre cómo lo ayudamos a conseguir el empleo de sus sueños en una multinacional."
          buttonLabel="Conoce la historia de Rahul"
        />

        {/* Imagen DERECHA – Texto IZQUIERDA */}
        <CaseStudyBlock
          reverse
          imageSrc="https://resumeguru.in/wp-content/uploads/2024/05/project-management-success-story.jpg"
          imageAlt="Aashna"
          titleSmall="Aashna | Estudiante Universitaria, Gestión de Proyectos"
          titleBold="Ayudando a una estudiante universitaria a conseguir la pasantía de sus sueños en Gestión de Proyectos"
          description="Aashna tenía talento para la gestión de proyectos, pero le costaba demostrarlo en su currículum. Descubre cómo un CV impactante le aseguró la pasantía que deseaba."
          buttonLabel="Conoce la historia de Aashna"
        />

        {/* 3) CTA Final */}
        <CtaMasSection />
      </main>
      <Footer />
    </>
  );
}
