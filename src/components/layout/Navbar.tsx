"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { calculatorConfigs } from '@/data/calculatorConfigs';
import { useRouter } from 'next/navigation';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { useCurrency, CURRENCIES } from '@/contexts/CurrencyContext';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof calculatorConfigs>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { currency, setCurrency } = useCurrency();

  // Close search results when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle Search
  useEffect(() => {
    if (searchQuery.length > 1) {
      const allConfigs = Object.keys(calculatorConfigs).map(key => ({
        ...calculatorConfigs[key],
        slug: key
      }));
      const results = allConfigs.filter((c: any) => 
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        c.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header style={{ 
      background: 'var(--card-bg)', 
      borderBottom: '1px solid #E2E8F0',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        
        {/* Top Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          
          {/* Logo */}
          <Link href="/" onClick={closeMobileMenu} style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-accent)', textDecoration: 'none' }}>
            FinanceTools<span style={{ color: 'var(--text-primary)' }}>Hub</span>
          </Link>


        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link href="/compare" style={{ fontWeight: 600, color: '#F59E0B' }}>Compare PRO</Link>
          <Link href="/calculators" style={{ fontWeight: 600, color: 'var(--primary-accent)' }}>All Calculators</Link>
          <Link href="/calculators/category/mortgage" style={{ fontWeight: 500 }}>Mortgages</Link>
          <Link href="/calculators/category/crypto" style={{ fontWeight: 500 }}>Crypto</Link>
          <Link href="/calculators/category/business" style={{ fontWeight: 500 }}>Business</Link>
          <Link href="/dashboard" style={{ fontWeight: 600, background: 'var(--primary-accent)', color: '#fff', padding: '0.4rem 0.8rem', borderRadius: '6px' }}>Dashboard</Link>
          
          <select 
            value={currency.code} 
            onChange={(e) => setCurrency(e.target.value)}
            style={{ padding: '0.4rem', borderRadius: '6px', border: '1px solid var(--secondary-accent)', background: 'var(--secondary-background)', color: 'var(--text-primary)', cursor: 'pointer', outline: 'none' }}
          >
            {CURRENCIES.map(c => (
              <option key={c.code} value={c.code}>{c.symbol} {c.code}</option>
            ))}
          </select>

          <ThemeToggle />
        </nav>

          {/* Hamburger Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--primary-accent)' }}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Bottom Row: Desktop Search */}
        <div className="desktop-search" style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '0.25rem' }}>
          <div ref={searchRef} style={{ position: 'relative', width: '100%', maxWidth: '600px' }}>
            <input 
              type="text" 
              placeholder="Search 60+ calculators..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              style={{ 
                padding: '0.6rem 1rem', 
                borderRadius: '20px', 
                border: '1px solid var(--secondary-accent)', 
                width: '100%',
                outline: 'none',
                background: 'var(--secondary-background)',
                color: 'var(--text-primary)'
              }}
              aria-label="Search Calculators"
            />
            {isSearchFocused && searchResults.length > 0 && (
              <div style={{ position: 'absolute', top: '100%', left: 0, width: '100%', background: 'var(--card-bg)', border: '1px solid var(--secondary-accent)', borderRadius: '8px', marginTop: '0.5rem', boxShadow: 'var(--shadow-md)', zIndex: 101, overflow: 'hidden' }}>
                {searchResults.map((res: any) => (
                  <div key={res.slug} 
                       onClick={() => {
                         router.push(`/calculators/${res.slug}`);
                         setIsSearchFocused(false);
                         setSearchQuery('');
                       }}
                       style={{ padding: '0.8rem 1rem', cursor: 'pointer', borderBottom: '1px solid var(--secondary-accent)' }}>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>{res.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{res.category}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" style={{ position: 'absolute', top: '100%', left: 0, width: '100%', background: 'var(--card-bg)', borderBottom: '1px solid var(--secondary-accent)', padding: '1rem', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--secondary-accent)', width: '100%', outline: 'none', background: 'var(--secondary-background)', color: 'var(--text-primary)' }}
          />
          {searchResults.length > 0 && (
            <div style={{ background: 'var(--secondary-background)', borderRadius: '8px', padding: '0.5rem' }}>
              {searchResults.map((res: any) => (
                <div key={res.slug} 
                     onClick={() => {
                       router.push(`/calculators/${res.slug}`);
                       closeMobileMenu();
                       setSearchQuery('');
                     }}
                     style={{ padding: '0.8rem', cursor: 'pointer', borderBottom: '1px solid var(--secondary-accent)' }}>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{res.name}</div>
                </div>
              ))}
            </div>
          )}
          <Link href="/calculators/category/mortgage" style={{ display: 'block', padding: '0.5rem 1rem', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '0.95rem' }}>Mortgage & Home</Link>
          <Link href="/calculators/category/advanced-real-estate" style={{ display: 'block', padding: '0.5rem 1rem', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '0.95rem' }}>Advanced Real Estate</Link>
          <Link href="/calculators/category/debt" style={{ display: 'block', padding: '0.5rem 1rem', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '0.95rem' }}>Debt & Loans</Link>
          <Link href="/calculators/category/investing" style={{ display: 'block', padding: '0.5rem 1rem', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '0.95rem' }}>Investing</Link>
          <Link href="/calculators/category/retirement" style={{ display: 'block', padding: '0.5rem 1rem', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '0.95rem' }}>Retirement</Link>
          <Link href="/calculators/category/crypto" style={{ display: 'block', padding: '0.5rem 1rem', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '0.95rem' }}>Crypto & Web3</Link>
          <Link href="/calculators/category/business" style={{ display: 'block', padding: '0.5rem 1rem', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '0.95rem' }}>Business & Tax</Link>
          <Link href="/calculators/category/taxes" style={{ display: 'block', padding: '0.5rem 1rem', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '0.95rem' }}>Income Taxes</Link>
          <Link href="/contact" style={{ display: 'block', padding: '0.5rem 1rem', textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 600 }}>Contact</Link>
          <div style={{ padding: '0.5rem 1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Currency:</span>
            <select 
              value={currency.code} 
              onChange={(e) => setCurrency(e.target.value)}
              style={{ padding: '0.4rem', borderRadius: '6px', border: '1px solid var(--secondary-accent)', background: 'var(--secondary-background)', color: 'var(--text-primary)', cursor: 'pointer', outline: 'none' }}
            >
              {CURRENCIES.map(c => (
                <option key={c.code} value={c.code}>{c.symbol} {c.code}</option>
              ))}
            </select>
          </div>
          <div style={{ padding: '0.5rem 1rem' }}>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
