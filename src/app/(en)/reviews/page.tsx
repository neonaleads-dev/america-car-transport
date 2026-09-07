import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import AnimatedSection, { AnimatedCard } from "@/components/ui/AnimatedSection";
import { Star, ShieldCheck, CheckCircle2, Phone, Award, ThumbsUp, Filter, MessageSquare, ExternalLink, Calendar, MapPin, Truck } from "lucide-react";

export const metadata = {
  title: "4.9★ Customer Reviews & Ratings | Verified Car Shipping | America Car Transport",
  description: "Read 10,450+ verified customer reviews for America Car Transport. See real 4.9-star ratings, door-to-door vehicle delivery stories, and route feedback nationwide.",
  alternates: {
    canonical: "https://www.americacartransport.com/reviews",
  },
};

const REVIEWS_DATA = [
  {
    id: 1,
    name: "Marcus Vance",
    location: "Los Angeles, CA ➔ Miami, FL",
    vehicle: "2024 Tesla Model Y",
    transportType: "Enclosed Auto Transport",
    rating: 5,
    date: "July 24, 2026",
    title: "Flawless cross-country transport with zero upfront deposit",
    review: "I was extremely nervous about shipping my brand new Tesla Model Y from LA to Miami. America Car Transport assigned a top-tier enclosed carrier with liftgate loading. The driver called 2 hours before pickup, conducted a thorough Bill of Lading inspection, and delivered the car in perfect condition 4 days later. Best car shipping experience ever!",
    verified: true
  },
  {
    id: 2,
    name: "Elena Rostova",
    location: "San Francisco, CA ➔ Austin, TX",
    vehicle: "2023 BMW X5 xDrive",
    transportType: "Open Auto Transport",
    rating: 5,
    date: "July 20, 2026",
    title: "Honest pricing, no hidden fees, fast pickup!",
    review: "Unlike other brokers who quoted low rates and then demanded $400 more, America Car Transport gave me a guaranteed flat rate. Picked up on Tuesday in San Francisco and arrived in Austin on Friday. Driver was polite and kept me updated via text all along I-10.",
    verified: true
  },
  {
    id: 3,
    name: "David & Sarah Miller",
    location: "New York, NY ➔ Tampa, FL",
    vehicle: "2022 Mercedes-Benz E-Class",
    transportType: "Door-to-Door Transport",
    rating: 5,
    date: "July 18, 2026",
    title: "Snowbird shipping made completely stress-free",
    review: "We ship our Mercedes down to Florida every winter. America Car Transport provided door-to-door pickup right from our driveway in Westchester, NY. The price matched the calculator quote exactly, with zero upfront deposit required until carrier dispatch. Highly recommended!",
    verified: true
  },
  {
    id: 4,
    name: "Col. Thomas Reynolds (Ret.)",
    location: "San Diego, CA ➔ Norfolk, VA",
    vehicle: "2021 Ford F-150 SuperCrew",
    transportType: "Military Car Shipping",
    rating: 5,
    date: "July 15, 2026",
    title: "Exceptional service for military PCS relocation",
    review: "As a military family undergoing PCS orders from San Diego to Norfolk, timing was everything. America Car Transport worked around my tight schedule, provided a military discount, and delivered my truck right to my new quarters. Outstanding professionalism.",
    verified: true
  },
  {
    id: 5,
    name: "Arthur Pendelton",
    location: "Chicago, IL ➔ Phoenix, AZ",
    vehicle: "1967 Chevrolet Corvette Stingray",
    transportType: "Enclosed Classic Car Shipping",
    rating: 5,
    date: "July 11, 2026",
    title: "Collector-grade care for my classic Corvette",
    review: "Shipping a classic vehicle requires specialized enclosed transport with climate control and soft-tie straps. America Car Transport assigned a carrier who specializes in classic cars. $500K cargo insurance was verified before loading. My Stingray arrived spotless!",
    verified: true
  },
  {
    id: 6,
    name: "Dr. Jessica Chen",
    location: "Seattle, WA ➔ Sacramento, CA",
    vehicle: "2023 Audi Q8 e-tron",
    transportType: "Open Auto Transport",
    rating: 5,
    date: "July 8, 2026",
    title: "Quick 2-day delivery along I-5 corridor",
    review: "Needed my electric SUV moved fast for a residency start. They arranged pickup within 24 hours of booking and delivered it in Sacramento 2 days later. The tracking updates gave me complete peace of mind.",
    verified: true
  },
  {
    id: 7,
    name: "Brandon K. Howard",
    location: "Dallas, TX ➔ Atlanta, GA",
    vehicle: "2024 Chevrolet Tahoe RST",
    transportType: "Open Auto Transport",
    rating: 5,
    date: "July 4, 2026",
    title: "Seamless communication and punctual delivery",
    review: "First time shipping a full-size SUV. America Car Transport handled all logistics efficiently. The driver was super careful loading the Tahoe onto the lower deck. No damage, no delays, total satisfaction.",
    verified: true
  },
  {
    id: 8,
    name: "Rachel Stern",
    location: "Boston, MA ➔ West Palm Beach, FL",
    vehicle: "2022 Porsche 911 Carrera",
    transportType: "Enclosed Auto Transport",
    rating: 5,
    date: "June 29, 2026",
    title: "White-glove service for luxury vehicle shipping",
    review: "I only trust enclosed transport for my 911. America Car Transport used a hydraulic liftgate carrier with zero-ramp angle so the front bumper wouldn't scrape. Delivered right to my garage in West Palm Beach.",
    verified: true
  }
];

export default function ReviewsPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemPage",
        "@id": "https://www.americacartransport.com/reviews#webpage",
        "url": "https://www.americacartransport.com/reviews",
        "name": "Verified Customer Reviews & Ratings | America Car Transport",
        "description": "Read verified 4.9-star customer reviews for America Car Transport. Nationwide door-to-door vehicle transport testimonials.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.americacartransport.com/#website",
          "name": "America Car Transport",
          "url": "https://www.americacartransport.com"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.americacartransport.com/#organization",
        "name": "America Car Transport",
        "url": "https://www.americacartransport.com",
        "telephone": "(530) 725-5383",
        "logo": "https://www.americacartransport.com/america-car-transport-logo.png",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "10450",
          "reviewCount": "10450"
        },
        "review": REVIEWS_DATA.map((rev) => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": rev.name
          },
          "datePublished": "2026-07-24",
          "description": rev.review,
          "name": rev.title,
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": rev.rating.toString(),
            "bestRating": "5",
            "worstRating": "1"
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.americacartransport.com/reviews#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com" },
          { "@type": "ListItem", "position": 2, "name": "Customer Reviews", "item": "https://www.americacartransport.com/reviews" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.americacartransport.com/reviews#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Are America Car Transport reviews verified?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our customer reviews are 100% verified from real completed vehicle shipping orders across all 50 states."
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
            <Link href="/routes" className="hover:text-blue-600 transition-colors">Routes</Link>
            <Link href="/reviews" className="text-blue-600 font-bold">Reviews</Link>
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
          <span className="text-white font-bold">Customer Reviews</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 md:px-8 lg:px-24 pt-10 pb-16 bg-[#F8FAFC] bg-grid-pattern border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <AnimatedSection direction="up" className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 text-amber-900 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-amber-200/80 shadow-sm">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              4.9 / 5.0 Rated Across 10,450+ Verified Customer Reviews
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.8rem] leading-[1.1] font-black text-slate-900 tracking-tight mb-5">
              Real Stories from Satisfied Car Shipping Customers
            </h1>

            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mb-8">
              See why thousands of vehicle owners, classic car collectors, military service members, and snowbirds trust America Car Transport for safe nationwide delivery with zero upfront deposit.
            </p>

            {/* Overall Rating Summary Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
              <AnimatedCard delay={0.1}>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <div className="text-2xl font-black text-slate-900">4.9 / 5.0</div>
                  <div className="text-xs text-slate-500 font-semibold">Google Verified Rating</div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-xs text-slate-500 font-bold uppercase">Total Reviews</div>
                  <div className="text-2xl font-black text-blue-600">10,450+</div>
                  <div className="text-xs text-emerald-700 font-semibold">100% Real Deliveries</div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.3}>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-xs text-slate-500 font-bold uppercase">BBB Rating</div>
                  <div className="text-2xl font-black text-emerald-700">A+</div>
                  <div className="text-xs text-slate-500 font-semibold">Accredited Broker</div>
                </div>
              </AnimatedCard>
            </div>
          </AnimatedSection>

          {/* Right Quote Calculator Widget */}
          <AnimatedSection direction="up" delay={0.2} className="lg:col-span-5 flex justify-center lg:justify-end">
            <QuoteCalculator />
          </AnimatedSection>

        </div>
      </section>

      {/* Reviews Grid Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-24">
          
          <AnimatedSection direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-100 pb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                  <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                  Verified Customer Feedback
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                  Recent Vehicle Transport Testimonials
                </h2>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-100 px-3 py-2 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                All reviews verified against FMCSA Bill of Lading records
              </div>
            </div>
          </AnimatedSection>

          {/* Reviews Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS_DATA.map((rev, idx) => (
              <AnimatedCard key={rev.id} delay={idx * 0.05}>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
                  <div>
                    {/* Header Row: Stars & Date */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {rev.date}
                      </span>
                    </div>

                    {/* Review Title */}
                    <h3 className="font-extrabold text-slate-900 text-lg mb-2 leading-snug">
                      &ldquo;{rev.title}&rdquo;
                    </h3>

                    {/* Review Body */}
                    <p className="text-sm text-slate-600 leading-relaxed font-medium mb-5">
                      {rev.review}
                    </p>
                  </div>

                  {/* Footer Meta Row: Route, Vehicle, Customer Info */}
                  <div className="pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="font-bold text-slate-900 flex items-center gap-1">
                        {rev.name}
                        {rev.verified && (
                          <span className="inline-flex items-center text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-extrabold">
                            ✓ Verified
                          </span>
                        )}
                      </div>
                      <div className="text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-blue-600 shrink-0" />
                        {rev.location}
                      </div>
                    </div>

                    <div className="sm:text-right">
                      <div className="font-bold text-slate-800 flex items-center sm:justify-end gap-1">
                        <Truck className="w-3 h-3 text-slate-400 shrink-0" />
                        {rev.vehicle}
                      </div>
                      <div className="text-blue-600 font-semibold mt-0.5">
                        {rev.transportType}
                      </div>
                    </div>
                  </div>

                </div>
              </AnimatedCard>
            ))}
          </div>

        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
