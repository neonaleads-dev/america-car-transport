"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Building2, Gavel, Truck, UserCheck } from "lucide-react";

const servicesWeOffer = [
  {
    title: "Door-to-Door Transport",
    desc: "We pick up and deliver directly to your address — no terminal drop-offs, no extra hassle.",
    img: "/america-car-transport-door-to-door-vehicle-shipping-service.png",
    alt: "America Car Transport door to door vehicle shipping service delivering a car directly to a driveway",
    tag: "Convenient",
    tagColor: "bg-emerald-700",
    href: "/services/door-to-door-transport",
  },
  {
    title: "Open Car Transport",
    desc: "The most affordable way to ship your vehicle. Safe, reliable, and used for 90% of all shipments.",
    img: "/america-car-transport-open-car-shipping-affordable.png",
    alt: "America Car Transport open car shipping carrier moving multiple vehicles affordably",
    tag: "Best Value",
    tagColor: "bg-blue-700",
    href: "/services/open-auto-transport",
  },
  {
    title: "Enclosed Auto Transport",
    desc: "Maximum protection for luxury, classic, or exotic vehicles. Fully enclosed trailers shield from weather.",
    img: "/america-car-transport-enclosed-auto-transport-premium-protection.png",
    alt: "America Car Transport enclosed auto transport truck providing premium protection for luxury vehicles",
    tag: "Premium",
    tagColor: "bg-purple-700",
    href: "/services/enclosed-auto-transport",
  },
  {
    title: "Expedited Auto Transport",
    desc: "Need it fast? Priority pickup and delivery with the shortest possible transit time.",
    img: "/america-car-transport-expedited-fast-vehicle-shipping.png",
    alt: "America Car Transport expedited fast vehicle shipping service for urgent deliveries",
    tag: "Fast",
    tagColor: "bg-red-700",
    href: "/services/expedited-auto-transport",
  },
];

const whoWeServe = [
  {
    title: "Auto Dealerships",
    desc: "Continuous inventory dispatch, bulk volume rates, and priority lane allocation for dealerships nationwide.",
    img: "/america-car-transport-booking-process-auto-carrier.png",
    alt: "America Car Transport dealer auto carrier shipping vehicle inventory",
    tag: "Commercial B2B",
    tagColor: "bg-blue-600",
    href: "/services/dealer-and-auction-transport",
  },
  {
    title: "Auto Auctions",
    desc: "Expedited vehicle pickup and gate clearance from Copart, Manheim, IAAI, and independent auctions.",
    img: "/america-car-transport-open-car-shipping-affordable.png",
    alt: "America Car Transport auction vehicle transport service",
    tag: "Auction Logistics",
    tagColor: "bg-amber-600",
    href: "/services/dealer-and-auction-transport",
  },
  {
    title: "Company Fleets",
    desc: "Custom corporate fleet moves, executive relocations, and large-scale enterprise vehicle transfers.",
    img: "/america-car-transport-door-to-door-vehicle-shipping-service.png",
    alt: "America Car Transport corporate fleet shipping logistics",
    tag: "Enterprise",
    tagColor: "bg-indigo-600",
    href: "/services/corporate-relocation-transport",
  },
  {
    title: "Individuals & Online Buyers",
    desc: "Stress-free door-to-door personal vehicle moves for house relocations, snowbirds, and online car sales.",
    img: "/america-car-transport-expedited-fast-vehicle-shipping.png",
    alt: "America Car Transport personal vehicle shipping for individuals",
    tag: "Personal Move",
    tagColor: "bg-emerald-600",
    href: "/services/door-to-door-transport",
  },
];

export default function ServicesCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"offer" | "serve">("offer");

  const displayItems = activeTab === "offer" ? servicesWeOffer : whoWeServe;

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-[#f8fafc] border-t border-slate-100 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-24">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="text-blue-600 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            {activeTab === "offer" ? "What We Offer" : "Who We Serve"}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            {activeTab === "offer" ? "Our Popular Car Transport Services" : "Customized Solutions for Every Client"}
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto mb-10">
            {activeTab === "offer" 
              ? "Whether you're shipping across the street or across the country, AmericaCarTransport makes it easy to choose the right option." 
              : "We provide tailored logistics for automotive businesses, auctions, commercial fleets, and private car buyers."}
          </p>

          {/* Toggle Switch */}
          <div className="inline-flex bg-white rounded-full p-1.5 border border-slate-200 shadow-sm mx-auto">
            <button 
              type="button"
              onClick={() => setActiveTab("offer")}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === 'offer' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
            >
              We Offer
            </button>
            <button 
              type="button"
              onClick={() => setActiveTab("serve")}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === 'serve' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
            >
              Who We Serve
            </button>
          </div>
        </div>

      </div>

      {/* Grid Container */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayItems.map((item, idx) => (
            <Link 
              key={idx} 
              href={item.href}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-500 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col group/card cursor-pointer block"
            >
              {/* Image Header */}
              <div className="relative h-44 w-full overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.alt} 
                  title={`America Car Transport - ${item.title}`}
                  className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                
                {/* Tag */}
                <div className={`absolute top-4 left-4 ${item.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm`}>
                  {item.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium mb-6 flex-1">
                  {item.desc}
                </p>
                
                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-xs font-bold text-blue-600 group-hover/card:text-blue-700 transition-colors mt-auto">
                  {activeTab === "offer" ? "Learn More" : "View Segment Rates"}
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/card:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

