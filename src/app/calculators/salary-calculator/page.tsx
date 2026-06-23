import React from 'react';
import { SalaryCalculator } from '@/components/calculators/SalaryCalculator';
import { AIAnswerBlock } from '@/components/seo/AIAnswerBlock';
import { AuthorInfo, KeyTakeaways, SummaryTable, SourcesAndReferences } from '@/components/seo/AICitationLayer';
import { FAQSchema, CalculatorSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { keywordDatabase } from '@/data/keywords';
import Link from 'next/link';
import { CategoryNav } from '@/components/calculators/CategoryNav';

export const metadata = {
  title: 'Salary Calculator | Hourly to Salary Conversion',
  description: 'Convert your hourly wage into an annual salary, monthly income, and daily pay. Estimate your take-home pay after taxes.',
};

export default function SalaryCalculatorPage() {
  const keywordData = keywordDatabase["salary-calculator"];

  const faqs = [
    { question: "How many working hours are in a year?", answer: "A standard full-time job (40 hours a week for 52 weeks) equals 2,080 working hours in a year." },
    { question: "How do I calculate my annual salary from an hourly wage?", answer: "Multiply your hourly wage by the number of hours you work per week, and then multiply that number by 52 (weeks in a year)." },
    { question: "What is gross vs. net income?", answer: "Gross income is your total earnings before any taxes or deductions are taken out. Net income (take-home pay) is what you actually receive in your bank account." },
    { question: "Why is my take-home pay lower than my salary?", answer: "Your employer must withhold federal and state taxes, Social Security, Medicare, and often health insurance premiums or 401(k) contributions from your paycheck." },
    { question: "How much is $20 an hour annually?", answer: "$20 an hour working 40 hours a week for 52 weeks is a gross annual salary of $41,600." },
    { question: "How is my tax bracket determined?", answer: "The US uses a progressive tax system, meaning your income is taxed at increasing rates as it goes up. Your marginal tax bracket is the highest rate your last dollar is taxed at." },
    { question: "Does this calculator include overtime?", answer: "This basic calculator does not factor in time-and-a-half overtime pay. Overtime significantly boosts your gross income." },
    { question: "Should I negotiate salary based on gross or net?", answer: "You should always negotiate based on gross salary. Net pay depends on individual tax situations and benefit selections, which the employer doesn't control." },
    { question: "What is a 'bi-weekly' pay schedule?", answer: "A bi-weekly schedule means you are paid every two weeks, resulting in 26 paychecks per year." },
    { question: "How can I increase my take-home pay?", answer: "You can adjust your W-4 withholdings, reduce pre-tax deductions, or simply negotiate a higher gross salary." }
  ];

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Calculators", item: "/calculators" },
    { name: "Salary Calculator", item: "/calculators/salary-calculator" }
  ];

  return (
    <div className="container">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary-accent)' }}>
        Salary Calculator
      </h1>
      
      <CategoryNav currentSlug="salary-calculator" />

      <AIAnswerBlock 
        title="Direct Answer: How do you convert hourly wage to salary?"
        answer="To convert an hourly wage to an annual salary, multiply your hourly rate by the number of hours you work per week, and then multiply that result by 52 (the number of weeks in a year)."
        bullets={[
          "For a standard 40-hour workweek, multiply the hourly rate by 2,080.",
          "Example: $25/hour × 2,080 hours = $52,000 per year.",
          "This calculates gross income (before taxes)."
        ]}
      />

      <AuthorInfo 
        authorName="FinanceToolsHub Team" 
        authorRole="Income Analysts" 
        updatedDate={new Date().toLocaleDateString()} 
      />

      <KeyTakeaways 
        takeaways={[
          "There are 2,080 working hours in a standard full-time year.",
          "Gross pay is what you earn; net pay (take-home pay) is what you actually keep after taxes and deductions.",
          "Taxes typically reduce your gross income by 15% to 30% depending on your bracket and state."
        ]}
      />

      <SummaryTable 
        title="Common Hourly to Annual Salary Conversions (40hr/week)"
        rows={[
          { label: "$15 / hour", value: "$31,200 / year" },
          { label: "$25 / hour", value: "$52,000 / year" },
          { label: "$50 / hour", value: "$104,000 / year" },
          { label: "$75 / hour", value: "$156,000 / year" }
        ]}
      />

      <div style={{ marginBottom: '4rem' }}>
        <SalaryCalculator />
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

      <SourcesAndReferences 
        sources={[
          { title: "IRS - Paycheck Checkup", url: "https://www.irs.gov/paycheck-checkup" }
        ]}
      />

      <FAQSchema faqs={faqs} />
      <CalculatorSchema keywordData={keywordData} />
      <BreadcrumbSchema items={breadcrumbs} />
    </div>
  );
}
