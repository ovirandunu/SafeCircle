# Environment Variables Quick Reference

## How to Get Each API Key/Value

### 🔐 Stripe

| Variable | Where to Get It | Steps |
|----------|-----------------|-------|
| `VITE_STRIPE_PUBLISHABLE_KEY` | [Stripe Dashboard > API Keys](https://dashboard.stripe.com/apikeys) | 1. Login to Stripe<br>2. Click "Developers" > "API keys"<br>3. Copy "Publishable key" (starts with `pk_test_` or `pk_live_`) |
| `STRIPE_SECRET_KEY` | [Stripe Dashboard > API Keys](https://dashboard.stripe.com/apikeys) | 1. Same location as above<br>2. Copy "Secret key" (starts with `sk_test_` or `sk_live_`)<br>3. **⚠️ Never share this key!** |
| `STRIPE_PRICE_*` | [Stripe Dashboard > Products](https://dashboard.stripe.com/products) | 1. Create a product<br>2. Add recurring prices (monthly/yearly)<br>3. Copy Price ID (starts with `price_`) |
| `STRIPE_WEBHOOK_SECRET` | [Stripe Dashboard > Webhooks](https://dashboard.stripe.com/webhooks) | **Development:**<br>Run `stripe listen --forward-to localhost:3001/api/webhooks/stripe`<br><br>**Production:**<br>1. Add endpoint in dashboard<br>2. Copy "Signing secret" (starts with `whsec_`) |

---

### 🗄️ Database

| Variable | Where to Get It | Steps |
|----------|-----------------|-------|
| `DATABASE_URL` | Your PostgreSQL provider | **Local:**<br>`postgresql://postgres:password@localhost:5432/safecircle`<br><br>**Supabase:**<br>1. [Create project](https://supabase.com)<br>2. Settings > Database<br>3. Copy "Connection string"<br><br>**Neon/Railway:**<br>Similar - copy connection string from dashboard |

---

### 📊 Analytics

| Variable | Where to Get It | Steps |
|----------|-----------------|-------|
| `VITE_GA_MEASUREMENT_ID` | [Google Analytics](https://analytics.google.com) | 1. Create GA4 property<br>2. Admin > Data Streams<br>3. Select your stream<br>4. Copy "Measurement ID" (format: `G-XXXXXXXXXX`) |
| `VITE_CLARITY_PROJECT_ID` | [Microsoft Clarity](https://clarity.microsoft.com) | 1. Create project<br>2. Settings > Setup<br>3. Copy Project ID |
| `VITE_HOTJAR_ID` | [Hotjar](https://insights.hotjar.com) | 1. Create site<br>2. Install tracking code section<br>3. Copy Site ID (number only) |
| `VITE_HOTJAR_VERSION` | Hotjar setup | Usually `6` (same location as above) |

---

### 📧 Supabase & Email

| Variable | Where to Get It | Steps |
|----------|-----------------|-------|
| `VITE_SUPABASE_URL` | [Supabase Dashboard](https://app.supabase.com) | 1. Select project<br>2. Settings > API<br>3. Copy "Project URL" |
| `VITE_SUPABASE_ANON_KEY` | Same location | Copy "anon/public" key |
| `RESEND_API_KEY` | [Resend Dashboard](https://resend.com/api-keys) | 1. Create account<br>2. API Keys section<br>3. Create new key<br>4. Copy (starts with `re_`) |
| `CONTACT_EMAIL_TO` | Your choice | Your contact email where form submissions go |

---

### 🔧 Application URLs

| Variable | Default | Production Value |
|----------|---------|------------------|
| `VITE_API_URL` | `http://localhost:3001` | Your backend URL (e.g., `https://api.safecircle.com`) |
| `VITE_APP_URL` | `http://localhost:5173` | Your frontend URL (e.g., `https://safecircle.com`) |
| `NODE_ENV` | `development` | `production` |

---

### 📅 Optional Services

| Variable | Where to Get It | Steps |
|----------|-----------------|-------|
| `VITE_GOOGLE_CALENDAR_BOOKING_URL` | Google Calendar | 1. Create appointment schedule<br>2. Copy booking page URL |

---

### 🔐 Security (Generate Random Strings)

| Variable | How to Generate |
|----------|-----------------|
| `JWT_SECRET` | `openssl rand -base64 32` or [generate online](https://generate-secret.vercel.app/32) |
| `SESSION_SECRET` | Same as above (generate different string) |

---

## 🚀 Quick Start

1. **Copy environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Fill in required values** (minimum to get started):
   ```bash
   # Stripe (get from dashboard)
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   
   # Database (local or cloud)
   DATABASE_URL=postgresql://...
   
   # API URLs (use defaults for local dev)
   VITE_API_URL=http://localhost:3001
   VITE_APP_URL=http://localhost:5173
   ```

3. **Optional but recommended:**
   ```bash
   # Analytics
   VITE_GA_MEASUREMENT_ID=G-...
   
   # Supabase (for contact form)
   VITE_SUPABASE_URL=https://...
   VITE_SUPABASE_ANON_KEY=...
   ```

4. **Install dependencies and start:**
   ```bash
   npm install
   npm start
   ```

---

## ⚠️ Important Notes

- **Never commit `.env`** - It's already in `.gitignore`
- **Use test keys in development** - `pk_test_` and `sk_test_`
- **Switch to live keys in production** - `pk_live_` and `sk_live_`
- **Keep secret keys secret** - Never share or expose them
- **Restart servers** after changing `.env` variables

---

## 🆘 Need Help?

- Can't find where to get a key? Check the links in the table above
- Having issues? See `STRIPE_SETUP_GUIDE.md` for detailed troubleshooting
- Still stuck? Check the console/terminal for error messages
