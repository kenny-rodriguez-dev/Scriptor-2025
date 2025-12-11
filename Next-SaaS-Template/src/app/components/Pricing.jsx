"use client";
import { useTheme } from "../theme-provider";

export default function Pricing() {
  const { darkMode } = useTheme();
  const bgClass = darkMode ? "bg-black" : "bg-white";
  const textClass = darkMode ? "text-white" : "text-gray-800";

  return (
    <section className={`py-20 ${bgClass} ${textClass}`} id="pricing">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Planes de Precios</h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-400">
          Elige el plan que mejor se adapte a tus necesidades.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Básico */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-8 flex flex-col text-center hover:shadow-md transition">
            <h3 className="text-2xl font-semibold mb-2">Básico</h3>
            <p className="text-4xl font-bold text-purple-600 mb-4">$19</p>
            <p className="mb-6">por mes</p>
            <ul className="space-y-2 mb-6 flex-1">
              <li>10 generaciones de IA por día</li>
              <li>Soporte básico</li>
              <li>Plantillas estándar</li>
            </ul>
            <button className="bg-purple-600 text-white py-3 rounded-md hover:bg-purple-500 transition">
              Comenzar
            </button>
          </div>

          {/* Pro */}
          <div className="border-2 border-purple-600 rounded-lg p-8 flex flex-col text-center shadow-xl">
            <h3 className="text-2xl font-semibold mb-2">Pro</h3>
            <p className="text-4xl font-bold text-purple-600 mb-4">$49</p>
            <p className="mb-6">por mes</p>
            <ul className="space-y-2 mb-6 flex-1">
              <li>50 generaciones de IA por día</li>
              <li>Soporte prioritario</li>
              <li>Analíticas avanzadas</li>
            </ul>
            <button className="bg-purple-600 text-white py-3 rounded-md hover:bg-purple-500 transition">
              Comenzar
            </button>
          </div>

          {/* Empresarial */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-8 flex flex-col text-center hover:shadow-md transition">
            <h3 className="text-2xl font-semibold mb-2">Empresarial</h3>
            <p className="text-4xl font-bold text-purple-600 mb-4">$99</p>
            <p className="mb-6">por mes</p>
            <ul className="space-y-2 mb-6 flex-1">
              <li>Generaciones ilimitadas de IA</li>
              <li>Gerente dedicado</li>
              <li>Suite completa de analíticas</li>
            </ul>
            <button className="bg-purple-600 text-white py-3 rounded-md hover:bg-purple-500 transition">
              Comenzar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
