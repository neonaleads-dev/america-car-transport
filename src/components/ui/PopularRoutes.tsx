import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RouteItem {
  origin: string;
  destination: string;
  distance: string;
  avgTime: string;
  avgPrice: string;
  popular: boolean;
  slug: string;
}

// Each row links to its route page (prices match those pages).
const POPULAR_ROUTES: RouteItem[] = [
  { origin: "New York, NY", destination: "Miami, FL", distance: "1,280 miles", avgTime: "3 - 5 Days", avgPrice: "From $900", popular: true, slug: "/routes/new-york-to-florida" },
  { origin: "Miami, FL", destination: "Los Angeles, CA", distance: "2,700 miles", avgTime: "5 - 7 Days", avgPrice: "From $1,000", popular: true, slug: "/routes/florida-to-california" },
  { origin: "Los Angeles, CA", destination: "Miami, FL", distance: "2,700 miles", avgTime: "5 - 7 Days", avgPrice: "From $1,100", popular: true, slug: "/routes/california-to-florida" },
  { origin: "Houston, TX", destination: "Los Angeles, CA", distance: "1,540 miles", avgTime: "3 - 5 Days", avgPrice: "From $1,000", popular: false, slug: "/routes/texas-to-california" },
  { origin: "Los Angeles, CA", destination: "New York, NY", distance: "2,789 miles", avgTime: "5 - 7 Days", avgPrice: "From $1,150", popular: false, slug: "/routes/california-to-new-york" },
  { origin: "Miami, FL", destination: "Chicago, IL", distance: "1,375 miles", avgTime: "3 - 5 Days", avgPrice: "From $1,100", popular: false, slug: "/routes/florida-to-illinois" },
];

export default function PopularRoutes() {
  return (
    <section className="act-section bg-paper border-t border-navy-900/10 font-sans">
      <div className="act-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <p className="act-eyebrow">Nationwide Coverage</p>
            <h2 className="act-h2">Popular Car Shipping Routes</h2>
          </div>
          <p className="act-lead max-w-md">
            Explore our most frequently booked interstate auto transport corridors with real-time pricing and estimated transit times.
          </p>
        </div>

        {/* Route board: reads like a rate sheet, not a card grid */}
        <div className="bg-white border border-navy-900/15 rounded-lg overflow-hidden">
          <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_11rem] gap-6 px-6 py-3 bg-navy-900 text-navy-100 text-xs font-semibold uppercase tracking-[0.12em]">
            <span>Route</span>
            <span>Distance</span>
            <span>Transit Time</span>
            <span>Estimated Cost</span>
            <span aria-hidden="true"></span>
          </div>
          <ul data-gsap-stagger>
            {POPULAR_ROUTES.map((route) => (
              <li
                key={route.slug}
                className="group grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_11rem] gap-x-6 gap-y-2 items-center px-5 md:px-6 py-5 border-t border-navy-900/10 first:border-t-0 hover:bg-navy-50/60 transition-colors"
              >
                <h3 className="col-span-2 md:col-span-1 text-lg font-bold text-navy-900">
                  <Link href={route.slug} className="inline-flex flex-wrap items-center gap-x-2">
                    <span>{route.origin}</span>
                    <ArrowRight className="w-4 h-4 text-signal shrink-0" aria-hidden="true" />
                    <span className="sr-only">to</span>
                    <span>{route.destination}</span>
                  </Link>
                  {route.popular && (
                    <span className="block text-xs font-semibold uppercase tracking-[0.1em] text-brass-700 mt-1">High Demand Corridor</span>
                  )}
                </h3>
                <p className="text-sm text-slate-600 tabular">
                  <span className="md:hidden text-slate-500">Distance: </span>{route.distance}
                </p>
                <p className="text-sm text-slate-600 tabular">
                  <span className="md:hidden text-slate-500">Transit: </span>{route.avgTime}
                </p>
                <p className="font-heading text-xl font-bold text-navy-900 tabular">
                  <span className="sr-only">Estimated Cost: </span>{route.avgPrice}
                </p>
                <Link
                  href={route.slug}
                  className="inline-flex items-center md:justify-end gap-1.5 text-sm font-semibold text-navy-900"
                >
                  <span className="underline decoration-signal decoration-2 underline-offset-4">See Price &amp; Transit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-5 text-sm text-slate-600">
          Don&apos;t see your route? <Link href="/routes" className="font-semibold text-navy-900 underline underline-offset-2">Browse all routes</Link> or get an exact quote at the top of this page.
        </p>
      </div>
    </section>
  );
}
