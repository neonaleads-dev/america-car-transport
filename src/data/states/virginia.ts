import { StateData } from "@/types/location";

export interface LocalizedReview {
  author: string;
  location: string;
  route: string;
  rating: number;
  date: string;
  comment: string;
}

export interface VirginiaStateData extends StateData {
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

export const virginiaData: VirginiaStateData = {
  name: "Virginia",
  slug: "virginia",
  abbreviation: "VA",
  heroTitle: "Virginia Car Shipping Cost 2026 – Instant Quotes from $550 (No Deposit)",
  heroSubtitle: "Real 2026 pricing across all 95 Virginia counties. Door-to-door auto transport for military PCS moves, college relocations, and private sales with zero upfront deposit.",
  metaTitle: "Virginia Car Shipping Cost 2026 | Instant Quote – No Deposit",
  metaDescription: "Ship your car to or from Virginia from $550. Get instant 2026 pricing by distance, vehicle type, and transport method. Zero upfront deposit. Door-to-door service.",
  canonical: "https://www.americacartransport.com/locations/virginia",
  
  population: "8.68 Million",
  capital: "Richmond",
  majorCities: [
    { name: "Virginia Beach", slug: "virginia-beach", population: "450K", isHub: true },
    { name: "Norfolk", slug: "norfolk", population: "238K", isHub: true },
    { name: "Chesapeake", slug: "chesapeake", population: "252K", isHub: true },
    { name: "Arlington", slug: "arlington", population: "238K", isHub: true },
    { name: "Richmond", slug: "richmond", population: "226K", isHub: true },
    { name: "Alexandria", slug: "alexandria", population: "155K", isHub: true },
    { name: "Hampton", slug: "hampton", population: "137K", isHub: false },
    { name: "Roanoke", slug: "roanoke", population: "100K", isHub: true },
    { name: "Fredericksburg", slug: "fredericksburg", population: "29K", isHub: true },
    { name: "Manassas", slug: "manassas", population: "42K", isHub: true }
  ],
  
  majorInterstates: ["I-95", "I-64", "I-81", "I-66", "I-495"],
  majorPorts: ["Port of Virginia (Norfolk International Terminals)", "Portsmouth Marine Terminal", "Richmond Intermodal Terminal"],
  primaryRailHubs: ["Norfolk Southern Lamberts Point", "CSX Acca Yard Richmond"],
  averageDistanceMiles: 850,
  averageTransitDays: "3-5 Days",
  averagePricePerMile: "$0.70 - $1.20",
  
  climateNotes: "Coastal moisture and salt air in Hampton Roads warrant enclosed transport for classic and high-value cars. Winter weather in the Shenandoah Valley (I-81) can require tire chain controls during cold snaps.",
  seasonality: "Heavy southbound demand to Florida during fall snowbird season (Oct–Nov) and northbound return (Mar–May). Peak military PCS moves occur from June through August.",
  peakMonths: "May through October",
  carShippingDemand: "High",
  
  stateOverview: "America Car Transport provides door-to-door vehicle shipping across all 95 Virginia counties. Connecting Northern Virginia (Arlington, Alexandria, Fairfax) with Hampton Roads (Norfolk, Virginia Beach) and Richmond, our insured carrier network operates daily dispatches along I-95, I-64, and I-81.",
  whyShipHere: "High carrier concentration along the I-95 Mid-Atlantic corridor provides fast 24–48 hour pickup windows in metro areas and competitive nationwide shipping rates.",
  openVsEnclosedNotes: "Open transport is the most popular, cost-effective choice for standard sedans and SUVs in Virginia. Enclosed shipping is recommended for luxury, classic, or military deployment storage.",
  
  stats: {
    shippedCount: "55,697 vehicles shipped",
    averageRating: "4.8 / 5.0",
    countiesServed: 95,
    pickupWindow: "1–3 Days",
    upfrontDeposit: "$0 Deposit"
  },

  popularRoutesOut: [
    { originCity: "Virginia", destCity: "Miami", destState: "FL", distanceMiles: 950, openPriceRange: "$500 - $900", enclosedPriceRange: "$850 - $1,350", transitDays: "3-5 Days" },
    { originCity: "Virginia", destCity: "Dallas", destState: "TX", distanceMiles: 1300, openPriceRange: "$750 - $1,300", enclosedPriceRange: "$1,125 - $1,950", transitDays: "4-7 Days" },
    { originCity: "Virginia", destCity: "Los Angeles", destState: "CA", distanceMiles: 2650, openPriceRange: "$1,100 - $1,700", enclosedPriceRange: "$1,700 - $2,550", transitDays: "7-10 Days" },
    { originCity: "Virginia", destCity: "Chicago", destState: "IL", distanceMiles: 750, openPriceRange: "$650 - $1,100", enclosedPriceRange: "$975 - $1,650", transitDays: "3-5 Days" },
    { originCity: "Virginia", destCity: "New York", destState: "NY", distanceMiles: 450, openPriceRange: "$450 - $800", enclosedPriceRange: "$750 - $1,200", transitDays: "2-4 Days" }
  ],
  popularRoutesIn: [
    { originCity: "Miami, FL", destCity: "Virginia", destState: "VA", distanceMiles: 950, openPriceRange: "$500 - $900", enclosedPriceRange: "$850 - $1,350", transitDays: "3-5 Days" },
    { originCity: "Dallas, TX", destCity: "Virginia", destState: "VA", distanceMiles: 1300, openPriceRange: "$750 - $1,300", enclosedPriceRange: "$1,125 - $1,950", transitDays: "4-7 Days" },
    { originCity: "Los Angeles, CA", destCity: "Virginia", destState: "VA", distanceMiles: 2650, openPriceRange: "$1,100 - $1,700", enclosedPriceRange: "$1,700 - $2,550", transitDays: "7-10 Days" },
    { originCity: "Detroit, MI", destCity: "Virginia", destState: "VA", distanceMiles: 650, openPriceRange: "$650 - $1,100", enclosedPriceRange: "$975 - $1,650", transitDays: "3-5 Days" },
    { originCity: "Charlotte, NC", destCity: "Virginia", destState: "VA", distanceMiles: 300, openPriceRange: "$300 - $600", enclosedPriceRange: "$550 - $900", transitDays: "1-3 Days" }
  ],
  intraStateRoutes: [
    { originCity: "Norfolk, VA", destCity: "Arlington", destState: "VA", distanceMiles: 200, openPriceRange: "$250 - $400", enclosedPriceRange: "$450 - $600", transitDays: "1 Day" },
    { originCity: "Richmond, VA", destCity: "Roanoke", destState: "VA", distanceMiles: 170, openPriceRange: "$250 - $450", enclosedPriceRange: "$450 - $650", transitDays: "1 Day" }
  ],

  militaryBaseCount: 27,
  auctionHubs: ["Manheim Fredericksburg", "Copart Manassas", "IAA Manassas"],

  dmvRequirements: {
    registrationWindowDays: 30,
    liabilityLimits: "25/50/20",
    inspectionType: "Virginia Safety Inspection (Emissions required in NoVA)",
    ezPassTip: "Remove your E-ZPass transponder prior to pickup to prevent toll gantries from reading the vehicle while on the transport trailer."
  },

  seasonalPricing: [
    { season: "Jan–Feb", demandLevel: "Low", priceImpact: "-10% to -15%", bestFor: "Budget-conscious moves" },
    { season: "Mar–May", demandLevel: "High (Snowbird return)", priceImpact: "+10% to +20%", bestFor: "Florida → Virginia moves" },
    { season: "Jun–Aug", demandLevel: "Very High (PCS, College)", priceImpact: "+15% to +25%", bestFor: "Military & student moves" },
    { season: "Sep–Nov", demandLevel: "Low–Moderate", priceImpact: "-5% to -10%", bestFor: "Best overall rates" },
    { season: "Dec", demandLevel: "Moderate", priceImpact: "Baseline", bestFor: "Holiday relocations" }
  ],

  localizedReviews: [
    {
      author: "Mark T.",
      location: "Norfolk, VA",
      route: "Norfolk, VA → Dallas, TX",
      rating: 5,
      date: "February 2026",
      comment: "Shipped my 2022 F-150 from Norfolk to Dallas for $1,140. Driver called before pickup, arrived on schedule, and delivered in 4 days with zero scratches!"
    },
    {
      author: "Sarah L.",
      location: "Roanoke, VA",
      route: "Roanoke, VA → Boston, MA",
      rating: 5,
      date: "January 2026",
      comment: "Used enclosed transport for my 2020 Porsche from Roanoke to Boston ($1,320). Total peace of mind, fully insured carrier, and zero upfront deposit required."
    },
    {
      author: "James R.",
      location: "Quantico, VA",
      route: "Quantico, VA → San Diego, CA",
      rating: 5,
      date: "January 2026",
      comment: "Military PCS move from Quantico to San Diego ($1,680 enclosed). Picked up in under 24 hours and made my relocation seamless."
    }
  ],

  faqs: [
    {
      question: "How much does it cost to ship a car from Virginia to Florida?",
      answer: "A Virginia to Florida move (800–1,200 miles) typically costs $500 to $900 on open transport for a standard sedan, with enclosed transport adding 50–70%. Peak snowbird season (Oct–Nov, Mar–May) can add 10–20%."
    },
    {
      question: "How much does it cost to ship a car from Virginia to California?",
      answer: "Virginia to California (2,400–2,900 miles) runs $1,100 to $1,700 on open transport, or $1,700 to $2,550 for enclosed shipping. Transit time is 7–10 days."
    },
    {
      question: "How much does it cost to ship a car from Virginia to Texas?",
      answer: "Virginia to Texas (1,200–1,600 miles) costs $750 to $1,300 on open transport depending on specific origin and destination cities. Enclosed transport adds 50–70%."
    },
    {
      question: "What is the cheapest way to ship a car from Virginia?",
      answer: "Open transport during off-peak months (Jan–Feb, Sep–Oct) with a flexible 3–5 day pickup window is the lowest-cost option. Terminal-to-terminal service can save an additional 10–15%."
    },
    {
      question: "How long does it take to ship a car from Virginia to New York?",
      answer: "Virginia to New York (350–650 miles) typically takes 2–4 days in transit, plus a 1–3 day pickup window. Total door-to-door time is usually 3–7 days."
    },
    {
      question: "Is door-to-door auto transport available in Virginia?",
      answer: "Yes — we offer door-to-door service in all 95 Virginia counties, including rural areas like the Eastern Shore and Southwest VA mountain counties. Pickup in NoVA and Hampton Roads is often available within 24 hours."
    },
    {
      question: "What cities in Virginia do you serve?",
      answer: "We serve every ZIP code in Virginia. High-volume cities include Arlington, Alexandria, Fairfax, Richmond, Norfolk, Virginia Beach, Chesapeake, Hampton, Newport News, Charlottesville, Roanoke, Lynchburg, Manassas, Fredericksburg, Williamsburg, and Harrisonburg."
    },
    {
      question: "Do you offer military car shipping from Virginia bases?",
      answer: "Yes — we coordinate PCS moves from Naval Station Norfolk, Joint Base Langley-Eustis, Marine Corps Base Quantico, Fort Belvoir, Naval Air Station Oceana, and the Pentagon. Military discounts and PCS order scheduling are available."
    },
    {
      question: "What is the best time of year to ship a car from Virginia?",
      answer: "Best rates occur September through November (after summer relocations and before snowbird migration). Most expensive periods are May through August (peak PCS and college moves) and snowbird season for Florida routes."
    },
    {
      question: "Can I ship a non-running car from Virginia?",
      answer: "Yes — we handle inoperable vehicles from any Virginia location using winch-equipped carriers. Non-running vehicles cost $200–$350 more than standard rates."
    },
    {
      question: "Do I need to remove my E-ZPass before shipping?",
      answer: "Yes — remove your E-ZPass transponder prior to pickup to prevent overhead toll gantries from reading the transponder while your car is on the transport trailer."
    },
    {
      question: "How much does it cost per mile to ship a car from Virginia?",
      answer: "Short hauls (<500 mi) cost $1.20–$2.20/mile. Medium hauls (500–1,500 mi) cost $0.70–$1.00/mile. Long hauls (>1,500 mi) cost $0.40–$0.70/mile."
    }
  ]
};
