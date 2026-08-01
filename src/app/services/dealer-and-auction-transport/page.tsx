import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Building2, ShieldCheck, Clock, MapPin, Phone, CheckCircle2, AlertCircle, HelpCircle, Truck, ArrowRight, Layers, FileText } from "lucide-react";

export const metadata = {
  title: "Dealer & Auction Vehicle Transport | Volume Car Shipping for Dealers",
  description: "Reliable vehicle transport for dealerships, auction buyers, and fleet managers — including non-running and salvage-title vehicles. Account-level service, volume pricing.",
  alternates: {
    canonical: "https://americacartransport.com/services/dealer-and-auction-transport",
  },
};

export default function DealerAndAuctionTransportPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://americacartransport.com/services/dealer-and-auction-transport#service",
        "name": "Dealer & Auction Vehicle Transport",
        "serviceType": "Commercial B2B Vehicle Shipping & Auction Logistics",
        "provider": {
          "@type": "Organization",
          "name": "America Car Transport",
          "url": "https://americacartransport.com"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": "Dealerships, auction buyers, and fleet managers"
        },
        "offers": {
          "@type": "Offer",
          "description": "Commercial account vehicle transport for auction lots, dealer inventory, and fleet moves"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://americacartransport.com/services/dealer-and-auction-transport#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can you transport a vehicle that doesn't run?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Let us know at the time of booking so a carrier equipped with winches and specialized loading ramps is dispatched to your auction lot."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer account-based pricing for repeat commercial shipments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Commercial, auction, and dealer accounts are handled on a volume basis rather than a single consumer instant-quote flow. Contact our commercial desk to set up an account."
            }
          },
          {
            "@type": "Question",
            "name": "How fast can you arrange pickup after an auction win?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Reach out as soon as you have your gate pass and vehicle release details. We prioritize time-sensitive commercial pickups to avoid auction storage fees."
            }
          },
          {
            "@type": "Question",
            "name": "Do you handle salvage or damage-title vehicles?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Title status does not restrict transport capability. We ensure the appropriate carrier equipment is assigned for salvage and damage-title vehicles."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://americacartransport.com/services/dealer-and-auction-transport#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://americacartransport.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://americacartransport.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Dealer & Auction Transport", "item": "https://americacartransport.com/services/dealer-and-auction-transport" }
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
            <Link href="/contact" className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white px-4 py-2 rounded-xl text-xs md:text-sm font-extrabold shadow-sm">
              Commercial Account Quote
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
          <span className="text-white font-bold">Dealer &amp; Auction Transport</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 lg:px-24 pt-12 pb-16 bg-[#F8FAFC] bg-grid-pattern border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1200px] mx-auto text-center">
          <AnimatedSection direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 text-white rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-slate-700 shadow-sm">
              <Building2 className="w-4 h-4 text-blue-400" />
              Commercial B2B Volume Shipping &amp; Auction Logistics
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto">
              Dealer &amp; Auction Vehicle Transport
            </h1>

            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto mb-8">
              Moving vehicles at volume requires consistent, account-level service. Dealerships restocking inventory, auction buyers moving post-bid purchases, and fleet managers repositioning cars rely on America Car Transport for dependable multi-vehicle logistics.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="bg-blue-700 hover:bg-blue-800 text-white px-7 py-3.5 rounded-xl font-extrabold text-sm shadow-md transition-all flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-200" /> Request Volume Account Quote
              </Link>
              <a href="tel:5307255383" className="bg-white hover:bg-slate-100 border border-slate-300 text-slate-900 px-6 py-3.5 rounded-xl font-extrabold text-sm shadow-sm transition-all flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-600" /> Speak With Commercial Desk
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 bg-blue-100 text-blue-800 rounded-xl flex items-center justify-center font-bold">
                <Truck className="w-5 h-5 text-blue-700" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Non-Running &amp; Salvage-Title Logistics</h3>
              <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                Many auction purchases are non-drivable or carry salvage titles. We dispatch winched carriers and specialized loading equipment rather than treating every vehicle as a standard drive-on pickup.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-800 rounded-xl flex items-center justify-center font-bold">
                <Clock className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Immediate Post-Bid Gate Pickup</h3>
              <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                Winning an auction bid triggers strict lot pickup deadlines. Our commercial desk coordinates rapid gate pass pickups at major auction facilities to prevent daily storage fee penalties.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 bg-purple-100 text-purple-800 rounded-xl flex items-center justify-center font-bold">
                <Layers className="w-5 h-5 text-purple-700" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Volume &amp; Commercial Account Rates</h3>
              <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                Repeat commercial shippers require consistent margin planning across multiple shipments. We work on a volume account basis rather than a single consumer instant-quote model.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 bg-amber-100 text-amber-800 rounded-xl flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Multi-Vehicle Fleet Coordination</h3>
              <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                Moving multiple vehicles from the same dealer lot or auction yard is coordinated on multi-car trailers to optimize transit efficiency and delivery speed.
              </p>
            </div>
          </div>

          {/* Protection Options */}
          <article className="bg-slate-900 text-white p-8 rounded-3xl space-y-4">
            <h2 className="text-2xl font-bold">Protection Options for High-Value Inventory</h2>
            <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
              Standard open transport handles the bulk of commercial and auction volume. For high-value luxury inventory, brand-new dealership transfers, or exotics, see our specialized <Link href="/services/enclosed-auto-transport" className="text-blue-400 font-bold underline">Enclosed Auto Transport</Link> fleet options.
            </p>
          </article>

          {/* FAQ Section */}
          <article className="space-y-6 pt-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions (Commercial B2B FAQs)
            </h2>

            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" /> Can you transport a vehicle that doesn&apos;t run?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Yes — let us know at the time of quoting so a carrier with the right loading equipment and winch is dispatched to your auction lot.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" /> Do you offer account-based pricing for repeat commercial shipments?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Yes — commercial and dealer accounts are handled on a volume basis rather than a single consumer instant-quote flow. Contact our commercial team to set up an account.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" /> How fast can you arrange pickup after an auction win?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Reach out as soon as you have your pickup location and vehicle release details — we prioritize time-sensitive commercial pickups and confirm the fastest available window.
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
