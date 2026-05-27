import { SITE_URL } from './site-config'

export interface Neighborhood {
  slug: string
  name: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  paragraphs: string[]
  highlights: { label: string; value: string }[]
  transitNote: string
  ctaHeading: string
  ctaBody: string
}

export const neighborhoods: Neighborhood[] = [
  {
    slug: 'long-branch',
    name: 'Long Branch',
    metaTitle: 'Townhomes in Long Branch | Lakeview Village Near GO Station',
    metaDescription: 'Discover new townhomes in Long Branch, Toronto. Lakeview Village offers Pier House and Aura Towns minutes from Long Branch GO Station—20 minutes to Union. Pre-construction from $799K and mid-$500Ks.',
    h1: 'Townhomes in Long Branch',
    intro: 'Long Branch is one of Toronto’s most sought-after waterfront neighbourhoods. Lakeview Village townhomes sit just minutes from Long Branch GO Station, putting downtown Toronto within easy reach.',
    paragraphs: [
      'Long Branch has evolved from a summer cottage community into a year-round residential area with strong transit links. The Lakeshore West GO line runs through the neighbourhood, and the 501 Queen streetcar connects to the TTC. Residents enjoy a mix of parks, schools, shops, and restaurants along Lake Shore Boulevard.',
      'Lakeview Village—the 177-acre master-planned community where Pier House Towns and Aura Towns are located—sits at the western edge of Long Branch, where Mississauga meets Toronto. This puts buyers in a rare position: new townhome options with waterfront living and direct GO access to the core.',
      'Pier House Towns by Branthaven offers traditional 3-storey townhomes from $799,900 with private garages and up to 5 bedrooms. Aura Towns by Caivan provides modern 2-storey condo townhomes from the mid-$500Ks. Both are steps from the lake and about 4 minutes by car to Long Branch GO.',
    ],
    highlights: [
      { label: 'GO Station', value: '4 min drive' },
      { label: 'To Union Station', value: '20–25 min' },
      { label: '501 Queen', value: '5 min' },
      { label: 'Lake Ontario', value: 'Steps away' },
    ],
    transitNote: 'Long Branch GO Station offers Lakeshore West service to Union Station, Exhibition, and points east. Peak and off-peak service available.',
    ctaHeading: 'Explore Townhomes Near Long Branch GO',
    ctaBody: 'Register for VIP access to pricing and floor plans for Pier House Towns and Aura Towns—the newest townhome options in the Long Branch area.',
  },
  {
    slug: 'port-credit',
    name: 'Port Credit',
    metaTitle: 'Townhomes Near Port Credit | Lakeview Village Mississauga',
    metaDescription: 'New townhomes near Port Credit at Lakeview Village. Pier House and Aura Towns offer waterfront living 10 minutes from Port Credit’s shops and marina. From $799K and mid-$500Ks.',
    h1: 'Townhomes Near Port Credit',
    intro: 'Port Credit is Mississauga’s waterfront village—a walkable hub with restaurants, shops, and marina life. Lakeview Village townhomes are about 10 minutes away, offering new waterfront housing with a different pace.',
    paragraphs: [
      'Port Credit draws residents and visitors for its marina, festivals, and dining. The GO Station connects to downtown Toronto in roughly 25 minutes. Lakeview Village complements this by adding new townhome inventory in a master-planned waterfront community closer to the Toronto border.',
      'Lakeview Village is built on the former Lakeview Generating Station site—177 acres reimagined as parks, retail, and housing. Pier House Towns and Aura Towns are among the first townhome releases, with more phases to follow over 15–20 years.',
      'If you love Port Credit but want a brand-new townhome with ground-level living, Lakeview Village is a strong option. Pier House offers larger family-sized units; Aura Towns targets first-time buyers and downsizers with compact 2-storey designs.',
    ],
    highlights: [
      { label: 'To Port Credit', value: '~10 min' },
      { label: 'Long Branch GO', value: '4 min' },
      { label: 'Waterfront', value: 'Lake Ontario' },
      { label: 'Entry Price', value: 'Mid $500Ks' },
    ],
    transitNote: 'Lakeview Village is served by Long Branch GO. Port Credit GO is about 10 minutes east for alternate Lakeshore West service.',
    ctaHeading: 'View Townhomes at Lakeview Village',
    ctaBody: 'Register for floor plans and pricing for Pier House Towns and Aura Towns—new waterfront townhomes near Port Credit.',
  },
  {
    slug: 'south-mississauga',
    name: 'South Mississauga',
    metaTitle: 'Townhomes in South Mississauga | Lakeview Village Waterfront',
    metaDescription: 'New townhomes in South Mississauga at Lakeview Village. Waterfront living with Pier House (from $799K) and Aura Towns (mid-$500Ks). Near QEW, GO Transit, and Lake Ontario.',
    h1: 'Townhomes in South Mississauga',
    intro: 'South Mississauga—from Clarkson to the Toronto border—combines waterfront access, transit, and established neighbourhoods. Lakeview Village adds new townhome supply in this high-demand corridor.',
    paragraphs: [
      'South Mississauga includes Port Credit, Lorne Park, Lakeview, and the emerging Lakeview Village development. The area benefits from Lakeshore West GO service, the QEW, and Highway 427, plus proximity to Sherway Gardens, Pearson Airport, and downtown Toronto.',
      'Lakeview Village is the largest new community in South Mississauga, transforming 177 acres of former industrial land into a mixed-use waterfront district. Pier House Towns by Branthaven and Aura Towns by Caivan are the first townhome projects now registering.',
      'Ground-oriented townhomes are rare in new GTA developments. Lakeview Village offers both traditional 3-storey townhomes (Pier House) and modern 2-storey condo towns (Aura Towns), from the mid-$500Ks to over $1M, catering to a range of buyers.',
    ],
    highlights: [
      { label: 'QEW / 427', value: '5 min' },
      { label: 'Pearson', value: '15 min' },
      { label: 'Sherway', value: '9 min' },
      { label: 'Lake Ontario', value: 'Waterfront' },
    ],
    transitNote: 'Long Branch GO provides Lakeshore West service. Multiple GO stations (Clarkson, Port Credit, Long Branch) serve South Mississauga.',
    ctaHeading: 'Discover South Mississauga Townhomes',
    ctaBody: 'Register for VIP access to Pier House Towns and Aura Towns—new townhomes in South Mississauga’s waterfront community.',
  },
]

export function getNeighborhood(slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.slug === slug)
}

export function getAllNeighborhoodSlugs(): string[] {
  return neighborhoods.map((n) => n.slug)
}

export function getNeighborhoodUrl(slug: string): string {
  return `${SITE_URL}/neighborhoods/${slug}`
}
