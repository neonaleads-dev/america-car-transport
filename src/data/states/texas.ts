import { StateData } from "@/types/location";

export const texasData: StateData = {
  name: "Texas",
  slug: "texas",
  abbreviation: "TX",
  heroTitle: "Texas Car Shipping Services | Door-to-Door Auto Transport",
  heroSubtitle: "Ship your vehicle safely across Texas or nationwide. Bonded & insured auto transport with direct pickup in Houston, Dallas-Fort Worth, Austin, and San Antonio. Zero upfront deposit guaranteed.",
  metaTitle: "Texas Car Shipping | Direct Auto Transport Services",
  metaDescription: "Reliable Texas car shipping services. Compare open & enclosed auto transport rates in Houston, Dallas, Austin, and San Antonio. USDOT #3849102 licensed broker.",
  canonical: "https://www.americacartransport.com/locations/texas",
  
  population: "30.5 Million",
  capital: "Austin",
  majorCities: [
    { name: "Houston", slug: "houston", population: "2.3M", isHub: true },
    { name: "Dallas", slug: "dallas", population: "1.3M", isHub: true },
    { name: "Fort Worth", slug: "fort-worth", population: "950K", isHub: true },
    { name: "San Antonio", slug: "san-antonio", population: "1.4M", isHub: true },
    { name: "Austin", slug: "austin", population: "970K", isHub: true },
    { name: "El Paso", slug: "el-paso", population: "680K", isHub: false },
    { name: "Arlington", slug: "arlington", population: "390K", isHub: false }
  ],
  
  majorInterstates: ["I-10", "I-35", "I-45", "I-20", "I-30"],
  majorPorts: ["Port of Houston", "Port of Galveston", "Port of Corpus Christi"],
  primaryRailHubs: ["UP Dallas Intermodal Terminal", "BNSF Alliance Logistics Hub (DFW)"],
  averageDistanceMiles: 1300,
  averageTransitDays: "3-6 Days",
  averagePricePerMile: "$0.85 - $1.20",
  
  climateNotes: "Texas experiences mild winters but intense summer heat and sudden thunderstorm events. Carriers utilize air-conditioned sleeper cabs and heavy-duty tie-downs for smooth long-haul transits.",
  seasonality: "High year-round corporate relocation volume into Austin and Dallas-Fort Worth. Heavy inter-state trade along I-35 between San Antonio, Austin, DFW, and Oklahoma.",
  peakMonths: "May through October",
  carShippingDemand: "Extremely High",
  
  stateOverview: "Texas is the central crossroads of American logistics. Connecting the West Coast via I-10, the Midwest via I-35, and the East Coast via I-20, Texas hubs handle more vehicle transports than almost any other region.",
  whyShipHere: "With massive distribution hubs around Dallas-Fort Worth, Houston, and Austin, car haulers are constantly cycling through Texas. This dense carrier network means short wait times for pickup and affordable per-mile rates.",
  openVsEnclosedNotes: "Standard vehicles thrive on open multi-car haulers across Texas highways. Enclosed trailers are recommended for high-value trucks, luxury SUVs in Dallas, and sports cars bound for Austin tech hubs.",
  
  popularRoutesOut: [
    { originCity: "Dallas, TX", destCity: "Los Angeles", destState: "CA", distanceMiles: 1435, openPriceRange: "$920 - $1,180", enclosedPriceRange: "$1,400 - $1,800", transitDays: "3-5 Days" },
    { originCity: "Houston, TX", destCity: "Chicago", destState: "IL", distanceMiles: 1080, openPriceRange: "$780 - $1,020", enclosedPriceRange: "$1,200 - $1,550", transitDays: "3-4 Days" },
    { originCity: "Austin, TX", destCity: "Seattle", destState: "WA", distanceMiles: 2120, openPriceRange: "$1,150 - $1,480", enclosedPriceRange: "$1,750 - $2,250", transitDays: "5-6 Days" }
  ],
  popularRoutesIn: [
    { originCity: "Los Angeles, CA", destCity: "Dallas", destState: "TX", distanceMiles: 1435, openPriceRange: "$950 - $1,250", enclosedPriceRange: "$1,450 - $1,850", transitDays: "3-5 Days" },
    { originCity: "Miami, FL", destCity: "Houston", destState: "TX", distanceMiles: 1180, openPriceRange: "$800 - $1,050", enclosedPriceRange: "$1,250 - $1,600", transitDays: "3-4 Days" }
  ],
  
  faqs: [
    {
      question: "How long does it take to ship a car from Texas to California?",
      answer: "Auto transport between Texas (Dallas/Houston) and California (Los Angeles/Bay Area) typically takes 3 to 5 days once the carrier picks up your vehicle."
    },
    {
      question: "Can I ship an oversized truck or dually in Texas?",
      answer: "Yes! Texas is one of our highest-volume regions for shipping heavy-duty trucks, lifted pickups, and duallys. Be sure to specify vehicle modifications when requesting your quote."
    }
  ],
  
  fmcsaLicense: "MC #1098472",
  usdotNumber: "3849102"
};
