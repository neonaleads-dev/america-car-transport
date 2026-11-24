import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import { Calculator, ShieldCheck, Phone, ArrowRight, Settings, CheckCircle2, Layers } from "lucide-react";

import SiteHeader from "@/components/layout/SiteHeader";
export const metadata = {
  title: "How Car Shipping Quotes Are Calculated (2026 Breakdown)",
  description: "Learn how auto transport brokers and carrier dispatchers calculate car shipping quotes. Understand distance tiers, vehicle weight multipliers, and seasonal demand.",
  alternates: {
    canonical: "https://www.americacartransport.com/resources/how-car-shipping-quotes-work",
  },
};

export default function HowCarShippingQuotesWorkPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.americacartransport.com/resources/how-car-shipping-quotes-work#article",
        "headline": "How Car Shipping Quotes Are Calculated",
        "description": "Explanatory technical breakdown of the 5 core variables used by auto transport dispatchers to determine vehicle shipping rates.",
        "author": { "@type": "Organization", "name": "America Car Transport" },
        "publisher": { "@type": "Organization", "name": "America Car Transport" },
        "datePublished": "2026-09-07"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com/" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://www.americacartransport.com/resources" },
          { "@type": "ListItem", "position": 3, "name": "How Quotes Work", "item": "https://www.americacartransport.com/resources/how-car-shipping-quotes-work" }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <SiteHeader />

      <section className="relative px-4 md:px-8 lg:px-24 pt-10 pb-16 bg-paper border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto">
          <nav className="flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-500 mb-5">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/resources">Resources</Link><span>/</span>
            <span className="text-slate-900 font-bold">How Quotes Work</span>
          </nav>

          <p className="act-eyebrow !mb-5">Carrier Dispatch Pricing Algorithm Explained</p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-5">
            How Car Shipping Quotes Are Calculated
          </h1>

          <p className="text-base md:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-8">
            Car shipping rates aren&apos;t generated at random. Dispatchers and auto transport brokers use a 5-factor mathematical formula based on live carrier availability and route fuel surcharges.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-200 font-sans">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8 space-y-12">
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl shadow-sm">
            <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">⚡ Direct Answer — The 5 Pricing Factors</div>
            <p className="text-slate-800 text-sm md:text-base font-semibold leading-relaxed">
              Car shipping quotes are calculated by combining: (1) Distance &amp; Route Traffic, (2) Vehicle Size &amp; Gross Weight, (3) Carrier Type (Open vs Enclosed), (4) Vehicle Operability (Running vs Inoperable), and (5) Seasonal Demand Spikes (Snowbird/Summer).
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">The 5 Core Calculator Inputs</h2>
            
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <h3 className="font-bold text-slate-900 text-lg mb-2">1. Distance Tiers &amp; Per-Mile Base</h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                Short routes (&lt;500 miles) average $1.20–$2.20/mile due to fixed truck loading time. Medium routes (500–1,500 miles) average $0.70–$1.00/mile, while long cross-country routes (&gt;1,500 miles) drop to $0.40–$0.70/mile.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <h3 className="font-bold text-slate-900 text-lg mb-2">2. Vehicle Weight &amp; Clearance Surcharge</h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                Standard sedans serve as the base rate. Full-size SUVs add $150–$250, while heavy dual-rear-wheel trucks or lifted 4x4s add $300–$500 because they take up two trailer slots or exceed standard height limits.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <h3 className="font-bold text-slate-900 text-lg mb-2">3. Open vs. Enclosed Transport Type</h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                Open transport multi-car carriers represent 90%+ of all dispatches. Enclosed hard-sided or soft-sided trailers carry a 30% to 60% price premium due to lower vehicle capacity per trailer (2–6 vehicles max).
              </p>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black mb-4">Run the Official Calculation Engine</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-medium">
              Want to see these exact factors applied to your origin and destination zip codes? Use our instant calculator.
            </p>
            <Link href="/tools/car-shipping-cost-calculator" className="inline-flex items-center gap-2 bg-signal hover:bg-signal-700 text-white px-6 py-3.5 rounded-xl font-extrabold text-sm shadow-md">
              <Calculator className="w-4 h-4" /> Open Car Shipping Cost Calculator →
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
