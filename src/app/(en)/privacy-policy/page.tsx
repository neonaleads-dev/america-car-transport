import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";

import SiteHeader from "@/components/layout/SiteHeader";
export const metadata = {
  title: "Privacy Policy | America Car Transport",
  description: "Privacy Policy for America Car Transport — Learn how we protect your personal information, quote data, and communications.",
  alternates: {
    canonical: "https://www.americacartransport.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.americacartransport.com/privacy-policy#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com" },
          { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://www.americacartransport.com/privacy-policy" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.americacartransport.com/privacy-policy#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How is customer data protected at America Car Transport?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "All quote data is encrypted using 256-bit SSL protocols. We do not sell customer contact information to third-party telemarketers."
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
          <span className="text-white font-bold">Privacy Policy</span>
        </div>
      </div>

      {/* Main Privacy Policy Document */}
      <section className="py-16 px-4 md:px-8 lg:px-24 max-w-4xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 text-sm leading-relaxed">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 font-bold uppercase">Last Updated: 2026</p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">1. Information We Collect</h2>
          <p>
            When you request an auto shipping quote through America Car Transport, we collect information necessary to arrange vehicle transportation, including pickup and delivery city/ZIP codes, vehicle make and model, name, phone number, and email address.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">2. How We Use Your Information</h2>
          <p>
            Your information is used exclusively to calculate instant shipping estimates, assign FMCSA-licensed motor carriers, communicate pickup/delivery schedules, and process dispatch paperwork. We do NOT sell your contact information to third-party telemarketers or spam lead generators.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">3. Data Security &amp; Encryption</h2>
          <p>
            We implement strict 256-bit SSL encryption to protect all transmitted data. Your contact details are stored securely on encrypted database servers.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">4. SMS &amp; Email Communications</h2>
          <p>
            By submitting a quote request, you consent to receive transactional notifications, driver assignment updates, and dispatch confirmations via phone, email, or SMS. You may opt out of SMS messages at any time by replying STOP.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-4">5. Contact Us Regarding Your Data</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to request data deletion, please contact us at <a href="mailto:support@americacartransport.com" className="text-blue-700 font-bold underline">support@americacartransport.com</a> or call <a href="tel:5307255383" className="text-blue-700 font-bold underline">(530) 725-5383</a>.
          </p>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
