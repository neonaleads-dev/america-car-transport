import React from "react";
import Link from "next/link";
import { HeartHandshake, ShieldCheck, UserCheck, FileBadge, PhoneCall } from "lucide-react";

export default function TrustedSection() {
  return (
    <section className="features-section py-24 px-4 md:px-8 lg:px-24 bg-white overflow-hidden font-sans border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24 items-center">
        
        {/* Left Column: Image & Floating Badges */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50">
            <img 
              src="/america-car-transport-trusted-auto-carrier-scenic-highway.png" 
              alt="America Car Transport trusted auto carrier truck driving safely on a scenic coastal highway" 
              title="America Car Transport - Safe and Reliable Vehicle Shipping Nationwide"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top Left Badge: FMCSA Licensed & Bonded */}
          <div className="feature-card absolute top-4 left-4 md:top-8 md:-left-12 bg-blue-600 text-white rounded-3xl p-6 md:p-8 shadow-2xl shadow-blue-600/30 flex flex-col items-center justify-center transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <span className="text-2xl md:text-3xl font-black tracking-tight mb-1">FMCSA</span>
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-blue-100 text-center">
              Licensed &amp;<br/>Bonded Broker
            </span>
          </div>

          {/* Bottom Right Badge: 10,450+ Verified Reviews */}
          <div className="feature-card absolute bottom-4 right-4 md:bottom-8 md:-right-12 bg-white rounded-2xl p-6 shadow-2xl shadow-slate-200 flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300 border border-slate-50">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <UserCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="stat-number text-2xl md:text-3xl font-black text-slate-900 tracking-tight">10,450+</div>
              <div className="text-sm md:text-base font-medium text-slate-500">Verified Reviews</div>
            </div>
          </div>
        </div>

        {/* Right Column: SEO Content & Grid */}
        <div className="flex flex-col">
          <div className="mb-10">
            <div className="text-blue-600 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
              America Car Transport
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Why We Are the Most <span className="text-blue-600">Trusted Auto Transport</span> Company
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              It took us a decade to rule the industry and be known as a reliable and top-notch hub of auto transport services in the USA.
            </p>
          </div>

          {/* 4 Grid Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mb-12">
            
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full border-2 border-blue-100 flex items-center justify-center text-blue-600">
                  <HeartHandshake className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Customer-First Vehicle Shipping</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                  We listen to your demands, offering instant quotes that match your budget and convenience.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full border-2 border-blue-100 flex items-center justify-center text-blue-600">
                  <UserCheck className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Nationwide Haulers</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                  Native, trained professionals ensuring your vehicle reaches its destination in record time.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full border-2 border-blue-100 flex items-center justify-center text-blue-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Secure & Enclosed Options</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                  High-tech enclosed haulers designed for luxury vehicles and high-priority shipments.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full border-2 border-blue-100 flex items-center justify-center text-blue-600">
                  <FileBadge className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Fully Licensed & Bonded</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                  A fully licensed freight and logistics firm running operations across the entire USA.
                </p>
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/tools/car-shipping-cost-calculator" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-600/20 transition-all flex-1 md:flex-none text-center">
              Get Instant Quote
            </Link>
            <a href="tel:5307255383" className="bg-white hover:bg-slate-50 text-slate-900 font-bold py-4 px-8 rounded-xl border-2 border-slate-200 transition-all flex items-center justify-center gap-3 flex-1 md:flex-none">
              <PhoneCall className="w-5 h-5 text-blue-600" />
              Call Now
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
