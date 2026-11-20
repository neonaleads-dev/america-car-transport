import { StateData } from "@/types/location";

export const pennsylvaniaData: StateData = {
  name: "Pennsylvania",
  slug: "pennsylvania",
  abbreviation: "PA",
  heroTitle: "Pennsylvania Car Shipping Services | Door-to-Door Auto Transport",
  heroSubtitle: "Ship your vehicle safely to or from Pennsylvania. Direct door-to-door auto shipping serving Philadelphia, Pittsburgh, Allentown, and Harrisburg with zero deposit.",
  metaTitle: "Pennsylvania Car Shipping & Auto Transport | Rates & Quotes",
  metaDescription: "Top-rated Pennsylvania car shipping services. Compare open & enclosed auto transport quotes in Philadelphia, Pittsburgh, and Harrisburg. Fully licensed and bonded.",
  canonical: "https://www.americacartransport.com/locations/pennsylvania",
  
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
    },
    {
      question: "How much does it cost to ship a car from Pennsylvania?",
      answer: "Shipping a standard sedan out of Pennsylvania on open transport typically costs $780 to $1,020 from Philadelphia to Miami (about 1,020 miles) and $790 to $1,030 from Pittsburgh to Tampa (about 1,010 miles). Enclosed transport usually costs 40 to 60% more. For an exact price on your ZIP codes, use the quote calculator at the top of this page — no email required."
    },
    {
      question: "How much does it cost to ship a car to Pennsylvania?",
      answer: "Inbound prices depend on where the car starts. For example, Los Angeles, CA to Philadelphia runs about $1,300 to $1,650 on an open carrier. SUVs cost about 10 to 15% more and pickup trucks about 15 to 20% more than a sedan."
    },
    {
      question: "How long does it take to ship a car from Pennsylvania?",
      answer: "Transit time depends on distance: Philadelphia to Miami takes about 3 to 4 days and Pittsburgh to Tampa takes about 3 to 4 days. Add 1 to 5 days after booking for a carrier to be assigned and arrive for pickup."
    },
    {
      question: "When is the cheapest time to ship a car in Pennsylvania?",
      answer: "Late winter and early spring (roughly February through April) usually bring the lowest prices and fastest carrier assignment. Local demand in Pennsylvania: High East Coast corridor volume year-round, plus heavy autumn/spring snowbird relocations to Florida. Booking 1 to 2 weeks ahead and keeping your pickup dates flexible also lowers the price."
    },
    {
      question: "Do you offer door-to-door car shipping in Pennsylvania?",
      answer: "Yes. We arrange door-to-door pickup and delivery across Pennsylvania, including Philadelphia, Pittsburgh, Allentown, Erie, Reading and Harrisburg. If a full-size carrier can't safely reach your street, the driver will meet you at a nearby open spot such as a large parking lot."
    },
    {
      question: "Should I choose open or enclosed transport in Pennsylvania?",
      answer: "Open transport is the most affordable option and works well for everyday cars. Open transport is most economical for daily vehicles. Enclosed trailers protect classic cars from salt corrosion during PA winters. Enclosed transport typically costs 40 to 60% more than open."
    },
    {
      question: "What documents do I need to ship a car from Pennsylvania?",
      answer: "Have a photo ID, the vehicle registration (or title), and proof of insurance ready. At pickup and delivery you'll sign the Bill of Lading, which records the car's condition, so keep a copy from both ends. If someone else will hand over or receive the car, give them a signed authorization note."
    },
    {
      question: "Do I have to pay a deposit to ship my car from Pennsylvania?",
      answer: "No. America Car Transport does not ask for an upfront deposit. Be cautious with any company that demands a large payment before a verified carrier has been assigned to your vehicle."
    }
  ],
  
  };
