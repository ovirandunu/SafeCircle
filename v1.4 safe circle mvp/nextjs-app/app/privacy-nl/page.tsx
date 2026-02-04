'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import PrivacyPolicyNL from '@/components/pages/PrivacyPolicyNL';
import { trackPageView } from '@/lib/tracking';

export default function PrivacyNLPage() {
  const pathname = usePathname();
  useEffect(() => { trackPageView(pathname); }, [pathname]);
  return <PrivacyPolicyNL />;
}
