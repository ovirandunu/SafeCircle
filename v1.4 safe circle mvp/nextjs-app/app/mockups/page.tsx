'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import MockupsPage from '@/components/pages/MockupsPage';
import { trackPageView } from '@/lib/tracking';

export default function Mockups() {
  const pathname = usePathname();
  useEffect(() => { trackPageView(pathname); }, [pathname]);
  return <MockupsPage />;
}
