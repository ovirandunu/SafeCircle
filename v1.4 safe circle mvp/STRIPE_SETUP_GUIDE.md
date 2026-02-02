# 🚀 Stripe Payment Integration - Setup Guide

## Overview

SafeCircle now has a complete Stripe payment integration with:
- ✅ Secure checkout session creation
- ✅ Subscription management
- ✅ Webhook handling for payment events
- ✅ PostgreSQL database for tracking subscriptions
- ✅ Environment-based configuration

---

## 📋 Prerequisites

1. **Stripe Account** - [Sign up at stripe.com](https://stripe.com)
2. **PostgreSQL Database** - Local or cloud (Supabase, Neon, etc.)
3. **Node.js** - v18 or higher

---

## 🔧 Setup Steps

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- `stripe` - Stripe Node.js SDK
- `pg` - PostgreSQL client
- `express` - Backend API server
- `cors` - CORS middleware
- `dotenv` - Environment variable management

---

### 2. Configure Environment Variables

Copy the `.env.example` to `.env` and fill in your actual values:

```bash
cp .env.example .env
```

**Required variables:**

#### Stripe Configuration
```bash
# Get from: https://dashboard.stripe.com/apikeys
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Create products and prices in Stripe Dashboard
STRIPE_PRICE_BASIC_MONTHLY=price_...
STRIPE_PRICE_BASIC_YEARLY=price_...
STRIPE_PRICE_FULL_MONTHLY=price_...
STRIPE_PRICE_FULL_YEARLY=price_...

# Get from: https://dashboard.stripe.com/webhooks
STRIPE_WEBHOOK_SECRET=whsec_...
```

#### Database
```bash
# PostgreSQL connection string
DATABASE_URL=postgresql://username:password@localhost:5432/safecircle
```

#### Analytics (already configured)
```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_API_URL=http://localhost:3001
VITE_APP_URL=http://localhost:5173
```

---

### 3. Create Stripe Products & Prices

#### Option A: Using Stripe Dashboard (Recommended)

1. Go to [Stripe Dashboard > Products](https://dashboard.stripe.com/products)

2. **Create "SafeCircle Basic" Product**
   - Click "Add product"
   - Name: `SafeCircle Basic`
   - Description: `Smartphone activity monitoring`
   - Pricing model: `Recurring`
   - Create two prices:
     - **Monthly**: €5.00 / month
     - **Yearly**: €48.00 / year (€4.00/month - 20% discount)
   - Copy the Price IDs to your `.env` file

3. **Create "SafeCircle Full" Product**
   - Click "Add product"
   - Name: `SafeCircle Full`
   - Description: `Complete care with smart device integration`
   - Create two prices:
     - **Monthly**: €8.00 / month
     - **Yearly**: €76.80 / year (€6.40/month - 20% discount)
   - Copy the Price IDs to your `.env` file

#### Option B: Using Stripe CLI

```bash
# Install Stripe CLI
npm install -g stripe

# Login
stripe login

# Create products
stripe products create \
  --name="SafeCircle Basic" \
  --description="Smartphone activity monitoring"

# Create prices (replace prod_xxx with your product ID)
stripe prices create \
  --product="prod_xxx" \
  --unit-amount=500 \
  --currency=eur \
  --recurring[interval]=month

stripe prices create \
  --product="prod_xxx" \
  --unit-amount=4800 \
  --currency=eur \
  --recurring[interval]=year
```

---

### 4. Set Up PostgreSQL Database

#### Option A: Local PostgreSQL

```bash
# Install PostgreSQL (if not installed)
# macOS: brew install postgresql
# Windows: Download from postgresql.org

# Create database
createdb safecircle

# Run schema
psql -U postgres -d safecircle -f database/schema.sql
```

#### Option B: Supabase (Recommended for Production)

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Go to "Project Settings" > "Database"
4. Copy the "Connection string" (Session mode)
5. Add to your `.env` as `DATABASE_URL`
6. Run the schema:
   ```bash
   psql "your-connection-string" -f database/schema.sql
   ```

#### Option C: Neon, Railway, or other PostgreSQL providers

Similar to Supabase - get your connection string and run the schema.

---

### 5. Configure Stripe Webhooks

Webhooks allow Stripe to notify your server about payment events (successful payments, failed payments, cancellations, etc.)

#### For Development (Local Testing)

```bash
# Install Stripe CLI (if not already installed)
npm install -g stripe

# Login
stripe login

# Forward webhooks to local server
stripe listen --forward-to localhost:3001/api/webhooks/stripe
```

This will give you a webhook secret starting with `whsec_...` - add it to your `.env`:
```bash
STRIPE_WEBHOOK_SECRET=whsec_...
```

#### For Production

1. Go to [Stripe Dashboard > Webhooks](https://dashboard.stripe.com/webhooks)
2. Click "Add endpoint"
3. Endpoint URL: `https://your-domain.com/api/webhooks/stripe`
4. Select events to listen to:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Copy the "Signing secret" to your `.env`

---

### 6. Start the Application

#### Development Mode (Auto-restart)

```bash
# Start both frontend and backend
npm start

# Or separately:
npm run dev      # Frontend (Vite) on port 5173
npm run server:dev  # Backend (Node.js) on port 3001
```

#### Production Mode

```bash
# Build frontend
npm run build

# Start backend
npm run server
```

---

## 🧪 Testing the Payment Flow

### 1. Test in Development

1. Start the servers: `npm start`
2. Open http://localhost:5173
3. Navigate to pricing section
4. Click "Get Started" on any plan
5. Fill in checkout steps
6. On step 3 (payment), click "Complete Purchase"
7. You'll be redirected to Stripe Checkout

### 2. Use Stripe Test Cards

Use these test card numbers in Stripe Checkout:

| Scenario | Card Number | CVC | Expiry |
|----------|-------------|-----|--------|
| **Success** | 4242 4242 4242 4242 | Any 3 digits | Any future date |
| **Declined** | 4000 0000 0000 0002 | Any 3 digits | Any future date |
| **Insufficient Funds** | 4000 0000 0000 9995 | Any 3 digits | Any future date |
| **3D Secure** | 4000 0025 0000 3155 | Any 3 digits | Any future date |

### 3. Verify in Database

After a successful payment:

```sql
-- Check subscriptions
SELECT * FROM subscriptions ORDER BY created_at DESC LIMIT 5;

-- Check tracking events
SELECT event, COUNT(*) FROM tracking_events GROUP BY event;

-- View funnel conversion
SELECT * FROM funnel_conversion;
```

### 4. View in Stripe Dashboard

- Go to [Stripe Dashboard > Payments](https://dashboard.stripe.com/payments)
- You should see your test payment
- Click on it to view details

---

## 📊 Monitoring & Analytics

### Backend API Endpoints

- `GET /health` - Health check
- `POST /api/checkout/create-session` - Create Stripe checkout session
- `POST /api/checkout/create-payment-intent` - Create payment intent
- `GET /api/checkout/session/:sessionId` - Get session details
- `POST /api/webhooks/stripe` - Stripe webhook handler
- `POST /api/track` - Track analytics events
- `GET /api/analytics/funnel` - Get funnel metrics

### Database Views

```sql
-- Subscription summary
SELECT * FROM subscription_summary;

-- Daily signups
SELECT * FROM daily_signups ORDER BY date DESC LIMIT 30;

-- Funnel conversion rates
SELECT * FROM funnel_conversion;
```

---

## 🔒 Security Best Practices

1. **Never commit `.env` file** - It's in `.gitignore`
2. **Use test mode in development** - Use `pk_test_` and `sk_test_` keys
3. **Verify webhook signatures** - Already implemented in `server.js`
4. **Use HTTPS in production** - Required for Stripe webhooks
5. **Validate all inputs** - Already implemented
6. **Store sensitive data securely** - Never log customer payment details

---

## 🚀 Deployment

### Deploy Backend

#### Option 1: Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Create new project
railway init

# Add PostgreSQL
railway add postgres

# Deploy
railway up
```

#### Option 2: Render

1. Connect your GitHub repo
2. Create a new Web Service
3. Build command: `npm install`
4. Start command: `npm run server`
5. Add environment variables in dashboard

#### Option 3: Heroku, DigitalOcean, AWS, etc.

Similar process - deploy Node.js app with PostgreSQL database.

### Deploy Frontend

Build and deploy to:
- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **Cloudflare Pages**: Via dashboard or CLI

---

## 🐛 Troubleshooting

### "Stripe failed to initialize"
- Check `VITE_STRIPE_PUBLISHABLE_KEY` in `.env`
- Ensure it starts with `pk_test_` or `pk_live_`
- Restart dev server after changing `.env`

### "Failed to create checkout session"
- Check backend server is running on port 3001
- Verify `STRIPE_SECRET_KEY` in `.env`
- Check price IDs are correct
- View server logs for detailed errors

### "Database connection failed"
- Verify `DATABASE_URL` is correct
- Check PostgreSQL is running
- Ensure database exists: `createdb safecircle`
- Run schema: `psql -d safecircle -f database/schema.sql`

### "Webhook signature verification failed"
- Ensure `STRIPE_WEBHOOK_SECRET` is set
- In development, use Stripe CLI: `stripe listen --forward-to localhost:3001/api/webhooks/stripe`
- In production, verify endpoint URL in Stripe Dashboard

---

## 📚 Additional Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Testing Guide](https://stripe.com/docs/testing)
- [Stripe Webhooks](https://stripe.com/docs/webhooks)
- [Stripe Checkout](https://stripe.com/docs/payments/checkout)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

---

## ✅ Checklist

Before going live:

- [ ] All environment variables configured
- [ ] Database schema created
- [ ] Stripe products and prices created
- [ ] Webhook endpoint configured
- [ ] Payment flow tested with test cards
- [ ] Database subscriptions verified
- [ ] Frontend pointing to production API
- [ ] Switch to live Stripe keys (`pk_live_` and `sk_live_`)
- [ ] HTTPS enabled on backend
- [ ] Error monitoring set up (Sentry, etc.)
- [ ] Backup strategy for database

---

Need help? Check the logs:
- Frontend: Browser console
- Backend: Terminal where `npm run server` is running
- Stripe: [Dashboard > Logs](https://dashboard.stripe.com/logs)
