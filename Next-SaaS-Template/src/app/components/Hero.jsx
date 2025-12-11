"use client";
import { useTheme } from "../theme-provider";
import Image from "next/image";

export default function Hero() {
  const { darkMode } = useTheme();

  // Patrón de fondo modificado: manchas un poquito más pequeñas (2px en lugar de 3px)
  const backgroundPattern = darkMode
    ? "repeating-radial-gradient(circle, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 2px, transparent 2px, transparent 40px)"
    : "repeating-radial-gradient(circle, rgba(0,0,0,0.02) 0, rgba(0,0,0,0.02) 2px, transparent 2px, transparent 40px)";

  const baseBackground = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-gray-800";
  const infoTextColor = darkMode ? "text-white" : "text-black";

  return (
    <section
      id="hero"
      className={`relative flex items-center justify-center min-h-screen ${baseBackground} pt-32`}
      style={{
        backgroundImage: backgroundPattern,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className={`text-4xl md:text-6xl font-bold leading-tight mb-6 ${textColor}`}>
          Impulsa tu redacción
          <br className="hidden md:block" />
          con <span className="text-yellow-300">Poder de IA</span>
        </h1>
        <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 ${textColor}`}>
          Genera textos de marketing de alta calidad en segundos.
        </p>
        <div className="flex flex-col items-center gap-2">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition font-semibold">
            Empieza a escribir gratis
          </button>
          <span className={`font-medium ${infoTextColor}`}>
            No se requiere tarjeta de crédito
          </span>
        </div>
        <div className="mt-16 flex justify-center">
          <Image
            src="/images/hero-image.png"
            alt="Ilustración de IA Hero"
            width={600}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
