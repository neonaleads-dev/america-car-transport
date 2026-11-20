import { StateData } from "@/types/location";

export const ohioData: StateData = {
  name: "Ohio",
  slug: "ohio",
  abbreviation: "OH",
  heroTitle: "Ohio Car Shipping Services | Door-to-Door Auto Transport",
  heroSubtitle: "Ship your car to or from Ohio safely. Direct door-to-door auto transport in Columbus, Cleveland, Cincinnati, and Toledo with zero deposit.",
  metaTitle: "Ohio Car Shipping | Direct Auto Transport Services",
  metaDescription: "Top-rated Ohio car shipping services. Compare open & enclosed auto transport rates in Columbus, Cleveland, and Cincinnati. Fully licensed and bonded.",
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
    },
    {
      question: "How much does it cost to ship a car from Ohio?",
      answer: "Shipping a standard sedan out of Ohio on open transport typically costs $790 to $1,020 from Columbus to Miami (about 1,080 miles) and $820 to $1,080 from Cleveland to Dallas (about 1,180 miles). Enclosed transport usually costs 40 to 60% more. For an exact price on your ZIP codes, use the quote calculator at the top of this page — no email required."
    },
    {
      question: "How much does it cost to ship a car to Ohio?",
      answer: "Inbound prices depend on where the car starts. For example, Los Angeles, CA to Columbus runs about $1,180 to $1,480 on an open carrier. SUVs cost about 10 to 15% more and pickup trucks about 15 to 20% more than a sedan."
    },
    {
      question: "How long does it take to ship a car from Ohio?",
      answer: "Transit time depends on distance: Columbus to Miami takes about 3 to 4 days and Cleveland to Dallas takes about 3 to 4 days. Add 1 to 5 days after booking for a carrier to be assigned and arrive for pickup."
    },
    {
      question: "When is the cheapest time to ship a car in Ohio?",
      answer: "Late winter and early spring (roughly February through April) usually bring the lowest prices and fastest carrier assignment. Local demand in Ohio: Steady year-round Midwest automotive manufacturing and dealership logistics. Booking 1 to 2 weeks ahead and keeping your pickup dates flexible also lowers the price."
    },
    {
      question: "Do you offer door-to-door car shipping in Ohio?",
      answer: "Yes. We arrange door-to-door pickup and delivery across Ohio, including Columbus, Cleveland, Cincinnati, Toledo, Akron and Dayton. If a full-size carrier can't safely reach your street, the driver will meet you at a nearby open spot such as a large parking lot."
    },
    {
      question: "Should I choose open or enclosed transport in Ohio?",
      answer: "Open transport is the most affordable option and works well for everyday cars. Open multi-car haulers carry standard cars. Enclosed transport is popular for collector cars in Cleveland and Cincinnati. Enclosed transport typically costs 40 to 60% more than open."
    },
    {
      question: "What documents do I need to ship a car from Ohio?",
      answer: "Have a photo ID, the vehicle registration (or title), and proof of insurance ready. At pickup and delivery you'll sign the Bill of Lading, which records the car's condition, so keep a copy from both ends. If someone else will hand over or receive the car, give them a signed authorization note."
    },
    {
      question: "Do I have to pay a deposit to ship my car from Ohio?",
      answer: "No. America Car Transport does not ask for an upfront deposit. Be cautious with any company that demands a large payment before a verified carrier has been assigned to your vehicle."
    }
  ],
  
  };
