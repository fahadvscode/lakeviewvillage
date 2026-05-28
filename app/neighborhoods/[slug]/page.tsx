import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { RegisterForm } from "@/components/register-form"
import { BreadcrumbSchema } from "@/components/seo/json-ld"
import { LastUpdated } from "@/components/last-updated"
import {
  getNeighborhood,
  getAllNeighborhoodSlugs,
  getNeighborhoodUrl,
} from "@/lib/neighborhoods"
import { SITE_URL } from "@/lib/site-config"
import { AURA } from "@/lib/aura-config"
import { IMAGES, siteImageUrl } from "@/lib/images"
import { ArrowRight, MapPin, Train } from "lucide-react"
import type { Metadata } from "next"

export function generateStaticParams() {
  return getAllNeighborhoodSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const neighborhood = getNeighborhood(slug)
  if (!neighborhood) return { title: "Not Found" }

  return {
    title: neighborhood.metaTitle,
    description: neighborhood.metaDescription,
    alternates: {
      canonical: getNeighborhoodUrl(slug),
    },
    openGraph: {
      title: neighborhood.metaTitle,
      description: neighborhood.metaDescription,
      url: getNeighborhoodUrl(slug),
      images: [siteImageUrl(IMAGES.hero, SITE_URL)],
    },
  }
}

export default async function NeighborhoodPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const neighborhood = getNeighborhood(slug)
  if (!neighborhood) notFound()

  return (
    <div className="flex flex-col">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Neighborhoods", url: `${SITE_URL}/neighborhoods` },
          { name: neighborhood.name, url: getNeighborhoodUrl(slug) },
        ]}
      />
      {/* Hero */}
      <section className="bg-muted/50 py-20 md:py-28">
        <div className="page-container">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Townhomes in the Area
            </p>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {neighborhood.h1}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {neighborhood.intro}
            </p>
            <LastUpdated className="mt-4" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="page-container">
          <div className="mx-auto max-w-3xl">
            {neighborhood.paragraphs.map((para, i) => (
              <p key={i} className="mt-6 text-muted-foreground leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Highlights */}
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {neighborhood.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-lg border border-border bg-card p-4 text-center"
                >
                  <span className="block font-serif text-xl text-foreground">
                    {h.value}
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-wider text-muted-foreground">
                    {h.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Transit */}
          <div className="mx-auto mt-12 max-w-3xl rounded-lg border border-primary/20 bg-primary/5 p-6">
            <div className="flex items-start gap-4">
              <Train className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Transit & Location
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {neighborhood.transitNote}
                </p>
                <Button variant="link" className="mt-4 p-0 h-auto" asChild>
                  <Link href="/lifestyle">
                    Explore lifestyle & transit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects CTA */}
      <section className="py-16 md:py-24">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              Aura Lakeview Village Near {neighborhood.name}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {AURA.name} by {AURA.builder}—{AURA.productType} in Lakeview Village—from the{" "}
              {AURA.priceFromShort}. Register for VIP access.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href={AURA.canonicalPath}>
                  Explore {AURA.shortName}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={AURA.floorPlansPath}>
                  Floor Plans
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Register */}
      <section id="register" className="bg-muted py-24 lg:py-32">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-foreground">
                {neighborhood.ctaHeading}
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {neighborhood.ctaBody}
              </p>
              <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Discovery Centre: 985 Jim Tovey Blvd, Mississauga</span>
              </div>
              <Button asChild className="mt-6">
                <Link href="/discovery-centre">
                  Visit Discovery Centre
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div>
              <RegisterForm variant="full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
