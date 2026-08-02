import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import AnimatedSection, { AnimatedCard } from "@/components/ui/AnimatedSection";
import { ShieldCheck, Award, Clock, Users, Building, Phone, ArrowRight, CheckCircle2, Lock, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "About Us | America Car Transport — Nationwide Auto Shipping Broker",
  description: "Learn about America Car Transport — FMCSA licensed & bonded property broker (USDOT #3849102) providing zero deposit door-to-door auto transport nationwide.",
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
              "text": "America Car Transport is an FMCSA licensed and bonded property broker (USDOT #3849102, MC #1098472) providing door-to-door vehicle shipping across all 50 U.S. states with zero upfront deposit."
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

      {/* Visual Breadcrumb Bar */}
      <div className="bg-slate-900 border-b border-slate-800 py-3 px-4 md:px-8 text-xs font-semibold text-slate-400">
        <div className="max-w-[1400px] mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <span className="text-slate-700">/</span>
          <span className="text-white font-bold">About Us</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 lg:px-24 pt-12 pb-20 bg-[#F8FAFC] bg-grid-pattern border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1200px] mx-auto text-center">
          <AnimatedSection direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-800 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-blue-200/80 shadow-sm">
              <Building className="w-4 h-4 text-blue-600" />
              FMCSA Bonded &amp; Insured Broker (USDOT #3849102 | MC #1098472)
            </div>

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
