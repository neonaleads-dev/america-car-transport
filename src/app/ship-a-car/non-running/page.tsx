import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import { Wrench, ShieldCheck, Clock, MapPin, Phone, CheckCircle2, HelpCircle, Truck, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Non-Running Vehicle Transport | Ship a Car That Won't Start",
  description: "Yes, we can ship a car that doesn't run. America Car Transport uses winch-equipped carriers for inoperable vehicles, project cars, and auction purchases.",
  alternates: {
    canonical: "https://americacartransport.com/ship-a-car/non-running",
  },
};

export default function NonRunningVehicleTransportPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://americacartransport.com/ship-a-car/non-running#service",
        "name": "Inoperable & Non-Running Vehicle Transport",
        "serviceType": "Inoperable & Non-Running Vehicle Shipping",
        "provider": {
          "@type": "Organization",
          "name": "America Car Transport",
          "url": "https://americacartransport.com"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "offers": {
          "@type": "Offer",
          "description": "Winch-assisted transport for inoperable cars, project vehicles, and non-running auction purchases with $0 deposit"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://americacartransport.com/ship-a-car/non-running#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Will shipping a non-running vehicle cost more than a running car?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shipping an inoperable vehicle typically incurs a modest fee because specialized winch equipment and additional labor are required to load and unload the vehicle safely."
            }
          },
          {
            "@type": "Question",
            "name": "Can you ship a car with no engine at all?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. As long as the vehicle frame and wheels can be safely winched and secured onto the carrier, a missing engine or transmission does not prevent shipping."
            }
          },
          {
            "@type": "Question",
            "name": "What preparation is needed before pickup of a non-running car?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Clearly describe whether the vehicle rolls freely or has locked brakes/flat tires at quote time. Remove all personal items and ensure steering is unlocked if possible."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://americacartransport.com/ship-a-car/non-running#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://americacartransport.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://americacartransport.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Inoperable / Non-Running Vehicle Transport", "item": "https://americacartransport.com/ship-a-car/non-running" }
        ]
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
            <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
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

      {/* Visual Breadcrumb Bar */}
      <div className="bg-slate-900 border-b border-slate-800 py-3 px-4 md:px-8 text-xs font-semibold text-slate-400">
        <div className="max-w-[1400px] mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <span className="text-slate-700">/</span>
          <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link>
          <span className="text-slate-700">/</span>
          <span className="text-white font-bold">Non-Running Vehicle Transport</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 lg:px-24 pt-10 pb-16 bg-[#F8FAFC] bg-grid-pattern border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <AnimatedSection direction="up" className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 text-emerald-900 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-emerald-200/80 shadow-sm">
              <Wrench className="w-4 h-4 text-emerald-700" />
              Yes — We Ship Vehicles That Don&apos;t Start or Roll
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
              Inoperable / Non-Running Vehicle Transport
            </h1>

            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-6">
              A car that won&apos;t start, won&apos;t roll, or is missing a motor isn&apos;t disqualified from transport. America Car Transport dispatches winch-equipped carriers so project builds, auction purchases, and mechanical breakdowns are moved safely.
            </p>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Heavy-Duty Motorized Winch Cable Loading Systems</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Covers Dead Batteries, Missing Engines, &amp; Seized Brakes</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>$0 Upfront Deposit — Upfront Equipment Quoting Accuracy</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:5307255383" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-extrabold text-sm shadow-md transition-all flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-200" /> Dispatch Desk: (530) 725-5383
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2} className="lg:col-span-6 flex justify-center lg:justify-end">
            <QuoteCalculator />
          </AnimatedSection>

        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8 space-y-12">
          
          {/* Doesn't Start vs Doesn't Roll */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              &quot;Doesn&apos;t Run&quot; Is Not All the Same Problem
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              Understanding your vehicle&apos;s exact mechanical status helps us dispatch the right carrier equipment the first time:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-blue-50/60 border border-blue-200 p-6 rounded-2xl space-y-2">
                <div className="text-xs font-extrabold text-blue-800 uppercase tracking-wider">Condition 1</div>
                <h3 className="font-extrabold text-slate-900 text-base">Won&apos;t Start, But Rolls Freely</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  The vehicle shifts into neutral, the steering unlocks, and all four tires roll freely. Easily winched onto an open or enclosed trailer.
                </p>
              </div>

              <div className="bg-amber-50/60 border border-amber-200 p-6 rounded-2xl space-y-2">
                <div className="text-xs font-extrabold text-amber-800 uppercase tracking-wider">Condition 2</div>
                <h3 className="font-extrabold text-slate-900 text-base">Won&apos;t Roll (Seized / Missing Parts)</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Locked brakes, missing wheels, flat tires, or seized axles. Requires winch equipment, tire skates, or specialized ramp dollies.
                </p>
              </div>
            </div>
          </article>

          {/* Related Services Links */}
          <article className="bg-slate-900 text-white p-8 rounded-3xl space-y-4">
            <h2 className="text-2xl font-bold">Shipping Non-Running Vehicles at Volume?</h2>
            <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
              If you are a dealership or auction buyer moving multiple inoperable vehicles from Copart, Manheim, or IAA lots, visit our <Link href="/services/dealer-and-auction-transport" className="text-blue-400 font-bold underline">Dealer &amp; Auction Transport</Link> page for commercial account coordination.
            </p>
          </article>

          {/* FAQ Section */}
          <article className="space-y-6 pt-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions (Inoperable Vehicle FAQs)
            </h2>

            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" /> Will shipping a non-running vehicle cost more?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Shipping an inoperable vehicle typically incurs a modest fee because specialized winch equipment and additional labor are required to load and unload the vehicle safely.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" /> Can you ship a car with no engine at all?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Yes. As long as the vehicle frame and wheels can be safely winched and secured onto the carrier, a missing engine or transmission does not prevent shipping.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" /> What preparation is needed before pickup of a non-running car?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Clearly describe whether the vehicle rolls freely or has locked brakes/flat tires at quote time. Remove all personal items and ensure steering is unlocked if possible.
                </p>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
