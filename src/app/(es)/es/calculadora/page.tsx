import React from "react";
import Link from "next/link";
import { Phone, Calculator, ShieldCheck, CheckCircle2, HelpCircle, ArrowRight, Truck, DollarSign, Clock, AlertTriangle } from "lucide-react";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export const metadata = {
  title: "Calculadora de Costos de Envío de Autos | Cotización Gratis en Español 2026",
  description: "Calcule el costo exacto de enviar su automóvil entre cualquier estado en EE.UU. Tarifas por milla 2026, sin depósito inicial, 100% en español.",
  alternates: {
    canonical: "https://www.americacartransport.com/es/calculadora",
    languages: {
      "en-US": "https://www.americacartransport.com/tools/car-shipping-cost-calculator",
      "es-US": "https://www.americacartransport.com/es/calculadora",
    },
  },
};

export default function SpanishCalculatorPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": "https://www.americacartransport.com/es/calculadora#app",
        "name": "Calculadora de Costos de Envío de Autos",
        "url": "https://www.americacartransport.com/es/calculadora",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.americacartransport.com/es/calculadora#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Cuánto cuesta enviar un auto en Estados Unidos?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "El costo promedio para transportar un carro en EE.UU. varía entre $500 y $1,600 según la distancia. Rutas cortas (<500 millas) promedian $1.20–$2.20 por milla, mientras que envíos de costa a costa (>1,500 millas) promedian $0.40–$0.70 por milla."
            }
          },
          {
            "@type": "Question",
            "name": "¿Hay cargos ocultos en la calculadora de envio?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Todas las cotizaciones emitidas por America Car Transport incluyen seguro de carga completo, combustible, peajes y servicio puerta a puerta sin depósitos ni tarifas ocultas."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.americacartransport.com/es/calculadora#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.americacartransport.com/es" },
          { "@type": "ListItem", "position": 2, "name": "Calculadora de Costos", "item": "https://www.americacartransport.com/es/calculadora" }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between gap-4">
          <Link href="/es" title="America Car Transport" className="flex items-center shrink-0 my-auto">
            <img 
              src="/america-car-transport-logo.png" 
              alt="America Car Transport Logotipo Oficial" 
              width={160}
              height={72}
              // @ts-ignore
              fetchpriority="high"
              className="h-[52px] sm:h-[58px] md:h-[64px] lg:h-[72px] w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-slate-700 font-semibold text-sm">
            <Link href="/es" className="hover:text-blue-600 transition-colors">Inicio</Link>
            <Link href="/es/servicios" className="hover:text-blue-600 transition-colors">Servicios</Link>
            <Link href="/es/cuanto-cuesta-enviar-un-carro" className="hover:text-blue-600 transition-colors">Guía de Precios</Link>
            <Link href="/es/calculadora" className="text-blue-600 font-extrabold transition-colors">Calculadora de Costos</Link>
            <Link href="/es/estafas-de-transporte-de-autos" className="hover:text-blue-600 transition-colors">Evitar Estafas</Link>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a href="tel:5307255383" className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs rounded-xl">
              <Phone className="w-3.5 h-3.5" />
              (530) 725-5383
            </a>
          </div>
        </div>
      </header>

      {/* Breadcrumb Bar */}
      <div className="bg-slate-900 border-b border-slate-800 py-3 px-4 md:px-8 text-xs font-semibold text-slate-400">
        <div className="max-w-[1400px] mx-auto flex items-center gap-2">
          <Link href="/es" className="hover:text-blue-400 transition-colors">Inicio</Link>
          <span className="text-slate-700">/</span>
          <span className="text-white font-bold">Calculadora de Costos</span>
        </div>
      </div>

      {/* Calculator Main Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white border-b border-slate-800 px-4 md:px-8 lg:px-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 xl:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold border border-blue-500/30">
              <Calculator className="w-4 h-4 text-blue-400" />
              Calculadora de Tarifas Garantizadas 2026
            </div>

            <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
              Calculadora de Costo de Envío de Carros en EE.UU.
            </h1>

            <p className="text-base md:text-lg text-slate-300 font-medium leading-relaxed">
              Obtenga una cotización exacta e instantánea para transportar su vehículo de estado a estado. Sin depósitos anticipados y con atención 100% en español.
            </p>

            <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-3 text-sm font-bold text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>100% Gratis — Sin Depósito por Adelantado</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Transporte Abierto y Cerrado Disponible</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Atención Telefónica en Español al (530) 725-5383</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
            <QuoteCalculator lang="es" />
          </div>

        </div>
      </section>

      {/* Expanded Content Section: Spanish Cost Guide & Data Tables */}
      <section className="py-16 bg-white border-b border-slate-200 font-sans">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8 space-y-16">
          
          {/* Direct Answer Box */}
          <div className="bg-blue-50/90 border-l-4 border-blue-600 p-6 rounded-r-2xl shadow-sm">
            <div className="text-xs font-extrabold text-blue-700 uppercase tracking-widest mb-2">⚡ Respuesta Directa sobre Tarifas de Envío</div>
            <p className="text-slate-800 text-sm md:text-base font-semibold leading-relaxed">
              El costo de enviar un carro depende principalmente de la distancia, el tamaño del vehículo (sedán, SUV o camioneta) y el tipo de remolque (abierto o cerrado). Para una guía detallada con ejemplos por estado, consulte nuestra <Link href="/es/cuanto-cuesta-enviar-un-carro" className="text-blue-700 font-extrabold underline hover:text-blue-800">guía de cuanto cuesta enviar un carro</Link>.
            </p>
          </div>

          {/* Pricing Table by Distance Tier */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Tabla de Costos Promedio por Distancia (2026)</h2>
            <p className="text-sm text-slate-600 font-medium mb-6">
              Las tarifas por milla disminuyen a medida que aumenta la distancia total del trayecto:
            </p>

            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-extrabold uppercase text-[11px] tracking-wider">
                    <th className="py-4 px-6">Distancia del Envío</th>
                    <th className="py-4 px-6">Costo Estimado (Sedán Abierto)</th>
                    <th className="py-4 px-6">Costo Promedio por Milla</th>
                    <th className="py-4 px-6">Ruta de Ejemplo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium text-slate-800">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">Menos de 500 millas</td>
                    <td className="py-4 px-6 text-blue-700 font-extrabold">$400 – $850</td>
                    <td className="py-4 px-6 font-mono text-slate-700">$1.20 – $2.20 / mi</td>
                    <td className="py-4 px-6 text-slate-600">Houston, TX → Dallas, TX</td>
                  </tr>
                  <tr className="bg-slate-50/50 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">500 a 1,500 millas</td>
                    <td className="py-4 px-6 text-blue-700 font-extrabold">$700 – $1,250</td>
                    <td className="py-4 px-6 font-mono text-slate-700">$0.70 – $1.00 / mi</td>
                    <td className="py-4 px-6 text-slate-600">Miami, FL → Atlanta, GA</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">Más de 1,500 millas (Costa a Costa)</td>
                    <td className="py-4 px-6 text-emerald-700 font-extrabold">$1,050 – $1,750</td>
                    <td className="py-4 px-6 font-mono text-slate-700">$0.40 – $0.70 / mi</td>
                    <td className="py-4 px-6 text-slate-600">Los Ángeles, CA → Nueva York, NY</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Popular Spanish State Hub Links */}
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-6">Guías de Transporte de Carros por Estado</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/es/transporte-de-carros-texas" className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 transition-all font-bold text-slate-900 text-sm flex items-center justify-between group">
                <span>Texas (TX)</span>
                <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/es/transporte-de-carros-california" className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 transition-all font-bold text-slate-900 text-sm flex items-center justify-between group">
                <span>California (CA)</span>
                <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/es/transporte-de-carros-florida" className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 transition-all font-bold text-slate-900 text-sm flex items-center justify-between group">
                <span>Florida (FL)</span>
                <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/es/transporte-de-carros-nueva-york" className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 transition-all font-bold text-slate-900 text-sm flex items-center justify-between group">
                <span>Nueva York (NY)</span>
                <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Trust Banner */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl font-black mb-3">Evite Estafas al Enviar su Vehículo</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
              Nunca pague depósitos por adelantado antes de que se le asigne un camionero verificado. Consulte nuestra <Link href="/es/estafas-de-transporte-de-autos" className="text-blue-400 underline font-bold hover:text-blue-300">guía de estafas de transporte de autos</Link> para conocer las señales de alerta.
            </p>
            <a href="tel:5307255383" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#FF852d] text-white px-6 py-3 rounded-xl font-extrabold text-sm shadow-md">
              <Phone className="w-4 h-4" /> Hablar con un Asesor en Español: (530) 725-5383
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
