import { StateData } from "@/types/location";

export const pennsylvaniaData: StateData = {
  name: "Pennsylvania",
  slug: "pennsylvania",
  abbreviation: "PA",
  heroTitle: "Pennsylvania Car Shipping Services | Door-to-Door Auto Transport",
  heroSubtitle: "Ship your vehicle safely to or from Pennsylvania. Direct door-to-door auto shipping serving Philadelphia, Pittsburgh, Allentown, and Harrisburg with zero deposit.",
  metaTitle: "Pennsylvania Car Shipping | Direct Auto Transport Services",
  metaDescription: "Top-rated Pennsylvania car shipping services. Compare open & enclosed auto transport quotes in Philadelphia, Pittsburgh, and Harrisburg. USDOT #3849102.",
  canonical: "https://americacartransport.com/locations/pennsylvania",
  
  population: "13.0 Million",
  capital: "Harrisburg",
  majorCities: [
    { name: "Philadelphia", slug: "philadelphia", population: "1.5M", isHub: true },
    { name: "Pittsburgh", slug: "pittsburgh", population: "300K", isHub: true },
    { name: "Allentown", slug: "allentown", population: "125K", isHub: false },
    { name: "Erie", slug: "erie", population: "94K", isHub: false },
    { name: "Reading", slug: "reading", population: "95K", isHub: false },
    { name: "Harrisburg", slug: "harrisburg", population: "50K", isHub: true }
  ],
  
  majorInterstates: ["I-95", "I-76 (PA Turnpike)", "I-80", "I-81", "I-70"],
  majorPorts: ["Port of Philadelphia (PhilaPort)"],
  primaryRailHubs: ["Norfolk Southern Rutherford Yard (Harrisburg)", "CSX Philadelphia Terminal"],
  averageDistanceMiles: 1100,
  averageTransitDays: "3-5 Days",
  averagePricePerMile: "$0.90 - $1.30",
  
  climateNotes: "Winter freeze and mountain snow across the Appalachians (I-76 & I-80) require experienced drivers and winter chain gear.",
  seasonality: "High East Coast corridor volume year-round, plus heavy autumn/spring snowbird relocations to Florida.",
  peakMonths: "May through October",
  carShippingDemand: "High",
  
  stateOverview: "Pennsylvania connects the Mid-Atlantic to the Midwest. The I-95 corridor through Philadelphia and I-76 across to Pittsburgh see non-stop auto transport traffic.",
  whyShipHere: "Central Mid-Atlantic location offers quick carrier dispatch windows and affordable per-mile rates.",
  openVsEnclosedNotes: "Open transport is most economical for daily vehicles. Enclosed trailers protect classic cars from salt corrosion during PA winters.",
  
  popularRoutesOut: [
    { originCity: "Philadelphia, PA", destCity: "Miami", destState: "FL", distanceMiles: 1020, openPriceRange: "$780 - $1,020", enclosedPriceRange: "$1,200 - $1,500", transitDays: "3-4 Days" },
    { originCity: "Pittsburgh, PA", destCity: "Tampa", destState: "FL", distanceMiles: 1010, openPriceRange: "$790 - $1,030", enclosedPriceRange: "$1,220 - $1,520", transitDays: "3-4 Days" }
  ],
  popularRoutesIn: [
    { originCity: "Los Angeles, CA", destCity: "Philadelphia", destState: "PA", distanceMiles: 2700, openPriceRange: "$1,300 - $1,650", enclosedPriceRange: "$2,000 - $2,600", transitDays: "6-8 Days" }
  ],
  
  faqs: [
    {
      question: "How long does car shipping between Philadelphia and Florida take?",
      answer: "Direct car shipping along the I-95 corridor between Philadelphia and Florida takes approximately 3 to 4 days."
    }
  ],
  
  fmcsaLicense: "MC #1098472",
  usdotNumber: "3849102"
};
