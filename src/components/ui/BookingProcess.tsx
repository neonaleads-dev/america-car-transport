import React from "react";
import Image from "next/image";
import { Layers } from "lucide-react";

export default function BookingProcess() {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-24 bg-white border-t border-slate-100 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24 items-center">
        
        {/* Left Column: The 3 Steps */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-blue-600">
              <Layers className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Simple 3-Step Vehicle Booking Process
            </h2>
          </div>
          
          <p className="text-lg text-slate-600 leading-relaxed font-medium mb-12">
            America&apos;s leading bonded & insured auto transport network. Follow our straightforward process to ship your vehicle safely nationwide with zero hassle.
          </p>

          <div className="space-y-10">
            {/* Step 1 */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight flex items-baseline gap-2">
                <span className="text-blue-600">1.</span> Request Your Instant Quote
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Enter your pickup and destination details to get a customized, transparent instant quote with no upfront deposit required.
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight flex items-baseline gap-2">
                <span className="text-blue-600">2.</span> Choose Options & Confirm Booking
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Select your preferred transport type (Open or Enclosed) and schedule your pickup date with instant order confirmation.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight flex items-baseline gap-2">
                <span className="text-blue-600">3.</span> Safe Door-to-Door Delivery & Final Inspection
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Relax while our vetted, insured carrier picks up your vehicle and safely delivers it directly to your destination address.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border-4 border-white transform hover:scale-[1.02] transition-transform duration-500">
            {/* Using standard img tag since next/image sometimes requires domain configuration for external urls, but here we use a local public file. */}
            <img 
              src="/america-car-transport-booking-process-auto-carrier.png" 
              alt="America Car Transport modern auto carrier truck transporting multiple vehicles safely" 
              title="America Car Transport - Easy 3 Step Booking Process for Auto Shipping"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Decorative accents */}
          <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -z-10 -top-8 -left-8 w-48 h-48 bg-slate-50 rounded-full blur-2xl opacity-60"></div>
        </div>

      </div>
    </section>
  );
}
