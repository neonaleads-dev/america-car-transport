import { StateData } from "@/types/location";

export const georgiaData: StateData = {
  name: "Georgia",
  slug: "georgia",
  abbreviation: "GA",
  heroTitle: "Georgia Car Shipping Services | Door-to-Door Auto Transport",
  heroSubtitle: "Ship your vehicle safely to or from Georgia. Direct door-to-door car transport in Atlanta, Savannah, Augusta, and Macon with zero upfront deposit.",
  metaTitle: "Georgia Car Shipping & Auto Transport | Rates & Quotes",
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
    },
    {
      question: "How much does it cost to ship a car from Georgia?",
      answer: "Shipping a standard sedan out of Georgia on open transport typically costs $550 to $720 from Atlanta to Miami (about 660 miles), $680 to $890 from Atlanta to New York (about 870 miles) and $620 to $820 from Atlanta to Dallas (about 780 miles). Enclosed transport usually costs 40 to 60% more. For an exact price on your ZIP codes, use the quote calculator at the top of this page — no email required."
    },
    {
      question: "How much does it cost to ship a car to Georgia?",
      answer: "Inbound prices depend on where the car starts. For example, Los Angeles, CA to Atlanta runs about $1,150 to $1,450 on an open carrier. SUVs cost about 10 to 15% more and pickup trucks about 15 to 20% more than a sedan."
    },
    {
      question: "How long does it take to ship a car from Georgia?",
      answer: "Transit time depends on distance: Atlanta to Miami takes about 2 to 3 days, Atlanta to New York takes about 2 to 3 days and Atlanta to Dallas takes about 2 to 3 days. Add 1 to 5 days after booking for a carrier to be assigned and arrive for pickup."
    },
    {
      question: "When is the cheapest time to ship a car in Georgia?",
      answer: "Late winter and early spring (roughly February through April) usually bring the lowest prices and fastest carrier assignment. Local demand in Georgia: Atlanta is the main freight junction of the Southeast, experiencing heavy year-round traffic to Florida, Texas, and New York. Booking 1 to 2 weeks ahead and keeping your pickup dates flexible also lowers the price."
    },
    {
      question: "Do you offer door-to-door car shipping in Georgia?",
      answer: "Yes. We arrange door-to-door pickup and delivery across Georgia, including Atlanta, Augusta, Columbus, Macon, Savannah and Athens. If a full-size carrier can't safely reach your street, the driver will meet you at a nearby open spot such as a large parking lot."
    },
    {
      question: "Should I choose open or enclosed transport in Georgia?",
      answer: "Open transport is the most affordable option and works well for everyday cars. Open transport handles 85%+ of auto shipments in Georgia. Enclosed haulers are popular for luxury vehicles in Buckhead and classic cars attending Savannah auto events. Enclosed transport typically costs 40 to 60% more than open."
    },
    {
      question: "What documents do I need to ship a car from Georgia?",
      answer: "Have a photo ID, the vehicle registration (or title), and proof of insurance ready. At pickup and delivery you'll sign the Bill of Lading, which records the car's condition, so keep a copy from both ends. If someone else will hand over or receive the car, give them a signed authorization note."
    },
    {
      question: "Do I have to pay a deposit to ship my car from Georgia?",
      answer: "No. America Car Transport does not ask for an upfront deposit. Be cautious with any company that demands a large payment before a verified carrier has been assigned to your vehicle."
    }
  ],
  
  };
