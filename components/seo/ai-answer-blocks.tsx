import { AURA } from "@/lib/aura-config"

export const aiAnswerBlocks = {
  whatIsAura: {
    question: "What is Aura Lakeview Village?",
    answer: `Aura Lakeview Village is a collection of ${AURA.productType} by ${AURA.builder} within ${AURA.communityName}, a ${AURA.communityAcres}-acre master-planned waterfront community in southeast Mississauga, Ontario. Homes offer ${AURA.beds} bedrooms and approximately ${AURA.sqftDetail}, with pricing from the ${AURA.priceFromShort} and anticipated occupancy in ${AURA.occupancy}. The development is part of Canada's largest waterfront revitalization on the former Lakeview Generating Station site.`,
  },
  whoBuilds: {
    question: "Who is the builder of Aura Lakeview Village?",
    answer: `${AURA.builder} is the developer of Aura Lakeview Village. Caivan is an award-winning builder known for the Caivan 360 energy-efficient approach and ABIC (Advanced Building Innovation Company) manufacturing. Aura is one of the first residential phases within the Lakeview Village master plan near Lake Ontario.`,
  },
  pricing: {
    question: "What is the price of Aura Lakeview Village townhomes?",
    answer: `Aura Lakeview Village townhomes are priced from the ${AURA.priceFromShort}, depending on floor plan, size (${AURA.sqftDetail}), and release phase. Two-bedroom layouts typically start in the high $500,000s; larger three-bedroom plans reach the low-to-mid $600,000s. All pricing is subject to change—register for current pricing sheets.`,
  },
  floorPlans: {
    question: "What floor plans are available at Aura Lakeview Village?",
    answer: `Aura Lakeview Village offers thoughtfully designed stacked townhome layouts including The Birch (811 sq. ft., 2 bed), The Cedar (948 sq. ft., 2 bed), The Maple (1,028 sq. ft., 3 bed), and The Oak (1,138 sq. ft., 3 bed). Each plan features contemporary finishes, open-concept living, and Caivan 360 energy-efficient construction.`,
  },
  occupancy: {
    question: "When will Aura Lakeview Village be ready to move in?",
    answer: `Anticipated occupancy for Aura Lakeview Village is ${AURA.occupancy}, with press reporting construction progressing toward summer 2027 move-ins. The broader Lakeview Village community will continue building out over 15–20 years. Register for VIP updates on construction milestones and next release phases.`,
  },
  ownership: {
    question: "Are Aura Lakeview Village townhomes freehold or condo?",
    answer: `Aura Lakeview Village consists of condominium-style stacked townhomes with common elements and ${AURA.parking.toLowerCase()}. Buyers should review the status certificate, condo fees, and ownership structure with sales and a real estate lawyer before purchasing.`,
  },
  location: {
    question: "Where is Aura Lakeview Village located?",
    answer: `Aura Lakeview Village is in southeast Mississauga within Lakeview Village, near Lake Ontario, the Jim Tovey Lakeview Conservation Area, and waterfront trails. Long Branch GO Station is approximately 4–5 minutes by car (20–25 minutes to Union Station). The QEW and Highway 427 are about 5 minutes away.`,
  },
  investment: {
    question: "Is Aura Lakeview Village a good investment?",
    answer: `Aura Lakeview Village offers pre-construction pricing in a rare waterfront master plan with limited ground-oriented townhome supply in the GTA. Early buyers may benefit from community build-out, transit access, and Caivan's track record. This is not investment advice—consult a licensed professional and review market conditions.`,
  },
  register: {
    question: "How do I register for Aura Lakeview Village?",
    answer: `Register on this site for VIP access to floor plans, pricing updates, and buyer guidance for Aura Lakeview Village by ${AURA.builder}. You can also visit the Lakeview Village Discovery Centre at ${AURA.discoveryCentre.street}, ${AURA.discoveryCentre.city}, ${AURA.discoveryCentre.region} (${AURA.discoveryCentre.hours}).`,
  },
  lakeviewVillage: {
    question: "What is Lakeview Village in Mississauga?",
    answer: `Lakeview Village is a ${AURA.communityAcres}-acre master-planned waterfront community in Mississauga built on the former Lakeview Generating Station site. Developed by Lakeview Community Partners Limited, it will include thousands of homes, commercial space, parks, and the Jim Tovey Conservation Area. Aura Lakeview Village by ${AURA.builder} is among the first residential collections.`,
  },
}

export function AIAnswerSection() {
  return (
    <section className="sr-only" aria-label={`Frequently Asked Questions About ${AURA.name}`}>
      {Object.values(aiAnswerBlocks).map((block, index) => (
        <article key={index} itemScope itemType="https://schema.org/Question">
          <h3 itemProp="name">{block.question}</h3>
          <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
            <p itemProp="text">{block.answer}</p>
          </div>
        </article>
      ))}
    </section>
  )
}

export function VisibleAIAnswers() {
  const displayBlocks = [
    aiAnswerBlocks.whatIsAura,
    aiAnswerBlocks.pricing,
    aiAnswerBlocks.floorPlans,
    aiAnswerBlocks.location,
    aiAnswerBlocks.investment,
  ]

  return (
    <div className="space-y-8">
      {displayBlocks.map((block, index) => (
        <div key={index} className="rounded-lg border border-border bg-card p-6">
          <h3 className="font-serif text-lg font-semibold text-foreground">{block.question}</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">{block.answer}</p>
        </div>
      ))}
    </div>
  )
}
