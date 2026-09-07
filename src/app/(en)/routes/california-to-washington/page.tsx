import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import AuthorProfile from "@/components/ui/AuthorProfile";
import PricingMethodology from "@/components/ui/PricingMethodology";
import { ShieldCheck, Phone, Truck } from "lucide-react";

export const metadata = {
  title: "California to Washington Car Shipping | Cost & Transit | America Car Transport",
  description: "Ship a car from California to Washington — real 2026 pricing, transit times, and FAQs. Zero upfront deposit, fully licensed and bonded. Get an instant quote.",
  alternates: {
    canonical: "https://www.americacartransport.com/routes/california-to-washington",
  },
};

const FAQS = [
  {
    question: "How much does it cost to ship a car from California to Washington?",
    answer: "Shipping a car from California to Washington (I-5 corridor) typically costs between $550 and $950 for open transport. Enclosed transport runs between $850 and $1,350 depending on exact cities (e.g. LA to Seattle vs San Diego to Spokane)."
  },
  {
    question: "How long does transit take between California and Washington?",
    answer: "Carriers traveling north along Interstate 5 complete California to Washington shipments in 2 to 4 days."
  }
];

export default function CaliforniaToWashingtonRoutePage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.americacartransport.com/routes/california-to-washington#webpage",
        "url": "https://www.americacartransport.com/routes/california-to-washington",
        "name": "California to Washington Car Shipping | Cost & Transit Time",
        "description": "Direct auto transport from California to Washington along the I-5 corridor. 2-4 day transit, zero deposit.",
        "isPartOf": { "@type": "WebSite", "@id": "https://www.americacartransport.com/#website", "name": "America Car Transport", "url": "https://www.americacartransport.com" }
      },
      {
        "@type": "Service",
        "@id": "https://www.americacartransport.com/routes/california-to-washington#service",
        "serviceType": "California to Washington Car Shipping",
        "name": "California to Washington Auto Transport Service",
        "provider": { "@type": "MovingCompany", "@id": "https://www.americacartransport.com/#organization", "name": "America Car Transport", "url": "https://www.americacartransport.com", "telephone": "(530) 725-5383" },
        "areaServed": [{ "@type": "State", "name": "California" }, { "@type": "State", "name": "Washington" }],
        "offers": { "@type": "AggregateOffer", "priceCurrency": "USD", "lowPrice": "550", "highPrice": "950" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.americacartransport.com/routes/california-to-washington#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com" },
          { "@type": "ListItem", "position": 2, "name": "Routes", "item": "https://www.americacartransport.com/routes" },
          { "@type": "ListItem", "position": 3, "name": "California to Washington", "item": "https://www.americacartransport.com/routes/california-to-washington" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.americacartransport.com/routes/california-to-washington#faq",
        "mainEntity": FAQS.map((faq) => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }} />

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

      <section className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/20">
              <Truck className="w-4 h-4 text-blue-400" /> Pacific Coast Corridor (I-5 N)
            </div>
            <h1 className="text-3xl md:text-5xl font-black leading-tight text-white mb-4">
              California to Washington <span className="text-blue-400">Car Shipping Cost 2026</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg mb-6 leading-relaxed font-medium">
              Door-to-door auto transport connecting California (Los Angeles, San Francisco, San Diego, Sacramento) to Washington (Seattle, Tacoma, Vancouver, Spokane).
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs md:text-sm">
              <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                <div className="text-slate-400 font-bold uppercase text-[10px]">Avg Distance</div>
                <div className="text-white font-black text-base">800 – 1,150 miles</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                <div className="text-slate-400 font-bold uppercase text-[10px]">Estimated Transit</div>
                <div className="text-emerald-400 font-black text-base">2 – 4 Days</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3 rounded-xl col-span-2 sm:col-span-1">
                <div className="text-slate-400 font-bold uppercase text-[10px]">Open Carrier Rate</div>
                <div className="text-blue-400 font-black text-base">$550 – $950</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <QuoteCalculator />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <AuthorProfile lastUpdated="August 2026" />
        <PricingMethodology />

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
