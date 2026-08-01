"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="w-full bg-blue-900 relative overflow-hidden font-sans border-y border-blue-950">
      {/* Abstract Wave Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
        <svg preserveAspectRatio="none" viewBox="0 0 1440 320" className="w-full h-full object-cover">
          <path 
            fill="#ffffff" 
            fillOpacity="0.15" 
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,160C960,139,1056,149,1152,165.3C1248,181,1344,203,1392,213.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
          <path 
            fill="#ffffff" 
            fillOpacity="0.1" 
            d="M0,128L48,149.3C96,171,192,213,288,224C384,235,480,213,576,186.7C672,160,768,128,864,112C960,96,1056,96,1152,122.7C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-24 py-10 md:py-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
        
        {/* Text Content */}
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Ready To Book Your Vehicle Shipment With AmericaCarTransport?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl font-medium max-w-2xl">
            Get your free quote in 30 seconds and experience hassle-free auto transport.
          </p>
        </div>

        {/* CTA Button */}
        <div className="shrink-0">
          <Link href="/tools/car-shipping-cost-calculator" className="group bg-gradient-to-r from-[#FF6B00] to-[#FF852d] hover:from-[#E05E00] hover:to-[#FF6B00] text-white font-extrabold text-lg py-5 px-10 rounded-2xl shadow-[0_8px_30px_rgba(255,107,0,0.4)] hover:shadow-[0_12px_36px_rgba(255,107,0,0.55)] active:shadow-inner transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-1 cursor-pointer">
            Get Instant Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
