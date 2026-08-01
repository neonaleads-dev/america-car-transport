import { Star, ShieldCheck } from "lucide-react";

interface CompanyCardProps {
  name: string;
  rating: number;
  reviews: number;
  verified: boolean;
}

export function CompanyCard({ name, rating, reviews, verified }: CompanyCardProps) {
  return (
    <div className="bg-white rounded-md shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-heading font-bold text-lg text-navy line-clamp-2">{name}</h3>
        {verified && (
          <div className="bg-brass/10 text-brass-dark text-xs font-semibold px-2 py-1 rounded flex items-center gap-1 shrink-0">
            <ShieldCheck className="w-3 h-3" />
            Verified
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-2 mb-6">
        <div className="flex text-brass">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-current" : ""}`} />
          ))}
        </div>
        <span className="font-semibold text-charcoal">{rating}</span>
        <span className="text-charcoal/50 text-sm">({reviews.toLocaleString()})</span>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100">
        <button className="w-full text-center text-navy font-semibold hover:text-red transition-colors text-sm">
          View Profile &rarr;
        </button>
      </div>
    </div>
  );
}
