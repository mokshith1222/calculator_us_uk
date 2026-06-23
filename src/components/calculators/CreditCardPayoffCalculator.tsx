"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { Card, Input } from '@/components/ui';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function CreditCardPayoffCalculator() {
  const [balance, setBalance] = useState('5000');
  const [interestRate, setInterestRate] = useState('22.5');
  const [fixedPayment, setFixedPayment] = useState('300');
  const [minPaymentPercent, setMinPaymentPercent] = useState('3');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('b')) setBalance(params.get('b') as string);
      if (params.get('r')) setInterestRate(params.get('r') as string);
      if (params.get('fp')) setFixedPayment(params.get('fp') as string);
      if (params.get('mp')) setMinPaymentPercent(params.get('mp') as string);
    }
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams();
      params.set('b', balance);
      params.set('r', interestRate);
      params.set('fp', fixedPayment);
      params.set('mp', minPaymentPercent);
      const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
      navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const {
    minMonths,
    minTotalInterest,
    fixedMonths,
    fixedTotalInterest,
    interestSaved,
    monthsSaved,
    chartData,
    error
  } = useMemo(() => {
    const P = parseFloat(balance) || 0;
    const r = parseFloat(interestRate) / 100 / 12 || 0;
    const fixedPMT = parseFloat(fixedPayment) || 0;
    const minPct = parseFloat(minPaymentPercent) / 100 || 0;

    let err = null;

    // Minimum Payment Calculation
    let currentBalanceMin = P;
    let minMonthsCount = 0;
    let minInterest = 0;

    while (currentBalanceMin > 0 && minMonthsCount < 600) { // cap at 50 years
      minMonthsCount++;
      const interest = currentBalanceMin * r;
      minInterest += interest;
      
      // Typical credit card minimum payment is the greater of a flat fee (e.g., $25) or a % of the balance + interest
      let minPMT = Math.max(25, currentBalanceMin * minPct);
      
      // If the minimum payment doesn't even cover the interest, it will never be paid off
      if (minPMT <= interest && currentBalanceMin > 25) {
        err = "Minimum payment does not cover interest. Debt will grow indefinitely.";
        break;
      }

      const principalPaid = Math.min(currentBalanceMin, minPMT - interest);
      currentBalanceMin -= principalPaid;
    }

    // Fixed Payment Calculation
    let currentBalanceFixed = P;
    let fixedMonthsCount = 0;
    let fixedInterest = 0;

    if (fixedPMT <= P * r && P > 0) {
      err = "Fixed payment must be greater than monthly interest charge.";
    }

    while (currentBalanceFixed > 0 && fixedMonthsCount < 600 && !err) {
      fixedMonthsCount++;
      const interest = currentBalanceFixed * r;
      fixedInterest += interest;
      
      const principalPaid = Math.min(currentBalanceFixed, fixedPMT - interest);
      currentBalanceFixed -= principalPaid;
    }

    return {
      minMonths: minMonthsCount,
      minTotalInterest: minInterest,
      fixedMonths: fixedMonthsCount,
      fixedTotalInterest: fixedInterest,
      interestSaved: Math.max(0, minInterest - fixedInterest),
      monthsSaved: Math.max(0, minMonthsCount - fixedMonthsCount),
      error: err,
      chartData: err ? [] : [
        {
          name: 'Fixed Payment',
          Interest: Math.round(fixedInterest),
          Principal: P,
        },
        {
          name: 'Minimum Only',
          Interest: Math.round(minInterest),
          Principal: P,
        }
      ]
    };
  }, [balance, interestRate, fixedPayment, minPaymentPercent]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ color: 'var(--primary-accent)' }}>Credit Card Details</h3>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              onClick={handleCopyLink}
              style={{ padding: '0.25rem 0.75rem', fontSize: '0.8rem', background: '#F1F5F9', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 600, color: 'var(--text-primary)' }}
            >
              {isCopied ? 'Copied!' : '🔗 Copy Link'}
            </button>
            <button 
              onClick={() => window.print()}
              style={{ padding: '0.25rem 0.75rem', fontSize: '0.8rem', background: 'var(--primary-accent)', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 600, color: '#fff' }}
            >
              🖨️ Print
            </button>
          </div>
        </div>
        <Input label="Current Card Balance" prefix="$" value={balance} onChange={setBalance} />
        <Input label="Interest Rate (APR)" suffix="%" value={interestRate} onChange={setInterestRate} step={0.1} />
        <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Payment Strategies</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <Input label="Your Fixed Payment" prefix="$" value={fixedPayment} onChange={setFixedPayment} />
          <Input label="Minimum Rule" suffix="%" value={minPaymentPercent} onChange={setMinPaymentPercent} step={0.1} />
        </div>
        {error && <div style={{ color: 'var(--status-error)', marginTop: '1rem', fontSize: '0.9rem', fontWeight: 600 }}>{error}</div>}
      </Card>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Card>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary-accent)' }}>The Cost of Minimum Payments</h3>
          
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center', background: '#FAFAFA', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--status-success)' }}>
            <div style={{ flex: 1 }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>By making fixed payments, you save:</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--status-success)' }}>
                ${interestSaved.toLocaleString(undefined, {maximumFractionDigits: 0})}
              </div>
              <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                And you are debt-free {(monthsSaved / 12).toFixed(1)} years faster!
              </div>
            </div>
          </div>

          <div style={{ height: '250px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
                <Tooltip formatter={(value: any) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Bar dataKey="Principal" stackId="a" fill="var(--primary-accent)" />
                <Bar dataKey="Interest" stackId="a" fill="var(--status-error)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem', textAlign: 'center' }}>
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Fixed Payoff Time</div>
              <div style={{ fontWeight: 600 }}>{Math.floor(fixedMonths / 12)}y {fixedMonths % 12}m</div>
            </div>
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Minimum Payoff Time</div>
              <div style={{ fontWeight: 600 }}>{Math.floor(minMonths / 12)}y {minMonths % 12}m</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
