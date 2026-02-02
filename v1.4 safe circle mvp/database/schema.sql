-- SafeCircle Database Schema
-- PostgreSQL Database Setup

-- Create database (run this separately if needed)
-- CREATE DATABASE safecircle;

-- ============================================
-- SUBSCRIPTIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS subscriptions (
  id SERIAL PRIMARY KEY,
  stripe_session_id VARCHAR(255) UNIQUE NOT NULL,
  stripe_customer_id VARCHAR(255),
  stripe_subscription_id VARCHAR(255),
  customer_email VARCHAR(255) NOT NULL,
  plan VARCHAR(50) NOT NULL,
  billing_period VARCHAR(20) NOT NULL,
  status VARCHAR(50) DEFAULT 'active',
  amount INTEGER,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  canceled_at TIMESTAMP
);

-- Indexes for better query performance
CREATE INDEX idx_subscriptions_email ON subscriptions(customer_email);
CREATE INDEX idx_subscriptions_stripe_customer ON subscriptions(stripe_customer_id);
CREATE INDEX idx_subscriptions_stripe_subscription ON subscriptions(stripe_subscription_id);
CREATE INDEX idx_subscriptions_status ON subscriptions(status);

-- ============================================
-- TRACKING EVENTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS tracking_events (
  id SERIAL PRIMARY KEY,
  event VARCHAR(100) NOT NULL,
  session_id VARCHAR(255) NOT NULL,
  data JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for analytics queries
CREATE INDEX idx_tracking_event ON tracking_events(event);
CREATE INDEX idx_tracking_session ON tracking_events(session_id);
CREATE INDEX idx_tracking_created ON tracking_events(created_at);

-- ============================================
-- CUSTOMERS TABLE (optional - for user management)
-- ============================================
CREATE TABLE IF NOT EXISTS customers (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  phone VARCHAR(50),
  stripe_customer_id VARCHAR(255) UNIQUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_customers_email ON customers(email);
CREATE INDEX idx_customers_stripe ON customers(stripe_customer_id);

-- ============================================
-- CONTACT FORM SUBMISSIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW(),
  responded_at TIMESTAMP
);

CREATE INDEX idx_contact_email ON contact_submissions(email);
CREATE INDEX idx_contact_status ON contact_submissions(status);
CREATE INDEX idx_contact_created ON contact_submissions(created_at);

-- ============================================
-- USEFUL VIEWS FOR ANALYTICS
-- ============================================

-- Subscription summary view
CREATE OR REPLACE VIEW subscription_summary AS
SELECT 
  plan,
  billing_period,
  status,
  COUNT(*) as count,
  SUM(amount) as total_revenue
FROM subscriptions
GROUP BY plan, billing_period, status;

-- Daily signups view
CREATE OR REPLACE VIEW daily_signups AS
SELECT 
  DATE(created_at) as date,
  COUNT(*) as signups,
  SUM(amount) as revenue
FROM subscriptions
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- Funnel conversion view
CREATE OR REPLACE VIEW funnel_conversion AS
SELECT 
  COUNT(DISTINCT CASE WHEN event = 'page_view' THEN session_id END) as visitors,
  COUNT(DISTINCT CASE WHEN event = 'checkout_plan_clicked' THEN session_id END) as plan_clicks,
  COUNT(DISTINCT CASE WHEN event = 'checkout_step_1_viewed' THEN session_id END) as step_1,
  COUNT(DISTINCT CASE WHEN event = 'checkout_step_2_viewed' THEN session_id END) as step_2,
  COUNT(DISTINCT CASE WHEN event = 'checkout_email_submitted' THEN session_id END) as email_submitted,
  COUNT(DISTINCT CASE WHEN event = 'checkout_step_3_viewed' THEN session_id END) as step_3,
  COUNT(DISTINCT CASE WHEN event = 'checkout_payment_attempted' THEN session_id END) as payment_attempted,
  COUNT(DISTINCT CASE WHEN event = 'checkout_payment_completed' THEN session_id END) as payment_completed,
  
  -- Conversion rates
  ROUND(100.0 * COUNT(DISTINCT CASE WHEN event = 'checkout_plan_clicked' THEN session_id END) / 
    NULLIF(COUNT(DISTINCT CASE WHEN event = 'page_view' THEN session_id END), 0), 2) as click_rate,
  
  ROUND(100.0 * COUNT(DISTINCT CASE WHEN event = 'checkout_payment_completed' THEN session_id END) / 
    NULLIF(COUNT(DISTINCT CASE WHEN event = 'checkout_plan_clicked' THEN session_id END), 0), 2) as conversion_rate
FROM tracking_events;

-- ============================================
-- SAMPLE QUERIES
-- ============================================

-- Get all active subscriptions
-- SELECT * FROM subscriptions WHERE status = 'active' ORDER BY created_at DESC;

-- Get conversion funnel
-- SELECT * FROM funnel_conversion;

-- Get daily revenue
-- SELECT * FROM daily_signups ORDER BY date DESC LIMIT 30;

-- Get plan distribution
-- SELECT * FROM subscription_summary ORDER BY count DESC;

-- Get recent tracking events
-- SELECT event, COUNT(*) as count FROM tracking_events 
-- WHERE created_at > NOW() - INTERVAL '24 hours' 
-- GROUP BY event ORDER BY count DESC;
