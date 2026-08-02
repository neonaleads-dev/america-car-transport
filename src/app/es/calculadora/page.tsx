import React from "react";
import Link from "next/link";
import { Phone, Calculator, ShieldCheck, CheckCircle2, HelpCircle } from "lucide-react";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export const metadata = {
  title: "Calculadora de Costos de Envío de Autos | Cotización Gratis en Español",
  description: "Calcule el costo instantáneo de enviar su automóvil de estado a estado en EE.UU. Sin depósito inicial, sin compromiso. Tarifas garantizadas de transporte.",
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
            <Link href="/es/calculadora" className="text-blue-600 font-extrabold transition-colors">Calculadora de Costos</Link>
            <Link href="/locations" className="hover:text-blue-600 transition-colors">Ubicaciones</Link>
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
              ¿Cuánto Cuesta Enviar un Carro en EE.UU.?
            </h1>

            <p className="text-base md:text-lg text-slate-300 font-medium leading-relaxed">
              Obtenga una estimación instantánea para enviar su automóvil entre cualquier ciudad de Estados Unidos. Sin compromiso y sin depósito inicial.
            </p>

            <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-3 text-sm font-bold text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>100% Gratuito — Sin Depósito por Adelantado</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Tarifas Garantizadas para Transporte Abierto y Cerrado</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Atención Telefónica en Español Disponible</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
            <QuoteCalculator />
          </div>

        </div>
      </section>

      {/* AEO Direct Answer & FAQ Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8 space-y-8">
          <div className="bg-blue-50/80 border border-blue-200 p-6 rounded-2xl space-y-3">
            <div className="text-xs font-extrabold text-blue-700 uppercase tracking-widest">Respuesta Directa de Tarifas</div>
            <h2 className="text-2xl font-black text-slate-900">¿Cómo se Calcula el Costo de Transporte?</h2>
            <p className="text-slate-700 text-sm leading-relaxed font-medium">
              El precio del envío se calcula combinando la distancia total en millas, la tarifa actual por milla del camión transportista, el tamaño y peso del vehículo, y el nivel de protección seleccionado (transporte abierto o cerrado).
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-black text-slate-900">Preguntas Frecuentes de Costos</h3>
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
              <h4 className="font-extrabold text-slate-900 text-base">¿Hay cargos ocultos en la calculadora?</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                No. La cotización calculada incluye seguro de carga completo, combustible, peajes y entrega puerta a puerta sin tarifas ocultas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
