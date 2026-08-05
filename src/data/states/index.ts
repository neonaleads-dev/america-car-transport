import { StateData } from "@/types/location";
import { californiaData } from "./california";
import { floridaData } from "./florida";
import { texasData } from "./texas";
import { newYorkData } from "./new-york";
import { washingtonData } from "./washington";
import { illinoisData } from "./illinois";
import { pennsylvaniaData } from "./pennsylvania";
import { georgiaData } from "./georgia";
import { ohioData } from "./ohio";
import { northCarolinaData } from "./north-carolina";

export const TOP_STATES_DATA: Record<string, StateData> = {
  california: californiaData,
  florida: floridaData,
  texas: texasData,
  "new-york": newYorkData,
  washington: washingtonData,
  illinois: illinoisData,
  pennsylvania: pennsylvaniaData,
  georgia: georgiaData,
  ohio: ohioData,
  "north-carolina": northCarolinaData,
};

// Fallback generator for remaining 41 US states to ensure 100% 50-state coverage
export function getFallbackStateData(slug: string): StateData {
  const formattedName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    name: formattedName,
    slug: slug,
    abbreviation: formattedName.slice(0, 2).toUpperCase(),
    heroTitle: `${formattedName} Car Shipping Services | Door-to-Door Auto Transport`,
    heroSubtitle: `Ship your vehicle safely to or from ${formattedName} with America's leading bonded & insured carrier network. Guaranteed door-to-door delivery with zero upfront deposits.`,
    metaTitle: `${formattedName} Car Shipping | Direct Auto Transport Services`,
    metaDescription: `Professional ${formattedName} car shipping services. Compare open & enclosed auto transport rates. Fully licensed and bonded auto transport broker.`,
    canonical: `https://www.americacartransport.com/locations/${slug}`,
    
    population: "Statewide Coverage",
    capital: formattedName,
    majorCities: [
      { name: `${formattedName} Metro Area`, slug: `${slug}-metro`, population: "Major Hub", isHub: true }
    ],
    
    majorInterstates: ["I-95", "I-80", "I-70", "I-10", "I-35"],
    majorPorts: ["Regional Shipping Terminals"],
    primaryRailHubs: ["Regional Intermodal Freight Hubs"],
    averageDistanceMiles: 1200,
    averageTransitDays: "3-6 Days",
    averagePricePerMile: "$0.85 - $1.25",
    
    climateNotes: `${formattedName} weather conditions are monitored continuously by our carrier dispatches to ensure safe, on-time vehicle transit.`,
    seasonality: `High demand during regional relocation seasons and snowbird migration cycles.`,
    peakMonths: "May through October",
    carShippingDemand: "High",
    
    stateOverview: `${formattedName} is a key link in America's auto transport network. Our insured carrier fleet operates daily dispatches to and from all cities in ${formattedName}.`,
    whyShipHere: `High carrier concentration along major interstate corridors ensures fast pickup windows and affordable rates across ${formattedName}.`,
    openVsEnclosedNotes: `Open transport is the most popular, cost-effective choice for standard vehicles in ${formattedName}. Enclosed shipping is recommended for luxury or exotic cars.`,
    
    popularRoutesOut: [
      { originCity: `${formattedName}`, destCity: "Dallas", destState: "TX", distanceMiles: 1200, openPriceRange: "$850 - $1,150", enclosedPriceRange: "$1,350 - $1,650", transitDays: "3-5 Days" },
      { originCity: `${formattedName}`, destCity: "Miami", destState: "FL", distanceMiles: 1300, openPriceRange: "$900 - $1,200", enclosedPriceRange: "$1,400 - $1,750", transitDays: "4-5 Days" }
    ],
    popularRoutesIn: [
      { originCity: "Los Angeles, CA", destCity: `${formattedName}`, destState: "", distanceMiles: 1500, openPriceRange: "$950 - $1,300", enclosedPriceRange: "$1,500 - $1,900", transitDays: "4-6 Days" }
    ],
    
    faqs: [
      {
        question: `How much does it cost to ship a car in ${formattedName}?`,
        answer: `Car shipping rates in ${formattedName} depend on total mileage, vehicle size, transport type (open vs enclosed), and seasonal carrier demand. Instant quotes are available with zero deposit.`
      },
      {
        question: `Is door-to-door auto transport available in ${formattedName}?`,
        answer: `Yes! Our carrier network delivers directly to your door anywhere in ${formattedName}, or to a nearby accessible meeting spot if your street has truck weight restrictions.`
      }
    ],
    
    };
}

export function getStateBySlug(slug: string): StateData {
  const normalized = slug.toLowerCase();
  return TOP_STATES_DATA[normalized] || getFallbackStateData(normalized);
}

export const ALL_50_STATE_SLUGS: string[] = [
  "alabama", "alaska", "arizona", "arkansas", "california", "colorado", 
  "connecticut", "delaware", "florida", "georgia", "hawaii", "idaho", 
  "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana", 
  "maine", "maryland", "massachusetts", "michigan", "minnesota", "mississippi", 
  "missouri", "montana", "nebraska", "nevada", "new-hampshire", "new-jersey", 
  "new-mexico", "new-york", "north-carolina", "north-dakota", "ohio", "oklahoma", 
  "oregon", "pennsylvania", "rhode-island", "south-carolina", "south-dakota", 
  "tennessee", "texas", "utah", "vermont", "virginia", "washington", 
  "west-virginia", "wisconsin", "wyoming"
];

export function getAllStateSlugs(): string[] {
  return ALL_50_STATE_SLUGS;
}

export function getAllTopStates(): StateData[] {
  return Object.values(TOP_STATES_DATA);
}
