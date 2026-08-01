import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import AnimatedSection, { AnimatedCard } from "@/components/ui/AnimatedSection";
import { ShieldCheck, Award, Clock, DollarSign, ArrowRight, ArrowLeftRight, CheckCircle2, Phone, HelpCircle, MapPin, Truck, ChevronDown, Lock } from "lucide-react";

export const metadata = {
  title: "California to Texas Car Shipping | Cost & Transit | America Car Transport",
  description: "Ship a car from California to Texas — real 2026 pricing, transit times, and FAQs. Zero upfront deposit, fully licensed and bonded. Get an instant quote.",
  alternates: {
    canonical: "https://americacartransport.com/routes/california-to-texas",
  },
};

const FAQS = [
  {
    question: "How much does it cost to ship a car from California to Texas?",
    answer: "Shipping a car from California to Texas typically costs between $950 and $1,400 on open transport. Enclosed transport for luxury or classic vehicles runs 30–50% higher ($1,350 to $1,950). Rates vary depending on exact city pairs, vehicle size, and seasonal carrier demand."
  },
  {
    question: "How long does it take to ship a car from California to Texas?",
    answer: "Transit time from California to Texas is typically 3 to 5 days once dispatched. The I-10 and I-40 corridors are among the busiest carrier routes in the nation, ensuring fast pickup and reliable delivery schedules."
  },
  {
    question: "Is it cheaper to ship from California to Texas than other cross-country routes?",
    answer: "Yes. Per mile, the California to Texas corridor offers some of the most competitive auto transport rates in North America due to high carrier availability and balanced two-way freight volume."
  },
  {
    question: "Do I need to pay anything before my car is loaded onto the truck?",
    answer: "No. America Car Transport enforces a strict Zero Upfront Deposit policy. You only pay after your carrier is dispatched and assigned with a verified driver."
  }
];

export default function CaliforniaToTexasRoutePage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://americacartransport.com/routes/california-to-texas#webpage",
        "url": "https://americacartransport.com/routes/california-to-texas",
        "name": "California to Texas Car Shipping | Cost & Transit Time",
        "description": "Direct auto transport from California to Texas. Real carrier rates, 3-5 day transit, zero deposit.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://americacartransport.com/#website",
          "name": "America Car Transport",
          "url": "https://americacartransport.com"
        }
      },
      {
        "@type": "Service",
        "@id": "https://americacartransport.com/routes/california-to-texas#service",
        "serviceType": "California to Texas Car Shipping",
        "name": "California to Texas Car Shipping Service",
        "provider": {
          "@type": "MovingCompany",
          "@id": "https://americacartransport.com/#organization",
          "name": "America Car Transport",
          "url": "https://americacartransport.com",
          "telephone": "(530) 725-5383",
          "identifier": [
            { "@type": "PropertyValue", "propertyID": "USDOT", "value": "3849102" },
            { "@type": "PropertyValue", "propertyID": "MC", "value": "1098472" }
          ]
        },
        "areaServed": [
          { "@type": "State", "name": "California" },
          { "@type": "State", "name": "Texas" }
        ],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "900",
          "highPrice": "1400"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://americacartransport.com/routes/california-to-texas#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://americacartransport.com" },
          { "@type": "ListItem", "position": 2, "name": "Routes", "item": "https://americacartransport.com/routes" },
          { "@type": "ListItem", "position": 3, "name": "California to Texas", "item": "https://americacartransport.com/routes/california-to-texas" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://americacartransport.com/routes/california-to-texas#faq",
        "mainEntity": FAQS.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
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
            <Link href="/routes" className="text-blue-600 font-bold">Routes</Link>
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
          
          {/* Left Text Column */}
          <AnimatedSection direction="up" className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-800 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-blue-200/80 shadow-sm">
              <Truck className="w-4 h-4 text-blue-600" />
              Popular West-to-South Route (I-10 / I-40 Corridor)
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.8rem] leading-[1.1] font-black text-slate-900 tracking-tight mb-5">
              California to Texas Car Shipping: Cost &amp; Transit Guide
            </h1>

            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mb-6">
              Moving a vehicle from California to Texas? Ship safely across this ~1,400–1,550 mile corridor with bonded carriers, $100K+ cargo insurance, and zero upfront deposit.
            </p>

            {/* Reverse Direction Link */}
            <div className="mb-8">
              <Link href="/routes/texas-to-california" className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-xl text-xs md:text-sm font-extrabold text-blue-700 hover:bg-blue-50 transition-colors shadow-sm">
                <ArrowLeftRight className="w-4 h-4 text-blue-600" />
                Shipping the reverse direction? See Texas to California Car Shipping ➔
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 max-w-xl">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase">Avg. Distance</div>
                <div className="text-xl font-black text-slate-900">~1,450 mi</div>
                <div className="text-[11px] text-blue-600 font-semibold mt-0.5">I-10 / I-40 Routes</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase">Transit Time</div>
                <div className="text-xl font-black text-slate-900">3 – 5 Days</div>
                <div className="text-[11px] text-emerald-700 font-semibold mt-0.5">Direct Highway</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase">Open Rate</div>
                <div className="text-xl font-black text-blue-600">$950 – $1,400</div>
                <div className="text-[11px] text-emerald-700 font-semibold mt-0.5">$0 Upfront Deposit</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Quote Calculator Widget */}
          <AnimatedSection direction="up" delay={0.2} className="lg:col-span-5 flex justify-center lg:justify-end">
            <QuoteCalculator />
          </AnimatedSection>

        </div>
      </section>

      {/* City-Pair Pricing Table */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          
          <AnimatedSection direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <DollarSign className="w-4 h-4 text-emerald-600" />
                Real 2026 Carrier Benchmark Pricing
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                California to Texas Car Shipping Rates by City Pair
              </h2>
              <p className="text-base text-slate-600 font-medium mt-2">
                Sample estimates for standard sedans and small SUVs on open car carriers.
              </p>
            </div>
          </AnimatedSection>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm mb-8">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                  <th className="py-4 px-6">Origin (California)</th>
                  <th className="py-4 px-6">Destination (Texas)</th>
                  <th className="py-4 px-6">Distance</th>
                  <th className="py-4 px-6">Est. Open Rate</th>
                  <th className="py-4 px-6">Est. Transit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm font-semibold text-slate-800">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" /> Los Angeles, CA
                  </td>
                  <td className="py-4 px-6">Houston, TX</td>
                  <td className="py-4 px-6 text-slate-500 font-medium">~1,540 miles</td>
                  <td className="py-4 px-6 font-bold text-emerald-700">$1,000 – $1,400</td>
                  <td className="py-4 px-6 text-slate-600">3 – 5 Days</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" /> Los Angeles, CA
                  </td>
                  <td className="py-4 px-6">Dallas, TX</td>
                  <td className="py-4 px-6 text-slate-500 font-medium">~1,435 miles</td>
                  <td className="py-4 px-6 font-bold text-emerald-700">$950 – $1,350</td>
                  <td className="py-4 px-6 text-slate-600">3 – 4 Days</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" /> San Diego, CA
                  </td>
                  <td className="py-4 px-6">San Antonio, TX</td>
                  <td className="py-4 px-6 text-slate-500 font-medium">~1,325 miles</td>
                  <td className="py-4 px-6 font-bold text-emerald-700">$900 – $1,300</td>
                  <td className="py-4 px-6 text-slate-600">3 – 4 Days</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" /> San Francisco, CA
                  </td>
                  <td className="py-4 px-6">Austin, TX</td>
                  <td className="py-4 px-6 text-slate-500 font-medium">~1,760 miles</td>
                  <td className="py-4 px-6 font-bold text-emerald-700">$1,100 – $1,500</td>
                  <td className="py-4 px-6 text-slate-600">4 – 5 Days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-5 rounded-2xl text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
            <strong>Enclosed Transport Note:</strong> Shipping a classic, exotic, or luxury sports car from California to Texas? Enclosed carriers feature hard-sided weather protection and hydraulic liftgates, running 30–50% above open rates. See our <Link href="/services/enclosed-auto-transport" className="text-blue-700 font-bold underline">Enclosed Auto Transport Service</Link>.
          </div>

        </div>
      </section>

      {/* Trust & E-E-A-T Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <ShieldCheck className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-extrabold text-slate-900 text-lg mb-2">FMCSA Licensed Broker</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Bonded and insured property broker (USDOT #3849102 | MC #1098472). Verify our credentials anytime on the federal SAFER portal.
              </p>
              <Link href="/licensing-insurance" className="text-xs font-bold text-blue-600 hover:underline mt-3 inline-block">
                View Licensing Details ➔
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <Lock className="w-8 h-8 text-emerald-600 mb-3" />
              <h3 className="font-extrabold text-slate-900 text-lg mb-2">$0 Upfront Deposit</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                We never charge upfront fees. You only pay after your vehicle is matched and scheduled with a verified carrier.
              </p>
              <Link href="/resources/how-to-avoid-car-shipping-scams" className="text-xs font-bold text-blue-600 hover:underline mt-3 inline-block">
                Read Scam Prevention Guide ➔
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <Award className="w-8 h-8 text-amber-500 mb-3" />
              <h3 className="font-extrabold text-slate-900 text-lg mb-2">4.9 ★ Customer Rating</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Over 10,450+ verified customer reviews across Google &amp; BBB. Read real delivery feedback on the CA ➔ TX route.
              </p>
              <Link href="/reviews" className="text-xs font-bold text-blue-600 hover:underline mt-3 inline-block">
                Read Customer Reviews ➔
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              Route Questions &amp; Answers
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              California to Texas Shipping FAQs
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="bg-slate-50 rounded-2xl border border-slate-200 p-5 group shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-extrabold text-slate-900 text-base cursor-pointer">
                  <span>{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-2" />
                </summary>
                <p className="text-sm text-slate-600 leading-relaxed font-medium mt-3 pt-3 border-t border-slate-200/80">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
