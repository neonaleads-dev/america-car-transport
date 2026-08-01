export interface FAQItem {
  q: string;
  a: string;
  linkText?: string;
  linkHref?: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  faqs: FAQItem[];
}

export const MASTER_FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: "pricing-cost",
    title: "Car Shipping Costs & Pricing",
    icon: "DollarSign",
    description: "Real 2026 pricing breakdowns, cost calculators, distance tiers, and money-saving tips.",
    faqs: [
      {
        q: "How much does it cost to ship a car 2,000 miles?",
        a: "A 2,000-mile move — a typical West Coast-to-Midwest or West Coast-to-Northeast distance — generally runs $1,000 to $1,600 on open transport for a standard sedan or midsize SUV, with enclosed transport typically adding 40–60% on top of that. Long-haul routes like this actually carry a lower per-mile rate than short hauls, since fixed costs spread across more miles.",
        linkText: "Calculate your route cost with no email required",
        linkHref: "/tools/car-shipping-cost-calculator"
      },
      {
        q: "How much does it cost to ship a car 200 miles?",
        a: "Short hauls under 200–300 miles typically cost $300 to $600, but carry the highest per-mile rate of any distance tier because loading, dispatch, and minimum-trip costs don't shrink with distance. Routes between major metro pairs (e.g., Los Angeles to San Diego, Dallas to Houston) tend to price toward the lower end of this range.",
        linkText: "Try our Car Shipping Cost Calculator",
        linkHref: "/tools/car-shipping-cost-calculator"
      },
      {
        q: "How do you calculate car shipping cost?",
        a: "Car shipping cost comes down to five factors multiplied together, not a flat per-mile rate: distance, vehicle size/weight, transport type (open vs. enclosed), route popularity, and timing. Distance sets the baseline, but short hauls carry higher per-mile rates than long-haul routes.",
        linkText: "Learn more in our Cost Calculator Guide",
        linkHref: "/tools/car-shipping-cost-calculator"
      },
      {
        q: "How can I save money on car shipping?",
        a: "The four highest-impact levers are: book outside peak season (late winter/early spring offers lowest rates), choose open over enclosed, choose terminal-to-terminal over door-to-door, and stay flexible on pickup date (a 1–3 day window costs less than an exact-day demand).",
        linkText: "Compare Open vs Enclosed Transport",
        linkHref: "/services/open-auto-transport"
      },
      {
        q: "How much does it cost per mile to drive a car (IRS rate)?",
        a: "The 2022 IRS business mileage rate was 58.5 cents per mile for the first half of the year, raised mid-year to 62.5 cents per mile from July through December 2022 due to fuel price spikes. Multiply the IRS rate by your route's mileage to estimate your true per-mile cost of driving (fuel, wear, depreciation) versus shipping.",
        linkText: "See driving vs. shipping comparison",
        linkHref: "/tools/car-shipping-cost-calculator"
      },
      {
        q: "What is the current freight rate per mile?",
        a: "General dry van freight has been running roughly $2.00 to $2.80 per mile on the spot market through 2026. However, car haulers price per vehicle unit (carrying 7–10 cars per truck) based on route demand, vehicle size, and transport method rather than a flat per-mile freight rate.",
        linkText: "Check real route quote estimates",
        linkHref: "/tools/car-shipping-cost-calculator"
      },
      {
        q: "How can I avoid the car delivery fee?",
        a: "If this is about a new car's manufacturer destination/delivery fee, it cannot be avoided — it is a non-negotiable charge itemized by law on window stickers. For auto-transport delivery costs, choosing terminal-to-terminal over door-to-door service avoids the extra charge of routing a truck to a residential address.",
        linkText: "Explore Terminal-to-Terminal Shipping",
        linkHref: "/services/terminal-to-terminal-shipping"
      }
    ]
  },
  {
    id: "california-state",
    title: "California Car Shipping & Driving Laws",
    icon: "MapPin",
    description: "State-specific rules, FasTrak transponder guidelines, CARB emissions, and CA routes.",
    faqs: [
      {
        q: "How do I not get scammed shipping my car in California?",
        a: "Verify the company's USDOT and MC number directly on the official FMCSA SAFER registry (USDOT #3849102 | MC #1098472), avoid companies demanding large upfront deposits, check reviews across independent platforms, and get a written, itemized quote before booking.",
        linkText: "Read our full California Car Shipping Guide",
        linkHref: "/locations/california"
      },
      {
        q: "What are California's specific shipping considerations?",
        a: "Remove your electronic FasTrak toll transponder before pickup to prevent automatic toll charges while your car is on the trailer. Additionally, prepare for inland summer heat by checking coolant levels and tire pressure, and review CARB emissions standards if relocating permanently.",
        linkText: "View California Driving Laws 2026 Guide",
        linkHref: "/resources/california-driving-laws"
      },
      {
        q: "How much does it cost to ship a car 500 miles in California?",
        a: "A 500-mile move typically falls in the $600–$1,000 range on open transport. A California route in this range (such as Los Angeles to Las Vegas or the Bay Area to Reno) usually prices toward the lower end thanks to steady carrier traffic on those corridors.",
        linkText: "View California pricing table",
        linkHref: "/locations/california"
      },
      {
        q: "What is the $3,000 rule for cars?",
        a: "The '$3,000 rule' is a repair-budgeting guideline suggesting that once annual repair costs approach or exceed $3,000 (often at 150,000+ miles), it may make more financial sense to replace the vehicle than keep repairing it. Compare shipping cost plus remaining vehicle life against local trade-in before booking.",
        linkText: "Explore California car shipping options",
        linkHref: "/locations/california"
      }
    ]
  },
  {
    id: "routes-corridors",
    title: "Interstate Routes & Transit Times",
    icon: "Truck",
    description: "Cross-country corridor pricing (CA → FL, CA → NY, FL → NY, FL → IL) and rail shipping facts.",
    faqs: [
      {
        q: "How much does it cost to ship a car from California to Florida?",
        a: "California to Florida — about 2,500 to 2,800 miles — typically costs $1,000 to $1,500 on open transport for a standard vehicle. Demand spikes in fall during snowbird season; booking in late winter or spring offers lower quotes.",
        linkText: "Read our California to Florida Route Guide",
        linkHref: "/routes/california-to-florida"
      },
      {
        q: "Can I put my car on a train from California to Florida?",
        a: "No — there is no passenger train option for shipping a car from California to Florida. The Amtrak Auto Train runs exclusively between Lorton, Virginia and Sanford, Florida, and does not serve California. Professional car haulers are the only shipping option for this route.",
        linkText: "Learn about CA to FL transport options",
        linkHref: "/routes/california-to-florida"
      },
      {
        q: "How much does it cost to ship a car from California to New York?",
        a: "A California-to-New York move — roughly 2,800 miles — typically runs $1,100 to $1,600 on open transport for a standard sedan or midsize SUV, with enclosed transport adding 40–60%.",
        linkText: "Explore California auto shipping",
        linkHref: "/locations/california"
      },
      {
        q: "How much does it cost to ship a car from Florida to New York?",
        a: "Florida to New York — roughly 1,100 to 1,300 miles — typically runs $700 to $1,050 on open transport for a standard vehicle, experiencing seasonal demand spikes in fall (southbound) and spring (northbound).",
        linkText: "View Interstate Routes Directory",
        linkHref: "/routes"
      },
      {
        q: "How long does it take to ship a car 3,000 miles?",
        a: "A coast-to-coast move of around 3,000 miles (such as Los Angeles to New York) typically takes 7 to 10 days in transit, plus a 1–5 day pickup window. Total door-to-door time is usually 8 to 14 days.",
        linkText: "Check transit times by route",
        linkHref: "/routes"
      }
    ]
  },
  {
    id: "licensing-scam-protection",
    title: "Licensing, Insurance & Scam Avoidance",
    icon: "ShieldCheck",
    description: "FMCSA SAFER registry verification, cargo insurance rules, zero-deposit guarantees, and scam red flags.",
    faqs: [
      {
        q: "Do I need insurance when shipping a car?",
        a: "You don't need to buy separate insurance — licensed carriers are legally required to carry primary cargo insurance covering your vehicle while on the truck. Always confirm the coverage limits match your vehicle's value.",
        linkText: "Verify credentials on our Licensing & Insurance Page",
        linkHref: "/licensing-insurance"
      },
      {
        q: "What is the safest way to ship a car?",
        a: "Enclosed transport with a verified, licensed, and insured carrier (USDOT #3849102 | MC #1098472) is the safest method available, protecting against road debris and weather while providing high-value cargo coverage.",
        linkText: "Read how to spot fake shipping companies",
        linkHref: "/resources/how-to-avoid-car-shipping-scams"
      },
      {
        q: "What happens if my car is damaged during shipping?",
        a: "Document condition with photos/video before pickup and compare them against the driver's Bill of Lading inspection at delivery. Any damage must be noted on the Bill of Lading before signing to process a cargo insurance claim smoothly.",
        linkText: "Read full Scam Avoidance & Damage Claim Guide",
        linkHref: "/resources/how-to-avoid-car-shipping-scams"
      },
      {
        q: "What is the cheapest company to ship your car?",
        a: "There's no single 'cheapest' company across every route and season. Look for zero-upfront-deposit policies and verified FMCSA licensing (USDOT #3849102 | MC #1098472) rather than chasing unusually low quote claims that often lead to bait-and-switch demands.",
        linkText: "Verify FMCSA SAFER licensing info",
        linkHref: "/licensing-insurance"
      }
    ]
  },
  {
    id: "specialty-military",
    title: "Specialty, Military & Vehicle Prep",
    icon: "BookOpen",
    description: "Navy PCS moves, electric vehicle (EV) battery surcharges, personal belongings, and prep checklists.",
    faqs: [
      {
        q: "Does the Navy ship your car for free?",
        a: "Yes, but only for active-duty service members (Navy included) with PCS orders to an overseas (OCONUS) duty station, who are authorized to ship one privately owned vehicle (POV) at government expense. CONUS-to-CONUS moves are generally self-funded.",
        linkText: "Read full military transport guidelines",
        linkHref: "/services"
      },
      {
        q: "Can I put personal items in my car when I ship it?",
        a: "Most carriers allow up to 100 lbs of personal items in the trunk below the window line. However, carrier cargo insurance does NOT cover personal belongings inside the vehicle — only the vehicle itself. Pack at your own risk and avoid packing valuables.",
        linkText: "Learn about vehicle preparation",
        linkHref: "/tools/car-shipping-cost-calculator"
      },
      {
        q: "What should I do before I ship a car?",
        a: "Clean the vehicle, document existing condition with dated photos/video, remove personal items/valuables, disable aftermarket alarm systems, and keep the fuel tank at roughly one-quarter full.",
        linkText: "Check pre-shipping preparation guidelines",
        linkHref: "/tools/car-shipping-cost-calculator"
      },
      {
        q: "Do USPS ship cars?",
        a: "No — the U.S. Postal Service does not ship vehicles. Shipping requires a licensed auto transport carrier using specialized car haulers. Claims that USPS ships cars are a common scam sign.",
        linkText: "Learn how to spot auto shipping scams",
        linkHref: "/resources/how-to-avoid-car-shipping-scams"
      }
    ]
  }
];
