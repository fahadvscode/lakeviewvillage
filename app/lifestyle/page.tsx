import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RegisterForm } from "@/components/register-form"
import { BreadcrumbSchema } from "@/components/seo/json-ld"
import { LastUpdated } from "@/components/last-updated"
import type { Metadata } from "next"
import { SITE_URL } from "@/lib/site-config"
import { AURA } from "@/lib/aura-config"
import { IMAGES } from "@/lib/images"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { 
  Waves,
  TreePine,
  Train,
  Car,
  ShoppingBag,
  Building2,
  TrendingUp,
  Shield,
  Clock,
  ArrowRight,
  MapPin,
  Anchor,
  Leaf,
  Sparkles,
  Palette
} from "lucide-react"

export const metadata: Metadata = {
  title: "Lifestyle & Investment | Is Lakeview Village a Good Investment?",
  description: "Lakeview Village lifestyle: waterfront living near Long Branch GO (20-25 min to Toronto). Investment potential in $275M master-planned community. Parks, trails, transit, and urban conveniences.",
  keywords: ["Lakeview Village investment", "is Lakeview Village a good investment", "Mississauga waterfront lifestyle", "Long Branch GO townhomes", "Lakeview Village transit", "Lakeview Square", "Jim Tovey pier", "Lakeview Village Innovation District", "Canada longest pier Great Lakes"],
  alternates: {
    canonical: `${SITE_URL}/lifestyle`
  },
  openGraph: {
    title: "Lifestyle & Investment at Lakeview Village",
    description: "Waterfront living with urban convenience. Why Lakeview Village townhomes are a compelling investment opportunity.",
    images: [IMAGES.auraLakefront],
  }
}

const lifestyleFeatures = [
  {
    icon: Waves,
    title: "Waterfront Living",
    description: "Steps from Lake Ontario with access to beaches, boardwalks, and the Jim Tovey Lakeview Conservation Area."
  },
  {
    icon: TreePine,
    title: "Parks & Trails",
    description: "Connected to Lakefront Promenade Park, Douglas Kennedy Park, and an extensive trail network."
  },
  {
    icon: ShoppingBag,
    title: "Shopping & Dining",
    description: "Close to Sherway Gardens, Port Credit's restaurants, and the planned retail at Lakeview Square."
  },
  {
    icon: Building2,
    title: "Arts & Culture",
    description: "200,000 sq. ft. of cultural space planned, plus proximity to Toronto's entertainment districts."
  },
]

const lifeByTheLake = [
  {
    icon: Anchor,
    title: "Pier & Waterfront",
    description: "The former industrial pier is being transformed into one of the longest piers on the Canadian Great Lakes. Expect beaches, boats, paddle boards, kayaks, music festivals, and waterfront dining—all steps from your front door."
  },
  {
    icon: Building2,
    title: "Lakeview Square",
    description: "The heart of the community—a vibrant hub with grocery, restaurants, brewpub, and year-round events. Summer fountains and music give way to winter festivals and seasonal lights. Always alive with energy."
  },
  {
    icon: TreePine,
    title: "Parks & Outdoor Spaces",
    description: "Over 45 acres of green space, access to 450+ acres of nearby parkland, and the 64-acre Jim Tovey Lakeview Conservation Area. Run the pier, bike the trails, picnic by the boardwalk, or explore the Serson Creek nature trail."
  },
  {
    icon: Sparkles,
    title: "Innovation District",
    description: "A 20+ acre campus for employment, research, and technology—right on the waterfront. Work steps from the lake, collaborate at the Hub, meet on the pier. A next-gen employment destination."
  },
  {
    icon: Palette,
    title: "Arts & Culture",
    description: "Artists live and create here. Active studios, open-air exhibitions, concerts by the water, literary festivals, theatre, and dance. Lakeview Village has a rhythm that celebrates creativity."
  },
  {
    icon: Leaf,
    title: "Smart & Sustainable",
    description: "Canada's most extensive low-impact waterfront development. Green roofs, rain gardens, renewable energy, water conservation, transit-first design. A healthier way to live by the lake."
  },
]

const transitConnections = [
  {
    destination: "Long Branch GO Station",
    time: "4-5 min drive",
    description: "Direct Lakeshore West GO service to Union Station"
  },
  {
    destination: "TTC Long Branch Loop",
    time: "5 min drive",
    description: "501 Queen streetcar service to downtown Toronto"
  },
  {
    destination: "QEW / Highway 427",
    time: "5 min drive",
    description: "Quick access to the highway network"
  },
  {
    destination: "Port Credit GO Station",
    time: "10 min drive",
    description: "Alternative GO Transit connection"
  },
  {
    destination: "Sherway Gardens",
    time: "9 min drive",
    description: "Premier shopping and dining"
  },
  {
    destination: "Square One",
    time: "15 min drive",
    description: "Mississauga's urban centre"
  },
  {
    destination: "Toronto Pearson Airport",
    time: "15 min drive",
    description: "International travel connections"
  },
  {
    destination: "Downtown Toronto",
    time: "20-25 min",
    description: "Via GO Train or driving"
  },
]

const investmentReasons = [
  {
    icon: TrendingUp,
    title: "Early-Phase Opportunity",
    description: "Get in at the ground level of a 177-acre waterfront transformation. Early buyers historically benefit from appreciation as communities mature."
  },
  {
    icon: Shield,
    title: "Trusted Builders",
    description: `${AURA.builder} brings proven track record and Caivan 360 construction to ${AURA.name} within Lakeview Community Partners' master plan.`,
  },
  {
    icon: Building2,
    title: "Master Plan Vision",
    description: "The comprehensive master plan includes employment, retail, cultural, and residential uses - creating a complete community with long-term demand."
  },
  {
    icon: Clock,
    title: "Limited Supply",
    description: "Ground-oriented townhomes represent a small portion of Lakeview Village's housing mix. This rare product type commands premium value."
  },
]

const faqs = [
  {
    question: `Are ${AURA.name} townhomes freehold or condo?`,
    answer: `${AURA.name} consists of condominium-style ${AURA.productType} with common elements and ${AURA.parking.toLowerCase()}. Review status documents and fee schedules with sales and your lawyer.`,
  },
  {
    question: "How does buying into a master-planned community benefit long-term value?",
    answer: "Master-planned communities like Lakeview Village are designed holistically with coordinated infrastructure, amenities, and development phases. As each phase completes, property values typically increase. The 177-acre scale ensures ongoing investment in parks, retail, and transit connections that benefit all residents."
  },
  {
    question: `Who is ${AURA.name} best suited for?`,
    answer: `${AURA.name} suits first-time buyers, young families, investors, and downsizers seeking modern townhome living near the waterfront from the ${AURA.priceFromShort}.`,
  },
  {
    question: "When will Lakeview Village be complete?",
    answer: `Lakeview Village builds out over 15–20 years. ${AURA.name} anticipates occupancy around ${AURA.occupancy} while the broader community continues to grow.`,
  },
  {
    question: "What amenities will be available in the community?",
    answer: "The master plan includes waterfront parks, trails, beaches, retail at Lakeview Square, the Waterway Common skating rink/pond, cultural spaces at Inspiration Point, and the Serson Innovation Corridor for employment. The community will have access to grocery stores, restaurants, and everyday services."
  },
  {
    question: "How far is Lakeview Village from downtown Toronto?",
    answer: "Downtown Toronto is approximately 20-25 minutes away via GO Train from Long Branch station, or by car via the QEW/Gardiner. The location offers the best of both worlds: waterfront living with quick access to the city."
  },
]

export default function LifestylePage() {
  return (
    <div className="flex flex-col">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Lifestyle", url: `${SITE_URL}/lifestyle` },
        ]}
      />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full">
        <Image
          src={IMAGES.auraLakefront}
          alt="Lake Ontario waterfront near Aura Lakeview Village"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="page-container relative flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
          <Badge className="mb-4 bg-primary/90 text-primary-foreground">
            Lifestyle & Investment
          </Badge>
          <h1 className="max-w-4xl font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="text-balance">Waterfront Living, Urban Convenience</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            Discover why Lakeview Village townhomes offer one of the GTA&apos;s most 
            compelling lifestyle and investment opportunities.
          </p>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-16 md:py-24">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
              <span className="text-balance">The Lakeview Lifestyle</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Wake up steps from Lake Ontario. Walk the waterfront trails. Enjoy world-class 
              amenities while staying connected to everything the GTA has to offer.
            </p>
            <LastUpdated className="mt-4" />
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {lifestyleFeatures.map((feature) => (
              <Card key={feature.title} className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Life by the Lake - Community Features */}
          <div className="mt-16">
            <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
              Life by the Lake
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Modern urban living connected to the land and the lake. A dynamic waterfront 
              village with parks, pier, retail, arts, and innovation—all within walking distance.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {lifeByTheLake.map((feature) => (
                <Card key={feature.title} className="h-full border-border">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-lg bg-muted p-8">
            <h3 className="font-serif text-xl font-semibold text-foreground">
              What Buyers Love About Lakeview Village
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">Rare waterfront location in the GTA</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">Ground-oriented living with outdoor space</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">Connected to nature and urban amenities</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">Quick commute to downtown Toronto</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">Premier builders with proven track records</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">Complete community with long-term vision</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transit & Connectivity */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
              <span className="text-balance">Transit & Connectivity</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Lakeview Village puts you at the centre of it all. Quick access to GO Transit, 
              major highways, and everything Mississauga and Toronto have to offer.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {transitConnections.map((connection) => (
              <Card key={connection.destination} className="h-full">
                <CardContent className="p-4">
                  <p className="font-semibold text-foreground">{connection.destination}</p>
                  <p className="mt-1 text-lg font-bold text-primary">{connection.time}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{connection.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Commuter Friendly
              </h3>
              <p className="mt-4 text-muted-foreground">
                Long Branch GO Station provides direct Lakeshore West service to Union Station 
                in downtown Toronto. The TTC Long Branch Loop offers streetcar connections, 
                while the QEW and Highway 427 provide quick highway access for drivers.
              </p>
              <p className="mt-4 text-muted-foreground">
                MiWay is working with the city to improve transit options within the 
                neighbourhood, making it easier than ever to get around without a car.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-4 rounded-lg bg-card p-4">
                <Train className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">GO Transit</p>
                  <p className="text-sm text-muted-foreground">To Union Station</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-lg bg-card p-4">
                <Car className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Highway Access</p>
                  <p className="text-sm text-muted-foreground">QEW & 427 nearby</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section id="investment" className="py-16 md:py-24">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
              <span className="text-balance">The Investment Story</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Lakeview Village represents one of the most significant waterfront transformations 
              in Canadian history. Here&apos;s why it matters for investors and homeowners alike.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {investmentReasons.map((reason) => (
              <Card key={reason.title} className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <reason.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">{reason.title}</h3>
                  <p className="mt-2 text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-lg bg-primary/5 p-8">
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Why Townhomes at Lakeview Village?
            </h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-foreground">Rare Product Type</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Ground-oriented townhomes are a small portion of new development in the GTA. 
                  At Lakeview Village, they represent an even rarer opportunity: waterfront 
                  townhome living in a master-planned community.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Strong Rental Demand</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  The GTA&apos;s rental market continues to see high demand for family-sized 
                  units. Townhomes with multiple bedrooms and private outdoor space 
                  command premium rents.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Long-Term Appreciation</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  As Lakeview Village builds out over the next 15-20 years, early buyers 
                  benefit from each phase of development. The complete vision includes 
                  retail, employment, and cultural amenities that add value.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Attainable Entry Point</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  {AURA.name} from the {AURA.priceFromShort} offers one of the most accessible
                  paths to new townhome ownership near Mississauga&apos;s waterfront.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
              <span className="text-balance">Frequently Asked Questions</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Common questions about Lakeview Village townhomes.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="page-container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
                <span className="text-balance">Ready to Learn More?</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Register for VIP access to receive pricing, floor plans, and investment
                insights for {AURA.name}.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
            <Card>
              <CardContent className="p-8">
                <RegisterForm
                  title="Get Exclusive Access"
                  subtitle="Register for VIP pricing, floorplans, and investment updates."
                  project="aura"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-border py-8">
        <div className="page-container text-center">
          <p className="text-xs text-muted-foreground">
            This page is for informational purposes only and does not constitute investment advice. 
            Prices, specifications, and availability are subject to change without notice. 
            Please consult with a licensed real estate professional. E.&O.E.
          </p>
        </div>
      </section>
    </div>
  )
}
