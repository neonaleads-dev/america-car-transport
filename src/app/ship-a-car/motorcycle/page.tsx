import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import { Bike, ShieldCheck, Clock, MapPin, Phone, CheckCircle2, HelpCircle, Truck, ArrowRight, Layers, FileText } from "lucide-react";

export const metadata = {
  title: "Motorcycle & Powersports Shipping | Enclosed Bike & ATV Transport",
  description: "Ship your motorcycle, sportbike, or ATV with secured enclosed transport built for two-wheeled and off-road vehicles. Get a free quote — no upfront deposit.",
  alternates: {
    canonical: "https://americacartransport.com/ship-a-car/motorcycle",
  },
};

export default function MotorcycleShippingPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://americacartransport.com/ship-a-car/motorcycle#service",
        "name": "Motorcycle & Powersports Shipping",
        "serviceType": "Motorcycle, ATV, & Powersports Vehicle Transport",
        "provider": {
          "@type": "Organization",
          "name": "America Car Transport",
          "url": "https://americacartransport.com"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "vehicleType": ["Motorcycle", "ATV", "UTV", "Side-by-Side"],
        "offers": {
          "@type": "Offer",
          "description": "Secured enclosed motorcycle and powersports transport with soft-strap tie-downs and zero upfront deposit"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://americacartransport.com/ship-a-car/motorcycle#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you ship motorcycles enclosed by default, or is that an upgrade?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Enclosed transport is our primary recommendation for motorcycles to protect against road debris and weather exposure, though open transport is also available depending on route and budget."
            }
          },
          {
            "@type": "Question",
            "name": "Can you ship an ATV or UTV that doesn't run?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Let us know at the time of quoting so a winch-equipped carrier is dispatched to load the non-running ATV or side-by-side safely."
            }
          },
          {
            "@type": "Question",
            "name": "Do you ship more than one motorcycle at a time?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Multiple motorcycles can be consolidated inside the same enclosed trailer bay, offering cost savings for multi-bike shipments."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://americacartransport.com/ship-a-car/motorcycle#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://americacartransport.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://americacartransport.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Motorcycle & Powersports Shipping", "item": "https://americacartransport.com/ship-a-car/motorcycle" }
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
          <span className="text-white font-bold">Motorcycle &amp; Powersports Shipping</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 lg:px-24 pt-10 pb-16 bg-[#F8FAFC] bg-grid-pattern border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <AnimatedSection direction="up" className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-900 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-blue-200/80 shadow-sm">
              <Bike className="w-4 h-4 text-blue-700" />
              Secured Enclosed Transport &amp; Wheel Chock Loading
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
              Motorcycle &amp; Powersports Shipping
            </h1>

            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-6">
              A motorcycle doesn&apos;t have a roof or four points of contact holding it steady — which is why it requires dedicated handling. America Car Transport ships motorcycles, sportbikes, cruisers, ATVs, and UTVs using specialized enclosed carriers.
            </p>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Enclosed Trailers with Soft-Strap Tie-Down Systems</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Cruisers, Sportbikes, Touring, ATVs, &amp; Side-by-Sides</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>$0 Upfront Deposit — Fully Insured Cargo Coverage</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:5307255383" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-extrabold text-sm shadow-md transition-all flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-200" /> Motorcycle Desk: (530) 725-5383
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
          
          {/* Why Enclosed is Preferred */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Why Enclosed Transport is Recommended for Motorcycles
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              Motorcycles are exposed to road debris, weather, and vibration during transit. Our primary recommendation for two-wheeled shipping is <Link href="/services/enclosed-auto-transport" className="text-blue-700 font-bold underline">Enclosed Auto Transport</Link> — securing your bike inside a covered trailer with soft straps and wheel chocks to protect paint and chrome finishes.
            </p>
          </article>

          {/* Vehicle Types Grid */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Motorcycles &amp; Powersports Vehicles We Ship
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base">Cruisers &amp; Touring Bikes</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Harley-Davidson, Indian, Honda, and heavy touring motorcycles handled with specialized tie-down equipment.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base">Sportbikes &amp; Street Bikes</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Yamaha, Kawasaki, Ducati, and Suzuki sportbikes secured using soft-strap technology that protects fairings.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base">ATVs &amp; Off-Road Quad Bikes</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Single and multi-passenger quads shipped for recreational trips, dealer sales, or household moves.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base">UTVs &amp; Side-by-Sides</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Polaris, Can-Am, and commercial side-by-side vehicles transported on open or enclosed trailers.
                </p>
              </div>
            </div>
          </article>

          {/* FAQ Section */}
          <article className="space-y-6 pt-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions (Motorcycle Shipping FAQs)
            </h2>

            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" /> Do you ship motorcycles enclosed by default?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Enclosed transport is our standard recommendation for motorcycles given their exposure risk, though open transport is also available depending on route and budget.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" /> Can you ship an ATV or UTV that doesn&apos;t run?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Yes — let us know at the time of quoting so a winch-equipped carrier is dispatched instead of a standard ramp-load truck.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" /> Do you ship more than one bike at a time?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Yes — multiple motorcycles can often be consolidated on the same enclosed trailer, which can improve cost efficiency for multi-bike shipments.
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
