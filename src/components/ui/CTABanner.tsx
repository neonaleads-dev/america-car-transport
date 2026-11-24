"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="w-full bg-signal font-sans">
      <div className="act-container py-12 md:py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Ready To Book Your Vehicle Shipment With America Car Transport?
          </h2>
          <p className="text-white/90 text-lg">
            Get your free quote in 30 seconds and experience hassle-free auto transport.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <Link href="/tools/car-shipping-cost-calculator" className="group inline-flex items-center gap-2 h-12 px-6 rounded-md bg-white text-signal-700 font-semibold hover:bg-paper transition-colors">
            Get Instant Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
          <a href="tel:5307255383" className="inline-flex items-center h-12 px-6 rounded-md border border-white/60 text-white font-semibold hover:bg-white/10 transition-colors">
            (530) 725-5383
          </a>
        </div>
      </div>
    </section>
  );
}
