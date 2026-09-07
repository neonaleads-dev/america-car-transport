import React from "react";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import AnimatedSection, { AnimatedCard } from "@/components/ui/AnimatedSection";
import { ShieldCheck, MapPin, Clock, DollarSign, Train, AlertCircle, FileText, CheckCircle2, Phone, HelpCircle, ChevronDown, ExternalLink, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Florida to California Car Transport | Cost, Time & Quotes — America Car Transport",
  description: "Ship your car from Florida to California with licensed, insured carriers. Get an instant quote, compare open vs. enclosed rates, and see real transit times for this popular cross-country route.",
  alternates: {
    canonical: "https://www.americacartransport.com/routes/florida-to-california",
  },
  openGraph: {
    title: "Florida to California Car Transport | Cost, Time & Quotes — America Car Transport",
    description: "Ship your car from Florida to California with licensed, insured carriers. Get an instant quote, compare open vs. enclosed rates, and see real transit times for this popular cross-country route.",
    url: "https://www.americacartransport.com/routes/florida-to-california",
    siteName: "America Car Transport",
    type: "website",
  },
};

const ROUTE_FAQS = [
  {
    q: "How far is Florida from California by car transport?",
    a: "Between roughly 2,400 and 2,800 miles depending on your specific origin and destination cities, making this one of the longer domestic routes we service."
  },
  {
    q: "How long does it take to ship a car from Florida to California?",
    a: "Typically 6–10 days for standard door-to-door delivery; expedited service can shorten this to 4–7 days."
  },
  {
    q: "What's the cheapest way to ship a car from Florida to California?",
    a: "Open transport on standard (non-expedited) scheduling, booked outside peak snowbird and summer relocation windows, is typically the lowest-cost option for this route."
  },
  {
    q: "Is open transport safe for a car over this distance?",
    a: "Yes — open transport is the industry-standard method used for the majority of vehicle shipments nationwide, including long cross-country routes like this one."
  },
  {
    q: "Can I ship multiple vehicles from Florida to California at once?",
    a: "Yes — multi-car and fleet shipments are available; contact us directly for business or dealer volume pricing on this route."
  },
  {
    q: "Does the price change with the season?",
    a: "Yes — spring (as seasonal Florida residents return west) and summer relocation months typically see higher demand-driven pricing on this corridor."
  },
  {
    q: "Do I need to be present at both pickup and delivery?",
    a: "You or an authorized designee should be present at both ends to complete the vehicle inspection and sign off on condition."
  },
  {
    q: "What happens if my car is damaged during transport?",
    a: "Every shipment is covered by cargo insurance; any damage is documented against your pickup inspection report and handled through the carrier's claims process."
  }
];

export default function FloridaToCaliforniaRoutePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com/"},
          {"@type": "ListItem", "position": 2, "name": "Routes", "item": "https://www.americacartransport.com/routes"},
          {"@type": "ListItem", "position": 3, "name": "Florida to California", "item": "https://www.americacartransport.com/routes/florida-to-california"}
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
          {"@type": "State", "name": "Florida"},
          {"@type": "State", "name": "California"}
        ],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "1000",
          "highPrice": "2500"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How far is Florida from California by car transport?",
            "acceptedAnswer": {"@type": "Answer", "text": "Between roughly 2,400 and 2,800 miles depending on the specific origin and destination cities."}
          },
          {
            "@type": "Question",
            "name": "How long does it take to ship a car from Florida to California?",
            "acceptedAnswer": {"@type": "Answer", "text": "Typically 6–10 days for standard door-to-door delivery, or 4–7 days with expedited service."}
          },
          {
            "@type": "Question",
            "name": "What's the cheapest way to ship a car from Florida to California?",
            "acceptedAnswer": {"@type": "Answer", "text": "Open transport on standard scheduling, booked outside peak snowbird and summer relocation windows, is typically the lowest-cost option."}
          },
          {
            "@type": "Question",
            "name": "Can I ship multiple vehicles from Florida to California at once?",
            "acceptedAnswer": {"@type": "Answer", "text": "Yes, multi-car and fleet shipments are available with business or dealer volume pricing."}
          }
        ]
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
              <span className="text-slate-900 font-bold">Florida to California</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-800 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-blue-200/80 shadow-sm">
              <MapPin className="w-4 h-4 text-blue-600" />
              Cross-Country Route (~2,400–2,800 Miles)
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] leading-[1.1] font-black text-slate-900 tracking-tight mb-5">
              Florida to California Car Transport
            </h1>

            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mb-8">
              Shipping a car from Florida to California is one of the longest and most requested cross-country routes in our network, spanning nearly the entire continental U.S. Yes, we ship cars from Florida to California — whether you&apos;re relocating for work, sending a vehicle to a family member, or moving a dealer purchase, our licensed, insured carrier network covers this route year-round with door-to-door pickup available anywhere in Florida.
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-xl">
              <AnimatedCard delay={0.1}>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-xs text-slate-500 font-bold uppercase">Distance</div>
                  <div className="text-xl font-black text-slate-900">2.4k+ mi</div>
                  <div className="text-[11px] text-slate-500 font-semibold mt-1">Coast to Coast</div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-xs text-slate-500 font-bold uppercase">Transit Time</div>
                  <div className="text-xl font-black text-blue-600">6–10 Days</div>
                  <div className="text-[11px] text-emerald-700 font-semibold mt-1">Daily Dispatches</div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.3}>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-xs text-slate-500 font-bold uppercase">Cost Range</div>
                  <div className="text-xl font-black text-emerald-700">$1,000+</div>
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
                Florida to California Car Shipping Cost &amp; Transit Time
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium mt-2">
                Shipping a car from Florida to California typically costs <strong>$1,000–$1,800 on open transport</strong> and <strong>$1,500–$2,500 on enclosed transport</strong>, with delivery in 6–10 days.
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
                      <td className="py-3.5 px-4 font-extrabold text-blue-600">$1,000 – $1,800</td>
                      <td className="py-3.5 px-4">6 – 10 days</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Enclosed Carrier</td>
                      <td className="py-3.5 px-4 font-extrabold text-blue-600">$1,500 – $2,500</td>
                      <td className="py-3.5 px-4">6 – 10 days</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Expedited (either type)</td>
                      <td className="py-3.5 px-4 font-extrabold text-blue-600">+15–25% premium</td>
                      <td className="py-3.5 px-4">4 – 7 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-2 font-medium">
                Distance ranges from roughly 2,400 to 2,800 miles depending on your exact origin and destination cities — this is one of the longest domestic routes we offer, so pricing and timing sit at the higher end compared to shorter corridors. As with most coast-to-coast lanes, this route sees increased demand during snowbird season (spring, as seasonal Florida residents return to California) and summer relocation months. Use our <Link href="/tools/car-shipping-cost-calculator" className="text-blue-600 underline font-bold">Cost Calculator</Link> for a real-time quote based on your specific cities, vehicle, and dates.
              </p>
            </AnimatedSection>
          </article>

          <article className="space-y-6">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Shipping From Anywhere in Florida
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1}>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
                <table className="w-full text-left text-sm font-medium">
                  <thead className="bg-slate-100 text-slate-900 font-black text-xs uppercase border-b border-slate-200">
                    <tr>
                      <th className="py-3.5 px-4">Origin City</th>
                      <th className="py-3.5 px-4">Approx. Distance to CA</th>
                      <th className="py-3.5 px-4">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Miami</td>
                      <td className="py-3.5 px-4">~2,700 – 2,800 mi</td>
                      <td className="py-3.5 px-4">Longest transit on this route; high carrier availability</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Fort Lauderdale</td>
                      <td className="py-3.5 px-4">~2,700 – 2,800 mi</td>
                      <td className="py-3.5 px-4">Same corridor as Miami</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">West Palm Beach / Boca Raton</td>
                      <td className="py-3.5 px-4">~2,650 – 2,750 mi</td>
                      <td className="py-3.5 px-4">Standard South Florida timing</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Orlando</td>
                      <td className="py-3.5 px-4">~2,500 – 2,600 mi</td>
                      <td className="py-3.5 px-4">Central FL; slightly shorter than South Florida</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Tampa</td>
                      <td className="py-3.5 px-4">~2,450 – 2,550 mi</td>
                      <td className="py-3.5 px-4">West coast FL, shortest FL-side distance to CA</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Jacksonville</td>
                      <td className="py-3.5 px-4">~2,400 – 2,500 mi</td>
                      <td className="py-3.5 px-4">Northernmost major FL origin, typically fastest pickup-to-delivery</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Naples / Sarasota</td>
                      <td className="py-3.5 px-4">~2,600 – 2,700 mi</td>
                      <td className="py-3.5 px-4">Southwest FL, similar to Tampa timing</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Tallahassee</td>
                      <td className="py-3.5 px-4">~2,300 – 2,400 mi</td>
                      <td className="py-3.5 px-4">Panhandle region, shortest overall FL-side distance</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Gainesville</td>
                      <td className="py-3.5 px-4">~2,450 – 2,550 mi</td>
                      <td className="py-3.5 px-4">North-central FL, standard timing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </article>

          <article className="space-y-6">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Popular California Delivery Destinations
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
                      <td className="py-3.5 px-4 font-bold text-slate-900">Los Angeles</td>
                      <td className="py-3.5 px-4">Highest-demand CA endpoint on this corridor; frequent carrier trips</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">San Diego</td>
                      <td className="py-3.5 px-4">Similar timing to LA, popular military and retiree destination</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">San Francisco / Oakland</td>
                      <td className="py-3.5 px-4">Bay Area; slightly longer routing than Southern California</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Sacramento</td>
                      <td className="py-3.5 px-4">Central Valley; standard timing</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">San Jose</td>
                      <td className="py-3.5 px-4">South Bay; similar to San Francisco timing</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Anaheim / Irvine / Riverside</td>
                      <td className="py-3.5 px-4">Southern CA metro area, same corridor as LA</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Fresno / Bakersfield</td>
                      <td className="py-3.5 px-4">Central Valley, may see slightly extended timing depending on carrier routing</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Palm Springs</td>
                      <td className="py-3.5 px-4">Desert region, typically consolidated with LA-area routing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-2 font-medium">
                Common city-pair shipments on this route include Miami to Los Angeles, Orlando to San Francisco, Tampa to San Diego, and Jacksonville to San Francisco or Sacramento — all served on standard scheduling.
              </p>
            </AnimatedSection>
          </article>

          <article className="space-y-4">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Transport Service Options for This Route
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                All standard transport types are available for Florida to California shipments, with door-to-door delivery included on most quotes at no extra charge.
              </p>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-700 font-medium mt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Open Transport</strong> — the standard, most affordable option for this route, used for the majority of Florida-California shipments (<Link href="/services/open-auto-transport" className="text-blue-600 underline font-bold">Open Transport</Link>)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Enclosed Transport</strong> — recommended for classic, luxury, or exotic vehicles making this long cross-country trip, with full weather and road-debris protection (<Link href="/services/enclosed-auto-transport" className="text-blue-600 underline font-bold">Enclosed Transport</Link>)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Door-to-Door Delivery</strong> — direct pickup and drop-off at your addresses, the default for this route regardless of the long distance (<Link href="/services/door-to-door-transport" className="text-blue-600 underline font-bold">Door-to-Door Transport</Link>)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Terminal-to-Terminal</strong> — a lower-cost alternative if you&apos;re able to drop off and collect from a depot on either end (<Link href="/services/terminal-to-terminal-shipping" className="text-blue-600 underline font-bold">Terminal-to-Terminal Shipping</Link>)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Expedited Shipping</strong> — priority dispatch that can shorten this route&apos;s typically longer 6–10 day window for time-sensitive moves</span>
                </li>
              </ul>
            </AnimatedSection>
          </article>

          <article className="space-y-6">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Shipping Cost by Vehicle Type (Florida to California)
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
                      <td className="py-3.5 px-4">Standard FL-CA pricing above</td>
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
                      <td className="py-3.5 px-4">Extra care for battery weight/charge-state on a long-haul route</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Non-Running / Used Vehicle</td>
                      <td className="py-3.5 px-4">+$100–$200 flat (if inoperable)</td>
                      <td className="py-3.5 px-4">Requires winch-equipped carrier</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Classic / Luxury</td>
                      <td className="py-3.5 px-4">+40–60%</td>
                      <td className="py-3.5 px-4">Enclosed transport strongly recommended for this distance</td>
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
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-700 font-medium mt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Relocators</strong> moving permanently from Florida to California for work or lifestyle change</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Seasonal/snowbird residents</strong> returning to California after wintering in Florida</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Students</strong> shipping a vehicle to or from California colleges</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Military families</strong> under PCS orders between Florida and California installations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Dealers and businesses</strong> moving wholesale, auction, or fleet vehicles cross-country, including multi-car shipments — contact us directly for volume/business pricing on this route</span>
                </li>
              </ul>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium mt-4">
                Whatever your situation, the pricing and process above apply — reach out if your move has specific timing constraints so we can flag the right service tier.
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
                  <span><strong>Vehicle inspection at pickup</strong> — your driver documents your vehicle&apos;s condition before loading onto the carrier, which becomes your reference point at delivery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Transit and tracking</strong> — track your shipment throughout the 6–10 day cross-country window.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Delivery and final inspection</strong> — your vehicle arrives directly at your California address, with a final walk-around inspection against the pickup documentation.</span>
                </li>
              </ul>
              <p className="text-slate-900 text-lg font-bold mt-6">What to know before booking:</p>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-700 font-medium mt-4">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>You may keep up to 100 lbs of personal items in the trunk or cargo area, secured in a box or bag — these aren&apos;t covered by cargo insurance, and hazardous materials, firearms, or illegal items are never permitted.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>Cargo insurance is included on every shipment — $100,000 coverage on open carriers, $500,000 on enclosed carriers — with no separate line-item cost.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>Given the length of this route, fuel levels of roughly a quarter tank are recommended (enough for loading/unloading, without adding unnecessary weight).</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>Have your registration and ID ready at both pickup and delivery — standard for any interstate vehicle transport, regardless of distance.</span>
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
                    Get Instant Florida to California Quote →
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
