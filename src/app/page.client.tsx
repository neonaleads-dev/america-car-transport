"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";

import dynamic from "next/dynamic";
import AnimatedText from "@/components/ui/AnimatedText";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import RecentShipmentsTicker from "@/components/ui/RecentShipmentsTicker";
import StructuredData from "@/components/seo/StructuredData";
import Footer from "@/components/ui/Footer";
import { ShieldCheck, Truck, Clock, CheckCircle2, Phone, Star, Award, Shield } from "lucide-react";

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
  const navRef = useRef<HTMLElement>(null);
  const calcRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    const timer = setTimeout(() => {
      Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("gsap/CustomEase")
      ]).then(([gsapModule, stModule, ceModule]) => {
        const gsap = gsapModule.default;
        const ScrollTrigger = stModule.ScrollTrigger;
        const CustomEase = ceModule.CustomEase;

        gsap.registerPlugin(ScrollTrigger, CustomEase);
        const smoothEase = CustomEase.create("smooth", "M0,0 C0.25,1 0.25,1 1,1");
        
        // Simple fast nav entry
      if (navRef.current) {
        gsap.fromTo(
          navRef.current.children,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: smoothEase }
        );
      }

      // Slide up calculator
        if (calcRef.current) {
          gsap.fromTo(
            calcRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: smoothEase, delay: 0.2 }
          );
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
    <main ref={containerRef} className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-blue-200">
      
      {/* Navbar (Sticky, Clean, White, 3 Flex Sections) */}
      <header ref={navRef} className="sticky top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="max-w-[1400px] w-full mx-auto px-4 md:px-8 py-3.5 md:py-2.5 md:py-3 flex items-center justify-between gap-4 md:gap-6">
          
          {/* Left: Logo */}
          <Link href="/" title="America Car Transport Homepage" className="flex items-center shrink-0 my-auto">
            <img 
              src="/america-car-transport-logo.png" 
              alt="America Car Transport - Nationwide Auto Transport Company Logo" 
              title="America Car Transport Official Logo"
              width={160}
              height={72}
              fetchPriority="high"
              className="h-[52px] sm:h-[58px] md:h-[64px] lg:h-[72px] w-auto object-contain transition-transform hover:scale-[1.02]"
            />
          </Link>

          {/* Center: Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 whitespace-nowrap text-slate-700 font-semibold text-xs lg:text-sm xl:text-[15px]">
            <a href="#how-it-works" className="hover:text-blue-600 transition-colors whitespace-nowrap">How It Works</a>
            <Link href="/services" className="hover:text-blue-600 transition-colors whitespace-nowrap">Services</Link>
            <a href="#why-us" className="hover:text-blue-600 transition-colors whitespace-nowrap">Why Us</a>
            <a href="/routes" className="hover:text-blue-600 transition-colors whitespace-nowrap">Popular Routes</a>
            <Link href="/locations" className="hover:text-blue-600 transition-colors whitespace-nowrap">Locations</Link>
            <Link href="/faq" className="hover:text-blue-600 transition-colors whitespace-nowrap">FAQ Hub</Link>
          </nav>

          {/* Right: Actions (Phone + CTA) */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="tel:5307255383" className="hidden xl:flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-100 px-3.5 py-2 rounded-xl text-xs xl:text-sm font-extrabold transition-all shadow-sm shrink-0 whitespace-nowrap">
              <Phone className="w-4 h-4 text-blue-600" />
              (530) 725-5383
            </a>
            <Link href="/tools/car-shipping-cost-calculator" className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] hover:from-[#E05E00] hover:to-[#FF6B00] text-white px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-extrabold transition-all duration-200 shadow-[0_4px_14px_0_rgba(255,107,0,0.39)] hover:shadow-[0_6px_20px_0_rgba(255,107,0,0.5)] active:shadow-inner rounded-xl transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shrink-0 whitespace-nowrap">
              Get Instant Quote
            </Link>
          </div>

        </div>
      </header>

      {/* 1. Hero Section (Clean Floating Text over Scenic Background) */}
      <section id="hero-quote" className="relative min-h-[85vh] flex items-center px-4 md:px-8 lg:px-24 pt-10 pb-16 overflow-hidden bg-slate-50">
        
        {/* Full Scenic Background Image Layer */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <img 
            src="/hero-background-truck-bright.webp" 
            alt="America Car Transport Carrier Truck Driving Along Scenic Coast Highway at Sunset" 
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
          {/* Very subtle light overlay to make text pop without hiding the picture */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent"></div>
        </div>

        <div className="w-full max-w-[1400px] mx-auto z-10 relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clean Floating Typography (NO BOX) */}
          <div className="flex flex-col justify-center lg:col-span-6 xl:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-bold tracking-wide mb-6 w-max border border-blue-200 shadow-sm">
              <Award className="w-4 h-4 text-blue-600" />
              #1 Rated Auto Transport Network
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-[4.2rem] leading-[1.1] font-black tracking-tight text-slate-900 mb-6 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
              Instantly Compare &amp; Book <span className="text-blue-600">Trusted Car Shipping</span> Nationwide
            </h1>
            
            <p className="text-lg md:text-xl text-slate-700 font-semibold leading-relaxed max-w-xl mb-8 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
              America&apos;s leading bonded &amp; insured <Link href="/services" className="text-blue-700 underline decoration-blue-400/50 hover:decoration-blue-600 transition-colors">auto transport</Link> network. Compare verified carriers, lock in guaranteed rates, and enjoy zero upfront deposits.
            </p>

            {/* Google Rating & BBB Accreditation Badges */}
            <div className="flex flex-wrap items-center gap-4 bg-white/95 p-4 rounded-2xl border border-slate-200/90 shadow-md max-w-xl">
              <div className="flex items-center gap-2.5 pr-4 border-r border-slate-200">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-sm leading-none">4.9 / 5.0 Rating</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Google Verified Reviews</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="px-2.5 py-1 bg-slate-900 text-white font-extrabold text-xs rounded border border-slate-700">
                  BBB A+
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm leading-none">Accredited Business</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">FMCSA Compliant Broker</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Calculator */}
          <div ref={calcRef} className="w-full lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
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

