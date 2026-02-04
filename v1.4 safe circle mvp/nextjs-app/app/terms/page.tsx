'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import TermsOfService from '@/components/pages/TermsOfService';
import { trackPageView } from '@/lib/tracking';

export default function TermsPage() {
  const pathname = usePathname();
  useEffect(() => { trackPageView(pathname); }, [pathname]);
  return <TermsOfService />;
}
