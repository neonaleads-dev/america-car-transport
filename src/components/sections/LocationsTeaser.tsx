import { Map } from "lucide-react";

export function LocationsTeaser() {
  const routes = [
    { origin: "New York", dest: "Florida", time: "3-5 days" },
    { origin: "California", dest: "Texas", time: "4-6 days" },
    { origin: "Illinois", dest: "Arizona", time: "4-5 days" },
    { origin: "Washington", dest: "Colorado", time: "3-4 days" },
  ];

  return (
    <section className="py-24 bg-white border-y border-navy/5">
      <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-heading font-bold text-navy mb-6">Ship Coast to Coast</h2>
          <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
            Our network covers all 50 states, ensuring reliable transport whether you&apos;re moving across the state or across the country. We specialize in popular snowbird routes, cross-country relocations, and rural deliveries.
          </p>
          
          <div className="space-y-4">
            <h3 className="font-bold text-navy text-xl mb-4">Popular Routes</h3>
            {routes.map((route, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-md border border-gray-100 hover:border-navy/20 hover:shadow-sm transition-all group cursor-pointer">
                <div className="flex items-center gap-3">
                  <Map className="w-5 h-5 text-red" />
                  <span className="font-semibold text-charcoal">{route.origin} &rarr; {route.dest}</span>
                </div>
                <span className="text-sm text-charcoal/60 bg-paper px-3 py-1 rounded-full">{route.time}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <button className="text-navy font-bold underline hover:text-red transition-colors">
              Explore All Service Areas
            </button>
          </div>
        </div>

        <div className="bg-paper rounded-md aspect-square lg:aspect-auto lg:h-full min-h-[400px] border border-gray-200 relative overflow-hidden flex items-center justify-center p-8 group">
          {/* Abstract representation of a map for the teaser */}
          <div className="w-full h-full border-2 border-navy/10 rounded-md relative overflow-hidden bg-white/50">
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red rounded-full shadow-[0_0_15px_rgba(200,16,46,0.5)] group-hover:scale-125 transition-transform" />
            <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-navy rounded-full group-hover:scale-125 transition-transform" />
            
            <svg className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-40 transition-opacity" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M 25 25 Q 50 10 75 75" fill="none" stroke="#0B2545" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_2s_linear_infinite]" />
            </svg>
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <p className="font-heading font-bold text-navy/20 text-4xl rotate-[-15deg]">NATIONWIDE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
