"use client";

import React, { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useTheme } from "@/app/theme-provider";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

/* ---------- util patrón punteado ---------- */
const dottedPattern = (dark) =>
  dark
    ? "repeating-radial-gradient(circle,rgba(255,255,255,.2)0,rgba(255,255,255,.2)2px,transparent 2px,transparent 40px)"
    : "repeating-radial-gradient(circle,rgba(0,0,0,.2)0,rgba(0,0,0,.2)2px,transparent 2px,transparent 40px)";

/* ---------- CountUp ---------- */
function CountUp({ end, duration = 2, decimals = 0, separator = "" }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const frames = Math.round(duration * 60);
    const inc = end / frames;
    const int = setInterval(() => {
      start += inc;
      if (start >= end) {
        start = end;
        clearInterval(int);
      }
      setCount(start);
    }, 1000 / 60);
    return () => clearInterval(int);
  }, [end, duration]);
  return (
    <span>
      {count.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, separator)}
    </span>
  );
}

/* ---------- “Obtenemos resultados …” ---------- */
function ATSStatsSection() {
  const { darkMode } = useTheme();
  const base = darkMode ? "bg-black text-white" : "bg-white text-gray-800";
  return (
    <section
      className={`py-16 ${base}`}
      style={{
        backgroundImage: dottedPattern(darkMode),
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 text-center">
        <p className="mb-8 text-lg font-semibold">
          Obtenemos resultados para nuestros clientes. Puntaje mínimo de ATS del
          75% con cada pedido.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={15} />+
            </h3>
            <p className="mt-2">Países</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={2000} separator="," />+
            </h3>
            <p className="mt-2">Clientes Atendidos</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={4.9} decimals={1} />+
            </h3>
            <p className="mt-2">Calificación en Google</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={75} />
              %+
            </h3>
            <p className="mt-2">Puntaje ATS</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CartasPage() {
  const { darkMode } = useTheme();

  /* ---------------- FAQ ---------------- */
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (i) => setOpenFAQ(openFAQ === i ? null : i);

  const faq = [
    {
      title: "¿Los reclutadores desean ver cartas de presentación?",
      content:
        "Sí, a los reclutadores les encanta ver cartas de presentación adjuntas al currículum. Aunque en muchos casos son opcionales, pueden marcar la diferencia para conseguir una oportunidad.",
    },
    {
      title:
        "¿Cuáles son los errores imperdonables en una carta de presentación?",
      content:
        "Debes evitar errores simples, como faltas de ortografía, jerga, exageraciones y formatos inadecuados al redactar una carta de presentación.",
    },
    {
      title: "¿Incluyen una carta de presentación en sus paquetes?",
      content:
        "Sí, normalmente se incluye una carta de presentación en nuestros paquetes. Si deseas cartas adicionales, contáctanos para más información.",
    },
    {
      title: "¿La carta de presentación se adaptará al puesto que deseo?",
      content:
        "¡Exacto! Nuestro servicio se enfoca en elaborar una carta de presentación personalizada que te ayude a conseguir el empleo que buscas.",
    },
    {
      title: "¿El archivo de la carta de presentación será editable?",
      content:
        "Sí, recibirás un archivo Word editable con el nombre de la empresa y el puesto en blanco para que puedas completarlo y aplicar.",
    },
  ];

  /* --------------- Render --------------- */
  return (
    <>
      <Header />

      {/* 1  HERO */}
      <section
        className={`relative flex items-center justify-center min-h-screen pt-32 ${
          darkMode ? "bg-black text-white" : "bg-white text-gray-800"
        } text-center`}
        style={{
          backgroundImage: dottedPattern(darkMode),
          backgroundSize: "40px 40px",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Servicios de Redacción de Cartas de Presentación
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Impresiona al reclutador y mejora tus posibilidades de entrevista
            con una carta de presentación profesional que demuestre tu valor.
          </p>

          {/* botones + icono */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
            <a href="/pricing">
              <button className="flex items-center justify-center bg-purple-600 text-white py-3 px-8 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
                <CheckCircleIcon color="success" className="mr-2" />
                Aproveche nuestros servicios
              </button>
            </a>
            <a href="/callback">
              <button className="flex items-center justify-center bg-purple-600 text-white py-3 px-8 rounded-md hover:bg-purple-700 transition font-semibold cursor-pointer">
                <CheckCircleIcon color="success" className="mr-2" />
                Solicitar devolución de llamada
              </button>
            </a>
          </div>

          {/* bullets con icono */}
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              "Adaptado al puesto",
              "95% de satisfacción del cliente",
              "Soporte personalizado 1:1",
            ].map((txt, i) => (
              <li
                key={i}
                className="flex flex-col items-center text-center md:flex-row md:items-center md:justify-start"
              >
                <CheckCircleIcon
                  className="mr-0 md:mr-2 flex-shrink-0"
                  style={{ color: darkMode ? "#fff" : "#000" }}
                />
                <span className="mt-1 md:mt-0 text-sm md:text-base">{txt}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2  Servicios de Redacción – gris opaco */}
      <section
        className={`py-24 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
        }`}
        style={{
          backgroundImage: dottedPattern(darkMode),
          backgroundSize: "40px 40px",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Servicios de Redacción de Cartas de Presentación
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-justify mx-auto">
              Las cartas de presentación marcan la diferencia para conseguir tu
              empleo soñado. Demuestran tu personalidad y adecuación al puesto,
              ayudándote a destacar frente a candidatos que solo presentan su
              currículum. Nuestro equipo experto te guía para superar incluso
              los procesos de selección más competitivos.
            </p>
          </div>
        </div>
      </section>

      {/* 3  Obtenemos resultados */}
      <ATSStatsSection />

      {/* 4  ¿Qué es una carta? – gris opaco */}
      <section
        className={`py-16 ${
          darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-800"
        }`}
        style={{
          backgroundImage: dottedPattern(darkMode),
          backgroundSize: "40px 40px",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Qué es una carta de presentación?
            </h2>
            <p className="text-lg leading-relaxed text-justify mx-auto">
              Una carta de presentación, también llamada carta de solicitud, es
              un memorando de 250 – 300 palabras que explica a los empleadores
              tu interés por un puesto específico y tu idoneidad para el mismo.
              No repite tu CV; ofrece una visión más profunda y personalizada de
              tus habilidades, experiencia y logros clave.
            </p>
          </div>
        </div>
      </section>

      {/* 5  ¿Por qué necesitas? – blanco/black */}
      <section
        className={`py-16 ${
          darkMode ? "bg-black text-gray-300" : "bg-white text-gray-800"
        }`}
        style={{
          backgroundImage: dottedPattern(darkMode),
          backgroundSize: "40px 40px",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            ¿Por qué necesitas una carta de presentación profesional?
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-left text-lg leading-relaxed">
            {/* Introductory paragraph */}
            <p>
              ¿Sabías que el 72 % de las organizaciones espera que los
              candidatos envíen una carta de presentación, incluso si es
              opcional, y que el 87 % de los responsables de contratación
              admitieron haberla leído? Estas cifras tan impactantes son
              suficientes para comprender la importancia de una carta de
              presentación.
            </p>

            {/* Bullet list */}
            <ul className="list-disc pl-6 space-y-6">
              <li>
                <strong>
                  Una carta de presentación aporta sustancia a tu currículum:
                </strong>{" "}
                Las cartas de presentación complementan y enriquecen tu
                currículum. A diferencia de un currículum, que contiene una
                lista formal y concisa de tus experiencias y logros
                profesionales, una carta de presentación ofrece una explicación
                detallada de estas cualificaciones. Una carta de presentación
                refuerza tu currículum y potencia tu candidatura para un puesto
                de trabajo, ofreciendo a los reclutadores una descripción más
                completa de tu perfil.
              </li>

              <li>
                <strong>
                  Las cartas de presentación pueden ayudarte a superar la falta
                  de experiencia:
                </strong>{" "}
                ¿Sabías que el 82 % de los reclutadores coinciden en que una
                carta de presentación bien redactada puede convencerlos de
                entrevistar a un candidato que, de otro modo, carecería de las
                cualificaciones pertinentes? Por lo tanto, si eres recién
                graduado o alguien que ha cambiado de profesión, enviar una
                carta de presentación es una excelente manera de convencer a los
                empleadores de que te consideren para una entrevista. Las
                empresas buscan personas apasionadas y comprometidas, y tu carta
                de presentación es una oportunidad para destacar estas
                cualidades.
              </li>

              <li>
                <strong>
                  Las cartas de presentación demuestran tu interés en un
                  trabajo:
                </strong>{" "}
                Una carta de presentación te brinda la oportunidad de explicar
                por qué quieres el trabajo. Puedes expresar tu pasión por el
                puesto y por qué estás dispuesto a esforzarte al máximo para
                conseguirlo. Un currículum ofrece muy poco espacio para expresar
                tu interés por un puesto, pero puedes compensarlo con una carta
                de presentación bien redactada.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6  Características – gris opaco */}
      <section
        className={`py-16 ${
          darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-800"
        }`}
        style={{
          backgroundImage: dottedPattern(darkMode),
          backgroundSize: "40px 40px",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Características de nuestros servicios de redacción de cartas de
            presentación
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-10">
            Confía en nuestros expertos para obtener una carta de presentación
            que impresione.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Adaptado al puesto",
                text: "Personalizamos cada carta según la descripción del puesto, evitando contenido genérico.",
              },
              {
                title: "Redactado por expertos",
                text: "Equipo con amplia experiencia trabajando con ejecutivos, gerentes y recién graduados.",
              },
              {
                title: "Precios accesibles",
                text: "Servicios asequibles con opciones de pago flexibles.",
              },
            ].map(({ title, text }) => (
              <div
                key={title}
                className={`p-6 rounded shadow ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7  FAQ – blanco/black */}
      <section
        className={`py-20 ${
          darkMode ? "bg-black text-gray-300" : "bg-white text-gray-800"
        }`}
        style={{
          backgroundImage: dottedPattern(darkMode),
          backgroundSize: "40px 40px",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Preguntas Frecuentes
          </h2>
          <div className="max-w-4xl mx-auto text-left">
            {faq.map((item, i) => (
              <div
                key={i}
                className={`
                  rounded-md p-4 mb-3 cursor-pointer
                  ${darkMode ? "bg-gray-800" : "bg-gray-100"}
                  hover:bg-purple-600/20 hover:shadow-[0_0_10px_rgba(128,0,128,0.2)]
                  transition-all duration-700
                `}
                onClick={() => toggleFAQ(i)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium">{item.title}</span>
                  <span className="text-purple-600 font-bold text-xl">
                    {openFAQ === i ? "−" : "+"}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    openFAQ === i
                      ? "max-h-40 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pt-2">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
