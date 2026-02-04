'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import HelpCenter from '@/components/pages/HelpCenter';
import { trackPageView } from '@/lib/tracking';

export default function HelpCenterPage() {
  const pathname = usePathname();
  useEffect(() => { trackPageView(pathname); }, [pathname]);
  return <HelpCenter />;
}
