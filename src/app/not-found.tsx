import Link from 'next/link';
import { Card } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center' }}>
      <h1 style={{ fontSize: '6rem', fontWeight: 900, color: 'var(--primary-accent)', marginBottom: '0.5rem' }}>404</h1>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#111', marginBottom: '1.5rem' }}>Page Not Found</h2>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', marginBottom: '3rem' }}>
        The page you're looking for doesn't exist or has been moved. 
        Don't worry, you can easily find your way back to our premium financial tools.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ background: 'var(--primary-accent)', color: '#FFF', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 600, transition: 'opacity 0.2s' }}>
            Go Home
          </div>
        </Link>
        <Link href="/calculators" style={{ textDecoration: 'none' }}>
          <div style={{ background: '#FFF', border: '1px solid var(--primary-accent)', color: 'var(--primary-accent)', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 600, transition: 'background 0.2s' }}>
            Browse Calculators
          </div>
        </Link>
      </div>

      <div style={{ marginTop: '4rem', width: '100%', maxWidth: '800px' }}>
        <h3 style={{ fontSize: '1.5rem', color: '#111', marginBottom: '1.5rem' }}>Popular Categories</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {[
            { label: 'Mortgages', slug: 'mortgage' },
            { label: 'Investing', slug: 'investing' },
            { label: 'Retirement', slug: 'retirement' },
            { label: 'Debt & Loans', slug: 'debt' }
          ].map(cat => (
            <Link key={cat.slug} href={`/calculators/category/${cat.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--card-bg)', padding: '1rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontWeight: 600, color: 'var(--primary-accent)' }}>
                {cat.label} &rarr;
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
