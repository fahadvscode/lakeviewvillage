import type { MetadataRoute } from 'next'
import { AURA } from '@/lib/aura-config'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: AURA.name,
    short_name: AURA.shortName,
    description: `${AURA.productType} by ${AURA.builder} in Mississauga's Lakeview Village. From the ${AURA.priceFromShort}.`,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1a1614',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  }
}
