import React from "react";
import Metadata from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStateBySlug, getAllStateSlugs } from "@/data/states";
import StateHero from "@/components/location/StateHero";
import StateQuickFacts from "@/components/location/StateQuickFacts";
import StatePricingTable from "@/components/location/StatePricingTable";
import StateConsiderations from "@/components/location/StateConsiderations";
import StateRouteGrid from "@/components/location/StateRouteGrid";
import StateCityGrid from "@/components/location/StateCityGrid";
import StateFAQ from "@/components/location/StateFAQ";
import StateGeoSchema from "@/components/location/StateGeoSchema";
import Footer from "@/components/ui/Footer";
import RecentShipmentsTicker from "@/components/ui/RecentShipmentsTicker";
import ServicesCarousel from "@/components/ui/ServicesCarousel";

interface StatePageProps {
  params: {
    state: string;
  };
}

// Generate SSG parameters at build time for instant page loads
export async function generateStaticParams() {
  const slugs = getAllStateSlugs();
  return slugs.map((state) => ({ state }));
}

// Dynamic SEO metadata per state
export async function generateMetadata({ params }: StatePageProps) {
  const stateData = getStateBySlug(params.state);
  
  if (!stateData) {
    return {
      title: "State Not Found | America Car Transport",
    };
  }

  return {
    title: stateData.metaTitle,
    description: stateData.metaDescription,
    alternates: {
      canonical: stateData.canonical,
    },
    openGraph: {
      title: stateData.metaTitle,
      description: stateData.metaDescription,
      url: stateData.canonical,
      siteName: "America Car Transport",
      type: "website",
    },
  };
}

export default function StatePage({ params }: StatePageProps) {
  const stateData = getStateBySlug(params.state);

  if (!stateData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* Dynamic JSON-LD Schema Graph Injection */}
      <StateGeoSchema state={stateData} />

      {/* Header Navigation Bar */}
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
            <a href="/#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</a>
            <a href="/services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="/locations" className="hover:text-blue-600 transition-colors text-blue-600 font-bold">Locations</a>
            <a href="/#why-us" className="hover:text-blue-600 transition-colors">Why Us</a>
            <Link href="/faq" className="hover:text-blue-600 transition-colors">FAQ Hub</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:5307255383" className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs rounded-xl">
              (530) 725-5383
            </a>
            <a href="#hero-quote" className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] text-white px-4 py-2 rounded-xl text-xs md:text-sm font-extrabold shadow-sm">
              Get Instant Quote
            </a>
          </div>
        </div>
      </header>

      {/* Visual Breadcrumb Bar */}
      <div className="bg-slate-900 border-b border-slate-800 py-3 px-4 md:px-8 text-xs font-semibold text-slate-400">
        <div className="max-w-[1400px] mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <span className="text-slate-700">/</span>
          <Link href="/locations" className="hover:text-blue-400 transition-colors">Locations</Link>
          <span className="text-slate-700">/</span>
          <span className="text-white font-bold">{stateData.name}</span>
        </div>
      </div>

      {/* 1. Hero Section with Quote Calculator */}
      <StateHero state={stateData} />

      {/* 2. Worked Pricing Matrix (Above the Fold) */}
      <StatePricingTable state={stateData} />

      {/* 3. Live Shipments Ticker */}
      <RecentShipmentsTicker />

      {/* 4. Logistics & Quick Facts Grid */}
      <StateQuickFacts state={stateData} />

      {/* 5. Major Cities & Delivery Hubs */}
      <StateCityGrid state={stateData} />

      {/* 5b. State Considerations, Scam Avoidance & Cost Comparison */}
      <StateConsiderations state={stateData} />

      {/* 5c. Internal Route Link Matrix Hub (SEO Booster) */}
      <StateRouteGrid stateName={stateData.name} />

      {/* 6. Core Shipping Services Carousel */}
      <ServicesCarousel />

      {/* 7. Localized State FAQs */}
      <StateFAQ state={stateData} />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
