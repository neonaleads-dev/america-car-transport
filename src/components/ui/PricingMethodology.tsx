import React from "react";
import { DollarSign, Info, ShieldCheck, CheckCircle2, TrendingUp, AlertTriangle } from "lucide-react";

export default function PricingMethodology() {
  return (
    <section className="bg-slate-900 text-white rounded-3xl p-6 md:p-10 my-12 font-sans shadow-xl border border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/20">
          <DollarSign className="w-4 h-4 text-blue-400" /> Transparent Pricing Formula &amp; Methodology
        </div>

        <h2 className="text-2xl md:text-4xl font-black text-white mb-4">
          How Car Shipping Costs Are Calculated (2026 Benchmark)
        </h2>

        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 font-normal">
          Car shipping rates vary based on real-time carrier availability, diesel fuel prices, route distance, vehicle dimensions, and transport method. At America Car Transport, we believe in 100% price transparency with zero hidden fees and zero upfront deposits.
        </p>

        {/* Pricing Tiers Table */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden mb-8">
          <div className="p-4 md:p-5 border-b border-slate-800 bg-slate-900/50">
            <h3 className="font-extrabold text-base text-white">2026 Distance-Based Cost Per Mile Matrix</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm text-slate-300">
              <thead className="bg-slate-900 text-slate-400 font-bold border-b border-slate-800">
                <tr>
                  <th className="p-3.5 md:p-4">Distance Tier</th>
                  <th className="p-3.5 md:p-4">Mileage Range</th>
                  <th className="p-3.5 md:p-4">Open Transport Rate/Mi</th>
                  <th className="p-3.5 md:p-4">Average Total Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-medium">
                <tr>
                  <td className="p-3.5 md:p-4 text-white font-bold">Short Distance</td>
                  <td className="p-3.5 md:p-4 text-slate-400">1 – 500 miles</td>
                  <td className="p-3.5 md:p-4 text-emerald-400 font-bold">$1.15 – $1.85 / mi</td>
                  <td className="p-3.5 md:p-4">$350 – $750</td>
                </tr>
                <tr>
                  <td className="p-3.5 md:p-4 text-white font-bold">Medium Distance</td>
                  <td className="p-3.5 md:p-4 text-slate-400">500 – 1,500 miles</td>
                  <td className="p-3.5 md:p-4 text-emerald-400 font-bold">$0.75 – $1.10 / mi</td>
                  <td className="p-3.5 md:p-4">$650 – $1,250</td>
                </tr>
                <tr>
                  <td className="p-3.5 md:p-4 text-white font-bold">Long Distance / Coast-to-Coast</td>
                  <td className="p-3.5 md:p-4 text-slate-400">1,500 – 3,000+ miles</td>
                  <td className="p-3.5 md:p-4 text-emerald-400 font-bold">$0.40 – $0.75 / mi</td>
                  <td className="p-3.5 md:p-4">$950 – $1,850</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 4 Cost Drivers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="font-extrabold text-blue-400 mb-1 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Transport Type Multiplier
            </div>
            <p className="text-slate-400">
              Open transport is the baseline economy option. Enclosed transport adds a 40%–60% premium ($1.4x–1.6x multiplier) for climate control, soft-tie straps, and complete weather protection.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="font-extrabold text-blue-400 mb-1 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Vehicle Size &amp; Operability
            </div>
            <p className="text-slate-400">
              Standard sedans cost less than heavy SUVs or dually trucks that consume more trailer space. Inoperable vehicles require a winch loading fee (typically +$150).
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="font-extrabold text-blue-400 mb-1 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Seasonal Snowbird &amp; Weather Shift
            </div>
            <p className="text-slate-400">
              Rates surge 15%–25% on south-bound routes in October–November (snowbird migration) and north-bound routes in April–May.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="font-extrabold text-blue-400 mb-1 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Zero Upfront Deposit Standard
            </div>
            <p className="text-slate-400">
              You only pay once your vehicle is assigned to a verified, insured carrier. No advance deposits or administrative locks required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
