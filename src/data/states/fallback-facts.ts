// Real per-state facts for the states that don't have a hand-written data file.
// Distances are estimated driving miles (great-circle distance x 1.2 road factor,
// rounded); prices follow the site's published distance tiers.

type Coord = [number, number];

export const HUBS: Record<string, { st: string; c: Coord }> = {
  Orlando: { st: "FL", c: [28.54, -81.38] },
  Miami: { st: "FL", c: [25.76, -80.19] },
  Houston: { st: "TX", c: [29.76, -95.37] },
  Dallas: { st: "TX", c: [32.78, -96.8] },
  Atlanta: { st: "GA", c: [33.75, -84.39] },
  Chicago: { st: "IL", c: [41.88, -87.63] },
  "Los Angeles": { st: "CA", c: [34.05, -118.24] },
  Phoenix: { st: "AZ", c: [33.45, -112.07] },
  Denver: { st: "CO", c: [39.74, -104.99] },
  Seattle: { st: "WA", c: [47.61, -122.33] },
  "New York": { st: "NY", c: [40.71, -74.01] },
  Charlotte: { st: "NC", c: [35.23, -80.84] },
};

export interface StateFacts {
  capital: string;
  interstates: string[];
  city1: Coord; // coordinates of the first city listed in STATE_HUB_MAP
  out: string[]; // hub names for outbound example routes
  in: string; // hub name for the inbound example route
  climate: string;
  season: string;
  peak: string;
  special?: "hawaii" | "alaska";
}

export const STATE_FACTS: Record<string, StateFacts> = {
  alabama: { capital: "Montgomery", interstates: ["I-65", "I-20", "I-59", "I-10"], city1: [33.52, -86.8], out: ["Orlando", "Houston"], in: "Chicago", climate: "Hot, humid summers. Hurricane season (June to November) can delay pickups near Mobile and the Gulf Coast.", season: "Fall brings heavy snowbird traffic toward Florida and the Gulf Coast, and Huntsville's aerospace and Army jobs keep relocation demand steady year-round.", peak: "May through August and October through December" },
  alaska: { capital: "Juneau", interstates: ["Alaska Highway", "Glenn Highway", "Parks Highway"], city1: [61.22, -149.9], out: [], in: "Seattle", climate: "Long, severe winters and limited road access. Most vehicles move by ocean freight through the Port of Tacoma or Seattle to Anchorage.", season: "Summer is the busiest moving season, especially for military PCS moves to bases near Anchorage and Fairbanks.", peak: "May through September", special: "alaska" },
  arizona: { capital: "Phoenix", interstates: ["I-10", "I-17", "I-40", "I-8"], city1: [33.45, -112.07], out: ["Los Angeles", "Dallas"], in: "Chicago", climate: "Extreme summer heat above 110°F in Phoenix and Tucson; check tire pressure and coolant before pickup.", season: "Snowbirds arrive from October to December and leave in April and May, which raises prices in both directions.", peak: "October through December and April through May" },
  arkansas: { capital: "Little Rock", interstates: ["I-40", "I-30", "I-49", "I-55"], city1: [34.75, -92.29], out: ["Dallas", "Chicago"], in: "Los Angeles", climate: "Hot, humid summers and occasional winter ice storms that can slow pickups in the Ozarks.", season: "Steady relocation demand around Little Rock and fast-growing Northwest Arkansas (Bentonville, Rogers, Fayetteville).", peak: "May through August" },
  colorado: { capital: "Denver", interstates: ["I-25", "I-70", "I-76"], city1: [39.74, -104.99], out: ["Los Angeles", "Dallas"], in: "Chicago", climate: "Snow on I-70 mountain passes from October to May can trigger chain laws and add a day to transit.", season: "Summer relocations along the Front Range and ski-season moves to mountain towns.", peak: "May through August" },
  connecticut: { capital: "Hartford", interstates: ["I-95", "I-84", "I-91"], city1: [41.19, -73.2], out: ["Miami", "Orlando"], in: "Los Angeles", climate: "Snowy winters and road salt; enclosed transport protects paint on high-value cars.", season: "Heavy snowbird traffic to Florida in the fall and back north in the spring.", peak: "October through December and March through May" },
  delaware: { capital: "Dover", interstates: ["I-95", "I-495", "US-13"], city1: [39.74, -75.55], out: ["Miami", "Atlanta"], in: "Los Angeles", climate: "Mild winters with occasional snow; coastal storms can affect pickups near the beaches.", season: "Retirees relocating to and from southern Delaware's coast and snowbird trips to Florida.", peak: "May through October" },
  hawaii: { capital: "Honolulu", interstates: ["H-1", "H-2", "H-3"], city1: [21.31, -157.86], out: [], in: "Los Angeles", climate: "Vehicles move by ocean freight between the islands and West Coast ports such as Los Angeles, Long Beach and Oakland.", season: "Military PCS moves and mainland relocations peak in summer.", peak: "May through August", special: "hawaii" },
  idaho: { capital: "Boise", interstates: ["I-84", "I-15", "I-86", "I-90"], city1: [43.62, -116.2], out: ["Seattle", "Los Angeles"], in: "Dallas", climate: "Cold, snowy winters in the north and mountains; Boise winters are milder.", season: "Strong inbound relocation to the Boise area from California and Washington.", peak: "May through September" },
  indiana: { capital: "Indianapolis", interstates: ["I-65", "I-69", "I-70", "I-74"], city1: [39.77, -86.16], out: ["Orlando", "Dallas"], in: "Los Angeles", climate: "Cold winters with snow and lake-effect bands in the north; check antifreeze before winter pickups.", season: "Snowbird trips to Florida in the fall and relocations around Indianapolis year-round.", peak: "May through August and October through December" },
  iowa: { capital: "Des Moines", interstates: ["I-80", "I-35", "I-29"], city1: [41.59, -93.62], out: ["Phoenix", "Orlando"], in: "Los Angeles", climate: "Cold, windy winters with blowing snow on I-80 that can slow transit.", season: "Snowbirds heading to Arizona and Florida for the winter.", peak: "October through December and March through May" },
  kansas: { capital: "Topeka", interstates: ["I-70", "I-35", "I-135"], city1: [37.69, -97.34], out: ["Dallas", "Denver"], in: "Los Angeles", climate: "Hot summers, cold winters and spring storms; high winds can occasionally delay carriers on I-70.", season: "Military PCS moves at Fort Riley and McConnell Air Force Base, plus steady relocations around Wichita and Kansas City.", peak: "May through August" },
  kentucky: { capital: "Frankfort", interstates: ["I-64", "I-65", "I-71", "I-75"], city1: [38.25, -85.76], out: ["Orlando", "Dallas"], in: "Los Angeles", climate: "Hot, humid summers and winter ice that can slow pickups in the hills.", season: "Snowbird trips to Florida and military moves near Fort Knox and Fort Campbell.", peak: "May through August and October through December" },
  louisiana: { capital: "Baton Rouge", interstates: ["I-10", "I-12", "I-20", "I-49"], city1: [29.95, -90.07], out: ["Houston", "Atlanta"], in: "Los Angeles", climate: "Hurricane season (June to November) can delay pickups along the coast; summers are hot and humid.", season: "Steady relocations along the I-10 corridor between New Orleans, Baton Rouge and Texas.", peak: "May through August" },
  maine: { capital: "Augusta", interstates: ["I-95", "I-295"], city1: [43.66, -70.26], out: ["Orlando", "Charlotte"], in: "Los Angeles", climate: "Long, snowy winters and heavy road salt; rural pickups can take longer to schedule.", season: "Snowbird trips to Florida and the Carolinas in the fall and summer-season moves to the coast.", peak: "June through October" },
  maryland: { capital: "Annapolis", interstates: ["I-95", "I-70", "I-83", "I-97"], city1: [39.29, -76.61], out: ["Miami", "Atlanta"], in: "Los Angeles", climate: "Mild winters with occasional snow; summer traffic around Baltimore and Washington can affect pickup timing.", season: "Government and military relocations around Washington, D.C., plus snowbird trips to Florida.", peak: "May through August and October through December" },
  massachusetts: { capital: "Boston", interstates: ["I-90", "I-93", "I-95", "I-91"], city1: [42.36, -71.06], out: ["Miami", "Orlando"], in: "Los Angeles", climate: "Snowy winters and narrow Boston streets; drivers often meet at a nearby open lot for pickup.", season: "Student moves around Boston colleges in late summer and snowbird trips to Florida in the fall.", peak: "August through September and October through December" },
  michigan: { capital: "Lansing", interstates: ["I-75", "I-94", "I-96", "I-69"], city1: [42.33, -83.05], out: ["Orlando", "Phoenix"], in: "Los Angeles", climate: "Lake-effect snow and heavy road salt in winter; enclosed transport protects paint on high-value cars.", season: "Strong snowbird traffic to Florida and Arizona, and auto-industry relocations around Detroit.", peak: "October through December and March through May" },
  minnesota: { capital: "Saint Paul", interstates: ["I-35", "I-94", "I-90"], city1: [44.98, -93.27], out: ["Phoenix", "Orlando"], in: "Dallas", climate: "Very cold winters with snow and ice; check antifreeze and battery before winter pickups.", season: "Snowbirds heading to Arizona and Florida from October to December and returning in spring.", peak: "October through December and March through May" },
  mississippi: { capital: "Jackson", interstates: ["I-20", "I-55", "I-59", "I-10"], city1: [32.3, -90.18], out: ["Houston", "Atlanta"], in: "Chicago", climate: "Hot, humid summers and hurricane season along the Gulf Coast near Gulfport and Biloxi.", season: "Military moves at Keesler and Columbus Air Force Bases and steady regional relocations.", peak: "May through August" },
  missouri: { capital: "Jefferson City", interstates: ["I-70", "I-44", "I-35", "I-55"], city1: [39.1, -94.58], out: ["Dallas", "Phoenix"], in: "Los Angeles", climate: "Hot summers, cold winters and spring storms; carriers run I-70 between Kansas City and St. Louis daily.", season: "Central location means steady cross-country traffic year-round, plus snowbird trips south.", peak: "May through August" },
  montana: { capital: "Helena", interstates: ["I-90", "I-94", "I-15"], city1: [45.78, -108.5], out: ["Denver", "Seattle"], in: "Phoenix", climate: "Severe winters with mountain-pass closures; rural pickups can take longer to schedule.", season: "Summer relocations and snowbirds heading to Arizona for the winter.", peak: "May through September" },
  nebraska: { capital: "Lincoln", interstates: ["I-80", "I-29", "I-680"], city1: [41.26, -95.93], out: ["Dallas", "Phoenix"], in: "Los Angeles", climate: "Cold, windy winters with blowing snow on I-80.", season: "Military moves at Offutt Air Force Base and snowbird trips to Arizona and Texas.", peak: "May through August" },
  nevada: { capital: "Carson City", interstates: ["I-15", "I-80", "I-11"], city1: [36.17, -115.14], out: ["Los Angeles", "Dallas"], in: "Chicago", climate: "Desert heat in Las Vegas summers; snow on I-80 over Donner Pass can slow Reno routes.", season: "Strong inbound relocation from California and steady traffic on the Las Vegas to Los Angeles corridor.", peak: "May through September" },
  "new-hampshire": { capital: "Concord", interstates: ["I-93", "I-89", "I-95"], city1: [42.99, -71.46], out: ["Orlando", "Charlotte"], in: "Los Angeles", climate: "Snowy winters and road salt; rural pickups can take longer to schedule.", season: "Snowbird trips to Florida in the fall and back north in the spring.", peak: "October through December and March through May" },
  "new-jersey": { capital: "Trenton", interstates: ["I-95 / New Jersey Turnpike", "I-78", "I-80", "Garden State Parkway"], city1: [40.74, -74.17], out: ["Miami", "Orlando"], in: "Los Angeles", climate: "Snowy winters and dense traffic around Newark and Jersey City; drivers may meet at a nearby open lot.", season: "One of the busiest snowbird markets: heavy traffic to Florida in the fall and back in the spring.", peak: "October through December and March through May" },
  "new-mexico": { capital: "Santa Fe", interstates: ["I-25", "I-40", "I-10"], city1: [35.08, -106.65], out: ["Phoenix", "Dallas"], in: "Los Angeles", climate: "Dry climate with hot summers; winter snow in the northern mountains and on I-40 near Gallup.", season: "Military moves at Kirtland, Holloman and Cannon Air Force Bases and steady I-40 cross-country traffic.", peak: "May through August" },
  "north-dakota": { capital: "Bismarck", interstates: ["I-94", "I-29"], city1: [46.88, -96.79], out: ["Phoenix", "Dallas"], in: "Los Angeles", climate: "Very cold winters with blizzards that can close I-94 and I-29 for short periods.", season: "Snowbirds heading to Arizona and Texas, and energy-industry relocations in western North Dakota.", peak: "May through September" },
  oklahoma: { capital: "Oklahoma City", interstates: ["I-35", "I-40", "I-44"], city1: [35.47, -97.52], out: ["Dallas", "Phoenix"], in: "Los Angeles", climate: "Hot summers and spring severe-weather season; storms can occasionally delay pickups.", season: "Military moves at Fort Sill and Tinker Air Force Base and steady I-35 and I-40 traffic.", peak: "May through August" },
  oregon: { capital: "Salem", interstates: ["I-5", "I-84", "I-205", "I-405"], city1: [45.52, -122.68], out: ["Los Angeles", "Phoenix"], in: "Dallas", climate: "Wet winters west of the Cascades; snow on the Siskiyou Pass along I-5 can add a day to California routes.", season: "Steady I-5 traffic to California and Washington and summer relocations.", peak: "May through September" },
  "rhode-island": { capital: "Providence", interstates: ["I-95", "I-195", "I-295"], city1: [41.82, -71.41], out: ["Orlando", "Miami"], in: "Los Angeles", climate: "Snowy winters and coastal storms; narrow streets in Providence may require a nearby meeting spot.", season: "Snowbird trips to Florida in the fall and student moves around Providence colleges.", peak: "August through December" },
  "south-carolina": { capital: "Columbia", interstates: ["I-26", "I-20", "I-77", "I-95", "I-85"], city1: [32.78, -79.93], out: ["New York", "Dallas"], in: "Chicago", climate: "Hot, humid summers and hurricane season along the coast near Charleston and Myrtle Beach.", season: "Strong inbound relocation and retirees from the Northeast and Midwest, plus military moves at Fort Jackson and Joint Base Charleston.", peak: "May through August and October through December" },
  "south-dakota": { capital: "Pierre", interstates: ["I-29", "I-90"], city1: [43.55, -96.73], out: ["Phoenix", "Dallas"], in: "Los Angeles", climate: "Cold, windy winters with blowing snow on I-90 and I-29.", season: "Snowbirds heading to Arizona and Texas, and summer moves around Sioux Falls and Rapid City.", peak: "May through September" },
  tennessee: { capital: "Nashville", interstates: ["I-40", "I-24", "I-65", "I-75", "I-81"], city1: [36.16, -86.78], out: ["Orlando", "Dallas"], in: "Los Angeles", climate: "Hot, humid summers and occasional winter ice; I-40 through the Smoky Mountains can slow in bad weather.", season: "Strong inbound relocation to Nashville and Knoxville, plus military moves near Fort Campbell.", peak: "May through August" },
  utah: { capital: "Salt Lake City", interstates: ["I-15", "I-80", "I-70", "I-84"], city1: [40.76, -111.89], out: ["Los Angeles", "Phoenix"], in: "Dallas", climate: "Snowy mountain winters; I-80 through Parleys Canyon and I-70 can require chains.", season: "Strong inbound relocation along the Wasatch Front and steady I-15 traffic to Las Vegas and Los Angeles.", peak: "May through September" },
  vermont: { capital: "Montpelier", interstates: ["I-89", "I-91"], city1: [44.48, -73.21], out: ["Orlando", "Charlotte"], in: "Los Angeles", climate: "Long, snowy winters and rural roads; pickups in remote towns can take longer to schedule.", season: "Snowbird trips to Florida and the Carolinas in the fall and student moves around Burlington.", peak: "June through October" },
  "west-virginia": { capital: "Charleston", interstates: ["I-64", "I-77", "I-79", "I-68"], city1: [38.35, -81.63], out: ["Orlando", "Dallas"], in: "Los Angeles", climate: "Mountain roads and winter snow can slow pickups away from the interstates.", season: "Snowbird trips to Florida and relocations around Charleston and Morgantown.", peak: "May through August and October through December" },
  wisconsin: { capital: "Madison", interstates: ["I-94", "I-43", "I-90", "I-39", "I-41"], city1: [43.04, -87.91], out: ["Orlando", "Phoenix"], in: "Los Angeles", climate: "Cold, snowy winters with road salt; enclosed transport protects paint on high-value cars.", season: "Snowbirds heading to Florida and Arizona from October to December and returning in spring.", peak: "October through December and March through May" },
  wyoming: { capital: "Cheyenne", interstates: ["I-25", "I-80", "I-90"], city1: [41.14, -104.82], out: ["Dallas", "Phoenix"], in: "Los Angeles", climate: "High winds and winter snow on I-80 can close stretches of highway for short periods.", season: "Energy-industry relocations and military moves at F.E. Warren Air Force Base.", peak: "May through September" },
};

export function roadMiles(a: Coord, b: Coord): number {
  const R = 3958.8;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b[0] - a[0]);
  const dLon = toRad(b[1] - a[1]);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a[0])) * Math.cos(toRad(b[0])) * Math.sin(dLon / 2) ** 2;
  return Math.round((2 * R * Math.asin(Math.sqrt(h)) * 1.2) / 10) * 10;
}

// Open-carrier price tiers by distance, matching the site's published ranges.
export function priceTier(miles: number) {
  const tiers: Array<[number, number, number, string]> = [
    [300, 400, 650, "1-2 Days"],
    [500, 450, 850, "1-3 Days"],
    [800, 550, 950, "2-4 Days"],
    [1100, 650, 1050, "2-4 Days"],
    [1500, 800, 1250, "3-5 Days"],
    [2000, 950, 1400, "4-6 Days"],
    [2500, 1050, 1550, "5-7 Days"],
    [Infinity, 1100, 1700, "6-8 Days"],
  ];
  const [, low, high, days] = tiers.find(([max]) => miles <= max)!;
  const fmt = (n: number) => "$" + n.toLocaleString("en-US");
  const encLow = Math.round((low * 1.45) / 50) * 50;
  const encHigh = Math.round((high * 1.5) / 50) * 50;
  return { open: `${fmt(low)} - ${fmt(high)}`, enclosed: `${fmt(encLow)} - ${fmt(encHigh)}`, days, low, high };
}
