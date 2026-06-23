"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { Card, Input } from '@/components/ui';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export function AutoLoanCalculator() {
  const [vehiclePrice, setVehiclePrice] = useState('25000');
  const [downPayment, setDownPayment] = useState('5000');
  const [tradeInValue, setTradeInValue] = useState('0');
  const [salesTax, setSalesTax] = useState('7'); // percentage
  const [loanTerm, setLoanTerm] = useState('60'); // months
  const [interestRate, setInterestRate] = useState('5.5');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('vp')) setVehiclePrice(params.get('vp') as string);
      if (params.get('dp')) setDownPayment(params.get('dp') as string);
      if (params.get('ti')) setTradeInValue(params.get('ti') as string);
      if (params.get('t')) setLoanTerm(params.get('t') as string);
      if (params.get('r')) setInterestRate(params.get('r') as string);
      if (params.get('tax')) setSalesTax(params.get('tax') as string);
    }
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams();
      params.set('vp', vehiclePrice);
      params.set('dp', downPayment);
      params.set('ti', tradeInValue);
      params.set('t', loanTerm);
      params.set('r', interestRate);
      params.set('tax', salesTax);
      const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
      navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const {
    monthlyPayment,
    totalInterest,
    totalTax,
    totalLoanAmount,
    totalCost,
    chartData
  } = useMemo(() => {
    const price = parseFloat(vehiclePrice) || 0;
    const dp = parseFloat(downPayment) || 0;
    const tradeIn = parseFloat(tradeInValue) || 0;
    const taxRate = parseFloat(salesTax) / 100 || 0;
    const term = parseFloat(loanTerm) || 60;
    const rate = parseFloat(interestRate) / 100 / 12 || 0;

    // Typically, sales tax is calculated on the price AFTER the trade-in is deducted.
    const taxableAmount = Math.max(0, price - tradeIn);
    const calculatedTax = taxableAmount * taxRate;
    
    // Total amount financed (Loan Principal)
    const P = Math.max(0, price + calculatedTax - dp - tradeIn);

    let payment = 0;
    if (rate > 0) {
      payment = P * (rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
    } else {
      payment = P / term;
    }

    const totalInt = (payment * term) - P;
    const grandTotal = P + totalInt + dp + tradeIn;

    return {
      monthlyPayment: payment,
      totalInterest: totalInt,
      totalTax: calculatedTax,
      totalLoanAmount: P,
      totalCost: grandTotal,
      chartData: [
        { name: 'Vehicle Principal', value: P, color: 'var(--primary-accent)' },
        { name: 'Total Interest', value: totalInt, color: 'var(--status-error)' },
        { name: 'Sales Tax', value: calculatedTax, color: '#F59E0B' }
      ]
    };
  }, [vehiclePrice, downPayment, tradeInValue, salesTax, loanTerm, interestRate]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ color: 'var(--primary-accent)' }}>Auto Loan Details</h3>
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
        <Input label="Vehicle Price" prefix="$" value={vehiclePrice} onChange={setVehiclePrice} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <Input label="Down Payment" prefix="$" value={downPayment} onChange={setDownPayment} />
          <Input label="Trade-In Value" prefix="$" value={tradeInValue} onChange={setTradeInValue} />
        </div>
        <Input label="Sales Tax Rate" suffix="%" value={salesTax} onChange={setSalesTax} step={0.1} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
          <Input label="Loan Term (Months)" value={loanTerm} onChange={setLoanTerm} />
          <Input label="Interest Rate" suffix="%" value={interestRate} onChange={setInterestRate} step={0.1} />
        </div>
      </Card>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Card>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary-accent)' }}>Estimated Monthly Payment</h3>
          <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            ${monthlyPayment.toLocaleString(undefined, {maximumFractionDigits: 2})}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '1rem', background: '#FAFAFA', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Total Loan Amount</div>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>${totalLoanAmount.toLocaleString(undefined, {maximumFractionDigits: 2})}</div>
            </div>
            <div style={{ padding: '1rem', background: '#FAFAFA', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Total Interest Paid</div>
              <div style={{ fontWeight: 600, color: 'var(--status-error)' }}>${totalInterest.toLocaleString(undefined, {maximumFractionDigits: 2})}</div>
            </div>
          </div>
          <div style={{ height: '250px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: any) => `$${Number(value).toLocaleString()}`} />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}
