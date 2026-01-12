/*
  # Create design partner applications table

  1. New Tables
    - `design_partner_applications`
      - `id` (uuid, primary key)
      - `full_name` (text) - applicant's full name
      - `email` (text) - applicant's email
      - `phone` (text) - applicant's phone number
      - `company_name` (text) - company name
      - `website_url` (text) - company website URL
      - `industry` (text) - business industry
      - `design_needs` (text) - type of design work needed
      - `current_solution` (text) - how they currently handle design
      - `monthly_volume` (text) - estimated design requests per month
      - `timeline` (text) - when they want to start
      - `budget_ready` (text) - investment readiness
      - `why_interested` (text) - why interested in unlimited design
      - `created_at` (timestamptz) - application submission date
      - `status` (text) - application status (pending, approved, contacted, declined)
  
  2. Security
    - Enable RLS on `design_partner_applications` table
    - Add policy for inserting applications (public/anon can submit)
    - Add policy for reading applications (authenticated users only)
*/

CREATE TABLE IF NOT EXISTS design_partner_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  company_name text NOT NULL,
  website_url text,
  industry text NOT NULL,
  design_needs text NOT NULL,
  current_solution text NOT NULL,
  monthly_volume text NOT NULL,
  timeline text NOT NULL,
  budget_ready text NOT NULL,
  why_interested text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE design_partner_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit design partner applications"
  ON design_partner_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view design partner applications"
  ON design_partner_applications
  FOR SELECT
  TO authenticated
  USING (true);
