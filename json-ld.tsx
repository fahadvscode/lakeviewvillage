import Script from "next/script"
import { SITE_URL } from "@/lib/site-config"
import { AURA } from "@/lib/aura-config"
import { siteImageUrl, type SiteImagePath } from "@/lib/images"

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: AURA.name,
    url: SITE_URL,
    description: `Independent guide to ${AURA.name} by ${AURA.builder}—${AURA.productType} in Mississauga's ${AURA.communityName}. Register for VIP access to pricing and floor plans.`,
  }

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function RealEstateAgentSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: AURA.name,
    description: `Independent pre-construction advisory for ${AURA.name} by ${AURA.builder} in Mississauga, Ontario.`,
    url: SITE_URL,
    areaServed: {
      "@type": "City",
      name: "Mississauga",
      containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mississauga",
      addressRegion: "Ontario",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.5839,
      longitude: -79.5231,
    },
    priceRange: "$500K - $700K+",
    knowsAbout: [
      AURA.name,
      `${AURA.builder} townhomes`,
      "Lakeview Village Mississauga",
      "Pre-construction townhomes GTA",
      "Waterfront townhomes Mississauga",
    ],
  }

  return (
    <Script
      id="realestate-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface TownhomeProductSchemaProps {
  name: string
  description: string
  builder: string
  priceFrom: string
  priceValue: number
  bedrooms: string
  sqftRange: string
  image: SiteImagePath
  url: string
}

export function TownhomeProductSchema({
  name,
  description,
  builder,
  priceFrom,
  priceValue,
  bedrooms,
  sqftRange,
  image,
  url,
}: TownhomeProductSchemaProps) {
  const imageUrl = siteImageUrl(image, SITE_URL)
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    brand: { "@type": "Organization", name: builder },
    image: imageUrl,
    url,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "CAD",
      lowPrice: priceValue,
      offerCount: "Multiple units available",
      availability: "https://schema.org/PreOrder",
      priceValidUntil: "2027-12-31",
      seller: { "@type": "Organization", name: builder },
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Bedrooms", value: bedrooms },
      { "@type": "PropertyValue", name: "Square Footage", value: sqftRange },
      {
        "@type": "PropertyValue",
        name: "Location",
        value: `${AURA.communityName}, Mississauga, Ontario`,
      },
    ],
  }

  return (
    <Script
      id={`product-schema-${name.toLowerCase().replace(/\s+/g, "-")}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface FAQItem {
  question: string
  answer: string
}

export function FAQPageSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface BreadcrumbItem {
  name: string
  url: string
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function DiscoveryCentreLocalBusinessSchema() {
  const dc = AURA.discoveryCentre
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: dc.name,
    description: `Visit the ${dc.name} to learn about ${AURA.name} by ${AURA.builder} and the ${AURA.communityName} master plan.`,
    url: `${SITE_URL}/discovery-centre`,
    address: {
      "@type": "PostalAddress",
      streetAddress: dc.street,
      addressLocality: dc.city,
      addressRegion: dc.region,
      postalCode: dc.postalCode,
      addressCountry: dc.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.5736,
      longitude: -79.5432,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "12:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "12:00",
        closes: "17:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Mississauga",
      containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" },
    },
  }

  return (
    <Script
      id="discovery-centre-local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LakeviewVillagePlaceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: AURA.communityName,
    description: `A ${AURA.communityAcres}-acre master-planned waterfront community in Mississauga, Ontario—home to ${AURA.name} by ${AURA.builder}.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lakeshore Road East & Dixie Road",
      addressLocality: "Mississauga",
      addressRegion: "Ontario",
      postalCode: "L5E",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.5839,
      longitude: -79.5231,
    },
    containedInPlace: { "@type": "City", name: "Mississauga" },
    hasMap: "https://maps.google.com/?q=Lakeview+Village+Mississauga",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Waterfront Access" },
      { "@type": "LocationFeatureSpecification", name: "Parks & Trails" },
      { "@type": "LocationFeatureSpecification", name: "Transit (GO Train)" },
      { "@type": "LocationFeatureSpecification", name: "Retail & Dining" },
      { "@type": "LocationFeatureSpecification", name: "Conservation Area" },
    ],
  }

  return (
    <Script
      id="place-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ItemListSchema({
  name,
  items,
}: {
  name: string
  items: { name: string; url: string; description?: string }[]
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
      description: item.description,
    })),
  }

  return (
    <Script
      id="item-list-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
