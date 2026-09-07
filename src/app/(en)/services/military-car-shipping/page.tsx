import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import { ShieldCheck, Award, Clock, Users, Building, Phone, ArrowRight, CheckCircle2, Lock, AlertCircle, HelpCircle, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Military Car Shipping | PCS Auto Transport Discount | America Car Transport",
  description: "Shipping your car during a PCS move? America Car Transport offers a military discount, on-time delivery for report dates, and no upfront deposit. Get a free quote.",
  alternates: {
    canonical: "https://www.americacartransport.com/services/military-car-shipping",
  },
};

export default function MilitaryCarShippingPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.americacartransport.com/services/military-car-shipping#service",
        "name": "Military PCS Car Shipping",
        "serviceType": "Military PCS Vehicle Shipping & Auto Transport",
        "provider": {
          "@type": "Organization",
          "name": "America Car Transport",
          "url": "https://www.americacartransport.com"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Active duty, veteran, and retired U.S. military service members and families"
        },
        "offers": {
          "@type": "Offer",
          "description": "Discounted vehicle shipping rate for military CONUS PCS moves"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.americacartransport.com/services/military-car-shipping#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is car shipping reimbursable as part of a PPM/DITY move?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "That depends on your orders and installation finance office rules. Your PCS counselor or installation finance office can confirm what is reimbursable under your move type."
            }
          },
          {
            "@type": "Question",
            "name": "How far in advance should I book my PCS car shipment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Two to three weeks before your report date is recommended. During peak summer PCS season (May through August), booking 3 to 4 weeks out ensures maximum schedule flexibility."
            }
          },
          {
            "@type": "Question",
            "name": "Will the transport carrier drive onto the military base?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In almost all cases, no. Drivers typically meet service members at a nearby rendezvous location close to the main gate to avoid security delays."
            }
          },
          {
            "@type": "Question",
            "name": "Does America Car Transport ship vehicles OCONUS (overseas)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. OCONUS (overseas) POV shipping is arranged through the official government POV contractor (Move.mil). We specialize strictly in CONUS-to-CONUS continental shipments."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.americacartransport.com/services/military-car-shipping#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.americacartransport.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Military Car Shipping", "item": "https://www.americacartransport.com/services/military-car-shipping" }
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-900 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-blue-200/80 shadow-sm">
              <Award className="w-4 h-4 text-blue-700" />
              CONUS PCS Military Discount &amp; Zero Upfront Deposit
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
              Military Car Shipping for PCS Moves
            </h1>

            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-6">
              A Permanent Change of Station (PCS) move runs on a date you don&apos;t control. Report dates don&apos;t move for traffic, weather, or a carrier running behind — so when you&apos;re shipping a vehicle, certainty and timing matter most.
            </p>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>10% Military Discount for Active-Duty, Veterans, &amp; Retirees</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Guaranteed Schedule Backwards-Engineered from Your Report Date</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>$0 Upfront Deposit — Pay Nothing Until Your Carrier Is Dispatched</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:5307255383" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-extrabold text-sm shadow-md transition-all flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-200" /> Speak With PCS Desk: (530) 725-5383
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2} className="lg:col-span-6 flex justify-center lg:justify-end">
            <QuoteCalculator />
          </AnimatedSection>

        </div>
      </section>

      {/* Main Process & Guidance Copy */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8 space-y-12">
          
          {/* Section: How Military Car Shipping Works */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              How Military Car Shipping Works Step-by-Step
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              America Car Transport ships vehicles for military families across the continental United States (CONUS), with a discount for active-duty, veteran, and retired service members:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-2">
                <div className="w-8 h-8 bg-blue-600 text-white font-extrabold rounded-lg flex items-center justify-center text-sm">1</div>
                <h3 className="font-extrabold text-slate-900 text-base">Quote Built Around Report Dates</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Provide your origin base or duty station, destination, and report date. We build the pickup window backward from that date, ensuring your vehicle arrives on time.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-2">
                <div className="w-8 h-8 bg-blue-600 text-white font-extrabold rounded-lg flex items-center justify-center text-sm">2</div>
                <h3 className="font-extrabold text-slate-900 text-base">Choose Open or Enclosed</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Most PCS moves utilize <Link href="/services/open-auto-transport" className="text-blue-700 font-bold underline">Open Transport</Link> carriers. For luxury or classic vehicles, see our <Link href="/services/enclosed-auto-transport" className="text-blue-700 font-bold underline">Enclosed Transport</Link> protection.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-2">
                <div className="w-8 h-8 bg-blue-600 text-white font-extrabold rounded-lg flex items-center justify-center text-sm">3</div>
                <h3 className="font-extrabold text-slate-900 text-base">Confirm 10% Military Discount</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Active-duty, veteran, and retired military status qualifies for 10% off standard rates. Mention your service status when booking so it&apos;s applied to your dispatch paperwork.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-2">
                <div className="w-8 h-8 bg-blue-600 text-white font-extrabold rounded-lg flex items-center justify-center text-sm">4</div>
                <h3 className="font-extrabold text-slate-900 text-base">Gate Rendezvous Pickup &amp; Delivery</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  For security reasons, commercial multi-car haulers cannot drive onto military installations. Your driver will meet you at a convenient, pre-arranged gate rendezvous location nearby.
                </p>
              </div>
            </div>
          </article>

          {/* Direct Answer Callout Box: Base Access & OCONUS Scope */}
          <div className="bg-amber-50 border-l-4 border-amber-600 p-5 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm">
            <span className="text-amber-900 font-extrabold block text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-600" /> Honest Operational Scope — CONUS vs OCONUS
            </span>
            <p className="mb-2">
              <strong>America Car Transport specializes in CONUS-to-CONUS (continental U.S.) moves.</strong> If your PCS orders are OCONUS (overseas — Hawaii, Alaska, Guam, Europe), your vehicle shipment is arranged directly by the Department of Defense through its official POV contractor at <a href="https://www.move.mil" target="_blank" rel="noopener noreferrer" className="text-amber-900 font-bold underline inline-flex items-center gap-1">Move.mil <ExternalLink className="w-3 h-3" /></a>.
            </p>
            <p>
              For CONUS moves, we provide fully insured, licensed transport with gate rendezvous pickup near major installations including Fort Liberty, Fort Cavazos, Naval Station Norfolk, Camp Pendleton, Joint Base San Antonio, and Luke AFB.
            </p>
          </div>

          {/* Dual Vehicle Bundling Section */}
          <article className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Shipping Two Vehicles for a Single PCS Move
            </h2>
            <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed">
              Dual-military households, or service members relocating with a spouse, often need to move two vehicles simultaneously. You can book both vehicles on a single shipping order — coordinating simultaneous pickup is far more efficient than managing two separate, uncoordinated shipments.
            </p>
          </article>

          {/* FAQ Section */}
          <article className="space-y-6 pt-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions (PCS Move FAQs)
            </h2>

            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" /> Is car shipping reimbursable as part of a PPM/DITY move?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  That depends on your specific orders and finance office guidelines — America Car Transport does not provide financial or tax advice. Your PCS counselor or installation finance office can confirm what is reimbursable under your move authorization.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" /> How far in advance should I book my PCS car shipment?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Two to three weeks before your report date is recommended in most cases. During peak PCS season (May through August), booking 3 to 4 weeks in advance ensures maximum flexibility for carrier pickup windows.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" /> Will the carrier come onto base?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  In almost all cases, no. Drivers meet service members at a nearby gate rendezvous point (such as a local shopping center or visitor parking area outside the main gate) to avoid security delays and clearance issues.
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
