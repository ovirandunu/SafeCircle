# SafeCircle Next.js - Quick Start Guide

## 🚀 Rapid Deployment

### Prerequisites
- Node.js 18+ installed
- PostgreSQL database (local or cloud)
- Stripe account (for payments)

### Option 1: Quick Local Setup (5 minutes)

```bash
# 1. Navigate to Next.js app
cd "c:\Users\ovira\Downloads\SafeCircle\v1.4 safe circle mvp\nextjs-app"

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Copy environment file
cp .env.example .env.local

# 4. Start development server (without database/Stripe for now)
npm run dev
```

Visit http://localhost:3000 to see your app!

### Option 2: Full Setup with Database & Stripe (15 minutes)

```bash
# 1. Install dependencies
npm install --legacy-peer-deps

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values (see below)

# 3. Create database
createdb safecircle

# 4. Run database schema
psql -d safecircle -f database/schema.sql

# 5. Start development server
npm run dev
```

## 🔑 Environment Variables

Edit `.env.local` with these minimum required values:

```env
# Required for development
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key
STRIPE_SECRET_KEY=sk_test_your_key
DATABASE_URL=postgresql://user:pass@localhost:5432/safecircle

# Optional (for full functionality)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 📊 What Works Out of the Box

### ✅ Working Immediately
- All pages and routing
- UI components (buttons, forms, etc.)
- i18n (English/Dutch)
- Responsive design
- Cookie consent banner

### ⚠️ Requires Configuration
- Stripe payments (need API keys)
- Database tracking (need PostgreSQL)
- Analytics (need GA/Hotjar IDs)

## 🔧 Common Commands

```bash
# Development
npm run dev                # Start dev server on :3000

# Production
npm run build             # Build for production
npm start                 # Start production server

# Database
npm run db:setup          # Create database tables

# Validation
npm run check-env         # Check environment variables
```

## 📁 Project Structure Quick Reference

```
nextjs-app/
├── app/                   # Pages & API routes
│   ├── page.tsx          # Homepage (/)
│   ├── checkout/         # /checkout
│   ├── contact/          # /contact
│   └── api/              # Backend API
│       ├── checkout/     # Stripe checkout
│       ├── track/        # Analytics
│       └── webhooks/     # Stripe webhooks
├── components/           # React components
│   ├── pages/           # Page components
│   ├── ui/              # UI components
│   └── providers/       # Context providers
└── lib/                 # Utilities
    ├── tracking.ts      # Analytics
    └── stripe.ts        # Stripe helpers
```

## 🎯 Next Steps

1. **Test the frontend**: Navigate through pages
2. **Configure Stripe**: Add API keys for payments
3. **Set up database**: Run schema for tracking
4. **Deploy**: Push to Vercel/Netlify

## 🆘 Troubleshooting

### "Module not found" errors
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Environment variables not updating
```bash
# Restart dev server after changing .env.local
# Press Ctrl+C, then npm run dev
```

### Stripe checkout not working
- Check NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is set
- Verify it starts with `pk_test_` or `pk_live_`
- Check browser console for errors

## 📚 Full Documentation

See [README.md](README.md) for complete documentation including:
- Architecture comparison (old vs new)
- API route details
- Deployment guides
- Security best practices
