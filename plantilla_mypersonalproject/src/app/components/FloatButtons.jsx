// C:\Users\kenny\Desktop\Proyecto Front-End\plantilla_mypersonalproject\src\app\components\FloatButtons.jsx
"use client";

import { useState, useEffect } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function FloatButtons() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [hideArrow, setHideArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      let scrolled = 0;
      if (docHeight > 0) {
        scrolled = (scrollTop / docHeight) * 100;
      }
      if (scrolled > 100) scrolled = 100;
      setScrollPercent(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollPercent <= 0) {
      setHideArrow(true);
    } else {
      setHideArrow(false);
    }
  }, [scrollPercent]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Radio para el círculo que envuelve la flecha
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  function MinimalArrowUp() {
    // Ícono de flecha en tamaño original (w-3 h-3)
    return (
      <svg
        className="w-3 h-3 stroke-current stroke-2 fill-none"
        viewBox="0 0 14 8"
      >
        <path d="M1 6l6-6 6 6" />
      </svg>
    );
  }

  // Si scrollPercent > 0, se muestra con animación de aparición (slide-up-fade);
  // si no, se oculta con slide-down-fade y sin pointer events.
  const arrowAnimationClass =
    scrollPercent > 0
      ? "animate-slide-up-fade"
      : "animate-slide-down-fade pointer-events-none";

  return (
    <>
      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/1234567890" /* Ajusta tu número */
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-8 top-1/2 transform -translate-y-1/2 
                   bg-green-500 p-2 rounded-full shadow-lg hover:bg-green-600 transition z-50"
        title="WhatsApp"
      >
        <WhatsAppIcon sx={{ fontSize: 40, color: "white" }} />
      </a>

      {/* Botón de flecha hacia arriba */}
      <button
        onClick={scrollToTop}
        className={`fixed right-8 bottom-12 w-14 h-14 
                    flex items-center justify-center bg-transparent 
                    z-50 cursor-pointer transition-all duration-300 ${arrowAnimationClass}`}
        title="Back to top"
      >
        <svg width="60" height="60" className="absolute">
          {/* Círculo de fondo */}
          <circle cx="30" cy="30" r={radius} stroke="#ddd" strokeWidth="2" fill="none" />
          {/* Círculo de progreso (morado) */}
          <circle
            cx="30"
            cy="30"
            r={radius}
            stroke="#7e70fb"
            strokeWidth="2"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.25s" }}
          />
        </svg>
        <div className="text-purple-600">
          <MinimalArrowUp />
        </div>
      </button>
    </>
  );
}
