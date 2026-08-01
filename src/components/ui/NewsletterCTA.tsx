"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export default function NewsletterCTA() {
  return (
    <section className="w-full py-16 md:py-24 bg-white font-sans">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-24">
        
        {/* Card Container */}
        <div className="relative w-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col">
          
          {/* Top Section with Background Image */}
          <div className="relative px-6 py-12 md:px-12 md:py-16 lg:px-16 flex flex-col gap-8">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="/america-car-transport-booking-process-auto-carrier.png"
                alt="America Car Transport auto carrier background"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#162a4d]/90 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 flex flex-col gap-8">
              {/* Text Content */}
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl lg:text-[38px] font-black text-white tracking-tight mb-2">
                  Get Exclusive Deals & Shipping Tips
                </h2>
                <p className="text-slate-200 text-lg md:text-[17px] font-medium">
                  Subscribe and get <span className="text-white font-bold">$25 off</span> your first shipment
                </p>
              </div>

              {/* Subscription Form */}
              <div className="w-full flex flex-col">
                <form className="w-full flex flex-col md:flex-row gap-3 md:gap-4 items-center">
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    aria-label="Your name"
                    className="w-full md:flex-1 px-5 py-3.5 rounded-[14px] text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/30 border-none font-medium text-[15px] shadow-inner"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone number" 
                    aria-label="Phone number"
                    className="w-full md:flex-1 px-5 py-3.5 rounded-[14px] text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/30 border-none font-medium text-[15px] shadow-inner"
                  />
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    aria-label="Your email"
                    className="w-full md:flex-1 px-5 py-3.5 rounded-[14px] text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/30 border-none font-medium text-[15px] shadow-inner"
                  />
                  <button 
                    type="button"
                    className="w-full md:w-auto bg-white hover:bg-slate-50 text-[#3b5998] font-bold text-[15px] py-3.5 px-8 rounded-[14px] shadow-md hover:-translate-y-0.5 transition-all duration-300 shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
                
                <p className="text-xs text-slate-300 font-medium mt-3 ml-1">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Trust Bar */}
          <div className="relative z-10 bg-[#0d1a33] py-4 px-6 md:px-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] md:text-[14px] font-bold text-white text-center border-t border-slate-700/50">
            <span>Licensed</span>
            <span className="text-slate-500 text-[10px]">•</span>
            <span>Bonded</span>
            <span className="text-slate-500 text-[10px]">•</span>
            <span>Insured</span>
            <span className="text-slate-500 text-[10px]">•</span>
            <span>BBB Accredited</span>
            <span className="text-slate-500 text-[10px]">•</span>
            <span>10,000+ Verified Reviews</span>
            <span className="text-slate-500 text-[10px]">•</span>
            <span className="flex items-center gap-1 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              4.8/5
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
