import React from "react";
import Link from "next/link";
import { ShieldCheck, Phone, CheckCircle2, Truck, Star, ArrowRight, Award, Lock, FileCheck, Layers, HelpCircle, ChevronRight, AlertCircle, MapPin, DollarSign, Clock, Car, Shield } from "lucide-react";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";

export const metadata = {
  title: "Enclosed Auto Transport | Premium Car Shipping Protection",
  description: "Ship your luxury, exotic, or classic car with fully enclosed auto transport. Weather-protected, insured, white-glove handling. Get an instant quote.",
  alternates: {
    canonical: "https://www.americacartransport.com/services/enclosed-auto-transport",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Enclosed Auto Transport",
  "name": "Enclosed Auto Transport",
  "description": "Fully covered, weather-protected vehicle shipping for classic, exotic, luxury, and high-value vehicles nationwide.",
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
    "lowPrice": "600",
    "highPrice": "3100",
    "offerCount": "1"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.americacartransport.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Enclosed Auto Transport", "item": "https://www.americacartransport.com/services/enclosed-auto-transport" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is enclosed auto transport safer than open transport?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both methods use licensed, insured carriers and are structurally safe. Enclosed transport fully shields your vehicle from weather and road debris, while open transport exposes it to the elements. Enclosed transport better protects condition and resale value for classic, exotic, or high-value vehicles."
      }
    },
    {
      "@type": "Question",
      "name": "How much does enclosed auto transport cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enclosed auto transport typically costs 30 to 60 percent more than open transport, averaging $1,000 to $2,500 for long-distance routes and $600 to $900 for shorter regional trips."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need enclosed transport for a classic car?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It's strongly recommended. Enclosed transport protects original paint, trim, and restoration work from road debris, weather, and UV exposure during transit."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between single-car and multi-car enclosed transport?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most enclosed carriers, including on cross-country routes, transport 2 to 6 vehicles per trailer rather than a single dedicated car. True single-car exclusivity is rare on long-haul routes."
      }
    },
    {
      "@type": "Question",
      "name": "Does enclosed transport include more insurance coverage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enclosed carriers generally carry higher cargo insurance limits to match the value of the vehicles they transport, often ranging from $100,000 to $1 million depending on the carrier."
      }
    },
    {
      "@type": "Question",
      "name": "Can enclosed transport handle low-clearance exotic cars?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Many enclosed carriers are equipped with hydraulic liftgates specifically for loading low-clearance vehicles without the scraping risk of standard ramp loading."
      }
    }
  ]
};

export default function EnclosedAutoTransportPage() {
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
            <Link href="#enclosed-quote-widget" className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] hover:from-[#E05E00] text-white px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-extrabold transition-all duration-200 shadow-[0_4px_14px_0_rgba(255,107,0,0.39)] rounded-xl shrink-0 whitespace-nowrap">
              Get Instant Quote
            </Link>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans">
        
        {/* PART 2 — Breadcrumb Navigation (Dark Luxury Theme) */}
        <div className="bg-slate-900 border-b border-slate-800 py-3 px-4 md:px-8 lg:px-24 text-xs font-semibold text-slate-400">
          <div className="max-w-[1400px] mx-auto flex items-center gap-2">
            <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
            <span className="text-slate-600">/</span>
            <Link href="/services" className="hover:text-purple-400 transition-colors">Services</Link>
            <span className="text-slate-600">/</span>
            <span className="text-white font-bold">Enclosed Auto Transport</span>
          </div>
        </div>

        {/* PART 3 — HERO SECTION WITH LUXURY DARK ROYAL GRADIENT */}
        <section id="enclosed-quote-widget" className="py-12 md:py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white border-b border-slate-800 px-4 md:px-8 lg:px-24 relative overflow-hidden">
          
          {/* Subtle Ambient Glow Effect */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* H1 & Subheading */}
            <div className="lg:col-span-6 xl:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-950/80 text-purple-200 rounded-full text-xs md:text-sm font-bold mb-6 border border-purple-500/40 shadow-lg shadow-purple-900/20">
                <Lock className="w-4 h-4 text-purple-400" />
                White-Glove Enclosed Carrier Network (100% Weather Shielded)
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-[3.6rem] font-black text-white leading-tight mb-6 tracking-tight">
                Enclosed Auto Transport: <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">Maximum Protection</span> for High-Value Vehicles
              </h1>

              <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed mb-8">
                Fully covered, weather-sealed shipping built for classic, exotic, luxury, and collector cars — from pickup to final delivery.
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
                  <div className="px-2.5 py-1 bg-purple-600 text-white font-extrabold text-xs rounded border border-purple-500">
                    BBB A+
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm leading-none">Accredited Business</div>
                    <div className="text-xs text-slate-400 font-medium mt-0.5">FMCSA Licensed Broker</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a href="tel:5307255383" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3.5 rounded-xl font-extrabold text-sm shadow-lg shadow-purple-600/30 transition-all flex items-center gap-2">
                  <Phone className="w-4 h-4 text-purple-200" /> Call Enclosed Specialists: (530) 725-5383
                </a>
              </div>
            </div>

            {/* Embedded Quote Calculator Widget Preset */}
            <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
              <QuoteCalculator />
            </div>

          </div>
        </section>

        {/* H2: What Is Enclosed Auto Transport? */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-100">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                What Is Enclosed Auto Transport?
              </h2>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium mb-6">
                Enclosed auto transport ships your vehicle inside a fully covered trailer, completely shielded from rain, snow, road debris, dust, and UV exposure throughout the trip. Unlike open carriers, which move 6–10 vehicles at a time on an uncovered trailer, enclosed carriers typically transport just 2–6 vehicles, using soft-tie strap securement (fastened to the tires, not the frame) and, on many trailers, hydraulic liftgates for safely loading low-clearance vehicles without scraping. For high-value collectors and supercars, see our specialized <Link href="/services/classic-and-exotic-car-transport" className="text-purple-700 font-bold underline hover:text-purple-800">Classic &amp; Exotic Car Transport Service</Link>.
              </p>

              {/* Ideal Fit Checklist */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 mb-8 transition-all duration-300 hover:shadow-md hover:border-purple-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-base mb-4">This is the right choice for you if:</h3>
                <ul className="space-y-3 text-sm font-semibold text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                    <span>You&apos;re shipping a classic, antique, or restored vehicle</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                    <span>You own an exotic, supercar, or low-clearance sports car</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                    <span>Your vehicle is a luxury model, show car, or has custom modifications</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                    <span>You&apos;re transporting a vehicle to or from an auction, exhibition, or dealership where condition on arrival matters</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                    <span>Peace of mind and weather protection matter more to you than the lowest possible price</span>
                  </li>
                </ul>
              </div>

              {/* Direct-Answer Callout Box (Targets "what is enclosed auto transport" for AI Overviews) */}
              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-l-purple-700">
                <div className="text-xs font-bold text-purple-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4" /> Direct Answer
                </div>
                <p className="text-slate-800 text-sm md:text-base font-semibold leading-relaxed">
                  <strong>Enclosed auto transport</strong> is a vehicle shipping method where cars travel inside a fully covered trailer, protected from weather and road debris. It&apos;s the preferred method for classic, exotic, luxury, and other high-value vehicles that require extra protection during transit.
                </p>
              </div>

            </div>

            {/* PART 5 — Hero Image Matrix */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden group w-full transition-all duration-300 hover:shadow-2xl hover:border-purple-300">
                <img 
                  src="/enclosed-auto-transport-covered-trailer-luxury-car.jpg" 
                  alt="Enclosed auto transport trailer loading a luxury car for weather-protected shipping" 
                  title="Enclosed auto transport trailer loading a luxury car for weather-protected shipping"
                  className="w-full h-[340px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <p className="p-3 bg-slate-900 text-white rounded-xl mt-3 text-xs font-medium leading-relaxed">
                  Enclosed trailers provide 100% weather-sealed protection and soft-tie tire securement.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* H2: How Enclosed Auto Transport Works (5 Steps) */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                How Enclosed Auto Transport Works
              </h2>
              <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
                White-glove handling from initial instant quote to white-glove delivery inspection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-purple-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-purple-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-700 transition-colors">
                    1
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-purple-600 transition-colors">Step 1 — Get an Instant Quote</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    Enter your pickup and delivery details, vehicle information (including ground clearance, if applicable), and preferred dates. You&apos;ll receive a real, transparent enclosed transport quote — no upfront deposit required.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-purple-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-purple-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-700 transition-colors">
                    2
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-purple-600 transition-colors">Step 2 — We Match You With a Specialized Carrier</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    Enclosed transport requires specialized equipment and experienced handling. We dispatch your shipment to a vetted carrier equipped for high-value vehicle transport, including liftgate-equipped trailers for low-clearance cars.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-purple-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-purple-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-700 transition-colors">
                    3
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-purple-600 transition-colors">Step 3 — White-Glove Pickup & Inspection</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    Your driver performs a detailed joint inspection, documenting your vehicle&apos;s exact condition — critical for classic, exotic, and collector vehicles — before securing it inside the enclosed trailer with soft-tie strapping.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-purple-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-purple-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-700 transition-colors">
                    4
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-purple-600 transition-colors">Step 4 — Protected Nationwide Transit</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    Your vehicle travels fully shielded from weather, road spray, and debris for the entire route, whether regional or cross-country.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-purple-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-purple-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-700 transition-colors">
                    5
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-purple-600 transition-colors">Step 5 — Delivery & Final Inspection</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    The carrier delivers your vehicle, completes a final joint inspection with you, and you sign off on delivery in the same protected condition it left in.
                  </p>
                </div>
              </div>

            </div>

            {/* Process Step 3 Image Matrix */}
            <div className="mt-12 bg-white p-4 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center gap-6 transition-all duration-300 hover:shadow-md hover:border-purple-300">
              <img 
                src="/enclosed-auto-transport-liftgate-loading-exotic-car.jpg" 
                alt="Hydraulic liftgate loading a low-clearance exotic car onto an enclosed transport trailer" 
                title="Hydraulic liftgate loading a low-clearance exotic car onto an enclosed transport trailer"
                className="w-full sm:w-64 h-40 object-cover rounded-2xl shrink-0"
              />
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">Hydraulic Liftgate & Low-Clearance Ramp Loading</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Hydraulic liftgate loading keeps low-clearance supercars completely level during loading to eliminate any risk of bumper or undercarriage scraping.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* H2: Enclosed Auto Transport Cost */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Enclosed Auto Transport Cost
              </h2>
              <p className="text-slate-600 font-medium text-lg max-w-3xl mx-auto">
                Enclosed transport typically costs <strong>30–60% more than open transport</strong> for the same route. This premium reflects real cost drivers: enclosed trailers carry far fewer vehicles per trip (2–6 vs. 6–10), require specialized equipment like hydraulic liftgates, and carry higher cargo insurance limits ($100,000–$1,000,000) to match vehicle value.
              </p>
            </div>

            {/* H3: Typical Cost Table */}
            <div className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Typical Enclosed Auto Transport Cost by Distance</h3>
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
                      <tr className="hover:bg-purple-50/50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Under 500 miles</td>
                        <td className="p-4 font-semibold text-purple-700">$600 – $900</td>
                        <td className="p-4 font-mono">$1.60 – $2.50</td>
                      </tr>
                      <tr className="bg-slate-50/50 hover:bg-purple-50/50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">500 – 1,500 miles</td>
                        <td className="p-4 font-semibold text-purple-700">$1,000 – $1,800</td>
                        <td className="p-4 font-mono">$1.00 – $1.50</td>
                      </tr>
                      <tr className="hover:bg-purple-50/50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">1,500+ miles (cross-country)</td>
                        <td className="p-4 font-semibold text-purple-700">$1,800 – $3,100</td>
                        <td className="p-4 font-mono">$0.70 – $1.20</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-3 italic">
                  Prices reflect typical national ranges for standard enclosed transport and increase further for exotic, low-clearance, or non-running vehicles requiring specialized equipment. Get an exact quote using the calculator above.
                </p>
              </div>

              {/* Cost Chart Image Matrix */}
              <div className="lg:col-span-5">
                <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-md transition-all duration-300 hover:shadow-xl hover:border-purple-300">
                  <img 
                    src="/enclosed-auto-transport-cost-by-distance-chart-2026.jpg" 
                    alt="Chart showing average enclosed auto transport cost by shipping distance in 2026" 
                    title="Chart showing average enclosed auto transport cost by shipping distance in 2026"
                    className="w-full h-56 object-cover rounded-2xl"
                  />
                  <p className="p-3 bg-slate-100 text-slate-800 rounded-xl mt-3 text-xs font-semibold">
                    Chart showing average enclosed auto transport cost by shipping distance in 2026.
                  </p>
                </div>
              </div>
            </div>

            {/* H3: What Affects Your Price */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 mb-8 transition-all duration-300 hover:shadow-md hover:border-purple-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">What Affects Your Enclosed Auto Transport Price</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-semibold text-slate-700">
                <li className="flex items-start gap-2.5 p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 transition-all duration-200">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>Vehicle value & insurance requirements</strong> — higher-value vehicles require higher cargo coverage, which affects carrier pricing</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 transition-all duration-200">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>Ground clearance</strong> — low-clearance exotics requiring liftgate loading (rather than ramp loading) typically cost more</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 transition-all duration-200">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>Distance & route</strong> — same principle as open transport: shorter routes cost more per mile</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 transition-all duration-200">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>Single-car vs. shared enclosed trailer</strong> — true dedicated single-car cross-country enclosed transport is rare and priced accordingly; most enclosed shipments share a trailer with a small number of other high-value vehicles</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 transition-all duration-200 md:col-span-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>Season</strong> — summer show/auction season increases demand for enclosed carriers</span>
                </li>
              </ul>

              {/* Internal Link */}
              <div className="mt-6 pt-6 border-t border-slate-200/80 text-xs md:text-sm font-bold text-slate-900">
                See our full <Link href="/resources/car-shipping-cost-guide" className="text-blue-600 hover:underline">Car Shipping Cost Guide</Link> for a state-by-state and route-by-route breakdown.
              </div>
            </div>

          </div>
        </section>

        {/* H2: Enclosed vs. Open Auto Transport */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Enclosed vs. Open Auto Transport — Which Should You Choose?
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
                        <th className="p-4 font-bold bg-purple-700">Enclosed Transport</th>
                        <th className="p-4 font-bold">Open Transport</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-sm font-medium text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Cost</td>
                        <td className="p-4 bg-purple-50/50 font-bold text-purple-900">30–60% more than open</td>
                        <td className="p-4 font-semibold text-emerald-700">Lowest cost option</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Weather protection</td>
                        <td className="p-4 bg-purple-50/50 font-semibold text-purple-900">Fully covered — shielded from rain, snow, debris, UV</td>
                        <td className="p-4">Exposed to elements during transit</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Trailer capacity</td>
                        <td className="p-4 bg-purple-50/50 font-semibold text-purple-900">2–6 vehicles — more careful handling</td>
                        <td className="p-4">6–10 vehicles</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Best for</td>
                        <td className="p-4 bg-purple-50/50 font-semibold text-purple-900">Classic, exotic, luxury, collector, or modified vehicles</td>
                        <td className="p-4">Daily drivers, SUVs, trucks, standard vehicles</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Insurance</td>
                        <td className="p-4 bg-purple-50/50 font-semibold text-purple-900">Higher cargo coverage limits, matched to vehicle value</td>
                        <td className="p-4">Standard carrier cargo insurance</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Loading equipment</td>
                        <td className="p-4 bg-purple-50/50 font-semibold text-purple-900">Liftgate available for low-clearance vehicles</td>
                        <td className="p-4">Standard ramp loading</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Comparison Image Matrix */}
              <div className="lg:col-span-5">
                <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-md transition-all duration-300 hover:shadow-xl hover:border-purple-300">
                  <img 
                    src="/enclosed-vs-open-auto-transport-comparison.jpg" 
                    alt="Side-by-side comparison of enclosed trailer and open trailer auto transport" 
                    title="Side-by-side comparison of enclosed trailer and open trailer auto transport"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <p className="p-3 bg-slate-100 text-slate-800 rounded-xl mt-3 text-xs font-semibold">
                    Side-by-side comparison of enclosed trailer and open trailer auto transport.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct-Answer Callout (Targets "is enclosed transport worth it") */}
            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-2xl shadow-sm mb-6 transition-all duration-300 hover:shadow-md hover:border-l-purple-700">
              <div className="text-xs font-bold text-purple-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-purple-600" /> Is Enclosed Transport Worth It?
              </div>
              <p className="text-slate-800 text-sm md:text-base font-semibold leading-relaxed">
                <strong>Enclosed transport is worth the premium</strong> for classic, exotic, luxury, or high-value vehicles, where protecting the vehicle&apos;s condition and resale value outweighs the added cost. For a standard daily-driver vehicle, open transport offers the same core safety at a significantly lower price — enclosed transport is about protecting value and condition, not basic transit safety.
              </p>
            </div>

            {/* Internal Link */}
            <div className="text-xs md:text-sm font-bold text-slate-900">
              Shipping a standard daily driver? <Link href="/services/open-auto-transport" className="text-blue-600 hover:underline">Open Auto Transport</Link> offers the same reliable delivery at a lower cost.
            </div>

          </div>
        </section>

        {/* H2: Best For: Classic, Exotic & Luxury Vehicles */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Best For: Classic, Exotic & Luxury Vehicles
                </h2>
                <p className="text-slate-600 font-medium text-lg mb-6">
                  Enclosed transport provides specialized protection tailored to high-value vehicle categories:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-50 hover:bg-purple-50/90 border border-slate-200 hover:border-purple-400 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-lg font-bold text-slate-900 text-center block group">
                    <Car className="w-8 h-8 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span>Classic & Antique Cars</span>
                    <p className="text-xs font-normal text-slate-500 mt-1">Protects original paint, trim, and restoration work</p>
                  </div>

                  <div className="bg-slate-50 hover:bg-purple-50/90 border border-slate-200 hover:border-purple-400 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-lg font-bold text-slate-900 text-center block group">
                    <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span>Exotic & Supercars</span>
                    <p className="text-xs font-normal text-slate-500 mt-1">Liftgate loading avoids low-clearance scraping risk</p>
                  </div>

                  <div className="bg-slate-50 hover:bg-purple-50/90 border border-slate-200 hover:border-purple-400 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-lg font-bold text-slate-900 text-center block group">
                    <Award className="w-8 h-8 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span>Luxury Vehicles</span>
                    <p className="text-xs font-normal text-slate-500 mt-1">Keeps showroom condition intact on arrival</p>
                  </div>

                  <div className="bg-slate-50 hover:bg-purple-50/90 border border-slate-200 hover:border-purple-400 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-lg font-bold text-slate-900 text-center block group">
                    <Layers className="w-8 h-8 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span>Modified & Custom Cars</span>
                    <p className="text-xs font-normal text-slate-500 mt-1">Added protection for custom body kits & paint</p>
                  </div>

                  <div className="bg-slate-50 hover:bg-purple-50/90 border border-slate-200 hover:border-purple-400 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-lg font-bold text-slate-900 text-center block group sm:col-span-2 lg:col-span-2">
                    <Lock className="w-8 h-8 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span>Auction & Dealer Transport</span>
                    <p className="text-xs font-normal text-slate-500 mt-1">Pristine, unweathered arrival for auctions or dealer showrooms</p>
                  </div>
                </div>

                <p className="text-sm font-semibold text-slate-600">
                  Related vehicle pages: <Link href="/services/classic-and-exotic-car-transport" className="text-blue-600 hover:underline">Classic & Exotic Car Transport</Link> · <Link href="/ship-a-car/non-running-vehicle" className="text-blue-600 hover:underline">Non-Running Vehicle Shipping</Link>
                </p>
              </div>

              {/* Vehicle Types Image Matrix */}
              <div className="lg:col-span-5">
                <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-md transition-all duration-300 hover:shadow-xl hover:border-purple-300">
                  <img 
                    src="/enclosed-auto-transport-classic-exotic-luxury-cars.jpg" 
                    alt="Classic, exotic, and luxury cars loaded for enclosed auto transport shipping" 
                    title="Classic, exotic, and luxury cars loaded for enclosed auto transport shipping"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <p className="p-3 bg-slate-100 text-slate-800 rounded-xl mt-3 text-xs font-semibold">
                    Classic, exotic, and luxury cars loaded for enclosed auto transport shipping.
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
                America&apos;s most trusted bonded & insured enclosed car shipping network.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-purple-500/60 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 group">
                <div>
                  <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors">Fully Licensed & Bonded</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed mb-3">
                    We are a licensed auto transport broker. Verify credentials with FMCSA databases.
                  </p>
                </div>
                <Link href="/licensing-insurance" className="text-xs font-bold text-blue-400 hover:underline">
                  Verify Credentials →
                </Link>
              </div>

              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-purple-500/60 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 group">
                <div>
                  <DollarSign className="w-8 h-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 group-hover:text-amber-300 transition-colors">Zero Upfront Deposit</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
                    You don&apos;t pay a single dime until a carrier is dispatched for your vehicle.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-purple-500/60 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 group">
                <div>
                  <Truck className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors">Specialized Enclosed Network</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
                    Including liftgate-equipped trailers for low-clearance supercars.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-purple-500/60 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 group">
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

              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-purple-500/60 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 flex flex-col justify-between md:col-span-2 lg:col-span-1 transition-all duration-300 transform hover:-translate-y-1.5 group">
                <div>
                  <FileCheck className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors">Transparent Pricing</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
                    No inflated &quot;single-car exclusivity&quot; upsells you don&apos;t actually need.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* H2: Enclosed Auto Transport FAQs */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-200">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Enclosed Auto Transport FAQs
              </h2>
              <p className="text-slate-600 font-medium text-base">
                Direct, extractable answers optimized for Featured Snippets and AI Overview citation.
              </p>
            </div>

            <div className="space-y-6">
              
              {/* FAQ 1 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-purple-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Is enclosed auto transport safer than open transport?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Both methods use licensed, insured carriers and are structurally safe. Enclosed transport fully shields your vehicle from weather and road debris, while open transport exposes it to the elements. Enclosed transport better protects condition and resale value for classic, exotic, or high-value vehicles.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-purple-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  How much does enclosed auto transport cost?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Enclosed auto transport typically costs 30 to 60 percent more than open transport, averaging $1,000 to $2,500 for long-distance routes and $600 to $900 for shorter regional trips. Exotic or low-clearance vehicles requiring liftgate loading may cost more. Use our instant quote calculator above for an exact price on your route.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-purple-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Do I need enclosed transport for a classic car?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  It&apos;s strongly recommended. Enclosed transport protects original paint, trim, and restoration work from road debris, weather, and UV exposure — damage that can meaningfully affect a classic car&apos;s condition and value, unlike a daily-driver vehicle.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-purple-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  What&apos;s the difference between single-car and multi-car enclosed transport?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Most enclosed carriers, including on cross-country routes, transport 2 to 6 vehicles per trailer rather than a single dedicated car. True single-car exclusivity is rare on long-haul routes and is typically priced the same as standard enclosed transport, since your vehicle still travels within the same protected enclosed network.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-purple-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Does enclosed transport include more insurance coverage?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Enclosed carriers generally carry higher cargo insurance limits to match the value of the vehicles they transport, often ranging from $100,000 to $1 million depending on the carrier. Always confirm your specific carrier&apos;s coverage relative to your vehicle&apos;s value before booking.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-purple-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Can enclosed transport handle low-clearance exotic cars?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Yes. Many enclosed carriers are equipped with hydraulic liftgates specifically for loading low-clearance vehicles without the scraping risk of standard ramp loading used on open carriers.
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

        {/* PART 3 — GET YOUR ENCLOSED AUTO TRANSPORT QUOTE (CLOSING CTA BANNER) */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white text-center relative overflow-hidden">
          <div className="max-w-[1000px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/20 text-purple-300 rounded-full text-xs md:text-sm font-bold mb-6 border border-purple-500/30">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              White-Glove Vehicle Transport
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
              Get Your Enclosed Auto Transport Quote
            </h2>
            
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8 font-medium">
              Get an instant, no-obligation enclosed auto transport quote in under 30 seconds. Zero upfront deposit required.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="#enclosed-quote-widget" className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] hover:from-[#E05E00] text-white px-8 py-4 rounded-xl font-extrabold text-base transition-all shadow-[0_4px_14px_0_rgba(255,107,0,0.39)] hover:scale-105">
                Get Instant Quote →
              </Link>
              <a href="tel:5307255383" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-6 py-4 rounded-xl font-extrabold text-base transition-all flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-400" /> (530) 725-5383
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
