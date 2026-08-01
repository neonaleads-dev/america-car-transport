import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import AnimatedSection, { AnimatedCard } from "@/components/ui/AnimatedSection";
import { Anchor, ShieldCheck, Award, Clock, DollarSign, ArrowRight, CheckCircle2, Phone, HelpCircle, MapPin, Truck, ChevronDown, Lock, AlertTriangle, BatteryCharging, Ship } from "lucide-react";

export const metadata = {
  title: "Hawaii Car Shipping | Ocean Auto Transport 2026",
  description: "Ship your car to Hawaii from California — RoRo and container ocean freight via Matson and Pasha. Real 2026 pricing, transit times, and what to expect.",
  alternates: {
    canonical: "https://americacartransport.com/services/hawaii-car-shipping",
  },
};

const FAQS = [
  {
    question: "How much does it cost to ship a car from California to Hawaii?",
    answer: "Shipping a car from California to Hawaii typically costs between $1,100 and $1,700 via RoRo (roll-on/roll-off) ocean freight, or $2,500 to $4,500 for enclosed container shipping. Add $200–$600 if ground transport from your California home to the port is needed."
  },
  {
    question: "How long does it take to ship a car to Hawaii?",
    answer: "Ocean transit from California to Honolulu (Oahu) typically takes 9 to 24 days from the vessel's sail date. Shipping to neighbor islands (Maui, Big Island, Kauai) takes 33 to 45 days because vehicles transfer onto a inter-island barge in Honolulu."
  },
  {
    question: "Can I ship an electric vehicle (EV) or plug-in hybrid to Hawaii?",
    answer: "Currently, primary ocean carrier Matson has suspended acceptance of electric and plug-in hybrid vehicles due to lithium-ion battery fire safety concerns at sea. Always confirm current carrier policy with our shipping specialists before booking if your vehicle is an EV or hybrid."
  },
  {
    question: "Can I put personal items inside my vehicle when shipping to Hawaii?",
    answer: "No. Federal maritime laws prohibit personal items inside vehicles shipped via RoRo ocean transport (only the spare tire, jack, and owner manual are permitted). Container shipping may allow limited items, but they are not insured against loss or damage."
  },
  {
    question: "Does my car need to be running to ship it to Hawaii?",
    answer: "Yes. For RoRo (roll-on/roll-off) shipping, your vehicle must be in fully operable condition with working brakes and steering. Non-running vehicles require specialized container transport."
  },
  {
    question: "Which ports are used for Hawaii car transport?",
    answer: "California departure ports include Long Beach, Oakland, and San Diego. Hawaii arrival ports include Honolulu (Oahu), Kahului (Maui), Hilo (Big Island), and Nawiliwili (Kauai)."
  }
];

export default function HawaiiCarShippingPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://americacartransport.com/services/hawaii-car-shipping#webpage",
        "url": "https://americacartransport.com/services/hawaii-car-shipping",
        "name": "Hawaii Car Shipping | Ocean Auto Transport",
        "description": "California to Hawaii vehicle shipping via RoRo & ocean container freight.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://americacartransport.com/#website",
          "name": "America Car Transport",
          "url": "https://americacartransport.com"
        }
      },
      {
        "@type": "Service",
        "@id": "https://americacartransport.com/services/hawaii-car-shipping#service",
        "serviceType": "Hawaii Car Shipping (Ocean Freight)",
        "name": "Hawaii Car Shipping Service",
        "description": "Ocean freight vehicle shipping from California to Hawaii via RoRo or container transport, coordinated with established ocean carriers.",
        "provider": {
          "@type": "MovingCompany",
          "@id": "https://americacartransport.com/#organization",
          "name": "America Car Transport",
          "url": "https://americacartransport.com",
          "telephone": "(530) 725-5383",
          "identifier": [
            { "@type": "PropertyValue", "propertyID": "USDOT", "value": "3849102" },
            { "@type": "PropertyValue", "propertyID": "MC", "value": "1098472" }
          ]
        },
        "areaServed": [
          { "@type": "State", "name": "California" },
          { "@type": "State", "name": "Hawaii" }
        ],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "1100",
          "highPrice": "4500",
          "offerCount": "2"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://americacartransport.com/services/hawaii-car-shipping#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://americacartransport.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://americacartransport.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Hawaii Car Shipping", "item": "https://americacartransport.com/services/hawaii-car-shipping" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://americacartransport.com/services/hawaii-car-shipping#faq",
        "mainEntity": FAQS.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between gap-4">
          <Link href="/" title="America Car Transport Homepage" className="flex items-center shrink-0 my-auto">
            <img 
              src="/america-car-transport-logo.png" 
              alt="America Car Transport - Nationwide Auto Transport Company Logo" 
              title="America Car Transport Official Logo"
              width={160}
              height={72}
              // @ts-ignore
              fetchpriority="high"
              className="h-[52px] sm:h-[58px] md:h-[64px] lg:h-[72px] w-auto object-contain transition-transform hover:scale-[1.02]"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-slate-700 font-semibold text-sm">
            <Link href="/#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</Link>
            <Link href="/services" className="text-blue-600 font-bold">Services</Link>
            <Link href="/locations" className="hover:text-blue-600 transition-colors">Locations</Link>
            <Link href="/routes" className="hover:text-blue-600 transition-colors">Routes</Link>
            <Link href="/reviews" className="hover:text-blue-600 transition-colors">Reviews</Link>
            <Link href="/licensing-insurance" className="hover:text-blue-600 transition-colors">Licensing &amp; Insurance</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:5307255383" className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs rounded-xl">
              <Phone className="w-3.5 h-3.5" />
              (530) 725-5383
            </a>
            <Link href="/tools/car-shipping-cost-calculator" className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] text-white px-4 py-2 rounded-xl text-xs md:text-sm font-extrabold shadow-sm">
              Get Instant Quote
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 lg:px-24 pt-10 pb-16 bg-[#F8FAFC] bg-grid-pattern border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <AnimatedSection direction="up" className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cyan-50 text-cyan-900 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-cyan-200/80 shadow-sm">
              <Ship className="w-4 h-4 text-cyan-700" />
              Ocean Freight Transport via Matson &amp; Pasha Hawaii
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.8rem] leading-[1.1] font-black text-slate-900 tracking-tight mb-5">
              Hawaii Car Shipping: Ocean Transport From California, Explained Honestly
            </h1>

            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mb-6">
              Shipping a car to Hawaii requires ocean vessel logistics, not standard mainland trucking. Here is exactly how RoRo and container ocean transport works, what it costs, and realistic transit timelines.
            </p>

            {/* Direct Answer Box */}
            <div className="bg-white border-l-4 border-cyan-600 p-5 rounded-r-2xl border-y border-r border-slate-200 shadow-sm text-xs md:text-sm text-slate-700 font-medium leading-relaxed mb-8">
              <strong>Process Overview:</strong> Shipping a car to Hawaii involves three coordinated steps: ground transport to a California port (Long Beach, Oakland, or San Diego), ocean vessel transit via Matson or Pasha Hawaii, and pickup or delivery at a Hawaii port such as Honolulu, Kahului, Hilo, or Nawiliwili.
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 max-w-xl">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase">RoRo Ocean Rate</div>
                <div className="text-xl font-black text-blue-600">$1,100 – $1,700</div>
                <div className="text-[11px] text-emerald-700 font-semibold mt-0.5">Port-to-Port</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase">Oahu Transit</div>
                <div className="text-xl font-black text-slate-900">9 – 24 Days</div>
                <div className="text-[11px] text-slate-500 font-semibold mt-0.5">Vessel Sail Date</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase">Neighbor Island</div>
                <div className="text-xl font-black text-amber-700">33 – 45 Days</div>
                <div className="text-[11px] text-amber-800 font-semibold mt-0.5">Barge Transfer</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Quote Calculator Widget */}
          <AnimatedSection direction="up" delay={0.2} className="lg:col-span-5 flex justify-center lg:justify-end">
            <QuoteCalculator />
          </AnimatedSection>

        </div>
      </section>

      {/* 3-Stage Process Breakdown */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          
          <AnimatedSection direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <Anchor className="w-4 h-4 text-blue-600" />
                The 3-Step Ocean Shipping Logistics
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                How Shipping a Car to Hawaii Works
              </h2>
              <p className="text-base text-slate-600 font-medium mt-2">
                Coordinating mainland ground trucking with ocean vessel departure schedules.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <AnimatedCard delay={0.1}>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="w-10 h-10 bg-blue-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4">
                    1
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg mb-2">Ground Transport to CA Port</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Your car is picked up from your driveway anywhere in California (or mainland US) via open or enclosed carrier and delivered directly to the loading port: Long Beach, Oakland, or San Diego.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200 text-xs font-bold text-blue-700">
                  Drop-off or Door Pickup Available
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="w-10 h-10 bg-cyan-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4">
                    2
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg mb-2">Pacific Ocean Crossing</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Your vehicle is inspected, secured, and loaded onto an ocean vessel (Matson or Pasha Hawaii). Choose between RoRo (driven into ship garage) or a sealed 20ft/40ft shipping container.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200 text-xs font-bold text-cyan-700">
                  Tracked Ocean Freight
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="w-10 h-10 bg-emerald-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4">
                    3
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg mb-2">Hawaii Port Pickup or Delivery</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Once the vessel docks in Hawaii, you pick up your car directly at the island port (Honolulu, Kahului, Hilo, or Nawiliwili), or we coordinate final delivery to your residence.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200 text-xs font-bold text-emerald-700">
                  Final Inspection &amp; Release
                </div>
              </div>
            </AnimatedCard>

          </div>

        </div>
      </section>

      {/* EV Fire Safety Restriction Notice */}
      <section className="py-12 bg-amber-500/10 border-b border-amber-200">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="bg-white border-2 border-amber-400 p-6 md:p-8 rounded-3xl shadow-md flex flex-col md:flex-row items-start gap-6">
            <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-2xl flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6 text-amber-700" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-900 uppercase tracking-wider mb-2">
                <BatteryCharging className="w-4 h-4 text-amber-700" />
                Current Carrier Restriction Notice
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
                Electric &amp; Plug-In Hybrid Vehicle Restrictions
              </h3>
              <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed mb-3">
                Due to maritime fire safety regulations regarding lithium-ion batteries at sea, primary ocean carrier <strong>Matson has suspended accepting both used and new Electric Vehicles (EVs) and Plug-In Hybrids (PHEVs)</strong> for ocean transit to Hawaii.
              </p>
              <p className="text-xs text-slate-600 font-semibold">
                If you need to ship a Tesla, Rivian, Chevy Bolt, or any EV/hybrid to Hawaii, contact our specialists at <a href="tel:5307255383" className="text-blue-700 font-bold underline">(530) 725-5383</a> to check Pasha Hawaii container options and updated carrier policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Realistic Transit Times & Neighbor Island Warning */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          
          <AnimatedSection direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <Clock className="w-4 h-4 text-blue-600" />
                Honest Transit Time Expectations
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                How Long Does Hawaii Car Shipping Really Take?
              </h2>
              <p className="text-base text-slate-600 font-medium mt-2">
                Per Matson and Pasha official schedules, transit times vary significantly by destination island.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-black text-slate-900 text-xl">Honolulu (Oahu)</h3>
                <span className="bg-emerald-100 text-emerald-800 font-extrabold text-xs px-2.5 py-1 rounded-full">Direct Ocean Crossing</span>
              </div>
              <div className="text-3xl font-black text-blue-600 mb-2">9 – 24 Days</div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Vessels sail directly from Long Beach, Oakland, or San Diego to the Port of Honolulu. Once loaded, ocean transit typically takes under 3 weeks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-amber-300 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-black text-slate-900 text-xl">Neighbor Islands</h3>
                <span className="bg-amber-100 text-amber-900 font-extrabold text-xs px-2.5 py-1 rounded-full">Requires Inter-Island Barge</span>
              </div>
              <div className="text-3xl font-black text-amber-700 mb-2">33 – 45 Days</div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Destinations like <strong>Kahului (Maui), Hilo (Big Island), and Nawiliwili (Kauai)</strong> require unloading in Honolulu and transferring onto an inter-island barge. Plan early for this longer timeline!
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* RoRo vs Container Comparison Table */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          
          <AnimatedSection direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <DollarSign className="w-4 h-4 text-emerald-600" />
                Shipping Options Comparison
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                RoRo vs. Container Shipping: Which Should You Choose?
              </h2>
            </div>
          </AnimatedSection>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm mb-8">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                  <th className="py-4 px-6">Feature</th>
                  <th className="py-4 px-6">RoRo (Roll-on / Roll-off)</th>
                  <th className="py-4 px-6">Enclosed Container Shipping</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm font-semibold text-slate-800">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 text-slate-500 font-bold">Estimated Cost</td>
                  <td className="py-4 px-6 font-bold text-emerald-700">$1,100 – $1,700</td>
                  <td className="py-4 px-6 font-bold text-purple-700">$2,500 – $4,500</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 text-slate-500 font-bold">Vehicle Protection</td>
                  <td className="py-4 px-6 text-slate-600">Parked inside vessel garage deck</td>
                  <td className="py-4 px-6 text-slate-600">Sealed 20ft/40ft steel container</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 text-slate-500 font-bold">Personal Items Inside</td>
                  <td className="py-4 px-6 text-red-600 font-bold">Not Allowed (Strict Law)</td>
                  <td className="py-4 px-6 text-slate-600">Limited (Not insured)</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 text-slate-500 font-bold">Operable Status</td>
                  <td className="py-4 px-6 text-slate-600">Must run and drive</td>
                  <td className="py-4 px-6 text-slate-600">Can accommodate non-running cars</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 text-slate-500 font-bold">Best For</td>
                  <td className="py-4 px-6 text-blue-700 font-bold">Standard daily drivers, sedans, SUVs</td>
                  <td className="py-4 px-6 text-purple-700 font-bold">Classic, exotic, luxury &amp; low-clearance</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* Departure & Arrival Ports */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-extrabold text-slate-900 text-lg mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                California Departure Ports
              </h3>
              <ul className="space-y-3 text-xs md:text-sm font-semibold text-slate-700">
                <li className="flex items-center gap-2">✓ Port of Long Beach (Southern California)</li>
                <li className="flex items-center gap-2">✓ Port of Oakland (Northern California / Bay Area)</li>
                <li className="flex items-center gap-2">✓ Port of San Diego (Southern California)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-extrabold text-slate-900 text-lg mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-600" />
                Hawaii Arrival Ports
              </h3>
              <ul className="space-y-3 text-xs md:text-sm font-semibold text-slate-700">
                <li className="flex items-center gap-2">✓ Port of Honolulu (Oahu Island)</li>
                <li className="flex items-center gap-2">✓ Port of Kahului (Maui Island)</li>
                <li className="flex items-center gap-2">✓ Port of Hilo (Big Island of Hawaii)</li>
                <li className="flex items-center gap-2">✓ Port of Nawiliwili (Kauai Island)</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Hawaii Car Shipping FAQs
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="bg-slate-50 rounded-2xl border border-slate-200 p-5 group shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-extrabold text-slate-900 text-base cursor-pointer">
                  <span>{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-2" />
                </summary>
                <p className="text-sm text-slate-600 leading-relaxed font-medium mt-3 pt-3 border-t border-slate-200/80">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
