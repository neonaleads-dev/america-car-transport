import React from "react";
import Link from "next/link";
import { ShieldCheck, Phone, CheckCircle2, Truck, Star, ArrowRight, Award, Lock, FileCheck, Layers, HelpCircle, ChevronRight, AlertCircle, MapPin, DollarSign, Clock, Car, Zap } from "lucide-react";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";

export const metadata = {
  title: "Expedited Auto Transport | Fast, Priority Car Shipping",
  description: "Need your car shipped fast? Expedited auto transport prioritizes your pickup within 24–48 hours. Get an instant priority quote — zero upfront deposit.",
  alternates: {
    canonical: "https://www.americacartransport.com/services/expedited-auto-transport",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Expedited Auto Transport",
  "name": "Expedited Auto Transport",
  "description": "Priority nationwide car shipping with expedited pickup, typically within 24 to 48 hours, for time-sensitive vehicle relocations.",
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
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.americacartransport.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Expedited Auto Transport", "item": "https://www.americacartransport.com/services/expedited-auto-transport" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How fast is expedited car shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Expedited shipments are typically prioritized for pickup within 24 to 48 hours, compared to the standard 5-business-day pickup window. Next-day priority pickup is available on many routes at a higher cost."
      }
    },
    {
      "@type": "Question",
      "name": "How much does expedited auto transport cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Expedited service typically adds $200 to $500 to standard shipping cost, or roughly 30 to 40 percent more overall, depending on route and urgency. Next-day priority service can run 1.5x to 2x standard pricing."
      }
    },
    {
      "@type": "Question",
      "name": "Can you ship a car the same day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Same-day pickup is possible on some routes with strong carrier availability, but it isn't guaranteed nationwide. Next-day priority pickup is the more reliable expedited option."
      }
    },
    {
      "@type": "Question",
      "name": "Does expedited shipping guarantee my delivery date?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Expedited shipping guarantees priority pickup speed, not an exact delivery date. Delivery timing still depends on distance, route, and carrier scheduling once the vehicle is in transit."
      }
    },
    {
      "@type": "Question",
      "name": "How soon can I get my car picked up?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With expedited service, pickup is typically prioritized within 24 to 48 hours of booking, compared to the standard 5-business-day window, depending on carrier availability on the specific route."
      }
    },
    {
      "@type": "Question",
      "name": "Is expedited shipping available for enclosed transport?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Expedited service can be combined with either open or enclosed transport, though enclosed carriers have fewer trucks on the road, which can affect how quickly a priority match is found."
      }
    }
  ]
};

export default function ExpeditedAutoTransportPage() {
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
            <Link href="#expedited-quote-widget" className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] hover:from-[#E05E00] text-white px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-extrabold transition-all duration-200 shadow-[0_4px_14px_0_rgba(255,107,0,0.39)] rounded-xl shrink-0 whitespace-nowrap">
              Get Instant Quote
            </Link>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans">
        
        {/* PART 2 — Breadcrumb Navigation */}
        <div className="bg-amber-950 border-b border-amber-900/80 py-3 px-4 md:px-8 lg:px-24 text-xs font-semibold text-amber-200/70">
          <div className="max-w-[1400px] mx-auto flex items-center gap-2">
            <Link href="/" className="hover:text-amber-300 transition-colors">Home</Link>
            <span className="text-amber-800">/</span>
            <Link href="/services" className="hover:text-amber-300 transition-colors">Services</Link>
            <span className="text-amber-800">/</span>
            <span className="text-white font-bold">Expedited Auto Transport</span>
          </div>
        </div>

        {/* PART 3 — HERO SECTION WITH EMBEDDED QUOTE WIDGET */}
        <section id="expedited-quote-widget" className="py-12 md:py-20 bg-gradient-to-br from-amber-950 via-slate-900 to-slate-950 text-white border-b border-slate-800 px-4 md:px-8 lg:px-24 relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* H1 & Subheading */}
            <div className="lg:col-span-6 xl:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-950/80 text-amber-300 rounded-full text-xs md:text-sm font-bold mb-6 border border-amber-500/40 shadow-lg shadow-amber-950/40">
                <Zap className="w-4 h-4 text-amber-400" />
                Priority Pickup Window: 24–48 Hours
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-[3.6rem] font-black text-white leading-tight mb-6 tracking-tight">
                Expedited Auto Transport: <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200 bg-clip-text text-transparent">Priority Car Shipping</span> When Time Matters
              </h1>

              <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed mb-8">
                Skip the standard queue — get your vehicle prioritized for pickup within 24–48 hours.
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
                  <div className="px-2.5 py-1 bg-amber-600 text-white font-extrabold text-xs rounded border border-amber-500">
                    BBB A+
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm leading-none">Accredited Business</div>
                    <div className="text-xs text-slate-400 font-medium mt-0.5">FMCSA USDOT #3849102</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a href="tel:5307255383" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3.5 rounded-xl font-extrabold text-sm shadow-lg shadow-amber-950/40 transition-all flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-200" /> Call Priority Dispatch: (530) 725-5383
                </a>
              </div>
            </div>

            {/* Embedded Quote Calculator Widget Preset */}
            <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
              <QuoteCalculator />
            </div>

          </div>
        </section>

        {/* H2: What Is Expedited Auto Transport? */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-100">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                What Is Expedited Auto Transport?
              </h2>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium mb-6">
                Expedited auto transport upgrades your shipment to priority status, so it&apos;s matched with a carrier faster than a standard order. While standard shipments typically have a pickup window of around 5 business days, expedited orders are prioritized for pickup within 24–48 hours, depending on route and carrier availability.
              </p>

              {/* Ideal Choice Checklist */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 mb-8 transition-all duration-300 hover:shadow-md hover:border-amber-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-base mb-4">This is the right choice for you if:</h3>
                <ul className="space-y-3 text-sm font-semibold text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>You&apos;re facing a tight relocation deadline (new job start date, lease end, closing date)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>You&apos;re on a military PCS timeline with fixed deployment dates</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>A dealership, auction, or event has a strict delivery deadline</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>Your standard shipment is running behind schedule and you need it moving now</span>
                  </li>
                </ul>
              </div>

              {/* Direct-Answer Callout Box (Targets "what is expedited auto transport" for AI Overviews) */}
              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-l-amber-700">
                <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-amber-600" /> Direct Answer
                </div>
                <p className="text-slate-800 text-sm md:text-base font-semibold leading-relaxed">
                  <strong>Expedited auto transport</strong> is a priority car shipping service that gets your vehicle matched with a carrier faster than standard shipping — typically within 24–48 hours instead of the standard 5-business-day pickup window. It costs more than standard shipping because it requires faster dispatch and less scheduling flexibility for the carrier.
                </p>
              </div>

            </div>

            {/* PART 5 — Hero Image Matrix */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden group w-full transition-all duration-300 hover:shadow-2xl hover:border-amber-300">
                <img 
                  src="/expedited-auto-transport-priority-carrier-pickup.jpg" 
                  alt="Expedited auto transport carrier arriving for priority vehicle pickup" 
                  title="Expedited auto transport carrier arriving for priority vehicle pickup"
                  className="w-full h-[340px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <p className="p-3 bg-slate-900 text-white rounded-xl mt-3 text-xs font-medium leading-relaxed">
                  Expedited carriers prioritize 24–48 hour pickup dispatch across major US transport corridors.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* H2: How Expedited Auto Transport Works (5 Steps) */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                How Expedited Auto Transport Works
              </h2>
              <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
                Fast-tracked 5-step dispatch process for urgent vehicle shipping.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-amber-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-amber-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-700 transition-colors">
                    1
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-amber-600 transition-colors">Step 1 — Get a Priority Quote</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    Request your quote and select expedited service. Your shipment is immediately flagged as priority in our dispatch system.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-amber-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-amber-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-700 transition-colors">
                    2
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-amber-600 transition-colors">Step 2 — Priority Carrier Matching</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    Rather than waiting in the standard scheduling queue, your shipment is actively matched with the next available qualified carrier on your route — often within 24–48 hours.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-amber-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-amber-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-700 transition-colors">
                    3
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-amber-600 transition-colors">Step 3 — Fast-Tracked Pickup</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    Your driver arrives for pickup on a significantly shortened timeline compared to standard shipping, completes the joint inspection, and loads your vehicle.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-amber-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-amber-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-700 transition-colors">
                    4
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-amber-600 transition-colors">Step 4 — Priority Transit</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    Your vehicle is transported directly on the carrier&apos;s route, with priority status maintained throughout transit.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-amber-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-amber-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-700 transition-colors">
                    5
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-amber-600 transition-colors">Step 5 — Delivery & Final Inspection</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    The carrier delivers your vehicle, you complete a final joint inspection, and sign off on delivery.
                  </p>
                </div>
              </div>

            </div>

            {/* Direct-Answer Callout (Targets "does expedited shipping guarantee delivery date") */}
            <div className="mt-12 bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-l-amber-700">
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-600" /> Does Expedited Shipping Guarantee a Delivery Date?
              </div>
              <p className="text-slate-800 text-sm md:text-base font-semibold leading-relaxed">
                <strong>Expedited shipping prioritizes pickup speed, not a guaranteed delivery date.</strong> It significantly shortens how quickly your vehicle is matched with a carrier and picked up (within 24–48 hours), but delivery timing still depends on distance, route logistics, and driver hours-of-service compliance once in transit. For the most time-sensitive deliveries, ask your dispatch team about the tightest realistic delivery window for your specific route.
              </p>
            </div>

            {/* Step 2 Image Matrix */}
            <div className="mt-8 bg-white p-4 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center gap-6 transition-all duration-300 hover:shadow-md hover:border-amber-300">
              <img 
                src="/expedited-car-shipping-dispatch-carrier-matching.jpg" 
                alt="Priority dispatch matching a vehicle with an available expedited auto transport carrier" 
                title="Priority dispatch matching a vehicle with an available expedited auto transport carrier"
                className="w-full sm:w-64 h-40 object-cover rounded-2xl shrink-0"
              />
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">Active Priority Carrier Matching</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Priority dispatch matching a vehicle with an available expedited auto transport carrier. Expedited orders bypass standard wait queues.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* H2: Expedited Auto Transport Cost */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Expedited Auto Transport Cost
              </h2>
              <p className="text-slate-600 font-medium text-lg max-w-3xl mx-auto">
                Expedited service typically adds <strong>$200–$500 to your standard shipping cost</strong>, or roughly 30–40% more than standard pricing, depending on route and urgency. True next-day priority pickup can run 1.5–2x standard cost.
              </p>
            </div>

            {/* Upcharge Table */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
              <div className="lg:col-span-7">
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white text-sm">
                        <th className="p-4 font-bold">Service Level</th>
                        <th className="p-4 font-bold">Typical Pickup Window</th>
                        <th className="p-4 font-bold bg-amber-600">Typical Cost Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-sm font-medium text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Standard</td>
                        <td className="p-4">~5 business days</td>
                        <td className="p-4 font-semibold text-slate-600">Baseline price</td>
                      </tr>
                      <tr className="bg-amber-50/60 hover:bg-amber-50 transition-colors">
                        <td className="p-4 font-bold text-amber-950">Expedited Priority</td>
                        <td className="p-4 font-bold text-amber-900">24–48 hours</td>
                        <td className="p-4 bg-amber-100/80 font-extrabold text-amber-900">+$200–$500 (≈30–40% more)</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Next-Day Priority</td>
                        <td className="p-4 font-bold text-amber-700">Next business day</td>
                        <td className="p-4 font-bold text-amber-900">1.5x–2x standard cost</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-slate-500 font-medium italic mb-6">
                  *Ranges reflect typical national pricing and vary by route, vehicle size, and carrier availability. Use the quote calculator above for an exact quote on your route and timeline.
                </p>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Why Expedited Shipping Costs More</h3>
                  <ul className="space-y-3 text-sm font-semibold text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <span><strong>Priority dispatch time</strong> — your shipment jumps the standard scheduling queue, which takes active dispatcher effort</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <span><strong>Reduced route-batching efficiency</strong> — standard shipments are grouped efficiently along a carrier&apos;s route; expedited orders require faster, less-batched matching</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <span><strong>Carrier incentive</strong> — carriers are compensated for reprioritizing their schedule to accommodate your timeline</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 pt-4 border-t border-slate-200 text-xs md:text-sm font-bold text-slate-900">
                    See our full <Link href="/resources/car-shipping-cost-guide" className="text-blue-600 hover:underline">Car Shipping Cost Guide</Link> for a state-by-state and route-by-route breakdown.
                  </div>
                </div>
              </div>

              {/* Cost Chart Image Matrix */}
              <div className="lg:col-span-5">
                <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-md transition-all duration-300 hover:shadow-xl hover:border-amber-300">
                  <img 
                    src="/expedited-auto-transport-cost-chart-2026.jpg" 
                    alt="Chart showing expedited auto transport cost upcharge by urgency level in 2026" 
                    title="Chart showing expedited auto transport cost upcharge by urgency level in 2026"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <p className="p-3 bg-slate-100 text-slate-800 rounded-xl mt-3 text-xs font-semibold">
                    Chart showing expedited auto transport cost upcharge by urgency level in 2026.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* H2: Expedited vs. Standard Shipping */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Expedited vs. Standard Shipping — Which Should You Choose?
              </h2>
              <p className="text-slate-600 font-medium text-lg">
                Compare features to determine whether urgency justifies the priority upcharge.
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
                        <th className="p-4 font-bold bg-amber-600">Expedited</th>
                        <th className="p-4 font-bold">Standard</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-sm font-medium text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Pickup window</td>
                        <td className="p-4 bg-amber-50/60 font-bold text-amber-950">24–48 hours (priority)</td>
                        <td className="p-4">~5 business days</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Cost</td>
                        <td className="p-4 bg-amber-50/60 font-semibold text-amber-900">+$200–$500 (≈30–40% more)</td>
                        <td className="p-4 font-semibold text-emerald-700">Baseline</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Best for</td>
                        <td className="p-4 bg-amber-50/60 font-semibold text-amber-950">Tight deadlines, urgent relocations, PCS moves</td>
                        <td className="p-4">Flexible timelines, most shippers</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Delivery timing</td>
                        <td className="p-4 bg-amber-50/60 font-semibold text-amber-950">Faster overall, but not a guaranteed exact date</td>
                        <td className="p-4">Standard transit timing based on distance</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Flexibility trade-off</td>
                        <td className="p-4 bg-amber-50/60">Less flexible pickup scheduling increases urgency</td>
                        <td className="p-4 font-semibold text-emerald-700">Most cost-effective, flexible pickup window</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Comparison Image Matrix */}
              <div className="lg:col-span-5">
                <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-md transition-all duration-300 hover:shadow-xl hover:border-amber-300">
                  <img 
                    src="/expedited-vs-standard-car-shipping-timeline-comparison.jpg" 
                    alt="Timeline comparison of expedited and standard car shipping pickup windows" 
                    title="Timeline comparison of expedited and standard car shipping pickup windows"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <p className="p-3 bg-slate-100 text-slate-800 rounded-xl mt-3 text-xs font-semibold">
                    Timeline comparison of expedited and standard car shipping pickup windows.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct-Answer Callout (Targets "is expedited shipping worth it") */}
            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-2xl shadow-sm mb-6 transition-all duration-300 hover:shadow-md hover:border-l-amber-700">
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-600" /> Is Expedited Shipping Worth It?
              </div>
              <p className="text-slate-800 text-sm md:text-base font-semibold leading-relaxed">
                <strong>Expedited shipping is worth it when your timeline genuinely can&apos;t flex</strong> — a job relocation deadline, a PCS move, or an auction/dealership delivery window. If your schedule has any flexibility, choosing a standard 3–5 day pickup window with <Link href="/services/open-auto-transport" className="text-blue-600 underline font-bold">Open Transport</Link> or <Link href="/services/enclosed-auto-transport" className="text-blue-600 underline font-bold">Enclosed Transport</Link> can save 10–20% with no other changes to your shipment.
              </p>
            </div>

          </div>
        </section>

        {/* H2: Who Uses Expedited Auto Transport */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Who Uses Expedited Auto Transport
              </h2>
              <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
                Time-sensitive shippers across military, corporate, auction, and residential sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 hover:border-amber-300 transition-all">
                    <h3 className="font-bold text-slate-900 text-base mb-1">Military & PCS Moves</h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      Fixed relocation timelines with little room for deployment delay.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 hover:border-amber-300 transition-all">
                    <h3 className="font-bold text-slate-900 text-base mb-1">Job Relocations</h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      New job start dates that cannot be pushed back.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 hover:border-amber-300 transition-all">
                    <h3 className="font-bold text-slate-900 text-base mb-1">Home Closings & Leases</h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      Moving day is a fixed calendar date, not a broad window.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 hover:border-amber-300 transition-all">
                    <h3 className="font-bold text-slate-900 text-base mb-1">Dealerships & Auctions</h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      Inventory arrival or show event deadlines.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 hover:border-amber-300 transition-all md:col-span-2">
                    <h3 className="font-bold text-slate-900 text-base mb-1">Delayed Standard Shipments</h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      Upgrading an existing order that has fallen behind schedule elsewhere.
                    </p>
                  </div>
                </div>
              </div>

              {/* Audience Image Matrix */}
              <div className="lg:col-span-5">
                <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-md transition-all duration-300 hover:shadow-xl hover:border-amber-300">
                  <img 
                    src="/expedited-car-shipping-military-pcs-relocation.jpg" 
                    alt="Military PCS relocation using expedited auto transport for a fixed moving timeline" 
                    title="Military PCS relocation using expedited auto transport for a fixed moving timeline"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <p className="p-3 bg-slate-100 text-slate-800 rounded-xl mt-3 text-xs font-semibold">
                    Military PCS relocation using expedited auto transport for a fixed moving timeline.
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
              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-amber-500/60 shadow-sm hover:shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 group">
                <div>
                  <ShieldCheck className="w-8 h-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 group-hover:text-amber-300 transition-colors">Fully Licensed & Bonded</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed mb-3">
                    USDOT #3849102, MC #1098472. Verify credentials with FMCSA databases.
                  </p>
                </div>
                <Link href="/licensing-insurance" className="text-xs font-bold text-blue-400 hover:underline">
                  Verify Credentials →
                </Link>
              </div>

              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-amber-500/60 shadow-sm hover:shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 group">
                <div>
                  <DollarSign className="w-8 h-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 group-hover:text-amber-300 transition-colors">Zero Upfront Deposit</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
                    You don&apos;t pay a single dime until a carrier is dispatched for your vehicle.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-amber-500/60 shadow-sm hover:shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 group">
                <div>
                  <Zap className="w-8 h-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 group-hover:text-amber-300 transition-colors">Dedicated Priority Dispatch</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
                    Expedited orders are actively managed by senior dispatchers, not left in queue.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-amber-500/60 shadow-sm hover:shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 group">
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

              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-amber-500/60 shadow-sm hover:shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between md:col-span-2 lg:col-span-1 transition-all duration-300 transform hover:-translate-y-1.5 group">
                <div>
                  <FileCheck className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors">Open & Enclosed</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
                    Available with both <Link href="/services/open-auto-transport" className="text-blue-400 underline">Open</Link> and <Link href="/services/enclosed-auto-transport" className="text-blue-400 underline">Enclosed</Link> transport.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* H2: Expedited Auto Transport FAQs */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-200">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Expedited Auto Transport FAQs
              </h2>
              <p className="text-slate-600 font-medium text-base">
                Direct, extractable answers optimized for Featured Snippets and AI Overview citation.
              </p>
            </div>

            <div className="space-y-6">
              
              {/* FAQ 1 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-amber-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  How fast is expedited car shipping?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Expedited shipments are typically prioritized for pickup within 24 to 48 hours, compared to the standard 5-business-day pickup window. Next-day priority pickup is available on many routes at a higher cost.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-amber-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  How much does expedited auto transport cost?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Expedited service typically adds $200 to $500 to standard shipping cost, or roughly 30 to 40 percent more overall, depending on route and urgency. Next-day priority service can run 1.5x to 2x standard pricing.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-amber-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Can you ship a car the same day?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Same-day pickup is possible on some routes with strong carrier availability, but it isn&apos;t guaranteed nationwide. Next-day priority pickup is the more reliable expedited option.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-amber-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Does expedited shipping guarantee my delivery date?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Expedited shipping guarantees priority pickup speed, not an exact delivery date. Delivery timing still depends on distance, route, and carrier scheduling once the vehicle is in transit.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-amber-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  How soon can I get my car picked up?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  With expedited service, pickup is typically prioritized within 24 to 48 hours of booking, compared to the standard 5-business-day window, depending on carrier availability on the specific route.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-amber-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Is expedited shipping available for enclosed transport?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Yes. Expedited service can be combined with either open or enclosed transport, though enclosed carriers have fewer trucks on the road, which can affect how quickly a priority match is found.
                </p>
              </div>

            </div>

            <div className="mt-12 text-center">
              <Link href="/faq" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                View Full FAQ Hub <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>

        {/* PART 3 — GET YOUR EXPEDITED AUTO TRANSPORT QUOTE (CLOSING CTA BANNER) */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white text-center relative overflow-hidden">
          <div className="max-w-[1000px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/20 text-amber-300 rounded-full text-xs md:text-sm font-bold mb-6 border border-amber-500/30">
              <Zap className="w-4 h-4 text-amber-400" />
              Fast-Tracked Priority Dispatch
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
              Get Your Expedited Auto Transport Quote
            </h2>
            
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8 font-medium">
              Get an instant, no-obligation expedited auto transport quote in under 30 seconds. Zero upfront deposit required.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="#expedited-quote-widget" className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] hover:from-[#E05E00] text-white px-8 py-4 rounded-xl font-extrabold text-base transition-all shadow-[0_4px_14px_0_rgba(255,107,0,0.39)] hover:scale-105">
                Get Priority Quote →
              </Link>
              <a href="tel:5307255383" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-6 py-4 rounded-xl font-extrabold text-base transition-all flex items-center gap-2">
                <Phone className="w-5 h-5 text-amber-400" /> (530) 725-5383
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
