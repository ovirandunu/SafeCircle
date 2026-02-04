'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import PrivacyPolicy from '@/components/pages/PrivacyPolicy';
import { trackPageView } from '@/lib/tracking';

export default function PrivacyPage() {
  const pathname = usePathname();
  useEffect(() => { trackPageView(pathname); }, [pathname]);
  return <PrivacyPolicy />;
}
