'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LiveAlonePage from '@/components/pages/LiveAlonePage_NEW';
import { trackPageView } from '@/lib/tracking';

export default function HomePage() {
  const pathname = usePathname();

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return <LiveAlonePage />;
}
