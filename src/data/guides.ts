export interface Guide {
  slug: string;
  title: string;
  description: string;
  author: string;
  role: string;
  updatedDate: string;
  takeaways: string[];
  summaryTable: { title: string; rows: { label: string; value: string }[] };
  content: string; // HTML or Markdown strings
  sources: { title: string; url: string }[];
  faqs: { question: string; answer: string }[];
}

export const guidesData: Record<string, Guide> = {
  "what-is-a-mortgage": {
    slug: "what-is-a-mortgage",
    title: "What is a Mortgage? (The Complete Guide)",
    description: "Learn everything you need to know about mortgages, including how they work, the different types of loans, and how to get the best interest rate.",
    author: "FinanceToolsHub Team",
    role: "Real Estate Experts",
    updatedDate: new Date().toLocaleDateString(),
    takeaways: [
      "A mortgage is a loan specifically used to purchase real estate.",
      "The property itself serves as collateral for the loan.",
      "Your monthly payment typically includes Principal, Interest, Taxes, and Insurance (PITI)."
    ],
    summaryTable: {
      title: "Key Mortgage Terms",
      rows: [
        { label: "Principal", value: "The initial amount borrowed." },
        { label: "Interest Rate", value: "The cost of borrowing the principal." },
        { label: "Term", value: "The length of the loan (e.g., 15 or 30 years)." },
        { label: "Down Payment", value: "The upfront cash you pay toward the home purchase." }
      ]
    },
    content: `
      <p>Buying a home is one of the largest financial decisions you will ever make. For most people, it requires taking out a mortgage.</p>
      <h2 style="color: var(--primary-accent); margin-top: 2rem; margin-bottom: 1rem;">How Does a Mortgage Work?</h2>
      <p>When you get a mortgage, a lender gives you a set amount of money to buy a home. You agree to pay back your loan—with interest—over a period of years.</p>
      <p>If you fail to repay the loan, the lender has the right to take the home back. This process is called foreclosure.</p>
      <h2 style="color: var(--primary-accent); margin-top: 2rem; margin-bottom: 1rem;">Types of Mortgages</h2>
      <ul>
        <li><strong>Fixed-Rate Mortgages:</strong> The interest rate stays the same for the entire life of the loan.</li>
        <li><strong>Adjustable-Rate Mortgages (ARMs):</strong> The interest rate can change periodically based on a corresponding financial index.</li>
        <li><strong>FHA Loans:</strong> Backed by the Federal Housing Administration, these loans allow for lower down payments.</li>
        <li><strong>VA Loans:</strong> Available to veterans and active military, usually requiring no down payment.</li>
      </ul>
      <p>To see how your payment changes based on the loan type and interest rate, use our <a href="/calculators/mortgage-calculator" style="color: var(--primary-accent); text-decoration: underline;">Mortgage Calculator</a>.</p>
    `,
    sources: [
      { title: "Consumer Financial Protection Bureau - Mortgages", url: "https://www.consumerfinance.gov/consumer-tools/mortgages/" }
    ],
    faqs: [
      { question: "What is PMI?", answer: "Private Mortgage Insurance (PMI) is usually required if your down payment is less than 20%. It protects the lender if you default on the loan." },
      { question: "What is an escrow account?", answer: "An escrow account is set up by your lender to pay certain property-related expenses, like property taxes and homeowner's insurance, on your behalf." }
    ]
  },
  "how-compound-interest-works": {
    slug: "how-compound-interest-works",
    title: "How Compound Interest Actually Works",
    description: "Understand the math behind wealth creation and how compound interest can turn small, consistent investments into a fortune.",
    author: "FinanceToolsHub Team",
    role: "Investment Analysts",
    updatedDate: new Date().toLocaleDateString(),
    takeaways: [
      "Compound interest is earning interest on both your original deposit and your past interest.",
      "Time is your greatest asset; starting early is more important than investing a lot late.",
      "Albert Einstein allegedly called compound interest the 'eighth wonder of the world.'"
    ],
    summaryTable: {
      title: "Compound Interest Variables",
      rows: [
        { label: "Principal (P)", value: "The starting amount." },
        { label: "Interest Rate (r)", value: "The annual return." },
        { label: "Time (t)", value: "The number of years the money grows." },
        { label: "Frequency (n)", value: "How often interest is compounded (e.g., annually, monthly)." }
      ]
    },
    content: `
      <p>Compound interest is the mechanism that allows your wealth to grow exponentially rather than linearly. It is the core concept behind long-term investing and retirement planning.</p>
      <h2 style="color: var(--primary-accent); margin-top: 2rem; margin-bottom: 1rem;">Simple vs. Compound Interest</h2>
      <p><strong>Simple interest</strong> is calculated only on the principal amount. If you invest $1,000 at 5% simple interest for 10 years, you earn $50 every year. At the end, you have $1,500.</p>
      <p><strong>Compound interest</strong> is calculated on the principal AND the accumulated interest. In year 1, you earn $50. In year 2, you earn 5% on $1,050 ($52.50). Over 10 years, you end up with $1,628.89. Over 30 years, the difference becomes staggering.</p>
      <h2 style="color: var(--primary-accent); margin-top: 2rem; margin-bottom: 1rem;">The Power of Time</h2>
      <p>Because compound interest involves exponential math, the most important variable is Time (t). The longer your money sits, the steeper the growth curve becomes. This is why starting to invest in your 20s is vastly superior to starting in your 40s.</p>
      <p>Try running the numbers yourself on our <a href="/calculators/compound-interest-calculator" style="color: var(--primary-accent); text-decoration: underline;">Compound Interest Calculator</a>.</p>
    `,
    sources: [
      { title: "Investor.gov - Compound Interest", url: "https://www.investor.gov/introduction-investing/investing-basics/glossary/compound-interest" }
    ],
    faqs: [
      { question: "How often does interest compound?", answer: "It depends on the account. Savings accounts often compound daily or monthly. Bonds might compound semi-annually." },
      { question: "What is the Rule of 72?", answer: "The Rule of 72 is a quick mental math shortcut: divide 72 by your annual interest rate to see roughly how many years it will take to double your money." }
    ]
  },
  "fire-movement-explained": {
    slug: "fire-movement-explained",
    title: "The FIRE Movement Explained",
    description: "Financial Independence, Retire Early (FIRE) is a lifestyle movement. Learn the math and strategies behind escaping the 9-to-5 decades early.",
    author: "FinanceToolsHub Team",
    role: "Retirement Planners",
    updatedDate: new Date().toLocaleDateString(),
    takeaways: [
      "FIRE stands for Financial Independence, Retire Early.",
      "The core math relies on saving 50-70% of your income and investing it aggressively.",
      "You reach FIRE when your investments are 25x your annual expenses (The 4% Rule)."
    ],
    summaryTable: {
      title: "FIRE Variations",
      rows: [
        { label: "Lean FIRE", value: "Retiring with a highly frugal lifestyle and lower expenses." },
        { label: "Fat FIRE", value: "Retiring with a large portfolio to sustain an upper-middle-class lifestyle." },
        { label: "Barista FIRE", value: "Quitting the corporate grind but working a low-stress part-time job for health insurance and supplementary income." },
        { label: "Coast FIRE", value: "Having enough invested at a young age that you can stop contributing and just let compound interest carry you to traditional retirement." }
      ]
    },
    content: `
      <p>The FIRE movement is an extreme savings and investment strategy that allows practitioners to retire in their 30s or 40s instead of the traditional age of 65.</p>
      <h2 style="color: var(--primary-accent); margin-top: 2rem; margin-bottom: 1rem;">The Math Behind FIRE</h2>
      <p>FIRE relies heavily on the 4% Rule (developed by the Trinity Study). The rule suggests that if you withdraw 4% of your portfolio every year (adjusted for inflation), your money should last for at least 30 years—and likely indefinitely.</p>
      <p>To find your FIRE number, take your annual expenses and multiply by 25. If you spend $40,000 a year, you need a $1,000,000 portfolio to reach financial independence.</p>
      <h2 style="color: var(--primary-accent); margin-top: 2rem; margin-bottom: 1rem;">How to Achieve FIRE</h2>
      <ul>
        <li><strong>Aggressive Savings:</strong> Standard financial advice suggests saving 10-15%. FIRE practitioners often save 50% or more.</li>
        <li><strong>Index Fund Investing:</strong> Most of these savings are poured into low-cost, broad-market index funds (like the S&P 500 or Total Stock Market).</li>
        <li><strong>Geo-arbitrage:</strong> Many move to lower cost-of-living areas (or even other countries) to make their portfolios stretch further.</li>
      </ul>
      <p>Use our <a href="/calculators/retirement-calculator" style="color: var(--primary-accent); text-decoration: underline;">Retirement Calculator</a> to map out your FIRE journey.</p>
    `,
    sources: [
      { title: "Forbes - What Is The FIRE Movement?", url: "https://www.forbes.com/advisor/retirement/the-fire-movement-explained/" }
    ],
    faqs: [
      { question: "Is FIRE only for high income earners?", answer: "While a high income helps, anyone can achieve financial independence by drastically reducing their expenses. It's the savings rate (percentage of income saved) that matters most." },
      { question: "What about healthcare before Medicare?", answer: "This is a major challenge for early retirees in the US. Many use ACA (Obamacare) subsidies, health sharing ministries, or Barista FIRE to cover healthcare." }
    ]
  },
  "debt-snowball-vs-avalanche": {
    slug: "debt-snowball-vs-avalanche",
    title: "Debt Snowball vs. Avalanche Method",
    description: "Compare the two most popular debt payoff strategies to find out which one will work best for your financial situation and psychology.",
    author: "FinanceToolsHub Team",
    role: "Credit & Debt Specialists",
    updatedDate: new Date().toLocaleDateString(),
    takeaways: [
      "The Debt Snowball method targets your smallest balances first for quick psychological wins.",
      "The Debt Avalanche method targets the highest interest rates first to save the most money.",
      "Both methods require you to pay minimums on everything while putting extra cash toward the target debt."
    ],
    summaryTable: {
      title: "Snowball vs Avalanche Comparison",
      rows: [
        { label: "Target", value: "Snowball: Smallest Balance. Avalanche: Highest Interest Rate." },
        { label: "Psychology", value: "Snowball: High motivation from quick wins. Avalanche: Satisfaction from mathematical efficiency." },
        { label: "Total Interest Paid", value: "Snowball: Higher. Avalanche: Lower." },
        { label: "Best For", value: "Snowball: Those who need quick motivation. Avalanche: Those who are highly disciplined." }
      ]
    },
    content: `
      <p>When you have multiple debts—like credit cards, student loans, and a car note—it can be overwhelming to know where to start. Two strategies dominate the personal finance world: The Debt Snowball and the Debt Avalanche.</p>
      <h2 style="color: var(--primary-accent); margin-top: 2rem; margin-bottom: 1rem;">The Debt Snowball</h2>
      <p>Popularized by Dave Ramsey, this method focuses on psychology over math. You list your debts from smallest balance to largest balance, regardless of interest rate. You pay the minimums on everything, but throw every extra dollar at the smallest debt.</p>
      <p>Once the smallest debt is gone, you take that payment and roll it into the next smallest debt, creating a 'snowball' effect.</p>
      <h2 style="color: var(--primary-accent); margin-top: 2rem; margin-bottom: 1rem;">The Debt Avalanche</h2>
      <p>This method focuses purely on math. You list your debts from highest interest rate to lowest interest rate. You pay minimums on everything, and throw all extra cash at the highest interest rate debt.</p>
      <p>Mathematically, the Avalanche will always result in paying less total interest and getting out of debt faster. However, if your highest interest debt is a massive $30,000 credit card bill, it might take years to clear, causing you to lose motivation.</p>
      <p>Run your own numbers on our <a href="/calculators/debt-payoff-calculator" style="color: var(--primary-accent); text-decoration: underline;">Debt Payoff Calculator</a>.</p>
    `,
    sources: [
      { title: "Consumer Financial Protection Bureau - Paying down credit cards", url: "https://www.consumerfinance.gov/about-us/blog/how-pay-down-your-credit-card-debt/" }
    ],
    faqs: [
      { question: "Can I switch methods halfway through?", answer: "Absolutely. Some people start with the Snowball to get a quick win and clear out pesky $500 medical bills, then switch to the Avalanche for the big stuff." },
      { question: "Should I include my mortgage in these methods?", answer: "Generally, no. Mortgages are low-interest, long-term debt. These payoff strategies are best reserved for high-interest consumer debt like credit cards and personal loans." }
    ]
  },
  "how-to-increase-net-worth": {
    slug: "how-to-increase-net-worth",
    title: "How to Increase Your Net Worth",
    description: "Your net worth is the true measure of wealth. Learn actionable strategies to boost your assets and crush your liabilities.",
    author: "FinanceToolsHub Team",
    role: "Wealth Management Analysts",
    updatedDate: new Date().toLocaleDateString(),
    takeaways: [
      "Net worth is the difference between what you own (assets) and what you owe (liabilities).",
      "A high income does not guarantee a high net worth if your spending matches your earnings.",
      "The fastest way to increase net worth is simultaneously paying down high-interest debt while investing in appreciating assets."
    ],
    summaryTable: {
      title: "Strategies for Net Worth Growth",
      rows: [
        { label: "Increase Assets", value: "Invest in stocks, buy real estate, increase cash savings, build a business." },
        { label: "Decrease Liabilities", value: "Pay off credit cards, refinance high-interest loans, accelerate mortgage payoff." },
        { label: "Increase Income", value: "Negotiate a raise, start a side hustle, acquire new high-value skills." },
        { label: "Decrease Expenses", value: "Audit subscriptions, house-hack, negotiate bills, cook at home." }
      ]
    },
    content: `
      <p>Your net worth is the ultimate scorecard of your financial life. It doesn't matter if you make $500,000 a year; if you spend $500,000 a year, your net worth growth is zero.</p>
      <h2 style="color: var(--primary-accent); margin-top: 2rem; margin-bottom: 1rem;">1. Control Your Cash Flow</h2>
      <p>You cannot improve what you do not measure. The first step to increasing your net worth is budgeting. Track your income and your expenses to ensure you have positive cash flow every month.</p>
      <h2 style="color: var(--primary-accent); margin-top: 2rem; margin-bottom: 1rem;">2. Eliminate 'Bad' Liabilities</h2>
      <p>Not all debt is created equal. A 3% mortgage is vastly different from a 24% credit card. Focus intensely on eliminating high-interest consumer debt. Every dollar of debt you pay off is a guaranteed, tax-free return on your money and a direct dollar-for-dollar increase to your net worth.</p>
      <h2 style="color: var(--primary-accent); margin-top: 2rem; margin-bottom: 1rem;">3. Buy Appreciating Assets</h2>
      <p>Once your bad debt is gone, pour your positive cash flow into assets that go up in value over time. This includes low-cost index funds, real estate, and occasionally alternative investments. Unlike a car, which loses value the moment you drive it off the lot, these assets compound over time.</p>
      <p>Track your progress regularly using our <a href="/calculators/net-worth-calculator" style="color: var(--primary-accent); text-decoration: underline;">Net Worth Calculator</a>.</p>
    `,
    sources: [
      { title: "Investor.gov - Net Worth", url: "https://www.investor.gov/introduction-investing/investing-basics/how-read-financial-statements/net-worth" }
    ],
    faqs: [
      { question: "Is a negative net worth bad?", answer: "It's very common for recent college graduates due to student loans. The goal is to ensure the trajectory is moving upwards over time." },
      { question: "Should I track my net worth daily?", answer: "No. The stock market fluctuates daily. Tracking it once a month or once a quarter provides a much clearer picture of long-term trends without the daily stress." }
    ]
  }
};
