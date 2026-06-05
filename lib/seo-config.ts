import { AURA } from '@/lib/aura-config'

export const PRIMARY_KEYWORD = 'Aura Lakeview Village Townhomes' as const

export const SECONDARY_KEYWORDS = [
  PRIMARY_KEYWORD,
  'Aura Lakeview Village',
  'Aura Lakeview Village floor plans',
  'Aura Lakeview Village price',
  'Aura Lakeview Village Caivan',
  'Caivan Lakeview Village townhomes',
  'Lakeview Village townhomes Mississauga',
  'Aura townhomes Mississauga',
  'pre-construction townhomes Mississauga',
  'waterfront townhomes GTA',
  'stacked townhomes Mississauga',
  'townhomes near Long Branch GO',
] as const

export const SEO = {
  primaryKeyword: PRIMARY_KEYWORD,
  productName: PRIMARY_KEYWORD,
  buyingGuidePath: AURA.buyingGuidePath,
  seoTitleHome: `${PRIMARY_KEYWORD} | ${AURA.builderShort} Mississauga`,
  seoTitleAura: `${PRIMARY_KEYWORD} | Floor Plans, Pricing & VIP`,
  seoTitleFloorPlans: `Aura Lakeview Village Floor Plans | ${PRIMARY_KEYWORD}`,
  seoTitleFaq: `${PRIMARY_KEYWORD} FAQ | Pricing, Floor Plans & Occupancy`,
  seoTitleBuyingGuide: `${PRIMARY_KEYWORD} Buying Guide | Price, Plans & How to Buy`,
  seoDescriptionHome: `${PRIMARY_KEYWORD} by ${AURA.builder}: ${AURA.productType} in Mississauga's ${AURA.communityAcres}-acre Lakeview Village waterfront community. From the ${AURA.priceFromShort}, occupancy ${AURA.occupancy}. Register for VIP access.`,
  seoDescriptionAura: `${PRIMARY_KEYWORD} by ${AURA.builder}: ${AURA.beds} beds, ${AURA.sqftDetail}, from ${AURA.priceFromShort}. Occupancy ${AURA.occupancy}. Register for VIP pricing and floor plans.`,
  seoDescriptionFloorPlans: `Compare ${PRIMARY_KEYWORD} floor plans: Birch, Cedar, Maple, and Oak. ${AURA.beds} bedrooms, ${AURA.sqftDetail}, from ${AURA.priceFromShort}.`,
  seoDescriptionBuyingGuide: `Complete guide to ${PRIMARY_KEYWORD}: pricing from ${AURA.priceFromShort}, floor plans, occupancy ${AURA.occupancy}, location near Long Branch GO, and how to register for VIP access.`,
} as const
