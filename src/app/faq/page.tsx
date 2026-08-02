import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import FAQHubClient from "@/components/faq/FAQHubClient";
import { MASTER_FAQ_CATEGORIES } from "@/data/faqs";
import { HelpCircle, Phone } from "lucide-react";

export const metadata = {
  title: "Car Shipping FAQ Hub | Complete Auto Transport Knowledge Base",
  description: "Find direct, expert answers to every auto transport question — car shipping costs, California state rules, scam protection, carrier insurance, and route transit times.",
  alternates: {
    canonical: "https://www.americacartransport.com/faq",
  },
  openGraph: {
    title: "Car Shipping FAQ Hub | Complete Auto Transport Knowledge Base",
    description: "Find direct, expert answers to every auto transport question — car shipping costs, California state rules, scam protection, carrier insurance, and route transit times.",
    url: "https://www.americacartransport.com/faq",
    siteName: "America Car Transport",
    type: "website",
  },
};

export default function FAQHubPage() {
  const allFaqsFlat = MASTER_FAQ_CATEGORIES.flatMap((cat) => cat.faqs);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://www.americacartransport.com/faq#faqpage",
        "mainEntity": allFaqsFlat.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.americacartransport.com/faq#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com/" },
          { "@type": "ListItem", "position": 2, "name": "FAQ Hub", "item": "https://www.americacartransport.com/faq" }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Header */}
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
            <Link href="/routes" className="hover:text-blue-600 transition-colors">Routes</Link>
            <Link href="/resources" className="hover:text-blue-600 transition-colors">Resources</Link>
            <Link href="/faq" className="text-blue-600 font-bold">FAQ Hub</Link>
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

      {/* Hero */}
      <section className="relative px-4 md:px-8 lg:px-24 pt-10 pb-16 bg-[#F8FAFC] bg-grid-pattern border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-800 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-blue-200/80 shadow-sm">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            Central Auto Shipping Knowledge Base
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-5">
            Car Shipping FAQ Hub
          </h1>

          <p className="text-base md:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
            Direct, expert answers to every auto transport question — categorized by cost, state logistics, route transit times, licensing, and vehicle prep.
          </p>
        </div>
      </section>

      {/* Interactive FAQ Client Section */}
      <FAQHubClient categories={MASTER_FAQ_CATEGORIES} />

      <Footer />
    </main>
  );
}
