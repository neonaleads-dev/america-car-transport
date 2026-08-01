import React from "react";
import { StateData } from "@/types/location";
import { HelpCircle, ChevronDown } from "lucide-react";

interface StateFAQProps {
  state: StateData;
}

export default function StateFAQ({ state }: StateFAQProps) {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200 font-sans">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            {state.name} Auto Transport FAQs
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-medium mt-2">
            Answers to common questions about shipping a vehicle to or from {state.name}.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {state.faqs.map((faq, idx) => (
            <details 
              key={idx} 
              className="bg-white rounded-2xl border border-slate-200 p-5 group shadow-sm [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between font-extrabold text-slate-900 text-base cursor-pointer">
                <span>{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-2" />
              </summary>
              <p className="text-sm text-slate-600 leading-relaxed font-medium mt-3 pt-3 border-t border-slate-100">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
