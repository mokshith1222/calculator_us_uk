"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { Card, Input } from '@/components/ui';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function RefinanceCalculator() {
  const [currentBalance, setCurrentBalance] = useState('250000');
  const [currentRate, setCurrentRate] = useState('6.5');
  const [remainingYears, setRemainingYears] = useState('25');
  
  const [newRate, setNewRate] = useState('5.0');
  const [newYears, setNewYears] = useState('30');
  const [closingCosts, setClosingCosts] = useState('4000');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('cb')) setCurrentBalance(params.get('cb') as string);
      if (params.get('cr')) setCurrentRate(params.get('cr') as string);
      if (params.get('ry')) setRemainingYears(params.get('ry') as string);
      if (params.get('nr')) setNewRate(params.get('nr') as string);
      if (params.get('ny')) setNewYears(params.get('ny') as string);
      if (params.get('cc')) setClosingCosts(params.get('cc') as string);
    }
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams();
      params.set('cb', currentBalance);
      params.set('cr', currentRate);
      params.set('ry', remainingYears);
      params.set('nr', newRate);
      params.set('ny', newYears);
      params.set('cc', closingCosts);
      const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
      navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const {
    currentMonthlyPayment,
    currentTotalInterest,
    newMonthlyPayment,
    newTotalInterest,
    monthlySavings,
    lifetimeSavings,
    breakEvenMonths,
    chartData
  } = useMemo(() => {
    const balance = parseFloat(currentBalance) || 0;
    
    // Current Loan
    const cRate = parseFloat(currentRate) / 100 / 12 || 0;
    const cTerm = parseFloat(remainingYears) * 12 || 0;
    let cPmt = 0;
    if (cRate > 0 && cTerm > 0) {
      cPmt = balance * (cRate * Math.pow(1 + cRate, cTerm)) / (Math.pow(1 + cRate, cTerm) - 1);
    }
    const cTotalInt = (cPmt * cTerm) - balance;

    // New Loan
    const nRate = parseFloat(newRate) / 100 / 12 || 0;
    const nTerm = parseFloat(newYears) * 12 || 0;
    const costs = parseFloat(closingCosts) || 0;
    // Assuming closing costs are paid out of pocket, not rolled into loan
    const newLoanPrincipal = balance;
    
    let nPmt = 0;
    if (nRate > 0 && nTerm > 0) {
      nPmt = newLoanPrincipal * (nRate * Math.pow(1 + nRate, nTerm)) / (Math.pow(1 + nRate, nTerm) - 1);
    }
    const nTotalInt = (nPmt * nTerm) - newLoanPrincipal;

    const mSavings = cPmt - nPmt;
    const lSavings = cTotalInt - (nTotalInt + costs);
    
    let breakEven = 0;
    if (mSavings > 0) {
      breakEven = costs / mSavings;
    }

    return {
      currentMonthlyPayment: cPmt,
      currentTotalInterest: cTotalInt,
      newMonthlyPayment: nPmt,
      newTotalInterest: nTotalInt,
      monthlySavings: mSavings,
      lifetimeSavings: lSavings,
      breakEvenMonths: breakEven,
      chartData: [
        {
          name: 'Current Loan',
          Principal: balance,
          Interest: Math.round(cTotalInt),
          Fees: 0
        },
        {
          name: 'Refinanced Loan',
          Principal: balance,
          Interest: Math.round(nTotalInt),
          Fees: costs
        }
      ]
    };
  }, [currentBalance, currentRate, remainingYears, newRate, newYears, closingCosts]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ color: 'var(--primary-accent)' }}>Current Loan Details</h3>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={handleCopyLink} style={{ padding: '0.25rem 0.75rem', fontSize: '0.8rem', background: '#F1F5F9', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 600, color: 'var(--text-primary)' }}>
                {isCopied ? 'Copied!' : '🔗 Copy Link'}
              </button>
              <button onClick={() => window.print()} style={{ padding: '0.25rem 0.75rem', fontSize: '0.8rem', background: 'var(--primary-accent)', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 600, color: '#fff' }}>
                🖨️ Print
              </button>
            </div>
          </div>
          <Input label="Remaining Balance" prefix="$" value={currentBalance} onChange={setCurrentBalance} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <Input label="Current Interest Rate" suffix="%" value={currentRate} onChange={setCurrentRate} step={0.1} />
            <Input label="Remaining Term" suffix="Yrs" value={remainingYears} onChange={setRemainingYears} />
          </div>
        </Card>

        <Card>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-accent)' }}>New Loan Assumptions</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <Input label="New Interest Rate" suffix="%" value={newRate} onChange={setNewRate} step={0.1} />
            <Input label="New Loan Term" suffix="Yrs" value={newYears} onChange={setNewYears} />
          </div>
          <Input label="Estimated Closing Costs" prefix="$" value={closingCosts} onChange={setClosingCosts} />
        </Card>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Card>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary-accent)' }}>Refinance Analysis</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '1rem', background: monthlySavings > 0 ? '#ECFDF5' : '#FEF2F2', borderRadius: '8px', border: monthlySavings > 0 ? '1px solid #10B981' : '1px solid #EF4444' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Monthly Payment Difference</div>
              <div style={{ fontWeight: 700, fontSize: '1.5rem', color: monthlySavings > 0 ? 'var(--status-success)' : 'var(--status-error)' }}>
                {monthlySavings > 0 ? '-' : '+'}${Math.abs(monthlySavings).toLocaleString(undefined, {maximumFractionDigits: 0})}
              </div>
            </div>
            <div style={{ padding: '1rem', background: lifetimeSavings > 0 ? '#ECFDF5' : '#FEF2F2', borderRadius: '8px', border: lifetimeSavings > 0 ? '1px solid #10B981' : '1px solid #EF4444' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Lifetime Savings</div>
              <div style={{ fontWeight: 700, fontSize: '1.5rem', color: lifetimeSavings > 0 ? 'var(--status-success)' : 'var(--status-error)' }}>
                {lifetimeSavings > 0 ? '+' : ''}${Math.round(lifetimeSavings).toLocaleString()}
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem', textAlign: 'center', padding: '1rem', background: '#F8FAFC', borderRadius: '8px' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Break-Even Point (to recover closing costs)</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--primary-accent)' }}>
              {monthlySavings > 0 ? `${Math.ceil(breakEvenMonths)} Months` : "Never (Payment Increased)"}
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
                <Bar dataKey="Fees" stackId="a" fill="#F59E0B" />
                <Bar dataKey="Interest" stackId="a" fill="var(--status-error)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}
