"use client";

import { motion } from "framer-motion";
import { Search, FileCheck, Truck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Compare Carriers",
    description: "Enter your route and vehicle details to instantly receive quotes from our network of verified auto transporters.",
  },
  {
    icon: FileCheck,
    title: "Book a Transporter",
    description: "Review carrier profiles, read customer feedback, and book the option that best fits your schedule and budget.",
  },
  {
    icon: Truck,
    title: "Track & Receive",
    description: "Stay updated on your vehicle's journey with direct carrier communication until it safely arrives at its destination.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-paper">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-navy mb-4">How Auto Transport Works</h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Shipping your car across the country doesn&apos;t have to be complicated. Our platform makes it simple to find and book reliable carriers in three easy steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-navy/10 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center bg-white p-8 rounded-md shadow-sm border border-navy/5 relative"
            >
              <div className="w-24 h-24 bg-paper rounded-full flex items-center justify-center mb-6 shadow-inner border border-navy/5 relative group">
                <div className="absolute inset-0 bg-red rounded-full opacity-0 group-hover:opacity-10 transition-opacity" />
                <step.icon className="w-10 h-10 text-navy" />
              </div>
              <h3 className="text-xl font-bold font-heading text-navy mb-3">{step.title}</h3>
              <p className="text-charcoal/80 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
