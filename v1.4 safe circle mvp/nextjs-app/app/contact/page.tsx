'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ContactUs from '@/components/pages/ContactUs';
import { trackPageView } from '@/lib/tracking';

export default function ContactPage() {
  const pathname = usePathname();
  useEffect(() => { trackPageView(pathname); }, [pathname]);
  return <ContactUs />;
}
