import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui';
import { PopularToolsGrid } from '@/components/calculators/PopularToolsGrid';
import { NewsletterForm } from '@/components/home/NewsletterForm';
import { SpotlightGrid } from '@/components/home/SpotlightGrid';
import { ShieldCheck, TrendingUp, Calculator, Home, CreditCard, PieChart, Briefcase, PlusCircle, ArrowRight } from 'lucide-react';

export default function Homepage() {
  return (
    <div style={{ background: 'var(--background)' }}>
      {/* LOCAL STYLES FOR PREMIUM AESTHETICS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes drift {
          0% { transform: translateY(10vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.15; }
          90% { opacity: 0.15; }
          100% { transform: translateY(-10vh) rotate(5deg); opacity: 0; }
        }
        .bg-math {
          position: absolute;
          color: var(--primary-accent);
          font-family: monospace;
          font-weight: 700;
          opacity: 0;
          pointer-events: none;
          z-index: 0;
          user-select: none;
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.05);
          border-radius: 16px;
        }
        .hero-gradient {
          background: radial-gradient(circle at top right, rgba(232, 213, 158, 0.25) 0%, rgba(250, 250, 250, 1) 50%);
        }
        .featured-card {
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
        }
        .featured-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.08);
          border-color: var(--primary-accent);
        }
        .category-card {
          transition: all 0.2s ease;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
        }
        .category-card:hover {
          background: #FAFAFA;
          border-color: var(--primary-accent);
        }
        .category-icon-wrapper {
          transition: transform 0.2s ease;
        }
        .category-card:hover .category-icon-wrapper {
          transform: scale(1.1);
        }
      `}} />

      {/* ASYMMETRICAL GLASS HERO */}
      <section className="hero-gradient" style={{ 
        padding: '6rem 1rem',
        borderBottom: '1px solid #E2E8F0',
        marginBottom: '4rem',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {/* Animated Background Math */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none' }} aria-hidden="true">
          <div className="bg-math" style={{ top: '15%', left: '10%', fontSize: '1.5rem', animation: 'drift 12s linear infinite 0s' }}>A = P(1 + r/n)ⁿᵗ</div>
          <div className="bg-math" style={{ top: '65%', left: '5%', fontSize: '2rem', animation: 'drift 15s linear infinite 2s' }}>∑ (CF_t / (1+r)^t)</div>
          <div className="bg-math" style={{ top: '25%', left: '45%', fontSize: '1.2rem', animation: 'drift 10s linear infinite 4s' }}>ROI = (Net Profit / Cost) × 100</div>
          <div className="bg-math" style={{ top: '80%', left: '35%', fontSize: '1.8rem', animation: 'drift 14s linear infinite 1s' }}>M = P[i(1+i)ⁿ] / [(1+i)ⁿ - 1]</div>
          <div className="bg-math" style={{ top: '40%', left: '85%', fontSize: '1.4rem', animation: 'drift 11s linear infinite 3s' }}>E = mc²</div>
          <div className="bg-math" style={{ top: '10%', left: '75%', fontSize: '2.5rem', animation: 'drift 16s linear infinite 5s' }}>+8.4% APY</div>
          <div className="bg-math" style={{ top: '85%', left: '80%', fontSize: '1.6rem', animation: 'drift 13s linear infinite 2.5s' }}>$1,250,000</div>
          <div className="bg-math" style={{ top: '50%', left: '20%', fontSize: '1.3rem', animation: 'drift 12s linear infinite 1.5s' }}>r = n(A/P)^(1/nt) - n</div>
        </div>

        <div className="container" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 10
        }}>
          {/* Left Text Column */}
          <div>
            <div style={{ 
              display: 'inline-block', 
              background: 'rgba(173, 156, 142, 0.1)', 
              color: 'var(--primary-accent)', 
              padding: '0.35rem 1rem', 
              borderRadius: '2rem',
              fontSize: '0.85rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              letterSpacing: '0.05em',
              border: '1px solid rgba(173, 156, 142, 0.2)'
            }}>
              100% FREE FINANCIAL TOOLS
            </div>
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              lineHeight: 1.1, 
              color: '#111', 
              marginBottom: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.02em'
            }}>
              Master Your Wealth <br/><span style={{ color: 'var(--primary-accent)' }}>With Precision.</span>
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'var(--text-muted)', 
              marginBottom: '2.5rem',
              lineHeight: 1.6,
              maxWidth: '500px'
            }}>
              Professional-grade calculators, expert methodology, and unbiased tools to help you plan your retirement, crush debt, and build your net worth.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="#featured" style={{
                background: 'var(--primary-accent)',
                color: '#FFFFFF',
                padding: '1rem 2rem',
                borderRadius: '8px',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '1.1rem',
                transition: 'background 0.2s ease',
                boxShadow: '0 4px 14px 0 rgba(173, 156, 142, 0.39)'
              }}>
                Start Calculating &rarr;
              </Link>
            </div>
          </div>

          {/* Right Floating Glass Graphic */}
          <div className="animate-float" style={{ position: 'relative', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="glass-panel" style={{ 
              width: '100%', 
              maxWidth: '400px', 
              padding: '2rem',
              position: 'relative',
              zIndex: 10
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(173, 156, 142, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <TrendingUp size={20} color="var(--primary-accent)" />
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Projected Net Worth</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111' }}>$1,250,000</div>
                </div>
              </div>
              
              <div style={{ height: '8px', background: 'var(--secondary-accent)', borderRadius: '4px', marginBottom: '1.5rem', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '70%', background: 'var(--primary-accent)', borderRadius: '4px' }}></div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'var(--secondary-background)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(173, 156, 142, 0.2)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Monthly Growth</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2E7D32' }}>+8.4%</div>
                </div>
                <div style={{ background: 'var(--secondary-background)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(173, 156, 142, 0.2)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Debt Reduction</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-accent)' }}>-$450</div>
                </div>
              </div>
            </div>
            
            {/* Decorative background circle */}
            <div style={{ 
              position: 'absolute', 
              top: '50%', left: '50%', 
              transform: 'translate(-50%, -50%)', 
              width: '300px', height: '300px', 
              background: 'radial-gradient(circle, rgba(173, 156, 142, 0.15) 0%, rgba(255,255,255,0) 70%)',
              borderRadius: '50%',
              zIndex: 1
            }}></div>
          </div>
        </div>
      </section>

      {/* FEATURED TOP 3 CALCULATORS */}
      <section id="featured" style={{ padding: '0 1rem 6rem 1rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#111', fontWeight: 800 }}>Featured Tools</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Our most popular calculators used by millions.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Card 1: Mortgage */}
            <Link href="/calculators/mortgage-calculator" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="featured-card" style={{ padding: '2.5rem', borderRadius: '16px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '56px', height: '56px', background: 'rgba(173, 156, 142, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Home size={28} color="var(--primary-accent)" />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#111' }}>Mortgage Calculator</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, flex: 1 }}>Calculate your monthly payments, see amortization schedules, and understand exactly how much house you can afford.</p>
                <div style={{ marginTop: '1.5rem', color: 'var(--primary-accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Calculate Mortgage <ArrowRight size={16} />
                </div>
              </div>
            </Link>

            {/* Card 2: Compound Interest */}
            <Link href="/calculators/compound-interest-calculator" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="featured-card" style={{ padding: '2.5rem', borderRadius: '16px', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                {/* Popular Badge */}
                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: '#E8D59E', color: '#000', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: '2rem', letterSpacing: '0.05em' }}>MOST POPULAR</div>
                
                <div style={{ width: '56px', height: '56px', background: 'rgba(173, 156, 142, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <TrendingUp size={28} color="var(--primary-accent)" />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#111' }}>Compound Interest</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, flex: 1 }}>Visualize how your investments will grow over time with the magic of compound interest and regular monthly contributions.</p>
                <div style={{ marginTop: '1.5rem', color: 'var(--primary-accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  See Your Growth <ArrowRight size={16} />
                </div>
              </div>
            </Link>

            {/* Card 3: Debt Payoff */}
            <Link href="/calculators/debt-payoff-calculator" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="featured-card" style={{ padding: '2.5rem', borderRadius: '16px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '56px', height: '56px', background: 'rgba(173, 156, 142, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <CreditCard size={28} color="var(--primary-accent)" />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#111' }}>Debt Payoff</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, flex: 1 }}>Create a personalized debt snowball or avalanche plan to become debt-free faster and save thousands in interest.</p>
                <div style={{ marginTop: '1.5rem', color: 'var(--primary-accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Crush Your Debt <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* THE 6 CATEGORY HUBS */}
      <section className="hubs-section" style={{ padding: '6rem 1rem', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#111', fontWeight: 800, marginBottom: '1rem' }}>
              Explore the Hubs
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Access our complete library of 60 premium financial tools, organized beautifully by category.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            
            <Link href="/calculators#mortgage-home" style={{ textDecoration: 'none' }}>
              <div className="category-card" style={{ padding: '2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div className="category-icon-wrapper" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(173, 156, 142, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Home size={24} color="var(--primary-accent)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: '#111', fontWeight: 700, marginBottom: '0.25rem' }}>Mortgage & Home</h3>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>10 tools available</div>
                </div>
              </div>
            </Link>

            <Link href="/calculators#debt-loans" style={{ textDecoration: 'none' }}>
              <div className="category-card" style={{ padding: '2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div className="category-icon-wrapper" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(173, 156, 142, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <CreditCard size={24} color="var(--primary-accent)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: '#111', fontWeight: 700, marginBottom: '0.25rem' }}>Debt & Loans</h3>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>10 tools available</div>
                </div>
              </div>
            </Link>

            <Link href="/calculators#investing" style={{ textDecoration: 'none' }}>
              <div className="category-card" style={{ padding: '2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div className="category-icon-wrapper" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(173, 156, 142, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <TrendingUp size={24} color="var(--primary-accent)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: '#111', fontWeight: 700, marginBottom: '0.25rem' }}>Investing</h3>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>10 tools available</div>
                </div>
              </div>
            </Link>

            <Link href="/calculators#retirement" style={{ textDecoration: 'none' }}>
              <div className="category-card" style={{ padding: '2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div className="category-icon-wrapper" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(173, 156, 142, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <PieChart size={24} color="var(--primary-accent)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: '#111', fontWeight: 700, marginBottom: '0.25rem' }}>Retirement</h3>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>10 tools available</div>
                </div>
              </div>
            </Link>

            <Link href="/calculators#income-taxes" style={{ textDecoration: 'none' }}>
              <div className="category-card" style={{ padding: '2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div className="category-icon-wrapper" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(173, 156, 142, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Briefcase size={24} color="var(--primary-accent)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: '#111', fontWeight: 700, marginBottom: '0.25rem' }}>Income & Taxes</h3>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>10 tools available</div>
                </div>
              </div>
            </Link>

            <Link href="/calculators/category/bonus" style={{ textDecoration: 'none' }}>
              <div className="category-card" style={{ padding: '2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div className="category-icon-wrapper" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(173, 156, 142, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <PlusCircle size={24} color="var(--primary-accent)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: '#111', fontWeight: 700, marginBottom: '0.25rem' }}>Bonus Tools</h3>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>10 tools available</div>
                </div>
              </div>
            </Link>

            {/* NEW: Crypto & Web3 */}
            <Link href="/calculators/category/crypto" style={{ textDecoration: 'none' }}>
              <div className="category-card" style={{ padding: '2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1.5rem', border: '1px solid rgba(139,92,246,0.3)', background: 'linear-gradient(135deg, rgba(139,92,246,0.04) 0%, #fff 100%)' }}>
                <div className="category-icon-wrapper" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(139,92,246,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.5rem' }}>
                  🪙
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.2rem', color: '#111', fontWeight: 700, marginBottom: '0.25rem' }}>Crypto & Web3</h3>
                    <span style={{ background: '#6D28D9', color: '#fff', fontSize: '0.65rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '2rem', letterSpacing: '0.05em' }}>NEW</span>
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>4 tools — Staking, DCA, IL & more</div>
                </div>
              </div>
            </Link>

            {/* NEW: Advanced Real Estate */}
            <Link href="/calculators/category/advanced-real-estate" style={{ textDecoration: 'none' }}>
              <div className="category-card" style={{ padding: '2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1.5rem', border: '1px solid rgba(16,185,129,0.3)', background: 'linear-gradient(135deg, rgba(16,185,129,0.04) 0%, #fff 100%)' }}>
                <div className="category-icon-wrapper" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(16,185,129,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.5rem' }}>
                  🏠
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.2rem', color: '#111', fontWeight: 700, marginBottom: '0.25rem' }}>Advanced Real Estate</h3>
                    <span style={{ background: '#047857', color: '#fff', fontSize: '0.65rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '2rem', letterSpacing: '0.05em' }}>NEW</span>
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>4 tools — Flipping, AirBnB, HELOC</div>
                </div>
              </div>
            </Link>

            {/* NEW: Business & Tax */}
            <Link href="/calculators/category/business" style={{ textDecoration: 'none' }}>
              <div className="category-card" style={{ padding: '2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1.5rem', border: '1px solid rgba(245,158,11,0.3)', background: 'linear-gradient(135deg, rgba(245,158,11,0.04) 0%, #fff 100%)' }}>
                <div className="category-icon-wrapper" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(245,158,11,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.5rem' }}>
                  💼
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.2rem', color: '#111', fontWeight: 700, marginBottom: '0.25rem' }}>Business & Tax</h3>
                    <span style={{ background: '#B45309', color: '#fff', fontSize: '0.65rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '2rem', letterSpacing: '0.05em' }}>NEW</span>
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>4 tools — Margin, Freelancer, Tax</div>
                </div>
              </div>
            </Link>

          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/calculators" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--primary-accent)',
              fontWeight: 700,
              fontSize: '1.1rem',
              textDecoration: 'none',
              padding: '0.75rem 1.5rem',
              border: '2px solid var(--primary-accent)',
              borderRadius: '8px',
              transition: 'all 0.2s ease'
            }}>
              View Full 60-Tool Directory <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 🆕 NEW TOOL SPOTLIGHT */}
      <section className="keep-bg" style={{ padding: '6rem 1rem', background: 'linear-gradient(135deg, #0D0F2B 0%, #1A103C 100%)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.4)', borderRadius: '2rem', padding: '0.4rem 1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#A78BFA', letterSpacing: '0.1em' }}>🆕 JUST LAUNCHED — 20 NEW TOOLS</span>
            </div>
            <h2 style={{ fontSize: '2.5rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '1rem' }}>New Tool Spotlight</h2>
            <p style={{ color: '#8A94A6', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              We just launched 20 brand-new premium calculators across Crypto, Real Estate, FIRE, and Business — all completely free.
            </p>
          </div>

          <SpotlightGrid />
        </div>
      </section>

      {/* METHODOLOGY & TRUST SECTION */}
      <section style={{ padding: '8rem 1rem', background: 'var(--secondary-background)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ color: 'var(--primary-accent)', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                Our Methodology
              </div>
              <h2 style={{ fontSize: '2.5rem', color: '#111', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
                Institutional-Grade Math,<br/>Built for You.
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                We don't use simple estimates. Our universal calculation engine is built on the exact same formulas used by the Federal Reserve, top-tier brokerages, and massive lending institutions. 
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <ShieldCheck color="var(--primary-accent)" style={{ marginTop: '0.2rem' }} />
                  <div>
                    <h3 style={{ color: '#111', fontWeight: 600, marginBottom: '0.25rem' }}>Bank-Level Accuracy</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Daily compounding, exact day-counts, and true amortization schedules.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <TrendingUp color="var(--primary-accent)" style={{ marginTop: '0.2rem' }} />
                  <div>
                    <h3 style={{ color: '#111', fontWeight: 600, marginBottom: '0.25rem' }}>100% Data Privacy</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>All calculations happen locally in your browser. We never see your numbers.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div style={{ position: 'relative' }}>
              <div style={{ background: '#FFFFFF', padding: '3rem', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)', border: '1px solid #E2E8F0', position: 'relative', zIndex: 10 }}>
                <h3 style={{ fontSize: '1.5rem', color: '#111', marginBottom: '1.5rem', fontWeight: 700 }}>Compound Interest Engine</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid #F1F5F9', paddingBottom: '1rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Initial Balance</span>
                  <span style={{ fontWeight: 600 }}>$10,000.00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid #F1F5F9', paddingBottom: '1rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Monthly Contribution</span>
                  <span style={{ fontWeight: 600 }}>$500.00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid #F1F5F9', paddingBottom: '1rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Annual Return (APY)</span>
                  <span style={{ fontWeight: 600, color: '#2E7D32' }}>8.4%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1rem' }}>
                  <span style={{ color: '#111', fontWeight: 700, fontSize: '1.2rem' }}>Total in 30 Years</span>
                  <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--primary-accent)' }}>$894,321.45</span>
                </div>
              </div>
              <div style={{ position: 'absolute', top: '-2rem', right: '-2rem', width: '100px', height: '100px', borderRadius: '50%', background: 'radial-gradient(circle, var(--primary-accent) 0%, transparent 70%)', opacity: 0.2, zIndex: 1 }}></div>
              <div style={{ position: 'absolute', bottom: '-2rem', left: '-2rem', width: '150px', height: '150px', borderRadius: '50%', background: 'radial-gradient(circle, var(--secondary-accent) 0%, transparent 70%)', opacity: 0.3, zIndex: 1 }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR TOOLS & RECENTLY USED SECTION */}
      <section style={{ padding: '2rem 1rem', background: 'var(--background)' }}>
        <div className="container">
          <PopularToolsGrid />
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section style={{ padding: '6rem 1rem', background: 'var(--background)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div style={{ padding: '2rem', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary-accent)', marginBottom: '0.5rem' }}>60+</div>
              <h3 style={{ fontSize: '1.2rem', color: '#111', fontWeight: 700 }}>Financial Calculators</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>From mortgages to retirement.</p>
            </div>
            <div style={{ padding: '2rem', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary-accent)', marginBottom: '0.5rem' }}>1M+</div>
              <h3 style={{ fontSize: '1.2rem', color: '#111', fontWeight: 700 }}>Calculations Run</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Trusted by thousands of users daily.</p>
            </div>
            <div style={{ padding: '2rem', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary-accent)', marginBottom: '0.5rem' }}>100%</div>
              <h3 style={{ fontSize: '1.2rem', color: '#111', fontWeight: 700 }}>Free & Private</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>No signups, no tracking, pure math.</p>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR QUESTIONS SECTION */}
      <section style={{ padding: '6rem 1rem', background: 'var(--secondary-background)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#111', fontWeight: 800, marginBottom: '1rem' }}>Popular Financial Questions</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Expert answers to the most common personal finance queries.</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111', marginBottom: '0.5rem' }}>How much house can I actually afford?</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>The general rule of thumb is the 28/36 rule. Your maximum household expenses should not exceed 28% of your gross monthly income, and your total debt payments (including the mortgage) should not exceed 36%.</p>
            </div>
            <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111', marginBottom: '0.5rem' }}>What is the difference between APR and Interest Rate?</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>The interest rate is the cost of borrowing the principal loan amount. The APR (Annual Percentage Rate) includes the interest rate PLUS other costs like broker fees, discount points, and closing costs, giving you the true cost of the loan.</p>
            </div>
            <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--secondary-accent)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111', marginBottom: '0.5rem' }}>Should I pay off debt or invest?</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Mathematically, it depends on the interest rates. If your debt is high-interest (like a 20% credit card), always pay that off first. If your debt is low-interest (like a 3% mortgage), you might build more wealth by investing your extra cash in the stock market (historic avg 8-10%).</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/glossary" style={{ color: 'var(--primary-accent)', fontWeight: 600, textDecoration: 'underline' }}>Explore the Finance Glossary →</Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER CAPTURE SECTION */}
      <section className="keep-bg" style={{ padding: '6rem 1rem', background: 'var(--primary-accent)', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', color: '#FFFFFF' }}>Join 50,000+ Smart Investors</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', opacity: 0.9 }}>Get our weekly breakdown of macroeconomic trends, compounding strategies, and early retirement blueprints delivered straight to your inbox.</p>
          <NewsletterForm />
        </div>
      </section>

    </div>
  );
}
