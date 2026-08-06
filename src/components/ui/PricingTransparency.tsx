"use client";

import React, { useState, useEffect, useRef } from "react";
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
    <section className="py-24 px-4 md:px-8 lg:px-24 bg-[#f8fafc] border-t border-slate-100 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24 items-center">
        
        {/* Left Column: Price Visualizer */}
        <div>
          <div className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-3">Interactive Matrix</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            How Much Does It Cost to Transport a Car?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10">
            Auto transport pricing is highly dynamic. Click the options below to interact with our real-time pricing matrix and see how different factors impact the average market rate.
          </p>

          {/* Interactive Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div>
              <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2 block">Distance</label>
              <div className="flex bg-white rounded-lg p-1 border border-slate-200 shadow-sm">
                {(["short", "medium", "long"] as const).map(d => (
                  <button 
                    key={d} onClick={() => setDistance(d)}
                    className={`flex-1 text-xs font-bold py-2 rounded-md transition-all ${distance === d ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                  >
                    {d.charAt(0).toUpperCase() + d.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2 block">Vehicle</label>
              <div className="flex bg-white rounded-lg p-1 border border-slate-200 shadow-sm">
                {(["sedan", "suv", "truck"] as const).map(v => (
                  <button 
                    key={v} onClick={() => setVehicle(v)}
                    className={`flex-1 text-xs font-bold py-2 rounded-md transition-all uppercase ${vehicle === v ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2 block">Transport</label>
              <div className="flex bg-white rounded-lg p-1 border border-slate-200 shadow-sm">
                {(["open", "enclosed"] as const).map(t => (
                  <button 
                    key={t} onClick={() => setTransport(t)}
                    className={`flex-1 text-xs font-bold py-2 rounded-md transition-all capitalize ${transport === t ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Animated Visualizer Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 mb-8" ref={containerRef}>
            <div className="flex justify-between items-center mb-8">
              <span className="text-slate-600 font-semibold text-sm">Typical Price range</span>
              <span className="text-3xl font-black text-slate-900 tracking-tight">
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
                  <div key={i} className="flex-1 h-full bg-slate-100 rounded-full"></div>
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
                    <div key={i} className="flex-1 h-full bg-blue-700 rounded-full" style={{ minWidth: 'calc((100% - (39 * 2px)) / 40)' }}></div>
                  ))}
                </div>
              </motion.div>

              {/* Animated Floating Tooltip */}
              <motion.div 
                initial={{ opacity: 0, left: "0%" }}
                animate={isInView ? { opacity: 1, left: `${percentage}%` } : { opacity: 0, left: "0%" }}
                transition={{ duration: 0.8, ease: "backOut" }}
                className="absolute -top-14 transform -translate-x-1/2 bg-blue-700 text-white text-xs font-bold py-2 px-3 rounded-lg shadow-lg shadow-blue-700/30 whitespace-nowrap z-10 flex flex-col items-center"
              >
                Average paid on this route: ${displayAvg.toLocaleString()}
                {/* Little triangle pointing down */}
                <div className="absolute -bottom-1 w-2 h-2 bg-blue-700 rotate-45"></div>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="flex-1 bg-[#3b63d9] hover:bg-[#2d4cb3] text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2">
                Get Your Exact Quote →
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Factors Grid */}
        <div>
          <div className="text-slate-800 font-bold tracking-tight text-xl mb-6">Factors That Affect This Price</div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {factors.map((factor, idx) => {
              const Icon = factor.icon;
              const isLastOdd = idx === factors.length - 1 && factors.length % 2 !== 0;

              return (
                <div 
                  key={idx} 
                  className={`bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 group cursor-default ${isLastOdd ? 'sm:col-span-2' : ''}`}
                >
                  <div className="w-10 h-10 bg-[#f8fafc] rounded-lg flex items-center justify-center text-blue-500 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-slate-900 font-bold mb-2">{factor.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    {factor.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
