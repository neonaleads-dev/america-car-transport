import { CompanyCard } from "./CompanyCard";

const SAMPLE_COMPANIES = [
  { name: "Apex Auto Transport", rating: 4.9, reviews: 1245, verified: true },
  { name: "Blue Ribbon Logistics", rating: 4.8, reviews: 890, verified: true },
  { name: "Continental Carrier Co.", rating: 4.7, reviews: 342, verified: false },
  { name: "Direct Route Shipping", rating: 4.9, reviews: 2104, verified: true },
  { name: "Express Auto Movers", rating: 4.6, reviews: 567, verified: true },
  { name: "Freight Forward Vehicles", rating: 4.8, reviews: 1102, verified: true },
];

export function TopRatedGrid() {
  return (
    <section className="py-24 bg-paper relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-heading font-bold text-navy mb-4">Top-Rated Auto Carriers</h2>
            <p className="text-lg text-charcoal/70">
              Browse our network of vetted professionals. We monitor performance daily to ensure your vehicle is in the best hands.
            </p>
          </div>
          <button className="text-red font-semibold hover:text-navy transition-colors shrink-0">
            View All Carriers &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_COMPANIES.map((company, index) => (
            <CompanyCard key={index} {...company} />
          ))}
        </div>
      </div>
    </section>
  );
}
