import React from "react";
import Link from "next/link";
import { CheckCircle2, MapPin } from "lucide-react";
import { type RouteGuide, vehicleRows } from "@/data/route-guides";

// Shared content for shorter route pages: city pairs, coverage, service options,
// cost by vehicle type, who ships on the route, and how the process works.
// FAQs from the guide are merged into each page's own FAQ list and schema.
export default function RouteGuideContent({ guide }: { guide: RouteGuide }) {
  const { from, to } = guide;
  return (
    <section className="py-16 bg-white border-t border-slate-200 font-sans">
      <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-14">
        {guide.cityPairs.length > 0 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
              {from} to {to} Car Shipping Cost &amp; Transit Time
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium mb-6">
              Most {from} to {to} shipments cost <strong>${guide.openLow.toLocaleString("en-US")} – ${guide.openHigh.toLocaleString("en-US")}</strong> on an open carrier and take <strong>{guide.transit}</strong> along {guide.highways}. Popular city pairs:
            </p>
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse text-sm min-w-[520px]">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                    <th className="py-4 px-6">Origin</th>
                    <th className="py-4 px-6">Destination</th>
                    <th className="py-4 px-6">Distance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-semibold text-slate-800">
                  {guide.cityPairs.map((p) => (
                    <tr key={p.from + p.to}>
                      <td className="py-4 px-6"><span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" />{p.from}</span></td>
                      <td className="py-4 px-6">{p.to}</td>
                      <td className="py-4 px-6 text-slate-500 font-medium">{p.miles} miles</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h2 className="text-xl font-black text-slate-900 mb-3">Shipping From Anywhere in {from}</h2>
            <p className="text-sm text-slate-700 font-medium leading-relaxed">
              Door-to-door pickup from {guide.fromCities.join(", ")}, and smaller towns across {from}.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h2 className="text-xl font-black text-slate-900 mb-3">Popular {to} Delivery Destinations</h2>
            <p className="text-sm text-slate-700 font-medium leading-relaxed">
              Delivery to {guide.toCities.join(", ")}, and anywhere else in {to}.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Shipping Cost by Vehicle Type ({from} to {to})</h2>
          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse text-sm min-w-[520px]">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                  <th className="py-4 px-6">Vehicle</th>
                  <th className="py-4 px-6">Estimated Price</th>
                  <th className="py-4 px-6">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-semibold text-slate-800">
                {vehicleRows(guide).map((r) => (
                  <tr key={r.type}>
                    <td className="py-4 px-6">{r.type}</td>
                    <td className="py-4 px-6 text-emerald-700 font-bold">{r.price}</td>
                    <td className="py-4 px-6 text-slate-500 font-medium">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-3">
            Open-carrier estimates unless noted. Non-running vehicles need a winch and add a fee. Your exact price depends on cities, season and pickup date.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Transport Service Options for This Route</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { t: "Open transport", d: `The standard, most affordable option: $${guide.openLow.toLocaleString("en-US")} – $${guide.openHigh.toLocaleString("en-US")} for a sedan.`, href: "/services/open-auto-transport" },
              { t: "Enclosed transport", d: `Full protection for luxury, classic and exotic cars: $${guide.encLow.toLocaleString("en-US")} – $${guide.encHigh.toLocaleString("en-US")}.`, href: "/services/enclosed-auto-transport" },
              { t: "Door-to-door delivery", d: "Pickup and delivery at your addresses, or a nearby open spot when a full-size truck can't reach your street.", href: "/services/door-to-door-transport" },
              { t: "Expedited shipping", d: "Priority carrier assignment for a firm deadline, at an added cost.", href: "/services/expedited-auto-transport" },
            ].map((o) => (
              <Link key={o.t} href={o.href} className="block bg-slate-50 hover:bg-blue-50/60 border border-slate-200 hover:border-blue-300 rounded-2xl p-5 transition-colors">
                <div className="font-extrabold text-slate-900 mb-1">{o.t}</div>
                <p className="text-sm text-slate-600 font-medium">{o.d}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-4">Who Ships on This Route</h2>
            <ul className="space-y-3 text-sm md:text-base text-slate-700 font-medium">
              {guide.whoShips.map((w) => (
                <li key={w} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" /><span>{w}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-4">How the Process Works</h2>
            <ol className="space-y-3 text-sm md:text-base text-slate-700 font-medium list-decimal pl-5">
              <li>Get a free quote online or call (530) 725-5383. No upfront deposit.</li>
              <li>We assign a licensed, insured carrier for your {from} to {to} route.</li>
              <li>The driver inspects the car with you and you both sign the Bill of Lading.</li>
              <li>Your car is delivered to your {to} address; check it before signing for delivery.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
