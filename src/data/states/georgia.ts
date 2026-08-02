import { StateData } from "@/types/location";

export const georgiaData: StateData = {
  name: "Georgia",
  slug: "georgia",
  abbreviation: "GA",
  heroTitle: "Georgia Car Shipping Services | Door-to-Door Auto Transport",
  heroSubtitle: "Ship your vehicle safely to or from Georgia. Direct door-to-door car transport in Atlanta, Savannah, Augusta, and Macon with zero upfront deposit.",
  metaTitle: "Georgia Car Shipping | Direct Auto Transport Services",
  metaDescription: "Reliable Georgia car shipping services. Get instant open & enclosed auto transport quotes for Atlanta, Savannah, and Augusta. FMCSA licensed.",
  canonical: "https://www.americacartransport.com/locations/georgia",
  
  population: "11.0 Million",
  capital: "Atlanta",
  majorCities: [
    { name: "Atlanta", slug: "atlanta", population: "500K", isHub: true },
    { name: "Augusta", slug: "augusta", population: "200K", isHub: false },
    { name: "Columbus", slug: "columbus", population: "205K", isHub: false },
    { name: "Macon", slug: "macon", population: "155K", isHub: false },
    { name: "Savannah", slug: "savannah", population: "148K", isHub: true },
    { name: "Athens", slug: "athens", population: "125K", isHub: false }
  ],
  
  majorInterstates: ["I-75", "I-85", "I-20", "I-95", "I-16"],
  majorPorts: ["Port of Savannah (Garden City Terminal)", "Port of Brunswick (Ro-Ro Vehicle Hub)"],
  primaryRailHubs: ["Norfolk Southern Inman Yard (Atlanta)", "CSX Tilford Yard"],
  averageDistanceMiles: 950,
  averageTransitDays: "2-4 Days",
  averagePricePerMile: "$0.90 - $1.25",
  
  climateNotes: "Mild Southern winters, but summer heat and heavy thunder showers require vigilant tiedown inspections on long-haul routes.",
  seasonality: "Atlanta is the main freight junction of the Southeast, experiencing heavy year-round traffic to Florida, Texas, and New York.",
  peakMonths: "May through October",
  carShippingDemand: "Extremely High",
  
  stateOverview: "Georgia is the logistical epicenter of the American Southeast. Port of Brunswick handles massive vehicle import/export volumes, while Atlanta's interstate web connects Florida bound traffic to the rest of the nation.",
  whyShipHere: "Constant auto carrier movement through Metro Atlanta makes scheduling fast pickups simple and cost-effective.",
  openVsEnclosedNotes: "Open transport handles 85%+ of auto shipments in Georgia. Enclosed haulers are popular for luxury vehicles in Buckhead and classic cars attending Savannah auto events.",
  
  popularRoutesOut: [
    { originCity: "Atlanta, GA", destCity: "Miami", destState: "FL", distanceMiles: 660, openPriceRange: "$550 - $720", enclosedPriceRange: "$850 - $1,100", transitDays: "2-3 Days" },
    { originCity: "Atlanta, GA", destCity: "New York", destState: "NY", distanceMiles: 870, openPriceRange: "$680 - $890", enclosedPriceRange: "$1,050 - $1,350", transitDays: "2-3 Days" },
    { originCity: "Atlanta, GA", destCity: "Dallas", destState: "TX", distanceMiles: 780, openPriceRange: "$620 - $820", enclosedPriceRange: "$950 - $1,250", transitDays: "2-3 Days" }
  ],
  popularRoutesIn: [
    { originCity: "Los Angeles, CA", destCity: "Atlanta", destState: "GA", distanceMiles: 2170, openPriceRange: "$1,150 - $1,450", enclosedPriceRange: "$1,750 - $2,250", transitDays: "5-6 Days" }
  ],
  
  faqs: [
    {
      question: "How long does car shipping between Atlanta and New York take?",
      answer: "Direct auto transport along the I-85/I-95 corridor between Atlanta and New York takes approximately 2 to 3 days."
    }
  ],
  
  fmcsaLicense: "MC #1098472",
  usdotNumber: "3849102"
};
