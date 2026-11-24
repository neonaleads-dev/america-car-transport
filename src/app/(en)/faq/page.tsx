import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import FAQHubClient from "@/components/faq/FAQHubClient";
import { MASTER_FAQ_CATEGORIES } from "@/data/faqs";
import { HelpCircle, Phone } from "lucide-react";

import SiteHeader from "@/components/layout/SiteHeader";
export const metadata = {
  title: "Car Shipping FAQ Hub | Complete Auto Transport Knowledge Base",
  description: "Find direct, expert answers to every auto transport question — car shipping costs, California state rules, scam protection, carrier insurance, and route transit times.",
  alternates: {
    canonical: "https://www.americacartransport.com/faq",
  },
  openGraph: {
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "America Car Transport car shipping" }],
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
      <SiteHeader active="faq" />

      {/* Hero */}
      <section className="relative px-4 md:px-8 lg:px-24 pt-10 pb-16 bg-paper bg-grid-pattern border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="act-eyebrow !mb-5">Central Auto Shipping Knowledge Base</p>

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
