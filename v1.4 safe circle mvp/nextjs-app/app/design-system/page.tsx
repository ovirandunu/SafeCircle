'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import DesignSystem from '@/components/pages/DesignSystem';
import { trackPageView } from '@/lib/tracking';

export default function DesignSystemPage() {
  const pathname = usePathname();
  useEffect(() => { trackPageView(pathname); }, [pathname]);
  return <DesignSystem />;
}
