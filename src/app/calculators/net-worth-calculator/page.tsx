import React from 'react';
import { NetWorthCalculator } from '@/components/calculators/NetWorthCalculator';
import { AIAnswerBlock } from '@/components/seo/AIAnswerBlock';
import { AuthorInfo, KeyTakeaways, SummaryTable, SourcesAndReferences } from '@/components/seo/AICitationLayer';
import { FAQSchema, CalculatorSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { keywordDatabase } from '@/data/keywords';
import Link from 'next/link';
import { CategoryNav } from '@/components/calculators/CategoryNav';

export const metadata = {
  title: 'Net Worth Calculator | Track Your Wealth',
  description: 'Calculate your total net worth by adding up your assets and subtracting your liabilities. See your financial standing instantly with our free tool.',
};

export default function NetWorthCalculatorPage() {
  const keywordData = keywordDatabase["net-worth-calculator"];

  const faqs = [
    { question: "What is net worth?", answer: "Net worth is the total value of everything you own (your assets) minus everything you owe (your liabilities). It is the most accurate measure of your overall financial health." },
    { question: "How do I calculate my net worth?", answer: "Simply add up the current value of all your assets (cash, investments, real estate) and subtract the total of all your debts (mortgages, loans, credit cards)." },
    { question: "What is considered an asset?", answer: "An asset is anything of value that you own. This includes cash in bank accounts, retirement accounts, brokerage accounts, real estate, vehicles, and valuable personal property." },
    { question: "What is considered a liability?", answer: "A liability is any debt you owe to someone else. This includes mortgages, auto loans, student loans, personal loans, credit card balances, and unpaid medical bills." },
    { question: "Is my house an asset?", answer: "Yes, the current market value of your house is an asset. However, the mortgage you owe on the house is a liability." },
    { question: "Should I include my car in my net worth?", answer: "Yes, you should include the current Kelly Blue Book (or similar) resale value of your car as an asset, and the remaining auto loan balance as a liability." },
    { question: "What is liquid net worth?", answer: "Liquid net worth only includes assets that can be easily and quickly converted to cash without significant loss of value, such as cash, checking accounts, and stocks. It excludes real estate and vehicles." },
    { question: "Why is net worth important?", answer: "Your income only tells you what you earn, not what you keep. Net worth tells you your actual wealth and provides a benchmark to measure your financial progress over time." },
    { question: "What is a negative net worth?", answer: "A negative net worth means your total debts are greater than your total assets. This is common for recent college graduates with student loans but should ideally become positive over time." },
    { question: "How often should I check my net worth?", answer: "Checking it once a month or once a quarter is a good cadence. Checking it daily can lead to unnecessary stress due to stock market fluctuations." },
    { question: "What is a good net worth by age?", answer: "A common formula from 'The Millionaire Next Door' is: (Age × Pre-tax Annual Income) ÷ 10. However, expectations vary wildly based on career path and life circumstances." },
    { question: "Do student loans ruin my net worth?", answer: "Initially, yes, they act as a large liability. But ideally, the education you received will increase your income, allowing you to pay off the debt and build assets over time." },
    { question: "Are my 401(k) and IRA part of my net worth?", answer: "Yes, all retirement accounts are assets and should be included. You generally report the pre-tax balance, even though you will eventually owe taxes upon withdrawal." },
    { question: "Should I include my furniture and electronics?", answer: "For a strict financial net worth, it's best to exclude small personal items that depreciate rapidly unless they are high-value collectibles, jewelry, or art that holds significant resale value." },
    { question: "How can I increase my net worth?", answer: "You increase your net worth by either increasing your assets (saving more, investing, buying appreciating property) or decreasing your liabilities (paying off debt)." },
    { question: "Does my credit score affect my net worth?", answer: "Not directly. A high credit score doesn't add to your assets. However, a good credit score allows you to borrow at lower interest rates, helping you build net worth faster." },
    { question: "Is a high net worth the same as being rich?", answer: "Yes and no. A person with a $1,000,000 net worth is a millionaire on paper, but if $900,000 of that is tied up in their primary residence, they may not have much cash flow or 'feel' rich." },
    { question: "How does inflation impact net worth?", answer: "Inflation erodes the purchasing power of your cash assets. To maintain real wealth, your assets must grow at a rate higher than the rate of inflation." },
    { question: "Should I use pre-tax or post-tax value for my house?", answer: "Generally, you use the current market value (what it would sell for today). Some conservative calculators subtract a 6-10% selling cost to be more realistic." },
    { question: "Why did my net worth go down even though I saved money?", answer: "This usually happens when the value of your investments (like stocks or real estate) drops by more than the amount of money you saved during that period." }
  ];

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Calculators", item: "/calculators" },
    { name: "Net Worth Calculator", item: "/calculators/net-worth-calculator" }
  ];

  return (
    <div className="container">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary-accent)' }}>
        Net Worth Calculator
      </h1>
      
      <CategoryNav currentSlug="net-worth-calculator" />

      <AIAnswerBlock 
        title="Direct Answer: How do I calculate my net worth?"
        answer="You calculate your net worth by adding up the value of all your assets (what you own) and subtracting the total of all your liabilities (what you owe)."
        bullets={[
          "Assets include cash, investments, home value, and vehicles.",
          "Liabilities include mortgages, student loans, auto loans, and credit card debt.",
          "Formula: Total Assets - Total Liabilities = Net Worth"
        ]}
      />

      <AuthorInfo 
        authorName="FinanceToolsHub Team" 
        authorRole="Wealth Management Analysts" 
        updatedDate={new Date().toLocaleDateString()} 
      />

      <KeyTakeaways 
        takeaways={[
          "Net worth is the most accurate measure of your overall financial health, not your income.",
          "To increase your net worth, you must either acquire more assets or pay down liabilities.",
          "Your primary residence is an asset, but the mortgage on it is a liability."
        ]}
      />

      <SummaryTable 
        title="Assets vs. Liabilities"
        rows={[
          { label: "Assets (What you own)", value: "Checking accounts, savings, 401(k), IRA, real estate, vehicles, valuable collections." },
          { label: "Liabilities (What you owe)", value: "Mortgage, auto loans, student loans, credit card balances, medical debt." }
        ]}
      />

      <div style={{ marginBottom: '4rem' }}>
        <NetWorthCalculator />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
        <div>
          <h2 style={{ color: 'var(--primary-accent)' }}>Net Worth Formula</h2>
          <div style={{ background: 'var(--secondary-background)', padding: '1.5rem', borderRadius: 'var(--radius-md)', fontFamily: 'monospace' }}>
            Net Worth = Total Assets - Total Liabilities
          </div>
          <ul style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
            <li><strong>Total Assets</strong> = Sum of cash, investments, real estate, etc.</li>
            <li><strong>Total Liabilities</strong> = Sum of all outstanding debts.</li>
          </ul>
        </div>
        
        <div>
          <h2 style={{ color: 'var(--primary-accent)' }}>Step-by-Step Calculation</h2>
          <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
            <p><strong>Example Calculation:</strong></p>
            <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Step 1:</strong> List Assets: $10k cash + $50k 401(k) + $300k house = $360,000 Total Assets.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Step 2:</strong> List Liabilities: $250k mortgage + $20k student loans = $270,000 Total Liabilities.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Step 3:</strong> Apply Formula: $360,000 - $270,000.</li>
              <li><strong>Step 4:</strong> Result: Net Worth is $90,000.</li>
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
          { title: "Investor.gov - Net Worth", url: "https://www.investor.gov/introduction-investing/investing-basics/how-read-financial-statements/net-worth" }
        ]}
      />

      <FAQSchema faqs={faqs} />
      <CalculatorSchema keywordData={keywordData} />
      <BreadcrumbSchema items={breadcrumbs} />
    </div>
  );
}
