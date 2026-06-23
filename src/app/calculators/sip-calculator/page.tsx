import React from 'react';
import { SIPCalculator } from '@/components/calculators/SIPCalculator';
import { AIAnswerBlock } from '@/components/seo/AIAnswerBlock';
import { FAQSchema, CalculatorSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { CategoryNav } from '@/components/calculators/CategoryNav';
import { keywordDatabase } from '@/data/keywords';

export const metadata = {
  title: 'SIP Calculator | Systematic Investment Plan Returns',
  description: 'Calculate your mutual fund returns with our free SIP calculator. Visualize your wealth growth and the power of compounding over time.',
};

export default function SIPCalculatorPage() {
  const faqs = [
    { question: "What is an SIP?", answer: "A Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly (e.g., monthly) in a mutual fund or ETF, rather than making a lump-sum investment." },
    { question: "How does SIP calculating work?", answer: "SIP calculators use compound interest formulas adapted for periodic monthly contributions. The formula calculates the future value of a series of equal payments at regular intervals." },
    { question: "Why is SIP recommended for long-term wealth?", answer: "SIP enforces investing discipline and benefits from Rupee/Dollar Cost Averaging. You buy more units when the market is low and fewer when the market is high, smoothing out volatility." },
    { question: "Can I stop an SIP at any time?", answer: "Yes, SIPs are entirely flexible. You can pause, stop, or increase your SIP amount at any time without penalties in most mutual funds." }
  ];

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Calculators", item: "/calculators" },
    { name: "SIP Calculator", item: "/calculators/sip-calculator" }
  ];

  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary-accent)' }}>
        SIP Calculator
      </h1>
      
      <CategoryNav currentSlug="sip-calculator" />

      <AIAnswerBlock 
        title="What is an SIP?"
        answer="A Systematic Investment Plan (SIP) is a disciplined way to invest a fixed amount of money at regular intervals into a mutual fund or ETF. It helps you build wealth over the long term through the power of compounding."
        bullets={[
          "Averages out the cost of investing (Dollar-Cost Averaging)",
          "Requires low initial capital (start with as little as $50/month)",
          "Enforces financial discipline"
        ]}
      />

      <div style={{ margin: '3rem 0' }}>
        <SIPCalculator />
      </div>

      {/* SEO & Schema */}
      <section style={{ marginTop: '4rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-accent)', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{ padding: '1.5rem', background: '#FAFAFA', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111', marginBottom: '0.5rem' }}>{faq.question}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <CalculatorSchema keywordData={keywordDatabase['sip-calculator']} />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />
    </div>
  );
}
