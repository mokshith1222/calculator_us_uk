"use client";

import React, { useState } from 'react';

export function FAQAccordion({ faqs }: { faqs: string[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-accent)', marginBottom: '1.5rem' }}>People Also Ask</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {faqs.map((question, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              style={{ 
                background: 'var(--card-bg)', 
                border: '1px solid #E2E8F0', 
                borderRadius: '8px', 
                overflow: 'hidden',
                transition: 'all 0.2s ease'
              }}
            >
              <button 
                onClick={() => setOpenIndex(isOpen ? null : index)}
                style={{ 
                  width: '100%', 
                  padding: '1.2rem', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: isOpen ? 'var(--primary-accent)' : 'var(--text-primary)'
                }}
              >
                {question}
                <span style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              
              {isOpen && (
                <div style={{ padding: '0 1.2rem 1.2rem 1.2rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  <p>
                    {/* For MVP, we auto-generate generic detailed answers. In production, these would be mapped in the DB */}
                    This is a great question. When considering "{question.toLowerCase().replace('?', '')}", financial experts typically recommend analyzing your overall net worth, current interest rates, and long-term investment horizons. Use our calculator above to run multiple scenarios to see exactly how this applies to your personal situation. 
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
