import { StateData } from "@/types/location";

export const illinoisData: StateData = {
  name: "Illinois",
  slug: "illinois",
  abbreviation: "IL",
  heroTitle: "Illinois Car Shipping Services | Door-to-Door Auto Transport",
  heroSubtitle: "Ship your car to or from Illinois with America's leading bonded & insured carriers. Direct door-to-door shipping in Chicago, Peoria, Rockford, and Springfield.",
  metaTitle: "Illinois Car Shipping & Auto Transport | Rates & Quotes",
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
    },
    {
      question: "How much does it cost to ship a car from Illinois?",
      answer: "Shipping a standard sedan out of Illinois on open transport typically costs $880 to $1,150 from Chicago to Miami (about 1,380 miles) and $1,100 to $1,400 from Chicago to Los Angeles (about 2,015 miles). Enclosed transport usually costs 40 to 60% more. For an exact price on your ZIP codes, use the quote calculator at the top of this page — no email required."
    },
    {
      question: "How much does it cost to ship a car to Illinois?",
      answer: "Inbound prices depend on where the car starts. For example, Dallas, TX to Chicago runs about $720 to $950 on an open carrier. SUVs cost about 10 to 15% more and pickup trucks about 15 to 20% more than a sedan."
    },
    {
      question: "How long does it take to ship a car from Illinois?",
      answer: "Transit time depends on distance: Chicago to Miami takes about 3 to 5 days and Chicago to Los Angeles takes about 5 to 6 days. Add 1 to 5 days after booking for a carrier to be assigned and arrive for pickup."
    },
    {
      question: "When is the cheapest time to ship a car in Illinois?",
      answer: "Late winter and early spring (roughly February through April) usually bring the lowest prices and fastest carrier assignment. Local demand in Illinois: Heavy snowbird routes to Florida and Arizona in October-November, returning in April-May. Booking 1 to 2 weeks ahead and keeping your pickup dates flexible also lowers the price."
    },
    {
      question: "Do you offer door-to-door car shipping in Illinois?",
      answer: "Yes. We arrange door-to-door pickup and delivery across Illinois, including Chicago, Aurora, Joliet, Naperville, Rockford and Peoria. If a full-size carrier can't safely reach your street, the driver will meet you at a nearby open spot such as a large parking lot."
    },
    {
      question: "Should I choose open or enclosed transport in Illinois?",
      answer: "Open transport is the most affordable option and works well for everyday cars. Open multi-car haulers carry 85%+ of vehicles across Illinois. Enclosed carriers protect luxury and classic vehicles from winter road salt. Enclosed transport typically costs 40 to 60% more than open."
    },
    {
      question: "What documents do I need to ship a car from Illinois?",
      answer: "Have a photo ID, the vehicle registration (or title), and proof of insurance ready. At pickup and delivery you'll sign the Bill of Lading, which records the car's condition, so keep a copy from both ends. If someone else will hand over or receive the car, give them a signed authorization note."
    },
    {
      question: "Do I have to pay a deposit to ship my car from Illinois?",
      answer: "No. America Car Transport does not ask for an upfront deposit. Be cautious with any company that demands a large payment before a verified carrier has been assigned to your vehicle."
    }
  ],
  
  };
