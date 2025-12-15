"use client";
import { useTheme } from "../theme-provider";
import Image from "next/image";

const featuresData = [
  {
    title: "Redacción con IA",
    desc: "Genera contenido enfocado en la conversión al instante.",
    icon: "/images/icons/ai.png",
  },
  {
    title: "Optimización SEO",
    desc: "Impulsa más tráfico orgánico con artículos optimizados para motores de búsqueda.",
    icon: "/images/icons/seo.png",
  },
  {
    title: "Redes Sociales",
    desc: "Interactúa con tu audiencia con publicaciones personalizadas e ideas de contenido.",
    icon: "/images/icons/social.png",
  },
  {
    title: "Analíticas",
    desc: "Monitorea métricas de rendimiento y optimiza tu contenido para obtener resultados óptimos.",
    icon: "/images/icons/analytics.png",
  },
];

export default function Features() {
  const { darkMode } = useTheme();
  const bgClass = darkMode ? "bg-black" : "bg-white";
  const textClass = darkMode ? "text-white" : "text-gray-800";

  return (
    <section className={`py-20 ${bgClass} ${textClass}`} id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Características Principales</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Descubre lo que CopyGen puede hacer por ti
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {featuresData.map((f, i) => (
            <div
              key={i}
              className={`p-6 rounded-lg shadow hover:shadow-md transition ${darkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <div className="flex items-center justify-center mb-4">
                <Image
                  src={f.icon}
                  alt={f.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{f.title}</h3>
              <p className="text-sm text-center">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
