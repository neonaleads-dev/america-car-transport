import { StateData } from "@/types/location";

export const washingtonData: StateData = {
  name: "Washington",
  slug: "washington",
  abbreviation: "WA",
  heroTitle: "Washington Car Shipping Services | Door-to-Door Auto Transport",
  heroSubtitle: "Ship your vehicle safely to or from Washington state. Direct door-to-door auto transport serving Seattle, Tacoma, Spokane, and Bellevue with zero upfront deposit.",
  metaTitle: "Washington Car Shipping | Direct Auto Transport Services",
  metaDescription: "Top-rated Washington car shipping services. Compare open & enclosed auto transport rates in Seattle, Tacoma, and Spokane. FMCSA licensed broker.",
  canonical: "https://americacartransport.com/locations/washington",
  
  population: "7.8 Million",
  capital: "Olympia",
  majorCities: [
    { name: "Seattle", slug: "seattle", population: "740K", isHub: true },
    { name: "Spokane", slug: "spokane", population: "230K", isHub: true },
    { name: "Tacoma", slug: "tacoma", population: "220K", isHub: true },
    { name: "Vancouver", slug: "vancouver", population: "195K", isHub: false },
    { name: "Bellevue", slug: "bellevue", population: "150K", isHub: true }
  ],
  
  majorInterstates: ["I-5", "I-90", "I-82"],
  majorPorts: ["Port of Seattle", "Port of Tacoma (NW Seaport Alliance)"],
  primaryRailHubs: ["BNSF Seattle Intermodal", "UP Tacoma Hub"],
  averageDistanceMiles: 1550,
  averageTransitDays: "4-7 Days",
  averagePricePerMile: "$0.90 - $1.30",
  
  climateNotes: "Pacific Northwest rain requires clean tiedowns and protective car wraps for open carriers. Winter snow over Snoqualmie Pass (I-90) requires chain-control compliance.",
  seasonality: "High summer demand for tech relocations between Silicon Valley (CA) and Seattle (WA). Heavy winter snowbird shipping to Arizona and California.",
  peakMonths: "June through September",
  carShippingDemand: "High",
  
  stateOverview: "Washington state is the Pacific Northwest's primary auto transport gateway, anchored by the I-5 West Coast corridor connecting Seattle to California and I-90 leading east toward Chicago.",
  whyShipHere: "Continuous carrier flow along the I-5 corridor ensures reliable 24-48 hour pickup windows in the Greater Puget Sound region.",
  openVsEnclosedNotes: "Open carriers are ideal for everyday vehicles. Enclosed shipping is popular for luxury electric vehicles (EVs) and sports cars in Bellevue and Medina.",
  
  popularRoutesOut: [
    { originCity: "Seattle, WA", destCity: "Los Angeles", destState: "CA", distanceMiles: 1135, openPriceRange: "$750 - $980", enclosedPriceRange: "$1,150 - $1,450", transitDays: "3-4 Days" },
    { originCity: "Seattle, WA", destCity: "Phoenix", destState: "AZ", distanceMiles: 1420, openPriceRange: "$920 - $1,180", enclosedPriceRange: "$1,400 - $1,750", transitDays: "4-5 Days" }
  ],
  popularRoutesIn: [
    { originCity: "Los Angeles, CA", destCity: "Seattle", destState: "WA", distanceMiles: 1135, openPriceRange: "$800 - $1,050", enclosedPriceRange: "$1,200 - $1,550", transitDays: "3-4 Days" }
  ],
  
  faqs: [
    {
      question: "How long does shipping a car from Seattle to California take?",
      answer: "Car transport along the I-5 corridor between Seattle and California generally takes 3 to 4 days once picked up."
    }
  ],
  
  fmcsaLicense: "MC #1098472",
  usdotNumber: "3849102"
};
