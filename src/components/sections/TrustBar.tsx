import { ShieldCheck, Star, ThumbsUp } from "lucide-react";

export function TrustBar() {
  return (
    <section className="bg-navy py-12 border-t border-b border-navy-light text-paper">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-paper/20">
        
        <div className="flex items-center gap-4 md:px-6">
          <ShieldCheck className="w-12 h-12 text-brass" />
          <div>
            <h4 className="font-bold text-lg font-heading">FMCSA Verified</h4>
            <p className="text-sm text-paper/70">Fully Licensed & Bonded</p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:px-6 py-4 md:py-0">
          <Star className="w-12 h-12 text-brass fill-brass" />
          <div>
            <h4 className="font-bold text-lg font-heading">4.9/5 Average Rating</h4>
            <p className="text-sm text-paper/70">Based on 10,000+ reviews</p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:px-6 py-4 md:py-0">
          <ThumbsUp className="w-12 h-12 text-brass" />
          <div>
            <h4 className="font-bold text-lg font-heading">99% On-Time</h4>
            <p className="text-sm text-paper/70">Damage-Free Deliveries</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 md:px-6 py-4 md:py-0 opacity-70 grayscale">
          {/* Placeholder for Trust Logos */}
          <div className="text-xl font-bold italic border-b-2 border-current">TrustPilot</div>
          <div className="text-xl font-bold uppercase tracking-widest border border-current p-1">BBB</div>
        </div>

      </div>
    </section>
  );
}
