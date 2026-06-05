import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WebsiteSchema, RealEstateAgentSchema, LakeviewVillagePlaceSchema } from '@/components/seo/json-ld'
import { AIAnswerSection } from '@/components/seo/ai-answer-blocks'
import { SITE_URL } from '@/lib/site-config'
import { AURA } from '@/lib/aura-config'
import { SEO, SECONDARY_KEYWORDS } from '@/lib/seo-config'
import { IMAGES, siteImageUrl } from '@/lib/images'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const siteUrl = SITE_URL
const ogImage = siteImageUrl(IMAGES.hero, siteUrl)

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SEO.seoTitleHome,
    template: `%s | ${AURA.seoProductName}`,
  },
  description: SEO.seoDescriptionHome,
  keywords: [...SECONDARY_KEYWORDS],
  authors: [{ name: AURA.name }],
  creator: AURA.name,
  publisher: AURA.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteUrl,
    siteName: AURA.seoProductName,
    title: SEO.seoTitleHome,
    description: SEO.seoDescriptionHome,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${AURA.seoProductName} by ${AURA.builder} - modern stacked townhomes in Mississauga`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.seoTitleHome,
    description: SEO.seoDescriptionHome,
    images: [ogImage],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'Real Estate',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-icon', type: 'image/png' }],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1a1614' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1614' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <WebsiteSchema />
        <RealEstateAgentSchema />
        <LakeviewVillagePlaceSchema />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <SiteHeader />
        <main className="w-full min-w-0">{children}</main>
        <AIAnswerSection />
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}
