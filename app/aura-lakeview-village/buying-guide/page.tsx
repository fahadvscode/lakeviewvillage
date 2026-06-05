import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { RegisterForm } from "@/components/register-form"
import {
  BreadcrumbSchema,
  FAQPageSchema,
  TownhomeProductSchema,
} from "@/components/seo/json-ld"
import { LastUpdated } from "@/components/last-updated"
import { AURA, PRICING_DISCLAIMER, auraUrl } from "@/lib/aura-config"
import { SEO } from "@/lib/seo-config"
import { IMAGES, siteImageUrl } from "@/lib/images"
import { SITE_URL } from "@/lib/site-config"
import { ArrowRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: SEO.seoTitleBuyingGuide,
  description: SEO.seoDescriptionBuyingGuide,
  alternates: { canonical: auraUrl(AURA.buyingGuidePath) },
  openGraph: {
    title: SEO.seoTitleBuyingGuide,
    description: SEO.seoDescriptionBuyingGuide,
    images: [
      {
        url: siteImageUrl(IMAGES.auraCommunity, SITE_URL),
        alt: AURA.seoProductName,
      },
    ],
  },
}

const buyingGuideFaqs = [
  {
    question: "What are Aura Lakeview Village Townhomes?",
    answer: `${AURA.seoProductName} are ${AURA.productType} by ${AURA.builder} in ${AURA.communityName}, Mississauga. Phase 1 includes roughly ${AURA.phase1Units} homes with ${AURA.beds} bedrooms and ${AURA.sqftDetail}.`,
  },
  {
    question: "How much do Aura Lakeview Village Townhomes cost?",
    answer: `Pricing starts from the ${AURA.priceFromShort}. Two-bedroom plans are typically in the high $500,000s; three-bedroom layouts reach the low-to-mid $600,000s. ${PRICING_DISCLAIMER}`,
  },
  {
    question: "When can I move into Aura Lakeview Village Townhomes?",
    answer: AURA.occupancyDetail,
  },
]

const sections = [
  {
    title: "What they are",
    body: `${AURA.seoProductName} are ${AURA.productType} by ${AURA.builder} in a ${AURA.communityAcres}-acre waterfront master plan steps from Lake Ontario. Contemporary architecture, Caivan 360 efficiency, and ${AURA.parking.toLowerCase()} define Phase 1.`,
  },
  {
    title: "Pricing",
    body: `From the ${AURA.priceFromShort}, depending on plan and release. Compare Birch, Cedar, Maple, and Oak layouts on our floor plans page. ${PRICING_DISCLAIMER}`,
  },
  {
    title: "Occupancy",
    body: AURA.occupancyDetail,
  },
  {
    title: "Location & transit",
    body: `Long Branch GO is about 4 minutes by car (20–25 minutes to Union Station). QEW and Highway 427 are nearby. Parks, trails, and future Lakeview Square retail are part of the master plan.`,
  },
]

export default function AuraBuyingGuidePage() {
  return (
    <div className="flex flex-col">
      <TownhomeProductSchema
        name={AURA.seoProductName}
        description={SEO.seoDescriptionBuyingGuide}
        builder={AURA.builder}
        priceFrom={AURA.priceFrom}
        priceValue={AURA.priceValue}
        bedrooms={AURA.beds}
        sqftRange={AURA.sqftDetail}
        image={IMAGES.auraCommunity}
        url={auraUrl(AURA.buyingGuidePath)}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: AURA.name, url: auraUrl() },
          { name: "Buying Guide", url: auraUrl(AURA.buyingGuidePath) },
        ]}
      />
      <FAQPageSchema faqs={buyingGuideFaqs} />

      <section className="section border-b border-border bg-muted/30 pt-32">
        <div className="page-container">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Buyer Guide
          </p>
          <h1 className="section-title mt-4 font-serif text-foreground">
            {AURA.seoProductName}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Everything you need to know about {AURA.seoProductName} by {AURA.builder}:
            pricing, floor plans, occupancy, location, and how to register for VIP access.
          </p>
          <LastUpdated date={AURA.lastContentUpdate} className="mt-4" />
        </div>
      </section>

      <section className="section">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="font-serif text-2xl text-foreground">{section.title}</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{section.body}</p>
                </div>
              ))}
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href={AURA.floorPlansPath}>
                    View Floor Plans
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={AURA.vsResalePath}>Compare vs Resale</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={AURA.canonicalPath}>Product Overview</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={IMAGES.auraCommunity}
                alt={`${AURA.seoProductName} community streetscape by Caivan`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-muted/30">
        <div className="page-container">
          <h2 className="font-serif text-2xl text-foreground">Why buyers choose Aura</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "Waterfront master plan location",
              "Caivan 360 energy efficiency",
              "Pre-construction pricing from the high $500s",
              "Long Branch GO in ~4 minutes",
              "2–3 bedroom stacked townhome layouts",
              "Independent VIP registration support",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="register" className="section">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="section-title font-serif text-foreground">
                Register for VIP Access
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Get floor plans, pricing updates, and buyer guidance for{" "}
                {AURA.seoProductName}. Our independent pre-construction team helps you
                navigate deposits, incentives, and next steps.
              </p>
            </div>
            <RegisterForm variant="full" project="aura" />
          </div>
        </div>
      </section>
    </div>
  )
}
