import React from 'react';

export const metadata = {
  title: 'About Us | FinanceToolsHub',
  description: 'Learn more about FinanceToolsHub, our mission, and our commitment to providing accurate, free financial calculators and guides.',
};

export default function AboutPage() {
  return (
    <div className="container" style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary-accent)' }}>About FinanceToolsHub</h1>
      <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
        <p>
          Welcome to <strong>FinanceToolsHub</strong>, your trusted destination for premium financial calculators and in-depth educational resources.
        </p>
        <h2 style={{ color: 'var(--primary-accent)', marginTop: '2rem', marginBottom: '1rem' }}>Our Mission</h2>
        <p>
          Our mission is simple: to demystify personal finance. Whether you are buying your first home, trying to get out of debt, or planning for an early retirement, we believe that everyone deserves access to accurate, easy-to-use tools to make informed decisions.
        </p>
        <h2 style={{ color: 'var(--primary-accent)', marginTop: '2rem', marginBottom: '1rem' }}>Why Choose Us?</h2>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Accuracy:</strong> Our calculators use industry-standard formulas to ensure the highest degree of precision.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Transparency:</strong> We show our math. Every tool comes with a clear breakdown of the formulas and step-by-step logic used.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Education First:</strong> We don't just give you a number; we provide comprehensive guides, glossaries, and FAQs to help you understand what the numbers mean.</li>
        </ul>
        <h2 style={{ color: 'var(--primary-accent)', marginTop: '2rem', marginBottom: '1rem' }}>Our Commitment</h2>
        <p>
          We are committed to maintaining a fast, accessible, and user-friendly platform. Our tools are free to use and designed with a "Quiet Luxury" aesthetic to provide a calm, professional experience as you plan your financial future.
        </p>
      </div>
    </div>
  );
}
