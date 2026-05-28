import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RegisterForm } from "@/components/register-form"
import { BreadcrumbSchema } from "@/components/seo/json-ld"
import { LastUpdated } from "@/components/last-updated"
import type { Metadata } from "next"
import { SITE_URL } from "@/lib/site-config"
import { AURA } from "@/lib/aura-config"
import { IMAGES, siteImageUrl } from "@/lib/images"
import { 
  Waves, 
  TreePine, 
  Building2, 
  Train, 
  ShoppingBag,
  GraduationCap,
  ArrowRight,
  MapPin
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Lakeview Village | 177-Acre Waterfront Community Mississauga",
  description: "Lakeview Village: 177-acre master-planned waterfront community in Mississauga on the former Lakeview Generating Station site. 7 districts, 5,000-7,000 homes, Jim Tovey Conservation Area. Near Long Branch GO.",
  keywords: ["Lakeview Village Mississauga", "what is Lakeview Village", "Lakeview master plan", "Mississauga waterfront community", "LCPL development"],
  alternates: {
    canonical: `${SITE_URL}/about`
  },
  openGraph: {
    title: "About Lakeview Village | Mississauga's Waterfront Transformation",
    description: "177-acre master-planned community transforming Mississauga's waterfront with townhomes, condos, parks, and the Jim Tovey Conservation Area.",
    images: [siteImageUrl(IMAGES.masterplan, SITE_URL)],
  }
}

const districts = [
  {
    name: "Lakeview Square",
    description: "The heart of the community featuring shopping, dining, and entertainment with a man-made pond for paddle sports."
  },
  {
    name: "Waterway Common",
    description: "An urban park spanning the width of the development with a man-made waterway that becomes a skating rink in winter."
  },
  {
    name: "Ogden Green",
    description: "Home to mid-rise and townhome developments with landscaped streets and pedestrian-friendly walkways."
  },
  {
    name: "The Marina",
    description: "A residential district featuring waterfront living and stunning views of Lake Ontario."
  },
  {
    name: "Inspiration Point",
    description: "A waterfront park with a pier extending 60 metres into Lake Ontario, featuring public art and cultural spaces."
  },
  {
    name: "Serson Innovation Corridor",
    description: "A 20+ acre Innovation District with over 825,000 sq. ft. of office space. Employment, research, and technology hub steps from the waterfront."
  },
  {
    name: "Lakeshore Gateway",
    description: "The signature entryway into Lakeview Village with mixed-use buildings, grocery, pharmacy, and essential services."
  },
]

const highlights = [
  {
    icon: Waves,
    title: "177 Acres of Waterfront",
    description: "One of the largest waterfront redevelopments in the Greater Toronto Area, transforming a former industrial site."
  },
  {
    icon: TreePine,
    title: "26-Hectare Conservation Area",
    description: "Jim Tovey Lakeview Conservation Area provides a green oasis with trails, meadows, and natural habitats."
  },
  {
    icon: Building2,
    title: "5,000-7,000 New Homes",
    description: "A diverse mix of housing including townhomes, mid-rise buildings, and waterfront condominiums."
  },
  {
    icon: ShoppingBag,
    title: "600,000+ Sq. Ft. Commercial",
    description: "Employment, institutional, and retail space creating a complete live-work-play community."
  },
  {
    icon: Train,
    title: "Transit Connected",
    description: "Near Long Branch GO and Port Credit GO stations with improved MiWay transit connections planned."
  },
  {
    icon: GraduationCap,
    title: "Cultural & Educational Campus",
    description: "200,000 sq. ft. of cultural space and potential educational facilities at the water's edge."
  },
]

const timeline = [
  {
    year: "2005-2007",
    title: "Coal Plant Closure",
    description: "Ontario Government shuts down the Lakeview Generating Station to reduce pollution."
  },
  {
    year: "2018",
    title: "Development Partner Selected",
    description: "Lakeview Community Partners Ltd. (LCPL) selected to purchase and develop the 177-acre site for $275 million."
  },
  {
    year: "November 2021",
    title: "Master Plan Approved",
    description: "City of Mississauga approves the Lakeview Village Master Plan after years of collaboration with stakeholders."
  },
  {
    year: "2023-2024",
    title: "Phase 1 Construction",
    description: "Six premier builders—Branthaven, Caivan, Greenpark, Tridel, DECO, and Opus—begin construction. Discovery Centre opens at 985 Jim Tovey Boulevard."
  },
  {
    year: "2025+",
    title: "Community Takes Shape",
    description: "Ongoing construction of townhomes, condos, parks, pier, and community amenities over 15-20 years."
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "About", url: `${SITE_URL}/about` },
        ]}
      />
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 bg-muted/50" />
        <div className="page-container relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              The Master Plan
            </span>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="text-balance">About Lakeview Village</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A 177-acre transformation of Mississauga&apos;s waterfront into one of 
              Canada&apos;s most exciting master-planned communities.
            </p>
            <LastUpdated className="mt-4" />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="page-container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
                <span className="text-balance">From Industrial Past to Waterfront Future</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Lakeview Village is redefining Mississauga&apos;s waterfront on the former 
                site of the Lakeview Generating Station. This ambitious project by Lakeview 
                Community Partners Limited (LCPL) will create a pedestrian-friendly, 
                environmentally-sustainable community with thousands of new homes.
              </p>
              <p className="mt-4 text-muted-foreground">
                The master plan includes a diverse mix of housing types, with ground-oriented 
                townhomes offering families the rare opportunity to live steps from Lake Ontario. 
                Seven distinct districts will provide unique experiences, from the bustling 
                Lakeview Square to the serene Inspiration Point waterfront park.
              </p>
              <p className="mt-4 text-muted-foreground">
                A major feature is the 26-hectare Jim Tovey Lakeview Conservation Area, 
                which will serve as a green oasis in the heart of the city. The waterfront 
                promenade will link existing parks with new boardwalks, beaches, and trails.
              </p>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/compare">
                    Explore Townhome Options
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={IMAGES.masterplan}
                alt="Lakeview Village master plan aerial view"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
              <span className="text-balance">A Community Designed for Living</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Lakeview Village combines waterfront living with urban convenience, 
              creating a complete community where you can live, work, and play.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <Card key={item.title} className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Districts Section */}
      <section className="py-16 md:py-24">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
              <span className="text-balance">Seven Distinct Districts</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Each neighbourhood within Lakeview Village has its own character and function, 
              creating diverse experiences throughout the community.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {districts.map((district, index) => (
              <Card key={district.name} className="h-full">
                <CardContent className="p-6">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-foreground">{district.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{district.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
              <span className="text-balance">The Transformation Timeline</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Over a decade in the making, Lakeview Village is one of the most ambitious 
              waterfront redevelopments in Canadian history.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={item.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                      {index + 1}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="mt-2 h-full w-0.5 bg-border" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-sm font-semibold text-primary">{item.year}</p>
                    <h3 className="mt-1 font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-24">
        <div className="page-container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <MapPin className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    Lakeshore Road East & Dixie Road
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Mississauga, Ontario
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Where Mississauga&apos;s waterfront meets the Toronto border
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
                <span className="text-balance">Perfectly Positioned</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Lakeview Village is located near Lakeshore Road and Dixie Road in 
                south-east Mississauga, where the city&apos;s waterfront meets Toronto&apos;s 
                urban edge. The community offers unparalleled connectivity:
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">1</span>
                  <span className="text-muted-foreground"><strong className="text-foreground">Long Branch GO Station</strong> - Quick access to Downtown Toronto</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">2</span>
                  <span className="text-muted-foreground"><strong className="text-foreground">QEW & Highway 427</strong> - Minutes away for easy commuting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">3</span>
                  <span className="text-muted-foreground"><strong className="text-foreground">Port Credit</strong> - Nearby dining, shopping, and nightlife</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">4</span>
                  <span className="text-muted-foreground"><strong className="text-foreground">Sherway Gardens</strong> - Premier shopping destination</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">5</span>
                  <span className="text-muted-foreground"><strong className="text-foreground">Toronto Pearson Airport</strong> - Approximately 15 minutes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Builders Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
              <span className="text-balance">Built by Trusted Developers</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Lakeview Community Partners Limited has assembled some of the GTA&apos;s 
              most respected builders for this landmark project.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-xl">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">{AURA.builder}</h3>
                <p className="mt-2 text-sm text-primary">{AURA.name}</p>
                <p className="mt-4 text-muted-foreground">
                  {AURA.builder} develops {AURA.name}—{AURA.productType} with Caivan 360
                  energy efficiency and ABIC manufacturing. Among the first residential
                  collections in the Lakeview Village master plan.
                </p>
                <Button variant="outline" className="mt-6" asChild>
                  <Link href={AURA.canonicalPath}>
                    Explore {AURA.shortName}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-16 md:py-24">
        <div className="page-container">
          <div className="mx-auto max-w-2xl">
            <Card>
              <CardContent className="p-8">
                <RegisterForm 
                  title="Stay Updated on Lakeview Village"
                  subtitle="Register to receive the latest news, pricing, and availability for townhomes in Lakeview Village."
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
