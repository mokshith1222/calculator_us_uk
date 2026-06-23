import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { OrganizationSchema } from "@/components/seo/StructuredData";
import { MegaFooter } from '@/components/layout/MegaFooter';
import { CookieConsent } from '@/components/layout/CookieConsent';

import { LayoutWrapper } from '@/components/layout/LayoutWrapper';

export const metadata: Metadata = {
  metadataBase: new URL('https://financetoolshub-green.vercel.app'),
  title: {
    default: 'FinanceToolsHub | Professional Financial Calculators',
    template: '%s | FinanceToolsHub'
  },
  description: 'Free, professional-grade financial calculators and guides for mortgages, investing, retirement, and debt payoff.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FinanceToolsHub | Professional Financial Calculators',
    description: 'Free, professional-grade financial calculators and guides for mortgages, investing, retirement, and debt payoff.',
    url: 'https://financetoolshub-green.vercel.app',
    siteName: 'FinanceToolsHub',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FinanceToolsHub Premium Calculators',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FinanceToolsHub | Professional Financial Calculators',
    description: 'Free, professional-grade financial calculators and guides for mortgages, investing, retirement, and debt payoff.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
}

export const viewport = {
  themeColor: '#C4B09E',
}

import { CurrencyProvider } from '@/contexts/CurrencyContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CurrencyProvider>
          <OrganizationSchema />
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </CurrencyProvider>
      </body>
    </html>
  )
}
