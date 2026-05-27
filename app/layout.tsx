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
import { IMAGES } from '@/lib/images'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const siteUrl = SITE_URL
const ogImage = `${siteUrl}${IMAGES.hero}`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${AURA.name} by Caivan | Mississauga Townhomes`,
    template: `%s | ${AURA.name}`,
  },
  description: `${AURA.name} by ${AURA.builder}: ${AURA.productType} in Mississauga's ${AURA.communityAcres}-acre Lakeview Village waterfront community. From the ${AURA.priceFromShort}, occupancy ${AURA.occupancy}. Register for VIP access.`,
  keywords: [
    'Aura Lakeview Village',
    'Aura Lakeview Village Caivan',
    'Aura townhomes Mississauga',
    'Caivan Lakeview Village',
    'Lakeview Village townhomes',
    'pre-construction townhomes Mississauga',
    'waterfront townhomes GTA',
    'stacked townhomes Mississauga',
    'townhomes near Long Branch GO',
    'Aura floor plans',
  ],
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
    siteName: AURA.name,
    title: `${AURA.name} by Caivan | Mississauga Townhomes`,
    description: `${AURA.productType} from the ${AURA.priceFromShort} in Lakeview Village. Register for VIP pricing and floor plans.`,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${AURA.name} by ${AURA.builder} - modern townhomes in Mississauga`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${AURA.name} by Caivan`,
    description: `Pre-construction stacked townhomes in Mississauga's Lakeview Village. Register for VIP access.`,
    images: [ogImage],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'Real Estate',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
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
