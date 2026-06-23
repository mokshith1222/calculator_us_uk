import React from 'react';
import { CompoundInterestCalculator } from '@/components/calculators/CompoundInterestCalculator';
import { AIAnswerBlock } from '@/components/seo/AIAnswerBlock';
import { AuthorInfo, KeyTakeaways, SummaryTable, SourcesAndReferences } from '@/components/seo/AICitationLayer';
import { FAQSchema, CalculatorSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { keywordDatabase } from '@/data/keywords';
import Link from 'next/link';
import { CategoryNav } from '@/components/calculators/CategoryNav';

export const metadata = {
  title: 'Compound Interest Calculator | See Your Money Grow',
  description: 'Calculate how your money can grow over time with our compound interest calculator. Includes monthly contributions and growth charts.',
};

export default function CompoundInterestPage() {
  const keywordData = keywordDatabase["compound-interest-calculator"];

  const faqs = [
    { question: "What is compound interest?", answer: "Compound interest is the interest you earn on both your original money and on the interest you keep accumulating. It allows your wealth to grow at an accelerating rate over time." },
    { question: "How does compound interest differ from simple interest?", answer: "Simple interest is calculated only on the principal amount, whereas compound interest is calculated on the principal amount AND the accumulated interest from previous periods." },
    { question: "What is the formula for compound interest?", answer: "The formula is A = P(1 + r/n)^(nt), where A is the final amount, P is the principal, r is the annual interest rate, n is the number of times interest is compounded per year, and t is the time in years." },
    { question: "How can I double my money?", answer: "A common shortcut is the Rule of 72. Divide 72 by your annual interest rate to estimate how many years it will take to double your investment." },
    { question: "What is a good rate of return?", answer: "Historically, the stock market (e.g., S&P 500) has returned an average of about 7-10% annually before inflation. A 'good' rate depends on your risk tolerance and investment vehicle." },
    { question: "How often does interest compound?", answer: "Interest can compound daily, monthly, quarterly, or annually depending on the account. More frequent compounding leads to slightly higher returns." },
    { question: "What is APY?", answer: "Annual Percentage Yield (APY) reflects the true rate of return earned on an investment in a year, taking into account the effect of compounding interest." },
    { question: "Why is starting early important?", answer: "Because compound interest grows exponentially, giving your money more time to grow has a massive impact on the final outcome." },
    { question: "Should I invest a lump sum or monthly?", answer: "If you have a lump sum, investing it immediately usually beats dollar-cost averaging mathematically. But monthly contributions are the most practical way for most people to build wealth over time." },
    { question: "Does inflation affect my returns?", answer: "Yes, inflation decreases your purchasing power. Your 'real' return is your interest rate minus the inflation rate." },
    { question: "Are compound interest calculators accurate?", answer: "They provide a mathematically accurate projection based on steady returns. In reality, market returns fluctuate, so consider these calculators as estimates." },
    { question: "How do taxes affect compound interest?", answer: "Taxes can reduce your net return unless the money is growing in a tax-advantaged account like a Roth IRA or 401(k)." },
    { question: "Can you lose money with compound interest?", answer: "Compound interest itself doesn't cause losses. However, if your investment loses value (e.g., stocks crash), the compounding effect works against your balance." },
    { question: "Is a high-yield savings account good for compound interest?", answer: "Yes, HYSAs are safe and earn compound interest, but the rates are typically lower than investing in the stock market over the long term." },
    { question: "What is the impact of a 1% difference in fees?", answer: "Over 20-30 years, a 1% higher fee can reduce your final portfolio value by hundreds of thousands of dollars." },
    { question: "Do dividends compound?", answer: "Yes, if you reinvest your dividends, they purchase more shares, which then pay their own dividends, accelerating the compounding effect." },
    { question: "What is an index fund?", answer: "A mutual fund or ETF designed to follow certain preset rules so that it tracks a specified basket of underlying investments. They are popular vehicles for long-term compound growth." },
    { question: "Can compound interest help me retire early?", answer: "Absolutely. Maximizing your savings rate and allowing your investments to compound over a decade or more is the core principle of the FIRE movement." },
    { question: "How much should I contribute monthly?", answer: "Aim for at least 15-20% of your income, but any amount helps. The key is consistency." },
    { question: "What is continuous compounding?", answer: "A theoretical calculation where interest is compounded an infinite number of times. The formula uses Euler's number (e)." }
  ];

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Calculators", item: "/calculators" },
    { name: "Compound Interest Calculator", item: "/calculators/compound-interest-calculator" }
  ];

  return (
    <div className="container">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary-accent)' }}>
        Compound Interest Calculator
      </h1>
      
      <CategoryNav currentSlug="compound-interest-calculator" />

      <AIAnswerBlock 
        title="Direct Answer: How does compound interest work?"
        answer="Compound interest is the interest calculated on the initial principal AND the accumulated interest from previous periods. It creates a snowball effect, allowing your money to grow exponentially over time."
        bullets={[
          "Initial deposit earns interest",
          "Interest is added to your balance",
          "In the next period, you earn interest on both your deposit and past interest",
          "Over long periods (10+ years), the growth becomes massive"
        ]}
      />

      <AuthorInfo 
        authorName="FinanceToolsHub Team" 
        authorRole="Investing Analysts" 
        updatedDate={new Date().toLocaleDateString()} 
      />

      <KeyTakeaways 
        takeaways={[
          "Compound interest allows your wealth to snowball because you earn interest on your interest.",
          "Time is the most important factor in compound growth; starting early makes a massive difference.",
          "Even small, consistent monthly contributions can grow into large sums over decades."
        ]}
      />

      <SummaryTable 
        title="Variables in Compound Interest"
        rows={[
          { label: "Principal (P)", value: "The starting amount of your investment." },
          { label: "Rate (r)", value: "The annual interest rate or expected return." },
          { label: "Time (t)", value: "The number of years the money is invested." },
          { label: "Contributions (PMT)", value: "Regular additions you make to the principal." }
        ]}
      />

      <div style={{ marginBottom: '4rem' }}>
        <CompoundInterestCalculator />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
        <div>
          <h2 style={{ color: 'var(--primary-accent)' }}>Formula</h2>
          <div style={{ background: 'var(--secondary-background)', padding: '1.5rem', borderRadius: 'var(--radius-md)', fontFamily: 'monospace' }}>
            A = P(1 + r/n)^(nt)
          </div>
          <ul style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
            <li><strong>A</strong> = the future value of the investment/loan, including interest</li>
            <li><strong>P</strong> = the principal investment amount</li>
            <li><strong>r</strong> = the annual interest rate (decimal)</li>
            <li><strong>n</strong> = the number of times that interest is compounded per year</li>
            <li><strong>t</strong> = the number of years the money is invested or borrowed for</li>
          </ul>
        </div>
        
        <div>
          <h2 style={{ color: 'var(--primary-accent)' }}>Step-by-Step Calculation</h2>
          <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
            <p><strong>Example:</strong> $10k initial, 8% interest, 10 years, compounded annually.</p>
            <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Step 1:</strong> Identify Variables: P = 10,000, r = 0.08, n = 1, t = 10</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Step 2:</strong> Calculate (1 + r/n): (1 + 0.08/1) = 1.08</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Step 3:</strong> Calculate exponent (nt): 1 * 10 = 10</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Step 4:</strong> Calculate power: 1.08^10 = 2.1589</li>
              <li><strong>Step 5:</strong> Multiply by Principal: 10,000 * 2.1589 = $21,589.25</li>
            </ol>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ color: 'var(--primary-accent)', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{faq.question}</h3>
              <p style={{ margin: 0, color: 'var(--text-muted)' }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
        <div style={{ background: 'var(--secondary-background)', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
          <h3 style={{ color: 'var(--primary-accent)', marginBottom: '1rem' }}>Related Tools</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {keywordData.relatedTools.map(tool => (
              <li key={tool} style={{ marginBottom: '0.5rem' }}>
                <Link href={`/calculators/${tool}`} style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}>
                  {tool.replace(/-/g, ' ')}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ background: 'var(--secondary-background)', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
          <h3 style={{ color: 'var(--primary-accent)', marginBottom: '1rem' }}>Related Guides</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {keywordData.relatedArticles.map(article => (
              <li key={article} style={{ marginBottom: '0.5rem' }}>
                <Link href={`/guides/${article}`} style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}>
                  {article.replace(/-/g, ' ')}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <SourcesAndReferences 
        sources={[
          { title: "SEC.gov - The Power of Compound Interest", url: "https://www.sec.gov/investor/pubs/sec-guide-to-savings-and-investing.pdf" },
          { title: "Investor.gov - Compound Interest Calculator", url: "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator" }
        ]}
      />

      <FAQSchema faqs={faqs} />
      <CalculatorSchema keywordData={keywordData} />
      <BreadcrumbSchema items={breadcrumbs} />
    </div>
  );
}
