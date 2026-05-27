import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type LeadProject = 'aura' | 'pier-house' | 'all'
export type BuyerType = 'end-user' | 'investor' | 'realtor'

export interface Lead {
  id?: string
  first_name: string
  last_name: string
  email: string
  phone: string
  project: LeadProject
  buyer_type: BuyerType
  consent: boolean
  created_at?: string
}
