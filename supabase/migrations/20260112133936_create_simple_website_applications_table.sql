/*
  # Create simple website applications table

  1. New Tables
    - `simple_website_applications`
      - `id` (uuid, primary key)
      - `full_name` (text) - applicant's full name
      - `email` (text) - applicant's email
      - `phone` (text) - applicant's phone number
      - `business_name` (text) - business name
      - `industry` (text) - business industry
      - `website_purpose` (text) - main purpose of website
      - `selected_package` (text) - selected website package
      - `pages_needed` (text) - number of pages needed
      - `features_needed` (text) - features and functionality needed
      - `content_ready` (text) - content readiness status
      - `timeline` (text) - when they need the website
      - `budget_ready` (text) - investment readiness
      - `created_at` (timestamptz) - application submission date
      - `status` (text) - application status (pending, onboarding, in-progress, completed)
  
  2. Security
    - Enable RLS on `simple_website_applications` table
    - Add policy for inserting applications (public/anon can submit)
    - Add policy for reading applications (authenticated users only)
*/

CREATE TABLE IF NOT EXISTS simple_website_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  business_name text NOT NULL,
  industry text NOT NULL,
  website_purpose text NOT NULL,
  selected_package text NOT NULL,
  pages_needed text NOT NULL,
  features_needed text,
  content_ready text NOT NULL,
  timeline text NOT NULL,
  budget_ready text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE simple_website_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit simple website applications"
  ON simple_website_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view simple website applications"
  ON simple_website_applications
  FOR SELECT
  TO authenticated
  USING (true);
