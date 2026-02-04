import { Metadata } from 'next';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  language?: string;
}

export function generateMetadata({
  title,
  description,
  image,
  url,
  language = 'en'
}: MetaTagsProps): Metadata {
  // Default meta content
  const defaultTitle = language === 'nl' 
    ? 'SafeCircle - Welzijnsmonitoring voor Zelfstandig Wonen'
    : 'SafeCircle - Wellness Monitoring for Independent Living';
  
  const defaultDescription = language === 'nl'
    ? 'SafeCircle biedt welzijnsmonitoring en beheer van contactpersonen voor mensen die zelfstandig wonen. Blijf verbonden met gemoedsrust.'
    : 'SafeCircle provides wellness monitoring and emergency contact management for people living independently. Stay connected with peace of mind.';
  
  const defaultImage = '/assets/og-image.jpg';
  
  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalImage = image || defaultImage;
  const finalUrl = url || process.env.NEXT_PUBLIC_APP_URL || 'https://safecircle.com';
  
  return {
    title: finalTitle,
    description: finalDescription,
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: finalUrl,
      siteName: 'SafeCircle',
      images: [
        {
          url: finalImage,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
      locale: language === 'nl' ? 'nl_NL' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: finalDescription,
      images: [finalImage],
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
  };
}

// Default metadata export
export const defaultMetadata = generateMetadata({});
