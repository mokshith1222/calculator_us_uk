import React, { Suspense } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { MegaFooter } from '@/components/layout/MegaFooter';
import { CookieConsent } from '@/components/layout/CookieConsent';
import { HideLayoutIfEmbed } from '@/components/layout/HideLayoutIfEmbed';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Suspense fallback={null}>
        <HideLayoutIfEmbed />
      </Suspense>
      <Navbar />
      <main className="layout-main-content" style={{ flex: 1, padding: '2rem 0' }}>
        {children}
      </main>
      <CookieConsent />
      <MegaFooter />
    </div>
  );
}
