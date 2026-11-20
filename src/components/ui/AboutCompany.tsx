import React from "react";
import Link from "next/link";

// Plain-text company facts for the homepage. Written as short, direct statements so
// search engines and AI answer engines can quote them accurately.
const facts = [
  { label: "Average cost (sedan, open carrier)", value: "$500 – $1,600 between states" },
  { label: "Cost per mile", value: "$0.40 – $0.70 coast to coast, $1.20 – $2.20 under 500 miles" },
  { label: "Transit time", value: "1 – 3 days regional, 6 – 9 days coast to coast" },
  { label: "Coverage", value: "All 50 states, door-to-door" },
  { label: "Upfront deposit", value: "None required" },
  { label: "Languages", value: "English and Spanish" },
];

const popularLinks = [
  { href: "/tools/car-shipping-cost-calculator", label: "Car shipping cost calculator" },
  { href: "/routes/new-york-to-florida", label: "New York to Florida" },
  { href: "/routes/florida-to-california", label: "Florida to California" },
  { href: "/routes/california-to-florida", label: "California to Florida" },
  { href: "/routes/texas-to-california", label: "Texas to California" },
  { href: "/locations/california", label: "California car shipping" },
  { href: "/locations/new-york", label: "New York car shipping" },
  { href: "/es/calculadora", label: "Calculadora en español" },
];

export default function AboutCompany() {
  return (
    <section id="about" className="py-20 bg-white border-t border-slate-100 font-sans">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8 space-y-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
            About America Car Transport
          </h2>
          <p className="text-base md:text-lg text-slate-700 font-medium leading-relaxed">
            America Car Transport is a nationwide auto transport broker that ships cars, SUVs, pickup trucks, and motorcycles between all 50 U.S. states. We match each customer with a licensed, insured carrier for open or enclosed transport, with door-to-door pickup and delivery and no upfront deposit. Quotes are free online or by phone at (530) 725-5383, in English or Spanish.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-extrabold text-slate-900 mb-4">Car Shipping at a Glance</h3>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {facts.map((f) => (
              <div key={f.label} className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <dt className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">{f.label}</dt>
                <dd className="text-base font-extrabold text-slate-900">{f.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-slate-500 font-medium mt-3">
            Typical ranges for a running sedan on open transport. Your final price depends on route, vehicle, season, and pickup date.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-extrabold text-slate-900 mb-4">Popular Pages</h3>
          <ul className="flex flex-wrap gap-3">
            {popularLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-block bg-blue-50 hover:bg-blue-100 border border-blue-100 text-blue-700 font-bold text-sm px-4 py-2 rounded-xl transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
