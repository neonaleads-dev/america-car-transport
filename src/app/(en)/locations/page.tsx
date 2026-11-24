import React from "react";
import Metadata from "next";
import Link from "next/link";
import { getAllTopStates } from "@/data/states";
import Footer from "@/components/ui/Footer";
import InteractiveUSMap from "@/components/ui/InteractiveUSMap";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { MapPin, Search, ArrowRight, ShieldCheck, Truck, Star } from "lucide-react";

import SiteHeader from "@/components/layout/SiteHeader";
export const metadata = {
  title: "Car Shipping Locations | Nationwide Auto Transport Network",
  description: "Explore America Car Transport coverage across all 50 states. Compare door-to-door car shipping rates, popular interstate routes, and local delivery hubs.",
  alternates: {
    canonical: "https://www.americacartransport.com/locations",
    languages: {
      "en-US": "https://www.americacartransport.com/locations",
    },
  },
};

export default function LocationsHubPage() {
  const topStates = getAllTopStates();

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      
      {/* Navigation Header */}
      <SiteHeader active="locations" />

      {/* Visual Breadcrumb Bar */}
      <Breadcrumbs items={[{ label: "Locations", url: "/locations" }]} />

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 lg:px-24 pt-12 pb-16 bg-paper bg-grid-pattern border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="act-eyebrow !mb-4">Nationwide Coverage Directory</p>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
              Car Shipping Locations Nationwide
            </h1>
            <p className="text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              America Car Transport operates door-to-door vehicle logistics across all 50 US states. Select a state to view local pricing, logistics facts, and active transport routes.
            </p>
          </div>

          {/* Interactive US Map Component */}
          <InteractiveUSMap />
        </div>
      </section>

      {/* States Directory Grid */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-24">
          
          <div className="flex justify-between items-center mb-8 border-b border-slate-200 pb-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">
              Featured Top Shipping States
            </h2>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
              Showing 10 Primary Hubs
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topStates.map((state) => (
              <Link 
                key={state.slug} 
                href={`/locations/${state.slug}`}
                className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl hover:border-blue-500 hover:shadow-lg transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-10 h-10 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center font-black text-sm">
                      {state.abbreviation}
                    </span>
                    <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full">
                      {state.carShippingDemand} Demand
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {state.name} Car Shipping
                  </h3>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4 line-clamp-2">
                    {state.stateOverview}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-extrabold text-blue-600">
                  <span>View {state.name} Routes &amp; Pricing</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
