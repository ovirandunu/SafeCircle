'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import SmartDevicesNL from '@/components/pages/SmartDevicesNL';
import { trackPageView } from '@/lib/tracking';

export default function SmartDevicesNLPage() {
  const pathname = usePathname();
  useEffect(() => { trackPageView(pathname); }, [pathname]);
  return <SmartDevicesNL />;
}
