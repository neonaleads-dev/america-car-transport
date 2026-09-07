import React from "react";
import Link from "next/link";
import { ShieldCheck, Phone, CheckCircle2, Truck, Star, ArrowRight, Award, Lock, FileCheck, Layers, HelpCircle, ChevronRight, AlertCircle, MapPin, DollarSign, Clock, Car, Building2 } from "lucide-react";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";

export const metadata = {
  title: "Terminal-to-Terminal Car Shipping | Save on Auto Transport",
  description: "Save on car shipping with terminal-to-terminal transport — drop off and pick up at a secure hub. Flexible, cost-effective, zero upfront deposit.",
  alternates: {
    canonical: "https://www.americacartransport.com/services/terminal-to-terminal-shipping",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Terminal-to-Terminal Auto Transport",
  "name": "Terminal-to-Terminal Shipping",
  "description": "Cost-effective nationwide car shipping with drop-off and pickup at secure terminals rather than door-to-door delivery.",
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
    { "@type": "ListItem", "position": 3, "name": "Terminal-to-Terminal Shipping", "item": "https://www.americacartransport.com/services/terminal-to-terminal-shipping" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is terminal-to-terminal car shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Terminal-to-terminal car shipping is a vehicle transport method where you drop off and pick up your car at designated terminals rather than at your home address, typically resulting in a lower cost than door-to-door shipping."
      }
    },
    {
      "@type": "Question",
      "name": "How much can I save with terminal-to-terminal shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Terminal-to-terminal shipping typically saves $100 to $300, or roughly 10 to 20 percent, compared to door-to-door shipping on the same route. Savings can be higher on long-distance routes near major metro terminals."
      }
    },
    {
      "@type": "Question",
      "name": "Are there storage fees for terminal shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most terminals charge a daily storage fee if the vehicle isn't picked up within the provided window after arrival. Confirming the terminal's specific policy before booking helps avoid unexpected costs."
      }
    },
    {
      "@type": "Question",
      "name": "How does terminal-to-terminal shipping work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The vehicle is dropped off at a terminal near the pickup location, transported by carrier to a terminal near the destination, and picked up there, with a joint inspection completed at both drop-off and pickup."
      }
    },
    {
      "@type": "Question",
      "name": "Is terminal-to-terminal shipping safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Terminals are secure facilities, and the vehicle is inspected and documented at both drop-off and pickup, just as with door-to-door shipping."
      }
    },
    {
      "@type": "Question",
      "name": "Who should use terminal-to-terminal shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It's best for budget-conscious shippers with flexible schedules who live near a major metro terminal, commonly college students, military families on PCS moves, and long-distance movers prioritizing cost."
      }
    }
  ]
};

export default function TerminalToTerminalShippingPage() {
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
            <Link href="/routes" className="hover:text-blue-600 transition-colors">Popular Routes</Link>
            <Link href="/locations" className="hover:text-blue-600 transition-colors">Locations</Link>
            <Link href="/faq" className="hover:text-blue-600 transition-colors">FAQ Hub</Link>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <a href="tel:5307255383" className="hidden xl:flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-100 px-3.5 py-2 rounded-xl text-xs xl:text-sm font-extrabold transition-all shadow-sm shrink-0 whitespace-nowrap">
              <Phone className="w-4 h-4 text-blue-600" />
              (530) 725-5383
            </a>
            <Link href="#terminal-quote-widget" className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] hover:from-[#E05E00] text-white px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-extrabold transition-all duration-200 shadow-[0_4px_14px_0_rgba(255,107,0,0.39)] rounded-xl shrink-0 whitespace-nowrap">
              Get Instant Quote
            </Link>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans">
        
        {/* PART 2 — Breadcrumb Navigation */}
        <div className="bg-teal-950 border-b border-teal-900/80 py-3 px-4 md:px-8 lg:px-24 text-xs font-semibold text-teal-200/70">
          <div className="max-w-[1400px] mx-auto flex items-center gap-2">
            <Link href="/" className="hover:text-teal-300 transition-colors">Home</Link>
            <span className="text-teal-800">/</span>
            <Link href="/services" className="hover:text-teal-300 transition-colors">Services</Link>
            <span className="text-teal-800">/</span>
            <span className="text-white font-bold">Terminal-to-Terminal Shipping</span>
          </div>
        </div>

        {/* PART 3 — HERO SECTION WITH EMBEDDED QUOTE WIDGET */}
        <section id="terminal-quote-widget" className="py-12 md:py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white border-b border-slate-800 px-4 md:px-8 lg:px-24 relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* H1 & Subheading */}
            <div className="lg:col-span-6 xl:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-950/80 text-teal-300 rounded-full text-xs md:text-sm font-bold mb-6 border border-teal-500/40 shadow-lg shadow-teal-950/40">
                <Building2 className="w-4 h-4 text-teal-400" />
                Budget-Smart Drop-off & Pickup Hubs
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-[3.6rem] font-black text-white leading-tight mb-6 tracking-tight">
                Terminal-to-Terminal Shipping: <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent">The Budget-Smart Way</span> to Ship Your Car
              </h1>

              <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed mb-8">
                Drop off and pick up at a secure terminal near you — flexible scheduling, lower cost, same trusted carrier network.
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
                  <div className="px-2.5 py-1 bg-teal-600 text-white font-extrabold text-xs rounded border border-teal-500">
                    BBB A+
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm leading-none">Accredited Business</div>
                    <div className="text-xs text-slate-400 font-medium mt-0.5">FMCSA Licensed Broker</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a href="tel:5307255383" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3.5 rounded-xl font-extrabold text-sm shadow-lg shadow-teal-950/40 transition-all flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal-200" /> Call Shipping Team: (530) 725-5383
                </a>
              </div>
            </div>

            {/* Embedded Quote Calculator Widget Preset */}
            <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
              <QuoteCalculator />
            </div>

          </div>
        </section>

        {/* H2: What Is Terminal-to-Terminal Shipping? */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-100">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                What Is Terminal-to-Terminal Shipping?
              </h2>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium mb-6">
                Terminal-to-terminal shipping means you drop your vehicle off at a secure transport terminal near your pickup location, and collect it from a terminal near your destination — rather than having a carrier come directly to your address. The carrier handles everything in between. Because the driver isn&apos;t routing into individual residential addresses, terminal shipping is typically the most cost-effective delivery method available.
              </p>

              {/* Ideal Fit Checklist */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 mb-8 transition-all duration-300 hover:shadow-md hover:border-teal-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-base mb-4">This is the right choice for you if:</h3>
                <ul className="space-y-3 text-sm font-semibold text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>You want the lowest possible cost and don&apos;t mind a short drive to a terminal</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>Your schedule is flexible around drop-off and pickup windows</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>You&apos;re a college student, military family on a PCS move, or budget-conscious mover</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>You live near a major metro area with easy terminal access</span>
                  </li>
                </ul>
              </div>

              {/* Direct-Answer Callout Box (Targets "what is terminal to terminal car shipping" for AI Overviews) */}
              <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-l-teal-700">
                <div className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-teal-600" /> Direct Answer
                </div>
                <p className="text-slate-800 text-sm md:text-base font-semibold leading-relaxed">
                  <strong>Terminal-to-terminal car shipping</strong> is a vehicle transport method where you drop off and pick up your car at designated terminals rather than at your home address. It&apos;s typically the most affordable shipping option, since the carrier avoids residential detours, but requires more flexibility from you around scheduling.
                </p>
              </div>

            </div>

            {/* PART 5 — Hero Image Matrix */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden group w-full transition-all duration-300 hover:shadow-2xl hover:border-teal-300">
                <img 
                  src="/terminal-to-terminal-car-shipping-vehicle-dropoff.jpg" 
                  alt="Vehicle owner dropping off a car at a terminal-to-terminal auto transport facility" 
                  title="Vehicle owner dropping off a car at a terminal-to-terminal auto transport facility"
                  className="w-full h-[340px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <p className="p-3 bg-slate-900 text-white rounded-xl mt-3 text-xs font-medium leading-relaxed">
                  Terminal drop-offs reduce driver residential detours, delivering 10–20% savings.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* H2: How Terminal-to-Terminal Shipping Works (5 Steps) */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                How Terminal-to-Terminal Shipping Works
              </h2>
              <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
                Step-by-step terminal drop-off, consolidation, and pickup process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-teal-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-teal-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-700 transition-colors">
                    1
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-teal-600 transition-colors">Step 1 — Get an Instant Quote</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    Enter your route and vehicle details and select terminal pickup/delivery. You&apos;ll see a lower cost estimate than door-to-door for the same route.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-teal-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-teal-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-700 transition-colors">
                    2
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-teal-600 transition-colors">Step 2 — Drop Off at Origin Terminal</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    Bring your vehicle to the designated terminal near your pickup location during its operating hours. A joint inspection is completed and documented before your car is stored securely.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-teal-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-teal-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-700 transition-colors">
                    3
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-teal-600 transition-colors">Step 3 — Carrier Transit</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    Your vehicle is loaded and transported to the destination terminal, often consolidated with other vehicles heading the same direction for added efficiency.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-teal-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-teal-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-700 transition-colors">
                    4
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-teal-600 transition-colors">Step 4 — Pick Up at Destination Terminal</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    Once your vehicle arrives, you&apos;ll be notified to collect it from the destination terminal within the pickup window provided.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-teal-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-teal-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-700 transition-colors">
                    5
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-teal-600 transition-colors">Step 5 — Final Inspection</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    Complete a joint inspection at pickup and sign off, just as you would with door-to-door delivery.
                  </p>
                </div>
              </div>

            </div>

            {/* Step 2 Image Matrix */}
            <div className="mt-8 bg-white p-4 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center gap-6 transition-all duration-300 hover:shadow-md hover:border-teal-300">
              <img 
                src="/terminal-to-terminal-shipping-vehicle-inspection.jpg" 
                alt="Joint vehicle inspection at terminal drop-off for terminal-to-terminal shipping" 
                title="Joint vehicle inspection at terminal drop-off for terminal-to-terminal shipping"
                className="w-full sm:w-64 h-40 object-cover rounded-2xl shrink-0"
              />
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">Terminal Drop-Off Condition Documentation</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Joint vehicle inspection at terminal drop-off for terminal-to-terminal shipping. Condition sign-off is completed before secure facility parking.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* H2: Terminal-to-Terminal Shipping Cost */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Terminal-to-Terminal Shipping Cost
              </h2>
              <p className="text-slate-600 font-medium text-lg max-w-3xl mx-auto">
                Terminal-to-terminal shipping typically saves <strong>$100–$300, or roughly 10–20%</strong>, compared to door-to-door shipping on the same route — savings can run higher (up to 30%) on long-distance routes near major metro terminals. Be cautious of marketing claims promising 50%+ savings; realistic, consistent savings in this range reflect what most shippers actually experience.
              </p>
            </div>

            {/* What You're Actually Saving On */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 mb-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">What You&apos;re Actually Saving On</h3>
              <ul className="space-y-4 text-sm font-semibold text-slate-700">
                <li className="flex items-start gap-2.5 p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 transition-all duration-200">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>No residential routing</strong> — the carrier&apos;s route stays on major highways and interstate corridors instead of detouring into neighborhoods</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 transition-all duration-200">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Consolidated loading</strong> — terminals let carriers batch multiple vehicles heading the same direction more efficiently</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 transition-all duration-200">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Lower coordination overhead</strong> — fixed terminal hours are simpler to schedule around than individual address pickups</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-4 border-t border-slate-200 text-center text-xs md:text-sm font-bold text-slate-900">
                See our full <Link href="/tools/car-shipping-cost-calculator" className="text-blue-600 hover:underline">Car Shipping Cost Calculator</Link> for an exact price on your route.
              </div>
            </div>

          </div>
        </section>

        {/* H2: The Honest Tradeoff: Storage Fees */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
              <div className="lg:col-span-7">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  The Honest Tradeoff: Storage Fees
                </h2>
                
                {/* Direct-Answer Callout (Targets "are there storage fees for terminal shipping" — competitor loophole) */}
                <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-2xl shadow-sm mb-6 transition-all duration-300 hover:shadow-md hover:border-l-amber-700">
                  <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-600" /> Storage Fee Warning
                  </div>
                  <p className="text-slate-800 text-sm md:text-base font-semibold leading-relaxed">
                    <strong>Yes — most terminals charge a daily storage fee</strong> if your vehicle isn&apos;t picked up within the provided window after arrival. This is the most important tradeoff to understand with terminal shipping: the lower base price can be offset if you&apos;re not able to pick up promptly. Always confirm your terminal&apos;s storage fee policy and pickup window before booking, and plan your pickup logistics in advance.
                  </p>
                </div>

                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  This is worth stating clearly, because it&apos;s the detail that most affects whether terminal shipping actually saves you money in practice — a great rate with an unplanned week of storage fees can erase the savings entirely.
                </p>
              </div>

              {/* Storage Yard Image Matrix */}
              <div className="lg:col-span-5">
                <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-md transition-all duration-300 hover:shadow-xl hover:border-teal-300">
                  <img 
                    src="/terminal-to-terminal-shipping-storage-yard.jpg" 
                    alt="Secure vehicle storage yard at a terminal-to-terminal auto transport facility" 
                    title="Secure vehicle storage yard at a terminal-to-terminal auto transport facility"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <p className="p-3 bg-slate-100 text-slate-800 rounded-xl mt-3 text-xs font-semibold">
                    Secure vehicle storage yard at a terminal-to-terminal auto transport facility.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* H2: Terminal-to-Terminal vs. Door-to-Door */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Terminal-to-Terminal vs. Door-to-Door — Which Should You Choose?
              </h2>
              <p className="text-slate-600 font-medium text-lg">
                Comparing cost savings against convenience tradeoffs.
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
                        <th className="p-4 font-bold bg-teal-600">Terminal-to-Terminal</th>
                        <th className="p-4 font-bold">Door-to-Door</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-sm font-medium text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Cost</td>
                        <td className="p-4 bg-teal-50/60 font-extrabold text-teal-900">Typically $100–$300 less</td>
                        <td className="p-4">Slightly higher, often under 15% more</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Convenience</td>
                        <td className="p-4 bg-teal-50/60">You handle drop-off/pickup at a terminal</td>
                        <td className="p-4 font-bold text-emerald-800">Carrier comes to your address</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Scheduling</td>
                        <td className="p-4 bg-teal-50/60">Fixed around terminal operating hours</td>
                        <td className="p-4 font-semibold text-emerald-800">Flexible around your availability</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Storage risk</td>
                        <td className="p-4 bg-teal-50/60 text-amber-900 font-semibold">Possible fees if not picked up promptly</td>
                        <td className="p-4 font-bold text-emerald-800">None</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Best for</td>
                        <td className="p-4 bg-teal-50/60 font-semibold text-teal-950">Budget-conscious, flexible-schedule shippers near a metro terminal</td>
                        <td className="p-4">Most residential and business shippers</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 text-xs md:text-sm font-bold text-slate-900">
                  Want maximum convenience instead? See <Link href="/services/door-to-door-transport" className="text-blue-600 hover:underline">Door-to-Door Transport</Link>.
                </div>
              </div>

              {/* Comparison Image Matrix */}
              <div className="lg:col-span-5">
                <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-md transition-all duration-300 hover:shadow-xl hover:border-teal-300">
                  <img 
                    src="/terminal-to-terminal-vs-door-to-door-cost-comparison.jpg" 
                    alt="Cost comparison of terminal-to-terminal and door-to-door car shipping" 
                    title="Cost comparison of terminal-to-terminal and door-to-door car shipping"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <p className="p-3 bg-slate-100 text-slate-800 rounded-xl mt-3 text-xs font-semibold">
                    Cost comparison of terminal-to-terminal and door-to-door car shipping.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* H2: Who Uses Terminal-to-Terminal Shipping */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Who Uses Terminal-to-Terminal Shipping
              </h2>
              <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
                Budget-focused shippers with flexible drop-off and pickup schedules.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-teal-300 transition-all shadow-sm">
                    <h3 className="font-bold text-slate-900 text-base mb-1">College Students</h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      Flexible move-in/move-out timelines with budget as the top priority.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-teal-300 transition-all shadow-sm">
                    <h3 className="font-bold text-slate-900 text-base mb-1">Military & PCS Families</h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      Structured timing that often aligns well with terminal scheduling.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-teal-300 transition-all shadow-sm">
                    <h3 className="font-bold text-slate-900 text-base mb-1">Cross-Country Movers</h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      Long-distance routes where the absolute dollar savings are largest.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-teal-300 transition-all shadow-sm">
                    <h3 className="font-bold text-slate-900 text-base mb-1">Metro Residents</h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      Shippers located near major metro terminals with short driving access.
                    </p>
                  </div>
                </div>
              </div>

              {/* Audience Image Matrix */}
              <div className="lg:col-span-5">
                <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-md transition-all duration-300 hover:shadow-xl hover:border-teal-300">
                  <img 
                    src="/terminal-to-terminal-shipping-college-student-move.jpg" 
                    alt="College student using terminal-to-terminal shipping for a budget-friendly vehicle move" 
                    title="College student using terminal-to-terminal shipping for a budget-friendly vehicle move"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <p className="p-3 bg-slate-100 text-slate-800 rounded-xl mt-3 text-xs font-semibold">
                    College student using terminal-to-terminal shipping for a budget-friendly vehicle move.
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
              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-teal-500/60 shadow-sm hover:shadow-xl hover:shadow-teal-500/10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 group">
                <div>
                  <ShieldCheck className="w-8 h-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 group-hover:text-teal-300 transition-colors">Fully Licensed & Bonded</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed mb-3">
                    We are a licensed auto transport broker. Verify credentials with FMCSA databases.
                  </p>
                </div>
                <Link href="/licensing-insurance" className="text-xs font-bold text-blue-400 hover:underline">
                  Verify Credentials →
                </Link>
              </div>

              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-teal-500/60 shadow-sm hover:shadow-xl hover:shadow-teal-500/10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 group">
                <div>
                  <DollarSign className="w-8 h-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 group-hover:text-amber-300 transition-colors">Zero Upfront Deposit</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
                    You don&apos;t pay a single dime until a carrier is dispatched for your vehicle.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-teal-500/60 shadow-sm hover:shadow-xl hover:shadow-teal-500/10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 group">
                <div>
                  <AlertCircle className="w-8 h-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 group-hover:text-teal-300 transition-colors">Transparent Storage Rules</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
                    Clear storage fee disclosures so there are zero surprises at terminal pickup.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-teal-500/60 shadow-sm hover:shadow-xl hover:shadow-teal-500/10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 group">
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

              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-teal-500/60 shadow-sm hover:shadow-xl hover:shadow-teal-500/10 flex flex-col justify-between md:col-span-2 lg:col-span-1 transition-all duration-300 transform hover:-translate-y-1.5 group">
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

        {/* H2: Terminal-to-Terminal Shipping FAQs */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-200">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Terminal-to-Terminal Shipping FAQs
              </h2>
              <p className="text-slate-600 font-medium text-base">
                Direct, extractable answers optimized for Featured Snippets and AI Overview citation.
              </p>
            </div>

            <div className="space-y-6">
              
              {/* FAQ 1 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-teal-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  What is terminal-to-terminal car shipping?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Terminal-to-terminal car shipping is a vehicle transport method where you drop off and pick up your car at designated terminals rather than at your home address, typically resulting in a lower cost than door-to-door shipping.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-teal-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  How much can I save with terminal-to-terminal shipping?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Terminal-to-terminal shipping typically saves $100–$300, or roughly 10–20%, compared to door-to-door shipping on the same route. Savings can be higher on long-distance routes near major metro terminals.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-teal-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Are there storage fees for terminal shipping?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Yes, most terminals charge a daily storage fee if your vehicle isn&apos;t picked up within the provided window after arrival. Confirm your terminal&apos;s specific policy before booking to avoid unexpected costs.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-teal-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  How does terminal-to-terminal shipping work?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  You drop your vehicle off at a terminal near your pickup location, the carrier transports it to a terminal near your destination, and you pick it up there — with a joint inspection completed at both drop-off and pickup.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-teal-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Is terminal-to-terminal shipping safe?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Yes. Terminals are secure facilities, and your vehicle is inspected and documented at both drop-off and pickup, just as with door-to-door shipping. The transport process and carrier vetting are identical to door-to-door service.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-teal-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Who should use terminal-to-terminal shipping?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  It&apos;s best for budget-conscious shippers with flexible schedules who live near a major metro terminal — commonly college students, military families on PCS moves, and long-distance movers prioritizing cost.
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

        {/* PART 3 — GET YOUR TERMINAL-TO-TERMINAL SHIPPING QUOTE (CLOSING CTA BANNER) */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-gradient-to-r from-slate-950 via-teal-950 to-slate-900 text-white text-center relative overflow-hidden">
          <div className="max-w-[1000px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/20 text-teal-300 rounded-full text-xs md:text-sm font-bold mb-6 border border-teal-500/30">
              <Building2 className="w-4 h-4 text-teal-400" />
              Budget-Smart Auto Transport
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
              Get Your Terminal-to-Terminal Shipping Quote
            </h2>
            
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8 font-medium">
              Get an instant, no-obligation terminal-to-terminal shipping quote in under 30 seconds. Zero upfront deposit.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="#terminal-quote-widget" className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] hover:from-[#E05E00] text-white px-8 py-4 rounded-xl font-extrabold text-base transition-all shadow-[0_4px_14px_0_rgba(255,107,0,0.39)] hover:scale-105">
                Get Instant Quote →
              </Link>
              <a href="tel:5307255383" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-6 py-4 rounded-xl font-extrabold text-base transition-all flex items-center gap-2">
                <Phone className="w-5 h-5 text-teal-400" /> (530) 725-5383
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
