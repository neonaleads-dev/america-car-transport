import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function CalculatorSEOContent() {
  return (
    <div className="bg-white py-16 px-4 md:px-8 lg:px-24">
      <div className="max-w-[1000px] mx-auto text-slate-800 space-y-16">
        
        {/* Section 1: Base Costs */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">How Much Does It Cost to Ship a Car?</h2>
          <p className="text-base md:text-lg leading-relaxed font-medium text-slate-700 mb-8">
            On average, shipping a car across the U.S. costs between $600 and $1,500, depending mainly on distance, vehicle type, and transport method. Short-distance moves (under 500 miles) typically run $400–$700, medium-distance routes (500–1,500 miles) average $700–$1,100, and long-distance or coast-to-coast shipments (1,500+ miles) generally cost $1,000–$1,800.
          </p>
          
          <div className="overflow-x-auto shadow-sm rounded-xl border border-slate-200 mb-6">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">Distance</th>
                  <th className="px-6 py-4">Open Transport</th>
                  <th className="px-6 py-4">Enclosed Transport</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700 bg-white">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">Short (under 500 mi)</td>
                  <td className="px-6 py-4">$400 – $700</td>
                  <td className="px-6 py-4">$650 – $950</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">Medium (500–1,500 mi)</td>
                  <td className="px-6 py-4">$700 – $1,100</td>
                  <td className="px-6 py-4">$1,000 – $1,500</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">Long (1,500+ mi)</td>
                  <td className="px-6 py-4">$1,000 – $1,800</td>
                  <td className="px-6 py-4">$1,500 – $2,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 italic">
            These are typical market ranges — your exact rate depends on the specific factors below. Use the calculator above for a quote tailored to your vehicle and route.
          </p>
        </section>

        {/* Section 2: Factors */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">What Affects Your Car Shipping Cost</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" /> Distance & Route
              </h3>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                Longer routes cost more in total but less per mile. A 200-mile trip might cost $1.50–$2.50 per mile, while a 2,500-mile cross-country move often drops to $0.50–$0.80 per mile. Popular corridors with heavy carrier traffic (like California–Texas or Florida–New York) tend to price lower than remote or less-traveled routes.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" /> Vehicle Size & Weight
              </h3>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                Larger, heavier vehicles take up more space on a carrier and cost more to move. A standard sedan sits at the low end of pricing; SUVs and trucks run 10–20% higher; oversized vehicles (vans, dually trucks, RVs) can add 25% or more.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" /> Vehicle Condition
              </h3>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                Running vehicles are the cheapest to ship since they load and unload under their own power. Non-running vehicles require a winch and extra labor, typically adding $100–$200 to the base rate.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" /> Transport Type
              </h3>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                Open transport is the standard, most affordable option — used for roughly 90% of shipments. Enclosed transport, which fully shields the vehicle from weather and road debris, typically costs 40–60% more but is the standard choice for luxury, classic, and exotic vehicles.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" /> Season & Demand
              </h3>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                Prices fluctuate with seasonal demand. Snowbird season (Oct–Nov and Mar–Apr, as retirees relocate between the Northeast/Midwest and Florida/Arizona) and peak summer moving months see higher rates due to carrier demand. Shipping in off-peak months can save 10–15%.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" /> Pickup & Delivery Type
              </h3>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                Door-to-door service (the carrier picks up and delivers directly to your addresses) is the most convenient and most common option, included in most quotes at no extra cost. Terminal-to-terminal service, where you drop off and collect from a depot, can save a small amount but adds logistics on your end.
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 md:col-span-2">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" /> Insurance & Fees
              </h3>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                All shipments through our network include cargo insurance in the base quote — no separate line-item cost to you. Some competitors add pickup fees or fuel surcharges after the fact; our instant quotes are all-inclusive with no hidden charges.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Cost by Vehicle Type */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Shipping Cost by Vehicle Type</h2>
          
          <div className="overflow-x-auto shadow-sm rounded-xl border border-slate-200 mb-6">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">Vehicle Type</th>
                  <th className="px-6 py-4">Typical Additional Cost</th>
                  <th className="px-6 py-4">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700 bg-white">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold">Sedan</td>
                  <td className="px-6 py-4">Baseline</td>
                  <td className="px-6 py-4">Fastest to load, lowest cost</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold">SUV / Minivan</td>
                  <td className="px-6 py-4 text-blue-600">+10–15%</td>
                  <td className="px-6 py-4">Slightly more space required</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold">Pickup Truck</td>
                  <td className="px-6 py-4 text-blue-600">+15–20%</td>
                  <td className="px-6 py-4">Higher for full-size/dually</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold">Motorcycle</td>
                  <td className="px-6 py-4 text-green-600">−30–40% (lower base)</td>
                  <td className="px-6 py-4">Often shipped via crate or dedicated carrier</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold">Non-Running Vehicle</td>
                  <td className="px-6 py-4 text-blue-600">+$100–$200 flat</td>
                  <td className="px-6 py-4">Requires winch equipment</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold">Classic / Exotic / Luxury</td>
                  <td className="px-6 py-4 text-blue-600">+40–60%</td>
                  <td className="px-6 py-4">Enclosed transport strongly recommended</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold">Oversized (RV, Boat, Van)</td>
                  <td className="px-6 py-4 text-blue-600">+25% or more</td>
                  <td className="px-6 py-4">May require specialized carrier</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-base leading-relaxed text-slate-700">
            Have a specific vehicle in mind? Our <Link href="/ship-a-car/motorcycle" className="text-blue-600 hover:underline font-bold">Motorcycle Shipping</Link>, <Link href="/ship-a-car/suv-and-truck" className="text-blue-600 hover:underline font-bold">SUV & Truck Shipping</Link>, <Link href="/ship-a-car/non-running" className="text-blue-600 hover:underline font-bold">Non-Running Vehicle Transport</Link>, and <Link href="/services/classic-and-exotic-car-transport" className="text-blue-600 hover:underline font-bold">Classic & Exotic Car Transport</Link> pages break down pricing and process in more detail.
          </p>
        </section>

        {/* Section 4: Open vs Enclosed */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Open vs. Enclosed Transport: Cost Comparison</h2>
          
          <div className="overflow-x-auto shadow-sm rounded-xl border border-slate-200 mb-6">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4"></th>
                  <th className="px-6 py-4">Open Transport</th>
                  <th className="px-6 py-4">Enclosed Transport</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700 bg-white">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold bg-slate-50">Typical Cost</td>
                  <td className="px-6 py-4">Baseline</td>
                  <td className="px-6 py-4 text-blue-600">+40–60%</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold bg-slate-50">Protection</td>
                  <td className="px-6 py-4">Exposed to weather/road debris</td>
                  <td className="px-6 py-4">Fully enclosed, weatherproof</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold bg-slate-50">Best For</td>
                  <td className="px-6 py-4">Everyday vehicles, budget-conscious moves</td>
                  <td className="px-6 py-4">Classic, luxury, exotic, or high-value vehicles</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold bg-slate-50">Usage</td>
                  <td className="px-6 py-4">~90% of all shipments</td>
                  <td className="px-6 py-4">~10% of shipments</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-base leading-relaxed text-slate-700">
            Most vehicle owners choose open transport — it&apos;s safe, standard across the industry, and the same method used to move cars to dealerships nationwide. Enclosed transport is worth the premium when a vehicle&apos;s value or rarity makes weather and debris exposure a real risk. See our full <Link href="/services/open-auto-transport" className="text-blue-600 hover:underline font-bold">Open Auto Transport</Link> and <Link href="/services/enclosed-auto-transport" className="text-blue-600 hover:underline font-bold">Enclosed Auto Transport</Link> pages for details.
          </p>
        </section>

        {/* Section 5: Transit Times */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">How Long Does Car Shipping Take?</h2>
          
          <div className="overflow-x-auto shadow-sm rounded-xl border border-slate-200 mb-6">
            <table className="w-full text-left text-sm md:text-base max-w-2xl">
              <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">Distance</th>
                  <th className="px-6 py-4">Standard Transit Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700 bg-white">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">Under 200 miles</td>
                  <td className="px-6 py-4 font-bold text-blue-600">Same day – 1 day</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">200–500 miles</td>
                  <td className="px-6 py-4 font-bold text-blue-600">1–2 days</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">500–1,500 miles</td>
                  <td className="px-6 py-4 font-bold text-blue-600">2–4 days</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">1,500–2,500 miles</td>
                  <td className="px-6 py-4 font-bold text-blue-600">4–7 days</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">Coast-to-coast (2,500+ mi)</td>
                  <td className="px-6 py-4 font-bold text-blue-600">7–10 days</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-base leading-relaxed text-slate-700">
            Need it faster? Our <Link href="/services/expedited-auto-transport" className="text-blue-600 hover:underline font-bold">Expedited Auto Transport</Link> service offers priority dispatch and shortened transit windows for time-sensitive moves, typically at a 15–25% premium over standard rates.
          </p>
        </section>

        

      </div>
    </div>
  );
}
