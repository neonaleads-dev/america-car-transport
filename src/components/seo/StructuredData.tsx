"use client";

import React from "react";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://americacartransport.com/#website",
      "url": "https://americacartransport.com",
      "name": "America Car Transport",
      "description": "America's leading bonded & insured auto transport network. Compare verified carriers, lock in instant rates, and ship vehicles nationwide.",
      "publisher": {
        "@id": "https://americacartransport.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://americacartransport.com/faq?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": ["LocalBusiness", "AutomotiveBusiness"],
      "@id": "https://americacartransport.com/#organization",
      "name": "America Car Transport",
      "url": "https://americacartransport.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://americacartransport.com/#logo",
        "url": "https://americacartransport.com/america-car-transport-logo.png",
        "contentUrl": "https://americacartransport.com/america-car-transport-logo.png",
        "caption": "America Car Transport - Official Logo",
        "width": "827",
        "height": "443"
      },
      "image": "https://americacartransport.com/america-car-transport-logo.png",
      "telephone": "(530) 725-5383",
      "email": "support@americacartransport.com",
      "priceRange": "$$",
      "description": "America's leading bonded & insured auto transport network. Compare verified carriers, lock in instant rates, and ship vehicles nationwide with zero upfront deposit.",
      "identifier": [
        {
          "@type": "PropertyValue",
          "name": "USDOT License Number",
          "value": "3849102"
        },
        {
          "@type": "PropertyValue",
          "name": "MC Number",
          "value": "1098472"
        }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5.0",
        "worstRating": "1.0",
        "ratingCount": "10450",
        "reviewCount": "10450"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Marcus Sterling" },
          "datePublished": "2026-07-25",
          "reviewBody": "America Car Transport handled my Porsche in an enclosed trailer with zero stress. Driver arrived on time and delivered in pristine condition.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Sarah Jenkins" },
          "datePublished": "2026-07-21",
          "reviewBody": "I was nervous about moving my truck cross-country, but their zero upfront deposit policy gave me confidence. Car arrived 1 day early.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        }
      ]
    },
    {
      "@type": "SiteNavigationElement",
      "@id": "https://americacartransport.com/#navigation",
      "name": "Main Site Navigation",
      "hasPart": [
        {
          "@type": "WebPage",
          "name": "Car Shipping Cost Calculator (2026)",
          "url": "https://americacartransport.com/tools/car-shipping-cost-calculator",
          "description": "Calculate instant auto transport quotes by route distance and vehicle type."
        },
        {
          "@type": "WebPage",
          "name": "Central FAQ Hub",
          "url": "https://americacartransport.com/faq",
          "description": "Complete auto transport knowledge base with direct answers to shipping questions."
        },
        {
          "@type": "WebPage",
          "name": "FMCSA & USDOT Licensing & Insurance",
          "url": "https://americacartransport.com/licensing-insurance",
          "description": "Verify USDOT #3849102 and MC #1098472 credentials and cargo insurance policy."
        },
        {
          "@type": "WebPage",
          "name": "Auto Shipping Services",
          "url": "https://americacartransport.com/services",
          "description": "Explore open, enclosed, door-to-door, expedited, and terminal auto shipping options."
        },
        {
          "@type": "WebPage",
          "name": "Locations & State Hubs Directory",
          "url": "https://americacartransport.com/locations",
          "description": "State-by-state vehicle shipping guides and local logistics hubs."
        },
        {
          "@type": "WebPage",
          "name": "Interstate Route Directory",
          "url": "https://americacartransport.com/routes",
          "description": "Compare distance, cost, and transit times across top US vehicle shipping corridors."
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://americacartransport.com/#service",
      "name": "Nationwide Auto Transport & Car Shipping Service",
      "serviceType": "Auto Transport, Door-to-Door Car Shipping, Enclosed Vehicle Shipping",
      "provider": {
        "@id": "https://americacartransport.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Vehicle Shipping Options",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Open Carrier Car Transport"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Enclosed Auto Transport"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Door-to-Door Vehicle Shipping"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://americacartransport.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to transport a car?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost to transport a car depends on distance, vehicle size, transport type (open vs. enclosed), and seasonal demand. Typical domestic shipments range from $500 to $1,500."
          }
        },
        {
          "@type": "Question",
          "name": "Is my vehicle insured during transport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, every carrier in our network is fully vetted, licensed with USDOT/FMCSA, and carries full cargo insurance with $0 deductible for vehicle owners."
          }
        },
        {
          "@type": "Question",
          "name": "How long does auto transport take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Short-distance trips (100-500 miles) take 1-2 days, while cross-country shipments (e.g., CA to NY) take 5-7 days."
          }
        }
      ]
    }
  ]
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
