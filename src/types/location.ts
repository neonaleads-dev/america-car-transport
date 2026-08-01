export interface StateRouteExample {
  originCity: string;
  destCity: string;
  destState: string;
  distanceMiles: number;
  openPriceRange: string;
  enclosedPriceRange: string;
  transitDays: string;
}

export interface StateFAQItem {
  question: string;
  answer: string;
}

export interface StateCity {
  name: string;
  slug: string;
  population: string;
  isHub: boolean;
}

export interface StateData {
  // Identity & Metadata
  name: string;
  slug: string;
  abbreviation: string;
  heroTitle: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  
  // Demographics & Geo
  population: string;
  capital: string;
  majorCities: StateCity[];
  
  // Logistics & Infrastructure (EAV)
  majorInterstates: string[];
  majorPorts: string[];
  primaryRailHubs: string[];
  averageDistanceMiles: number;
  averageTransitDays: string;
  averagePricePerMile: string;
  
  // Climate & Seasonality
  climateNotes: string;
  seasonality: string;
  peakMonths: string;
  carShippingDemand: "Extremely High" | "High" | "Moderate";
  
  // Localized Content
  stateOverview: string;
  whyShipHere: string;
  openVsEnclosedNotes: string;
  
  // Worked Examples & Route Matrix
  popularRoutesOut: StateRouteExample[];
  popularRoutesIn: StateRouteExample[];
  
  // FAQs & Reviews
  faqs: StateFAQItem[];
  
  // EEAT & Licensing
  fmcsaLicense: string;
  usdotNumber: string;
}
