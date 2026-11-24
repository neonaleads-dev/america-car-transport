import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import AnimatedSection, { AnimatedCard } from "@/components/ui/AnimatedSection";
import { MapPin, ArrowRight, Phone, ShieldCheck, Clock, DollarSign } from "lucide-react";

import SiteHeader from "@/components/layout/SiteHeader";
export const metadata = {
  title: "Popular Interstate Car Shipping Routes | America Car Transport",
  description: "Compare car shipping costs, transit times, and carrier dispatches for popular cross-country routes across the United States.",
  alternates: {
    canonical: "https://www.americacartransport.com/routes",
  },
};

const POPULAR_ROUTES = [
  {
    "title": "California to Florida Car Shipping",
    "origin": "California",
    "dest": "Florida",
    "miles": "~2,700 mi",
    "time": "5 – 7 days",
    "cost": "$1,000 – $1,500",
    "href": "/routes/california-to-florida",
    "badge": "Most Popular",
    "badgeColor": "bg-amber-600"
  },
  {
    "title": "California to Illinois Car Shipping",
    "origin": "California",
    "dest": "Illinois",
    "miles": "~2,015 mi",
    "time": "5 – 7 days",
    "cost": "$1,000 – $1,500",
    "href": "/routes/california-to-illinois",
    "badge": "Cross-Country",
    "badgeColor": "bg-rose-600"
  },
  {
    "title": "California to New York Car Shipping",
    "origin": "California",
    "dest": "New York",
    "miles": "~2,800 mi",
    "time": "5 – 7 days",
    "cost": "$1,000 – $1,500",
    "href": "/routes/california-to-new-york",
    "badge": "Cross-Country",
    "badgeColor": "bg-rose-600"
  },
  {
    "title": "California to Texas Car Shipping",
    "origin": "California",
    "dest": "Texas",
    "miles": "~1,540 mi",
    "time": "5 – 7 days",
    "cost": "$1,000 – $1,500",
    "href": "/routes/california-to-texas",
    "badge": "Snowbird Route",
    "badgeColor": "bg-purple-600"
  },
  {
    "title": "Florida to California Car Shipping",
    "origin": "Florida",
    "dest": "California",
    "miles": "2,400–2,800 mi",
    "time": "6 – 10 days",
    "cost": "$1,000 – $1,800",
    "href": "/routes/florida-to-california",
    "badge": "Most Popular",
    "badgeColor": "bg-amber-600"
  },
  {
    "title": "Florida to Illinois Car Shipping",
    "origin": "Florida",
    "dest": "Illinois",
    "miles": "1,100–1,300 mi",
    "time": "3 – 5 days",
    "cost": "$750 – $1,200",
    "href": "/routes/florida-to-illinois",
    "badge": "Snowbird Route",
    "badgeColor": "bg-purple-600"
  },
  {
    "title": "Florida to New Jersey Car Shipping",
    "origin": "Florida",
    "dest": "New Jersey",
    "miles": "~2,500 mi",
    "time": "3 – 6 days",
    "cost": "$650 – $1,200",
    "href": "/routes/florida-to-new-jersey",
    "badge": "Most Popular",
    "badgeColor": "bg-amber-600"
  },
  {
    "title": "Florida to New York Car Shipping",
    "origin": "Florida",
    "dest": "New York",
    "miles": "1,100–1,300 mi",
    "time": "3 – 6 days",
    "cost": "$900 – $1,400",
    "href": "/routes/florida-to-new-york",
    "badge": "Snowbird Route",
    "badgeColor": "bg-purple-600"
  },
  {
    "title": "New York to California Car Shipping",
    "origin": "New York",
    "dest": "California",
    "miles": "~2,800 mi",
    "time": "5 – 7 days",
    "cost": "$1,000 – $1,500",
    "href": "/routes/new-york-to-california",
    "badge": "Cross-Country",
    "badgeColor": "bg-rose-600"
  },
  {
    "title": "New York to Florida Car Shipping",
    "origin": "New York",
    "dest": "Florida",
    "miles": "1,100–1,300 mi",
    "time": "3 – 6 days",
    "cost": "$900 – $1,400",
    "href": "/routes/new-york-to-florida",
    "badge": "Snowbird Route",
    "badgeColor": "bg-purple-600"
  },
  {
    "title": "Texas to California Car Shipping",
    "origin": "Texas",
    "dest": "California",
    "miles": "~1,540 mi",
    "time": "5 – 7 days",
    "cost": "$1,000 – $1,500",
    "href": "/routes/texas-to-california",
    "badge": "Snowbird Route",
    "badgeColor": "bg-purple-600"
  }
];

export default function RoutesHubPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.americacartransport.com/routes#webpage",
        "name": "Interstate Car Shipping Routes Directory",
        "description": "Directory of major U.S. auto transport corridors with distance, cost, and transit time breakdowns.",
        "url": "https://www.americacartransport.com/routes",
        "publisher": {
          "@type": "Organization",
          "name": "America Car Transport",
          "url": "https://www.americacartransport.com"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.americacartransport.com/routes#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com" },
          { "@type": "ListItem", "position": 2, "name": "Popular Routes", "item": "https://www.americacartransport.com/routes" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.americacartransport.com/routes#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does cross-country car shipping take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Coast-to-coast car shipping (e.g. California to New York or Florida) typically takes 5 to 7 days in transit."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* Navigation Header */}
      <SiteHeader active="routes" />

      {/* Visual Breadcrumb Bar */}
      <div className="bg-slate-900 border-b border-slate-800 py-3 px-4 md:px-8 text-xs font-semibold text-slate-400">
        <div className="max-w-[1400px] mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <span className="text-slate-700">/</span>
          <span className="text-white font-bold">Popular Routes</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative px-4 md:px-8 lg:px-24 pt-10 pb-16 bg-paper bg-grid-pattern border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection direction="up">
            <p className="act-eyebrow !mb-5">Interstate Auto Transport Corridors</p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-5">
              Popular Car Shipping Routes Directory
            </h1>

            <p className="text-base md:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl">
              Explore pricing breakdowns, transit times, and carrier dispatch schedules for major cross-country and regional shipping routes across the United States.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Routes Grid */}
      <section className="py-16 bg-white border-b border-slate-200 font-sans">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {POPULAR_ROUTES.map((route, idx) => (
              <AnimatedCard key={idx} delay={idx * 0.1}>
                <Link 
                  href={route.href}
                  className="group bg-slate-50 hover:bg-blue-50/50 border border-slate-200/90 hover:border-blue-300 p-8 rounded-3xl transition-all shadow-sm hover:shadow-md flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {route.origin} → {route.dest}
                      </span>
                      <span className={`text-[11px] font-extrabold text-white px-2.5 py-1 rounded-full ${route.badgeColor}`}>
                        {route.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors mb-4">
                      {route.title}
                    </h2>

                    <div className="grid grid-cols-3 gap-3 text-xs font-semibold text-slate-600 mb-6 bg-white p-3.5 rounded-2xl border border-slate-200">
                      <div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase">Distance</div>
                        <div className="font-extrabold text-slate-900 mt-0.5">{route.miles}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase">Transit</div>
                        <div className="font-extrabold text-blue-600 mt-0.5">{route.time}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase">Cost</div>
                        <div className="font-extrabold text-emerald-700 mt-0.5">{route.cost}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-blue-600 font-extrabold text-sm group-hover:translate-x-1 transition-transform">
                    <span>View Full Route Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
