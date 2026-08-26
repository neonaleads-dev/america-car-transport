import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import AuthorProfile from "@/components/ui/AuthorProfile";
import PricingMethodology from "@/components/ui/PricingMethodology";
import { ShieldCheck, Award, Clock, DollarSign, ArrowRight, CheckCircle2, Phone, MapPin, Truck, Lock } from "lucide-react";

export const metadata = {
  title: "Texas to Florida Car Shipping | Cost & Transit | America Car Transport",
  description: "Ship a car from Texas to Florida — real 2026 pricing, transit times, and FAQs. Zero upfront deposit, fully licensed and bonded. Get an instant quote.",
  alternates: {
    canonical: "https://www.americacartransport.com/routes/texas-to-florida",
  },
};

const FAQS = [
  {
    question: "How much does it cost to ship a car from Texas to Florida?",
    answer: "Shipping a car from Texas to Florida typically costs between $650 and $1,050 for open transport. Enclosed transport for luxury or classic vehicles runs between $1,000 and $1,550. Rates vary depending on exact city pairs (e.g. Houston to Miami vs Dallas to Orlando), vehicle size, and seasonal demand."
  },
  {
    question: "How long does it take to ship a car from Texas to Florida?",
    answer: "Transit time from Texas to Florida is typically 2 to 4 days once dispatched. The Interstate 10 corridor connects major Texas hubs (Houston, San Antonio, Austin, Dallas) directly to Florida's main metros (Pensacola, Jacksonville, Orlando, Tampa, Miami)."
  },
  {
    question: "Are there seasonal pricing changes on the Texas to Florida route?",
    answer: "Yes. Demand increases during fall and winter (October through February) as snowbirds and seasonal residents relocate to Florida, which can slightly increase carrier rates."
  },
  {
    question: "Do I need to pay any deposit before a carrier is assigned?",
    answer: "No. America Car Transport enforces a strict Zero Upfront Deposit policy. You only pay after your carrier is dispatched and assigned with a verified driver."
  }
];

export default function TexasToFloridaRoutePage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.americacartransport.com/routes/texas-to-florida#webpage",
        "url": "https://www.americacartransport.com/routes/texas-to-florida",
        "name": "Texas to Florida Car Shipping | Cost & Transit Time",
        "description": "Direct auto transport from Texas to Florida. Real carrier rates, 2-4 day transit, zero deposit.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.americacartransport.com/#website",
          "name": "America Car Transport",
          "url": "https://www.americacartransport.com"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.americacartransport.com/routes/texas-to-florida#service",
        "serviceType": "Texas to Florida Car Shipping",
        "name": "Texas to Florida Auto Transport Service",
        "provider": {
          "@type": "MovingCompany",
          "@id": "https://www.americacartransport.com/#organization",
          "name": "America Car Transport",
          "url": "https://www.americacartransport.com",
          "telephone": "(530) 725-5383"
        },
        "areaServed": [
          { "@type": "State", "name": "Texas" },
          { "@type": "State", "name": "Florida" }
        ],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "650",
          "highPrice": "1050"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.americacartransport.com/routes/texas-to-florida#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com" },
          { "@type": "ListItem", "position": 2, "name": "Routes", "item": "https://www.americacartransport.com/routes" },
          { "@type": "ListItem", "position": 3, "name": "Texas to Florida", "item": "https://www.americacartransport.com/routes/texas-to-florida" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.americacartransport.com/routes/texas-to-florida#faq",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between gap-4">
          <Link href="/" title="America Car Transport Homepage" className="flex items-center shrink-0">
            <img src="/america-car-transport-logo.png" alt="America Car Transport Logo" width={160} height={72} className="h-[52px] sm:h-[58px] w-auto object-contain" />
          </Link>
          <div className="flex items-center gap-3">
            <a href="tel:5307255383" className="hidden sm:flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold">
              <Phone className="w-4 h-4 text-blue-600" /> (530) 725-5383
            </a>
            <Link href="/tools/car-shipping-cost-calculator" className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] text-white px-4 py-2 text-xs sm:text-sm font-extrabold rounded-xl shadow-md">
              Instant Quote
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/20">
              <Truck className="w-4 h-4 text-blue-400" /> Direct Highway Corridor (I-10 E)
            </div>
            <h1 className="text-3xl md:text-5xl font-black leading-tight text-white mb-4">
              Texas to Florida <span className="text-blue-400">Car Shipping Cost 2026</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg mb-6 leading-relaxed font-medium">
              Door-to-door auto transport connecting Texas metros (Houston, Dallas, Austin, San Antonio) to Florida cities (Miami, Orlando, Tampa, Jacksonville). Zero upfront deposit.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs md:text-sm">
              <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                <div className="text-slate-400 font-bold uppercase text-[10px]">Avg Distance</div>
                <div className="text-white font-black text-base">950 – 1,150 miles</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                <div className="text-slate-400 font-bold uppercase text-[10px]">Estimated Transit</div>
                <div className="text-emerald-400 font-black text-base">2 – 4 Days</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3 rounded-xl col-span-2 sm:col-span-1">
                <div className="text-slate-400 font-bold uppercase text-[10px]">Open Carrier Rate</div>
                <div className="text-blue-400 font-black text-base">$650 – $1,050</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <QuoteCalculator />
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <AuthorProfile lastUpdated="August 2026" />

        <div className="prose prose-slate max-w-none mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">Texas to Florida Car Shipping Overview</h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            Shipping a car from Texas to Florida is one of the most active interstate transport routes in the southern United States. Major highway arteries such as Interstate 10, Interstate 20, and Interstate 75 allow carrier trucks to maintain daily departures between major metropolitan areas like Houston, Dallas-Fort Worth, San Antonio, and Austin to Jacksonville, Orlando, Tampa, Fort Lauderdale, and Miami.
          </p>
        </div>

        <PricingMethodology />

        {/* Route FAQs */}
        <div className="my-12">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <h3 className="text-base font-extrabold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
