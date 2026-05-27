import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { RegisterForm } from "@/components/register-form"
import { TownhomeProductSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { LastUpdated } from "@/components/last-updated"
import { AURA, PRICING_DISCLAIMER, auraUrl } from "@/lib/aura-config"
import { IMAGES } from "@/lib/images"
import { SITE_URL } from "@/lib/site-config"
import { ArrowRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: `${AURA.name} by Caivan | Floor Plans, Pricing & VIP Registration`,
  description: `${AURA.name}: ${AURA.productType} by ${AURA.builder} in Mississauga. ${AURA.beds} beds, ${AURA.sqftDetail}, from ${AURA.priceFromShort}. Occupancy ${AURA.occupancy}. Register for VIP access.`,
  keywords: [
    "Aura Lakeview Village",
    "Aura Caivan Mississauga",
    "Aura townhomes Lakeview Village",
    "Caivan Aura floor plans",
  ],
  alternates: { canonical: auraUrl() },
  openGraph: {
    title: `${AURA.name} by Caivan`,
    description: `Stacked townhomes from the ${AURA.priceFromShort} in Lakeview Village.`,
    images: [{ url: `${SITE_URL}${IMAGES.hero}`, alt: AURA.name }],
  },
}

const highlights = [
  "2-storey stacked townhome design",
  "Caivan 360 energy efficiency",
  "Underground parking (Phase 1)",
  "Contemporary architecture",
  "Waterfront master plan location",
  "ABIC advanced building technology",
]

const included = [
  "Premium kitchen finishes",
  "Quartz countertops",
  "Quality appliances",
  "Energy-efficient windows",
  "Open concept layouts",
  "Smart home ready features",
]

export default function AuraLakeviewVillagePage() {
  return (
    <div className="flex flex-col">
      <TownhomeProductSchema
        name={AURA.name}
        description={`${AURA.productType} by ${AURA.builder} in ${AURA.communityName}, Mississauga.`}
        builder={AURA.builder}
        priceFrom={AURA.priceFrom}
        priceValue={AURA.priceValue}
        bedrooms={AURA.beds}
        sqftRange={AURA.sqftDetail}
        image={IMAGES.hero}
        url={auraUrl()}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: AURA.name, url: auraUrl() },
        ]}
      />

      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src={IMAGES.auraPatio}
          alt="Aura Lakeview Village outdoor community patio and townhomes by Caivan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 z-10 flex flex-col justify-end pb-24">
          <div className="page-container">
            <div className="mx-auto w-full max-w-3xl">
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                by {AURA.builder}
              </p>
              <h1 className="hero-title mt-4 font-serif text-white drop-shadow-md">
                {AURA.name}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 drop-shadow-sm">
                {AURA.productType} with {AURA.beds} bedrooms in {AURA.communityName}.
                From the {AURA.priceFromShort}. Register for the next release.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="rounded-none bg-white px-10 py-6 text-xs uppercase tracking-widest text-foreground hover:bg-white/90"
                  asChild
                >
                  <Link href="#register">Register for VIP</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-none border-white/30 bg-transparent px-10 py-6 text-xs uppercase tracking-widest text-white hover:bg-white/10"
                  asChild
                >
                  <Link href={AURA.floorPlansPath}>Floor Plans</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card py-12">
        <div className="page-container">
          <div className="grid grid-cols-2 lg:grid-cols-5">
            {[
              { value: "2", label: "Storeys" },
              { value: AURA.beds, label: "Bedrooms" },
              { value: AURA.sqft, label: "Sq. Ft." },
              { value: AURA.occupancy, label: "Occupancy" },
              { value: AURA.priceFromShort, label: "From" },
            ].map((stat, index, arr) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center py-8 text-center ${
                  index !== arr.length - 1 ? "border-r border-border" : ""
                }`}
              >
                <span className="font-serif text-2xl text-foreground lg:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-container">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                The Builder
              </p>
              <h2 className="section-title mt-4 font-serif text-foreground">
                {AURA.builderShort}
                <br />
                <span className="italic">Communities</span>
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                {AURA.builder} is an award-winning builder delivering thoughtfully designed
                communities across Ontario. At Aura, the Caivan 360 standard emphasizes energy
                efficiency, quality materials, and attainable pricing—supported by ABIC advanced
                manufacturing for consistent construction quality.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Aura sits within {AURA.communityName}, a {AURA.communityAcres}-acre transformation
                comparing in scale to North America&apos;s most ambitious waterfront renewals—with
                parks, employment lands, retail, and cultural programming planned over 15–20 years.
              </p>
              <LastUpdated date={AURA.lastContentUpdate} className="mt-6" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={IMAGES.auraCommunity}
                alt="Aura Lakeview Village community courtyard with pergola and landscaping"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-muted/30">
        <div className="page-container">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Interiors
              </p>
              <h2 className="section-title mt-4 font-serif text-foreground">
                Premium<br />
                <span className="italic">Finishes</span>
              </h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 bg-primary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={IMAGES.intPrimaryUpper}
                  alt="Primary bedroom at Aura Lakeview Village upper residence"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={IMAGES.intEnsuite}
                  alt="Ensuite bathroom at Aura Lakeview Village"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-container">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Included
              </p>
              <h2 className="section-title mt-4 font-serif text-foreground">
                Move-In<br />
                <span className="italic">Ready</span>
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Aura homes are designed with premium inclusions—reducing the need for costly
                upgrades at closing. Confirm the specification sheet for your release.
              </p>
            </div>
            <div className="grid gap-px bg-border sm:grid-cols-2">
              {included.map((item) => (
                <div key={item} className="flex items-center gap-4 bg-card p-6">
                  <Check className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-muted/30">
        <div className="page-container">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={IMAGES.auraLakefront}
                alt="Aura Lakeview Village near Lake Ontario waterfront and Ogden Park"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Location
              </p>
              <h2 className="section-title mt-4 font-serif text-foreground">
                Waterfront<br />
                <span className="italic">Living</span>
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Aura is positioned within {AURA.communityName} near Lake Ontario, the Jim Tovey
                Conservation Area, and future Lakeview Square retail. Long Branch GO is minutes
                away; Port Credit and Sherway Gardens are within a short drive.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-px bg-border">
                {[
                  { time: "4 min", place: "Long Branch GO" },
                  { time: "5 min", place: "QEW / 427" },
                  { time: "10 min", place: "Port Credit" },
                  { time: "20 min", place: "Downtown Toronto" },
                ].map((item) => (
                  <div key={item.place} className="bg-card p-6">
                    <span className="font-serif text-2xl text-foreground">{item.time}</span>
                    <p className="mt-1 text-sm text-muted-foreground">{item.place}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary">
        <div className="page-container mx-auto max-w-3xl text-center">
          <h2 className="section-title font-serif text-primary-foreground">
            Best For First-Time Buyers,<br />
            <span className="italic">Families & Investors</span>
          </h2>
          <p className="mt-6 leading-relaxed text-primary-foreground/80">
            With pricing from the {AURA.priceFromShort}, Aura offers one of the most attainable
            paths to new townhome ownership near Mississauga&apos;s waterfront—backed by a
            master plan designed for long-term community growth.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="rounded-none bg-white px-10 py-6 text-xs uppercase tracking-widest text-primary hover:bg-white/90"
              asChild
            >
              <Link href={AURA.floorPlansPath}>
                View Floor Plans
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-none border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href={AURA.vsResalePath}>Compare to Resale</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="register" className="section bg-muted/50">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="section-title font-serif text-foreground">
                Register for<br />
                <span className="italic">{AURA.shortName}</span>
              </h2>
              <p className="mt-6 text-muted-foreground">{PRICING_DISCLAIMER}</p>
            </div>
            <RegisterForm variant="full" project="aura" />
          </div>
        </div>
      </section>
    </div>
  )
}
