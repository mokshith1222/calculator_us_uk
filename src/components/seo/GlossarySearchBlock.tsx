"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export function GlossarySearchBlock({ terms }: { terms: any[] }) {
  const [query, setQuery] = useState('');

  const filtered = terms.filter(item => 
    item.term.toLowerCase().includes(query.toLowerCase()) || 
    item.shortDefinition.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search for a term (e.g. APR, FICA, Amortization)..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ 
          width: '100%', 
          padding: '1.2rem', 
          fontSize: '1.1rem', 
          borderRadius: '12px', 
          border: '2px solid var(--primary-accent)', 
          marginBottom: '2rem',
          outline: 'none',
          boxShadow: 'var(--shadow-sm)'
        }}
        aria-label="Search Glossary"
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {filtered.length > 0 ? filtered.map((item) => (
          <div key={item.slug} style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
            <Link href={`/glossary/${item.slug}`} style={{ textDecoration: 'none' }}>
              <h2 style={{ color: 'var(--primary-accent)', marginBottom: '0.5rem', fontSize: '1.5rem' }}>
                {item.term}
              </h2>
            </Link>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.5 }}>
              {item.shortDefinition}
            </p>
            <Link href={`/glossary/${item.slug}`} style={{ color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'underline' }}>
              Read full definition &rarr;
            </Link>
          </div>
        )) : (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            No terms found matching "{query}".
          </div>
        )}
      </div>
    </div>
  );
}
