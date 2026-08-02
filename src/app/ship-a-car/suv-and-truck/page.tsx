import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import { Truck, ShieldCheck, Clock, MapPin, Phone, CheckCircle2, HelpCircle, Layers, ArrowRight, Ruler } from "lucide-react";

export const metadata = {
  title: "Lifted Truck & SUV Shipping | Oversized Vehicle Transport",
  description: "Ship your lifted truck, dually pickup, or large SUV with a carrier equipped for the extra height and weight — no surprise surcharges. Get a free quote.",
  alternates: {
    canonical: "https://www.americacartransport.com/ship-a-car/suv-and-truck",
  },
};

export default function HeavyDutyTruckAndSUVShippingPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.americacartransport.com/ship-a-car/suv-and-truck#service",
        "name": "Heavy Duty Truck & SUV Shipping",
        "serviceType": "Lifted Truck, Dually Pickup, & Large SUV Transport",
        "provider": {
          "@type": "Organization",
          "name": "America Car Transport",
          "url": "https://www.americacartransport.com"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "vehicleType": ["Lifted Truck", "Dual Rear Wheel Pickup", "Large SUV"],
        "offers": {
          "@type": "Offer",
          "description": "Upfront dimension quoting for lifted trucks, dually pickups, and large SUVs with zero upfront deposit"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.americacartransport.com/ship-a-car/suv-and-truck#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Will I get charged extra once the carrier sees my truck in person?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our goal is to eliminate surprise surcharges by collecting accurate dimensions upfront (lift height, dually tires, roof racks) so your quote matches the dispatched carrier."
            }
          },
          {
            "@type": "Question",
            "name": "Do lifted trucks cost more to ship than a standard sedan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Taller or heavier trucks require specialized carrier deck clearance or extra ramp spacing, which can affect the carrier rate. We provide exact quotes based on your vehicle's specific dimensions."
            }
          },
          {
            "@type": "Question",
            "name": "Can you ship a heavy-duty truck or SUV that doesn't run?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Let us know at the time of quoting so a heavy-duty winch carrier is dispatched to load your non-running truck safely."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.americacartransport.com/ship-a-car/suv-and-truck#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.americacartransport.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Heavy Duty Truck & SUV Shipping", "item": "https://www.americacartransport.com/ship-a-car/suv-and-truck" }
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

      {/* Header Navigation */}
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
            <Link href="/routes" className="hover:text-blue-600 transition-colors">Routes</Link>
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
          <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link>
          <span className="text-slate-700">/</span>
          <span className="text-white font-bold">Heavy Duty Truck &amp; SUV Shipping</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 lg:px-24 pt-10 pb-16 bg-[#F8FAFC] bg-grid-pattern border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <AnimatedSection direction="up" className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-900 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-blue-200/80 shadow-sm">
              <Ruler className="w-4 h-4 text-blue-700" />
              Upfront Dimensions &amp; Zero Post-Booking Surcharges
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
              Heavy Duty Truck &amp; SUV Shipping
            </h1>

            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-6">
              Lifted trucks, dually pickups, and full-size SUVs don&apos;t fit standard sedan trailer slots. We collect height, width, and weight specs upfront so your quote reflects a carrier that can actually transport your vehicle safely.
            </p>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Lifted Trucks (Suspension &amp; Body Lifts Handled)</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Dual-Rear-Wheel (Dually) Pickups &amp; Extended Beds</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Open &amp; Enclosed Carriers with High Deck Clearance</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:5307255383" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-extrabold text-sm shadow-md transition-all flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-200" /> Heavy Vehicle Desk: (530) 725-5383
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2} className="lg:col-span-6 flex justify-center lg:justify-end">
            <QuoteCalculator />
          </AnimatedSection>

        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8 space-y-12">
          
          {/* Why Upfront Dimensions Matter */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Why Dimensions Matter for Heavy Duty Vehicles
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              A lifted truck or dually pickup can exceed the height or axle weight limits of standard car haulers. Instead of quoting a generic rate and sorting it out later, we collect your vehicle&apos;s exact modifications at quote time so a properly equipped carrier gets dispatched the first time.
            </p>
          </article>

          {/* Vehicle Types Grid */}
          <article className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Heavy Duty Vehicles We Transport
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base">Lifted Pickups &amp; Custom Rigs</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Trucks with suspension lifts, oversized tires, bull bars, or roof racks matched with high-clearance open trailers.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base">Dual-Rear-Wheel (Dually) Pickups</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Ford F-350/450, Chevy Silverado 3500, and RAM 3500 dually trucks requiring wider ramp clearance.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base">Full-Size &amp; Extended SUVs</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Suburban, Escalade ESV, Yukon XL, and Expedition MAX models shipped on standard <Link href="/services/open-auto-transport" className="text-blue-700 font-bold underline">Open Auto Transport</Link>.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base">Overland &amp; Off-Road Builds</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Custom overland rigs and high-value off-road vehicles with option for <Link href="/services/enclosed-auto-transport" className="text-blue-700 font-bold underline">Enclosed Auto Transport</Link>.
                </p>
              </div>
            </div>
          </article>

          {/* FAQ Section */}
          <article className="space-y-6 pt-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions (Heavy Vehicle FAQs)
            </h2>

            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" /> Will I get charged extra once the carrier sees my truck in person?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Our goal is to eliminate surprise surcharges by collecting accurate dimensions upfront (lift height, dually tires, roof racks) so your quote matches the dispatched carrier.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" /> Do lifted trucks cost more to ship than a standard sedan?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Taller or heavier trucks require specialized carrier deck clearance or extra ramp spacing, which can affect the carrier rate. We provide exact quotes based on your vehicle&apos;s specific dimensions.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600" /> Can you ship a heavy-duty truck or SUV that doesn&apos;t run?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Yes. Let us know at the time of quoting so a heavy-duty winch carrier is dispatched to load your non-running truck safely.
                </p>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
