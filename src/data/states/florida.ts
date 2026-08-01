import { StateData } from "@/types/location";

export const floridaData: StateData = {
  name: "Florida",
  slug: "florida",
  abbreviation: "FL",
  heroTitle: "Florida Car Shipping Services | Door-to-Door Auto Transport",
  heroSubtitle: "Ship your vehicle to or from Florida with trusted, FMCSA-licensed carriers. Specializing in East Coast snowbird routes, Orlando relocations, and Miami vehicle logistics with zero upfront deposit.",
  metaTitle: "Florida Car Shipping | Direct Auto Transport Services",
  metaDescription: "Top-rated Florida car shipping services. Get instant quotes for door-to-door auto transport in Miami, Tampa, Orlando, and Jacksonville. Bonded & insured network.",
  canonical: "https://americacartransport.com/locations/florida",
  
  population: "22.6 Million",
  capital: "Tallahassee",
  majorCities: [
    { name: "Miami", slug: "miami", population: "450K", isHub: true },
    { name: "Tampa", slug: "tampa", population: "390K", isHub: true },
    { name: "Orlando", slug: "orlando", population: "310K", isHub: true },
    { name: "Jacksonville", slug: "jacksonville", population: "950K", isHub: true },
    { name: "Fort Lauderdale", slug: "fort-lauderdale", population: "180K", isHub: true },
    { name: "West Palm Beach", slug: "west-palm-beach", population: "120K", isHub: false },
    { name: "Naples", slug: "naples", population: "20K", isHub: false }
  ],
  
  majorInterstates: ["I-95", "I-75", "I-10", "I-4", "Florida's Turnpike"],
  majorPorts: ["Port of Miami", "Port Everglades (Ft. Lauderdale)", "JAXPORT (Jacksonville)"],
  primaryRailHubs: ["FEC Railway Bowden Yard (JAX)", "CSX Jacksonville Intermodal"],
  averageDistanceMiles: 1100,
  averageTransitDays: "3-5 Days",
  averagePricePerMile: "$0.90 - $1.30",
  
  climateNotes: "Florida's tropical climate brings heavy summer rainstorms and hurricane season (June to November). Transport carriers monitor severe weather alerts, but sunny year-round conditions make coastal driving smooth.",
  seasonality: "Massive seasonal snowbird migration: High southbound demand October–December (Northeast to FL) and massive northbound demand April–May (FL to NY/NJ/CT).",
  peakMonths: "April-May & October-December",
  carShippingDemand: "Extremely High",
  
  stateOverview: "Florida is the primary hub for East Coast vehicle shipping, driven heavily by seasonal snowbird movements between the Northeast/Midwest and the Sunshine State. With I-95 hugging the Atlantic coastline and I-75 serving the Gulf Coast, carrier availability in Florida is among the densest in the nation.",
  whyShipHere: "Because thousands of auto transport trucks travel I-95 and I-75 daily, auto shipping rates along the Florida peninsula are extremely competitive. Major staging hubs in Jacksonville, Orlando, Tampa, and Miami ensure fast dispatch windows year-round.",
  openVsEnclosedNotes: "Open carriers are ideal for standard vehicles traveling Florida's flat highways. Enclosed shipping is popular among snowbirds transporting classic luxury convertibles, exotics in Palm Beach, and antique cars to winter estates.",
  
  popularRoutesOut: [
    { originCity: "Miami, FL", destCity: "New York", destState: "NY", distanceMiles: 1280, openPriceRange: "$850 - $1,150", enclosedPriceRange: "$1,350 - $1,750", transitDays: "3-4 Days" },
    { originCity: "Tampa, FL", destCity: "Chicago", destState: "IL", distanceMiles: 1170, openPriceRange: "$820 - $1,080", enclosedPriceRange: "$1,280 - $1,600", transitDays: "3-4 Days" },
    { originCity: "Orlando, FL", destCity: "Philadelphia", destState: "PA", distanceMiles: 990, openPriceRange: "$750 - $980", enclosedPriceRange: "$1,150 - $1,450", transitDays: "2-3 Days" }
  ],
  popularRoutesIn: [
    { originCity: "New York, NY", destCity: "Miami", destState: "FL", distanceMiles: 1280, openPriceRange: "$920 - $1,250", enclosedPriceRange: "$1,450 - $1,850", transitDays: "3-5 Days" },
    { originCity: "Boston, MA", destCity: "Fort Lauderdale", destState: "FL", distanceMiles: 1480, openPriceRange: "$980 - $1,300", enclosedPriceRange: "$1,550 - $1,950", transitDays: "4-5 Days" }
  ],
  
  faqs: [
    {
      question: "When is the best time for snowbirds to book Florida car shipping?",
      answer: "We recommend locking in your transport dates 2–3 weeks in advance. Peak southbound migration runs October to December, while northbound peak runs April through May when rates fluctuate based on carrier availability."
    },
    {
      question: "How long does shipping a car from New York to Florida take?",
      answer: "Direct auto transport down the I-95 corridor between New York and Florida typically takes 3 to 5 days from pickup to delivery."
    },
    {
      question: "Can I ship personal belongings inside my vehicle to Florida?",
      answer: "Carriers allow up to 100 lbs of personal items in the trunk or below the window line at no extra cost, provided they are safely secured."
    }
  ],
  
  fmcsaLicense: "MC #1098472",
  usdotNumber: "3849102"
};
