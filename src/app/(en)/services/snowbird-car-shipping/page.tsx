import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import { Sun, Calendar, Clock, MapPin, Phone, CheckCircle2, AlertCircle, HelpCircle, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Snowbird Car Shipping | Seasonal Auto Transport to Florida & Arizona",
  description: "Shipping your car south for the winter? Learn the best time to book snowbird car shipping to Florida, Arizona, and beyond — and how to avoid peak-season price spikes.",
  alternates: {
    canonical: "https://www.americacartransport.com/services/snowbird-car-shipping",
  },
};

export default function SnowbirdCarShippingPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.americacartransport.com/services/snowbird-car-shipping#service",
        "name": "Snowbird Car Shipping — Seasonal Vehicle Transport",
        "serviceType": "Seasonal Auto Transport & Snowbird Vehicle Shipping",
        "provider": {
          "@type": "Organization",
          "name": "America Car Transport",
          "url": "https://www.americacartransport.com"
        },
        "areaServed": ["Florida", "Arizona", "California", "New York", "Illinois", "Michigan"],
        "audience": {
          "@type": "Audience",
          "audienceType": "Seasonal snowbird vehicle owners and retirees"
        },
        "offers": {
          "@type": "Offer",
          "description": "Seasonal car shipping for snowbirds relocating for the winter with $0 deposit"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.americacartransport.com/services/snowbird-car-shipping#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does the car shipping price really change by season?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Rates rise during the fall (southbound) and spring (northbound) snowbird rushes due to concentrated carrier demand. Booking 3 to 4 weeks ahead avoids peak seasonal price spikes."
            }
          },
          {
            "@type": "Question",
            "name": "Can I book my return trip (northbound) in advance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Many snowbirds book both fall and spring legs at the same time to lock in their schedule and rate consistency for the entire season."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a discount for twice-a-year returning snowbird customers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Returning snowbird customers qualify for priority scheduling and repeat-customer rate consistency year over year."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.americacartransport.com/services/snowbird-car-shipping#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.americacartransport.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Snowbird Car Shipping", "item": "https://www.americacartransport.com/services/snowbird-car-shipping" }
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

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 lg:px-24 pt-10 pb-16 bg-[#F8FAFC] bg-grid-pattern border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <AnimatedSection direction="up" className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 text-amber-900 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-amber-200/80 shadow-sm">
              <Sun className="w-4 h-4 text-amber-600" />
              Seasonal Snowbird Auto Transport &amp; Zero Upfront Deposit
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
              Snowbird Car Shipping — Seasonal Vehicle Transport
            </h1>

            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-6">
              If you split your year between the north and the south, you already know your car needs to make the trip twice. America Car Transport ships vehicles for snowbirds heading to Florida, Arizona, and California every fall, and back north every spring.
            </p>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Honest Seasonal Timing — Beat the Fall &amp; Spring Price Rush</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Book Both Southbound &amp; Northbound Legs in Advance</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>$0 Deposit — Pay Nothing Until Your Carrier Is Assigned</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:5307255383" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-extrabold text-sm shadow-md transition-all flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-200" /> Seasonal Desk: (530) 725-5383
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2} className="lg:col-span-6 flex justify-center lg:justify-end">
            <QuoteCalculator />
          </AnimatedSection>

        </div>
      </section>

      {/* Main Content & Guidance */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8 space-y-12">
          
          {/* Why Timing Matters */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Why Timing Matters for Snowbird Car Shipping
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              Car shipping prices move with demand, the same way flights and hotels do. Every fall, a wave of snowbirds books transport south at roughly the same time — late September through November — which tightens carrier availability and pushes rates up industry-wide. The same thing happens in reverse every spring, typically March through April, as vehicles head back north.
            </p>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              None of this is unique to any one company — it&apos;s a predictable, seasonal pattern across the entire auto transport industry. Booking ahead of the rush, rather than during it, is the single biggest lever you have over price and scheduling.
            </p>
          </article>

          {/* Recommended Booking Calendar */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Recommended Snowbird Booking Calendar
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="bg-amber-50/60 border border-amber-200 p-6 rounded-2xl space-y-2">
                <div className="text-xs font-extrabold text-amber-800 uppercase tracking-wider">Fall Southbound Leg</div>
                <h3 className="font-extrabold text-slate-900 text-base">September – November</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Aim to book 3 to 4 weeks before your departure date, ideally by early-to-mid September for an autumn move to FL, AZ, or CA.
                </p>
              </div>

              <div className="bg-blue-50/60 border border-blue-200 p-6 rounded-2xl space-y-2">
                <div className="text-xs font-extrabold text-blue-800 uppercase tracking-wider">Spring Northbound Leg</div>
                <h3 className="font-extrabold text-slate-900 text-base">March – April</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Aim to book 3 to 4 weeks before your spring return, ideally by late February for a move back to NY, IL, or MI.
                </p>
              </div>

              <div className="bg-emerald-50/60 border border-emerald-200 p-6 rounded-2xl space-y-2">
                <div className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">Shoulder Season Savings</div>
                <h3 className="font-extrabold text-slate-900 text-base">Off-Peak Flexibility</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  If your schedule allows a shoulder-season move a few weeks outside peak rush, you&apos;ll enjoy better carrier availability and lower rates.
                </p>
              </div>
            </div>
          </article>

          {/* Main Corridors */}
          <article className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Popular Snowbird Transport Corridors We Cover
            </h2>
            <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed">
              We coordinate regular seasonal car haulers along all major snowbird routes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs md:text-sm font-bold text-slate-800">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <span>New York ↔ Florida / Arizona</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Illinois (Chicago) ↔ Florida / Arizona</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Michigan ↔ Florida / Arizona</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <span><Link href="/routes/california-to-florida" className="text-blue-700 underline">California ↔ Florida</Link> / <Link href="/routes/california-to-texas" className="text-blue-700 underline">Texas</Link></span>
              </div>
            </div>
            <p className="text-xs text-slate-600 font-medium pt-2">
              Most snowbird moves utilize standard <Link href="/services/open-auto-transport" className="text-blue-700 font-bold underline">Open Auto Transport</Link>. For high-value or antique vehicles, see our <Link href="/services/enclosed-auto-transport" className="text-blue-700 font-bold underline">Enclosed Auto Transport</Link> options.
            </p>
          </article>

          {/* FAQ Section */}
          <article className="space-y-6 pt-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions (Snowbird FAQs)
            </h2>

            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-600" /> Does the car shipping price really change by season?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Yes — rates across the auto transport industry rise during the fall and spring snowbird rushes because demand for carriers concentrates in a short window. Booking 3 to 4 weeks ahead is the most reliable way to avoid paying a seasonal premium.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-600" /> Can I book my return trip in advance?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Yes. Many snowbirds book both legs — fall southbound and spring northbound — at the same time to lock in a plan for the whole season. Mention it to your booking agent to schedule both trips.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-600" /> Is there a discount for twice-a-year returning snowbird customers?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Yes. Returning snowbird customers are a valued group — we work with you directly on scheduling priority and rate consistency year over year.
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
