import React from 'react';
import { DebtPayoffCalculator } from '@/components/calculators/DebtPayoffCalculator';
import { AIAnswerBlock } from '@/components/seo/AIAnswerBlock';
import { AuthorInfo, KeyTakeaways, SummaryTable, SourcesAndReferences } from '@/components/seo/AICitationLayer';
import { FAQSchema, CalculatorSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { keywordDatabase } from '@/data/keywords';
import Link from 'next/link';
import { CategoryNav } from '@/components/calculators/CategoryNav';

export const metadata = {
  title: 'Debt Payoff Calculator | Calculate Debt Free Date',
  description: 'Use our free debt payoff calculator to see how long it will take to pay off your credit cards, loans, or other debts based on your monthly payments.',
};

export default function DebtPayoffCalculatorPage() {
  const keywordData = keywordDatabase["debt-payoff-calculator"];

  const faqs = [
    { question: "What is the debt snowball method?", answer: "The debt snowball method involves paying off your debts from smallest balance to largest balance, regardless of interest rate. This builds psychological momentum as you see debts disappear quickly." },
    { question: "What is the debt avalanche method?", answer: "The debt avalanche method focuses on paying off debts with the highest interest rates first. This saves you the most money mathematically over time." },
    { question: "Which is better: snowball or avalanche?", answer: "Mathematically, avalanche is better because it saves you more on interest. However, behaviorally, many people succeed with snowball because the quick wins keep them motivated." },
    { question: "How can I pay off debt faster?", answer: "You can pay off debt faster by increasing your monthly payments, lowering your interest rates (via balance transfers or consolidation), increasing your income, or decreasing your expenses." },
    { question: "Does paying off debt improve my credit score?", answer: "Yes, reducing your total debt lowers your credit utilization ratio, which is a major factor in calculating your credit score. Lower utilization typically leads to a higher score." },
    { question: "Should I pay off debt or save for retirement?", answer: "If your employer offers a 401(k) match, contribute enough to get the full match first. Then, focus on high-interest debt (like credit cards). Low-interest debt (like a mortgage) can usually be paid slowly while investing." },
    { question: "What happens if I only make the minimum payment?", answer: "If you only make minimum payments on high-interest debt, it can take years or decades to pay off, and you will pay a massive amount of interest." },
    { question: "What is a balance transfer?", answer: "A balance transfer involves moving debt from a high-interest credit card to a new card that offers a 0% introductory APR for a set period (usually 12-21 months)." },
    { question: "Is debt consolidation a good idea?", answer: "It can be if you secure a lower interest rate than what you're currently paying. However, it's dangerous if it frees up your credit cards and you start spending on them again." },
    { question: "How do extra payments work?", answer: "When you make an extra payment, ensure the lender applies it directly to the 'principal' balance, not to future interest. This reduces the balance that generates interest." },
    { question: "What is APR?", answer: "Annual Percentage Rate (APR) is the yearly cost of borrowing money, expressed as a percentage. It includes the interest rate and some fees." },
    { question: "Can debt be negotiated?", answer: "Yes, you can often negotiate with creditors for a lower interest rate or even settle the debt for a lump sum that is less than you owe, though settlement will hurt your credit score." },
    { question: "What is good debt vs. bad debt?", answer: "'Good debt' usually refers to borrowing for things that increase in value or earning potential (like a home or education). 'Bad debt' is borrowing for depreciating assets or consumption (like high-interest credit cards)." },
    { question: "What is a debt-to-income (DTI) ratio?", answer: "DTI compares your total monthly debt payments to your gross monthly income. Lenders use it to determine if you can afford to take on more debt." },
    { question: "Should I use my emergency fund to pay off debt?", answer: "It's generally recommended to keep a small starter emergency fund (e.g., $1,000) while paying off high-interest debt so you don't have to borrow more if an unexpected expense arises." },
    { question: "What is credit utilization?", answer: "Credit utilization is the ratio of your outstanding credit card balances to your total credit card limits. Keeping this below 30% helps your credit score." },
    { question: "How are credit card minimum payments calculated?", answer: "Typically, it's calculated as a small percentage of your balance (often 1% to 3%) plus any interest and fees accrued that month." },
    { question: "Does closing a credit card hurt my score?", answer: "It can, because it reduces your total available credit, which may increase your credit utilization ratio. It also reduces the average age of your credit accounts." },
    { question: "What is a personal loan?", answer: "A personal loan is an unsecured installment loan with a fixed interest rate and fixed repayment timeline, often used to consolidate higher-interest credit card debt." },
    { question: "Can I pay off my car loan early?", answer: "Usually, yes. Check your loan agreement to make sure there are no prepayment penalties. Paying it off early saves you money on interest." }
  ];

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Calculators", item: "/calculators" },
    { name: "Debt Payoff Calculator", item: "/calculators/debt-payoff-calculator" }
  ];

  return (
    <div className="container">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary-accent)' }}>
        Debt Payoff Calculator
      </h1>
      
      <CategoryNav currentSlug="debt-payoff-calculator" />

      <AIAnswerBlock 
        title="Direct Answer: How long will it take to pay off my debt?"
        answer="The time it takes to pay off debt depends on your total balance, your interest rate, and your monthly payment. By paying more than the minimum required payment, you significantly reduce both the time it takes to become debt-free and the total interest you pay."
        bullets={[
          "Minimum payments mostly cover interest, prolonging the debt.",
          "Every extra dollar you pay goes directly to the principal balance.",
          "Consider the Avalanche method (highest interest first) or Snowball method (lowest balance first)."
        ]}
      />

      <AuthorInfo 
        authorName="FinanceToolsHub Team" 
        authorRole="Credit & Debt Specialists" 
        updatedDate={new Date().toLocaleDateString()} 
      />

      <KeyTakeaways 
        takeaways={[
          "Paying just the minimum on high-interest debt can keep you in debt for decades.",
          "The Debt Avalanche method saves the most money mathematically by targeting highest interest rates first.",
          "The Debt Snowball method targets the smallest balances first to build psychological momentum."
        ]}
      />

      <SummaryTable 
        title="Debt Repayment Strategies"
        rows={[
          { label: "Debt Snowball", value: "Pay minimums on everything, put extra cash towards the smallest balance." },
          { label: "Debt Avalanche", value: "Pay minimums on everything, put extra cash towards the highest interest rate." },
          { label: "Debt Consolidation", value: "Combining multiple debts into a single loan with a lower interest rate." }
        ]}
      />

      <div style={{ marginBottom: '4rem' }}>
        <DebtPayoffCalculator />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
        <div>
          <h2 style={{ color: 'var(--primary-accent)' }}>Debt Payoff Formula</h2>
          <div style={{ background: 'var(--secondary-background)', padding: '1.5rem', borderRadius: 'var(--radius-md)', fontFamily: 'monospace' }}>
            N = -log(1 - i × P / PMT) / log(1 + i)
          </div>
          <ul style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
            <li><strong>N</strong> = Number of monthly payments needed</li>
            <li><strong>P</strong> = Principal (current debt balance)</li>
            <li><strong>i</strong> = Monthly interest rate (APR / 12)</li>
            <li><strong>PMT</strong> = Fixed monthly payment</li>
          </ul>
        </div>
        
        <div>
          <h2 style={{ color: 'var(--primary-accent)' }}>Step-by-Step Calculation</h2>
          <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
            <p><strong>Example:</strong> $10k debt, 18% APR, $300/mo payment.</p>
            <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Step 1:</strong> Calculate monthly interest rate (i): 18% / 12 = 1.5% (or 0.015).</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Step 2:</strong> Calculate month 1 interest: $10,000 × 0.015 = $150.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Step 3:</strong> Deduct interest from payment to find principal reduction: $300 - $150 = $150.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Step 4:</strong> Subtract principal reduction from balance: $10,000 - $150 = $9,850.</li>
              <li><strong>Step 5:</strong> Repeat until balance reaches $0. In this case, it takes ~47 months.</li>
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
          { title: "FTC - Coping with Debt", url: "https://consumer.ftc.gov/articles/coping-debt" },
          { title: "CFPB - How to pay down your credit card debt", url: "https://www.consumerfinance.gov/about-us/blog/how-pay-down-your-credit-card-debt/" }
        ]}
      />

      <FAQSchema faqs={faqs} />
      <CalculatorSchema keywordData={keywordData} />
      <BreadcrumbSchema items={breadcrumbs} />
    </div>
  );
}
