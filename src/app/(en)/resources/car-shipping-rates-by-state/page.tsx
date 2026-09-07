import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import { DollarSign, ShieldCheck, Phone, ArrowRight, Table, Calculator } from "lucide-react";
import { STATE_HUB_MAP } from "@/data/states";

export const metadata = {
  title: "Car Shipping Rates by State (2026) | 50-State Average Cost Table",
  description: "Complete 2026 data table of car shipping rates across all 50 states. Compare average per-mile costs, regional price factors, and popular route baselines.",
  alternates: {
    canonical: "https://www.americacartransport.com/resources/car-shipping-rates-by-state",
  },
};

export default function CarShippingRatesByStatePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.americacartransport.com/resources/car-shipping-rates-by-state#article",
        "headline": "Car Shipping Rates by State (2026 Data Index)",
        "description": "50-state vehicle transport cost matrix with per-mile averages, popular route baselines, and state pricing guides.",
        "author": { "@type": "Organization", "name": "America Car Transport" },
        "publisher": { "@type": "Organization", "name": "America Car Transport" },
        "datePublished": "2026-09-07"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com/" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://www.americacartransport.com/resources" },
          { "@type": "ListItem", "position": 3, "name": "Rates by State", "item": "https://www.americacartransport.com/resources/car-shipping-rates-by-state" }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between gap-4">
          <Link href="/" title="America Car Transport Homepage" className="flex items-center shrink-0 my-auto">
            <img 
              src="/america-car-transport-logo.png" 
              alt="America Car Transport Logo" 
              width={160}
              height={72}
              className="h-[52px] sm:h-[58px] md:h-[64px] lg:h-[72px] w-auto object-contain"
            />
          </Link>
          <div className="flex items-center gap-3">
            <a href="tel:5307255383" className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs rounded-xl">
              <Phone className="w-3.5 h-3.5" /> (530) 725-5383
            </a>
            <Link href="/tools/car-shipping-cost-calculator" className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] text-white px-4 py-2 rounded-xl text-xs md:text-sm font-extrabold shadow-sm">
              Get Instant Quote
            </Link>
          </div>
        </div>
      </header>

      <section className="relative px-4 md:px-8 lg:px-24 pt-10 pb-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto">
          <nav className="flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-500 mb-5">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/resources">Resources</Link><span>/</span>
            <span className="text-slate-900 font-bold">Rates by State</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-800 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-blue-200/80 shadow-sm">
            <DollarSign className="w-4 h-4 text-blue-600" />
            2026 Nationwide Data Asset
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-5">
            Car Shipping Rates by State (2026 Data Index)
          </h1>

          <p className="text-base md:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-8">
            Complete data table of average car shipping costs across all 50 U.S. states. Data based on 2026 carrier dispatches for operable sedans and SUVs.
          </p>

          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl max-w-3xl text-xs md:text-sm text-emerald-900 font-medium">
            💡 For an exact quote tailored to your vehicle size, transport type, and zip codes, test our free <Link href="/tools/car-shipping-cost-calculator" className="text-emerald-700 font-extrabold underline hover:text-emerald-800">car shipping cost calculator</Link>.
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm mb-12">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white font-extrabold uppercase text-[11px] tracking-wider">
                  <th className="py-4 px-6">State</th>
                  <th className="py-4 px-6">Short Route (&lt;500 mi)</th>
                  <th className="py-4 px-6">Medium Route (500–1,500 mi)</th>
                  <th className="py-4 px-6">Cross-Country (1,500+ mi)</th>
                  <th className="py-4 px-6">State Guide</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium text-slate-800">
                {Object.entries(STATE_HUB_MAP).map(([slug, st]) => (
                  <tr key={slug} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-6 font-bold text-slate-900">
                      {st.name} ({st.abbr})
                    </td>
                    <td className="py-3.5 px-6 font-semibold text-blue-700">$1.20 – $2.20 / mi</td>
                    <td className="py-3.5 px-6 font-semibold text-blue-700">$0.70 – $1.00 / mi</td>
                    <td className="py-3.5 px-6 font-semibold text-emerald-700">$0.40 – $0.70 / mi</td>
                    <td className="py-3.5 px-6">
                      <Link href={`/locations/${slug}`} className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1">
                        {st.name} Rates <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black mb-4">Cite This Data</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-medium">
              America Car Transport grants permission to moving companies, relocation consultants, and media outlets to cite this 2026 state rate matrix provided link attribution is included to AmericaCarTransport.com.
            </p>
            <Link href="/tools/car-shipping-cost-calculator" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#FF852d] text-white px-6 py-3.5 rounded-xl font-extrabold text-sm shadow-md">
              <Calculator className="w-4 h-4" /> Run Live Calculator →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
