import { ArrowRight, BookOpen } from "lucide-react";

const GUIDES = [
  {
    title: "Open vs. Enclosed Transport: Which is Right for You?",
    category: "Guides",
    readTime: "5 min read",
    image: "bg-navy/10", // Placeholder for actual image
  },
  {
    title: "How Much Does It Really Cost to Ship a Car in 2024?",
    category: "Pricing",
    readTime: "8 min read",
    image: "bg-navy/10",
  },
  {
    title: "How to Prepare Your Vehicle for Cross-Country Shipping",
    category: "Tips",
    readTime: "4 min read",
    image: "bg-navy/10",
  },
];

export function ResourcesTeaser() {
  return (
    <section className="py-24 bg-paper">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-heading font-bold text-navy mb-4">Auto Transport Resources</h2>
            <p className="text-lg text-charcoal/70">
              Expert advice, pricing guides, and tips to ensure a smooth shipping experience.
            </p>
          </div>
          <button className="text-red font-semibold hover:text-navy transition-colors flex items-center gap-2 shrink-0">
            View All Articles <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {GUIDES.map((guide, index) => (
            <article key={index} className="group cursor-pointer">
              <div className={`w-full aspect-[4/3] rounded-md ${guide.image} mb-6 overflow-hidden relative flex items-center justify-center border border-gray-200`}>
                <BookOpen className="w-12 h-12 text-navy/20 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex items-center gap-3 text-sm text-charcoal/60 mb-3 font-medium">
                <span className="text-red">{guide.category}</span>
                <span>&bull;</span>
                <span>{guide.readTime}</span>
              </div>
              <h3 className="text-xl font-bold font-heading text-navy leading-tight group-hover:text-red transition-colors">
                {guide.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
