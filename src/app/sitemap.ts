import { MetadataRoute } from "next";
import { getAllStateSlugs } from "@/data/states";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://americacartransport.com";
  const lastModified = new Date();

  // Core Static Top-Level Pages (High Sitelink Candidates)
  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools/car-shipping-cost-calculator`,
      lastModified,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/routes`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/licensing-insurance`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  // Specific Service Category Pages
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
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const vehiclePages = [
    "motorcycle",
    "suv-and-truck",
    "non-running",
  ].map((slug) => ({
    url: `${baseUrl}/ship-a-car/${slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // State Landing Pages
  const stateSlugs = getAllStateSlugs();
  const statePages = stateSlugs.map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Route Landing Pages
  const routePages = [
    "california-to-florida",
    "california-to-texas",
    "texas-to-california",
    "california-to-new-york",
    "new-york-to-california",
    "california-to-illinois",
  ].map((slug) => ({
    url: `${baseUrl}/routes/${slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Standalone Resource Guides
  const resourcePages = [
    "california-driving-laws",
    "how-to-avoid-car-shipping-scams",
  ].map((slug) => ({
    url: `${baseUrl}/resources/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
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
