import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import AnimatedSection, { AnimatedCard } from "@/components/ui/AnimatedSection";
import { ShieldCheck, Award, Clock, DollarSign, ArrowRight, ArrowLeftRight, CheckCircle2, Phone, HelpCircle, MapPin, Truck, ChevronDown, Lock } from "lucide-react";

export const metadata = {
  title: "New York to California Car Shipping | Cost & Transit",
  description: "Ship a car from New York to California — real 2026 pricing, transit times, and FAQs. Zero upfront deposit, licensed and bonded. Get an instant quote.",
  alternates: {
    canonical: "https://www.americacartransport.com/routes/new-york-to-california",
  },
};

const FAQS = [
  {
    question: "How much does it cost to ship a car from New York to California?",
    answer: "Shipping a car from New York to California typically costs between $1,150 and $1,700 on open transport, reflecting this route's status as one of the longest coast-to-coast corridors in the country (~2,800 miles). Enclosed transport for luxury or classic vehicles runs 30–50% higher ($1,650 to $2,400)."
  },
  {
    question: "How long does it take to ship a car from New York to California?",
    answer: "Transit time from New York to California is typically 5 to 7 days once loaded. Carrier transit speed depends on driver hour-of-service regulations, weather conditions, and exact pickup/delivery locations."
  },
  {
    question: "Is it cheaper to drive or ship from New York to California?",
    answer: "For a 2,800-mile cross-country route, shipping is almost always cheaper than driving. When you factor in $400+ in gas, 4-5 nights of hotels ($600+), meals, road tolls, and adding 2,800 miles of vehicle depreciation, driving costs well over $1,500—without accounting for lost working days."
  },
  {
    question: "Do I need to pay anything before my car is loaded onto the truck?",
    answer: "No. America Car Transport operates under a strict Zero Upfront Deposit policy. You only pay after your vehicle is dispatched and assigned with a verified driver."
  }
];

export default function NewYorkToCaliforniaRoutePage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.americacartransport.com/routes/new-york-to-california#webpage",
        "url": "https://www.americacartransport.com/routes/new-york-to-california",
        "name": "New York to California Car Shipping | Cost & Transit Time",
        "description": "Coast-to-coast vehicle transport from New York to California. Real 2026 carrier pricing, 5-7 day transit, zero deposit.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.americacartransport.com/#website",
          "name": "America Car Transport",
          "url": "https://www.americacartransport.com"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.americacartransport.com/routes/new-york-to-california#service",
        "serviceType": "New York to California Car Shipping",
        "name": "New York to California Car Shipping Service",
        "provider": {
          "@type": "MovingCompany",
          "@id": "https://www.americacartransport.com/#organization",
          "name": "America Car Transport",
          "url": "https://www.americacartransport.com",
          "telephone": "(530) 725-5383",
          "identifier": [
            { "@type": "PropertyValue", "propertyID": "USDOT", "value": "3849102" },
            { "@type": "PropertyValue", "propertyID": "MC", "value": "1098472" }
          ]
        },
        "areaServed": [
          { "@type": "State", "name": "New York" },
          { "@type": "State", "name": "California" }
        ],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "1150",
          "highPrice": "1700"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.americacartransport.com/routes/new-york-to-california#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com" },
          { "@type": "ListItem", "position": 2, "name": "Routes", "item": "https://www.americacartransport.com/routes" },
          { "@type": "ListItem", "position": 3, "name": "New York to California", "item": "https://www.americacartransport.com/routes/new-york-to-california" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.americacartransport.com/routes/new-york-to-california#faq",
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple-50 text-purple-800 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-purple-200/80 shadow-sm">
              <Truck className="w-4 h-4 text-purple-600" />
              Flagship Coast-to-Coast Highway Route (~2,800 Miles)
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.8rem] leading-[1.1] font-black text-slate-900 tracking-tight mb-5">
              New York to California Car Shipping: Cost &amp; Transit Guide
            </h1>

            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mb-6">
              One of the longest and most commonly shipped coast-to-coast routes in the nation. Real 2026 pricing for this ~2,789 mile corridor with fully bonded carriers and $0 deposit.
            </p>

            {/* Reverse Direction Link */}
            <div className="mb-8">
              <Link href="/routes/california-to-new-york" className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-xl text-xs md:text-sm font-extrabold text-blue-700 hover:bg-blue-50 transition-colors shadow-sm">
                <ArrowLeftRight className="w-4 h-4 text-blue-600" />
                Shipping the reverse direction? See California to New York Car Shipping ➔
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 max-w-xl">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase">Avg. Distance</div>
                <div className="text-xl font-black text-slate-900">~2,800 mi</div>
                <div className="text-[11px] text-blue-600 font-semibold mt-0.5">I-80 / I-40 Highway</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase">Transit Time</div>
                <div className="text-xl font-black text-slate-900">5 – 7 Days</div>
                <div className="text-[11px] text-emerald-700 font-semibold mt-0.5">Direct Cross-Country</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase">Open Rate</div>
                <div className="text-xl font-black text-blue-600">$1,150 – $1,700</div>
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
                New York to California Car Shipping Rates by City Pair
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
                  <th className="py-4 px-6">Origin (New York)</th>
                  <th className="py-4 px-6">Destination (California)</th>
                  <th className="py-4 px-6">Distance</th>
                  <th className="py-4 px-6">Est. Open Rate</th>
                  <th className="py-4 px-6">Est. Transit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm font-semibold text-slate-800">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" /> New York City, NY
                  </td>
                  <td className="py-4 px-6">Los Angeles, CA</td>
                  <td className="py-4 px-6 text-slate-500 font-medium">~2,789 miles</td>
                  <td className="py-4 px-6 font-bold text-emerald-700">$1,150 – $1,650</td>
                  <td className="py-4 px-6 text-slate-600">5 – 7 Days</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" /> New York City, NY
                  </td>
                  <td className="py-4 px-6">San Francisco, CA</td>
                  <td className="py-4 px-6 text-slate-500 font-medium">~2,900 miles</td>
                  <td className="py-4 px-6 font-bold text-emerald-700">$1,200 – $1,700</td>
                  <td className="py-4 px-6 text-slate-600">5 – 7 Days</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" /> Albany, NY
                  </td>
                  <td className="py-4 px-6">San Diego, CA</td>
                  <td className="py-4 px-6 text-slate-500 font-medium">~2,850 miles</td>
                  <td className="py-4 px-6 font-bold text-emerald-700">$1,180 – $1,680</td>
                  <td className="py-4 px-6 text-slate-600">5 – 7 Days</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" /> Rochester, NY
                  </td>
                  <td className="py-4 px-6">Sacramento, CA</td>
                  <td className="py-4 px-6 text-slate-500 font-medium">~2,750 miles</td>
                  <td className="py-4 px-6 font-bold text-emerald-700">$1,150 – $1,650</td>
                  <td className="py-4 px-6 text-slate-600">5 – 7 Days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-5 rounded-2xl text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
            <strong>Enclosed Transport Note:</strong> Shipping a classic, exotic, or luxury sports car from New York to California? Enclosed carriers feature hard-sided weather protection and hydraulic liftgates, running 30–50% above open rates. See our <Link href="/services/enclosed-auto-transport" className="text-blue-700 font-bold underline">Enclosed Auto Transport Service</Link>.
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
                Bonded and insured property broker. Verify our credentials anytime on the federal SAFER portal.
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
                Over 10,450+ verified customer reviews across Google &amp; BBB. Read real delivery feedback on the NY ➔ CA route.
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
              New York to California Shipping FAQs
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
