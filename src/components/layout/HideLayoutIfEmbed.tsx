'use client';

import { useSearchParams } from 'next/navigation';

export function HideLayoutIfEmbed() {
  const searchParams = useSearchParams();
  const isEmbed = searchParams.get('embed') === 'true';

  if (!isEmbed) return null;

  return (
    <style suppressHydrationWarning>{`
      header, footer, .cookie-consent {
        display: none !important;
      }
      main.layout-main-content {
        padding: 1rem !important;
        background: var(--background) !important;
      }
    `}</style>
  );
}
