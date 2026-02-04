'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import HelpCenterNL from '@/components/pages/HelpCenterNL';
import { trackPageView } from '@/lib/tracking';

export default function HelpCenterNLPage() {
  const pathname = usePathname();
  useEffect(() => { trackPageView(pathname); }, [pathname]);
  return <HelpCenterNL />;
}
