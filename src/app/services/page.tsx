import React from "react";
import Link from "next/link";
import { ShieldCheck, Phone, Star, ChevronRight, MapPin, DollarSign, Compass, Zap, Shield, Building2, Sliders, ArrowUpRight } from "lucide-react";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import ServicesComparisonDashboard from "@/components/ui/ServicesComparisonDashboard";

export const metadata = {
  title: "Auto Transport Services | Car Shipping Options",
  description: "Explore all America Car Transport services — open, enclosed, door-to-door, terminal, and expedited car shipping. Get an instant quote for any option.",
  alternates: {
    canonical: "https://www.americacartransport.com/services",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "America Car Transport Services",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Open Auto Transport", "url": "https://www.americacartransport.com/services/open-auto-transport" },
    { "@type": "ListItem", "position": 2, "name": "Enclosed Auto Transport", "url": "https://www.americacartransport.com/services/enclosed-auto-transport" },
    { "@type": "ListItem", "position": 3, "name": "Door-to-Door Transport", "url": "https://www.americacartransport.com/services/door-to-door-transport" },
    { "@type": "ListItem", "position": 4, "name": "Terminal-to-Terminal Shipping", "url": "https://www.americacartransport.com/services/terminal-to-terminal-shipping" },
    { "@type": "ListItem", "position": 5, "name": "Expedited Auto Transport", "url": "https://www.americacartransport.com/services/expedited-auto-transport" },
    { "@type": "ListItem", "position": 6, "name": "Military PCS Car Shipping", "url": "https://www.americacartransport.com/services/military-car-shipping" },
    { "@type": "ListItem", "position": 7, "name": "Snowbird Car Shipping", "url": "https://www.americacartransport.com/services/snowbird-car-shipping" },
    { "@type": "ListItem", "position": 8, "name": "College Student Car Shipping", "url": "https://www.americacartransport.com/services/college-student-car-shipping" },
    { "@type": "ListItem", "position": 9, "name": "Dealer & Auction Transport", "url": "https://www.americacartransport.com/services/dealer-and-auction-transport" },
    { "@type": "ListItem", "position": 10, "name": "Corporate Relocation Transport", "url": "https://www.americacartransport.com/services/corporate-relocation-transport" },
    { "@type": "ListItem", "position": 11, "name": "Motorcycle & Powersports Shipping", "url": "https://www.americacartransport.com/ship-a-car/motorcycle" },
    { "@type": "ListItem", "position": 12, "name": "Heavy Duty Truck & SUV Shipping", "url": "https://www.americacartransport.com/ship-a-car/suv-and-truck" },
    { "@type": "ListItem", "position": 13, "name": "Non-Running Vehicle Transport", "url": "https://www.americacartransport.com/ship-a-car/non-running" },
    { "@type": "ListItem", "position": 14, "name": "Classic & Exotic Car Transport", "url": "https://www.americacartransport.com/services/classic-and-exotic-car-transport" }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.americacartransport.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.americacartransport.com/services" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What auto transport services does America Car Transport offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "America Car Transport offers open and enclosed transport (protection level), door-to-door and terminal-to-terminal delivery (delivery method), and expedited shipping (speed) — which can be combined based on vehicle type and needs."
      }
    },
    {
      "@type": "Question",
      "name": "What type of car shipping do I need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most vehicle owners choose open transport with door-to-door delivery. Enclosed transport suits classic, exotic, or high-value vehicles; terminal-to-terminal minimizes cost; expedited suits fixed timelines."
      }
    },
    {
      "@type": "Question",
      "name": "How do I choose a car shipping method?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Consider your vehicle type (standard vs. high-value), your schedule flexibility, and your convenience priority. Each factor points toward a different combination of services."
      }
    },
    {
      "@type": "Question",
      "name": "Can I combine multiple services, like enclosed and expedited?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Protection level (open/enclosed), delivery method (door-to-door/terminal), and speed (standard/expedited) are independent choices that can be combined based on your needs."
      }
    }
  ]
};

export default function ServicesHubPage() {
  return (
    <>
      {/* Schema Graph Injections */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      {/* Global Header Navigation */}
      <header className="sticky top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="max-w-[1400px] w-full mx-auto px-4 md:px-8 py-3.5 md:py-2.5 md:py-3 flex items-center justify-between gap-4 md:gap-6">
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

          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 whitespace-nowrap text-slate-700 font-semibold text-xs lg:text-sm xl:text-[15px]">
            <Link href="/#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</Link>
            <Link href="/services" className="text-blue-600 font-extrabold transition-colors">Services</Link>
            <Link href="/#why-us" className="hover:text-blue-600 transition-colors">Why Us</Link>
            <Link href="/#popular-routes" className="hover:text-blue-600 transition-colors">Popular Routes</Link>
            <Link href="/locations" className="hover:text-blue-600 transition-colors">Locations</Link>
            <Link href="/faq" className="hover:text-blue-600 transition-colors">FAQ Hub</Link>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <a href="tel:5307255383" className="hidden xl:flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-100 px-3.5 py-2 rounded-xl text-xs xl:text-sm font-extrabold transition-all shadow-sm shrink-0 whitespace-nowrap">
              <Phone className="w-4 h-4 text-blue-600" />
              (530) 725-5383
            </a>
            <Link href="#services-quote-widget" className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] hover:from-[#E05E00] text-white px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-extrabold transition-all duration-200 shadow-[0_4px_14px_0_rgba(255,107,0,0.39)] rounded-xl shrink-0 whitespace-nowrap">
              Get Instant Quote
            </Link>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans">
        
        {/* Clean Breadcrumb Bar */}
        <div className="bg-slate-900 border-b border-slate-800 py-3 px-4 md:px-8 lg:px-24 text-xs font-semibold text-slate-400">
          <div className="max-w-[1400px] mx-auto flex items-center gap-2">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <span className="text-slate-700">/</span>
            <span className="text-white font-bold">Services</span>
          </div>
        </div>

        {/* HERO SECTION — SLEEK DARK BLUE HERO BANNER WITH EMBEDDED CALCULATOR */}
        <section id="services-quote-widget" className="py-12 md:py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white border-b border-slate-800 px-4 md:px-8 lg:px-24 relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* H1 & Subheading */}
            <div className="lg:col-span-6 xl:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-950/90 text-blue-300 rounded-full text-xs md:text-sm font-bold mb-6 border border-blue-500/40 shadow-lg shadow-blue-950/40">
                <Compass className="w-4 h-4 text-blue-400" />
                Nationwide Logistics Hub · All Transport Options
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-[3.6rem] font-black text-white leading-tight mb-6 tracking-tight">
                Auto Transport Services: <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">Every Way to Ship Your Car</span>, Nationwide
              </h1>

              <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed mb-8">
                Whether you need maximum protection, maximum savings, or maximum speed, America Car Transport has a shipping method built for it.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 bg-slate-900/90 p-4 rounded-2xl border border-slate-800 shadow-xl max-w-xl mb-8">
                <div className="flex items-center gap-2.5 pr-4 border-r border-slate-800">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <div>
                    <div className="font-extrabold text-white text-sm leading-none">4.9 / 5.0 Rating</div>
                    <div className="text-xs text-slate-400 font-medium mt-0.5">Google Verified Reviews</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="px-2.5 py-1 bg-blue-600 text-white font-extrabold text-xs rounded border border-blue-500">
                    BBB A+
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm leading-none">Accredited Business</div>
                    <div className="text-xs text-slate-400 font-medium mt-0.5">FMCSA USDOT #3849102</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a href="tel:5307255383" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-extrabold text-sm shadow-lg shadow-blue-950/40 transition-all flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-200" /> Speak With a Shipping Specialist: (530) 725-5383
                </a>
              </div>
            </div>

            {/* Embedded Quote Calculator Widget */}
            <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
              <QuoteCalculator />
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 1 — AUTO TRANSPORT SOLUTIONS (VISUAL IMAGE GRID)
            Inspired by competitor's dark-bg image-card mosaic
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-14">
              <div className="text-blue-400 font-extrabold tracking-[0.25em] uppercase text-xs mb-4">Our Services</div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2">
                Auto <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Transport</span> Solutions
              </h2>
              <div className="w-14 h-1 bg-blue-500 mx-auto mt-5 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {/* Card 1 — Open Auto Transport */}
              <Link href="/services/open-auto-transport" className="group relative rounded-2xl overflow-hidden h-56 sm:h-60 block shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <img src="/america-car-transport-open-car-shipping-affordable.png" alt="Open auto transport carrier loading vehicles for affordable nationwide shipping" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                  <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <DollarSign className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-base leading-tight">Open Auto Transport</div>
                    <div className="text-slate-300 text-[11px] font-medium">Most affordable · 90% of shipments</div>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">Best Value</div>
              </Link>

              {/* Card 2 — Enclosed Auto Transport */}
              <Link href="/services/enclosed-auto-transport" className="group relative rounded-2xl overflow-hidden h-56 sm:h-60 block shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <img src="/america-car-transport-enclosed-auto-transport-premium-protection.png" alt="Enclosed auto transport trailer providing premium weather protection for luxury vehicles" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                  <div className="w-9 h-9 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Shield className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-base leading-tight">Enclosed Transport</div>
                    <div className="text-slate-300 text-[11px] font-medium">Full weather protection · Liftgate</div>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-purple-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">Premium</div>
              </Link>

              {/* Card 3 — Door-to-Door Transport */}
              <Link href="/services/door-to-door-transport" className="group relative rounded-2xl overflow-hidden h-56 sm:h-60 block shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <img src="/america-car-transport-door-to-door-vehicle-shipping-service.png" alt="Door to door vehicle shipping service with residential pickup and delivery" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                  <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-base leading-tight">Door-to-Door Transport</div>
                    <div className="text-slate-300 text-[11px] font-medium">Pickup &amp; delivery at your address</div>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">Convenient</div>
              </Link>

              {/* Card 4 — Terminal-to-Terminal */}
              <Link href="/services/terminal-to-terminal-shipping" className="group relative rounded-2xl overflow-hidden h-56 sm:h-60 block shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <img src="/terminal-to-terminal-car-shipping-vehicle-dropoff.jpg" alt="Terminal to terminal car shipping vehicle drop-off at a secure storage yard" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                  <div className="w-9 h-9 bg-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Building2 className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-base leading-tight">Terminal-to-Terminal</div>
                    <div className="text-slate-300 text-[11px] font-medium">Save $100–$300 vs. door-to-door</div>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-cyan-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">Budget</div>
              </Link>

              {/* Card 5 — Expedited Auto Transport */}
              <Link href="/services/expedited-auto-transport" className="group relative rounded-2xl overflow-hidden h-56 sm:h-60 block shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <img src="/america-car-transport-expedited-fast-vehicle-shipping.png" alt="Expedited fast vehicle shipping with priority carrier dispatch" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                  <div className="w-9 h-9 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-base leading-tight">Expedited Transport</div>
                    <div className="text-slate-300 text-[11px] font-medium">Priority pickup in 24–48 hours</div>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">Fast</div>
              </Link>

              {/* Card 6 — Classic & Exotic */}
              <Link href="/services/classic-and-exotic-car-transport" className="group relative rounded-2xl overflow-hidden h-56 sm:h-60 block shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <img src="/enclosed-auto-transport-classic-exotic-luxury-cars.jpg" alt="Classic and exotic car transport with white glove enclosed shipping" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                  <div className="w-9 h-9 bg-rose-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Star className="w-4.5 h-4.5 text-white fill-white" />
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-base leading-tight">Classic &amp; Exotic Transport</div>
                    <div className="text-slate-300 text-[11px] font-medium">White-glove collector handling</div>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-rose-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">Luxury</div>
              </Link>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 2 — WHO WE SERVE (AUDIENCE & VEHICLE TYPE GRID)
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-14">
              <div className="text-blue-600 font-extrabold tracking-[0.25em] uppercase text-xs mb-4">Who We Serve</div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">
                Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Transport</span> Solutions
              </h2>
              <p className="text-slate-500 font-medium mt-4 max-w-2xl mx-auto">Audience-specific and vehicle-type services built for your exact shipping situation.</p>
              <div className="w-14 h-1 bg-blue-500 mx-auto mt-5 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {/* Military PCS */}
              <Link href="/services/military-car-shipping" className="group relative rounded-2xl overflow-hidden h-52 block shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <img src="/expedited-car-shipping-military-pcs-relocation.jpg" alt="Military PCS car shipping for active duty service members" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                  <div className="w-9 h-9 bg-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                    <ShieldCheck className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-base leading-tight">Military Car Shipping</div>
                    <div className="text-slate-300 text-[11px] font-medium">PCS move support · Military discount</div>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-blue-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">Military</div>
              </Link>

              {/* Snowbird */}
              <Link href="/services/snowbird-car-shipping" className="group relative rounded-2xl overflow-hidden h-52 block shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <img src="/america-car-transport-state-to-state-vehicle-shipping.png" alt="Snowbird seasonal car shipping between northern and southern states" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                  <div className="w-9 h-9 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Compass className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-base leading-tight">Snowbird Car Shipping</div>
                    <div className="text-slate-300 text-[11px] font-medium">Seasonal FL/AZ routes · Fall &amp; Spring</div>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">Seasonal</div>
              </Link>

              {/* College Student */}
              <Link href="/services/college-student-car-shipping" className="group relative rounded-2xl overflow-hidden h-52 block shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <img src="/terminal-to-terminal-shipping-college-student-move.jpg" alt="College student car shipping for campus move-in and move-out" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                  <div className="w-9 h-9 bg-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                    <ArrowUpRight className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-base leading-tight">College Student Shipping</div>
                    <div className="text-slate-300 text-[11px] font-medium">Budget-friendly campus moves</div>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-teal-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">Students</div>
              </Link>

              {/* Dealer & Auction */}
              <Link href="/services/dealer-and-auction-transport" className="group relative rounded-2xl overflow-hidden h-52 block shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <img src="/dealer-auction-lot-vehicle-transport.jpg" alt="Dealer and auction lot with multi-car carrier loading vehicles for commercial transport" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                  <div className="w-9 h-9 bg-slate-700 rounded-xl flex items-center justify-center shadow-lg">
                    <Building2 className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-base leading-tight">Dealer &amp; Auction Transport</div>
                    <div className="text-slate-300 text-[11px] font-medium">B2B volume · Copart / Manheim</div>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-slate-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">Commercial</div>
              </Link>

              {/* Corporate Relocation */}
              <Link href="/services/corporate-relocation-transport" className="group relative rounded-2xl overflow-hidden h-52 block shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <img src="/america-car-transport-reliable-nationwide-vehicle-shipping.png" alt="Corporate relocation vehicle transport for employee transfers" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                  <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Sliders className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-base leading-tight">Corporate Relocation</div>
                    <div className="text-slate-300 text-[11px] font-medium">HR invoicing · Employee transfers</div>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-indigo-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">Enterprise</div>
              </Link>

              {/* Hawaii */}
              <Link href="/services/hawaii-car-shipping" className="group relative rounded-2xl overflow-hidden h-52 block shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <img src="/america-car-transport-trusted-auto-carrier-scenic-highway.png" alt="Hawaii car shipping service for mainland to island vehicle transport" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                  <div className="w-9 h-9 bg-sky-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Compass className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-base leading-tight">Hawaii Car Shipping</div>
                    <div className="text-slate-300 text-[11px] font-medium">Mainland-to-island · Port logistics</div>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-sky-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">Island</div>
              </Link>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 3 — VEHICLE TYPE SPOKES (DARK GRID)
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-b border-slate-800">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-14">
              <div className="text-cyan-400 font-extrabold tracking-[0.25em] uppercase text-xs mb-4">What We Ship</div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2">
                Vehicle <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Type</span> Specialists
              </h2>
              <p className="text-slate-400 font-medium mt-4 max-w-2xl mx-auto">Specialized loading equipment and carrier matching for every vehicle category.</p>
              <div className="w-14 h-1 bg-cyan-500 mx-auto mt-5 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {/* Motorcycle & Powersports */}
              <Link href="/ship-a-car/motorcycle" className="group relative rounded-2xl overflow-hidden h-52 block shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <img src="/america-car-transport-secure-motorcycle-shipping-service.png" alt="Motorcycle and powersports shipping with soft-strap tie-downs" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                  <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-base leading-tight">Motorcycle &amp; Powersports</div>
                    <div className="text-slate-300 text-[11px] font-medium">Enclosed · Soft-strap · Wheel chocks</div>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">Powersports</div>
              </Link>

              {/* Heavy Duty Truck & SUV */}
              <Link href="/ship-a-car/suv-and-truck" className="group relative rounded-2xl overflow-hidden h-52 block shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <img src="/open-auto-transport-suv-truck-sedan-shipping.jpg" alt="Heavy duty truck and SUV shipping on high-clearance open carriers" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                  <div className="w-9 h-9 bg-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Shield className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-base leading-tight">Trucks &amp; Large SUVs</div>
                    <div className="text-slate-300 text-[11px] font-medium">Lifted · Dually · Oversized clearance</div>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">Heavy Duty</div>
              </Link>

              {/* Non-Running Vehicles */}
              <Link href="/ship-a-car/non-running" className="group relative rounded-2xl overflow-hidden h-52 block shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <img src="/non-running-vehicle-winch-loading-transport.jpg" alt="Non-running inoperable vehicle being winch-loaded onto a flatbed carrier truck" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                  <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <ArrowUpRight className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-base leading-tight">Non-Running Vehicles</div>
                    <div className="text-slate-300 text-[11px] font-medium">Winch-equipped · Project cars · Auctions</div>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">Inoperable</div>
              </Link>

            </div>
          </div>
        </section>

        {/* WHY SHIP WITH US — ELEVATED FEATURE GRID */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-slate-900 text-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Ship With America Car Transport
              </h2>
              <p className="text-slate-400 font-medium text-lg">
                America&apos;s leading bonded & insured auto transport network.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 flex flex-col justify-between">
                <div>
                  <ShieldCheck className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="font-bold text-lg mb-2">Fully Licensed & Bonded</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed mb-3">
                    USDOT #3849102, MC #1098472. Verify our credentials with FMCSA databases.
                  </p>
                </div>
                <Link href="/licensing-insurance" className="text-xs font-bold text-blue-400 hover:underline">
                  Verify Credentials →
                </Link>
              </div>

              <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 flex flex-col justify-between">
                <div>
                  <Building2 className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="font-bold text-lg mb-2">One Trusted Network</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
                    Every service under one roof — no need to shop across multiple brokers.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 flex flex-col justify-between">
                <div>
                  <DollarSign className="w-8 h-8 text-amber-400 mb-4" />
                  <h3 className="font-bold text-lg mb-2">Zero Upfront Deposit</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
                    Zero upfront deposit on any service — pay only upon carrier dispatch.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 flex flex-col justify-between">
                <div>
                  <Star className="w-8 h-8 text-amber-400 fill-amber-400 mb-4" />
                  <h3 className="font-bold text-lg mb-2">Real Customer Reviews</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed mb-3">
                    Over 10,450+ verified reviews with a 4.9/5.0 aggregate rating.
                  </p>
                </div>
                <Link href="/reviews" className="text-xs font-bold text-blue-400 hover:underline">
                  See Verified Reviews →
                </Link>
              </div>

            </div>

          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-200">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Auto Transport Services FAQs
              </h2>
              <p className="text-slate-600 font-medium text-base">
                Direct, extractable answers optimized for Featured Snippets and AI Overview citation.
              </p>
            </div>

            <div className="space-y-6">
              
              {/* FAQ 1 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  What auto transport services does America Car Transport offer?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  America Car Transport offers open and enclosed transport (protection level), door-to-door and terminal-to-terminal delivery (delivery method), and expedited shipping (speed) — which can be combined based on your vehicle and needs.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  What type of car shipping do I need?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Most vehicle owners choose open transport with door-to-door delivery, the standard combination. Choose enclosed transport for classic, exotic, or high-value vehicles; terminal-to-terminal to minimize cost; and expedited if your timeline is fixed.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  How do I choose a car shipping method?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Consider your vehicle type (standard vs. high-value), your schedule flexibility, and your convenience priority. Each factor points toward a different combination of services — see the comparison table above for a quick decision guide.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Can I combine multiple services, like enclosed and expedited?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Yes. Protection level (open/enclosed), delivery method (door-to-door/terminal), and speed (standard/expedited) are independent choices that can be combined based on your needs.
                </p>
              </div>

            </div>

            <div className="mt-12 text-center">
              <Link href="/faq" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                View Full FAQ Hub <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>

        {/* CLOSING CTA BANNER */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white text-center relative overflow-hidden">
          <div className="max-w-[1000px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-xs md:text-sm font-bold mb-6 border border-blue-500/30">
              <Compass className="w-4 h-4 text-blue-400" />
              Custom Transport Packages
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
              Get Your Quote
            </h2>
            
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8 font-medium">
              Get an instant quote for any combination of services — zero upfront deposit.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="#services-quote-widget" className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] hover:from-[#E05E00] text-white px-8 py-4 rounded-xl font-extrabold text-base transition-all shadow-[0_4px_14px_0_rgba(255,107,0,0.39)] hover:scale-105">
                Get Instant Quote →
              </Link>
              <a href="tel:5307255383" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-6 py-4 rounded-xl font-extrabold text-base transition-all flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-400" /> (530) 725-5383
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
