import React from "react";
import Link from "next/link";
import { StateData } from "@/types/location";
import QuoteCalculator from "@/components/calculator/QuoteCalculator";
import { Star, Check } from "lucide-react";

interface StateHeroProps {
  state: StateData;
}

const bullets = [
  "Zero Upfront Deposit",
  "100% Door-to-Door Service",
  "Full Insurance Included",
  "Real-Time GPS Tracking",
];

export default function StateHero({ state }: StateHeroProps) {
  return (
    <section id="hero-quote" className="relative bg-navy-900 text-white overflow-hidden">
      <div className="act-container pt-8 lg:pt-12 pb-12 lg:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-7 pt-2">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-navy-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white font-semibold" aria-current="page">{state.name}</span>
          </nav>

          <p className="act-eyebrow !text-navy-200 !mb-5">#1 Rated {state.name} Auto Shipping Network</p>

          <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] leading-[1.05] font-bold tracking-tight mb-5">
            {state.heroTitle}
          </h1>

          <p className="text-lg text-navy-100 leading-relaxed max-w-xl mb-8">
            {state.heroSubtitle}
          </p>

          <dl className="flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-6 mb-6 max-w-xl">
            <div>
              <dt className="sr-only">Customer rating</dt>
              <dd className="flex items-center gap-2">
                <span className="flex text-brass-300" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </span>
                <span className="font-semibold">5.0 / 5.0 Rating</span>
              </dd>
              <dd className="text-sm text-navy-200 mt-1">Google Verified Reviews</dd>
            </div>
            <div>
              <dt className="sr-only">Accreditation</dt>
              <dd className="font-semibold">BBB A+ Accredited Business</dd>
              <dd className="text-sm text-navy-200 mt-1">FMCSA Broker</dd>
            </div>
          </dl>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-[15px] text-navy-50 max-w-xl">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brass-300 shrink-0" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:col-span-5 flex justify-center lg:justify-end text-slate-800">
          <QuoteCalculator />
        </div>
      </div>
    </section>
  );
}
