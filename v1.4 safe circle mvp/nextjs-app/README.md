# SafeCircle Next.js Migration

This is a complete migration of the SafeCircle application from React + Vite + Express to **Next.js 15** with App Router, combining both frontend and backend in a single application.

## 🏗️ Architecture

**Before (React + Vite + Express):**
- Frontend: React 18 + Vite + React Router
- Backend: Separate Express.js server (server.js)
- Database: PostgreSQL
- Build: Separate frontend/backend processes

**After (Next.js 15):**
- Frontend: Next.js App Router with React Server Components
- Backend: Next.js API Routes (built-in)
- Database: PostgreSQL (unchanged)
- Build: Single Next.js build

## 📁 Project Structure

```
nextjs-app/
├── app/
│   ├── layout.tsx                 # Root layout with providers
│   ├── page.tsx                   # Homepage (/)
│   ├── globals.css                # Global styles + Tailwind
│   ├── api/                       # Backend API routes
│   │   ├── checkout/
│   │   │   └── create-session/
│   │   │       └── route.ts       # Stripe checkout session
│   │   ├── webhooks/
│   │   │   └── stripe/
│   │   │       └── route.ts       # Stripe webhooks
│   │   ├── track/
│   │   │   └── route.ts           # Analytics tracking
│   │   └── health/
│   │       └── route.ts           # Health check
│   ├── [route]/
│   │   └── page.tsx               # Dynamic route pages
│   └── ...                        # Other page routes
├── components/
│   ├── providers/
│   │   ├── I18nProvider.tsx       # i18n context
│   │   └── AnalyticsProvider.tsx  # Analytics initialization
│   ├── pages/                     # Page components (from old src/app/pages)
│   ├── ui/                        # UI components
│   └── CookieConsentWrapper.tsx   # Cookie consent banner
├── lib/
│   ├── tracking.ts                # Analytics & tracking utilities
│   ├── stripe.ts                  # Stripe client utilities
│   └── cookieConsent.ts           # Cookie management
├── public/
│   ├── locales/                   # i18n translation files
│   │   ├── en.json
│   │   └── nl.json
│   └── assets/                    # Static assets
├── database/
│   └── schema.sql                 # PostgreSQL schema
├── .env.example                   # Environment variables template
├── next.config.mjs                # Next.js configuration
├── tailwind.config.ts             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies & scripts
```

## 🚀 Getting Started

### 1. Install Dependencies

```bash
cd nextjs-app
npm install --legacy-peer-deps
```

> **Note:** The `--legacy-peer-deps` flag is required because some UI libraries haven't updated peer dependencies for React 19 yet. This is safe and doesn't affect functionality.

### 2. Set Up Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in your actual values:
- **Stripe Keys**: Get from [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
- **Database URL**: Your PostgreSQL connection string
- **Analytics IDs**: Google Analytics, Hotjar, Clarity (optional)

### 3. Set Up Database

```bash
# Create database
createdb safecircle

# Run schema
psql -d safecircle -f database/schema.sql
```

### 4. Create Stripe Products

In [Stripe Dashboard](https://dashboard.stripe.com/products):
1. Create "SafeCircle Basic" and "SafeCircle Full" products
2. Create monthly and yearly prices for each
3. Copy price IDs to `.env.local`

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🔄 What Changed

### Frontend Changes

| Old (Vite) | New (Next.js) | Notes |
|------------|---------------|-------|
| `src/main.tsx` | `app/layout.tsx` | Root component with providers |
| `src/app/App.tsx` | `app/page.tsx` + routes | Router moved to file-based routing |
| `src/app/pages/*.tsx` | `app/[route]/page.tsx` | Each page is now a route |
| `src/app/components/*` | `components/*` | Component organization |
| `src/utils/*` | `lib/*` | Utility functions |
| `import.meta.env.VITE_*` | `process.env.NEXT_PUBLIC_*` | Environment variables |
| React Router | Next.js Router | `useNavigate()` → `useRouter()` |
| `<Link>` from react-router | `<Link>` from next/link | Different API |

### Backend Changes

| Old (Express) | New (Next.js) | Notes |
|---------------|---------------|-------|
| `server.js` | `app/api/*/route.ts` | API Routes |
| `app.post('/api/checkout/create-session')` | `app/api/checkout/create-session/route.ts` → `POST` function | |
| `app.post('/api/webhooks/stripe')` | `app/api/webhooks/stripe/route.ts` → `POST` function | |
| `app.post('/api/track')` | `app/api/track/route.ts` → `POST` function | |
| `app.get('/health')` | `app/api/health/route.ts` → `GET` function | |
| Express middleware | Next.js middleware | Different pattern |
| Port 3001 (backend) + 5173 (frontend) | Port 3000 (both) | Single server |

### Environment Variables

| Old (Vite) | New (Next.js) |
|------------|---------------|
| `VITE_STRIPE_PUBLISHABLE_KEY` | `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` |
| `VITE_GA_MEASUREMENT_ID` | `NEXT_PUBLIC_GA_MEASUREMENT_ID` |
| `VITE_API_URL` | (removed - same origin) |
| `VITE_APP_URL` | `NEXT_PUBLIC_APP_URL` |
| All other `VITE_*` | `NEXT_PUBLIC_*` |

## 📝 Migration Checklist

### ✅ Completed

- [x] Next.js 15 project structure created
- [x] API routes for Stripe, tracking, health check
- [x] Database integration (PostgreSQL with pg)
- [x] i18n setup with custom provider
- [x] Analytics setup (GA4, Hotjar, Clarity)
- [x] Cookie consent management
- [x] Environment variable configuration
- [x] Tailwind CSS setup
- [x] TypeScript configuration

### ⏳ To Complete

1. **Copy All Page Components**
   - Copy files from `v1.4 safe circle mvp/src/app/pages/*.tsx`
   - Convert to Next.js pages in `app/[route]/page.tsx`
   - Update imports and navigation

2. **Copy All UI Components**
   - Copy from `v1.4 safe circle mvp/src/app/components/*`
   - Update imports to use Next.js patterns

3. **Copy Import Components**
   - Copy `v1.4 safe circle mvp/src/imports/*` to `components/imports/`

4. **Update Navigation**
   - Replace `react-router-dom` imports with `next/navigation`
   - `useNavigate()` → `useRouter()`
   - `<Link to="">` → `<Link href="">`

5. **Test All Features**
   - Page routing
   - Stripe checkout flow
   - Analytics tracking
   - i18n switching
   - Cookie consent

## 🔧 Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Database setup
npm run db:setup

# Environment check
npm run check-env
```

## 📚 Key Features

### API Routes
- **POST /api/checkout/create-session** - Create Stripe checkout session
- **POST /api/webhooks/stripe** - Handle Stripe webhooks
- **POST /api/track** - Track analytics events
- **GET /api/health** - Health check endpoint

### Frontend Features
- **i18n**: English/Dutch translations
- **Analytics**: GA4, Hotjar, Clarity with cookie consent
- **Payments**: Stripe integration with checkout flow
- **Routing**: File-based routing with dynamic routes
- **Styling**: Tailwind CSS with custom theme

## 🔒 Security

- Environment variables properly scoped (`NEXT_PUBLIC_*` for client)
- Stripe webhook signature verification
- CORS handled by Next.js
- SQL injection prevention with parameterized queries

## 🌍 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Environment variables needed:
- Add all variables from `.env.local` to Vercel dashboard
- Set `DATABASE_URL` to production PostgreSQL
- Configure Stripe webhook endpoint

### Other Platforms

Next.js can deploy to:
- AWS (Amplify, EC2, ECS)
- Google Cloud (Cloud Run, App Engine)
- Azure (App Service)
- DigitalOcean (App Platform)
- Docker containers

## 📖 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Stripe Integration Guide](https://stripe.com/docs/payments/checkout)
- [PostgreSQL with Next.js](https://nextjs.org/docs/app/building-your-application/data-fetching)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🆘 Troubleshooting

### "Module not found" errors
- Check imports use `@/` alias correctly
- Ensure components are in `components/` not `src/`

### Environment variables not working
- Client-side variables MUST start with `NEXT_PUBLIC_`
- Restart dev server after changing `.env.local`

### Stripe webhooks failing locally
- Use Stripe CLI: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`
- Update `STRIPE_WEBHOOK_SECRET` with CLI secret

### Database connection errors
- Verify `DATABASE_URL` format
- Ensure PostgreSQL is running
- Check schema is applied: `npm run db:setup`

## 📞 Support

For issues or questions:
- Check existing documentation
- Review Next.js docs for App Router patterns
- Test API routes with Postman/curl
