"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HelpCircle, Zap, Lightbulb, CheckCircle2, Shield, Truck, ArrowRight, Star } from "lucide-react";

export default function ServicesComparisonDashboard() {
  const [activeTab, setActiveTab] = useState<"open" | "enclosed">("open");

  return (
    <section className="py-20 px-4 md:px-8 lg:px-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100/80 text-blue-800 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3 border border-blue-200">
            Full Service Matrix
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Compare All Services at a Glance
          </h2>
          <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
            Comprehensive comparison breakdown of protection level, delivery method, and dispatch speed options.
          </p>
        </div>

        {/* Side-by-Side Grid: Left Table Card + Right Interactive Media Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          
          {/* LEFT COLUMN: TABLE CARD (Clean White + Soft Shadow) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 flex flex-col justify-between">
            
            {/* Table Header & Rows */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden border border-slate-200/80">
                <thead>
                  <tr className="bg-slate-100/90 text-slate-700 text-xs font-extrabold uppercase tracking-wider border-b border-slate-200">
                    <th className="p-4">SERVICE</th>
                    <th className="p-4">BEST FOR</th>
                    <th className="p-4">COST TIER</th>
                    <th className="p-4">SPEED</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/80 text-xs md:text-sm font-medium text-slate-800">
                  
                  {/* Row 1: Open Auto Transport (MOST POPULAR HIGHLIGHTED ROW) */}
                  <tr className="bg-blue-50/70 border-l-4 border-l-blue-600 transition-colors hover:bg-blue-100/60">
                    <td className="p-4 font-bold text-slate-900">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <Link href="/services/open-auto-transport" className="hover:text-blue-600 transition-colors">
                          Open Auto Transport
                        </Link>
                        <span className="px-2 py-0.5 bg-blue-600 text-white text-[10px] font-black uppercase rounded-full tracking-wider shadow-xs">
                          MOST POPULAR
                        </span>
                      </div>
                    </td>
                    <td className="p-4 font-medium text-slate-700">Standard vehicles, lowest cost</td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 font-bold border border-emerald-200/80 rounded-full text-xs inline-block">
                        Low ($)
                      </span>
                    </td>
                    <td className="p-4 font-semibold text-slate-600">Standard</td>
                  </tr>

                  {/* Row 2: Enclosed Auto Transport */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">
                      <Link href="/services/enclosed-auto-transport" className="hover:text-purple-600 transition-colors">
                        Enclosed Auto Transport
                      </Link>
                    </td>
                    <td className="p-4 text-slate-700">Classic, exotic, luxury vehicles</td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 bg-amber-50 text-amber-800 font-bold border border-amber-200/80 rounded-full text-xs inline-block">
                        Premium ($$$)
                      </span>
                    </td>
                    <td className="p-4 font-semibold text-slate-600">Standard</td>
                  </tr>

                  {/* Row 3: Door-to-Door Transport */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">
                      <Link href="/services/door-to-door-transport" className="hover:text-blue-600 transition-colors">
                        Door-to-Door Transport
                      </Link>
                    </td>
                    <td className="p-4 text-slate-700">Maximum convenience</td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 bg-blue-50 text-blue-700 font-bold border border-blue-200/80 rounded-full text-xs inline-block">
                        Moderate ($$)
                      </span>
                    </td>
                    <td className="p-4 font-semibold text-slate-600">Standard</td>
                  </tr>

                  {/* Row 4: Terminal-to-Terminal Shipping */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">
                      <Link href="/services/terminal-to-terminal-shipping" className="hover:text-blue-600 transition-colors">
                        Terminal-to-Terminal
                      </Link>
                    </td>
                    <td className="p-4 text-slate-700">Maximum savings, flexible schedule</td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 font-bold border border-emerald-200/80 rounded-full text-xs inline-block">
                        Lowest ($)
                      </span>
                    </td>
                    <td className="p-4 font-semibold text-slate-600">Standard</td>
                  </tr>

                  {/* Row 5: Expedited Auto Transport */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">
                      <Link href="/services/expedited-auto-transport" className="hover:text-amber-600 transition-colors">
                        Expedited Auto Transport
                      </Link>
                    </td>
                    <td className="p-4 text-slate-700">Urgent timelines</td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 bg-amber-50 text-amber-800 font-bold border border-amber-200/80 rounded-full text-xs inline-block">
                        Priority ($$$)
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 bg-orange-100 text-orange-800 font-extrabold border border-orange-200/80 rounded-full text-xs inline-flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 text-orange-600 fill-orange-600" /> Fast (24–48 hrs)
                      </span>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

            {/* Styled "Combination Rule" Callout — Pro Tip Feature Ribbon */}
            <div className="bg-indigo-50/80 border border-indigo-200/80 p-4 rounded-2xl flex items-start gap-3 text-xs md:text-sm font-semibold text-slate-800">
              <Lightbulb className="w-5 h-5 text-amber-500 fill-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-indigo-950">Pro Tip:</strong> Protection level (open/enclosed), delivery method (door-to-door/terminal), and speed (standard/expedited) are independent options that can be stacked together in your quote.
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: INTERACTIVE MEDIA CARD (Image Toggle + Floating Badges + Key Differences) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 flex flex-col justify-between">
            
            <div>
              {/* Interactive Tabs Header */}
              <div className="flex items-center justify-between mb-4 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200">
                <button 
                  onClick={() => setActiveTab("open")}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === "open" 
                      ? "bg-blue-600 text-white shadow-md" 
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Truck className="w-4 h-4" /> Open Carrier
                </button>
                <button 
                  onClick={() => setActiveTab("enclosed")}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === "enclosed" 
                      ? "bg-purple-700 text-white shadow-md" 
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Shield className="w-4 h-4" /> Enclosed Trailer
                </button>
              </div>

              {/* Image Container with Floating Badge Overlay */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
                <img 
                  src={activeTab === "open" ? "/open-auto-transport-car-carrier-loading-sedan.jpg" : "/enclosed-auto-transport-covered-trailer-luxury-car.jpg"} 
                  alt={activeTab === "open" ? "America Car Transport open car shipping carrier truck" : "America Car Transport enclosed luxury car transport carrier"} 
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Pill Overlay Badge */}
                <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-extrabold border border-slate-700 shadow-lg flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${activeTab === "open" ? "bg-blue-400" : "bg-purple-400"} animate-pulse`}></div>
                  {activeTab === "open" ? "Open Carrier (Standard Multi-Car)" : "Enclosed Carrier (Hard-Side Liftgate)"}
                </div>
              </div>

              {/* Key Differences Bullet List */}
              <div className="mt-5 space-y-2.5 text-xs md:text-sm font-semibold text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <div className="font-extrabold text-slate-900 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-400" /> Key Feature Highlights:
                </div>
                {activeTab === "open" ? (
                  <>
                    <div className="flex items-center gap-2 text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span><strong>93% Market Choice:</strong> Most economical way to ship daily drivers.</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span><strong>High Capacity:</strong> 8–10 car trailers provide maximum carrier availability.</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2 text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                      <span><strong>100% Weather Protection:</strong> Sealed hard-side walls shield from road debris.</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                      <span><strong>Hydraulic Liftgates:</strong> Horizontal loading for low-clearance sports cars.</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="mt-4 text-center">
              <Link 
                href={activeTab === "open" ? "/services/open-auto-transport" : "/services/enclosed-auto-transport"}
                className="inline-flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white py-3 px-4 rounded-xl text-xs font-extrabold transition-all shadow-md"
              >
                Learn More About {activeTab === "open" ? "Open Transport" : "Enclosed Transport"} <ArrowRight className="w-4 h-4 text-cyan-400" />
              </Link>
            </div>

          </div>

        </div>

        {/* ELEVATED DIRECT ANSWER BOX (BOTTOM CARD FOR AEO) */}
        <div className="bg-sky-50/90 border border-sky-200/90 p-6 md:p-8 rounded-3xl shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-sky-600 text-white rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
            <HelpCircle className="w-4 h-4 text-white" /> DIRECT ANSWER — HOW TO DECIDE
          </div>
          <p className="text-slate-800 text-base md:text-lg font-medium leading-relaxed">
            <strong className="text-slate-950 font-black">Most vehicle owners choose Open Auto Transport with Door-to-Door delivery</strong> — it is the standard, most widely available combination nationwide. Choose <strong className="text-slate-950">Enclosed transport</strong> if your vehicle is classic, exotic, or high-value; choose <strong className="text-slate-950">Terminal-to-Terminal</strong> if minimizing cost matters more than convenience; and choose <strong className="text-slate-950">Expedited shipping</strong> if your timeline is fixed and cannot flex.
          </p>
        </div>

      </div>
    </section>
  );
}
