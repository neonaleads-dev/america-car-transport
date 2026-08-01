"use client";

import React from "react";
import { ArrowRight, MapPin, ShieldCheck, Clock, Navigation } from "lucide-react";

interface RouteItem {
  origin: string;
  destination: string;
  distance: string;
  avgTime: string;
  avgPrice: string;
  popular: boolean;
}

const POPULAR_ROUTES: RouteItem[] = [
  { origin: "Los Angeles, CA", destination: "New York, NY", distance: "2,789 miles", avgTime: "5 - 7 Days", avgPrice: "From $1,150", popular: true },
  { origin: "Miami, FL", destination: "Chicago, IL", distance: "1,375 miles", avgTime: "3 - 4 Days", avgPrice: "From $850", popular: true },
  { origin: "Dallas, TX", destination: "Atlanta, GA", distance: "780 miles", avgTime: "2 - 3 Days", avgPrice: "From $650", popular: false },
  { origin: "Chicago, IL", destination: "Houston, TX", distance: "1,085 miles", avgTime: "3 - 4 Days", avgPrice: "From $790", popular: false },
  { origin: "Seattle, WA", destination: "San Diego, CA", distance: "1,250 miles", avgTime: "3 - 4 Days", avgPrice: "From $890", popular: true },
  { origin: "Boston, MA", destination: "Miami, FL", distance: "1,490 miles", avgTime: "4 - 5 Days", avgPrice: "From $920", popular: false },
];

export default function PopularRoutes() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-24 bg-slate-50 border-t border-slate-200/80 font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Navigation className="w-3.5 h-3.5" />
              Nationwide Coverage
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Popular Car Shipping Routes
            </h2>
          </div>
          <p className="text-slate-600 font-medium max-w-md text-sm md:text-base">
            Explore our most frequently booked interstate auto transport corridors with real-time pricing and estimated transit times.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_ROUTES.map((route, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200/90 hover:border-blue-500 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Route Header Badge */}
                {route.popular && (
                  <span className="inline-block bg-amber-100 text-amber-800 text-[11px] font-bold px-2.5 py-0.5 rounded-md mb-4 uppercase tracking-wide">
                    High Demand Corridor
                  </span>
                )}

                {/* Cities */}
                <div className="flex items-center justify-between text-slate-900 font-bold text-lg mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{route.origin}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 mx-2" />
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{route.destination}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-3 bg-slate-50 rounded-xl p-3 mb-6 text-xs text-slate-600">
                  <div>
                    <span className="block font-semibold text-slate-400">Distance</span>
                    <span className="font-bold text-slate-800">{route.distance}</span>
                  </div>
                  <div>
                    <span className="block font-semibold text-slate-400">Transit Time</span>
                    <span className="font-bold text-slate-800 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-blue-500" />
                      {route.avgTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <span className="text-xs text-slate-500 block font-medium">Estimated Cost</span>
                  <span className="text-xl font-extrabold text-blue-700">{route.avgPrice}</span>
                </div>
                <a 
                  href="#hero-quote" 
                  className="bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  Calculate Route
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
