"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { MegaFooter } from '@/components/layout/MegaFooter';
import { CookieConsent } from '@/components/layout/CookieConsent';

function WrapperContent({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const isEmbed = searchParams.get('embed') === 'true';

  if (isEmbed) {
    return (
      <main style={{ padding: '1rem', background: 'var(--background)' }}>
        {children}
      </main>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '2rem 0' }}>
        {children}
      </main>
      <CookieConsent />
      <MegaFooter />
    </div>
  );
}

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WrapperContent>{children}</WrapperContent>
    </Suspense>
  );
}
