// Extra content for the shorter route pages. Prices are the ones each route page
// already shows; vehicle-type prices are derived from them with the site-wide
// adjustments (SUV +10–15%, pickup +15–20%).
export interface RouteGuide {
  from: string;
  to: string;
  fromCities: string[];
  toCities: string[];
  openLow: number;
  openHigh: number;
  encLow: number;
  encHigh: number;
  transit: string;
  highways: string;
  cityPairs: Array<{ from: string; to: string; miles: string }>;
  whoShips: string[];
  seasonNote: string;
  faqs: Array<{ question: string; answer: string }>;
}

const money = (n: number) => "$" + (Math.round(n / 10) * 10).toLocaleString("en-US");

export function vehicleRows(g: RouteGuide) {
  return [
    { type: "Sedan / compact car", price: `${money(g.openLow)} – ${money(g.openHigh)}`, note: "Base price" },
    { type: "SUV / minivan", price: `${money(g.openLow * 1.1)} – ${money(g.openHigh * 1.15)}`, note: "About 10–15% more" },
    { type: "Pickup truck", price: `${money(g.openLow * 1.15)} – ${money(g.openHigh * 1.2)}`, note: "About 15–20% more" },
    { type: "Any vehicle, enclosed", price: `${money(g.encLow)} – ${money(g.encHigh)}`, note: "Full weather protection" },
  ];
}

function commonFaqs(g: Omit<RouteGuide, "faqs">) {
  return [
    {
      question: `How much does it cost to ship an SUV or pickup truck from ${g.from} to ${g.to}?`,
      answer: `An SUV or minivan typically costs about ${money(g.openLow * 1.1)} to ${money(g.openHigh * 1.15)} on an open carrier from ${g.from} to ${g.to}, and a pickup truck about ${money(g.openLow * 1.15)} to ${money(g.openHigh * 1.2)}. Larger vehicles take more space on the truck, so they cost more than a sedan (${money(g.openLow)} to ${money(g.openHigh)}).`,
    },
    {
      question: `Should I choose open or enclosed transport from ${g.from} to ${g.to}?`,
      answer: `Open transport (${money(g.openLow)} to ${money(g.openHigh)}) is the most affordable choice and works well for everyday cars. Enclosed transport (${money(g.encLow)} to ${money(g.encHigh)}) protects the car from weather and road debris and is recommended for luxury, classic, or exotic vehicles.`,
    },
    {
      question: `Do you offer door-to-door car shipping from ${g.from} to ${g.to}?`,
      answer: `Yes. We pick up from ${g.fromCities.slice(0, 4).join(", ")} and anywhere else in ${g.from}, and deliver to ${g.toCities.slice(0, 4).join(", ")} and the rest of ${g.to}. If a full-size carrier can't reach your street, the driver will meet you at a nearby open spot such as a large parking lot.`,
    },
    {
      question: `When is the best time to ship a car from ${g.from} to ${g.to}?`,
      answer: `${g.seasonNote} Booking 1 to 2 weeks ahead and keeping your pickup window flexible usually gets the best price.`,
    },
  ];
}

function guide(g: Omit<RouteGuide, "faqs">, extra: RouteGuide["faqs"] = []): RouteGuide {
  return { ...g, faqs: [...commonFaqs(g), ...extra] };
}

const docsFaq = (from: string, to: string) => ({
  question: `What do I need to ship my car from ${from} to ${to}?`,
  answer: "A photo ID, the vehicle registration (or title), and proof of insurance. You'll sign the Bill of Lading at pickup and delivery, which records the car's condition. Remove toll tags and valuables, and leave about a quarter tank of gas.",
});

const depositFaq = {
  question: "Do I need to pay a deposit to book?",
  answer: "No. America Car Transport does not ask for an upfront deposit. Be cautious with any company that demands a large payment before a verified carrier has been assigned.",
};

export const routeGuides: Record<string, RouteGuide> = {
  "california-to-washington": guide(
    {
      from: "California", to: "Washington",
      fromCities: ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "San Jose", "Fresno"],
      toCities: ["Seattle", "Tacoma", "Spokane", "Bellevue", "Vancouver", "Olympia"],
      openLow: 550, openHigh: 950, encLow: 850, encHigh: 1350, transit: "2 – 4 days", highways: "I-5",
      cityPairs: [
        { from: "San Francisco, CA", to: "Seattle, WA", miles: "~810" },
        { from: "Sacramento, CA", to: "Seattle, WA", miles: "~750" },
        { from: "Los Angeles, CA", to: "Seattle, WA", miles: "~1,135" },
        { from: "San Diego, CA", to: "Seattle, WA", miles: "~1,255" },
      ],
      whoShips: ["Tech workers relocating between the Bay Area and Seattle", "Military moves to Joint Base Lewis-McChord", "College students heading to Washington universities", "Buyers of vehicles purchased out of state"],
      seasonNote: "Late winter and early spring usually bring the lowest prices. In winter, snow on the Siskiyou Pass along I-5 in southern Oregon can add a day to transit.",
    },
    [docsFaq("California", "Washington"), depositFaq],
  ),
  "georgia-to-new-york": guide(
    {
      from: "Georgia", to: "New York",
      fromCities: ["Atlanta", "Savannah", "Augusta", "Macon", "Columbus", "Athens"],
      toCities: ["New York City", "Long Island", "Westchester", "Albany", "Buffalo", "Rochester"],
      openLow: 600, openHigh: 950, encLow: 950, encHigh: 1400, transit: "2 – 4 days", highways: "I-85 and I-95",
      cityPairs: [
        { from: "Atlanta, GA", to: "New York City, NY", miles: "~870" },
        { from: "Savannah, GA", to: "New York City, NY", miles: "~800" },
        { from: "Augusta, GA", to: "New York City, NY", miles: "~760" },
        { from: "Atlanta, GA", to: "Buffalo, NY", miles: "~905" },
      ],
      whoShips: ["Families relocating between Atlanta and the New York metro", "College students at Georgia and New York schools", "Military PCS moves from Georgia's Army and Air Force bases", "Spring snowbird return trips heading north"],
      seasonNote: "Late winter and early fall usually bring the lowest prices. Spring is busier northbound as snowbirds return from the Southeast.",
    },
    [docsFaq("Georgia", "New York"), depositFaq],
  ),
  "illinois-to-florida": guide(
    {
      from: "Illinois", to: "Florida",
      fromCities: ["Chicago", "Naperville", "Aurora", "Rockford", "Springfield", "Peoria"],
      toCities: ["Miami", "Orlando", "Tampa", "Jacksonville", "Fort Myers", "Naples"],
      openLow: 650, openHigh: 1050, encLow: 1000, encHigh: 1550, transit: "2 – 4 days", highways: "I-65 and I-75",
      cityPairs: [
        { from: "Chicago, IL", to: "Orlando, FL", miles: "~1,150" },
        { from: "Chicago, IL", to: "Tampa, FL", miles: "~1,170" },
        { from: "Chicago, IL", to: "Miami, FL", miles: "~1,380" },
        { from: "Springfield, IL", to: "Jacksonville, FL", miles: "~975" },
      ],
      whoShips: ["Snowbirds spending the winter in Florida", "Retirees relocating from the Chicago area", "Families moving for work in Orlando, Tampa and Miami", "Buyers of vehicles purchased in Florida"],
      seasonNote: "October through December is the busiest and priciest time heading south, as snowbirds leave the Midwest. Late spring and summer usually bring lower southbound prices.",
    },
    [
      { question: "Can I ship my car to Florida for the winter and back in the spring?", answer: "Yes. Many Illinois customers book a southbound trip in the fall and a return trip in the spring. Booking each leg 1 to 2 weeks ahead helps, since both directions get busy during snowbird season." },
      docsFaq("Illinois", "Florida"),
      depositFaq,
    ],
  ),
  "texas-to-new-york": guide(
    {
      from: "Texas", to: "New York",
      fromCities: ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth", "El Paso"],
      toCities: ["New York City", "Long Island", "Westchester", "Albany", "Buffalo", "Rochester"],
      openLow: 850, openHigh: 1350, encLow: 1300, encHigh: 1900, transit: "3 – 5 days", highways: "I-30, I-40 and I-81",
      cityPairs: [
        { from: "Dallas, TX", to: "New York City, NY", miles: "~1,550" },
        { from: "Houston, TX", to: "New York City, NY", miles: "~1,630" },
        { from: "Austin, TX", to: "New York City, NY", miles: "~1,750" },
        { from: "San Antonio, TX", to: "New York City, NY", miles: "~1,830" },
      ],
      whoShips: ["Corporate relocations between Texas and New York", "Military PCS moves from Texas Army and Air Force bases", "College students heading to New York schools", "Buyers of vehicles purchased in Texas"],
      seasonNote: "Late winter and early spring usually bring the lowest prices. In winter, snow along I-81 and in upstate New York can add a day or two to delivery.",
    },
    [docsFaq("Texas", "New York"), depositFaq],
  ),
  "texas-to-florida": guide(
    {
      from: "Texas", to: "Florida",
      fromCities: ["Houston", "Dallas", "San Antonio", "Austin", "Fort Worth", "Corpus Christi"],
      toCities: ["Miami", "Orlando", "Tampa", "Jacksonville", "Pensacola", "Fort Lauderdale"],
      openLow: 650, openHigh: 1050, encLow: 1000, encHigh: 1550, transit: "2 – 4 days", highways: "I-10",
      cityPairs: [
        { from: "Houston, TX", to: "Orlando, FL", miles: "~970" },
        { from: "Dallas, TX", to: "Orlando, FL", miles: "~1,110" },
        { from: "Houston, TX", to: "Miami, FL", miles: "~1,180" },
        { from: "San Antonio, TX", to: "Tampa, FL", miles: "~1,080" },
      ],
      whoShips: ["Families relocating along the Gulf Coast", "Snowbirds heading to Florida for the winter", "Military moves to Pensacola, Jacksonville and Tampa bases", "Buyers of vehicles purchased in Texas"],
      seasonNote: "Fall snowbird season pushes Florida-bound prices up. Late spring and summer usually bring lower prices, though hurricane season can occasionally delay pickups along the Gulf.",
    },
    [docsFaq("Texas", "Florida")],
  ),
  "california-to-new-york": guide(
    {
      from: "California", to: "New York",
      fromCities: ["Los Angeles", "San Francisco", "San Diego", "San Jose", "Sacramento", "Oakland"],
      toCities: ["New York City", "Long Island", "Westchester", "Albany", "Buffalo", "Rochester"],
      openLow: 1150, openHigh: 1650, encLow: 1650, encHigh: 2400, transit: "5 – 7 days", highways: "I-40 and I-80",
      cityPairs: [],
      whoShips: ["Coast-to-coast job relocations", "Students moving to New York colleges", "Owners of classic and luxury cars moving east", "Buyers of vehicles purchased in California"],
      seasonNote: "Late winter and early spring usually bring the lowest prices. Summer is the busiest moving season, and winter storms on I-80 can add a day or two.",
    },
    [docsFaq("California", "New York")],
  ),
  "new-york-to-california": guide(
    {
      from: "New York", to: "California",
      fromCities: ["New York City", "Long Island", "Westchester", "Albany", "Buffalo", "Rochester"],
      toCities: ["Los Angeles", "San Francisco", "San Diego", "San Jose", "Sacramento", "Oakland"],
      openLow: 1150, openHigh: 1650, encLow: 1650, encHigh: 2400, transit: "5 – 7 days", highways: "I-80 and I-40",
      cityPairs: [],
      whoShips: ["Coast-to-coast job relocations", "Students moving to California universities", "Owners of classic and luxury cars moving west", "Buyers of vehicles purchased in New York"],
      seasonNote: "Late winter and early spring usually bring the lowest prices. Summer is the busiest moving season, and winter storms in the Rockies can add a day or two.",
    },
    [docsFaq("New York", "California")],
  ),
  "california-to-texas": guide(
    {
      from: "California", to: "Texas",
      fromCities: ["Los Angeles", "San Francisco", "San Diego", "San Jose", "Sacramento", "Fresno"],
      toCities: ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth", "El Paso"],
      openLow: 1000, openHigh: 1400, encLow: 1350, encHigh: 1950, transit: "3 – 5 days", highways: "I-10 and I-40",
      cityPairs: [],
      whoShips: ["Families and workers relocating to Austin, Dallas and Houston", "Tech and corporate relocations", "Military PCS moves to Texas bases", "Buyers of vehicles purchased in California"],
      seasonNote: "Late winter and early spring usually bring the lowest prices. Summer heat across the desert is hard on tires and cooling systems, so check both before pickup.",
    },
    [docsFaq("California", "Texas")],
  ),
  "texas-to-california": guide(
    {
      from: "Texas", to: "California",
      fromCities: ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth", "El Paso"],
      toCities: ["Los Angeles", "San Diego", "San Francisco", "San Jose", "Sacramento", "Fresno"],
      openLow: 1000, openHigh: 1400, encLow: 1350, encHigh: 1950, transit: "3 – 5 days", highways: "I-10 and I-40",
      cityPairs: [],
      whoShips: ["Job relocations to Los Angeles, the Bay Area and San Diego", "Students moving to California universities", "Military moves to San Diego and Camp Pendleton", "Buyers of vehicles purchased in Texas"],
      seasonNote: "Late winter and early spring usually bring the lowest prices. Summer heat across the desert is hard on tires and cooling systems, so check both before pickup.",
    },
    [docsFaq("Texas", "California")],
  ),
  "california-to-illinois": guide(
    {
      from: "California", to: "Illinois",
      fromCities: ["Los Angeles", "San Francisco", "San Diego", "San Jose", "Sacramento", "Oakland"],
      toCities: ["Chicago", "Naperville", "Aurora", "Rockford", "Springfield", "Peoria"],
      openLow: 1000, openHigh: 1400, encLow: 1450, encHigh: 2050, transit: "4 – 6 days", highways: "I-80",
      cityPairs: [],
      whoShips: ["Job relocations to the Chicago area", "Students moving to Illinois universities", "Families moving closer to relatives in the Midwest", "Buyers of vehicles purchased in California"],
      seasonNote: "Late spring and early fall usually bring the best prices. In winter, snow on I-80 through the Sierra Nevada and the Rockies can add a day or two, and Chicago winters call for enclosed transport on high-value cars.",
    },
    [docsFaq("California", "Illinois")],
  ),
};
