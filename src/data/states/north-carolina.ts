import { StateData } from "@/types/location";

export const northCarolinaData: StateData = {
  name: "North Carolina",
  slug: "north-carolina",
  abbreviation: "NC",
  heroTitle: "North Carolina Car Shipping Services | Door-to-Door Auto Transport",
  heroSubtitle: "Ship your vehicle safely to or from North Carolina. Direct door-to-door car transport in Charlotte, Raleigh, Greensboro, and Wilmington with zero deposit.",
  metaTitle: "North Carolina Car Shipping & Auto Transport | Rates & Quotes",
  metaDescription: "Reliable North Carolina car shipping services. Compare open & enclosed auto transport quotes in Charlotte, Raleigh, and Greensboro. Fully licensed and bonded.",
  canonical: "https://www.americacartransport.com/locations/north-carolina",
  
  population: "10.7 Million",
  capital: "Raleigh",
  majorCities: [
    { name: "Charlotte", slug: "charlotte", population: "895K", isHub: true },
    { name: "Raleigh", slug: "raleigh", population: "475K", isHub: true },
    { name: "Greensboro", slug: "greensboro", population: "300K", isHub: true },
    { name: "Durham", slug: "durham", population: "285K", isHub: false },
    { name: "Winston-Salem", slug: "winston-salem", population: "250K", isHub: false },
    { name: "Fayetteville", slug: "fayetteville", population: "210K", isHub: true },
    { name: "Wilmington", slug: "wilmington", population: "120K", isHub: false }
  ],
  
  majorInterstates: ["I-95", "I-85", "I-40", "I-77"],
  majorPorts: ["Port of Wilmington", "Port of Morehead City"],
  primaryRailHubs: ["Norfolk Southern Charlotte Regional Hub", "CSX Rocky Mount Terminal"],
  averageDistanceMiles: 1000,
  averageTransitDays: "3-5 Days",
  averagePricePerMile: "$0.90 - $1.25",
  
  climateNotes: "Mild climate overall. Hurricane season can occasionally affect coastal routes near Wilmington, but mainland I-85/I-40 corridors run year-round without disruption.",
  seasonality: "Heavy military relocations near Fort Bragg (Fayetteville) and Camp Lejeune, alongside Research Triangle tech moves.",
  peakMonths: "May through October",
  carShippingDemand: "High",
  
  stateOverview: "North Carolina is a major financial, tech, and military transport corridor along the East Coast.",
  whyShipHere: "Crucial junctions (I-85, I-95, I-40) deliver high carrier staging density in Charlotte and Raleigh.",
  openVsEnclosedNotes: "Open carriers are ideal for standard cars. Enclosed haulers serve NASCAR race shops around Charlotte and classic car collectors in Raleigh.",
  
  popularRoutesOut: [
    { originCity: "Charlotte, NC", destCity: "Miami", destState: "FL", distanceMiles: 720, openPriceRange: "$590 - $780", enclosedPriceRange: "$920 - $1,180", transitDays: "2-3 Days" },
    { originCity: "Raleigh, NC", destCity: "New York", destState: "NY", distanceMiles: 500, openPriceRange: "$480 - $650", enclosedPriceRange: "$750 - $980", transitDays: "1-2 Days" }
  ],
  popularRoutesIn: [
    { originCity: "Los Angeles, CA", destCity: "Charlotte", destState: "NC", distanceMiles: 2400, openPriceRange: "$1,250 - $1,580", enclosedPriceRange: "$1,880 - $2,400", transitDays: "5-7 Days" }
  ],
  
  faqs: [
    {
      question: "How fast can I get a car shipped between North Carolina and New York?",
      answer: "Direct transport along I-95 between North Carolina and New York takes only 1 to 2 days."
    },
    {
      question: "How much does it cost to ship a car from North Carolina?",
      answer: "Shipping a standard sedan out of North Carolina on open transport typically costs $590 to $780 from Charlotte to Miami (about 720 miles) and $480 to $650 from Raleigh to New York (about 500 miles). Enclosed transport usually costs 40 to 60% more. For an exact price on your ZIP codes, use the quote calculator at the top of this page — no email required."
    },
    {
      question: "How much does it cost to ship a car to North Carolina?",
      answer: "Inbound prices depend on where the car starts. For example, Los Angeles, CA to Charlotte runs about $1,250 to $1,580 on an open carrier. SUVs cost about 10 to 15% more and pickup trucks about 15 to 20% more than a sedan."
    },
    {
      question: "How long does it take to ship a car from North Carolina?",
      answer: "Transit time depends on distance: Charlotte to Miami takes about 2 to 3 days and Raleigh to New York takes about 1 to 2 days. Add 1 to 5 days after booking for a carrier to be assigned and arrive for pickup."
    },
    {
      question: "When is the cheapest time to ship a car in North Carolina?",
      answer: "Late winter and early spring (roughly February through April) usually bring the lowest prices and fastest carrier assignment. Local demand in North Carolina: Heavy military relocations near Fort Bragg (Fayetteville) and Camp Lejeune, alongside Research Triangle tech moves. Booking 1 to 2 weeks ahead and keeping your pickup dates flexible also lowers the price."
    },
    {
      question: "Do you offer door-to-door car shipping in North Carolina?",
      answer: "Yes. We arrange door-to-door pickup and delivery across North Carolina, including Charlotte, Raleigh, Greensboro, Durham, Winston-Salem and Fayetteville. If a full-size carrier can't safely reach your street, the driver will meet you at a nearby open spot such as a large parking lot."
    },
    {
      question: "Should I choose open or enclosed transport in North Carolina?",
      answer: "Open transport is the most affordable option and works well for everyday cars. Open carriers are ideal for standard cars. Enclosed haulers serve NASCAR race shops around Charlotte and classic car collectors in Raleigh. Enclosed transport typically costs 40 to 60% more than open."
    },
    {
      question: "What documents do I need to ship a car from North Carolina?",
      answer: "Have a photo ID, the vehicle registration (or title), and proof of insurance ready. At pickup and delivery you'll sign the Bill of Lading, which records the car's condition, so keep a copy from both ends. If someone else will hand over or receive the car, give them a signed authorization note."
    },
    {
      question: "Do I have to pay a deposit to ship my car from North Carolina?",
      answer: "No. America Car Transport does not ask for an upfront deposit. Be cautious with any company that demands a large payment before a verified carrier has been assigned to your vehicle."
    }
  ],
  
  };
