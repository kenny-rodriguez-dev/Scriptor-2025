"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../theme-provider";
import { Facebook, LinkedIn, WhatsApp, Instagram, Copyright } from '@mui/icons-material';
import XIcon from '@mui/icons-material/X'; // Reemplaza si usas otro icono para X

export default function Footer() {
  const { darkMode } = useTheme();

  const baseTextStyle = "text-base";

  const footerClasses = darkMode
    ? "bg-black text-white"
    : "bg-white text-gray-800";

  const hoverClass = "hover:text-purple-700";
  const iconStyle = { fontSize: '2rem' };

  return (
    <footer className={`${footerClasses} ${baseTextStyle} py-8`}>
      {/* Contenedor con padding horizontal aumentado en pantallas grandes y extra grandes */}
      <div className="container mx-auto px-6 lg:px-16 xl:px-24">
        {/* Grid ajustado a 5 columnas en md+ para mantener simetría */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">

          {/* Col 1: Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4 cursor-pointer" aria-label="Homepage">
              <Image
                src="/scriptor.png"
                alt="Logo del sitio"
                width={120}
                height={32}
                priority
                className="object-contain h-8 w-auto"
              />
            </Link>
            { /* <p className={`${baseTextStyle} leading-relaxed mb-4`}>
              Texto de ejemplo 1.<br />
              Texto de ejemplo 2.<br />
              Texto de ejemplo 3.
            </p> */}
          </div>

          {/* Col 2: Servicios */}
          <div>
            <Link href="#" className={`block mb-2 transition-colors duration-300 ${hoverClass}`}>
              <h3 className={`font-bold ${baseTextStyle}`}>Servicios</h3>
            </Link>
            <ul className={`space-y-1 ${baseTextStyle}`}>
              <li><Link href="/servicios/redaccion-curriculums-ats" className={`transition-colors duration-300 ${hoverClass}`}>Redacción de currículums para ATS</Link></li>
              <li><Link href="/servicios/redaccion-perfiles-linkedin" className={`transition-colors duration-300 ${hoverClass}`}>Redacción de perfiles de LinkedIn</Link></li>
              <li><Link href="/servicios/redaccion-cartas-presentacion" className={`transition-colors duration-300 ${hoverClass}`}>Redacción de cartas de presentación</Link></li>
              <li><Link href="/servicios/redaccion-curriculums-ejecutivos" className={`transition-colors duration-300 ${hoverClass}`}>Redacción de currículums ejecutivos</Link></li>
            </ul>
          </div>

          {/* Col 3: Precios y Testimonios */}
          <div>
            {/* Título "Precios" */}
            <Link href="#" className={`block mb-2 transition-colors duration-300 ${hoverClass}`}>
              <h3 className={`font-bold ${baseTextStyle}`}>Precios</h3>
            </Link>
            <ul className={`space-y-1 ${baseTextStyle} mb-4`}>
              {/* Links de precios aquí si existen */}
            </ul>

            {/* Título Testimonios y muestras */}
            <Link href="#" className={`block mb-2 transition-colors duration-300 ${hoverClass}`}>
              <h3 className={`font-bold ${baseTextStyle}`}>Testimonios y muestras</h3>
            </Link>
            <ul className={`space-y-1 ${baseTextStyle}`}>
              <li><Link href="/testimonios/ejemplos-curriculum" className={`transition-colors duration-300 ${hoverClass}`}>Ejemplos de redacción de currículum</Link></li>
              <li><Link href="/testimonios/casos-estudio" className={`transition-colors duration-300 ${hoverClass}`}>Casos de estudio</Link></li>
              <li><Link href="/testimonios" className={`transition-colors duration-300 ${hoverClass}`}>Testimonios</Link></li>
            </ul>
          </div>

          {/* Col 4: Productos */}
          <div>
            <Link href="#" className={`block mb-2 transition-colors duration-300 ${hoverClass}`}>
              <h3 className={`font-bold ${baseTextStyle}`}>Productos</h3>
            </Link>
            <ul className={`space-y-1 ${baseTextStyle}`}>
              <li><Link href="/productos/plantillas-curriculum" className={`transition-colors duration-300 ${hoverClass}`}>Plantillas de currículum</Link></li>
              <li><Link href="/productos/kit-linkedin" className={`transition-colors duration-300 ${hoverClass}`}>Kit de herramientas de LinkedIn</Link></li>
            </ul>
          </div>

          {/* Col 5: Recursos */}
          <div>
            <Link href="#" className={`block mb-2 transition-colors duration-300 ${hoverClass}`}>
              <h3 className={`font-bold ${baseTextStyle}`}>Recursos</h3>
            </Link>
            <ul className={`space-y-1 ${baseTextStyle}`}>
              <li><Link href="/recursos/blog" className={`transition-colors duration-300 ${hoverClass}`}>Blog</Link></li>
              <li><Link href="/recursos/faq" className={`transition-colors duration-300 ${hoverClass}`}>Preguntas frecuentes (FAQ)</Link></li>
              <li><Link href="/recursos/busqueda-empleo" className={`transition-colors duration-300 ${hoverClass}`}>Recursos para quienes buscan empleo</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Row: Copyright and Social Icons */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className={`flex items-center mb-4 md:mb-0 ${baseTextStyle}`}>
            <Copyright style={{ fontSize: '1rem' }} className="mr-1" />
            <span>{new Date().getFullYear()} Scriptor. Todos los derechos reservados.</span>
          </div>
          <div className="flex space-x-4">
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook style={{ ...iconStyle, color: "#1877F2" }} />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)">
              <XIcon style={{ ...iconStyle, color: darkMode ? "#FFFFFF" : "#000000" }} />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedIn style={{ ...iconStyle, color: "#0A66C2" }} />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <WhatsApp style={{ ...iconStyle, color: "#25D366" }} />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram style={{ ...iconStyle, color: "#E4405F" }} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
