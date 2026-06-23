"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { Card, Input, Button } from '@/components/ui';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState('30');
  const [retirementAge, setRetirementAge] = useState('65');
  const [currentSavings, setCurrentSavings] = useState('50000');
  const [monthlyContribution, setMonthlyContribution] = useState('1000');
  const [annualReturn, setAnnualReturn] = useState('7');
  const [inflationRate, setInflationRate] = useState('2.5');
  const [desiredIncome, setDesiredIncome] = useState('80000');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('age')) setCurrentAge(params.get('age') as string);
      if (params.get('rage')) setRetirementAge(params.get('rage') as string);
      if (params.get('sav')) setCurrentSavings(params.get('sav') as string);
      if (params.get('pmt')) setMonthlyContribution(params.get('pmt') as string);
      if (params.get('r')) setAnnualReturn(params.get('r') as string);
      if (params.get('inf')) setInflationRate(params.get('inf') as string);
      if (params.get('inc')) setDesiredIncome(params.get('inc') as string);
    }
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams();
      params.set('age', currentAge);
      params.set('rage', retirementAge);
      params.set('sav', currentSavings);
      params.set('pmt', monthlyContribution);
      params.set('r', annualReturn);
      params.set('inf', inflationRate);
      params.set('inc', desiredIncome);
      const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
      navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const {
    finalBalance,
    inflationAdjustedBalance,
    yearsInRetirement,
    safeWithdrawalAmount,
    growthSchedule
  } = useMemo(() => {
    const age = parseInt(currentAge) || 0;
    const retireAge = parseInt(retirementAge) || 0;
    const yearsToRetire = Math.max(0, retireAge - age);
    
    const P = parseFloat(currentSavings) || 0;
    const PMT = parseFloat(monthlyContribution) || 0;
    const r = parseFloat(annualReturn) / 100 || 0;
    const inflation = parseFloat(inflationRate) / 100 || 0;
    const targetIncome = parseFloat(desiredIncome) || 0;

    let balance = P;
    const schedule = [];

    for (let i = 1; i <= yearsToRetire; i++) {
      let yearInterest = 0;
      for (let month = 1; month <= 12; month++) {
        const interest = balance * (r / 12);
        yearInterest += interest;
        balance += interest + PMT;
      }
      if (i % 5 === 0 || i === yearsToRetire || i === 1) {
        schedule.push({
          age: age + i,
          balance: Math.round(balance),
        });
      }
    }

    // Adjust for inflation (purchasing power in today's dollars)
    const purchasingPower = balance / Math.pow(1 + inflation, yearsToRetire);
    
    // 4% safe withdrawal rule
    const swa = balance * 0.04;

    return {
      finalBalance: balance,
      inflationAdjustedBalance: purchasingPower,
      yearsInRetirement: yearsToRetire,
      safeWithdrawalAmount: swa,
      growthSchedule: schedule
    };
  }, [currentAge, retirementAge, currentSavings, monthlyContribution, annualReturn, inflationRate, desiredIncome]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ color: 'var(--primary-accent)' }}>Plan Details</h3>
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <Input label="Current Age" value={currentAge} onChange={setCurrentAge} />
          <Input label="Retirement Age" value={retirementAge} onChange={setRetirementAge} />
        </div>
        <Input label="Current Savings" prefix="$" value={currentSavings} onChange={setCurrentSavings} />
        <Input label="Monthly Contribution" prefix="$" value={monthlyContribution} onChange={setMonthlyContribution} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <Input label="Est. Annual Return" suffix="%" value={annualReturn} onChange={setAnnualReturn} step={0.1} />
          <Input label="Est. Inflation Rate" suffix="%" value={inflationRate} onChange={setInflationRate} step={0.1} />
        </div>
        <Input label="Desired Annual Income in Retirement" prefix="$" value={desiredIncome} onChange={setDesiredIncome} />
      </Card>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Card>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary-accent)' }}>Estimated Retirement Balance</h3>
          <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            ${finalBalance.toLocaleString(undefined, {maximumFractionDigits: 0})}
          </div>
          <div style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Purchasing power in today's dollars: <strong>${inflationAdjustedBalance.toLocaleString(undefined, {maximumFractionDigits: 0})}</strong>
          </div>
          
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem', padding: '1rem', background: 'var(--secondary-background)', borderRadius: 'var(--radius-md)' }}>
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Safe Annual Withdrawal (4%)</div>
              <div style={{ fontWeight: 600, color: 'var(--status-info)', fontSize: '1.25rem' }}>${safeWithdrawalAmount.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
            </div>
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Desired Annual Income</div>
              <div style={{ fontWeight: 600, color: parseFloat(desiredIncome) <= safeWithdrawalAmount ? 'var(--status-success)' : 'var(--status-error)', fontSize: '1.25rem' }}>
                ${parseFloat(desiredIncome).toLocaleString(undefined, {maximumFractionDigits: 0})}
              </div>
            </div>
          </div>

          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={growthSchedule}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="age" tickFormatter={(v) => `Age ${v}`} />
                <YAxis tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
                <Tooltip formatter={(value: any) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Bar dataKey="balance" name="Portfolio Balance" fill="var(--primary-accent)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}
