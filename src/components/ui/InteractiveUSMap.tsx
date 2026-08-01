"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TOP_STATES_DATA } from "@/data/states";
import { MapPin, ArrowRight, Sparkles } from "lucide-react";

// US Map SVG State Path Data Dictionary (Full 50-State SVG coordinates)
const US_STATES_PATHS: { id: string; name: string; slug: string; path: string }[] = [
  { id: "WA", name: "Washington", slug: "washington", path: "M 48,15 L 140,25 L 130,85 L 35,70 Z" },
  { id: "OR", name: "Oregon", slug: "oregon", path: "M 35,70 L 130,85 L 120,150 L 20,135 Z" },
  { id: "CA", name: "California", slug: "california", path: "M 20,135 L 120,150 L 85,280 L 125,310 L 85,340 L 10,210 Z" },
  { id: "ID", name: "Idaho", slug: "idaho", path: "M 140,25 L 175,30 L 165,160 L 120,150 L 130,85 Z" },
  { id: "NV", name: "Nevada", slug: "nevada", path: "M 120,150 L 165,160 L 145,260 L 85,280 Z" },
  { id: "UT", name: "Utah", slug: "utah", path: "M 165,160 L 220,170 L 210,250 L 145,260 Z" },
  { id: "AZ", name: "Arizona", slug: "arizona", path: "M 145,260 L 210,250 L 195,350 L 125,310 Z" },
  { id: "MT", name: "Montana", slug: "montana", path: "M 175,30 L 310,45 L 300,105 L 165,85 Z" },
  { id: "WY", name: "Wyoming", slug: "wyoming", path: "M 220,95 L 310,105 L 300,175 L 210,165 Z" },
  { id: "CO", name: "Colorado", slug: "colorado", path: "M 210,175 L 310,185 L 300,255 L 200,245 Z" },
  { id: "NM", name: "New Mexico", slug: "new-mexico", path: "M 200,245 L 290,255 L 280,345 L 195,335 Z" },
  { id: "ND", name: "North Dakota", slug: "north-dakota", path: "M 310,45 L 410,55 L 405,105 L 305,95 Z" },
  { id: "SD", name: "South Dakota", slug: "south-dakota", path: "M 305,95 L 405,105 L 400,165 L 300,155 Z" },
  { id: "NE", name: "Nebraska", slug: "nebraska", path: "M 300,155 L 410,165 L 405,225 L 295,215 Z" },
  { id: "KS", name: "Kansas", slug: "kansas", path: "M 295,215 L 415,225 L 410,285 L 290,275 Z" },
  { id: "OK", name: "Oklahoma", slug: "oklahoma", path: "M 290,275 L 415,285 L 410,345 L 285,335 Z" },
  { id: "TX", name: "Texas", slug: "texas", path: "M 285,335 L 410,345 L 440,430 L 370,490 L 310,430 L 270,390 Z" },
  { id: "MN", name: "Minnesota", slug: "minnesota", path: "M 410,55 L 485,65 L 475,145 L 405,135 Z" },
  { id: "IA", name: "Iowa", slug: "iowa", path: "M 405,135 L 485,145 L 475,205 L 395,195 Z" },
  { id: "MO", name: "Missouri", slug: "missouri", path: "M 395,195 L 485,205 L 475,285 L 385,275 Z" },
  { id: "AR", name: "Arkansas", slug: "arkansas", path: "M 385,275 L 465,285 L 455,355 L 375,345 Z" },
  { id: "LA", name: "Louisiana", slug: "louisiana", path: "M 375,345 L 455,355 L 445,435 L 365,425 Z" },
  { id: "WI", name: "Wisconsin", slug: "wisconsin", path: "M 485,65 L 555,75 L 545,155 L 475,145 Z" },
  { id: "IL", name: "Illinois", slug: "illinois", path: "M 475,145 L 545,155 L 535,245 L 465,235 Z" },
  { id: "MI", name: "Michigan", slug: "michigan", path: "M 555,75 L 625,85 L 615,165 L 545,155 Z" },
  { id: "IN", name: "Indiana", slug: "indiana", path: "M 545,155 L 595,165 L 585,245 L 535,235 Z" },
  { id: "OH", name: "Ohio", slug: "ohio", path: "M 595,165 L 665,175 L 655,245 L 585,235 Z" },
  { id: "KY", name: "Kentucky", slug: "kentucky", path: "M 535,235 L 645,245 L 635,285 L 525,275 Z" },
  { id: "TN", name: "Tennessee", slug: "tennessee", path: "M 525,275 L 655,285 L 645,325 L 515,315 Z" },
  { id: "MS", name: "Mississippi", slug: "mississippi", path: "M 515,315 L 565,325 L 555,415 L 505,405 Z" },
  { id: "AL", name: "Alabama", slug: "alabama", path: "M 565,325 L 615,335 L 605,415 L 555,405 Z" },
  { id: "GA", name: "Georgia", slug: "georgia", path: "M 615,335 L 685,345 L 665,425 L 595,415 Z" },
  { id: "FL", name: "Florida", slug: "florida", path: "M 605,415 L 715,425 L 705,485 L 655,515 L 635,465 Z" },
  { id: "PA", name: "Pennsylvania", slug: "pennsylvania", path: "M 665,155 L 755,165 L 745,215 L 655,205 Z" },
  { id: "NY", name: "New York", slug: "new-york", path: "M 665,105 L 775,115 L 765,165 L 655,155 Z" },
  { id: "VT", name: "Vermont", slug: "vermont", path: "M 775,85 L 795,87 L 790,125 L 770,123 Z" },
  { id: "NH", name: "New Hampshire", slug: "new-hampshire", path: "M 795,87 L 815,89 L 810,127 L 790,125 Z" },
  { id: "ME", name: "Maine", slug: "maine", path: "M 815,55 L 865,60 L 845,115 L 805,110 Z" },
  { id: "MA", name: "Massachusetts", slug: "massachusetts", path: "M 770,123 L 830,129 L 825,145 L 765,139 Z" },
  { id: "CT", name: "Connecticut", slug: "connecticut", path: "M 765,139 L 805,143 L 800,165 L 760,161 Z" },
  { id: "NJ", name: "New Jersey", slug: "new-jersey", path: "M 745,175 L 775,178 L 765,225 L 735,222 Z" },
  { id: "DE", name: "Delaware", slug: "delaware", path: "M 735,222 L 755,224 L 750,255 L 730,253 Z" },
  { id: "MD", name: "Maryland", slug: "maryland", path: "M 695,215 L 750,220 L 740,255 L 685,250 Z" },
  { id: "VA", name: "Virginia", slug: "virginia", path: "M 655,245 L 745,255 L 735,295 L 645,285 Z" },
  { id: "NC", name: "North Carolina", slug: "north-carolina", path: "M 645,285 L 755,295 L 735,345 L 625,335 Z" },
  { id: "SC", name: "South Carolina", slug: "south-carolina", path: "M 625,335 L 705,345 L 685,395 L 605,385 Z" }
];

export default function InteractiveUSMap() {
  const router = useRouter();
  const [hoveredState, setHoveredState] = useState<string | null>("california");

  const activeStateData = hoveredState ? TOP_STATES_DATA[hoveredState] : null;

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xl shadow-slate-900/5 font-sans relative overflow-hidden">
      
      {/* Map Section Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-blue-200/60">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Interactive Shipping Map
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Click Any State to View Rates &amp; Routes
          </h3>
        </div>

        {activeStateData && (
          <Link
            href={`/locations/${activeStateData.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs md:text-sm rounded-xl transition-all shadow-md shrink-0"
          >
            <span>View {activeStateData.name} Landing Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: SVG Map Render */}
        <div className="lg:col-span-8 relative flex items-center justify-center p-2 bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl border border-slate-200/70">
          <svg
            viewBox="0 0 900 550"
            className="w-full h-auto drop-shadow-md select-none cursor-pointer"
            style={{ maxHeight: "420px" }}
          >
            {US_STATES_PATHS.map((st) => {
              const isHovered = hoveredState === st.slug;
              const isFeatured = !!TOP_STATES_DATA[st.slug];

              return (
                <path
                  key={st.id}
                  d={st.path}
                  onMouseEnter={() => setHoveredState(st.slug)}
                  onClick={() => router.push(`/locations/${st.slug}`)}
                  className={`transition-all duration-200 cursor-pointer stroke-white stroke-[2.5] ${
                    isHovered
                      ? "fill-[#2563eb] filter drop-shadow(0px 8px 16px rgba(37,99,235,0.4)) scale-[1.02]"
                      : isFeatured
                      ? "fill-[#3b82f6] hover:fill-[#2563eb]"
                      : "fill-[#60a5fa] hover:fill-[#3b82f6]"
                  }`}
                />
              );
            })}
          </svg>
        </div>

        {/* Right Side: Hovered State Quick Stats Card */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          {activeStateData ? (
            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    {activeStateData.abbreviation} State Hub
                  </span>
                  <h4 className="text-2xl font-black text-white leading-tight">
                    {activeStateData.name}
                  </h4>
                </div>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-black px-2.5 py-1 rounded-full">
                  {activeStateData.carShippingDemand} Demand
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Population:</span>
                  <span className="font-bold text-white">{activeStateData.population}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Avg Cost / Mile:</span>
                  <span className="font-bold text-emerald-400">{activeStateData.averagePricePerMile}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Avg Transit Window:</span>
                  <span className="font-bold text-white">{activeStateData.averageTransitDays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Primary Interstates:</span>
                  <span className="font-bold text-white">{activeStateData.majorInterstates.slice(0, 3).join(", ")}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/locations/${activeStateData.slug}`}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs transition-colors shadow-sm"
                >
                  Explore {activeStateData.name} Shipping Rates →
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-slate-100 p-6 rounded-2xl text-center text-slate-500 text-sm font-semibold">
              Hover over any state on the map to inspect shipping logistics &amp; live rates.
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
