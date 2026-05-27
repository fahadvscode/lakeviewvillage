-- Create leads table for Lakeview Village registration forms
-- Run this in Supabase Dashboard > SQL Editor

CREATE TABLE IF NOT EXISTS lakeview_village_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  project TEXT NOT NULL CHECK (project IN ('aura', 'pier-house', 'all')),
  buyer_type TEXT NOT NULL CHECK (buyer_type IN ('end-user', 'investor', 'realtor')),
  consent BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE lakeview_village_leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous users to INSERT (for form submissions)
CREATE POLICY "Allow anonymous inserts" ON lakeview_village_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Indexes for filtering by project
CREATE INDEX IF NOT EXISTS idx_lakeview_village_leads_project ON lakeview_village_leads(project);
CREATE INDEX IF NOT EXISTS idx_lakeview_village_leads_created_at ON lakeview_village_leads(created_at DESC);
