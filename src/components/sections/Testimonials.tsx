import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    location: "Miami, FL",
    text: "Moving my SUV from New York was stressful until I found this platform. Got 3 quotes instantly, picked a highly-rated carrier, and the car arrived spotless.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    location: "Denver, CO",
    text: "Saved about $300 compared to booking directly. The carrier communication was excellent. Will absolutely use again for our next military move.",
    rating: 5,
  },
  {
    name: "Elena R.",
    location: "Austin, TX",
    text: "I shipped my vintage Porsche enclosed. The peace of mind knowing the carrier was pre-vetted made all the difference. Arrived exactly on time.",
    rating: 5,
  },
  {
    name: "David Chen",
    location: "Seattle, WA",
    text: "Very straightforward process. The pricing was transparent and there were no hidden fees at delivery. Highly recommended.",
    rating: 4,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-navy text-paper relative overflow-hidden">
      {/* Decorative large quote mark */}
      <div className="absolute top-10 left-10 text-paper/5">
        <Quote size={200} />
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4">Trusted by Drivers Nationwide</h2>
          <p className="text-lg text-paper/70 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Read what our customers have to say about their shipping experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm border border-paper/10 p-6 rounded-md flex flex-col">
              <div className="flex text-brass mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} className={`w-4 h-4 ${starIndex < t.rating ? "fill-current" : ""}`} />
                ))}
              </div>
              <p className="text-paper/90 mb-6 flex-grow leading-relaxed">&quot;{t.text}&quot;</p>
              <div>
                <p className="font-bold font-heading">{t.name}</p>
                <p className="text-sm text-paper/60">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
