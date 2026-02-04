'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import TermsOfServiceNL from '@/components/pages/TermsOfServiceNL';
import { trackPageView } from '@/lib/tracking';

export default function TermsNLPage() {
  const pathname = usePathname();
  useEffect(() => { trackPageView(pathname); }, [pathname]);
  return <TermsOfServiceNL />;
}
