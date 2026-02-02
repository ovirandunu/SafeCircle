# SafeCircle Tracking Events Reference

## Quick Overview

All events are tracked **server-side for everyone** (no consent needed).
Events are **also sent to Google Analytics** when analytical cookies are accepted.

---

## Event List

### 1. `page_view`
**When:** Every page load/navigation
**Data captured:**
```json
{
  "event": "page_view",
  "page": "/checkout",
  "sessionId": "abc123...",
  "timestamp": "2025-01-10T12:00:00.000Z",
  "url": "https://safecircle.com/checkout",
  "referrer": "https://google.com"
}
```

---

### 2. `checkout_plan_clicked`
**When:** User clicks "Get Started" on pricing page OR selects plan in checkout
**Data captured:**
```json
{
  "event": "checkout_plan_clicked",
  "plan": "full",
  "billingPeriod": "yearly",
  "source": "pricing",
  "sessionId": "abc123...",
  "timestamp": "2025-01-10T12:00:00.000Z"
}
```

**Source values:**
- `"pricing"` - From main pricing section
- `"checkout"` - Changed plan in checkout flow

---

### 3. `checkout_step_1_viewed`
**When:** User lands on checkout page (plan selection step)
**Data captured:**
```json
{
  "event": "checkout_step_1_viewed",
  "step": 1,
  "plan": "full",
  "billingPeriod": "yearly",
  "sessionId": "abc123...",
  "timestamp": "2025-01-10T12:00:00.000Z"
}
```

**This is your "checkout started" metric!**

---

### 4. `checkout_step_2_viewed`
**When:** User clicks "Continue" from step 1 (email entry step)
**Data captured:**
```json
{
  "event": "checkout_step_2_viewed",
  "step": 2,
  "plan": "full",
  "billingPeriod": "yearly",
  "sessionId": "abc123...",
  "timestamp": "2025-01-10T12:00:00.000Z"
}
```

---

### 5. `checkout_email_submitted`
**When:** User enters valid email and clicks "Continue to Payment"
**Data captured:**
```json
{
  "event": "checkout_email_submitted",
  "emailProvided": true,
  "sessionId": "abc123...",
  "timestamp": "2025-01-10T12:00:00.000Z"
}
```

**Note:** Email address is NOT tracked (privacy). Only a flag that email was provided.

---

### 6. `checkout_step_3_viewed`
**When:** User lands on payment page
**Data captured:**
```json
{
  "event": "checkout_step_3_viewed",
  "step": 3,
  "plan": "full",
  "billingPeriod": "yearly",
  "sessionId": "abc123...",
  "timestamp": "2025-01-10T12:00:00.000Z"
}
```

---

### 7. `checkout_payment_attempted`
**When:** User clicks "Complete Purchase" button
**Data captured:**
```json
{
  "event": "checkout_payment_attempted",
  "plan": "full",
  "billingPeriod": "yearly",
  "amount": 48,
  "sessionId": "abc123...",
  "timestamp": "2025-01-10T12:00:00.000Z"
}
```

**This happens BEFORE payment processing**

---

### 8. `checkout_payment_completed`
**When:** Payment is successfully processed
**Data captured:**
```json
{
  "event": "checkout_payment_completed",
  "plan": "full",
  "billingPeriod": "yearly",
  "amount": 48,
  "value": 48,
  "currency": "EUR",
  "sessionId": "abc123...",
  "timestamp": "2025-01-10T12:00:00.000Z"
}
```

**This is your CONVERSION event!**

Also triggers Google Ads conversion tracking (if marketing cookies accepted).

---

### 9. `cta_clicked`
**When:** User clicks any major CTA button
**Data captured:**
```json
{
  "event": "cta_clicked",
  "ctaName": "hero_get_started",
  "location": "homepage_hero",
  "sessionId": "abc123...",
  "timestamp": "2025-01-10T12:00:00.000Z"
}
```

**Currently not implemented** but available if you want to track hero/footer CTAs.

---

## Funnel Visualization

```
👥 1000 Visitors
    ↓ (page_view)
    
🛒 180 Checkout Started (18%)
    ↓ (checkout_step_1_viewed)
    ↓ (checkout_plan_clicked)
    
📧 95 Email Submitted (53% of checkout)
    ↓ (checkout_step_2_viewed)
    ↓ (checkout_email_submitted)
    
💳 68 Payment Attempted (72% of emails)
    ↓ (checkout_step_3_viewed)
    ↓ (checkout_payment_attempted)
    
✅ 42 Conversions (4.2% overall, 62% of attempts)
    ↓ (checkout_payment_completed)
```

---

## Analytics Queries

### Count unique visitors
```sql
SELECT COUNT(DISTINCT session_id) 
FROM tracking_events 
WHERE event = 'page_view';
```

### Checkout funnel
```sql
SELECT 
  'Visitors' as stage, 
  COUNT(DISTINCT session_id) as count
FROM tracking_events 
WHERE event = 'page_view'

UNION ALL

SELECT 
  'Checkout Started' as stage, 
  COUNT(DISTINCT session_id) as count
FROM tracking_events 
WHERE event = 'checkout_step_1_viewed'

UNION ALL

SELECT 
  'Email Submitted' as stage, 
  COUNT(DISTINCT session_id) as count
FROM tracking_events 
WHERE event = 'checkout_email_submitted'

UNION ALL

SELECT 
  'Payment Attempted' as stage, 
  COUNT(DISTINCT session_id) as count
FROM tracking_events 
WHERE event = 'checkout_payment_attempted'

UNION ALL

SELECT 
  'Conversions' as stage, 
  COUNT(DISTINCT session_id) as count
FROM tracking_events 
WHERE event = 'checkout_payment_completed';
```

### Plan preferences
```sql
SELECT 
  plan,
  COUNT(*) as selections,
  ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (), 2) as percentage
FROM tracking_events
WHERE event = 'checkout_plan_clicked'
GROUP BY plan;
```

### Monthly vs Yearly preference
```sql
SELECT 
  billingPeriod as billing,
  COUNT(*) as selections,
  ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (), 2) as percentage
FROM tracking_events
WHERE event = 'checkout_plan_clicked'
GROUP BY billingPeriod;
```

### Revenue by day
```sql
SELECT 
  DATE(timestamp) as date,
  COUNT(*) as conversions,
  SUM(amount) as revenue,
  AVG(amount) as avg_order_value
FROM tracking_events
WHERE event = 'checkout_payment_completed'
GROUP BY DATE(timestamp)
ORDER BY date DESC;
```

### Traffic sources
```sql
SELECT 
  CASE 
    WHEN referrer LIKE '%google%' THEN 'Google'
    WHEN referrer LIKE '%facebook%' THEN 'Facebook'
    WHEN referrer LIKE '%linkedin%' THEN 'LinkedIn'
    WHEN referrer = '' THEN 'Direct'
    ELSE 'Other'
  END as source,
  COUNT(DISTINCT session_id) as visitors
FROM tracking_events
WHERE event = 'page_view'
GROUP BY source
ORDER BY visitors DESC;
```

---

## Google Analytics Setup

### Custom Events in GA4

All events are automatically sent to GA4 when analytical cookies are accepted.

**To view in GA4:**
1. Go to Reports > Engagement > Events
2. Look for custom events starting with `checkout_`
3. Create custom funnels under Explore

### Recommended GA4 Funnel

Create a funnel exploration with these steps:
1. `page_view` (any page)
2. `checkout_plan_clicked`
3. `checkout_step_1_viewed`
4. `checkout_email_submitted`
5. `checkout_payment_attempted`
6. `checkout_payment_completed`

This will show you exactly where users drop off.

---

## Privacy Notes

### What's tracked WITHOUT consent:
- Anonymous session IDs (sessionStorage, not cookies)
- Funnel progression events
- Page URLs
- Referrer URLs
- Plan/billing selections
- Anonymous counts

### What's NOT tracked without consent:
- User identity
- Email addresses (only a flag)
- Payment details
- Cross-session behavior
- Third-party cookies

### What REQUIRES consent (analytical cookies):
- Google Analytics tracking
- Hotjar recordings/heatmaps
- Cross-session attribution
- Detailed user journeys

---

## Testing Checklist

✅ Open DevTools Console
✅ Navigate site and watch for `📊 Server Track:` messages
✅ Accept cookies and verify `📈 GA Track:` messages appear
✅ Reject cookies and verify GA does NOT track
✅ Complete checkout flow and verify all 8 steps track
✅ Check server logs for received events
✅ Query database/file to verify data is stored

---

## Need More Events?

You can easily add more tracking by importing the track function:

```typescript
import { track } from '../../utils/tracking';

// Track any custom event
track('custom_event_name', {
  customData: 'value',
  userId: '123' // only if you have consent!
});
```

**Remember:** Server-side tracking is consent-free, but be mindful of privacy!
