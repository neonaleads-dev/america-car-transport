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
    <section id="about" className="act-section bg-paper border-t border-navy-900/10 font-sans">
      <div className="act-container space-y-12">
        <div className="max-w-3xl">
          <p className="act-eyebrow">About</p>
          <h2 className="act-h2 mb-5">
            About America Car Transport
          </h2>
          <p className="act-lead">
            America Car Transport is a nationwide auto transport broker that ships cars, SUVs, pickup trucks, and motorcycles between all 50 U.S. states. We match each customer with a licensed, insured carrier for open or enclosed transport, with door-to-door pickup and delivery and no upfront deposit. Quotes are free online or by phone at (530) 725-5383, in English or Spanish.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-navy-900 mb-4">Car Shipping at a Glance</h3>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-900/15 border border-navy-900/15 rounded-lg overflow-hidden">
            {facts.map((f) => (
              <div key={f.label} className="bg-white p-5 md:p-6">
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 mb-2">{f.label}</dt>
                <dd className="font-heading text-lg md:text-xl font-bold text-navy-900 tabular">{f.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-sm text-slate-600 mt-3">
            Typical ranges for a running sedan on open transport. Your final price depends on route, vehicle, season, and pickup date.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-navy-900 mb-4">Popular Pages</h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {popularLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[15px] font-medium text-navy-900 underline decoration-navy-900/25 underline-offset-4 hover:decoration-signal"
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
