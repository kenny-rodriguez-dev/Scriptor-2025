"use client";
import { useTheme } from "../theme-provider";

export default function HowItWorks() {
  const { darkMode } = useTheme();

  // Patrón de fondo para la sección:
  // - En modo oscuro: manchas blancas sutiles.
  // - En modo claro: manchas en tono plomo (más notorias).
  const backgroundPattern = darkMode
    ? "repeating-radial-gradient(circle, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 2px, transparent 2px, transparent 40px)"
    : "repeating-radial-gradient(circle, rgba(0,0,0,0.1) 0, rgba(0,0,0,0.1) 2px, transparent 2px, transparent 40px)";

  // Fondo de la sección y color de texto
  const baseBackground = darkMode ? "bg-black" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-gray-800";

  // Datos de los pasos
  const steps = [
    {
      title: "Regístrate",
      desc: "Crea tu cuenta y accede a nuestro panel intuitivo.",
    },
    {
      title: "Ingresa Datos",
      desc: "Introduce los detalles de tu producto o tus objetivos de marketing.",
    },
    {
      title: "Genera Contenido",
      desc: "Nuestra IA ofrece sugerencias personalizadas en segundos.",
    },
    {
      title: "Refina y Publica",
      desc: "Edita si es necesario y lanza tu campaña con confianza.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className={`py-20 ${baseBackground} ${textColor} relative`}
      style={{
        backgroundImage: backgroundPattern,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Cómo Funciona</h2>
        {/* Disposición horizontal: en md+ se muestran las tarjetas en fila */}
        <div className="flex flex-col md:flex-row gap-8">
          {steps.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between p-6 rounded-lg shadow-lg flex-1 
                ${darkMode ? "bg-gray-800" : "bg-white"}`}
            >
              {/* Contenido de la tarjeta */}
              <div>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-lg">{item.desc}</p>
              </div>
              {/* Número a la derecha, extendido verticalmente */}
              <div className="mt-4 flex justify-end">
                <span
                  className="font-extrabold text-purple-600 opacity-60 shadow-lg"
                  style={{
                    fontSize: "clamp(3rem, 8vw, 6rem)",
                    lineHeight: 1,
                  }}
                >
                  {i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
