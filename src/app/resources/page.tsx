import React from "react";
import Metadata from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import AnimatedSection, { AnimatedCard } from "@/components/ui/AnimatedSection";
import { BookOpen, ShieldCheck, ArrowRight, FileText, Phone, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Car Shipping Resources & Driver Safety Guides | America Car Transport",
  description: "Explore official state driving laws, car shipping guides, scam prevention tips, and auto transport safety resources by America Car Transport.",
  alternates: {
    canonical: "https://www.americacartransport.com/resources",
  },
};

const RESOURCES = [
  {
    title: "California Driving Laws (2026 Guide)",
    desc: "Fact-checked answers to the top 10 questions about California Vehicle Code rules, no-touch phone laws, speed buffers, and teen curfews.",
    category: "State Driving Rules",
    href: "/resources/california-driving-laws",
    tag: "Updated 2026",
    tagColor: "bg-blue-600"
  },
  {
    title: "FMCSA Licensing & Carrier Insurance Protocol",
    desc: "Verify USDOT #3849102, MC #1098472, $75,000 surety bond, and cargo insurance rules protecting your vehicle.",
    category: "E-E-A-T & Trust",
    href: "/licensing-insurance",
    tag: "Verified",
    tagColor: "bg-emerald-600"
  },
  {
    title: "Verified Customer Reviews & Ratings",
    desc: "Browse authentic customer testimonials, route-specific feedback, and 4.9-star Google verified ratings.",
    category: "Customer Feedback",
    href: "/reviews",
    tag: "4.9 Stars",
    tagColor: "bg-amber-500"
  },
  {
    title: "Car Shipping Cost Calculator & Pricing Guide",
    desc: "Calculate instant auto transport rates nationwide with zero upfront deposit requirements.",
    category: "Cost & Quotes",
    href: "/tools/car-shipping-cost-calculator",
    tag: "Instant Tool",
    tagColor: "bg-purple-600"
  }
];

export default function ResourcesHubPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.americacartransport.com/resources#webpage",
        "name": "Car Shipping Resources & Driver Safety Guides",
        "description": "Educational resource hub for auto transport, state driving laws, licensing verification, and car shipping safety.",
        "url": "https://www.americacartransport.com/resources",
        "publisher": {
          "@type": "Organization",
          "name": "America Car Transport",
          "url": "https://www.americacartransport.com"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.americacartransport.com/resources#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://www.americacartransport.com/resources" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.americacartransport.com/resources#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What resources does America Car Transport provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide state driving law guides, scam avoidance checklists, licensing verification tools, and shipping cost calculators."
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
            <Link href="/reviews" className="hover:text-blue-600 transition-colors">Reviews</Link>
            <Link href="/resources" className="text-blue-600 font-bold">Resources</Link>
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
          <span className="text-white font-bold">Resources</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative px-4 md:px-8 lg:px-24 pt-10 pb-16 bg-[#F8FAFC] bg-grid-pattern border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <AnimatedSection direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-800 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 border border-blue-200/80 shadow-sm">
              <BookOpen className="w-4 h-4 text-blue-600" />
              Educational Guides &amp; Industry Resources
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-5">
              Auto Shipping &amp; Driver Safety Resource Directory
            </h1>

            <p className="text-base md:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl">
              Empowering vehicle owners with accurate state driving law guides, consumer scam protection checklists, licensing verification, and car transport pricing breakdowns.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-white border-b border-slate-200 font-sans">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESOURCES.map((item, idx) => (
              <AnimatedCard key={idx} delay={idx * 0.1}>
                <Link 
                  href={item.href}
                  className="group bg-slate-50 hover:bg-blue-50/50 border border-slate-200/90 hover:border-blue-300 p-8 rounded-3xl transition-all shadow-sm hover:shadow-md flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                        {item.category}
                      </span>
                      <span className={`text-[11px] font-extrabold text-white px-2.5 py-1 rounded-full ${item.tagColor}`}>
                        {item.tag}
                      </span>
                    </div>

                    <h2 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                      {item.title}
                    </h2>

                    <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-blue-600 font-extrabold text-sm group-hover:translate-x-1 transition-transform">
                    <span>Explore Resource</span>
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
