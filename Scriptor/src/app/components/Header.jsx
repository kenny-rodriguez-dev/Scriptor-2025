"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "../theme-provider";

// Componente de flecha con rotación
function MinimalArrowDown({ isOpen }) {
  return (
    <svg
      className={`w-2 h-2 ml-2 stroke-current stroke-2 fill-none translate-y-[1px] transition-transform duration-800`}
      style={{ transform: isOpen ? "rotate(360deg)" : "rotate(0deg)" }}
      viewBox="0 0 14 8"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M1 1l6 6 6-6" />
    </svg>
  );
}

// Componente para los links de submenú en móvil
function MobileSubmenuLink({
  href,
  label,
  onClick,
  submenuLinkClass,
  activeLink,
}) {
  const [isPressed, setIsPressed] = useState(false);
  const longPressTimer = useRef(null);

  const handleTouchStart = () => {
    longPressTimer.current = setTimeout(() => {
      setIsPressed(true);
    }, 1000);
  };

  const handleTouchEnd = () => {
    clearTimeout(longPressTimer.current);
    if (isPressed) {
      setTimeout(() => setIsPressed(false), 300);
    }
  };

  return (
    <Link
      href={href}
      onClick={() => {
        onClick();
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      className={`active:text-purple-700 ${submenuLinkClass} transition-colors duration-300 ${activeLink === href || isPressed ? "text-purple-700" : ""
        }`}
    >
      {label}
    </Link>
  );
}

// Componente para el item principal del menú móvil
function MobileMenuItem({
  label,
  link,
  menuKey,
  items,
  activeLink,
  setActiveLink,
  router,
  closeMobileMenu,
  closeAllMobileSubmenus,
  toggleMobileSubmenu,
  mobileSubmenusOpen,
}) {
  const isOpen = mobileSubmenusOpen[menuKey] || false;
  const [isPressed, setIsPressed] = useState(false);
  const longPressTimer = useRef(null);

  const submenuLinkClass =
    "block py-2 px-3 text-left font-medium rounded-md transition-colors duration-300 hover:bg-purple-600/20 hover:text-purple-800";

  const handleContainerClick = () => {
    setActiveLink(menuKey);
    if (!items || items.length === 0) {
      if (link) {
        closeMobileMenu();
        router.push(link);
      }
    } else {
      toggleMobileSubmenu(menuKey);
    }
  };

  const handleTextClick = (e) => {
    e.stopPropagation();
    setActiveLink(menuKey);
    if (link) {
      closeMobileMenu();
      router.push(link);
    }
  };

  const handleTouchStart = () => {
    longPressTimer.current = setTimeout(() => {
      setIsPressed(true);
    }, 1000);
  };

  const handleTouchEnd = () => {
    clearTimeout(longPressTimer.current);
    if (isPressed) {
      setTimeout(() => setIsPressed(false), 300);
    }
  };

  return (
    <div className="relative w-full">
      <div
        className={`font-medium group transition-colors flex items-center justify-between py-2 cursor-pointer active:text-purple-700 ${isPressed ? "text-purple-700" : ""
          }`}
        onClick={handleContainerClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        <span
          onClick={handleTextClick}
          className={activeLink === menuKey ? "text-purple-700" : ""}
        >
          {label}
        </span>
        {items && items.length > 0 && <MinimalArrowDown isOpen={isOpen} />}
      </div>

      {items && items.length > 0 && (
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out pl-4 ${isOpen ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
        >
          {items.map((subItem, i) => (
            <MobileSubmenuLink
              key={i}
              href={subItem.href}
              label={subItem.label}
              onClick={() => {
                closeAllMobileSubmenus();
                closeMobileMenu();
              }}
              submenuLinkClass={submenuLinkClass}
              activeLink={activeLink}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [spinCount, setSpinCount] = useState(0);

  const [mobileSubmenusOpen, setMobileSubmenusOpen] = useState({
    servicios: false,
    testimonios: false,
    productos: false,
    recursos: false,
  });

  const { darkMode, toggleTheme } = useTheme();
  const headerRef = useRef(null);
  const router = useRouter();

  const textColorClass = darkMode ? "text-gray-200" : "text-black";
  const headerBg = darkMode ? "bg-black" : "bg-white";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        headerRef.current &&
        !headerRef.current.contains(e.target) &&
        mobileMenuOpen
      ) {
        closeMobileMenu();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (menuKey) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenDropdown(menuKey);
  };

  const handleMouseLeave = (menuKey) => {
    timeoutRef.current = setTimeout(() => {
      if (openDropdown === menuKey) {
        setOpenDropdown(null);
      }
    }, 300);
  };

  const mainLinkClass = `font-medium text-sm md:text-base transition-colors duration-300 ${darkMode
    ? "text-white hover:text-purple-700"
    : "text-black hover:text-purple-700"
    }`;

  const submenuLinkClass = `block py-2 px-3 text-left font-medium rounded-md transition-colors duration-300 hover:bg-purple-600/10 hover:text-purple-800 ${textColorClass}`;

  function getSubmenuClass(menuKey) {
    const isOpen = openDropdown === menuKey;
    return `absolute left-1/2 top-[165%] transition-all duration-500 p-4 rounded-lg ${isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`;
  }

  function getSubmenuStyle(menuKey, minW = "220px") {
    const isOpen = openDropdown === menuKey;
    return {
      display: "grid",
      backgroundColor: darkMode ? "#222" : "#fff",
      minWidth: minW,
      padding: "1rem",
      transform: isOpen
        ? "translate(-50%, 0)"
        : "translate(calc(-50% - 2.5rem), 0)",
      opacity: isOpen ? 1 : 0,
    };
  }

  const serviciosSubmenu = [
    { label: "Redacción de currículums para ATS", href: "/servicios/ats" },
    { label: "Redacción de perfiles de LinkedIn", href: "/servicios/linkedin" },
    { label: "Redacción de cartas de presentación", href: "/servicios/cartas" },
    {
      label: "Redacción de currículums ejecutivos",
      href: "/servicios/ejecutivos",
    },
  ];

  const testimoniosSubmenu = [
    {
      label: "Ejemplos de redacción de currículum",
      href: "/testimonios/ejemplos",
    },
    { label: "Casos de estudio", href: "/testimonios/casos" },
    { label: "Testimonios", href: "/testimonios/testimonios" },
  ];

  const productosSubmenu = [
    { label: "Plantillas de currículum", href: "/productos/plantillas" },
    { label: "Kit de herramientas de LinkedIn", href: "/productos/kit" },
  ];

  const recursosSubmenu = [
    { label: "Blog", href: "/recursos/blog" },
    { label: "Preguntas frecuentes (FAQ)", href: "/recursos/faq" },
    { label: "Recursos para quienes buscan empleo", href: "/recursos/empleo" },
  ];

  const handleHamburgerClick = () => {
    setSpinCount((prev) => prev + 1);
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setSpinCount((prev) => prev + 1);
    setMobileMenuOpen(false);
  };

  const closeAllMobileSubmenus = () => {
    setMobileSubmenusOpen({
      servicios: false,
      testimonios: false,
      productos: false,
      recursos: false,
    });
  };

  const toggleMobileSubmenu = (key) => {
    setMobileSubmenusOpen((prev) => {
      const newState = {};
      Object.keys(prev).forEach((k) => {
        newState[k] = k === key ? !prev[k] : false;
      });
      return newState;
    });
  };

  return (
    <header
      ref={headerRef}
      className={`fixed w-full z-50 transition-all shadow-sm ${headerBg}`}
      style={{ padding: "0.3rem 0" }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo (enlace + imagen futura) */}
        <Link href="/" className="flex items-center cursor-pointer">
          {/* Sustituye /images/logo-placeholder.png por tu imagen cuando la subas */}
          <Image
            src="/scriptor.png"
            alt="Logo del sitio"
            width={120}
            height={32}
            priority
            className="object-contain h-16 w-auto"
          />
        </Link>

        {/* Botón Hamburger (móvil) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={handleHamburgerClick}
            className="focus:outline-none active:text-purple-700"
            aria-label="Abrir/cerrar menú móvil"
            style={{
              transform: `rotate(${spinCount * 360}deg)`,
              transition: "transform 0.8s ease-in-out",
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke={darkMode ? "#fff" : "#000"}
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navegación en escritorio */}
        <nav className="hidden md:flex flex-grow items-center justify-center space-x-2 md:space-x-6 relative">
          {/* Servicios */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("servicios")}
            onMouseLeave={() => handleMouseLeave("servicios")}
          >
            <div className="flex items-center cursor-pointer">
              <Link
                href="/servicios"
                onClick={() => setActiveLink("servicios")}
                className={`${mainLinkClass} ${activeLink === "servicios" ? "text-purple-700" : ""
                  }`}
              >
                Servicios
              </Link>
              <MinimalArrowDown isOpen={false} />
            </div>
            <div
              onMouseEnter={() => handleMouseEnter("servicios")}
              onMouseLeave={() => handleMouseLeave("servicios")}
              className={getSubmenuClass("servicios")}
              style={getSubmenuStyle("servicios", "250px")}
            >
              {serviciosSubmenu.map((item, i) => (
                <Link key={i} href={item.href} className={submenuLinkClass}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Precios */}
          <Link
            href="/precios"
            onClick={() => setActiveLink("precios")}
            className={`${mainLinkClass} ${activeLink === "precios" ? "text-purple-700" : ""
              }`}
          >
            Precios
          </Link>

          {/* Testimonios y muestras */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("testimonios")}
            onMouseLeave={() => handleMouseLeave("testimonios")}
          >
            <div className="flex items-center cursor-pointer">
              <Link
                href="/testimonios"
                onClick={() => setActiveLink("testimonios")}
                className={`${mainLinkClass} ${activeLink === "testimonios" ? "text-purple-700" : ""
                  }`}
              >
                Testimonios y muestras
              </Link>
              <MinimalArrowDown isOpen={false} />
            </div>
            <div
              onMouseEnter={() => handleMouseEnter("testimonios")}
              onMouseLeave={() => handleMouseLeave("testimonios")}
              className={getSubmenuClass("testimonios")}
              style={getSubmenuStyle("testimonios", "250px")}
            >
              {testimoniosSubmenu.map((item, i) => (
                <Link key={i} href={item.href} className={submenuLinkClass}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Productos */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("productos")}
            onMouseLeave={() => handleMouseLeave("productos")}
          >
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setActiveLink("productos")}
            >
              <span
                className={`${mainLinkClass} ${activeLink === "productos" ? "text-purple-700" : ""
                  }`}
              >
                Productos
              </span>
              <MinimalArrowDown isOpen={false} />
            </div>
            <div
              onMouseEnter={() => handleMouseEnter("productos")}
              onMouseLeave={() => handleMouseLeave("productos")}
              className={getSubmenuClass("productos")}
              style={getSubmenuStyle("productos", "220px")}
            >
              {productosSubmenu.map((item, i) => (
                <Link key={i} href={item.href} className={submenuLinkClass}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Recursos */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("recursos")}
            onMouseLeave={() => handleMouseLeave("recursos")}
          >
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setActiveLink("recursos")}
            >
              <span
                className={`${mainLinkClass} ${activeLink === "recursos" ? "text-purple-700" : ""
                  }`}
              >
                Recursos
              </span>
              <MinimalArrowDown isOpen={false} />
            </div>
            <div
              onMouseEnter={() => handleMouseEnter("recursos")}
              onMouseLeave={() => handleMouseLeave("recursos")}
              className={getSubmenuClass("recursos")}
              style={getSubmenuStyle("recursos", "220px")}
            >
              {recursosSubmenu.map((item, i) => (
                <Link key={i} href={item.href} className={submenuLinkClass}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Botón cambio de tema + Teléfono */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                toggleTheme();
                setActiveLink("theme");
              }}
              className={`${mainLinkClass} group cursor-pointer ${activeLink === "theme" ? "text-purple-700" : ""
                }`}
            >
              Versión{" "}
              <span
                className={`inline-block bg-purple-600 px-2 py-0.5 rounded-full text-center w-20 transition-colors duration-300 ${darkMode
                  ? "text-white group-hover:text-black"
                  : "text-black group-hover:text-white"
                  }`}
              >
                {darkMode ? "Oscura" : "Clara"}
              </span>
            </button>
            <a
              href="tel:+593 98 717 3442"
              onClick={() => setActiveLink("phone")}
              className={`${mainLinkClass} cursor-pointer ${activeLink === "phone" ? "text-purple-700" : ""
                }`}
            >
              +593 98 717 3442
            </a>
          </div>
        </nav>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden ${headerBg} px-4 ${mobileMenuOpen
          ? darkMode
            ? "border-t border-gray-700"
            : "border-t border-gray-200"
          : ""
          } overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? "max-h-[1000px] pt-4 pb-6" : "max-h-0"
          }`}
      >
        <div className="flex flex-col space-y-2">
          {/* Servicios */}
          <MobileMenuItem
            label="Servicios"
            link="/servicios"
            menuKey="servicios"
            items={serviciosSubmenu}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            router={router}
            closeMobileMenu={closeMobileMenu}
            closeAllMobileSubmenus={closeAllMobileSubmenus}
            toggleMobileSubmenu={toggleMobileSubmenu}
            mobileSubmenusOpen={mobileSubmenusOpen}
          />

          {/* Precios */}
          <MobileMenuItem
            label="Precios"
            link="/precios"
            menuKey="precios"
            items={null}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            router={router}
            closeMobileMenu={closeMobileMenu}
            closeAllMobileSubmenus={closeAllMobileSubmenus}
            toggleMobileSubmenu={toggleMobileSubmenu}
            mobileSubmenusOpen={mobileSubmenusOpen}
          />

          {/* Testimonios y muestras */}
          <MobileMenuItem
            label="Testimonios y muestras"
            link="/testimonios"
            menuKey="testimonios"
            items={testimoniosSubmenu}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            router={router}
            closeMobileMenu={closeMobileMenu}
            closeAllMobileSubmenus={closeAllMobileSubmenus}
            toggleMobileSubmenu={toggleMobileSubmenu}
            mobileSubmenusOpen={mobileSubmenusOpen}
          />

          {/* Productos */}
          <MobileMenuItem
            label="Productos"
            link={null}
            menuKey="productos"
            items={productosSubmenu}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            router={router}
            closeMobileMenu={closeMobileMenu}
            closeAllMobileSubmenus={closeAllMobileSubmenus}
            toggleMobileSubmenu={toggleMobileSubmenu}
            mobileSubmenusOpen={mobileSubmenusOpen}
          />

          {/* Recursos */}
          <MobileMenuItem
            label="Recursos"
            link={null}
            menuKey="recursos"
            items={recursosSubmenu}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            router={router}
            closeMobileMenu={closeMobileMenu}
            closeAllMobileSubmenus={closeAllMobileSubmenus}
            toggleMobileSubmenu={toggleMobileSubmenu}
            mobileSubmenusOpen={mobileSubmenusOpen}
          />

          {/* Botón cambio de tema + Teléfono */}
          <div className="flex flex-col items-start gap-2 mt-2">
            <button
              onClick={() => {
                toggleTheme();
                closeMobileMenu();
                setActiveLink("theme");
              }}
              className="font-medium py-2 group transition-colors active:text-purple-700 hover:text-purple-700"
            >
              Versión{" "}
              <span
                className={`inline-block bg-purple-600 px-2 py-0.5 rounded-full transition-colors duration-300 ${darkMode
                  ? "text-white group-hover:text-black"
                  : "text-black group-hover:text-white"
                  }`}
              >
                {darkMode ? "Oscura" : "Clara"}
              </span>
            </button>
            <a
              href="tel:+593987671122"
              onClick={() => closeMobileMenu()}
              className="font-medium py-2 transition-colors active:text-purple-700 hover:text-purple-700"
            >
              +593 98 717 3442
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
