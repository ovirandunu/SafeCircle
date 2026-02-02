# Testing Your Tracking Setup

## Quick Test (2 minutes)

### 1. Start the Tracking Server

```bash
# In a new terminal
node server-tracking-example.js
```

You should see:
```
📊 Tracking server running on port 3001
Endpoints:
  POST /api/track - Receive tracking events
  GET  /api/analytics/funnel - View funnel metrics
  GET  /api/analytics/export-csv - Export data as CSV
```

### 2. Open Your Website

```bash
# In your project terminal
npm run dev
```

### 3. Test Without Cookie Consent

1. Open `http://localhost:5173` in **Incognito mode**
2. Open **DevTools** (F12) → **Console** tab
3. Click **"Reject All"** on the cookie banner
4. Navigate to different pages

**What you should see in Console:**
```
📊 Server Track: page_view { page: "/", ... }
```

**What you should NOT see:**
```
📈 GA Track: ... (This should only appear with consent)
```

5. Check the server terminal - you should see:
```
📊 Tracked: page_view (Session: 1736506800000-abc123)
```

### 4. Test With Cookie Consent

1. Open a **new Incognito window**
2. Open DevTools → Console
3. Click **"Accept All"** on the cookie banner
4. Navigate to different pages

**What you should see in Console:**
```
📈 Google Analytics initialized
📊 Server Track: page_view { page: "/", ... }
📈 GA Track: page_view { page: "/", ... }
```

5. Both server AND Google Analytics should be tracking

### 5. Test Complete Checkout Flow

1. Open Incognito + DevTools Console
2. Accept all cookies
3. Go through the full checkout:

**Expected Console Output:**

```
Step 1: Homepage loads
📊 Server Track: page_view

Step 2: Click "Get Started" button
📊 Server Track: checkout_plan_clicked
📈 GA Track: checkout_plan_clicked

Step 3: Checkout page loads
📊 Server Track: checkout_step_1_viewed
📈 GA Track: checkout_step_1_viewed

Step 4: Select a different plan
📊 Server Track: checkout_plan_clicked
📈 GA Track: checkout_plan_clicked

Step 5: Click "Continue to Signup"
📊 Server Track: checkout_step_2_viewed
📈 GA Track: checkout_step_2_viewed

Step 6: Enter email and click "Continue to Payment"
📊 Server Track: checkout_email_submitted
📈 GA Track: checkout_email_submitted

Step 7: Payment page loads
📊 Server Track: checkout_step_3_viewed
📈 GA Track: checkout_step_3_viewed

Step 8: Click "Complete Purchase"
📊 Server Track: checkout_payment_attempted
📊 Server Track: checkout_payment_completed
📈 GA Track: checkout_payment_attempted
📈 GA Track: checkout_payment_completed
```

### 6. View the Data

#### Option A: API Endpoint
```bash
curl http://localhost:3001/api/analytics/funnel
```

Expected response:
```json
{
  "totalVisitors": 2,
  "checkoutStarted": 1,
  "planClicked": 2,
  "emailSubmitted": 1,
  "paymentAttempted": 1,
  "conversions": 1,
  "checkoutRate": "50.00%",
  "emailRate": "100.00%",
  "paymentRate": "100.00%",
  "conversionRate": "50.00%"
}
```

#### Option B: Dashboard
1. Open `analytics-dashboard-example.html` in your browser
2. You should see:
   - Total Visitors: 2
   - Checkout Started: 1
   - Email Captured: 1
   - Conversions: 1
   - Funnel visualization with bars

#### Option C: Raw Data File
```bash
cat tracking-data.json
```

You'll see all events in JSON format.

---

## Troubleshooting

### ❌ No console messages

**Problem:** Nothing appears in console

**Check:**
- [ ] Is DevTools Console tab open?
- [ ] Are you filtering console messages? (Clear filters)
- [ ] Try refreshing the page

### ❌ "Failed to fetch" errors

**Problem:** `POST http://localhost:3001/api/track net::ERR_CONNECTION_REFUSED`

**Solution:**
- [ ] Is tracking server running? Check terminal
- [ ] Is it running on port 3001?
- [ ] Restart the server: `node server-tracking-example.js`

### ❌ GA not initializing

**Problem:** No "Google Analytics initialized" message

**Check:**
- [ ] Did you accept analytical cookies?
- [ ] Is the GA ID set in `/src/app/App.tsx`?
- [ ] Try with "Accept All" cookies

### ❌ Events tracked twice

**Problem:** Each event appears 2x in console

**Explanation:** This is normal in development (React StrictMode)
- Won't happen in production build
- Server still receives it only once
- Not a problem

### ❌ CORS errors

**Problem:** "CORS policy: No 'Access-Control-Allow-Origin' header"

**Solution:**
The example server already has CORS enabled. If you're using a different backend:
```javascript
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true
}));
```

---

## Advanced Testing

### Test Cookie Consent Changes

1. Accept all cookies
2. Navigate through site (see GA tracking)
3. Open cookie settings (footer link)
4. Disable analytical cookies
5. Navigate more (only server tracking should work now)

### Test Session Persistence

1. Navigate to homepage
2. Note your session ID in console logs
3. Navigate to checkout
4. Session ID should be the same
5. Close tab
6. Open new tab → New session ID

### Test Different Plans

1. Go to pricing page
2. Click "Get Started" on Basic plan
3. Check console: `plan: "basic"`
4. Change to Full plan in checkout
5. Check console: `plan: "full"`

### Test Billing Periods

1. On pricing page, toggle to "Yearly"
2. Click "Get Started"
3. Check console: `billingPeriod: "yearly"`
4. In checkout, verify yearly pricing is tracked

---

## Validation Checklist

Before launching to production:

### Server Tracking
- [ ] Server receives events when cookies rejected
- [ ] Events stored in database/file
- [ ] API endpoint returns correct funnel data
- [ ] Session IDs are generated and consistent
- [ ] No personal data in server logs

### Google Analytics (Optional)
- [ ] Only initializes with analytical consent
- [ ] Events appear in GA Real-Time reports
- [ ] No initialization when cookies rejected
- [ ] Measurement ID is correct

### Cookie Consent
- [ ] Banner appears on first visit
- [ ] "Accept All" enables GA
- [ ] "Reject All" disables GA
- [ ] Settings persist across pages
- [ ] Can change settings later

### Complete Funnel
- [ ] All 8 events track correctly
- [ ] Data includes plan and billing period
- [ ] Revenue tracked on conversion
- [ ] Dashboard shows accurate data

### Privacy
- [ ] Email addresses NOT stored in tracking
- [ ] Session IDs are anonymous
- [ ] Works without cookies
- [ ] Consent respected

---

## Production Testing

Before your Google Ads campaign:

1. **Deploy your site with tracking server**
2. **Test on production URL:**
   - [ ] Server endpoint accessible
   - [ ] HTTPS works
   - [ ] CORS configured for your domain
3. **Verify Google Analytics:**
   - [ ] Real-Time reports show events
   - [ ] Events appear within 24 hours in main reports
4. **Test conversion tracking:**
   - [ ] Complete a real purchase
   - [ ] Verify it appears in GA
   - [ ] Check Google Ads conversions (if set up)
5. **Monitor for 48 hours:**
   - [ ] Check for errors in server logs
   - [ ] Verify data accuracy
   - [ ] Test from different devices

---

## Success Criteria

✅ You're ready to launch when:

1. **Server tracking works WITHOUT consent**
   - Events appear in server logs
   - API returns funnel data
   - Dashboard visualizes correctly

2. **Google Analytics works WITH consent**
   - Initializes when accepted
   - Doesn't initialize when rejected
   - Events appear in GA

3. **Complete funnel tracks**
   - All 8 events fire correctly
   - Data includes necessary context
   - No errors in console

4. **Privacy is respected**
   - No tracking of personal data
   - Consent is respected
   - Works without cookies

---

## Quick Reference

### Console Messages

| Message | Meaning |
|---------|---------|
| `📊 Server Track:` | Event sent to your server |
| `📈 GA Track:` | Event sent to Google Analytics |
| `📈 Google Analytics initialized` | GA loaded successfully |
| `🔥 Hotjar initialized` | Hotjar loaded successfully |
| `[Cookie Consent] ...` | Cookie system logs |

### Key URLs

- Frontend: `http://localhost:5173`
- Tracking Server: `http://localhost:3001`
- Funnel API: `http://localhost:3001/api/analytics/funnel`
- CSV Export: `http://localhost:3001/api/analytics/export-csv`
- Dashboard: `file:///.../analytics-dashboard-example.html`

### Common Commands

```bash
# Start dev server
npm run dev

# Start tracking server
node server-tracking-example.js

# View funnel data
curl http://localhost:3001/api/analytics/funnel | json_pp

# Export to CSV
curl http://localhost:3001/api/analytics/export-csv > data.csv

# View raw data
cat tracking-data.json | json_pp
```

---

## Next Steps After Testing

1. ✅ **Server works locally** → Deploy to production
2. ✅ **Tracking is accurate** → Add Google Analytics ID
3. ✅ **Privacy respected** → Launch to real users
4. ✅ **Funnel complete** → Start Google Ads campaign
5. ✅ **Data flowing** → Monitor and optimize

Happy testing! 🚀
