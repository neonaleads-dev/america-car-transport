import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Headphones, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Contact Us | America Car Transport — (530) 725-5383",
  description: "Get in touch with America Car Transport auto shipping specialists. Available 24/7 at (530) 725-5383 or support@americacartransport.com for instant quotes.",
  alternates: {
    canonical: "https://www.americacartransport.com/contact",
  },
};

export default function ContactPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://www.americacartransport.com/contact#webpage",
        "url": "https://www.americacartransport.com/contact",
        "name": "Contact Us | America Car Transport",
        "description": "24/7 customer support and auto shipping quotes.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.americacartransport.com/#website",
          "name": "America Car Transport",
          "url": "https://www.americacartransport.com"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.americacartransport.com/contact#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com" },
          { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://www.americacartransport.com/contact" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.americacartransport.com/contact#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How can I contact America Car Transport?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can reach our 24/7 transport dispatch desk by phone at (530) 725-5383 or by email at support@americacartransport.com."
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
          <span className="text-white font-bold">Contact Us</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 lg:px-24 pt-10 pb-16 bg-[#F8FAFC] bg-grid-pattern border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <AnimatedSection direction="up" className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-800 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-blue-200/80 shadow-sm">
              <Headphones className="w-4 h-4 text-blue-600" />
              24/7 Live Transport Support &amp; Quote Desk
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-5">
              Contact America Car Transport
            </h1>

            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-8">
              Have questions about your vehicle shipment, delivery status, or custom transport arrangements? Speak with our auto shipping specialists directly.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Toll-Free Phone Desk</div>
                  <a href="tel:5307255383" className="text-xl font-black text-slate-900 hover:text-blue-600 transition-colors">
                    (530) 725-5383
                  </a>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Customer Support Email</div>
                  <a href="mailto:support@americacartransport.com" className="text-base font-extrabold text-slate-900 hover:text-emerald-700 transition-colors">
                    support@americacartransport.com
                  </a>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-50 text-purple-700 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Dispatch Desk Hours</div>
                  <div className="text-sm font-extrabold text-slate-900">
                    24/7 Nationwide Support (365 Days/Year)
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Quote Calculator Widget */}
          <AnimatedSection direction="up" delay={0.2} className="lg:col-span-6 flex justify-center lg:justify-end">
            <QuoteCalculator />
          </AnimatedSection>

        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
