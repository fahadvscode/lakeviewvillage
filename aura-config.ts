import { SITE_URL } from '@/lib/site-config'

export const AURA = {
  name: 'Aura Lakeview Village',
  shortName: 'Aura',
  builder: 'Caivan Communities',
  builderShort: 'Caivan',
  siteUrl: SITE_URL,
  canonicalPath: '/aura-lakeview-village',
  floorPlansPath: '/aura-lakeview-village/floor-plans',
  vsResalePath: '/aura-lakeview-village-vs-resale',
  priceFrom: 'High $500,000s',
  priceFromShort: 'High $500s',
  priceValue: 550000,
  occupancy: '2027',
  occupancyDetail: 'Anticipated occupancy from summer 2027 (subject to construction schedule)',
  beds: '2-3',
  baths: '2-2.5',
  sqft: '811-1,183',
  sqftDetail: '811 - 1,183 sq. ft.',
  phase1Units: 152,
  productType: '2-storey stacked townhomes',
  parking: 'Underground parking',
  communityName: 'Lakeview Village',
  communityAcres: 177,
  discoveryCentre: {
    name: 'Lakeview Village Discovery Centre',
    street: '985 Jim Tovey Boulevard',
    city: 'Mississauga',
    region: 'ON',
    postalCode: 'L5E 0A8',
    country: 'CA',
    hours: 'Mon–Thu 12–7pm, Sat–Sun 12–5pm (Fri closed)',
  },
  lastContentUpdate: '2026-05-26',
} as const

export const INDEPENDENT_DISCLAIMER =
  'Independent real estate website. Not affiliated with Caivan Communities. Trademarks belong to their owners. Pricing and availability subject to change.'

export const PRICING_DISCLAIMER =
  'Prices are estimates for illustrative purposes only. Subject to change without notice. E.&O.E. Confirm current pricing with sales.'

export function auraUrl(path: string = AURA.canonicalPath) {
  return `${SITE_URL}${path}`
}

export const AURA_FLOOR_PLANS = [
  {
    name: 'The Birch',
    slug: 'birch',
    sqft: '811',
    beds: '2',
    baths: '2',
    price: 'High $500,000s',
    description:
      'Compact two-bedroom stacked townhome ideal for first-time buyers and investors seeking efficient waterfront-adjacent living.',
  },
  {
    name: 'The Cedar',
    slug: 'cedar',
    sqft: '948',
    beds: '2',
    baths: '2.5',
    price: 'High $500,000s',
    description:
      'Two-bedroom layout with additional half-bath flexibility—suited for couples and small households prioritizing modern finishes.',
  },
  {
    name: 'The Maple',
    slug: 'maple',
    sqft: '1,028',
    beds: '3',
    baths: '2.5',
    price: 'Low $600,000s',
    popular: true,
    description:
      'Popular three-bedroom plan balancing livable square footage with Caivan 360 energy-efficient construction.',
  },
  {
    name: 'The Oak',
    slug: 'oak',
    sqft: '1,138',
    beds: '3',
    baths: '2.5',
    price: 'Mid $600,000s',
    description:
      'Largest Aura layout with three bedrooms—best for young families and right-sizers who want maximum space in Phase 1.',
  },
] as const
