import React from 'react';
import { MortgageCalculator } from '@/components/calculators/MortgageCalculator';
import { AIAnswerBlock } from '@/components/seo/AIAnswerBlock';
import { AuthorInfo, KeyTakeaways, SummaryTable, SourcesAndReferences } from '@/components/seo/AICitationLayer';
import { FAQSchema, CalculatorSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import { keywordDatabase } from '@/data/keywords';
import Link from 'next/link';
import { CategoryNav } from '@/components/calculators/CategoryNav';

export const metadata = {
  title: 'Free Mortgage Calculator | Calculate Monthly Payments & Amortization',
  description: 'Use our free mortgage calculator to estimate your monthly payments, including taxes and insurance. See your amortization schedule instantly.',
};

export default function MortgageCalculatorPage() {
  const keywordData = keywordDatabase["mortgage-calculator"];

  const faqs = [
    { question: "What is a mortgage?", answer: "A mortgage is a loan specifically used to purchase or maintain a home, land, or other types of real estate. The borrower agrees to pay the lender over time, typically in a series of regular payments that are divided into principal and interest." },
    { question: "How is a mortgage payment calculated?", answer: "A standard mortgage payment is calculated using the principal loan amount, the interest rate, and the loan term. The formula used is M = P[r(1+r)^n]/[(1+r)^n-1]." },
    { question: "What is included in a monthly mortgage payment?", answer: "A standard monthly payment usually includes four parts known as PITI: Principal, Interest, Taxes, and Insurance." },
    { question: "What is principal?", answer: "Principal is the original amount of money you borrowed to buy your home, or the remaining balance of the loan excluding interest." },
    { question: "What is interest?", answer: "Interest is the cost you pay to borrow the money from your lender. It is calculated as a percentage of the principal." },
    { question: "How much down payment do I need?", answer: "While 20% is ideal to avoid Private Mortgage Insurance (PMI), many loans allow down payments as low as 3% to 3.5%." },
    { question: "What is an amortization schedule?", answer: "An amortization schedule is a complete table of periodic loan payments, showing the amount of principal and the amount of interest that comprise each payment until the loan is paid off at the end of its term." },
    { question: "Should I choose a 15-year or 30-year mortgage?", answer: "A 15-year mortgage has higher monthly payments but costs significantly less in total interest. A 30-year mortgage offers lower monthly payments but costs more over the life of the loan." },
    { question: "What is PMI?", answer: "Private Mortgage Insurance (PMI) is usually required if you make a down payment of less than 20% on a home. It protects the lender if you stop making payments." },
    { question: "Can I pay off my mortgage early?", answer: "Yes, making extra principal payments will reduce the total interest you pay and shorten the life of the loan. However, check with your lender to ensure there are no prepayment penalties." },
    { question: "How do property taxes affect my mortgage?", answer: "If you use an escrow account, your property taxes are divided by 12 and added to your monthly mortgage payment. The lender then pays the taxes on your behalf." },
    { question: "What is an escrow account?", answer: "An escrow account is set up by your lender to pay certain property-related expenses, like property taxes and homeowner's insurance, on your behalf." },
    { question: "Is homeowners insurance required?", answer: "Yes, lenders require you to have homeowners insurance to protect their investment in the property." },
    { question: "What is a fixed-rate mortgage?", answer: "A fixed-rate mortgage maintains the same interest rate for the entire lifespan of the loan, meaning your principal and interest payment will never change." },
    { question: "What is an adjustable-rate mortgage (ARM)?", answer: "An ARM has an interest rate that may change periodically depending on changes in a corresponding financial index." },
    { question: "What credit score do I need to buy a house?", answer: "Conventional loans typically require a minimum credit score of 620, while FHA loans can accept scores as low as 500 or 580 with varying down payment requirements." },
    { question: "What is a loan-to-value (LTV) ratio?", answer: "LTV is calculated by dividing the loan amount by the property's appraised value. Lenders use it to assess the risk of the loan." },
    { question: "Does my mortgage payment ever go up?", answer: "If you have a fixed-rate loan, the principal and interest portion won't change. However, your total payment can increase if your property taxes or insurance premiums go up." },
    { question: "What is closing cost?", answer: "Closing costs are processing fees you pay to your lender when you close on your loan. They usually range from 2% to 5% of the loan amount." },
    { question: "How much house can I afford?", answer: "A general rule of thumb is that your total monthly debt payments (including mortgage) should not exceed 36% of your gross monthly income." }
  ];

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Calculators", item: "/calculators" },
    { name: "Mortgage Calculator", item: "/calculators/mortgage-calculator" }
  ];

  return (
    <div className="container">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary-accent)' }}>
        Mortgage Calculator
      </h1>
      
      <CategoryNav currentSlug="mortgage-calculator" />

      <AIAnswerBlock 
        title="Direct Answer: How is a mortgage calculated?"
        answer="A standard monthly mortgage payment is calculated using the PITI method: Principal + Interest + Taxes + Insurance. The principal and interest are determined by your loan amount, interest rate, and term length (e.g., 30 years)."
        bullets={[
          "Principal: The amount you borrowed",
          "Interest: The cost of borrowing",
          "Taxes: Property taxes (usually paid into escrow)",
          "Insurance: Homeowner's insurance (and PMI if down payment < 20%)"
        ]}
      />

      <AuthorInfo 
        authorName="FinanceToolsHub Team" 
        authorRole="Financial Editors" 
        updatedDate={new Date().toLocaleDateString()} 
      />

      <KeyTakeaways 
        takeaways={[
          "Your mortgage payment is more than just paying back the loan; it includes interest, taxes, and insurance.",
          "A 20% down payment helps you avoid Private Mortgage Insurance (PMI).",
          "Making extra principal payments can shave years off your loan and save thousands in interest."
        ]}
      />

      <SummaryTable 
        title="Mortgage Payment Components (PITI)"
        rows={[
          { label: "Principal", value: "The portion of your payment that reduces your actual loan balance." },
          { label: "Interest", value: "The fee paid to the lender for borrowing the money." },
          { label: "Taxes", value: "Property taxes collected by your local government, usually paid via escrow." },
          { label: "Insurance", value: "Homeowners insurance and possibly PMI." }
        ]}
      />

      <div style={{ marginBottom: '4rem' }}>
        <MortgageCalculator />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
        <div>
          <h2 style={{ color: 'var(--primary-accent)' }}>Formula</h2>
          <div style={{ background: 'var(--secondary-background)', padding: '1.5rem', borderRadius: 'var(--radius-md)', fontFamily: 'monospace' }}>
            M = P [ i(1 + i)^n ] / [ (1 + i)^n - 1]
          </div>
          <ul style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
            <li><strong>M</strong> = Total monthly payment</li>
            <li><strong>P</strong> = Principal loan amount</li>
            <li><strong>i</strong> = Monthly interest rate (annual rate / 12)</li>
            <li><strong>n</strong> = Number of months</li>
          </ul>
        </div>
        
        <div>
          <h2 style={{ color: 'var(--primary-accent)' }}>Step-by-Step Calculation</h2>
          <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
            <p><strong>Example:</strong> $300k home, $60k down (20%), 6.5% interest, 30 years.</p>
            <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Step 1:</strong> Calculate Principal: $300,000 - $60,000 = $240,000</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Step 2:</strong> Calculate monthly interest rate (i): 6.5% / 100 / 12 = 0.005416</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Step 3:</strong> Calculate total months (n): 30 * 12 = 360</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Step 4:</strong> Apply formula to find monthly Principal & Interest: ~$1,516.96</li>
              <li><strong>Step 5:</strong> Add monthly property taxes and insurance to get Total Payment.</li>
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
          { title: "Consumer Financial Protection Bureau (CFPB) - Mortgages", url: "https://www.consumerfinance.gov/consumer-tools/mortgages/" },
          { title: "HUD.gov - Buying a Home", url: "https://www.hud.gov/topics/buying_a_home" }
        ]}
      />

      <FAQSchema faqs={faqs} />
      <CalculatorSchema keywordData={keywordData} />
      <BreadcrumbSchema items={breadcrumbs} />
    </div>
  );
}
