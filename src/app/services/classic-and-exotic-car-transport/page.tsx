import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import AnimatedSection, { AnimatedCard } from "@/components/ui/AnimatedSection";
import { ShieldCheck, Award, Clock, DollarSign, ArrowRight, CheckCircle2, Phone, HelpCircle, MapPin, Truck, ChevronDown, Lock, Sparkles, Shield, Eye, Layers } from "lucide-react";

export const metadata = {
  title: "Classic & Exotic Car Transport | White-Glove Shipping",
  description: "Ship your classic, antique, or exotic car with specialized enclosed transport — agreed-value insurance matching, liftgate loading, hard-sided trailers.",
  alternates: {
    canonical: "https://www.americacartransport.com/services/classic-and-exotic-car-transport",
  },
};

const FAQS = [
  {
    question: "How much does it cost to ship a classic car?",
    answer: "Open transport for a classic car typically costs $500 to $1,500 for regional and cross-country moves. Enclosed transport for classic vehicles typically ranges from $1,200 to $2,200, depending on route distance and vehicle specifications."
  },
  {
    question: "How much does it cost to ship an exotic car?",
    answer: "Cross-country enclosed transport for an exotic or low-clearance supercar typically costs $2,200 to $3,100. This rate reflects specialized hydraulic liftgate equipment, hard-sided trailer protection, and high-value cargo insurance matching."
  },
  {
    question: "Do I need special insurance to ship an exotic car?",
    answer: "Yes, it is essential to confirm two layers: your own collector policy's agreed-value transit coverage (confirm directly with your insurer) and the carrier's primary cargo insurance limit to ensure it matches your vehicle's actual market or restoration value."
  },
  {
    question: "What is liftgate loading?",
    answer: "Liftgate loading uses a hydraulic platform that lowers completely flat to ground level, allowing low-ground-clearance vehicles (< 4 inches) to roll on level without experiencing incline ramp angles that can scrape front splitters or undercarriage components."
  },
  {
    question: "Is enclosed transport necessary for a classic car?",
    answer: "It is strongly recommended. Hard-sided enclosed transport shields original paint, numbers-matching restoration work, and delicate chrome trim from road debris, weather, rock chips, and moisture exposure during transit."
  }
];

export default function ClassicAndExoticCarTransportPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.americacartransport.com/services/classic-and-exotic-car-transport#webpage",
        "url": "https://www.americacartransport.com/services/classic-and-exotic-car-transport",
        "name": "Classic & Exotic Car Transport | White-Glove Shipping",
        "description": "Specialized enclosed transport for classic, antique, and exotic vehicles, including liftgate loading and agreed-value insurance matching.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.americacartransport.com/#website",
          "name": "America Car Transport",
          "url": "https://www.americacartransport.com"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.americacartransport.com/services/classic-and-exotic-car-transport#service",
        "serviceType": "Classic and Exotic Car Transport",
        "name": "Classic & Exotic Car Transport",
        "description": "Specialized enclosed transport for classic, antique, and exotic vehicles, including liftgate loading and agreed-value insurance matching.",
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
        "areaServed": { "@type": "Country", "name": "United States" },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "1200",
          "highPrice": "3100"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.americacartransport.com/services/classic-and-exotic-car-transport#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.americacartransport.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Classic & Exotic Car Transport", "item": "https://www.americacartransport.com/services/classic-and-exotic-car-transport" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.americacartransport.com/services/classic-and-exotic-car-transport#faq",
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
            <Link href="/services" className="text-blue-600 font-bold">Services</Link>
            <Link href="/locations" className="hover:text-blue-600 transition-colors">Locations</Link>
            <Link href="/routes" className="hover:text-blue-600 transition-colors">Routes</Link>
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple-50 text-purple-900 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-purple-200/80 shadow-sm">
              <Sparkles className="w-4 h-4 text-purple-600" />
              Specialized Enclosed Luxury &amp; Restoration Logistics
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.8rem] leading-[1.1] font-black text-slate-900 tracking-tight mb-5">
              Classic &amp; Exotic Car Transport: White-Glove Shipping
            </h1>

            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mb-6">
              Specialized enclosed transport built for numbers-matching restorations, low-clearance supercars, and high-value collector automobiles.
            </p>

            {/* Direct Answer Box */}
            <div className="bg-white border-l-4 border-purple-600 p-5 rounded-r-2xl border-y border-r border-slate-200 shadow-sm text-xs md:text-sm text-slate-700 font-medium leading-relaxed mb-8">
              <strong>What Makes This Different:</strong> Classic and exotic car transport differs from standard enclosed transport primarily in equipment and insurance matching—hard-sided trailers instead of soft-sided, hydraulic liftgate loading for low-clearance vehicles (&lt; 4 inches), and cargo insurance confirmed against the vehicle&apos;s actual agreed value.
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 max-w-xl">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase">Classic Enclosed</div>
                <div className="text-xl font-black text-slate-900">$1,200 – $2,200</div>
                <div className="text-[11px] text-purple-700 font-semibold mt-0.5">Hard-Sided Trailer</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase">Exotic Supercar</div>
                <div className="text-xl font-black text-purple-700">$2,200 – $3,100</div>
                <div className="text-[11px] text-blue-700 font-semibold mt-0.5">Hydraulic Liftgate</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase">Cargo Insurance</div>
                <div className="text-xl font-black text-emerald-700">$500,000</div>
                <div className="text-[11px] text-emerald-800 font-semibold mt-0.5">Agreed-Value Match</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Quote Calculator Widget */}
          <AnimatedSection direction="up" delay={0.2} className="lg:col-span-5 flex justify-center lg:justify-end">
            <QuoteCalculator />
          </AnimatedSection>

        </div>
      </section>

      {/* Vehicle Classification Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          
          <AnimatedSection direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <Layers className="w-4 h-4 text-purple-600" />
                Vehicle Categorization
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                What Counts as a Classic or Exotic Vehicle?
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-8 h-8 bg-purple-600 text-white font-black text-sm rounded-xl flex items-center justify-center mb-3">
                01
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-1">Classic Vehicles</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Generally 25–30+ years old. Requires climate and debris protection to preserve original paint, trim, and mechanical integrity.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-8 h-8 bg-purple-600 text-white font-black text-sm rounded-xl flex items-center justify-center mb-3">
                02
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-1">Antique Vehicles</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Generally 45+ years old. Numbers-matching restorations and rare collector models warranting white-glove wheel-only tie-downs.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-8 h-8 bg-purple-600 text-white font-black text-sm rounded-xl flex items-center justify-center mb-3">
                03
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-1">Exotic Supercars</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Low-clearance, high-performance vehicles (Ferrari, Lamborghini, Porsche GT) requiring horizontal hydraulic liftgate loading.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-8 h-8 bg-purple-600 text-white font-black text-sm rounded-xl flex items-center justify-center mb-3">
                04
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-1">Modern Luxury</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Low-mileage high-value vehicles (Bentley, Rolls-Royce, Aston Martin) requiring maximum privacy and zero road spray.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Pricing Comparison Matrix */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          
          <AnimatedSection direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <DollarSign className="w-4 h-4 text-emerald-600" />
                Real 2026 Rate Benchmarks
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Classic &amp; Exotic Car Transport Pricing Matrix
              </h2>
              <p className="text-base text-slate-600 font-medium mt-2">
                Cross-country estimates comparing standard open vs. specialized enclosed liftgate rates.
              </p>
            </div>
          </AnimatedSection>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm mb-8 max-w-4xl mx-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                  <th className="py-4 px-6">Vehicle Type</th>
                  <th className="py-4 px-6">Transport Method</th>
                  <th className="py-4 px-6">Typical Cost (Cross-Country)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm font-semibold text-slate-800">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">Classic Car (Standard Clearance)</td>
                  <td className="py-4 px-6 text-slate-600">Open Carrier</td>
                  <td className="py-4 px-6 font-bold text-emerald-700">$500 – $1,500</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">Classic Car (Restoration / Collector)</td>
                  <td className="py-4 px-6 text-purple-700 font-bold">Enclosed Trailer</td>
                  <td className="py-4 px-6 font-bold text-purple-700">$1,200 – $2,200</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">Exotic / Low-Clearance Supercar (&lt;4&quot;)</td>
                  <td className="py-4 px-6 text-purple-700 font-bold">Enclosed + Hydraulic Liftgate</td>
                  <td className="py-4 px-6 font-bold text-purple-700">$2,200 – $3,100</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-purple-50 border border-purple-200 p-5 rounded-2xl text-xs md:text-sm text-slate-700 leading-relaxed font-medium max-w-4xl mx-auto">
            <strong>Exotic Rate Premium Note:</strong> Enclosed transport for exotic-grade vehicles typically runs 50–60% above open-carrier rates for the same route—reflecting the specialized hydraulic liftgate equipment and higher cargo insurance matched to the vehicle&apos;s value.
          </div>

        </div>
      </section>

      {/* Agreed-Value Insurance Deep Dive */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl max-w-4xl mx-auto shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              Insurance &amp; Risk Protection
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
              Do I Need Special Insurance to Ship an Exotic or Classic Car?
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed font-medium mb-4">
              Your own collector-car insurance policy (Hagerty, Grundy, Condon Skelly) operates on an <strong>agreed-value basis</strong>—meaning you and your insurer agreed on a specific payout value in advance, rather than a depreciated market value. Many collector policies extend coverage during transit, but this should be confirmed directly with your insurer before shipping.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed font-medium mb-4">
              Separately, the carrier&apos;s own primary cargo insurance should be confirmed to match your vehicle&apos;s value. Standard open-carrier policies capped at $100,000 may fall well short of a numbers-matching classic or exotic supercar. America Car Transport verifies that every enclosed carrier assigned to your vehicle carries up to <strong>$500,000 in primary cargo insurance</strong>.
            </p>
            <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-4 text-xs font-bold">
              <Link href="/licensing-insurance" className="text-blue-700 underline hover:text-blue-800">
                Read Full Licensing &amp; Insurance Details ➔
              </Link>
              <Link href="/resources/how-to-avoid-car-shipping-scams" className="text-blue-700 underline hover:text-blue-800">
                View Scam Avoidance Guide ➔
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Trust Anchors */}
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
                Verify Credentials ➔
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <Lock className="w-8 h-8 text-emerald-600 mb-3" />
              <h3 className="font-extrabold text-slate-900 text-lg mb-2">$0 Upfront Deposit</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                We never charge upfront fees. You only pay after your vehicle is matched and scheduled with a verified enclosed carrier.
              </p>
              <Link href="/resources/how-to-avoid-car-shipping-scams" className="text-xs font-bold text-blue-600 hover:underline mt-3 inline-block">
                Read Scam Prevention Guide ➔
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <Award className="w-8 h-8 text-amber-500 mb-3" />
              <h3 className="font-extrabold text-slate-900 text-lg mb-2">4.9 ★ Customer Rating</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Over 10,450+ verified customer reviews across Google &amp; BBB. Read real collector feedback.
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
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-4 h-4 text-purple-600" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Classic &amp; Exotic Shipping FAQs
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
