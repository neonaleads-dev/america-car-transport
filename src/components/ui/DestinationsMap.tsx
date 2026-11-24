"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
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
    <section className="act-section bg-white border-t border-navy-900/10 overflow-hidden">
      <div className="act-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      <div className="lg:col-span-4">
        <p className="act-eyebrow">Interactive Nationwide Network</p>
        <h2 className="act-h2 mb-5">
          Browse Car Shipping Destinations
        </h2>
        <p className="act-lead mb-8">
          Click any state on the map below to view custom shipping rates, local logistics data, and available auto transport corridors.
        </p>
        <ul className="grid grid-cols-2 gap-x-6 border-t border-navy-900/15">
          {stateCards.map((state) => (
            <li key={state.slug} className="border-b border-navy-900/15">
              <Link
                href={`/locations/${state.slug}`}
                title={state.desc}
                className="flex items-center justify-between py-2.5 text-[15px] font-medium text-navy-900 hover:text-signal-700 transition-colors"
              >
                {state.name}
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/locations" className="btn-dark mt-8">
          Browse All 50 State Hubs
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="lg:col-span-8 w-full relative flex justify-center">
        <div
          className="relative w-full aspect-[3/2] flex items-center justify-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          
          <div className="w-full relative px-2 usa-map-container">
             <USAMap 
               width="100%" 
               height="100%" 
               defaultFill="#C8D3E2"
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
                  stroke-width: 1.25px !important;
                  transition: fill 0.15s;
                  cursor: pointer;
                }
                .usa-map-container path:hover {
                  fill: #0B2545 !important;
                }
             `}</style>
          </div>

        </div>
      </div>

      </div>

      {/* Floating Tooltip */}
      {tooltip.show && (
        <div 
          className="fixed z-50 pointer-events-none bg-navy-900 text-white px-3 py-1.5 rounded text-sm font-semibold transform -translate-x-1/2 -translate-y-full mt-[-10px]"
          style={{ top: tooltip.y, left: tooltip.x }}
        >
          Click to view {tooltip.name} Shipping Rates
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-navy-900"></div>
        </div>
      )}

    </section>
  );
}
