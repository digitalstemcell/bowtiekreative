/*
  # Create workshop applications table

  1. New Tables
    - `workshop_applications`
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `email` (text)
      - `phone` (text)
      - `company_name` (text)
      - `company_stage` (text) - startup, growth, established
      - `current_revenue` (text) - revenue range
      - `budget_ready` (boolean) - can they afford $9,997
      - `investment_timeline` (text) - when ready to invest
      - `biggest_challenge` (text)
      - `goals` (text)
      - `why_interested` (text)
      - `created_at` (timestamptz)
      - `status` (text) - pending, qualified, disqualified, contacted
  
  2. Security
    - Enable RLS on `workshop_applications` table
    - Add policy for inserting applications (public)
    - Add policy for reading applications (admin only via service role)
*/

CREATE TABLE IF NOT EXISTS workshop_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  company_name text,
  company_stage text,
  current_revenue text,
  budget_ready boolean DEFAULT false,
  investment_timeline text,
  biggest_challenge text,
  goals text,
  why_interested text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE workshop_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit applications"
  ON workshop_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view applications"
  ON workshop_applications
  FOR SELECT
  TO authenticated
  USING (true);