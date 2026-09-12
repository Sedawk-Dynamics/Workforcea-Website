import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import { SITE } from '@/lib/site'
import './globals.css'

const _bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const _headingFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const DESCRIPTION =
  'Workforcea helps businesses hire critical talent and build stronger teams — specialist talent solutions across technology recruitment, leadership hiring, executive search, GCC hiring, RPO and workforce solutions, built on 15+ years of talent acquisition leadership.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Workforcea | Building Capability Beyond Hiring',
    template: `%s | ${SITE.shortName}`,
  },
  description: DESCRIPTION,
  applicationName: SITE.shortName,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: 'Workforcea | Building Capability Beyond Hiring',
    description: DESCRIPTION,
    url: '/',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workforcea | Building Capability Beyond Hiring',
    description: DESCRIPTION,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${_bodyFont.variable} ${_headingFont.variable} bg-background`}
    >
      <head>
        {/*
          Without JS the splash has no timer to dismiss it, so hide it outright
          rather than leaving the page permanently covered.
        */}
        <noscript>
          <style>{`[data-splash]{display:none!important}`}</style>
        </noscript>
      </head>
      <body className="antialiased">
        {children}
        <Toaster position="bottom-right" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
