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
    <section className="py-24 bg-white border-t border-slate-100 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-24">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2">
            B2B & Commercial Services
          </h2>
          <p className="text-slate-600 font-medium text-lg">
            Custom Logistics Solutions for Commercial Clients
          </p>
        </div>

        {/* Responsive CSS Grid (All cards visible on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {b2bServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-3xl border-2 border-slate-100 p-6 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col group cursor-pointer"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-600/30 transition-all duration-300 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium mb-6 flex-1">
                  {service.desc}
                </p>

                {/* Link */}
                <div className="flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors mt-auto">
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

