import { StateData } from "@/types/location";

export const northCarolinaData: StateData = {
  name: "North Carolina",
  slug: "north-carolina",
  abbreviation: "NC",
  heroTitle: "North Carolina Car Shipping Services | Door-to-Door Auto Transport",
  heroSubtitle: "Ship your vehicle safely to or from North Carolina. Direct door-to-door car transport in Charlotte, Raleigh, Greensboro, and Wilmington with zero deposit.",
  metaTitle: "North Carolina Car Shipping | Direct Auto Transport Services",
  metaDescription: "Reliable North Carolina car shipping services. Compare open & enclosed auto transport quotes in Charlotte, Raleigh, and Greensboro. USDOT #3849102.",
  canonical: "https://www.americacartransport.com/locations/north-carolina",
  
  population: "10.7 Million",
  capital: "Raleigh",
  majorCities: [
    { name: "Charlotte", slug: "charlotte", population: "895K", isHub: true },
    { name: "Raleigh", slug: "raleigh", population: "475K", isHub: true },
    { name: "Greensboro", slug: "greensboro", population: "300K", isHub: true },
    { name: "Durham", slug: "durham", population: "285K", isHub: false },
    { name: "Winston-Salem", slug: "winston-salem", population: "250K", isHub: false },
    { name: "Fayetteville", slug: "fayetteville", population: "210K", isHub: true },
    { name: "Wilmington", slug: "wilmington", population: "120K", isHub: false }
  ],
  
  majorInterstates: ["I-95", "I-85", "I-40", "I-77"],
  majorPorts: ["Port of Wilmington", "Port of Morehead City"],
  primaryRailHubs: ["Norfolk Southern Charlotte Regional Hub", "CSX Rocky Mount Terminal"],
  averageDistanceMiles: 1000,
  averageTransitDays: "3-5 Days",
  averagePricePerMile: "$0.90 - $1.25",
  
  climateNotes: "Mild climate overall. Hurricane season can occasionally affect coastal routes near Wilmington, but mainland I-85/I-40 corridors run year-round without disruption.",
  seasonality: "Heavy military relocations near Fort Liberty (Fayetteville) and Camp Lejeune, alongside Research Triangle tech moves.",
  peakMonths: "May through October",
  carShippingDemand: "High",
  
  stateOverview: "North Carolina is a major financial, tech, and military transport corridor along the East Coast.",
  whyShipHere: "Crucial junctions (I-85, I-95, I-40) deliver high carrier staging density in Charlotte and Raleigh.",
  openVsEnclosedNotes: "Open carriers are ideal for standard cars. Enclosed haulers serve NASCAR race shops around Charlotte and classic car collectors in Raleigh.",
  
  popularRoutesOut: [
    { originCity: "Charlotte, NC", destCity: "Miami", destState: "FL", distanceMiles: 720, openPriceRange: "$590 - $780", enclosedPriceRange: "$920 - $1,180", transitDays: "2-3 Days" },
    { originCity: "Raleigh, NC", destCity: "New York", destState: "NY", distanceMiles: 500, openPriceRange: "$480 - $650", enclosedPriceRange: "$750 - $980", transitDays: "1-2 Days" }
  ],
  popularRoutesIn: [
    { originCity: "Los Angeles, CA", destCity: "Charlotte", destState: "NC", distanceMiles: 2400, openPriceRange: "$1,250 - $1,580", enclosedPriceRange: "$1,880 - $2,400", transitDays: "5-7 Days" }
  ],
  
  faqs: [
    {
      question: "How fast can I get a car shipped between North Carolina and New York?",
      answer: "Direct transport along I-95 between North Carolina and New York takes only 1 to 2 days."
    }
  ],
  
  fmcsaLicense: "MC #1098472",
  usdotNumber: "3849102"
};
