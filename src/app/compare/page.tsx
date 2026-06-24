"use client";

import React, { useState, useEffect } from 'react';
import { calculatorConfigs } from '@/data/calculatorConfigs';
import { UniversalCalculator } from '@/components/calculators/UniversalCalculator';

export default function ComparePage() {
  const [slug1, setSlug1] = useState<string>('mortgage-calculator');
  const [slug2, setSlug2] = useState<string>('mortgage-calculator');

  // Group calculators by category for the dropdown
  const groupedCalculators = Object.entries(calculatorConfigs).reduce((acc: any, [slug, config]: [string, any]) => {
    if (!acc[config.category]) acc[config.category] = [];
    acc[config.category].push({ slug, name: config.name });
    return acc;
  }, {});

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', color: '#111' }} className="dark:text-white">
          Comparison Engine <span style={{ color: 'var(--primary-accent)' }}>PRO</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          Run multiple financial scenarios side-by-side. Compare a 15-year vs 30-year mortgage, or pit two completely different investments against each other.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
        gap: '2rem',
        alignItems: 'start'
      }}>
        {/* SCENARIO A */}
        <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--secondary-accent)', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '2px solid var(--secondary-background)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>Scenario A</h2>
            <select 
              aria-label="Scenario A Calculator"
              value={slug1}
              onChange={(e) => setSlug1(e.target.value)}
              style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--secondary-accent)', background: 'var(--secondary-background)', color: 'var(--text-primary)', outline: 'none' }}
            >
              {Object.keys(groupedCalculators).map(category => (
                <optgroup key={category} label={category}>
                  {groupedCalculators[category].map((calc: any) => (
                    <option key={calc.slug} value={calc.slug}>{calc.name}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
          
          <React.Suspense fallback={<div>Loading scenario A...</div>}>
            <UniversalCalculator slug={slug1} />
          </React.Suspense>
        </div>

        {/* SCENARIO B */}
        <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--secondary-accent)', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '2px solid var(--secondary-background)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>Scenario B</h2>
            <select 
              aria-label="Scenario B Calculator"
              value={slug2}
              onChange={(e) => setSlug2(e.target.value)}
              style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--secondary-accent)', background: 'var(--secondary-background)', color: 'var(--text-primary)', outline: 'none' }}
            >
              {Object.keys(groupedCalculators).map(category => (
                <optgroup key={category} label={category}>
                  {groupedCalculators[category].map((calc: any) => (
                    <option key={calc.slug} value={calc.slug}>{calc.name}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
          
          <React.Suspense fallback={<div>Loading scenario B...</div>}>
            <UniversalCalculator slug={slug2} />
          </React.Suspense>
        </div>
      </div>
    </div>
  );
}
