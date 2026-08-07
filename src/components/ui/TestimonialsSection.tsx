"use client";

import React from "react";
import { Star, CheckCircle2 } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  vehicle: string;
  route: string;
  rating: number;
  date: string;
  quote: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    name: "Marcus Sterling",
    location: "Austin, TX",
    vehicle: "2023 Porsche 911 GT3",
    route: "Los Angeles, CA → Austin, TX",
    rating: 5,
    date: "3 days ago",
    quote: "America Car Transport handled my Porsche in an enclosed trailer with zero stress. Driver arrived on time, communicated at every stop, and delivered in pristine condition. Worth every penny!",
    verified: true,
  },
  {
    name: "Sarah Jenkins",
    location: "Miami, FL",
    vehicle: "2024 Ford F-150 SuperCrew",
    route: "Chicago, IL → Miami, FL",
    rating: 5,
    date: "1 week ago",
    quote: "I was nervous about moving my truck cross-country, but their zero upfront deposit policy gave me confidence. Car arrived 1 day early. Outstanding service!",
    verified: true,
  },
  {
    name: "David Chen",
    location: "Seattle, WA",
    vehicle: "2022 Tesla Model S Plaid",
    route: "San Jose, CA → Seattle, WA",
    rating: 5,
    date: "2 weeks ago",
    quote: "Fair pricing with zero hidden fees. The instant quote matched my final price exactly. The driver was professional and handled my EV battery guidelines flawlessly.",
    verified: true,
  },
  {
    name: "Elena Rostova",
    location: "New York, NY",
    vehicle: "2021 Mercedes-Benz G 63 AMG",
    route: "Dallas, TX → New York, NY",
    rating: 5,
    date: "3 weeks ago",
    quote: "Shipped my G-Wagon enclosed. The real-time tracking updates gave me complete peace of mind. Will definitely use America Car Transport for all future vehicle moves.",
    verified: true,
  },
  {
    name: "Robert Gallagher",
    location: "Denver, CO",
    vehicle: "1967 Chevrolet Camaro SS",
    route: "Phoenix, AZ → Denver, CO",
    rating: 5,
    date: "1 month ago",
    quote: "Transporting a classic car requires special care. They assigned a top-tier carrier with hydraulic liftgate. Impeccable white-glove transport from start to finish.",
    verified: true,
  },
  {
    name: "Amanda Brooks",
    location: "Atlanta, GA",
    vehicle: "2023 Honda CR-V",
    route: "Boston, MA → Atlanta, GA",
    rating: 5,
    date: "1 month ago",
    quote: "Cheaper and way faster than driving it down myself! Customer support answered my call on the first ring and updated me daily. 5 stars all around.",
    verified: true,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 bg-white border-t border-slate-100 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-24">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-full text-xs md:text-sm font-bold mb-4 shadow-sm">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            Verified Customer Feedback
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Trusted by Over 10,450+ Vehicle Owners
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            See what real car buyers, collectors, and families say about our nationwide door-to-door car shipping network.
          </p>
        </div>

        {/* 6 Review Cards Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((rev, idx) => (
            <div 
              key={idx}
              className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between hover:border-blue-500 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {rev.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified Order
                    </span>
                  )}
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-sm leading-relaxed font-medium mb-6 relative">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Reviewer Details Footer */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between mt-auto">
                <div>
                  <div className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                    {rev.name}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">{rev.location}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-slate-800">{rev.vehicle}</div>
                  <div className="text-[11px] text-slate-400 font-mono">{rev.route}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregated Score Strip */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-amber-400 text-slate-900 font-black text-2xl rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-amber-400/20">
              4.9
            </div>
            <div>
              <div className="font-extrabold text-lg text-white">Google & BBB Overall Satisfaction Score</div>
              <div className="text-slate-400 text-sm font-medium">Based on 10,450+ verified customer reviews nationwide</div>
            </div>
          </div>
          <a 
            href="#hero-quote" 
            className="bg-gradient-to-r from-[#FF6B00] to-[#FF852d] hover:from-[#E05E00] text-white px-6 py-3 rounded-xl font-extrabold text-sm shadow-md hover:shadow-lg transition-all shrink-0"
          >
            Calculate Your Rate →
          </a>
        </div>

      </div>
    </section>
  );
}
