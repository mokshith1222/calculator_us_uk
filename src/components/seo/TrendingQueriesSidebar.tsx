"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export function TrendingQueriesSidebar({ currentSlug }: { currentSlug: string }) {
  // Hardcoded for MVP, could be dynamically derived from keywordDatabase
  const trendingSearches = [
    { label: "Current Refinance Rates", href: "/calculators/refinance-calculator" },
    { label: "Pay off $50k student loans", href: "/calculators/debt-payoff-calculator" },
    { label: "Best Compound Interest Strategy", href: "/calculators/compound-interest-calculator" },
    { label: "How much house can I afford?", href: "/calculators/affordability-calculator" },
    { label: "Calculate 401k Growth", href: "/calculators/401k-calculator" },
    { label: "FHA Mortgage Calculator", href: "/calculators/mortgage-calculator/texas" },
    { label: "FIRE Movement Calculator", href: "/calculators/retirement-calculator" }
  ];

  const [shuffledQueries, setShuffledQueries] = useState(trendingSearches);

  useEffect(() => {
    // Randomize the queries on the client side to avoid hydration mismatches
    const filtered = trendingSearches.filter(q => !q.href.includes(currentSlug));
    setShuffledQueries(filtered.sort(() => 0.5 - Math.random()).slice(0, 5));
  }, [currentSlug]);

  return (
    <div style={{ background: 'var(--card-bg)', borderRadius: '8px', border: '1px solid #E2E8F0', padding: '1.5rem', position: 'sticky', top: '100px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.2rem' }}>
        <span style={{ fontSize: '1.2rem' }}>🔥</span>
        <h3 style={{ fontSize: '1.1rem', margin: 0, color: '#111' }}>Trending Searches</h3>
      </div>
      
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        {shuffledQueries.map((query, index) => (
          <li key={index}>
            <Link 
              href={query.href}
              style={{ 
                color: 'var(--text-primary)', 
                textDecoration: 'none', 
                fontSize: '0.95rem',
                display: 'block',
                padding: '0.5rem',
                borderRadius: '4px',
                transition: 'background 0.2s ease'
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = '#F1F5F9')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              {query.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
