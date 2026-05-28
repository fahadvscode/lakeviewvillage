/**
 * All site images are self-hosted under /public/images.
 * Do not reference Supabase or other external URLs for images in the UI.
 */
const auraBase = '/images/aura'

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
  masterplan: '/images/masterplan-aerial.jpg',
  heroTownhomes: '/images/hero-townhomes.jpg',
  pierHouse: '/images/pier-house-towns.jpg',
  auraTownsLegacy: '/images/aura-towns.jpg',
  waterfrontLegacy: '/images/waterfront-lifestyle.jpg',
} as const

export type SiteImagePath = (typeof IMAGES)[keyof typeof IMAGES]

/** Absolute URL for Open Graph / JSON-LD (always same-origin image paths). */
export function siteImageUrl(path: SiteImagePath, siteUrl: string): string {
  if (!path.startsWith('/')) {
    throw new Error(`Site images must be local paths: ${path}`)
  }
  return `${siteUrl.replace(/\/$/, '')}${path}`
}
