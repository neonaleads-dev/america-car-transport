import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import { ShieldCheck, AlertTriangle, CheckCircle2, Phone, HelpCircle, ChevronDown, ExternalLink, Award, FileText, ArrowRight, DollarSign, Lock, AlertCircle, Building2 } from "lucide-react";

export const metadata = {
  title: "How to Avoid Car Shipping Scams | Complete 2026 Guide",
  description: "Real answers on car shipping scams, red flags, damage risk, and how to verify a legit company — before you book. Fact-checked, no fear-mongering.",
  alternates: {
    canonical: "https://www.americacartransport.com/resources/how-to-avoid-car-shipping-scams",
  },
  openGraph: {
    title: "How to Avoid Car Shipping Scams | Complete 2026 Guide",
    description: "Real answers on car shipping scams, red flags, damage risk, and how to verify a legit company — before you book. Fact-checked, no fear-mongering.",
    url: "https://www.americacartransport.com/resources/how-to-avoid-car-shipping-scams",
    siteName: "America Car Transport",
    type: "article",
  },
};

const SCAM_FAQS = [
  {
    q: "How do I not get scammed shipping my car?",
    a: "Verify the company's USDOT/MC number directly on the official FMCSA SAFER system, avoid companies demanding large upfront deposits or untraceable payment (wire, Zelle), check reviews across multiple independent platforms, and get a written, itemized quote before booking."
  },
  {
    q: "What is the most reliable car shipping company?",
    a: "Reliability comes down to objective criteria: confirmed FMCSA registration, consistent reviews across independent platforms, a zero or low upfront deposit, and transparent written quotes — not marketing claims."
  },
  {
    q: "What are the risks of shipping a car?",
    a: "The two main risks are getting scammed by an illegitimate broker and minor cosmetic damage in transit. Both are significantly reduced by verifying licensing and choosing enclosed transport for high-value vehicles."
  },
  {
    q: "How do I tell if a car shipping company is legit?",
    a: "Verify their USDOT/MC number on FMCSA's SAFER system, check independent reviews (Google, BBB, Trustpilot), confirm a real physical address and business domain, and request a written itemized quote."
  },
  {
    q: "Do cars get damaged during shipping?",
    a: "Rarely. Fewer than 5% of shipped vehicles report any damage, and the vast majority of cases involve minor cosmetic issues like small scratches or road dust rather than serious structural damage."
  },
  {
    q: "What's the cheapest way to ship a car?",
    a: "Choose open transport over enclosed, terminal-to-terminal delivery over door-to-door, book during off-peak season, and keep your pickup window flexible."
  },
  {
    q: "How do I spot a fake shipping company?",
    a: "Watch for quotes 25–50% below market average, demands for untraceable payment (wire, Zelle, gift cards), requests for full payment before a carrier is assigned, missing FMCSA registration, and high-pressure sales tactics."
  },
  {
    q: "Is it cheaper to drive or ship a car?",
    a: "For most long-distance moves over 1,500 miles, shipping is comparable to or cheaper than driving once fuel, lodging, meals, and vehicle wear are factored in."
  },
  {
    q: "Does my car have to be empty when I ship it?",
    a: "Mostly. Most carriers allow limited personal items, often up to about 100 lbs in the trunk, but the vehicle should otherwise be empty."
  }
];

export default function HowToAvoidCarShippingScamsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.americacartransport.com/resources/how-to-avoid-car-shipping-scams#article",
        "headline": "How Do I Not Get Scammed Shipping My Car? A Complete, Honest Guide",
        "description": "Fact-checked consumer protection guide on car shipping scams, red flags, FMCSA SAFER lookup walkthrough, damage risks, and scam recovery steps.",
        "author": {
          "@type": "Organization",
          "name": "America Car Transport",
          "url": "https://www.americacartransport.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "America Car Transport",
          "url": "https://www.americacartransport.com"
        },
        "datePublished": "2026-07-29",
        "dateModified": "2026-07-29",
        "mainEntityOfPage": "https://www.americacartransport.com/resources/how-to-avoid-car-shipping-scams"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.americacartransport.com/resources/how-to-avoid-car-shipping-scams#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.americacartransport.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Resources",
            "item": "https://www.americacartransport.com/resources"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "How to Avoid Car Shipping Scams",
            "item": "https://www.americacartransport.com/resources/how-to-avoid-car-shipping-scams"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.americacartransport.com/resources/how-to-avoid-car-shipping-scams#faq",
        "mainEntity": SCAM_FAQS.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
            <Link href="/resources" className="hover:text-blue-600 transition-colors">Resources</Link>
            <Link href="/licensing-insurance" className="hover:text-blue-600 transition-colors">Licensing &amp; Insurance</Link>
            <Link href="/reviews" className="hover:text-blue-600 transition-colors">Reviews</Link>
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

      {/* Hero Header */}
      <section className="relative px-4 md:px-8 lg:px-24 pt-10 pb-16 bg-[#F8FAFC] bg-grid-pattern border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto">
          
          {/* Breadcrumb Path */}
          <nav className="flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-500 mb-5">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-blue-600 transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">How to Avoid Car Shipping Scams</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 text-emerald-800 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-emerald-200/80 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Flagship Consumer Protection &amp; Scam Avoidance Guide (2026)
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-5">
            How Do I Not Get Scammed Shipping My Car? A Complete, Honest Guide
          </h1>

          <p className="text-base md:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-8">
            Real risks, real red flags, and exactly how to verify a auto transport company before you hand over your keys or deposit. Fact-checked, transparent, zero fear-mongering.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link 
              href="/licensing-insurance" 
              className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold px-5 py-3 rounded-xl text-xs md:text-sm transition-colors inline-flex items-center gap-2 shadow-md"
            >
              Verify America Car Transport Licensing (USDOT #3849102) →
            </Link>
            <Link 
              href="/reviews" 
              className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-extrabold px-5 py-3 rounded-xl text-xs md:text-sm transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              View Verified Customer Reviews →
            </Link>
          </div>

        </div>
      </section>

      {/* Main Guide Content */}
      <section className="py-16 bg-white border-b border-slate-200 font-sans">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8 space-y-16">
          
          {/* Section 1: Risks */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              What Are the Risks of Shipping a Car?
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              There are really only two categories of risk worth taking seriously when shipping a vehicle: getting scammed by a dishonest broker, and your vehicle sustaining minor cosmetic damage in transit. Both are avoidable with the right precautions, and both are far less common than online horror stories suggest — but they are worth understanding honestly rather than dismissed outright:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                <h3 className="font-extrabold text-slate-900 text-base mb-1 text-red-600 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> 1. Financial &amp; Deposit Scam Risk
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  The more serious of the two, involving deposit fraud, bait-and-switch pricing, or &ldquo;ghost brokers&rdquo; who collect non-refundable fees and never dispatch a carrier.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                <h3 className="font-extrabold text-slate-900 text-base mb-1 text-blue-600 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> 2. Physical Transit Damage Risk
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Statistically low (&lt;5% of all shipments industry-wide), and mostly limited to minor cosmetic issues like road dust or small chips when it does happen.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm">
              <span className="text-blue-900 font-extrabold block text-xs uppercase tracking-wider mb-1">
                ⚡ Direct Answer — Risks of Shipping
              </span>
              The two real risks of shipping a car are getting scammed by an illegitimate broker and minor cosmetic damage in transit. Both risks drop sharply when you verify a company&apos;s FMCSA licensing, avoid large upfront deposits, and choose <Link href="/services/classic-and-exotic-car-transport" className="text-blue-700 font-bold underline hover:text-blue-800">Classic &amp; Exotic Car Transport</Link> or enclosed transport for high-value vehicles.
            </div>
          </article>

          {/* Section 2: How to Tell If a Company Is Legit */}
          <article className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              How to Tell If a Car Shipping Company Is Legit
            </h2>

            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
                <h3 className="font-extrabold text-slate-900 text-lg mb-2 flex items-center gap-2">
                  <span className="w-7 h-7 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xs font-black">1</span>
                  Verify Their USDOT and MC Number on FMCSA&apos;s SAFER System
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                  Every legitimate broker and carrier must be registered with the Federal Motor Carrier Safety Administration (FMCSA). Search the company&apos;s USDOT number on the official FMCSA SAFER Company Snapshot system and confirm the business name, address, and operating status match what the company told you. <Link href="/licensing-insurance" className="text-blue-600 font-bold underline">Verify America Car Transport&apos;s credentials (USDOT #3849102 | MC #1098472)</Link> here as an example.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
                <h3 className="font-extrabold text-slate-900 text-lg mb-2 flex items-center gap-2">
                  <span className="w-7 h-7 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xs font-black">2</span>
                  Check Reviews Across Multiple Independent Platforms
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                  Don&apos;t rely solely on testimonials posted on a company&apos;s own website. Cross-check Google Reviews, the Better Business Bureau (BBB), and Trustpilot. A company with thousands of reviews and a consistently strong (not suspiciously perfect) rating is a stronger signal than a handful of 5-star-only reviews. Explore <Link href="/reviews" className="text-blue-400 font-bold underline text-blue-600">our verified customer reviews</Link>.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
                <h3 className="font-extrabold text-slate-900 text-lg mb-2 flex items-center gap-2">
                  <span className="w-7 h-7 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xs font-black">3</span>
                  Confirm a Real Physical Address and Business Domain
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                  Legitimate companies list a real corporate address and use a professional business email domain — not a free email account (like Gmail or Yahoo) or a P.O. box as their only contact method. Call the listed phone number directly to confirm it connects to a real office.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
                <h3 className="font-extrabold text-slate-900 text-lg mb-2 flex items-center gap-2">
                  <span className="w-7 h-7 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xs font-black">4</span>
                  Get a Written, Itemized Quote
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                  A legitimate company will give you a detailed quote in writing, including total cost, transport type (open or enclosed), and pickup/delivery windows, before you sign anything or pay a single dollar.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm">
              <span className="text-blue-900 font-extrabold block text-xs uppercase tracking-wider mb-1">
                ⚡ Direct Answer — How to Spot a Legit Company
              </span>
              To tell if a car shipping company is legit, verify their USDOT/MC number on FMCSA&apos;s SAFER system, check reviews across multiple independent platforms (not just their own site), confirm a real physical address and business domain, and get a written, itemized quote before booking.
            </div>
          </article>

          {/* Section 3: Red Flags */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              How to Spot a Fake Shipping Company (6 Red Flags)
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              Watch for these major red flags, listed in rough order of severity:
            </p>

            <div className="space-y-3">
              <div className="p-4 bg-red-50/70 border border-red-200 rounded-xl text-xs md:text-sm text-slate-800 font-medium">
                <strong className="text-red-900 font-extrabold">1. An unusually low quote (Bait-and-Switch):</strong> A price 25–50% below the typical market average for your route is one of the most reliable scam indicators; the low price is bait to collect a deposit, followed by demands for hundreds more once your car is stranded.
              </div>
              <div className="p-4 bg-red-50/70 border border-red-200 rounded-xl text-xs md:text-sm text-slate-800 font-medium">
                <strong className="text-red-900 font-extrabold">2. Demands for untraceable payment:</strong> Wire transfers (Western Union), Zelle, gift cards, or cash-only requests are major warning signs. Legitimate companies accept traceable payment methods like credit cards.
              </div>
              <div className="p-4 bg-red-50/70 border border-red-200 rounded-xl text-xs md:text-sm text-slate-800 font-medium">
                <strong className="text-red-900 font-extrabold">3. Full upfront payment before carrier assignment:</strong> Legitimate brokers typically operate under a Zero Upfront Deposit policy, charging nothing until a driver is assigned.
              </div>
              <div className="p-4 bg-red-50/70 border border-red-200 rounded-xl text-xs md:text-sm text-slate-800 font-medium">
                <strong className="text-red-900 font-extrabold">4. No FMCSA registration or mismatched details:</strong> Missing, revoked, or unverified USDOT/MC numbers are an automatic disqualifier.
              </div>
              <div className="p-4 bg-red-50/70 border border-red-200 rounded-xl text-xs md:text-sm text-slate-800 font-medium">
                <strong className="text-red-900 font-extrabold">5. High-pressure sales tactics:</strong> Phrases like &ldquo;this rate expires in 10 minutes&rdquo; or &ldquo;pay now or lose your spot&rdquo; are aggressive tactics, not standard industry practice.
              </div>
              <div className="p-4 bg-red-50/70 border border-red-200 rounded-xl text-xs md:text-sm text-slate-800 font-medium">
                <strong className="text-red-900 font-extrabold">6. Vague contact details:</strong> Companies listing only an online form, no physical corporate address, or a phone line that goes straight to voicemail.
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm">
              <span className="text-red-900 font-extrabold block text-xs uppercase tracking-wider mb-1">
                🚨 Direct Answer — Fake Company Red Flags
              </span>
              The clearest signs of a fake shipping company are a quote significantly below market average, demands for untraceable payment, requests for full payment before a carrier is assigned, and missing or mismatched FMCSA registration.
            </div>
          </article>

          {/* Section 4: Most Reliable Company */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              What Is the Most Reliable Car Shipping Company?
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              There is no single objectively &ldquo;most reliable&rdquo; company — reliability depends on objective, verifiable criteria you can check yourself, not marketing claims. Use this checklist for any company you are considering:
            </p>

            <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-3 text-xs md:text-sm font-medium">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Verifiable USDOT and MC number on FMCSA&apos;s SAFER system</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Consistent, high-volume reviews across independent platforms (BBB, Google, Trustpilot)</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Zero or minimal upfront deposit required</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Transparent, written, itemized quotes with no hidden fees</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Clear answers about primary carrier insurance coverage limits ($100k-$500k)</span>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm">
              <span className="text-blue-900 font-extrabold block text-xs uppercase tracking-wider mb-1">
                ⚡ Direct Answer — Defining Reliability
              </span>
              The most reliable car shipping company is the one that passes objective verification, not the one with the flashiest marketing — verifiable FMCSA registration, consistent independent reviews, a zero or low upfront deposit, and transparent written quotes are the criteria that actually matter.
            </div>

            <p className="text-xs md:text-sm text-slate-600 font-medium">
              America Car Transport is fully licensed and bonded — <strong>USDOT #3849102, MC #1098472</strong> — with zero upfront deposit required. <Link href="/licensing-insurance" className="text-blue-600 font-bold underline">Verify our credentials directly on our Licensing Page</Link>.
            </p>
          </article>

          {/* Section 5: Damage Stats */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Do Cars Get Damaged During Shipping?
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              Rarely, and usually only in minor ways. Multiple independent industry sources consistently report that <strong>fewer than 5% of shipped vehicles experience any reported damage</strong>, and the vast majority of those cases involve minor cosmetic issues — small scratches, rock chips, or road dust — rather than serious structural damage. Severe damage is statistically rare and typically tied to extreme weather events.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                <h3 className="font-extrabold text-slate-900 text-base mb-1">Open vs. Enclosed Transport Risk</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Open transport exposes vehicles to weather and road debris. <Link href="/services/enclosed-auto-transport" className="text-blue-600 font-bold underline">Enclosed Auto Transport</Link> eliminates weather exposure completely and is recommended for luxury or exotic cars.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                <h3 className="font-extrabold text-slate-900 text-base mb-1">Inspection &amp; Bill of Lading</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Most damage occurs during loading or unloading. A documented joint inspection on the Bill of Lading (BOL) at both pickup and delivery guarantees full insurance coverage.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm">
              <span className="text-blue-900 font-extrabold block text-xs uppercase tracking-wider mb-1">
                ⚡ Direct Answer — Damage Statistics
              </span>
              Fewer than 5% of shipped vehicles experience any reported damage, and most of those cases are minor cosmetic issues like small scratches or rock chips rather than serious damage. Choosing enclosed transport and confirming a documented inspection at pickup and delivery further reduces risk.
            </div>
          </article>

          {/* Section 6: Cheapest Way */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              What&apos;s the Cheapest Way to Ship a Car?
            </h2>
            <ul className="space-y-2 text-xs md:text-sm text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Choose Open Transport:</strong> Standard multi-car haulers are the most affordable method (see <Link href="/services/open-auto-transport" className="text-blue-600 font-bold underline">Open Auto Transport</Link>).</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Choose Terminal-to-Terminal:</strong> Drop off and pick up at a carrier yard to save $100–$300 (see <Link href="/services/terminal-to-terminal-shipping" className="text-blue-600 font-bold underline">Terminal-to-Terminal Shipping</Link>).</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Book Off-Peak:</strong> Avoid peak summer and winter snowbird seasons when demand spikes.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Keep Dates Flexible:</strong> A 3–5 day pickup window yields lower carrier rates than exact-day dispatches.</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link href="/tools/car-shipping-cost-calculator" className="text-blue-600 font-extrabold text-sm underline flex items-center gap-1">
                See exact pricing for your route with our Car Shipping Cost Calculator →
              </Link>
            </div>
          </article>

          {/* Section 7: Already Scammed Recovery */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              What If I&apos;ve Already Been Scammed? (Recovery Steps)
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              If you believe you have encountered a car shipping scam or deposit fraud, act immediately:
            </p>

            <div className="space-y-3">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs md:text-sm text-slate-800 font-medium">
                <strong className="text-slate-900 font-extrabold">1. Contact Your Bank or Card Issuer Immediately:</strong> If paid via credit or debit card, file an immediate chargeback for services not rendered.
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs md:text-sm text-slate-800 font-medium">
                <strong className="text-slate-900 font-extrabold">2. File an FMCSA Complaint:</strong> Report the fraudulent company through the official <a href="https://nccdb.fmcsa.dot.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold underline">FMCSA National Consumer Complaint Database (NCCDB)</a>.
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs md:text-sm text-slate-800 font-medium">
                <strong className="text-slate-900 font-extrabold">3. Report to the BBB &amp; IC3:</strong> File complaints with the Better Business Bureau and the FBI&apos;s <a href="https://www.ic3.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold underline">Internet Crime Complaint Center (IC3)</a> for wire fraud.
              </div>
            </div>
          </article>

          {/* Section 8: Why Ship With America Car Transport */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950 text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-blue-500/30">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                Verified Licensed Broker Network
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4">
                Why Ship With America Car Transport?
              </h2>
              
              <ul className="space-y-3 text-xs md:text-sm text-slate-200 font-medium mb-8">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span><strong>Fully Licensed &amp; Bonded:</strong> USDOT #3849102, MC #1098472 active on FMCSA SAFER.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span><strong>Zero Upfront Deposit:</strong> You pay nothing until your carrier is assigned and scheduled.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span><strong>Transparent Written Quotes:</strong> Fixed rates with zero hidden fees or surprise upcharges.</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/tools/car-shipping-cost-calculator" 
                  className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] text-white px-6 py-3.5 rounded-xl font-extrabold text-xs md:text-sm shadow-md"
                >
                  Get Instant Quote →
                </Link>
                <Link 
                  href="/licensing-insurance" 
                  className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-xl font-extrabold text-xs md:text-sm shadow-md"
                >
                  Verify Credentials →
                </Link>
              </div>
            </div>
          </div>

          {/* Section 9: FAQ Accordion */}
          <div className="pt-8">
            <div className="text-center max-w-xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                Frequently Asked Questions
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Scam Prevention &amp; Trust FAQs
              </h2>
            </div>

            <div className="space-y-3">
              {SCAM_FAQS.map((faq, idx) => (
                <details key={idx} className="bg-slate-50 rounded-2xl border border-slate-200 p-4 group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between font-extrabold text-slate-900 text-sm md:text-base cursor-pointer">
                    <span>{faq.q}</span>
                    <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-2" />
                  </summary>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium mt-3 pt-3 border-t border-slate-200/80">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
