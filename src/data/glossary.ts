export interface GlossaryTerm {
  slug: string;
  term: string;
  shortDefinition: string;
  detailedExplanation: string;
  author: string;
  role: string;
  updatedDate: string;
  takeaways: string[];
  sources: { title: string; url: string }[];
  faqs: { question: string; answer: string }[];
}

export const glossaryData: Record<string, GlossaryTerm> = {
  "what-is-apr": {
    slug: "what-is-apr",
    term: "Annual Percentage Rate (APR)",
    shortDefinition: "APR is the yearly cost of borrowing money, expressed as a percentage. It includes both the interest rate and any fees or additional costs associated with the transaction.",
    detailedExplanation: `
      <p>When you borrow money—whether for a mortgage, an auto loan, or a credit card—the lender charges you for the privilege. While the "interest rate" simply tells you the cost of the principal borrowed, the <strong>APR (Annual Percentage Rate)</strong> provides a more complete picture.</p>
      <p>APR includes not just the interest, but also broker fees, discount points, and some closing costs. This is why the APR on a mortgage is almost always higher than the stated interest rate.</p>
      <h3 style="color: var(--primary-accent); margin-top: 1.5rem;">Why APR Matters</h3>
      <p>Because APR includes fees, it is the best number to use when comparing loans from different lenders. A loan with a lower interest rate but massive fees might have a higher APR than a loan with a slightly higher rate but zero fees.</p>
    `,
    author: "FinanceToolsHub Team",
    role: "Credit Experts",
    updatedDate: new Date().toLocaleDateString(),
    takeaways: [
      "APR represents the true cost of borrowing over a year.",
      "It includes both the interest rate and mandatory lender fees.",
      "Always compare APRs, not just interest rates, when shopping for loans."
    ],
    sources: [
      { title: "Consumer Financial Protection Bureau - What is an APR?", url: "https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-mortgage-interest-rate-and-an-apr-en-135/" }
    ],
    faqs: [
      { question: "Is APR the same as APY?", answer: "No. APR is the cost of borrowing money. APY (Annual Percentage Yield) is the rate you earn on an investment, taking into account the effect of compounding interest." }
    ]
  },
  "what-is-roth-ira": {
    slug: "what-is-roth-ira",
    term: "Roth IRA",
    shortDefinition: "A Roth IRA is an individual retirement account allowing a person to set aside after-tax income up to a specified amount each year. Both earnings on the account and withdrawals after age 59½ are tax-free.",
    detailedExplanation: `
      <p>A <strong>Roth IRA</strong> is one of the most powerful retirement vehicles available to Americans. Unlike a Traditional IRA, where you get a tax deduction today but pay taxes when you withdraw the money in retirement, a Roth IRA works in reverse.</p>
      <p>You contribute money that has already been taxed. The money grows tax-free, and when you withdraw it in retirement, you pay absolutely zero taxes on the growth.</p>
      <h3 style="color: var(--primary-accent); margin-top: 1.5rem;">Why Choose a Roth?</h3>
      <p>If you expect to be in a higher tax bracket in retirement than you are right now, a Roth IRA is mathematically superior to a traditional IRA. Furthermore, Roth IRAs don't have Required Minimum Distributions (RMDs) during your lifetime, allowing you to pass the money on to heirs tax-free.</p>
    `,
    author: "FinanceToolsHub Team",
    role: "Retirement Planners",
    updatedDate: new Date().toLocaleDateString(),
    takeaways: [
      "Contributions are made with after-tax money.",
      "All growth and qualified withdrawals are 100% tax-free.",
      "You can withdraw your contributions (but not the earnings) at any time without penalty."
    ],
    sources: [
      { title: "IRS - Roth IRAs", url: "https://www.irs.gov/retirement-plans/roth-iras" }
    ],
    faqs: [
      { question: "What is the contribution limit?", answer: "For 2024, the limit is $7,000 per year ($8,000 if you are 50 or older)." },
      { question: "Are there income limits for a Roth IRA?", answer: "Yes. High earners are phased out of contributing directly to a Roth IRA, though they may use a strategy called a 'Backdoor Roth'." }
    ]
  },
  "what-is-401k": {
    slug: "what-is-401k",
    term: "401(k)",
    shortDefinition: "A 401(k) is a company-sponsored retirement account that employees can contribute to. Employers may also make matching contributions.",
    detailedExplanation: `
      <p>The <strong>401(k)</strong> is the primary retirement savings vehicle for millions of Americans. Named after a section of the U.S. Internal Revenue Code, a 401(k) allows employees to defer a portion of their paycheck into an investment account.</p>
      <p>In a traditional 401(k), these contributions are pre-tax, meaning they lower your taxable income for the current year. The money grows tax-deferred until you withdraw it in retirement.</p>
      <h3 style="color: var(--primary-accent); margin-top: 1.5rem;">The Employer Match</h3>
      <p>Many companies offer a 'match', meaning they will contribute a certain amount of money to your account based on how much you contribute. For example, they might match 100% of your contributions up to 5% of your salary. This is effectively "free money" and is considered a vital part of your total compensation package.</p>
    `,
    author: "FinanceToolsHub Team",
    role: "Retirement Planners",
    updatedDate: new Date().toLocaleDateString(),
    takeaways: [
      "A 401(k) allows you to invest a portion of your paycheck before taxes are taken out.",
      "Many employers offer a match, which is free money towards your retirement.",
      "You generally cannot withdraw the money penalty-free until age 59½."
    ],
    sources: [
      { title: "IRS - 401(k) Plans", url: "https://www.irs.gov/retirement-plans/401k-plans" }
    ],
    faqs: [
      { question: "What is a Roth 401(k)?", answer: "A Roth 401(k) is a variation where your contributions are made with after-tax money, but withdrawals in retirement are completely tax-free." }
    ]
  },
  "what-is-amortization": {
    slug: "what-is-amortization",
    term: "Amortization",
    shortDefinition: "Amortization is the process of spreading out a loan into a series of fixed payments over time. At the beginning, mostly interest is paid; towards the end, mostly principal is paid.",
    detailedExplanation: `
      <p>When you take out a loan like a mortgage or a car loan, it is typically <strong>amortized</strong>. This means your monthly payment remains exactly the same for the entire life of the loan.</p>
      <p>However, the way that payment is split between principal (the actual loan balance) and interest (the lender's fee) changes over time.</p>
      <h3 style="color: var(--primary-accent); margin-top: 1.5rem;">The Amortization Schedule</h3>
      <p>If you look at an amortization schedule for a 30-year mortgage, you'll see that in Year 1, the vast majority of your payment goes toward interest. You barely make a dent in the principal. By Year 29, the opposite is true: almost the entire payment goes toward paying off the final remaining principal.</p>
    `,
    author: "FinanceToolsHub Team",
    role: "Real Estate Experts",
    updatedDate: new Date().toLocaleDateString(),
    takeaways: [
      "Amortization spreads loan repayment into fixed, predictable monthly payments.",
      "Early payments consist mostly of interest.",
      "Late payments consist mostly of principal."
    ],
    sources: [
      { title: "Investopedia - Amortization", url: "https://www.investopedia.com/terms/a/amortization.asp" }
    ],
    faqs: [
      { question: "How can I beat amortization?", answer: "By making extra principal payments early in the loan's life. Even small extra payments in the first few years can shave off tens of thousands of dollars in interest." }
    ]
  },
  "what-is-inflation": {
    slug: "what-is-inflation",
    term: "Inflation",
    shortDefinition: "Inflation is the rate at which the general level of prices for goods and services is rising, causing purchasing power to fall.",
    detailedExplanation: `
      <p><strong>Inflation</strong> is the silent thief of wealth. It is the economic phenomenon where prices rise over time, meaning that a dollar today buys less than a dollar bought ten years ago.</p>
      <p>In the United States, inflation is usually measured by the Consumer Price Index (CPI), which tracks the cost of a "basket" of common goods like food, housing, and transportation.</p>
      <h3 style="color: var(--primary-accent); margin-top: 1.5rem;">Why Inflation Matters for Investing</h3>
      <p>If you leave your money in a savings account earning 1%, but inflation is 3%, you are actually losing 2% of your purchasing power every year. To build real wealth, your investments must generate a return that is higher than the rate of inflation.</p>
    `,
    author: "FinanceToolsHub Team",
    role: "Economic Analysts",
    updatedDate: new Date().toLocaleDateString(),
    takeaways: [
      "Inflation decreases the purchasing power of your money over time.",
      "Central banks (like the Federal Reserve) typically target a 2% annual inflation rate.",
      "Investing is necessary to outpace inflation and maintain the real value of your wealth."
    ],
    sources: [
      { title: "Federal Reserve - Inflation FAQ", url: "https://www.federalreserve.gov/faqs/economy_14419.htm" }
    ],
    faqs: [
      { question: "What causes inflation?", answer: "Inflation can be caused by increased demand for products (demand-pull), rising costs to produce goods (cost-push), or an increase in the money supply." }
    ]
  }
};
