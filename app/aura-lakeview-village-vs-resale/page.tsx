import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { RegisterForm } from "@/components/register-form"
import { BreadcrumbSchema } from "@/components/seo/json-ld"
import { LastUpdated } from "@/components/last-updated"
import { AURA, auraUrl } from "@/lib/aura-config"
import { IMAGES } from "@/lib/images"
import { SITE_URL } from "@/lib/site-config"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Aura Lakeview Village vs Resale Townhomes Mississauga",
  description: `Compare new ${AURA.name} by Caivan to resale townhomes in Mississauga: pricing, warranties, energy efficiency, and waterfront location in Lakeview Village.`,
  alternates: { canonical: auraUrl(AURA.vsResalePath) },
}

const comparison = [
  {
    factor: "Price entry",
    aura: `From ${AURA.priceFromShort} (pre-construction)`,
    resale: "Often $700K+ for older waterfront-adjacent product",
  },
  {
    factor: "Home age",
    aura: "Brand new, 2027 occupancy",
    resale: "Typically 10–30+ years old",
  },
  {
    factor: "Energy efficiency",
    aura: "Caivan 360 / modern building envelope",
    resale: "Varies; older systems often less efficient",
  },
  {
    factor: "Tarion warranty",
    aura: "New home warranty applies",
    resale: "Warranty expired; buyer assumes repairs",
  },
  {
    factor: "Customization",
    aura: "Select finishes at purchase",
    resale: "Renovation costs after closing",
  },
  {
    factor: "Community",
    aura: `${AURA.communityAcres}-acre master plan, new parks & retail`,
    resale: "Established neighbourhood; less new amenity growth",
  },
  {
    factor: "Parking",
    aura: AURA.parking,
    resale: "Often surface or older garage configurations",
  },
]

export default function AuraVsResalePage() {
  return (
    <div className="flex flex-col">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: AURA.name, url: auraUrl() },
          { name: "vs Resale", url: auraUrl(AURA.vsResalePath) },
        ]}
      />

      <section className="section border-b border-border pt-32">
        <div className="page-container">
          <h1 className="section-title font-serif text-foreground">
            {AURA.name} vs<br />
            <span className="italic">Resale Townhomes</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Considering new construction at {AURA.name} versus resale in south Mississauga?
            Here is how pre-construction stacked townhomes by {AURA.builder} compare to typical
            resale options near the lake.
          </p>
          <LastUpdated date={AURA.lastContentUpdate} className="mt-4" />
        </div>
      </section>

      <section className="section">
        <div className="page-container overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 pr-4 font-medium text-muted-foreground">Factor</th>
                <th className="py-4 pr-4 font-serif text-lg text-foreground">{AURA.name}</th>
                <th className="py-4 font-medium text-muted-foreground">Typical Resale</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.factor} className="border-b border-border">
                  <td className="py-4 pr-4 font-medium text-foreground">{row.factor}</td>
                  <td className="py-4 pr-4 text-muted-foreground">{row.aura}</td>
                  <td className="py-4 text-muted-foreground">{row.resale}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section bg-muted/30">
        <div className="page-container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={IMAGES.auraStraight2}
              alt="New Aura Lakeview Village townhomes compared to resale options"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div>
            <h2 className="section-title font-serif text-foreground">
              Why Buyers Choose<br />
              <span className="italic">New at Aura</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Resale can offer immediate occupancy—but new construction provides modern layouts,
              warranty protection, and participation in a once-in-a-generation waterfront master
              plan. Many buyers find Aura&apos;s {AURA.priceFromShort} entry competitive versus
              dated resale requiring renovations.
            </p>
            <Button className="mt-8" asChild>
              <Link href={AURA.floorPlansPath}>
                View Floor Plans
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="register" className="section">
        <div className="page-container grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="section-title font-serif text-foreground">Register for VIP</h2>
            <p className="mt-6 text-muted-foreground">
              Get personalized guidance comparing {AURA.name} to resale alternatives in your
              budget.
            </p>
          </div>
          <RegisterForm variant="full" project="aura" />
        </div>
      </section>
    </div>
  )
}
