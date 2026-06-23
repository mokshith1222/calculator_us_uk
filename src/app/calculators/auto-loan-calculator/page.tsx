import React from 'react';
import { AutoLoanCalculator } from '@/components/calculators/AutoLoanCalculator';
import { AIAnswerBlock } from '@/components/seo/AIAnswerBlock';
import { FAQSchema, CalculatorSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { CategoryNav } from '@/components/calculators/CategoryNav';
import { keywordDatabase } from '@/data/keywords';

export const metadata = {
  title: 'Auto Loan Calculator | Car Payment Estimator',
  description: 'Calculate your monthly car payment, total interest, and total cost with our free auto loan calculator. Includes trade-in value and sales tax logic.',
};

export default function AutoLoanCalculatorPage() {
  const faqs = [
    { question: "How is an auto loan calculated?", answer: "An auto loan is an amortized loan. Your monthly payment is calculated using the total amount financed (price + taxes - down payment - trade-in), the interest rate, and the loan term." },
    { question: "Does my trade-in affect my sales tax?", answer: "In most US states, yes. The trade-in value is deducted from the purchase price of the new car BEFORE sales tax is calculated, saving you money on taxes." },
    { question: "Should I choose a 60-month or 72-month loan?", answer: "A longer term (like 72 months) lowers your monthly payment, but significantly increases the total interest you pay over the life of the loan. A 60-month or 48-month loan is generally recommended." },
    { question: "What is a good down payment for a car?", answer: "Experts recommend a down payment of at least 20%. This helps offset the immediate depreciation when you drive the car off the lot, preventing you from being 'underwater' on the loan." }
  ];

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Calculators", item: "/calculators" },
    { name: "Auto Loan Calculator", item: "/calculators/auto-loan-calculator" }
  ];

  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary-accent)' }}>
        Auto Loan Calculator
      </h1>
      
      <CategoryNav currentSlug="auto-loan-calculator" />

      <AIAnswerBlock 
        title="How much car can I afford?"
        answer="A common rule of thumb is that your total car payment (including insurance and maintenance) should not exceed 10% to 15% of your monthly take-home pay."
        bullets={[
          "Aim for a 20% down payment",
          "Keep the loan term to 60 months or less",
          "Don't forget to budget for insurance and gas"
        ]}
      />

      <div style={{ margin: '3rem 0' }}>
        <AutoLoanCalculator />
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

      <CalculatorSchema keywordData={keywordDatabase['auto-loan-calculator']} />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />
    </div>
  );
}
