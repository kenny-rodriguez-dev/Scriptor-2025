"use client";
import { useState } from "react";
import { useTheme } from "../theme-provider";
import Image from "next/image";

export default function VideoSection() {
  const [open, setOpen] = useState(false);
  const { darkMode } = useTheme();
  const bgClass = darkMode ? "bg-black" : "bg-white";
  const textClass = darkMode ? "text-white" : "text-gray-800";

  return (
    <section className={`py-20 ${bgClass} ${textClass}`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Mira CopyGen en Acción</h2>
        <p className="max-w-xl mx-auto mb-8 text-gray-600 dark:text-gray-400">
          Observa lo fácil que es crear contenido atractivo utilizando nuestro redactor de IA.
        </p>
        <div
          className="relative inline-block cursor-pointer group"
          onClick={() => setOpen(true)}
        >
          <Image
            src="/images/video-thumbnail.png"
            alt="Miniatura de video"
            width={640}
            height={360}
            className="rounded-lg shadow-lg group-hover:opacity-90"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 p-4 rounded-full group-hover:bg-white transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#4f46e5"
                viewBox="0 0 24 24"
                className="w-8 h-8"
              >
                <path d="M3 22v-20l18 10-18 10z" />
              </svg>
            </div>
          </div>
        </div>

        {open && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
            <div className="relative bg-white dark:bg-gray-800 w-[90%] max-w-3xl p-6 rounded-md">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-2 right-2 text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-100"
              >
                ✕
              </button>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/D2XYt2x40Xc"
                  title="Demo"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
