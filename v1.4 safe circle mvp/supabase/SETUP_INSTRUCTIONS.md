# Supabase Setup Instructions

## Prerequisites
- Supabase account (free tier is sufficient)
- Resend account for email sending (free tier: 3,000 emails/month)

## Step 1: Create Supabase Project
1. Go to https://supabase.com and create a free account
2. Create a new project
3. Note your project URL and anon key

## Step 2: Set Up Resend for Email
1. Go to https://resend.com and create a free account
2. Verify your sending domain (or use their test domain for development)
3. Create an API key
4. Save your Resend API key

## Step 3: Deploy the Edge Function

### Install Supabase CLI
```bash
npm install -g supabase
```

### Login to Supabase
```bash
supabase login
```

### Link to your project
```bash
supabase link --project-ref YOUR_PROJECT_REF
```

### Set the Resend API key as a secret
```bash
supabase secrets set RESEND_API_KEY=your_resend_api_key_here
```

### Deploy the function
```bash
supabase functions deploy send-contact-email
```

## Step 4: Update Your Application

After deploying, you'll get an Edge Function URL like:
```
https://YOUR_PROJECT_REF.supabase.co/functions/v1/send-contact-email
```

Update `/src/app/pages/ContactUs.tsx`:
- Replace `YOUR_SUPABASE_EDGE_FUNCTION_URL` with your actual function URL

## Step 5: Test the Contact Form

1. Fill out the contact form on your website
2. Check your email at safecircle@bartgeelen.com
3. Check Supabase logs if there are any issues:
```bash
supabase functions logs send-contact-email
```

## Troubleshooting

### Function not receiving requests
- Check CORS settings in the Edge Function
- Verify the function URL is correct
- Check browser console for errors

### Emails not sending
- Verify Resend API key is set correctly
- Check Resend dashboard for errors
- Verify sender domain is verified in Resend
- Check Edge Function logs for errors

### Free Tier Limits
- Supabase Free: 500,000 Edge Function requests/month
- Resend Free: 3,000 emails/month, 100 emails/day

## Alternative: Using Supabase's Built-in Email (Easier Setup)

If you don't want to use Resend, you can use Supabase's built-in email service:

```typescript
// In your Edge Function
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
)

// Note: Supabase's built-in email is limited and mainly for auth emails
// Resend is recommended for production contact forms
```
