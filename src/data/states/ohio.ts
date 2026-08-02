import { StateData } from "@/types/location";

export const ohioData: StateData = {
  name: "Ohio",
  slug: "ohio",
  abbreviation: "OH",
  heroTitle: "Ohio Car Shipping Services | Door-to-Door Auto Transport",
  heroSubtitle: "Ship your car to or from Ohio safely. Direct door-to-door auto transport in Columbus, Cleveland, Cincinnati, and Toledo with zero deposit.",
  metaTitle: "Ohio Car Shipping | Direct Auto Transport Services",
  metaDescription: "Top-rated Ohio car shipping services. Compare open & enclosed auto transport rates in Columbus, Cleveland, and Cincinnati. USDOT #3849102.",
  canonical: "https://www.americacartransport.com/locations/ohio",
  
  population: "11.8 Million",
  capital: "Columbus",
  majorCities: [
    { name: "Columbus", slug: "columbus", population: "905K", isHub: true },
    { name: "Cleveland", slug: "cleveland", population: "365K", isHub: true },
    { name: "Cincinnati", slug: "cincinnati", population: "310K", isHub: true },
    { name: "Toledo", slug: "toledo", population: "270K", isHub: false },
    { name: "Akron", slug: "akron", population: "190K", isHub: false },
    { name: "Dayton", slug: "dayton", population: "135K", isHub: false }
  ],
  
  majorInterstates: ["I-70", "I-71", "I-75", "I-80 (Ohio Turnpike)", "I-90"],
  majorPorts: ["Port of Cleveland", "Port of Toledo"],
  primaryRailHubs: ["Norfolk Southern Rickenbacker Intermodal (Columbus)", "CSX Northwest Ohio Terminal"],
  averageDistanceMiles: 1050,
  averageTransitDays: "3-5 Days",
  averagePricePerMile: "$0.85 - $1.20",
  
  climateNotes: "Winter lake-effect snow along Lake Erie (Cleveland/Toledo) requires experienced drivers and weather-monitored scheduling.",
  seasonality: "Steady year-round Midwest automotive manufacturing and dealership logistics.",
  peakMonths: "May through October",
  carShippingDemand: "High",
  
  stateOverview: "Ohio is the manufacturing heart of the Midwest, positioned within a 1-day drive of 60% of the US population.",
  whyShipHere: "Crucial interstate junctions (I-70, I-75, I-80) provide high carrier density and competitive pricing.",
  openVsEnclosedNotes: "Open multi-car haulers carry standard cars. Enclosed transport is popular for collector cars in Cleveland and Cincinnati.",
  
  popularRoutesOut: [
    { originCity: "Columbus, OH", destCity: "Miami", destState: "FL", distanceMiles: 1080, openPriceRange: "$790 - $1,020", enclosedPriceRange: "$1,220 - $1,550", transitDays: "3-4 Days" },
    { originCity: "Cleveland, OH", destCity: "Dallas", destState: "TX", distanceMiles: 1180, openPriceRange: "$820 - $1,080", enclosedPriceRange: "$1,280 - $1,620", transitDays: "3-4 Days" }
  ],
  popularRoutesIn: [
    { originCity: "Los Angeles, CA", destCity: "Columbus", destState: "OH", distanceMiles: 2250, openPriceRange: "$1,180 - $1,480", enclosedPriceRange: "$1,800 - $2,300", transitDays: "5-6 Days" }
  ],
  
  faqs: [
    {
      question: "How long does car transport take between Ohio and Florida?",
      answer: "Direct car shipping along I-75 between Ohio and Florida takes 3 to 4 days."
    }
  ],
  
  fmcsaLicense: "MC #1098472",
  usdotNumber: "3849102"
};
