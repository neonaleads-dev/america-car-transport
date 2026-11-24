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

import SiteHeader from "@/components/layout/SiteHeader";
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
      images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: `${stateData.name} car shipping with America Car Transport` }],
    },
  };
}

export default function StatePage({ params }: StatePageProps) {
  const stateData = getStateBySlug(params.state);

  if (!stateData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-paper font-sans">
      {/* Dynamic JSON-LD Schema Graph Injection */}
      <StateGeoSchema state={stateData} />

      {/* Header Navigation Bar */}
      <SiteHeader active="locations" ctaHref="#hero-quote" />

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
