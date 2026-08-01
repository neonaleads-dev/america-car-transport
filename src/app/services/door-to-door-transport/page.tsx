import React from "react";
import Link from "next/link";
import { ShieldCheck, Phone, CheckCircle2, Truck, Star, ArrowRight, Award, Lock, FileCheck, Layers, HelpCircle, ChevronRight, AlertCircle, MapPin, DollarSign, Clock, Car, Home } from "lucide-react";
import Footer from "@/components/ui/Footer";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";

export const metadata = {
  title: "Door-to-Door Car Shipping | Pickup & Delivery at Your Door",
  description: "Ship your car with door-to-door auto transport — pickup and delivery as close to your exact address as possible. Get an instant quote in 30 seconds.",
  alternates: {
    canonical: "https://americacartransport.com/services/door-to-door-transport",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Door-to-Door Auto Transport",
  "name": "Door-to-Door Transport",
  "description": "Nationwide car shipping with pickup and delivery as close as possible to your exact address — no terminal drop-off required.",
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
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://americacartransport.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://americacartransport.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Door-to-Door Transport", "item": "https://americacartransport.com/services/door-to-door-transport" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is door-to-door car shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Door-to-door car shipping is a vehicle transport method where the carrier picks up and delivers your car as close as possible to your specified pickup and delivery addresses, rather than requiring drop-off and pickup at a terminal."
      }
    },
    {
      "@type": "Question",
      "name": "Does the driver come to my exact address?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most cases, yes. If a large car-hauling truck can't safely access your exact street due to narrow roads, low clearance, or restricted access, your driver will call ahead to arrange a nearby, easily accessible meeting point instead."
      }
    },
    {
      "@type": "Question",
      "name": "Is door-to-door shipping more expensive than terminal-to-terminal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but typically only slightly — often under 15 percent more on the same route, and sometimes as little as $75 to $100 more on enclosed transport."
      }
    },
    {
      "@type": "Question",
      "name": "How does door-to-door auto transport work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The carrier picks up your vehicle at your specified address, transports it directly, often alongside other nearby pickups on the same route, and delivers it to your destination address, with a joint inspection completed at both pickup and delivery."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get door-to-door service with enclosed transport?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Door-to-door is available with both open and enclosed transport, and is especially recommended for enclosed shipments, where the cost premium is minimal relative to total shipping cost."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to be home for pickup and delivery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You or an authorized representative should be present at both pickup and delivery to complete the joint vehicle inspection and sign off on condition."
      }
    }
  ]
};

export default function DoorToDoorTransportPage() {
  return (
    <>
      {/* PART 4 — Schema Graph Injections */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
            <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
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
            <Link href="#door-to-door-quote-widget" className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] hover:from-[#E05E00] text-white px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-extrabold transition-all duration-200 shadow-[0_4px_14px_0_rgba(255,107,0,0.39)] rounded-xl shrink-0 whitespace-nowrap">
              Get Instant Quote
            </Link>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans">
        
        {/* PART 2 — Breadcrumb Navigation */}
        <div className="bg-emerald-950 border-b border-emerald-900 py-3 px-4 md:px-8 lg:px-24 text-xs font-semibold text-emerald-200/70">
          <div className="max-w-[1400px] mx-auto flex items-center gap-2">
            <Link href="/" className="hover:text-emerald-300 transition-colors">Home</Link>
            <span className="text-emerald-800">/</span>
            <Link href="/services" className="hover:text-emerald-300 transition-colors">Services</Link>
            <span className="text-emerald-800">/</span>
            <span className="text-white font-bold">Door-to-Door Transport</span>
          </div>
        </div>

        {/* PART 3 — HERO SECTION WITH EMBEDDED QUOTE WIDGET */}
        <section id="door-to-door-quote-widget" className="py-12 md:py-20 bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white border-b border-slate-800 px-4 md:px-8 lg:px-24 relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* H1 & Subheading */}
            <div className="lg:col-span-6 xl:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-900/60 text-emerald-300 rounded-full text-xs md:text-sm font-bold mb-6 border border-emerald-500/30 shadow-lg shadow-emerald-950/40">
                <Home className="w-4 h-4 text-emerald-400" />
                #1 Most Convenient Vehicle Shipping Method
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-[3.6rem] font-black text-white leading-tight mb-6 tracking-tight">
                Door-to-Door Car Shipping: <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-300 bg-clip-text text-transparent">Pickup & Delivery at Your Address</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed mb-8">
                The most convenient way to ship a vehicle — no terminal drop-offs, no extra driving, no waiting at a depot.
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
                  <div className="px-2.5 py-1 bg-emerald-600 text-white font-extrabold text-xs rounded border border-emerald-500">
                    BBB A+
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm leading-none">Accredited Business</div>
                    <div className="text-xs text-slate-400 font-medium mt-0.5">FMCSA USDOT #3849102</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a href="tel:5307255383" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-xl font-extrabold text-sm shadow-lg shadow-emerald-950/40 transition-all flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-200" /> Call Shipping Experts: (530) 725-5383
                </a>
              </div>
            </div>

            {/* Embedded Quote Calculator Widget Preset */}
            <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
              <QuoteCalculator />
            </div>

          </div>
        </section>

        {/* H2: What Is Door-to-Door Car Shipping? */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-100">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                What Is Door-to-Door Car Shipping?
              </h2>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium mb-6">
                Door-to-door car shipping means your carrier picks up your vehicle as close as safely possible to your pickup address, and delivers it as close as safely possible to your destination address — no driving to a depot, no coordinating around a terminal&apos;s operating hours. It&apos;s the default method used by the large majority of auto transport companies today, having largely replaced the older terminal-to-terminal model that was standard decades ago.
              </p>

              {/* Ideal Fit Checklist */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 mb-8 transition-all duration-300 hover:shadow-md hover:border-emerald-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-base mb-4">This is the right choice for you if:</h3>
                <ul className="space-y-3 text-sm font-semibold text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>You want the most convenient, hands-off shipping experience</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Your schedule doesn&apos;t allow time to drop off or pick up at a terminal</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>You&apos;re shipping to or from a residential address, apartment, or business</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>You value having your vehicle picked up and delivered while you&apos;re present to inspect it</span>
                  </li>
                </ul>
              </div>

              {/* Direct-Answer Callout Box (Targets "what is door to door car shipping" for AI Overviews) */}
              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-l-emerald-700">
                <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-emerald-600" /> Direct Answer
                </div>
                <p className="text-slate-800 text-sm md:text-base font-semibold leading-relaxed">
                  <strong>Door-to-door car shipping</strong> is a vehicle transport method where the carrier picks up and delivers your car as close as possible to your specified addresses, rather than requiring drop-off and pickup at a separate terminal. It&apos;s the most common and convenient method used in the auto transport industry today.
                </p>
              </div>

            </div>

            {/* PART 5 — Hero Image Matrix */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden group w-full transition-all duration-300 hover:shadow-2xl hover:border-emerald-300">
                <img 
                  src="/door-to-door-car-shipping-pickup-at-home.jpg" 
                  alt="Door-to-door car shipping carrier picking up a vehicle at a residential home" 
                  title="Door-to-door car shipping carrier picking up a vehicle at a residential home"
                  className="w-full h-[340px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <p className="p-3 bg-slate-900 text-white rounded-xl mt-3 text-xs font-medium leading-relaxed">
                  Door-to-door delivery eliminates terminal drop-offs and depot wait times.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* H2: How Door-to-Door Transport Works (5 Steps) */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                How Door-to-Door Transport Works
              </h2>
              <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
                Simple, transparent 5-step pickup and delivery process right at your door.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-emerald-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-emerald-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-700 transition-colors">
                    1
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-emerald-600 transition-colors">Step 1 — Get an Instant Quote</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    Enter your pickup and delivery addresses, vehicle details, and preferred dates. Door-to-door is the default delivery method on every quote — no extra steps required.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-emerald-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-emerald-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-700 transition-colors">
                    2
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-emerald-600 transition-colors">Step 2 — We Match You With a Local Carrier</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    We dispatch your shipment to a vetted carrier whose route passes near both your pickup and delivery addresses.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-emerald-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-emerald-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-700 transition-colors">
                    3
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-emerald-600 transition-colors">Step 3 — Pickup at Your Address</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    Your driver arrives at (or as close as safely possible to) your address within the scheduled window, completes a joint vehicle inspection with you, and loads your car.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-emerald-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-emerald-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-700 transition-colors">
                    4
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-emerald-600 transition-colors">Step 4 — Direct Transit</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    Your vehicle travels directly toward its destination, often alongside other nearby pickups on the same route.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-emerald-400 group cursor-pointer">
                <div>
                  <div className="w-10 h-10 bg-emerald-600 text-white font-black text-lg rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-700 transition-colors">
                    5
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-emerald-600 transition-colors">Step 5 — Delivery at Your Destination</h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                    The carrier delivers your vehicle to (or as close as safely possible to) your destination address. You complete a final joint inspection and sign off on delivery.
                  </p>
                </div>
              </div>

            </div>

            {/* Direct-Answer Callout (Targets "does the driver come to my exact address") */}
            <div className="mt-12 bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-l-emerald-700">
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-600" /> Does the Driver Come to My Exact Address?
              </div>
              <p className="text-slate-800 text-sm md:text-base font-semibold leading-relaxed">
                <strong>In most cases, yes — the driver will come as close to your exact address</strong> as the truck can safely and legally access. Large car-hauling trucks can&apos;t always navigate narrow residential streets, tight cul-de-sacs, or low-clearance areas (like some apartment complexes or parking garages). In these situations, your driver will call ahead to arrange a nearby, easily accessible meeting point — usually a large parking lot within a few minutes of your address.
              </p>
            </div>

            {/* Process Step 3 Image Matrix */}
            <div className="mt-8 bg-white p-4 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center gap-6 transition-all duration-300 hover:shadow-md hover:border-emerald-300">
              <img 
                src="/door-to-door-auto-transport-driver-inspection.jpg" 
                alt="Driver and customer completing a vehicle inspection during door-to-door pickup" 
                title="Driver and customer completing a vehicle inspection during door-to-door pickup"
                className="w-full sm:w-64 h-40 object-cover rounded-2xl shrink-0"
              />
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">Pre-Trip & Post-Trip Joint Inspection</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Driver and customer completing a vehicle inspection during door-to-door pickup. Condition sign-off is completed right at your location before loading.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* H2: Door-to-Door Transport Cost */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Door-to-Door Transport Cost
              </h2>
              <p className="text-slate-600 font-medium text-lg max-w-3xl mx-auto">
                Door-to-door delivery typically costs a modest amount more than terminal-to-terminal shipping — <strong>often less than 15% more on the same route</strong>, and sometimes as little as $75–$100 more on enclosed transport routes. The convenience of not driving to a terminal generally outweighs this small premium for most customers.
              </p>
            </div>

            {/* Cost Drivers */}
            <div className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 transition-all duration-300 hover:shadow-md hover:border-emerald-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Why Door-to-Door Costs Slightly More</h3>
                  <ul className="space-y-4 text-sm font-semibold text-slate-700">
                    <li className="flex items-start gap-2.5 p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 transition-all duration-200">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Direct routing</strong> — carriers adjust their route to reach your specific address rather than a fixed terminal location</span>
                    </li>
                    <li className="flex items-start gap-2.5 p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 transition-all duration-200">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Time coordination</strong> — scheduling around your availability takes more planning than a terminal&apos;s fixed drop-off hours</span>
                    </li>
                    <li className="flex items-start gap-2.5 p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 transition-all duration-200">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Driver preference in 2026</strong> — with an ongoing long-haul driver shortage, many carriers actually prefer door-to-door pickups along major interstate corridors, since it keeps them on a tighter schedule than terminal check-in paperwork — which is one reason the price gap has narrowed in recent years</span>
                    </li>
                  </ul>

                  {/* Internal Link */}
                  <div className="mt-6 pt-6 border-t border-slate-200/80 text-xs md:text-sm font-bold text-slate-900">
                    See our full <Link href="/resources/car-shipping-cost-guide" className="text-blue-600 hover:underline">Car Shipping Cost Guide</Link> for a state-by-state and route-by-route breakdown.
                  </div>
                </div>
              </div>

              {/* Cost Chart Image Matrix */}
              <div className="lg:col-span-5">
                <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-md transition-all duration-300 hover:shadow-xl hover:border-emerald-300">
                  <img 
                    src="/door-to-door-shipping-cost-comparison-chart-2026.jpg" 
                    alt="Chart comparing door-to-door and terminal-to-terminal shipping costs in 2026" 
                    title="Chart comparing door-to-door and terminal-to-terminal shipping costs in 2026"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <p className="p-3 bg-slate-100 text-slate-800 rounded-xl mt-3 text-xs font-semibold">
                    Chart comparing door-to-door and terminal-to-terminal shipping costs in 2026.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* H2: Door-to-Door vs. Terminal-to-Terminal Shipping */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Door-to-Door vs. Terminal-to-Terminal Shipping — Which Should You Choose?
              </h2>
              <p className="text-slate-600 font-medium text-lg">
                Compare features to evaluate whether door-to-door or terminal shipping fits your schedule.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
              <div className="lg:col-span-7">
                {/* Comparison Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white text-sm">
                        <th className="p-4 font-bold">Feature</th>
                        <th className="p-4 font-bold bg-emerald-600">Door-to-Door</th>
                        <th className="p-4 font-bold">Terminal-to-Terminal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-sm font-medium text-slate-700">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Convenience</td>
                        <td className="p-4 bg-emerald-50/50 font-bold text-emerald-900">Highest — pickup/delivery at your address</td>
                        <td className="p-4">Lower — you drop off and pick up at a terminal</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Cost</td>
                        <td className="p-4 bg-emerald-50/50">Slightly higher, often under 15% more</td>
                        <td className="p-4 font-semibold text-emerald-700">Slightly lower</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Scheduling</td>
                        <td className="p-4 bg-emerald-50/50 font-semibold text-emerald-900">Flexible around your availability</td>
                        <td className="p-4">Fixed around terminal hours</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Best for</td>
                        <td className="p-4 bg-emerald-50/50 font-semibold text-emerald-900">Most residential and business shippers</td>
                        <td className="p-4">Shippers with flexible timing prioritizing lowest cost</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Storage risk</td>
                        <td className="p-4 bg-emerald-50/50 font-semibold text-emerald-900">None — vehicle moves directly</td>
                        <td className="p-4">Possible storage fees if not picked up promptly</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">Availability today</td>
                        <td className="p-4 bg-emerald-50/50 font-semibold text-emerald-900">Offered by nearly all carriers, the modern default</td>
                        <td className="p-4">Less common than it used to be</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Comparison Image Matrix */}
              <div className="lg:col-span-5">
                <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-md transition-all duration-300 hover:shadow-xl hover:border-emerald-300">
                  <img 
                    src="/door-to-door-vs-terminal-to-terminal-shipping-comparison.jpg" 
                    alt="Comparison of door-to-door and terminal-to-terminal car shipping methods" 
                    title="Comparison of door-to-door and terminal-to-terminal car shipping methods"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <p className="p-3 bg-slate-100 text-slate-800 rounded-xl mt-3 text-xs font-semibold">
                    Comparison of door-to-door and terminal-to-terminal car shipping methods.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct-Answer Callout (Targets "is door to door shipping more expensive") */}
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-2xl shadow-sm mb-6 transition-all duration-300 hover:shadow-md hover:border-l-emerald-700">
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Is Door-to-Door Shipping More Expensive?
              </div>
              <p className="text-slate-800 text-sm md:text-base font-semibold leading-relaxed">
                <strong>Door-to-door shipping is typically only slightly more expensive</strong> than terminal-to-terminal — often under 15% on the same route. For most customers, the convenience of avoiding a terminal drop-off and pickup outweighs this small cost difference, which is why door-to-door has become the industry-standard default.
              </p>
            </div>

            {/* Internal Link */}
            <div className="text-xs md:text-sm font-bold text-slate-900">
              Have flexible timing and want to compare options? See our <Link href="/resources/car-shipping-cost-guide" className="text-blue-600 hover:underline">Car Shipping Cost Guide</Link> for full terminal vs. door breakdown.
            </div>

          </div>
        </section>

        {/* H2: What If a Truck Can't Reach My Street? */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  What If a Truck Can&apos;t Reach My Street?
                </h2>
                <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium mb-6">
                  Car-hauling trucks are large — sometimes 70+ feet long when fully loaded — and can&apos;t always navigate narrow residential streets, low-hanging trees, tight turns, or restricted apartment/HOA access. This doesn&apos;t cancel door-to-door service; it simply means your driver will call ahead and arrange to meet you at the nearest safe, accessible location — commonly a large retail parking lot, school lot, or wide side street nearby. This is standard practice across the industry and doesn&apos;t add to your cost.
                </p>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 mb-6">
                  <h3 className="font-bold text-slate-900 text-base mb-4">Works extremely well for:</h3>
                  <ul className="space-y-3 text-sm font-semibold text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Single-family homes and most suburban streets</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Business and commercial addresses</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Apartments and condos (with a nearby meeting point, when needed)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Access Image Matrix */}
              <div className="lg:col-span-5">
                <div className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-md transition-all duration-300 hover:shadow-xl hover:border-emerald-300">
                  <img 
                    src="/car-hauler-truck-residential-street-access.jpg" 
                    alt="Large car-hauling truck navigating a residential street for door-to-door delivery" 
                    title="Large car-hauling truck navigating a residential street for door-to-door delivery"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <p className="p-3 bg-slate-100 text-slate-800 rounded-xl mt-3 text-xs font-semibold">
                    Large car-hauling truck navigating a residential street for door-to-door delivery.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* H2: Why Ship With America Car Transport */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-slate-900 text-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Ship With America Car Transport
              </h2>
              <p className="text-slate-400 font-medium text-lg">
                America&apos;s most trusted bonded & insured car shipping network.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-emerald-500/60 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 group">
                <div>
                  <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 group-hover:text-emerald-300 transition-colors">Fully Licensed & Bonded</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed mb-3">
                    USDOT #3849102, MC #1098472. Verify credentials with FMCSA databases.
                  </p>
                </div>
                <Link href="/licensing-insurance" className="text-xs font-bold text-blue-400 hover:underline">
                  Verify Credentials →
                </Link>
              </div>

              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-emerald-500/60 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 group">
                <div>
                  <DollarSign className="w-8 h-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 group-hover:text-amber-300 transition-colors">Zero Upfront Deposit</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
                    You don&apos;t pay a single dime until a carrier is dispatched for your vehicle.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-emerald-500/60 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 group">
                <div>
                  <Home className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 group-hover:text-emerald-300 transition-colors">Door-to-Door Standard</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
                    Door-to-door pickup & delivery is our default on every quote — no hidden upcharges.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-emerald-500/60 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 group">
                <div>
                  <Star className="w-8 h-8 text-amber-400 mb-4 fill-amber-400 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 group-hover:text-amber-300 transition-colors">Real Customer Reviews</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed mb-3">
                    Over 10,450+ verified customer reviews with a 4.9/5.0 aggregate rating.
                  </p>
                </div>
                <Link href="/reviews" className="text-xs font-bold text-blue-400 hover:underline">
                  See Verified Reviews →
                </Link>
              </div>

              <div className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-emerald-500/60 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col justify-between md:col-span-2 lg:col-span-1 transition-all duration-300 transform hover:-translate-y-1.5 group">
                <div>
                  <FileCheck className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors">Open & Enclosed</h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
                    Available with both <Link href="/services/open-auto-transport" className="text-blue-400 underline">Open</Link> and <Link href="/services/enclosed-auto-transport" className="text-blue-400 underline">Enclosed</Link> transport.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* H2: Door-to-Door Transport FAQs */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-white border-b border-slate-200">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Door-to-Door Transport FAQs
              </h2>
              <p className="text-slate-600 font-medium text-base">
                Direct, extractable answers optimized for Featured Snippets and AI Overview citation.
              </p>
            </div>

            <div className="space-y-6">
              
              {/* FAQ 1 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  What is door-to-door car shipping?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Door-to-door car shipping is a vehicle transport method where the carrier picks up and delivers your car as close as possible to your specified pickup and delivery addresses, rather than requiring drop-off and pickup at a terminal.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Does the driver come to my exact address?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  In most cases, yes. If a large car-hauling truck can&apos;t safely access your exact street due to narrow roads, low clearance, or restricted access, your driver will call ahead to arrange a nearby, easily accessible meeting point instead.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Is door-to-door shipping more expensive than terminal-to-terminal?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Yes, but typically only slightly — often under 15 percent more on the same route, and sometimes as little as $75 to $100 more on enclosed transport. For most customers, the convenience outweighs the small cost difference.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  How does door-to-door auto transport work?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  The carrier picks up your vehicle at your specified address, transports it directly, often alongside other nearby pickups on the same route, and delivers it to your destination address, with a joint inspection completed at both pickup and delivery.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Can I get door-to-door service with enclosed transport?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Yes. Door-to-door is available with both open and enclosed transport, and is especially recommended for enclosed shipments, where the cost premium is minimal relative to total shipping cost.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  Do I need to be home for pickup and delivery?
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  You or an authorized representative should be present at both pickup and delivery to complete the joint vehicle inspection and sign off on condition.
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

        {/* PART 3 — GET YOUR DOOR-TO-DOOR TRANSPORT QUOTE (CLOSING CTA BANNER) */}
        <section className="py-20 px-4 md:px-8 lg:px-24 bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white text-center relative overflow-hidden">
          <div className="max-w-[1000px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/20 text-emerald-300 rounded-full text-xs md:text-sm font-bold mb-6 border border-emerald-500/30">
              <Home className="w-4 h-4 text-emerald-400" />
              Direct Address Pickup & Delivery
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
              Get Your Door-to-Door Transport Quote
            </h2>
            
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8 font-medium">
              Get an instant, no-obligation door-to-door auto transport quote in under 30 seconds. Zero upfront deposit required.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="#door-to-door-quote-widget" className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] hover:from-[#E05E00] text-white px-8 py-4 rounded-xl font-extrabold text-base transition-all shadow-[0_4px_14px_0_rgba(255,107,0,0.39)] hover:scale-105">
                Get Instant Quote →
              </Link>
              <a href="tel:5307255383" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-6 py-4 rounded-xl font-extrabold text-base transition-all flex items-center gap-2">
                <Phone className="w-5 h-5 text-emerald-400" /> (530) 725-5383
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
