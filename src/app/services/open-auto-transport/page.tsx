import React from "react";
import Link from "next/link";
import { ShieldCheck, Phone, CheckCircle2, Truck, Star, ArrowRight, Award, Lock, FileCheck, Layers, HelpCircle, ChevronRight, AlertCircle, MapPin, DollarSign, Clock, Car } from "lucide-react";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";

export const metadata = {
  title: "Open Auto Transport | Fast & Affordable Car Shipping",
  description: "Ship your car nationwide with open auto transport — America's most affordable, fastest way to move a vehicle. Get an instant quote, zero upfront deposit.",
  alternates: {
    canonical: "https://www.americacartransport.com/services/open-auto-transport",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Open Auto Transport",
  "name": "Open Auto Transport",
  "description": "Nationwide open car shipping on multi-car trailers — the most affordable and widely available method of vehicle transport.",
  "provider": {
    "@type": "MovingCompany",
    "name": "America Car Transport",
    "url": "https://www.americacartransport.com",
    "telephone": "+1-530-725-5383",
    "identifier": {
      "@type": "PropertyValue",
      "name": "USDOT",
      "value": "3849102"
    }
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "400",
    "highPrice": "1800",
    "offerCount": "1"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.americacartransport.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Open Auto Transport", "item": "https://www.americacartransport.com/services/open-auto-transport" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is open auto transport safe for my car?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Open transport is the same method dealerships use to deliver new vehicles, and carriers are licensed, insured, and required to inspect your car at pickup and delivery. The vehicle is exposed to weather during transit, but this does not affect structural or mechanical safety."
      }
    },
    {
      "@type": "Question",
      "name": "How much does open auto transport cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open auto transport typically costs $400 to $1,800 depending on distance, with national averages around $700 to $1,100 for a standard sedan. Shorter routes cost more per mile; longer cross-country routes cost less per mile but more in total."
      }
    },
    {
      "@type": "Question",
      "name": "How long does open auto transport take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most open transport shipments take 1 to 7 days depending on distance. Short regional routes often deliver in 1 to 3 days, while cross-country shipments typically take 5 to 10 days."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between open and enclosed auto transport?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open transport ships your vehicle on an uncovered multi-car trailer and is the more affordable, widely available option. Enclosed transport ships your vehicle in a fully covered trailer for maximum weather protection, at a 30 to 60 percent price premium."
      }
    },
    {
      "@type": "Question",
      "name": "Can I ship a car with open transport in winter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, open transport runs year-round, including winter. Your vehicle will be exposed to road salt, snow, and weather during transit."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to be present at pickup and delivery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You or an authorized representative should be present for the joint inspection at both pickup and delivery to review and sign off on your vehicle's condition."
      }
    }
  ]
};

export default function OpenAutoTransportPage() {
  return (
    <>
      {/* PART 4 — Schema Graph Injections */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
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
            <Link href="#open-quote-widget" className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] hover:from-[#E05E00] text-white px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-extrabold transition-all duration-200 shadow-[0_4px_14px_0_rgba(255,107,0,0.39)] rounded-xl shrink-0 whitespace-nowrap">
              Get Instant Quote
            </Link>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans">
        
        {/* PART 2 — Breadcrumb Navigation (Dark Luxury Theme) */}
        <div className="bg-slate-900 border-b border-slate-800 py-3 px-4 md:px-8 lg:px-24 text-xs font-semibold text-slate-400">
          <div className="max-w-[1400px] mx-auto flex items-center gap-2">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <span className="text-slate-600">/</span>
            <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link>
            <span className="text-slate-600">/</span>
            <span className="text-white font-bold">Open Auto Transport</span>
          </div>
        </div>

        {/* PART 3 — HERO SECTION WITH SLEEK DARK GRADIENT */}
        <section id="open-quote-widget" className="py-12 md:py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white border-b border-slate-800 px-4 md:px-8 lg:px-24 relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* H1 & Subheading */}
            <div className="lg:col-span-6 xl:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-950/80 text-blue-200 rounded-full text-xs md:text-sm font-bold mb-6 border border-blue-500/40 shadow-lg shadow-blue-950/40">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                Industry Standard Auto Transport (90%+ of Nationwide Shipments)
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-[3.6rem] font-black text-white leading-tight mb-6 tracking-tight">
                Open Auto Transport: <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">Fast, Affordable</span> Car Shipping Nationwide
              </h1>

              <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed mb-8">
                The most trusted way to ship a vehicle in America — used for over 9 out of every 10 vehicles shipped nationwide.
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
                  <div className="px-2.5 py-1 bg-blue-600 text-white font-extrabold text-xs rounded border border-blue-500">
                    BBB A+
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm leading-none">Accredited Business</div>
                    <div className="text-xs text-slate-400 font-medium mt-0.5">FMCSA USDOT #3849102</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a href="tel:5307255383" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-extrabold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-200" /> Call Shipping Experts: (530) 725-5383
                </a>
              </div>
            </div>

            {/* Embedded Quote Calculator Widget Preset */}
            <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
              <QuoteCalculator />
            </div>

          </div>
        </section>

        {/* H2: What Is Open Auto Transport? */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-100">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                What Is Open Auto Transport?
              </h2>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium mb-6">
                Open auto transport is the standard method of vehicle shipping, where your car is loaded onto an open-air, multi-car trailer — the same kind of trailer dealerships use to deliver new vehicles. Your vehicle travels alongside 6–10 other vehicles, secured with wheel straps and inspected at pickup and delivery.
              </p>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium mb-8">
                It&apos;s called &quot;open&quot; because the vehicles aren&apos;t covered — as opposed to enclosed transport, where cars ride inside a fully covered trailer. Because open carriers are far more common on the road, they&apos;re faster to book, more available on short notice, and significantly less expensive than enclosed shipping.
              </p>

              {/* Ideal Fit Checklist */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 mb-8 transition-all duration-300 hover:shadow-md hover:border-blue-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-base mb-4">This is the right choice for you if:</h3>
                <ul className="space-y-3 text-sm font-semibold text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>You&apos;re shipping a daily driver, SUV, truck, or standard vehicle (not a classic, exotic, or show car)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>You want the lowest cost per mile</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>You need the widest carrier availability and fastest pickup window</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Your vehicle doesn&apos;t require weather-sealed protection</span>
                  </li>
                </ul>
              </div>

              {/* Direct-Answer Callout Box (Targets "what is open auto transport" for AI Overviews) */}
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-l-blue-700">
                <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4" /> Direct Answer
                </div>
                <p className="text-slate-800 text-sm md:text-base font-semibold leading-relaxed">
                  <strong>Open auto transport</strong> is a vehicle shipping method where cars are transported on an uncovered, multi-car trailer. It&apos;s the most widely used and most affordable way to ship a car in the United States, accounting for the large majority of all vehicle shipments nationwide.
                </p>
              </div>

            </div>

            {/* PART 5 — Hero Image Matrix */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden group w-full transition-all duration-300 hover:shadow-2xl hover:border-blue-300">
                <img 
                  src="/open-auto-transport-car-carrier-loading-sedan.jpg" 
                  alt="Open auto transport carrier loading a sedan onto a multi-car trailer" 
                  title="Open auto transport carrier loading a sedan onto a multi-car trailer"
                  className="w-full h-[340px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <p className="p-3 bg-slate-900 text-white rounded-xl mt-3 text-xs font-medium leading-relaxed">
                  Multi-vehicle open carriers are the most cost-effective auto shipping method in the US.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* H2: How Open Auto Transport Works (5 Steps) */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                How Open Auto Transport Works
              </h2>
              <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
                Our 5-step process ensures full transparency from instant quote booking to final delivery inspection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-blue-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                    1
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors">Step 1 — Get an Instant Quote</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    Enter your pickup and delivery location, vehicle details, and preferred dates. America Car Transport&apos;s live pricing engine gives you a real market-rate quote in under 30 seconds — no upfront deposit required.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-blue-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                    2
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors">Step 2 — We Match You With a Vetted Carrier</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    We dispatch your shipment to a licensed, insured carrier from our nationwide network. You&apos;ll receive carrier details and a confirmed pickup window before anything is charged.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-blue-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                    3
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors">Step 3 — Vehicle Pickup & Inspection</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    Your driver arrives at the scheduled window, performs a joint inspection with you, and documents your vehicle&apos;s condition before loading it onto the open trailer.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-blue-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                    4
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors">Step 4 — Nationwide Transit</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    Your vehicle travels directly to its destination (or via regional hub, depending on route). You can track shipment status throughout transit.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-blue-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                    5
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors">Step 5 — Delivery & Final Inspection</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    The carrier delivers your vehicle, you complete a final joint inspection together, and sign off on delivery. Door-to-door delivery is available on most routes.
                  </p>
                </div>
              </div>

            </div>

            {/* Process Step 3 Image Matrix */}
            <div className="mt-12 bg-white p-4 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center gap-6 transition-all duration-300 hover:shadow-md hover:border-blue-300">
              <img 
                src="/open-auto-transport-vehicle-inspection-pickup.jpg" 
                alt="Driver and customer completing a vehicle inspection before open auto transport pickup" 
                title="Driver and customer completing a vehicle inspection before open auto transport pickup"
                className="w-full sm:w-64 h-40 object-cover rounded-2xl shrink-0"
              />
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">Pre-Trip & Post-Trip Vehicle Inspection</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Driver and customer completing a vehicle inspection before open auto transport pickup. Any existing marks are recorded on the official Bill of Lading.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* H2: Open Auto Transport Cost & Interactive Pricing Matrix */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Open Auto Transport Cost
              </h2>
              <p className="text-slate-600 font-medium text-lg max-w-3xl mx-auto">
                Open transport pricing is primarily driven by <strong>distance, vehicle size, route demand, and season.</strong> As a general rule, cost per mile goes <em>down</em> as distance goes <em>up</em> — shorter routes cost more per mile because fixed carrier costs (fuel, time, insurance) are spread over fewer miles.
              </p>
            </div>

            {/* H3: Typical Cost Table */}
            <div className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Typical Open Auto Transport Cost by Distance</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white text-sm">
                        <th className="p-4 font-bold">Distance</th>
                        <th className="p-4 font-bold">Typical Cost Range</th>
                        <th className="p-4 font-bold">Approx. Cost Per Mile</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-sm font-medium text-slate-700">
                      <tr className="hover:bg-blue-50/50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Under 500 miles</td>
                        <td className="p-4 font-semibold text-blue-700">$400 – $900</td>
                        <td className="p-4 font-mono">$1.20 – $2.20</td>
                      </tr>
                      <tr className="bg-slate-50/50 hover:bg-blue-50/50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">500 – 1,500 miles</td>
                        <td className="p-4 font-semibold text-blue-700">$700 – $1,300</td>
                        <td className="p-4 font-mono">$0.70 – $1.00</td>
                      </tr>
                      <tr className="hover:bg-blue-50/50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">1,500+ miles (cross-country)</td>
                        <td className="p-4 font-semibold text-blue-700">$1,000 – $1,800</td>
                        <td className="p-4 font-mono">$0.40 – $0.70</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-3 italic">
                  Prices reflect typical national ranges for a standard operable sedan on open transport and will vary by exact route, vehicle size, season, and carrier availability. Get an exact quote using the calculator above.
                </p>
              </div>

              {/* Cost Chart Image Matrix */}
              <div className="lg:col-span-5">
                <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-md transition-all duration-300 hover:shadow-xl hover:border-blue-300">
                  <img 
                    src="/open-auto-transport-cost-by-distance-chart-2026.jpg" 
                    alt="Chart showing average open auto transport cost by shipping distance in 2026" 
                    title="Chart showing average open auto transport cost by shipping distance in 2026"
                    className="w-full h-56 object-cover rounded-2xl"
                  />
                  <p className="p-3 bg-slate-100 text-slate-800 rounded-xl mt-3 text-xs font-semibold">
                    Chart showing average open auto transport cost by shipping distance in 2026.
                  </p>
                </div>
              </div>
            </div>

            {/* H3: What Affects Your Price */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 mb-8 transition-all duration-300 hover:shadow-md hover:border-blue-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">What Affects Your Open Auto Transport Price</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-semibold text-slate-700">
                <li className="flex items-start gap-2.5 p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 transition-all duration-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Vehicle size & weight</strong> — SUVs and trucks take more trailer space and typically cost $100–$400 more than a sedan</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 transition-all duration-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Distance & route popularity</strong> — high-traffic corridors (e.g., LA–Chicago) price more competitively than remote routes</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 transition-all duration-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Season</strong> — spring and summer (peak &quot;snowbird&quot; and moving season) run higher than fall/winter</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 transition-all duration-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Vehicle condition</strong> — non-running vehicles typically add $150–$300 due to special loading equipment</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 transition-all duration-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Pickup flexibility</strong> — flexible pickup windows generally get better rates than fixed-date requests</span>
                </li>
              </ul>

              {/* Internal Link */}
              <div className="mt-6 pt-6 border-t border-slate-200/80 text-xs md:text-sm font-bold text-slate-900">
                See our full <Link href="/resources/car-shipping-cost-guide" className="text-blue-600 hover:underline">Car Shipping Cost Guide</Link> for a state-by-state and route-by-route breakdown.
              </div>
            </div>

          </div>
        </section>

        {/* H2: Open vs. Enclosed Auto Transport */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Open vs. Enclosed Auto Transport — Which Should You Choose?
              </h2>
              <p className="text-slate-600 font-medium text-lg">
                Compare features to evaluate whether open or enclosed transport fits your vehicle requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
              <div className="lg:col-span-7">
                {/* Comparison Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white text-sm">
                        <th className="p-4 font-bold">Feature</th>
                        <th className="p-4 font-bold bg-blue-600">Open Transport</th>
                        <th className="p-4 font-bold">Enclosed Transport</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-sm font-medium text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Cost</td>
                        <td className="p-4 bg-blue-50/50 font-bold text-emerald-700">Lowest cost, most affordable</td>
                        <td className="p-4">30–60% more than open</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Speed of booking</td>
                        <td className="p-4 bg-blue-50/50 font-semibold text-blue-900">Fastest — largest carrier availability</td>
                        <td className="p-4">Slower — fewer specialized carriers</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Weather exposure</td>
                        <td className="p-4 bg-blue-50/50">Vehicle is exposed to elements</td>
                        <td className="p-4">Fully protected from weather, debris, road spray</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Best for</td>
                        <td className="p-4 bg-blue-50/50 font-semibold text-blue-900">Daily drivers, SUVs, trucks, standard vehicles</td>
                        <td className="p-4">Classic, exotic, luxury, or show vehicles</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Usage</td>
                        <td className="p-4 bg-blue-50/50">Used for the large majority of all shipments</td>
                        <td className="p-4">Used for high-value or specialty vehicles</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Comparison Image Matrix */}
              <div className="lg:col-span-5">
                <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-md transition-all duration-300 hover:shadow-xl hover:border-blue-300">
                  <img 
                    src="/open-vs-enclosed-auto-transport-comparison.jpg" 
                    alt="Side-by-side comparison of open trailer and enclosed trailer auto transport" 
                    title="Side-by-side comparison of open trailer and enclosed trailer auto transport"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <p className="p-3 bg-slate-100 text-slate-800 rounded-xl mt-3 text-xs font-semibold">
                    Side-by-side comparison of open trailer and enclosed trailer auto transport.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct-Answer Callout (Targets "is open car transport safe") */}
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-2xl shadow-sm mb-6 transition-all duration-300 hover:shadow-md hover:border-l-emerald-700">
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Is Open Car Transport Safe?
              </div>
              <p className="text-slate-800 text-sm md:text-base font-semibold leading-relaxed">
                <strong>Yes — open auto transport is safe</strong> for the vast majority of vehicles. It&apos;s the same method used to deliver new cars to dealerships nationwide. Vehicles are secured with wheel straps, inspected before and after transport, and covered by carrier insurance. The only real difference from enclosed transport is exposure to weather and road elements during transit — not a difference in structural safety.
              </p>
            </div>

            {/* Internal Link */}
            <div className="text-xs md:text-sm font-bold text-slate-900">
              Shipping a classic, exotic, or luxury vehicle? See <Link href="/services/enclosed-auto-transport" className="text-blue-600 hover:underline">Enclosed Auto Transport</Link> for maximum protection.
            </div>

          </div>
        </section>

        {/* H2: What Vehicles Can Be Shipped With Open Transport */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  What Vehicles Can Be Shipped With Open Transport
                </h2>
                <p className="text-slate-600 font-medium text-lg mb-6">
                  Open transport works for nearly every standard vehicle type:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <Link href="/ship-a-car/sedan" className="bg-slate-50 hover:bg-blue-50/90 border border-slate-200 hover:border-blue-400 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-lg font-bold text-slate-900 text-center block group">
                    <Car className="w-8 h-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span>Sedans</span>
                  </Link>

                  <Link href="/ship-a-car/suv" className="bg-slate-50 hover:bg-blue-50/90 border border-slate-200 hover:border-blue-400 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-lg font-bold text-slate-900 text-center block group">
                    <Truck className="w-8 h-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span>SUVs</span>
                  </Link>

                  <Link href="/ship-a-car/truck" className="bg-slate-50 hover:bg-blue-50/90 border border-slate-200 hover:border-blue-400 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-lg font-bold text-slate-900 text-center block group">
                    <Truck className="w-8 h-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span>Trucks</span>
                  </Link>

                  <Link href="/ship-a-car/motorcycle" className="bg-slate-50 hover:bg-blue-50/90 border border-slate-200 hover:border-blue-400 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-lg font-bold text-slate-900 text-center block group">
                    <Layers className="w-8 h-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span>Motorcycles</span>
                  </Link>

                  <Link href="/ship-a-car/non-running-vehicle" className="bg-slate-50 hover:bg-blue-50/90 border border-slate-200 hover:border-amber-400 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-lg font-bold text-slate-900 text-center block group sm:col-span-2 lg:col-span-2">
                    <AlertCircle className="w-8 h-8 text-amber-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span>Non-running vehicles (special equipment required — additional fee applies)</span>
                  </Link>
                </div>

                <p className="text-sm font-semibold text-slate-600">
                  For classic cars, exotics, or show vehicles, we recommend <Link href="/services/enclosed-auto-transport" className="text-blue-600 hover:underline">Enclosed Auto Transport</Link> for maximum protection.
                </p>
              </div>

              {/* Vehicle Types Image Matrix */}
              <div className="lg:col-span-5">
                <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-md transition-all duration-300 hover:shadow-xl hover:border-blue-300">
                  <img 
                    src="/open-auto-transport-suv-truck-sedan-shipping.jpg" 
                    alt="Sedan, SUV, and truck loaded for open auto transport shipping" 
                    title="Sedan, SUV, and truck loaded for open auto transport shipping"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <p className="p-3 bg-slate-100 text-slate-800 rounded-xl mt-3 text-xs font-semibold">
                    Sedan, SUV, and truck loaded for open auto transport shipping.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* H2: Why Ship With America Car Transport */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-slate-900 text-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Ship With America Car Transport
              </h2>
              <p className="text-slate-400 font-medium text-lg">
                America&apos;s most trusted bonded & insured car shipping network.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/60 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 group">
                <div>
                  <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 group-hover:text-blue-300 transition-colors">Fully Licensed & Bonded</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed mb-3">
                    USDOT #3849102, MC #1098472. Verify credentials with FMCSA databases.
                  </p>
                </div>
                <Link href="/licensing-insurance" className="text-xs font-bold text-blue-400 hover:underline">
                  Verify Credentials →
                </Link>
              </div>

              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/60 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 group">
                <div>
                  <DollarSign className="w-8 h-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 group-hover:text-amber-300 transition-colors">Zero Upfront Deposit</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
                    You don&apos;t pay a single dime until a carrier is dispatched for your vehicle.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/60 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 group">
                <div>
                  <MapPin className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 group-hover:text-blue-300 transition-colors">Nationwide Network</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
                    Coverage across all 50 states with door-to-door delivery.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/60 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 group">
                <div>
                  <Star className="w-8 h-8 text-amber-400 mb-4 fill-amber-400 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 group-hover:text-amber-300 transition-colors">Real Customer Reviews</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed mb-3">
                    Over 10,450+ verified customer reviews with a 4.9/5.0 aggregate rating.
                  </p>
                </div>
                <Link href="/reviews" className="text-xs font-bold text-blue-400 hover:underline">
                  See Verified Reviews →
                </Link>
              </div>

              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/60 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between md:col-span-2 lg:col-span-1 transition-all duration-300 transform hover:-translate-y-1.5 group">
                <div>
                  <FileCheck className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors">Transparent Instant Pricing</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
                    No bait-and-quote tactics. Instant market-rate quotes.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* H2: Open Auto Transport FAQs */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-200">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Open Auto Transport FAQs
              </h2>
              <p className="text-slate-600 font-medium text-base">
                Direct, extractable answers optimized for Featured Snippets and AI Overview citation.
              </p>
            </div>

            <div className="space-y-6">
              
              {/* FAQ 1 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Is open auto transport safe for my car?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Yes. Open transport is the same method dealerships use to deliver new vehicles, and carriers are licensed, insured, and required to inspect your car at pickup and delivery. The vehicle is exposed to weather during transit, but this does not affect structural or mechanical safety.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  How much does open auto transport cost?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Open auto transport typically costs $400–$1,800 depending on distance, with national averages around $700–$1,100 for a standard sedan. Shorter routes cost more per mile; longer cross-country routes cost less per mile but more in total. Use our instant quote calculator above for an exact price on your route.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  How long does open auto transport take?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Most open transport shipments take 1–7 days depending on distance. Short regional routes (under 500 miles) often deliver in 1–3 days, while cross-country shipments typically take 5–10 days.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  What&apos;s the difference between open and enclosed auto transport?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Open transport ships your vehicle on an uncovered multi-car trailer and is the more affordable, widely available option. Enclosed transport ships your vehicle in a fully covered trailer for maximum weather protection, at a 30–60% price premium — typically used for classic, exotic, or luxury vehicles.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Can I ship a car with open transport in winter?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Yes, open transport runs year-round, including winter. Your vehicle will be exposed to road salt, snow, and weather during transit, which is why owners of classic or high-value vehicles often choose enclosed transport for winter shipments instead.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Do I need to be present at pickup and delivery?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  You or an authorized representative should be present for the joint inspection at both pickup and delivery to review and sign off on your vehicle&apos;s condition.
                </p>
              </div>

            </div>

            {/* Link to Full FAQ Hub */}
            <div className="mt-8 text-center">
              <Link href="/faq" className="text-sm font-bold text-blue-600 hover:underline inline-flex items-center gap-1">
                Have more questions? Visit our full FAQ Hub <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>

        {/* H2: Get Your Open Auto Transport Quote (CTA Block) */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-slate-900 text-white text-center">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Get Your Open Auto Transport Quote
            </h2>
            <p className="text-slate-300 text-lg font-medium mb-8">
              Get an instant, no-obligation open auto transport quote in under 30 seconds. Zero upfront deposit.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link 
                href="#open-quote-widget" 
                className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] hover:from-[#E05E00] text-white px-8 py-4 rounded-xl font-black text-lg shadow-xl shadow-orange-500/20 inline-flex items-center gap-2"
              >
                Get Instant Quote →
              </Link>
              <a 
                href="tel:5307255383" 
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5 text-blue-400" /> Call (530) 725-5383
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
