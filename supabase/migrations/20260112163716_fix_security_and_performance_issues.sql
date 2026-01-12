/*
  # Fix Security and Performance Issues

  ## Changes Applied

  ### 1. Performance Optimizations
  
  #### Add Missing Index
  - Add index on `orders.product_id` foreign key for improved join performance
  
  #### Remove Unused Indexes
  - Drop `idx_orders_user_email` (unused)
  - Drop `idx_orders_stripe_session` (unused)
  - Drop `idx_orders_status` (unused)
  - Drop `idx_products_active` (unused)

  ### 2. RLS Performance Improvements
  
  Fix auth function calls to use subquery pattern for better performance:
  - Update `orders` table RLS policy to use `(select auth.jwt())`
  - Update `stripe_customers` table RLS policy to use `(select auth.uid())`
  - Update `stripe_subscriptions` table RLS policy to use subquery pattern
  - Update `stripe_orders` table RLS policy to use subquery pattern

  ### 3. Application Form Security Enhancements
  
  Improve RLS policies for application tables to add basic validation:
  - Ensure email field is present and not empty
  - Ensure required name field is present
  - Policies still allow public submissions but with validation
  
  Tables updated:
  - `workshop_applications`
  - `done_for_you_applications`
  - `build_workshop_applications`
  - `design_partner_applications`
  - `simple_website_applications`
  - `funnel_applications`

  ## Security Notes
  
  - Application forms intentionally allow anonymous submissions (public forms)
  - Added validation prevents completely empty or malformed submissions
  - Only authenticated users can read application data
*/

-- ============================================================
-- 1. PERFORMANCE: Add missing index for foreign key
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_orders_product_id ON orders(product_id);

-- ============================================================
-- 2. PERFORMANCE: Remove unused indexes
-- ============================================================

DROP INDEX IF EXISTS idx_orders_user_email;
DROP INDEX IF EXISTS idx_orders_stripe_session;
DROP INDEX IF EXISTS idx_orders_status;
DROP INDEX IF EXISTS idx_products_active;

-- ============================================================
-- 3. RLS PERFORMANCE: Fix orders table policy
-- ============================================================

DROP POLICY IF EXISTS "Users can view their own orders" ON orders;

CREATE POLICY "Users can view their own orders"
  ON orders
  FOR SELECT
  USING (user_email = (select current_setting('request.jwt.claims', true)::json->>'email'));

-- ============================================================
-- 4. RLS PERFORMANCE: Fix stripe_customers policy
-- ============================================================

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'stripe_customers'
    AND policyname = 'Users can view their own customer data'
  ) THEN
    DROP POLICY "Users can view their own customer data" ON stripe_customers;
    
    CREATE POLICY "Users can view their own customer data"
      ON stripe_customers
      FOR SELECT
      TO authenticated
      USING (user_id = (select auth.uid()));
  END IF;
END $$;

-- ============================================================
-- 5. RLS PERFORMANCE: Fix stripe_subscriptions policy
-- ============================================================

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'stripe_subscriptions'
    AND policyname = 'Users can view their own subscription data'
  ) THEN
    DROP POLICY "Users can view their own subscription data" ON stripe_subscriptions;
    
    CREATE POLICY "Users can view their own subscription data"
      ON stripe_subscriptions
      FOR SELECT
      TO authenticated
      USING (
        customer_id IN (
          SELECT customer_id 
          FROM stripe_customers 
          WHERE user_id = (select auth.uid())
        )
      );
  END IF;
END $$;

-- ============================================================
-- 6. RLS PERFORMANCE: Fix stripe_orders policy
-- ============================================================

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'stripe_orders'
    AND policyname = 'Users can view their own order data'
  ) THEN
    DROP POLICY "Users can view their own order data" ON stripe_orders;
    
    CREATE POLICY "Users can view their own order data"
      ON stripe_orders
      FOR SELECT
      TO authenticated
      USING (
        customer_id IN (
          SELECT customer_id 
          FROM stripe_customers 
          WHERE user_id = (select auth.uid())
        )
      );
  END IF;
END $$;

-- ============================================================
-- 7. SECURITY: Improve application form RLS policies
-- ============================================================

-- Workshop Applications
DROP POLICY IF EXISTS "Anyone can submit applications" ON workshop_applications;
CREATE POLICY "Anyone can submit applications"
  ON workshop_applications
  FOR INSERT
  TO anon
  WITH CHECK (
    full_name IS NOT NULL AND 
    full_name != '' AND
    email IS NOT NULL AND 
    email != '' AND
    email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );

-- Done For You Applications
DROP POLICY IF EXISTS "Anyone can submit done-for-you applications" ON done_for_you_applications;
CREATE POLICY "Anyone can submit done-for-you applications"
  ON done_for_you_applications
  FOR INSERT
  TO anon
  WITH CHECK (
    full_name IS NOT NULL AND 
    full_name != '' AND
    email IS NOT NULL AND 
    email != '' AND
    email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );

-- Build Workshop Applications
DROP POLICY IF EXISTS "Anyone can submit build workshop applications" ON build_workshop_applications;
CREATE POLICY "Anyone can submit build workshop applications"
  ON build_workshop_applications
  FOR INSERT
  TO anon
  WITH CHECK (
    full_name IS NOT NULL AND 
    full_name != '' AND
    email IS NOT NULL AND 
    email != '' AND
    email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );

-- Design Partner Applications
DROP POLICY IF EXISTS "Anyone can submit design partner applications" ON design_partner_applications;
CREATE POLICY "Anyone can submit design partner applications"
  ON design_partner_applications
  FOR INSERT
  TO anon
  WITH CHECK (
    full_name IS NOT NULL AND 
    full_name != '' AND
    email IS NOT NULL AND 
    email != '' AND
    email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );

-- Simple Website Applications
DROP POLICY IF EXISTS "Anyone can submit simple website applications" ON simple_website_applications;
CREATE POLICY "Anyone can submit simple website applications"
  ON simple_website_applications
  FOR INSERT
  TO anon
  WITH CHECK (
    full_name IS NOT NULL AND 
    full_name != '' AND
    email IS NOT NULL AND 
    email != '' AND
    email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );

-- Funnel Applications
DROP POLICY IF EXISTS "Anyone can submit funnel applications" ON funnel_applications;
CREATE POLICY "Anyone can submit funnel applications"
  ON funnel_applications
  FOR INSERT
  TO anon
  WITH CHECK (
    full_name IS NOT NULL AND 
    full_name != '' AND
    email IS NOT NULL AND 
    email != '' AND
    email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );
