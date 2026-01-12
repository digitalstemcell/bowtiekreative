/*
  # Create Orders and Products Tables

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text) - Product name
      - `description` (text) - Product description
      - `price` (numeric) - Product price in dollars
      - `stripe_price_id` (text) - Stripe Price ID for checkout
      - `product_type` (text) - Type: 'one_time' or 'subscription'
      - `is_active` (boolean) - Whether product is available for purchase
      - `metadata` (jsonb) - Additional product metadata
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `orders`
      - `id` (uuid, primary key)
      - `user_email` (text) - Customer email
      - `product_id` (uuid, foreign key to products)
      - `stripe_session_id` (text) - Stripe checkout session ID
      - `stripe_payment_intent` (text) - Stripe payment intent ID
      - `amount` (numeric) - Amount paid
      - `status` (text) - Order status: 'pending', 'completed', 'failed', 'refunded'
      - `metadata` (jsonb) - Additional order data
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Products table: Public read access for active products
    - Orders table: Users can only read their own orders
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price numeric NOT NULL,
  stripe_price_id text,
  product_type text NOT NULL DEFAULT 'one_time' CHECK (product_type IN ('one_time', 'subscription')),
  is_active boolean DEFAULT true,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email text NOT NULL,
  product_id uuid REFERENCES products(id),
  stripe_session_id text UNIQUE,
  stripe_payment_intent text,
  amount numeric NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'refunded')),
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Products policies: Anyone can view active products
CREATE POLICY "Anyone can view active products"
  ON products
  FOR SELECT
  USING (is_active = true);

-- Orders policies: Users can view their own orders
CREATE POLICY "Users can view their own orders"
  ON orders
  FOR SELECT
  USING (user_email = current_setting('request.jwt.claims', true)::json->>'email');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_orders_user_email ON orders(user_email);
CREATE INDEX IF NOT EXISTS idx_orders_stripe_session ON orders(stripe_session_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_products_active ON products(is_active);
