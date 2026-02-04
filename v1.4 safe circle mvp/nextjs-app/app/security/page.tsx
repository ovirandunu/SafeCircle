'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Security from '@/components/pages/Security';
import { trackPageView } from '@/lib/tracking';

export default function SecurityPage() {
  const pathname = usePathname();
  useEffect(() => { trackPageView(pathname); }, [pathname]);
  return <Security />;
}
