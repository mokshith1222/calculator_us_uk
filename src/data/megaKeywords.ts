import { KeywordData } from './keywords';

export const megaKeywords: Record<string, KeywordData> = {
  // CRYPTO & WEB3
  "crypto-staking-calculator": {
    id: "crypto-staking-calculator",
    mainKeyword: "Crypto Staking Calculator",
    secondaryKeywords: ["staking rewards calculator", "ethereum staking apy", "crypto yield calculator"],
    longTailKeywords: ["how to calculate staking rewards for crypto", "best crypto staking calculator"],
    trendingQueries: ["solana staking rewards calculator", "eth 2.0 staking calculator"],
    peopleAlsoAsk: [
      "Is crypto staking profitable?",
      "How do you calculate staking APY?",
      "What are the risks of staking crypto?",
      "How much can I make staking Ethereum?"
    ],
    relatedQueries: ["highest apy crypto staking", "what is proof of stake"],
    relatedTools: ["crypto-profit-calculator", "impermanent-loss-calculator"],
    relatedArticles: [],
    description: "Calculate your estimated APY returns and daily passive income from staking cryptocurrency tokens."
  },
  "bitcoin-dca-calculator": {
    id: "bitcoin-dca-calculator",
    mainKeyword: "Bitcoin DCA Calculator",
    secondaryKeywords: ["dollar cost average crypto", "btc recurring buy calculator", "crypto dca strategy"],
    longTailKeywords: ["what if I invested $100 in bitcoin every week", "bitcoin dca historical calculator"],
    trendingQueries: ["dca bitcoin last 5 years", "is dca better than lump sum crypto"],
    peopleAlsoAsk: [
      "Does dollar cost averaging work for Bitcoin?",
      "How often should I DCA into crypto?",
      "What is the best app for Bitcoin DCA?"
    ],
    relatedQueries: ["bitcoin price prediction", "crypto portfolio tracker"],
    relatedTools: ["crypto-profit-calculator", "compound-interest-calculator"],
    relatedArticles: [],
    description: "Visualize the historical and projected power of Dollar Cost Averaging (DCA) into Bitcoin."
  },
  "crypto-profit-calculator": {
    id: "crypto-profit-calculator",
    mainKeyword: "Crypto Profit Calculator",
    secondaryKeywords: ["crypto profit and loss", "crypto exchange fee calculator", "roi calculator crypto"],
    longTailKeywords: ["calculate net profit crypto after exchange fees", "coinbase fee calculator"],
    trendingQueries: ["crypto tax calculator", "binance profit calculator"],
    peopleAlsoAsk: [
      "How do you calculate crypto profit?",
      "Are exchange fees deductible on crypto?",
      "How do I track my crypto gains and losses?"
    ],
    relatedQueries: ["crypto portfolio tracker", "capital gains tax crypto"],
    relatedTools: ["capital-gains-tax", "crypto-staking-calculator"],
    relatedArticles: [],
    description: "Calculate your exact cryptocurrency net profit after exchange fees and slippage."
  },
  "impermanent-loss-calculator": {
    id: "impermanent-loss-calculator",
    mainKeyword: "Impermanent Loss Calculator",
    secondaryKeywords: ["uniswap IL calculator", "defi liquidity pool calculator", "yield farming risk calculator"],
    longTailKeywords: ["how to calculate impermanent loss uniswap v3", "defi impermanent loss formula"],
    trendingQueries: ["how to avoid impermanent loss", "is yield farming worth the risk"],
    peopleAlsoAsk: [
      "What is impermanent loss in crypto?",
      "How do you avoid impermanent loss?",
      "Does impermanent loss become permanent?"
    ],
    relatedQueries: ["liquidity provider fees", "amm automated market maker"],
    relatedTools: ["crypto-profit-calculator", "crypto-staking-calculator"],
    relatedArticles: [],
    description: "Calculate potential impermanent loss risks when providing liquidity to DeFi AMM protocols."
  },

  // ADVANCED REAL ESTATE
  "rent-vs-buy-calculator": {
    id: "rent-vs-buy-calculator",
    mainKeyword: "Rent vs Buy Calculator",
    secondaryKeywords: ["is it cheaper to rent or buy", "rent vs buy breakeven", "ny times rent vs buy"],
    longTailKeywords: ["renting and investing the difference vs buying", "when does buying a house make sense"],
    trendingQueries: ["housing market crash 2024", "should I buy a house now or wait"],
    peopleAlsoAsk: [
      "Is it financially better to rent or buy a house?",
      "What is the 5% rule in real estate?",
      "How many years until buying is cheaper than renting?"
    ],
    relatedQueries: ["cost of homeownership", "mortgage vs rent payment"],
    relatedTools: ["mortgage-calculator", "affordability-calculator"],
    relatedArticles: [],
    description: "The ultimate tool to calculate the exact breakeven point between renting and buying a home."
  },
  "airbnb-roi-calculator": {
    id: "airbnb-roi-calculator",
    mainKeyword: "AirBnB ROI Calculator",
    secondaryKeywords: ["short term rental calculator", "airbnb profit estimator", "vacation rental roi"],
    longTailKeywords: ["how to calculate cash on cash return for airbnb", "is an airbnb investment profitable"],
    trendingQueries: ["best places to buy an airbnb", "airbnb occupancy rate data"],
    peopleAlsoAsk: [
      "What is a good ROI for an Airbnb?",
      "How do you calculate Airbnb profit?",
      "Is running an Airbnb still profitable?"
    ],
    relatedQueries: ["arbitrage airbnb", "vrbo host fees"],
    relatedTools: ["house-flipping-calculator", "mortgage-calculator"],
    relatedArticles: [],
    description: "Estimate monthly cash flow, cap rate, and Cash-on-Cash Return for short-term AirBnB rentals."
  },
  "house-flipping-calculator": {
    id: "house-flipping-calculator",
    mainKeyword: "House Flipping Profit Calculator",
    secondaryKeywords: ["arv calculator real estate", "70 percent rule calculator", "flip profit estimator"],
    longTailKeywords: ["how to calculate ARV for a flip", "max allowable offer formula real estate"],
    trendingQueries: ["brrrr strategy calculator", "hard money loan calculator"],
    peopleAlsoAsk: [
      "What is the 70% rule in house flipping?",
      "How do you estimate rehab costs?",
      "What is a good profit margin for flipping houses?"
    ],
    relatedQueries: ["wholesale real estate", "arv appraisal"],
    relatedTools: ["heloc-calculator", "mortgage-calculator"],
    relatedArticles: [],
    description: "Calculate your Max Allowable Offer (MAO) and estimated profit for your next real estate flip."
  },
  "heloc-calculator": {
    id: "heloc-calculator",
    mainKeyword: "HELOC Calculator",
    secondaryKeywords: ["home equity line of credit calculator", "how much equity can I borrow", "ltv calculator"],
    longTailKeywords: ["calculate max heloc based on ltv", "home equity loan vs heloc"],
    trendingQueries: ["current heloc rates", "can I use a heloc to buy another house"],
    peopleAlsoAsk: [
      "How much of a HELOC can I qualify for?",
      "What is a good LTV for a HELOC?",
      "Does a HELOC affect my mortgage?"
    ],
    relatedQueries: ["cash out refinance", "home equity loan"],
    relatedTools: ["house-flipping-calculator", "auto-loan-refinance"],
    relatedArticles: [],
    description: "Determine how much cash you can access from your home's equity with a HELOC."
  },

  // DEBT DESTRUCTION
  "credit-card-payoff": {
    id: "credit-card-payoff",
    mainKeyword: "Credit Card Payoff Calculator",
    secondaryKeywords: ["credit card interest calculator", "how long to pay off credit card", "minimum payment calculator"],
    longTailKeywords: ["how much interest will I pay on my credit card", "credit card payoff timeline"],
    trendingQueries: ["best balance transfer credit cards", "how to escape credit card debt"],
    peopleAlsoAsk: [
      "How long will it take to pay off my credit card?",
      "Why is my credit card balance not going down?",
      "Should I pay my credit card in full?"
    ],
    relatedQueries: ["debt consolidation loan", "credit score impact of utilization"],
    relatedTools: ["snowball-vs-avalanche", "debt-payoff-calculator"],
    relatedArticles: [],
    description: "Calculate exactly how many months and how much interest it will take to become credit card debt free."
  },
  "auto-loan-refinance": {
    id: "auto-loan-refinance",
    mainKeyword: "Auto Loan Refinance Calculator",
    secondaryKeywords: ["car loan refinance calculator", "should I refinance my car", "auto loan interest calculator"],
    longTailKeywords: ["how much will I save refinancing my auto loan", "auto loan refinance vs trade in"],
    trendingQueries: ["current auto loan rates", "can I refinance a car with bad credit"],
    peopleAlsoAsk: [
      "Is it worth it to refinance a car?",
      "Does refinancing a car hurt your credit?",
      "When is the best time to refinance an auto loan?"
    ],
    relatedQueries: ["car loan upside down", "gap insurance"],
    relatedTools: ["credit-card-payoff", "student-loan-payoff"],
    relatedArticles: [],
    description: "See how much money you can save every month by refinancing your car to a lower interest rate."
  },
  "student-loan-payoff": {
    id: "student-loan-payoff",
    mainKeyword: "Student Loan Payoff Calculator",
    secondaryKeywords: ["student loan amortization", "extra payment student loan calculator", "college debt calculator"],
    longTailKeywords: ["how to pay off student loans in 5 years", "student loan consolidation calculator"],
    trendingQueries: ["student loan forgiveness updates", "save plan calculator"],
    peopleAlsoAsk: [
      "How can I pay off my student loans faster?",
      "Is it smart to pay off student loans early?",
      "Should I consolidate my student loans?"
    ],
    relatedQueries: ["pslf public service loan forgiveness", "income driven repayment"],
    relatedTools: ["snowball-vs-avalanche", "credit-card-payoff"],
    relatedArticles: [],
    description: "Map out your exact path to student loan freedom and see the impact of extra monthly payments."
  },
  "snowball-vs-avalanche": {
    id: "snowball-vs-avalanche",
    mainKeyword: "Snowball vs Avalanche Calculator",
    secondaryKeywords: ["debt snowball calculator", "debt avalanche calculator", "ramsey debt snowball"],
    longTailKeywords: ["which debt payoff method is faster snowball or avalanche", "how does the debt snowball work"],
    trendingQueries: ["dave ramsey baby steps", "highest interest first vs lowest balance first"],
    peopleAlsoAsk: [
      "What is the difference between debt snowball and avalanche?",
      "Which debt payoff method saves the most money?",
      "Why does Dave Ramsey recommend the debt snowball?"
    ],
    relatedQueries: ["debt consolidation strategies", "how to get out of debt"],
    relatedTools: ["credit-card-payoff", "debt-payoff-calculator"],
    relatedArticles: [],
    description: "Compare the mathematical differences between the Debt Snowball and Debt Avalanche strategies side-by-side."
  },

  // FIRE
  "fire-number": {
    id: "fire-number",
    mainKeyword: "FIRE Number Calculator",
    secondaryKeywords: ["financial independence retire early calculator", "how much to retire early", "fire movement calculator"],
    longTailKeywords: ["how to calculate my FIRE number exactly", "safe withdrawal rate calculator"],
    trendingQueries: ["what is lean fire vs fat fire", "the 4 percent rule"],
    peopleAlsoAsk: [
      "What is a FIRE number?",
      "Is $2 million enough to retire at 40?",
      "How does the 4% rule work?"
    ],
    relatedQueries: ["fat fire", "barista fire"],
    relatedTools: ["coast-fire", "retirement-calculator"],
    relatedArticles: [],
    description: "Calculate your exact FIRE Number (Financial Independence, Retire Early) based on your annual expenses."
  },
  "coast-fire": {
    id: "coast-fire",
    mainKeyword: "Coast FIRE Calculator",
    secondaryKeywords: ["coast fi calculator", "when can I stop investing for retirement", "barista fire calculator"],
    longTailKeywords: ["how much do I need to reach coast fire by 30", "coast fire formula"],
    trendingQueries: ["what is coast fire", "how to coast to retirement"],
    peopleAlsoAsk: [
      "What does it mean to reach Coast FIRE?",
      "How is Coast FIRE different from normal FIRE?",
      "At what age should I hit Coast FIRE?"
    ],
    relatedQueries: ["compound interest", "retirement age"],
    relatedTools: ["fire-number", "compound-interest-calculator"],
    relatedArticles: [],
    description: "Find out the exact dollar amount you need invested today to never have to invest another penny again."
  },
  "rule-of-72": {
    id: "rule-of-72",
    mainKeyword: "Rule of 72 Calculator",
    secondaryKeywords: ["years to double investment", "doubling time calculator", "rule of 72 math"],
    longTailKeywords: ["how long does it take money to double at 8 percent", "rule of 72 compound interest"],
    trendingQueries: ["what is the rule of 72 in finance", "is the rule of 72 accurate"],
    peopleAlsoAsk: [
      "What is the Rule of 72?",
      "How long does it take for an investment to double?",
      "Does the Rule of 72 account for inflation?"
    ],
    relatedQueries: ["sp500 average return", "compound interest formula"],
    relatedTools: ["compound-interest-calculator", "drip-calculator"],
    relatedArticles: [],
    description: "Quickly determine exactly how many years it will take for your investments to double."
  },
  "drip-calculator": {
    id: "drip-calculator",
    mainKeyword: "Dividend Reinvestment Calculator",
    secondaryKeywords: ["drip calculator", "dividend compounding calculator", "dividend reinvestment plan returns"],
    longTailKeywords: ["how much difference does a drip make over 20 years", "compound interest dividend calculator"],
    trendingQueries: ["best dividend aristocrats", "how to live off dividends"],
    peopleAlsoAsk: [
      "What is a DRIP investment?",
      "Why is dividend reinvestment so powerful?",
      "Should I always reinvest dividends?"
    ],
    relatedQueries: ["high yield dividend stocks", "dividend growth investing"],
    relatedTools: ["rule-of-72", "compound-interest-calculator"],
    relatedArticles: [],
    description: "Visualize the massive exponential growth of a DRIP (Dividend Reinvestment Plan) over decades."
  },

  // BUSINESS & TAX
  "freelancer-hourly-rate": {
    id: "freelancer-hourly-rate",
    mainKeyword: "Freelancer Hourly Rate Calculator",
    secondaryKeywords: ["how much should I charge hourly", "contractor rate calculator", "salary to freelance rate"],
    longTailKeywords: ["how to calculate freelance hourly rate from desired salary", "freelance billable hours calculator"],
    trendingQueries: ["freelance taxes vs w2", "how to price freelance services"],
    peopleAlsoAsk: [
      "How do I calculate my freelance hourly rate?",
      "What is a good hourly rate for a freelancer?",
      "How much should a freelancer mark up their rate?"
    ],
    relatedQueries: ["self employment tax", "independent contractor vs employee"],
    relatedTools: ["salary-to-hourly", "capital-gains-tax"],
    relatedArticles: [],
    description: "Calculate exactly what you need to charge per hour as a freelancer to hit your target salary."
  },
  "ecommerce-margin": {
    id: "ecommerce-margin",
    mainKeyword: "E-commerce Profit Margin Calculator",
    secondaryKeywords: ["shopify profit margin calculator", "gross margin calculator", "dropshipping margin calculator"],
    longTailKeywords: ["how to calculate profit margin for ecommerce products", "cogs and shipping margin calculator"],
    trendingQueries: ["what is a good profit margin for ecommerce", "how to improve profit margins"],
    peopleAlsoAsk: [
      "How do you calculate profit margin for a product?",
      "What is a healthy profit margin for Shopify?",
      "Does profit margin include shipping?"
    ],
    relatedQueries: ["roas return on ad spend", "customer acquisition cost cac"],
    relatedTools: ["freelancer-hourly-rate", "capital-gains-tax"],
    relatedArticles: [],
    description: "Analyze your Cost of Goods Sold (COGS), shipping, and marketing to find your true e-commerce profit margin."
  },
  "capital-gains-tax": {
    id: "capital-gains-tax",
    mainKeyword: "Capital Gains Tax Estimator",
    secondaryKeywords: ["short term capital gains calculator", "long term capital gains calculator", "stock tax calculator"],
    longTailKeywords: ["how much tax will I pay on my stock profits", "capital gains tax rate 2024"],
    trendingQueries: ["how to avoid capital gains tax", "tax loss harvesting"],
    peopleAlsoAsk: [
      "What is the capital gains tax rate?",
      "How do I avoid capital gains tax on stocks?",
      "Is short term capital gains taxed as ordinary income?"
    ],
    relatedQueries: ["wash sale rule", "step up in basis"],
    relatedTools: ["crypto-profit-calculator", "freelancer-hourly-rate"],
    relatedArticles: [],
    description: "Estimate your short-term and long-term capital gains taxes for stock and crypto sales."
  },
  "salary-to-hourly": {
    id: "salary-to-hourly",
    mainKeyword: "Salary to Hourly Converter",
    secondaryKeywords: ["annual salary to hourly wage", "how much is 70k an hour", "hourly to salary calculator"],
    longTailKeywords: ["convert 100k salary to hourly rate", "what is my daily rate from salary"],
    trendingQueries: ["is 50 dollars an hour good", "average us salary 2024"],
    peopleAlsoAsk: [
      "How do you convert a salary to an hourly rate?",
      "How much is a $60,000 salary per hour?",
      "How many working hours are in a year?"
    ],
    relatedQueries: ["paycheck calculator", "take home pay"],
    relatedTools: ["freelancer-hourly-rate", "capital-gains-tax"],
    relatedArticles: [],
    description: "Instantly convert your annual salary into an hourly wage, daily rate, and weekly paycheck amount."
  }
};
