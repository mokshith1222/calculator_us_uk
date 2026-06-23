"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRecentTools } from '@/hooks/useRecentTools';
import { calculatorConfigs } from '@/data/calculatorConfigs';

export function PopularToolsGrid() {
  const { recentTools } = useRecentTools();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const popularSlugs = [
    'mortgage-calculator',
    'compound-interest-calculator',
    'retirement-calculator',
    'debt-payoff-calculator',
    'net-worth-calculator',
    'salary-calculator'
  ];

  const allConfigs = Object.keys(calculatorConfigs).map(key => ({
    ...calculatorConfigs[key],
    slug: key
  }));
  const popularTools = allConfigs.filter((c: any) => popularSlugs.includes(c.slug));

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
      
      {recentTools.length > 0 && (
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-accent)', marginBottom: '1.5rem' }}>
            Pick Up Where You Left Off
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {recentTools.map((tool) => (
              <Link key={tool.slug} href={`/calculators/${tool.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ 
                  background: 'var(--secondary-background)', 
                  padding: '1.5rem', 
                  borderRadius: '12px', 
                  border: '1px solid #E2E8F0',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'transform 0.2s ease',
                  cursor: 'pointer'
                }}
                className="category-card"
                >
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Recently Used</div>
                  <h3 style={{ fontSize: '1.1rem', color: '#111', fontWeight: 700 }}>{tool.name}</h3>
                  <div style={{ color: 'var(--primary-accent)', fontWeight: 600, marginTop: '1rem', fontSize: '0.9rem' }}>
                    Continue →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#111', marginBottom: '1.5rem' }}>
        Most Popular Tools
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {popularTools.map((calc: any) => (
          <Link href={`/calculators/${calc.slug}`} key={calc.slug} style={{ textDecoration: 'none' }}>
            <div className="category-card" style={{ 
              background: '#FFFFFF', 
              padding: '2rem', 
              borderRadius: '16px', 
              border: '1px solid #E2E8F0',
              boxShadow: 'var(--shadow-sm)',
              height: '100%',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              cursor: 'pointer'
            }}>
              <h2 style={{ fontSize: '1.2rem', color: '#111', marginBottom: '0.5rem', fontWeight: 700 }}>{calc.name}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                {calc.description}
              </p>
              <div style={{ color: 'var(--primary-accent)', fontWeight: 600, marginTop: '1rem', fontSize: '0.9rem' }}>
                Open Calculator →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
