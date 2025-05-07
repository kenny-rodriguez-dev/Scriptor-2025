"use client";
import React, { useState, useRef, useEffect } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { InputAdornment, TextField, IconButton } from '@mui/material'; // Import TextField, InputAdornment, IconButton
import SearchIcon from '@mui/icons-material/Search'; // Import SearchIcon

// Importa tu lógica de theme:
import { useTheme } from "@/app/theme-provider";

const commonHref = "/recursos/blog/detail"; // Placeholder href

// Definición de los artículos (posts) con imágenes alternadas
const posts = [
  {
    id: 1,
    title: "Preguntas de Entrevista para Administrador de Salesforce",
    subtitle: "Más de 70 Preguntas y Respuestas para Entrevistas de Administrador de Salesforce",
    description:
      "Domina las preguntas de entrevista para Administrador de Salesforce con nuestra guía detallada que abarca temas técnicos, escenarios, gestión de datos, seguridad, integración y aspectos conductuales.",
    date: "20 de febrero de 2025",
    category: "Carrera y Búsqueda de Empleo",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-7-1.jpg", // Image 1
  },
  {
    id: 2,
    title: "Cómo Finalizar un Currículum",
    subtitle: "5 Estrategias Comprobadas para Finalizar un Currículum como un Profesional",
    description:
      "Imagina ver una película que te deja con un final ambiguo e inconcluso. Ahora, imagina que tu currículum termina de manera igualmente poco clara. Un final débil o ambiguo puede hacer que los empleadores duden de tus calificaciones y preparación.",
    date: "19 de febrero de 2025",
    category: "Currículum",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-6.jpg", // Image 2
  },
  {
    id: 3,
    title: "Preguntas de Entrevista sobre Farmacovigilancia",
    subtitle: "Más de 60 Preguntas y Respuestas para Entrevistas en Farmacovigilancia",
    description:
      "Domina las preguntas de entrevista en farmacovigilancia con nuestra guía detallada que presenta respuestas de expertos, consejos y estrategias para sobresalir en entrevistas de seguridad de medicamentos.",
    date: "19 de febrero de 2025",
    category: "Carrera y Búsqueda de Empleo",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-7-1.jpg", // Image 1
  },
  {
    id: 4,
    title: "Ejemplo de Auto-Presentación para Entrevista de Trabajo para Recién Graduados",
    subtitle: "Ejemplo de Auto-Presentación para Entrevista de Trabajo: Los Mejores Ejemplos y Consejos para 2025",
    description:
      "El estrés de una entrevista puede estar relacionado tanto con el proceso como con la forma de presentarte. Una introducción fuerte puede romper el hielo y aumentar significativamente tus oportunidades.",
    date: "18 de febrero de 2025",
    category: "Carrera y Búsqueda de Empleo",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-6.jpg", // Image 2
  },
  {
    id: 5,
    title: "Los Mejores Servicios de Redacción de Currículums en India",
    subtitle: "Los Mejores Servicios de Redacción de Currículums en India | ResumeGuru India",
    description:
      "Descubre los mejores servicios de redacción de currículums en India con ResumeGuru. Obtén un currículum optimizado para ATS, redacción experta, optimización de LinkedIn, asistencia para cartas de presentación y soporte personalizado en la búsqueda de empleo. Más de 2000 clientes satisfechos y una calificación de 4.9+ en Google respaldan nuestra excelencia.",
    date: "18 de febrero de 2025",
    category: "Currículum",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-7-1.jpg", // Image 1
  },
  {
    id: 6,
    title: "Tipos de Preguntas de Entrevista",
    subtitle: "La Mejor Guía sobre Tipos de Preguntas de Entrevista (Más de 70 Ejemplos)",
    description:
      "Domina los diferentes tipos de preguntas de entrevista con consejos de expertos y ejemplos reales. Aumenta tu confianza, triunfa en las entrevistas y consigue el empleo de tus sueños.",
    date: "15 de febrero de 2025",
    category: "Carrera y Búsqueda de Empleo",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-6.jpg", // Image 2
  },
   {
    id: 7,
    title: "Resumen en el Currículum para Recién Graduados",
    subtitle: "¿Cómo Escribir un Resumen Ganador en tu Currículum? (Más de 10 Ejemplos)",
    description:
      "Si estás escribiendo tu currículum por primera vez, probablemente comienzas con un objetivo profesional. Sin embargo, un resumen de currículum es diferente: se enfoca en destacar lo mejor de tu perfil.",
    date: "13 de febrero de 2025",
    category: "Currículum",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-7-1.jpg", // Image 1
  },
  {
    id: 8,
    title: "Más de 70 Preguntas y Respuestas Definitivas para Entrevistas de Cuentas a Pagar",
    subtitle: "Más de 70 Preguntas y Respuestas para Entrevistas de Cuentas a Pagar",
    description:
      "Destaca en tu entrevista para cuentas a pagar con nuestra guía completa. Explora consejos de expertos y estrategias para triunfar.",
    date: "13 de febrero de 2025",
    category: "Carrera y Búsqueda de Empleo",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-6.jpg", // Image 2
  },
    {
    id: 9,
    title: "¿Tienes Alguna Pregunta para Mí? en la Entrevista",
    subtitle: "Cómo Manejar el Momento de la Pregunta '¿Tienes Alguna Pregunta para Mí?'",
    description:
      "Escena 1: Entrevistador: Eso es todo de mi parte. X, ¿tienes alguna pregunta para mí? X: No, gracias. Escena 2: Entrevistador: Eso es todo de mi parte. X, ¿tienes alguna pregunta para mí? X: Sí, tengo algunas preguntas.",
    date: "12 de febrero de 2025",
    category: "Carrera y Búsqueda de Empleo",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-7-1.jpg", // Image 1
  },
  {
    id: 10,
    title: "Preguntas de Entrevista para Estudiantes y Recién Graduados",
    subtitle: "Más de 30 Preguntas Definitivas para Estudiantes y Recién Graduados",
    description:
      "Prepárate para tu primera entrevista de trabajo con esta guía que incluye las preguntas más comunes, respuestas estructuradas y consejos de expertos para asegurar tu primer empleo.",
    date: "12 de febrero de 2025",
    category: "Carrera y Búsqueda de Empleo",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-6.jpg", // Image 2
  },
  {
    id: 11,
    title: "Cómo Escribir una Carta de Presentación Efectiva",
    subtitle: "Consejos y Ejemplos para Destacar en tu Carta de Presentación",
    description:
      "Aprende a redactar una carta de presentación que capte la atención de los reclutadores y resalte tus habilidades.",
    date: "10 de febrero de 2025",
    category: "Carta de Presentación",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-7-1.jpg", // Image 1
  },
  {
    id: 12,
    title: "Optimiza tu Perfil de LinkedIn para el Éxito",
    subtitle: "Estrategias y Consejos para Potenciar tu Red Profesional",
    description:
      "Descubre cómo mejorar tu perfil de LinkedIn y atraer oportunidades laborales de manera efectiva.",
    date: "9 de febrero de 2025",
    category: "LinkedIn",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-6.jpg", // Image 2
  },
  {
    id: 13,
    title: "Historias de Éxito: De Desempleado a Profesional Destacado",
    subtitle: "Testimonios e Inspiración para Transformar tu Carrera",
    description:
      "Lee inspiradoras historias de personas que han revolucionado su vida profesional y alcanzado el éxito.",
    date: "8 de febrero de 2025",
    category: "Historias de Éxito",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-7-1.jpg", // Image 1
  },
  {
    id: 14,
    title: "Web Stories: Las Tendencias del Mercado Laboral",
    subtitle: "Narrativas Visuales sobre el Futuro del Empleo",
    description:
      "Explora las últimas tendencias en el mercado laboral a través de historias visuales y dinámicas.",
    date: "7 de febrero de 2025",
    category: "Web Stories",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-6.jpg", // Image 2
  },
  // ----- NUEVOS POSTS PARA CURRÍCULUM (IDs 15-19) -----
  {
    id: 15,
    title: "Otro Artículo sobre Currículum",
    subtitle: "5 Estrategias Adicionales para Finalizar un Currículum",
    description:
      "Explora más técnicas para asegurarte de que tu currículum deje una impresión duradera y profesional en los reclutadores.",
    date: "25 de abril de 2025",
    category: "Currículum",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-7-1.jpg", // Reutilizando imagen 1
  },
  {
    id: 16,
    title: "Cómo Redactar un Currículum para Principiantes",
    subtitle: "Guía Paso a Paso para tu Primer Currículum",
    description:
      "Si recién comienzas tu carrera, esta guía te mostrará cómo estructurar y redactar un currículum efectivo desde cero.",
    date: "24 de abril de 2025",
    category: "Currículum",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-6.jpg", // Reutilizando imagen 2
  },
  {
    id: 17,
    title: "Errores Comunes al Escribir un Currículum",
    subtitle: "Evita estos errores para mejorar tus posibilidades",
    description:
      "Aprende a identificar y corregir los errores más frecuentes que pueden debilitar tu currículum y cómo evitarlos.",
    date: "23 de abril de 2025",
    category: "Currículum",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-7-1.jpg", // Reutilizando imagen 1
  },
  {
     id: 18,
    title: "La Importancia de las Palabras Clave en tu Currículum",
    subtitle: "Optimiza tu currículum para los sistemas ATS",
    description:
      "Descubre por qué las palabras clave son cruciales y cómo incorporarlas estratégicamente para pasar los filtros automáticos.",
    date: "22 de abril de 2025",
    category: "Currículum",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-6.jpg", // Reutilizando imagen 2
  },
  {
    id: 19,
    title: "Diseño de Currículum: ¿Creativo o Tradicional?",
    subtitle: "Elige el formato adecuado para tu industria",
    description:
      "Analizamos cuándo es apropiado un diseño de currículum creativo y cuándo es mejor optar por un formato más tradicional.",
    date: "21 de abril de 2025",
    category: "Currículum",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-7-1.jpg", // Reutilizando imagen 1
  },
  // ----- FIN DE NUEVOS POSTS -----

  // ----- INICIO DE NUEVOS POSTS PARA LINKEDIN (IDs 101-107) -----
  {
    id: 101,
    title: "[LinkedIn] Preguntas de Entrevista para Administrador de Salesforce",
    subtitle: "Más de 70 Preguntas y Respuestas para Entrevistas de Administrador de Salesforce",
    description:
      "Domina las preguntas de entrevista para Administrador de Salesforce con nuestra guía detallada que abarca temas técnicos, escenarios, gestión de datos, seguridad, integración y aspectos conductuales.",
    date: "20 de febrero de 2025",
    category: "LinkedIn",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-7-1.jpg", // Image 1
  },
  {
    id: 102,
    title: "[LinkedIn] Cómo Finalizar un Currículum",
    subtitle: "5 Estrategias Comprobadas para Finalizar un Currículum como un Profesional",
    description:
      "Imagina ver una película que te deja con un final ambiguo e inconcluso. Ahora, imagina que tu currículum termina de manera igualmente poco clara. Un final débil o ambiguo puede hacer que los empleadores duden de tus calificaciones y preparación.",
    date: "19 de febrero de 2025",
    category: "LinkedIn",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-6.jpg", // Image 2
  },
   {
    id: 103,
    title: "[LinkedIn] Preguntas de Entrevista sobre Farmacovigilancia",
    subtitle: "Más de 60 Preguntas y Respuestas para Entrevistas en Farmacovigilancia",
    description:
      "Domina las preguntas de entrevista en farmacovigilancia con nuestra guía detallada que presenta respuestas de expertos, consejos y estrategias para sobresalir en entrevistas de seguridad de medicamentos.",
    date: "19 de febrero de 2025",
    category: "LinkedIn",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-7-1.jpg", // Image 1
  },
  {
    id: 104,
    title: "[LinkedIn] Ejemplo de Auto-Presentación para Entrevista de Trabajo",
    subtitle: "Ejemplo de Auto-Presentación para Entrevista de Trabajo: Los Mejores Ejemplos y Consejos para 2025",
    description:
      "El estrés de una entrevista puede estar relacionado tanto con el proceso como con la forma de presentarte. Una introducción fuerte puede romper el hielo y aumentar significativamente tus oportunidades.",
    date: "18 de febrero de 2025",
    category: "LinkedIn",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-6.jpg", // Image 2
  },
   {
    id: 105,
    title: "[LinkedIn] Los Mejores Servicios de Redacción de Currículums en India",
    subtitle: "Los Mejores Servicios de Redacción de Currículums en India | ResumeGuru India",
    description:
      "Descubre los mejores servicios de redacción de currículums en India con ResumeGuru. Obtén un currículum optimizado para ATS, redacción experta, optimización de LinkedIn, asistencia para cartas de presentación y soporte personalizado en la búsqueda de empleo. Más de 2000 clientes satisfechos y una calificación de 4.9+ en Google respaldan nuestra excelencia.",
    date: "18 de febrero de 2025",
    category: "LinkedIn",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-7-1.jpg", // Image 1
  },
  {
    id: 106,
    title: "[LinkedIn] Tipos de Preguntas de Entrevista",
    subtitle: "La Mejor Guía sobre Tipos de Preguntas de Entrevista (Más de 70 Ejemplos)",
    description:
      "Domina los diferentes tipos de preguntas de entrevista con consejos de expertos y ejemplos reales. Aumenta tu confianza, triunfa en las entrevistas y consigue el empleo de tus sueños.",
    date: "15 de febrero de 2025",
    category: "LinkedIn",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-6.jpg", // Image 2
  },
   {
    id: 107,
    title: "[LinkedIn] Resumen en el Currículum para Recién Graduados",
    subtitle: "¿Cómo Escribir un Resumen Ganador en tu Currículum? (Más de 10 Ejemplos)",
    description:
      "Si estás escribiendo tu currículum por primera vez, probablemente comienzas con un objetivo profesional. Sin embargo, un resumen de currículum es diferente: se enfoca en destacar lo mejor de tu perfil.",
    date: "13 de febrero de 2025",
    category: "LinkedIn",
    href: commonHref,
    imageUrl: "https://resumeguru.in/wp-content/uploads/2025/04/Copy-of-LinkedIn-Article-6th-Dec-7-1.jpg", // Image 1
  },
  // ----- FIN DE NUEVOS POSTS PARA LINKEDIN -----
];

const categories = [
  "Todos los Artículos",
  "Currículum",
  "Carta de Presentación",
  "LinkedIn",
  "Carrera y Búsqueda de Empleo",
  "Historias de Éxito",
  "Web Stories",
];

export default function BlogPage() {
  const { darkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos los Artículos");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const articlesContainerRef = useRef(null);
  const searchInputRef = useRef(null); // Ref para el input de búsqueda

  // Define background pattern and colors based on theme (matching model)
  const backgroundPattern = darkMode
    ? "repeating-radial-gradient(circle, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)" // Dark mode pattern from model
    : "repeating-radial-gradient(circle, rgba(0,0,0,0.2) 0, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 40px)"; // Light mode pattern from model

  // Define base backgrounds and text colors matching model sections
  const baseBackground = darkMode ? "bg-black" : "bg-white"; // Like model Hero
  const altBackground = darkMode ? "bg-gray-900" : "bg-gray-100"; // Like model alternate sections
  const textColor = darkMode ? "text-white" : "text-gray-800"; // Default text color

  // Define card-specific colors (can be adjusted slightly for better visual hierarchy on cards)
  const cardBackground = darkMode ? "bg-gray-800" : "bg-white"; // Card background
  const cardTextColor = darkMode ? "text-gray-100" : "text-gray-900"; // Primary card text
  const cardSubTextColor = darkMode ? "text-gray-300" : "text-gray-700"; // Secondary card text
  const cardDateColor = darkMode ? "text-gray-400" : "text-gray-500"; // Date text

  // Input and Button styling variables matching model conventions
  const inputBgColor = darkMode ? "bg-gray-700" : "bg-white";
  const inputTextColorValue = darkMode ? "#FFFFFF" : "#000000"; // Blanco para dark, Negro para light
  const placeholderColor = darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.4)'; // Placeholder color
  const buttonActiveBg = "bg-purple-600"; // Model active button
  const buttonActiveText = "text-white"; // Model active button text
  const buttonInactiveBg = darkMode ? "bg-gray-700" : "bg-gray-200"; // Adjusted for blog context, similar to model pagination/inactive tabs
  const buttonInactiveText = darkMode ? "text-white" : "text-gray-800"; // Adjusted for blog context

  // **** ESTILOS HOVER PARA BOTONES (INCLUYENDO PAGINACIÓN) ****
  const buttonHoverBg = "hover:bg-purple-600"; // Fondo morado en hover
  const buttonHoverText = "hover:text-white";  // Texto blanco en hover

  const paginationButtonBg = darkMode ? "bg-gray-700" : "bg-gray-200"; // Match inactive state
  const paginationButtonText = darkMode ? "text-white" : "text-gray-800"; // Match inactive state
  const paginationButtonDisabled = "opacity-50 cursor-not-allowed"; // Consistent disabled style

  // Filter the posts
  const filteredPosts = posts.filter((post) => {
    const matchCategory =
      selectedCategory === "Todos los Artículos" || post.category === selectedCategory;
    const matchSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.subtitle && post.subtitle.toLowerCase().includes(searchTerm.toLowerCase())) || // Check if subtitle exists
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });
  // Pagination calculation
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  // Smooth scroll function
  const smoothScrollToArticles = () => {
    if (articlesContainerRef.current) {
      articlesContainerRef.current.scrollIntoView({
         behavior: "smooth",
         block: "start"
       });
    }
  };

  // Handlers with smooth scroll
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset page when category changes
    // Use setTimeout to ensure state update is processed before scrolling
    setTimeout(smoothScrollToArticles, 0);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset page when search term changes
  };

  // Handler para cerrar teclado en móvil al presionar Enter en el input
  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter' && searchInputRef.current) {
        // Detectar si es un dispositivo táctil (heurística común)
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) {
            searchInputRef.current.blur(); // Cierra el teclado
        }
        // Opcional: Prevenir el comportamiento por defecto si es necesario (ej. envío de formulario)
        // e.preventDefault();
    }
  };

  // Handler para cerrar teclado al hacer clic en el icono
  const handleIconClick = () => {
    if (searchInputRef.current) {
      searchInputRef.current.blur(); // Cierra el teclado
    }
  };
  const handlePageClick = (pageNumber) => {
     // Ensure pageNumber is within valid range
     if (pageNumber >= 1 && pageNumber <= totalPages) {
        setCurrentPage(pageNumber);
        setTimeout(smoothScrollToArticles, 0);
     }
  };

  // Helper function to generate the CORE 3 pagination numbers
  const getPaginationNumbers = () => {
    const pages = [];
    if (totalPages <= 3) {
      // Show all pages if 3 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always determine 3 core page numbers if more than 3 total pages
      if (currentPage <= 2) { // Handle page 1 and 2 showing 1, 2, 3
        pages.push(1, 2, 3);
      } else if (currentPage >= totalPages - 1) { // Handle last and second-to-last page showing last 3
        pages.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        // Current is somewhere in the middle: show previous, current, next
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      }
    }
    return pages;
  };
  // --- Helper variables for rendering pagination ---
  const corePageNumbers = getPaginationNumbers();
  const firstCorePageNumber = corePageNumbers.length > 0 ? corePageNumbers[0] : 0;
  const lastCorePageNumber = corePageNumbers.length > 0 ? corePageNumbers[corePageNumbers.length - 1] : 0;
  const showFirstPageButton = totalPages > 3 && firstCorePageNumber > 1;
  const showStartEllipsis = totalPages > 3 && firstCorePageNumber > 2;
  const showEndEllipsis = totalPages > 3 && lastCorePageNumber < totalPages - 1;
  const showLastPageButton = totalPages > 3 && lastCorePageNumber < totalPages;
  // --- End helper variables ---


  return (
    <>
      <Header />
      {/* Use the main text color defined above */}
      <main className={`${textColor}`}>
        {/* Section 1: Hero - Matching model's Hero75Section */}
        <section
          // Use base background and text color like model Hero
          // Add pt-32 like model Hero for header offset
          // Add min-h-screen and flex items-center justify-center like model Hero
          className={`relative flex items-center justify-center min-h-screen ${baseBackground} ${textColor} pt-32`}
          style={{
            backgroundImage: backgroundPattern, // Use the defined pattern
            backgroundSize: "40px 40px", // Match model pattern size
            backgroundPosition: "center", // Match model pattern position
          }}
        >
          {/* Use standard container like model */}
          <div className="container mx-auto px-6 text-center relative z-10">
            {/* Typography matching model Hero */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              CareerBytes by ResumeGuru
            </h1>
            {/* Subtitle/Paragraph matching model Hero style */}
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Recursos gratuitos que incluyen consejos, trucos, ideas y más sobre currículums, LinkedIn y búsqueda de empleo para ayudarte a potenciar tu crecimiento profesional 10x.
            </p>
            {/* Search Bar - Styled consistently */}
            <div className="mb-10 max-w-xl mx-auto relative"> {/* Center search bar, added relative positioning */}
             {/* --- TextField con icono a la derecha y onClick --- */}
             <TextField
                inputRef={searchInputRef} // Asignar ref al input interno de TextField
                fullWidth
                variant="outlined"
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyDown={handleSearchKeyDown} // Añadir el handler onKeyDown para Enter
                placeholder="Buscar artículos..."
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                           onClick={handleIconClick} // Llama a la función para cerrar teclado
                            edge="end" // Ajusta el padding
                            aria-label="buscar" // Accesibilidad
                        >
                            <SearchIcon style={{ color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.54)' }} /> {/* Icono de Lupa */}
                        </IconButton>
                    </InputAdornment>
                    ),
                    // --- MODIFICACIÓN: Usar sx prop para estilos dependientes del tema ---
                    sx: {
                        backgroundColor: inputBgColor,
                        borderRadius: '0.375rem', // rounded-md
                         // Estilo para el input (texto introducido y placeholder)
                        input: {
                             color: inputTextColorValue, // Color del texto introducido
                             '&::placeholder': {
                                 color: placeholderColor, // Color del placeholder
                                 opacity: 1, // Asegura que la opacidad no sea sobrescrita por el navegador
                             }
                        },
                        // Estilos para el borde
                        '& .MuiOutlinedInput-notchedOutline': {
                             // --- AJUSTE: Cambiar borderColor en dark mode ---
                            borderColor: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.23)', // Borde blanco semi-transparente en dark, gris claro en light
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                             // Mantener hover contrastante
                            borderColor: darkMode ? 'rgba(255, 255, 255, 0.87)' : 'rgba(0, 0, 0, 0.87)',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#a855f7', // Borde focus (color púrpura)
                            borderWidth: '1px', // Asegurar que el borde focus sea visible
                        },
                    }
                }}
               />
              {/* --- FIN MODIFICACIÓN --- */}
            </div>


            {/* ----- BOTONES CATEGORÍA (TAMAÑO MÓVIL Y DESKTOP) ----- */}
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-3 max-w-md mx-auto sm:max-w-none">
                 {categories.map((cat, index) => {
                  const isLastItem = index === categories.length - 1;
                  const isOddNumber = categories.length % 2 !== 0;
                  return (
                      <button
                        key={cat}
                        onClick={() => handleCategoryClick(cat)}
                        className={`px-4 py-2 h-12 rounded-md transition duration-300 ease-in-out cursor-pointer font-semibold text-sm flex items-center justify-center text-center w-full sm:w-auto
                          ${selectedCategory === cat
                            ? `${buttonActiveBg} ${buttonActiveText} shadow-md` // Active style
                            // **** APLICANDO HOVER MORADO A BOTONES DE CATEGORÍA ****
                            : `${buttonInactiveBg} ${buttonInactiveText} ${buttonHoverBg} ${buttonHoverText} hover:shadow-lg` // Inactive style
                          }
                          ${isOddNumber && isLastItem ? 'col-span-2 justify-self-center max-w-[calc(50%-0.25rem)] sm:col-span-1 sm:max-w-none' : ''} ` // Centrar último impar en móvil
                         }
                       >
                         {cat}
                       </button>
                   );
                 })}
            </div>
             {/* ----- FIN DE BOTONES CATEGORÍA ----- */}
          </div>
        </section>

        {/* Section 2: Articles Grid & Pagination - Matching model section styles */}
        <section
          ref={articlesContainerRef}
          id="articlesContainer"
           // Use alternating background like model sections
          // Standard padding like model sections
          className={`relative py-16 ${altBackground}`}
          style={{
            backgroundImage: backgroundPattern, // Use the defined pattern
            backgroundSize: "40px 40px", // Match model pattern size
            backgroundPosition: "center", // Match model pattern position
          }}
        >
          {/* Use standard container like model */}
          <div className="container mx-auto px-6 relative z-10">
            {/* Articles Grid - Consistent gap and card styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentPosts.length > 0 ? (
                currentPosts.map((post) => (
                  <div
                    key={post.id}
                    // Card styling using variables defined above
                     // Added flex flex-col to ensure footer alignment
                    className={`p-5 ${cardBackground} rounded-lg shadow-md flex flex-col hover:shadow-xl transition-shadow duration-300`}
                  >
                    {/* Imagen clickeable */}
                    <Link href={post.href || "#"}>
                       <img
                          src={post.imageUrl || "https://via.placeholder.com/400x225?text=Imagen+no+disponible"} // Fallback image
                          alt={`Imagen para ${post.title}`}
                          // Consistent image styling
                          className="w-full h-48 object-cover rounded-t-md mb-4 cursor-pointer" // Added cursor-pointer
                        />
                    </Link>

                    {/* Título clickeable y con hover */}
                    <Link href={post.href || "#"}>
                      <h3 className={`font-semibold text-xl mb-2 ${cardTextColor} hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 cursor-pointer`}> {/* Added hover effect and cursor */}
                        {post.title}
                      </h3>
                    </Link>

                     {/* Subtítulo */}
                     <p className={`text-sm ${cardSubTextColor} mb-1`}>{post.subtitle}</p>
                    {/* Descripción */}
                    <p className={`${cardSubTextColor} text-sm mb-4 flex-grow`}>
                       {post.description.length > 100 ? post.description.substring(0, 100) + "..." : post.description}
                    </p>
                    {/* Footer de la tarjeta */}
                     <div className={`mt-auto pt-4 border-t ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                       <Link href={post.href || "#"} className="text-purple-600 dark:text-purple-400 hover:underline font-semibold text-sm">
                         Leer más »
                       </Link>
                       <p className={`text-xs ${cardDateColor} mt-2`}>{post.date}</p>
                    </div>
                  </div>
                ))
              ) : (
                 // Mensaje si no hay posts
                <p className={`text-center col-span-1 md:col-span-2 lg:col-span-3 ${textColor}`}>
                   No se encontraron artículos que coincidan con tu búsqueda o filtro.
                </p>
              )}
            </div>


              {/* ----- PAGINACIÓN CON HOVER MORADO APLICADO ----- */}
             {totalPages > 1 && (
               <div className="flex justify-center items-center space-x-1 sm:space-x-2">
                 {/* Botón Anterior */}
                 <button
                    onClick={() => handlePageClick(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-2 sm:px-4 rounded-md transition duration-300 ease-in-out font-semibold text-sm ${
                       currentPage === 1
                        ? `${paginationButtonBg} ${paginationButtonText} ${paginationButtonDisabled}`
                        // **** ESTADO HOVER PAGINACIÓN ****
                        : `${paginationButtonBg} ${paginationButtonText} ${buttonHoverBg} ${buttonHoverText} cursor-pointer`
                    }`}
                 >
                    « Anterior
                 </button>

                 {/* Botón Primera Página */}
                 {showFirstPageButton && (
                     <button
                         key="page-1"
                         onClick={() => handlePageClick(1)}
                         className={`px-3 py-2 sm:px-4 rounded-md transition duration-300 ease-in-out font-semibold text-sm cursor-pointer ${
                           currentPage === 1
                             ? `${buttonActiveBg} ${buttonActiveText} shadow-md`
                             // **** ESTADO HOVER PAGINACIÓN ****
                             : `${paginationButtonBg} ${paginationButtonText} ${buttonHoverBg} ${buttonHoverText}`
                         }`}
                      >
                         1
                    </button>
                 )}

                 {/* Elipsis Inicio */}
                  {showStartEllipsis && (
                    <span className={`px-1 sm:px-2 py-1 ${paginationButtonText}`}>...</span>
                 )}


                 {/* Botones Números de Página */}
                 {corePageNumbers.map((page) => (
                    <button
                         key={`page-${page}`}
                         onClick={() => handlePageClick(page)}
                         className={`px-3 py-2 sm:px-4 rounded-md transition duration-300 ease-in-out font-semibold text-sm cursor-pointer ${
                           currentPage === page
                             ? `${buttonActiveBg} ${buttonActiveText} shadow-md`
                             // **** ESTADO HOVER PAGINACIÓN ****
                             : `${paginationButtonBg} ${paginationButtonText} ${buttonHoverBg} ${buttonHoverText}`
                         }`}
                     >
                         {page}
                    </button>
                 ))}

                 {/* Elipsis Fin */}
                 {showEndEllipsis && (
                     <span className={`px-1 sm:px-2 py-1 ${paginationButtonText}`}>...</span>
                 )}

                 {/* Botón Última Página */}
                 {showLastPageButton && (
                     <button
                         key={`page-${totalPages}`}
                         onClick={() => handlePageClick(totalPages)}
                         className={`px-3 py-2 sm:px-4 rounded-md transition duration-300 ease-in-out font-semibold text-sm cursor-pointer ${
                           currentPage === totalPages
                             ? `${buttonActiveBg} ${buttonActiveText} shadow-md`
                             // **** ESTADO HOVER PAGINACIÓN ****
                             : `${paginationButtonBg} ${paginationButtonText} ${buttonHoverBg} ${buttonHoverText}`
                         }`}
                     >
                         {totalPages}
                    </button>
                 )}

                 {/* Botón Siguiente */}
                 <button
                    onClick={() => handlePageClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-2 sm:px-4 rounded-md transition duration-300 ease-in-out font-semibold text-sm ${
                        currentPage === totalPages
                        ? `${paginationButtonBg} ${paginationButtonText} ${paginationButtonDisabled}`
                        // **** ESTADO HOVER PAGINACIÓN ****
                        : `${paginationButtonBg} ${paginationButtonText} ${buttonHoverBg} ${buttonHoverText} cursor-pointer`
                    }`}
                 >
                    Siguiente »
                 </button>
                </div>
             )}
             {/* ----- FIN SECCIÓN PAGINACIÓN ----- */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
