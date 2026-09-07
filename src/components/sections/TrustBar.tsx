import Link from "next/link";
import { ShieldCheck, Star, ThumbsUp } from "lucide-react";

export function TrustBar() {
  return (
    <section className="bg-slate-900 py-12 border-t border-b border-slate-800 text-white font-sans">
      <div className="max-w-[1400px] mx-auto px-4 grid md:grid-cols-4 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
        
        <Link href="/licensing-insurance" className="flex items-center gap-4 md:px-6 hover:text-blue-400 transition-colors">
          <ShieldCheck className="w-10 h-10 text-emerald-400 shrink-0" />
          <div>
            <h4 className="font-bold text-base">FMCSA Verified</h4>
            <p className="text-xs text-slate-400">Fully Licensed &amp; Bonded</p>
          </div>
        </Link>

        <Link href="/reviews" className="flex items-center gap-4 md:px-6 py-4 md:py-0 hover:text-blue-400 transition-colors">
          <Star className="w-10 h-10 text-amber-400 fill-amber-400 shrink-0" />
          <div>
            <h4 className="font-bold text-base">4.9/5 Rating</h4>
            <p className="text-xs text-slate-400">Verified Customer Reviews</p>
          </div>
        </Link>

        <div className="flex items-center gap-4 md:px-6 py-4 md:py-0">
          <ThumbsUp className="w-10 h-10 text-blue-400 shrink-0" />
          <div>
            <h4 className="font-bold text-base">Zero Upfront Deposit</h4>
            <p className="text-xs text-slate-400">Pay Upon Dispatch</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 md:px-6 py-4 md:py-0">
          <Link href="/licensing-insurance" className="text-xs font-bold uppercase tracking-wider text-blue-400 border border-blue-500/40 px-3.5 py-2 rounded-xl hover:bg-blue-500/10 transition-colors">
            Verify FMCSA License →
          </Link>
        </div>

      </div>
    </section>
  );
}
