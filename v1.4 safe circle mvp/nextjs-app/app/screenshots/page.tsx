'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AppScreenshots from '@/components/pages/AppScreenshots';
import { trackPageView } from '@/lib/tracking';

export default function Screenshots() {
  const pathname = usePathname();
  useEffect(() => { trackPageView(pathname); }, [pathname]);
  return <AppScreenshots />;
}
