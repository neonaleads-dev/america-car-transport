"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const isSpanish = pathname.startsWith("/es");

  // Determine equivalent route for switching
  let targetPath = "/";
  if (isSpanish) {
    // Switch to English
    if (pathname === "/es") targetPath = "/";
    else if (pathname.startsWith("/es/calculadora")) targetPath = "/tools/car-shipping-cost-calculator";
    else if (pathname.startsWith("/es/servicios")) targetPath = "/services";
    else targetPath = "/";
  } else {
    // Switch to Spanish
    if (pathname === "/") targetPath = "/es";
    else if (pathname.includes("/car-shipping-cost-calculator")) targetPath = "/es/calculadora";
    else if (pathname.includes("/services")) targetPath = "/es/servicios";
    else targetPath = "/es";
  }

  return (
    <div className="inline-flex items-center bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200 dark:border-slate-700/80 text-xs font-bold shadow-sm">
      <div className="flex items-center gap-1 px-2 text-slate-500">
        <Globe className="w-3.5 h-3.5 text-blue-600" />
      </div>
      
      <Link
        href={isSpanish ? targetPath : pathname}
        className={`px-2.5 py-1 rounded-lg transition-all ${
          !isSpanish
            ? "bg-white dark:bg-slate-900 text-blue-700 font-black shadow-sm"
            : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        }`}
        title="English Version"
      >
        🇺🇸 EN
      </Link>

      <Link
        href={isSpanish ? pathname : targetPath}
        className={`px-2.5 py-1 rounded-lg transition-all ${
          isSpanish
            ? "bg-blue-600 text-white font-black shadow-sm"
            : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        }`}
        title="Versión en Español"
      >
        🇲🇽 ES
      </Link>
    </div>
  );
}
