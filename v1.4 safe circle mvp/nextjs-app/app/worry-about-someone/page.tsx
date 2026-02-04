'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import WorryAboutSomeonePage from '@/components/pages/WorryAboutSomeonePage_REBUILD';
import { trackPageView } from '@/lib/tracking';

export default function WorryAboutSomeone() {
  const pathname = usePathname();
  useEffect(() => { trackPageView(pathname); }, [pathname]);
  return <WorryAboutSomeonePage />;
}
