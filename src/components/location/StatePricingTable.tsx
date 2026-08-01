import React from "react";
import Link from "next/link";
import { StateData } from "@/types/location";
import { DollarSign, Clock, Shield, ArrowRight } from "lucide-react";

interface StatePricingTableProps {
  state: StateData;
}

export default function StatePricingTable({ state }: StatePricingTableProps) {
  const intraState = (state as any).intraStateRoutes || [];
  const allExamples = [...intraState, ...state.popularRoutesOut, ...state.popularRoutesIn];

  const getRouteLink = (origin: string, destCity: string, destState: string) => {
    const origLower = origin.toLowerCase();
    const destStateLower = destState.toLowerCase();
    const destCityLower = destCity.toLowerCase();

    if (
      (origLower.includes("california") || origLower.includes("ca") || origLower.includes("los angeles") || origLower.includes("san diego") || origLower.includes("san francisco")) &&
      (destStateLower === "fl" || destCityLower.includes("miami") || destCityLower.includes("orlando") || destCityLower.includes("florida"))
    ) {
      return "/routes/california-to-florida";
    }
    return null;
  };

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <DollarSign className="w-4 h-4 text-emerald-600" />
            Transparent Pricing Matrix
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            {state.name} Car Shipping Cost &amp; Distance Examples
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-medium mt-2">
            Real sample quotes and estimated transit times for popular routes to and from {state.name}.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-100/80 text-slate-700 text-xs font-extrabold uppercase tracking-wider border-b border-slate-200">
                  <th className="py-4 px-6">Route (Origin → Destination)</th>
                  <th className="py-4 px-6">Distance</th>
                  <th className="py-4 px-6">Open Carrier Cost</th>
                  <th className="py-4 px-6">Enclosed Carrier Cost</th>
                  <th className="py-4 px-6">Estimated Transit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 text-sm font-medium text-slate-800">
                {allExamples.map((item, idx) => {
                  const routeHref = getRouteLink(item.originCity, item.destCity, item.destState);

                  return (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-900">
                        {routeHref ? (
                          <Link href={routeHref} className="text-blue-600 hover:text-blue-800 underline font-extrabold inline-flex items-center gap-1">
                            {item.originCity} → {item.destCity}, {item.destState}
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        ) : (
                          <span>{item.originCity} → {item.destCity}, {item.destState}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-slate-600">
                        {item.distanceMiles} miles
                      </td>
                      <td className="py-4 px-6 font-extrabold text-emerald-700">
                        <span className="bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md border border-emerald-200/60">
                          {item.openPriceRange}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-extrabold text-purple-700">
                        <span className="bg-purple-50 text-purple-800 px-2.5 py-1 rounded-md border border-purple-200/60">
                          {item.enclosedPriceRange}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-slate-600">
                        <span className="flex items-center gap-1.5 font-semibold text-xs text-slate-700">
                          <Clock className="w-3.5 h-3.5 text-blue-600" />
                          {item.transitDays}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-900 text-slate-300 px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs gap-3">
            <span className="font-semibold text-slate-300">
              * Pricing is calculated dynamically based on carrier availability, fuel prices, and vehicle size.
            </span>
            <a href="#hero-quote" className="font-extrabold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl transition-colors shrink-0">
              Get Your Custom {state.name} Quote →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
