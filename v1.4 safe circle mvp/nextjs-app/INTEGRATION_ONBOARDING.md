# 🚀 SafeCircle Integration & Setup Guide

**Complete onboarding guide for all third-party services and integrations**

---

## 📋 Table of Contents

1. [Quick Setup Overview](#quick-setup-overview)
2. [Stripe Payment Integration](#stripe-payment-integration)
3. [Database Setup (PostgreSQL)](#database-setup-postgresql)
4. [Analytics & Tracking](#analytics--tracking)
5. [Email Service (Optional)](#email-service-optional)
6. [Environment Variables Complete Guide](#environment-variables-complete-guide)
7. [Testing Your Setup](#testing-your-setup)
8. [Troubleshooting](#troubleshooting)

---

## 🎯 Quick Setup Overview

### What You'll Need

| Service | Required? | Purpose | Setup Time |
|---------|-----------|---------|------------|
| **Stripe** | ✅ Yes | Payment processing | 15 min |
| **PostgreSQL** | ✅ Yes | Database for subscriptions & analytics | 10 min |
| **Google Analytics** | ⚠️ Recommended | User behavior tracking | 5 min |
| **Hotjar** | ⭐ Optional | Heatmaps & recordings | 5 min |
| **Microsoft Clarity** | ⭐ Optional | User session replays | 5 min |
| **Supabase** | ⭐ Optional | Contact form emails | 10 min |

### Setup Priority

```
Priority 1 (Required for payments):
  → Stripe Account + API Keys
  → PostgreSQL Database

Priority 2 (Recommended for analytics):
  → Google Analytics 4

Priority 3 (Optional enhancements):
  → Hotjar, Clarity, Supabase
```

---

## 💳 Stripe Payment Integration

### Step 1: Create Stripe Account

1. Go to [https://stripe.com](https://stripe.com)
2. Sign up for a free account
3. Complete business verification (if deploying to production)

### Step 2: Get API Keys

1. Go to [Stripe Dashboard → Developers → API Keys](https://dashboard.stripe.com/apikeys)
2. Copy your **Publishable key** (starts with `pk_test_` for test mode)
3. Copy your **Secret key** (starts with `sk_test_` for test mode)
4. Add to `.env.local`:

```env
# Test mode keys (for development)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51xxxxxxxxxxxxxxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_51xxxxxxxxxxxxxxxxxxxxxxxxx
```

### Step 3: Create Products & Prices

#### Create Products:

1. Go to [Stripe Dashboard → Products](https://dashboard.stripe.com/products)
2. Click **"+ Add product"**
3. Create **SafeCircle Basic**:
   - Name: `SafeCircle Basic`
   - Description: `Basic wellness monitoring plan`
   - Click **Save product**

4. Create **SafeCircle Full**:
   - Name: `SafeCircle Full`
   - Description: `Complete wellness monitoring with all features`
   - Click **Save product**

#### Create Prices:

For **SafeCircle Basic**:
1. Click on the product
2. Add price:
   - **Monthly**: €9.99/month (or your price)
   - Billing period: `Monthly`
   - Copy the Price ID (starts with `price_`)
3. Add another price:
   - **Yearly**: €99.99/year (or your price)
   - Billing period: `Yearly`
   - Copy the Price ID

For **SafeCircle Full**:
1. Click on the product
2. Add price:
   - **Monthly**: €19.99/month (or your price)
   - Billing period: `Monthly`
   - Copy the Price ID
3. Add another price:
   - **Yearly**: €199.99/year (or your price)
   - Billing period: `Yearly`
   - Copy the Price ID

#### Add Price IDs to Environment:

```env
# Stripe Price IDs
STRIPE_PRICE_BASIC_MONTHLY=price_xxxxxxxxxxxxxxxxxxxx
STRIPE_PRICE_BASIC_YEARLY=price_xxxxxxxxxxxxxxxxxxxx
STRIPE_PRICE_FULL_MONTHLY=price_xxxxxxxxxxxxxxxxxxxx
STRIPE_PRICE_FULL_YEARLY=price_xxxxxxxxxxxxxxxxxxxx
```

### Step 4: Set Up Webhooks

#### For Local Development:

1. Install Stripe CLI:
   ```bash
   # Windows (with Scoop)
   scoop install stripe
   
   # Or download from https://stripe.com/docs/stripe-cli
   ```

2. Login to Stripe CLI:
   ```bash
   stripe login
   ```

3. Forward webhooks to local server:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

4. Copy the webhook signing secret (starts with `whsec_`):
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxxxxx
   ```

#### For Production:

1. Go to [Stripe Dashboard → Developers → Webhooks](https://dashboard.stripe.com/webhooks)
2. Click **"+ Add endpoint"**
3. Set endpoint URL: `https://yourdomain.com/api/webhooks/stripe`
4. Select events to listen for:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Click **Add endpoint**
6. Copy the **Signing secret** and add to production environment variables

### Step 5: Test Stripe Integration

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Navigate to: `http://localhost:3000/checkout`

3. Use Stripe test cards:
   ```
   Success: 4242 4242 4242 4242
   Decline: 4000 0000 0000 0002
   3D Secure: 4000 0025 0000 3155
   
   Expiry: Any future date (e.g., 12/28)
   CVC: Any 3 digits (e.g., 123)
   ZIP: Any 5 digits (e.g., 12345)
   ```

4. Complete checkout and verify webhook receives the event

---

## 🗄️ Database Setup (PostgreSQL)

### Option 1: Local PostgreSQL

#### Windows:

1. Download PostgreSQL from [postgresql.org](https://www.postgresql.org/download/windows/)
2. Install with default settings
3. Remember your password!

#### Create Database:

```bash
# Open PowerShell
createdb safecircle

# Or using psql
psql -U postgres
CREATE DATABASE safecircle;
\q
```

#### Run Schema:

```bash
cd "c:\Users\ovira\Downloads\SafeCircle\v1.4 safe circle mvp\nextjs-app"
psql -U postgres -d safecircle -f database/schema.sql
```

#### Add Connection String:

```env
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/safecircle
```

### Option 2: Supabase (Cloud PostgreSQL)

1. Go to [supabase.com](https://supabase.com)
2. Create free account
3. Create new project
4. Go to **Settings → Database**
5. Copy **Connection string** (URI format)
6. Replace `[YOUR-PASSWORD]` with your database password

```env
DATABASE_URL=postgresql://postgres.[PROJECT-REF]:[YOUR-PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres
```

7. Run schema in Supabase SQL Editor:
   - Go to **SQL Editor**
   - Copy content from `database/schema.sql`
   - Click **Run**

### Option 3: Other Cloud Providers

**Railway:**
- [railway.app](https://railway.app) → PostgreSQL plugin

**Render:**
- [render.com](https://render.com) → PostgreSQL database

**Neon:**
- [neon.tech](https://neon.tech) → Serverless PostgreSQL

All provide a connection string in format:
```env
DATABASE_URL=postgresql://username:password@host:port/database
```

### Verify Database:

```bash
# Test connection
psql $DATABASE_URL -c "SELECT NOW();"

# Check tables exist
psql $DATABASE_URL -c "\dt"
```

You should see:
- `customers`
- `subscriptions`
- `tracking_events`
- `contact_submissions`

---

## 📊 Analytics & Tracking

### Google Analytics 4 (GA4)

#### Setup:

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create account (or use existing)
3. Click **Admin** (bottom left)
4. Create **Property**:
   - Property name: `SafeCircle`
   - Time zone: Your timezone
   - Currency: EUR (or your currency)
5. Create **Data Stream**:
   - Platform: **Web**
   - Website URL: Your domain
   - Stream name: `SafeCircle Web`
6. Copy **Measurement ID** (format: `G-XXXXXXXXXX`)

#### Add to Environment:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

#### What Gets Tracked:

✅ Page views (all routes)
✅ Button clicks (CTAs, pricing)
✅ Checkout events (plan selection, payment)
✅ Form submissions (contact form)
✅ Language changes (EN ↔ NL)

**Privacy Features:**
- ✅ Respects cookie consent
- ✅ Anonymous IP tracking
- ✅ No tracking without user permission

### Hotjar (Heatmaps & Recordings)

#### Setup:

1. Go to [hotjar.com](https://www.hotjar.com)
2. Sign up for free account (free plan: 35 sessions/day)
3. Add new site
4. Copy **Site ID** (numeric, e.g., `1234567`)
5. Version is usually `6`

#### Add to Environment:

```env
NEXT_PUBLIC_HOTJAR_ID=1234567
NEXT_PUBLIC_HOTJAR_VERSION=6
```

#### Features:

- 🔥 Heatmaps (click, scroll, move)
- 📹 Session recordings
- 📝 Feedback polls
- 🎯 Conversion funnels

### Microsoft Clarity

#### Setup:

1. Go to [clarity.microsoft.com](https://clarity.microsoft.com)
2. Sign up with Microsoft account (free)
3. Click **Add new project**
4. Enter website details
5. Copy **Project ID** (alphanumeric string)

#### Add to Environment:

```env
NEXT_PUBLIC_CLARITY_PROJECT_ID=abcdef1234
```

#### Features:

- 📹 Session replays
- 🔥 Heatmaps
- 📊 Rage clicks detection
- 📱 Mobile insights
- 🆓 Completely free (unlimited)

### Privacy & Cookie Consent

**How It Works:**

1. User visits site → Cookie banner appears
2. User clicks **"Accept All"** → All analytics enabled
3. User clicks **"Essential Only"** → Only server-side tracking
4. Preference saved in localStorage
5. Analytics respect the choice

**What Happens:**

| User Choice | GA4 | Hotjar | Clarity | Server Tracking |
|-------------|-----|--------|---------|-----------------|
| Accept All | ✅ | ✅ | ✅ | ✅ |
| Essential Only | ❌ | ❌ | ❌ | ✅ |

**Server-Side Tracking (Always On):**
- Page views (anonymous)
- Checkout funnel events
- No cookies, no personal data
- Stored in your database

---

## 📧 Email Service (Optional)

### Supabase Edge Functions (Contact Form)

#### Setup:

1. Go to [supabase.com](https://supabase.com)
2. Create project (or use existing)
3. Go to **Settings → API**
4. Copy:
   - **Project URL**
   - **anon public key**

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### Resend API (Email Sending):

1. Go to [resend.com](https://resend.com)
2. Sign up (free: 100 emails/day)
3. Add domain (or use resend.dev for testing)
4. Generate API key

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL_TO=hello@safecircle.com
```

#### Deploy Edge Function:

```bash
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Link project
supabase link --project-ref your-project-ref

# Deploy function
supabase functions deploy send-contact-email
```

### Alternative: Custom Email Endpoint

Create `app/api/contact/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();
  
  // Configure your email service
  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: 587,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  
  await transporter.sendMail({
    from: email,
    to: process.env.CONTACT_EMAIL_TO,
    subject: `Contact Form: ${name}`,
    text: message,
  });
  
  return NextResponse.json({ success: true });
}
```

---

## 🔐 Environment Variables Complete Guide

### Development (.env.local)

Create `.env.local` in `nextjs-app/` directory:

```bash
cp .env.example .env.local
```

### Required Variables

```env
# ===== REQUIRED FOR PAYMENTS =====
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
DATABASE_URL=postgresql://...

# ===== REQUIRED FOR STRIPE PRODUCTS =====
STRIPE_PRICE_BASIC_MONTHLY=price_...
STRIPE_PRICE_BASIC_YEARLY=price_...
STRIPE_PRICE_FULL_MONTHLY=price_...
STRIPE_PRICE_FULL_YEARLY=price_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### Recommended Variables

```env
# ===== ANALYTICS (Recommended) =====
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Optional Variables

```env
# ===== ADDITIONAL ANALYTICS =====
NEXT_PUBLIC_HOTJAR_ID=1234567
NEXT_PUBLIC_HOTJAR_VERSION=6
NEXT_PUBLIC_CLARITY_PROJECT_ID=abc123

# ===== CONTACT FORM =====
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
RESEND_API_KEY=re_...
CONTACT_EMAIL_TO=hello@safecircle.com

# ===== OTHER =====
NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL=https://calendar.google.com/...
NODE_ENV=development
```

### Production Variables

**Important Changes for Production:**

1. **Stripe**: Use live keys (`pk_live_`, `sk_live_`)
2. **Database**: Use production PostgreSQL URL
3. **App URL**: Use your actual domain
4. **Webhook**: Update to production endpoint

```env
# Production Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...  # From production webhook

# Production URLs
NEXT_PUBLIC_APP_URL=https://safecircle.com
DATABASE_URL=postgresql://production-db-url

# Everything else same as development
```

### Validating Environment Variables

```bash
# Check which variables are set
npm run check-env

# Or manually
node -e "console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)"
```

---

## ✅ Testing Your Setup

### 1. Test Application Loads

```bash
npm run dev
```

Open http://localhost:3000

**Expected:** Homepage loads with full styling

### 2. Test Navigation

Click through all pages:
- ✅ Homepage (`/`)
- ✅ Checkout (`/checkout`)
- ✅ Contact (`/contact`)
- ✅ Privacy, Terms, Security
- ✅ Help Center

**Expected:** All pages load, no broken links

### 3. Test Language Switching

Click language switcher (top right)

**Expected:** Content switches between English and Dutch

### 4. Test Analytics (if configured)

Open browser console:

```javascript
// Check GA4 loaded
console.log(typeof gtag) // Should be 'function'

// Check Hotjar loaded
console.log(typeof hj) // Should be 'function'

// Check Clarity loaded
console.log(typeof clarity) // Should be 'function'
```

Navigate pages → Check Google Analytics Real-Time reports

### 5. Test Stripe Checkout

1. Go to `/checkout`
2. Select a plan
3. Fill in email
4. Click "Continue to Payment"

**Expected:** Redirect to Stripe checkout page

**Test Cards:**
```
Success:  4242 4242 4242 4242
Decline:  4000 0000 0000 0002
```

### 6. Test Database Tracking

Complete a checkout (test mode)

Check database:

```bash
psql $DATABASE_URL -c "SELECT * FROM tracking_events ORDER BY created_at DESC LIMIT 5;"
```

**Expected:** See checkout events recorded

### 7. Test Webhooks

In terminal running `stripe listen`:

Complete a test checkout

**Expected:** See webhook events logged:
```
✔ checkout.session.completed
✔ customer.subscription.created
```

Check database:

```bash
psql $DATABASE_URL -c "SELECT * FROM subscriptions ORDER BY created_at DESC LIMIT 1;"
```

**Expected:** New subscription record

### 8. Test Contact Form (if configured)

1. Go to `/contact`
2. Fill out form
3. Submit

**Expected:** 
- Success message appears
- Email sent (check inbox)
- Record in `contact_submissions` table

---

## 🔧 Troubleshooting

### Stripe Issues

**Problem:** "Stripe is not defined"
```
Solution: Check NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is set
Verify it starts with NEXT_PUBLIC_
Restart dev server: npm run dev
```

**Problem:** Webhook signature verification fails
```
Solution: 
1. Check STRIPE_WEBHOOK_SECRET matches CLI output
2. Ensure webhook endpoint uses raw body
3. Verify Stripe CLI is running
```

**Problem:** Price ID not found
```
Solution:
1. Verify price IDs in .env.local
2. Check they start with price_
3. Ensure they're from correct Stripe account
```

### Database Issues

**Problem:** Connection refused
```
Solution:
1. Check PostgreSQL is running
2. Verify DATABASE_URL format
3. Test with: psql $DATABASE_URL -c "SELECT 1;"
```

**Problem:** Tables don't exist
```
Solution:
Run schema: psql $DATABASE_URL -f database/schema.sql
Or in SQL editor if using cloud database
```

**Problem:** Permission denied
```
Solution:
Check database user has CREATE privileges
For cloud: use admin connection string
```

### Analytics Issues

**Problem:** GA4 not tracking
```
Solution:
1. Accept cookies in banner
2. Check browser console for gtag
3. Verify NEXT_PUBLIC_GA_MEASUREMENT_ID
4. Check GA4 real-time report (30s delay)
```

**Problem:** Hotjar not recording
```
Solution:
1. Check NEXT_PUBLIC_HOTJAR_ID is number
2. Verify script loads (Network tab)
3. Wait 2-3 minutes for recordings to appear
```

**Problem:** Cookie banner doesn't appear
```
Solution:
Clear localStorage: localStorage.clear()
Refresh page
```

### Environment Variable Issues

**Problem:** Variables not loading
```
Solution:
1. Ensure file is .env.local (not .env)
2. Restart Next.js dev server
3. Check file is in nextjs-app/ directory
4. Client vars MUST start with NEXT_PUBLIC_
```

**Problem:** Still seeing defaults/placeholders
```
Solution:
1. Check .env.local exists
2. Verify no typos in variable names
3. Check for spaces around = sign (remove them)
4. Restart server completely
```

---

## 🎯 Success Checklist

Before going to production, verify:

### Development
- [ ] `npm install` completed successfully
- [ ] `.env.local` file created with all required variables
- [ ] `npm run dev` starts without errors
- [ ] Application loads at http://localhost:3000
- [ ] All pages navigate correctly
- [ ] Language switching works (EN ↔ NL)
- [ ] Styling matches original design

### Stripe Integration
- [ ] Stripe account created
- [ ] Test API keys added to `.env.local`
- [ ] 4 products/prices created in Stripe
- [ ] All 4 price IDs added to `.env.local`
- [ ] Checkout page loads
- [ ] Test payment completes successfully
- [ ] Stripe CLI running for webhooks
- [ ] Webhook secret added to `.env.local`
- [ ] Webhook events received and logged

### Database
- [ ] PostgreSQL installed/provisioned
- [ ] Database created
- [ ] Schema applied successfully
- [ ] Connection string in `.env.local`
- [ ] Tables exist (run `\dt` in psql)
- [ ] Test data can be inserted
- [ ] Tracking events being recorded

### Analytics (Optional but Recommended)
- [ ] Google Analytics account created
- [ ] GA4 property configured
- [ ] Measurement ID added to `.env.local`
- [ ] Cookie consent banner appears
- [ ] Analytics tracking after consent
- [ ] Events visible in GA4 real-time
- [ ] Hotjar configured (optional)
- [ ] Clarity configured (optional)

### Production Readiness
- [ ] Switch to Stripe live keys
- [ ] Update webhook endpoint to production URL
- [ ] Use production database
- [ ] Update NEXT_PUBLIC_APP_URL
- [ ] Test complete checkout flow
- [ ] Monitor webhook events
- [ ] Verify SSL/HTTPS works
- [ ] Test on mobile devices

---

## 📞 Getting Help

### Resources

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Stripe Docs**: [stripe.com/docs](https://stripe.com/docs)
- **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)
- **Google Analytics**: [support.google.com/analytics](https://support.google.com/analytics)

### Common Commands Reference

```bash
# Start development
npm run dev

# Build for production
npm run build
npm start

# Database operations
createdb safecircle
psql -d safecircle -f database/schema.sql
psql $DATABASE_URL -c "SELECT * FROM subscriptions;"

# Stripe CLI
stripe login
stripe listen --forward-to localhost:3000/api/webhooks/stripe
stripe trigger payment_intent.succeeded

# Environment validation
npm run check-env
node -e "require('dotenv').config({path:'.env.local'}); console.log(process.env)"
```

---

## 🎉 You're All Set!

Once you've completed this guide:

1. ✅ Payments work end-to-end
2. ✅ Database tracks everything
3. ✅ Analytics measure user behavior
4. ✅ Application functions identically to original
5. ✅ Ready to deploy to production

**Next Steps:**
- Deploy to Vercel: `vercel`
- Deploy to Netlify: `netlify deploy`
- Or your hosting of choice

**Happy building! 🚀**

---

*Last Updated: February 2, 2026*
*SafeCircle Next.js Version: 1.0.0*
