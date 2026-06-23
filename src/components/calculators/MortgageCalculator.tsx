"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { Card, Input, Button } from '@/components/ui';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

export function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState('300000');
  const [downPayment, setDownPayment] = useState('60000');
  const [loanTerm, setLoanTerm] = useState('30');
  const [interestRate, setInterestRate] = useState('6.5');
  const [propertyTax, setPropertyTax] = useState('3000');
  const [homeInsurance, setHomeInsurance] = useState('1200');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('hp')) setHomePrice(params.get('hp') as string);
      if (params.get('dp')) setDownPayment(params.get('dp') as string);
      if (params.get('t')) setLoanTerm(params.get('t') as string);
      if (params.get('r')) setInterestRate(params.get('r') as string);
      if (params.get('pt')) setPropertyTax(params.get('pt') as string);
      if (params.get('hi')) setHomeInsurance(params.get('hi') as string);
    }
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams();
      params.set('hp', homePrice);
      params.set('dp', downPayment);
      params.set('t', loanTerm);
      params.set('r', interestRate);
      params.set('pt', propertyTax);
      params.set('hi', homeInsurance);
      const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
      navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const {
    monthlyPrincipalAndInterest,
    monthlyPropertyTax,
    monthlyHomeInsurance,
    totalMonthlyPayment,
    amortizationSchedule,
    totalInterestPaid
  } = useMemo(() => {
    const P = parseFloat(homePrice) - parseFloat(downPayment);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;
    
    let monthlyPI = 0;
    if (r > 0) {
      monthlyPI = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    } else {
      monthlyPI = P / n;
    }

    const mTax = parseFloat(propertyTax) / 12 || 0;
    const mIns = parseFloat(homeInsurance) / 12 || 0;
    const totalPayment = monthlyPI + mTax + mIns;

    let balance = P;
    const schedule = [];
    let totalInterest = 0;

    for (let i = 1; i <= n; i++) {
      const interestPayment = balance * r;
      const principalPayment = monthlyPI - interestPayment;
      balance -= principalPayment;
      totalInterest += interestPayment;

      if (i % 12 === 0 || i === n) {
        schedule.push({
          year: i / 12,
          balance: Math.max(0, balance),
          totalInterest,
        });
      }
    }

    return {
      monthlyPrincipalAndInterest: monthlyPI,
      monthlyPropertyTax: mTax,
      monthlyHomeInsurance: mIns,
      totalMonthlyPayment: totalPayment,
      amortizationSchedule: schedule,
      totalInterestPaid: totalInterest
    };
  }, [homePrice, downPayment, loanTerm, interestRate, propertyTax, homeInsurance]);

  const pieData = [
    { name: 'Principal & Interest', value: monthlyPrincipalAndInterest },
    { name: 'Property Tax', value: monthlyPropertyTax },
    { name: 'Home Insurance', value: monthlyHomeInsurance },
  ];
  const COLORS = ['var(--primary-accent)', 'var(--secondary-accent)', 'var(--status-info)'];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ color: 'var(--primary-accent)' }}>Mortgage Details</h3>
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
        <Input label="Home Price" prefix="$" value={homePrice} onChange={setHomePrice} />
        <Input label="Down Payment" prefix="$" value={downPayment} onChange={setDownPayment} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <Input label="Loan Term" suffix="Yrs" value={loanTerm} onChange={setLoanTerm} />
          <Input label="Interest Rate" suffix="%" value={interestRate} onChange={setInterestRate} step={0.1} />
        </div>
        <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Annual Taxes & Insurance</h4>
        <Input label="Property Tax (Yearly)" prefix="$" value={propertyTax} onChange={setPropertyTax} />
        <Input label="Home Insurance (Yearly)" prefix="$" value={homeInsurance} onChange={setHomeInsurance} />
      </Card>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Card>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary-accent)' }}>Estimated Monthly Payment</h3>
          <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            ${totalMonthlyPayment.toFixed(2)}
          </div>
          <div style={{ height: '250px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: any) => `$${Number(value).toFixed(2)}`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary-accent)' }}>Amortization Schedule</h3>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={amortizationSchedule}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="year" tickFormatter={(v) => `Year ${v}`} />
                <YAxis yAxisId="left" tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
                <Tooltip formatter={(value: any) => `$${Number(value).toFixed(2)}`} labelFormatter={(l) => `Year ${l}`} />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="balance" name="Remaining Balance" stroke="var(--primary-accent)" strokeWidth={2} dot={false} />
                <Line yAxisId="left" type="monotone" dataKey="totalInterest" name="Total Interest Paid" stroke="var(--status-error)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--secondary-background)', borderRadius: 'var(--radius-md)' }}>
            <p style={{ margin: 0 }}><strong>Total Principal Paid:</strong> ${(parseFloat(homePrice) - parseFloat(downPayment)).toLocaleString()}</p>
            <p style={{ margin: 0 }}><strong>Total Interest Paid:</strong> ${totalInterestPaid.toLocaleString(undefined, {maximumFractionDigits: 2})}</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
