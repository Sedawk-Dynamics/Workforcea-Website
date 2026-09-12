import type { MetadataRoute } from 'next'
import { SERVICES, SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE.url}/gallery`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...SERVICES.map((service) => ({
      url: `${SITE.url}/${service.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
