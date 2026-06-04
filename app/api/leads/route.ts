import { NextResponse } from "next/server"
import { supabase, type BuyerType, type LeadProject } from "@/lib/supabase"

interface LeadPayload {
  first_name: string
  last_name: string
  email: string
  phone: string
  project: LeadProject
  buyer_type: BuyerType
  consent: boolean
}

const VALID_PROJECTS: LeadProject[] = ["aura", "pier-house", "all"]
const VALID_BUYER_TYPES: BuyerType[] = ["end-user", "investor", "realtor"]

function parseLeadPayload(body: unknown): LeadPayload | null {
  if (!body || typeof body !== "object") return null

  const data = body as Record<string, unknown>
  const first_name = String(data.first_name ?? "").trim()
  const last_name = String(data.last_name ?? "").trim()
  const email = String(data.email ?? "").trim()
  const phone = String(data.phone ?? "").trim()
  const project = data.project as LeadProject
  const buyer_type = data.buyer_type as BuyerType
  const consent = data.consent === true

  if (!first_name || !last_name || !email || !phone) return null
  if (!VALID_PROJECTS.includes(project)) return null
  if (!VALID_BUYER_TYPES.includes(buyer_type)) return null

  return {
    first_name,
    last_name,
    email,
    phone,
    project,
    buyer_type,
    consent,
  }
}

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const lead = parseLeadPayload(body)
  if (!lead) {
    return NextResponse.json({ error: "Missing or invalid lead fields." }, { status: 400 })
  }

  const { error } = await supabase.from("lakeview_village_leads").insert(lead)

  if (error) {
    console.error("Lead insert failed:", {
      message: error.message,
      code: error.code,
      details: error.details,
      hint: error.hint,
    })

    return NextResponse.json(
      { error: error.message || "Unable to save your registration." },
      { status: 500 },
    )
  }

  return NextResponse.json({ ok: true })
}
