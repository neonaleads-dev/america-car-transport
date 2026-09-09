import { MetadataRoute } from "next";
import { getAllStateSlugs } from "@/data/states";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.americacartransport.com";

  // Core Static Top-Level Pages (High Sitelink Candidates)
  const staticPages = [
    {
      url: `${baseUrl}`,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools/car-shipping-cost-calculator`,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/routes`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/licensing-insurance`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reviews`,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    // Spanish Subpaths
    {
      url: `${baseUrl}/es`,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/es/calculadora`,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/es/servicios`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/es/transporte-de-autos-estados-unidos`,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/es/cuanto-cuesta-enviar-un-carro`,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/es/transporte-de-carros-texas`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/es/transporte-de-carros-california`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/es/transporte-de-carros-florida`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/es/transporte-de-carros-nueva-york`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/es/estafas-de-transporte-de-autos`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/es/transporte-de-carros-entre-estados`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  // Specific Service Category Pages (Clean 200 OK Routes Only)
  const servicePages = [
    "open-auto-transport",
    "enclosed-auto-transport",
    "door-to-door-transport",
    "expedited-auto-transport",
    "terminal-to-terminal-shipping",
    "hawaii-car-shipping",
    "classic-and-exotic-car-transport",
    "military-car-shipping",
    "snowbird-car-shipping",
    "college-student-car-shipping",
    "dealer-and-auction-transport",
    "corporate-relocation-transport",
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  // Vehicle Category Pages
  const vehiclePages = [
    "motorcycle",
    "suv-and-truck",
    "non-running",
  ].map((slug) => ({
    url: `${baseUrl}/ship-a-car/${slug}`,
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  // State Landing Pages (All 50 US States)
  const stateSlugs = getAllStateSlugs();
  const statePages = stateSlugs.map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Interstate Route Landing Pages (All 11 Active Corridor Routes)
  const routePages = [
    "california-to-florida",
    "california-to-illinois",
    "california-to-new-york",
    "california-to-texas",
    "florida-to-california",
    "florida-to-illinois",
    "florida-to-new-jersey",
    "florida-to-new-york",
    "new-york-to-california",
    "new-york-to-florida",
    "texas-to-california",
  ].map((slug) => ({
    url: `${baseUrl}/routes/${slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Standalone Resource Guides
  const resourcePages = [
    "california-driving-laws",
    "how-to-avoid-car-shipping-scams",
    "car-shipping-rates-by-state",
    "ship-car-vs-driving-cost",
    "how-car-shipping-quotes-work",
    "snowbird-car-shipping-report",
  ].map((slug) => ({
    url: `${baseUrl}/resources/${slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...vehiclePages,
    ...statePages,
    ...routePages,
    ...resourcePages,
  ];
}
