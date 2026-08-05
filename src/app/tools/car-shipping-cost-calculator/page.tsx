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
      "name": "How much does it cost to ship a car 2,000 miles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 2,000-mile move — a typical West Coast-to-Midwest or West Coast-to-Northeast distance — generally runs $1,000 to $1,600 on open transport for a standard sedan or midsize SUV, with enclosed transport typically adding 40–60% on top of that."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to ship a car 200 miles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Short hauls under 200–300 miles typically cost $300 to $600, but carry the highest per-mile rate of any distance tier because loading, dispatch, and minimum-trip costs don't shrink with distance."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to ship a car 1,000 miles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 1,000-mile shipment typically takes 3 to 5 days in transit, plus a pickup window of 1–3 days between booking and an available carrier arriving — so total door-to-door time usually lands between 4 and 8 days."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost per mile to drive a car (IRS rate)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 2022 IRS business mileage rate was 58.5 cents per mile for the first half of the year, raised mid-year to 62.5 cents per mile from July through December 2022 due to fuel price spikes. Multiply the IRS rate by your route's mileage to estimate your true per-mile cost of driving (fuel, wear, depreciation) versus shipping."
      }
    },
    {
      "@type": "Question",
      "name": "What is the current freight rate per mile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "General dry van freight has been running roughly $2.00 to $2.80 per mile on the spot market through 2026. However, car haulers price per vehicle unit (carrying 7–10 cars per truck) based on route demand, vehicle size, and transport method rather than a flat per-mile freight rate."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cheapest way to ship a car within the USA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open, terminal-to-terminal transport booked outside peak season with a flexible pickup window is consistently the lowest-cost combination."
      }
    },
    {
      "@type": "Question",
      "name": "Is it cheaper to ship a car by ground or air?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ground transport by truck is dramatically cheaper and the default choice for shipping a car within the continental United States. Air freight costs several times more per mile and is used almost exclusively for overseas relocations or high-value show cars."
      }
    },
    {
      "@type": "Question",
      "name": "How do you calculate car shipping cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Car shipping cost comes down to five factors multiplied together, not a flat per-mile rate: distance, vehicle size/weight, transport type (open vs. enclosed), route popularity, and timing."
      }
    },
    {
      "@type": "Question",
      "name": "How can I save money on car shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The four highest-impact levers are: book outside peak season, choose open over enclosed, choose terminal-to-terminal over door-to-door, and stay flexible on pickup date."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to ship a car from California to New York?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A California-to-New York move — roughly 2,800 miles — typically runs $1,100 to $1,600 on open transport for a standard sedan or midsize SUV, with enclosed transport adding roughly 40–60% on top."
      }
    },
    {
      "@type": "Question",
      "name": "How much is it to ship a car from California to Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "California to Florida — about 2,500 to 2,800 miles depending on specific cities — typically costs $1,000 to $1,500 on open transport for a standard vehicle."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to ship a car from Florida to New York?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Florida to New York — roughly 1,100 to 1,300 miles — typically runs $700 to $1,050 on open transport for a standard vehicle."
      }
    },
    {
      "@type": "Question",
      "name": "Is shipping a car a good idea?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For most people relocating more than a few hundred miles, yes — shipping is generally the more practical option once total cost, time, and vehicle wear are weighed against driving it yourself."
      }
    },
    {
      "@type": "Question",
      "name": "Do cars get damaged in shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Damage is uncommon but not zero — the large majority of vehicles arrive with no new damage, and when something does happen it's typically minor. Enclosed transport lowers this risk further for classic or high-value cars."
      }
    },
    {
      "@type": "Question",
      "name": "Do you need insurance when shipping a car?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You don't need to buy separate insurance — licensed carriers are required to carry cargo insurance covering your vehicle while it's on the truck. Confirm coverage limits match your vehicle value."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do before I ship a car?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Four things matter most: clean the car, document its condition with dated photos/video, remove personal items, and leave the gas tank about a quarter full."
      }
    },
    {
      "@type": "Question",
      "name": "What do I need to know before shipping a car?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Three expectations to set going in: pricing varies by route, season, and transport type; reputable carriers won't demand a large upfront deposit; and the Bill of Lading is the document that protects you."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cheapest company to ship your car?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There's no single 'cheapest' company across every route and season, because auto transport pricing is dynamic. Compare real, verified quotes for your exact ZIP codes and look for zero-upfront-deposit policies and verified USDOT/MC licensing."
      }
    },
    {
      "@type": "Question",
      "name": "How can I avoid the car delivery fee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "New car manufacturer destination fees cannot be avoided. For auto transport shipping, choosing terminal-to-terminal over door-to-door service avoids residential delivery routing charges."
      }
    },
    {
      "@type": "Question",
      "name": "Does the Navy ship your car for free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Active-duty service members with PCS orders to an overseas (OCONUS) station are authorized to ship one POV at government expense. CONUS-to-CONUS moves are generally self-funded with limited exceptions."
      }
    },
    {
      "@type": "Question",
      "name": "Is it worth it to ship an old car?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually yes, as long as shipping cost stays reasonable relative to the car's value and relocation needs. Compare shipping costs against local trade-in value for low-value vehicles."
      }
    },
    {
      "@type": "Question",
      "name": "Do USPS ship cars?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — the U.S. Postal Service does not ship vehicles. Shipping requires a licensed auto transport carrier using specialized car haulers. Claims of USPS car shipping are a common scam sign."
      }
    },
    {
      "@type": "Question",
      "name": "What is the safest way to ship a car?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enclosed transport with a verified, licensed, and insured carrier is the safest method, protecting against road debris and weather."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to ship a car from Florida to Chicago?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Florida to Chicago — roughly 1,100 to 1,200 miles — typically costs $650 to $950 on open transport for a standard sedan or midsize SUV."
      }
    },
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
      "name": "What&apos;s the cheapest way to ship a car?",
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
      "name": "Is my quote the final price I&apos;ll pay?",
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
                    <div className="text-xs text-slate-400 font-medium mt-0.5">FMCSA Licensed Broker</div>
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

        {/* H2: How This Calculator Works */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-100">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                How This Calculator Works
              </h2>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium mb-6">
                Unlike most car shipping calculators, which require your name, email, and phone number before showing a single number, this calculator shows you a real price range immediately, based on your actual route, vehicle, and transport type — <strong>no contact information required</strong>. You only share your details afterward, if you want a locked, bookable quote from a real carrier.
              </p>

              {/* Direct-Answer Callout Box (Targets "do I need to give my email for a car shipping quote") */}
              <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded-r-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-l-cyan-700">
                <div className="text-xs font-bold text-cyan-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-cyan-600" /> Direct Answer — No Email Required
                </div>
                <p className="text-slate-800 text-sm md:text-base font-semibold leading-relaxed">
                  <strong>No — you don&apos;t need to provide an email or phone number to see your car shipping cost estimate.</strong> This calculator shows a real price range instantly based on your route and vehicle details. Contact information is only needed if you choose to book a locked quote with an actual carrier.
                </p>
              </div>

            </div>

            {/* PART 5 — Trust Image Matrix */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden group w-full transition-all duration-300 hover:shadow-2xl hover:border-cyan-300">
                <img 
                  src="/america-car-transport-instant-quote-no-email-required.jpg" 
                  alt="Instant car shipping quote calculator with no email required" 
                  title="Instant car shipping quote calculator with no email required"
                  className="w-full h-[340px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <p className="p-3 bg-slate-900 text-white rounded-xl mt-3 text-xs font-medium leading-relaxed">
                  Instant car shipping cost estimates without forced contact details or lead-gen gates.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* H2: How Car Shipping Cost Is Actually Calculated (Worked Example) */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                How Car Shipping Cost Is Actually Calculated
              </h2>
              <p className="text-slate-600 font-medium text-lg max-w-3xl mx-auto">
                Most calculators list pricing &quot;factors&quot; without showing how much each one actually moves your price. Here is a transparent, worked example:
              </p>
            </div>

            {/* Worked Example Table & Image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
              <div className="lg:col-span-7">
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm mb-6">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                    Worked Example Route
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4">
                    Chicago, IL → Houston, TX (1,085 miles) · 2023 Honda CR-V · Open Transport
                  </h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse border border-slate-200 rounded-xl overflow-hidden text-sm font-medium">
                      <thead>
                        <tr className="bg-slate-900 text-white">
                          <th className="p-3 font-bold">Cost Factor</th>
                          <th className="p-3 font-bold bg-cyan-600">Baseline Impact</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700">
                        <tr className="hover:bg-slate-50">
                          <td className="p-3 font-bold text-slate-900">Base distance rate (medium-haul)</td>
                          <td className="p-3 font-semibold text-slate-900">~$0.75–$0.95/mile → ~$850 baseline</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-3 font-bold text-slate-900">Vehicle size (SUV vs. sedan)</td>
                          <td className="p-3 font-semibold text-emerald-700">+$100–$200</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-3 font-bold text-slate-900">Season (if booked in peak summer)</td>
                          <td className="p-3 font-semibold text-amber-700">+5–15%</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-3 font-bold text-slate-900">Pickup flexibility (fixed vs. flexible)</td>
                          <td className="p-3 font-semibold text-amber-700">+10–20% if fixed date requested</td>
                        </tr>
                        <tr className="bg-cyan-50 font-bold text-slate-900">
                          <td className="p-3 text-cyan-950">Typical Final Range</td>
                          <td className="p-3 text-cyan-900 text-base">$790 (avg.) — see live calculator above</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 text-xs font-bold text-slate-600">
                    Maps directly to our <span className="text-blue-600">Chicago, IL → Houston, TX From $790</span> popular route.
                  </div>
                </div>

                {/* 6 Factors List */}
                <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-4">The 6 Factors That Actually Move Your Price</h3>
                  <ul className="space-y-3 text-sm font-semibold text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                      <span><strong>Distance</strong> — the single biggest factor; cost per mile drops as total distance increases</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                      <span><strong>Vehicle size & weight</strong> — SUVs and trucks typically cost $100–$400 more than a sedan</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                      <span><strong>Transport type</strong> — enclosed transport runs 30–60% more than open transport</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                      <span><strong>Season & demand</strong> — summer and &quot;snowbird season&quot; (fall/winter migration to FL/AZ) raise prices; off-peak months are cheaper</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                      <span><strong>Vehicle condition</strong> — non-running vehicles typically add $150–$300 for special loading equipment</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                      <span><strong>Pickup flexibility</strong> — a flexible 3–5 day pickup window can save 10–20% versus requesting an exact date</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Worked Example Image Matrix */}
              <div className="lg:col-span-5">
                <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-md transition-all duration-300 hover:shadow-xl hover:border-cyan-300">
                  <img 
                    src="/car-shipping-cost-calculation-worked-example-chart.jpg" 
                    alt="Worked example showing how car shipping cost is calculated from distance, vehicle size, and season" 
                    title="Worked example showing how car shipping cost is calculated from distance, vehicle size, and season"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <p className="p-3 bg-slate-100 text-slate-800 rounded-xl mt-3 text-xs font-semibold">
                    Worked example showing how car shipping cost is calculated from distance, vehicle size, and season.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* H2: Average Car Shipping Cost by Distance (2026) */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Average Car Shipping Cost by Distance (2026)
              </h2>
              <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
                Standard baseline pricing tiers for operable sedans on open transport nationwide.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
              <div className="lg:col-span-7">
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white text-sm">
                        <th className="p-4 font-bold">Distance Tier</th>
                        <th className="p-4 font-bold bg-cyan-600">Typical Cost Range</th>
                        <th className="p-4 font-bold">Approx. Cost Per Mile</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-sm font-medium text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Under 500 miles</td>
                        <td className="p-4 bg-cyan-50/50 font-extrabold text-slate-900">$400 – $900</td>
                        <td className="p-4 font-semibold text-slate-600">$1.20 – $2.20</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">500 – 1,500 miles</td>
                        <td className="p-4 bg-cyan-50/50 font-extrabold text-slate-900">$700 – $1,300</td>
                        <td className="p-4 font-semibold text-slate-600">$0.70 – $1.00</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">1,500+ miles (cross-country)</td>
                        <td className="p-4 bg-cyan-50/50 font-extrabold text-slate-900">$1,000 – $1,800</td>
                        <td className="p-4 font-semibold text-slate-600">$0.40 – $0.70</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs font-semibold text-slate-600 leading-relaxed">
                  <strong>Data Note:</strong> Figures reflect a standard operable sedan on open transport. Enclosed transport, non-running vehicles, and larger vehicles adjust these ranges — see the calculator above for your exact combination. <strong>Source: America Car Transport route data, cross-referenced against nationwide 2026 industry pricing. Updated July 2026 — free to cite with attribution.</strong>
                </div>
              </div>

              {/* Distance Image Matrix */}
              <div className="lg:col-span-5">
                <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-md transition-all duration-300 hover:shadow-xl hover:border-cyan-300">
                  <img 
                    src="/car-shipping-cost-by-distance-2026-chart.jpg" 
                    alt="Chart showing average car shipping cost by distance in 2026" 
                    title="Chart showing average car shipping cost by distance in 2026"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <p className="p-3 bg-slate-100 text-slate-800 rounded-xl mt-3 text-xs font-semibold">
                    Chart showing average car shipping cost by distance in 2026.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* H2: Car Shipping Cost by Vehicle Type */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Car Shipping Cost by Vehicle Type
              </h2>
              <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
                How vehicle size, weight, and powertrain impact carrier loading and pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
              <div className="lg:col-span-7">
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white text-sm">
                        <th className="p-4 font-bold">Vehicle Category</th>
                        <th className="p-4 font-bold bg-cyan-600">Typical Cost Adjustment vs. Sedan</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-sm font-medium text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Sedan</td>
                        <td className="p-4 bg-cyan-50/50 font-bold text-slate-900">Baseline</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">SUV</td>
                        <td className="p-4 bg-cyan-50/50 font-bold text-emerald-700">+$100 – $200</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Truck</td>
                        <td className="p-4 bg-cyan-50/50 font-bold text-amber-700">+$150 – $400</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Motorcycle</td>
                        <td className="p-4 bg-cyan-50/50 font-bold text-emerald-700">Typically less than a sedan</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Non-running vehicle</td>
                        <td className="p-4 bg-cyan-50/50 font-bold text-amber-800">+$150 – $300 (any vehicle type)</td>
                      </tr>
                      <tr className="bg-cyan-50/80 hover:bg-cyan-50 transition-colors">
                        <td className="p-4 font-extrabold text-cyan-950">Electric Vehicle (EV)</td>
                        <td className="p-4 font-extrabold text-cyan-900">+$150 – $300 (added weight from battery pack)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Direct-Answer Callout (Targets "electric vehicle shipping cost" — a gap almost no competitor covers) */}
                <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded-r-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-l-cyan-700">
                  <div className="text-xs font-bold text-cyan-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-cyan-600" /> Electric Vehicle (EV) Shipping Cost Breakdown
                  </div>
                  <p className="text-slate-800 text-sm md:text-base font-semibold leading-relaxed">
                    <strong>Electric vehicles typically cost $150–$300 more to ship</strong> than an equivalent gas vehicle, due to added weight from the battery pack, which affects trailer capacity and axle weight limits. The transport process itself is the same as shipping any other vehicle — no special handling is required for shipping, only for weight-based pricing.
                  </p>
                </div>
              </div>

              {/* Vehicle Type Image Matrix */}
              <div className="lg:col-span-5">
                <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-md transition-all duration-300 hover:shadow-xl hover:border-cyan-300">
                  <img 
                    src="/car-shipping-cost-by-vehicle-type-comparison.jpg" 
                    alt="Comparison chart of car shipping cost by vehicle type including sedan, SUV, truck, and EV" 
                    title="Comparison chart of car shipping cost by vehicle type including sedan, SUV, truck, and EV"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <p className="p-3 bg-slate-100 text-slate-800 rounded-xl mt-3 text-xs font-semibold">
                    Comparison chart of car shipping cost by vehicle type including sedan, SUV, truck, and EV.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* H2: Open vs. Enclosed Cost Comparison */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Open vs. Enclosed Cost Comparison
              </h2>
              <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
                Comparing open multi-car carriers with fully enclosed weather-protected transport.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
              <div className="lg:col-span-7">
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white text-sm">
                        <th className="p-4 font-bold">Transport Type</th>
                        <th className="p-4 font-bold bg-cyan-600">Typical Cost Range</th>
                        <th className="p-4 font-bold">Best For</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-sm font-medium text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Open Transport</td>
                        <td className="p-4 bg-cyan-50/50 font-bold text-emerald-700">$400 – $1,800</td>
                        <td className="p-4">Standard vehicles, lowest cost</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Enclosed Transport</td>
                        <td className="p-4 bg-cyan-50/50 font-bold text-purple-900">$600 – $3,100</td>
                        <td className="p-4">Classic, exotic, luxury, high-value vehicles</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="text-xs md:text-sm font-bold text-slate-900">
                  Learn more about <Link href="/services/open-auto-transport" className="text-blue-600 hover:underline">Open Auto Transport</Link> or <Link href="/services/enclosed-auto-transport" className="text-blue-600 hover:underline">Enclosed Auto Transport</Link>.
                </div>
              </div>

              {/* Open vs Enclosed Image Matrix */}
              <div className="lg:col-span-5">
                <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-md transition-all duration-300 hover:shadow-xl hover:border-cyan-300">
                  <img 
                    src="/open-vs-enclosed-car-shipping-cost-comparison-2026.jpg" 
                    alt="Cost comparison chart of open versus enclosed car shipping in 2026" 
                    title="Cost comparison chart of open versus enclosed car shipping in 2026"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <p className="p-3 bg-slate-100 text-slate-800 rounded-xl mt-3 text-xs font-semibold">
                    Cost comparison chart of open versus enclosed car shipping in 2026.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* H2: Is This Estimate Binding? */}
        <section className="py-16 px-4 md:px-8 lg:px-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1000px] mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Is This Estimate Binding?
            </h2>

            {/* Direct-Answer Callout (Targets "is a car shipping cost calculator accurate") */}
            <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded-r-2xl shadow-sm text-left transition-all duration-300 hover:shadow-md hover:border-l-cyan-700">
              <div className="text-xs font-bold text-cyan-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-600" /> Estimate vs. Locked Rate Accuracy
              </div>
              <p className="text-slate-800 text-sm md:text-base font-semibold leading-relaxed">
                <strong>This calculator provides a real, data-driven planning range — not a final, binding price.</strong> Your exact quote depends on live carrier availability on your specific route at the time of booking. Once you request a formal quote, America Car Transport locks in a firm price with <strong>zero upfront deposit required</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* H2: Frequently Asked Questions */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-200">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 font-medium text-base">
                Direct, extractable answers optimized for Featured Snippets and AI Overview citation.
              </p>
            </div>

            <div className="space-y-6">
              
              
              {/* FAQ: New 1 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">Is shipping my car cheaper than driving it myself?</h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">Often, yes — once you factor in gas, meals, lodging, mileage wear, and your own time, shipping is frequently more cost-effective for trips over 750–1,000 miles, especially for a second or non-daily vehicle.</p>
              </div>

              {/* FAQ: New 2 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">What&apos;s the cheapest way to ship a car?</h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">Open transport on a standard (non-expedited) timeline, booked during off-peak season, along a high-traffic corridor (like major interstate routes), is typically the lowest-cost option.</p>
              </div>

              {/* FAQ: New 3 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">Can I get an instant quote without a phone call?</h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">Yes — our calculator above gives you a real-time estimate based on your route, vehicle, and transport type with zero obligation and no call required.</p>
              </div>

              {/* FAQ: New 4 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">How is my shipping quote calculated?</h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">Your quote is based on five main factors: distance, vehicle type/size, condition (running or non-running), transport type (open or enclosed), and current seasonal demand along your route.</p>
              </div>

              {/* FAQ: New 5 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">Does the price change by season?</h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">Yes. Snowbird season (fall and spring) and peak summer relocation months typically see 10–20% higher demand-driven pricing. Booking in off-peak months can lower your rate.</p>
              </div>

              {/* FAQ: New 6 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">Can I get a quote by ZIP code instead of city?</h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">Yes — the calculator accepts ZIP codes for both pickup and delivery locations for a more precise, address-level estimate.</p>
              </div>

              {/* FAQ: New 7 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">Is my quote the final price I&apos;ll pay?</h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">Our quotes are all-inclusive of standard cargo insurance and door-to-door service, with no hidden pickup or fuel surcharge fees added later.</p>
              </div>

              {/* FAQ 1 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  How much does it cost to ship a car 2,000 miles?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  A 2,000-mile move — a typical West Coast-to-Midwest or West Coast-to-Northeast distance — generally runs $1,000 to $1,600 on open transport for a standard sedan or midsize SUV, with enclosed transport typically adding 40–60% on top of that. Long-haul routes like this actually carry a lower per-mile rate than short hauls, since fixed costs spread across more miles. For a number tied to your real ZIP codes, use our Cost Calculator for an instant estimate with no email required.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  How much does it cost to ship a car 200 miles?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Short hauls under 200–300 miles typically cost $300 to $600, but carry the highest per-mile rate of any distance tier because loading, dispatch, and minimum-trip costs don&apos;t shrink with distance. Routes between major metro pairs (e.g., Los Angeles to San Diego, Dallas to Houston) tend to price toward the lower end of this range due to consistent carrier traffic.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  How long does it take to ship a car 1,000 miles?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  A 1,000-mile shipment typically takes 3 to 5 days in transit, plus a pickup window of 1–3 days between booking and an available carrier arriving — so total door-to-door time usually lands between 4 and 8 days.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  How much does it cost per mile to drive a car (IRS rate)?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  The 2022 IRS business mileage rate was 58.5 cents per mile for the first half of the year, raised mid-year to 62.5 cents per mile from July through December 2022 due to fuel price spikes. Multiply the IRS rate by your route&apos;s mileage to estimate your true per-mile cost of driving (fuel, wear, depreciation) versus shipping.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  What is the current freight rate per mile?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  General dry van freight has been running roughly $2.00 to $2.80 per mile on the spot market through 2026. However, car haulers price per vehicle unit (carrying 7–10 cars per truck) based on route demand, vehicle size, and transport method rather than a flat per-mile freight rate.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  What is the cheapest way to ship a car within the USA?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Open, terminal-to-terminal transport booked outside peak season with a flexible pickup window is consistently the lowest-cost combination for owners who don&apos;t need door-to-door convenience or enclosed protection.
                </p>
              </div>

              {/* FAQ 7 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Is it cheaper to ship a car by ground or air?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Ground transport by truck is dramatically cheaper and the default choice for shipping a car within the continental United States. Air freight costs several times more per mile and is used almost exclusively for overseas relocations or high-value show cars.
                </p>
              </div>

              {/* FAQ 8 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  How do you calculate car shipping cost?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Car shipping cost comes down to five factors multiplied together, not a flat per-mile rate: distance, vehicle size/weight, transport type (open vs. enclosed), route popularity, and timing. Distance sets the baseline, but it isn&apos;t linear — short hauls under 300 miles carry a higher per-mile rate than long-haul routes. Larger vehicles cost more due to space and weight on the trailer, enclosed shipping adds 40–60%, and peak seasonal demand (summer and fall snowbird season) raises rates.
                </p>
              </div>

              {/* FAQ 9 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  How can I save money on car shipping?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  The four highest-impact levers are: book outside peak season (late winter/early spring offers lowest rates), choose open over enclosed, choose terminal-to-terminal over door-to-door, and stay flexible on pickup date (a 1–3 day window costs less than an exact-day demand).
                </p>
              </div>

              {/* FAQ 10 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  How much does it cost to ship a car from California to New York?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  A California-to-New York move — roughly 2,800 miles, one of the longest common domestic routes — typically runs $1,100 to $1,600 on open transport for a standard sedan or midsize SUV, with enclosed transport adding roughly 40–60% on top. Explore our <Link href="/locations/california" className="text-blue-600 font-bold underline">California Car Shipping Guide</Link> for state-specific details.
                </p>
              </div>

              {/* FAQ 11 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  How much is it to ship a car from California to Florida?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  California to Florida — about 2,500 to 2,800 miles — typically costs $1,000 to $1,500 on open transport for a standard vehicle. View complete pricing tables, transit times, and train shipping fact-checks on our dedicated <Link href="/routes/california-to-florida" className="text-blue-600 font-bold underline">California to Florida Route Page</Link>.
                </p>
              </div>

              {/* FAQ 12 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  How much does it cost to ship a car from Florida to New York?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Florida to New York — roughly 1,100 to 1,300 miles — typically runs $700 to $1,050 on open transport for a standard vehicle, sitting in the mid-distance range where per-mile cost is lower than a short in-state move but higher than a true cross-country haul.
                </p>
              </div>

              {/* FAQ 13 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Is shipping a car a good idea?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  For most people relocating more than a few hundred miles, yes — shipping is generally the more practical option once total cost, time, and vehicle wear are weighed against driving it yourself. The math tends to favor shipping past roughly 300 miles: driving racks up fuel, meals, hotel nights, and extra mileage-related wear on the vehicle, plus the value of the days spent behind the wheel instead of settling into a new home or job.
                </p>
              </div>

              {/* FAQ 14 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Do cars get damaged in shipping?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Damage is uncommon but not zero — the large majority of vehicles arrive with no new damage, and when something does happen it&apos;s typically minor (a small chip or scuff) rather than significant. Enclosed transport lowers this risk further for owners of classic, exotic, or high-value vehicles.
                </p>
              </div>

              {/* FAQ 15 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Do you need insurance when shipping a car?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  You don&apos;t need to buy separate insurance — licensed carriers are required to carry cargo insurance covering your vehicle while it&apos;s on the truck — but you do need to confirm the coverage is real and adequate before booking. Read our complete guide at <Link href="/resources/how-to-avoid-car-shipping-scams" className="text-blue-600 font-bold underline">How to Avoid Car Shipping Scams</Link>.
                </p>
              </div>

              {/* FAQ 16 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  What should I do before I ship a car?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Four things matter most: clean the car, document its condition with dated photos/video from all angles, remove personal belongings and valuables, disable any aftermarket alarm, and leave the gas tank around a quarter full.
                </p>
              </div>

              {/* FAQ 17 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  What do I need to know before shipping a car?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Three expectations to set going in: pricing varies by route, season, and transport type rather than being a fixed number; a reputable carrier won&apos;t demand a large upfront deposit; and the Bill of Lading is the document that actually protects you.
                </p>
              </div>

              {/* FAQ 18 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  What is the cheapest company to ship your car?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  There&apos;s no single &ldquo;cheapest&rdquo; company across every route and season, because auto transport pricing is dynamic — it moves with fuel prices, carrier availability, and how many trucks are already running your specific route that week. A zero-upfront-deposit policy and verified USDOT/MC licensing are better predictors of a fair, honest price than a marketing claim of &ldquo;cheapest.&rdquo;
                </p>
              </div>

              {/* FAQ 19 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  How can I avoid the car delivery fee?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  If this is about a new car&apos;s manufacturer destination/delivery fee, it cannot be avoided — it is a non-negotiable charge itemized by law on window stickers. For auto-transport delivery costs, choosing terminal-to-terminal over door-to-door service avoids the extra charge of routing a truck to a residential address.
                </p>
              </div>

              {/* FAQ 20 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Does the Navy ship your car for free?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Yes, but only for active-duty service members (Navy included) with PCS orders to an overseas (OCONUS) duty station, who are authorized to ship one privately owned vehicle at government expense. CONUS-to-CONUS moves are generally self-funded.
                </p>
              </div>

              {/* FAQ 21 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Is it worth it to ship an old car?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Usually yes, as long as the shipping cost stays reasonable relative to the car&apos;s value and the reason for the move is real. For a car worth only a few thousand dollars, compare the shipping quote against selling locally and buying a replacement at your destination.
                </p>
              </div>

              {/* FAQ 22 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Do USPS ship cars?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  No — the U.S. Postal Service doesn&apos;t ship vehicles; its network is built for mail and parcels. Shipping a vehicle requires a licensed auto transport carrier using specialized flatbed or multi-car trailers. Claims that USPS ships cars are a common scam sign.
                </p>
              </div>

              {/* FAQ 23 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  What is the safest way to ship a car?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Enclosed transport with a verified, licensed, and insured carrier (<Link href="/licensing-insurance" className="text-blue-600 font-bold underline"> | </Link>) is the safest combination available, protecting against road debris and weather.
                </p>
              </div>

              {/* FAQ 24 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  How much does it cost to ship a car from Florida to Chicago?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Florida to Chicago — roughly 1,100 to 1,200 miles — typically costs $650 to $950 on open transport for a standard sedan or midsize SUV.
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
