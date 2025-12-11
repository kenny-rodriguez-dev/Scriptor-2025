"use client";
import { useState } from "react";
import { useTheme } from "../theme-provider";

const faqItems = [
  {
    question: "¿Cómo genera CopyGen el texto?",
    answer:
      "Utilizamos un modelo sofisticado de IA entrenado con miles de millones de datos para producir contenido similar al humano.",
  },
  {
    question: "¿Existe una prueba gratuita?",
    answer:
      "Sí, ofrecemos una prueba gratuita de 7 días con acceso a todas las funciones para nuevos usuarios.",
  },
  {
    question: "¿Puedo cancelar mi suscripción en cualquier momento?",
    answer:
      "Por supuesto. Puedes cancelar o actualizar tu plan en cualquier momento desde tu panel de control.",
  },
  {
    question: "¿Soporta múltiples idiomas?",
    answer: "Sí, CopyGen soporta inglés, español, francés, alemán y más.",
  },
];

export default function Faq() {
  const { darkMode } = useTheme();
  const bgClass = darkMode ? "bg-black" : "bg-white";
  const textClass = darkMode ? "text-white" : "text-gray-800";

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => {
    setActiveIndex(i === activeIndex ? null : i);
  };

  return (
    <section className={`${bgClass} ${textClass} py-16`} id="faq">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Preguntas Frecuentes</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="rounded-md p-5 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              onClick={() => toggle(i)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <span className="text-purple-600 font-bold">
                  {activeIndex === i ? "-" : "+"}
                </span>
              </div>
              <div className={`overflow-hidden transition-all duration-500 ${activeIndex === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="mt-3">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
