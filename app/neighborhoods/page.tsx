import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BreadcrumbSchema } from "@/components/seo/json-ld"
import { neighborhoods } from "@/lib/neighborhoods"
import { SITE_URL } from "@/lib/site-config"
import { AURA } from "@/lib/aura-config"
import { ArrowRight, MapPin } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Townhomes by Neighborhood | Long Branch, Port Credit, South Mississauga",
  description: `Explore ${AURA.name} near Long Branch, Port Credit, and South Mississauga. ${AURA.productType} by ${AURA.builder} in Lakeview Village.`,
  alternates: {
    canonical: `${SITE_URL}/neighborhoods`,
  },
  openGraph: {
    title: "Townhomes by Neighborhood | Lakeview Village",
    description: "Find townhomes near Long Branch GO, Port Credit, and South Mississauga at Lakeview Village.",
    url: `${SITE_URL}/neighborhoods`,
  },
}

export default function NeighborhoodsPage() {
  return (
    <div className="flex flex-col">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Neighborhoods", url: `${SITE_URL}/neighborhoods` },
        ]}
      />
      {/* Hero */}
      <section className="bg-muted/50 py-20 md:py-28">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Location Guide
            </p>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Townhomes by Neighborhood
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Lakeview Village townhomes are located in Southeast Mississauga, near
              Long Branch, Port Credit, and the Toronto border. Explore each area to
              see how the location fits your lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Neighborhood Cards */}
      <section className="py-16 md:py-24">
        <div className="page-container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {neighborhoods.map((n) => (
              <Link
                key={n.slug}
                href={`/neighborhoods/${n.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30 hover:bg-card/80"
              >
                <MapPin className="h-8 w-8 text-primary" />
                <h2 className="mt-4 font-serif text-xl font-semibold text-foreground group-hover:text-primary">
                  Townhomes in {n.name}
                </h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3">
                  {n.intro}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="page-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Ready to Explore Floor Plans?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Register for VIP access to {AURA.name}—{AURA.productType} from the{" "}
              {AURA.priceFromShort}.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href={AURA.floorPlansPath}>
                Register for VIP Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
