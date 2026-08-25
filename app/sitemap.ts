import type { MetadataRoute } from 'next'
import { SERVICES, SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...SERVICES.map((service) => ({
      url: `${SITE.url}/${service.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
