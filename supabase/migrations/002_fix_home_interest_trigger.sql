-- Fix: inserts fail with "record \"new\" has no field \"home_interest\""
-- A trigger on lakeview_village_leads still references the old column name.
-- The app and table use "project" (see 001_create_leads_table.sql).
--
-- Run in Supabase Dashboard > SQL Editor

-- 1) See triggers on this table (for your records)
SELECT
  t.tgname AS trigger_name,
  p.proname AS function_name,
  pg_get_triggerdef(t.oid) AS trigger_def
FROM pg_trigger t
JOIN pg_proc p ON t.tgfoid = p.oid
JOIN pg_class c ON t.tgrelid = c.oid
WHERE c.relname = 'lakeview_village_leads'
  AND NOT t.tgisinternal;

-- 2) See functions that mention the old column
SELECT proname, prosrc
FROM pg_proc
WHERE prosrc ILIKE '%home_interest%';

-- 3) Drop triggers on lakeview_village_leads whose function references home_interest
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

-- 4) Optional: drop orphaned trigger functions (only if nothing else uses them)
DO $$
DECLARE
  fn RECORD;
BEGIN
  FOR fn IN
    SELECT p.oid, p.proname
    FROM pg_proc p
    JOIN pg_namespace n ON p.pronamespace = n.oid
    WHERE n.nspname = 'public'
      AND p.prosrc ILIKE '%home_interest%'
      AND p.prosrc ILIKE '%lakeview_village_leads%'
  LOOP
    EXECUTE format('DROP FUNCTION IF EXISTS public.%I() CASCADE', fn.proname);
    RAISE NOTICE 'Dropped function: %', fn.proname;
  END LOOP;
END $$;
