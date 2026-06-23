const fs = require('fs');

const categories = {
  "Mortgage & Home": [
    "Mortgage Calculator", "Mortgage Overpayment Calculator", "Refinance Calculator",
    "Affordability Calculator", "Rent vs Buy Calculator", "Down Payment Calculator",
    "Home Equity Calculator", "Closing Cost Calculator", "Property Tax Calculator", "Amortization Calculator"
  ],
  "Debt & Loans": [
    "Loan Calculator", "Personal Loan Calculator", "Car Loan Calculator",
    "Debt Payoff Calculator", "Debt Snowball Calculator", "Debt Avalanche Calculator",
    "Credit Card Payoff Calculator", "Credit Utilization Calculator", "Student Loan Calculator", "Debt-to-Income Calculator"
  ],
  "Investing": [
    "Compound Interest Calculator", "Investment Return Calculator", "SIP Calculator",
    "Lump Sum Calculator", "Dividend Calculator", "FIRE Calculator",
    "Net Worth Calculator", "Portfolio Growth Calculator", "Risk vs Return Calculator", "Dollar Cost Averaging Calculator"
  ],
  "Retirement": [
    "Retirement Calculator", "401k Calculator", "Roth IRA Calculator",
    "Traditional IRA Calculator", "Pension Calculator", "Social Security Calculator",
    "Retirement Income Calculator", "Early Retirement Calculator", "Required Savings Calculator", "Retirement Withdrawal Calculator"
  ],
  "Income & Taxes": [
    "Salary Calculator", "Hourly to Salary Calculator", "Overtime Calculator",
    "Take Home Pay Calculator", "US Federal Tax Calculator", "UK Income Tax Calculator",
    "Capital Gains Tax Calculator", "Self Employment Tax Calculator", "Bonus Tax Calculator", "Pay Raise Calculator"
  ],
  "Bonus Tools": [
    "Emergency Fund Calculator", "Inflation Calculator", "Savings Goal Calculator",
    "Budget Planner", "Expense Tracker", "Cash Flow Calculator",
    "Wealth Growth Calculator", "Financial Independence Calculator", "Passive Income Calculator", "Millionaire Calculator"
  ]
};

const makeSlug = (str) => {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

// Map each calculator to an engine type: "loan", "compound", or "arithmetic"
function determineEngine(slug) {
  if (slug.includes('loan') || slug.includes('mortgage') || slug.includes('amortization') || slug.includes('debt') || slug.includes('refinance')) {
    return 'loan';
  }
  if (slug.includes('invest') || slug.includes('compound') || slug.includes('growth') || slug.includes('retire') || slug.includes('dividend') || slug.includes('sip') || slug.includes('fire')) {
    return 'compound';
  }
  return 'arithmetic';
}

const configs = {};

for (const cat in categories) {
  categories[cat].forEach(name => {
    const slug = makeSlug(name);
    let engine = determineEngine(slug);
    
    let defaultInputs = [];
    if (engine === 'loan') {
      defaultInputs = [
        { id: "principal", label: "Loan Amount ($)", default: 250000, type: "number" },
        { id: "rate", label: "Interest Rate (%)", default: 6.5, type: "number" },
        { id: "years", label: "Loan Term (Years)", default: 30, type: "number" }
      ];
    } else if (engine === 'compound') {
      defaultInputs = [
        { id: "principal", label: "Initial Investment ($)", default: 10000, type: "number" },
        { id: "monthly", label: "Monthly Contribution ($)", default: 500, type: "number" },
        { id: "rate", label: "Annual Return (%)", default: 7, type: "number" },
        { id: "years", label: "Years to Grow", default: 20, type: "number" }
      ];
    } else {
      defaultInputs = [
        { id: "value1", label: "Primary Amount ($)", default: 50000, type: "number" },
        { id: "value2", label: "Secondary Amount (%)", default: 20, type: "number" }
      ];
    }

    configs[slug] = {
      name: name,
      category: cat,
      engine: engine,
      inputs: defaultInputs
    };
  });
}

const fileContent = `// Automatically generated configs
export const calculatorConfigs: Record<string, any> = ${JSON.stringify(configs, null, 2)};
`;

fs.writeFileSync('./src/data/calculatorConfigs.ts', fileContent);
console.log("Generated calculatorConfigs.ts");
