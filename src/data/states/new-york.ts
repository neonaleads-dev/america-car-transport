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
    { originCity: "New York City, NY", destCity: "Miami", destState: "FL", distanceMiles: 1280, openPriceRange: "$920 - $1,250", enclosedPriceRange: "$1,450 - $1,850", transitDays: "3-5 Days" },
    { originCity: "New York City, NY", destCity: "Los Angeles", destState: "CA", distanceMiles: 2790, openPriceRange: "$1,350 - $1,750", enclosedPriceRange: "$2,100 - $2,700", transitDays: "6-8 Days" }
  ],
  popularRoutesIn: [
    { originCity: "Miami, FL", destCity: "New York City", destState: "NY", distanceMiles: 1280, openPriceRange: "$850 - $1,150", enclosedPriceRange: "$1,350 - $1,750", transitDays: "3-4 Days" },
    { originCity: "Los Angeles, CA", destCity: "New York City", destState: "NY", distanceMiles: 2790, openPriceRange: "$1,350 - $1,750", enclosedPriceRange: "$2,100 - $2,700", transitDays: "6-8 Days" },
    { originCity: "Houston, TX", destCity: "New York City", destState: "NY", distanceMiles: 1630, openPriceRange: "$850 - $1,350", enclosedPriceRange: "$1,300 - $1,900", transitDays: "3-5 Days" },
    { originCity: "Atlanta, GA", destCity: "New York City", destState: "NY", distanceMiles: 870, openPriceRange: "$600 - $950", enclosedPriceRange: "$950 - $1,400", transitDays: "2-4 Days" }
  ],
  
  faqs: [
    {
      question: "Can a 75-foot auto carrier deliver to my street in New York City?",
      answer: "Due to tight turns, low bridge clearances, and weight limits in Manhattan and Brooklyn, drivers often arrange pickup/delivery at a nearby accessible location like a wide plaza or parking lot."
    },
    {
      question: "How much does it cost to ship a car from New York?",
      answer: "Shipping a standard sedan out of New York on open transport usually costs about $600 to $1,750 depending on distance. New York to Florida runs roughly $900 to $1,400 (New York City to Miami is often $920 to $1,250), and New York to California runs about $1,350 to $1,750. Enclosed transport typically adds 40 to 60%. For a price on your exact ZIP codes, use the quote calculator at the top of this page — no email required."
    },
    {
      question: "How much does it cost to ship a car from New York to Florida?",
      answer: "New York to Florida is one of the busiest car shipping routes in the country. Expect roughly $900 to $1,400 on an open carrier and about $1,300 to $2,000 enclosed for this 1,300-mile trip, with 3 to 6 days in transit. Prices rise during the fall snowbird season (October through December) when demand heading south peaks, and on the return trip north in spring."
    },
    {
      question: "How long does it take to ship a car from New York?",
      answer: "Short regional moves (for example New York City to Boston or Washington, D.C.) usually take 1 to 3 days. New York to Florida takes about 3 to 6 days, New York to Texas about 3 to 5 days, and New York to California about 6 to 8 days in transit, plus 1 to 5 days to assign a carrier after booking."
    },
    {
      question: "When is the best time to ship a car out of New York?",
      answer: "Late winter and early spring, outside the snowbird rush, usually bring the lowest prices and fastest carrier assignment. The most expensive windows are the fall snowbird surge from New York to Florida and the summer moving season. Upstate winter weather can also add a day or two to pickups in Buffalo, Rochester, and Syracuse."
    },
    {
      question: "Should I use open or enclosed transport in New York?",
      answer: "Open transport is the most affordable option and works well for everyday cars. Enclosed transport is worth it for luxury, classic, or exotic vehicles, and in winter it also keeps road salt and slush off the paint — a common reason New York and Westchester owners choose it."
    },
    {
      question: "Do you pick up from Long Island, Westchester, and Upstate New York?",
      answer: "Yes. We arrange door-to-door pickup and delivery across all five New York City boroughs, Long Island, Westchester, the Hudson Valley, and Upstate cities including Albany, Buffalo, Rochester, and Syracuse. Where a full-size carrier can't reach your street, the driver will meet you at a nearby accessible spot."
    },
    {
      question: "What should I do with my E-ZPass before shipping my car?",
      answer: "Remove your E-ZPass tag (and any other toll transponder) before pickup. If it stays in the car, it can be charged for tolls the carrier truck passes through on the way."
    },
    {
      question: "What documents do I need to ship a car from New York?",
      answer: "Have a photo ID, the vehicle registration (or title), and proof of insurance ready. At pickup and delivery you'll sign the Bill of Lading, which records the car's condition, so keep a copy from both ends. If someone else will hand over or receive the car, give them a signed authorization note."
    }
  ],
  
  };
