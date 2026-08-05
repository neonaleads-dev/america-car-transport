import React from "react";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import AnimatedSection, { AnimatedCard } from "@/components/ui/AnimatedSection";
import { ShieldCheck, MapPin, Clock, DollarSign, AlertCircle, CheckCircle2, Phone, HelpCircle, ChevronDown } from "lucide-react";

export const metadata = {
  title: "Florida to New Jersey Car Transport | Cost, Time & Quotes — America Car Transport",
  description: "Ship your car from Florida to New Jersey with licensed, insured carriers. Get an instant quote, compare open vs. enclosed rates, and see real transit times.",
  alternates: {
    canonical: "https://www.americacartransport.com/routes/florida-to-new-jersey",
  },
  openGraph: {
    title: "Florida to New Jersey Car Transport | Cost, Time & Quotes — America Car Transport",
    description: "Ship your car from Florida to New Jersey with licensed, insured carriers. Get an instant quote, compare open vs. enclosed rates, and see real transit times.",
    url: "https://www.americacartransport.com/routes/florida-to-new-jersey",
    siteName: "America Car Transport",
    type: "website",
  },
};

const ROUTE_FAQS = [
  {
    q: "How much does it cost to ship a car from Florida to New Jersey?",
    a: "Cost depends on vehicle type, transport method, and season, and typically falls within a standard per-mile range for open transport ($900 – $1,400). Request a quote for an exact price based on your specific vehicle and route."
  },
  {
    q: "How long does it take to ship a car from Florida to New Jersey?",
    a: "Most Florida to New Jersey car shipments deliver within 3 to 6 days of pickup, depending on carrier availability and exact pickup/delivery cities."
  },
  {
    q: "Is my car insured during transport?",
    a: "Yes. Every carrier in our network carries cargo insurance covering your vehicle for the full duration of transit ($100k open / $500k enclosed), from pickup in Florida to delivery in New Jersey."
  },
  {
    q: "Can I put personal items in my car during shipping?",
    a: "Carriers generally allow up to 100 lbs of personal items secured in the trunk or cargo area, though items are not covered by carrier insurance."
  },
  {
    q: "Do you offer door-to-door delivery, or do I have to use a terminal?",
    a: "We offer door-to-door pickup and delivery as the default option, getting as close to your exact addresses as local road access allows. Terminal-to-terminal service is available as a lower-cost alternative."
  },
  {
    q: "Can you ship an inoperable or non-running vehicle?",
    a: "Yes, we arrange winch-equipped carriers for inoperable vehicles at an additional cost."
  },
  {
    q: "Do you ship motorcycles, RVs, and boats on this route?",
    a: "Yes, in addition to standard cars and trucks, we transport motorcycles, RVs, and boats between Florida and New Jersey."
  }
];

export default function FloridaToNewJerseyRoutePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com/"},
          {"@type": "ListItem", "position": 2, "name": "Routes", "item": "https://www.americacartransport.com/routes"},
          {"@type": "ListItem", "position": 3, "name": "Florida to New Jersey", "item": "https://www.americacartransport.com/routes/florida-to-new-jersey"}
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
          {"@type": "State", "name": "New Jersey"}
        ],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "850",
          "highPrice": "1900"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": ROUTE_FAQS.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {"@type": "Answer", "text": faq.a}
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
              <span className="text-slate-900 font-bold">Florida to New Jersey</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-800 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-blue-200/80 shadow-sm">
              <MapPin className="w-4 h-4 text-blue-600" />
              East Coast Corridor (~1,100–1,300 Miles)
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] leading-[1.1] font-black text-slate-900 tracking-tight mb-5">
              Florida to New Jersey Car Transport
            </h1>

            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mb-8">
              Shipping a car from Florida to New Jersey is one of the most requested long-distance auto transport routes in the country, driven by snowbirds, retirees, relocations, and college students moving between the two states each year. Whether you&apos;re shipping a sedan, SUV, truck, motorcycle, or classic car, our service offers door-to-door pickup and delivery, real-time tracking, and full insurance coverage.
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
                  <div className="text-xl font-black text-emerald-700">$850+</div>
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
                How Much Does It Cost to Ship a Car from Florida to New Jersey?
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium mt-2">
                The average cost to transport a car from Florida to New Jersey typically ranges based on a few key factors:
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1}>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
                <table className="w-full text-left text-sm font-medium">
                  <thead className="bg-slate-100 text-slate-900 font-black text-xs uppercase border-b border-slate-200">
                    <tr>
                      <th className="py-3.5 px-4">Factor</th>
                      <th className="py-3.5 px-4">Impact on Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Vehicle type</td>
                      <td className="py-3.5 px-4">SUVs and trucks cost more than sedans due to weight and size</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Transport method</td>
                      <td className="py-3.5 px-4">Enclosed transport costs more than open transport</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Distance</td>
                      <td className="py-3.5 px-4">Miami to Newark runs longer (and costs more) than Jacksonville to Trenton</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Season</td>
                      <td className="py-3.5 px-4">Snowbird season (fall and spring) sees higher demand and pricing</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Vehicle operability</td>
                      <td className="py-3.5 px-4">Inoperable vehicles require winch-equipped carriers and cost extra</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-2 font-medium">
                For the most accurate Florida to New Jersey auto transport cost, use our <Link href="/tools/car-shipping-cost-calculator" className="text-blue-600 underline font-bold">Cost Calculator</Link> — rates update daily based on carrier availability and fuel prices.
              </p>
            </AnimatedSection>
          </article>

          <article className="space-y-6">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Popular Florida to New Jersey Car Shipping Routes
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1}>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
                <table className="w-full text-left text-sm font-medium">
                  <thead className="bg-slate-100 text-slate-900 font-black text-xs uppercase border-b border-slate-200">
                    <tr>
                      <th className="py-3.5 px-4">From (Florida)</th>
                      <th className="py-3.5 px-4">To (New Jersey)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Miami</td>
                      <td className="py-3.5 px-4">Newark</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Orlando</td>
                      <td className="py-3.5 px-4">Jersey City</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Tampa</td>
                      <td className="py-3.5 px-4">Trenton</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Jacksonville</td>
                      <td className="py-3.5 px-4">Elizabeth</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Fort Lauderdale</td>
                      <td className="py-3.5 px-4">Newark</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">West Palm Beach</td>
                      <td className="py-3.5 px-4">Edison</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Naples</td>
                      <td className="py-3.5 px-4">Atlantic City</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Fort Myers</td>
                      <td className="py-3.5 px-4">Paterson</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">Gainesville</td>
                      <td className="py-3.5 px-4">Trenton</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-2 font-medium">
                Don&apos;t see your city listed? We ship from every city and zip code in Florida to every city and zip code in New Jersey.
              </p>
            </AnimatedSection>
          </article>

          <article className="space-y-4">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Open vs. Enclosed Car Transport
              </h2>
              <ul className="space-y-3 text-xs md:text-sm text-slate-700 font-medium mt-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Open Car Transport:</strong> The most common and affordable option (<Link href="/services/open-auto-transport" className="text-blue-600 underline font-bold">Open Auto Transport</Link>). Your vehicle rides on an open-air multi-car trailer alongside other vehicles. Ideal for daily drivers, SUVs, trucks, and vans.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Enclosed Car Transport:</strong> Fully covered trailers that shield your vehicle from road debris and weather (<Link href="/services/enclosed-auto-transport" className="text-blue-600 underline font-bold">Enclosed Auto Transport</Link>). Recommended for luxury, exotic, and classic cars.</span>
                </li>
              </ul>
            </AnimatedSection>
          </article>

          <article className="space-y-4">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Snowbird &amp; Seasonal Car Transport
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                Florida to New Jersey is one of the busiest snowbird auto transport corridors in the U.S. Every fall, we help retirees and seasonal residents ship vehicles from New Jersey down to Florida, and every spring, we run the reverse trip back north. We also support:
              </p>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-700 font-medium mt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>College student car shipping between FL and NJ schools</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Military car transport for PCS relocations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Vacation and second-home vehicle transport</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Full household relocation car shipping</span>
                </li>
              </ul>
            </AnimatedSection>
          </article>

          <article className="space-y-4">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Preparing Your Car for Transport
              </h2>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-700 font-medium mt-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Wash your vehicle so pre-existing damage is easy to document</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Remove personal items — carriers are not licensed to transport household goods inside the vehicle</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Document your car&apos;s condition with photos before pickup</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Keep roughly a quarter tank of fuel</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Disable toll transponders and alarms</span>
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
                    <span><strong>Licensed &amp; Bonded:</strong> Licensed auto transport broker (<Link href="/licensing-insurance" className="text-blue-400 underline font-bold">verify credentials</Link>).</span>
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
                    <span><strong>Verified Reviews:</strong> <Link href="/reviews" className="text-blue-400 underline font-bold">See customer reviews (4.9/5.0 rating from 10,450+ reviews)</Link>.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span><strong>Scam Avoidance:</strong> Read our <Link href="/resources/how-to-avoid-car-shipping-scams" className="text-blue-400 underline font-bold">Scam Avoidance Guide</Link>.</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/tools/car-shipping-cost-calculator" 
                    className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] text-white px-6 py-3.5 rounded-xl font-extrabold text-xs md:text-sm shadow-md hover:shadow-lg"
                  >
                    Get Instant Florida to New Jersey Quote →
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

          <div className="text-center pt-8 border-t border-slate-200 mt-12">
             <p className="text-slate-500 font-medium text-sm">
               Also shipping between Florida and New York? See our <Link href="/routes/florida-to-new-york" className="text-blue-600 font-bold hover:underline">Florida to New York</Link> route guide.
             </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
