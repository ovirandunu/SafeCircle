'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import TrustedContacts from '@/components/pages/TrustedContacts';
import { trackPageView } from '@/lib/tracking';

export default function TrustedContactsPage() {
  const pathname = usePathname();
  useEffect(() => { trackPageView(pathname); }, [pathname]);
  return <TrustedContacts />;
}
