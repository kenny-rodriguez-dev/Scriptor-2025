"use client";
import { useTheme } from "../theme-provider";
import Image from "next/image";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Gerente de Marketing",
    content:
      "CopyGen mejoró el rendimiento de nuestros anuncios en un 200%. ¡Es una herramienta increíble para una redacción rápida y efectiva!",
    avatar: "/images/avatars/jane.jpg",
  },
  {
    name: "John Smith",
    role: "Fundador de Startup",
    content:
      "Antes pasábamos horas redactando campañas de email. Ahora solo nos toma minutos con CopyGen.",
    avatar: "/images/avatars/john.jpg",
  },
  {
    name: "Emily Roberts",
    role: "Redactor de Contenido",
    content:
      "Como escritor, al principio era escéptico. Pero CopyGen me ayuda a generar ideas y me ahorra muchísimo tiempo.",
    avatar: "/images/avatars/emily.jpg",
  },
];

export default function Testimonials() {
  const { darkMode } = useTheme();
  const bgClass = darkMode ? "bg-black" : "bg-white";
  const textClass = darkMode ? "text-white" : "text-gray-800";

  return (
    <section className={`py-20 ${bgClass} ${textClass}`} id="testimonials">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`p-6 rounded-md shadow hover:shadow-md transition ${darkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <p className="italic mb-4">“{t.content}”</p>
              <div className="flex items-center">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <span className="text-sm">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
