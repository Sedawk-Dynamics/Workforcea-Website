import { FOUNDER, SERVICES, SITE } from '@/lib/site'

/**
 * JSON-LD for search engines. Rendered as a plain script tag so it lands in
 * the server HTML, where crawlers read it, rather than after hydration.
 */
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // The payload is our own static data, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

const SOCIAL_PROFILES = [
  SITE.linkedin,
  SITE.instagram,
  SITE.x,
  SITE.facebook,
  SITE.linkedinFounder,
]

const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: SITE.postalAddress.street,
  addressLocality: SITE.postalAddress.locality,
  addressRegion: SITE.postalAddress.region,
  postalCode: SITE.postalAddress.postalCode,
  addressCountry: SITE.postalAddress.country,
}

/** Organization, site search target and the services we offer. */
export function SiteStructuredData() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: `${SITE.url}/images/workforcea-logo.png`,
    image: `${SITE.url}/opengraph-image`,
    description:
      'Specialist talent acquisition firm for technology recruitment, leadership hiring, executive search, GCC hiring, RPO and workforce solutions.',
    slogan: SITE.tagline,
    email: SITE.email,
    telephone: SITE.phone,
    address: ADDRESS,
    areaServed: { '@type': 'Country', name: 'India' },
    sameAs: SOCIAL_PROFILES,
    founder: {
      '@type': 'Person',
      name: FOUNDER.name,
      jobTitle: FOUNDER.role,
      sameAs: SITE.linkedinFounder,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: SITE.email,
      telephone: SITE.phone,
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '09:30',
      closes: '18:30',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Talent Solutions',
      itemListElement: SERVICES.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
          url: `${SITE.url}/${service.slug}`,
        },
      })),
    },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.shortName,
    publisher: { '@id': `${SITE.url}/#organization` },
    inLanguage: 'en-IN',
  }

  return (
    <>
      <JsonLd data={organization} />
      <JsonLd data={website} />
    </>
  )
}

/** Per-service page: the service itself plus its breadcrumb trail. */
export function ServiceStructuredData({ slug }: { slug: string }) {
  const service = SERVICES.find((item) => item.slug === slug)
  if (!service) return null

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: `${SITE.url}/${service.slug}`,
    serviceType: service.title,
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: { '@type': 'Country', name: 'India' },
    audience: {
      '@type': 'BusinessAudience',
      name: 'Technology and growth-stage businesses',
    },
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: service.title,
        item: `${SITE.url}/${service.slug}`,
      },
    ],
  }

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumb} />
    </>
  )
}
