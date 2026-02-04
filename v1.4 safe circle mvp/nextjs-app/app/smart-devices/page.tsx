'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import SmartDevices from '@/components/pages/SmartDevices';
import { trackPageView } from '@/lib/tracking';

export default function SmartDevicesPage() {
  const pathname = usePathname();
  useEffect(() => { trackPageView(pathname); }, [pathname]);
  return <SmartDevices />;
}
