import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { AURA, INDEPENDENT_DISCLAIMER } from "@/lib/aura-config"
import { AuraLogo } from "@/components/aura-logo"

const footerLinks = {
  aura: [
    { name: AURA.name, href: AURA.canonicalPath },
    { name: "Floor Plans & Pricing", href: AURA.floorPlansPath },
    { name: "Aura vs Resale", href: AURA.vsResalePath },
  ],
  community: [
    { name: "About Lakeview Village", href: "/about" },
    { name: "Lifestyle", href: "/lifestyle" },
    { name: "Neighborhoods", href: "/neighborhoods" },
    { name: "Discovery Centre", href: "/discovery-centre" },
    { name: "FAQ", href: "/faq" },
  ],
  connect: [
    { name: "Register", href: "#register" },
    { name: "Contact", href: "#register" },
  ],
}

export function SiteFooter() {
  const dc = AURA.discoveryCentre

  return (
    <footer className="bg-foreground text-background">
      <div className="page-container">
        <div className="grid gap-12 py-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <AuraLogo
                className="shadow-md"
                imageClassName="w-[min(360px,85vw)] sm:w-[420px] lg:w-[440px]"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/70">
              {AURA.name} by {AURA.builder}—{AURA.productType} in Mississauga&apos;s{" "}
              {AURA.communityAcres}-acre waterfront master plan. Register for VIP access to
              pricing, floor plans, and buyer guidance.
            </p>
            <p className="mt-4 text-xs text-background/60">
              {dc.street}, {dc.city}, {dc.region} {dc.postalCode}
            </p>
            <p className="mt-4 text-xs leading-relaxed text-background/50">
              {INDEPENDENT_DISCLAIMER}
            </p>
            <div className="mt-8">
              <Link
                href="#register"
                className="group inline-flex items-center gap-2 border border-background/20 px-6 py-3 text-xs uppercase tracking-widest text-background transition-colors hover:bg-background hover:text-foreground"
              >
                Register for VIP Access
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 lg:col-span-7 lg:justify-items-end">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-background/50">Aura</h3>
              <ul className="mt-6 space-y-4">
                {footerLinks.aura.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 transition-colors hover:text-background"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-background/50">Community</h3>
              <ul className="mt-6 space-y-4">
                {footerLinks.community.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 transition-colors hover:text-background"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-background/50">Connect</h3>
              <ul className="mt-6 space-y-4">
                {footerLinks.connect.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 transition-colors hover:text-background"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 py-8">
          <div className="flex flex-col gap-4 text-xs text-background/40 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Prices, specifications, and availability subject to change. Renderings are
              artist&apos;s concepts. E.&O.E.
            </p>
            <p>&copy; {new Date().getFullYear()} {AURA.name}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
