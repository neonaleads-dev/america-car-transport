import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import AnimatedSection, { AnimatedCard } from "@/components/ui/AnimatedSection";
import { ShieldCheck, MapPin, Clock, DollarSign, Train, AlertCircle, FileText, CheckCircle2, Phone, HelpCircle, ChevronDown, ExternalLink, ArrowRight } from "lucide-react";

export const metadata = {
  title: "California to Florida Car Shipping | Cost & Transit Time",
  description: "Ship a car from California to Florida — real 2026 pricing, transit times, and answers to common questions. Zero upfront deposit. Get an instant quote.",
  alternates: {
    canonical: "https://americacartransport.com/routes/california-to-florida",
  },
  openGraph: {
    title: "California to Florida Car Shipping | Cost & Transit Time",
    description: "Ship a car from California to Florida — real 2026 pricing, transit times, and answers to common questions. Zero upfront deposit. Get an instant quote.",
    url: "https://americacartransport.com/routes/california-to-florida",
    siteName: "America Car Transport",
    type: "website",
  },
};

const ROUTE_FAQS = [
  {
    q: "What is the cheapest way to ship a car from California to Florida?",
    a: "Choose open transport, consider terminal-to-terminal delivery if your schedule allows, avoid peak winter snowbird season, and keep your pickup date flexible rather than fixed."
  },
  {
    q: "How long does it take to ship a car from CA to FL?",
    a: "Typically 5 to 7 days in transit for this roughly 2,700-mile cross-country route, depending on carrier availability and pickup flexibility."
  },
  {
    q: "Is it cheaper to drive or ship my car?",
    a: "For this ~2,700-mile route, shipping ($1,100–$1,600) is typically comparable to or cheaper than driving once fuel ($650–$950+), 3–5 days of lodging, meals, and vehicle wear are factored in."
  },
  {
    q: "How much does it cost to have a car shipped from California?",
    a: "Costs vary by destination city, but California to Florida typically runs $1,100–$1,600 on open transport for standard operable sedans."
  },
  {
    q: "How much does it cost to ship a car from San Diego to Florida?",
    a: "Typically $1,050–$1,500 on open transport, depending on the exact Florida destination city (Orlando, Miami, Jacksonville)."
  },
  {
    q: "How much does it cost to put a car on a train to Florida?",
    a: "There is no passenger train option connecting California to Florida. The Amtrak Auto Train only runs between Lorton, Virginia and Sanford, Florida. Professional carrier-based auto transport is the only shipping option for this route."
  },
  {
    q: "Do I need insurance when shipping a car?",
    a: "Generally no separate purchase is required — licensed carriers are legally required to carry primary cargo insurance covering your vehicle while in transit."
  },
  {
    q: "What documents do I need to ship a car?",
    a: "Vehicle registration, proof of insurance, a valid photo ID, and a signed Bill of Lading (BOL) at pickup and delivery."
  }
];

export default function CaliforniaToFloridaRoutePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://americacartransport.com/routes/california-to-florida#service",
        "serviceType": "California to Florida Car Shipping",
        "name": "California to Florida Car Shipping",
        "description": "Auto transport from California to Florida, approximately 2,700 miles, typically taking 5 to 7 days.",
        "provider": {
          "@type": "MovingCompany",
          "name": "America Car Transport",
          "url": "https://americacartransport.com",
          "telephone": "+1-530-725-5383",
          "identifier": {
            "@type": "PropertyValue",
            "name": "USDOT",
            "value": "3849102"
          }
        },
        "areaServed": [
          { "@type": "State", "name": "California" },
          { "@type": "State", "name": "Florida" }
        ],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "1050",
          "highPrice": "1600",
          "offerCount": "1"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://americacartransport.com/routes/california-to-florida#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://americacartransport.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Routes",
            "item": "https://americacartransport.com/routes"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "California to Florida",
            "item": "https://americacartransport.com/routes/california-to-florida"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://americacartransport.com/routes/california-to-florida#faq",
        "mainEntity": ROUTE_FAQS.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
            <Link href="/faq" className="hover:text-blue-600 transition-colors">FAQ Hub</Link>
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

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 lg:px-24 pt-10 pb-16 bg-[#F8FAFC] bg-grid-pattern border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <AnimatedSection direction="up" className="lg:col-span-7">
            <nav className="flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-500 mb-4">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/routes" className="hover:text-blue-600 transition-colors">Routes</Link>
              <span>/</span>
              <span className="text-slate-900 font-bold">California to Florida</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-800 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-blue-200/80 shadow-sm">
              <MapPin className="w-4 h-4 text-blue-600" />
              Top Transcontinental Route (~2,700 Miles)
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] leading-[1.1] font-black text-slate-900 tracking-tight mb-5">
              California to Florida Car Shipping: Cost, Transit Time &amp; What to Know
            </h1>

            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mb-8">
              One of the most commonly booked long-haul routes in America. Get real 2026 pricing, transit times, and answers to everything you need to know before booking.
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-xl">
              <AnimatedCard delay={0.1}>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-xs text-slate-500 font-bold uppercase">Distance</div>
                  <div className="text-xl font-black text-slate-900">~2,700 mi</div>
                  <div className="text-[11px] text-slate-500 font-semibold mt-1">Cross-Country</div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-xs text-slate-500 font-bold uppercase">Transit Time</div>
                  <div className="text-xl font-black text-blue-600">5–7 Days</div>
                  <div className="text-[11px] text-emerald-700 font-semibold mt-1">Daily Dispatches</div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.3}>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-xs text-slate-500 font-bold uppercase">Cost Range</div>
                  <div className="text-xl font-black text-emerald-700">$1,050+</div>
                  <div className="text-[11px] text-slate-500 font-semibold mt-1">Zero Deposit</div>
                </div>
              </AnimatedCard>
            </div>
          </AnimatedSection>

          {/* Right Quote Widget */}
          <AnimatedSection direction="up" delay={0.2} className="lg:col-span-5 flex justify-center lg:justify-end">
            <QuoteCalculator />
          </AnimatedSection>

        </div>
      </section>

      {/* Main Route Content */}
      <section className="py-16 bg-white border-b border-slate-200 font-sans">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8 space-y-16">
          
          {/* Cost Section */}
          <article className="space-y-6">
            <AnimatedSection direction="up">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                How Much Does It Cost to Ship a Car From California to Florida?
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium mt-2">
                Shipping a car from California to Florida — a roughly 2,700-mile cross-country route — typically costs <strong>$1,100–$1,600 on open transport</strong>, depending on your exact cities, vehicle size, season, and pickup flexibility.
              </p>
            </AnimatedSection>

            {/* City Pair Table */}
            <AnimatedSection direction="up" delay={0.1}>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">Popular California to Florida City Pair Pricing (2026)</h3>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
                <table className="w-full text-left text-sm font-medium">
                  <thead className="bg-slate-100 text-slate-900 font-black text-xs uppercase border-b border-slate-200">
                    <tr>
                      <th className="py-3.5 px-4">Route</th>
                      <th className="py-3.5 px-4">Distance</th>
                      <th className="py-3.5 px-4">Typical Cost (Open)</th>
                      <th className="py-3.5 px-4">Transit Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Los Angeles, CA → Miami, FL</td>
                      <td className="py-3.5 px-4">~2,700 miles</td>
                      <td className="py-3.5 px-4 font-extrabold text-blue-600">$1,100 – $1,600</td>
                      <td className="py-3.5 px-4">5–7 days</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">San Diego, CA → Orlando, FL</td>
                      <td className="py-3.5 px-4">~2,500 miles</td>
                      <td className="py-3.5 px-4 font-extrabold text-blue-600">$1,050 – $1,500</td>
                      <td className="py-3.5 px-4">5–7 days</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">San Francisco, CA → Jacksonville, FL</td>
                      <td className="py-3.5 px-4">~2,600 miles</td>
                      <td className="py-3.5 px-4 font-extrabold text-blue-600">$1,100 – $1,550</td>
                      <td className="py-3.5 px-4">5–7 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-2 font-medium">
                *Enclosed transport runs 30–60% higher than these open transport ranges. See <Link href="/services/enclosed-auto-transport" className="text-blue-600 underline font-bold">Enclosed Auto Transport</Link> for details.
              </p>
            </AnimatedSection>

            {/* Direct Answer Callout */}
            <AnimatedSection direction="up" delay={0.1}>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm">
                <span className="text-blue-900 font-extrabold block text-xs uppercase tracking-wider mb-1">
                  ⚡ Direct Answer — CA to FL Shipping Cost
                </span>
                Shipping a car from California to Florida typically costs $1,100–$1,600 on open transport for this roughly 2,700-mile cross-country route. Exact pricing depends on your specific cities, vehicle size, season, and how flexible your pickup date is.
              </div>
            </AnimatedSection>

            {/* San Diego Specific Subhead */}
            <AnimatedSection direction="up" delay={0.2}>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">San Diego to Florida Specifically</h3>
              <div className="bg-slate-50 border-l-4 border-emerald-500 p-4 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm">
                <span className="text-emerald-800 font-extrabold block text-xs uppercase tracking-wider mb-1">
                  📍 Direct Answer — San Diego to Florida Shipping Cost
                </span>
                Shipping a car from San Diego to Florida typically costs $1,050–$1,500 on open transport, depending on the exact Florida destination city — slightly less than the Los Angeles to Florida range due to the marginally shorter distance to most Florida metro areas.
              </div>
            </AnimatedSection>
          </article>

          {/* Transit Time Section */}
          <article className="space-y-4">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                How Long Does It Take to Ship a Car From California to Florida?
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                Transit typically takes <strong>5 to 7 days</strong> for this route, depending on carrier routing, current demand, and how flexible your pickup window is. A fixed, exact-date pickup request can sometimes extend the wait for carrier availability compared to a flexible 3–5 day pickup window.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm">
                <span className="text-blue-900 font-extrabold block text-xs uppercase tracking-wider mb-1">
                  ⚡ Direct Answer — Transit Time
                </span>
                Shipping a car from California to Florida typically takes 5 to 7 days in transit, depending on carrier availability and how flexible your pickup window is.
              </div>
            </AnimatedSection>
          </article>

          {/* Cheapest Way Section */}
          <article className="space-y-4">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                What Is the Cheapest Way to Ship a Car From California to Florida?
              </h2>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Choose Open Transport:</strong> Standard multi-car haulers are the most affordable method (see <Link href="/services/open-auto-transport" className="text-blue-600 underline font-bold">Open Auto Transport</Link>).</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Choose Terminal-to-Terminal:</strong> Drop off and pick up at a carrier yard to save $100–$300 (see <Link href="/services/terminal-to-terminal-shipping" className="text-blue-600 underline font-bold">Terminal-to-Terminal Shipping</Link>).</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Avoid Peak Snowbird Season:</strong> Fall and winter months see heavy demand into Florida, which raises carrier rates on westbound-to-Florida routes.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Keep Dates Flexible:</strong> A 3–5 day flexible window costs less than requiring an exact-day pickup.</span>
                </li>
              </ul>

              <div className="bg-slate-50 border-l-4 border-blue-600 p-4 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm mt-3">
                <span className="text-blue-900 font-extrabold block text-xs uppercase tracking-wider mb-1">
                  ⚡ Direct Answer — Cheapest Rates
                </span>
                There&apos;s no single company with universally &ldquo;the cheapest&rdquo; rates — pricing depends on your specific route, timing, and carrier availability at the moment you book. The most reliable way to get the lowest real price is comparing an instant quote against your specific route — try our <Link href="/tools/car-shipping-cost-calculator" className="text-blue-600 underline font-bold">Cost Calculator</Link> — rather than relying on general marketing claims.
              </div>
            </AnimatedSection>
          </article>

          {/* Driving vs Shipping Section */}
          <article className="space-y-4">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Is It Cheaper to Drive or Ship My Car?
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                For a route this long, shipping is usually comparable to or cheaper than driving once real costs are factored in. Driving 2,700 miles typically costs <strong>$650–$950+ in fuel alone</strong> at current prices, plus 3–5 days of lodging, meals, and significant mileage added to your vehicle — expenses that often meet or exceed the cost of a standard open-transport shipment.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm">
                <span className="text-blue-900 font-extrabold block text-xs uppercase tracking-wider mb-1">
                  🚗 Direct Answer — Driving vs. Shipping
                </span>
                For the California-to-Florida route, shipping is typically comparable to or cheaper than driving once fuel, lodging, meals, and mileage wear are factored in. Driving this ~2,700-mile route alone can cost $650–$950+ in fuel plus several days of travel expenses.
              </div>
            </AnimatedSection>
          </article>

          {/* Fact-Checked Train Section */}
          <article className="space-y-4">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Can I Put My Car on a Train From California to Florida?
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                No — this isn&apos;t currently possible. The Amtrak Auto Train, the only consumer rail option in the U.S. that lets you ship your car with you on the same trip, runs exclusively between <strong>Lorton, Virginia and Sanford, Florida</strong>. It does not serve California or any West Coast city.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm">
                <span className="text-amber-900 font-extrabold block text-xs uppercase tracking-wider mb-1">
                  🚂 Fact-Checked Direct Answer — Rail Shipping
                </span>
                There is no train option for shipping a car from California to Florida. The Amtrak Auto Train — the only U.S. passenger rail service that transports vehicles — runs exclusively between Lorton, Virginia and Sanford, Florida, and does not serve California. Professional carrier-based auto transport is the only shipping option for this route.
              </div>
            </AnimatedSection>
          </article>

          {/* Insurance Section */}
          <article className="space-y-4">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Do I Need Insurance When Shipping a Car?
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                You don&apos;t need to purchase separate insurance in most cases — licensed carriers are required to carry cargo insurance covering your vehicle while it&apos;s in their possession. Learn how to verify a carrier&apos;s licensing and insurance before booking in our full <Link href="/resources/how-to-avoid-car-shipping-scams" className="text-blue-600 underline font-bold">Scam Avoidance Guide</Link>.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm">
                <span className="text-blue-900 font-extrabold block text-xs uppercase tracking-wider mb-1">
                  🛡️ Direct Answer — Insurance Coverage
                </span>
                You generally don&apos;t need to buy separate insurance to ship a car — licensed carriers are legally required to carry cargo insurance covering your vehicle in transit. It&apos;s still worth confirming the coverage limit matches your vehicle&apos;s value, especially for higher-value vehicles.
              </div>
            </AnimatedSection>
          </article>

          {/* Documents Section */}
          <article className="space-y-4">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                What Documents Do I Need to Ship a Car?
              </h2>
              <ul className="space-y-2 text-xs md:text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Vehicle registration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Proof of insurance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Valid photo ID</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Signed Bill of Lading (BOL) at pickup and delivery</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 font-medium">
                *No title transfer is required for standard interstate shipping, since you are not selling the vehicle.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-2xl text-slate-800 text-xs md:text-sm font-medium leading-relaxed shadow-sm mt-3">
                <span className="text-blue-900 font-extrabold block text-xs uppercase tracking-wider mb-1">
                  📋 Direct Answer — Documents Required
                </span>
                To ship a car, you&apos;ll typically need your vehicle registration, proof of insurance, a valid ID, and a signed Bill of Lading at pickup and delivery. No title transfer is required for standard shipping.
              </div>
            </AnimatedSection>
          </article>

          {/* Why Ship With Us CTA Block */}
          <AnimatedSection direction="up">
            <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950 text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-blue-500/30">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  Direct Carrier Dispatch
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4">
                  Why Ship This Route With America Car Transport?
                </h2>
                
                <ul className="space-y-3 text-xs md:text-sm text-slate-200 font-medium mb-8">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span><strong>Fully Licensed &amp; Bonded:</strong> USDOT #3849102, MC #1098472 (<Link href="/licensing-insurance" className="text-blue-400 underline font-bold">verify our credentials</Link>).</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span><strong>Zero Upfront Deposit:</strong> Pay nothing until your carrier is assigned.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span><strong>Real Customer Reviews:</strong> <Link href="/reviews" className="text-blue-400 underline font-bold">See verified customer reviews</Link>.</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/tools/car-shipping-cost-calculator" 
                    className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] text-white px-6 py-3.5 rounded-xl font-extrabold text-xs md:text-sm shadow-md hover:shadow-lg"
                  >
                    Get Instant California to Florida Quote →
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* FAQ Accordion */}
          <div className="pt-8">
            <AnimatedSection direction="up">
              <div className="text-center max-w-xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                  <HelpCircle className="w-4 h-4 text-blue-600" />
                  Route FAQs
                </div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  California to Florida Shipping FAQs
                </h2>
              </div>
            </AnimatedSection>

            <div className="space-y-3">
              {ROUTE_FAQS.map((faq, idx) => (
                <AnimatedCard key={idx} delay={idx * 0.05}>
                  <details className="bg-slate-50 rounded-2xl border border-slate-200 p-4 group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between font-extrabold text-slate-900 text-sm md:text-base cursor-pointer">
                      <span>{faq.q}</span>
                      <ChevronDown className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-2" />
                    </summary>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium mt-3 pt-3 border-t border-slate-200/80">
                      {faq.a}
                    </p>
                  </details>
                </AnimatedCard>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
