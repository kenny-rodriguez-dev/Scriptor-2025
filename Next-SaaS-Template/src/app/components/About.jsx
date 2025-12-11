"use client";

import { useTheme } from "../theme-provider";
import Image from "next/image";

export default function About() {
  const { darkMode } = useTheme();
  const sectionBg = darkMode ? "bg-[#222] text-white" : "bg-white text-gray-800";

  return (
    <section className={`py-20 ${sectionBg}`} id="about">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <Image
            src="/images/about-img.png"
            alt="Acerca de"
            width={500}
            height={400}
            className="object-cover rounded-md shadow"
          />
        </div>
        <div className="md:w-1/2 md:ml-12 mt-8 md:mt-0">
          <h2 className="text-4xl font-bold mb-4">Acerca de CopyGen</h2>
          <p className="mb-6">
            Estamos dedicados a revolucionar la redacción publicitaria con IA.
            Nuestra plataforma te ayuda a crear contenido atractivo en segundos.
          </p>
          <button className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-400 transition">
            Saber más
          </button>
        </div>
      </div>
    </section>
  );
}
