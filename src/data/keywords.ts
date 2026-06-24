export type KeywordData = {
  id: string;
  mainKeyword: string;
  secondaryKeywords: string[];
  longTailKeywords: string[];
  trendingQueries: string[];
  peopleAlsoAsk: string[];
  relatedQueries: string[];
  relatedTools: string[];
  relatedArticles: string[];
  description: string;
};

import { megaKeywords } from './megaKeywords';

export const keywordDatabase: Record<string, KeywordData> = {
  ...megaKeywords,
  "mortgage-calculator": {
    id: "mortgage-calculator",
    mainKeyword: "Mortgage Calculator",
    secondaryKeywords: [
      "home loan calculator",
      "mortgage payment calculator",
      "mortgage rate calculator"
    ],
    longTailKeywords: [
      "mortgage calculator with taxes and insurance",
      "how much house can I afford calculator",
      "amortization schedule calculator for mortgage"
    ],
    trendingQueries: [
      "current mortgage rates calculator",
      "fha mortgage calculator",
      "va loan calculator"
    ],
    peopleAlsoAsk: [
      "What is a mortgage?",
      "How much should I put down on a house?",
      "What credit score is needed to buy a house?",
      "How do mortgage interest rates work?",
      "Is it better to rent or buy?"
    ],
    relatedQueries: [
      "mortgage rates today",
      "home affordability",
      "refinance rates"
    ],
    relatedTools: [
      "mortgage-overpayment-calculator",
      "refinance-calculator",
      "affordability-calculator",
      "rent-vs-buy-calculator",
      "down-payment-calculator"
    ],
    relatedArticles: [
      "what-is-a-mortgage"
    ],
    description: "Calculate your monthly mortgage payment including principal, interest, taxes, and insurance."
  },
  "compound-interest-calculator": {
    id: "compound-interest-calculator",
    mainKeyword: "Compound Interest Calculator",
    secondaryKeywords: [
      "investment calculator",
      "interest calculator",
      "growth calculator"
    ],
    longTailKeywords: [
      "compound interest calculator with monthly contributions",
      "daily compound interest calculator",
      "how to calculate compound interest"
    ],
    trendingQueries: [
      "high yield savings account calculator",
      "cd interest calculator",
      "stock market return calculator"
    ],
    peopleAlsoAsk: [
      "What is compound interest?",
      "How does compound interest work?",
      "What is the formula for compound interest?",
      "How can I double my money?",
      "What is a good rate of return?"
    ],
    relatedQueries: [
      "compound interest formula",
      "rule of 72",
      "future value calculator"
    ],
    relatedTools: [
      "investment-return-calculator",
      "sip-calculator",
      "lump-sum-calculator",
      "savings-goal-calculator",
      "inflation-calculator"
    ],
    relatedArticles: [
      "how-compound-interest-works"
    ],
    description: "Calculate how your money can grow over time with the power of compound interest."
  },
  "retirement-calculator": {
    id: "retirement-calculator",
    mainKeyword: "Retirement Calculator",
    secondaryKeywords: [
      "retirement planning calculator",
      "when can I retire calculator",
      "retirement savings calculator"
    ],
    longTailKeywords: [
      "how much do I need to retire calculator",
      "early retirement calculator fire",
      "retirement calculator with inflation"
    ],
    trendingQueries: [
      "401k retirement calculator",
      "pension retirement calculator",
      "social security retirement calculator"
    ],
    peopleAlsoAsk: [
      "How much money do I need to retire?",
      "When can I retire?",
      "What is the 4 percent rule?",
      "How to plan for retirement?",
      "How does inflation affect retirement?"
    ],
    relatedQueries: [
      "retirement age",
      "fire movement",
      "safe withdrawal rate"
    ],
    relatedTools: [
      "401k-calculator",
      "roth-ira-calculator",
      "early-retirement-calculator",
      "social-security-calculator",
      "retirement-withdrawal-calculator"
    ],
    relatedArticles: [
      "fire-movement-explained"
    ],
    description: "Plan your retirement strategy and see if you are on track to meet your financial goals."
  },
  "debt-payoff-calculator": {
    id: "debt-payoff-calculator",
    mainKeyword: "Debt Payoff Calculator",
    secondaryKeywords: [
      "debt reduction calculator",
      "debt repayment calculator",
      "how to pay off debt fast"
    ],
    longTailKeywords: [
      "debt snowball calculator with extra payments",
      "debt avalanche vs snowball calculator",
      "credit card debt payoff calculator"
    ],
    trendingQueries: [
      "student loan payoff calculator",
      "car loan payoff calculator",
      "debt consolidation calculator"
    ],
    peopleAlsoAsk: [
      "What is the debt snowball method?",
      "What is the debt avalanche method?",
      "How can I pay off debt faster?",
      "Should I pay off debt or invest?",
      "How do extra payments affect my loan?"
    ],
    relatedQueries: [
      "debt free journey",
      "Dave Ramsey snowball",
      "debt to income ratio"
    ],
    relatedTools: [
      "debt-snowball-calculator",
      "debt-avalanche-calculator",
      "credit-card-payoff-calculator",
      "student-loan-calculator",
      "debt-to-income-calculator"
    ],
    relatedArticles: [
      "debt-snowball-vs-avalanche"
    ],
    description: "Create a plan to pay off your debt faster and see how much interest you can save."
  },
  "net-worth-calculator": {
    id: "net-worth-calculator",
    mainKeyword: "Net Worth Calculator",
    secondaryKeywords: [
      "calculate net worth",
      "personal net worth calculator",
      "assets and liabilities calculator"
    ],
    longTailKeywords: [
      "how to calculate your net worth",
      "net worth tracker spreadsheet",
      "average net worth by age calculator"
    ],
    trendingQueries: [
      "net worth percentile calculator",
      "liquid net worth calculator",
      "fire net worth calculator"
    ],
    peopleAlsoAsk: [
      "What is net worth?",
      "How is net worth calculated?",
      "What is a good net worth for my age?",
      "Are cars included in net worth?",
      "Is a house part of your net worth?"
    ],
    relatedQueries: [
      "average net worth US",
      "liquid vs total net worth",
      "how to build wealth"
    ],
    relatedTools: [
      "wealth-growth-calculator",
      "financial-independence-calculator",
      "millionaire-calculator",
      "budget-planner",
      "expense-tracker"
    ],
    relatedArticles: [
      "how-to-increase-net-worth"
    ],
    description: "Calculate your total net worth by adding up your assets and subtracting your liabilities."
  },
  "salary-calculator": {
    id: "salary-calculator",
    mainKeyword: "Salary Calculator",
    secondaryKeywords: ["hourly to salary calculator", "paycheck calculator", "take home pay calculator"],
    longTailKeywords: ["how much is 50k a year hourly", "salary to hourly wage calculator"],
    trendingQueries: ["inflation adjusted salary calculator", "what is my take home pay"],
    peopleAlsoAsk: [
      "How much is $20 an hour annually?",
      "How are payroll taxes calculated?",
      "What is the difference between gross and net income?"
    ],
    relatedQueries: ["paycheck calculator state", "hourly wage calculator"],
    relatedTools: ["net-worth-calculator"],
    relatedArticles: ["what-is-inflation"],
    description: "Convert hourly wage to an annual salary and estimate your take-home pay."
  },
  "sip-calculator": {
    id: "sip-calculator",
    mainKeyword: "SIP Calculator",
    secondaryKeywords: ["systematic investment plan calculator", "mutual fund return calculator"],
    longTailKeywords: ["how to calculate sip returns over 10 years", "sip calculator with inflation"],
    trendingQueries: ["step up sip calculator", "best mutual funds for sip"],
    peopleAlsoAsk: [
      "What is a Systematic Investment Plan?",
      "How much will 5000 a month become in 20 years?",
      "Is SIP better than a lump sum investment?"
    ],
    relatedQueries: ["sip mutual fund calculator", "lump sum calculator"],
    relatedTools: ["compound-interest-calculator", "retirement-calculator"],
    relatedArticles: ["how-compound-interest-works"],
    description: "Calculate the future value of your Systematic Investment Plan (SIP) in mutual funds."
  },
  "auto-loan-calculator": {
    id: "auto-loan-calculator",
    mainKeyword: "Auto Loan Calculator",
    secondaryKeywords: ["car payment calculator", "car loan calculator with trade in"],
    longTailKeywords: ["how much car can i afford on 60k salary", "auto loan calculator with taxes and fees"],
    trendingQueries: ["current auto loan rates", "is a 72 month car loan a bad idea"],
    peopleAlsoAsk: [
      "How much should a down payment on a car be?",
      "Does a trade-in reduce sales tax?",
      "What is a good APR for a car loan?"
    ],
    relatedQueries: ["used car loan calculator", "auto loan interest rates"],
    relatedTools: ["debt-payoff-calculator"],
    relatedArticles: ["what-is-amortization"],
    description: "Estimate your monthly auto loan payments, including interest and principal."
  },
  "credit-card-payoff-calculator": {
    id: "credit-card-payoff-calculator",
    mainKeyword: "Credit Card Payoff Calculator",
    secondaryKeywords: ["credit card minimum payment calculator", "how long to pay off credit card"],
    longTailKeywords: ["credit card payoff calculator extra payments", "snowball method credit card payoff"],
    trendingQueries: ["balance transfer vs personal loan", "credit card interest calculator"],
    peopleAlsoAsk: [
      "What happens if I only pay the minimum on my credit card?",
      "How does compound interest work on credit cards?",
      "Should I use savings to pay off credit card debt?"
    ],
    relatedQueries: ["credit card consolidation", "how to pay off debt"],
    relatedTools: ["debt-payoff-calculator", "net-worth-calculator"],
    relatedArticles: ["debt-snowball-vs-avalanche"],
    description: "Calculate how long it will take to pay off your credit card balances."
  },
  "refinance-calculator": {
    id: "refinance-calculator",
    mainKeyword: "Refinance Calculator",
    secondaryKeywords: ["mortgage refinance calculator", "should i refinance my mortgage"],
    longTailKeywords: ["refinance calculator with closing costs", "break even point refinance calculator"],
    trendingQueries: ["when will mortgage rates drop to refinance", "cash out refinance calculator"],
    peopleAlsoAsk: [
      "Is it worth refinancing for 1 percent?",
      "How much does it cost to refinance a mortgage?",
      "Does refinancing hurt my credit score?"
    ],
    relatedQueries: ["refinance rates today", "home equity loan calculator"],
    relatedTools: ["mortgage-calculator"],
    relatedArticles: ["what-is-a-mortgage", "what-is-apr"],
    description: "Determine if refinancing your mortgage will save you money."
  }
};
