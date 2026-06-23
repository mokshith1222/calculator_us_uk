"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { Card, Input, Button } from '@/components/ui';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function CompoundInterestCalculator() {
  const [initialInvestment, setInitialInvestment] = useState('10000');
  const [monthlyContribution, setMonthlyContribution] = useState('500');
  const [yearsToGrow, setYearsToGrow] = useState('20');
  const [estimatedInterestRate, setEstimatedInterestRate] = useState('8');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('p')) setInitialInvestment(params.get('p') as string);
      if (params.get('pmt')) setMonthlyContribution(params.get('pmt') as string);
      if (params.get('t')) setYearsToGrow(params.get('t') as string);
      if (params.get('r')) setEstimatedInterestRate(params.get('r') as string);
    }
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams();
      params.set('p', initialInvestment);
      params.set('pmt', monthlyContribution);
      params.set('t', yearsToGrow);
      params.set('r', estimatedInterestRate);
      const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
      navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const {
    totalFutureValue,
    totalContributions,
    totalInterest,
    growthSchedule
  } = useMemo(() => {
    const P = parseFloat(initialInvestment) || 0;
    const PMT = parseFloat(monthlyContribution) || 0;
    const t = parseFloat(yearsToGrow) || 0;
    const r = parseFloat(estimatedInterestRate) / 100 || 0;
    const n = 12; // Compounded monthly

    let balance = P;
    let totalContrib = P;
    const schedule = [];

    for (let year = 1; year <= t; year++) {
      let yearInterest = 0;
      for (let month = 1; month <= 12; month++) {
        const interest = balance * (r / n);
        yearInterest += interest;
        balance += interest + PMT;
        totalContrib += PMT;
      }
      schedule.push({
        year,
        balance,
        totalContributions: totalContrib,
        totalInterest: balance - totalContrib
      });
    }

    const finalBalance = balance;
    const finalInterest = finalBalance - totalContrib;

    return {
      totalFutureValue: finalBalance,
      totalContributions: totalContrib,
      totalInterest: finalInterest,
      growthSchedule: schedule
    };
  }, [initialInvestment, monthlyContribution, yearsToGrow, estimatedInterestRate]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ color: 'var(--primary-accent)' }}>Input Details</h3>
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
        <Input label="Initial Investment" prefix="$" value={initialInvestment} onChange={setInitialInvestment} />
        <Input label="Monthly Contribution" prefix="$" value={monthlyContribution} onChange={setMonthlyContribution} />
        <Input label="Years to Grow" value={yearsToGrow} onChange={setYearsToGrow} />
        <Input label="Estimated Interest Rate" suffix="%" value={estimatedInterestRate} onChange={setEstimatedInterestRate} step={0.1} />
      </Card>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Card>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary-accent)' }}>Future Investment Value</h3>
          <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            ${totalFutureValue.toLocaleString(undefined, {maximumFractionDigits: 2})}
          </div>
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem' }}>
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Total Contributions</div>
              <div style={{ fontWeight: 600, color: 'var(--primary-accent)' }}>${totalContributions.toLocaleString(undefined, {maximumFractionDigits: 2})}</div>
            </div>
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Total Interest Earned</div>
              <div style={{ fontWeight: 600, color: 'var(--status-success)' }}>${totalInterest.toLocaleString(undefined, {maximumFractionDigits: 2})}</div>
            </div>
          </div>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthSchedule} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--status-success)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--status-success)" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorContrib" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary-accent)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--primary-accent)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" tickFormatter={(v) => `Yr ${v}`} />
                <YAxis tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <Tooltip formatter={(value: any) => `$${Number(value).toFixed(2)}`} />
                <Legend />
                <Area type="monotone" dataKey="totalContributions" name="Total Contributions" stroke="var(--primary-accent)" fillOpacity={1} fill="url(#colorContrib)" />
                <Area type="monotone" dataKey="balance" name="Total Balance" stroke="var(--status-success)" fillOpacity={1} fill="url(#colorBalance)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}
