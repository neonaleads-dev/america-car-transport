import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { Phone, DollarSign, ShieldCheck, CheckCircle2, ArrowRight, Truck, Calculator } from "lucide-react";

export const metadata = {
  title: "¿Cuánto Cuesta Enviar un Carro en EE.UU.? (Guía de Precios 2026)",
  description: "Descubra cuánto cuesta enviar un carro de estado a estado en EE.UU. Tablas de precios por milla 2026, ajuste por tipo de vehículo y cotización gratis.",
  alternates: {
    canonical: "https://www.americacartransport.com/es/cuanto-cuesta-enviar-un-carro",
    languages: {
      "en-US": "https://www.americacartransport.com/resources/car-shipping-cost-calculator",
      "es-US": "https://www.americacartransport.com/es/cuanto-cuesta-enviar-un-carro",
    },
  },
};

export default function CuantoCuestaEnviarUnCarroPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.americacartransport.com/es/cuanto-cuesta-enviar-un-carro#article",
        "headline": "¿Cuánto Cuesta Enviar un Carro en Estados Unidos?",
        "description": "Guía completa en español sobre los costos de transporte de vehículos por milla, según distancia, modelo y tipo de camión.",
        "author": { "@type": "Organization", "name": "America Car Transport" },
        "publisher": { "@type": "Organization", "name": "America Car Transport" },
        "datePublished": "2026-09-07"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.americacartransport.com/es" },
          { "@type": "ListItem", "position": 2, "name": "¿Cuánto Cuesta Enviar un Carro?", "item": "https://www.americacartransport.com/es/cuanto-cuesta-enviar-un-carro" }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between gap-4">
          <Link href="/es" title="America Car Transport" className="flex items-center shrink-0 my-auto">
            <img 
              src="/america-car-transport-logo.png" 
              alt="America Car Transport Logotipo" 
              width={160}
              height={72}
              className="h-[52px] sm:h-[58px] md:h-[64px] lg:h-[72px] w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-slate-700 font-semibold text-sm">
            <Link href="/es" className="hover:text-blue-600 transition-colors">Inicio</Link>
            <Link href="/es/servicios" className="hover:text-blue-600 transition-colors">Servicios</Link>
            <Link href="/es/cuanto-cuesta-enviar-un-carro" className="text-blue-600 font-extrabold transition-colors">Guía de Precios</Link>
            <Link href="/es/calculadora" className="hover:text-blue-600 transition-colors">Calculadora</Link>
            <Link href="/es/estafas-de-transporte-de-autos" className="hover:text-blue-600 transition-colors">Evitar Estafas</Link>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a href="tel:5307255383" className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs rounded-xl">
              <Phone className="w-3.5 h-3.5" /> (530) 725-5383
            </a>
          </div>
        </div>
      </header>

      <section className="relative px-4 md:px-8 lg:px-24 pt-10 pb-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto">
          <nav className="flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-500 mb-5">
            <Link href="/es">Inicio</Link><span>/</span>
            <span className="text-slate-900 font-bold">Guía de Costos</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-800 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-blue-200/80 shadow-sm">
            <DollarSign className="w-4 h-4 text-blue-600" />
            Guía Completa de Tarifas 2026 en Español
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-5">
            ¿Cuánto Cuesta Enviar un Carro en Estados Unidos?
          </h1>

          <p className="text-base md:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-8">
            El costo promedio para enviar un auto de un estado a otro en EE.UU. ronda entre <strong>$500 y $1,600</strong> para camiones abiertos. Conozca las tarifas exactas por milla y cómo calcular su presupuesto.
          </p>

          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl max-w-3xl text-xs md:text-sm text-emerald-900 font-medium">
            💡 ¿Necesita una cotización exacta para su vehículo? Pruebe nuestra <Link href="/es/calculadora" className="text-emerald-700 font-extrabold underline hover:text-emerald-800">calculadora de costo de envío</Link> sin compromiso.
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-200 font-sans">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8 space-y-12">
          
          <div className="bg-blue-50/90 border-l-4 border-blue-600 p-6 rounded-r-2xl shadow-sm">
            <div className="text-xs font-extrabold text-blue-700 uppercase tracking-widest mb-2">⚡ Respuesta Directa: Costo de Transporte</div>
            <p className="text-slate-800 text-sm md:text-base font-semibold leading-relaxed">
              El precio para enviar un vehículo en EE.UU. promedia entre <strong>$0.60 y $1.20 por milla</strong>. En trayectos cortos (menos de 500 millas), el costo promedio es de $400 a $850. En viajes largos de costa a costa (más de 1,500 millas), el precio total oscila entre $1,050 y $1,750.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Tabla de Precios por Distancia</h2>
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-extrabold uppercase text-[11px] tracking-wider">
                    <th className="py-4 px-6">Rango de Distancia</th>
                    <th className="py-4 px-6">Costo Estimado (Sedán)</th>
                    <th className="py-4 px-6">Tarifa por Milla</th>
                    <th className="py-4 px-6">Tiempo Estimado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium text-slate-800">
                  <tr>
                    <td className="py-3.5 px-6 font-bold">Corta (&lt;500 mi)</td>
                    <td className="py-3.5 px-6 text-blue-700 font-bold">$400 – $850</td>
                    <td className="py-3.5 px-6">$1.20 – $2.20 / mi</td>
                    <td className="py-3.5 px-6">1 – 3 días</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-bold">Media (500–1,500 mi)</td>
                    <td className="py-3.5 px-6 text-blue-700 font-bold">$700 – $1,250</td>
                    <td className="py-3.5 px-6">$0.70 – $1.00 / mi</td>
                    <td className="py-3.5 px-6">3 – 5 días</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-bold">Larga (&gt;1,500 mi)</td>
                    <td className="py-3.5 px-6 text-emerald-700 font-bold">$1,050 – $1,750</td>
                    <td className="py-3.5 px-6">$0.40 – $0.70 / mi</td>
                    <td className="py-3.5 px-6">6 – 9 días</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black mb-4">Cotice su Envío Gratis en Español</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-medium">
              Consiga el mejor precio para su vehículo sin necesidad de pagar depósitos anticipados.
            </p>
            <Link href="/es/calculadora" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#FF852d] text-white px-6 py-3.5 rounded-xl font-extrabold text-sm shadow-md">
              Usar Calculadora de Costos →
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
