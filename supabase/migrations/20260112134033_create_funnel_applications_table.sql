/*
  # Create funnel applications table

  1. New Tables
    - `funnel_applications`
      - `id` (uuid, primary key)
      - `full_name` (text) - applicant's full name
      - `email` (text) - applicant's email
      - `phone` (text) - applicant's phone number
      - `company_name` (text) - company name
      - `website_url` (text) - company website URL
      - `industry` (text) - business industry
      - `selected_package` (text) - selected funnel package
      - `funnel_goal` (text) - primary goal for the funnel
      - `current_traffic` (text) - current monthly traffic
      - `current_conversion` (text) - current conversion rate if known
      - `marketing_channels` (text) - marketing channels being used
      - `timeline` (text) - when they want to start
      - `budget_ready` (text) - investment readiness
      - `why_interested` (text) - why interested in funnel support
      - `created_at` (timestamptz) - application submission date
      - `status` (text) - application status (pending, strategy-call, approved, declined)
  
  2. Security
    - Enable RLS on `funnel_applications` table
    - Add policy for inserting applications (public/anon can submit)
    - Add policy for reading applications (authenticated users only)
*/

CREATE TABLE IF NOT EXISTS funnel_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  company_name text NOT NULL,
  website_url text,
  industry text NOT NULL,
  selected_package text NOT NULL,
  funnel_goal text NOT NULL,
  current_traffic text NOT NULL,
  current_conversion text,
  marketing_channels text NOT NULL,
  timeline text NOT NULL,
  budget_ready text NOT NULL,
  why_interested text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE funnel_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit funnel applications"
  ON funnel_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view funnel applications"
  ON funnel_applications
  FOR SELECT
  TO authenticated
  USING (true);
