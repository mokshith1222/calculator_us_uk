'use client';

import { usePathname } from 'next/navigation';

export function CanonicalTag() {
  const pathname = usePathname();
  if (!pathname) return null;

  const baseUrl = 'https://financetoolshub-green.vercel.app';
  const canonicalUrl = `${baseUrl}${pathname}`;

  return <link rel="canonical" href={canonicalUrl} />;
}
