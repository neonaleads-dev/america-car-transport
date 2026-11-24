import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import RouteGuideContent from "@/components/routes/RouteGuideContent";
import { routeGuides } from "@/data/route-guides";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import AuthorProfile from "@/components/ui/AuthorProfile";
import PricingMethodology from "@/components/ui/PricingMethodology";
import { ShieldCheck, Phone, Truck } from "lucide-react";

import SiteHeader from "@/components/layout/SiteHeader";
export const metadata = {
  title: "California to Washington Car Shipping | Cost & Transit | America Car Transport",
  description: "Ship a car from California to Washington — real 2026 pricing, transit times, and FAQs. Zero upfront deposit, fully licensed and bonded. Get an instant quote.",
  alternates: {
    canonical: "https://www.americacartransport.com/routes/california-to-washington",
  },
};

const BASE_FAQS = [
  {
    question: "How much does it cost to ship a car from California to Washington?",
    answer: "Shipping a car from California to Washington (I-5 corridor) typically costs between $550 and $950 for open transport. Enclosed transport runs between $850 and $1,350 depending on exact cities (e.g. LA to Seattle vs San Diego to Spokane)."
  },
  {
    question: "How long does transit take between California and Washington?",
    answer: "Carriers traveling north along Interstate 5 complete California to Washington shipments in 2 to 4 days."
  }
];

const FAQS = [...BASE_FAQS, ...routeGuides["california-to-washington"].faqs];

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

      <SiteHeader active="routes" />

      <section className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <p className="act-eyebrow !text-navy-200 !mb-4">Pacific Coast Corridor (I-5 N)</p>
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

      <RouteGuideContent guide={routeGuides["california-to-washington"]} />


      <Footer />
    </main>
  );
}
