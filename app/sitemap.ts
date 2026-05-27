import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site-config'
import { AURA } from '@/lib/aura-config'
import { getAllNeighborhoodSlugs } from '@/lib/neighborhoods'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const neighborhoodEntries: MetadataRoute.Sitemap = getAllNeighborhoodSlugs().map(
    (slug) => ({
      url: `${SITE_URL}/neighborhoods/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })
  )

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}${AURA.canonicalPath}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${SITE_URL}${AURA.floorPlansPath}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}${AURA.vsResalePath}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/lifestyle`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/discovery-centre`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/neighborhoods`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    ...neighborhoodEntries,
  ]
}
