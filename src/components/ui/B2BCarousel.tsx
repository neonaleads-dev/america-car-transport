"use client";

import React from "react";
import { Car, Gavel, Building2, Key, Factory, ChevronRight } from "lucide-react";

const b2bServices = [
  {
    icon: Car,
    title: "Auto Dealerships",
    desc: "Continuous collaboration opportunities for auto sales businesses with priority dispatching.",
    linkText: "Partner Now",
  },
  {
    icon: Gavel,
    title: "Auto Auctions",
    desc: "Expedited shipping for vehicles destined for auctions with real-time tracking updates.",
    linkText: "Schedule",
  },
  {
    icon: Building2,
    title: "Company Fleets",
    desc: "Corporate firms are our special B2B clients for large scale car shipping and logistics.",
    linkText: "Corporate Rates",
  },
  {
    icon: Key,
    title: "Rental Companies",
    desc: "Reliable redistribution for rental car agencies to keep your fleet where it's needed.",
    linkText: "Get Quote",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Fast and fully secure shipping for newly manufactured vehicles from plant to port.",
    linkText: "Learn More",
  },
];

export default function B2BCarousel() {
  return (
    <section className="act-section bg-navy-900 text-white font-sans">
      <div className="act-container">
        
        {/* Header */}
        <div className="mb-12">
          <p className="act-eyebrow !text-navy-200">For Business</p>
          <h2 className="act-h2 !text-white mb-3">
            B2B & Commercial Services
          </h2>
          <p className="text-navy-100 text-lg">
            Custom Logistics Solutions for Commercial Clients
          </p>
        </div>

        {/* Responsive CSS Grid (All cards visible on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-white/15">
          {b2bServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx} 
                className="py-7 lg:px-6 lg:first:pl-0 lg:border-l lg:first:border-l-0 border-b lg:border-b-0 border-white/15 flex flex-col group"
              >
                {/* Icon */}
                <div className="text-navy-200 mb-5 shrink-0">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-navy-100 text-sm leading-relaxed mb-6 flex-1">
                  {service.desc}
                </p>

                {/* Link */}
                <div className="flex items-center gap-1 text-sm font-semibold text-white mt-auto">
                  {service.linkText}
                  <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

