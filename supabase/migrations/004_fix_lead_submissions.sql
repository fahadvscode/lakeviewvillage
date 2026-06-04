-- Fix lead form submissions failing on insert.
-- Run once in Supabase Dashboard > SQL Editor.
--
-- Common failure: trigger still references old column "home_interest"
-- instead of "project" (see 002_fix_home_interest_trigger.sql).

-- Drop stale triggers that reference home_interest
DO $$
DECLARE
  tr RECORD;
BEGIN
  FOR tr IN
    SELECT t.tgname AS trigger_name
    FROM pg_trigger t
    JOIN pg_proc p ON t.tgfoid = p.oid
    JOIN pg_class c ON t.tgrelid = c.oid
    WHERE c.relname = 'lakeview_village_leads'
      AND NOT t.tgisinternal
      AND p.prosrc ILIKE '%home_interest%'
  LOOP
    EXECUTE format(
      'DROP TRIGGER IF EXISTS %I ON public.lakeview_village_leads',
      tr.trigger_name
    );
    RAISE NOTICE 'Dropped trigger: %', tr.trigger_name;
  END LOOP;
END $$;

-- Ensure table exists
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

ALTER TABLE lakeview_village_leads ENABLE ROW LEVEL SECURITY;

-- Recreate insert policy (idempotent)
DROP POLICY IF EXISTS "Allow anonymous inserts" ON lakeview_village_leads;
CREATE POLICY "Allow anonymous inserts" ON lakeview_village_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);
