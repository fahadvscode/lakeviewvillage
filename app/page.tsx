import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RegisterForm } from "@/components/register-form"
import { AboutRealtor } from "@/components/about-realtor"
import { TownhomeProductSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { VisibleAIAnswers } from "@/components/seo/ai-answer-blocks"
import { LastUpdated } from "@/components/last-updated"
import { SITE_URL } from "@/lib/site-config"
import { AURA, auraUrl } from "@/lib/aura-config"
import { IMAGES } from "@/lib/images"
import { ArrowRight, MapPin, Train, Home, Building2, Leaf } from "lucide-react"

const stats = [
  { value: String(AURA.communityAcres), label: "Acres", sublabel: "Lakeview Village" },
  { value: String(AURA.phase1Units), label: "Homes", sublabel: "Phase 1" },
  { value: "4", label: "Minutes", sublabel: "To Long Branch GO" },
  { value: AURA.priceFromShort, label: "Starting", sublabel: "From" },
]

const highlights = [
  {
    icon: MapPin,
    title: "Waterfront Master Plan",
    description:
      "Steps from Lake Ontario, Jim Tovey Conservation Area, and a revitalized waterfront pier within Canada's largest lakefront transformation.",
  },
  {
    icon: Train,
    title: "Transit Connected",
    description:
      "Long Branch GO in ~4 minutes. Union Station in 20–25 minutes via Lakeshore West. QEW and 427 nearby.",
  },
  {
    icon: Home,
    title: "Stacked Townhomes",
    description: `${AURA.productType} with ${AURA.beds} bedrooms, ${AURA.sqftDetail}, and ${AURA.parking.toLowerCase()}.`,
  },
  {
    icon: Leaf,
    title: "Caivan 360",
    description:
      "Energy-efficient design and ABIC advanced building technology for comfortable, lower-utility living.",
  },
]

const gallery = [
  { src: IMAGES.auraCommunity, alt: "Aura Lakeview Village community courtyard and townhome exteriors by Caivan" },
  { src: IMAGES.intKitchen, alt: "Modern kitchen interior at Aura Lakeview Village upper residence" },
  { src: IMAGES.auraLakefront, alt: "Aura Lakeview Village near Lake Ontario and Ogden Park waterfront" },
  { src: IMAGES.intLiving, alt: "Open concept living room at Aura Lakeview Village upper residence" },
]

export default function HomePage() {
  return (
    <>
      <TownhomeProductSchema
        name={AURA.name}
        description={`${AURA.productType} by ${AURA.builder} with ${AURA.beds} bedrooms in Mississauga's ${AURA.communityName} waterfront community.`}
        builder={AURA.builder}
        priceFrom={AURA.priceFrom}
        priceValue={AURA.priceValue}
        bedrooms={AURA.beds}
        sqftRange={AURA.sqftDetail}
        image={IMAGES.hero}
        url={auraUrl()}
      />
      <BreadcrumbSchema items={[{ name: "Home", url: SITE_URL }]} />

      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src={IMAGES.hero}
          alt="Aura Lakeview Village by Caivan - modern stacked townhomes in Mississauga"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 z-10 flex flex-col justify-end pb-24">
          <div className="page-container">
            <div className="mx-auto w-full max-w-4xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/70">
                by {AURA.builder}
              </p>
              <h1 className="hero-title font-serif text-white drop-shadow-md">
                Aura Lakeview<br />
                <span className="italic">Village</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 drop-shadow-sm">
                {AURA.productType} in Mississauga&apos;s {AURA.communityAcres}-acre waterfront
                master plan. From the {AURA.priceFromShort}. Occupancy {AURA.occupancy}.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="rounded-none bg-white px-10 py-6 text-xs uppercase tracking-widest text-foreground hover:bg-white/90"
                  asChild
                >
                  <Link href="#register">Register for VIP Access</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-none border-white/30 bg-transparent px-10 py-6 text-xs uppercase tracking-widest text-white hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <Link href={AURA.floorPlansPath}>View Floor Plans</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-primary py-12 md:py-14">
        <div className="page-container">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center py-10 text-center ${
                  index !== stats.length - 1 ? "border-r border-primary-foreground/10" : ""
                }`}
              >
                <span className="font-serif text-4xl text-primary-foreground lg:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm uppercase tracking-wider text-primary-foreground/70">
                  {stat.label}
                </span>
                <span className="text-xs text-primary-foreground/50">{stat.sublabel}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-container">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Overview</p>
              <h2 className="section-title mt-4 font-serif text-foreground">
                What is<br />
                <span className="italic">{AURA.name}?</span>
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                {AURA.name} is an exclusive collection of {AURA.productType} by{" "}
                {AURA.builder} in {AURA.communityName}, Mississauga—one of the GTA&apos;s most
                ambitious waterfront revitalizations. Phase 1 delivers approximately{" "}
                {AURA.phase1Units} homes with contemporary architecture, private outdoor spaces,
                and access to parks, trails, and future retail at Lakeview Square.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                According to industry reporting, Caivan&apos;s first release saw exceptional
                demand—reflecting strong buyer interest in attainable new townhome product steps
                from Lake Ontario. Register for VIP access to the next release, pricing, and
                floor plans.
              </p>
              <LastUpdated date={AURA.lastContentUpdate} className="mt-6" />
              <Link
                href={AURA.canonicalPath}
                className="group mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground"
              >
                <span className="link-underline">Explore Aura in Detail</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={IMAGES.auraStraight2}
                alt="Aura Lakeview Village townhome exterior architecture by Caivan Homes"
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
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Gallery</p>
            <h2 className="section-title mt-4 font-serif text-foreground">
              Design &<br />
              <span className="italic">Lifestyle</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {gallery.map((img) => (
              <div key={img.src} className="relative aspect-[4/3] overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="50vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-container">
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Why {AURA.shortName}
            </p>
            <h2 className="section-title mt-4 font-serif text-foreground">
              Location, Quality,<br />
              <span className="italic">Opportunity</span>
            </h2>
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.title} className="bg-card p-8">
                <item.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-6 font-serif text-xl text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href={AURA.floorPlansPath}>
                Floor Plans & Pricing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/discovery-centre">
                Discovery Centre
                <MapPin className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section bg-muted/30">
        <div className="page-container">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground text-center">
            Common Questions
          </p>
          <h2 className="section-title mt-4 text-center font-serif text-foreground">
            Quick Answers
          </h2>
          <div className="mx-auto mt-12 max-w-3xl">
            <VisibleAIAnswers />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground"
            >
              <span className="link-underline">View All FAQs</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src={IMAGES.communityStreetscape}
          alt="Lakeview Village Waterway Common streetscape near Aura by Caivan"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="page-container relative flex h-full items-center justify-center">
          <div className="max-w-2xl text-center">
            <Building2 className="mx-auto h-10 w-10 text-white/80" />
            <h2 className="hero-title mt-4 font-serif text-white">
              Your Front Door to<br />
              <span className="italic">Lakeside Living</span>
            </h2>
            <Button
              size="lg"
              className="mt-10 rounded-none bg-white px-10 py-6 text-xs uppercase tracking-widest text-foreground hover:bg-white/90"
              asChild
            >
              <Link href="#register">Register Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="register" className="section bg-muted/50">
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
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Be first to receive floor plans, pricing, and buyer guidance for {AURA.name} by{" "}
                {AURA.builder}. Our independent pre-construction team helps you navigate deposits,
                incentives, and next steps.
              </p>
            </div>
            <RegisterForm variant="full" project="aura" />
          </div>
        </div>
      </section>

      <AboutRealtor />
    </>
  )
}
