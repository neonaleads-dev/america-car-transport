"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const servicesWeOffer = [
  {
    title: "Door-to-Door Transport",
    desc: "We pick up and deliver directly to your address — no terminal drop-offs, no extra hassle.",
    img: "/america-car-transport-door-to-door-vehicle-shipping-service-400.webp",
    alt: "America Car Transport door to door vehicle shipping service delivering a car directly to a driveway",
    tag: "Convenient",
    tagColor: "bg-emerald-700",
    href: "/services/door-to-door-transport",
  },
  {
    title: "Open Car Transport",
    desc: "The most affordable way to ship your vehicle. Safe, reliable, and used for 90% of all shipments.",
    img: "/america-car-transport-open-car-shipping-affordable-400.webp",
    alt: "America Car Transport open car shipping carrier moving multiple vehicles affordably",
    tag: "Best Value",
    tagColor: "bg-blue-700",
    href: "/services/open-auto-transport",
  },
  {
    title: "Enclosed Auto Transport",
    desc: "Maximum protection for luxury, classic, or exotic vehicles. Fully enclosed trailers shield from weather.",
    img: "/america-car-transport-enclosed-auto-transport-premium-protection-400.webp",
    alt: "America Car Transport enclosed auto transport truck providing premium protection for luxury vehicles",
    tag: "Premium",
    tagColor: "bg-purple-700",
    href: "/services/enclosed-auto-transport",
  },
  {
    title: "Expedited Auto Transport",
    desc: "Need it fast? Priority pickup and delivery with the shortest possible transit time.",
    img: "/america-car-transport-expedited-fast-vehicle-shipping-400.webp",
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
    img: "/america-car-transport-booking-process-auto-carrier-650.webp",
    alt: "America Car Transport dealer auto carrier shipping vehicle inventory",
    tag: "Commercial B2B",
    tagColor: "bg-blue-600",
    href: "/services/dealer-and-auction-transport",
  },
  {
    title: "Auto Auctions",
    desc: "Expedited vehicle pickup and gate clearance from Copart, Manheim, IAAI, and independent auctions.",
    img: "/america-car-transport-open-car-shipping-affordable-400.webp",
    alt: "America Car Transport auction vehicle transport service",
    tag: "Auction Logistics",
    tagColor: "bg-amber-600",
    href: "/services/dealer-and-auction-transport",
  },
  {
    title: "Company Fleets",
    desc: "Custom corporate fleet moves, executive relocations, and large-scale enterprise vehicle transfers.",
    img: "/america-car-transport-door-to-door-vehicle-shipping-service-400.webp",
    alt: "America Car Transport corporate fleet shipping logistics",
    tag: "Enterprise",
    tagColor: "bg-indigo-600",
    href: "/services/corporate-relocation-transport",
  },
  {
    title: "Individuals & Online Buyers",
    desc: "Stress-free door-to-door personal vehicle moves for house relocations, snowbirds, and online car sales.",
    img: "/america-car-transport-expedited-fast-vehicle-shipping-400.webp",
    alt: "America Car Transport personal vehicle shipping for individuals",
    tag: "Personal Move",
    tagColor: "bg-emerald-600",
    href: "/services/door-to-door-transport",
  },
];

// Sharper 800px versions exist for these card images (made from the original 1024px art).
const HD: Record<string, string> = {
  "/america-car-transport-door-to-door-vehicle-shipping-service-400.webp": "/america-car-transport-door-to-door-vehicle-shipping-service-800.webp",
  "/america-car-transport-open-car-shipping-affordable-400.webp": "/america-car-transport-open-car-shipping-affordable-800.webp",
  "/america-car-transport-enclosed-auto-transport-premium-protection-400.webp": "/america-car-transport-enclosed-auto-transport-premium-protection-800.webp",
  "/america-car-transport-expedited-fast-vehicle-shipping-400.webp": "/america-car-transport-expedited-fast-vehicle-shipping-800.webp",
  "/america-car-transport-booking-process-auto-carrier-650.webp": "/america-car-transport-booking-process-auto-carrier-1024.webp",
};
const srcSetFor = (src: string) => {
  const hd = HD[src];
  if (!hd) return undefined;
  const small = src.endsWith("-650.webp") ? "650w" : "400w";
  const big = hd.endsWith("-1024.webp") ? "1024w" : "800w";
  return `${src} ${small}, ${hd} ${big}`;
};

export default function ServicesCarousel() {
  const [activeTab, setActiveTab] = useState<"offer" | "serve">("offer");

  const displayItems = activeTab === "offer" ? servicesWeOffer : whoWeServe;


  return (
    <section className="act-section bg-paper border-t border-navy-900/10 font-sans">
      <div className="act-container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <p className="act-eyebrow">{activeTab === "offer" ? "What We Offer" : "Who We Serve"}</p>
            <h2 className="act-h2 mb-5">
              {activeTab === "offer" ? "Our Popular Car Transport Services" : "Customized Solutions for Every Client"}
            </h2>
            <p className="act-lead">
              {activeTab === "offer"
                ? "Whether you're shipping across the street or across the country, America Car Transport makes it easy to choose the right option."
                : "We provide tailored logistics for automotive businesses, auctions, commercial fleets, and private car buyers."}
            </p>
          </div>

          <div role="tablist" aria-label="Services view" className="inline-flex self-start lg:self-auto border border-navy-900/20 rounded-md p-1 bg-white">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "offer"}
              onClick={() => setActiveTab("offer")}
              className={`px-5 h-10 rounded font-semibold text-sm transition-colors ${activeTab === 'offer' ? 'bg-navy-900 text-white' : 'text-slate-600 hover:text-navy-900'}`}
            >
              We Offer
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "serve"}
              onClick={() => setActiveTab("serve")}
              className={`px-5 h-10 rounded font-semibold text-sm transition-colors ${activeTab === 'serve' ? 'bg-navy-900 text-white' : 'text-slate-600 hover:text-navy-900'}`}
            >
              Who We Serve
            </button>
          </div>
        </div>

        <div data-gsap-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {displayItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group/card relative flex flex-col bg-white rounded-xl border border-navy-900/10 shadow-[0_1px_2px_rgba(11,37,69,0.06)] overflow-hidden transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_44px_-18px_rgba(11,37,69,0.38)] hover:border-navy-900/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-navy-100">
                <img
                  src={item.img}
                  srcSet={srcSetFor(item.img)}
                  sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                  alt={item.alt}
                  width={400}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  title={`America Car Transport - ${item.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.06]"
                />
                {/* soft navy fade so the label always reads */}
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/0 to-transparent opacity-80 transition-opacity duration-300 group-hover/card:opacity-100"></div>
                <span className="absolute top-3 left-3 inline-flex items-center rounded bg-white/95 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-navy-900">
                  {item.tag}
                </span>
                <span aria-hidden="true" className="absolute bottom-2 right-4 font-heading text-5xl font-bold leading-none text-white/90 tabular">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="relative flex flex-col flex-1 px-6 pt-6 pb-5">
                {/* red accent grows on hover */}
                <span aria-hidden="true" className="absolute top-0 left-6 h-[3px] w-10 bg-signal transition-all duration-500 ease-out group-hover/card:w-[calc(100%-3rem)]"></span>
                <h3 className="text-xl font-bold text-navy-900 mb-2 mt-1">{item.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-6 flex-1">{item.desc}</p>
                <span className="flex items-center justify-between border-t border-navy-900/10 pt-4 mt-auto text-sm font-semibold text-navy-900">
                  {activeTab === "offer" ? "Learn More" : "View Segment Rates"}
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-navy-900/20 text-navy-900 transition-colors duration-300 group-hover/card:bg-signal group-hover/card:border-signal group-hover/card:text-white">
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/card:translate-x-0.5" aria-hidden="true" />
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
