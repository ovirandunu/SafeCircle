import type { Metadata } from 'next';
import './globals.css';
import { I18nProvider } from '@/components/providers/I18nProvider';
import { AnalyticsProvider } from '@/components/providers/AnalyticsProvider';
import { CookieConsentWrapper } from '@/components/CookieConsentWrapper';

export const metadata: Metadata = {
  title: 'SafeCircle - Wellness Monitoring for Independent Living',
  description: 'SafeCircle provides wellness monitoring and emergency contact management for people living independently. Stay connected with peace of mind.',
  keywords: ['wellness monitoring', 'independent living', 'safety network', 'emergency contacts', 'elderly care', 'senior safety'],
  authors: [{ name: 'SafeCircle' }],
  creator: 'SafeCircle',
  publisher: 'SafeCircle',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['nl_NL'],
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://safecircle.com',
    siteName: 'SafeCircle',
    title: 'SafeCircle - Wellness Monitoring for Independent Living',
    description: 'SafeCircle provides wellness monitoring and emergency contact management for people living independently. Stay connected with peace of mind.',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SafeCircle - Your Safety Network',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SafeCircle - Wellness Monitoring for Independent Living',
    description: 'Stay connected and safe with your trusted circle',
    images: ['/assets/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <I18nProvider>
          <AnalyticsProvider>
            {children}
            <CookieConsentWrapper />
          </AnalyticsProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
