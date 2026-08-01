import React from "react";
import Link from "next/link";
import { StateData } from "@/types/location";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import { ShieldCheck, Star, Award, MapPin, CheckCircle2 } from "lucide-react";

interface StateHeroProps {
  state: StateData;
}

export default function StateHero({ state }: StateHeroProps) {
  return (
    <section className="relative px-4 md:px-8 lg:px-24 pt-8 lg:pt-12 pb-12 lg:pb-16 bg-[#F8FAFC] bg-grid-pattern overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[25%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-100/40 blur-3xl"></div>
        <div className="absolute top-[30%] -left-[10%] w-[45%] h-[45%] rounded-full bg-slate-200/40 blur-3xl"></div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto z-10 relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Typography & State Badge */}
        <div className="flex flex-col lg:col-span-7 relative z-10 pt-2">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-500 mb-4">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-blue-600 transition-colors">Locations</Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">{state.name}</span>
          </nav>

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs md:text-sm font-bold tracking-wide mb-5 w-max border border-blue-200/70 shadow-sm">
            <MapPin className="w-4 h-4 text-blue-600" />
            #1 Rated {state.name} Auto Shipping Network
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[3.8rem] leading-[1.1] font-black tracking-tight text-slate-900 mb-5">
            {state.heroTitle}
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mb-8">
            {state.heroSubtitle}
          </p>

          {/* Trust Badges Bar */}
          <div className="flex flex-wrap items-center gap-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200/90 shadow-md shadow-slate-900/5 max-w-xl mb-6">
            <div className="flex items-center gap-2.5 pr-4 border-r border-slate-200">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <div>
                <div className="font-black text-slate-900 text-sm leading-none">4.9 / 5.0 Rating</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">Google Verified Reviews</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="px-2 py-0.5 bg-slate-900 text-white font-extrabold text-[11px] rounded border border-slate-700">
                BBB A+
              </div>
              <div>
                <div className="font-bold text-slate-900 text-xs leading-none">Accredited Business</div>
                <div className="text-[10px] text-slate-500 font-medium mt-0.5">USDOT #{state.usdotNumber}</div>
              </div>
            </div>
          </div>

          {/* Feature Bullets */}
          <div className="grid grid-cols-2 gap-3 text-xs md:text-sm font-semibold text-slate-700 max-w-xl">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero Upfront Deposit</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>100% Door-to-Door Service</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full Insurance Included</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Real-Time GPS Tracking</span>
            </div>
          </div>

        </div>

        {/* Right Column: Quote Calculator */}
        <div className="w-full lg:col-span-5 flex justify-center lg:justify-end relative z-20">
          <QuoteCalculator />
        </div>

      </div>
    </section>
  );
}
