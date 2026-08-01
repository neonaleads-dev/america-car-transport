import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import AnimatedSection, { AnimatedCard } from "@/components/ui/AnimatedSection";
import { ShieldCheck, Award, Lock, CheckCircle2, FileText, ExternalLink, AlertTriangle, Phone, HelpCircle, ChevronDown } from "lucide-react";

export const metadata = {
  title: "Licensing & Insurance | FMCSA USDOT #3849102 MC #1098472 | America Car Transport",
  description: "Verify America Car Transport FMCSA licensing, USDOT #3849102, MC #1098472, $75K surety bond, and cargo insurance rules. Zero upfront deposit guarantee.",
  alternates: {
    canonical: "https://americacartransport.com/licensing-insurance",
  },
};

const FAQS = [
  {
    question: "How can I verify America Car Transport's FMCSA license?",
    answer: "You can verify our active federal license anytime on the official USDOT SAFER (Safety and Fitness Electronic Records) system using USDOT #3849102 or MC #1098472."
  },
  {
    question: "How much cargo insurance covers my vehicle during transit?",
    answer: "Standard open carrier transports carry up to $100,000 in primary cargo insurance per vehicle. Enclosed carriers carry up to $500,000 in comprehensive cargo coverage. America Car Transport also maintains contingent insurance backing for 100% peace of mind."
  },
  {
    question: "Do I have to pay any deposit upfront before a carrier is assigned?",
    answer: "No. America Car Transport operates under a strict Zero Upfront Deposit policy. You only pay after your vehicle is dispatched and assigned to a verified, insured carrier."
  },
  {
    question: "What is a Bill of Lading (BOL) and why is it mandatory?",
    answer: "The Bill of Lading is your official legal contract and inspection report. Before loading, the driver inspects your vehicle with you and records all existing conditions. Upon delivery, you re-inspect your car before signing off."
  }
];

export default function LicensingInsurancePage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://americacartransport.com/licensing-insurance#webpage",
        "url": "https://americacartransport.com/licensing-insurance",
        "name": "Licensing & Insurance | FMCSA USDOT #3849102",
        "description": "Official FMCSA licensing, USDOT registration, surety bond, and cargo insurance compliance for America Car Transport.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://americacartransport.com/#website",
          "name": "America Car Transport",
          "url": "https://americacartransport.com"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://americacartransport.com/#organization",
        "name": "America Car Transport",
        "url": "https://americacartransport.com",
        "telephone": "(530) 725-5383",
        "identifier": [
          {
            "@type": "PropertyValue",
            "propertyID": "USDOT",
            "value": "3849102"
          },
          {
            "@type": "PropertyValue",
            "propertyID": "MC",
            "value": "1098472"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://americacartransport.com/licensing-insurance#faq",
        "mainEntity": FAQS.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://americacartransport.com/licensing-insurance#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://americacartransport.com" },
          { "@type": "ListItem", "position": 2, "name": "Licensing & Insurance", "item": "https://americacartransport.com/licensing-insurance" }
        ]
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

      {/* Navigation Header */}
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
            <Link href="/#why-us" className="hover:text-blue-600 transition-colors">Why Us</Link>
            <Link href="/licensing-insurance" className="text-blue-600 font-bold">Licensing &amp; Insurance</Link>
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

      {/* Visual Breadcrumb Bar */}
      <div className="bg-slate-900 border-b border-slate-800 py-3 px-4 md:px-8 text-xs font-semibold text-slate-400">
        <div className="max-w-[1400px] mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <span className="text-slate-700">/</span>
          <span className="text-white font-bold">Licensing &amp; Insurance</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 lg:px-24 pt-10 pb-16 bg-[#F8FAFC] bg-grid-pattern border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <AnimatedSection direction="up" className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 text-emerald-800 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-emerald-200/80 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Official FMCSA Licensed &amp; Bonded Auto Transport Broker
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.8rem] leading-[1.1] font-black text-slate-900 tracking-tight mb-5">
              Verified FMCSA Licensing, Insurance &amp; Scam Protection
            </h1>

            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mb-8">
              America Car Transport operates under strict Federal Motor Carrier Safety Administration regulations. Zero upfront deposits, $75,000 surety bond protection, and up to $500,000 in primary cargo insurance.
            </p>

            {/* Credential Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
              <AnimatedCard delay={0.1}>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-xs text-slate-500 font-bold uppercase">USDOT Number</div>
                  <div className="text-xl font-black text-blue-600">3849102</div>
                  <div className="text-[11px] text-emerald-700 font-semibold mt-1">✓ Active Status</div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-xs text-slate-500 font-bold uppercase">MC Docket #</div>
                  <div className="text-xl font-black text-blue-600">1098472</div>
                  <div className="text-[11px] text-emerald-700 font-semibold mt-1">✓ Property Broker</div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.3}>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-xs text-slate-500 font-bold uppercase">Surety Bond</div>
                  <div className="text-xl font-black text-emerald-700">$75,000</div>
                  <div className="text-[11px] text-slate-500 font-semibold mt-1">BMC-84 Secured</div>
                </div>
              </AnimatedCard>
            </div>
          </AnimatedSection>

          {/* Right Quote Widget */}
          <AnimatedSection direction="up" delay={0.2} className="lg:col-span-5 flex justify-center lg:justify-end">
            <QuoteCalculator />
          </AnimatedSection>

        </div>
      </section>

      {/* Federal SAFER Verification Banner */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-24">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
                  <Lock className="w-4 h-4" />
                  Federal Government SAFER Registry
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">
                  Verify Our Active FMCSA License Online
                </h2>
                <p className="text-sm text-slate-300 font-medium leading-relaxed">
                  Before booking with any car shipping company, always verify their credentials directly on the U.S. Department of Transportation SAFER system.
                </p>
              </div>

              <a
                href="https://safer.fmcsa.dot.gov/CompanySnapshot.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm transition-colors flex items-center gap-2 shrink-0 shadow-md hover:shadow-lg"
              >
                Verify USDOT #3849102 on SAFER
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Insurance Coverage Rules */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-24">
          
          <AnimatedSection direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <Award className="w-4 h-4 text-blue-600" />
                Complete Vehicle Protection Guarantee
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Insurance Coverage &amp; Carrier Vetting Protocol
              </h2>
              <p className="text-base text-slate-600 font-medium mt-2">
                Every vehicle shipped through America Car Transport is protected by primary cargo insurance and strict 5-point carrier background checks.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <AnimatedCard delay={0.1}>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-black text-lg mb-4">
                    100K
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg mb-2">Open Carrier Insurance</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Standard open transport carriers carry up to $100,000 in primary cargo insurance per vehicle covering collision, fire, and structural transport damage.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-bold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  Zero Deductible to You
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center font-black text-lg mb-4">
                    500K
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg mb-2">Enclosed Carrier Insurance</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Enclosed transport carriers carry up to $500,000 in specialized cargo insurance tailored for exotic, luxury, classic, and high-value vehicles.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-bold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  High-Value Collector Coverage
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-black text-lg mb-4">
                    $0
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg mb-2">Zero Upfront Deposit</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    We never ask for money before a carrier is dispatched and assigned. Your payment is held safely until pickup is scheduled.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-bold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  100% Scam-Free Guarantee
                </div>
              </div>
            </AnimatedCard>

          </div>

        </div>
      </section>

      {/* Scam Prevention Guide */}
      <section className="py-16 bg-white border-b border-slate-200 font-sans">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              Consumer Protection Guide
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              5 Red Flags of Car Shipping Scams
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium mt-2">
              Protect yourself from unverified lead generators and bait-and-switch brokers.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
              <h3 className="font-extrabold text-slate-900 text-base mb-1 flex items-center gap-2">
                <span className="text-amber-600">1.</span> Demanding upfront deposits before carrier assignment
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Legitimate brokers like America Car Transport do not charge non-refundable upfront fees before locking in a carrier.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
              <h3 className="font-extrabold text-slate-900 text-base mb-1 flex items-center gap-2">
                <span className="text-amber-600">2.</span> Quotes that are 40% below market average (Bait-and-Switch)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Unscrupulous companies quote unrealistically low rates to get you to sign, then demand several hundred dollars more when no carrier accepts the low pay.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
              <h3 className="font-extrabold text-slate-900 text-base mb-1 flex items-center gap-2">
                <span className="text-amber-600">3.</span> Missing or inactive USDOT / MC License numbers
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Always demand USDOT and MC docket numbers and verify them on SAFER. America Car Transport displays USDOT #3849102 on every page.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Licensing FAQs */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Licensing &amp; Insurance FAQs
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 group shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-extrabold text-slate-900 text-base cursor-pointer">
                  <span>{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-2" />
                </summary>
                <p className="text-sm text-slate-600 leading-relaxed font-medium mt-3 pt-3 border-t border-slate-100">
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
