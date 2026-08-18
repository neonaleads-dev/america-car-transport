import { StateData } from "@/types/location";
import { LocalizedReview } from "./virginia";

export interface FloridaStateData extends StateData {
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
  militaryBaseCount?: number;
  auctionHubs?: string[];
  stats?: {
    shippedCount: string;
    averageRating: string;
    countiesServed: number;
    pickupWindow: string;
    upfrontDeposit: string;
  };
  dmvRequirements?: {
    registrationWindowDays: number;
    liabilityLimits: string;
    inspectionType: string;
    ezPassTip: string;
  };
  seasonalPricing?: Array<{
    season: string;
    demandLevel: string;
    priceImpact: string;
    bestFor: string;
  }>;
}

export const floridaData: FloridaStateData = {
  name: "Florida",
  slug: "florida",
  abbreviation: "FL",
  heroTitle: "Florida Car Shipping Cost 2026 – Instant Quotes from $550 (No Deposit)",
  heroSubtitle: "Real 2026 pricing across all 67 Florida counties. Door-to-door auto transport for snowbird moves, military PCS, college relocations, and online vehicle purchases with zero upfront deposit.",
  metaTitle: "Florida Car Shipping Cost 2026 | Instant Quote – No Deposit",
  metaDescription: "Ship your car to or from Florida from $550. Get instant 2026 pricing by distance, vehicle type, and transport method. Zero upfront deposit. Door-to-door service.",
  canonical: "https://www.americacartransport.com/locations/florida",
  
  population: "22.6 Million",
  capital: "Tallahassee",
  majorCities: [
    { name: "Miami", slug: "miami", population: "442K", isHub: true },
    { name: "Tampa", slug: "tampa", population: "384K", isHub: true },
    { name: "Orlando", slug: "orlando", population: "307K", isHub: true },
    { name: "Jacksonville", slug: "jacksonville", population: "949K", isHub: true },
    { name: "Fort Lauderdale", slug: "fort-lauderdale", population: "182K", isHub: true },
    { name: "West Palm Beach", slug: "west-palm-beach", population: "117K", isHub: true },
    { name: "Boca Raton", slug: "boca-raton", population: "97K", isHub: false },
    { name: "Naples", slug: "naples", population: "22K", isHub: false },
    { name: "Fort Myers", slug: "fort-myers", population: "87K", isHub: false },
    { name: "St. Petersburg", slug: "st-petersburg", population: "258K", isHub: false },
    { name: "Sarasota", slug: "sarasota", population: "57K", isHub: false },
    { name: "Tallahassee", slug: "tallahassee", population: "196K", isHub: true },
    { name: "Pensacola", slug: "pensacola", population: "54K", isHub: false }
  ],
  
  majorInterstates: ["I-95", "I-75", "I-10", "Florida's Turnpike"],
  majorPorts: ["Port of Miami", "Port of Jacksonville (JAXPORT)", "Port of Tampa"],
  primaryRailHubs: ["FEC Railway Bowden Yard (JAX)", "CSX Jacksonville Intermodal"],
  averageDistanceMiles: 1100,
  averageTransitDays: "3-6 Days",
  averagePricePerMile: "$0.60 - $1.10",
  
  climateNotes: "Florida's tropical climate brings heavy summer rainstorms and hurricane season (June to November). Coastal salt air in South Florida warrants enclosed transport for classic, luxury, and exotic vehicles.",
  seasonality: "Massive seasonal snowbird migration: High southbound demand September–October (Northeast/Midwest to FL) and massive northbound demand March–May (FL to NY/NJ/CT/IL).",
  peakMonths: "March–May & September–October",
  carShippingDemand: "Extremely High",
  
  stateOverview: "Florida is the primary hub for East Coast vehicle shipping, driven heavily by seasonal snowbird movements between the Northeast/Midwest and the Sunshine State. With I-95 hugging the Atlantic coastline and I-75 serving the Gulf Coast, carrier availability in Florida is among the densest in the nation.",
  whyShipHere: "Thousands of auto transport trucks travel I-95 and I-75 daily, ensuring fast 24–48 hour pickup windows in Jacksonville, Orlando, Tampa, and Miami at highly competitive rates.",
  openVsEnclosedNotes: "Open carriers are ideal for 90%+ of standard sedans and SUVs on Florida's flat highways. Enclosed shipping is popular among snowbirds transporting classic luxury convertibles, exotics in Palm Beach, and antique cars to winter estates.",

  stats: {
    shippedCount: "55,697 vehicles shipped",
    averageRating: "4.9 / 5.0",
    countiesServed: 67,
    pickupWindow: "1–3 Days",
    upfrontDeposit: "$0 Deposit"
  },

  popularRoutesOut: [
    { originCity: "Miami, FL", destCity: "Orlando", destState: "FL", distanceMiles: 235, openPriceRange: "$400 - $650", enclosedPriceRange: "$650 - $950", transitDays: "1 Day" },
    { originCity: "Tampa, FL", destCity: "Jacksonville", destState: "FL", distanceMiles: 200, openPriceRange: "$400 - $600", enclosedPriceRange: "$650 - $900", transitDays: "1 Day" },
    { originCity: "Florida", destCity: "New York", destState: "NY", distanceMiles: 1280, openPriceRange: "$900 - $1,200", enclosedPriceRange: "$1,300 - $1,600", transitDays: "3-5 Days" },
    { originCity: "Florida", destCity: "Dallas", destState: "TX", distanceMiles: 1150, openPriceRange: "$850 - $1,100", enclosedPriceRange: "$1,200 - $1,450", transitDays: "3-4 Days" },
    { originCity: "Florida", destCity: "Los Angeles", destState: "CA", distanceMiles: 2700, openPriceRange: "$1,400 - $1,800", enclosedPriceRange: "$1,900 - $2,300", transitDays: "6-8 Days" },
    { originCity: "Florida", destCity: "Chicago", destState: "IL", distanceMiles: 1180, openPriceRange: "$800 - $1,150", enclosedPriceRange: "$1,200 - $1,700", transitDays: "4-6 Days" },
    { originCity: "Florida", destCity: "Atlanta", destState: "GA", distanceMiles: 400, openPriceRange: "$400 - $650", enclosedPriceRange: "$650 - $950", transitDays: "1-2 Days" }
  ],
  popularRoutesIn: [
    { originCity: "New York, NY", destCity: "Miami", destState: "FL", distanceMiles: 1280, openPriceRange: "$900 - $1,200", enclosedPriceRange: "$1,300 - $1,600", transitDays: "3-5 Days" },
    { originCity: "Dallas, TX", destCity: "Florida", destState: "FL", distanceMiles: 1150, openPriceRange: "$850 - $1,100", enclosedPriceRange: "$1,200 - $1,450", transitDays: "3-4 Days" },
    { originCity: "Los Angeles, CA", destCity: "Florida", destState: "FL", distanceMiles: 2700, openPriceRange: "$1,400 - $1,800", enclosedPriceRange: "$1,900 - $2,300", transitDays: "6-8 Days" },
    { originCity: "Chicago, IL", destCity: "Tampa", destState: "FL", distanceMiles: 1190, openPriceRange: "$1,100 - $1,700", enclosedPriceRange: "$1,350 - $1,600", transitDays: "3-5 Days" },
    { originCity: "Atlanta, GA", destCity: "Orlando", destState: "FL", distanceMiles: 440, openPriceRange: "$700 - $1,100", enclosedPriceRange: "$1,050 - $1,650", transitDays: "1-3 Days" }
  ],
  intraStateRoutes: [
    { originCity: "Miami, FL", destCity: "Orlando", destState: "FL", distanceMiles: 235, openPriceRange: "$400 - $650", enclosedPriceRange: "$650 - $950", transitDays: "1 Day" },
    { originCity: "Tampa, FL", destCity: "Jacksonville", destState: "FL", distanceMiles: 200, openPriceRange: "$400 - $600", enclosedPriceRange: "$650 - $900", transitDays: "1 Day" }
  ],

  militaryBaseCount: 10,
  auctionHubs: ["Manheim Orlando", "Copart Miami", "IAA Tampa"],

  dmvRequirements: {
    registrationWindowDays: 30,
    liabilityLimits: "10/20/10",
    inspectionType: "No annual safety inspection or emissions testing required in Florida",
    ezPassTip: "Remove your SunPass transponder before shipping to prevent automated toll gantries from reading the tag while riding on the trailer."
  },

  seasonalPricing: [
    { season: "Jan–Feb", demandLevel: "Moderate", priceImpact: "Baseline", bestFor: "Winter relocations" },
    { season: "Mar–May", demandLevel: "Very High (Northbound Snowbirds)", priceImpact: "+15% to +25%", bestFor: "Florida → Northern states" },
    { season: "Jun–Aug", demandLevel: "Low–Moderate", priceImpact: "-10% to -15%", bestFor: "Best overall rates" },
    { season: "Sep–Oct", demandLevel: "Very High (Southbound Snowbirds)", priceImpact: "+15% to +25%", bestFor: "Northern states → Florida" },
    { season: "Nov–Dec", demandLevel: "High (Holiday Travel)", priceImpact: "+10% to +15%", bestFor: "Holiday relocations" }
  ],

  localizedReviews: [
    {
      author: "Mark T.",
      location: "Miami, FL",
      route: "Miami, FL → Dallas, TX",
      rating: 5,
      date: "February 2026",
      comment: "Shipped my 2022 F-150 from Miami to Dallas for $1,140. Driver called before pickup, arrived on schedule, and delivered in 4 days with zero scratches!"
    },
    {
      author: "Sarah L.",
      location: "Naples, FL",
      route: "Naples, FL → Boston, MA",
      rating: 5,
      date: "January 2026",
      comment: "Used enclosed transport for my 2020 Porsche from Naples to Boston ($1,320). Total peace of mind, fully insured carrier, and zero upfront deposit required."
    },
    {
      author: "James R.",
      location: "Tampa, FL",
      route: "Tampa, FL → New York, NY",
      rating: 5,
      date: "January 2026",
      comment: "Snowbird move from Tampa to New York ($1,150). Picked up in 24 hours, delivered in 4 days. Best experience ever!"
    }
  ],

  faqs: [
    {
      question: "How much does it cost to ship a car from Florida to New York?",
      answer: "A Florida to New York move (1,280 miles) typically costs $900 to $1,200 on open transport for a standard sedan, with enclosed transport adding 50–70%. Peak snowbird season (March–May, September–October) can add 15–25%."
    },
    {
      question: "How much does it cost to ship a car from Florida to California?",
      answer: "Florida to California (2,700 miles) runs $1,400 to $1,800 on open transport, or $1,900 to $2,300 for enclosed shipping. Transit time is 6–8 days."
    },
    {
      question: "How much does it cost to ship a car from Florida to Texas?",
      answer: "Florida to Texas (1,150 miles) costs $850 to $1,100 on open transport depending on specific origin and destination cities. Enclosed transport adds 50–70%."
    },
    {
      question: "What is the cheapest way to ship a car from Florida?",
      answer: "Open transport during off-peak months (June–August) with a flexible 3–5 day pickup window is the lowest-cost option. Terminal-to-terminal service can save an additional 10–15%."
    },
    {
      question: "How long does it take to ship a car from Florida to New York?",
      answer: "Florida to New York (1,280 miles) typically takes 3–5 days in transit, plus a 1–3 day pickup window. Total door-to-door time is usually 4–8 days."
    },
    {
      question: "Is door-to-door auto transport available in Florida?",
      answer: "Yes — we offer door-to-door service in all 67 Florida counties, including rural areas like the Florida Keys and Panhandle. Pickup in Miami, Tampa, Orlando, and Jacksonville is often available within 24 hours."
    },
    {
      question: "What cities in Florida do you serve?",
      answer: "We serve every ZIP code in Florida. High-volume cities include Miami, Fort Lauderdale, West Palm Beach, Boca Raton, Naples, Fort Myers, Tampa, Orlando, St. Petersburg, Sarasota, Jacksonville, Tallahassee, and Pensacola."
    },
    {
      question: "Do you offer military car shipping from Florida bases?",
      answer: "Yes — we coordinate PCS moves from Naval Station Jacksonville, Naval Air Station Pensacola, MacDill AFB (Tampa), Patrick SFB (Space Coast), and Homestead ARB (Miami). Military discounts and PCS order scheduling are available."
    },
    {
      question: "What is the best time of year to ship a car from Florida?",
      answer: "Best rates occur June through August (after spring snowbird migration and before fall snowbird season). Most expensive periods are March–May (northbound snowbirds) and September–October (southbound snowbirds)."
    },
    {
      question: "Can I ship a non-running car from Florida?",
      answer: "Yes — we handle inoperable vehicles from any Florida location using winch-equipped carriers. Non-running vehicles cost $200–$350 more than standard rates."
    },
    {
      question: "Do I need to remove my SunPass before shipping?",
      answer: "Yes — remove your SunPass transponder prior to pickup to prevent overhead toll gantries from reading the transponder while your car is on the transport trailer."
    },
    {
      question: "How much does it cost per mile to ship a car from Florida?",
      answer: "Short hauls (<500 mi) cost $1.00–$1.60/mile. Medium hauls (500–1,500 mi) cost $0.70–$1.00/mile. Long hauls (>1,500 mi) cost $0.50–$0.75/mile."
    }
  ]
};
