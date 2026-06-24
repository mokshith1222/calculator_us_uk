import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui';
import { calculatorConfigs } from '@/data/calculatorConfigs';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';
import { PopularToolsGrid } from '@/components/calculators/PopularToolsGrid';

export const metadata = {
  title: 'All Financial Calculators | 60+ Premium Tools | FinanceToolsHub',
  description: 'Explore our complete suite of over 60 free, premium financial calculators. From mortgages and debt payoff to retirement planning and investing.',
};

export default function CalculatorsHubPage() {
  // Group calculators by category
  const categorizedTools: Record<string, any[]> = {};
  
  Object.keys(calculatorConfigs).forEach((slug) => {
    const config = calculatorConfigs[slug];
    if (!categorizedTools[config.category]) {
      categorizedTools[config.category] = [];
    }
    categorizedTools[config.category].push({ ...config, slug });
  });

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Calculators", item: "/calculators" }
  ];

  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary-accent)', marginBottom: '1.5rem', textAlign: 'center' }}>
        Financial Calculators Library
      </h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
        Explore our complete suite of over 60 free, premium financial calculators designed to help you build wealth, eliminate debt, and master your money.
      </p>

      <PopularToolsGrid />

      <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-accent)', marginBottom: '3rem', marginTop: '6rem', textAlign: 'center' }}>
        Browse by Category
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
        {Object.entries(categorizedTools).map(([category, tools]) => {
          const sectionId = category.replace(/[\\s&]+/g, '-').toLowerCase();
          return (
          <section key={category} id={sectionId}>
            <Link href={`/calculators/category/${sectionId}`} style={{ textDecoration: 'none' }}>
              <h2 style={{ 
                fontSize: '2rem', 
                color: 'var(--text-primary)', 
                marginBottom: '2rem',
                borderBottom: '3px solid var(--secondary-accent)',
                paddingBottom: '0.5rem',
                display: 'inline-block',
                cursor: 'pointer'
              }}>
                {category} ({tools.length})
              </h2>
            </Link>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {tools.map((tool) => (
                <Link href={`/calculators/${tool.slug}`} key={tool.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Card className="hover-card" style={{ height: '100%', borderLeft: '4px solid var(--primary-accent)' }}>
                    <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                      {tool.name}
                    </h3>
                    <div style={{ color: 'var(--primary-accent)', fontSize: '0.9rem', fontWeight: 600 }}>
                      Launch Tool &rarr;
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
          );
        })}
      </div>

      <BreadcrumbSchema items={breadcrumbs} />

      <style dangerouslySetInnerHTML={{__html: `
        .hover-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hover-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1) !important;
        }
      `}} />
    </div>
  );
}
