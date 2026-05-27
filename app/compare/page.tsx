import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RegisterForm } from "@/components/register-form"
import { BreadcrumbSchema } from "@/components/seo/json-ld"
import type { Metadata } from "next"
import { SITE_URL } from "@/lib/site-config"
import { IMAGES } from "@/lib/images"
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react"

export const metadata: Metadata = {
  title: "Compare Townhomes | Lakeview Village",
  description: "Compare Lakeview Village townhomes side-by-side. Find the perfect fit for your lifestyle in Mississauga's waterfront community.",
  keywords: ["compare Lakeview Village townhomes", "Lakeview Village Mississauga", "waterfront townhomes comparison"],
  alternates: {
    canonical: `${SITE_URL}/compare`
  },
  openGraph: {
    title: "Lakeview Village Townhomes | Compare Our Collections",
    description: "Compare townhome collections at Lakeview Village. Find the perfect fit for your lifestyle in Mississauga's waterfront community.",
    images: [IMAGES.hero],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lakeview Village Townhomes | Compare Our Collections",
    description: "Compare townhome collections at Lakeview Village. Find the perfect fit in Mississauga's waterfront community.",
  },
}

const comparisonRows = [
  { category: "Builder", pierHouse: "Branthaven Homes", aura: "Caivan Communities" },
  { category: "Type", pierHouse: "3-Storey Traditional", aura: "2-Storey Modern" },
  { category: "Bedrooms", pierHouse: "2 to 5", aura: "2 to 3" },
  { category: "Size Range", pierHouse: "1,255 - 2,195 sq ft", aura: "811 - 1,138 sq ft" },
  { category: "Starting Price", pierHouse: "$799,900", aura: "Mid $500Ks" },
  { category: "Private Garage", pierHouse: true, aura: false },
  { category: "Private Backyard", pierHouse: "Select units", aura: false },
  { category: "Private Driveway", pierHouse: true, aura: false },
  { category: "Occupancy", pierHouse: "2025-2026", aura: "2026-2027" },
]

const pierHouseFeatures = [
  "Non-stacked 3-storey design",
  "Private attached garage",
  "Private driveway",
  "Up to 5 bedrooms",
  "Optional private backyards",
  "Branthaven Fresh Thinking features",
]

const auraFeatures = [
  "Modern 2-storey design",
  "6-appliance package included",
  "Energy-efficient Caivan 360",
  "Low maintenance living",
  "Lowest waterfront entry price",
  "Contemporary finishes",
]

export default function ComparePage() {
  return (
    <div className="flex flex-col">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Compare", url: `${SITE_URL}/compare` },
        ]}
      />
      {/* Hero Section */}
      <section className="section">
        <div className="page-container">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Compare
            </p>
            <h1 className="hero-title mt-4 font-serif text-foreground">
              Find Your<br />
              <span className="italic">Perfect Fit</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Two exceptional townhome collections at Lakeview Village, each designed 
              for different lifestyles. Compare them side-by-side.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Compare Cards */}
      <section className="section border-y border-border">
        <div className="page-container">
          <div className="grid lg:grid-cols-2">
            {/* Pier House Card */}
            <div className="border-b border-border py-12 lg:border-b-0 lg:border-r lg:py-16 lg:pr-12">
              <div className="flex items-baseline justify-between">
                <div>
                  <h2 className="font-serif text-3xl text-foreground">Pier House Towns</h2>
                  <p className="mt-1 text-muted-foreground">by Branthaven</p>
                </div>
                <span className="bg-primary px-3 py-1 text-[10px] uppercase tracking-widest text-primary-foreground">
                  Registering
                </span>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <span className="text-sm text-muted-foreground">Starting</span>
                  <p className="font-serif text-2xl text-foreground">$799,900</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Size</span>
                  <p className="font-serif text-2xl text-foreground">1,255-2,195 sf</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Bedrooms</span>
                  <p className="font-serif text-2xl text-foreground">2-5</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Storeys</span>
                  <p className="font-serif text-2xl text-foreground">3</p>
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {pierHouseFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link 
                  href="/pier-house" 
                  className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground"
                >
                  <span className="link-underline">View Pier House</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Aura Card */}
            <div className="py-12 lg:py-16 lg:pl-12">
              <div className="flex items-baseline justify-between">
                <div>
                  <h2 className="font-serif text-3xl text-foreground">Aura Towns</h2>
                  <p className="mt-1 text-muted-foreground">by Caivan</p>
                </div>
                <span className="bg-muted px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                  Coming Soon
                </span>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <span className="text-sm text-muted-foreground">Starting</span>
                  <p className="font-serif text-2xl text-foreground">Mid $500Ks</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Size</span>
                  <p className="font-serif text-2xl text-foreground">811-1,138 sf</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Bedrooms</span>
                  <p className="font-serif text-2xl text-foreground">2-3</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Storeys</span>
                  <p className="font-serif text-2xl text-foreground">2</p>
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {auraFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link 
                  href="/aura-towns" 
                  className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground"
                >
                  <span className="link-underline">View Aura Towns</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-24 lg:py-32">
        <div className="page-container">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Specifications
            </p>
            <h2 className="section-title mt-4 font-serif text-foreground">
              Side-by-Side<br />
              <span className="italic">Comparison</span>
            </h2>
          </div>

          <div className="overflow-hidden border border-border">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-border bg-muted/30">
              <div className="p-4 lg:p-6">
                <span className="text-sm uppercase tracking-wider text-muted-foreground">Feature</span>
              </div>
              <div className="border-l border-border p-4 lg:p-6">
                <span className="font-serif text-foreground">Pier House</span>
              </div>
              <div className="border-l border-border p-4 lg:p-6">
                <span className="font-serif text-foreground">Aura</span>
              </div>
            </div>
            
            {/* Rows */}
            {comparisonRows.map((row, index) => (
              <div 
                key={row.category} 
                className={`grid grid-cols-3 ${index !== comparisonRows.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="p-4 lg:p-6">
                  <span className="text-sm text-muted-foreground">{row.category}</span>
                </div>
                <div className="flex items-center border-l border-border p-4 lg:p-6">
                  {typeof row.pierHouse === "boolean" ? (
                    row.pierHouse ? (
                      <Check className="h-5 w-5 text-primary" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground/30" />
                    )
                  ) : (
                    <span className="text-foreground">{row.pierHouse}</span>
                  )}
                </div>
                <div className="flex items-center border-l border-border p-4 lg:p-6">
                  {typeof row.aura === "boolean" ? (
                    row.aura ? (
                      <Check className="h-5 w-5 text-primary" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground/30" />
                    )
                  ) : (
                    <span className="text-foreground">{row.aura}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Prices are estimates for illustrative purposes. Subject to change. E.&O.E.
          </p>
        </div>
      </section>

      {/* Who Is Each For */}
      <section className="bg-muted/30 py-24 lg:py-32">
        <div className="page-container">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Buyer Profiles
            </p>
            <h2 className="section-title mt-4 font-serif text-foreground">
              Which Is Right<br />
              <span className="italic">For You?</span>
            </h2>
          </div>

          <div className="grid gap-px bg-border lg:grid-cols-2">
            {/* Pier House Profiles */}
            <div className="bg-card p-8 lg:p-12">
              <h3 className="font-serif text-2xl text-foreground">Pier House Towns</h3>
              <p className="mt-1 text-muted-foreground">Best for families & move-up buyers</p>
              
              <div className="mt-8 space-y-8">
                <div>
                  <h4 className="font-medium text-foreground">Growing Families</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Up to 5 bedrooms, private backyards, and attached garages offer 
                    the space families need.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Move-Up Buyers</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Upgrade from a condo to ground-oriented living with private 
                    outdoor space.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Multigenerational Households</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    FlexFit plans accommodate extended families with flexible 
                    living spaces.
                  </p>
                </div>
              </div>

              <Button 
                size="lg" 
                className="mt-10 rounded-none px-8 py-6 text-xs uppercase tracking-widest" 
                asChild
              >
                <Link href="/pier-house">
                  Explore Pier House
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Aura Profiles */}
            <div className="bg-card p-8 lg:p-12">
              <h3 className="font-serif text-2xl text-foreground">Aura Towns</h3>
              <p className="mt-1 text-muted-foreground">Best for first-time buyers & investors</p>
              
              <div className="mt-8 space-y-8">
                <div>
                  <h4 className="font-medium text-foreground">First-Time Buyers</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    The most affordable entry to brand-new waterfront townhome 
                    ownership in the GTA.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Young Couples</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Modern open-concept layouts perfect for a stylish waterfront 
                    lifestyle.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Investors & Downsizers</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Entry-level pricing with strong rental demand. Low maintenance 
                    without sacrificing quality.
                  </p>
                </div>
              </div>

              <Button 
                size="lg" 
                variant="outline"
                className="mt-10 rounded-none px-8 py-6 text-xs uppercase tracking-widest" 
                asChild
              >
                <Link href="/aura-towns">
                  Explore Aura Towns
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 lg:py-32">
        <div className="page-container">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-xl">
              <h2 className="section-title font-serif text-primary-foreground">
                Need Help<br />
                <span className="italic">Deciding?</span>
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                Register below and our team will provide personalized recommendations 
                based on your needs, budget, and timeline.
              </p>
            </div>
            <Link 
              href="#register" 
              className="group flex items-center gap-4 border border-primary-foreground/30 bg-transparent px-8 py-6 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <span className="text-sm uppercase tracking-widest">
                Get Expert Guidance
              </span>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="register" className="py-24 lg:py-32">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Get Started
              </p>
              <h2 className="section-title mt-4 font-serif text-foreground">
                Register for<br />
                <span className="italic">Both Projects</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Not sure which townhome is right for you? Register once to receive 
                information on both Pier House Towns and Aura Towns, plus personalized 
                recommendations from our team.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 bg-primary" />
                  <span className="text-muted-foreground">Floor plans for both projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 bg-primary" />
                  <span className="text-muted-foreground">Personalized townhome recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 bg-primary" />
                  <span className="text-muted-foreground">Exclusive incentives and pricing</span>
                </li>
              </ul>
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
