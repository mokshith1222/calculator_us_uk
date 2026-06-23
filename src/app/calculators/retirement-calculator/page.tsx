import React from 'react';
import { RetirementCalculator } from '@/components/calculators/RetirementCalculator';
import { AIAnswerBlock } from '@/components/seo/AIAnswerBlock';
import { AuthorInfo, KeyTakeaways, SummaryTable, SourcesAndReferences } from '@/components/seo/AICitationLayer';
import { FAQSchema, CalculatorSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { keywordDatabase } from '@/data/keywords';
import Link from 'next/link';
import { CategoryNav } from '@/components/calculators/CategoryNav';

export const metadata = {
  title: 'Retirement Calculator | How Much Do You Need to Retire?',
  description: 'Plan your retirement with our free calculator. See if your current savings and monthly contributions are enough to meet your goals, adjusted for inflation.',
};

export default function RetirementCalculatorPage() {
  const keywordData = keywordDatabase["retirement-calculator"];

  const faqs = [
    { question: "How much money do I need to retire?", answer: "A common rule of thumb is to aim for 25 times your desired annual expenses. If you need $80,000 a year, you should aim for a portfolio of $2,000,000." },
    { question: "What is the 4% rule?", answer: "The 4% rule is a safe withdrawal rate strategy. It states that you can withdraw 4% of your portfolio in the first year of retirement, adjust for inflation annually, and likely not run out of money for 30 years." },
    { question: "When can I retire?", answer: "You can retire whenever your investments can safely generate enough income to cover your living expenses. Age is secondary to your financial independence number." },
    { question: "How does inflation affect retirement?", answer: "Inflation reduces your purchasing power over time. A $100,000 income today will buy significantly less in 20 years, so your portfolio must grow faster than inflation." },
    { question: "Should I include Social Security in my calculations?", answer: "It's prudent to be conservative. Many planners recommend calculating your needs without it, or only counting on a reduced benefit, and treating any actual Social Security income as a bonus." },
    { question: "What is a safe withdrawal rate?", answer: "Historically, 4% is considered safe for a 30-year retirement. For early retirees (FIRE), a more conservative rate like 3.25% to 3.5% is often recommended." },
    { question: "How much should I contribute to retirement?", answer: "Financial experts recommend saving at least 15% of your gross income for retirement, starting in your 20s. If you start later, the percentage needs to be higher." },
    { question: "What is the FIRE movement?", answer: "Financial Independence, Retire Early (FIRE) is a lifestyle movement where people aggressively save and invest (up to 50-70% of income) to retire in their 30s or 40s." },
    { question: "Should I use a 401(k) or Roth IRA?", answer: "A 401(k) offers an employer match (free money) and pre-tax contributions. A Roth IRA offers tax-free growth and tax-free withdrawals in retirement. Many use both." },
    { question: "What is catch-up contribution?", answer: "The IRS allows individuals aged 50 and older to make additional 'catch-up' contributions to their 401(k)s and IRAs to boost their savings as retirement nears." },
    { question: "What if my retirement calculator says I'm falling short?", answer: "You have four levers to pull: save more now, work longer, reduce your expected expenses in retirement, or invest for higher (but riskier) returns." },
    { question: "Does my house count towards my retirement savings?", answer: "While a paid-off house reduces your monthly expenses, its value isn't liquid unless you sell or take a reverse mortgage. Don't count it as income-generating capital in a 4% rule calculation." },
    { question: "What are Required Minimum Distributions (RMDs)?", answer: "RMDs are minimum amounts that retirement plan account owners must withdraw annually starting at age 73 (as of 2023)." },
    { question: "Should I hold bonds in retirement?", answer: "Yes, bonds provide stability and reduce portfolio volatility, helping you weather stock market crashes during retirement without having to sell stocks at a loss." },
    { question: "What is sequence of returns risk?", answer: "It's the risk that you experience a stock market crash early in your retirement. Selling investments while they are down permanently impairs your portfolio's ability to recover." },
    { question: "Can I work part-time in retirement?", answer: "Yes! Many people enjoy 'Barista FIRE' or semi-retirement, where they work part-time to cover basic living expenses while their portfolio continues to grow untouched." },
    { question: "How do taxes work in retirement?", answer: "Withdrawals from traditional 401(k)s and IRAs are taxed as ordinary income. Long-term capital gains are taxed at lower rates, and Roth IRA withdrawals are tax-free." },
    { question: "What is an annuity?", answer: "An annuity is an insurance product that pays out income, and can be used as part of a retirement strategy to guarantee a fixed income stream for life." },
    { question: "How do I account for healthcare costs?", answer: "Healthcare is often the biggest expense in retirement. Medicare starts at age 65, but you still need to budget for premiums, out-of-pocket costs, and potential long-term care." },
    { question: "What is an HSA?", answer: "A Health Savings Account (HSA) is a triple-tax-advantaged account that can be used for medical expenses or, after age 65, as a traditional retirement account." }
  ];

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Calculators", item: "/calculators" },
    { name: "Retirement Calculator", item: "/calculators/retirement-calculator" }
  ];

  return (
    <div className="container">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary-accent)' }}>
        Retirement Calculator
      </h1>
      
      <CategoryNav currentSlug="retirement-calculator" />

      <AIAnswerBlock 
        title="Direct Answer: How much do I need to retire?"
        answer="To determine how much you need to retire, multiply your desired annual retirement income by 25. This is known as the 4% rule, which states that you can safely withdraw 4% of your portfolio each year for 30 years without running out of money."
        bullets={[
          "Example: If you need $60,000/year, you need a $1,500,000 portfolio.",
          "Ensure you account for inflation when estimating future expenses.",
          "Subtract expected Social Security or pension payouts from your income need."
        ]}
      />

      <AuthorInfo 
        authorName="FinanceToolsHub Team" 
        authorRole="Retirement Planners" 
        updatedDate={new Date().toLocaleDateString()} 
      />

      <KeyTakeaways 
        takeaways={[
          "The 4% rule provides a safe baseline for determining your required retirement portfolio size.",
          "Inflation erodes your purchasing power, so your investments must continue to grow even in retirement.",
          "Starting early and maximizing tax-advantaged accounts (like 401(k)s and IRAs) is the most reliable path to financial independence."
        ]}
      />

      <SummaryTable 
        title="Retirement Planning Fundamentals"
        rows={[
          { label: "Safe Withdrawal Rate", value: "Typically 4%, the amount you can safely withdraw annually without depleting your nest egg." },
          { label: "Target Portfolio Size", value: "Your annual expenses multiplied by 25." },
          { label: "Inflation Adjustment", value: "Accounting for the rising cost of living over your retirement years." }
        ]}
      />

      <div style={{ marginBottom: '4rem' }}>
        <RetirementCalculator />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
        <div>
          <h2 style={{ color: 'var(--primary-accent)' }}>The 4% Rule Formula</h2>
          <div style={{ background: 'var(--secondary-background)', padding: '1.5rem', borderRadius: 'var(--radius-md)', fontFamily: 'monospace' }}>
            Target Portfolio = Annual Expenses × 25
          </div>
          <ul style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
            <li><strong>Annual Expenses</strong> = Your projected yearly spending in retirement.</li>
            <li><strong>25</strong> = The multiplier based on a 4% safe withdrawal rate (1 / 0.04 = 25).</li>
            <li>Note: This formula assumes a diversified portfolio of roughly 60% stocks and 40% bonds.</li>
          </ul>
        </div>
        
        <div>
          <h2 style={{ color: 'var(--primary-accent)' }}>Step-by-Step Calculation</h2>
          <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
            <p><strong>Example:</strong> Calculating your retirement target.</p>
            <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Step 1:</strong> Estimate monthly expenses in retirement (e.g., $5,000).</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Step 2:</strong> Multiply by 12 to get annual expenses ($60,000).</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Step 3:</strong> Subtract fixed income like Social Security ($20,000). Remaining need = $40,000.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Step 4:</strong> Multiply the remaining need by 25: $40,000 × 25 = $1,000,000.</li>
              <li><strong>Step 5:</strong> You need a $1,000,000 portfolio to safely generate $40,000 a year forever.</li>
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
          { title: "Social Security Administration - Retirement Planning", url: "https://www.ssa.gov/benefits/retirement/" },
          { title: "IRS - Retirement Plans", url: "https://www.irs.gov/retirement-plans" }
        ]}
      />

      <FAQSchema faqs={faqs} />
      <CalculatorSchema keywordData={keywordData} />
      <BreadcrumbSchema items={breadcrumbs} />
    </div>
  );
}
