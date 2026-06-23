import React from 'react';
import { Metadata } from 'next';
import { US_STATES } from '@/data/states';
import { notFound } from 'next/navigation';
import { UniversalCalculator } from '@/components/calculators/UniversalCalculator';

export function generateStaticParams() {
  return US_STATES.map((state) => ({
    state: state.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const stateObj = US_STATES.find(s => s.slug === resolvedParams.state);
  if (!stateObj) return {};

  return {
    title: `${stateObj.name} Financial & Tax Calculators 2026`,
    description: `Free, professional-grade financial and tax calculators specifically localized for ${stateObj.name} residents. Calculate mortgages, property tax, and state income tax.`,
  };
}

export default async function StateHubPage({ params }: { params: Promise<{ state: string }> }) {
  const resolvedParams = await params;
  const stateObj = US_STATES.find(s => s.slug === resolvedParams.state);
  
  if (!stateObj) {
    notFound();
  }

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', color: '#111' }} className="dark:text-white">
          {stateObj.name} Financial Calculators
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          Welcome to the localized financial hub for {stateObj.name} residents. Use the tools below to calculate property taxes, mortgages, and investment returns customized for your state.
        </p>
      </div>

      {/* Feature Calculator Contextualized for the State */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary-accent)', textAlign: 'center' }}>
          {stateObj.name} Property & Mortgage Hub
        </h2>
        <UniversalCalculator slug="mortgage-calculator" />
      </div>

      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary-accent)', textAlign: 'center' }}>
          {stateObj.name} Debt Payoff Planner
        </h2>
        <UniversalCalculator slug="debt-payoff-calculator" />
      </div>
    </div>
  );
}
