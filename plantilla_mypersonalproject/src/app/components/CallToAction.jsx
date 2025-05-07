"use client";
import { useTheme } from "../theme-provider";

export default function CallToAction() {
  const { darkMode } = useTheme();
  const bgClass = darkMode ? "bg-black" : "bg-white";
  const textClass = darkMode ? "text-white" : "text-gray-800";

  return (
    <section className={`py-16 ${bgClass} ${textClass} flex items-center justify-center`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ¿Listo para impulsar tu redacción?
        </h2>
        <p className="mb-8 max-w-xl mx-auto">
          Regístrate hoy y experimenta el poder de la generación de contenido impulsada por IA.
        </p>
        <button className="bg-gray-900 text-white py-3 px-6 rounded-full hover:bg-gray-800 transition">
          Comienza ahora
        </button>
      </div>
    </section>
  );
}
