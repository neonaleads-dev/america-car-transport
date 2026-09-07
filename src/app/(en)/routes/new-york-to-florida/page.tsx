import React from "react";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import AnimatedSection, { AnimatedCard } from "@/components/ui/AnimatedSection";
import { ShieldCheck, MapPin, Clock, DollarSign, Train, AlertCircle, FileText, CheckCircle2, Phone, HelpCircle, ChevronDown, ExternalLink, ArrowRight } from "lucide-react";

export const metadata = {
  title: "New York to Florida Car Transport | Cost, Time & Quotes — America Car Transport",
  description: "Ship your car from New York to Florida with licensed, insured carriers. Get an instant quote, compare open vs. enclosed rates, and see real transit times for this popular snowbird route.",
  alternates: {
    canonical: "https://www.americacartransport.com/routes/new-york-to-florida",
  },
  openGraph: {
    title: "New York to Florida Car Transport | Cost, Time & Quotes — America Car Transport",
    description: "Ship your car from New York to Florida with licensed, insured carriers. Get an instant quote, compare open vs. enclosed rates, and see real transit times for this popular snowbird route.",
    url: "https://www.americacartransport.com/routes/new-york-to-florida",
    siteName: "America Car Transport",
    type: "website",
  },
};

const ROUTE_FAQS = [
  {
    q: "Is it cheaper to drive or ship a car to Florida?",
    a: "For a one-time move, shipping is often more cost-effective than driving once you factor in gas, tolls, meals, lodging, and 2+ days of your own time — especially relevant for the 1,100+ mile New York to Florida distance."
  },
  {
    q: "How far is it from New York to Florida for car transport?",
    a: "Approximately 1,100–1,300 miles depending on your specific origin and destination cities, translating to a typical 3–6 day transit window."
  },
  {
    q: "Does car shipping from New York to Florida include insurance?",
    a: "Yes — every shipment includes cargo insurance as part of the quoted price, with $100,000 coverage on open carriers and $500,000 on enclosed carriers."
  },
  {
    q: "Can I track my car during transport?",
    a: "Yes, shipment status is trackable throughout the transit window from pickup to delivery."
  },
  {
    q: "Can I ship a leased car from New York to Florida?",
    a: "Yes, though you should confirm with your leasing company whether they require advance notice or authorization before shipment."
  },
  {
    q: "Can I ship a car with an expired registration?",
    a: "Yes — the vehicle is being transported on a carrier, not driven, so registration status doesn&apos;t affect eligibility for shipping."
  },
  {
    q: "Is open transport safe for a car?",
    a: "Yes — open transport is the industry-standard method used for roughly 90% of all vehicle shipments nationwide, including new cars delivered to dealerships."
  },
  {
    q: "What happens if my car is damaged during shipping?",
    a: "Every shipment is covered by cargo insurance; any damage is documented against your pickup inspection report and handled through the carrier's insurance claim process."
  }
];

export default function NewYorkToFloridaRoutePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com/"},
          {"@type": "ListItem", "position": 2, "name": "Routes", "item": "https://www.americacartransport.com/routes"},
          {"@type": "ListItem", "position": 3, "name": "New York to Florida", "item": "https://www.americacartransport.com/routes/new-york-to-florida"}
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Auto Transport",
        "provider": {
          "@type": "Organization",
          "name": "America Car Transport",
          "url": "https://www.americacartransport.com",
          "telephone": "(530) 725-5383"
        },
        "areaServed": [
          {"@type": "State", "name": "New York"},
          {"@type": "State", "name": "Florida"}
        ],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "900",
          "highPrice": "2000"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": ROUTE_FAQS.map(faq => ({
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

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

      <section className="relative px-4 md:px-8 lg:px-24 pt-10 pb-16 bg-[#F8FAFC] bg-grid-pattern border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <AnimatedSection direction="up" className="lg:col-span-7">
            <nav className="flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-500 mb-4">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/routes" className="hover:text-blue-600 transition-colors">Routes</Link>
              <span>/</span>
              <span className="text-slate-900 font-bold">New York to Florida</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-800 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-blue-200/80 shadow-sm">
              <MapPin className="w-4 h-4 text-blue-600" />
              Top Snowbird Route (~1,100–1,300 Miles)
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] leading-[1.1] font-black text-slate-900 tracking-tight mb-5">
              New York to Florida Car Transport
            </h1>

            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mb-8">
              Shipping a car from New York to Florida is one of the most heavily traveled auto transport corridors in the country, driven by snowbird relocations, retirees moving south, students heading to Florida schools, and military PCS orders. Yes, you can ship a car from New York to Florida — America Car Transport moves vehicles along this route year-round using licensed, insured carriers, with door-to-door pickup available from anywhere in New York State.
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-xl">
              <AnimatedCard delay={0.1}>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-xs text-slate-500 font-bold uppercase">Distance</div>
                  <div className="text-xl font-black text-slate-900">1.1k+ mi</div>
                  <div className="text-[11px] text-slate-500 font-semibold mt-1">East Coast</div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-xs text-slate-500 font-bold uppercase">Transit Time</div>
                  <div className="text-xl font-black text-blue-600">3–6 Days</div>
                  <div className="text-[11px] text-emerald-700 font-semibold mt-1">Daily Dispatches</div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.3}>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-xs text-slate-500 font-bold uppercase">Cost Range</div>
                  <div className="text-xl font-black text-emerald-700">$900+</div>
                  <div className="text-[11px] text-slate-500 font-semibold mt-1">Zero Deposit</div>
                </div>
              </AnimatedCard>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2} className="lg:col-span-5 flex justify-center lg:justify-end">
            <QuoteCalculator />
          </AnimatedSection>

        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-200 font-sans">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8 space-y-16">
          
          <article className="space-y-6">
            <AnimatedSection direction="up">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                New York to Florida Car Shipping Cost &amp; Transit Time
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium mt-2">
                Shipping a car from New York to Florida typically costs <strong>$900–$1,400 on open transport</strong> and <strong>$1,300–$2,000 on enclosed transport</strong>, with delivery in 3–6 days.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1}>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
                <table className="w-full text-left text-sm font-medium">
                  <thead className="bg-slate-100 text-slate-900 font-black text-xs uppercase border-b border-slate-200">
                    <tr>
                      <th className="py-3.5 px-4">Transport Type</th>
                      <th className="py-3.5 px-4">Typical Cost</th>
                      <th className="py-3.5 px-4">Transit Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Open Carrier</td>
                      <td className="py-3.5 px-4 font-extrabold text-blue-600">$900 – $1,400</td>
                      <td className="py-3.5 px-4">3 – 6 days</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Enclosed Carrier</td>
                      <td className="py-3.5 px-4 font-extrabold text-blue-600">$1,300 – $2,000</td>
                      <td className="py-3.5 px-4">3 – 6 days</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Expedited (either type)</td>
                      <td className="py-3.5 px-4 font-extrabold text-blue-600">+15–25% premium</td>
                      <td className="py-3.5 px-4">2 – 4 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-2 font-medium">
                Distance is approximately 1,100–1,300 miles depending on your exact origin and destination. As with all major snowbird corridors, pricing rises during peak relocation windows — fall (Sept–Nov) as snowbirds head south, and spring (Mar–Apr) as they return north. Booking 2–3 weeks ahead of a peak-season date typically secures better rates and faster carrier matching. Use our <Link href="/tools/car-shipping-cost-calculator" className="text-blue-600 underline font-bold">Cost Calculator</Link> for a real-time quote based on your specific cities and vehicle.
              </p>
            </AnimatedSection>
          </article>

          <article className="space-y-6">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Shipping From Anywhere in New York State
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                We provide pickup across all of New York, not just NYC — carriers regularly service:
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1}>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
                <table className="w-full text-left text-sm font-medium">
                  <thead className="bg-slate-100 text-slate-900 font-black text-xs uppercase border-b border-slate-200">
                    <tr>
                      <th className="py-3.5 px-4">Origin City</th>
                      <th className="py-3.5 px-4">Approx. Distance to FL</th>
                      <th className="py-3.5 px-4">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">New York City</td>
                      <td className="py-3.5 px-4">~1,100 – 1,300 mi</td>
                      <td className="py-3.5 px-4">Highest carrier availability in the state</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Long Island / Brooklyn / Queens</td>
                      <td className="py-3.5 px-4">~1,150 – 1,350 mi</td>
                      <td className="py-3.5 px-4">Often consolidated with NYC-area pickups</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Buffalo</td>
                      <td className="py-3.5 px-4">~1,300 – 1,500 mi</td>
                      <td className="py-3.5 px-4">Slightly longer transit due to northern location</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Rochester</td>
                      <td className="py-3.5 px-4">~1,300 – 1,450 mi</td>
                      <td className="py-3.5 px-4">Similar timing to Buffalo</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Albany</td>
                      <td className="py-3.5 px-4">~1,150 – 1,350 mi</td>
                      <td className="py-3.5 px-4">Central NY, standard timing</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Syracuse</td>
                      <td className="py-3.5 px-4">~1,250 – 1,400 mi</td>
                      <td className="py-3.5 px-4">Standard upstate timing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-2 font-medium">
                *New Jersey pickups are frequently routed alongside New York shipments given the shared regional carrier network, so if you&apos;re just across the state line, you&apos;ll typically see similar pricing and timing.
              </p>
            </AnimatedSection>
          </article>

          <article className="space-y-6">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Popular Florida Delivery Destinations
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1}>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
                <table className="w-full text-left text-sm font-medium">
                  <thead className="bg-slate-100 text-slate-900 font-black text-xs uppercase border-b border-slate-200">
                    <tr>
                      <th className="py-3.5 px-4">Destination</th>
                      <th className="py-3.5 px-4">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Miami</td>
                      <td className="py-3.5 px-4">High-demand snowbird endpoint; frequent carrier trips</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Fort Lauderdale</td>
                      <td className="py-3.5 px-4">Same corridor as Miami, minimal timing difference</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">West Palm Beach</td>
                      <td className="py-3.5 px-4">Popular retiree destination</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Orlando</td>
                      <td className="py-3.5 px-4">Central FL; slightly different routing than coastal cities</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Tampa</td>
                      <td className="py-3.5 px-4">West coast FL; standard timing on this corridor</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Jacksonville</td>
                      <td className="py-3.5 px-4">Northernmost major FL destination — often the shortest transit time from NY</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </article>

          <article className="space-y-4">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Transport Service Options for This Route
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                All standard transport types are available for New York to Florida shipments, with door-to-door service included on most quotes at no extra charge.
              </p>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-700 font-medium mt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Open Transport</strong> — the standard, most affordable option, used for the majority of NY-FL shipments (<Link href="/services/open-auto-transport" className="text-blue-600 underline font-bold">Open Transport</Link>)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Enclosed Transport</strong> — recommended for classic, luxury, or exotic vehicles; full weather and road-debris protection (<Link href="/services/enclosed-auto-transport" className="text-blue-600 underline font-bold">Enclosed Transport</Link>)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Door-to-Door Delivery</strong> — pickup and drop-off at your exact addresses, the default for this route (<Link href="/services/door-to-door-transport" className="text-blue-600 underline font-bold">Door-to-Door Transport</Link>)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Terminal-to-Terminal</strong> — a lower-cost alternative if you can drop off and collect from a depot (<Link href="/services/terminal-to-terminal-shipping" className="text-blue-600 underline font-bold">Terminal-to-Terminal Shipping</Link>)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Expedited Shipping</strong> — priority dispatch for time-sensitive moves, common for last-minute relocations or PCS orders</span>
                </li>
              </ul>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium mt-4">
                Guaranteed pickup-date service is available on this corridor for an additional fee — ask your booking agent if your move has a hard deadline.
              </p>
            </AnimatedSection>
          </article>

          <article className="space-y-6">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Shipping Cost by Vehicle Type (New York to Florida)
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1}>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
                <table className="w-full text-left text-sm font-medium">
                  <thead className="bg-slate-100 text-slate-900 font-black text-xs uppercase border-b border-slate-200">
                    <tr>
                      <th className="py-3.5 px-4">Vehicle Type</th>
                      <th className="py-3.5 px-4">Typical Adjustment</th>
                      <th className="py-3.5 px-4">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Sedan</td>
                      <td className="py-3.5 px-4">Baseline</td>
                      <td className="py-3.5 px-4">Standard NY-FL pricing above</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">SUV / Van</td>
                      <td className="py-3.5 px-4">+10–15%</td>
                      <td className="py-3.5 px-4">Slightly more trailer space needed</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Pickup Truck</td>
                      <td className="py-3.5 px-4">+15–20%</td>
                      <td className="py-3.5 px-4">Higher for full-size models</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Motorcycle</td>
                      <td className="py-3.5 px-4">−30–40% (lower base)</td>
                      <td className="py-3.5 px-4">Often consolidated with other shipments</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Electric Vehicle</td>
                      <td className="py-3.5 px-4">+5–10%</td>
                      <td className="py-3.5 px-4">Extra care for battery weight/charge-state</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Non-Running / Inoperable</td>
                      <td className="py-3.5 px-4">+$100–$200 flat</td>
                      <td className="py-3.5 px-4">Requires winch-equipped carrier</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Classic / Luxury</td>
                      <td className="py-3.5 px-4">+40–60%</td>
                      <td className="py-3.5 px-4">Enclosed transport strongly recommended</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">RV / Boat</td>
                      <td className="py-3.5 px-4">Custom quote</td>
                      <td className="py-3.5 px-4">Requires specialized carrier — call for pricing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </article>

          <article className="space-y-4">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Who Ships on This Route
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                This corridor sees especially high demand from a few specific groups:
              </p>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-700 font-medium mt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Snowbirds</strong> relocating seasonally between New York and Florida each fall and spring — the single highest-volume use case on this route</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Retirees</strong> making a permanent move south</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Students</strong> shipping a vehicle to or from Florida colleges at semester start/end</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Military families</strong> under PCS orders, often needing expedited or guaranteed-pickup service</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Dealers</strong> and individual sellers relocating a purchased or leased vehicle sight-unseen</span>
                </li>
              </ul>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium mt-4">
                Whatever your situation, the process and pricing above apply the same way — reach out if your move has specific timing constraints and we&apos;ll flag the right service tier.
              </p>
            </AnimatedSection>
          </article>

          <article className="space-y-4">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                How the Process Works
              </h2>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-700 font-medium mt-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Get your instant quote</strong> — enter your pickup/delivery ZIP codes, vehicle details, and preferred transport type using our <Link href="/tools/car-shipping-cost-calculator" className="text-blue-600 underline font-bold">Cost Calculator</Link>. No email required.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Book with zero upfront deposit</strong> — confirm your pickup window; no payment is due until your vehicle is dispatched.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Vehicle inspection at pickup</strong> — your driver documents your vehicle&apos;s condition before loading, which becomes your reference point at delivery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Transit and tracking</strong> — most customers can track shipment status throughout the 3–6 day transit window.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Delivery and final inspection</strong> — your vehicle is delivered directly to your Florida address, with a final walk-around inspection against the pickup documentation.</span>
                </li>
              </ul>
              <p className="text-slate-900 text-lg font-bold mt-6">What to know before booking:</p>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-700 font-medium mt-4">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>You may keep up to 100 lbs of personal items in the trunk or cargo area, secured in a box or bag — but these items aren&apos;t covered by cargo insurance, and hazardous materials, firearms, and illegal items are never permitted.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>Cargo insurance is included on every shipment — $100,000 coverage on open carriers, $500,000 on enclosed carriers — with no separate line-item cost to you.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>A car with expired registration can still be shipped, since it&apos;s being transported, not driven — but confirm your Florida registration timeline separately, as this route doesn&apos;t affect DMV requirements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>Leased vehicles can be shipped, though some leasing companies require notice or authorization — check your lease agreement or contact your leasing company before booking if you&apos;re unsure.</span>
                </li>
              </ul>
            </AnimatedSection>
          </article>

          <AnimatedSection direction="up">
            <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950 text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-blue-500/30">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  Direct Carrier Dispatch
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4">
                  Why Ship With America Car Transport
                </h2>
                
                <ul className="space-y-3 text-xs md:text-sm text-slate-200 font-medium mb-8">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span><strong>Fully Licensed &amp; Bonded:</strong> We are a licensed auto transport broker (<Link href="/licensing-insurance" className="text-blue-400 underline font-bold">verify our credentials</Link>).</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span><strong>Zero Upfront Deposit:</strong> Pay nothing until your carrier is assigned.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span><strong>No Email Required:</strong> Get an instant quote immediately.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span><strong>Real Customer Reviews:</strong> <Link href="/reviews" className="text-blue-400 underline font-bold">See verified customer reviews (4.9/5.0 rating from 10,450+ reviews)</Link>.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span><strong>Avoid Scams:</strong> Read our <Link href="/resources/how-to-avoid-car-shipping-scams" className="text-blue-400 underline font-bold">Scam Avoidance Guide</Link> before booking with any provider.</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/tools/car-shipping-cost-calculator" 
                    className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] text-white px-6 py-3.5 rounded-xl font-extrabold text-xs md:text-sm shadow-md hover:shadow-lg"
                  >
                    Get Instant New York to Florida Quote →
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="pt-8">
            <AnimatedSection direction="up">
              <div className="text-center max-w-xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                  <HelpCircle className="w-4 h-4 text-blue-600" />
                  Route FAQs
                </div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions
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
