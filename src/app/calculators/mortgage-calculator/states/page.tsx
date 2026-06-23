import React from 'react';
import Link from 'next/link';
import { statesData } from '@/data/statesData';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export const metadata = {
  title: 'State-by-State Mortgage & Tax Calculators | FinanceToolsHub',
  description: 'Find local mortgage rates, average home prices, and precise property tax data for all 50 US States to calculate your true housing costs.',
};

export default function StateMortgageHub() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Calculators", item: "/calculators" },
    { name: "Mortgages", item: "/calculators/category/mortgage" },
    { name: "By State", item: "/calculators/mortgage-calculator/states" }
  ];

  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <BreadcrumbSchema items={breadcrumbs} />
      
      <div style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '2rem' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--primary-accent)', marginBottom: '1rem' }}>Local Mortgage Hub</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
          Select your state below to calculate your mortgage with localized property taxes and average interest rates built right in.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {statesData.map((state) => (
          <Link 
            key={state.slug} 
            href={`/calculators/mortgage-calculator/${state.slug}`}
            style={{ 
              background: 'var(--card-bg)', 
              border: '1px solid #E2E8F0', 
              borderRadius: '8px', 
              padding: '1.5rem', 
              textDecoration: 'none', 
              color: 'inherit',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            className="state-card"
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.2rem', margin: 0, color: '#111' }}>{state.name}</h2>
              <span style={{ background: '#F1F5F9', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                {state.abbreviation}
              </span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Avg Rate:</span>
                <span style={{ fontWeight: 600, color: 'var(--primary-accent)' }}>{state.avgRate}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Property Tax:</span>
                <span style={{ fontWeight: 600, color: 'var(--primary-accent)' }}>{state.propertyTax}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Avg Home:</span>
                <span style={{ fontWeight: 600, color: '#111' }}>{state.avgPrice}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .state-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-accent) !important;
        }
      `}} />
    </div>
  );
}
