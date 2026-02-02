# SafeCircle Integration Setup Guide

This document provides step-by-step instructions for setting up all the integrations in your SafeCircle landing page.

## Table of Contents
1. [Analytics Setup](#analytics-setup)
2. [Supabase & Contact Form](#supabase--contact-form)
3. [Stripe Payment Integration](#stripe-payment-integration)
4. [Google Calendar Booking](#google-calendar-booking)

---

## Analytics Setup

### Google Analytics 4

1. **Create GA4 Property**
   - Go to https://analytics.google.com
   - Create a new GA4 property
   - Get your Measurement ID (format: `G-XXXXXXXXXX`)

2. **Update Your Code**
   - Open `/src/utils/initAnalytics.ts`
   - Replace `G-XXXXXXXXXX` with your actual Measurement ID

3. **Update analytics.ts**
   - Open `/src/utils/analytics.ts`
   - Replace `GA_MEASUREMENT_ID` in the `trackPageView` function

### Microsoft Clarity

1. **Create Clarity Project**
   - Go to https://clarity.microsoft.com
   - Create a new project
   - Get your Project ID

2. **Update Your Code**
   - Open `/src/utils/initAnalytics.ts`
   - Replace `XXXXXXXXXX` in `CLARITY_PROJECT_ID` with your actual Project ID

### Testing Analytics

- Open browser DevTools → Network tab
- Look for requests to `google-analytics.com` and `clarity.ms`
- Use GA4 DebugView to see events in real-time

---

## Supabase & Contact Form

### Prerequisites
- Supabase account (free tier sufficient)
- Resend account for email (free tier: 3,000 emails/month)

### Step 1: Create Supabase Project

1. Go to https://supabase.com and sign up
2. Create a new project
3. Note your:
   - Project URL
   - Anon/Public key

### Step 2: Set Up Resend

1. Go to https://resend.com and create account
2. Verify your sending domain (or use test domain for development)
3. Create an API key
4. Save your Resend API key

### Step 3: Deploy Edge Function

```bash
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Link to your project
supabase link --project-ref YOUR_PROJECT_REF

# Set Resend API key as secret
supabase secrets set RESEND_API_KEY=your_resend_api_key_here

# Deploy the function
supabase functions deploy send-contact-email
```

### Step 4: Update Your Application

After deploying, you'll get a URL like:
```
https://YOUR_PROJECT_REF.supabase.co/functions/v1/send-contact-email
```

Update `/src/app/pages/ContactUs.tsx`:
- Find `YOUR_SUPABASE_EDGE_FUNCTION_URL`
- Replace with your actual function URL

### Step 5: Test Contact Form

1. Fill out the contact form
2. Check email at safecircle@bartgeelen.com
3. Check Supabase logs if issues arise:
   ```bash
   supabase functions logs send-contact-email
   ```

### Troubleshooting

- **Function not receiving requests**: Check CORS settings and URL
- **Emails not sending**: Verify Resend API key and domain
- **Check logs**: Use Supabase dashboard or CLI for error details

---

## Stripe Payment Integration

### Prerequisites
- Stripe account (test mode available for free)
- Stripe API keys

### Step 1: Get Stripe Keys

1. Go to https://stripe.com and create account
2. Navigate to Developers → API Keys
3. Get your:
   - **Publishable key** (starts with `pk_test_...` or `pk_live_...`)
   - **Secret key** (starts with `sk_test_...` or `sk_live_...`)

### Step 2: Create Environment Variables

Create `.env.local` in your project root:

```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...your_key_here
```

### Step 3: Update Checkout Page

The Checkout page is already set up to use Stripe. You'll need to:

1. **Uncomment Stripe integration code** in `/src/app/pages/Checkout.tsx`
2. **Create a backend endpoint** to create Payment Intents (see below)

### Step 4: Backend Setup (Required)

Stripe requires a backend to create Payment Intents securely. Options:

#### Option A: Supabase Edge Function (Recommended)

Create `/supabase/functions/create-payment-intent/index.ts`:

```typescript
import Stripe from 'https://esm.sh/stripe@14.10.0'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
})

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { amount, currency = 'usd' } = await req.json()

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    })

    return new Response(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
```

Deploy:
```bash
supabase secrets set STRIPE_SECRET_KEY=sk_test_...your_secret_key
supabase functions deploy create-payment-intent
```

### Step 5: Test Payment Flow

1. Use Stripe test cards:
   - Success: `4242 4242 4242 4242`
   - Declined: `4000 0000 0000 0002`
2. Any future expiry date and any 3-digit CVC

### Step 6: Go Live

1. Switch from test keys to live keys
2. Update environment variables
3. Test thoroughly in production mode
4. Enable Stripe webhook endpoints (optional)

---

## Google Calendar Booking

### Prerequisites
- Google Workspace account (for appointment scheduling feature)

### Step 1: Set Up Google Calendar Appointment Schedule

1. Go to Google Calendar
2. Click Settings → Appointment schedules
3. Create a new appointment schedule:
   - Duration: 30 minutes
   - Name: "SafeCircle Demo Call"
   - Availability: Set your preferred hours

### Step 2: Get Your Booking Page URL

1. Once created, Google will provide a booking URL
2. It will look like: `https://calendar.google.com/calendar/appointments/schedules/...`

### Step 3: Update Contact Page

Update `/src/app/pages/ContactUs.tsx`:
- Find `YOUR_GOOGLE_CALENDAR_BOOKING_LINK`
- Replace with your actual booking URL

### Alternative: Embed Calendar

If you prefer embedding the calendar directly:

```tsx
<iframe 
  src="YOUR_GOOGLE_CALENDAR_EMBED_URL"
  width="100%"
  height="600"
  frameBorder="0"
/>
```

---

## Testing Checklist

Before going live, test all integrations:

- [ ] Google Analytics tracking fires on page views
- [ ] Microsoft Clarity records sessions
- [ ] Contact form emails arrive at safecircle@bartgeelen.com
- [ ] Stripe test payment succeeds with test card
- [ ] Google Calendar booking link opens correctly
- [ ] All error states display properly
- [ ] Analytics tracks conversions correctly

---

## Support & Resources

- **Supabase Docs**: https://supabase.com/docs
- **Stripe Docs**: https://stripe.com/docs
- **GA4 Docs**: https://support.google.com/analytics
- **Clarity Docs**: https://learn.microsoft.com/en-us/clarity/
- **Resend Docs**: https://resend.com/docs

---

## Security Notes

1. **Never commit API keys** to version control
2. **Use environment variables** for all secrets
3. **Enable Stripe webhooks** for production
4. **Keep Supabase Row Level Security** enabled
5. **Regularly rotate API keys**
6. **Monitor usage** to avoid unexpected charges
