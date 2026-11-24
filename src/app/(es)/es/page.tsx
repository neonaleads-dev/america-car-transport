import React from "react";
import Link from "next/link";
import { ShieldCheck, Phone, Star, MapPin, DollarSign, Compass, Zap, Shield, Building2, Sliders, ArrowRight, CheckCircle2, Award, Clock } from "lucide-react";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

import SiteHeader from "@/components/layout/SiteHeader";
export const metadata = {
  title: "Transporte de Autos en EE.UU. | Cotización Gratis de Envío de Vehículos",
  description: "Transporte de vehículos confiable en Estados Unidos con America Car Transport. Cotización instantánea sin depósito inicial. Envíos abiertos y cerrados puerta a puerta.",
  alternates: {
    canonical: "https://www.americacartransport.com/es",
    languages: {
      "en-US": "https://www.americacartransport.com/",
      "es-US": "https://www.americacartransport.com/es",
    },
  },
};

export default function SpanishHomePage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.americacartransport.com/#organization",
        "name": "America Car Transport",
        "url": "https://www.americacartransport.com/es",
        "logo": "https://www.americacartransport.com/america-car-transport-logo.png",
        "telephone": "(530) 725-5383",
        "description": "Empresa líder en transporte de vehículos en Estados Unidos. Envíos seguros puerta a puerta con $0 de depósito inicial."
      },
      {
        "@type": "Service",
        "@id": "https://www.americacartransport.com/es#service",
        "name": "Servicio de Transporte de Autos en Estados Unidos",
        "serviceType": "Transporte de Vehículos, Envío de Carros de Estado a Estado",
        "provider": {
          "@type": "Organization",
          "name": "America Car Transport"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.americacartransport.com/es#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.americacartransport.com/es" }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }} />

      {/* Header Bar */}
      <SiteHeader lang="es" active="home" />

      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white overflow-hidden">
        <div className="act-container pt-10 pb-14 md:pt-16 md:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          
          <div className="lg:col-span-6 xl:col-span-7 space-y-6">
            <p className="act-eyebrow !text-navy-200 !mb-0">Atención Telefónica en Español · Sin Depósito Inicial</p>

            <h1 className="text-4xl md:text-5xl lg:text-[3.8rem] font-bold leading-[1.04] tracking-tight">
              Transporte de Autos en EE.UU. <span className="text-navy-200">Seguro y Confiable</span>
            </h1>

            <p className="text-lg md:text-xl text-navy-100 leading-relaxed max-w-xl">
              Enviamos su vehículo a cualquier estado de EE.UU. con transportistas verificados, seguro de carga completo y $0 de depósito por adelantado.
            </p>

            <div className="border-t border-white/15 pt-6 space-y-2.5 max-w-xl">
              <div className="flex items-center gap-3 text-[15px] text-navy-50">
                <CheckCircle2 className="w-4 h-4 text-brass-300 shrink-0" aria-hidden="true" />
                <span>Servicio Puerta a Puerta en Todo el País</span>
              </div>
              <div className="flex items-center gap-3 text-[15px] text-navy-50">
                <CheckCircle2 className="w-4 h-4 text-brass-300 shrink-0" aria-hidden="true" />
                <span>Corredor con Licencia Oficial y Fianza</span>
              </div>
              <div className="flex items-center gap-3 text-[15px] text-navy-50">
                <CheckCircle2 className="w-4 h-4 text-brass-300 shrink-0" aria-hidden="true" />
                <span>Asistencia 100% en Español Disponible</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="tel:5307255383" className="inline-flex items-center gap-2 h-12 px-6 rounded-md border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors">
                <Phone className="w-4 h-4" aria-hidden="true" /> Llamar en Español: (530) 725-5383
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
            <QuoteCalculator />
          </div>

        </div>
      </section>

      {/* AEO Direct Answer & FAQ Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8 space-y-12">
          
          {/* Direct Answer Box */}
          <div className="bg-blue-50/80 border border-blue-200 p-6 rounded-2xl space-y-3">
            <div className="text-xs font-extrabold text-blue-700 uppercase tracking-widest">Respuesta Directa de Transporte</div>
            <h2 className="text-2xl font-black text-slate-900">¿Cómo Funciona el Envío de Autos de Estado a Estado?</h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              El proceso consta de 3 pasos sencillos: 1) Solicitud de cotización sin depósito por adelantado, 2) Asignación de camión transportista verificado por la USDOT con inspección inicial del vehículo, y 3) Entrega directa puerta a puerta en su destino final con pago al momento de la entrega.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Preguntas Frecuentes (FAQ)</h3>
            
            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h4 className="font-extrabold text-slate-900 text-base">¿Cuánto cuesta enviar un auto en Estados Unidos?</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  El costo varía según la distancia, tamaño del vehículo y tipo de camión (abierto o cerrado). En envíos promedio de estado a estado, los precios varían entre $500 y $1,500.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h4 className="font-extrabold text-slate-900 text-base">¿Está mi automóvil asegurado durante el viaje?</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Sí. Todos los camiones de nuestra red cuentan con seguro de carga completo sin deducible para el propietario.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
