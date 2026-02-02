/**
 * SERVER-SIDE TRACKING ENDPOINT EXAMPLE
 * 
 * This is an example of how to implement the /api/track endpoint
 * that receives tracking data from the frontend.
 * 
 * You can implement this using:
 * - Node.js/Express
 * - Next.js API routes
 * - Vercel Serverless Functions
 * - Any other backend framework
 * 
 * IMPORTANT: This server-side tracking doesn't require cookie consent
 * because it's:
 * 1. Anonymous (uses session IDs, not user IDs)
 * 2. Essential for business operations (validating demand)
 * 3. Stored on your own servers (not third-party)
 */

// Example using Express.js
// npm install express cors body-parser

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Store tracking data in a file (for simple setup)
// In production, use a proper database (PostgreSQL, MongoDB, etc.)
const TRACKING_FILE = path.join(__dirname, 'tracking-data.json');

// Ensure tracking file exists
async function ensureTrackingFile() {
  try {
    await fs.access(TRACKING_FILE);
  } catch {
    await fs.writeFile(TRACKING_FILE, JSON.stringify({ events: [] }, null, 2));
  }
}

// Main tracking endpoint
app.post('/api/track', async (req, res) => {
  try {
    const eventData = req.body;
    
    // Validate required fields
    if (!eventData.event || !eventData.sessionId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Add server-side metadata
    const enrichedEvent = {
      ...eventData,
      serverTimestamp: new Date().toISOString(),
      ip: req.ip, // You might want to hash this for privacy
      userAgent: req.headers['user-agent'],
    };

    // Read existing data
    await ensureTrackingFile();
    const data = JSON.parse(await fs.readFile(TRACKING_FILE, 'utf8'));
    
    // Add new event
    data.events.push(enrichedEvent);
    
    // Write back to file
    await fs.writeFile(TRACKING_FILE, JSON.stringify(data, null, 2));
    
    // Log to console for debugging
    console.log(`📊 Tracked: ${eventData.event} (Session: ${eventData.sessionId})`);
    
    // Return success
    res.status(200).json({ success: true });
    
  } catch (error) {
    console.error('Tracking error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Analytics endpoint - get funnel data
app.get('/api/analytics/funnel', async (req, res) => {
  try {
    await ensureTrackingFile();
    const data = JSON.parse(await fs.readFile(TRACKING_FILE, 'utf8'));
    
    // Calculate funnel metrics
    const events = data.events;
    
    const metrics = {
      totalVisitors: new Set(events.filter(e => e.event === 'page_view').map(e => e.sessionId)).size,
      checkoutStarted: new Set(events.filter(e => e.event === 'checkout_step_1_viewed').map(e => e.sessionId)).size,
      planClicked: new Set(events.filter(e => e.event === 'checkout_plan_clicked').map(e => e.sessionId)).size,
      emailSubmitted: new Set(events.filter(e => e.event === 'checkout_email_submitted').map(e => e.sessionId)).size,
      paymentAttempted: new Set(events.filter(e => e.event === 'checkout_payment_attempted').map(e => e.sessionId)).size,
      conversions: new Set(events.filter(e => e.event === 'checkout_payment_completed').map(e => e.sessionId)).size,
    };
    
    // Calculate conversion rates
    metrics.checkoutRate = (metrics.checkoutStarted / metrics.totalVisitors * 100).toFixed(2) + '%';
    metrics.emailRate = (metrics.emailSubmitted / metrics.checkoutStarted * 100).toFixed(2) + '%';
    metrics.paymentRate = (metrics.paymentAttempted / metrics.emailSubmitted * 100).toFixed(2) + '%';
    metrics.conversionRate = (metrics.conversions / metrics.totalVisitors * 100).toFixed(2) + '%';
    
    res.json(metrics);
    
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Export events as CSV for analysis
app.get('/api/analytics/export-csv', async (req, res) => {
  try {
    await ensureTrackingFile();
    const data = JSON.parse(await fs.readFile(TRACKING_FILE, 'utf8'));
    
    // Convert to CSV
    const events = data.events;
    const headers = ['timestamp', 'event', 'sessionId', 'page', 'plan', 'billingPeriod', 'url', 'referrer'];
    const csv = [
      headers.join(','),
      ...events.map(e => 
        headers.map(h => JSON.stringify(e[h] || '')).join(',')
      )
    ].join('\n');
    
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="tracking-data.csv"');
    res.send(csv);
    
  } catch (error) {
    console.error('Export error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`📊 Tracking server running on port ${PORT}`);
  console.log(`Endpoints:`);
  console.log(`  POST /api/track - Receive tracking events`);
  console.log(`  GET  /api/analytics/funnel - View funnel metrics`);
  console.log(`  GET  /api/analytics/export-csv - Export data as CSV`);
});

/**
 * ALTERNATIVE: Database implementation
 * 
 * If you want to use a database instead of a file:
 */

/*
// Using PostgreSQL with Prisma

// schema.prisma
model TrackingEvent {
  id              String   @id @default(cuid())
  event           String
  sessionId       String
  timestamp       DateTime
  serverTimestamp DateTime @default(now())
  url             String?
  referrer        String?
  page            String?
  plan            String?
  billingPeriod   String?
  amount          Float?
  ip              String?
  userAgent       String?
  data            Json?    // Store any additional data
  
  @@index([event])
  @@index([sessionId])
  @@index([timestamp])
}

// Then in your endpoint:
app.post('/api/track', async (req, res) => {
  const event = await prisma.trackingEvent.create({
    data: {
      ...req.body,
      ip: req.ip,
      userAgent: req.headers['user-agent'],
    }
  });
  res.json({ success: true });
});
*/

/**
 * DEPLOYMENT OPTIONS:
 * 
 * 1. Vercel Serverless Function (/api/track.js):
 *    - Create /api/track.js in your project
 *    - Deploy to Vercel
 *    - No server management needed
 * 
 * 2. Express on Heroku/Railway/Render:
 *    - Use this file
 *    - Deploy to a Node.js host
 *    - Add a database addon
 * 
 * 3. Next.js API Routes:
 *    - Create /pages/api/track.ts
 *    - Same logic as above
 *    - Deploy with your Next.js app
 */
