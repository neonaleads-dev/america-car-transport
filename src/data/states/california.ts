import { StateData } from "@/types/location";

export interface LocalizedReview {
  author: string;
  location: string;
  route: string;
  rating: number;
  date: string;
  comment: string;
}

export interface CaliforniaStateData extends StateData {
  intraStateRoutes?: Array<{
    originCity: string;
    destCity: string;
    destState: string;
    distanceMiles: number;
    openPriceRange: string;
    enclosedPriceRange: string;
    transitDays: string;
  }>;
  localizedReviews?: LocalizedReview[];
}

export const californiaData: CaliforniaStateData = {
  name: "California",
  slug: "california",
  abbreviation: "CA",
  heroTitle: "California Car Shipping: Auto Transport To and From the Golden State",
  heroSubtitle: "Real 2026 pricing, coverage across California's major cities, and answers to the questions Californians actually ask before booking.",
  metaTitle: "California Car Shipping | Auto Transport Quotes & Rates",
  metaDescription: "Ship your car to or from California with America Car Transport. Real 2026 pricing, top CA routes and cities, zero upfront deposit. Get an instant quote.",
  canonical: "https://americacartransport.com/locations/california",
  
  population: "39.0 Million",
  capital: "Sacramento",
  majorCities: [
    { name: "Los Angeles", slug: "los-angeles", population: "3.8M", isHub: true },
    { name: "San Diego", slug: "san-diego", population: "1.4M", isHub: true },
    { name: "San Francisco", slug: "san-francisco", population: "810K", isHub: true },
    { name: "San Jose", slug: "san-jose", population: "970K", isHub: false },
    { name: "Sacramento", slug: "sacramento", population: "525K", isHub: true },
    { name: "Fresno", slug: "fresno", population: "545K", isHub: false },
    { name: "Long Beach", slug: "long-beach", population: "460K", isHub: true },
    { name: "Oakland", slug: "oakland", population: "430K", isHub: true }
  ],
  
  majorInterstates: ["I-5", "I-10", "I-15", "I-80", "I-40"],
  majorPorts: ["Port of Los Angeles", "Port of Long Beach", "Port of Oakland"],
  primaryRailHubs: ["BNSF Hobart Yard (LA)", "UP West Colton Yard"],
  averageDistanceMiles: 1450,
  averageTransitDays: "4-7 Days",
  averagePricePerMile: "$0.85 - $1.25",
  
  climateNotes: "Inland California regions experience extreme summer heat affecting tire pressure and coolant levels. Check both before pickup. Winter snowpack on I-80 Donner Pass requires chain controls.",
  seasonality: "Heavy outbound demand in early summer and peak snowbird movement into Florida and Arizona in late fall.",
  peakMonths: "May through September",
  carShippingDemand: "Extremely High",
  
  stateOverview: "America Car Transport ships vehicles to and from California nationwide, connecting Los Angeles, San Diego, San Francisco, and Sacramento on major interstate corridors (I-5, I-10, I-15, I-80). Whether relocating, buying out-of-state, or executing a PCS military move, California is one of the most connected states in the national network.",
  whyShipHere: "High carrier staging density along I-5 and I-10 provides rapid 24-48 hour pickup windows and competitive cross-country rates.",
  openVsEnclosedNotes: "While 80%+ of standard cars use open transport, enclosed shipping is recommended for classic, luxury, and exotic vehicles traversing mountain passes or coastal salt air zones.",
  
  popularRoutesOut: [
    { originCity: "Los Angeles, CA", destCity: "Honolulu", destState: "HI", distanceMiles: 2220, openPriceRange: "$1,100 - $1,700", enclosedPriceRange: "$2,500 - $4,500", transitDays: "9-24 Days" },
    { originCity: "Los Angeles, CA", destCity: "New York", destState: "NY", distanceMiles: 2789, openPriceRange: "$1,150+", enclosedPriceRange: "$1,850+", transitDays: "5-7 Days" },
    { originCity: "Los Angeles, CA", destCity: "Miami", destState: "FL", distanceMiles: 2700, openPriceRange: "$1,100 - $1,600", enclosedPriceRange: "$1,800 - $2,400", transitDays: "5-7 Days" },
    { originCity: "San Diego, CA", destCity: "Orlando", destState: "FL", distanceMiles: 2500, openPriceRange: "$1,050 - $1,500", enclosedPriceRange: "$1,700 - $2,300", transitDays: "5-7 Days" },
    { originCity: "San Francisco, CA", destCity: "Chicago", destState: "IL", distanceMiles: 2100, openPriceRange: "$950 - $1,350", enclosedPriceRange: "$1,550 - $2,050", transitDays: "4-6 Days" }
  ],
  popularRoutesIn: [
    { originCity: "Seattle, WA", destCity: "San Diego", destState: "CA", distanceMiles: 1250, openPriceRange: "$890+", enclosedPriceRange: "$1,350+", transitDays: "3-4 Days" },
    { originCity: "Houston, TX", destCity: "Los Angeles", destState: "CA", distanceMiles: 1540, openPriceRange: "$980 - $1,280", enclosedPriceRange: "$1,500 - $1,900", transitDays: "3-5 Days" }
  ],
  intraStateRoutes: [
    { originCity: "San Francisco, CA", destCity: "Los Angeles", destState: "CA", distanceMiles: 380, openPriceRange: "$450 - $650", enclosedPriceRange: "$750 - $950", transitDays: "1-2 Days" },
    { originCity: "Sacramento, CA", destCity: "San Diego", destState: "CA", distanceMiles: 500, openPriceRange: "$550 - $750", enclosedPriceRange: "$850 - $1,100", transitDays: "1-2 Days" },
    { originCity: "Los Angeles, CA", destCity: "San Jose", destState: "CA", distanceMiles: 340, openPriceRange: "$400 - $600", enclosedPriceRange: "$700 - $900", transitDays: "1 Day" }
  ],

  localizedReviews: [
    {
      author: "Marcus T.",
      location: "San Francisco, CA",
      route: "San Francisco, CA → Austin, TX",
      rating: 5,
      date: "February 2026",
      comment: "Shipped my Tesla Model 3 from SF down to Austin for a job relocation. Driver called 2 hours before pickup, verified my FasTrak transponder was removed, and delivered in 4 days with zero damage. Fantastic experience!"
    },
    {
      author: "Elena R.",
      location: "Los Angeles, CA",
      route: "Los Angeles, CA → Miami, FL",
      rating: 5,
      date: "January 2026",
      comment: "No upfront deposit was requested, which gave me total peace of mind after hearing scam horror stories. The price matched the quote exactly and carrier insurance was verified upfront."
    },
    {
      author: "David K.",
      location: "San Diego, CA",
      route: "San Diego, CA → Orlando, FL",
      rating: 5,
      date: "December 2025",
      comment: "Enclosed transport for my 1969 Camaro from San Diego to Florida. The hydraulic liftgate loading was professional and the Bill of Lading inspection was thorough."
    }
  ],

  faqs: [
    {
      question: "How do I not get scammed shipping my car?",
      answer: "Verify the company's USDOT and MC number directly on the official FMCSA SAFER registry (USDOT #3849102 | MC #1098472), avoid companies demanding large upfront deposits, check reviews across independent platforms, and get a written, itemized quote before booking. Read our full guide at How to Avoid Car Shipping Scams."
    },
    {
      question: "How much does it cost to ship a car 500 miles?",
      answer: "A 500-mile move typically falls in the $600–$1,000 range on open transport, depending on vehicle size, route popularity, and season — shorter hauls carry a higher per-mile rate than long-haul routes because loading, dispatch, and fuel costs don't scale down proportionally with distance. A California route in this range (say, Los Angeles to Las Vegas or the Bay Area to Reno) usually prices toward the lower end thanks to steady carrier traffic on those corridors. For an estimate tied to your specific pickup and drop-off ZIP codes, run it through our Car Shipping Cost Calculator — no email required."
    },
    {
      question: "What is the $3,000 rule for cars?",
      answer: "The '$3,000 rule' isn't a car-shipping term — it's a car-buying and repair-budgeting guideline suggesting that once a vehicle's annual repair costs start approaching or exceeding $3,000 (often paired with high mileage, roughly 150,000+), it may make more financial sense to replace the car than keep repairing it. It shows up in shipping-related searches because the two decisions often collide in real life: if you're relocating and weighing whether an aging vehicle is worth shipping cross-country versus selling it locally and buying something new at the destination, the same repair-cost math applies. If a vehicle is deep into that territory, compare shipping cost plus its remaining life against a local trade-in before booking."
    },
    {
      question: "Is it cheaper to drive or ship my car?",
      answer: "For distances under roughly 200–300 miles, driving is usually cheaper out of pocket; beyond that, shipping typically wins once you account for total cost, not just fuel. Add up gas, meals, one or more hotel nights, mileage-related wear, and the value of your own time, and a cross-country or even a California-to-Texas drive often costs more than a transport quote once everyone's true costs are counted. Shipping also avoids putting extra miles and depreciation on the vehicle itself, which matters more for newer or higher-value cars. This is the single most common question California shippers ask before booking, and the honest answer is: it depends on distance, vehicle value, and what your time is worth."
    },
    {
      question: "What is the cheapest company to ship your car?",
      answer: "There's no single 'cheapest' company across every route and season, because auto transport pricing is dynamic — it moves with fuel prices, carrier availability, and how many trucks are already running your specific route that week. Rather than chasing a lowest-price label, compare real, verified quotes for your exact pickup and delivery ZIP codes, and be wary of any quote that comes in dramatically below every other one — in this industry, an unusually low price is a common precursor to a bait-and-switch call a day or two before pickup. A zero-upfront-deposit policy and verified USDOT/MC licensing are better predictors of a fair, honest price than a marketing claim of 'cheapest.'"
    },
    {
      question: "Can I put personal items in my car when I shipping it?",
      answer: "Most carriers allow a small amount of personal items in the trunk or cargo area — generally up to about 100 lbs, kept below the window line so nothing is visible or shifts during transit. This isn't a guarantee, though: FMCSA rules mean carrier insurance typically doesn't cover personal belongings loaded into the vehicle, only the vehicle itself, so anything you pack travels at your own risk. Always confirm the specific carrier's policy before loading anything, avoid valuables or fragile items entirely, and keep the total weight modest — overloaded vehicles can affect a carrier's load calculations for the whole truck."
    },
    {
      question: "How long does it take to ship a car 3,000 miles?",
      answer: "A coast-to-coast move of around 3,000 miles — for example, Los Angeles to New York — typically takes 7 to 10 days in transit, on top of the pickup window (the time between booking and an available carrier arriving, often 1–5 days). Total time from booking to delivery is usually somewhere between 8 and 14 days for a route this long, though it can stretch during peak summer moving season or snowbird season in the fall. Expedited service can shorten transit time for an added cost if you're working against a hard deadline."
    },
    {
      question: "How long does it take to ship a car from California to Florida?",
      answer: "Shipping from California to Florida typically takes 5 to 7 days for this roughly 2,700-mile cross-country route, depending on carrier availability and pickup flexibility. Check our California to Florida Route Page for full city pair breakdowns."
    },
    {
      question: "Do I need insurance when shipping a car?",
      answer: "You don't need to buy separate insurance — licensed carriers are required to carry cargo insurance covering your vehicle while it's on the truck — but you do need to confirm the coverage is real and adequate before booking. Ask for the carrier's certificate of insurance and coverage limits directly, and check that your own auto policy doesn't have a gap during transit (most standard policies stay in effect, but it's worth a quick call to your insurer). This is exactly the kind of verification step covered in full in How to Avoid Car Shipping Scams."
    },
    {
      question: "What is the best time of year to ship a car?",
      answer: "Late winter and early spring (roughly February through April) tend to bring the lowest prices and most carrier availability, since demand is lighter before the summer rush begins. Summer months and 'snowbird season' — the fall migration toward Florida and Arizona — reliably push prices up industry-wide due to higher demand on those routes and generally higher volume everywhere. If your schedule is flexible, booking outside these peak windows, and outside major holiday weeks, is the most reliable lever for a lower rate."
    },
    {
      question: "What happens if my car is damaged during shipping?",
      answer: "Document the vehicle's condition with dated photos before pickup and compare them against the driver's Bill of Lading inspection at delivery — this document is your primary evidence if damage shows up. Any damage should be noted on the Bill of Lading at the time of delivery, before signing, since that signature is typically treated as acceptance of the vehicle's condition. From there, the claim goes through the carrier's cargo insurance; enclosed transport carries lower damage risk overall for owners of high-value or classic vehicles who want to minimize this risk from the start."
    },
    {
      question: "How can I lower my car shipping costs?",
      answer: "Book with flexibility rather than urgency — a wider pickup window and a willingness to ship outside peak season (avoiding summer and fall snowbird months) both lower price. Terminal-to-terminal service is typically cheaper than door-to-door since it doesn't require the carrier to route through a residential or hard-to-access address, and open transport costs less than enclosed for owners who don't need the extra protection. Comparing a few real quotes for your specific route, rather than accepting the first number offered, also matters — prices vary by carrier availability on any given route and week."
    },
    {
      question: "What documents do I need to ship a car?",
      answer: "At minimum: a valid photo ID, the vehicle's registration (or title, if it's not currently registered), and proof of insurance. At pickup and delivery, you'll also sign the Bill of Lading — the inspection report and contract of carriage that documents the vehicle's condition and terms of transport — so keep a copy from both ends. If someone other than the registered owner is dropping off or receiving the vehicle, bring a signed authorization letter to avoid delays."
    }
  ],
  
  fmcsaLicense: "MC #1098472",
  usdotNumber: "3849102"
};
