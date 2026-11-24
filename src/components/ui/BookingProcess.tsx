import React from "react";

const steps = [
  {
    title: "Request Your Instant Quote",
    body: "Enter your pickup and destination details to get a customized, transparent instant quote with no upfront deposit required.",
  },
  {
    title: "Choose Options & Confirm Booking",
    body: "Select your preferred transport type (Open or Enclosed) and schedule your pickup date with instant order confirmation.",
  },
  {
    title: "Safe Door-to-Door Delivery & Final Inspection",
    body: "Relax while our vetted, insured carrier picks up your vehicle and safely delivers it directly to your destination address.",
  },
];

export default function BookingProcess() {
  return (
    <section className="act-section bg-white border-t border-navy-900/10 font-sans">
      <div className="act-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-7">
          <p className="act-eyebrow">How It Works</p>
          <h2 className="act-h2 mb-5">Simple 3-Step Vehicle Booking Process</h2>
          <p className="act-lead mb-10 max-w-2xl">
            America&apos;s leading bonded &amp; insured auto transport network. Follow our straightforward process to ship your vehicle safely nationwide with zero hassle.
          </p>

          <ol className="border-t border-navy-900/15">
            {steps.map((step, i) => (
              <li key={step.title} className="grid grid-cols-[3.5rem_1fr] md:grid-cols-[5rem_1fr] gap-4 py-7 border-b border-navy-900/15">
                <span
                  aria-hidden="true"
                  className="font-heading text-4xl md:text-5xl font-bold leading-none text-navy-400 tabular"
                 
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-2">
                    <span className="sr-only">{i + 1}. </span>
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <figure className="relative">
            <img
              src="/america-car-transport-booking-process-auto-carrier-650.webp"
              srcSet="/america-car-transport-booking-process-auto-carrier-650.webp 650w, /america-car-transport-booking-process-auto-carrier-1024.webp 1024w"
              sizes="(min-width: 1024px) 480px, 100vw"
              width={650}
              height={650}
              loading="lazy"
              decoding="async"
              alt="America Car Transport modern auto carrier truck transporting multiple vehicles safely"
              title="America Car Transport - Easy 3 Step Booking Process for Auto Shipping"
              className="w-full aspect-[4/5] object-cover rounded-lg"
            />
            <figcaption className="absolute left-4 right-4 bottom-4 bg-white/95 rounded-md px-4 py-3 text-sm text-slate-700 border border-navy-900/10">
              <span className="font-semibold text-navy-900">No upfront deposit.</span> Every shipment is handled by a licensed, insured carrier.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
