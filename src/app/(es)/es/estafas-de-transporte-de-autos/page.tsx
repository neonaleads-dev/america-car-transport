import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import SpanishGuideContent from "@/components/es/SpanishGuideContent";
import { esGuides } from "@/data/es-guides";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { Phone, AlertTriangle, ShieldCheck, CheckCircle2, Lock } from "lucide-react";

import SiteHeader from "@/components/layout/SiteHeader";
export const metadata = {
  title: "Cómo Evitar Estafas de Transporte de Autos en EE.UU. (Guía 2026)",
  description: "Aprenda a detectar estafas al enviar su automóvil. Registro FMCSA, depósitos fraudulentos y cómo conseguir un transporte de carros confiable.",
  alternates: {
    canonical: "https://www.americacartransport.com/es/estafas-de-transporte-de-autos",
    languages: {
      "en-US": "https://www.americacartransport.com/resources/how-to-avoid-car-shipping-scams",
      "es-US": "https://www.americacartransport.com/es/estafas-de-transporte-de-autos",
    },
  },
};

export default function EstafasDeTransporteDeAutosPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <SiteHeader lang="es" />

      <section className="relative px-4 md:px-8 lg:px-24 pt-10 pb-16 bg-paper border-b border-slate-200">
        <div className="max-w-[1000px] mx-auto">
          <nav className="flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-500 mb-5">
            <Link href="/es">Inicio</Link><span>/</span>
            <span className="text-slate-900 font-bold">Evitar Estafas</span>
          </nav>

          <p className="act-eyebrow !mb-5">Guía de Protección al Consumidor 2026</p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-5">
            Guía para Evitar Estafas de Transporte de Autos
          </h1>

          <p className="text-base md:text-xl text-slate-600 font-medium leading-relaxed mb-8">
            Conozca las 5 señaes principales de fraude, cómo verificar la licencia de la empresa en la FMCSA y dónde obtener un <strong className="text-slate-900">transporte de carros confiable</strong> en EE.UU.
          </p>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Señales Principales de Advertencia</h2>
            <div className="space-y-3 text-xs md:text-sm text-slate-700 font-medium">
              <div className="p-3 bg-red-50 text-red-900 rounded-xl font-bold">1. Precios excesivamente bajos (Cebo de Tarifas)</div>
              <div className="p-3 bg-red-50 text-red-900 rounded-xl font-bold">2. Exigencia de transferencias o depósitos no rastreables (Zelle, Western Union)</div>
              <div className="p-3 bg-red-50 text-red-900 rounded-xl font-bold">3. Cobros de depósito antes de asignar camionero</div>
            </div>
            <p className="text-xs text-slate-600 font-medium">
              Antes de aceptar una oferta sosopechosa, consulte la <Link href="/es/calculadora" className="text-blue-600 font-bold underline">calculadora de costo de envío</Link> para conocer las tarifas reales del mercado.
            </p>
          </div>
        </div>
      </section>

      <SpanishGuideContent guide={esGuides["estafas"]} />

      <Footer />
    </main>
  );
}
