import React from "react";
import Link from "next/link";
import { Mail, Phone, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 font-sans border-t border-slate-800">
      
      {/* Main Footer Internal Linking Backbone */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-24 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Column 1: Brand & Contact */}
        <div className="flex flex-col gap-6">
          <Link href="/" title="America Car Transport Homepage" className="flex items-center gap-2">
            <img 
              src="/america-car-transport-logo-white.png" 
              alt="America Car Transport - Nationwide Auto Transport Company Logo" 
              title="America Car Transport Official Footer Logo"
              width={140}
              height={78}
              loading="lazy"
              className="h-[60px] md:h-[78px] w-auto object-contain drop-shadow-md"
            />
          </Link>
          <p className="text-sm leading-relaxed font-medium text-slate-400 pr-2">
            America&apos;s leading bonded &amp; insured auto transport broker network. We provide nationwide door-to-door vehicle shipping with zero upfront deposits.
          </p>
          <div className="space-y-2 text-xs font-semibold text-slate-400">
            <div className="flex items-center gap-2 text-white">
              <Phone className="w-4 h-4 text-blue-400" />
              <a href="tel:5307255383" className="font-bold text-base hover:text-blue-400 transition-colors">(530) 725-5383</a>
            </div>
          </div>
        </div>

        {/* Column 2: Popular States (Local SEO Hub) */}
        <div>
          <h3 className="text-white font-bold text-base mb-5 tracking-wide">Popular Shipping States</h3>
          <ul className="space-y-2.5 text-xs md:text-sm">
            <li><Link href="/locations/california" className="hover:text-blue-400 transition-colors font-medium">California Auto Transport</Link></li>
            <li><Link href="/locations/florida" className="hover:text-blue-400 transition-colors font-medium">Florida Car Shipping</Link></li>
            <li><Link href="/locations/texas" className="hover:text-blue-400 transition-colors font-medium">Texas Vehicle Transport</Link></li>
            <li><Link href="/locations/new-york" className="hover:text-blue-400 transition-colors font-medium">New York Car Transport</Link></li>
            <li><Link href="/locations/washington" className="hover:text-blue-400 transition-colors font-medium">Washington Auto Carriers</Link></li>
            <li><Link href="/locations/illinois" className="hover:text-blue-400 transition-colors font-medium">Illinois Vehicle Logistics</Link></li>
            <li><Link href="/locations/pennsylvania" className="hover:text-blue-400 transition-colors font-medium">Pennsylvania Car Shipping</Link></li>
            <li><Link href="/locations/georgia" className="hover:text-blue-400 transition-colors font-medium">Georgia Auto Routes</Link></li>
          </ul>
        </div>

        {/* Column 3: Ship by Vehicle Type */}
        <div>
          <h3 className="text-white font-bold text-base mb-5 tracking-wide">Ship by Vehicle Type</h3>
          <ul className="space-y-2.5 text-xs md:text-sm">
            <li><Link href="/services" className="hover:text-blue-400 transition-colors font-medium">Classic &amp; Antique Cars</Link></li>
            <li><Link href="/services" className="hover:text-blue-400 transition-colors font-medium">SUVs, Trucks &amp; Duallys</Link></li>
            <li><Link href="/services" className="hover:text-blue-400 transition-colors font-medium">Electric Vehicles (EVs)</Link></li>
            <li><Link href="/services" className="hover:text-blue-400 transition-colors font-medium">Motorcycles &amp; Powersports</Link></li>
            <li><Link href="/services" className="hover:text-blue-400 transition-colors font-medium">Exotic &amp; Luxury Sports Cars</Link></li>
            <li><Link href="/#b2b" className="hover:text-blue-400 transition-colors font-medium">Commercial Dealer Fleets</Link></li>
            <li><Link href="/#b2b" className="hover:text-blue-400 transition-colors font-medium">Copart &amp; Manheim Auctions</Link></li>
          </ul>
        </div>

        {/* Column 4: Company & EEAT Licensing */}
        <div>
          <h3 className="text-white font-bold text-base mb-5 tracking-wide">Company &amp; Resources</h3>
          <ul className="space-y-2.5 text-xs md:text-sm">
            <li><Link href="/about" className="hover:text-blue-400 transition-colors font-medium">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400 transition-colors font-medium">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:text-blue-400 transition-colors font-bold text-blue-400">Central FAQ Hub</Link></li>
            <li><Link href="/licensing-insurance" className="hover:text-blue-400 transition-colors font-medium">FMCSA &amp; USDOT Licensing</Link></li>
            <li><Link href="/reviews" className="hover:text-blue-400 transition-colors font-medium">Verified Customer Reviews</Link></li>
            <li><Link href="/resources/how-to-avoid-car-shipping-scams" className="hover:text-blue-400 transition-colors font-medium">Scam Avoidance Guide</Link></li>
            <li><Link href="/es/transporte-de-autos-estados-unidos" className="hover:text-blue-400 transition-colors font-medium">Transporte de Autos en EE.UU. (Español)</Link></li>
            <li><Link href="/tools/car-shipping-cost-calculator" className="hover:text-blue-400 transition-colors font-medium">Car Shipping Cost Calculator</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-blue-400 transition-colors font-medium">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-blue-400 transition-colors font-medium">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar: Copyright & EEAT Credentials */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-24 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p className="text-sm font-medium text-slate-400">
              &copy; {new Date().getFullYear()} America Car Transport. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
            <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
