import React from "react";
import { StateData } from "@/types/location";

interface StateGeoSchemaProps {
  state: StateData;
}

export default function StateGeoSchema({ state }: StateGeoSchemaProps) {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${state.canonical}#webpage`,
        "url": state.canonical,
        "name": state.metaTitle,
        "description": state.metaDescription,
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.americacartransport.com/#website",
          "name": "America Car Transport",
          "url": "https://www.americacartransport.com"
        }
      },
      {
        "@type": "AdministrativeArea",
        "@id": `${state.canonical}#area`,
        "name": state.name,
        "containedInPlace": {
          "@type": "Country",
          "name": "United States"
        }
      },
      {
        "@type": "Service",
        "@id": `${state.canonical}#service`,
        "name": `${state.name} Auto Transport Services`,
        "serviceType": "Car Shipping",
        "provider": {
          "@type": "Organization",
          "name": "America Car Transport",
          "url": "https://www.americacartransport.com",
          "telephone": "(530) 725-5383"
        },
        "areaServed": {
          "@id": `${state.canonical}#area`
        },
        "description": state.heroSubtitle
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${state.canonical}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.americacartransport.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Locations",
            "item": "https://www.americacartransport.com/locations"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `${state.name} Car Shipping`,
            "item": state.canonical
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${state.canonical}#faq`,
        "mainEntity": state.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "ItemList",
        "@id": `${state.canonical}#hubs`,
        "name": `${state.name} Major Logistics Hubs & Ports`,
        "itemListElement": [
          ...state.majorCities.map((city, idx) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "name": `${city.name}, ${state.abbreviation} Staging Hub`
          })),
          ...state.majorPorts.map((port, idx) => ({
            "@type": "ListItem",
            "position": state.majorCities.length + idx + 1,
            "name": `${port} Maritime Auto Hub`
          }))
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}
