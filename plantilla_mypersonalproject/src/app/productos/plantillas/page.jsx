"use client";
import React, { useState, useRef, useEffect } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from "next/link";

// Importa tu lógica de theme:
import { useTheme } from "@/app/theme-provider";

// --------------------------------------
// Nuevo Componente de Acordeón (MODIFICADO para animación exacta del modelo)
// --------------------------------------
const AccordionItem = ({ title, children, darkMode, isOpen, onToggle }) => {
  // Estilos de transición EXACTOS del modelo
  const transitionClasses = `
    overflow-hidden transition-all duration-700 ease-in-out
  `;
  // Clases para estado abierto/cerrado EXACTAS del modelo
  const openClasses = `max-h-60 opacity-100 mt-2`; // Usar max-h-60 como en el modelo
  const closedClasses = `max-h-0 opacity-0`;

  return (
    <div
      className={`
        rounded-md p-3 cursor-pointer
        ${darkMode ? "bg-gray-700" : "bg-gray-50"}
        hover:bg-purple-600/20
        hover:shadow-[0_0_10px_rgba(128,0,128,0.2)]
        ${darkMode ? "hover:text-white" : "hover:text-gray-900"}
        transition-all duration-700
      `}
      onClick={onToggle} // Usar la función onToggle pasada por props
    >
      <div className="flex items-center justify-between">
        <h3
          className={`
            text-base font-semibold
            ${darkMode ? "text-gray-100" : "text-gray-900"}
          `}
        >
          {title}
        </h3>
        <span className="text-purple-600 font-bold">{isOpen ? "-" : "+"}</span>
      </div>
      {/* Contenido con transición del modelo */}
      <div
        // No usar ref o style para max-height, usar clases de Tailwind
        className={`${transitionClasses} ${
          isOpen ? openClasses : closedClasses
        }`}
      >
        <div
          className={`
            text-base pt-1 {/* Added small padding top */}
            ${darkMode ? "text-gray-100" : "text-gray-800"}
          `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

// Componente para gestionar un grupo de acordeones (estado elevado)
const AccordionGroup = ({ items, darkMode }) => {
  const [openIndex, setOpenIndex] = useState(null); // Estado para el índice abierto

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Lógica para abrir/cerrar
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          darkMode={darkMode}
          isOpen={openIndex === index} // Pasar el estado isOpen
          onToggle={() => handleToggle(index)} // Pasar la función de toggle
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

// --------------------------------------
// Página Principal (MODIFICADA)
// --------------------------------------
export default function PlantillasCurriculumPage() {
  const { darkMode } = useTheme();

  // Lógica de fondos alternantes
  const getSectionStyles = (index) => {
    const isEven = index % 2 === 0;
    const backgroundPattern = darkMode
      ? "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)"
      : "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)";
    const baseBackground = isEven
      ? darkMode
        ? "bg-black"
        : "bg-white"
      : darkMode
      ? "bg-gray-900"
      : "bg-gray-100";

    const textColor = darkMode ? "text-white" : "text-gray-800";
    return {
      className: `relative py-16 ${baseBackground} ${textColor}`, // Added default py-16
      style: {
        backgroundImage: backgroundPattern,
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      },
    };
  };

  // --- Definición del contenido de los acordeones para cada tarjeta ---
  // (Se definen aquí para pasarlos al componente AccordionGroup)

  const accordionItemsCard1 = [
    {
      title: "Plantilla de Currículum Optimizada para ATS",
      content: (
        <>
          <p>
            En el competitivo mercado laboral de hoy, asegurar que tu currículum
            esté optimizado para los Sistemas de Seguimiento de Solicitantes
            (ATS) es fundamental.
          </p>
          <p className="mt-2">
            Nuestras plantillas están diseñadas con un formato limpio,
            estructurado y con un diseño de dos columnas.
          </p>
          <p className="mt-2">
            Mejoran la legibilidad y resaltan tus calificaciones, incrementando
            las probabilidades de pasar la preselección.
          </p>
          <p className="mt-2">
            Ideales para industrias como tecnología, finanzas y marketing.
          </p>
        </>
      ),
    },
    {
      title: "Adaptada para Profesionales de Inicio de Carrera",
      content: (
        <>
          <p>
            Diseñada para principiantes y profesionales con 0-3 años de
            experiencia, sin importar el campo.
          </p>
          <p className="mt-2">
            Te ayuda a destacar tus habilidades, logros y experiencias de
            pasantía.
          </p>
        </>
      ),
    },
    {
      title: "Secciones Completamente Personalizables",
      content: (
        <>
          <p>Personaliza secciones como:</p>
          <p className="mt-2">
            <strong>Información de Contacto:</strong> Nombre, teléfono, email y
            LinkedIn.
          </p>
          <p className="mt-2">
            <strong>Perfil:</strong> Un breve resumen de tu carrera.
          </p>
          <p className="mt-2">
            <strong>Experiencia:</strong> Historial laboral con logros
            destacados.
          </p>
          <p className="mt-2">
            <strong>Habilidades:</strong> Competencias técnicas y blandas.
          </p>
          <p className="mt-2">
            <strong>Cursos:</strong> Certificaciones y formaciones.
          </p>
          <p className="mt-2">
            <strong>Educación:</strong> Títulos y datos académicos.
          </p>
          <p className="mt-2">
            <strong>Voluntariado:</strong> Experiencias y contribuciones.
          </p>
        </>
      ),
    },
    {
      title: "Cómo Editar",
      content: (
        <>
          <p>
            <strong>Paso 1:</strong> Haz clic en “Comprar Ahora” para acceder a
            la plantilla.
          </p>
          <p className="mt-2">
            <strong>Paso 2:</strong> Ve a “Archivo”, selecciona “Hacer una
            copia” y obtén tu versión editable.
          </p>
        </>
      ),
    },
  ];

  const accordionItemsCard2 = [
    {
      title: "Plantilla de Currículum Optimizada para ATS",
      content: (
        <>
          <p>
            Asegura que tu currículum esté optimizado para ATS con un formato
            limpio en dos columnas.
          </p>
          <p className="mt-2">
            Resalta tus calificaciones para aumentar las probabilidades de
            preselección.
          </p>
          <p className="mt-2">
            Ideal para industrias como tecnología, finanzas y marketing.
          </p>
        </>
      ),
    },
    {
      title: "Adaptada para Profesionales de Inicio de Carrera",
      content: (
        <p>
          Diseñada para profesionales con 0-3 años de experiencia, facilitando
          la presentación de habilidades y logros.
        </p>
      ),
    },
    {
      title: "Secciones Completamente Personalizables",
      content: (
        <>
          <p>Ajusta secciones esenciales:</p>
          <p className="mt-2">
            <strong>Información de Contacto:</strong> Datos personales.
          </p>
          <p className="mt-2">
            <strong>Perfil:</strong> Resumen profesional.
          </p>
          <p className="mt-2">
            <strong>Experiencia:</strong> Historial laboral.
          </p>
          <p className="mt-2">
            <strong>Habilidades:</strong> Competencias relevantes.
          </p>
          <p className="mt-2">
            <strong>Cursos:</strong> Certificaciones y formaciones.
          </p>
          <p className="mt-2">
            <strong>Educación:</strong> Datos académicos.
          </p>
        </>
      ),
    },
    {
      title: "Cómo Editar",
      content: (
        <>
          <p>
            <strong>Paso 1:</strong> Haz clic en “Comprar Ahora” para obtener la
            plantilla.
          </p>
          <p className="mt-2">
            <strong>Paso 2:</strong> Selecciona “Archivo” y luego “Hacer una
            copia” para editarla.
          </p>
        </>
      ),
    },
  ];

  const accordionItemsCard3 = [
    {
      title: "Plantilla Compatible con ATS para la Industria Tech",
      content: (
        <>
          <p>
            Navega sin problemas por los sistemas ATS con nuestra plantilla de
            una sola columna, diseñada para la industria tecnológica.
          </p>
          <p className="mt-2">
            El formato asegura legibilidad tanto para ATS como para empleadores.
          </p>
        </>
      ),
    },
    {
      title: "Adaptada para Aspirantes a Profesionales de Tecnología",
      content: (
        <p>
          Diseñada para principiantes en tecnología (0-3 años), ideal para
          destacar habilidades en desarrollo, análisis y soporte TI.
        </p>
      ),
    },
    {
      title: "Plantilla de Currículum Completamente Personalizable",
      content: (
        <>
          <p>Personaliza cada sección a tu medida:</p>
          <p className="mt-2">
            <strong>Información de Contacto:</strong> Nombre, email y teléfono.
          </p>
          <p className="mt-2">
            <strong>Experiencia:</strong> Detalla prácticas y trabajos.
          </p>
          <p className="mt-2">
            <strong>Proyectos Clave:</strong> Muestra proyectos destacados.
          </p>
          <p className="mt-2">
            <strong>Logros Destacados:</strong> Resalta tus mayores éxitos.
          </p>
          <p className="mt-2">
            <strong>Educación:</strong> Títulos y certificaciones.
          </p>
          <p className="mt-2">
            <strong>Habilidades Técnicas:</strong> Lenguajes y herramientas.
          </p>
          <p className="mt-2">
            <strong>Extracurriculares:</strong> Actividades adicionales.
          </p>
        </>
      ),
    },
    {
      title: "Cómo Editar",
      content: (
        <>
          <p>
            <strong>Paso 1:</strong> Haz clic en “Comprar Ahora” para acceder a
            la plantilla.
          </p>
          <p className="mt-2">
            <strong>Paso 2:</strong> Ve a “Archivo”, selecciona “Hacer una
            copia” y personaliza.
          </p>
        </>
      ),
    },
  ];

  const accordionItemsCard4 = [
    {
      title: "Plantilla de Currículum Compatible con ATS",
      content: (
        <>
          <p>
            Inicia tu carrera con una plantilla optimizada para ATS en formato
            de una sola columna.
          </p>
          <p className="mt-2">
            Diseñada para superar filtros ATS y causar una fuerte impresión
            inicial.
          </p>
        </>
      ),
    },
    {
      title: "Adecuada para Cualquier Industria",
      content: (
        <p>
          Perfecta para roles en tecnología, finanzas, marketing y más, para
          profesionales con 0-3 años.
        </p>
      ),
    },
    {
      title: "Secciones Completamente Personalizables",
      content: (
        <>
          <p>Personaliza secciones clave:</p>
          <p className="mt-2">
            <strong>Información de Contacto:</strong> Datos básicos.
          </p>
          <p className="mt-2">
            <strong>Perfil:</strong> Resumen de tu carrera.
          </p>
          <p className="mt-2">
            <strong>Habilidades:</strong> Competencias y logros.
          </p>
          <p className="mt-2">
            <strong>Experiencia:</strong> Historial laboral.
          </p>
          <p className="mt-2">
            <strong>Educación:</strong> Formación académica.
          </p>
        </>
      ),
    },
    {
      title: "Cómo Editar Esta Plantilla",
      content: (
        <>
          <p>
            <strong>Paso 1:</strong> Haz clic en “Comprar Ahora” para adquirir
            la plantilla.
          </p>
          <p className="mt-2">
            <strong>Paso 2:</strong> Ve a “Archivo”, “Hacer una copia” y
            personaliza según tu perfil.
          </p>
        </>
      ),
    },
  ];

  const accordionItemsCard5 = [
    {
      title: "Plantilla de Currículum Compatible con ATS para Universitarios",
      content: (
        <>
          <p>
            Diseñada para estudiantes, con formato de una sola columna que
            garantiza compatibilidad ATS.
          </p>
          <p className="mt-2">
            Ideal para pasantías o empleos de medio tiempo.
          </p>
        </>
      ),
    },
    {
      title: "Perfecta para Pasantías y Empleos de Medio Tiempo",
      content: <p>Resalta tus logros académicos y potencial profesional.</p>,
    },
    {
      title: "Secciones Completamente Personalizables",
      content: (
        <>
          <p>Personaliza:</p>
          <p className="mt-2">
            <strong>Información de Contacto:</strong> Datos personales.
          </p>
          <p className="mt-2">
            <strong>Perfil:</strong> Resumen profesional.
          </p>
          <p className="mt-2">
            <strong>Habilidades:</strong> Competencias adquiridas.
          </p>
          <p className="mt-2">
            <strong>Experiencia:</strong> Prácticas y trabajos.
          </p>
          <p className="mt-2">
            <strong>Educación:</strong> Datos académicos.
          </p>
          <p className="mt-2">
            <strong>Voluntariado:</strong> Experiencias de voluntariado.
          </p>
        </>
      ),
    },
    {
      title: "Proceso de Edición Sencillo",
      content: (
        <>
          <p>
            <strong>Paso 1:</strong> Haz clic en “Comprar Ahora” para descargar
            la plantilla.
          </p>
          <p className="mt-2">
            <strong>Paso 2:</strong> Selecciona “Archivo” y luego “Hacer una
            copia” para editar.
          </p>
        </>
      ),
    },
  ];

  const accordionItemsCard6 = [
    {
      title: "Plantilla Compatible con ATS",
      content: (
        <>
          <p>
            Diseñada para superar filtros ATS con un formato de una sola
            columna.
          </p>
          <p className="mt-2">
            Asegura legibilidad y visibilidad en el sector tecnológico.
          </p>
        </>
      ),
    },
    {
      title:
        "Adaptada para Profesionales de Tecnología de Nivel Medio (1-5 años)",
      content: (
        <p>
          Ideal para profesionales con 1-5 años de experiencia, resaltando
          habilidades en desarrollo, consultoría y soporte.
        </p>
      ),
    },
    {
      title: "Secciones Amplias y Personalizables",
      content: (
        <>
          <p>Personaliza cada sección:</p>
          <p className="mt-2">
            <strong>Información de Contacto:</strong> Datos básicos.
          </p>
          <p className="mt-2">
            <strong>Acerca de Ti:</strong> Resumen profesional.
          </p>
          <p className="mt-2">
            <strong>Experiencia:</strong> Trayectoria laboral.
          </p>
          <p className="mt-2">
            <strong>Proyectos Clave:</strong> Ejemplos de proyectos.
          </p>
          <p className="mt-2">
            <strong>Logros Destacados:</strong> Principales éxitos.
          </p>
          <p className="mt-2">
            <strong>Educación:</strong> Formación académica.
          </p>
          <p className="mt-2">
            <strong>Habilidades Clave:</strong> Competencias relevantes.
          </p>
          <p className="mt-2">
            <strong>Conjunto de Habilidades Técnicas:</strong> Lenguajes y
            herramientas.
          </p>
          <p className="mt-2">
            <strong>Extracurriculares:</strong> Actividades adicionales.
          </p>
        </>
      ),
    },
    {
      title: "Cómo Editar",
      content: (
        <>
          <p>
            <strong>Paso 1:</strong> Haz clic en “Comprar Ahora” para asegurar
            tu plantilla.
          </p>
          <p className="mt-2">
            <strong>Paso 2:</strong> Ve a “Archivo”, selecciona “Hacer una
            copia” y personaliza.
          </p>
        </>
      ),
    },
  ];

  const accordionItemsCard7 = [
    {
      title: "Plantillas Compatibles con ATS",
      content: (
        <p>
          Formato de una sola columna ideal para ATS, garantizando legibilidad.
        </p>
      ),
    },
    {
      title: "Adecuado para 4-8 años de Experiencia",
      content: (
        <p>
          Destaca tu progresión profesional para quienes cuentan con 4-8 años de
          experiencia.
        </p>
      ),
    },
    {
      title: "Secciones Personalizables",
      content: (
        <>
          <p>Ajusta secciones como:</p>
          <p className="mt-2">
            <strong>Información de Contacto:</strong> Datos esenciales.
          </p>
          <p className="mt-2">
            <strong>Perfil:</strong> Resumen profesional.
          </p>
          <p className="mt-2">
            <strong>Habilidades:</strong> Competencias clave.
          </p>
          <p className="mt-2">
            <strong>Experiencia:</strong> Historial laboral.
          </p>
          <p className="mt-2">
            <strong>Educación:</strong> Formación académica.
          </p>
        </>
      ),
    },
    {
      title: "Cómo Editar la Plantilla",
      content: (
        <>
          <p>
            <strong>Paso 1:</strong> Haz clic en “Comprar Ahora” para obtener la
            plantilla.
          </p>
          <p className="mt-2">
            <strong>Paso 2:</strong> Ve a “Archivo”, “Hacer una copia” y edita
            según tus necesidades.
          </p>
        </>
      ),
    },
  ];

  const accordionItemsCard8 = [
    {
      title: "Optimizado para Sistemas de Seguimiento de Solicitantes",
      content: (
        <>
          <p>
            Formato de dos columnas visualmente atractivo y optimizado para ATS.
          </p>
          <p className="mt-2">
            Ideal para profesionales en diversas industrias.
          </p>
        </>
      ),
    },
    {
      title: "Perfectamente Adaptado a Experiencia de 4-8 años",
      content: (
        <p>
          Resalta el crecimiento profesional para quienes tienen 4 a 8 años de
          experiencia.
        </p>
      ),
    },
    {
      title: "Secciones Completamente Personalizables",
      content: (
        <>
          <p>Personaliza:</p>
          <p className="mt-2">
            <strong>Información de Contacto:</strong> Datos básicos.
          </p>
          <p className="mt-2">
            <strong>Perfil:</strong> Resumen profesional.
          </p>
          <p className="mt-2">
            <strong>Habilidades:</strong> Competencias y logros.
          </p>
          <p className="mt-2">
            <strong>Experiencia:</strong> Historial laboral.
          </p>
          <p className="mt-2">
            <strong>Educación:</strong> Formación académica.
          </p>
        </>
      ),
    },
    {
      title: "Proceso de Edición Sencillo",
      content: (
        <>
          <p>
            <strong>Paso 1:</strong> Haz clic en “Comprar Ahora” para obtener la
            plantilla.
          </p>
          <p className="mt-2">
            <strong>Paso 2:</strong> Selecciona “Archivo” y luego “Hacer una
            copia” para editar.
          </p>
        </>
      ),
    },
  ];

  const accordionItemsCard9 = [
    {
      title: "Optimizado para Sistemas de Seguimiento de Solicitantes",
      content: (
        <>
          <p>
            Diseñada para profesionales con amplia experiencia, con un formato
            de dos columnas optimizado para ATS.
          </p>
          <p className="mt-2">
            Perfecta para sectores como finanzas, marketing, tecnología, etc.
          </p>
        </>
      ),
    },
    {
      title: "Adaptado para 7+ años de Experiencia",
      content: (
        <p>
          Enfatiza tus logros y conocimientos acumulados en más de 7 años de
          carrera.
        </p>
      ),
    },
    {
      title: "Secciones Amplias y Personalizables",
      content: (
        <>
          <p>Personaliza secciones clave:</p>
          <p className="mt-2">
            <strong>Información de Contacto:</strong> Teléfono, email y
            LinkedIn.
          </p>
          <p className="mt-2">
            <strong>Perfil:</strong> Resumen ejecutivo.
          </p>
          <p className="mt-2">
            <strong>Experiencia:</strong> Trayectoria profesional detallada.
          </p>
          <p className="mt-2">
            <strong>Experiencia/Habilidades:</strong> Competencias clave.
          </p>
          <p className="mt-2">
            <strong>Premios:</strong> Reconocimientos obtenidos.
          </p>
          <p className="mt-2">
            <strong>Educación:</strong> Formación académica y certificaciones.
          </p>
          <p className="mt-2">
            <strong>Idiomas:</strong> Competencias lingüísticas.
          </p>
        </>
      ),
    },
    {
      title: "Guía de Uso",
      content: (
        <>
          <p>
            <strong>Paso 1:</strong> Haz clic en “Comprar Ahora” para adquirir
            la plantilla.
          </p>
          <p className="mt-2">
            <strong>Paso 2:</strong> Ve a “Archivo”, selecciona “Hacer una
            copia” para editarla.
          </p>
        </>
      ),
    },
  ];

  const accordionItemsCard10 = [
    {
      title: "Plantilla de Currículum Compatible con ATS",
      content: (
        <>
          <p>
            Diseñada acorde a las demandas actuales, con un formato de dos
            columnas optimizado para ATS.
          </p>
          <p className="mt-2">
            Ideal para profesionales experimentados en tecnología, finanzas,
            marketing, etc.
          </p>
        </>
      ),
    },
    {
      title: "Idóneo para 7+ años de Experiencia",
      content: (
        <p>
          Adaptada para aquellos con amplia trayectoria, destacando logros y
          experiencia.
        </p>
      ),
    },
    {
      title: "Plantilla de Currículum Personalizable",
      content: (
        <>
          <p>Personaliza secciones clave:</p>
          <p className="mt-2">
            <strong>Información de Contacto:</strong> Datos esenciales.
          </p>
          <p className="mt-2">
            <strong>Perfil:</strong> Resumen de tu carrera.
          </p>
          <p className="mt-2">
            <strong>Experiencia:</strong> Historial y logros profesionales.
          </p>
          <p className="mt-2">
            <strong>Habilidades/Experiencia:</strong> Competencias destacadas.
          </p>
          <p className="mt-2">
            <strong>Premios:</strong> Reconocimientos y premios.
          </p>
          <p className="mt-2">
            <strong>Educación:</strong> Formación y certificaciones.
          </p>
          <p className="mt-2">
            <strong>Idiomas:</strong> Competencias lingüísticas.
          </p>
        </>
      ),
    },
    {
      title: "Guía de Uso",
      content: (
        <>
          <p>
            <strong>Paso 1:</strong> Haz clic en “Comprar Ahora” para adquirir
            la plantilla.
          </p>
          <p className="mt-2">
            <strong>Paso 2:</strong> Ve a “Archivo”, luego “Hacer una copia”
            para contar con tu versión editable.
          </p>
        </>
      ),
    },
  ];

  const accordionItemsHowToUse = [
    {
      title: "Elige Tu Plantilla",
      content: (
        <p>
          Explora nuestra variedad y selecciona la que se ajuste a tu estilo y
          al puesto deseado.
        </p>
      ),
    },
    {
      title: "Descarga/Comprar Ahora",
      content: (
        <p>
          Haz clic en la plantilla elegida para iniciar el proceso de descarga o
          compra.
        </p>
      ),
    },
    {
      title: "Abrir en Google Docs",
      content: (
        <>
          <p>Para editar el archivo, sigue estos pasos:</p>
          <ol className="list-decimal list-inside mt-2 space-y-1">
            <li>
              Copia el documento seleccionando “Archivo” y luego “Hacer una
              copia”.
            </li>
            <li>
              Una vez tengas la copia, modifica el contenido con tus datos.
            </li>
          </ol>
        </>
      ),
    },
    {
      title: "Personaliza",
      content: (
        <p>
          Reemplaza el texto de ejemplo con tu información personal, logros y
          habilidades.
        </p>
      ),
    },
    {
      title: "Formatea",
      content: (
        <p>
          Ajusta fuentes, colores y estilos para que tu currículum tenga un
          toque único.
        </p>
      ),
    },
    {
      title: "Edita y Revisa",
      content: (
        <p>
          Revisa cuidadosamente la ortografía, gramática y formato. Edita según
          sea necesario.
        </p>
      ),
    },
    {
      title: "Guarda y Exporta",
      content: (
        <p>
          Guarda tu currículum en Google Docs y, cuando estés listo, ve a
          “Archivo” &gt; “Descargar” y elige el formato deseado (PDF, Word,
          etc.).
        </p>
      ),
    },
  ];

  // --- Fin Definición Acordeones ---

  return (
    <>
      <Header />
      <main>
        {/* Sección 1: Principal / Hero (Estilo Hero75Section) */}
        <section
          {...getSectionStyles(0)}
          // Sobrescribir className para añadir clases específicas de Hero
          className={`relative flex items-center justify-center min-h-screen ${getSectionStyles(
            0
          ).className.replace("py-16", "")} pt-32`}
          style={getSectionStyles(0).style}
        >
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Plantillas de Currículum
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Diseñadas para el mercado laboral (desde principiantes hasta
              profesionales de nivel senior). Disponibles a un precio accesible.
              Compatibles con sistemas ATS.
            </p>
            <ul className="max-w-4xl mx-auto mt-8 space-y-3 text-left inline-block">
              <li className="flex items-center">
                <CheckCircleIcon
                  className="mr-2 flex-shrink-0"
                  style={{ color: darkMode ? "#fff" : "#000" }}
                />
                <span>
                  <strong>Plantillas Compatibles con ATS:</strong> Optimizadas
                  para que tu currículum sea notado por los reclutadores.
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon
                  className="mr-2 flex-shrink-0"
                  style={{ color: darkMode ? "#fff" : "#000" }}
                />
                <span>
                  <strong>Diseño Limpio y Elegante:</strong> Diseños
                  profesionalmente creados para causar una impresión duradera.
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon
                  className="mr-2 flex-shrink-0"
                  style={{ color: darkMode ? "#fff" : "#000" }}
                />
                <span>
                  <strong>Fácil de Editar:</strong> Personaliza nuestras
                  plantillas con facilidad para alinearlas con tu trayectoria
                  profesional.
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon
                  className="mr-2 flex-shrink-0"
                  style={{ color: darkMode ? "#fff" : "#000" }}
                />
                <span>
                  <strong>
                    Adecuadas para Todas las Etapas de la Carrera:
                  </strong>{" "}
                  Desde principiantes hasta profesionales senior, encuentra la
                  plantilla perfecta.
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon
                  className="mr-2 flex-shrink-0"
                  style={{ color: darkMode ? "#fff" : "#000" }}
                />
                <span>
                  <strong>Impulsa Tu Búsqueda de Empleo:</strong> Aumenta tus
                  oportunidades con plantillas elaboradas por expertos de
                  ResumeGuru.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Sección 2: Pack de Plantillas (Estilo OrderSection) */}
        <section {...getSectionStyles(1)}>
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold">
                ¿Quieres más de una?
              </h2>
              <p className="text-lg md:text-xl mt-2">
                ¡Compra nuestro Pack de Plantillas de Currículum hoy mismo!
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
              {/* Tarjeta 1 */}
              <div className="relative p-6 border border-gray-200 dark:border-gray-700 rounded-lg flex flex-col flex-1 bg-white dark:bg-gray-800 hover:shadow-lg transition text-black dark:text-white">
                <div className="absolute top-3 right-[-15px] transform rotate-45 bg-purple-600 text-white text-xs font-semibold px-6 py-1 z-10 shadow-md">
                  Mejor Valor
                </div>
                <h2 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white">
                  Paquete de 40+ Plantillas de Currículum
                </h2>
                <p className="text-3xl font-bold text-purple-600 mb-4 text-center">
                  $699
                </p>
                <div className="flex-1 space-y-3 mb-4 text-sm text-gray-700 dark:text-gray-300">
                  <p>
                    40+ Plantillas de Currículum Compatibles con ATS:
                    Optimizadas para el mercado laboral, asegurando que tu
                    currículum sea notado por los reclutadores.
                  </p>
                  <hr className="my-3 border-gray-300 dark:border-gray-600" />
                  <p>
                    ¡Equivale a $17.5 por plantilla, una oferta inmejorable!
                  </p>
                </div>
                <Link href="#" className="block w-full mt-auto">
                  <button className="bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 hover:shadow-lg transition cursor-pointer w-full font-semibold">
                    Ordenar Ahora
                  </button>
                </Link>
                <p className="text-xs text-center mt-3 text-gray-600 dark:text-gray-400">
                  95% de Satisfacción de los Clientes
                </p>
              </div>
              {/* Tarjeta 2 */}
              <div className="relative p-6 border border-gray-200 dark:border-gray-700 rounded-lg flex flex-col flex-1 bg-white dark:bg-gray-800 hover:shadow-lg transition text-black dark:text-white">
                <h2 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white">
                  Paquete de 10+ Plantillas de Currículum
                </h2>
                <p className="text-3xl font-bold text-purple-600 mb-4 text-center">
                  $499
                </p>
                <div className="flex-1 space-y-3 mb-4 text-sm text-gray-700 dark:text-gray-300">
                  <p>
                    10+ Plantillas de Currículum Compatibles con ATS: Para
                    ayudarte a comenzar tu búsqueda de empleo y sorprender a los
                    reclutadores.
                  </p>
                  <hr className="my-3 border-gray-300 dark:border-gray-600" />
                  <p>¡Equivale a $50 por plantilla, un verdadero chollo!</p>
                </div>
                <Link href="#" className="block w-full mt-auto">
                  <button className="bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 hover:shadow-lg transition cursor-pointer w-full font-semibold">
                    Ordenar Ahora
                  </button>
                </Link>
                <p className="text-xs text-center mt-3 text-gray-600 dark:text-gray-400">
                  95% de Satisfacción de los Clientes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 3: Plantillas de Currículum Compatibles con ATS */}
        <section {...getSectionStyles(2)}>
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Plantillas de Currículum Compatibles con ATS
            </h2>
            <div className="space-y-12">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                {/* Group 1 */}
                {/* MODIFICADO: Cambiado max-w-lg a max-w-xl */}
                <div
                  className={`p-6 border rounded-lg ${
                    darkMode
                      ? "border-gray-700 bg-gray-800"
                      : "border-gray-200 bg-white"
                  } shadow-sm max-w-xl w-full`}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-center">
                    Currículum para Principiantes
                  </h3>
                  <div className="mb-4 flex justify-center">
                    <Link
                      href="#"
                      className="pointer-events-none cursor-default"
                    >
                      <img
                        src="https://resumeguru.in/wp-content/uploads/2023/09/Entry-Level-Resume-for-Graduates-Final-1-725x1024.png"
                        alt="Currículum para Principiantes"
                        className="w-full h-auto rounded"
                        style={{ maxWidth: "450px" }}
                      />
                    </Link>
                  </div>
                  <AccordionGroup
                    items={accordionItemsCard1}
                    darkMode={darkMode}
                  />
                  <div className="mt-6 flex items-center justify-center gap-4">
                    <span className="font-semibold text-lg">$10</span>
                    <Link href="#">
                      <button className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
                        Comprar Ahora
                      </button>
                    </Link>
                  </div>
                </div>
                {/* Group 2 */}
                {/* MODIFICADO: Cambiado max-w-lg a max-w-xl */}
                <div
                  className={`p-6 border rounded-lg ${
                    darkMode
                      ? "border-gray-700 bg-gray-800"
                      : "border-gray-200 bg-white"
                  } shadow-sm max-w-xl w-full`}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-center">
                    Currículum de Dos Columnas para Principiantes
                  </h3>
                  <div className="mb-4 flex justify-center">
                    <Link
                      href="#"
                      className="pointer-events-none cursor-default"
                    >
                      <img
                        src="https://resumeguru.in/wp-content/uploads/2023/09/Entry-Level-Resume-for-Graduates-Final-1-725x1024.png"
                        alt="Currículum de Dos Columnas para Principiantes"
                        className="w-full h-auto rounded"
                        style={{ maxWidth: "450px" }}
                      />
                    </Link>
                  </div>
                  <AccordionGroup
                    items={accordionItemsCard2}
                    darkMode={darkMode}
                  />
                  <div className="mt-6 flex items-center justify-center gap-4">
                    <span className="font-semibold text-lg">$10</span>
                    <Link href="#">
                      <button className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
                        Comprar Ahora
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                {/* Group 3 */}
                {/* MODIFICADO: Cambiado max-w-lg a max-w-xl */}
                <div
                  className={`p-6 border rounded-lg ${
                    darkMode
                      ? "border-gray-700 bg-gray-800"
                      : "border-gray-200 bg-white"
                  } shadow-sm max-w-xl w-full`}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-center">
                    Currículum Sencillo para Principiantes en Tecnología
                  </h3>
                  <div className="mb-4 flex justify-center">
                    <Link
                      href="#"
                      className="pointer-events-none cursor-default"
                    >
                      <img
                        src="https://resumeguru.in/wp-content/uploads/2023/09/Entry-Level-Resume-for-Graduates-Final-1-725x1024.png"
                        alt="Currículum Sencillo para Principiantes en Tecnología"
                        className="w-full h-auto rounded"
                        style={{ maxWidth: "450px" }}
                      />
                    </Link>
                  </div>
                  <AccordionGroup
                    items={accordionItemsCard3}
                    darkMode={darkMode}
                  />
                  <div className="mt-6 flex items-center justify-center gap-4">
                    <span className="font-semibold text-lg">$10</span>
                    <Link href="#">
                      <button className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
                        Comprar Ahora
                      </button>
                    </Link>
                  </div>
                </div>
                {/* Group 4 */}
                {/* MODIFICADO: Cambiado max-w-lg a max-w-xl */}
                <div
                  className={`p-6 border rounded-lg ${
                    darkMode
                      ? "border-gray-700 bg-gray-800"
                      : "border-gray-200 bg-white"
                  } shadow-sm max-w-xl w-full`}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-center">
                    Currículum Profesional para Principiantes
                  </h3>
                  <div className="mb-4 flex justify-center">
                    <Link
                      href="#"
                      className="pointer-events-none cursor-default"
                    >
                      <img
                        src="https://resumeguru.in/wp-content/uploads/2023/09/Entry-Level-Resume-for-Graduates-Final-1-725x1024.png"
                        alt="Currículum Profesional para Principiantes"
                        className="w-full h-auto rounded"
                        style={{ maxWidth: "450px" }}
                      />
                    </Link>
                  </div>
                  <AccordionGroup
                    items={accordionItemsCard4}
                    darkMode={darkMode}
                  />
                  <div className="mt-6 flex items-center justify-center gap-4">
                    <span className="font-semibold text-lg">$10</span>
                    <Link href="#">
                      <button className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
                        Comprar Ahora
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                {/* Group 5 */}
                {/* MODIFICADO: Cambiado max-w-lg a max-w-xl */}
                <div
                  className={`p-6 border rounded-lg ${
                    darkMode
                      ? "border-gray-700 bg-gray-800"
                      : "border-gray-200 bg-white"
                  } shadow-sm max-w-xl w-full`}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-center">
                    Currículum para Estudiantes Universitarios
                  </h3>
                  <div className="mb-4 flex justify-center">
                    <Link
                      href="#"
                      className="pointer-events-none cursor-default"
                    >
                      <img
                        src="https://resumeguru.in/wp-content/uploads/2023/09/Entry-Level-Resume-for-Graduates-Final-1-725x1024.png"
                        alt="Currículum para Estudiantes Universitarios"
                        className="w-full h-auto rounded"
                        style={{ maxWidth: "450px" }}
                      />
                    </Link>
                  </div>
                  <AccordionGroup
                    items={accordionItemsCard5}
                    darkMode={darkMode}
                  />
                  <div className="mt-6 flex items-center justify-center gap-4">
                    <span className="font-semibold text-lg">$10</span>
                    <Link href="#">
                      <button className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
                        Comprar Ahora
                      </button>
                    </Link>
                  </div>
                </div>
                {/* Group 6 */}
                {/* MODIFICADO: Cambiado max-w-lg a max-w-xl */}
                <div
                  className={`p-6 border rounded-lg ${
                    darkMode
                      ? "border-gray-700 bg-gray-800"
                      : "border-gray-200 bg-white"
                  } shadow-sm max-w-xl w-full`}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-center">
                    Currículum para Profesionales de Tecnología
                  </h3>
                  <div className="mb-4 flex justify-center">
                    <Link
                      href="#"
                      className="pointer-events-none cursor-default"
                    >
                      <img
                        src="https://resumeguru.in/wp-content/uploads/2023/09/Entry-Level-Resume-for-Graduates-Final-1-725x1024.png"
                        alt="Currículum para Profesionales de Tecnología"
                        className="w-full h-auto rounded"
                        style={{ maxWidth: "450px" }}
                      />
                    </Link>
                  </div>
                  <AccordionGroup
                    items={accordionItemsCard6}
                    darkMode={darkMode}
                  />
                  <div className="mt-6 flex items-center justify-center gap-4">
                    <span className="font-semibold text-lg">$10</span>
                    <Link href="#">
                      <button className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
                        Comprar Ahora
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Row 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                {/* Group 7 */}
                {/* MODIFICADO: Cambiado max-w-lg a max-w-xl */}
                <div
                  className={`p-6 border rounded-lg ${
                    darkMode
                      ? "border-gray-700 bg-gray-800"
                      : "border-gray-200 bg-white"
                  } shadow-sm max-w-xl w-full`}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-center">
                    Currículum de Una Columna para Profesionales de Nivel Medio
                  </h3>
                  <div className="mb-4 flex justify-center">
                    <Link
                      href="#"
                      className="pointer-events-none cursor-default"
                    >
                      <img
                        src="https://resumeguru.in/wp-content/uploads/2023/09/Entry-Level-Resume-for-Graduates-Final-1-725x1024.png"
                        alt="Currículum de Una Columna para Profesionales de Nivel Medio"
                        className="w-full h-auto rounded"
                        style={{ maxWidth: "450px" }}
                      />
                    </Link>
                  </div>
                  <AccordionGroup
                    items={accordionItemsCard7}
                    darkMode={darkMode}
                  />
                  <div className="mt-6 flex items-center justify-center gap-4">
                    <span className="font-semibold text-lg">$10</span>
                    <Link href="#">
                      <button className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
                        Comprar Ahora
                      </button>
                    </Link>
                  </div>
                </div>
                {/* Group 8 */}
                {/* MODIFICADO: Cambiado max-w-lg a max-w-xl */}
                <div
                  className={`p-6 border rounded-lg ${
                    darkMode
                      ? "border-gray-700 bg-gray-800"
                      : "border-gray-200 bg-white"
                  } shadow-sm max-w-xl w-full`}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-center">
                    Currículum de Dos Columnas para Profesionales de Nivel Medio
                  </h3>
                  <div className="mb-4 flex justify-center">
                    <Link
                      href="#"
                      className="pointer-events-none cursor-default"
                    >
                      <img
                        src="https://resumeguru.in/wp-content/uploads/2023/09/Entry-Level-Resume-for-Graduates-Final-1-725x1024.png"
                        alt="Currículum de Dos Columnas para Profesionales de Nivel Medio"
                        className="w-full h-auto rounded"
                        style={{ maxWidth: "450px" }}
                      />
                    </Link>
                  </div>
                  <AccordionGroup
                    items={accordionItemsCard8}
                    darkMode={darkMode}
                  />
                  <div className="mt-6 flex items-center justify-center gap-4">
                    <span className="font-semibold text-lg">$10</span>
                    <Link href="#">
                      <button className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
                        Comprar Ahora
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Row 5 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                {/* Group 9 */}
                {/* MODIFICADO: Cambiado max-w-lg a max-w-xl */}
                <div
                  className={`p-6 border rounded-lg ${
                    darkMode
                      ? "border-gray-700 bg-gray-800"
                      : "border-gray-200 bg-white"
                  } shadow-sm max-w-xl w-full`}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-center">
                    Currículum de Dos Columnas para Profesionales Experimentados
                  </h3>
                  <div className="mb-4 flex justify-center">
                    <Link
                      href="#"
                      className="pointer-events-none cursor-default"
                    >
                      <img
                        src="https://resumeguru.in/wp-content/uploads/2023/09/Entry-Level-Resume-for-Graduates-Final-1-725x1024.png"
                        alt="Currículum de Dos Columnas para Profesionales Experimentados"
                        className="w-full h-auto rounded"
                        style={{ maxWidth: "450px" }}
                      />
                    </Link>
                  </div>
                  <AccordionGroup
                    items={accordionItemsCard9}
                    darkMode={darkMode}
                  />
                  <div className="mt-6 flex items-center justify-center gap-4">
                    <span className="font-semibold text-lg">$10</span>
                    <Link href="#">
                      <button className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
                        Comprar Ahora
                      </button>
                    </Link>
                  </div>
                </div>
                {/* Group 10 */}
                {/* MODIFICADO: Cambiado max-w-lg a max-w-xl */}
                <div
                  className={`p-6 border rounded-lg ${
                    darkMode
                      ? "border-gray-700 bg-gray-800"
                      : "border-gray-200 bg-white"
                  } shadow-sm max-w-xl w-full`}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-center">
                    Currículum Elegante de Dos Columnas para Profesionales
                    Experimentados
                  </h3>
                  <div className="mb-4 flex justify-center">
                    <Link
                      href="#"
                      className="pointer-events-none cursor-default"
                    >
                      <img
                        src="https://resumeguru.in/wp-content/uploads/2023/09/Entry-Level-Resume-for-Graduates-Final-1-725x1024.png"
                        alt="Currículum Elegante de Dos Columnas para Profesionales Experimentados"
                        className="w-full h-auto rounded"
                        style={{ maxWidth: "450px" }}
                      />
                    </Link>
                  </div>
                  <AccordionGroup
                    items={accordionItemsCard10}
                    darkMode={darkMode}
                  />
                  <div className="mt-6 flex items-center justify-center gap-4">
                    <span className="font-semibold text-lg">$10</span>
                    <Link href="#">
                      <button className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
                        Comprar Ahora
                      </button>
                    </Link>
                  </div>
                </div>
              </div>{" "}
              {/* Fin Row 5 */}
            </div>{" "}
            {/* Fin space-y-12 */}
          </div>{" "}
          {/* Fin container */}
        </section>

        {/* Sección 4: Cómo Usar Nuestras Plantillas */}
        <section {...getSectionStyles(3)}>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Izquierda: Acordeones */}
              <div className="md:order-1">
                <div className="text-center md:text-left mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    🎯 Cómo Usar Nuestras Plantillas
                  </h2>
                </div>
                <p className="text-center md:text-left max-w-2xl mx-auto md:mx-0 mb-8">
                  Crear un currículum profesional nunca ha sido tan fácil. Sigue
                  estos simples pasos:
                </p>
                <AccordionGroup
                  items={accordionItemsHowToUse}
                  darkMode={darkMode}
                />
              </div>
              {/* Derecha: Imagen */}
              <div className="flex justify-center items-center md:order-2">
                <Link href="#" className="pointer-events-none cursor-default">
                  <img
                    src="https://resumeguru.in/wp-content/uploads/2023/09/Untitled-design-27-1024x1024.png"
                    alt="Cómo Usar Nuestras Plantillas"
                    className="w-full rounded-lg shadow-md"
                    style={{ maxWidth: "550px", height: "auto" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
