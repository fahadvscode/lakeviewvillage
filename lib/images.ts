/**
 * Site-hosted images for Aura Lakeview Village
 */
const auraBase = '/images/aura'

/** Aura wordmark (hosted locally; source: Supabase public storage) */
export const AURA_LOGO = '/images/aura-logo.webp' as const

export const IMAGES = {
  logo: AURA_LOGO,
  hero: `${auraBase}/aura-ext-straight.jpg`,
  aura: `${auraBase}/aura-ext-straight.jpg`,
  auraStraight2: `${auraBase}/aura-ext-straight-2.jpg`,
  auraCommunity: `${auraBase}/aura-ext-community.jpg`,
  auraPatio: `${auraBase}/aura-ext-patio.jpg`,
  auraLakefront: `${auraBase}/aura-ext-lakefront-ogden-park.jpg`,
  communityStreetscape: `${auraBase}/community-streetscape-waterway-common.jpg`,
  intLiving: `${auraBase}/aura-int-living-upper-residence.jpg`,
  intKitchen: `${auraBase}/aura-int-kitchen.jpg`,
  intEnsuite: `${auraBase}/aura-int-ensuite.jpg`,
  intPrimaryUpper: `${auraBase}/aura-int-primary-bedroom-upper-residence.jpg`,
  intPrimaryMain: `${auraBase}/aura-int-primary-bedroom-main-residence.jpg`,
  waterfrontLifestyle: `${auraBase}/aura-ext-lakefront-ogden-park.jpg`,
  pierHouse: '/images/pier-house-towns.jpg',
} as const
