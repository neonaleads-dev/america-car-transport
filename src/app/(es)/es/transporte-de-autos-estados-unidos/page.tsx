import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, Phone, Star, MapPin, DollarSign, Compass, Zap, Shield, 
  Building2, Sliders, ArrowRight, CheckCircle2, Award, Clock, AlertTriangle, 
  HelpCircle, ChevronRight, FileText, Truck, Users, Lock, ChevronDown
} from "lucide-react";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata = {
  title: "Transporte de Autos en Estados Unidos | Cotización Gratis Sin Correo - America Car Transport",
  description: "Transporte de autos y vehículos de estado a estado en EE.UU. Cotización instantánea sin dar tu correo ni teléfono. Transportistas con licencia USDOT/MC, seguro de carga incluido y servicio puerta a puerta. Evita estafas — compara antes de contratar.",
  alternates: {
    canonical: "https://www.americacartransport.com/es/transporte-de-autos-estados-unidos",
    languages: {
      "es": "https://www.americacartransport.com/es/transporte-de-autos-estados-unidos",
      "es-US": "https://www.americacartransport.com/es/transporte-de-autos-estados-unidos",
      "en": "https://www.americacartransport.com/services",
      "en-US": "https://www.americacartransport.com/services",
      "x-default": "https://www.americacartransport.com/services",
    },
  },
};

export default function SpanishInterstateTransportPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.americacartransport.com/" },
      { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://www.americacartransport.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Transporte de Autos en Estados Unidos", "item": "https://www.americacartransport.com/es/transporte-de-autos-estados-unidos" }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Transporte de vehículos de estado a estado",
    "provider": {
      "@type": "Organization",
      "name": "America Car Transport",
      "url": "https://www.americacartransport.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Estados Unidos"
    },
    "inLanguage": "es",
    "description": "Servicio de transporte de autos interestatal en Estados Unidos con transportistas licenciados USDOT/MC, seguro de carga incluido, y cotización sin correo ni teléfono."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta el transporte de autos en Estados Unidos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El costo depende de tres factores principales: la distancia de la ruta, el tipo de transporte (abierto o cerrado) y la temporada del año. Usa nuestra calculadora gratuita para obtener un precio exacto según tu ruta — no pedimos correo ni teléfono."
        }
      },
      {
        "@type": "Question",
        "name": "¿Necesito dar mi correo o teléfono para obtener una cotización?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Nuestra calculadora de transporte de autos genera una cotización instantánea sin necesidad de registrarte ni compartir información personal."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo puedo evitar estafas al contratar transporte de autos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Verifica siempre el número de licencia USDOT y MC de la empresa en la base de datos de la FMCSA, desconfía de cotizaciones muy por debajo del promedio del mercado, nunca pagues el total por adelantado, y confirma que el seguro de carga esté incluido por escrito antes de firmar el contrato (Bill of Lading)."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuál es la diferencia entre transporte abierto y transporte cerrado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El transporte abierto traslada varios vehículos en un remolque sin techo — es la opción más común y económica. El transporte cerrado protege el vehículo dentro de un remolque cubierto, recomendado para autos de lujo, clásicos o exóticos, con un costo mayor."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo transportar un carro que no arranca o no funciona?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Ofrecemos transporte para vehículos inoperables (que no arrancan, no ruedan o no frenan) usando equipo especial con winche para cargarlos de forma segura. Este servicio suele tener un costo adicional."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo tarda el envío de un carro de un estado a otro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En promedio, entre 2 y 9 días dependiendo de la distancia. Rutas cortas (500 millas o menos) pueden tomar 1-3 días, mientras que rutas transcontinental pueden tomar hasta 7-10 días."
        }
      },
      {
        "@type": "Question",
        "name": "¿El seguro de carga está incluido en el precio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, todos los transportistas con los que trabajamos cuentan con seguro de carga vigente como lo exige la ley federal. Te recomendamos siempre pedir una copia del certificado de seguro antes de la recogida."
        }
      },
      {
        "@type": "Question",
        "name": "¿Ofrecen servicio puerta a puerta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, el servicio puerta a puerta es el más común: el transportista recoge y entrega el vehículo lo más cerca posible de las direcciones indicadas, dentro de lo que permitan las calles y regulaciones locales."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo enviar un auto eléctrico o híbrido?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, la mayoría de las rutas terrestres dentro de Estados Unidos aceptan vehículos eléctricos e híbridos sin restricción. Ten en cuenta que algunas rutas marítimas (como a Hawái) tienen restricciones específicas para vehículos con batería de litio — consulta la ruta exacta antes de reservar."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué documentos necesito para enviar mi carro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Necesitas el título o registro del vehículo, una identificación válida, y firmar el Bill of Lading (documento de inspección) tanto en la recogida como en la entrega."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Schema Injections */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header Bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between gap-4">
          <Link href="/es" title="America Car Transport Página Principal" className="flex items-center shrink-0 my-auto">
            <img 
              src="/america-car-transport-logo.png" 
              alt="America Car Transport Logotipo Oficial" 
              title="America Car Transport"
              width={160}
              height={72}
              // @ts-ignore
              fetchpriority="high"
              className="h-[52px] sm:h-[58px] md:h-[64px] lg:h-[72px] w-auto object-contain transition-transform hover:scale-[1.02]"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-slate-700 font-semibold text-sm">
            <Link href="/es" className="hover:text-blue-600 transition-colors">Inicio</Link>
            <Link href="/es/servicios" className="text-blue-600 font-extrabold transition-colors">Servicios</Link>
            <Link href="/es/calculadora" className="hover:text-blue-600 transition-colors">Calculadora</Link>
            <Link href="/locations" className="hover:text-blue-600 transition-colors">Ubicaciones</Link>
            <Link href="/reviews" className="hover:text-blue-600 transition-colors">Opiniones</Link>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            
            <a href="tel:5307255383" className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs rounded-xl hover:bg-blue-100 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              (530) 725-5383
            </a>
            
            <Link href="/es/calculadora" className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] hover:from-[#E05E00] text-white px-4 py-2 rounded-xl text-xs md:text-sm font-extrabold shadow-sm transition-all">
              Cotización Gratis
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs items={[
        { label: "Servicios", url: "/es/servicios" },
        { label: "Transporte de Autos en Estados Unidos", url: "/es/transporte-de-autos-estados-unidos" }
      ]} />

      <article lang="es">
        {/* HERO SECTION — DARK BLUE BANNER WITH CALCULATOR */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white border-b border-slate-800 px-4 md:px-8 lg:px-24 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-6 xl:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-950/90 text-blue-300 rounded-full text-xs md:text-sm font-bold border border-blue-500/40 shadow-lg shadow-blue-950/40">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Cotización Instantánea · Sin Correo · Sin Teléfono
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-tight tracking-tight">
                Transporte de Autos en Estados Unidos: <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">Cotización Gratis y Sin Estafas</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed">
                Envía tu vehículo de un estado a otro con transportistas verificados, licenciados por el Departamento de Transporte de EE.UU. (USDOT/MC). Obtén tu cotización en segundos — <strong className="text-white font-extrabold underline decoration-amber-400">sin dar tu correo, sin dar tu teléfono, sin compromiso.</strong>
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 bg-slate-900/90 p-4 rounded-2xl border border-slate-800 shadow-xl max-w-xl">
                <div className="flex items-center gap-2.5 pr-4 border-r border-slate-800">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <div>
                    <div className="font-extrabold text-white text-sm leading-none">4.9 / 5.0 Rating</div>
                    <div className="text-xs text-slate-400 font-medium mt-0.5">Opiniones Verificadas</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="px-2.5 py-1 bg-blue-600 text-white font-extrabold text-xs rounded border border-blue-500">
                    BBB A+
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm leading-none">Licencia USDOT / MC</div>
                    <div className="text-xs text-slate-400 font-medium mt-0.5">Seguro de Carga Incluido</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="#calculator-widget" className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] hover:from-[#E05E00] text-white px-6 py-3.5 rounded-xl font-extrabold text-sm shadow-lg shadow-amber-950/40 transition-all flex items-center gap-2">
                  Calcular Mi Cotización Gratis <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:5307255383" className="bg-blue-600/80 hover:bg-blue-600 text-white px-5 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 border border-blue-500/40">
                  <Phone className="w-4 h-4 text-blue-200" /> Atendemos en Español: (530) 725-5383
                </a>
              </div>
            </div>

            {/* Embedded Quote Calculator */}
            <div id="calculator-widget" className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
              <QuoteCalculator />
            </div>
          </div>
        </section>

        {/* SECTION 1: POR QUÉ ELEGIRNOS */}
        <section id="por-que-elegirnos" className="py-16 md:py-24 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="text-blue-600 font-extrabold tracking-[0.25em] uppercase text-xs mb-3">Confianza y Garantía</div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                ¿Por Qué Miles de Familias Latinas Confían en Nosotros?
              </h2>
              <div className="w-14 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6 text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                <p>
                  Mover un vehículo a otro estado —ya sea por mudanza, compra de auto en línea, trabajo o reubicación militar— puede ser estresante si no sabes en quién confiar. En <strong>America Car Transport</strong> conectamos tu envío directamente con transportistas que cumplen con la regulación federal de la FMCSA (Federal Motor Carrier Safety Administration), para que tu carro llegue seguro, a tiempo, y sin sorpresas en el precio final.
                </p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-slate-800 font-bold text-sm md:text-base">Transportistas verificados con número USDOT y MC activo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-slate-800 font-bold text-sm md:text-base">Seguro de carga incluido en cada envío sin deducible</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-slate-800 font-bold text-sm md:text-base">Cotización instantánea — sin correo, sin teléfono, sin presión de venta</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-slate-800 font-bold text-sm md:text-base">Servicio puerta a puerta disponible en los 50 estados</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-slate-800 font-bold text-sm md:text-base">Atención en español durante todo el proceso de transporte</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                  <img 
                    src="/america-car-transport-trusted-auto-carrier-scenic-highway.png" 
                    alt="Camión transportista de autos de America Car Transport en carretera interestatal de Estados Unidos" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <div className="font-black text-xl">Red de Transportistas Certificados FMCSA</div>
                    <div className="text-xs text-slate-300">Cobertura total de costa a costa con $0 de depósito anticipado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CÓMO FUNCIONA */}
        <section id="como-funciona" className="py-16 md:py-24 px-4 md:px-8 lg:px-24 bg-slate-900 text-white border-b border-slate-800">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-blue-400 font-extrabold tracking-[0.25em] uppercase text-xs mb-3">Paso a Paso</div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                Cómo Funciona el Envío de Carros de Estado a Estado
              </h2>
              <p className="text-slate-400 font-medium mt-3 text-base">Proceso transparente y sin complicaciones desde la cotización hasta la entrega final.</p>
              <div className="w-14 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Obtén tu cotización", text: "Ingresa el origen, destino y tipo de vehículo en nuestra calculadora — el precio aparece al instante sin pedir correo ni teléfono." },
                { step: "02", title: "Elige tu transportista", text: "Compara opciones de transporte abierto o cerrado según tu presupuesto y tipo de auto para seleccionar el más adecuado." },
                { step: "03", title: "Programa la recogida", text: "Coordina la fecha exacta y la dirección de recogida puerta a puerta directamente con nuestro equipo especializado." },
                { step: "04", title: "Inspección y firma", text: "El conductor inspecciona el vehículo contigo y ambos firman el Bill of Lading (reporte oficial de condición inicial)." },
                { step: "05", title: "Seguimiento del envío", text: "Recibe actualizaciones durante el trayecto para saber exactamente dónde se encuentra tu vehículo en cada estado." },
                { step: "06", title: "Entrega y revisión final", text: "Verificas el estado del vehículo al momento de la entrega en tu destino y firmas la confirmación de recibido final." }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-800/80 p-8 rounded-2xl border border-slate-700/80 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 relative group">
                  <div className="text-4xl font-black text-blue-400/30 group-hover:text-blue-400 transition-colors mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: TABLA DE COMPARACIÓN */}
        <section id="tipos-de-transporte" className="py-16 md:py-24 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-200">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="text-blue-600 font-extrabold tracking-[0.25em] uppercase text-xs mb-3">Opciones de Envío</div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                Transporte Abierto vs. Transporte Cerrado
              </h2>
              <p className="text-slate-600 font-medium mt-3 text-base">Compara las características clave para decidir la mejor opción de transporte para tu auto.</p>
              <div className="w-14 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xl bg-white">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-900 text-white text-sm md:text-base font-bold">
                    <th className="p-5 border-b border-slate-800">Característica</th>
                    <th className="p-5 border-b border-slate-800 text-blue-400">Transporte Abierto (Open)</th>
                    <th className="p-5 border-b border-slate-800 text-purple-300">Transporte Cerrado (Enclosed)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs md:text-sm font-medium text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-900 bg-slate-50/50">Costo Estimado</td>
                    <td className="p-5 font-extrabold text-emerald-700">Más económico (Opción estándar)</td>
                    <td className="p-5 font-semibold text-purple-900">20% a 50% más costoso</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-900 bg-slate-50/50">Protección del Clima</td>
                    <td className="p-5">Expuesto al clima y residuos del camino</td>
                    <td className="p-5">Totalmente cubierto y protegido 100%</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-900 bg-slate-50/50">Ideal para</td>
                    <td className="p-5">Autos de uso diario, sedanes, SUVs</td>
                    <td className="p-5">Autos de lujo, clásicos, exóticos o modificados</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-900 bg-slate-50/50">Disponibilidad en EE.UU.</td>
                    <td className="p-5">Alta — representa el 90% de los envíos</td>
                    <td className="p-5">Limitada — requiere reserva anticipada</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 4: FACTORES DE COSTO */}
        <section id="factores-de-costo" className="py-16 md:py-24 px-4 md:px-8 lg:px-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="text-blue-600 font-extrabold tracking-[0.25em] uppercase text-xs mb-3">Precios y Tarifas</div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                ¿Cuánto Cuesta Transportar un Carro? Factores que Afectan el Precio
              </h2>
              <p className="text-slate-600 font-medium mt-3 text-base">Entiende cómo se calcula la cotización final del envío de coches entre estados.</p>
              <div className="w-14 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-md space-y-3">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Distancia de la Ruta</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Rutas más largas cuestan más en el total acumulado, pero el costo promedio por milla disminuye progresivamente a mayor distancia.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-md space-y-3">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Tipo de Vehículo</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  El tamaño y peso influyen directamente. Una camioneta dually o SUV grande ocupa más espacio en el remolque que un sedán compacto.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-md space-y-3">
                <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center font-bold">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Tipo de Remolque</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  El transporte abierto es la opción más económica. El transporte cerrado ofrece máxima protección pero aumenta la tarifa final.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-md space-y-3">
                <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Temporada del Año</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Los precios suben durante la temporada alta de mudanzas (mayo a agosto) y con las migraciones de &quot;snowbirds&quot; en otoño y primavera.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-md space-y-3">
                <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center font-bold">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Condición del Vehículo</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Los autos que no arrancan o no ruedan requieren transportistas equipados con winche mecánico especial para subirlos al remolque.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-md space-y-3">
                <div className="w-10 h-10 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Velocidad de Despacho</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  El servicio estándar asigna camión en 2 a 5 días. Si necesitas recogida urgente prioritaria en 24 a 48 horas, se aplica tarifa expedited.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: EVITAR ESTAFAS */}
        <section id="evitar-estafas" className="py-16 md:py-24 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 rounded-3xl p-8 md:p-14 text-white shadow-2xl border border-slate-800">
              <div className="max-w-3xl mb-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-500/20 text-red-300 rounded-full text-xs font-bold border border-red-500/30">
                  <AlertTriangle className="w-4 h-4 text-red-400" /> Guía Anti-Estafas en EE.UU.
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                  Cómo Evitar Estafas de Transporte de Autos
                </h2>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">
                  Lamentablemente existen empresas ilegítimas de transporte de carros en Estados Unidos. Antes de contratar cualquier servicio, verifica siempre estos puntos de seguridad esenciales:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700/80 space-y-2">
                  <div className="font-bold text-blue-400 text-lg flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" /> 1. Verifica la licencia USDOT/MC
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    Consulta directamente en el sitio oficial de la FMCSA (safer.fmcsa.dot.gov). Cualquier empresa legítima debe tener su número de registro activo.
                  </p>
                </div>

                <div className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700/80 space-y-2">
                  <div className="font-bold text-blue-400 text-lg flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-400" /> 2. Cuidado con precios sospechosos
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    Desconfía de cotizaciones extremadamente bajas respecto al promedio del mercado. Suelen ser anzuelos engañosos para subir el precio el día de la recogida.
                  </p>
                </div>

                <div className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700/80 space-y-2">
                  <div className="font-bold text-blue-400 text-lg flex items-center gap-2">
                    <Lock className="w-5 h-5 text-emerald-400" /> 3. Nunca pagues el 100% por adelantado
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    Lo normal es un depósito inicial o pago cero hasta que el camión esté asignado, y el resto pagadero a la entrega tras verificar el vehículo.
                  </p>
                </div>

                <div className="bg-slate-800/90 p-6 rounded-2xl border border-slate-700/80 space-y-2">
                  <div className="font-bold text-blue-400 text-lg flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-400" /> 4. Pide el seguro de carga por escrito
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    Exige el certificado de seguro de carga del transportista antes de entregar la llave, y lee el Bill of Lading completo antes de firmar.
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs md:text-sm text-slate-400">
                <span>¿Dudas sobre una cotización que recibiste? Te ayudamos a verificarla gratis.</span>
                <a href="tel:5307255383" className="text-white font-extrabold hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-blue-400" /> Asesoría Gratuita: (530) 725-5383
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: VEHÍCULOS ESPECIALES */}
        <section id="vehiculos-especiales" className="py-16 md:py-24 px-4 md:px-8 lg:px-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="text-blue-600 font-extrabold tracking-[0.25em] uppercase text-xs mb-3">Requerimientos Específicos</div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                Servicios Especiales: Autos que No Arrancan, Clásicos y Eléctricos
              </h2>
              <p className="text-slate-600 font-medium mt-3 text-base">Soluciones logísticas adaptadas a vehículos con necesidades de manejo particulares.</p>
              <div className="w-14 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-md space-y-4">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center font-bold">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Autos Inoperables (No Arrancan)</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  ¿Tu vehículo no arranca, no rueda o no frena? Contamos con remolques equipados con winche eléctrico especial para cargar autos inoperables de subastas o talleres de forma segura.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-md space-y-4">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center font-bold">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Autos Clásicos y de Colección</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Ofrecemos transporte cerrado especializado de guante blanco para autos vintage, deportivos exóticos y vehículos de exhibición con rampas de ángulo bajo y correas suave.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-md space-y-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center font-bold">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Vehículos Eléctricos e Híbridos</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Aceptamos autos eléctricos (Tesla, Rivian, etc.) en todas las rutas terrestres nacionales. Cuentan con soporte para el peso adicional de las baterías de litio.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-bold text-blue-600 pt-4">
              <Link href="/services/classic-and-exotic-car-transport" className="hover:text-blue-800 transition-colors flex items-center gap-1">
                Ver más sobre transporte de autos clásicos y exóticos &rarr;
              </Link>
              <span className="text-slate-300">|</span>
              <Link href="/services/hawaii-car-shipping" className="hover:text-blue-800 transition-colors flex items-center gap-1">
                Ver transporte marítimo a Hawái &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 7: RUTAS POPULARES */}
        <section id="rutas-populares" className="py-16 md:py-24 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="text-blue-600 font-extrabold tracking-[0.25em] uppercase text-xs mb-3">Red de Cobertura</div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                Rutas Populares de Transporte Interestatal
              </h2>
              <p className="text-slate-600 font-medium mt-3 text-base">Cotiza tu ruta específica en nuestra calculadora o consulta nuestras guías detalladas por ruta:</p>
              <div className="w-14 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Texas a Florida", link: "/routes/texas-to-florida", desc: "Ruta popular del sur entre Houston/Dallas y Miami/Orlando." },
                { name: "California a Florida", link: "/routes/california-to-florida", desc: "Envío transcontinental continuo entre la Costa Oeste y Florida." },
                { name: "California a Nueva York", link: "/routes/california-to-new-york", desc: "La ruta costera principal de Los Ángeles a Nueva York/Nueva Jersey." },
                { name: "Nueva York a Florida", link: "/routes/new-york-to-florida", desc: "Ruta snowbird por excelencia a lo largo del corredor I-95." },
                { name: "Florida a Illinois", link: "/routes/florida-to-illinois", desc: "Conexión directa entre el Midwest (Chicago) y el estado del sol." }
              ].map((route, idx) => (
                <Link 
                  key={idx} 
                  href={route.link} 
                  className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl hover:border-blue-600 hover:shadow-lg transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-blue-600 font-extrabold text-sm mb-2">
                      <MapPin className="w-4 h-4" /> Ruta Interestatal
                    </div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                      {route.name}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                      {route.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-blue-600">
                    <span>Ver Tarifas de la Ruta</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQ ACCORDION */}
        <section id="faq" className="py-16 md:py-24 px-4 md:px-8 lg:px-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-16">
              <div className="text-blue-600 font-extrabold tracking-[0.25em] uppercase text-xs mb-3">Respuestas Claras</div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                Preguntas Frecuentes sobre Transporte de Autos en Estados Unidos
              </h2>
              <p className="text-slate-600 font-medium text-base">
                Respuestas directas a las dudas más comunes sobre el envío de vehículos entre estados.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "¿Cuánto cuesta el transporte de autos en Estados Unidos?",
                  a: "El costo depende de tres factores principales: la distancia de la ruta, el tipo de transporte (abierto o cerrado) y la temporada del año. Usa nuestra calculadora gratuita para obtener un precio exacto según tu ruta — no pedimos correo ni teléfono."
                },
                {
                  q: "¿Necesito dar mi correo o teléfono para obtener una cotización?",
                  a: "No. Nuestra calculadora de transporte de autos genera una cotización instantánea sin necesidad de registrarte ni compartir información personal."
                },
                {
                  q: "¿Cómo puedo evitar estafas al contratar transporte de autos?",
                  a: "Verifica siempre el número de licencia USDOT y MC de la empresa en la base de datos de la FMCSA, desconfía de cotizaciones muy por debajo del promedio del mercado, nunca pagues el total por adelantado, y confirma que el seguro de carga esté incluido por escrito antes de firmar el contrato (Bill of Lading)."
                },
                {
                  q: "¿Cuál es la diferencia entre transporte abierto y transporte cerrado?",
                  a: "El transporte abierto traslada varios vehículos en un remolque sin techo — es la opción más común y económica. El transporte cerrado protege el vehículo dentro de un remolque cubierto, recomendado para autos de lujo, clásicos o exóticos, con un costo mayor."
                },
                {
                  q: "¿Puedo transportar un carro que no arranca o no funciona?",
                  a: "Sí. Ofrecemos transporte para vehículos inoperables (que no arrancan, no ruedan o no frenan) usando equipo especial con winche para cargarlos de forma segura. Este servicio suele tener un costo adicional."
                },
                {
                  q: "¿Cuánto tiempo tarda el envío de un carro de un estado a otro?",
                  a: "En promedio, entre 2 y 9 días dependiendo de la distancia. Rutas cortas (500 millas o menos) pueden tomar 1-3 días, mientras que rutas transcontinentales pueden tomar hasta 7-10 días."
                },
                {
                  q: "¿El seguro de carga está incluido en el precio?",
                  a: "Sí, todos los transportistas con los que trabajamos cuentan con seguro de carga vigente como lo exige la ley federal. Te recomendamos siempre pedir una copia del certificado de seguro antes de la recogida."
                },
                {
                  q: "¿Ofrecen servicio puerta a puerta?",
                  a: "Sí, el servicio puerta a puerta es el más común: el transportista recoge y entrega el vehículo lo más cerca posible de las direcciones indicadas, dentro de lo que permitan las calles y regulaciones locales."
                },
                {
                  q: "¿Puedo enviar un auto eléctrico o híbrido?",
                  a: "Sí, la mayoría de las rutas terrestres dentro de Estados Unidos aceptan vehículos eléctricos e híbridos sin restricción. Ten en cuenta que algunas rutas marítimas (como a Hawái) tienen restricciones específicas para vehículos con batería de litio — consulta la ruta exacta antes de reservar."
                },
                {
                  q: "¿Qué documentos necesito para enviar mi carro?",
                  a: "Necesitas el título o registro del vehículo, una identificación válida, y firmar el Bill of Lading (documento de inspección) tanto en la recogida como en la entrega."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm space-y-2">
                  <h3 className="font-bold text-slate-900 text-lg md:text-xl">
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/faq" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                Ver Centro de Preguntas Frecuentes Completo <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 9: CTA FINAL */}
        <section id="cta-final" className="py-20 px-4 md:px-8 lg:px-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white text-center">
          <div className="max-w-[900px] mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/20 text-amber-300 rounded-full text-xs md:text-sm font-bold border border-amber-500/30">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Sin Registro Necesario
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              Obtén Tu Cotización Ahora — Sin Correo, Sin Teléfono
            </h2>
            
            <p className="text-slate-300 text-base md:text-xl leading-relaxed font-medium max-w-2xl mx-auto">
              Compara precios de transporte de autos en segundos y elige la opción que mejor se ajuste a tu presupuesto.
            </p>

            <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
              <Link href="#calculator-widget" className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] hover:from-[#E05E00] text-white px-8 py-4 rounded-xl font-extrabold text-base shadow-xl transition-all">
                Calcular Mi Cotización Gratis
              </Link>
              <a href="tel:5307255383" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-base transition-all flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-300" /> (530) 725-5383
              </a>
            </div>
          </div>
        </section>
      </article>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
