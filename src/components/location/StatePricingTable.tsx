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

          {/* Cost Per Mile Table for State Pages */}
          {(() => {
            const examples = (() => {
              const name = state.name;
              
              // 1. Short Route (<500 mi)
              let shortRoute = `${name} Short-Haul`;
              let shortMiles = "250 mi";
              let shortCost = "$350 – $550";
              
              if (state.majorCities && state.majorCities.length >= 2) {
                shortRoute = `${state.majorCities[0].name} → ${state.majorCities[1].name}`;
                shortMiles = "350 mi";
                shortCost = "$350 – $550";
              } else if (state.popularRoutesOut && state.popularRoutesOut.some(r => r.distanceMiles < 500)) {
                const r = state.popularRoutesOut.find(r => r.distanceMiles < 500)!;
                shortRoute = `${r.originCity} → ${r.destCity}, ${r.destState}`;
                shortMiles = `${r.distanceMiles} mi`;
                shortCost = r.openPriceRange;
              }

              // 2. Medium Route (500-1500 mi)
              let mediumRoute = `${name} → Regional Hub`;
              let mediumMiles = "850 mi";
              let mediumCost = "$650 – $1,050";
              
              const medOut = state.popularRoutesOut?.find(r => r.distanceMiles >= 500 && r.distanceMiles <= 1500);
              if (medOut) {
                mediumRoute = `${medOut.originCity} → ${medOut.destCity}, ${medOut.destState}`;
                mediumMiles = `${medOut.distanceMiles} mi`;
                mediumCost = medOut.openPriceRange;
              } else if (state.popularRoutesIn?.find(r => r.distanceMiles >= 500 && r.distanceMiles <= 1500)) {
                const r = state.popularRoutesIn.find(r => r.distanceMiles >= 500 && r.distanceMiles <= 1500)!;
                mediumRoute = `${r.originCity} → ${name}`;
                mediumMiles = `${r.distanceMiles} mi`;
                mediumCost = r.openPriceRange;
              }

              // 3. Long Route (>1500 mi)
              let longRoute = `${name} → Cross-Country`;
              let longMiles = "2,400 mi";
              let longCost = "$1,100 – $1,700";

              const longOut = state.popularRoutesOut?.find(r => r.distanceMiles > 1500);
              if (longOut) {
                longRoute = `${longOut.originCity} → ${longOut.destCity}, ${longOut.destState}`;
                longMiles = `${longOut.distanceMiles} mi`;
                longCost = longOut.openPriceRange;
              } else if (state.popularRoutesIn?.find(r => r.distanceMiles > 1500)) {
                const r = state.popularRoutesIn.find(r => r.distanceMiles > 1500)!;
                longRoute = `${r.originCity} → ${name}`;
                longMiles = `${r.distanceMiles} mi`;
                longCost = r.openPriceRange;
              } else {
                const crossDest = name === "California" ? "Miami, FL" : "Los Angeles, CA";
                longRoute = `${name} → ${crossDest}`;
              }

              return {
                short: { route: shortRoute, miles: shortMiles, cost: shortCost },
                medium: { route: mediumRoute, miles: mediumMiles, cost: mediumCost },
                long: { route: longRoute, miles: longMiles, cost: longCost },
              };
            })();

            return (
              <div className="mt-12 bg-white rounded-2xl border border-slate-200/90 p-6 md:p-8 shadow-sm">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2">
                  {state.name} Car Shipping Cost Per Mile (2026)
                </h3>
                <p className="text-xs md:text-sm text-slate-600 font-medium mb-6">
                  Per-mile baseline rates decrease over longer distances as fixed carrier loading and dispatch costs are distributed across more miles.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs md:text-sm">
                    <thead>
                      <tr className="bg-slate-100/80 text-slate-700 text-xs font-extrabold uppercase border-b border-slate-200">
                        <th className="py-3 px-4">Distance Tier</th>
                        <th className="py-3 px-4">Cost Per Mile</th>
                        <th className="py-3 px-4">Example Route</th>
                        <th className="py-3 px-4">Total Cost Range (Open Sedan)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 text-slate-800 font-medium">
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold">Short (&lt;500 mi)</td>
                        <td className="py-3 px-4 font-extrabold text-blue-700">$1.20 – $2.20 / mi</td>
                        <td className="py-3 px-4">{examples.short.route} ({examples.short.miles})</td>
                        <td className="py-3 px-4 font-extrabold text-emerald-700">{examples.short.cost}</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold">Medium (500–1,500 mi)</td>
                        <td className="py-3 px-4 font-extrabold text-blue-700">$0.70 – $1.00 / mi</td>
                        <td className="py-3 px-4">{examples.medium.route} ({examples.medium.miles})</td>
                        <td className="py-3 px-4 font-extrabold text-emerald-700">{examples.medium.cost}</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold">Long (&gt;1,500 mi)</td>
                        <td className="py-3 px-4 font-extrabold text-blue-700">$0.40 – $0.70 / mi</td>
                        <td className="py-3 px-4">{examples.long.route} ({examples.long.miles})</td>
                        <td className="py-3 px-4 font-extrabold text-emerald-700">{examples.long.cost}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[11px] text-slate-500 font-medium mt-3 italic">
                  *Data based on 2026 {state.name} shipments. Open transport baseline for standard sedans. SUVs and trucks add $100–$200. Enclosed transport adds 50–70%.
                </p>
              </div>
            );
          })()}

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
