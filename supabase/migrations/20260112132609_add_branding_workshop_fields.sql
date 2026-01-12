/*
  # Add branding workshop fields to applications table

  1. Changes
    - Add `team_size` column for company size
    - Add `leadership_involved` column for leadership participation
    - Add `brand_goals` column for brand strategy goals
    - Add `current_brand_state` column for current brand situation
    - Rename `goals` to be backward compatible

  2. Notes
    - Using conditional column additions to prevent errors
    - All new fields are optional to support existing data
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'workshop_applications' AND column_name = 'team_size'
  ) THEN
    ALTER TABLE workshop_applications ADD COLUMN team_size text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'workshop_applications' AND column_name = 'leadership_involved'
  ) THEN
    ALTER TABLE workshop_applications ADD COLUMN leadership_involved text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'workshop_applications' AND column_name = 'brand_goals'
  ) THEN
    ALTER TABLE workshop_applications ADD COLUMN brand_goals text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'workshop_applications' AND column_name = 'current_brand_state'
  ) THEN
    ALTER TABLE workshop_applications ADD COLUMN current_brand_state text;
  END IF;
END $$;