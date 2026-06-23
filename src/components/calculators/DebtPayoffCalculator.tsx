"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { Card, Input, Button } from '@/components/ui';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function DebtPayoffCalculator() {
  const [debtAmount, setDebtAmount] = useState('10000');
  const [interestRate, setInterestRate] = useState('18');
  const [monthlyPayment, setMonthlyPayment] = useState('300');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('d')) setDebtAmount(params.get('d') as string);
      if (params.get('r')) setInterestRate(params.get('r') as string);
      if (params.get('pmt')) setMonthlyPayment(params.get('pmt') as string);
    }
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams();
      params.set('d', debtAmount);
      params.set('r', interestRate);
      params.set('pmt', monthlyPayment);
      const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
      navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const {
    monthsToPayOff,
    totalInterestPaid,
    totalPaid,
    payoffSchedule,
    error
  } = useMemo(() => {
    const P = parseFloat(debtAmount) || 0;
    const r = (parseFloat(interestRate) || 0) / 100 / 12;
    const PMT = parseFloat(monthlyPayment) || 0;

    let balance = P;
    let totalInterest = 0;
    const schedule = [];
    let months = 0;
    let err = null;

    if (P > 0 && PMT <= P * r) {
      err = "Monthly payment must be greater than the monthly interest charge.";
      return { monthsToPayOff: 0, totalInterestPaid: 0, totalPaid: 0, payoffSchedule: [], error: err };
    }

    schedule.push({ month: 0, balance });

    while (balance > 0 && months < 600) { // Max 50 years to prevent infinite loops
      months++;
      const interest = balance * r;
      totalInterest += interest;
      
      const principalPaid = Math.min(balance, PMT - interest);
      balance -= principalPaid;
      
      if (months % 6 === 0 || balance <= 0 || months === 1) {
        schedule.push({ month: months, balance: Math.max(0, balance) });
      }
    }

    return {
      monthsToPayOff: months,
      totalInterestPaid: totalInterest,
      totalPaid: P + totalInterest,
      payoffSchedule: schedule,
      error: null
    };
  }, [debtAmount, interestRate, monthlyPayment]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ color: 'var(--primary-accent)' }}>Debt Details</h3>
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
        <Input label="Total Debt Amount" prefix="$" value={debtAmount} onChange={setDebtAmount} />
        <Input label="Annual Interest Rate" suffix="%" value={interestRate} onChange={setInterestRate} step={0.1} />
        <Input label="Monthly Payment" prefix="$" value={monthlyPayment} onChange={setMonthlyPayment} />
        
        {error && (
          <div style={{ padding: '1rem', background: 'var(--status-error)', color: '#fff', borderRadius: 'var(--radius-sm)', marginTop: '1rem' }}>
            {error}
          </div>
        )}
      </Card>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Card>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary-accent)' }}>Time to Pay Off</h3>
          <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            {monthsToPayOff > 0 ? `${Math.floor(monthsToPayOff / 12)} yrs, ${monthsToPayOff % 12} mos` : '---'}
          </div>
          
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem', padding: '1rem', background: 'var(--secondary-background)', borderRadius: 'var(--radius-md)' }}>
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Total Interest Paid</div>
              <div style={{ fontWeight: 600, color: 'var(--status-error)', fontSize: '1.25rem' }}>${totalInterestPaid.toLocaleString(undefined, {maximumFractionDigits: 2})}</div>
            </div>
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Total Amount Paid</div>
              <div style={{ fontWeight: 600, color: 'var(--primary-accent)', fontSize: '1.25rem' }}>
                ${totalPaid.toLocaleString(undefined, {maximumFractionDigits: 2})}
              </div>
            </div>
          </div>

          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={payoffSchedule} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorBalanceDebt" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--status-error)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--status-error)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" tickFormatter={(v) => `Mo ${v}`} />
                <YAxis tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <Tooltip formatter={(value: any) => `$${Number(value).toFixed(2)}`} />
                <Legend />
                <Area type="monotone" dataKey="balance" name="Remaining Balance" stroke="var(--status-error)" fillOpacity={1} fill="url(#colorBalanceDebt)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}
