"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ChevronDown, DollarSign, MapPin, Truck, ShieldCheck, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";
import AnimatedSection, { AnimatedCard } from "@/components/ui/AnimatedSection";

interface FAQItem {
  q: string;
  a: string;
  linkText?: string;
  linkHref?: string;
}

interface FAQCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  faqs: FAQItem[];
}

const ICON_MAP: Record<string, React.ReactNode> = {
  DollarSign: <DollarSign className="w-5 h-5 text-emerald-600" />,
  MapPin: <MapPin className="w-5 h-5 text-blue-600" />,
  Truck: <Truck className="w-5 h-5 text-purple-600" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-amber-600" />,
  BookOpen: <BookOpen className="w-5 h-5 text-cyan-600" />,
};

export default function FAQHubClient({ categories }: { categories: FAQCategory[] }) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter FAQs based on active category tab and search query
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return categories.map((cat) => {
      const isTabMatch = activeTab === "all" || activeTab === cat.id;

      if (!isTabMatch) {
        return { ...cat, faqs: [] };
      }

      if (!query) {
        return cat;
      }

      const matchingFaqs = cat.faqs.filter(
        (faq) =>
          faq.q.toLowerCase().includes(query) ||
          faq.a.toLowerCase().includes(query)
      );

      return { ...cat, faqs: matchingFaqs };
    }).filter((cat) => cat.faqs.length > 0);
  }, [categories, activeTab, searchQuery]);

  const totalResults = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.faqs.length, 0);
  }, [filteredCategories]);

  return (
    <section className="py-16 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 space-y-12">
        
        {/* Search & Filter Controls Bar */}
        <AnimatedSection direction="up">
          <div className="bg-slate-50 border border-slate-200/90 p-6 rounded-3xl shadow-sm space-y-6">
            
            {/* Search Input */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search FAQs by keyword (e.g. California, IRS, 2,000 miles, Navy, insurance)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 px-2 py-1 rounded-lg"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
                  activeTab === "all"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                All Categories
              </button>

              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all flex items-center gap-2 ${
                    activeTab === cat.id
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {searchQuery && (
              <div className="text-center text-xs font-bold text-slate-500">
                Found {totalResults} FAQ result{totalResults === 1 ? "" : "s"} for &ldquo;{searchQuery}&rdquo;
              </div>
            )}

          </div>
        </AnimatedSection>

        {/* Categorized FAQs Rendering */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">No matching questions found</h3>
            <p className="text-sm text-slate-600 font-medium mb-6">
              Try searching for different terms or reset your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveTab("all");
              }}
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredCategories.map((cat) => (
            <div key={cat.id} className="space-y-6 pt-4">
              
              <AnimatedSection direction="up">
                <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                  <div className="p-2.5 bg-slate-100 rounded-xl">
                    {ICON_MAP[cat.icon] || <BookOpen className="w-5 h-5 text-blue-600" />}
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                      {cat.title}
                    </h2>
                    <p className="text-xs md:text-sm text-slate-500 font-medium">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <div className="space-y-4">
                {cat.faqs.map((faq, idx) => (
                  <AnimatedCard key={idx} delay={idx * 0.05}>
                    <details className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/90 p-5 group transition-all shadow-xs hover:shadow-md [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex items-center justify-between font-extrabold text-slate-900 text-base md:text-lg cursor-pointer">
                        <span>{faq.q}</span>
                        <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-2" />
                      </summary>
                      
                      <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-4">
                        <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
                          {faq.a}
                        </p>

                        {faq.linkHref && faq.linkText && (
                          <div>
                            <Link 
                              href={faq.linkHref}
                              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-800 transition-colors"
                            >
                              <span>{faq.linkText}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </details>
                  </AnimatedCard>
                ))}
              </div>

            </div>
          ))
        )}

      </div>
    </section>
  );
}
