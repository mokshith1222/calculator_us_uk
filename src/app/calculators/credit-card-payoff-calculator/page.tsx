import React from 'react';
import { CreditCardPayoffCalculator } from '@/components/calculators/CreditCardPayoffCalculator';
import { AIAnswerBlock } from '@/components/seo/AIAnswerBlock';
import { FAQSchema, CalculatorSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { CategoryNav } from '@/components/calculators/CategoryNav';
import { keywordDatabase } from '@/data/keywords';

export const metadata = {
  title: 'Credit Card Payoff Calculator | Avoid the Minimum Payment Trap',
  description: 'Calculate how long it takes to pay off your credit card. Compare the true cost of making only minimum payments versus fixed monthly payments.',
};

export default function CreditCardPayoffPage() {
  const faqs = [
    { question: "Why are credit card minimum payments so low?", answer: "Credit card companies set minimum payments very low (usually 2-4% of the balance) so that it takes years to pay off, maximizing the interest they collect from you." },
    { question: "What is the avalanche method?", answer: "The avalanche debt payoff method involves paying minimums on all accounts, and putting all extra cash toward the balance with the highest interest rate first. This saves the most money mathematically." },
    { question: "What is the snowball method?", answer: "The debt snowball method focuses on paying off the smallest balance first for a psychological win, while paying minimums on the rest, before rolling that payment into the next smallest debt." },
    { question: "Will my credit score drop if I pay off my card?", answer: "Usually, paying off a credit card improves your credit score by lowering your credit utilization ratio. Just make sure to keep the account open so your average age of accounts doesn't drop." }
  ];

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Calculators", item: "/calculators" },
    { name: "Credit Card Payoff Calculator", item: "/calculators/credit-card-payoff-calculator" }
  ];

  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary-accent)' }}>
        Credit Card Payoff Calculator
      </h1>
      
      <CategoryNav currentSlug="credit-card-payoff-calculator" />

      <AIAnswerBlock 
        title="The Minimum Payment Trap"
        answer="Paying only the minimum on a credit card balance is the most expensive way to handle debt. Because interest accrues daily at high rates (often 20%+), making the minimum payment means the majority of your money goes straight to the bank's profit, not your principal."
        bullets={[
          "Fixed payments save you thousands in interest",
          "It can take decades to pay off a card with only minimum payments",
          "Always aim to pay more than the minimum"
        ]}
      />

      <div style={{ margin: '3rem 0' }}>
        <CreditCardPayoffCalculator />
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

      <CalculatorSchema keywordData={keywordDatabase['credit-card-payoff-calculator']} />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />
    </div>
  );
}
