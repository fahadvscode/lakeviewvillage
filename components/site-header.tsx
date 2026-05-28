"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { AURA } from "@/lib/aura-config"
import { AuraLogo } from "@/components/aura-logo"

const navigation = [
  { name: "Aura", href: AURA.canonicalPath },
  { name: "Floor Plans", href: AURA.floorPlansPath },
  { name: "About", href: "/about" },
  { name: "Lifestyle", href: "/lifestyle" },
  { name: "Neighborhoods", href: "/neighborhoods" },
  { name: "Discovery Centre", href: "/discovery-centre" },
  { name: "FAQ", href: "/faq" },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-border/50 bg-background py-3 shadow-sm backdrop-blur-md"
          : "border-b border-border/20 bg-background/90 py-3 backdrop-blur-md md:py-4"
      }`}
    >
      <div className="page-container flex items-center justify-between">
        <Link href="/" className="block shrink-0">
          <AuraLogo tone="light" priority />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="link-underline text-sm uppercase tracking-wide text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <Button
            asChild
            className="hidden rounded-none px-8 text-xs uppercase tracking-widest sm:inline-flex"
          >
            <Link href="#register">Register</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full border-none bg-primary p-0 sm:max-w-md"
            >
              <div className="flex h-full flex-col p-8">
                <div className="flex items-center justify-between gap-4">
                  <AuraLogo tone="dark" />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <nav className="mt-16 flex flex-col gap-6">
                  {navigation.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-4 text-primary-foreground"
                    >
                      <span className="text-sm text-primary-foreground/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-2xl transition-transform group-hover:translate-x-2">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto">
                  <Button
                    asChild
                    className="w-full rounded-none bg-white py-6 text-xs uppercase tracking-widest text-primary hover:bg-white/90"
                  >
                    <Link href="#register" onClick={() => setIsOpen(false)}>
                      Register for VIP Access
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
