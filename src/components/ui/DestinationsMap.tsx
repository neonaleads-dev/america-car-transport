"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ExternalLink, MapPin } from "lucide-react";
import USAMap from "react-usa-map";

// Detailed State Cards interlinked with state pages
const stateCards = [
  { name: "California", slug: "california", desc: "Coast-to-coast I-10 and I-80 shipping from Los Angeles and Bay Area terminals nationwide." },
  { name: "Florida", slug: "florida", desc: "Sunshine State snowbird hub offering high-frequency I-95 and I-75 car transport down to Miami and Tampa." },
  { name: "Texas", slug: "texas", desc: "Interstate Texas triangle transport covering Houston, Dallas-Fort Worth, and Austin with rapid carrier dispatch." },
  { name: "New York", slug: "new-york", desc: "Empire State transport linking NYC metro area and Long Island to southern snowbird corridors." },
  { name: "Washington", slug: "washington", desc: "I-5 corridor transport specializing in Seattle-Tacoma urban pickups and cross-mountain winter enclosed shipping." },
  { name: "Illinois", slug: "illinois", desc: "Chicago logistics junction connecting Midwest interstate hubs to coast-to-coast auto carriers." },
  { name: "Pennsylvania", slug: "pennsylvania", desc: "Mid-Atlantic transport linking Philadelphia and Pittsburgh to Florida and Midwest corridors." },
  { name: "Georgia", slug: "georgia", desc: "Atlanta Southeastern transit hub linking I-85 and I-75 corridors to East Coast ports." },
  { name: "Ohio", slug: "ohio", desc: "Midwest manufacturing logistics serving Columbus, Cleveland, and Cincinnati car shipping." },
  { name: "North Carolina", slug: "north-carolina", desc: "Research Triangle & Charlotte financial hub connecting I-85 and I-95 interstate shipping." }
];

const stateNames: Record<string, string> = {
  "AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas", "CA": "California",
  "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware", "FL": "Florida", "GA": "Georgia",
  "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa",
  "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MD": "Maryland",
  "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi", "MO": "Missouri",
  "MT": "Montana", "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey",
  "NM": "New Mexico", "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio",
  "OK": "Oklahoma", "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island", "SC": "South Carolina",
  "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VT": "Vermont",
  "VA": "Virginia", "WA": "Washington", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming"
};

export default function DestinationsMap() {
  const router = useRouter();
  const [tooltip, setTooltip] = useState({ show: false, name: "", x: 0, y: 0 });

  const handleStateClick = (event: any) => {
    const abbr = event.target.dataset.name;
    const name = stateNames[abbr];
    if (name) {
      const slug = name.toLowerCase().replace(/\s+/g, "-");
      router.push(`/locations/${slug}`);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const target = e.target as SVGElement;
    if (target.tagName === 'path' && target.dataset.name) {
      const stateName = stateNames[target.dataset.name] || target.dataset.name;
      setTooltip({
        show: true,
        name: stateName,
        x: e.clientX,
        y: e.clientY
      });
    }
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, show: false });
  };

  return (
    <section className="py-24 bg-white border-t border-slate-100 overflow-hidden flex flex-col items-center">
      <div className="max-w-[1400px] w-full px-4 md:px-8 lg:px-24 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200/70">
          <MapPin className="w-4 h-4 text-blue-600" />
          Interactive Nationwide Network
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
          Browse Car Shipping Destinations
        </h2>
        <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
          Click any state on the map below to view custom shipping rates, local logistics data, and available auto transport corridors.
        </p>
      </div>

      <div className="w-full relative mb-16 px-4 flex justify-center">
        <div 
          className="relative w-full max-w-[900px] aspect-[4/3] md:aspect-[2/1] flex items-center justify-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          
          <div className="w-full relative px-2 usa-map-container">
             <USAMap 
               width="100%" 
               height="100%" 
               defaultFill="#3b82f6"
               onClick={handleStateClick}
               customize={{}}
             />
             <style>{`
                .usa-map-container svg {
                  width: 100% !important;
                  height: auto !important;
                }
                .usa-map-container path {
                  stroke: white !important;
                  stroke-width: 1.5px !important;
                  transition: all 0.2s;
                  cursor: pointer;
                }
                .usa-map-container path:hover {
                  fill: #1d4ed8 !important;
                  filter: drop-shadow(0px 4px 10px rgba(37,99,235,0.4));
                }
             `}</style>
          </div>

        </div>
      </div>

      {/* Responsive State Cards Grid */}
      <div className="w-full max-w-[1400px] px-4 md:px-8 lg:px-24 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stateCards.map((state) => (
            <Link 
              key={state.slug}
              href={`/locations/${state.slug}`}
              className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-xl hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {state.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2 mb-4">
                  {state.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex justify-between items-center group-hover:text-blue-600 transition-colors">
                <span className="text-xs font-bold text-slate-700 group-hover:text-blue-600">View State Hub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* All Locations Button */}
      <Link 
        href="/locations"
        className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-3.5 px-8 rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
      >
        Browse All 50 State Hubs →
      </Link>

      {/* Floating Tooltip */}
      {tooltip.show && (
        <div 
          className="fixed z-50 pointer-events-none bg-slate-900 text-white px-4 py-2 rounded-lg shadow-xl text-sm font-bold tracking-wide transform -translate-x-1/2 -translate-y-full mt-[-10px]"
          style={{ top: tooltip.y, left: tooltip.x }}
        >
          Click to view {tooltip.name} Shipping Rates
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
        </div>
      )}

    </section>
  );
}
