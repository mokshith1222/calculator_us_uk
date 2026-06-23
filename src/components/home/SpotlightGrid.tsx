"use client";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const TOOLS = [
  { icon: '🪙', title: 'Crypto Staking Calculator', desc: 'Calculate your APY returns on staked ETH, SOL, and more.', href: '/calculators/crypto-staking-calculator', color: '#7C3AED', glow: 'rgba(124,58,237,0.15)' },
  { icon: '🔥', title: 'FIRE Number Calculator', desc: 'Find your exact Financial Independence number today.', href: '/calculators/fire-number', color: '#EF4444', glow: 'rgba(239,68,68,0.15)' },
  { icon: '🏠', title: 'Rent vs. Buy Calculator', desc: 'Settle the debate — should you rent or buy right now?', href: '/calculators/rent-vs-buy-calculator', color: '#10B981', glow: 'rgba(16,185,129,0.15)' },
  { icon: '💳', title: 'Credit Card Payoff', desc: 'Visualize your exact path to becoming debt-free.', href: '/calculators/credit-card-payoff', color: '#F59E0B', glow: 'rgba(245,158,11,0.15)' },
  { icon: '💻', title: 'Freelancer Hourly Rate', desc: 'Calculate what you must charge to hit your salary target.', href: '/calculators/freelancer-hourly-rate', color: '#3B82F6', glow: 'rgba(59,130,246,0.15)' },
  { icon: '🔨', title: 'House Flipping Profit', desc: 'Estimate ARV, rehab costs, and your net flip profit.', href: '/calculators/house-flipping-calculator', color: '#D97706', glow: 'rgba(217,119,6,0.15)' },
];

export function SpotlightGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
      {TOOLS.map((tool) => (
        <Link key={tool.href} href={tool.href} style={{ textDecoration: 'none' }}>
          <div
            style={{
              padding: '2rem',
              borderRadius: '16px',
              background: `linear-gradient(135deg, ${tool.glow} 0%, rgba(255,255,255,0.03) 100%)`,
              border: `1px solid ${tool.color}33`,
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              cursor: 'pointer',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 40px ${tool.color}22`;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
            }}
          >
            <div style={{ fontSize: '2rem' }}>{tool.icon}</div>
            <div>
              <h4 style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>{tool.title}</h4>
              <p style={{ color: '#8A94A6', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{tool.desc}</p>
            </div>
            <div style={{ marginTop: 'auto', color: tool.color, fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              Try it free <ArrowRight size={14} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
