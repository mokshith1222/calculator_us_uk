import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui';
import { guidesData } from '@/data/guides';

export const metadata = {
  title: 'Finance Learning Center | FinanceToolsHub',
  description: 'Master your personal finances with our comprehensive guides, tutorials, and expert analysis.',
};

export default function GuidesIndexPage() {
  const guides = Object.values(guidesData);

  return (
    <div className="container">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary-accent)', textAlign: 'center' }}>
        Finance Learning Center
      </h1>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.2rem' }}>
        Master your money with our expert-written guides and tutorials.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {guides.map((guide) => (
          <Link href={`/guides/${guide.slug}`} key={guide.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card style={{ height: '100%', transition: 'transform 0.2s', cursor: 'pointer' }} className="hover-card">
              <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>{guide.title}</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                {guide.description}
              </p>
              <div style={{ color: 'var(--primary-accent)', fontWeight: 600, fontSize: '0.9rem' }}>
                Read Guide &rarr;
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hover-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
      `}} />
    </div>
  );
}
