"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView, animate } from "framer-motion";
import { Truck, Car, Package, MapPin, Snowflake, Play } from "lucide-react";

const factors = [
  { title: "Vehicle Size & Weight", desc: "Larger vehicles take more carrier space and cost more to ship.", icon: Truck },
  { title: "Vehicle Condition", desc: "Non-running vehicles need special loading equipment, adding cost.", icon: Car },
  { title: "Transport Type", desc: "Open transport is affordable; enclosed offers maximum protection.", icon: Package },
  { title: "Distance & Route", desc: "Longer routes cost more total; shorter routes cost more per mile.", icon: MapPin },
  { title: "Season & Demand", desc: "Snowbird season and summer moves tend to be busier and pricier.", icon: Snowflake },
];

export default function PricingTransparency() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Interactive States
  const [distance, setDistance] = useState<"short" | "medium" | "long">("medium");
  const [vehicle, setVehicle] = useState<"sedan" | "suv" | "truck">("sedan");
  const [transport, setTransport] = useState<"open" | "enclosed">("open");

  // Dynamic Pricing Algorithm
  const calculatePricing = () => {
    let baseMin = 600;
    let baseMax = 1000;

    // Distance Multiplier
    if (distance === "short") { baseMin *= 0.5; baseMax *= 0.6; }
    if (distance === "long") { baseMin *= 1.8; baseMax *= 2.0; }

    // Vehicle Flat Additions
    if (vehicle === "suv") { baseMin += 150; baseMax += 200; }
    if (vehicle === "truck") { baseMin += 300; baseMax += 400; }

    // Transport Multiplier
    if (transport === "enclosed") { baseMin *= 1.4; baseMax *= 1.5; }

    const min = Math.floor(baseMin);
    const max = Math.floor(baseMax);
    const avg = Math.floor((min + max) / 2);
    
    // Absolute max possible price for percentage calculation (approx $3600)
    const absoluteMax = 3600;
    const percentage = Math.min(Math.max((avg / absoluteMax) * 100, 10), 95); // Bound between 10% and 95%

    return { min, max, avg, percentage };
  };

  const { min, max, avg, percentage } = calculatePricing();

  // Animated Number Counters
  const [displayMin, setDisplayMin] = useState(min);
  const [displayMax, setDisplayMax] = useState(max);
  const [displayAvg, setDisplayAvg] = useState(avg);

  useEffect(() => {
    if (!isInView) return;
    
    const controlsMin = animate(displayMin, min, { duration: 0.8, onUpdate: v => setDisplayMin(Math.round(v)) });
    const controlsMax = animate(displayMax, max, { duration: 0.8, onUpdate: v => setDisplayMax(Math.round(v)) });
    const controlsAvg = animate(displayAvg, avg, { duration: 0.8, onUpdate: v => setDisplayAvg(Math.round(v)) });
    
    return () => { controlsMin.stop(); controlsMax.stop(); controlsAvg.stop(); };
  }, [min, max, avg, isInView, displayMin, displayMax, displayAvg]);

  const ticks = Array.from({ length: 40 });

  return (
    <section className="act-section bg-paper border-t border-navy-900/10 overflow-hidden font-sans">
      <div className="act-container grid grid-cols-1 xl:grid-cols-2 gap-14 xl:gap-20 items-start">
        
        {/* Left Column: Price Visualizer */}
        <div>
          <p className="act-eyebrow">Typical Costs</p>
          <h2 className="act-h2 mb-5">
            How Much Does It Cost to Transport a Car?
          </h2>
          <p className="act-lead mb-10">
            Auto transport pricing is highly dynamic. Click the options below to interact with our real-time pricing matrix and see how different factors impact the average market rate.
          </p>

          {/* Interactive Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div>
              <label className="text-xs text-slate-600 font-semibold uppercase tracking-[0.12em] mb-2 block">Distance</label>
              <div className="flex bg-white rounded-md p-1 border border-navy-900/15">
                {(["short", "medium", "long"] as const).map(d => (
                  <button 
                    key={d} onClick={() => setDistance(d)}
                    className={`flex-1 text-xs font-bold py-2 rounded-md transition-all ${distance === d ? 'bg-navy-900 text-white' : 'text-slate-600 hover:bg-navy-50'}`}
                  >
                    {d.charAt(0).toUpperCase() + d.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs text-slate-600 font-semibold uppercase tracking-[0.12em] mb-2 block">Vehicle</label>
              <div className="flex bg-white rounded-md p-1 border border-navy-900/15">
                {(["sedan", "suv", "truck"] as const).map(v => (
                  <button 
                    key={v} onClick={() => setVehicle(v)}
                    className={`flex-1 text-xs font-bold py-2 rounded-md transition-all uppercase ${vehicle === v ? 'bg-navy-900 text-white' : 'text-slate-600 hover:bg-navy-50'}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs text-slate-600 font-semibold uppercase tracking-[0.12em] mb-2 block">Transport</label>
              <div className="flex bg-white rounded-md p-1 border border-navy-900/15">
                {(["open", "enclosed"] as const).map(t => (
                  <button 
                    key={t} onClick={() => setTransport(t)}
                    className={`flex-1 text-xs font-bold py-2 rounded-md transition-all capitalize ${transport === t ? 'bg-navy-900 text-white' : 'text-slate-600 hover:bg-navy-50'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Animated Visualizer Card */}
          <div className="bg-white rounded-lg p-6 md:p-8 border border-navy-900/15 mb-8" ref={containerRef}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-8">
              <span className="text-slate-600 font-semibold text-sm">Typical Price range</span>
              <span className="font-heading text-3xl md:text-4xl font-bold text-navy-900 tabular whitespace-nowrap">
                ${displayMin.toLocaleString()} – ${displayMax.toLocaleString()}
              </span>
            </div>

            <div className="relative mb-12 mt-16">
              {/* Range Labels */}
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-2 uppercase tracking-widest">
                <span>Low End</span>
                <span>Avg. Paid</span>
                <span>High End</span>
              </div>

              {/* Ticks Background */}
              <div className="flex justify-between items-center h-8 gap-[2px]">
                {ticks.map((_, i) => (
                  <div key={i} className="flex-1 h-full bg-navy-50 rounded-[1px]"></div>
                ))}
              </div>

              {/* Animated Overlay Ticks */}
              <motion.div 
                initial={{ width: "0%" }}
                animate={isInView ? { width: `${percentage}%` } : { width: "0%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-6 left-0 h-8 flex overflow-hidden w-full gap-[2px]"
                style={{ clipPath: "inset(0 0 0 0)" }}
              >
                <div className="flex w-[100vw] gap-[2px]">
                   {ticks.map((_, i) => (
                    <div key={i} className="flex-1 h-full bg-navy-700 rounded-[1px]" style={{ minWidth: 'calc((100% - (39 * 2px)) / 40)' }}></div>
                  ))}
                </div>
              </motion.div>

              {/* Animated Floating Tooltip */}
              <motion.div 
                initial={{ opacity: 0, left: "0%" }}
                animate={isInView ? { opacity: 1, left: `${Math.min(Math.max(percentage, 30), 70)}%` } : { opacity: 0, left: "0%" }}
                transition={{ duration: 0.8, ease: "backOut" }}
                className="absolute -top-14 transform -translate-x-1/2 bg-navy-900 text-white text-xs font-semibold py-2 px-3 rounded whitespace-nowrap z-10 flex flex-col items-center"
              >
                Average paid on this route: ${displayAvg.toLocaleString()}
                {/* Little triangle pointing down */}
                <div className="absolute -bottom-1 w-2 h-2 bg-navy-900 rotate-45"></div>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="#hero-quote" className="flex-1 btn-primary">
                Get Your Exact Quote →
              </a>
            </div>
            <p className="text-sm text-slate-600 text-center mt-4">
              Looking for a route breakdown? <Link href="/tools/car-shipping-cost-calculator" className="text-navy-900 font-semibold underline underline-offset-2">Get exact car shipping costs</Link> using our online calculator.
            </p>
          </div>
        </div>

        {/* Right Column: what moves the price */}
        <div className="xl:pt-14">
          <h3 className="text-xl font-bold text-navy-900 mb-2">Factors That Affect This Price</h3>
          <ol data-gsap-stagger className="border-t border-navy-900/15">
            {factors.map((factor, idx) => {
              const Icon = factor.icon;
              return (
                <li key={idx} className="flex gap-5 py-5 border-b border-navy-900/15">
                  <span className="w-10 h-10 shrink-0 rounded-md bg-white border border-navy-900/15 flex items-center justify-center text-navy-700">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h4 className="text-navy-900 font-bold mb-1">{factor.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{factor.desc}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

      </div>
    </section>
  );
}
