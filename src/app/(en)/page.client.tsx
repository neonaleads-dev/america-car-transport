"use client";

import React, { useRef } from "react";
import Link from "next/link";

import dynamic from "next/dynamic";
import AnimatedText from "@/components/ui/AnimatedText";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import RecentShipmentsTicker from "@/components/ui/RecentShipmentsTicker";
import StructuredData from "@/components/seo/StructuredData";
import Footer from "@/components/ui/Footer";
import AboutCompany from "@/components/ui/AboutCompany";
import SiteHeader from "@/components/layout/SiteHeader";
import { Star } from "lucide-react";

// Dynamic Import Below-the-Fold Components for JS Bundle Code-Splitting
const PricingTransparency = dynamic(() => import("@/components/ui/PricingTransparency"));
const DestinationsMap = dynamic(() => import("@/components/ui/DestinationsMap"));
const BookingProcess = dynamic(() => import("@/components/ui/BookingProcess"));
const TrustedSection = dynamic(() => import("@/components/ui/TrustedSection"));
const ServicesCarousel = dynamic(() => import("@/components/ui/ServicesCarousel"));
const B2BCarousel = dynamic(() => import("@/components/ui/B2BCarousel"));
const CTABanner = dynamic(() => import("@/components/ui/CTABanner"));
const FAQSection = dynamic(() => import("@/components/ui/FAQSection"));
const TestimonialsSection = dynamic(() => import("@/components/ui/TestimonialsSection"));
const PopularRoutes = dynamic(() => import("@/components/ui/PopularRoutes"));

export default function HomeClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const calcRef = useRef<HTMLDivElement>(null);

  // The GSAP entrance animation was removed: it hid the quote form until a
  // 3-module animation bundle loaded, which delayed the first view on mobile.

  return (
    <>
    <main ref={containerRef} className="min-h-screen bg-paper text-slate-800 font-sans">

      <SiteHeader active="home" />

      {/* 1. Hero: photo + navy scrim, quote form on the right. No entrance animation (LCP). */}
      <section id="hero-quote" className="relative isolate overflow-hidden bg-navy-900">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <img
            src="/hero-background-truck-bright.webp"
            srcSet="/hero-background-truck-bright.webp 900w, /hero-background-truck-bright-1376.webp 1376w"
            sizes="100vw"
            width={1376}
            height={768}
            alt="America Car Transport Carrier Truck Driving Along Scenic Coast Highway at Sunset"
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-navy-900/30 lg:to-navy-900/10"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-950/60 to-transparent"></div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 pt-7 pb-12 md:pt-16 md:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 text-white">
            <p className="flex items-center gap-3 text-xs md:text-[13px] font-semibold uppercase tracking-[0.14em] text-navy-100 mb-4 md:mb-5">
              <span aria-hidden="true" className="inline-block w-8 h-[3px] bg-signal"></span>
              Licensed &amp; Bonded Auto Transport Broker
            </p>

            <h1 className="text-[2.4rem] leading-[1.02] sm:text-6xl lg:text-[4.4rem] font-bold tracking-tight mb-4 md:mb-6">
              Nationwide Car Shipping <span className="text-navy-200">With Transparent Rates</span>
            </h1>

            <p className="text-[17px] md:text-xl text-navy-100 leading-relaxed max-w-xl mb-6 md:mb-8">
              America&apos;s trusted <Link href="/services" className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">auto transport</Link> broker network. Get instant quotes, compare verified carriers, and enjoy zero upfront deposits.
            </p>

            {/* Trust facts: plain, scannable, no badges */}
            <dl className="grid grid-cols-2 sm:flex sm:flex-wrap gap-y-4 gap-x-6 sm:gap-x-8 max-w-xl border-t border-white/15 pt-5 md:pt-6">
              <div>
                <dt className="sr-only">Customer rating</dt>
                <dd className="flex items-center gap-2">
                  <span className="flex text-brass-300" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </span>
                  <span className="font-semibold text-white">5.0 / 5.0 Rating</span>
                </dd>
                <dd className="text-sm text-navy-200 mt-1">Google Verified Reviews</dd>
              </div>
              <div>
                <dt className="sr-only">Accreditation</dt>
                <dd className="font-semibold text-white">BBB A+ Accredited Business</dd>
                <dd className="text-sm text-navy-200 mt-1">FMCSA Compliant Broker</dd>
              </div>
              <div className="hidden sm:block">
                <dt className="sr-only">Deposit</dt>
                <dd className="font-semibold text-white">$0 upfront deposit</dd>
                <dd className="text-sm text-navy-200 mt-1">No hidden dispatch fees</dd>
              </div>
            </dl>
          </div>

          <div ref={calcRef} className="w-full lg:col-span-5 flex justify-center lg:justify-end">
            <QuoteCalculator />
          </div>
        </div>
      </section>

      {/* 1b. Dynamic Live Ticker */}
      <RecentShipmentsTicker />

      {/* 2. Our Services */}
      <div id="services">
        <ServicesCarousel />
      </div>

      {/* 3. How It Works (3 Steps) */}
      <div id="how-it-works">
        <BookingProcess />
      </div>

      {/* 4. Cost Calculator / Interactive Price Matrix */}
      <div id="calculator">
        <PricingTransparency />
      </div>

      {/* 5. Why Choose Us (Value Proposition & Trust Signals) */}
      <div id="why-us">
        <TrustedSection />
      </div>

      {/* 5b. Verified Customer Reviews & Testimonials */}
      <TestimonialsSection />

      {/* 6. Popular Shipping Routes (SEO Route Cards) */}
      <div id="popular-routes">
        <PopularRoutes />
      </div>

      {/* 7. Browse By State / US Map (Local SEO Hub) */}
      <div id="locations">
        <DestinationsMap />
      </div>

      {/* 8. B2B & Commercial Services */}
      <div id="b2b">
        <B2BCarousel />
      </div>

      {/* 8b. About the company: plain facts for search and AI answer engines */}
      <AboutCompany />

      {/* 9. Frequently Asked Questions (Accordion + FAQ Schema) */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* 10. Bottom Full-Width CTA Banner */}
      <CTABanner />
    </main>
    
    {/* 11. Global Footer */}
    <Footer />
    </>
  );
}

