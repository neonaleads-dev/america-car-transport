import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import { DollarSign, Fuel, Hotel, Car, ShieldCheck, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Ship vs. Drive: The Real Cost Comparison (2026)",
  description: "Is it cheaper to ship a car or drive? Worked math breakdown comparing gas, hotel, food, vehicle depreciation, and plane tickets against auto transport rates.",
  alternates: {
    canonical: "https://www.americacartransport.com/resources/ship-car-vs-driving-cost",
  },
};

export default function ShipCarVsDrivingCostPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.americacartransport.com/resources/ship-car-vs-driving-cost#article",
        "headline": "Ship vs. Drive: The Real Cost Comparison (2026)",
        "description": "Comprehensive math breakdown comparing driving expenses (fuel, wear, hotel, meals) vs auto transport costs for 500, 1500, and 2800 mile routes.",
        "author": { "@type": "Organization", "name": "America Car Transport" },
        "publisher": { "@type": "Organization", "name": "America Car Transport" },
        "datePublished": "2026-09-07"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com/" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://www.americacartransport.com/resources" },
          { "@type": "ListItem", "position": 3, "name": "Ship vs Drive Cost", "item": "https://www.americacartransport.com/resources/ship-car-vs-driving-cost" }
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
            <span className="text-slate-900 font-bold">Ship vs Drive Cost</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-800 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-blue-200/80 shadow-sm">
            <Fuel className="w-4 h-4 text-blue-600" />
            Is it cheaper to ship a car or drive? (2026 Math Breakdown)
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-5">
            Ship vs. Drive: The Real Cost Comparison (2026)
          </h1>

          <p className="text-base md:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-8">
            When moving long distance, many drivers assume driving their car is vastly cheaper than shipping it. Here is the exact mathematical breakdown factoring in fuel, wear, lodging, food, and opportunity cost.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-200 font-sans">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8 space-y-12">
          
          {/* Direct Answer Box */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl shadow-sm">
            <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">⚡ Direct Answer</div>
            <p className="text-slate-800 text-sm md:text-base font-semibold leading-relaxed">
              For routes over 1,000 miles (e.g. Coast-to-Coast or Midwest to West Coast), <strong>shipping a car is almost always cheaper or equal to driving</strong> once you account for hotel nights ($150–$300/night), gas ($0.15–$0.25/mi), meals, and IRS vehicle wear ($0.65/mi).
            </p>
          </div>

          {/* Worked Math Examples Table */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Coast-to-Coast Route Worked Example (2,500 Miles: LA → Miami)</h2>
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-extrabold uppercase text-[11px] tracking-wider">
                    <th className="py-4 px-6">Expense Item</th>
                    <th className="py-4 px-6">Driving Yourself (Road Trip)</th>
                    <th className="py-4 px-6">Auto Transport (Open Carrier)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium text-slate-800">
                  <tr>
                    <td className="py-3.5 px-6 font-bold">Gasoline / Fuel</td>
                    <td className="py-3.5 px-6 text-slate-700">$380 – $480 (25 MPG @ $4.00/gal)</td>
                    <td className="py-3.5 px-6 text-emerald-700 font-bold">$0 (Included in quote)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-bold">Hotels &amp; Lodging (4 nights)</td>
                    <td className="py-3.5 px-6 text-slate-700">$500 – $750 ($140/night avg)</td>
                    <td className="py-3.5 px-6 text-emerald-700 font-bold">$0</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-bold">Food &amp; Meals (4–5 days)</td>
                    <td className="py-3.5 px-6 text-slate-700">$200 – $350</td>
                    <td className="py-3.5 px-6 text-emerald-700 font-bold">$0</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-bold">IRS Vehicle Wear &amp; Depreciation</td>
                    <td className="py-3.5 px-6 text-slate-700">$1,625 (2,500 mi x $0.65/mi)</td>
                    <td className="py-3.5 px-6 text-emerald-700 font-bold">$0 (0 miles added)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-bold">One-Way Flight Back (if returning)</td>
                    <td className="py-3.5 px-6 text-slate-700">$150 – $350</td>
                    <td className="py-3.5 px-6 text-emerald-700 font-bold">$0</td>
                  </tr>
                  <tr className="bg-slate-100 font-extrabold text-sm">
                    <td className="py-4 px-6 text-slate-900">Total True Cost</td>
                    <td className="py-4 px-6 text-red-600">$2,855 – $3,555</td>
                    <td className="py-4 px-6 text-emerald-700">$1,100 – $1,450</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black mb-4">Calculate Your Exact Shipping Cost</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-medium">
              Don&apos;t spend 4–5 exhausting days behind the wheel adding thousands of wear miles to your car. Calculate your exact route price in 30 seconds.
            </p>
            <Link href="/tools/car-shipping-cost-calculator" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#FF852d] text-white px-6 py-3.5 rounded-xl font-extrabold text-sm shadow-md">
              Calculate Car Shipping Cost →
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
