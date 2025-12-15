"use client";

import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme } from "@/app/theme-provider";

/* --------------------------------------------------
 * Utilidad para crear el fondo punteado (dotted pattern)
 * -------------------------------------------------- */
const dottedPattern = (dark) =>
  dark
    ? "repeating-radial-gradient(circle, rgba(255,255,255,.2) 0, rgba(255,255,255,.2) 2px, transparent 2px, transparent 40px)"
    : "repeating-radial-gradient(circle, rgba(0,0,0,.2) 0, rgba(0,0,0,.2) 2px, transparent 2px, transparent 40px)";

/* ---------- Sección Hero ---------- */
function HeroSection() {
  const { darkMode } = useTheme();
  const baseBackground = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-gray-800";

  return (
    <section
      id="testimonios-hero"
      className={`relative flex items-center justify-center min-h-screen ${baseBackground} ${textColor} pt-32`}
      style={{
        backgroundImage: dottedPattern(darkMode),
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Testimonios de clientes
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          El servicio al cliente es fundamental en ResumeGuru. Consulta los
          testimonios de clientes anteriores, casos prácticos y ejemplos para
          conocer nuestros servicios.
        </p>
      </div>
    </section>
  );
}

/* ---------- Sección Reseñas ---------- */
function ReviewsSection({
  title,
  icon: Icon,
  iconColor = "currentColor",
  images,
  altBackground = false,
  alignRight = false,
}) {
  const { darkMode } = useTheme();
  const baseBackground = altBackground
    ? darkMode
      ? "bg-gray-900"
      : "bg-gray-100"
    : darkMode
    ? "bg-black"
    : "bg-white";
  const textColor = darkMode ? "text-white" : "text-gray-800";

  /* color automático para el icono de Google */
  const resolvedIconColor =
    title === "Reseñas en Google" ? (darkMode ? "white" : "black") : iconColor;

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
        {/* Encabezado */}
        <div
          className={`flex justify-center text-center ${
            alignRight
              ? "md:justify-end md:text-right"
              : "md:justify-start md:text-left"
          }`}
        >
          <h2
            className={`inline-flex items-center gap-4 mb-8 ${
              alignRight ? "md:pr-6" : "md:pl-6"
            }`}
          >
            {Icon && (
              <Icon style={{ fontSize: 64, color: resolvedIconColor }} />
            )}
            <span className="text-3xl md:text-4xl font-bold">{title}</span>
          </h2>
        </div>

        {/* Imágenes (no clickeables) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${title} ${i + 1}`}
                className="w-full aspect-[6/3] object-cover border-2 border-black transform transition hover:scale-95 md:scale-90"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Sección Estudios de Caso ---------- */
function CaseStudiesSection() {
  const { darkMode } = useTheme();
  const baseBackground = darkMode ? "bg-gray-900" : "bg-gray-100";
  const textColor = darkMode ? "text-white" : "text-gray-800";

  const studies = [
    {
      img: "https://resumeguru.in/wp-content/uploads/2024/05/project-management-success-story.jpg",
      text: "Estudiante universitario asegura su pasantía soñada en una startup con nuestro CV",
      href: "#",
    },
    {
      img: "https://resumeguru.in/wp-content/uploads/2024/05/casual-business-man-working-on-desktop-computer-in-modern-open-plan-startup-office-interior-selective-focus-free-photo.jpg",
      text: "Ayudamos a un Ingeniero de Software a conseguir un puesto en una multinacional",
      href: "#",
    },
    {
      img: "https://resumeguru.in/wp-content/uploads/2024/05/istockphoto-1354842602-612x612-1.jpg",
      text: "Transformación de CV para especialista en Adquisición de Talento, consiguiendo empleo en empresa MAANG",
      href: "#",
    },
  ];

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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Estudios de Caso
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {studies.map(({ img, text, href }, i) => (
            <Link
              key={i}
              href={href}
              className="relative group overflow-hidden cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt={`Caso ${i + 1}`} className="w-full" />
              <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition">
                {text}
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="#">
            <button className="bg-purple-600 text-white px-10 py-3 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
              Ver casos de estudios de la vida real
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Página principal ---------- */
export default function TestimoniosPage() {
  const { darkMode } = useTheme();

  // ------------ Rutas explícitas para cada imagen ------------
  // 18 imágenes únicas (9 Google + 9 LinkedIn). Sustituye cada
  // ruta cuando necesites reemplazar la imagen correspondiente.
  const googleImages = [
    "https://resumeguru.in/wp-content/uploads/2024/05/project-management-success-story.jpg",
    "/images/google2.jpg",
    "/images/google3.jpg",
    "/images/google4.jpg",
    "/images/google5.jpg",
    "/images/google6.jpg",
    "/images/google7.jpg",
    "/images/google8.jpg",
    "/images/google9.jpg",
  ];

  const linkedImages = [
    "https://resumeguru.in/wp-content/uploads/2024/05/casual-business-man-working-on-desktop-computer-in-modern-open-plan-startup-office-interior-selective-focus-free-photo.jpg",
    "https://resumeguru.in/wp-content/uploads/2024/05/project-management-success-story.jpg",
    "/images/linkedin3.jpg",
    "/images/linkedin4.jpg",
    "/images/linkedin5.jpg",
    "/images/linkedin6.jpg",
    "/images/linkedin7.jpg",
    "/images/linkedin8.jpg",
    "/images/linkedin9.jpg",
  ];

  return (
    <>
      <Header />

      {/* 1) Sección Hero */}
      <HeroSection />

      {/* 2) Reseñas en Google (fondo alterno gris/opaco) */}
      <ReviewsSection
        title="Reseñas en Google"
        icon={GoogleIcon}
        iconColor={darkMode ? "white" : "black"}
        images={googleImages}
        altBackground={true} // gris claro / gris muy oscuro
        alignRight={false}
      />

      {/* 3) Reseñas en LinkedIn (fondo blanco/negro, título alineado a la derecha) */}
      <ReviewsSection
        title="Reseñas en LinkedIn"
        icon={LinkedInIcon}
        iconColor="#0077B5"
        images={linkedImages}
        altBackground={false} // blanco / negro
        alignRight={true}
      />

      {/* 4) Estudios de Caso (fondo alterno gris/opaco) */}
      <CaseStudiesSection />

      <Footer />
    </>
  );
}
