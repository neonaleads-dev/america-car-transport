import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import AnimatedSection, { AnimatedCard } from "@/components/ui/AnimatedSection";
import { ShieldCheck, Award, Clock, Users, Building, Phone, ArrowRight, CheckCircle2, Lock, HeartHandshake } from "lucide-react";

import SiteHeader from "@/components/layout/SiteHeader";
export const metadata = {
  title: "About Us | America Car Transport — Nationwide Auto Shipping Broker",
  description: "Learn about America Car Transport — FMCSA licensed & bonded property broker providing zero deposit door-to-door auto transport nationwide.",
  alternates: {
    canonical: "https://www.americacartransport.com/about",
  },
};

export default function AboutPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://www.americacartransport.com/about#webpage",
        "url": "https://www.americacartransport.com/about",
        "name": "About Us | America Car Transport",
        "description": "Nationwide licensed and bonded auto transport broker network.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.americacartransport.com/#website",
          "name": "America Car Transport",
          "url": "https://www.americacartransport.com"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.americacartransport.com/about#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com" },
          { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.americacartransport.com/about" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.americacartransport.com/about#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who is America Car Transport?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "America Car Transport is an FMCSA licensed and bonded property broker (We are a licensed auto transport broker) providing door-to-door vehicle shipping across all 50 U.S. states with zero upfront deposit."
            }
          },
          {
            "@type": "Question",
            "name": "Are carrier drivers insured?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Every carrier in our network is screened for active FMCSA safety authority and carries primary cargo insurance ($100,000 for open carriers, up to $500,000 for enclosed carriers)."
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
          <span className="text-white font-bold">About Us</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 lg:px-24 pt-12 pb-20 bg-paper bg-grid-pattern border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1200px] mx-auto text-center">
          <AnimatedSection direction="up">
            <p className="act-eyebrow !mb-5">FMCSA Bonded &amp; Insured Broker</p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto">
              America Car Transport: Transparent, Reliable Vehicle Shipping
            </h1>

            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto mb-8">
              We connect vehicle owners with vetted, highly insured motor carriers across all 50 U.S. states. Operating with $0 upfront deposit and full licensing transparency.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Core Values */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">100% Verified Credentials</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                We operate as a fully licensed Property Broker with a $75,000 BMC-84 Surety Bond. Every truck assigned to your vehicle is screened for active FMCSA safety authority and cargo insurance.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <Lock className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Zero Upfront Deposit</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                You never pay a single dollar upfront. Your deposit is only charged after your vehicle is matched and dispatched with a verified driver on a scheduled route.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <HeartHandshake className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Door-to-Door Delivery</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                From residential driveways to commercial hubs, our network coordinates direct pickup and drop-off, providing peace of mind from coast to coast.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black text-blue-400 mb-1">10,450+</div>
              <div className="text-xs md:text-sm text-slate-300 font-semibold">Verified Reviews</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-emerald-400 mb-1">4.9 ★</div>
              <div className="text-xs md:text-sm text-slate-300 font-semibold">Customer Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-purple-400 mb-1">50 States</div>
              <div className="text-xs md:text-sm text-slate-300 font-semibold">Nationwide Coverage</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-amber-400 mb-1">$0</div>
              <div className="text-xs md:text-sm text-slate-300 font-semibold">Upfront Deposit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
