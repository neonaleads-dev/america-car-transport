import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";

import SiteHeader from "@/components/layout/SiteHeader";
export const metadata = {
  title: "Terms & Conditions | America Car Transport",
  description: "Terms and Conditions of Service for America Car Transport — Property broker logistics terms, cargo insurance, zero deposit policy, and cancellation policy.",
  alternates: {
    canonical: "https://www.americacartransport.com/terms",
  },
};

export default function TermsPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.americacartransport.com/terms#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com" },
          { "@type": "ListItem", "position": 2, "name": "Terms & Conditions", "item": "https://www.americacartransport.com/terms" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.americacartransport.com/terms#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is America Car Transport's deposit policy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "America Car Transport operates under a strict Zero Upfront Deposit policy. No deposit is collected until a verified carrier is dispatched to your order."
            }
          }
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

      {/* Header Navigation */}
      <SiteHeader />

      {/* Visual Breadcrumb Bar */}
      <div className="bg-slate-900 border-b border-slate-800 py-3 px-4 md:px-8 text-xs font-semibold text-slate-400">
        <div className="max-w-[1400px] mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <span className="text-slate-700">/</span>
          <span className="text-white font-bold">Terms &amp; Conditions</span>
        </div>
      </div>

      {/* Main Terms & Conditions Document */}
      <section className="py-16 px-4 md:px-8 lg:px-24 max-w-4xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 text-sm leading-relaxed">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Terms &amp; Conditions of Service
          </h1>
          <p className="text-xs text-slate-500 font-bold uppercase">Last Updated: 2026</p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">1. Property Broker Authority</h2>
          <p>
            America Car Transport operates as a licensed and bonded property broker (We are a licensed auto transport broker) authorized by the Federal Motor Carrier Safety Administration (FMCSA). As a broker, we arrange vehicle transportation with independent, fully insured motor carriers.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">2. Zero Upfront Deposit &amp; Payment Terms</h2>
          <p>
            We operate under a strict Zero Upfront Deposit policy. No deposit is collected until a verified carrier is assigned and dispatched to your order. Remaining balances are payable upon delivery directly to the carrier via cash, cashier&apos;s check, or money order.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">3. Carrier Cargo Insurance &amp; Inspections</h2>
          <p>
            All assigned motor carriers carry primary cargo insurance ($100,000 for open carriers, up to $500,000 for enclosed carriers). Both customer and driver must inspect the vehicle and sign a Bill of Lading (BOL) at pickup and delivery. Any pre-existing damage or transit claims must be noted on the destination BOL.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">4. Cancellation &amp; Refund Policy</h2>
          <p>
            You may cancel your shipping order at any time prior to carrier assignment with zero penalty. If an order is cancelled after a carrier has dispatched to pickup, a standard administrative processing fee may apply.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">5. Contact Information</h2>
          <p>
            For questions regarding these Terms &amp; Conditions, please reach our dispatch office at <a href="tel:5307255383" className="text-blue-700 font-bold underline">(530) 725-5383</a> or email <a href="mailto:support@americacartransport.com" className="text-blue-700 font-bold underline">support@americacartransport.com</a>.
          </p>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
