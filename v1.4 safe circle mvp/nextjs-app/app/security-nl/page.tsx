'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import SecurityNL from '@/components/pages/SecurityNL';
import { trackPageView } from '@/lib/tracking';

export default function SecurityNLPage() {
  const pathname = usePathname();
  useEffect(() => { trackPageView(pathname); }, [pathname]);
  return <SecurityNL />;
}
