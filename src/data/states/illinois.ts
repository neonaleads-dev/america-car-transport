import { StateData } from "@/types/location";

export const illinoisData: StateData = {
  name: "Illinois",
  slug: "illinois",
  abbreviation: "IL",
  heroTitle: "Illinois Car Shipping Services | Door-to-Door Auto Transport",
  heroSubtitle: "Ship your car to or from Illinois with America's leading bonded & insured carriers. Direct door-to-door shipping in Chicago, Peoria, Rockford, and Springfield.",
  metaTitle: "Illinois Car Shipping | Direct Auto Transport Services",
  metaDescription: "Reliable Illinois car shipping services. Compare open & enclosed auto transport rates in Chicago, Rockford, and Peoria. Zero upfront deposit policy.",
  canonical: "https://www.americacartransport.com/locations/illinois",
  
  population: "12.5 Million",
  capital: "Springfield",
  majorCities: [
    { name: "Chicago", slug: "chicago", population: "2.7M", isHub: true },
    { name: "Aurora", slug: "aurora", population: "180K", isHub: false },
    { name: "Joliet", slug: "joliet", population: "150K", isHub: true },
    { name: "Naperville", slug: "naperville", population: "148K", isHub: false },
    { name: "Rockford", slug: "rockford", population: "146K", isHub: false },
    { name: "Peoria", slug: "peoria", population: "110K", isHub: false }
  ],
  
  majorInterstates: ["I-80", "I-90", "I-55", "I-57", "I-70"],
  majorPorts: ["Illinois International Port District (Chicago)"],
  primaryRailHubs: ["BNSF Logistics Park Chicago (Joliet)", "UP Global IV Intermodal Hub"],
  averageDistanceMiles: 1150,
  averageTransitDays: "3-5 Days",
  averagePricePerMile: "$0.85 - $1.20",
  
  climateNotes: "Midwest winters bring heavy snowfall and ice onto I-80 and I-90. Drivers use anti-icing procedures and monitored routing during winter months.",
  seasonality: "Heavy snowbird routes to Florida and Arizona in October-November, returning in April-May.",
  peakMonths: "May through October",
  carShippingDemand: "High",
  
  stateOverview: "Illinois and Chicagoland serve as the rail and highway center of North America. Interstate 80 and Interstate 90 carry thousands of auto transport loads daily.",
  whyShipHere: "Central geography provides extremely fast dispatch times and competitive pricing to all 48 lower states.",
  openVsEnclosedNotes: "Open multi-car haulers carry 85%+ of vehicles across Illinois. Enclosed carriers protect luxury and classic vehicles from winter road salt.",
  
  popularRoutesOut: [
    { originCity: "Chicago, IL", destCity: "Miami", destState: "FL", distanceMiles: 1380, openPriceRange: "$880 - $1,150", enclosedPriceRange: "$1,380 - $1,750", transitDays: "3-5 Days" },
    { originCity: "Chicago, IL", destCity: "Los Angeles", destState: "CA", distanceMiles: 2015, openPriceRange: "$1,100 - $1,400", enclosedPriceRange: "$1,700 - $2,200", transitDays: "5-6 Days" }
  ],
  popularRoutesIn: [
    { originCity: "Dallas, TX", destCity: "Chicago", destState: "IL", distanceMiles: 920, openPriceRange: "$720 - $950", enclosedPriceRange: "$1,100 - $1,400", transitDays: "2-3 Days" }
  ],
  
  faqs: [
    {
      question: "How long does shipping a car from Chicago to Florida take?",
      answer: "Direct car shipping between Chicago and Florida takes approximately 3 to 5 days once picked up."
    }
  ],
  
  };
