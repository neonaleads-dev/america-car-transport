import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Navigation } from "lucide-react";
import AnimatedSection, { AnimatedCard } from "@/components/ui/AnimatedSection";

interface RouteLink {
  title: string;
  slug: string;
  distance: string;
  avgPrice: string;
}

const TOP_CALIFORNIA_OUTBOUND_ROUTES: RouteLink[] = [
  { title: "California to Florida", slug: "/routes/california-to-florida", distance: "2,700 mi", avgPrice: "$1,050 - $1,600" },
  { title: "California to Texas", slug: "/routes/california-to-texas", distance: "1,500 mi", avgPrice: "$950 - $1,300" },
  { title: "California to New York", slug: "/routes/california-to-new-york", distance: "2,800 mi", avgPrice: "$1,150 - $1,650" },
  { title: "California to Washington", slug: "/routes/california-to-washington", distance: "1,100 mi", avgPrice: "$750 - $1,050" },
  { title: "California to Illinois", slug: "/routes/california-to-illinois", distance: "2,100 mi", avgPrice: "$950 - $1,350" },
  { title: "California to Hawaii (Port Shipping)", slug: "/services", distance: "2,400 mi", avgPrice: "Port Quote" },
];

const TOP_CALIFORNIA_INBOUND_ROUTES: RouteLink[] = [
  { title: "Texas to California", slug: "/routes/texas-to-california", distance: "1,540 mi", avgPrice: "$980 - $1,280" },
  { title: "Washington to California", slug: "/routes", distance: "1,250 mi", avgPrice: "$890 - $1,200" },
  { title: "New York to California", slug: "/routes/new-york-to-california", distance: "2,800 mi", avgPrice: "$1,150 - $1,650" },
  { title: "Florida to California", slug: "/routes/florida-to-california", distance: "2,700 mi", avgPrice: "$1,100 - $1,600" },
  { title: "Illinois to California", slug: "/routes", distance: "2,100 mi", avgPrice: "$950 - $1,350" },
  { title: "Arizona to California", slug: "/routes", distance: "400 mi", avgPrice: "$450 - $700" },
];

const TOP_NEW_YORK_OUTBOUND_ROUTES: RouteLink[] = [
  { title: "New York to Florida", slug: "/routes/new-york-to-florida", distance: "1,300 mi", avgPrice: "$900 - $1,400" },
  { title: "New York to California", slug: "/routes/new-york-to-california", distance: "2,800 mi", avgPrice: "$1,350 - $1,750" },
];

const TOP_NEW_YORK_INBOUND_ROUTES: RouteLink[] = [
  { title: "Florida to New York", slug: "/routes/florida-to-new-york", distance: "1,300 mi", avgPrice: "$900 - $1,400" },
  { title: "California to New York", slug: "/routes/california-to-new-york", distance: "2,800 mi", avgPrice: "$1,150 - $1,650" },
  { title: "Texas to New York", slug: "/routes/texas-to-new-york", distance: "1,700 mi", avgPrice: "$850 - $1,350" },
  { title: "Georgia to New York", slug: "/routes/georgia-to-new-york", distance: "1,000 mi", avgPrice: "$600 - $950" },
];

// Every route page that exists under /routes, with the open-transport price shown on that page.
const ROUTE_PAGES: Array<RouteLink & { from: string; to: string }> = [
  { from: "California", to: "Florida", title: "California to Florida", slug: "/routes/california-to-florida", distance: "2,700 mi", avgPrice: "$1,100 - $1,600" },
  { from: "California", to: "Texas", title: "California to Texas", slug: "/routes/california-to-texas", distance: "1,540 mi", avgPrice: "$1,000 - $1,400" },
  { from: "California", to: "New York", title: "California to New York", slug: "/routes/california-to-new-york", distance: "2,800 mi", avgPrice: "$1,150 - $1,650" },
  { from: "California", to: "Illinois", title: "California to Illinois", slug: "/routes/california-to-illinois", distance: "2,015 mi", avgPrice: "$1,000 - $1,450" },
  { from: "California", to: "Washington", title: "California to Washington", slug: "/routes/california-to-washington", distance: "1,150 mi", avgPrice: "$550 - $950" },
  { from: "Florida", to: "California", title: "Florida to California", slug: "/routes/florida-to-california", distance: "2,800 mi", avgPrice: "$1,000 - $1,800" },
  { from: "Florida", to: "New York", title: "Florida to New York", slug: "/routes/florida-to-new-york", distance: "1,300 mi", avgPrice: "$900 - $1,400" },
  { from: "Florida", to: "Illinois", title: "Florida to Illinois", slug: "/routes/florida-to-illinois", distance: "1,300 mi", avgPrice: "$1,100 - $1,700" },
  { from: "Florida", to: "New Jersey", title: "Florida to New Jersey", slug: "/routes/florida-to-new-jersey", distance: "1,200 mi", avgPrice: "$650 - $1,200" },
  { from: "New York", to: "Florida", title: "New York to Florida", slug: "/routes/new-york-to-florida", distance: "1,300 mi", avgPrice: "$900 - $1,400" },
  { from: "New York", to: "California", title: "New York to California", slug: "/routes/new-york-to-california", distance: "2,800 mi", avgPrice: "$1,150 - $1,700" },
  { from: "Texas", to: "California", title: "Texas to California", slug: "/routes/texas-to-california", distance: "1,540 mi", avgPrice: "$1,000 - $1,400" },
  { from: "Texas", to: "Florida", title: "Texas to Florida", slug: "/routes/texas-to-florida", distance: "1,150 mi", avgPrice: "$650 - $1,050" },
  { from: "Texas", to: "New York", title: "Texas to New York", slug: "/routes/texas-to-new-york", distance: "1,700 mi", avgPrice: "$850 - $1,350" },
  { from: "Illinois", to: "Florida", title: "Illinois to Florida", slug: "/routes/illinois-to-florida", distance: "1,350 mi", avgPrice: "$650 - $1,050" },
  { from: "Georgia", to: "New York", title: "Georgia to New York", slug: "/routes/georgia-to-new-york", distance: "1,000 mi", avgPrice: "$600 - $950" },
];

// Shown when a state has no route pages of its own, so the grid never claims another
// state's routes as this state's.
const NATIONAL_ROUTES_A = ["/routes/new-york-to-florida", "/routes/california-to-florida", "/routes/florida-to-california", "/routes/texas-to-california", "/routes/california-to-new-york", "/routes/illinois-to-florida"];
const NATIONAL_ROUTES_B = ["/routes/florida-to-new-york", "/routes/california-to-texas", "/routes/texas-to-florida", "/routes/georgia-to-new-york", "/routes/florida-to-new-jersey", "/routes/california-to-washington"];
const pick = (slugs: string[]) => slugs.map((s) => ROUTE_PAGES.find((r) => r.slug === s)!).filter(Boolean);

function routesForState(stateName: string) {
  if (stateName === "California") {
    return { outbound: TOP_CALIFORNIA_OUTBOUND_ROUTES, inbound: TOP_CALIFORNIA_INBOUND_ROUTES, outTitle: `Top Outbound Routes from ${stateName}`, inTitle: `Top Inbound Routes to ${stateName}` };
  }
  if (stateName === "New York") {
    return { outbound: TOP_NEW_YORK_OUTBOUND_ROUTES, inbound: TOP_NEW_YORK_INBOUND_ROUTES, outTitle: `Top Outbound Routes from ${stateName}`, inTitle: `Top Inbound Routes to ${stateName}` };
  }
  const outbound = ROUTE_PAGES.filter((r) => r.from === stateName);
  const inbound = ROUTE_PAGES.filter((r) => r.to === stateName);
  const own = new Set([...outbound, ...inbound].map((r) => r.slug));
  const national = (slugs: string[]) => pick(slugs).filter((r) => !own.has(r.slug));
  return {
    outbound: outbound.length > 0 ? outbound : national(NATIONAL_ROUTES_A),
    inbound: inbound.length > 0 ? inbound : national(NATIONAL_ROUTES_B),
    outTitle: outbound.length > 0 ? `Top Outbound Routes from ${stateName}` : "Popular National Car Shipping Routes",
    inTitle: inbound.length > 0 ? `Top Inbound Routes to ${stateName}` : "More Popular Routes Nationwide",
  };
}

export default function StateRouteGrid({ stateName }: { stateName: string }) {
  const { outbound: outboundRoutes, inbound: inboundRoutes, outTitle, inTitle } = routesForState(stateName);
  return (
    <section className="py-16 bg-slate-900 text-white font-sans">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 space-y-12">
        
        {/* Section Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 font-bold text-xs">
            <Navigation className="w-3.5 h-3.5" />
            Interstate & Regional Route Directory
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
            Popular {stateName} Car Shipping Corridors
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Explore pricing, estimated transit times, and carrier staging maps for top routes connecting {stateName} nationwide.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Outbound Routes */}
          <AnimatedSection direction="left" className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-700 pb-4">
              <MapPin className="w-5 h-5 text-blue-400" />
              <h3 className="text-xl font-bold text-white">{outTitle}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {outboundRoutes.map((route, idx) => (
                <Link
                  key={idx}
                  href={route.slug}
                  className="group bg-slate-900/90 hover:bg-blue-600/20 border border-slate-700/60 hover:border-blue-500/50 p-4 rounded-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-extrabold text-sm text-slate-200 group-hover:text-blue-300 transition-colors">
                      {route.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                    <span>{route.distance}</span>
                    <span className="font-bold text-emerald-400">{route.avgPrice}</span>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>

          {/* Inbound Routes */}
          <AnimatedSection direction="right" className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-700 pb-4">
              <Navigation className="w-5 h-5 text-purple-400" />
              <h3 className="text-xl font-bold text-white">{inTitle}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {inboundRoutes.map((route, idx) => (
                <Link
                  key={idx}
                  href={route.slug}
                  className="group bg-slate-900/90 hover:bg-purple-600/20 border border-slate-700/60 hover:border-purple-500/50 p-4 rounded-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-extrabold text-sm text-slate-200 group-hover:text-purple-300 transition-colors">
                      {route.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                    <span>{route.distance}</span>
                    <span className="font-bold text-emerald-400">{route.avgPrice}</span>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>

        </div>

        {/* Directory CTA */}
        <div className="text-center pt-4">
          <Link
            href="/routes"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            View All National Routes Directory <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
