import React from 'react';
import Link from 'next/link';
import { calculatorConfigs } from '@/data/calculatorConfigs';

export function MegaFooter() {
  // Group calculators by category
  const categorizedTools: Record<string, any[]> = {};
  
  Object.keys(calculatorConfigs).forEach((slug) => {
    const config = calculatorConfigs[slug];
    if (!categorizedTools[config.category]) {
      categorizedTools[config.category] = [];
    }
    categorizedTools[config.category].push({ ...config, slug });
  });

  return (
    <footer style={{ 
      background: 'linear-gradient(135deg, #0D0F2B 0%, #1A103C 40%, #0F1F3D 100%)',
      color: '#FFFFFF',
      borderTop: '2px solid rgba(139, 92, 246, 0.3)',
      padding: '5rem 1rem 3rem 1rem',
      marginTop: 'auto',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Decorative background glow */}
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '0', left: '-50px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 0 }} />
        
        {/* Expanded Footer Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '4rem 2rem',
          marginBottom: '6rem' 
        }}>
          {/* Column 1: Brand & Mission */}
          <div style={{ gridColumn: '1 / -1', maxWidth: '400px', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-accent)', marginBottom: '1.5rem' }}>
              FinanceTools<span style={{ color: '#FFFFFF' }}>Hub</span>
            </h3>
            <p style={{ color: '#8A94A6', lineHeight: 1.8, fontSize: '1.05rem' }}>
              We build professional-grade, unbiased financial tools designed to help you crush debt, plan for retirement, and confidently grow your net worth. 100% free, forever.
            </p>
          </div>

          {/* Column 2: Core Calculator Hubs */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              CORE HUBS
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {Object.keys(categorizedTools).map((category) => {
                const sectionId = category.replace(/[\\s&]+/g, '-').toLowerCase();
                return (
                  <li key={category}>
                    <Link href={`/calculators#${sectionId}`} className="footer-link" style={{ color: '#8A94A6', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}>
                      {category}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Top Tools */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              POPULAR TOOLS
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link href="/calculators/mortgage-calculator" className="footer-link" style={{ color: '#8A94A6', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}>Mortgage Calculator</Link></li>
              <li><Link href="/calculators/compound-interest-calculator" className="footer-link" style={{ color: '#8A94A6', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}>Compound Interest</Link></li>
              <li><Link href="/calculators/debt-payoff-calculator" className="footer-link" style={{ color: '#8A94A6', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}>Debt Payoff Plan</Link></li>
              <li><Link href="/calculators/retirement-calculator" className="footer-link" style={{ color: '#8A94A6', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}>Retirement Planner</Link></li>
              <li><Link href="/calculators/net-worth-calculator" className="footer-link" style={{ color: '#8A94A6', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}>Net Worth Tracker</Link></li>
              <li><Link href="/calculators/salary-calculator" className="footer-link" style={{ color: '#8A94A6', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}>Salary Converter</Link></li>
            </ul>
          </div>

          {/* Column 4b: New Tools */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              🆕 NEW TOOLS
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link href="/calculators/crypto-staking-calculator" className="footer-link" style={{ color: '#8A94A6', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}>🪙 Crypto Staking</Link></li>
              <li><Link href="/calculators/fire-number" className="footer-link" style={{ color: '#8A94A6', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}>🔥 FIRE Number</Link></li>
              <li><Link href="/calculators/airbnb-roi-calculator" className="footer-link" style={{ color: '#8A94A6', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}>🧳 AirBnB ROI</Link></li>
              <li><Link href="/calculators/credit-card-payoff" className="footer-link" style={{ color: '#8A94A6', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}>💳 Credit Card Payoff</Link></li>
              <li><Link href="/calculators/freelancer-hourly-rate" className="footer-link" style={{ color: '#8A94A6', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}>💻 Freelancer Rate</Link></li>
              <li><Link href="/calculators/house-flipping-calculator" className="footer-link" style={{ color: '#8A94A6', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}>🔨 House Flipping</Link></li>
            </ul>
          </div>

          {/* Column 4: Learning Resources */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              LEARNING
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link href="/guides/how-compound-interest-works" className="footer-link" style={{ color: '#8A94A6', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}>Compound Interest Guide</Link></li>
              <li><Link href="/guides/what-is-a-mortgage" className="footer-link" style={{ color: '#8A94A6', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}>Homebuyer's Guide</Link></li>
              <li><Link href="/guides/fire-movement-explained" className="footer-link" style={{ color: '#8A94A6', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}>The FIRE Movement</Link></li>
              <li><Link href="/glossary/what-is-apr" className="footer-link" style={{ color: '#8A94A6', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}>Understanding APR</Link></li>
              <li><Link href="/glossary/what-is-401k" className="footer-link" style={{ color: '#8A94A6', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}>What is a 401(k)?</Link></li>
            </ul>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Local Hubs</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link href="/local/california" className="footer-link" style={{ color: '#8A94A6', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}>California Calculators</Link></li>
              <li><Link href="/local/texas" className="footer-link" style={{ color: '#8A94A6', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}>Texas Calculators</Link></li>
              <li><Link href="/local/florida" className="footer-link" style={{ color: '#8A94A6', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}>Florida Calculators</Link></li>
              <li><Link href="/local/new-york" className="footer-link" style={{ color: '#8A94A6', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}>New York Calculators</Link></li>
              <li><Link href="/local/illinois" className="footer-link" style={{ color: '#8A94A6', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}>Illinois Calculators</Link></li>
              <li><Link href="/local" className="footer-link" style={{ color: '#8A94A6', fontSize: '0.9rem', marginTop: '0.5rem', fontStyle: 'italic', textDecoration: 'none', transition: 'color 0.2s', display: 'inline-block' }}>View All 50 States →</Link></li>
            </ul>
          </div>

        </div>

        {/* Traditional Footer Bottom */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          borderTop: '1px solid rgba(139, 92, 246, 0.2)', 
          paddingTop: '3rem', 
          gap: '2rem' 
        }}>
          <div>
            <div style={{ color: '#5A6476', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              © {new Date().getFullYear()} FinanceToolsHub. All rights reserved.
            </div>
          </div>
          
          <nav style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <Link href="/about" className="footer-link" style={{ color: '#8A94A6', textDecoration: 'none', fontSize: '0.9rem' }}>About Us</Link>
            <Link href="/contact" className="footer-link" style={{ color: '#8A94A6', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</Link>
            <Link href="/privacy-policy" className="footer-link" style={{ color: '#8A94A6', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy Policy</Link>
            <Link href="/terms" className="footer-link" style={{ color: '#8A94A6', textDecoration: 'none', fontSize: '0.9rem' }}>Terms of Service</Link>
            <Link href="/disclaimer" className="footer-link" style={{ color: '#8A94A6', textDecoration: 'none', fontSize: '0.9rem' }}>Disclaimer</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
