import React from "react";
import Link from "next/link";
import { Phone, Shield, MapPin, Building2, Zap, DollarSign, Star, ShieldCheck, Compass } from "lucide-react";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export const metadata = {
  title: "Servicios de Transporte de Vehículos | Opciones de Envío de Autos",
  description: "Descubra todas las opciones de transporte de vehículos de America Car Transport en EE.UU. Envíos abiertos, cerrados, puerta a puerta y acelerados.",
  alternates: {
    canonical: "https://americacartransport.com/es/servicios",
    languages: {
      "en-US": "https://americacartransport.com/services",
      "es-US": "https://americacartransport.com/es/servicios",
    },
  },
};

export default function SpanishServicesPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "@id": "https://americacartransport.com/es/servicios#list",
        "name": "Servicios de Transporte de Vehículos en Español",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Transporte Abierto de Autos", "url": "https://americacartransport.com/services/open-auto-transport" },
          { "@type": "ListItem", "position": 2, "name": "Transporte Cerrado de Autos", "url": "https://americacartransport.com/services/enclosed-auto-transport" },
          { "@type": "ListItem", "position": 3, "name": "Envío Puerta a Puerta", "url": "https://americacartransport.com/services/door-to-door-transport" }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://americacartransport.com/es/servicios#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://americacartransport.com/es" },
          { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://americacartransport.com/es/servicios" }
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
            <Link href="/es/servicios" className="text-blue-600 font-extrabold transition-colors">Servicios</Link>
            <Link href="/es/calculadora" className="hover:text-blue-600 transition-colors">Calculadora</Link>
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

      {/* Breadcrumbs */}
      <div className="bg-slate-900 border-b border-slate-800 py-3 px-4 md:px-8 text-xs font-semibold text-slate-400">
        <div className="max-w-[1400px] mx-auto flex items-center gap-2">
          <Link href="/es" className="hover:text-blue-400 transition-colors">Inicio</Link>
          <span className="text-slate-700">/</span>
          <span className="text-white font-bold">Servicios</span>
        </div>
      </div>

      {/* Services Grid Header */}
      <section className="py-20 px-4 md:px-8 lg:px-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <div className="text-blue-400 font-extrabold tracking-widest uppercase text-xs mb-3">Nuestros Servicios</div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-3">
              Soluciones de Transporte de Autos en EE.UU.
            </h1>
            <p className="text-slate-300 text-base max-w-2xl mx-auto font-medium">
              Elija la mejor opción de envío según su presupuesto, tipo de vehículo y tiempo de entrega.
            </p>
            <div className="w-14 h-1 bg-blue-500 mx-auto mt-5 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card 1 */}
            <Link href="/services/open-auto-transport" className="group relative rounded-2xl overflow-hidden h-60 block shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <img src="/america-car-transport-open-car-shipping-affordable.png" alt="Transporte Abierto" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 z-10">
                <div className="text-white font-extrabold text-lg">Transporte Abierto</div>
                <div className="text-slate-300 text-xs font-medium">Opción económica estándar · 90% de los envíos</div>
              </div>
              <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">Más Económico</div>
            </Link>

            {/* Card 2 */}
            <Link href="/services/enclosed-auto-transport" className="group relative rounded-2xl overflow-hidden h-60 block shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <img src="/america-car-transport-enclosed-auto-transport-premium-protection.png" alt="Transporte Cerrado" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 z-10">
                <div className="text-white font-extrabold text-lg">Transporte Cerrado</div>
                <div className="text-slate-300 text-xs font-medium">Protección total contra clima para autos de lujo</div>
              </div>
              <div className="absolute top-3 left-3 bg-purple-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">Protección Premium</div>
            </Link>

            {/* Card 3 */}
            <Link href="/services/door-to-door-transport" className="group relative rounded-2xl overflow-hidden h-60 block shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <img src="/america-car-transport-door-to-door-vehicle-shipping-service.png" alt="Envío Puerta a Puerta" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 z-10">
                <div className="text-white font-extrabold text-lg">Envío Puerta a Puerta</div>
                <div className="text-slate-300 text-xs font-medium">Recogida y entrega directa en su domicilio</div>
              </div>
              <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">Máxima Comodidad</div>
            </Link>

            {/* Card 4 */}
            <Link href="/services/terminal-to-terminal-shipping" className="group relative rounded-2xl overflow-hidden h-60 block shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <img src="/terminal-to-terminal-car-shipping-vehicle-dropoff.jpg" alt="Terminal a Terminal" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 z-10">
                <div className="text-white font-extrabold text-lg">Envío Terminal a Terminal</div>
                <div className="text-slate-300 text-xs font-medium">Ahorre entre $100 y $300 adicional</div>
              </div>
              <div className="absolute top-3 left-3 bg-cyan-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">Ahorro Extra</div>
            </Link>

            {/* Card 5 */}
            <Link href="/services/expedited-auto-transport" className="group relative rounded-2xl overflow-hidden h-60 block shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <img src="/america-car-transport-expedited-fast-vehicle-shipping.png" alt="Envío Acelerado" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 z-10">
                <div className="text-white font-extrabold text-lg">Envío Acelerado / Prioritario</div>
                <div className="text-slate-300 text-xs font-medium">Recogida prioritaria en 24 a 48 horas</div>
              </div>
              <div className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">Rápido</div>
            </Link>

            {/* Card 6 */}
            <Link href="/ship-a-car/non-running" className="group relative rounded-2xl overflow-hidden h-60 block shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <img src="/non-running-vehicle-winch-loading-transport.jpg" alt="Vehículos Inoperables" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 z-10">
                <div className="text-white font-extrabold text-lg">Autos que No Funcionan</div>
                <div className="text-slate-300 text-xs font-medium">Camiones equipados con winche especializado</div>
              </div>
              <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">Inoperables</div>
            </Link>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
