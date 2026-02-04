'use client';

import { useEffect, Suspense } from 'react';
import { usePathname } from 'next/navigation';
import Checkout from '@/components/pages/Checkout';
import { trackPageView } from '@/lib/tracking';

function CheckoutContent() {
  return <Checkout />;
}

export default function CheckoutPage() {
  const pathname = usePathname();
  useEffect(() => { trackPageView(pathname); }, [pathname]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
