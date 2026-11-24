import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { Phone, DollarSign, ShieldCheck, CheckCircle2, ArrowRight, Truck, Calculator } from "lucide-react";

import SiteHeader from "@/components/layout/SiteHeader";
export const metadata = {
  title: "¿Cuánto Cuesta Enviar un Carro en EE.UU.? (Guía de Precios 2026)",
  description: "Descubra cuánto cuesta enviar un carro de estado a estado en EE.UU. Tablas de precios por milla 2026, ajuste por tipo de vehículo y cotización gratis.",
  alternates: {
    canonical: "https://www.americacartransport.com/es/cuanto-cuesta-enviar-un-carro",
    languages: {
      "en-US": "https://www.americacartransport.com/tools/car-shipping-cost-calculator",
      "es-US": "https://www.americacartransport.com/es/cuanto-cuesta-enviar-un-carro",
    },
  },
};

const rutasEjemplo = [
  { ruta: "Los Ángeles, CA → Miami, FL", millas: "2,700", precio: "$1,100 – $1,600", dias: "5 – 7 días" },
  { ruta: "Houston, TX → Los Ángeles, CA", millas: "1,540", precio: "$980 – $1,280", dias: "3 – 5 días" },
  { ruta: "San Francisco, CA → Chicago, IL", millas: "2,100", precio: "$950 – $1,350", dias: "4 – 6 días" },
  { ruta: "Miami, FL → Atlanta, GA", millas: "660", precio: "$700 – $1,250", dias: "3 – 5 días" },
  { ruta: "Houston, TX → Dallas, TX", millas: "240", precio: "$400 – $850", dias: "1 – 3 días" },
];

const precioFaqs = [
  {
    q: "¿Cuánto cuesta trasladar un carro de un estado a otro?",
    a: "Trasladar un carro de un estado a otro en EE.UU. cuesta en promedio entre $500 y $1,600 en transporte abierto. Para estados vecinos (menos de 500 millas) el precio suele estar entre $400 y $850, y de costa a costa (más de 1,500 millas) entre $1,050 y $1,750.",
  },
  {
    q: "¿Cuánto cuesta transportar un carro por milla?",
    a: "La tarifa promedio está entre $0.60 y $1.20 por milla. En trayectos cortos la tarifa por milla es más alta ($1.20 – $2.20) y en viajes largos es más baja ($0.40 – $0.70), porque los costos de carga y despacho se reparten entre más millas.",
  },
  {
    q: "¿Qué hace que el precio de transporte de vehículos suba o baje?",
    a: "Los factores principales son la distancia, el tamaño del vehículo, el tipo de camión (abierto o cerrado), si el carro funciona o no, la temporada (verano y temporada de 'snowbirds' en otoño suben los precios) y qué tan popular es la ruta.",
  },
  {
    q: "¿Es más barato manejar o enviar mi carro?",
    a: "Para menos de 200–300 millas, manejar suele ser más barato. En distancias más largas, enviar el carro normalmente sale mejor cuando se suman gasolina, hoteles, comidas, desgaste del vehículo y el valor de su tiempo.",
  },
  {
    q: "¿Tengo que pagar un depósito para reservar?",
    a: "No. America Car Transport no pide depósito por adelantado. Desconfíe de cualquier empresa que exija un pago grande antes de asignar un transportista verificado.",
  },
];

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
        "datePublished": "2026-09-07",
        "dateModified": "2026-11-20"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.americacartransport.com/es/cuanto-cuesta-enviar-un-carro#faq",
        "mainEntity": precioFaqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
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

      <SiteHeader lang="es" />

      <section className="relative px-4 md:px-8 lg:px-24 pt-10 pb-16 bg-paper border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto">
          <nav className="flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-500 mb-5">
            <Link href="/es">Inicio</Link><span>/</span>
            <span className="text-slate-900 font-bold">Guía de Costos</span>
          </nav>

          <p className="act-eyebrow !mb-5">Guía Completa de Tarifas 2026 en Español</p>

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

          {/* State-to-state answer with real route examples */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">¿Cuánto Cuesta Trasladar un Carro de un Estado a Otro?</h2>
            <p className="text-sm md:text-base text-slate-700 font-medium leading-relaxed mb-6">
              Trasladar un carro de un estado a otro cuesta en promedio <strong>entre $500 y $1,600</strong> en transporte abierto. Estos son precios de ejemplo para rutas populares (sedán, transporte abierto):
            </p>
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-extrabold uppercase text-[11px] tracking-wider">
                    <th className="py-4 px-6">Ruta</th>
                    <th className="py-4 px-6">Millas</th>
                    <th className="py-4 px-6">Precio Estimado</th>
                    <th className="py-4 px-6">Tiempo de Tránsito</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium text-slate-800">
                  {rutasEjemplo.map((r) => (
                    <tr key={r.ruta}>
                      <td className="py-3.5 px-6 font-bold">{r.ruta}</td>
                      <td className="py-3.5 px-6">{r.millas}</td>
                      <td className="py-3.5 px-6 text-blue-700 font-bold">{r.precio}</td>
                      <td className="py-3.5 px-6">{r.dias}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-3">
              Precios de referencia. El precio final depende de la fecha, la temporada y la disponibilidad de camiones en su ruta.
            </p>
          </div>

          {/* Open vs enclosed + vehicle type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl font-black text-slate-900 mb-3">Precios de Transporte de Vehículos: Abierto vs. Cerrado</h2>
              <p className="text-sm text-slate-700 font-medium leading-relaxed">
                El <strong>transporte abierto</strong> es la opción más económica y la que usa la gran mayoría de los clientes. El <strong>transporte cerrado</strong> protege el carro del clima y del polvo, y cuesta alrededor de <strong>40–60% más</strong>. Se recomienda para carros clásicos, de lujo o exóticos.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h2 className="text-xl font-black text-slate-900 mb-3">Precio Según el Tipo de Vehículo</h2>
              <ul className="text-sm text-slate-700 font-medium space-y-2">
                <li><strong>Sedán:</strong> precio base</li>
                <li><strong>SUV o minivan:</strong> alrededor de +10–15%</li>
                <li><strong>Camioneta pickup:</strong> alrededor de +15–20%</li>
                <li><strong>Carro que no enciende:</strong> cargo adicional por el malacate (winch)</li>
              </ul>
            </div>
          </div>

          {/* Ways to save */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Cómo Pagar Menos por Enviar su Carro</h2>
            <ul className="space-y-3 text-sm md:text-base text-slate-700 font-medium">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" /><span>Sea flexible con la fecha de recogida: una ventana más amplia permite encontrar un camión a mejor precio.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" /><span>Evite las temporadas altas (verano y la temporada de &ldquo;snowbirds&rdquo; hacia Florida y Arizona en otoño). De febrero a abril los precios suelen ser más bajos.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" /><span>Elija transporte abierto si su carro no es clásico ni de lujo.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" /><span>Compare cotizaciones reales para su ruta y desconfíe de un precio mucho más bajo que todos los demás. Lea nuestra <Link href="/es/estafas-de-transporte-de-autos" className="text-blue-700 font-bold underline">guía para evitar estafas</Link>.</span></li>
            </ul>
          </div>

          {/* Quote calculator directly on the price guide */}
          <div id="cotizacion" className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-3">
              <h2 className="text-2xl md:text-3xl font-black">Calcule el Precio Exacto para su Ruta</h2>
              <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed">
                Ingrese sus códigos postales y su vehículo para recibir una cotización gratis, sin depósito por adelantado y con atención en español.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <QuoteCalculator lang="es" />
            </div>
          </div>

          {/* Visible FAQ (matches FAQPage schema) */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Preguntas Frecuentes sobre Precios</h2>
            <div className="space-y-4">
              {precioFaqs.map((f) => (
                <details key={f.q} className="bg-slate-50 rounded-2xl border border-slate-200 p-5">
                  <summary className="font-extrabold text-slate-900 cursor-pointer">{f.q}</summary>
                  <p className="mt-3 text-sm md:text-base text-slate-700 font-medium leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black mb-4">Cotice su Envío Gratis en Español</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-medium">
              Consiga el mejor precio para su vehículo sin necesidad de pagar depósitos anticipados.
            </p>
            <Link href="/es/calculadora" className="inline-flex items-center gap-2 bg-signal hover:bg-signal-700 text-white px-6 py-3.5 rounded-xl font-extrabold text-sm shadow-md">
              Usar Calculadora de Costos →
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
