"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { Card, Input } from '@/components/ui';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState('500');
  const [expectedReturn, setExpectedReturn] = useState('12');
  const [timePeriod, setTimePeriod] = useState('10');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('pmt')) setMonthlyInvestment(params.get('pmt') as string);
      if (params.get('r')) setExpectedReturn(params.get('r') as string);
      if (params.get('t')) setTimePeriod(params.get('t') as string);
    }
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams();
      params.set('pmt', monthlyInvestment);
      params.set('r', expectedReturn);
      params.set('t', timePeriod);
      const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
      navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const {
    investedAmount,
    estimatedReturns,
    totalValue,
    growthData
  } = useMemo(() => {
    const P = parseFloat(monthlyInvestment) || 0;
    const r = parseFloat(expectedReturn) || 0;
    const t = parseFloat(timePeriod) || 0;

    const i = r / 100 / 12; // monthly rate
    const n = t * 12; // total months

    let M = 0;
    if (i === 0) {
      M = P * n;
    } else {
      M = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    }

    const totalInvested = P * n;
    const returns = M - totalInvested;

    const schedule = [];
    let currentInvestment = 0;
    let currentValue = 0;

    for (let year = 1; year <= t; year++) {
      const months = year * 12;
      currentInvestment = P * months;
      if (i === 0) {
        currentValue = currentInvestment;
      } else {
        currentValue = P * ((Math.pow(1 + i, months) - 1) / i) * (1 + i);
      }
      schedule.push({
        year,
        invested: Math.round(currentInvestment),
        value: Math.round(currentValue),
      });
    }

    return {
      investedAmount: totalInvested,
      estimatedReturns: returns,
      totalValue: M,
      growthData: schedule
    };
  }, [monthlyInvestment, expectedReturn, timePeriod]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ color: 'var(--primary-accent)' }}>SIP Details</h3>
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
        <Input label="Monthly Investment" prefix="$" value={monthlyInvestment} onChange={setMonthlyInvestment} />
        <Input label="Expected Return Rate (p.a)" suffix="%" value={expectedReturn} onChange={setExpectedReturn} step={0.1} />
        <Input label="Time Period" suffix="Years" value={timePeriod} onChange={setTimePeriod} />
      </Card>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Card>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary-accent)' }}>Total Wealth Generated</h3>
          <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            ${totalValue.toLocaleString(undefined, {maximumFractionDigits: 0})}
          </div>
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem' }}>
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Invested Amount</div>
              <div style={{ fontWeight: 600, color: 'var(--primary-accent)' }}>${investedAmount.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
            </div>
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Est. Returns</div>
              <div style={{ fontWeight: 600, color: 'var(--status-success)' }}>${estimatedReturns.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
            </div>
          </div>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--status-success)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--status-success)" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary-accent)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--primary-accent)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" tickFormatter={(v) => `Yr ${v}`} />
                <YAxis tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <Tooltip formatter={(value: any) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Area type="monotone" dataKey="invested" name="Invested Amount" stroke="var(--primary-accent)" fillOpacity={1} fill="url(#colorInvested)" />
                <Area type="monotone" dataKey="value" name="Total Value" stroke="var(--status-success)" fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}
