"use client";

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary-accent)', marginBottom: '1rem' }}>Something went wrong</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', marginBottom: '3rem' }}>
        We encountered an unexpected error. Our team has been notified. 
        Please try reloading the page or return to the homepage.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button 
          onClick={() => reset()} 
          style={{ background: 'var(--primary-accent)', color: '#FFF', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 600, border: 'none', cursor: 'pointer' }}
        >
          Try Again
        </button>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ background: '#FFF', border: '1px solid var(--primary-accent)', color: 'var(--primary-accent)', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 600 }}>
            Go Home
          </div>
        </Link>
      </div>
    </div>
  );
}
