import React from "react";
import Link from "next/link";
import { StateData } from "@/types/location";
import { CaliforniaStateData } from "@/data/states/california";
import { ShieldCheck, AlertTriangle, Thermometer, Radio, FileText, CheckCircle2, ArrowRight, DollarSign, Fuel, Sparkles, Camera, Sun, Snowflake, Calendar, Anchor, Star, Quote } from "lucide-react";
import AnimatedSection, { AnimatedCard } from "@/components/ui/AnimatedSection";

interface StateConsiderationsProps {
  state: StateData | CaliforniaStateData;
}

export default function StateConsiderations({ state }: StateConsiderationsProps) {
  const isCalifornia = state.slug === "california";
  const caData = isCalifornia ? (state as CaliforniaStateData) : null;

  return (
    <section className="py-16 bg-white border-b border-slate-200 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-24 space-y-16">
        
        {/* Direct-Answer Callout Box: Car Shipping Overview */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="bg-blue-50/90 border-l-4 border-blue-600 p-5 rounded-r-2xl shadow-sm text-slate-800 text-sm leading-relaxed font-medium">
            <span className="font-extrabold text-blue-900 block text-xs uppercase tracking-wider mb-1">
              ⚡ Quick Direct Answer — {state.name} Auto Shipping Overview
            </span>
            <strong>{state.name} car shipping</strong> connects the state&apos;s major cities to nationwide auto transport routes, with pricing typically driven by distance, vehicle type, and transport method (open or enclosed). Cross-country routes like {state.name} to Florida or {state.name} to New York are among the most commonly booked long-haul shipments in the country.
          </div>
        </AnimatedSection>

        {/* Visual 3-Step "How Auto Shipping Works" Section */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl space-y-8 shadow-xl">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 font-bold text-xs">
                Simple 3-Step Process
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                How {state.name} Auto Shipping Works
              </h2>
              <p className="text-sm text-slate-300 font-medium">
                Transparent, door-to-door vehicle transport from instant quote to delivery sign-off.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-slate-800/90 border border-slate-700/80 p-6 rounded-2xl space-y-3 relative">
                <div className="w-9 h-9 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-sm">
                  1
                </div>
                <h3 className="font-black text-lg text-white">Instant Quote &amp; Zero Deposit</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  Enter your pickup &amp; delivery ZIP codes. Lock in your rate with no upfront deposit or hidden dispatch fees.
                </p>
              </div>

              <div className="bg-slate-800/90 border border-slate-700/80 p-6 rounded-2xl space-y-3 relative">
                <div className="w-9 h-9 bg-purple-600 text-white rounded-xl flex items-center justify-center font-black text-sm">
                  2
                </div>
                <h3 className="font-black text-lg text-white">Pickup &amp; Bill of Lading (BOL)</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  Your assigned driver conducts a thorough walk-around inspection, logs existing dings on the BOL, and loads your vehicle.
                </p>
              </div>

              <div className="bg-slate-800/90 border border-slate-700/80 p-6 rounded-2xl space-y-3 relative">
                <div className="w-9 h-9 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-black text-sm">
                  3
                </div>
                <h3 className="font-black text-lg text-white">Safe Delivery &amp; Inspection Sign-Off</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  Inspect your car at delivery, verify condition against the initial BOL report, and complete payment directly with the driver.
                </p>
              </div>

            </div>
          </div>
        </AnimatedSection>

        {/* California Pre-Pickup Vehicle Preparation Checklist */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="bg-slate-50 border border-slate-200/90 p-8 rounded-3xl space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Pre-Pickup Vehicle Prep Checklist
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                4 Essential Steps Before Carrier Pickup
              </h2>
              <p className="text-xs md:text-sm text-slate-600 font-medium">
                Follow this simple prep checklist to ensure a smooth pickup and error-free inspection.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <AnimatedCard delay={0.1}>
                <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 h-full shadow-xs">
                  <div className="w-10 h-10 bg-amber-100 text-amber-800 rounded-xl flex items-center justify-center">
                    <Fuel className="w-5 h-5 text-amber-700" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">1. Keep 1/4 Tank of Fuel</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Maintains optimal truck axle weight limits while providing enough fuel for driver loading and unloading maneuvers.
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 h-full shadow-xs">
                  <div className="w-10 h-10 bg-blue-100 text-blue-800 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-blue-700" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">2. Clean Interior &amp; Exterior</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    A clean exterior allows clear photo inspection for the Bill of Lading. Remove personal belongings over 100 lbs.
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.3}>
                <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 h-full shadow-xs">
                  <div className="w-10 h-10 bg-purple-100 text-purple-800 rounded-xl flex items-center justify-center">
                    <Radio className="w-5 h-5 text-purple-700" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">3. Remove Toll Transponders</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Remove electronic toll tags (FasTrak) to prevent automatic toll gate scans while your car is riding on the trailer.
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.4}>
                <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 h-full shadow-xs">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-800 rounded-xl flex items-center justify-center">
                    <Camera className="w-5 h-5 text-emerald-700" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">4. Photo Document Condition</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Take timestamped photos and video of all 4 sides, including close-ups of existing scratches, prior to carrier arrival.
                  </p>
                </div>
              </AnimatedCard>

            </div>
          </div>
        </AnimatedSection>

        {/* California Seasonal Demand & Peak Savings Opportunities */}
        {isCalifornia && (
          <AnimatedSection direction="up" delay={0.1}>
            <div className="bg-white border border-slate-200/90 p-8 rounded-3xl space-y-6 shadow-sm">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <Calendar className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="text-2xl font-black text-slate-900">California Seasonal Shipping Guide &amp; Peak Rates</h3>
                  <p className="text-xs text-slate-500 font-medium">Timing your shipment around seasonal demand spikes can save 15–25% on long-haul transport.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="bg-amber-50/80 border border-amber-200/80 p-5 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 font-black text-amber-900 text-base">
                    <Sun className="w-5 h-5 text-amber-600" />
                    <span>Peak Summer Season (May – Sept)</span>
                  </div>
                  <p className="text-xs text-amber-800 leading-relaxed font-medium">
                    Highest relocation volume nationwide. Carrier capacity is tight on major I-5 and I-10 corridors. Book 1–2 weeks in advance for best date selection.
                  </p>
                </div>

                <div className="bg-blue-50/80 border border-blue-200/80 p-5 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 font-black text-blue-900 text-base">
                    <Snowflake className="w-5 h-5 text-blue-600" />
                    <span>Snowbird Season (Oct – Nov)</span>
                  </div>
                  <p className="text-xs text-blue-800 leading-relaxed font-medium">
                    Heavy outbound demand from California toward Florida, Arizona, and Texas. Rates spike on eastbound routes while westbound routes offer discounts.
                  </p>
                </div>

                <div className="bg-emerald-50/80 border border-emerald-200/80 p-5 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 font-black text-emerald-900 text-base">
                    <DollarSign className="w-5 h-5 text-emerald-600" />
                    <span>Best Value Window (Feb – April)</span>
                  </div>
                  <p className="text-xs text-emerald-800 leading-relaxed font-medium">
                    Late winter and early spring provide the lowest per-mile rates and highest carrier availability across all California metro hubs.
                  </p>
                </div>

              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Localized Customer Testimonials (CA, VA & generic states) */}
        {(state as any).localizedReviews && (
          <AnimatedSection direction="up" delay={0.1}>
            <div className="space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Star className="w-4 h-4 text-amber-600 fill-amber-500" />
                  Verified {state.name} Shipper Feedback
                </div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  What {state.name} Shippers Say About Us
                </h2>
                <p className="text-xs text-slate-600 font-medium">
                  Real reviews from verified vehicle owners shipping to and from {state.name}.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(state as any).localizedReviews.map((rev: any, idx: number) => (
                  <AnimatedCard key={idx} delay={idx * 0.1}>
                    <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl space-y-4 h-full flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-amber-400">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-amber-400" />
                            ))}
                          </div>
                          <span className="text-xs text-slate-400 font-semibold">{rev.date}</span>
                        </div>

                        <p className="text-xs text-slate-700 leading-relaxed font-medium italic">
                          &ldquo;{rev.comment}&rdquo;
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                        <span className="font-extrabold text-slate-900">{rev.author} ({rev.location})</span>
                        <span className="font-bold text-blue-600">{rev.route}</span>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Virginia Military & Auction Car Shipping Section */}
        {state.slug === "virginia" && (
          <AnimatedSection direction="up" delay={0.1}>
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  Virginia Staging Expertise
                </div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  Virginia Military PCS &amp; Auction Transport
                </h2>
                <p className="text-xs text-slate-600 font-medium">
                  Specialized logistics for military service members and high-volume vehicle auction buyers across Virginia.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Military PCS Card */}
                <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-4 shadow-xl">
                  <h3 className="text-2xl font-black text-white flex items-center gap-2">
                    🎖️ Military PCS Moves from Virginia Bases
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    Virginia hosts over 27 major military installations — more than any other state. We coordinate seamless PCS shipments with full military order integration, flexible 1–3 day pickup windows, and military discounts across:
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-xs font-semibold text-blue-200">
                    <li>• Naval Station Norfolk</li>
                    <li>• Joint Base Langley-Eustis</li>
                    <li>• MCB Quantico</li>
                    <li>• Fort Belvoir</li>
                    <li>• NAS Oceana</li>
                    <li>• The Pentagon (Arlington)</li>
                  </ul>
                </div>

                {/* Auction Shipping Card */}
                <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-4 shadow-xl">
                  <h3 className="text-2xl font-black text-white flex items-center gap-2">
                    🚗 Virginia Outbound Auction Shipping
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    As an East Coast auto auction hub, Virginia handles thousands of dealer and salvage trades weekly. We handle rapid pickup from all major sites with winch-equipped carriers for non-running units:
                  </p>
                  <ul className="space-y-2 text-xs font-semibold text-emerald-300">
                    <li>• <strong>Manheim Fredericksburg:</strong> Mid-Atlantic dealer auction hub</li>
                    <li>• <strong>Copart Manassas:</strong> Salvage &amp; insurance vehicle pickups</li>
                    <li>• <strong>IAA Manassas:</strong> Fleet &amp; salvage outbound transport</li>
                  </ul>
                </div>
              </div>

              {/* Virginia DMV Requirements Section */}
              <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl space-y-4">
                <h3 className="text-2xl font-black text-slate-900">
                  Moving to Virginia? Vehicle Registration &amp; Insurance Guidelines
                </h3>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  If you are shipping a car into Virginia, state law mandates registering your vehicle with the Virginia DMV within <strong>30 days</strong> of arrival.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-medium text-slate-700">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                    <strong className="text-slate-900 block font-bold">Proof of Insurance:</strong>
                    Minimum liability coverage of <strong>25/50/20</strong> is required before registration.
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                    <strong className="text-slate-900 block font-bold">Safety Inspection:</strong>
                    Virginia requires an annual safety inspection at certified stations.
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                    <strong className="text-slate-900 block font-bold">Emissions Testing:</strong>
                    Required for Northern Virginia counties (Arlington, Fairfax, Loudoun, Prince William).
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                    <strong className="text-slate-900 block font-bold">E-ZPass Transponder Tip:</strong>
                    Remove your E-ZPass from the windshield before shipping to avoid false toll charges.
                  </div>
                </div>
              </div>

              {/* Virginia Seasonal Pricing Table */}
              <div className="bg-white border border-slate-200 p-8 rounded-3xl space-y-4 shadow-xs">
                <h3 className="text-2xl font-black text-slate-900">
                  Virginia Car Shipping Seasonal Pricing Guide (2026)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs md:text-sm">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 font-bold text-slate-900">
                        <th className="p-3">Season</th>
                        <th className="p-3">Demand Level</th>
                        <th className="p-3">Price Impact</th>
                        <th className="p-3">Best For</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                      <tr>
                        <td className="p-3 font-bold">Jan–Feb</td>
                        <td className="p-3">Low</td>
                        <td className="p-3 text-emerald-700 font-extrabold">-10% to -15%</td>
                        <td className="p-3">Budget-conscious relocations</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold">Mar–May</td>
                        <td className="p-3">High (Snowbird Return)</td>
                        <td className="p-3 text-amber-700 font-extrabold">+10% to +20%</td>
                        <td className="p-3">Florida → Virginia moves</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold">Jun–Aug</td>
                        <td className="p-3">Very High (PCS, College)</td>
                        <td className="p-3 text-red-700 font-extrabold">+15% to +25%</td>
                        <td className="p-3">Military PCS &amp; student moves</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold">Sep–Nov</td>
                        <td className="p-3">Low–Moderate</td>
                        <td className="p-3 text-emerald-700 font-extrabold">-5% to -10%</td>
                        <td className="p-3">Best overall shipping rates</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold">Dec</td>
                        <td className="p-3">Moderate</td>
                        <td className="p-3 font-extrabold">Baseline</td>
                        <td className="p-3">Holiday relocations</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* California Overseas & Port Relocations Section */}
        {isCalifornia && (
          <AnimatedSection direction="up" delay={0.1}>
            <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <Anchor className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="text-2xl font-black text-white">California Overseas &amp; Port Shipping Hubs</h3>
                  <p className="text-xs text-slate-400 font-medium">Connecting California sea ports (LA, Long Beach, Oakland) to Hawaii, Alaska, and mainland logistics.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-medium text-slate-300">
                <div className="bg-slate-800 p-5 rounded-2xl space-y-2">
                  <div className="font-black text-white text-sm">Port of Los Angeles &amp; Long Beach</div>
                  <p className="text-slate-400 leading-relaxed">
                    Primary Pacific gateway for vehicle transport connecting Southern California to Hawaii (Honolulu/Kahului) and Guam.
                  </p>
                </div>

                <div className="bg-slate-800 p-5 rounded-2xl space-y-2">
                  <div className="font-black text-white text-sm">Port of Oakland</div>
                  <p className="text-slate-400 leading-relaxed">
                    Northern California maritime hub for containerized and Ro-Ro vehicle shipments to Alaska (Anchorage) and Asian trade routes.
                  </p>
                </div>

                <div className="bg-slate-800 p-5 rounded-2xl space-y-2">
                  <div className="font-black text-white text-sm">Mainland Staging &amp; Rail Terminals</div>
                  <p className="text-slate-400 leading-relaxed">
                    Seamless transfer from BNSF Hobart Yard (LA) and UP West Colton Yard directly to door-to-door carrier trucks.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Scam Avoidance Guide Section */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-950 text-blue-300 rounded-full text-xs font-extrabold uppercase tracking-widest mb-4 border border-blue-500/30">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                Consumer Scam Protection
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
                How Do I Not Get Scammed Shipping My Car in {state.name}?
              </h2>
              <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed mb-6">
                Car shipping scams are a real concern, and it&apos;s a smart question to ask before booking. Here&apos;s how to protect yourself:
              </p>

              <ul className="space-y-3 text-xs md:text-sm font-medium text-slate-200 mb-8">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Verify licensing directly:</strong> Every legitimate broker/carrier should have a real USDOT number and MC number you can <Link href="/licensing-insurance" className="text-blue-400 underline font-bold">verify yourself</Link>, not just a claim on their website.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Be wary of unusually low quotes:</strong> A price far below the typical range for your route is a common tactic to get a deposit, followed by a demand for more money once a carrier is en route.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Never pay a large upfront deposit:</strong> Zero or minimal upfront deposit, with payment due at pickup or delivery, is the industry standard for legitimate carriers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Check real, verifiable reviews:</strong> Look for reviews across multiple independent platforms (not just testimonials on the company&apos;s own site) — <Link href="/reviews" className="text-blue-400 underline font-bold">see our verified reviews</Link>.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Get a written, itemized quote:</strong> Confirm pickup/delivery windows, transport type, and total cost in writing before booking.</span>
                </li>
              </ul>

              {/* Direct Answer Callout for Scam Spotting */}
              <div className="bg-slate-800/90 border-l-4 border-emerald-500 p-4 rounded-r-xl text-slate-200 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                <span className="text-emerald-400 font-extrabold block text-xs uppercase tracking-wider mb-1">
                  🛡️ Direct Answer — How to Spot a Fake Shipping Company
                </span>
                <strong>A legitimate car shipping company will have a verifiable USDOT and MC number, won&apos;t demand a large upfront deposit, and will provide a written quote with clear pickup and delivery terms.</strong> Be cautious of companies that pressure same-day payment, refuse to provide licensing information, or quote a price significantly below the typical market range for your route.
              </div>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/resources/how-to-avoid-car-shipping-scams" 
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-5 py-3 rounded-xl text-xs md:text-sm transition-colors inline-flex items-center gap-2 shadow-md hover:shadow-lg"
                >
                  Read Full Scam Avoidance Guide →
                </Link>
                <Link 
                  href="/licensing-insurance" 
                  className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold px-5 py-3 rounded-xl text-xs md:text-sm transition-colors inline-flex items-center gap-2 shadow-md hover:shadow-lg"
                >
                  Verify Credentials on Licensing Page →
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
