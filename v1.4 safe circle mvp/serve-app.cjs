require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const Stripe = require('stripe');
const { Pool } = require('pg');

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-11-20.acacia'
});

// Database connection with fallback
let pool = null;
try {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL?.includes('sslmode=require') ? { rejectUnauthorized: false } : false
  });
  pool.on('error', (err) => {
    console.error('Unexpected database error:', err);
  });
} catch (err) {
  console.error('⚠️  Database connection failed:', err.message);
  console.log('⚠️  Running in no-database mode - data will not be persisted');
}

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : '*',
  credentials: true
}));
app.use(express.json());

// Serve static files from Vite build
app.use(express.static(path.join(__dirname, 'dist')));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    database: pool ? 'connected' : 'disconnected'
  });
});

// Database helper functions
async function saveSubscription(subscriptionData) {
  if (!pool) {
    console.log('[NO-DB] Would save subscription:', subscriptionData);
    return;
  }
  
  const query = `
    INSERT INTO subscriptions (
      stripe_subscription_id, stripe_customer_id, stripe_price_id,
      plan_type, billing_cycle, status, email, amount, currency
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    ON CONFLICT (stripe_subscription_id) 
    DO UPDATE SET 
      status = EXCLUDED.status,
      updated_at = CURRENT_TIMESTAMP
    RETURNING *
  `;
  
  const values = [
    subscriptionData.subscriptionId,
    subscriptionData.customerId,
    subscriptionData.priceId,
    subscriptionData.planType,
    subscriptionData.billingCycle,
    subscriptionData.status,
    subscriptionData.email,
    subscriptionData.amount,
    subscriptionData.currency
  ];
  
  const result = await pool.query(query, values);
  return result.rows[0];
}

async function updateSubscription(subscriptionId, updates) {
  if (!pool) {
    console.log('[NO-DB] Would update subscription:', subscriptionId, updates);
    return;
  }
  
  const query = `
    UPDATE subscriptions 
    SET status = $1, updated_at = CURRENT_TIMESTAMP
    WHERE stripe_subscription_id = $2
    RETURNING *
  `;
  
  const result = await pool.query(query, [updates.status, subscriptionId]);
  return result.rows[0];
}

async function saveTrackingEvent(eventData) {
  if (!pool) {
    console.log('[NO-DB] Would save tracking event:', eventData);
    return;
  }
  
  const query = `
    INSERT INTO tracking_events (
      event_name, event_category, session_id, user_id,
      page_url, page_title, referrer, user_agent,
      device_type, browser, os, language,
      screen_resolution, viewport_size, metadata
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
    RETURNING *
  `;
  
  const values = [
    eventData.eventName,
    eventData.eventCategory,
    eventData.sessionId,
    eventData.userId,
    eventData.pageUrl,
    eventData.pageTitle,
    eventData.referrer,
    eventData.userAgent,
    eventData.deviceType,
    eventData.browser,
    eventData.os,
    eventData.language,
    eventData.screenResolution,
    eventData.viewportSize,
    eventData.metadata
  ];
  
  const result = await pool.query(query, values);
  return result.rows[0];
}

// Stripe checkout session creation
app.post('/api/checkout/create-session', async (req, res) => {
  try {
    const { priceId, planType, billingCycle, email } = req.body;
    
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card', 'ideal'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      customer_email: email,
      success_url: `${process.env.VITE_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.VITE_APP_URL}/checkout/cancel`,
      metadata: {
        planType,
        billingCycle,
      },
      subscription_data: {
        metadata: {
          planType,
          billingCycle,
        },
      },
    });
    
    res.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Checkout session error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Stripe webhook handler
app.post('/api/webhooks/stripe', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  
  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        const subscription = await stripe.subscriptions.retrieve(session.subscription);
        
        await saveSubscription({
          subscriptionId: subscription.id,
          customerId: session.customer,
          priceId: subscription.items.data[0].price.id,
          planType: session.metadata.planType,
          billingCycle: session.metadata.billingCycle,
          status: subscription.status,
          email: session.customer_email,
          amount: subscription.items.data[0].price.unit_amount,
          currency: subscription.items.data[0].price.currency
        });
        break;
      }
      
      case 'customer.subscription.updated': {
        const subscription = event.data.object;
        await updateSubscription(subscription.id, {
          status: subscription.status
        });
        break;
      }
      
      case 'customer.subscription.deleted': {
        const subscription = event.data.object;
        await updateSubscription(subscription.id, {
          status: 'canceled'
        });
        break;
      }
    }
    
    res.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(400).json({ error: error.message });
  }
});

// Tracking endpoint
app.post('/api/track', async (req, res) => {
  try {
    await saveTrackingEvent(req.body);
    res.json({ success: true });
  } catch (error) {
    console.error('Tracking error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Analytics endpoints
app.get('/api/analytics/funnel', async (req, res) => {
  if (!pool) {
    return res.json({ error: 'Database not available' });
  }
  
  try {
    const result = await pool.query('SELECT * FROM funnel_conversion ORDER BY step_number');
    res.json(result.rows);
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/analytics/subscriptions', async (req, res) => {
  if (!pool) {
    return res.json({ error: 'Database not available' });
  }
  
  try {
    const result = await pool.query('SELECT * FROM subscription_summary');
    res.json(result.rows[0] || {});
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/analytics/daily-signups', async (req, res) => {
  if (!pool) {
    return res.json({ error: 'Database not available' });
  }
  
  try {
    const result = await pool.query('SELECT * FROM daily_signups ORDER BY signup_date DESC LIMIT 30');
    res.json(result.rows);
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ error: error.message });
  }
});

// SPA fallback - serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║     SafeCircle Production Server      ║
╚════════════════════════════════════════╝

🚀 Server running on port ${PORT}
🌐 Serving static files from: dist/
💾 Database: ${pool ? '✅ Connected' : '⚠️  Disconnected (no-database mode)'}

📍 API Endpoints:
   POST /api/checkout/create-session
   POST /api/webhooks/stripe
   POST /api/track
   GET  /api/analytics/funnel
   GET  /api/analytics/subscriptions
   GET  /api/analytics/daily-signups
   GET  /health

✨ Ready to accept requests!
  `);
});
