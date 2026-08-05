import React from "react";
import Link from "next/link";
import { ShieldCheck, Phone, CheckCircle2, Truck, Star, ArrowRight, Award, Lock, FileCheck, Layers, HelpCircle, ChevronRight, AlertCircle, MapPin, DollarSign, Clock, Car, Calculator, Zap } from "lucide-react";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import CalculatorSEOContent from "@/components/calculator/CalculatorSEOContent";

export const metadata = {
  title: "Car Shipping Cost Calculator | Instant Quote, No Email",
  description: "Calculate your car shipping cost instantly — no email required. See real 2026 pricing by distance, vehicle, and transport type. Free, accurate estimate.",
  alternates: {
    canonical: "https://www.americacartransport.com/tools/car-shipping-cost-calculator",
  },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Car Shipping Cost Calculator",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any (Web-based)",
  "url": "https://www.americacartransport.com/tools/car-shipping-cost-calculator",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "provider": {
    "@type": "MovingCompany",
    "name": "America Car Transport",
    "url": "https://www.americacartransport.com",
    "identifier": {
      "@type": "PropertyValue",
      "name": "USDOT",
      "value": "3849102"
    }
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com/" },
    { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://www.americacartransport.com/tools" },
    { "@type": "ListItem", "position": 3, "name": "Car Shipping Cost Calculator", "item": "https://www.americacartransport.com/tools/car-shipping-cost-calculator" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is shipping my car cheaper than driving it myself?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Often, yes — once you factor in gas, meals, lodging, mileage wear, and your own time, shipping is frequently more cost-effective for trips over 750–1,000 miles, especially for a second or non-daily vehicle."
      }
    },
    {
      "@type": "Question",
      "name": "What's the cheapest way to ship a car?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open transport on a standard (non-expedited) timeline, booked during off-peak season, along a high-traffic corridor (like major interstate routes), is typically the lowest-cost option."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get an instant quote without a phone call?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — our calculator above gives you a real-time estimate based on your route, vehicle, and transport type with zero obligation and no call required."
      }
    },
    {
      "@type": "Question",
      "name": "How is my shipping quote calculated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your quote is based on five main factors: distance, vehicle type/size, condition (running or non-running), transport type (open or enclosed), and current seasonal demand along your route."
      }
    },
    {
      "@type": "Question",
      "name": "Does the price change by season?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Snowbird season (fall and spring) and peak summer relocation months typically see 10–20% higher demand-driven pricing. Booking in off-peak months can lower your rate."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get a quote by ZIP code instead of city?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — the calculator accepts ZIP codes for both pickup and delivery locations for a more precise, address-level estimate."
      }
    },
    {
      "@type": "Question",
      "name": "Is my quote the final price I'll pay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our quotes are all-inclusive of standard cargo insurance and door-to-door service, with no hidden pickup or fuel surcharge fees added later."
      }
    }
  ]
};

const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": "America Car Transport 2026 Car Shipping Cost Data",
  "description": "Average car shipping cost ranges by distance, vehicle type, and transport type, based on nationwide route data.",
  "temporalCoverage": "2026",
  "creator": {
    "@type": "Organization",
    "name": "America Car Transport"
  },
  "license": "https://www.americacartransport.com/terms-of-service"
};

export default function CarShippingCostCalculatorPage() {
  return (
    <>
      {/* PART 4 — Schema Graph Injections */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      
      {/* Global Header Navigation */}
      <header className="sticky top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="max-w-[1400px] w-full mx-auto px-4 md:px-8 py-3.5 md:py-2.5 md:py-3 flex items-center justify-between gap-4 md:gap-6">
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

          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 whitespace-nowrap text-slate-700 font-semibold text-xs lg:text-sm xl:text-[15px]">
            <Link href="/#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</Link>
            <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
            <Link href="/#why-us" className="hover:text-blue-600 transition-colors">Why Us</Link>
            <Link href="/#popular-routes" className="hover:text-blue-600 transition-colors">Popular Routes</Link>
            <Link href="/locations" className="hover:text-blue-600 transition-colors">Locations</Link>
            <Link href="/faq" className="hover:text-blue-600 transition-colors">FAQ Hub</Link>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <a href="tel:5307255383" className="hidden xl:flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-100 px-3.5 py-2 rounded-xl text-xs xl:text-sm font-extrabold transition-all shadow-sm shrink-0 whitespace-nowrap">
              <Phone className="w-4 h-4 text-blue-600" />
              (530) 725-5383
            </a>
            <Link href="#cost-calculator-widget" className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] hover:from-[#E05E00] text-white px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-extrabold transition-all duration-200 shadow-[0_4px_14px_0_rgba(255,107,0,0.39)] rounded-xl shrink-0 whitespace-nowrap">
              Calculate Cost
            </Link>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans">
        
        {/* PART 2 — Breadcrumb Navigation */}
        <div className="bg-slate-950 border-b border-slate-800 py-3 px-4 md:px-8 lg:px-24 text-xs font-semibold text-slate-400">
          <div className="max-w-[1400px] mx-auto flex items-center gap-2">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <span className="text-slate-700">/</span>
            <span className="text-slate-400">Tools</span>
            <span className="text-slate-700">/</span>
            <span className="text-white font-bold">Car Shipping Cost Calculator</span>
          </div>
        </div>

        {/* PART 3 — HERO SECTION WITH EMBEDDED CALCULATOR */}
        <section id="cost-calculator-widget" className="py-12 md:py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white border-b border-slate-800 px-4 md:px-8 lg:px-24 relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* H1 & Subheading */}
            <div className="lg:col-span-6 xl:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-950/90 text-cyan-300 rounded-full text-xs md:text-sm font-bold mb-6 border border-cyan-500/40 shadow-lg shadow-cyan-950/40">
                <Calculator className="w-4 h-4 text-cyan-400" />
                100% Free · Instant Estimate · No Email Required
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-[3.6rem] font-black text-white leading-tight mb-6 tracking-tight">
                Car Shipping Cost Calculator: <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-300 bg-clip-text text-transparent">See Your Real Price Instantly</span> — No Email Required
              </h1>

              <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed mb-8">
                Enter your route, vehicle, and transport type to get a real 2026 price range in seconds — not a lead-gen guess.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 bg-slate-900/90 p-4 rounded-2xl border border-slate-800 shadow-xl max-w-xl mb-8">
                <div className="flex items-center gap-2.5 pr-4 border-r border-slate-800">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <div>
                    <div className="font-extrabold text-white text-sm leading-none">4.9 / 5.0 Rating</div>
                    <div className="text-xs text-slate-400 font-medium mt-0.5">Google Verified Reviews</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="px-2.5 py-1 bg-cyan-600 text-white font-extrabold text-xs rounded border border-cyan-500">
                    BBB A+
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm leading-none">Accredited Business</div>
                    <div className="text-xs text-slate-400 font-medium mt-0.5">FMCSA USDOT #3849102</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a href="tel:5307255383" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3.5 rounded-xl font-extrabold text-sm shadow-lg shadow-cyan-950/40 transition-all flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-200" /> Call Pricing Team: (530) 725-5383
                </a>
              </div>
            </div>

            {/* Embedded Quote Calculator Widget Preset */}
            <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
              <QuoteCalculator />
            </div>

          </div>
        </section>

        <CalculatorSEOContent />

        {/* PART 3 — GET A LOCKED, BOOKABLE QUOTE (CLOSING CTA BANNER) */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white text-center relative overflow-hidden">
          <div className="max-w-[1000px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/20 text-cyan-300 rounded-full text-xs md:text-sm font-bold mb-6 border border-cyan-500/30">
              <Calculator className="w-4 h-4 text-cyan-400" />
              Real 2026 Route Pricing
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
              Get a Locked, Bookable Quote
            </h2>
            
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8 font-medium">
              Ready for a firm price? Get a locked quote from a real carrier — zero upfront deposit.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="#cost-calculator-widget" className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] hover:from-[#E05E00] text-white px-8 py-4 rounded-xl font-extrabold text-base transition-all shadow-[0_4px_14px_0_rgba(255,107,0,0.39)] hover:scale-105">
                Get Instant Quote →
              </Link>
              <a href="tel:5307255383" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-6 py-4 rounded-xl font-extrabold text-base transition-all flex items-center gap-2">
                <Phone className="w-5 h-5 text-cyan-400" /> (530) 725-5383
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
