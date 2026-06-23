"use client";

import React from 'react';
import Link from 'next/link';
import { calculatorConfigs } from '@/data/calculatorConfigs';

export function CategoryNav({ currentSlug }: { currentSlug: string }) {
  // Find the current category
  const currentConfig = calculatorConfigs[currentSlug];
  
  if (!currentConfig) return null;

  const currentCategory = currentConfig.category;

  // Get all tools in this category
  const relatedTools = Object.entries(calculatorConfigs)
    .filter(([_, config]) => config.category === currentCategory)
    .map(([slug, config]) => ({ slug, name: config.name }));

  return (
    <div style={{ 
      marginBottom: '2rem', 
      paddingBottom: '1rem', 
      borderBottom: '1px solid #E2E8F0',
      overflowX: 'auto',
      whiteSpace: 'nowrap'
    }}>
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <span style={{ fontWeight: 600, color: 'var(--text-muted)', fontSize: '0.9rem', marginRight: '0.5rem' }}>
          {currentCategory}:
        </span>
        {relatedTools.map((tool) => {
          const isActive = tool.slug === currentSlug;
          return (
            <Link 
              key={tool.slug} 
              href={`/calculators/${tool.slug}`}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-full)',
                background: isActive ? 'var(--primary-accent)' : 'var(--card-bg)',
                color: isActive ? 'var(--button-text)' : 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: isActive ? 600 : 500,
                border: isActive ? '1px solid var(--primary-accent)' : '1px solid #E2E8F0',
                transition: 'all 0.2s ease',
                boxShadow: isActive ? 'var(--shadow-sm)' : 'none'
              }}
            >
              {tool.name.replace(' Calculator', '')}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
