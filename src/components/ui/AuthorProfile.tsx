import React from "react";
import { ShieldCheck, CheckCircle2, Calendar, FileText } from "lucide-react";

interface AuthorProfileProps {
  authorName?: string;
  authorRole?: string;
  reviewerName?: string;
  reviewerRole?: string;
  lastUpdated?: string;
}

export default function AuthorProfile({
  authorName = "America Car Transport Dispatch Team",
  authorRole = "Licensed Logistics Operations Specialists",
  reviewerName = "FMCSA Compliance Board",
  reviewerRole = "Senior Auto Transport Auditor",
  lastUpdated = "August 2026",
}: AuthorProfileProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm mb-8 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-4">
        {/* Author Bio */}
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-full bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-sm">
            ACT
          </div>
          <div>
            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Written By</div>
            <div className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
              {authorName}
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
            </div>
            <div className="text-xs text-slate-600 font-medium">{authorRole}</div>
          </div>
        </div>

        {/* Editorial Review Badge */}
        <div className="flex items-center gap-3 bg-slate-50 border border-slate-200/80 px-3.5 py-2 rounded-xl">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <div>
            <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Fact-Checked &amp; Reviewed</div>
            <div className="text-xs font-bold text-slate-800">{reviewerName} · <span className="text-slate-600 font-normal">{reviewerRole}</span></div>
          </div>
        </div>
      </div>

      {/* Trust & Methodology Note */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 font-medium">
        <div className="flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span>Last Updated: <strong className="text-slate-700">{lastUpdated}</strong></span>
        </div>
        <div className="flex items-center gap-2">
          <FileText className="w-3.5 h-3.5 text-slate-400" />
          <span>Data Source: <strong className="text-slate-700">Real 2026 Market Dispatch Records &amp; FMCSA Regulations</strong></span>
        </div>
      </div>
    </div>
  );
}
