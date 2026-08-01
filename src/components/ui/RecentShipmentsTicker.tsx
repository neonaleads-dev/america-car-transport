"use client";

import React from "react";
import { Truck } from "lucide-react";

interface ShipmentItem {
  id: string;
  vehicle: string;
  route: string;
  price: string;
  timeAgo: string;
  status: string;
}

const RECENT_SHIPMENTS: ShipmentItem[] = [
  { id: "1", vehicle: "2023 Ford F-150", route: "Dallas, TX → Atlanta, GA", price: "$850", timeAgo: "12m ago", status: "Delivered" },
  { id: "2", vehicle: "2024 Tesla Model Y", route: "Miami, FL → New York, NY", price: "$1,150", timeAgo: "28m ago", status: "In Transit" },
  { id: "3", vehicle: "2022 Chevrolet Tahoe", route: "Los Angeles, CA → Chicago, IL", price: "$1,350", timeAgo: "41m ago", status: "Booked" },
  { id: "4", vehicle: "2021 BMW X5", route: "Seattle, WA → San Diego, CA", price: "$980", timeAgo: "1h ago", status: "Delivered" },
  { id: "5", vehicle: "2024 Honda CR-V", route: "Chicago, IL → Houston, TX", price: "$920", timeAgo: "1h 15m ago", status: "In Transit" },
  { id: "6", vehicle: "2020 Porsche 911", route: "Boston, MA → Miami, FL", price: "$1,450", timeAgo: "2h ago", status: "Delivered" },
];

export default function RecentShipmentsTicker() {
  // Duplicate array to guarantee seamless 100% marquee loop
  const tickerData = [...RECENT_SHIPMENTS, ...RECENT_SHIPMENTS];

  return (
    <section className="bg-[#0F172A] text-white py-2.5 border-t border-slate-800/80 overflow-hidden font-sans relative z-20">
      <div className="max-w-[1600px] mx-auto px-4 flex items-center gap-4 relative">
        
        {/* Live Badge (Pulsing Indicator) */}
        <div className="shrink-0 z-20 flex items-center gap-2 bg-[#1E293B] text-blue-400 border border-blue-800/50 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="whitespace-nowrap">LIVE SHIPMENTS</span>
        </div>

        {/* Marquee Track Wrapper with Gradient Edge Masks */}
        <div className="relative flex-1 overflow-hidden py-0.5">
          
          {/* Left Gradient Edge Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-[#0F172A] to-transparent"></div>
          
          {/* Right Gradient Edge Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-[#0F172A] to-transparent"></div>

          {/* Animated Track */}
          <div className="flex w-max items-center gap-5 animate-marquee hover:[animation-play-state:paused]">
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                animation: marquee 35s linear infinite;
              }
            `}</style>

            {tickerData.map((shipment, idx) => (
              <div 
                key={`${shipment.id}-${idx}`}
                className="shrink-0 flex items-center gap-2.5 bg-[#1E293B]/80 hover:bg-[#1E293B] border border-slate-700/60 px-3.5 py-1 rounded-lg transition-all duration-200 shadow-sm cursor-pointer"
              >
                <Truck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="font-bold text-slate-100 text-xs">{shipment.vehicle}</span>
                <span className="text-slate-400 text-xs">{shipment.route}</span>
                <span className="font-black text-amber-400 bg-amber-400/10 border border-amber-400/20 px-1.5 py-0.5 rounded text-[11px]">
                  {shipment.price}
                </span>
                <span className="text-[11px] text-slate-400 font-medium border-l border-slate-700/70 pl-2">
                  {shipment.timeAgo}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

