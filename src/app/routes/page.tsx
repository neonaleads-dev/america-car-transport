import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import AnimatedSection, { AnimatedCard } from "@/components/ui/AnimatedSection";
import { MapPin, ArrowRight, Phone, ShieldCheck, Clock, DollarSign } from "lucide-react";

export const metadata = {
  title: "Popular Interstate Car Shipping Routes | America Car Transport",
  description: "Compare car shipping costs, transit times, and carrier dispatches for popular cross-country routes across the United States.",
  alternates: {
    canonical: "https://americacartransport.com/routes",
  },
};

const POPULAR_ROUTES = [
  {
    title: "California to Florida Car Shipping",
    origin: "California",
    dest: "Florida",
    miles: "~2,700 mi",
    time: "5–7 Days",
    cost: "$1,050 – $1,600",
    href: "/routes/california-to-florida",
    badge: "Most Popular",
    badgeColor: "bg-blue-600"
  },
  {
    title: "California to New York Car Shipping",
    origin: "California",
    dest: "New York",
    miles: "~2,789 mi",
    time: "5–7 Days",
    cost: "$1,150 – $1,750",
    href: "/routes/california-to-florida",
    badge: "Cross-Country",
    badgeColor: "bg-purple-600"
  },
  {
    title: "Texas to California Car Shipping",
    origin: "Texas",
    dest: "California",
    miles: "~1,435 mi",
    time: "3–5 Days",
    cost: "$950 – $1,350",
    href: "/locations/california",
    badge: "High Volume",
    badgeColor: "bg-emerald-600"
  },
  {
    title: "Washington to California Auto Transport",
    origin: "Washington",
    dest: "California",
    miles: "~1,250 mi",
    time: "3–4 Days",
    cost: "$890 – $1,250",
    href: "/locations/california",
    badge: "West Coast",
    badgeColor: "bg-amber-600"
  }
];

export default function RoutesHubPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://americacartransport.com/routes#webpage",
        "name": "Interstate Car Shipping Routes Directory",
        "description": "Directory of major U.S. auto transport corridors with distance, cost, and transit time breakdowns.",
        "url": "https://americacartransport.com/routes",
        "publisher": {
          "@type": "Organization",
          "name": "America Car Transport",
          "url": "https://americacartransport.com"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://americacartransport.com/routes#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://americacartransport.com" },
          { "@type": "ListItem", "position": 2, "name": "Popular Routes", "item": "https://americacartransport.com/routes" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://americacartransport.com/routes#faq",
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
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between gap-4">
          <Link href="/" title="America Car Transport Homepage" className="flex items-center shrink-0 my-auto">
            <img 
              src="/america-car-transport-logo.png" 
              alt="America Car Transport - Nationwide Auto Transport Company Logo" 
              title="America Car Transport Official Logo"
              width={160}
              height={72}
              // @ts-ignore
              fetchpriority="high"
              className="h-[52px] sm:h-[58px] md:h-[64px] lg:h-[72px] w-auto object-contain transition-transform hover:scale-[1.02]"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-slate-700 font-semibold text-sm">
            <Link href="/#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</Link>
            <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
            <Link href="/locations" className="hover:text-blue-600 transition-colors">Locations</Link>
            <Link href="/routes" className="text-blue-600 font-bold">Routes</Link>
            <Link href="/reviews" className="hover:text-blue-600 transition-colors">Reviews</Link>
            <Link href="/licensing-insurance" className="hover:text-blue-600 transition-colors">Licensing &amp; Insurance</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:5307255383" className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs rounded-xl">
              <Phone className="w-3.5 h-3.5" />
              (530) 725-5383
            </a>
            <Link href="/tools/car-shipping-cost-calculator" className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] text-white px-4 py-2 rounded-xl text-xs md:text-sm font-extrabold shadow-sm">
              Get Instant Quote
            </Link>
          </div>
        </div>
      </header>

      {/* Visual Breadcrumb Bar */}
      <div className="bg-slate-900 border-b border-slate-800 py-3 px-4 md:px-8 text-xs font-semibold text-slate-400">
        <div className="max-w-[1400px] mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <span className="text-slate-700">/</span>
          <span className="text-white font-bold">Popular Routes</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative px-4 md:px-8 lg:px-24 pt-10 pb-16 bg-[#F8FAFC] bg-grid-pattern border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-800 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-blue-200/80 shadow-sm">
              <MapPin className="w-4 h-4 text-blue-600" />
              Interstate Auto Transport Corridors
            </div>

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
