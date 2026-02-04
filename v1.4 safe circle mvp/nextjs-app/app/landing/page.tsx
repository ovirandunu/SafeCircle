'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LandingPage from '@/components/pages/LandingPage';
import { trackPageView } from '@/lib/tracking';

export default function Landing() {
  const pathname = usePathname();
  useEffect(() => { trackPageView(pathname); }, [pathname]);
  return <LandingPage />;
}
