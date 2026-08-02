import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import { GraduationCap, Calendar, Clock, MapPin, Phone, CheckCircle2, AlertCircle, HelpCircle, ShieldCheck, ArrowRight, DollarSign } from "lucide-react";

export const metadata = {
  title: "College Student Car Shipping | Affordable Campus Car Transport",
  description: "Shipping a car to or from college? See the cheapest way to do it — terminal-to-terminal shipping — plus the best time to book for move-in and move-out.",
  alternates: {
    canonical: "https://www.americacartransport.com/services/college-student-car-shipping",
  },
};

export default function CollegeStudentCarShippingPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.americacartransport.com/services/college-student-car-shipping#service",
        "name": "College Student Car Shipping",
        "serviceType": "Student & Campus Vehicle Transport",
        "provider": {
          "@type": "Organization",
          "name": "America Car Transport",
          "url": "https://www.americacartransport.com"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "College students and their families"
        },
        "offers": {
          "@type": "Offer",
          "description": "Lowest-cost terminal-to-terminal car shipping for university campus moves with $0 deposit"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.americacartransport.com/services/college-student-car-shipping#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is terminal-to-terminal shipping safe for student cars?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Vehicles are stored at secured, gated lots before and after transit. It is a standard industry option used nationwide to reduce shipping costs."
            }
          },
          {
            "@type": "Question",
            "name": "Will I be charged a storage fee if I can't pick up right away?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Storage policies vary by terminal location. We disclose all terminal storage rules upfront during booking so there are no unexpected fees."
            }
          },
          {
            "@type": "Question",
            "name": "Can a parent book the vehicle shipment on behalf of the student?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Either the student or a parent/family member can book the order and be designated as the pickup or drop-off contact."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.americacartransport.com/services/college-student-car-shipping#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.americacartransport.com/services" },
          { "@type": "ListItem", "position": 3, "name": "College Student Car Shipping", "item": "https://www.americacartransport.com/services/college-student-car-shipping" }
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
          <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link>
          <span className="text-slate-700">/</span>
          <span className="text-white font-bold">College Student Car Shipping</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 lg:px-24 pt-10 pb-16 bg-[#F8FAFC] bg-grid-pattern border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <AnimatedSection direction="up" className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-900 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-blue-200/80 shadow-sm">
              <GraduationCap className="w-4 h-4 text-blue-700" />
              Affordable Student Campus Shipping &amp; Zero Upfront Deposit
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
              College Student Car Shipping
            </h1>

            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-6">
              Move-in day and move-out day both come with a hard deadline, a dorm-sized budget, and a car that needs to get from home to campus or back. America Car Transport ships vehicles for students at the lowest available rates.
            </p>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Lowest-Cost Terminal-to-Terminal &amp; Door-to-Door Options</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Parent or Student Can Book &amp; Manage Dispatch Contact</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>$0 Upfront Deposit — No Email Required for Instant Estimates</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:5307255383" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-extrabold text-sm shadow-md transition-all flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-200" /> Student Desk: (530) 725-5383
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2} className="lg:col-span-6 flex justify-center lg:justify-end">
            <QuoteCalculator />
          </AnimatedSection>

        </div>
      </section>

      {/* Main Content & Guidance */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8 space-y-12">
          
          {/* Lowest-Cost Method: Terminal-to-Terminal */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              The Cheapest Way to Ship a Car to College
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              For most student moves, <Link href="/services/terminal-to-terminal-shipping" className="text-blue-700 font-bold underline">Terminal-to-Terminal Shipping</Link> is the most budget-friendly answer. Instead of paying extra for a carrier to navigate narrow campus roads, you drop off and pick up your vehicle at a secure regional terminal.
            </p>
          </article>

          {/* Academic Calendar Booking Guidance */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              When to Book Your Student Car Shipment
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="bg-blue-50/60 border border-blue-200 p-6 rounded-2xl space-y-2">
                <div className="text-xs font-extrabold text-blue-800 uppercase tracking-wider">Fall Move-In</div>
                <h3 className="font-extrabold text-slate-900 text-base">Mid-to-Late August</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Book 2 to 3 weeks ahead of August move-in dates when carrier demand surges across college towns nationwide.
                </p>
              </div>

              <div className="bg-emerald-50/60 border border-emerald-200 p-6 rounded-2xl space-y-2">
                <div className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">Spring Move-Out</div>
                <h3 className="font-extrabold text-slate-900 text-base">Early-to-Mid May</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Book 2 to 3 weeks before final exam week to ensure your vehicle returns home right as semester housing closes.
                </p>
              </div>

              <div className="bg-purple-50/60 border border-purple-200 p-6 rounded-2xl space-y-2">
                <div className="text-xs font-extrabold text-purple-800 uppercase tracking-wider">Off-Cycle Moves</div>
                <h3 className="font-extrabold text-slate-900 text-base">Semesters &amp; Internships</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Study abroad, summer internships, or transfer moves have flexible availability and lower off-peak rates.
                </p>
              </div>
            </div>
          </article>

          {/* FAQ Section */}
          <article className="space-y-6 pt-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions (Student Move FAQs)
            </h2>

            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" /> Is terminal-to-terminal shipping safe?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Yes — vehicles are stored at secured, gated lots before and after transit. It is a standard industry option used nationwide to reduce shipping costs.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" /> Will I be charged a storage fee if I can&apos;t pick up right away?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Storage policies vary by terminal location. We disclose all terminal storage rules upfront during booking so there are no unexpected fees.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" /> Can a parent book the shipment instead of the student?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Yes — either the student or a parent/family member can book, and either can be listed as the pickup or drop-off contact.
                </p>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
