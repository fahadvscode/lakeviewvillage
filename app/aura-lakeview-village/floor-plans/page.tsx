import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { RegisterForm } from "@/components/register-form"
import {
  BreadcrumbSchema,
  FAQPageSchema,
  ItemListSchema,
  TownhomeProductSchema,
} from "@/components/seo/json-ld"
import { LastUpdated } from "@/components/last-updated"
import {
  AURA,
  AURA_FLOOR_PLANS,
  PRICING_DISCLAIMER,
  auraUrl,
} from "@/lib/aura-config"
import { IMAGES, siteImageUrl } from "@/lib/images"
import { SITE_URL } from "@/lib/site-config"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Aura Lakeview Village Floor Plans & Pricing",
  description: `Aura Lakeview Village floor plans: ${AURA.sqftDetail}, ${AURA.beds} bedrooms, from ${AURA.priceFromShort}. Birch, Cedar, Maple, and Oak layouts by Caivan. Register for current pricing.`,
  alternates: { canonical: auraUrl(AURA.floorPlansPath) },
  openGraph: {
    title: "Aura Lakeview Village Floor Plans & Pricing",
    images: [{ url: siteImageUrl(IMAGES.intKitchen, SITE_URL), alt: "Aura kitchen interior" }],
  },
}

const pricingFaqs = [
  {
    question: "How much is Aura Lakeview Village?",
    answer: `Aura Lakeview Village townhomes start from the ${AURA.priceFromShort}, with two-bedroom plans typically in the high $500,000s and three-bedroom plans in the low-to-mid $600,000s depending on size and release.`,
  },
  {
    question: "What is the largest floor plan at Aura?",
    answer: "The Oak is the largest plan at approximately 1,138 sq. ft. with 3 bedrooms and 2.5 bathrooms.",
  },
]

export default function AuraFloorPlansPage() {
  const listItems = AURA_FLOOR_PLANS.map((plan) => ({
    name: plan.name,
    url: `${auraUrl(AURA.floorPlansPath)}#${plan.slug}`,
    description: plan.description,
  }))

  return (
    <div className="flex flex-col">
      <TownhomeProductSchema
        name={`${AURA.name} Floor Plans`}
        description={`Floor plans for ${AURA.name} by ${AURA.builder}.`}
        builder={AURA.builder}
        priceFrom={AURA.priceFrom}
        priceValue={AURA.priceValue}
        bedrooms={AURA.beds}
        sqftRange={AURA.sqftDetail}
        image={IMAGES.intKitchen}
        url={auraUrl(AURA.floorPlansPath)}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: AURA.name, url: auraUrl() },
          { name: "Floor Plans", url: auraUrl(AURA.floorPlansPath) },
        ]}
      />
      <ItemListSchema name={`${AURA.name} Floor Plans`} items={listItems} />
      <FAQPageSchema faqs={pricingFaqs} />

      <section className="section border-b border-border bg-muted/30 pt-32">
        <div className="page-container">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            {AURA.name}
          </p>
          <h1 className="section-title mt-4 font-serif text-foreground">
            Floor Plans &<br />
            <span className="italic">Pricing</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Thoughtfully designed stacked townhome layouts from {AURA.sqftDetail} with{" "}
            {AURA.beds} bedrooms. {PRICING_DISCLAIMER}
          </p>
          <LastUpdated date={AURA.lastContentUpdate} className="mt-4" />
        </div>
      </section>

      <section className="section">
        <div className="page-container">
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {AURA_FLOOR_PLANS.map((plan) => (
              <article
                key={plan.slug}
                id={plan.slug}
                className={`relative flex flex-col bg-card p-8 ${
                  "popular" in plan && plan.popular ? "ring-2 ring-primary ring-inset" : ""
                }`}
              >
                {"popular" in plan && plan.popular && (
                  <span className="absolute right-4 top-4 bg-primary px-2 py-1 text-[10px] uppercase tracking-widest text-primary-foreground">
                    Popular
                  </span>
                )}
                <h2 className="font-serif text-xl text-foreground">{plan.name}</h2>
                <p className="mt-4 font-serif text-2xl text-primary">{plan.price}</p>
                <div className="mt-6 space-y-2 border-t border-border pt-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Size</span>
                    <span>{plan.sqft} sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Beds</span>
                    <span>{plan.beds}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Baths</span>
                    <span>{plan.baths}</span>
                  </div>
                </div>
                <p className="mt-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-muted/30">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={IMAGES.intKitchen}
                alt="Kitchen interior at Aura Lakeview Village by Caivan"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div>
              <h2 className="section-title font-serif text-foreground">
                Interior<br />
                <span className="italic">Gallery</span>
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={IMAGES.intLiving}
                    alt="Living room at Aura Lakeview Village upper residence"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={IMAGES.intPrimaryMain}
                    alt="Primary bedroom at Aura Lakeview Village main residence"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </div>
              <Button className="mt-8" asChild>
                <Link href={AURA.canonicalPath}>
                  About {AURA.shortName}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="register" className="section">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="section-title font-serif text-foreground">
                Get Current<br />
                <span className="italic">Pricing</span>
              </h2>
              <p className="mt-6 text-muted-foreground">
                Register for the latest price list, availability, and incentive details for{" "}
                {AURA.name}.
              </p>
            </div>
            <RegisterForm variant="full" project="aura" />
          </div>
        </div>
      </section>
    </div>
  )
}
