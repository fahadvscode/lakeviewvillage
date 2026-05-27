"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight, Check } from "lucide-react"
import { supabase } from "@/lib/supabase"
import type { LeadProject, BuyerType } from "@/lib/supabase"

interface RegisterFormProps {
  title?: string
  subtitle?: string
  project?: LeadProject
  variant?: "full" | "compact" | "inline"
}

export function RegisterForm({ 
  project,
  variant = "full"
}: RegisterFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [projectInterest, setProjectInterest] = useState<LeadProject>(project || "aura")
  const [buyerType, setBuyerType] = useState<BuyerType | "">("")
  const [consent, setConsent] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!consent && variant === "full") return
    setSubmitError(null)
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string

    const leadProject = projectInterest
    const leadBuyerType = (buyerType || "end-user") as BuyerType

    try {
      const { error } = await supabase.from("lakeview_village_leads").insert({
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        project: leadProject,
        buyer_type: leadBuyerType,
        consent: variant === "full" ? consent : true,
      })

      if (error) throw error
      setIsSubmitted(true)
    } catch (err) {
      console.error("Lead submission error:", err)
      setSubmitError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center bg-card p-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mt-6 font-serif text-2xl text-foreground">
          Thank You
        </h3>
        <p className="mt-2 text-muted-foreground">
          We&apos;ll be in touch shortly with VIP access details.
        </p>
      </div>
    )
  }

  if (variant === "inline") {
    const handleInlineSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setSubmitError(null)
      setIsSubmitting(true)
      const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.value
      try {
        const { error } = await supabase.from("lakeview_village_leads").insert({
          first_name: "Newsletter",
          last_name: "Signup",
          email: email || "",
          phone: "-",
          project: projectInterest,
          buyer_type: "end-user",
          consent: true,
        })
        if (error) throw error
        setIsSubmitted(true)
      } catch (err) {
        console.error("Lead submission error:", err)
        setSubmitError("Something went wrong. Please try again.")
      } finally {
        setIsSubmitting(false)
      }
    }
    return (
      <form onSubmit={handleInlineSubmit} className="flex flex-col gap-3 sm:flex-row">
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          required
          className="flex-1 rounded-none border-foreground/20 bg-transparent"
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="rounded-none"
        >
          {isSubmitting ? "Sending..." : "Get VIP Access"}
        </Button>
      </form>
    )
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input name="firstName" placeholder="First Name *" required className="rounded-none" />
          <Input name="lastName" placeholder="Last Name *" required className="rounded-none" />
        </div>
        <Input name="email" type="email" placeholder="Email *" required className="rounded-none" />
        <Input name="phone" type="tel" placeholder="Phone *" required className="rounded-none" />
        <input type="hidden" name="project" value={projectInterest} />
        <input type="hidden" name="buyer_type" value={buyerType || "end-user"} />
        <input type="hidden" name="consent" value="on" />
        <Button 
          type="submit" 
          className="w-full rounded-none py-6 text-xs uppercase tracking-widest" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Register Now"}
        </Button>
      </form>
    )
  }

  return (
    <div className="bg-card p-8 lg:p-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-xs uppercase tracking-wider text-muted-foreground">
              First Name *
            </Label>
            <Input 
              id="firstName" 
              name="firstName"
              required 
              className="rounded-none border-x-0 border-t-0 border-border bg-transparent px-0 focus-visible:ring-0"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-xs uppercase tracking-wider text-muted-foreground">
              Last Name *
            </Label>
            <Input 
              id="lastName" 
              name="lastName"
              required 
              className="rounded-none border-x-0 border-t-0 border-border bg-transparent px-0 focus-visible:ring-0"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">
            Email *
          </Label>
          <Input 
            id="email" 
            name="email"
            type="email" 
            required 
            className="rounded-none border-x-0 border-t-0 border-border bg-transparent px-0 focus-visible:ring-0"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-xs uppercase tracking-wider text-muted-foreground">
            Phone *
          </Label>
          <Input 
            id="phone" 
            name="phone"
            type="tel" 
            required 
            className="rounded-none border-x-0 border-t-0 border-border bg-transparent px-0 focus-visible:ring-0"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="interest" className="text-xs uppercase tracking-wider text-muted-foreground">
            Interested In
          </Label>
          <Select value={projectInterest} onValueChange={(v) => setProjectInterest(v as LeadProject)}>
            <SelectTrigger className="rounded-none border-x-0 border-t-0 border-border bg-transparent px-0">
              <SelectValue placeholder="Select a project" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="aura">Aura Lakeview Village</SelectItem>
              <SelectItem value="all">General Inquiry</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="buyer-type" className="text-xs uppercase tracking-wider text-muted-foreground">
            I Am A
          </Label>
          <Select value={buyerType} onValueChange={(v) => setBuyerType(v as BuyerType)}>
            <SelectTrigger className="rounded-none border-x-0 border-t-0 border-border bg-transparent px-0">
              <SelectValue placeholder="Select buyer type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="end-user">Home Buyer</SelectItem>
              <SelectItem value="investor">Investor</SelectItem>
              <SelectItem value="realtor">Real Estate Agent</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-start gap-3 pt-2">
          <Checkbox 
            id="consent" 
            checked={consent} 
            onCheckedChange={(checked) => setConsent(checked === true)} 
            required 
            className="mt-0.5 rounded-none" 
          />
          <Label htmlFor="consent" className="text-xs leading-relaxed text-muted-foreground">
            I consent to receive marketing communications. Pricing and availability subject to change.
          </Label>
        </div>
        {submitError && (
          <p className="text-sm text-destructive">{submitError}</p>
        )}
        <Button 
          type="submit" 
          className="w-full rounded-none py-6 text-xs uppercase tracking-widest" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Register for VIP Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          Your information is secure and will never be shared.
        </p>
      </form>
    </div>
  )
}
