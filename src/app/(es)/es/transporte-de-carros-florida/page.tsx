import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import { Phone, MapPin } from "lucide-react";

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
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between gap-4">
          <Link href="/es" title="America Car Transport"><img src="/america-car-transport-logo.png" alt="America Car Transport" width={160} height={72} className="h-[52px] sm:h-[58px] md:h-[64px] lg:h-[72px] w-auto object-contain" /></Link>
          <nav className="hidden lg:flex items-center gap-6 text-slate-700 font-semibold text-sm">
            <Link href="/es">Inicio</Link>
            <Link href="/es/servicios">Servicios</Link>
            <Link href="/es/calculadora">Calculadora</Link>
            <Link href="/es/cuanto-cuesta-enviar-un-carro">Precios</Link>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a href="tel:5307255383" className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 font-bold text-xs rounded-xl">(530) 725-5383</a>
          </div>
        </div>
      </header>

      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white border-b border-slate-800 px-4 md:px-8 lg:px-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 xl:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold border border-blue-500/30">
              <MapPin className="w-4 h-4 text-blue-400" /> Servicio Especializado en Florida
            </div>
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

      <Footer />
    </main>
  );
}
