import Link from "next/link"
import { ArrowRight, Award, Building2, Users } from "lucide-react"

const credentials = [
  {
    icon: Building2,
    label: "Pre-Construction",
    description: "Specialist in new developments"
  },
  {
    icon: Award,
    label: "10+ Years",
    description: "GTA real estate experience"
  },
  {
    icon: Users,
    label: "500+",
    description: "Families helped"
  },
]

export function AboutRealtor() {
  return (
    <section className="section">
      <div className="page-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Your Advisor
            </p>
            <h2 className="section-title mt-4 font-serif text-foreground">
              Work With a<br />
              <span className="italic">Pre-Construction Expert</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Purchasing pre-construction requires specialized knowledge. From 
              understanding deposit structures to negotiating builder incentives, 
              our team guides you through every step of the process.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We specialize in {`Aura Lakeview Village`} by Caivan and pre-construction
              opportunities across Lakeview Village—helping buyers secure priority access,
              understand pricing, and prepare for upcoming releases.
            </p>
            <div className="mt-10">
              <Link 
                href="#register" 
                className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground"
              >
                <span className="link-underline">Schedule a Consultation</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="grid gap-px bg-border">
              {credentials.map((item) => (
                <div 
                  key={item.label} 
                  className="flex items-center gap-6 bg-card p-6"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-muted">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-serif text-xl text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Our service is complimentary to buyers. We are compensated by the 
              developer upon a successful purchase.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
