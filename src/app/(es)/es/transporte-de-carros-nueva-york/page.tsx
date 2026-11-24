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
  title: "Enviar Carro a Nueva York | Transporte de Autos en NY",
  description: "Transporte seguro y económico de carros hacia y desde Nueva York (NYC, Buffalo, Rochester). Cotizaciones en español sin depósito previo.",
  alternates: {
    canonical: "https://www.americacartransport.com/es/transporte-de-carros-nueva-york",
    languages: {
      "en-US": "https://www.americacartransport.com/locations/new-york",
      "es-US": "https://www.americacartransport.com/es/transporte-de-carros-nueva-york",
    },
  },
};

export default function TransporteDeCarrosNuevaYorkPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <SiteHeader lang="es" />

      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white border-b border-slate-800 px-4 md:px-8 lg:px-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 xl:col-span-7 space-y-6">
            <p className="act-eyebrow !text-navy-200 !mb-0">Servicio Especializado en Nueva York</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
              Enviar Carro a Nueva York (NYC, Buffalo, Albany)
            </h1>
            <p className="text-base md:text-lg text-slate-300 font-medium leading-relaxed">
              Servicio rápido de envío de autos a Nueva York. Utilice nuestra <Link href="/es/calculadora" className="text-blue-400 font-bold underline">calculadora de costo de envío</Link>.
            </p>
          </div>
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
            <QuoteCalculator lang="es" />
          </div>
        </div>
      </section>

      <SpanishGuideContent guide={esGuides["nueva-york"]} />

      <Footer />
    </main>
  );
}
