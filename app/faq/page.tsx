import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RegisterForm } from "@/components/register-form"
import { FAQPageSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { LastUpdated } from "@/components/last-updated"
import { auraFaqCategories, getAllAuraFaqs } from "@/lib/faq-data"
import { AURA } from "@/lib/aura-config"
import type { Metadata } from "next"
import { SITE_URL } from "@/lib/site-config"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: `FAQ | ${AURA.name} Questions Answered`,
  description: `Answers about ${AURA.name} by ${AURA.builder}: pricing, floor plans, occupancy ${AURA.occupancy}, ownership, transit, and how to register.`,
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: `FAQ | ${AURA.name}`,
    description: `Everything you need to know about ${AURA.name} in Mississauga's Lakeview Village.`,
  },
}

const allFaqs = getAllAuraFaqs()

export default function FAQPage() {
  return (
    <>
      <FAQPageSchema faqs={allFaqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "FAQ", url: `${SITE_URL}/faq` },
        ]}
      />

      <div className="flex flex-col">
        <section className="bg-muted/50 py-16 md:py-24">
          <div className="page-container">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-4">Frequently Asked Questions</Badge>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                <span className="text-balance">{AURA.name} FAQ</span>
              </h1>
              <div className="mx-auto mt-8 max-w-2xl rounded-lg border border-primary/20 bg-card p-6 text-left">
                <p className="leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Quick Answer:</strong> {AURA.name} by{" "}
                  {AURA.builder} offers {AURA.productType} with {AURA.beds} bedrooms (
                  {AURA.sqftDetail}) from the {AURA.priceFromShort} in a {AURA.communityAcres}
                  -acre waterfront master plan near Long Branch GO—approximately 20–25 minutes
                  to downtown Toronto.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline">{AURA.communityAcres} Acres</Badge>
                  <Badge variant="outline">{AURA.builderShort}</Badge>
                  <Badge variant="outline">Near GO Transit</Badge>
                  <Badge variant="outline">Waterfront</Badge>
                </div>
                <LastUpdated date={AURA.lastContentUpdate} className="mt-4" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="page-container">
            <div className="mx-auto max-w-4xl">
              {auraFaqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h2 className="mb-6 font-serif text-2xl font-semibold text-foreground">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border-border"
                      >
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="pr-4 font-medium">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/50 py-16 md:py-24">
          <div className="page-container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Explore {AURA.shortName}
              </h2>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild>
                  <Link href={AURA.canonicalPath}>
                    {AURA.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={AURA.floorPlansPath}>
                    Floor Plans
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={AURA.vsResalePath}>
                    vs Resale
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="page-container">
            <div className="mx-auto max-w-2xl">
              <Card>
                <CardContent className="p-8">
                  <RegisterForm
                    title="Get Your Questions Answered"
                    subtitle={`Register for VIP access to ${AURA.name}.`}
                    project="aura"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
