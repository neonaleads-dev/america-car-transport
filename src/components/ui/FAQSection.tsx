"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How much does it cost to transport a car?",
    answer: "The cost to transport a car depends on several factors including the distance, vehicle size, transport type (open vs. enclosed), and the time of year. On average, shipping a car within the continental US ranges from $500 to $1,500. Use our instant quote calculator above for a precise, real-time estimate."
  },
  {
    question: "How long does auto transport take?",
    answer: "Transit times vary by distance. A trip of 100-500 miles typically takes 1-2 days, while coast-to-coast shipping (e.g., California to New York) usually takes 7-10 days. Expedited shipping options are available if you need your vehicle delivered on a stricter timeline."
  },
  {
    question: "Is my vehicle insured during transport?",
    answer: "Yes, absolutely. Every carrier in the AmericaCarTransport network is fully vetted and carries comprehensive cargo insurance. Your vehicle is fully protected from the moment it is loaded onto the truck until it is safely delivered to your destination, with a $0 deductible for you."
  },
  {
    question: "Can I put personal items in my car during transport?",
    answer: "You are allowed to keep up to 100 lbs of personal items secured in the trunk or cargo area of your vehicle. However, these items must be placed in a box or suitcase and cannot include hazardous materials, firearms, or illegal substances. Please note that personal items are not covered by the carrier's cargo insurance."
  },
  {
    question: "How far in advance should I book my auto transport?",
    answer: "We recommend booking your auto transport at least 1-2 weeks in advance. This gives us ample time to secure the best possible carrier and rate for your specific route. However, if you are in a rush, we do offer expedited and last-minute booking options."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-[#f8fafc] border-t border-slate-100 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[1000px] mx-auto px-4 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-blue-600 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            Got Questions?
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Everything you need to know about shipping your vehicle with AmericaCarTransport.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-blue-600 shadow-lg shadow-blue-900/5' : 'border-slate-200 hover:border-blue-300'}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex justify-between items-center focus:outline-none"
                >
                  <span className={`text-lg md:text-xl font-bold pr-8 transition-colors duration-300 ${isOpen ? 'text-blue-600' : 'text-slate-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                <div 
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 md:px-8 md:pb-8 text-slate-600 font-medium leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
