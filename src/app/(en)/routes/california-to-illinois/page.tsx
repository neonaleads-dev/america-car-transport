import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import RouteGuideContent from "@/components/routes/RouteGuideContent";
import { routeGuides } from "@/data/route-guides";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import AnimatedSection, { AnimatedCard } from "@/components/ui/AnimatedSection";
import { ShieldCheck, Award, Clock, DollarSign, ArrowRight, ArrowLeftRight, CheckCircle2, Phone, HelpCircle, MapPin, Truck, ChevronDown, Lock } from "lucide-react";

import SiteHeader from "@/components/layout/SiteHeader";
export const metadata = {
  title: "California to Illinois Car Shipping | Cost & Transit",
  description: "Ship a car from California to Illinois (Chicago) — real 2026 pricing, transit times, and FAQs. Zero upfront deposit. Get an instant quote.",
  alternates: {
    canonical: "https://www.americacartransport.com/routes/california-to-illinois",
  },
};

const BASE_FAQS = [
  {
    question: "How much does it cost to ship a car from California to Illinois?",
    answer: "Shipping a car from California to Illinois typically costs between $1,000 and $1,450 on open transport, for this roughly 2,000-mile Midwest corridor connecting California to the Chicago metro area. Enclosed transport for luxury or classic vehicles runs 30–50% higher ($1,450 to $2,050)."
  },
  {
    question: "How long does it take to ship a car from California to Illinois?",
    answer: "Transit time from California to Illinois (Chicago) is typically 4 to 6 days once loaded on the car carrier. Transit times vary slightly depending on weather along I-80 and driver hour-of-service compliance."
  },
  {
    question: "Is shipping from Chicago to California priced differently than California to Chicago?",
    answer: "Generally no. Freight volume and carrier availability between California and the Chicago metro area are well-balanced year-round, so rates and 4-6 day transit times are typically similar in both directions."
  },
  {
    question: "Do I need to pay anything before my car is loaded onto the truck?",
    answer: "No. America Car Transport operates under a strict Zero Upfront Deposit policy. You only pay after your vehicle is dispatched and assigned with a verified driver."
  }
];

const FAQS = [...BASE_FAQS, ...routeGuides["california-to-illinois"].faqs];

export default function CaliforniaToIllinoisRoutePage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.americacartransport.com/routes/california-to-illinois#webpage",
        "url": "https://www.americacartransport.com/routes/california-to-illinois",
        "name": "California to Illinois Car Shipping | Cost & Transit Time",
        "description": "Direct auto transport from California to Illinois and Chicago. Real 2026 carrier pricing, 4-6 day transit, zero deposit.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.americacartransport.com/#website",
          "name": "America Car Transport",
          "url": "https://www.americacartransport.com"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.americacartransport.com/routes/california-to-illinois#service",
        "serviceType": "California to Illinois Car Shipping",
        "name": "California to Illinois Car Shipping Service",
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
          { "@type": "State", "name": "California" },
          { "@type": "State", "name": "Illinois" }
        ],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "1000",
          "highPrice": "1450"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.americacartransport.com/routes/california-to-illinois#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com" },
          { "@type": "ListItem", "position": 2, "name": "Routes", "item": "https://www.americacartransport.com/routes" },
          { "@type": "ListItem", "position": 3, "name": "California to Illinois", "item": "https://www.americacartransport.com/routes/california-to-illinois" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.americacartransport.com/routes/california-to-illinois#faq",
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
      <SiteHeader active="routes" />

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 lg:px-24 pt-10 pb-16 bg-paper bg-grid-pattern border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <AnimatedSection direction="up" className="lg:col-span-7">
            <p className="act-eyebrow !mb-5">Major Midwest Highway Freight Corridor (I-80 Route)</p>

            <h1 className="text-4xl md:text-5xl lg:text-[3.8rem] leading-[1.1] font-black text-slate-900 tracking-tight mb-5">
              California to Illinois Car Shipping: Cost &amp; Transit Guide
            </h1>

            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mb-6">
              Connecting California to the Chicago metro area. Real 2026 pricing for this ~2,000-mile Midwest corridor with bonded carriers and zero upfront deposit.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 max-w-xl">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase">Avg. Distance</div>
                <div className="text-xl font-black text-slate-900">~2,000 mi</div>
                <div className="text-[11px] text-blue-600 font-semibold mt-0.5">I-80 Midwest Highway</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase">Transit Time</div>
                <div className="text-xl font-black text-slate-900">4 – 6 Days</div>
                <div className="text-[11px] text-emerald-700 font-semibold mt-0.5">Direct Route</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase">Open Rate</div>
                <div className="text-xl font-black text-blue-600">$1,000 – $1,450</div>
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
              <p className="act-eyebrow !mb-3">Real 2026 Carrier Benchmark Pricing</p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                California to Illinois Car Shipping Rates by City Pair
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
                  <th className="py-4 px-6">Destination (Illinois)</th>
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
                  <td className="py-4 px-6">Chicago, IL</td>
                  <td className="py-4 px-6 text-slate-500 font-medium">~2,015 miles</td>
                  <td className="py-4 px-6 font-bold text-emerald-700">$1,000 – $1,400</td>
                  <td className="py-4 px-6 text-slate-600">4 – 6 Days</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" /> San Francisco, CA
                  </td>
                  <td className="py-4 px-6">Chicago, IL</td>
                  <td className="py-4 px-6 text-slate-500 font-medium">~2,100 miles</td>
                  <td className="py-4 px-6 font-bold text-emerald-700">$1,050 – $1,450</td>
                  <td className="py-4 px-6 text-slate-600">4 – 6 Days</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" /> San Diego, CA
                  </td>
                  <td className="py-4 px-6">Rockford, IL</td>
                  <td className="py-4 px-6 text-slate-500 font-medium">~2,050 miles</td>
                  <td className="py-4 px-6 font-bold text-emerald-700">$1,020 – $1,420</td>
                  <td className="py-4 px-6 text-slate-600">4 – 6 Days</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" /> Sacramento, CA
                  </td>
                  <td className="py-4 px-6">Peoria, IL</td>
                  <td className="py-4 px-6 text-slate-500 font-medium">~2,000 miles</td>
                  <td className="py-4 px-6 font-bold text-emerald-700">$1,000 – $1,400</td>
                  <td className="py-4 px-6 text-slate-600">4 – 6 Days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-5 rounded-2xl text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
            <strong>Enclosed Transport Note:</strong> Shipping a classic, exotic, or luxury sports car from California to Illinois? Enclosed carriers feature hard-sided weather protection and hydraulic liftgates, running 30–50% above open rates. See our <Link href="/services/enclosed-auto-transport" className="text-blue-700 font-bold underline">Enclosed Auto Transport Service</Link>.
          </div>

        </div>
      </section>

      {/* Reverse Direction Section (Chicago to California) */}
      <section className="py-16 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm max-w-3xl mx-auto">
            <p className="act-eyebrow !mb-3">Reverse Corridor Demand</p>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-3">
              Shipping From Chicago to California?
            </h2>
            <p className="text-sm text-slate-600 font-medium leading-relaxed mb-4">
              This route also sees strong reverse-direction demand (&ldquo;car shipping Chicago to California&rdquo;). Freight volume between California and the Chicago metropolitan area is well-balanced year-round, so carrier pricing ($1,000–$1,450) and 4–6 day transit schedules apply equally in both directions.
            </p>
            <p className="text-xs text-slate-500 font-semibold">
              To ship from Chicago or Illinois to California, simply select Chicago as your pickup location in our instant quote calculator above!
            </p>
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
              <h3 className="font-extrabold text-slate-900 text-lg mb-2">5.0 ★ Customer Rating</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Over 1,000+ verified customer reviews across Google &amp; BBB. Read real delivery feedback on the CA ➔ IL route.
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
            <p className="act-eyebrow !mb-3">Route Questions &amp; Answers</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              California to Illinois Shipping FAQs
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
      <RouteGuideContent guide={routeGuides["california-to-illinois"]} />

      <Footer />
    </main>
  );
}
