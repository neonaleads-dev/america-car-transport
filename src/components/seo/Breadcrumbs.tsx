import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Generate JSON-LD Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.americacartransport.com/"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `https://www.americacartransport.com${item.url}`
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav aria-label="Breadcrumb" className="bg-slate-900 border-b border-slate-800 py-3 px-4 md:px-8 lg:px-24">
        <div className="max-w-[1400px] mx-auto flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-400 overflow-x-auto whitespace-nowrap hide-scrollbar">
          <Link href="/" className="hover:text-blue-400 transition-colors flex items-center gap-1.5" aria-label="Home">
            <Home className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={item.url}>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                {isLast ? (
                  <span className="text-white font-bold" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.url} className="hover:text-blue-400 transition-colors">
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </nav>
    </>
  );
}
