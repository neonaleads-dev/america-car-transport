import React from "react";
import { StateData } from "@/types/location";
import { Truck, Navigation, Anchor, DollarSign, Clock, Flame, ShieldAlert } from "lucide-react";

interface StateQuickFactsProps {
  state: StateData;
}

export default function StateQuickFacts({ state }: StateQuickFactsProps) {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Truck className="w-4 h-4 text-blue-600" />
            {state.name} Logistics Infrastructure
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Key Car Shipping Facts for {state.name}
          </h2>
          <p className="text-base text-slate-600 font-medium mt-3">
            Essential transport data, major interstate arteries, shipping demand levels, and price-per-mile benchmarks.
          </p>
        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Interstates */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors">
            <div>
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Navigation className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">Major Interstates</h3>
              <p className="text-xs text-slate-500 font-medium mb-3">Primary carrier transit corridors</p>
              <div className="flex flex-wrap gap-1.5">
                {state.majorInterstates.map((route) => (
                  <span key={route} className="bg-white border border-slate-300 text-slate-800 text-xs font-bold px-2.5 py-1 rounded-lg">
                    {route}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Price & Transit */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors">
            <div>
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">Avg Rate & Transit</h3>
              <p className="text-xs text-slate-500 font-medium mb-3">Industry benchmarks for {state.name}</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 font-medium">Cost / Mile:</span>
                  <span className="font-extrabold text-slate-900">{state.averagePricePerMile}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 font-medium">Avg Distance:</span>
                  <span className="font-extrabold text-slate-900">{state.averageDistanceMiles} Miles</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 font-medium">Avg Transit:</span>
                  <span className="font-extrabold text-emerald-700">{state.averageTransitDays}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Demand & Peak Season */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors">
            <div>
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <Flame className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">Shipping Demand</h3>
              <p className="text-xs text-slate-500 font-medium mb-3">Carrier volume & seasonality</p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-medium">Demand Level:</span>
                  <span className="bg-amber-100 text-amber-900 font-extrabold px-2 py-0.5 rounded">
                    {state.carShippingDemand}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-medium">Peak Season:</span>
                  <span className="font-bold text-slate-900">{state.peakMonths}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Ports & Terminals */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors">
            <div>
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Anchor className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">Ports & Terminals</h3>
              <p className="text-xs text-slate-500 font-medium mb-3">Major logistics hubs</p>
              <div className="space-y-1">
                {state.majorPorts.map((port) => (
                  <div key={port} className="text-xs font-semibold text-slate-700 truncate">
                    • {port}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Overview Banner */}
        <div className="mt-10 bg-blue-50/70 border border-blue-200/80 p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <h4 className="font-bold text-slate-900 text-base mb-1">Logistics &amp; Route Overview for {state.name}</h4>
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
              {state.stateOverview}
            </p>
          </div>
          <div className="shrink-0">
            <span className="bg-blue-600 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl inline-block shadow-sm">
              USDOT Licensed Broker #{state.usdotNumber}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
