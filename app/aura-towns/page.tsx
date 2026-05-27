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
  title: "Aura Towns by Caivan | Modern Townhomes from Mid-$500Ks",
  description: "Aura Towns at Lakeview Village Mississauga: modern 2-storey condo townhomes by Caivan with 2-3 bedrooms (811-1,138 sq. ft.). Energy-efficient, 6-appliance package. Lowest waterfront townhome entry in GTA. Register now.",
  keywords: ["Aura Towns", "Caivan townhomes", "Lakeview Village townhomes", "affordable townhomes Mississauga", "2-storey townhomes", "waterfront condo towns GTA"],
  alternates: {
    canonical: `${SITE_URL}/aura-towns`
  },
  openGraph: {
    title: "Aura Towns by Caivan | Lakeview Village Mississauga",
    description: "Modern 2-storey townhomes with energy-efficient design in Mississauga's waterfront community. From mid-$500Ks - lowest GTA waterfront entry.",
    images: [IMAGES.aura],
  }
}

const floorplans = [
  {
    name: "The Birch",
    sqft: "811",
    beds: "2",
    baths: "2",
    price: "Mid $500Ks",
  },
  {
    name: "The Cedar",
    sqft: "948",
    beds: "2",
    baths: "2.5",
    price: "High $500Ks",
  },
  {
    name: "The Maple",
    sqft: "1,028",
    beds: "3",
    baths: "2.5",
    price: "Low $600Ks",
    popular: true,
  },
  {
    name: "The Oak",
    sqft: "1,138",
    beds: "3",
    baths: "2.5",
    price: "Mid $600Ks",
  },
]

const highlights = [
  "Modern 2-storey design",
  "Energy-efficient Caivan 360",
  "6-appliance package included",
  "Open concept layouts",
  "Low maintenance living",
  "Lowest waterfront entry price",
]

const included = [
  "Stainless steel 6-appliance package",
  "Quartz kitchen countertops",
  "Contemporary cabinetry",
  "Laminate flooring throughout",
  "Energy-efficient windows",
  "Smart thermostat",
]

export default function AuraTownsPage() {
  return (
    <div className="flex flex-col">
      <TownhomeProductSchema
        name="Aura Towns at Lakeview Village"
        description="Modern 2-storey condo townhomes by Caivan with energy-efficient design and 2-3 bedrooms in Mississauga's waterfront community."
        builder="Caivan Communities"
        priceFrom="Mid $500Ks"
        priceValue={550000}
        bedrooms="2-3"
        sqftRange="811 - 1,138 sq. ft."
        image={IMAGES.aura}
        url={`${SITE_URL}/aura-towns`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Aura Towns", url: `${SITE_URL}/aura-towns` },
        ]}
      />
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src={IMAGES.aura}
          alt="Aura Towns by Caivan at Lakeview Village"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        
        <div className="absolute inset-0 z-10 flex flex-col justify-end pb-24">
          <div className="page-container">
            <div className="mx-auto w-full max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">
              Coming Soon
            </p>
            <h1 className="hero-title mt-4 font-serif text-white drop-shadow-md">
              Aura<br />
              <span className="italic">Towns</span>
            </h1>
            <p className="mt-2 text-lg text-white/70">by Caivan</p>
            <p className="mt-6 max-w-xl text-lg text-white/90 leading-relaxed drop-shadow-sm">
              Modern 2-storey condo townhomes with energy-efficient design. The most 
              accessible entry to waterfront townhome living in the GTA.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="rounded-none bg-white px-10 py-6 text-xs uppercase tracking-widest text-foreground hover:bg-white/90" 
                asChild
              >
                <Link href="#register">
                  Join the Waitlist
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-none border-white/30 bg-transparent px-10 py-6 text-xs uppercase tracking-widest text-white hover:bg-white/10 hover:text-white" 
                asChild
              >
                <Link href="/compare">
                  Compare to Pier House
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
              { value: "2", label: "Storeys" },
              { value: "2-3", label: "Bedrooms" },
              { value: "811-1,138", label: "Sq. Ft." },
              { value: "6", label: "Appliances" },
              { value: "Mid $500Ks", label: "Starting" },
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
                Caivan<br />
                <span className="italic">Communities</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                An award-winning builder known for creating thoughtfully designed 
                communities across the Greater Toronto Area. Their focus on energy 
                efficiency, smart design, and attainable pricing has earned them 
                recognition as one of the region&apos;s most innovative builders.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                The Caivan 360 approach ensures every home is built to high standards 
                of energy efficiency, reducing utility costs and environmental impact 
                while providing comfortable, modern living spaces.
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

      {/* Floor Plans */}
      <section className="section bg-muted/30">
        <div className="page-container">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Floor Plans
            </p>
            <h2 className="section-title mt-4 font-serif text-foreground">
              Smart Layouts,<br />
              <span className="italic">Efficient Living</span>
            </h2>
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {floorplans.map((plan) => (
              <div 
                key={plan.name} 
                className={`relative flex flex-col bg-card p-8 ${
                  plan.popular ? "ring-2 ring-primary ring-inset" : ""
                }`}
              >
                {plan.popular && (
                  <span className="absolute right-4 top-4 bg-primary px-2 py-1 text-[10px] uppercase tracking-widest text-primary-foreground">
                    Popular
                  </span>
                )}
                <h3 className="font-serif text-xl text-foreground">{plan.name}</h3>
                <p className="mt-4 font-serif text-2xl text-primary">{plan.price}</p>
                <div className="mt-6 space-y-2 border-t border-border pt-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Size</span>
                    <span className="text-foreground">{plan.sqft} sq ft</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Beds</span>
                    <span className="text-foreground">{plan.beds}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Baths</span>
                    <span className="text-foreground">{plan.baths}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Prices are estimates for illustrative purposes. Subject to change. E.&O.E.
          </p>
        </div>
      </section>

      {/* Included Features */}
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
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Aura Towns come equipped with premium features included in the base 
                price. No need to budget for expensive upgrades - everything you need 
                for modern living is already included.
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

      {/* Location */}
      <section className="section bg-muted/30">
        <div className="page-container">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Location
              </p>
              <h2 className="section-title mt-4 font-serif text-foreground">
                Waterfront<br />
                <span className="italic">Living</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Aura Towns are part of Lakeview Village, Mississauga&apos;s 177-acre 
                master-planned waterfront community. Enjoy direct access to Lake 
                Ontario, parks, trails, and urban amenities.
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
              First-Time Buyers,<br />
              <span className="italic">Investors & Downsizers</span>
            </h2>
            <p className="mt-6 text-primary-foreground/80 leading-relaxed">
              Aura Towns offer the lowest entry point to brand-new waterfront townhome 
              ownership in the GTA. Perfect for first-time buyers seeking more space 
              than a condo, investors looking for rental income potential, or empty 
              nesters downsizing without compromising on lifestyle.
            </p>
            <Button 
              size="lg" 
              className="mt-10 rounded-none bg-white px-10 py-6 text-xs uppercase tracking-widest text-primary hover:bg-white/90" 
              asChild
            >
              <Link href="#register">
                Join the Waitlist
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
                Need More<br />
                <span className="italic">Space?</span>
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Pier House Towns by Branthaven offers larger floor plans with up to 
                5 bedrooms, private garages, and optional backyards.
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
                <span className="italic">Aura Towns</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Be first to receive floor plans, pricing, and exclusive incentives 
                for Aura Towns by Caivan. Join the waitlist to secure your spot 
                in this anticipated waterfront community.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 bg-primary" />
                  <span className="text-muted-foreground">Early access to floor plans</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 bg-primary" />
                  <span className="text-muted-foreground">VIP pricing when released</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 bg-primary" />
                  <span className="text-muted-foreground">Complimentary buyer consultation</span>
                </li>
              </ul>
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
