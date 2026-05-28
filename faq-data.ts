import { AURA } from '@/lib/aura-config'

export type FaqItem = { question: string; answer: string }
export type FaqCategory = { category: string; faqs: FaqItem[] }

export const auraFaqCategories: FaqCategory[] = [
  {
    category: `About ${AURA.name}`,
    faqs: [
      {
        question: 'What is Aura Lakeview Village?',
        answer: `Aura Lakeview Village is a collection of ${AURA.productType} by ${AURA.builder} within ${AURA.communityName}, a ${AURA.communityAcres}-acre master-planned waterfront community in southeast Mississauga. Homes offer ${AURA.beds} bedrooms (${AURA.sqftDetail}) with pricing from the ${AURA.priceFromShort} and anticipated occupancy in ${AURA.occupancy}.`,
      },
      {
        question: 'Who is the developer of Aura Lakeview Village?',
        answer: `${AURA.builder} develops Aura Lakeview Village. Caivan is known for Caivan 360 energy-efficient homes and ABIC advanced manufacturing. Aura is among the first residential phases in the Lakeview Village revitalization.`,
      },
      {
        question: 'What type of homes does Aura offer?',
        answer: `Aura offers ${AURA.productType} with ${AURA.parking.toLowerCase()}, ${AURA.beds} bedrooms, and approximately ${AURA.sqftDetail}. Phase 1 includes roughly ${AURA.phase1Units} units in a contemporary architectural style.`,
      },
      {
        question: 'Is Aura Lakeview Village the same as Aura Towns?',
        answer: `Yes—Aura Lakeview Village (often called "Aura by Caivan" or "Aura Towns") refers to the same Caivan townhome collection within Lakeview Village. Marketing names may vary by release phase.`,
      },
      {
        question: 'What is Lakeview Village?',
        answer: `Lakeview Village is a ${AURA.communityAcres}-acre waterfront master plan in Mississauga on the former Lakeview Generating Station site, with parks, retail, employment lands, and thousands of new homes. Aura is a flagship townhome collection within the community.`,
      },
    ],
  },
  {
    category: 'Pricing & Floor Plans',
    faqs: [
      {
        question: 'What is the starting price for Aura Lakeview Village?',
        answer: `Pricing starts from the ${AURA.priceFromShort}, depending on plan and release. Two-bedroom layouts are typically in the high $500,000s; three-bedroom plans reach the low-to-mid $600,000s. Confirm current pricing when you register.`,
      },
      {
        question: 'What floor plans are available at Aura?',
        answer: 'Plans include The Birch (811 sq. ft., 2 bed), The Cedar (948 sq. ft., 2 bed), The Maple (1,028 sq. ft., 3 bed), and The Oak (1,138 sq. ft., 3 bed). See our floor plans page for full details.',
      },
      {
        question: 'How much are maintenance fees at Aura?',
        answer: 'Condo fees for stacked townhomes vary by unit size and building. Request the current fee schedule from sales when you register—your advisor can help you compare total monthly carrying costs.',
      },
      {
        question: 'Are there incentives for early buyers?',
        answer: 'Developers may offer launch incentives, deposit structures, or design credits by phase. Register for VIP access to learn what is available for the current or next release.',
      },
      {
        question: 'Can I assign my Aura purchase before closing?',
        answer: 'Assignment policies depend on the purchase agreement and builder rules. Review assignment clauses with your lawyer before signing—policies vary by phase and release.',
      },
    ],
  },
  {
    category: 'Ownership & Buying Process',
    faqs: [
      {
        question: 'Are Aura townhomes freehold or condominium?',
        answer: `Aura consists of condominium stacked townhomes with common elements and shared ${AURA.parking.toLowerCase()}. Review the status certificate, bylaws, and fee schedule before purchasing.`,
      },
      {
        question: 'What deposit is required for Aura Lakeview Village?',
        answer: 'Pre-construction deposits are typically spread over construction milestones. Exact structure changes by release—register to receive the current deposit schedule for your phase.',
      },
      {
        question: 'Do I need a real estate lawyer for pre-construction?',
        answer: 'Yes. A real estate lawyer should review your Agreement of Purchase and Sale, condo documents, and closing adjustments before you waive conditions.',
      },
      {
        question: 'Can first-time buyers purchase at Aura?',
        answer: `Yes—Aura's ${AURA.priceFromShort} entry point and efficient layouts appeal to first-time buyers, especially compared to resale waterfront product. Explore first-time buyer programs with your advisor and lender.`,
      },
      {
        question: 'Is this website affiliated with Caivan?',
        answer: 'No. This is an independent real estate information and registration site. We are not affiliated with Caivan Communities. Trademarks belong to their respective owners.',
      },
    ],
  },
  {
    category: 'Timeline & Construction',
    faqs: [
      {
        question: 'When is occupancy at Aura Lakeview Village?',
        answer: `${AURA.occupancyDetail}. The broader Lakeview Village community will continue developing over many years.`,
      },
      {
        question: 'Is Aura Phase 1 still available?',
        answer: 'Availability changes quickly during popular releases. Register for VIP updates on remaining inventory or waitlist access for future phases.',
      },
      {
        question: 'Where is construction at now?',
        answer: 'Site work and underground portions have been reported in progress toward 2027 occupancy. Register for construction updates from your advisor or visit the Discovery Centre.',
      },
    ],
  },
  {
    category: 'Location & Transit',
    faqs: [
      {
        question: 'Where is Aura Lakeview Village located?',
        answer: `Aura is in southeast Mississauga within ${AURA.communityName}, near Lake Ontario, Jim Tovey Conservation Area, and waterfront trails.`,
      },
      {
        question: 'How far is Aura from downtown Toronto?',
        answer: 'Long Branch GO is about 4–5 minutes by car, with Lakeshore West service to Union Station in roughly 20–25 minutes. Driving to downtown is about 20–30 minutes depending on traffic.',
      },
      {
        question: 'What amenities are nearby?',
        answer: 'Nearby: Port Credit, Sherway Gardens, Lakefront Promenade Park, schools, and planned Lakeview Square retail. The master plan adds parks, employment, and cultural uses over time.',
      },
      {
        question: 'Is there parking included?',
        answer: `Phase 1 marketing indicates ${AURA.parking.toLowerCase()} with units—confirm the exact allocation for your plan at purchase.`,
      },
    ],
  },
  {
    category: 'Investment & Lifestyle',
    faqs: [
      {
        question: 'Is Aura Lakeview Village a good investment?',
        answer: 'Pre-construction in a scarce waterfront master plan may offer long-term appreciation potential, but all real estate carries risk. This is not investment advice—consult licensed professionals.',
      },
      {
        question: 'Who is Aura best suited for?',
        answer: 'First-time buyers, young families, investors, and downsizers seeking modern townhome living near the lake with lower entry pricing than many resale alternatives.',
      },
      {
        question: 'What is Caivan 360?',
        answer: 'Caivan 360 is Caivan\'s approach to energy-efficient design and construction quality, including high-performance building envelopes and efficient systems to reduce utility costs.',
      },
      {
        question: 'What finishes are included?',
        answer: 'Typical inclusions feature contemporary kitchens, quartz counters, quality appliances, and modern flooring—confirm the exact specification sheet for your release.',
      },
    ],
  },
  {
    category: 'Visiting & Registration',
    faqs: [
      {
        question: 'Where is the Lakeview Village Discovery Centre?',
        answer: `${AURA.discoveryCentre.street}, ${AURA.discoveryCentre.city}, ${AURA.discoveryCentre.region} ${AURA.discoveryCentre.postalCode}. Hours: ${AURA.discoveryCentre.hours}.`,
      },
      {
        question: 'How do I register for Aura Lakeview Village?',
        answer: 'Complete the registration form on this website for VIP access to pricing, floor plans, and buyer guidance from our pre-construction team.',
      },
      {
        question: 'What happens after I register?',
        answer: 'Our team contacts you with current information, answers your questions, and helps you prepare for the next sales release or Discovery Centre visit.',
      },
    ],
  },
]

export function getAllAuraFaqs(): FaqItem[] {
  return auraFaqCategories.flatMap((c) => c.faqs)
}
