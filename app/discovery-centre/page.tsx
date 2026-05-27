import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RegisterForm } from "@/components/register-form"
import { DiscoveryCentreLocalBusinessSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import type { Metadata } from "next"
import { SITE_URL } from "@/lib/site-config"
import { AURA } from "@/lib/aura-config"
import { IMAGES } from "@/lib/images"
import { MapPin, Clock, Building2, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: `Discovery Centre | ${AURA.name} & Lakeview Village`,
  description: `Visit the Lakeview Village Discovery Centre at ${AURA.discoveryCentre.street}, Mississauga. Learn about ${AURA.name} by ${AURA.builder}. ${AURA.discoveryCentre.hours}.`,
  keywords: ["Lakeview Village Discovery Centre", "Lakeview Village sales centre", "Jim Tovey Boulevard Mississauga", "Lakeview Village visit", "Mississauga waterfront sales"],
  alternates: {
    canonical: `${SITE_URL}/discovery-centre`,
  },
  openGraph: {
    title: "Discovery Centre | Lakeview Village Mississauga",
    description: "Visit the Lakeview Village Discovery Centre to explore townhomes and meet the builders.",
    images: [IMAGES.hero],
  },
}

const builders = [
  { name: "Caivan", projects: AURA.name, href: AURA.canonicalPath },
  { name: "Greenpark Group", projects: "Aquanova & more" },
  { name: "Tridel", projects: "Harbourwalk & more" },
  { name: "DECO", projects: "Residential phases" },
  { name: "Opus Homes", projects: "New phases" },
]

export default function DiscoveryCentrePage() {
  return (
    <div className="min-h-screen">
      <DiscoveryCentreLocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Discovery Centre", url: `${SITE_URL}/discovery-centre` },
        ]}
      />
      {/* Hero */}
      <section className="relative py-32 lg:py-40">
        <Image
          src={IMAGES.hero}
          alt="Lakeview Village Discovery Centre"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="page-container relative">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">
            See & Experience
          </p>
          <h1 className="section-title mt-4 font-serif text-white">
            Discovery<br />
            <span className="italic">Centre</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Visit the Lakeview Village Discovery Centre to explore floor plans, 
            meet the builders, and discover your future waterfront address.
          </p>
        </div>
      </section>

      {/* Visit Info */}
      <section className="border-b border-border py-24">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-2">
            <Card className="border-0 bg-muted/30">
              <CardContent className="flex items-start gap-6 p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl">Address</h3>
                  <p className="mt-2 text-muted-foreground">
                    985 Jim Tovey Boulevard<br />
                    Mississauga, ON L5E 0A8
                  </p>
                  <Button variant="link" className="mt-4 p-0 h-auto" asChild>
                    <a 
                      href="https://maps.google.com/?q=985+Jim+Tovey+Boulevard+Mississauga+ON+L5E+0A8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-muted/30">
              <CardContent className="flex items-start gap-6 p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl">Hours</h3>
                  <p className="mt-2 text-muted-foreground">
                    Monday – Thursday: 12:00pm – 7:00pm<br />
                    Saturday – Sunday: 12:00pm – 5:00pm<br />
                    Friday: Closed
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Builders */}
      <section className="py-24 lg:py-32">
        <div className="page-container">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Live at Lakeview
          </p>
          <h2 className="section-title mt-4 font-serif text-foreground">
            Meet the<br />
            <span className="italic">Builders</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Six premier builders are bringing Lakeview Village to life. 
            Visit the Discovery Centre to explore their collections and find your perfect match.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {builders.map((builder) => (
              <Card key={builder.name} className="group border-border transition-colors hover:border-primary/30">
                <CardContent className="p-6">
                  <Building2 className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 font-serif text-xl">{builder.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{builder.projects}</p>
                  {builder.href && (
                    <Button variant="ghost" className="mt-4 -ml-2" asChild>
                      <Link href={builder.href}>
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section id="register" className="bg-muted py-24 lg:py-32">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Get Started
              </p>
              <h2 className="section-title mt-4 font-serif text-foreground">
                Register for<br />
                <span className="italic">VIP Access</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Can&apos;t visit in person? Register for floor plans, pricing updates, 
                and buyer guidance for {AURA.name} by {AURA.builder}.
              </p>
            </div>
            <div>
              <RegisterForm variant="full" project="aura" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
