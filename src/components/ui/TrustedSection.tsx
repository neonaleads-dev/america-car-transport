import React from "react";
import Link from "next/link";
import { HeartHandshake, ShieldCheck, UserCheck, FileBadge, PhoneCall } from "lucide-react";
import CountUp from "@/components/reactbits/CountUp";

const features = [
  { icon: HeartHandshake, title: "Customer-First Vehicle Shipping", body: "We listen to your demands, offering instant quotes that match your budget and convenience." },
  { icon: UserCheck, title: "Expert Nationwide Haulers", body: "Native, trained professionals ensuring your vehicle reaches its destination in record time." },
  { icon: ShieldCheck, title: "Secure & Enclosed Options", body: "High-tech enclosed haulers designed for luxury vehicles and high-priority shipments." },
  { icon: FileBadge, title: "Fully Licensed & Bonded", body: "A fully licensed freight and logistics firm running operations across the entire USA." },
];

export default function TrustedSection() {
  return (
    <section className="act-section bg-white overflow-hidden font-sans border-t border-navy-900/10">
      <div className="act-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <img
            src="/america-car-transport-trusted-auto-carrier-scenic-highway-650.webp"
              srcSet="/america-car-transport-trusted-auto-carrier-scenic-highway-650.webp 650w, /america-car-transport-trusted-auto-carrier-scenic-highway-1024.webp 1024w"
              sizes="(min-width: 1024px) 480px, 100vw"
            width={650}
            height={650}
            loading="lazy"
            decoding="async"
            alt="America Car Transport trusted auto carrier truck driving safely on a scenic coastal highway"
            title="America Car Transport - Safe and Reliable Vehicle Shipping Nationwide"
            className="w-full aspect-[4/5] object-cover rounded-t-lg"
          />
          <dl className="grid grid-cols-2 bg-navy-900 text-white rounded-b-lg">
            <div className="p-5 md:p-6 border-r border-white/15">
              <dt className="text-xs uppercase tracking-[0.12em] text-navy-200 mb-1">Licensed &amp; Bonded Broker</dt>
              <dd className="font-heading text-3xl font-bold">FMCSA</dd>
            </div>
            <div className="p-5 md:p-6">
              <dt className="text-xs uppercase tracking-[0.12em] text-navy-200 mb-1">Verified Reviews</dt>
              <dd className="font-heading text-3xl font-bold tabular">
                <span className="sr-only">1,000+</span>
                <span aria-hidden="true">
                  <CountUp from={800} to={1000} separator="," suffix="+" duration={1.6} />
                </span>
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7">
          <p className="act-eyebrow">America Car Transport</p>
          <h2 className="act-h2 mb-5">Why We Are the Most Trusted Auto Transport Company</h2>
          <p className="act-lead mb-10 max-w-2xl">
            It took us a decade to rule the industry and be known as a reliable and top-notch hub of auto transport services in the USA.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-navy-900/15 mb-10">
            {features.map(({ icon: Icon, title, body }, i) => (
              <div
                key={title}
                className={`py-6 border-b border-navy-900/15 ${i % 2 === 0 ? "md:pr-8 md:border-r" : "md:pl-8"}`}
              >
                <Icon className="w-6 h-6 text-signal mb-3" aria-hidden="true" />
                <h3 className="text-lg font-bold text-navy-900 mb-1.5">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/tools/car-shipping-cost-calculator" className="btn-primary flex-1 sm:flex-none">
              Get Instant Quote
            </Link>
            <a href="tel:5307255383" className="btn-secondary flex-1 sm:flex-none">
              <PhoneCall className="w-5 h-5" aria-hidden="true" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
