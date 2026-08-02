import { StateData } from "@/types/location";

export const newYorkData: StateData = {
  name: "New York",
  slug: "new-york",
  abbreviation: "NY",
  heroTitle: "New York Car Shipping Services | Door-to-Door Auto Transport",
  heroSubtitle: "Ship your vehicle to or from New York with top-rated, bonded & insured carriers. Direct door-to-door shipping for NYC boroughs, Long Island, Westchester, and Upstate NY.",
  metaTitle: "New York Car Shipping | Direct Auto Transport Services",
  metaDescription: "Professional New York car shipping services. Compare open & enclosed auto transport rates in NYC, Buffalo, Rochester, and Albany. Zero deposit policy.",
  canonical: "https://www.americacartransport.com/locations/new-york",
  
  population: "19.6 Million",
  capital: "Albany",
  majorCities: [
    { name: "New York City", slug: "new-york-city", population: "8.3M", isHub: true },
    { name: "Buffalo", slug: "buffalo", population: "275K", isHub: true },
    { name: "Rochester", slug: "rochester", population: "210K", isHub: true },
    { name: "Yonkers", slug: "yonkers", population: "210K", isHub: false },
    { name: "Syracuse", slug: "syracuse", population: "145K", isHub: false },
    { name: "Albany", slug: "albany", population: "100K", isHub: true }
  ],
  
  majorInterstates: ["I-95", "I-87", "I-90 (NYS Thruway)", "I-80", "I-81"],
  majorPorts: ["Port of New York & New Jersey", "Port of Albany"],
  primaryRailHubs: ["CSX Selkirk Yard (Albany)", "Norfolk Southern Croxton Terminal"],
  averageDistanceMiles: 1200,
  averageTransitDays: "3-6 Days",
  averagePricePerMile: "$0.95 - $1.35",
  
  climateNotes: "Upstate NY experiences lake-effect snow and heavy freezing weather in winter, requiring vigilant transit routing. NYC traffic restrictions mandate nearby meeting points for large 75ft carriers.",
  seasonality: "Huge snowbird surges in autumn (NY to FL) and spring (FL to NY), alongside summer student relocations to Upstate colleges.",
  peakMonths: "May through October & November Snowbird Surge",
  carShippingDemand: "Extremely High",
  
  stateOverview: "New York is the financial and population capital of the Northeast. Shipping vehicles out of the Tri-State region connects major corridors heading south to Florida and west to California and Texas.",
  whyShipHere: "High population density means continuous carrier availability. For narrow NYC borough streets, drivers coordinate convenient meeting spots nearby such as shopping center parking lots.",
  openVsEnclosedNotes: "Enclosed shipping is heavily utilized in NYC and Westchester County for exotic sports cars, classic luxury vehicles, and winter protection against road salt.",
  
  popularRoutesOut: [
    { originCity: "New York, NY", destCity: "Miami", destState: "FL", distanceMiles: 1280, openPriceRange: "$920 - $1,250", enclosedPriceRange: "$1,450 - $1,850", transitDays: "3-5 Days" },
    { originCity: "New York, NY", destCity: "Los Angeles", destState: "CA", distanceMiles: 2790, openPriceRange: "$1,350 - $1,750", enclosedPriceRange: "$2,100 - $2,700", transitDays: "6-8 Days" }
  ],
  popularRoutesIn: [
    { originCity: "Miami, FL", destCity: "New York", destState: "NY", distanceMiles: 1280, openPriceRange: "$850 - $1,150", enclosedPriceRange: "$1,350 - $1,750", transitDays: "3-4 Days" },
    { originCity: "Los Angeles, CA", destCity: "New York", destState: "NY", distanceMiles: 2790, openPriceRange: "$1,350 - $1,750", enclosedPriceRange: "$2,100 - $2,700", transitDays: "6-8 Days" }
  ],
  
  faqs: [
    {
      question: "Can a 75-foot auto carrier deliver to my street in New York City?",
      answer: "Due to tight turns, low bridge clearances, and weight limits in Manhattan and Brooklyn, drivers often arrange pickup/delivery at a nearby accessible location like a wide plaza or parking lot."
    }
  ],
  
  fmcsaLicense: "MC #1098472",
  usdotNumber: "3849102"
};
