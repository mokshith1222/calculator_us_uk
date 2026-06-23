import React from 'react';
import { Metadata } from 'next';
import { US_STATES } from '@/data/states';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: "Local State Financial Calculators | FinanceToolsHub",
  description: "Find localized financial, tax, and property calculators for all 50 US states. Get customized calculations based on your local state laws and tax brackets.",
};

export default function LocalStatesDirectoryPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Local Hubs", item: "/local" }
  ];

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--primary-accent)' }}>
          State-by-State Financial Hubs
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          Select your state below to access financial calculators, tax estimators, and property tools customized specifically for your local tax brackets and regulations.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
        gap: '1rem',
        marginBottom: '4rem'
      }}>
        {US_STATES.map((state) => (
          <Link key={state.slug} href={`/local/${state.slug}`} style={{ textDecoration: 'none' }}>
            <div className="recommendation-card" style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--secondary-accent)',
              borderRadius: '8px',
              padding: '1.5rem 1rem',
              textAlign: 'center',
              transition: 'all 0.2s ease',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                {state.name}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <BreadcrumbSchema items={breadcrumbs} />
    </div>
  );
}
