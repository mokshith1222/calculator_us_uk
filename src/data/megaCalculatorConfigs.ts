export const megaCalculatorConfigs: Record<string, any> = {
  // --- CRYPTO & WEB3 ---
  "crypto-staking-calculator": {
    name: "Crypto Staking Calculator",
    category: "Crypto & Web3",
    icon: "🪙",
    inputs: [
      { id: "initial", label: "Initial Token Amount", type: "number", min: 0, defaultValue: 1000 },
      { id: "price", label: "Current Token Price ($)", type: "number", min: 0, defaultValue: 2500, step: 0.01 },
      { id: "apy", label: "Annual Percentage Yield (APY %)", type: "number", min: 0, max: 1000, defaultValue: 12 },
      { id: "months", label: "Staking Duration (Months)", type: "number", min: 1, max: 120, defaultValue: 12 }
    ],
    calculate: (inputs: any) => {
      const initialValue = inputs.initial * inputs.price;
      const rate = inputs.apy / 100;
      const years = inputs.months / 12;
      const finalTokens = inputs.initial * Math.pow(1 + rate, years);
      const finalValue = finalTokens * inputs.price;
      const profitTokens = finalTokens - inputs.initial;
      const profitUSD = finalValue - initialValue;
      
      const chartData = [];
      for (let m = 0; m <= inputs.months; m++) {
        const t = inputs.initial * Math.pow(1 + rate, m / 12);
        chartData.push({ name: `Month ${m}`, value: Number((t * inputs.price).toFixed(2)) });
      }

      return {
        summary: [
          { label: "Final Token Amount", value: finalTokens.toFixed(4) },
          { label: "Total Profit (USD)", value: profitUSD },
          { label: "Final Value (USD)", value: finalValue }
        ],
        chartData
      };
    }
  },
  "bitcoin-dca-calculator": {
    name: "Bitcoin DCA Calculator",
    category: "Crypto & Web3",
    icon: "₿",
    inputs: [
      { id: "investment", label: "Weekly Investment ($)", type: "number", min: 0, defaultValue: 50 },
      { id: "years", label: "Duration (Years)", type: "number", min: 1, max: 20, defaultValue: 5 },
      { id: "growth", label: "Expected Annual BTC Growth (%)", type: "number", min: 0, max: 500, defaultValue: 40 }
    ],
    calculate: (inputs: any) => {
      const weeks = inputs.years * 52;
      const weeklyRate = (inputs.growth / 100) / 52;
      let totalInvested = 0;
      let totalValue = 0;
      const chartData = [];

      for (let w = 1; w <= weeks; w++) {
        totalInvested += inputs.investment;
        totalValue = (totalValue + inputs.investment) * (1 + weeklyRate);
        if (w % 52 === 0) {
          chartData.push({ name: `Year ${w / 52}`, value: Number(totalValue.toFixed(2)), principal: totalInvested });
        }
      }

      return {
        summary: [
          { label: "Total Invested", value: totalInvested },
          { label: "Total Profit", value: totalValue - totalInvested },
          { label: "Final Portfolio Value", value: totalValue }
        ],
        chartData
      };
    }
  },
  "crypto-profit-calculator": {
    name: "Crypto Profit Calculator",
    category: "Crypto & Web3",
    icon: "📈",
    inputs: [
      { id: "buyPrice", label: "Buy Price ($)", type: "number", min: 0, defaultValue: 50000, step: 0.01 },
      { id: "sellPrice", label: "Sell Price ($)", type: "number", min: 0, defaultValue: 60000, step: 0.01 },
      { id: "investment", label: "Investment Amount ($)", type: "number", min: 0, defaultValue: 1000 },
      { id: "fee", label: "Exchange Fee (%)", type: "number", min: 0, max: 10, defaultValue: 0.5, step: 0.1 }
    ],
    calculate: (inputs: any) => {
      const tokens = inputs.investment / inputs.buyPrice;
      const buyFee = inputs.investment * (inputs.fee / 100);
      const grossValue = tokens * inputs.sellPrice;
      const sellFee = grossValue * (inputs.fee / 100);
      const totalFees = buyFee + sellFee;
      const netProfit = grossValue - inputs.investment - totalFees;
      const roi = (netProfit / inputs.investment) * 100;

      return {
        summary: [
          { label: "Total Exchange Fees", value: totalFees },
          { label: "Net Profit", value: netProfit },
          { label: "ROI (%)", value: `${roi.toFixed(2)}%`, isCurrency: false }
        ],
        chartData: [
          { name: "Initial Investment", value: inputs.investment },
          { name: "Fees Paid", value: totalFees },
          { name: "Net Profit", value: netProfit }
        ]
      };
    }
  },
  "impermanent-loss-calculator": {
    name: "Impermanent Loss Calculator",
    category: "Crypto & Web3",
    icon: "⚖️",
    inputs: [
      { id: "priceChange", label: "Asset Price Change (%)", type: "number", min: -99, max: 1000, defaultValue: 100 }
    ],
    calculate: (inputs: any) => {
      const ratio = 1 + (inputs.priceChange / 100);
      // IL = 2 * sqrt(ratio) / (1 + ratio) - 1
      const il = (2 * Math.sqrt(ratio)) / (1 + ratio) - 1;
      const lossPercent = Math.abs(il * 100);

      return {
        summary: [
          { label: "Impermanent Loss (%)", value: `${lossPercent.toFixed(2)}%`, isCurrency: false },
          { label: "Value Retained vs HODL", value: `${(100 - lossPercent).toFixed(2)}%`, isCurrency: false }
        ]
      };
    }
  },

  // --- ADVANCED REAL ESTATE ---
  "rent-vs-buy-calculator": {
    name: "Rent vs. Buy Calculator",
    category: "Advanced Real Estate",
    icon: "🏠",
    inputs: [
      { id: "rent", label: "Monthly Rent ($)", type: "number", min: 0, defaultValue: 2000 },
      { id: "homePrice", label: "Home Purchase Price ($)", type: "number", min: 0, defaultValue: 400000 },
      { id: "downPayment", label: "Down Payment (%)", type: "number", min: 0, max: 100, defaultValue: 20 },
      { id: "years", label: "Time Horizon (Years)", type: "number", min: 1, max: 30, defaultValue: 10 }
    ],
    calculate: (inputs: any) => {
      const totalRent = inputs.rent * 12 * inputs.years;
      const totalBuyingCost = (inputs.homePrice * 0.05 * inputs.years) + inputs.homePrice; // Extremely simplified buying cost
      const netDifference = totalBuyingCost - totalRent;

      return {
        summary: [
          { label: "Total Rent Paid", value: totalRent },
          { label: "Total Cost of Buying (Est.)", value: totalBuyingCost },
          { label: "Difference", value: Math.abs(netDifference) }
        ],
        chartData: [
          { name: "Total Rent", value: totalRent },
          { name: "Total Buying", value: totalBuyingCost }
        ]
      };
    }
  },
  "airbnb-roi-calculator": {
    name: "AirBnB ROI Calculator",
    category: "Advanced Real Estate",
    icon: "🧳",
    inputs: [
      { id: "price", label: "Property Price ($)", type: "number", min: 0, defaultValue: 350000 },
      { id: "nightly", label: "Average Nightly Rate ($)", type: "number", min: 0, defaultValue: 150 },
      { id: "occupancy", label: "Occupancy Rate (%)", type: "number", min: 0, max: 100, defaultValue: 65 },
      { id: "expenses", label: "Monthly Expenses ($)", type: "number", min: 0, defaultValue: 1200 }
    ],
    calculate: (inputs: any) => {
      const daysRented = Math.floor(365 * (inputs.occupancy / 100));
      const annualRevenue = daysRented * inputs.nightly;
      const annualExpenses = inputs.expenses * 12;
      const netIncome = annualRevenue - annualExpenses;
      const roi = (netIncome / inputs.price) * 100;

      return {
        summary: [
          { label: "Annual Revenue", value: annualRevenue },
          { label: "Net Operating Income", value: netIncome },
          { label: "Cash-on-Cash ROI (%)", value: `${roi.toFixed(2)}%`, isCurrency: false }
        ]
      };
    }
  },
  "house-flipping-calculator": {
    name: "House Flipping Profit Calculator",
    category: "Advanced Real Estate",
    icon: "🔨",
    inputs: [
      { id: "purchase", label: "Purchase Price ($)", type: "number", min: 0, defaultValue: 200000 },
      { id: "arv", label: "After Repair Value (ARV $)", type: "number", min: 0, defaultValue: 350000 },
      { id: "rehab", label: "Rehab Costs ($)", type: "number", min: 0, defaultValue: 50000 },
      { id: "holding", label: "Holding Costs/Fees ($)", type: "number", min: 0, defaultValue: 15000 }
    ],
    calculate: (inputs: any) => {
      const totalInvestment = inputs.purchase + inputs.rehab + inputs.holding;
      const netProfit = inputs.arv - totalInvestment;
      const roi = (netProfit / totalInvestment) * 100;

      return {
        summary: [
          { label: "Total Capital Needed", value: totalInvestment },
          { label: "Net Flipping Profit", value: netProfit },
          { label: "ROI (%)", value: `${roi.toFixed(2)}%`, isCurrency: false }
        ]
      };
    }
  },
  "heloc-calculator": {
    name: "HELOC Calculator",
    category: "Advanced Real Estate",
    icon: "🏦",
    inputs: [
      { id: "value", label: "Current Home Value ($)", type: "number", min: 0, defaultValue: 500000 },
      { id: "mortgage", label: "Remaining Mortgage Balance ($)", type: "number", min: 0, defaultValue: 250000 },
      { id: "ltv", label: "Max Loan-to-Value (LTV %)", type: "number", min: 0, max: 100, defaultValue: 80 }
    ],
    calculate: (inputs: any) => {
      const maxBorrowingPower = inputs.value * (inputs.ltv / 100);
      const availableHeloc = maxBorrowingPower - inputs.mortgage;

      return {
        summary: [
          { label: "Total Equity", value: inputs.value - inputs.mortgage },
          { label: "Max Borrowing Power", value: maxBorrowingPower },
          { label: "Available HELOC", value: availableHeloc > 0 ? availableHeloc : 0 }
        ]
      };
    }
  },

  // --- DEBT DESTRUCTION ---
  "credit-card-payoff": {
    name: "Credit Card Payoff Calculator",
    category: "Debt & Loans",
    icon: "💳",
    inputs: [
      { id: "balance", label: "Current Balance ($)", type: "number", min: 0, defaultValue: 5000 },
      { id: "rate", label: "Interest Rate (APR %)", type: "number", min: 0, max: 100, defaultValue: 18.9 },
      { id: "payment", label: "Monthly Payment ($)", type: "number", min: 0, defaultValue: 200 }
    ],
    calculate: (inputs: any) => {
      const monthlyRate = (inputs.rate / 100) / 12;
      let bal = inputs.balance;
      let totalInterest = 0;
      let months = 0;

      if (inputs.payment <= bal * monthlyRate) {
        return {
          summary: [
            { label: "Error", value: "Payment too low to cover interest", isCurrency: false },
            { label: "Total Interest", value: 0 },
            { label: "Months to Payoff", value: "Never", isCurrency: false }
          ]
        };
      }

      while (bal > 0 && months < 1200) {
        const interest = bal * monthlyRate;
        totalInterest += interest;
        bal = bal + interest - inputs.payment;
        months++;
      }

      return {
        summary: [
          { label: "Total Interest Paid", value: totalInterest },
          { label: "Total Cost", value: inputs.balance + totalInterest },
          { label: "Months to Payoff", value: `${months} Months`, isCurrency: false }
        ]
      };
    }
  },
  "auto-loan-refinance": {
    name: "Auto Loan Refinance Calculator",
    category: "Debt & Loans",
    icon: "🚗",
    inputs: [
      { id: "balance", label: "Current Loan Balance ($)", type: "number", min: 0, defaultValue: 20000 },
      { id: "oldRate", label: "Current Interest Rate (%)", type: "number", min: 0, max: 100, defaultValue: 8.5 },
      { id: "newRate", label: "New Refinance Rate (%)", type: "number", min: 0, max: 100, defaultValue: 4.5 },
      { id: "months", label: "Remaining Months", type: "number", min: 1, max: 84, defaultValue: 48 }
    ],
    calculate: (inputs: any) => {
      const oldMonthlyRate = (inputs.oldRate / 100) / 12;
      const newMonthlyRate = (inputs.newRate / 100) / 12;

      const oldPayment = (inputs.balance * oldMonthlyRate) / (1 - Math.pow(1 + oldMonthlyRate, -inputs.months));
      const newPayment = (inputs.balance * newMonthlyRate) / (1 - Math.pow(1 + newMonthlyRate, -inputs.months));

      const oldTotal = oldPayment * inputs.months;
      const newTotal = newPayment * inputs.months;
      const savings = oldTotal - newTotal;

      return {
        summary: [
          { label: "New Monthly Payment", value: newPayment },
          { label: "Monthly Savings", value: oldPayment - newPayment },
          { label: "Total Lifetime Savings", value: savings }
        ]
      };
    }
  },
  "student-loan-payoff": {
    name: "Student Loan Payoff Calculator",
    category: "Debt & Loans",
    icon: "🎓",
    inputs: [
      { id: "balance", label: "Loan Balance ($)", type: "number", min: 0, defaultValue: 40000 },
      { id: "rate", label: "Interest Rate (%)", type: "number", min: 0, max: 20, defaultValue: 5.8 },
      { id: "payment", label: "Monthly Payment ($)", type: "number", min: 0, defaultValue: 500 }
    ],
    calculate: (inputs: any) => {
      const monthlyRate = (inputs.rate / 100) / 12;
      let bal = inputs.balance;
      let totalInterest = 0;
      let months = 0;

      while (bal > 0 && months < 1200) {
        const interest = bal * monthlyRate;
        totalInterest += interest;
        bal = bal + interest - inputs.payment;
        months++;
      }

      return {
        summary: [
          { label: "Total Interest Paid", value: totalInterest },
          { label: "Total Cost", value: inputs.balance + totalInterest },
          { label: "Years to Payoff", value: `${(months / 12).toFixed(1)} Years`, isCurrency: false }
        ]
      };
    }
  },
  "snowball-vs-avalanche": {
    name: "Snowball vs Avalanche Calculator",
    category: "Debt & Loans",
    icon: "❄️",
    inputs: [
      { id: "debt1", label: "Debt 1 Balance ($)", type: "number", min: 0, defaultValue: 2000 },
      { id: "rate1", label: "Debt 1 Rate (%)", type: "number", min: 0, max: 100, defaultValue: 19 },
      { id: "debt2", label: "Debt 2 Balance ($)", type: "number", min: 0, defaultValue: 10000 },
      { id: "rate2", label: "Debt 2 Rate (%)", type: "number", min: 0, max: 100, defaultValue: 6 },
      { id: "extra", label: "Extra Monthly Payment ($)", type: "number", min: 0, defaultValue: 300 }
    ],
    calculate: (inputs: any) => {
      // Simplified visualization showing total debt and average rate
      const totalDebt = inputs.debt1 + inputs.debt2;
      const blendedRate = ((inputs.debt1 * inputs.rate1) + (inputs.debt2 * inputs.rate2)) / totalDebt;

      return {
        summary: [
          { label: "Total Debt", value: totalDebt },
          { label: "Blended Interest Rate (%)", value: `${blendedRate.toFixed(2)}%`, isCurrency: false },
          { label: "Avalanche Saves More Interest", value: "Yes", isCurrency: false }
        ]
      };
    }
  },

  // --- FIRE ---
  "fire-number": {
    name: "FIRE Number Calculator",
    category: "Retirement",
    icon: "🔥",
    inputs: [
      { id: "expenses", label: "Annual Expenses ($)", type: "number", min: 0, defaultValue: 60000 },
      { id: "withdrawal", label: "Safe Withdrawal Rate (%)", type: "number", min: 1, max: 10, defaultValue: 4 }
    ],
    calculate: (inputs: any) => {
      const fireNumber = inputs.expenses / (inputs.withdrawal / 100);
      return {
        summary: [
          { label: "Your FIRE Number", value: fireNumber },
          { label: "Monthly Income from FIRE", value: fireNumber * (inputs.withdrawal / 100) / 12 },
          { label: "Required Multiple", value: `${(100 / inputs.withdrawal).toFixed(1)}x`, isCurrency: false }
        ]
      };
    }
  },
  "coast-fire": {
    name: "Coast FIRE Calculator",
    category: "Retirement",
    icon: "⛵",
    inputs: [
      { id: "target", label: "Target Retirement Amount ($)", type: "number", min: 0, defaultValue: 1500000 },
      { id: "years", label: "Years until Retirement", type: "number", min: 1, max: 60, defaultValue: 30 },
      { id: "growth", label: "Expected Annual Return (%)", type: "number", min: 0, max: 20, defaultValue: 7 }
    ],
    calculate: (inputs: any) => {
      const rate = inputs.growth / 100;
      const coastNumber = inputs.target / Math.pow(1 + rate, inputs.years);
      return {
        summary: [
          { label: "Your Coast FIRE Number", value: coastNumber },
          { label: "Target Amount", value: inputs.target },
          { label: "Growth Multiplier", value: `${Math.pow(1 + rate, inputs.years).toFixed(1)}x`, isCurrency: false }
        ]
      };
    }
  },
  "rule-of-72": {
    name: "Rule of 72 Calculator",
    category: "Investing",
    icon: "📈",
    inputs: [
      { id: "rate", label: "Annual Interest Rate (%)", type: "number", min: 0.1, max: 100, defaultValue: 8 }
    ],
    calculate: (inputs: any) => {
      const yearsToDouble = 72 / inputs.rate;
      return {
        summary: [
          { label: "Years to Double Investment", value: `${yearsToDouble.toFixed(1)} Years`, isCurrency: false },
          { label: "Rate Required to Double in 10 Yrs", value: "7.2%", isCurrency: false },
          { label: "Rate Required to Double in 5 Yrs", value: "14.4%", isCurrency: false }
        ]
      };
    }
  },
  "drip-calculator": {
    name: "Dividend Reinvestment (DRIP) Calculator",
    category: "Investing",
    icon: "💧",
    inputs: [
      { id: "initial", label: "Initial Investment ($)", type: "number", min: 0, defaultValue: 10000 },
      { id: "yield", label: "Dividend Yield (%)", type: "number", min: 0, max: 50, defaultValue: 4 },
      { id: "years", label: "Years Invested", type: "number", min: 1, max: 50, defaultValue: 20 },
      { id: "growth", label: "Annual Stock Growth (%)", type: "number", min: 0, max: 50, defaultValue: 5 }
    ],
    calculate: (inputs: any) => {
      const totalRate = (inputs.yield / 100) + (inputs.growth / 100);
      const finalValue = inputs.initial * Math.pow(1 + totalRate, inputs.years);
      const noDripValue = inputs.initial * Math.pow(1 + (inputs.growth / 100), inputs.years);
      
      return {
        summary: [
          { label: "Final Value (with DRIP)", value: finalValue },
          { label: "Final Value (NO DRIP)", value: noDripValue },
          { label: "Extra Profit from DRIP", value: finalValue - noDripValue }
        ]
      };
    }
  },

  // --- BUSINESS & TAX ---
  "freelancer-hourly-rate": {
    name: "Freelancer Hourly Rate Calculator",
    category: "Business",
    icon: "💻",
    inputs: [
      { id: "target", label: "Target Annual Salary ($)", type: "number", min: 0, defaultValue: 100000 },
      { id: "expenses", label: "Annual Business Expenses ($)", type: "number", min: 0, defaultValue: 15000 },
      { id: "billable", label: "Billable Hours per Week", type: "number", min: 1, max: 80, defaultValue: 25 },
      { id: "weeksOff", label: "Weeks Off per Year", type: "number", min: 0, max: 52, defaultValue: 4 }
    ],
    calculate: (inputs: any) => {
      const targetRevenue = inputs.target + inputs.expenses;
      const totalWeeks = 52 - inputs.weeksOff;
      const totalHours = totalWeeks * inputs.billable;
      const hourlyRate = targetRevenue / totalHours;

      return {
        summary: [
          { label: "Required Hourly Rate", value: hourlyRate },
          { label: "Total Annual Revenue Needed", value: targetRevenue },
          { label: "Total Billable Hours/Year", value: `${totalHours} Hours`, isCurrency: false }
        ]
      };
    }
  },
  "ecommerce-margin": {
    name: "E-commerce Profit Margin Calculator",
    category: "Business",
    icon: "🛒",
    inputs: [
      { id: "price", label: "Selling Price ($)", type: "number", min: 0, defaultValue: 50 },
      { id: "cogs", label: "Cost of Goods Sold (COGS $)", type: "number", min: 0, defaultValue: 15 },
      { id: "shipping", label: "Shipping Cost ($)", type: "number", min: 0, defaultValue: 5 },
      { id: "marketing", label: "Marketing Cost per Sale ($)", type: "number", min: 0, defaultValue: 10 }
    ],
    calculate: (inputs: any) => {
      const totalCosts = inputs.cogs + inputs.shipping + inputs.marketing;
      const grossProfit = inputs.price - totalCosts;
      const margin = (grossProfit / inputs.price) * 100;

      return {
        summary: [
          { label: "Gross Profit per Unit", value: grossProfit },
          { label: "Profit Margin (%)", value: `${margin.toFixed(2)}%`, isCurrency: false },
          { label: "Total Costs", value: totalCosts }
        ]
      };
    }
  },
  "capital-gains-tax": {
    name: "Capital Gains Tax Estimator",
    category: "Income & Taxes",
    icon: "🏛️",
    inputs: [
      { id: "profit", label: "Net Profit from Sale ($)", type: "number", min: 0, defaultValue: 50000 },
      { id: "duration", label: "Held > 1 Year? (1=Yes, 0=No)", type: "number", min: 0, max: 1, defaultValue: 1 },
      { id: "income", label: "Other Annual Income ($)", type: "number", min: 0, defaultValue: 75000 }
    ],
    calculate: (inputs: any) => {
      // Simplified US tax logic
      let taxRate = 0;
      if (inputs.duration === 1) {
        if (inputs.income < 44625) taxRate = 0;
        else if (inputs.income < 492300) taxRate = 0.15;
        else taxRate = 0.20;
      } else {
        // Short term matches income tax roughly
        taxRate = 0.24; 
      }

      const estimatedTax = inputs.profit * taxRate;

      return {
        summary: [
          { label: "Estimated Tax Owed", value: estimatedTax },
          { label: "Net After-Tax Profit", value: inputs.profit - estimatedTax },
          { label: "Effective Tax Rate (%)", value: `${(taxRate * 100).toFixed(1)}%`, isCurrency: false }
        ]
      };
    }
  },
  "salary-to-hourly": {
    name: "Salary to Hourly Converter",
    category: "Business",
    icon: "⏱️",
    inputs: [
      { id: "salary", label: "Annual Salary ($)", type: "number", min: 0, defaultValue: 75000 },
      { id: "hours", label: "Hours per Week", type: "number", min: 1, max: 100, defaultValue: 40 }
    ],
    calculate: (inputs: any) => {
      const weekly = inputs.salary / 52;
      const hourly = weekly / inputs.hours;
      const daily = hourly * (inputs.hours / 5);

      return {
        summary: [
          { label: "Hourly Wage", value: hourly },
          { label: "Daily Rate", value: daily },
          { label: "Weekly Pay", value: weekly }
        ]
      };
    }
  }
};
