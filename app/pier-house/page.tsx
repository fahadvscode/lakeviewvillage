import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RegisterForm } from "@/components/register-form"
import { TownhomeProductSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import type { Metadata } from "next"
import { SITE_URL } from "@/lib/site-config"
import { IMAGES } from "@/lib/images"
import { ArrowRight, ArrowUpRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Pier House Towns by Branthaven | 3-Storey Townhomes from $799K",
  description: "Pier House Towns at Lakeview Village Mississauga: traditional 3-storey non-stacked townhomes by Branthaven with private driveways, attached garages, up to 5 bedrooms (1,255-2,195 sq. ft.). Near Long Branch GO. Register for VIP pricing.",
  keywords: ["Pier House Towns", "Branthaven townhomes", "Lakeview Village townhomes", "Mississauga townhomes for sale", "3-storey townhomes Mississauga", "waterfront townhomes GTA"],
  alternates: {
    canonical: `${SITE_URL}/pier-house`
  },
  openGraph: {
    title: "Pier House Towns by Branthaven | Lakeview Village Mississauga",
    description: "Traditional 3-storey townhomes with private garages and up to 5 bedrooms in Mississauga's waterfront community. From $799,900.",
    images: [IMAGES.pierHouse],
  }
}

const collections = [
  {
    name: "21' Back-to-Back",
    sqft: "1,255 - 1,670",
    beds: "2-3",
    price: "High $700Ks",
    features: ["Entry-level pricing", "Open concept", "Urban lifestyle"],
  },
  {
    name: "16' Rear Lane",
    sqft: "1,740 - 1,970",
    beds: "3-4",
    price: "Low $900Ks",
    features: ["Private driveway", "Attached garage", "Rear lane access"],
  },
  {
    name: "18' Garden Traditional",
    sqft: "1,815 - 1,915",
    beds: "3-4",
    price: "Mid $900Ks",
    features: ["Private backyard", "Traditional streetscape", "Front garage"],
    popular: true,
  },
  {
    name: "20' Rear Lane",
    sqft: "2,110 - 2,195",
    beds: "4-5",
    price: "Low $1.1M+",
    features: ["Largest plans", "Up to 5 beds", "Premium finishes"],
  },
]

const highlights = [
  "Non-stacked 3-storey design",
  "Private driveways & garages",
  "Up to 5 bedrooms",
  "Optional private backyards",
  "9-foot main floor ceilings",
  "Branthaven Fresh Thinking features",
]

export default function PierHousePage() {
  return (
    <div className="flex flex-col">
      <TownhomeProductSchema
        name="Pier House Towns at Lakeview Village"
        description="Traditional 3-storey non-stacked townhomes by Branthaven with private driveways, attached garages, and up to 5 bedrooms in Mississauga's waterfront community."
        builder="Branthaven Homes"
        priceFrom="$799,900"
        priceValue={799900}
        bedrooms="2-5"
        sqftRange="1,255 - 2,195 sq. ft."
        image={IMAGES.pierHouse}
        url={`${SITE_URL}/pier-house`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Pier House Towns", url: `${SITE_URL}/pier-house` },
        ]}
      />
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src={IMAGES.pierHouse}
          alt="Pier House Towns by Branthaven at Lakeview Village"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        
        <div className="absolute inset-0 z-10 flex flex-col justify-end pb-24">
          <div className="page-container">
            <div className="mx-auto w-full max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">
              Now Registering
            </p>
            <h1 className="hero-title mt-4 font-serif text-white drop-shadow-md">
              Pier House<br />
              <span className="italic">Towns</span>
            </h1>
            <p className="mt-2 text-lg text-white/70">by Branthaven</p>
            <p className="mt-6 max-w-xl text-lg text-white/90 leading-relaxed drop-shadow-sm">
              Traditional 3-storey townhomes with private driveways, attached garages, 
              and up to 5 bedrooms. The spacious choice for families.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="rounded-none bg-white px-10 py-6 text-xs uppercase tracking-widest text-foreground hover:bg-white/90" 
                asChild
              >
                <Link href="#register">
                  Request Floor Plans
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-none border-white/30 bg-transparent px-10 py-6 text-xs uppercase tracking-widest text-white hover:bg-white/10 hover:text-white" 
                asChild
              >
                <Link href="/compare">
                  Compare to Aura Towns
                </Link>
              </Button>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-border bg-card py-12 md:py-14">
        <div className="page-container">
          <div className="grid grid-cols-2 lg:grid-cols-5">
            {[
              { value: "~164", label: "Townhomes" },
              { value: "3", label: "Storeys" },
              { value: "2-5", label: "Bedrooms" },
              { value: "1,255-2,195", label: "Sq. Ft." },
              { value: "$799K+", label: "Starting" },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className={`flex flex-col items-center justify-center py-8 text-center ${
                  index !== 4 ? "border-r border-border" : ""
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

      {/* Introduction */}
      <section className="section">
        <div className="page-container">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                The Builder
              </p>
              <h2 className="section-title mt-4 font-serif text-foreground">
                Branthaven Homes<br />
                <span className="italic">Since 1971</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                A family-owned company that has grown from a master builder of custom 
                estate homes into one of Canada&apos;s top homebuilders. Known for 
                design-forward developments and their commitment to quality.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Their Fresh Thinking approach brings innovative design features to 
                every home, creating life-centric interiors that reflect what 
                today&apos;s homebuyers want.
              </p>
              <p className="mt-6 font-serif text-lg italic text-foreground">
                &quot;The Best Built Home at Any Price&quot;
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Key Features
              </p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 bg-primary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="section bg-muted/30">
        <div className="page-container">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Four Collections
            </p>
            <h2 className="section-title mt-4 font-serif text-foreground">
              Find Your<br />
              <span className="italic">Perfect Fit</span>
            </h2>
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((collection) => (
              <div 
                key={collection.name} 
                className={`relative flex flex-col bg-card p-8 ${
                  collection.popular ? "ring-2 ring-primary ring-inset" : ""
                }`}
              >
                {collection.popular && (
                  <span className="absolute right-4 top-4 bg-primary px-2 py-1 text-[10px] uppercase tracking-widest text-primary-foreground">
                    Popular
                  </span>
                )}
                <h3 className="font-serif text-xl text-foreground">{collection.name}</h3>
                <p className="mt-4 font-serif text-2xl text-primary">{collection.price}</p>
                <div className="mt-6 space-y-2 border-t border-border pt-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Size</span>
                    <span className="text-foreground">{collection.sqft} sq ft</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Beds</span>
                    <span className="text-foreground">{collection.beds}</span>
                  </div>
                </div>
                <ul className="mt-6 space-y-2">
                  {collection.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Prices are estimates for illustrative purposes. Subject to change. E.&O.E.
          </p>
        </div>
      </section>

      {/* Location */}
      <section className="section">
        <div className="page-container">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Location
              </p>
              <h2 className="section-title mt-4 font-serif text-foreground">
                Completely<br />
                <span className="italic">Connected</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                From waterfront trails and beaches to shops, schools, and easy access 
                to Toronto via Long Branch GO. Pier House is a walkable, transit-connected 
                neighbourhood that puts you in the centre of it all.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-border">
              {[
                { time: "4 min", place: "Long Branch GO" },
                { time: "5 min", place: "QEW / 427" },
                { time: "9 min", place: "Sherway Gardens" },
                { time: "10 min", place: "Port Credit" },
                { time: "15 min", place: "Pearson Airport" },
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
      </section>

      {/* Best For */}
      <section className="section bg-primary">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70">
              Best For
            </p>
            <h2 className="section-title mt-4 font-serif text-primary-foreground">
              Growing Families &<br />
              <span className="italic">Move-Up Buyers</span>
            </h2>
            <p className="mt-6 text-primary-foreground/80 leading-relaxed">
              With up to 5 bedrooms, private garages, and optional backyards, 
              Pier House Towns offer the space families need without sacrificing 
              waterfront lifestyle. Upgrade from a condo to ground-oriented living 
              while staying connected to urban amenities.
            </p>
            <Button 
              size="lg" 
              className="mt-10 rounded-none bg-white px-10 py-6 text-xs uppercase tracking-widest text-primary hover:bg-white/90" 
              asChild
            >
              <Link href="#register">
                Register for VIP Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Compare CTA */}
      <section className="section">
        <div className="page-container">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <h2 className="section-title font-serif text-foreground">
                Not Sure Which<br />
                <span className="italic">Townhome is Right?</span>
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Compare Pier House Towns to Aura Towns side-by-side to find your 
                perfect match based on size, price, and lifestyle needs.
              </p>
            </div>
            <Link 
              href="/compare" 
              className="group flex items-center gap-4 border border-border px-8 py-6 transition-colors hover:bg-muted"
            >
              <span className="text-sm uppercase tracking-widest text-foreground">
                Compare Townhomes
              </span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="section bg-muted/50">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Get Started
              </p>
              <h2 className="section-title mt-4 font-serif text-foreground">
                Register for<br />
                <span className="italic">Pier House Towns</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Be first to receive floor plans, pricing, and exclusive incentives 
                for Pier House Towns by Branthaven. Our team will guide you through 
                the pre-construction purchase process.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 bg-primary" />
                  <span className="text-muted-foreground">Priority access to unit selection</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 bg-primary" />
                  <span className="text-muted-foreground">Exclusive pre-construction pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 bg-primary" />
                  <span className="text-muted-foreground">Complimentary buyer consultation</span>
                </li>
              </ul>
            </div>
            <div>
              <RegisterForm variant="full" project="pier-house" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
