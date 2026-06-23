import React from 'react';
import { RefinanceCalculator } from '@/components/calculators/RefinanceCalculator';
import { AIAnswerBlock } from '@/components/seo/AIAnswerBlock';
import { FAQSchema, CalculatorSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { CategoryNav } from '@/components/calculators/CategoryNav';
import { keywordDatabase } from '@/data/keywords';

export const metadata = {
  title: 'Mortgage Refinance Calculator | Find Your Break-Even Point',
  description: 'Should you refinance your mortgage? Calculate your potential monthly savings, lifetime interest savings, and exact break-even point on closing costs.',
};

export default function RefinanceCalculatorPage() {
  const faqs = [
    { question: "When does it make sense to refinance?", answer: "It generally makes sense to refinance if you can lower your interest rate by at least 0.5% to 1%, or if you want to switch from an ARM (Adjustable Rate Mortgage) to a fixed-rate mortgage." },
    { question: "What is the break-even point?", answer: "The break-even point is how many months it takes for your monthly savings to cover the upfront closing costs. If your closing costs are $3,000 and you save $100/month, your break-even point is 30 months. You should only refinance if you plan to stay in the home longer than 30 months." },
    { question: "Are closing costs required for a refinance?", answer: "Yes, refinancing is essentially taking out a new loan to pay off the old one, which requires new appraisals, title searches, and origination fees. These typically range from 2% to 5% of the loan amount." },
    { question: "Can I roll my closing costs into the loan?", answer: "Yes, many lenders offer a 'no-closing-cost' refinance, which means they either roll the costs into the principal balance or charge you a slightly higher interest rate to cover them." }
  ];

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Calculators", item: "/calculators" },
    { name: "Refinance Calculator", item: "/calculators/refinance-calculator" }
  ];

  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary-accent)' }}>
        Mortgage Refinance Calculator
      </h1>
      
      <CategoryNav currentSlug="refinance-calculator" />

      <AIAnswerBlock 
        title="Should You Refinance?"
        answer="Refinancing can save you tens of thousands of dollars over the life of your loan, but it comes with steep upfront costs. The golden rule is to calculate your 'Break-Even Point'. If you plan to sell the house before you hit the break-even point, refinancing will actually lose you money."
        bullets={[
          "Compare your current rate to current market rates",
          "Ensure you plan to stay in the home past the break-even point",
          "Beware of extending your loan term (e.g. refinancing a 30-year into a new 30-year)"
        ]}
      />

      <div style={{ margin: '3rem 0' }}>
        <RefinanceCalculator />
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

      <CalculatorSchema keywordData={keywordDatabase['refinance-calculator']} />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />
    </div>
  );
}
