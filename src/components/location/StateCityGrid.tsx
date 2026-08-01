import React from "react";
import { StateData } from "@/types/location";
import { MapPin, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

interface StateCityGridProps {
  state: StateData;
}

export default function StateCityGrid({ state }: StateCityGridProps) {
  return (
    <section className="py-16 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-24">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-4 h-4 text-blue-600" />
            {state.name} Delivery Hubs
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Major Cities &amp; Terminals Served in {state.name}
          </h2>
          <p className="text-base text-slate-600 font-medium mt-2">
            Direct door-to-door auto transport service available to every city and town across {state.name}.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {state.majorCities.map((city) => (
            <div 
              key={city.slug}
              className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl flex items-center justify-between hover:bg-blue-50/50 hover:border-blue-300 transition-all cursor-pointer group"
            >
              <div>
                <div className="font-extrabold text-slate-900 text-sm md:text-base group-hover:text-blue-600 transition-colors flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                  {city.name}
                </div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">
                  Pop. {city.population} {city.isHub ? "• Primary Hub" : ""}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
