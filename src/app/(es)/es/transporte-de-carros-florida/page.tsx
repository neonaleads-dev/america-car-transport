import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import SpanishGuideContent from "@/components/es/SpanishGuideContent";
import { esGuides } from "@/data/es-guides";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import { Phone, MapPin } from "lucide-react";

import SiteHeader from "@/components/layout/SiteHeader";
export const metadata = {
  title: "Transporte de Carros en Florida | Envíos a todo EE.UU.",
  description: "Servicios de transporte de autos hacia y desde Florida (Miami, Orlando, Tampa, Jacksonville). Cotizaciones inmediatas y sin depósito.",
  alternates: {
    canonical: "https://www.americacartransport.com/es/transporte-de-carros-florida",
    languages: {
      "en-US": "https://www.americacartransport.com/locations/florida",
      "es-US": "https://www.americacartransport.com/es/transporte-de-carros-florida",
    },
  },
};

export default function TransporteDeCarrosFloridaPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <SiteHeader lang="es" />

      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white border-b border-slate-800 px-4 md:px-8 lg:px-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 xl:col-span-7 space-y-6">
            <p className="act-eyebrow !text-navy-200 !mb-0">Servicio Especializado en Florida</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
              Transporte de Carros en Florida (Miami, Orlando, Tampa)
            </h1>
            <p className="text-base md:text-lg text-slate-300 font-medium leading-relaxed">
              Envíe su vehículo desde o hacia Florida. Revise nuestra <Link href="/es/calculadora" className="text-blue-400 font-bold underline">calculadora de costo de envío</Link>.
            </p>
          </div>
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
            <QuoteCalculator lang="es" />
          </div>
        </div>
      </section>

      <SpanishGuideContent guide={esGuides["florida"]} />

      <Footer />
    </main>
  );
}
