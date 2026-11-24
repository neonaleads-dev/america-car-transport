import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import SpanishGuideContent from "@/components/es/SpanishGuideContent";
import { esGuides } from "@/data/es-guides";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import { Phone, MapPin, CheckCircle2, ArrowRight, ShieldCheck, DollarSign } from "lucide-react";

import SiteHeader from "@/components/layout/SiteHeader";
export const metadata = {
  title: "Transporte de Carros en Texas | Envíos Puerta a Puerta en EE.UU.",
  description: "Servicio profesional de transporte de carros en Texas (Houston, Dallas, Austin, San Antonio). Cotizaciones instantáneas sin depósito inicial, 100% en español.",
  alternates: {
    canonical: "https://www.americacartransport.com/es/transporte-de-carros-texas",
    languages: {
      "en-US": "https://www.americacartransport.com/locations/texas",
      "es-US": "https://www.americacartransport.com/es/transporte-de-carros-texas",
    },
  },
};

export default function TransporteDeCarrosTexasPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Transporte de Carros en Texas",
        "description": "Servicio de transporte automotriz en Texas para envíos interestatales e intraestatales.",
        "areaServed": { "@type": "State", "name": "Texas" },
        "provider": { "@type": "Organization", "name": "America Car Transport" }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.americacartransport.com/es" },
          { "@type": "ListItem", "position": 2, "name": "Texas", "item": "https://www.americacartransport.com/es/transporte-de-carros-texas" }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <SiteHeader lang="es" />

      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white border-b border-slate-800 px-4 md:px-8 lg:px-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 xl:col-span-7 space-y-6">
            <p className="act-eyebrow !text-navy-200 !mb-0">Servicio Especializado en Texas</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
              Transporte de Carros en Texas (Houston, Dallas, Austin, San Antonio)
            </h1>
            <p className="text-base md:text-lg text-slate-300 font-medium leading-relaxed">
              Envíe su carro hacia o desde Texas con transportistas 100% asegurados y licencias FMCSA. Calcule su <Link href="/es/calculadora" className="text-blue-400 font-bold underline">cuánto cuesta enviar un carro</Link> desde Texas.
            </p>
          </div>
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
            <QuoteCalculator lang="es" />
          </div>
        </div>
      </section>

      <SpanishGuideContent guide={esGuides["texas"]} />

      <Footer />
    </main>
  );
}
