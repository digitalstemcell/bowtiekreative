/*
  # Create done-for-you applications table

  1. New Tables
    - `done_for_you_applications`
      - `id` (uuid, primary key)
      - `full_name` (text) - applicant's full name
      - `email` (text) - applicant's email
      - `phone` (text) - applicant's phone number
      - `company_name` (text) - company name
      - `website_url` (text) - current website URL
      - `monthly_traffic` (text) - monthly visitor range
      - `current_revenue` (text) - current monthly revenue from website
      - `conversion_rate` (text) - current conversion rate if known
      - `biggest_pain_point` (text) - main revenue challenge
      - `tried_before` (text) - what they've tried to fix issues
      - `budget_ready` (text) - investment readiness
      - `timeline` (text) - when they want to start
      - `success_metric` (text) - what success looks like in 90 days
      - `why_interested` (text) - why working with us
      - `created_at` (timestamptz) - application submission date
      - `status` (text) - application status (pending, qualified, disqualified, contacted)
  
  2. Security
    - Enable RLS on `done_for_you_applications` table
    - Add policy for inserting applications (public/anon can submit)
    - Add policy for reading applications (authenticated users only)
*/

CREATE TABLE IF NOT EXISTS done_for_you_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  company_name text NOT NULL,
  website_url text NOT NULL,
  monthly_traffic text NOT NULL,
  current_revenue text NOT NULL,
  conversion_rate text,
  biggest_pain_point text NOT NULL,
  tried_before text NOT NULL,
  budget_ready text NOT NULL,
  timeline text NOT NULL,
  success_metric text NOT NULL,
  why_interested text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE done_for_you_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit done-for-you applications"
  ON done_for_you_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view done-for-you applications"
  ON done_for_you_applications
  FOR SELECT
  TO authenticated
  USING (true);
