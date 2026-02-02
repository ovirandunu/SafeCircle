/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Stripe
  readonly VITE_STRIPE_PUBLISHABLE_KEY: string
  
  // Analytics
  readonly VITE_GA_MEASUREMENT_ID: string
  readonly VITE_CLARITY_PROJECT_ID?: string
  readonly VITE_HOTJAR_ID?: string
  readonly VITE_HOTJAR_VERSION?: string
  
  // Supabase
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
  
  // Application URLs
  readonly VITE_API_URL: string
  readonly VITE_APP_URL: string
  
  // Google Calendar
  readonly VITE_GOOGLE_CALENDAR_BOOKING_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
