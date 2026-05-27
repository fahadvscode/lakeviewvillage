-- Defense in depth: block anonymous reads of lead data.
-- Inserts remain allowed via 001_create_leads_table.sql.
-- Run in Supabase Dashboard > SQL Editor if not already applied.

CREATE POLICY "Deny anonymous reads" ON lakeview_village_leads
  FOR SELECT
  TO anon
  USING (false);

CREATE POLICY "Deny anonymous updates" ON lakeview_village_leads
  FOR UPDATE
  TO anon
  USING (false);

CREATE POLICY "Deny anonymous deletes" ON lakeview_village_leads
  FOR DELETE
  TO anon
  USING (false);
