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
import { virginiaData } from "./virginia";
import { STATE_FACTS, HUBS, roadMiles, priceTier } from "./fallback-facts";

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
  virginia: virginiaData,
};

export const STATE_HUB_MAP: Record<string, { abbr: string; name: string; cities: Array<{ name: string; slug: string; population: string; isHub: boolean }> }> = {
  alabama: { abbr: "AL", name: "Alabama", cities: [{ name: "Birmingham", slug: "birmingham", population: "200K", isHub: true }, { name: "Huntsville", slug: "huntsville", population: "215K", isHub: true }, { name: "Mobile", slug: "mobile", population: "185K", isHub: true }] },
  alaska: { abbr: "AK", name: "Alaska", cities: [{ name: "Anchorage", slug: "anchorage", population: "288K", isHub: true }, { name: "Fairbanks", slug: "fairbanks", population: "32K", isHub: true }, { name: "Juneau", slug: "juneau", population: "31K", isHub: true }] },
  arizona: { abbr: "AZ", name: "Arizona", cities: [{ name: "Phoenix", slug: "phoenix", population: "1.6M", isHub: true }, { name: "Tucson", slug: "tucson", population: "540K", isHub: true }, { name: "Mesa", slug: "mesa", population: "500K", isHub: true }] },
  arkansas: { abbr: "AR", name: "Arkansas", cities: [{ name: "Little Rock", slug: "little-rock", population: "202K", isHub: true }, { name: "Fort Smith", slug: "fort-smith", population: "89K", isHub: true }, { name: "Fayetteville", slug: "fayetteville", population: "94K", isHub: true }] },
  california: { abbr: "CA", name: "California", cities: [{ name: "Los Angeles", slug: "los-angeles", population: "3.8M", isHub: true }, { name: "San Francisco", slug: "san-francisco", population: "870K", isHub: true }, { name: "San Diego", slug: "san-diego", population: "1.3M", isHub: true }] },
  colorado: { abbr: "CO", name: "Colorado", cities: [{ name: "Denver", slug: "denver", population: "710K", isHub: true }, { name: "Colorado Springs", slug: "colorado-springs", population: "480K", isHub: true }, { name: "Aurora", slug: "aurora", population: "390K", isHub: true }] },
  connecticut: { abbr: "CT", name: "Connecticut", cities: [{ name: "Bridgeport", slug: "bridgeport", population: "148K", isHub: true }, { name: "New Haven", slug: "new-haven", population: "135K", isHub: true }, { name: "Hartford", slug: "hartford", population: "121K", isHub: true }] },
  delaware: { abbr: "DE", name: "Delaware", cities: [{ name: "Wilmington", slug: "wilmington", population: "70K", isHub: true }, { name: "Dover", slug: "dover", population: "38K", isHub: true }, { name: "Newark", slug: "newark-de", population: "33K", isHub: true }] },
  florida: { abbr: "FL", name: "Florida", cities: [{ name: "Miami", slug: "miami", population: "440K", isHub: true }, { name: "Orlando", slug: "orlando", population: "307K", isHub: true }, { name: "Tampa", slug: "tampa", population: "387K", isHub: true }] },
  georgia: { abbr: "GA", name: "Georgia", cities: [{ name: "Atlanta", slug: "atlanta", population: "498K", isHub: true }, { name: "Savannah", slug: "savannah", population: "147K", isHub: true }, { name: "Augusta", slug: "augusta", population: "202K", isHub: true }] },
  hawaii: { abbr: "HI", name: "Hawaii", cities: [{ name: "Honolulu", slug: "honolulu", population: "350K", isHub: true }, { name: "Hilo", slug: "hilo", population: "44K", isHub: true }, { name: "Kailua-Kona", slug: "kailua-kona", population: "20K", isHub: true }] },
  idaho: { abbr: "ID", name: "Idaho", cities: [{ name: "Boise", slug: "boise", population: "235K", isHub: true }, { name: "Meridian", slug: "meridian", population: "117K", isHub: true }, { name: "Nampa", slug: "nampa", population: "100K", isHub: true }] },
  illinois: { abbr: "IL", name: "Illinois", cities: [{ name: "Chicago", slug: "chicago", population: "2.7M", isHub: true }, { name: "Aurora", slug: "aurora-il", population: "180K", isHub: true }, { name: "Naperville", slug: "naperville", population: "149K", isHub: true }] },
  indiana: { abbr: "IN", name: "Indiana", cities: [{ name: "Indianapolis", slug: "indianapolis", population: "880K", isHub: true }, { name: "Fort Wayne", slug: "fort-wayne", population: "265K", isHub: true }, { name: "Evansville", slug: "evansville", population: "117K", isHub: true }] },
  iowa: { abbr: "IA", name: "Iowa", cities: [{ name: "Des Moines", slug: "des-moines", population: "214K", isHub: true }, { name: "Cedar Rapids", slug: "cedar-rapids", population: "137K", isHub: true }, { name: "Davenport", slug: "davenport", population: "101K", isHub: true }] },
  kansas: { abbr: "KS", name: "Kansas", cities: [{ name: "Wichita", slug: "wichita", population: "397K", isHub: true }, { name: "Overland Park", slug: "overland-park", population: "197K", isHub: true }, { name: "Topeka", slug: "topeka", population: "126K", isHub: true }] },
  kentucky: { abbr: "KY", name: "Kentucky", cities: [{ name: "Louisville", slug: "louisville", population: "630K", isHub: true }, { name: "Lexington", slug: "lexington", population: "322K", isHub: true }, { name: "Bowling Green", slug: "bowling-green", population: "72K", isHub: true }] },
  louisiana: { abbr: "LA", name: "Louisiana", cities: [{ name: "New Orleans", slug: "new-orleans", population: "383K", isHub: true }, { name: "Baton Rouge", slug: "baton-rouge", population: "227K", isHub: true }, { name: "Shreveport", slug: "shreveport", population: "187K", isHub: true }] },
  maine: { abbr: "ME", name: "Maine", cities: [{ name: "Portland", slug: "portland-me", population: "68K", isHub: true }, { name: "Lewiston", slug: "lewiston", population: "37K", isHub: true }, { name: "Bangor", slug: "bangor", population: "31K", isHub: true }] },
  maryland: { abbr: "MD", name: "Maryland", cities: [{ name: "Baltimore", slug: "baltimore", population: "585K", isHub: true }, { name: "Frederick", slug: "frederick", population: "78K", isHub: true }, { name: "Annapolis", slug: "annapolis", population: "40K", isHub: true }] },
  massachusetts: { abbr: "MA", name: "Massachusetts", cities: [{ name: "Boston", slug: "boston", population: "675K", isHub: true }, { name: "Worcester", slug: "worcester", population: "206K", isHub: true }, { name: "Springfield", slug: "springfield-ma", population: "155K", isHub: true }] },
  michigan: { abbr: "MI", name: "Michigan", cities: [{ name: "Detroit", slug: "detroit", population: "620K", isHub: true }, { name: "Grand Rapids", slug: "grand-rapids", population: "198K", isHub: true }, { name: "Lansing", slug: "lansing", population: "112K", isHub: true }] },
  minnesota: { abbr: "MN", name: "Minnesota", cities: [{ name: "Minneapolis", slug: "minneapolis", population: "425K", isHub: true }, { name: "Saint Paul", slug: "saint-paul", population: "310K", isHub: true }, { name: "Rochester", slug: "rochester-mn", population: "121K", isHub: true }] },
  mississippi: { abbr: "MS", name: "Mississippi", cities: [{ name: "Jackson", slug: "jackson", population: "153K", isHub: true }, { name: "Gulfport", slug: "gulfport", population: "72K", isHub: true }, { name: "Southaven", slug: "southaven", population: "54K", isHub: true }] },
  missouri: { abbr: "MO", name: "Missouri", cities: [{ name: "Kansas City", slug: "kansas-city", population: "508K", isHub: true }, { name: "St. Louis", slug: "st-louis", population: "300K", isHub: true }, { name: "Springfield", slug: "springfield-mo", population: "169K", isHub: true }] },
  montana: { abbr: "MT", name: "Montana", cities: [{ name: "Billings", slug: "billings", population: "117K", isHub: true }, { name: "Missoula", slug: "missoula", population: "73K", isHub: true }, { name: "Great Falls", slug: "great-falls", population: "60K", isHub: true }] },
  nebraska: { abbr: "NE", name: "Nebraska", cities: [{ name: "Omaha", slug: "omaha", population: "486K", isHub: true }, { name: "Lincoln", slug: "lincoln", population: "291K", isHub: true }, { name: "Bellevue", slug: "bellevue-ne", population: "64K", isHub: true }] },
  nevada: { abbr: "NV", name: "Nevada", cities: [{ name: "Las Vegas", slug: "las-vegas", population: "640K", isHub: true }, { name: "Reno", slug: "reno", population: "264K", isHub: true }, { name: "Henderson", slug: "henderson", population: "320K", isHub: true }] },
  "new-hampshire": { abbr: "NH", name: "New Hampshire", cities: [{ name: "Manchester", slug: "manchester", population: "115K", isHub: true }, { name: "Nashua", slug: "nashua", population: "91K", isHub: true }, { name: "Concord", slug: "concord-nh", population: "43K", isHub: true }] },
  "new-jersey": { abbr: "NJ", name: "New Jersey", cities: [{ name: "Newark", slug: "newark", population: "311K", isHub: true }, { name: "Jersey City", slug: "jersey-city", population: "292K", isHub: true }, { name: "Trenton", slug: "trenton", population: "90K", isHub: true }] },
  "new-mexico": { abbr: "NM", name: "New Mexico", cities: [{ name: "Albuquerque", slug: "albuquerque", population: "564K", isHub: true }, { name: "Las Cruces", slug: "las-cruces", population: "111K", isHub: true }, { name: "Santa Fe", slug: "santa-fe", population: "87K", isHub: true }] },
  "new-york": { abbr: "NY", name: "New York", cities: [{ name: "New York", slug: "new-york-city", population: "8.8M", isHub: true }, { name: "Buffalo", slug: "buffalo", population: "278K", isHub: true }, { name: "Rochester", slug: "rochester", population: "211K", isHub: true }] },
  "north-carolina": { abbr: "NC", name: "North Carolina", cities: [{ name: "Charlotte", slug: "charlotte", population: "874K", isHub: true }, { name: "Raleigh", slug: "raleigh", population: "467K", isHub: true }, { name: "Greensboro", slug: "greensboro", population: "299K", isHub: true }] },
  "north-dakota": { abbr: "ND", name: "North Dakota", cities: [{ name: "Fargo", slug: "fargo", population: "125K", isHub: true }, { name: "Bismarck", slug: "bismarck", population: "73K", isHub: true }, { name: "Grand Forks", slug: "grand-forks", population: "59K", isHub: true }] },
  ohio: { abbr: "OH", name: "Ohio", cities: [{ name: "Columbus", slug: "columbus", population: "905K", isHub: true }, { name: "Cleveland", slug: "cleveland", population: "372K", isHub: true }, { name: "Cincinnati", slug: "cincinnati", population: "309K", isHub: true }] },
  oklahoma: { abbr: "OK", name: "Oklahoma", cities: [{ name: "Oklahoma City", slug: "oklahoma-city", population: "680K", isHub: true }, { name: "Tulsa", slug: "tulsa", population: "413K", isHub: true }, { name: "Norman", slug: "norman", population: "128K", isHub: true }] },
  oregon: { abbr: "OR", name: "Oregon", cities: [{ name: "Portland", slug: "portland-or", population: "650K", isHub: true }, { name: "Salem", slug: "salem", population: "175K", isHub: true }, { name: "Eugene", slug: "eugene", population: "176K", isHub: true }] },
  pennsylvania: { abbr: "PA", name: "Pennsylvania", cities: [{ name: "Philadelphia", slug: "philadelphia", population: "1.6M", isHub: true }, { name: "Pittsburgh", slug: "pittsburgh", population: "302K", isHub: true }, { name: "Allentown", slug: "allentown", population: "125K", isHub: true }] },
  "rhode-island": { abbr: "RI", name: "Rhode Island", cities: [{ name: "Providence", slug: "providence", population: "190K", isHub: true }, { name: "Warwick", slug: "warwick", population: "82K", isHub: true }, { name: "Cranston", slug: "cranston", population: "82K", isHub: true }] },
  "south-carolina": { abbr: "SC", name: "South Carolina", cities: [{ name: "Charleston", slug: "charleston", population: "150K", isHub: true }, { name: "Columbia", slug: "columbia", population: "136K", isHub: true }, { name: "Greenville", slug: "greenville", population: "70K", isHub: true }] },
  "south-dakota": { abbr: "SD", name: "South Dakota", cities: [{ name: "Sioux Falls", slug: "sioux-falls", population: "192K", isHub: true }, { name: "Rapid City", slug: "rapid-city", population: "74K", isHub: true }, { name: "Aberdeen", slug: "aberdeen", population: "28K", isHub: true }] },
  tennessee: { abbr: "TN", name: "Tennessee", cities: [{ name: "Nashville", slug: "nashville", population: "689K", isHub: true }, { name: "Memphis", slug: "memphis", population: "633K", isHub: true }, { name: "Knoxville", slug: "knoxville", population: "190K", isHub: true }] },
  texas: { abbr: "TX", name: "Texas", cities: [{ name: "Houston", slug: "houston", population: "2.3M", isHub: true }, { name: "Dallas", slug: "dallas", population: "1.3M", isHub: true }, { name: "Austin", slug: "austin", population: "960K", isHub: true }] },
  utah: { abbr: "UT", name: "Utah", cities: [{ name: "Salt Lake City", slug: "salt-lake-city", population: "200K", isHub: true }, { name: "Provo", slug: "provo", population: "115K", isHub: true }, { name: "West Valley City", slug: "west-valley-city", population: "140K", isHub: true }] },
  vermont: { abbr: "VT", name: "Vermont", cities: [{ name: "Burlington", slug: "burlington", population: "44K", isHub: true }, { name: "South Burlington", slug: "south-burlington", population: "20K", isHub: true }, { name: "Rutland", slug: "rutland", population: "15K", isHub: true }] },
  virginia: { abbr: "VA", name: "Virginia", cities: [{ name: "Virginia Beach", slug: "virginia-beach", population: "450K", isHub: true }, { name: "Norfolk", slug: "norfolk", population: "238K", isHub: true }, { name: "Richmond", slug: "richmond", population: "226K", isHub: true }] },
  washington: { abbr: "WA", name: "Washington", cities: [{ name: "Seattle", slug: "seattle", population: "737K", isHub: true }, { name: "Spokane", slug: "spokane", population: "228K", isHub: true }, { name: "Tacoma", slug: "tacoma", population: "219K", isHub: true }] },
  "west-virginia": { abbr: "WV", name: "West Virginia", cities: [{ name: "Charleston", slug: "charleston-wv", population: "48K", isHub: true }, { name: "Huntington", slug: "huntington", population: "46K", isHub: true }, { name: "Morgantown", slug: "morgantown", population: "30K", isHub: true }] },
  wisconsin: { abbr: "WI", name: "Wisconsin", cities: [{ name: "Milwaukee", slug: "milwaukee", population: "577K", isHub: true }, { name: "Madison", slug: "madison", population: "269K", isHub: true }, { name: "Green Bay", slug: "green-bay", population: "107K", isHub: true }] },
  wyoming: { abbr: "WY", name: "Wyoming", cities: [{ name: "Cheyenne", slug: "cheyenne", population: "65K", isHub: true }, { name: "Casper", slug: "casper", population: "58K", isHub: true }, { name: "Laramie", slug: "laramie", population: "31K", isHub: true }] },
};

// Fallback generator for remaining US states to ensure 100% 50-state coverage with clean City, ST endpoints
export function getFallbackStateData(slug: string): StateData {
  const meta = STATE_HUB_MAP[slug] || {
    abbr: slug.slice(0, 2).toUpperCase(),
    name: slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
    cities: [{ name: `${slug} City`, slug: `${slug}-city`, population: "Major Hub", isHub: true }]
  };

  const formattedName = meta.name;
  const st = meta.abbr;
  const city1 = meta.cities[0].name;
  const city2 = meta.cities[1]?.name || meta.cities[0].name;

  return {
    name: formattedName,
    slug: slug,
    abbreviation: st,
    heroTitle: `${formattedName} Car Shipping Services | Door-to-Door Auto Transport`,
    heroSubtitle: `Ship your vehicle safely to or from ${formattedName} with America's leading bonded & insured carrier network. Guaranteed door-to-door delivery with zero upfront deposits.`,
    metaTitle: `${formattedName} Car Shipping & Auto Transport | Rates & Quotes`,
    metaDescription: `Compare ${formattedName} car shipping rates from ${city1} and statewide. Open and enclosed auto transport, door-to-door, real 2026 prices and no upfront deposit.`,
    canonical: `https://www.americacartransport.com/locations/${slug}`,
    
    population: "Statewide Coverage",
    capital: city1,
    majorCities: meta.cities,
    
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
      { originCity: `${city1}, ${st}`, destCity: "Dallas", destState: "TX", distanceMiles: 1200, openPriceRange: "$850 - $1,150", enclosedPriceRange: "$1,350 - $1,650", transitDays: "3-5 Days" },
      { originCity: `${city2}, ${st}`, destCity: "Miami", destState: "FL", distanceMiles: 1300, openPriceRange: "$900 - $1,200", enclosedPriceRange: "$1,400 - $1,750", transitDays: "4-5 Days" }
    ],
    popularRoutesIn: [
      { originCity: "Los Angeles, CA", destCity: `${city1}`, destState: `${st}`, distanceMiles: 1500, openPriceRange: "$950 - $1,300", enclosedPriceRange: "$1,500 - $1,900", transitDays: "4-6 Days" }
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

// Replaces the generic fallback routes, notes and FAQs with real per-state facts.
function withStateFacts(base: StateData, slug: string): StateData {
  const f = STATE_FACTS[slug];
  const meta = STATE_HUB_MAP[slug];
  if (!f || !meta) return base;
  const name = meta.name;
  const st = meta.abbr;
  const city1 = meta.cities[0].name;
  const cityList = meta.cities.map((c) => c.name).join(", ");

  type Route = StateData["popularRoutesOut"][number];
  let routesOut: Route[];
  let routesIn: Route[];
  if (f.special === "hawaii") {
    const sea = { distanceMiles: 2220, openPriceRange: "$1,100 - $1,700", enclosedPriceRange: "$2,500 - $4,500", transitDays: "9-24 Days" };
    routesOut = [{ originCity: `Honolulu, ${st}`, destCity: "Los Angeles", destState: "CA", ...sea }];
    routesIn = [{ originCity: "Los Angeles, CA", destCity: "Honolulu", destState: st, ...sea }];
  } else if (f.special === "alaska") {
    const sea = { distanceMiles: 1450, openPriceRange: "Custom quote", enclosedPriceRange: "Custom quote", transitDays: "Varies by sailing" };
    routesOut = [{ originCity: `Anchorage, ${st}`, destCity: "Seattle", destState: "WA", ...sea }];
    routesIn = [{ originCity: "Seattle, WA", destCity: "Anchorage", destState: st, ...sea }];
  } else {
    const make = (origin: string, dest: string, fromC: [number, number], toHub: string): Route => {
      const hub = HUBS[toHub];
      const miles = roadMiles(fromC, hub.c);
      const p = priceTier(miles);
      return { originCity: origin, destCity: dest, destState: hub.st, distanceMiles: miles, openPriceRange: p.open, enclosedPriceRange: p.enclosed, transitDays: p.days };
    };
    routesOut = f.out.map((h) => make(`${city1}, ${st}`, h, f.city1, h));
    const inHub = HUBS[f.in];
    const inMiles = roadMiles(inHub.c, f.city1);
    const inP = priceTier(inMiles);
    routesIn = [{ originCity: `${f.in}, ${inHub.st}`, destCity: city1, destState: st, distanceMiles: inMiles, openPriceRange: inP.open, enclosedPriceRange: inP.enclosed, transitDays: inP.days }];
  }

  const all = [...routesOut, ...routesIn];
  const avgMiles = Math.round(all.reduce((s, r) => s + r.distanceMiles, 0) / all.length / 10) * 10;
  const days = (r: Route) => r.transitDays.replace("-", " to ").replace(" Days", " days");
  const routeText = (r: Route) => `${r.originCity.split(",")[0]} to ${r.destCity}`;
  const sea = f.special === "hawaii" || f.special === "alaska";

  const faqs = sea
    ? [
        { question: `How do you ship a car to or from ${name}?`, answer: f.special === "hawaii"
          ? `Cars move to and from ${name} by ocean freight between West Coast ports such as Los Angeles, Long Beach and Oakland and the island ports. We can arrange door-to-port or door-to-door service on the mainland side. A typical Los Angeles to Honolulu shipment costs about $1,100 to $1,700 and takes 9 to 24 days including port time.`
          : `Most cars move to and from ${name} by ocean freight between the Port of Tacoma or Seattle and Anchorage, sometimes combined with overland transport. Because sailings, port fees and pickup locations vary, we give a custom quote for each ${name} shipment.` },
        { question: `How long does it take to ship a car to ${name}?`, answer: f.special === "hawaii"
          ? "Plan on about 9 to 24 days from West Coast port to island port, depending on the sailing schedule and which island you're shipping to, plus time to get the car to and from the port."
          : "Transit depends on the sailing schedule and your pickup city on the mainland. Ask for a quote with your dates and we'll give you a realistic timeline." },
        { question: `What do I need to ship my car to ${name}?`, answer: "A photo ID, the vehicle registration or title, and proof of insurance. Ocean carriers usually require the gas tank to be a quarter full or less and no personal items inside the car. If the car has a lien, the lienholder may need to authorize the shipment." },
        { question: `Do you pick up from ${cityList}?`, answer: `Yes. We arrange pickup and delivery in ${cityList} and other ${name} communities, coordinated with the port schedule.` },
        { question: "Do I need to pay a deposit to book?", answer: "No. America Car Transport does not ask for an upfront deposit." },
      ]
    : [
        { question: `How much does it cost to ship a car from ${name}?`, answer: `Shipping a standard sedan out of ${name} on an open carrier typically costs ${routesOut.map((r) => `${r.openPriceRange.replace(" - ", " to ")} from ${routeText(r)} (about ${r.distanceMiles.toLocaleString("en-US")} miles)`).join(" and ")}. Enclosed transport usually costs 40 to 60% more. For an exact price on your ZIP codes, use the quote calculator at the top of this page — no email required.` },
        { question: `How much does it cost to ship a car to ${name}?`, answer: `Inbound prices depend on where the car starts. For example, ${routesIn.map((r) => `${r.originCity} to ${r.destCity} runs about ${r.openPriceRange.replace(" - ", " to ")} on an open carrier for roughly ${r.distanceMiles.toLocaleString("en-US")} miles`).join(", ")}. SUVs cost about 10 to 15% more and pickup trucks about 15 to 20% more than a sedan.` },
        { question: `How long does it take to ship a car from ${name}?`, answer: `Transit time depends on distance: ${routesOut.map((r) => `${routeText(r)} takes about ${days(r)}`).join(", and ")}. Add 1 to 5 days after booking for a carrier to be assigned and arrive for pickup.` },
        { question: `When is the cheapest time to ship a car in ${name}?`, answer: `Late winter and early spring usually bring the lowest prices and fastest carrier assignment. Busiest months in ${name}: ${f.peak.toLowerCase()}. ${f.season}` },
        { question: `Do you offer door-to-door car shipping in ${name}?`, answer: `Yes. We arrange door-to-door pickup and delivery across ${name}, including ${cityList} and the capital, ${f.capital}. Carriers use ${f.interstates.join(", ")}. If a full-size truck can't safely reach your street, the driver will meet you at a nearby open spot.` },
        { question: `Does weather affect car shipping in ${name}?`, answer: `${f.climate} Our dispatchers adjust pickup and delivery times when weather requires it.` },
        { question: `What documents do I need to ship a car from ${name}?`, answer: "Have a photo ID, the vehicle registration (or title), and proof of insurance ready. At pickup and delivery you'll sign the Bill of Lading, which records the car's condition, so keep a copy from both ends." },
        { question: `Do I have to pay a deposit to ship my car from ${name}?`, answer: "No. America Car Transport does not ask for an upfront deposit. Be cautious with any company that demands a large payment before a verified carrier has been assigned to your vehicle." },
      ];

  const lowPerMile = routesOut[0] && !sea ? priceTier(routesOut[0].distanceMiles).low / routesOut[0].distanceMiles : 0;
  const highPerMile = routesOut[0] && !sea ? priceTier(routesOut[0].distanceMiles).high / routesOut[0].distanceMiles : 0;

  return {
    ...base,
    capital: f.capital,
    majorInterstates: f.interstates,
    averageDistanceMiles: avgMiles,
    averageTransitDays: sea ? routesOut[0].transitDays : priceTier(avgMiles).days,
    averagePricePerMile: sea ? "Port-to-port quote" : `$${lowPerMile.toFixed(2)} - $${highPerMile.toFixed(2)}`,
    climateNotes: f.climate,
    seasonality: f.season,
    peakMonths: f.peak,
    stateOverview: `America Car Transport ships vehicles to and from ${name}, including ${cityList}. ${sea ? f.climate : `Carriers run ${f.interstates.join(", ")}, connecting ${name} with the rest of the country.`}`,
    popularRoutesOut: routesOut,
    popularRoutesIn: routesIn,
    faqs,
  };
}

export function getStateBySlug(slug: string): StateData {
  const normalized = slug.toLowerCase();
  return TOP_STATES_DATA[normalized] || withStateFacts(getFallbackStateData(normalized), normalized);
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
