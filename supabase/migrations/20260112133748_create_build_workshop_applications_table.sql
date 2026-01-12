/*
  # Create build workshop applications table

  1. New Tables
    - `build_workshop_applications`
      - `id` (uuid, primary key)
      - `full_name` (text) - applicant's full name
      - `email` (text) - applicant's email
      - `phone` (text) - applicant's phone number
      - `business_type` (text) - type of business or project
      - `current_website` (text) - current website status
      - `biggest_challenge` (text) - main challenge with building website
      - `timeline` (text) - when they need website live
      - `budget_ready` (text) - investment readiness
      - `technical_comfort` (text) - technical comfort level
      - `why_interested` (text) - why interested in workshop
      - `created_at` (timestamptz) - application submission date
      - `status` (text) - application status (pending, confirmed, contacted, declined)
  
  2. Security
    - Enable RLS on `build_workshop_applications` table
    - Add policy for inserting applications (public/anon can submit)
    - Add policy for reading applications (authenticated users only)
*/

CREATE TABLE IF NOT EXISTS build_workshop_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  business_type text NOT NULL,
  current_website text NOT NULL,
  biggest_challenge text NOT NULL,
  timeline text NOT NULL,
  budget_ready text NOT NULL,
  technical_comfort text NOT NULL,
  why_interested text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE build_workshop_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit build workshop applications"
  ON build_workshop_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view build workshop applications"
  ON build_workshop_applications
  FOR SELECT
  TO authenticated
  USING (true);
