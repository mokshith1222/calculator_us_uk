"use client";

import React, { useState, useMemo } from 'react';
import { Card, Input } from '@/components/ui';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export function NetWorthCalculator() {
  // Assets
  const [cash, setCash] = useState('15000');
  const [investments, setInvestments] = useState('100000');
  const [realEstate, setRealEstate] = useState('400000');
  const [vehicles, setVehicles] = useState('25000');
  const [otherAssets, setOtherAssets] = useState('10000');

  // Liabilities
  const [mortgage, setMortgage] = useState('320000');
  const [autoLoans, setAutoLoans] = useState('15000');
  const [studentLoans, setStudentLoans] = useState('30000');
  const [creditCards, setCreditCards] = useState('5000');
  const [otherDebt, setOtherDebt] = useState('0');

  const {
    totalAssets,
    totalLiabilities,
    netWorth,
    assetData,
    liabilityData
  } = useMemo(() => {
    const aCash = parseFloat(cash) || 0;
    const aInv = parseFloat(investments) || 0;
    const aRE = parseFloat(realEstate) || 0;
    const aVeh = parseFloat(vehicles) || 0;
    const aOther = parseFloat(otherAssets) || 0;

    const lMort = parseFloat(mortgage) || 0;
    const lAuto = parseFloat(autoLoans) || 0;
    const lStud = parseFloat(studentLoans) || 0;
    const lCC = parseFloat(creditCards) || 0;
    const lOther = parseFloat(otherDebt) || 0;

    const tAssets = aCash + aInv + aRE + aVeh + aOther;
    const tLiabilities = lMort + lAuto + lStud + lCC + lOther;
    const nw = tAssets - tLiabilities;

    const aData = [
      { name: 'Cash', value: aCash },
      { name: 'Investments', value: aInv },
      { name: 'Real Estate', value: aRE },
      { name: 'Vehicles', value: aVeh },
      { name: 'Other', value: aOther },
    ].filter(d => d.value > 0);

    const lData = [
      { name: 'Mortgage', value: lMort },
      { name: 'Auto Loans', value: lAuto },
      { name: 'Student Loans', value: lStud },
      { name: 'Credit Cards', value: lCC },
      { name: 'Other Debt', value: lOther },
    ].filter(d => d.value > 0);

    return {
      totalAssets: tAssets,
      totalLiabilities: tLiabilities,
      netWorth: nw,
      assetData: aData,
      liabilityData: lData
    };
  }, [cash, investments, realEstate, vehicles, otherAssets, mortgage, autoLoans, studentLoans, creditCards, otherDebt]);

  const COLORS_ASSETS = ['#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107'];
  const COLORS_LIABILITIES = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5'];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Card>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--status-success)' }}>Assets (What You Own)</h3>
          <Input label="Cash & Bank Accounts" prefix="$" value={cash} onChange={setCash} />
          <Input label="Investments & Retirement" prefix="$" value={investments} onChange={setInvestments} />
          <Input label="Real Estate Value" prefix="$" value={realEstate} onChange={setRealEstate} />
          <Input label="Vehicles Value" prefix="$" value={vehicles} onChange={setVehicles} />
          <Input label="Other Valuables" prefix="$" value={otherAssets} onChange={setOtherAssets} />
          <div style={{ marginTop: '1rem', fontWeight: 600, color: 'var(--status-success)' }}>Total Assets: ${totalAssets.toLocaleString()}</div>
        </Card>

        <Card>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--status-error)' }}>Liabilities (What You Owe)</h3>
          <Input label="Mortgages" prefix="$" value={mortgage} onChange={setMortgage} />
          <Input label="Auto Loans" prefix="$" value={autoLoans} onChange={setAutoLoans} />
          <Input label="Student Loans" prefix="$" value={studentLoans} onChange={setStudentLoans} />
          <Input label="Credit Card Balances" prefix="$" value={creditCards} onChange={setCreditCards} />
          <Input label="Other Debts" prefix="$" value={otherDebt} onChange={setOtherDebt} />
          <div style={{ marginTop: '1rem', fontWeight: 600, color: 'var(--status-error)' }}>Total Liabilities: ${totalLiabilities.toLocaleString()}</div>
        </Card>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Card style={{ background: 'var(--secondary-background)', border: '2px solid var(--primary-accent)' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary-accent)', textAlign: 'center' }}>Your Net Worth</h3>
          <div style={{ fontSize: '3.5rem', fontWeight: 700, color: netWorth >= 0 ? 'var(--status-success)' : 'var(--status-error)', textAlign: 'center', marginBottom: '0.5rem' }}>
            ${netWorth.toLocaleString(undefined, {maximumFractionDigits: 2})}
          </div>
        </Card>

        <Card>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary-accent)' }}>Assets Breakdown</h3>
          <div style={{ height: '250px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={assetData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {assetData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS_ASSETS[index % COLORS_ASSETS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: any) => `$${Number(value).toLocaleString()}`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary-accent)' }}>Liabilities Breakdown</h3>
          <div style={{ height: '250px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={liabilityData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {liabilityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS_LIABILITIES[index % COLORS_LIABILITIES.length]} />
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
