"use client";

import React from 'react';
import Link from 'next/link';
import { useLocalDatabase } from '@/hooks/useLocalDatabase';
import { Card } from '@/components/ui';

export default function DashboardPage() {
  const { scenarios, deleteScenario, isLoaded } = useLocalDatabase();

  if (!isLoaded) return <div style={{ padding: '4rem', textAlign: 'center' }}>Loading dashboard...</div>;
  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem', color: '#111' }} className="dark:text-white">
          My Dashboard
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
          Welcome back. Here are your saved financial scenarios.
        </p>
      </div>

      {scenarios.length === 0 ? (
        <Card style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--secondary-background)', border: '2px dashed var(--secondary-accent)' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>No scenarios saved yet</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            When using our calculators, click the "Save" button to pin a calculation here for later comparison.
          </p>
          <Link href="/calculators" style={{ background: 'var(--primary-accent)', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
            Explore Calculators
          </Link>
        </Card>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {scenarios.map(scenario => {
            const params = new URLSearchParams();
            Object.entries(scenario.data).forEach(([key, value]) => {
              params.set(key, value.toString());
            });
            const href = `/calculators/${scenario.calculatorSlug}?${params.toString()}`;

            return (
              <Card key={scenario.id} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 700, margin: 0 }}>
                    {scenario.calculatorName}
                  </h3>
                  <button 
                    onClick={() => deleteScenario(scenario.id)}
                    style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', fontSize: '1.2rem', padding: '0.2rem' }}
                    title="Delete Scenario"
                  >
                    ✕
                  </button>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  Saved on: {new Date(scenario.dateSaved).toLocaleDateString()}
                </div>
                
                <div style={{ background: 'var(--secondary-background)', padding: '1rem', borderRadius: '8px', flexGrow: 1, marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Saved Inputs</h4>
                  <div style={{ display: 'grid', gap: '0.5rem' }}>
                    {Object.entries(scenario.data).map(([key, value]) => (
                      <div key={key} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                        <span style={{ color: 'var(--text-muted)' }}>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                        <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                          {Number(value).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  href={href}
                  style={{ 
                    display: 'block', 
                    textAlign: 'center', 
                    background: 'var(--primary-accent)', 
                    color: '#fff', 
                    padding: '0.75rem', 
                    borderRadius: '6px', 
                    textDecoration: 'none', 
                    fontWeight: 600 
                  }}
                >
                  Open Calculator
                </Link>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
