"use client";

import React, { useState, useMemo } from 'react';
import { Card, Input } from '@/components/ui';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export function SalaryCalculator() {
  const [hourlyWage, setHourlyWage] = useState('25');
  const [hoursPerWeek, setHoursPerWeek] = useState('40');

  const {
    annualGross,
    monthlyGross,
    biWeeklyGross,
    weeklyGross,
    dailyGross
  } = useMemo(() => {
    const hw = parseFloat(hourlyWage) || 0;
    const hpw = parseFloat(hoursPerWeek) || 0;

    const weekly = hw * hpw;
    const annual = weekly * 52;
    const monthly = annual / 12;
    const biWeekly = annual / 26;
    const daily = weekly / 5;

    return {
      annualGross: annual,
      monthlyGross: monthly,
      biWeeklyGross: biWeekly,
      weeklyGross: weekly,
      dailyGross: daily,
    };
  }, [hourlyWage, hoursPerWeek]);

  // Rough estimation of taxes for visual purposes (Not financial advice!)
  const estimatedTaxRate = 0.22; // Flat 22% estimate
  const estimatedAnnualNet = annualGross * (1 - estimatedTaxRate);
  const estimatedTaxes = annualGross * estimatedTaxRate;

  const taxData = [
    { name: 'Take Home Pay', value: estimatedAnnualNet },
    { name: 'Estimated Taxes (22%)', value: estimatedTaxes },
  ];

  const COLORS = ['var(--status-success)', 'var(--status-error)'];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Card>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-accent)' }}>Income Inputs</h3>
          <Input label="Hourly Wage" prefix="$" value={hourlyWage} onChange={setHourlyWage} />
          <Input label="Hours Worked Per Week" value={hoursPerWeek} onChange={setHoursPerWeek} />
        </Card>

        <Card style={{ background: 'var(--secondary-background)', border: '2px solid var(--primary-accent)' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary-accent)', textAlign: 'center' }}>Annual Salary</h3>
          <div style={{ fontSize: '3.5rem', fontWeight: 700, color: 'var(--text-primary)', textAlign: 'center', marginBottom: '0.5rem' }}>
            ${annualGross.toLocaleString(undefined, {maximumFractionDigits: 0})}
          </div>
        </Card>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Card>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-accent)' }}>Salary Breakdown</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Monthly</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>${monthlyGross.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Bi-Weekly</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>${biWeeklyGross.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Weekly</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>${weeklyGross.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Daily (5 days)</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>${dailyGross.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
            </div>
          </div>
        </Card>

        <Card>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary-accent)' }}>Estimated Take-Home (22% Tax Bracket)</h3>
          <div style={{ height: '250px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={taxData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {taxData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: any) => `$${Number(value).toLocaleString()}`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}
