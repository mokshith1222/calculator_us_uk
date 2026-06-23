// Automatically generated configs
import { megaCalculatorConfigs } from './megaCalculatorConfigs';

export const calculatorConfigs: Record<string, any> = {
  ...megaCalculatorConfigs,
  "mortgage-calculator": {
    "name": "Mortgage Calculator",
    "category": "Mortgage & Home",
    "engine": "loan",
    "inputs": [
      {
        "id": "principal",
        "label": "Loan Amount ($)",
        "default": 250000,
        "type": "number"
      },
      {
        "id": "rate",
        "label": "Interest Rate (%)",
        "default": 6.5,
        "type": "number"
      },
      {
        "id": "years",
        "label": "Loan Term (Years)",
        "default": 30,
        "type": "number"
      }
    ]
  },
  "mortgage-overpayment-calculator": {
    "name": "Mortgage Overpayment Calculator",
    "category": "Mortgage & Home",
    "engine": "loan",
    "inputs": [
      {
        "id": "principal",
        "label": "Loan Amount ($)",
        "default": 250000,
        "type": "number"
      },
      {
        "id": "rate",
        "label": "Interest Rate (%)",
        "default": 6.5,
        "type": "number"
      },
      {
        "id": "years",
        "label": "Loan Term (Years)",
        "default": 30,
        "type": "number"
      }
    ]
  },
  "refinance-calculator": {
    "name": "Refinance Calculator",
    "category": "Mortgage & Home",
    "engine": "loan",
    "inputs": [
      {
        "id": "principal",
        "label": "Loan Amount ($)",
        "default": 250000,
        "type": "number"
      },
      {
        "id": "rate",
        "label": "Interest Rate (%)",
        "default": 6.5,
        "type": "number"
      },
      {
        "id": "years",
        "label": "Loan Term (Years)",
        "default": 30,
        "type": "number"
      }
    ]
  },
  "affordability-calculator": {
    "name": "Affordability Calculator",
    "category": "Mortgage & Home",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "rent-vs-buy-calculator": {
    "name": "Rent vs Buy Calculator",
    "category": "Mortgage & Home",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "down-payment-calculator": {
    "name": "Down Payment Calculator",
    "category": "Mortgage & Home",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "home-equity-calculator": {
    "name": "Home Equity Calculator",
    "category": "Mortgage & Home",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "closing-cost-calculator": {
    "name": "Closing Cost Calculator",
    "category": "Mortgage & Home",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "property-tax-calculator": {
    "name": "Property Tax Calculator",
    "category": "Mortgage & Home",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "amortization-calculator": {
    "name": "Amortization Calculator",
    "category": "Mortgage & Home",
    "engine": "loan",
    "inputs": [
      {
        "id": "principal",
        "label": "Loan Amount ($)",
        "default": 250000,
        "type": "number"
      },
      {
        "id": "rate",
        "label": "Interest Rate (%)",
        "default": 6.5,
        "type": "number"
      },
      {
        "id": "years",
        "label": "Loan Term (Years)",
        "default": 30,
        "type": "number"
      }
    ]
  },
  "loan-calculator": {
    "name": "Loan Calculator",
    "category": "Debt & Loans",
    "engine": "loan",
    "inputs": [
      {
        "id": "principal",
        "label": "Loan Amount ($)",
        "default": 250000,
        "type": "number"
      },
      {
        "id": "rate",
        "label": "Interest Rate (%)",
        "default": 6.5,
        "type": "number"
      },
      {
        "id": "years",
        "label": "Loan Term (Years)",
        "default": 30,
        "type": "number"
      }
    ]
  },
  "personal-loan-calculator": {
    "name": "Personal Loan Calculator",
    "category": "Debt & Loans",
    "engine": "loan",
    "inputs": [
      {
        "id": "principal",
        "label": "Loan Amount ($)",
        "default": 250000,
        "type": "number"
      },
      {
        "id": "rate",
        "label": "Interest Rate (%)",
        "default": 6.5,
        "type": "number"
      },
      {
        "id": "years",
        "label": "Loan Term (Years)",
        "default": 30,
        "type": "number"
      }
    ]
  },
  "car-loan-calculator": {
    "name": "Car Loan Calculator",
    "category": "Debt & Loans",
    "engine": "loan",
    "inputs": [
      {
        "id": "principal",
        "label": "Loan Amount ($)",
        "default": 250000,
        "type": "number"
      },
      {
        "id": "rate",
        "label": "Interest Rate (%)",
        "default": 6.5,
        "type": "number"
      },
      {
        "id": "years",
        "label": "Loan Term (Years)",
        "default": 30,
        "type": "number"
      }
    ]
  },
  "debt-payoff-calculator": {
    "name": "Debt Payoff Calculator",
    "category": "Debt & Loans",
    "engine": "loan",
    "inputs": [
      {
        "id": "principal",
        "label": "Loan Amount ($)",
        "default": 250000,
        "type": "number"
      },
      {
        "id": "rate",
        "label": "Interest Rate (%)",
        "default": 6.5,
        "type": "number"
      },
      {
        "id": "years",
        "label": "Loan Term (Years)",
        "default": 30,
        "type": "number"
      }
    ]
  },
  "debt-snowball-calculator": {
    "name": "Debt Snowball Calculator",
    "category": "Debt & Loans",
    "engine": "loan",
    "inputs": [
      {
        "id": "principal",
        "label": "Loan Amount ($)",
        "default": 250000,
        "type": "number"
      },
      {
        "id": "rate",
        "label": "Interest Rate (%)",
        "default": 6.5,
        "type": "number"
      },
      {
        "id": "years",
        "label": "Loan Term (Years)",
        "default": 30,
        "type": "number"
      }
    ]
  },
  "debt-avalanche-calculator": {
    "name": "Debt Avalanche Calculator",
    "category": "Debt & Loans",
    "engine": "loan",
    "inputs": [
      {
        "id": "principal",
        "label": "Loan Amount ($)",
        "default": 250000,
        "type": "number"
      },
      {
        "id": "rate",
        "label": "Interest Rate (%)",
        "default": 6.5,
        "type": "number"
      },
      {
        "id": "years",
        "label": "Loan Term (Years)",
        "default": 30,
        "type": "number"
      }
    ]
  },
  "credit-card-payoff-calculator": {
    "name": "Credit Card Payoff Calculator",
    "category": "Debt & Loans",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "credit-utilization-calculator": {
    "name": "Credit Utilization Calculator",
    "category": "Debt & Loans",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "student-loan-calculator": {
    "name": "Student Loan Calculator",
    "category": "Debt & Loans",
    "engine": "loan",
    "inputs": [
      {
        "id": "principal",
        "label": "Loan Amount ($)",
        "default": 250000,
        "type": "number"
      },
      {
        "id": "rate",
        "label": "Interest Rate (%)",
        "default": 6.5,
        "type": "number"
      },
      {
        "id": "years",
        "label": "Loan Term (Years)",
        "default": 30,
        "type": "number"
      }
    ]
  },
  "debt-to-income-calculator": {
    "name": "Debt-to-Income Calculator",
    "category": "Debt & Loans",
    "engine": "loan",
    "inputs": [
      {
        "id": "principal",
        "label": "Loan Amount ($)",
        "default": 250000,
        "type": "number"
      },
      {
        "id": "rate",
        "label": "Interest Rate (%)",
        "default": 6.5,
        "type": "number"
      },
      {
        "id": "years",
        "label": "Loan Term (Years)",
        "default": 30,
        "type": "number"
      }
    ]
  },
  "compound-interest-calculator": {
    "name": "Compound Interest Calculator",
    "category": "Investing",
    "engine": "compound",
    "inputs": [
      {
        "id": "principal",
        "label": "Initial Investment ($)",
        "default": 10000,
        "type": "number"
      },
      {
        "id": "monthly",
        "label": "Monthly Contribution ($)",
        "default": 500,
        "type": "number"
      },
      {
        "id": "rate",
        "label": "Annual Return (%)",
        "default": 7,
        "type": "number"
      },
      {
        "id": "years",
        "label": "Years to Grow",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "investment-return-calculator": {
    "name": "Investment Return Calculator",
    "category": "Investing",
    "engine": "compound",
    "inputs": [
      {
        "id": "principal",
        "label": "Initial Investment ($)",
        "default": 10000,
        "type": "number"
      },
      {
        "id": "monthly",
        "label": "Monthly Contribution ($)",
        "default": 500,
        "type": "number"
      },
      {
        "id": "rate",
        "label": "Annual Return (%)",
        "default": 7,
        "type": "number"
      },
      {
        "id": "years",
        "label": "Years to Grow",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "sip-calculator": {
    "name": "SIP Calculator",
    "category": "Investing",
    "engine": "compound",
    "inputs": [
      {
        "id": "principal",
        "label": "Initial Investment ($)",
        "default": 10000,
        "type": "number"
      },
      {
        "id": "monthly",
        "label": "Monthly Contribution ($)",
        "default": 500,
        "type": "number"
      },
      {
        "id": "rate",
        "label": "Annual Return (%)",
        "default": 7,
        "type": "number"
      },
      {
        "id": "years",
        "label": "Years to Grow",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "lump-sum-calculator": {
    "name": "Lump Sum Calculator",
    "category": "Investing",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "dividend-calculator": {
    "name": "Dividend Calculator",
    "category": "Investing",
    "engine": "compound",
    "inputs": [
      {
        "id": "principal",
        "label": "Initial Investment ($)",
        "default": 10000,
        "type": "number"
      },
      {
        "id": "monthly",
        "label": "Monthly Contribution ($)",
        "default": 500,
        "type": "number"
      },
      {
        "id": "rate",
        "label": "Annual Return (%)",
        "default": 7,
        "type": "number"
      },
      {
        "id": "years",
        "label": "Years to Grow",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "fire-calculator": {
    "name": "FIRE Calculator",
    "category": "Investing",
    "engine": "compound",
    "inputs": [
      {
        "id": "principal",
        "label": "Initial Investment ($)",
        "default": 10000,
        "type": "number"
      },
      {
        "id": "monthly",
        "label": "Monthly Contribution ($)",
        "default": 500,
        "type": "number"
      },
      {
        "id": "rate",
        "label": "Annual Return (%)",
        "default": 7,
        "type": "number"
      },
      {
        "id": "years",
        "label": "Years to Grow",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "net-worth-calculator": {
    "name": "Net Worth Calculator",
    "category": "Investing",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "portfolio-growth-calculator": {
    "name": "Portfolio Growth Calculator",
    "category": "Investing",
    "engine": "compound",
    "inputs": [
      {
        "id": "principal",
        "label": "Initial Investment ($)",
        "default": 10000,
        "type": "number"
      },
      {
        "id": "monthly",
        "label": "Monthly Contribution ($)",
        "default": 500,
        "type": "number"
      },
      {
        "id": "rate",
        "label": "Annual Return (%)",
        "default": 7,
        "type": "number"
      },
      {
        "id": "years",
        "label": "Years to Grow",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "risk-vs-return-calculator": {
    "name": "Risk vs Return Calculator",
    "category": "Investing",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "dollar-cost-averaging-calculator": {
    "name": "Dollar Cost Averaging Calculator",
    "category": "Investing",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "retirement-calculator": {
    "name": "Retirement Calculator",
    "category": "Retirement",
    "engine": "compound",
    "inputs": [
      {
        "id": "principal",
        "label": "Initial Investment ($)",
        "default": 10000,
        "type": "number"
      },
      {
        "id": "monthly",
        "label": "Monthly Contribution ($)",
        "default": 500,
        "type": "number"
      },
      {
        "id": "rate",
        "label": "Annual Return (%)",
        "default": 7,
        "type": "number"
      },
      {
        "id": "years",
        "label": "Years to Grow",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "401k-calculator": {
    "name": "401k Calculator",
    "category": "Retirement",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "roth-ira-calculator": {
    "name": "Roth IRA Calculator",
    "category": "Retirement",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "traditional-ira-calculator": {
    "name": "Traditional IRA Calculator",
    "category": "Retirement",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "pension-calculator": {
    "name": "Pension Calculator",
    "category": "Retirement",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "social-security-calculator": {
    "name": "Social Security Calculator",
    "category": "Retirement",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "retirement-income-calculator": {
    "name": "Retirement Income Calculator",
    "category": "Retirement",
    "engine": "compound",
    "inputs": [
      {
        "id": "principal",
        "label": "Initial Investment ($)",
        "default": 10000,
        "type": "number"
      },
      {
        "id": "monthly",
        "label": "Monthly Contribution ($)",
        "default": 500,
        "type": "number"
      },
      {
        "id": "rate",
        "label": "Annual Return (%)",
        "default": 7,
        "type": "number"
      },
      {
        "id": "years",
        "label": "Years to Grow",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "early-retirement-calculator": {
    "name": "Early Retirement Calculator",
    "category": "Retirement",
    "engine": "compound",
    "inputs": [
      {
        "id": "principal",
        "label": "Initial Investment ($)",
        "default": 10000,
        "type": "number"
      },
      {
        "id": "monthly",
        "label": "Monthly Contribution ($)",
        "default": 500,
        "type": "number"
      },
      {
        "id": "rate",
        "label": "Annual Return (%)",
        "default": 7,
        "type": "number"
      },
      {
        "id": "years",
        "label": "Years to Grow",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "required-savings-calculator": {
    "name": "Required Savings Calculator",
    "category": "Retirement",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "retirement-withdrawal-calculator": {
    "name": "Retirement Withdrawal Calculator",
    "category": "Retirement",
    "engine": "compound",
    "inputs": [
      {
        "id": "principal",
        "label": "Initial Investment ($)",
        "default": 10000,
        "type": "number"
      },
      {
        "id": "monthly",
        "label": "Monthly Contribution ($)",
        "default": 500,
        "type": "number"
      },
      {
        "id": "rate",
        "label": "Annual Return (%)",
        "default": 7,
        "type": "number"
      },
      {
        "id": "years",
        "label": "Years to Grow",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "salary-calculator": {
    "name": "Salary Calculator",
    "category": "Income & Taxes",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "hourly-to-salary-calculator": {
    "name": "Hourly to Salary Calculator",
    "category": "Income & Taxes",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "overtime-calculator": {
    "name": "Overtime Calculator",
    "category": "Income & Taxes",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "take-home-pay-calculator": {
    "name": "Take Home Pay Calculator",
    "category": "Income & Taxes",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "us-federal-tax-calculator": {
    "name": "US Federal Tax Calculator",
    "category": "Income & Taxes",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "uk-income-tax-calculator": {
    "name": "UK Income Tax Calculator",
    "category": "Income & Taxes",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "capital-gains-tax-calculator": {
    "name": "Capital Gains Tax Calculator",
    "category": "Income & Taxes",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "self-employment-tax-calculator": {
    "name": "Self Employment Tax Calculator",
    "category": "Income & Taxes",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "bonus-tax-calculator": {
    "name": "Bonus Tax Calculator",
    "category": "Income & Taxes",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "pay-raise-calculator": {
    "name": "Pay Raise Calculator",
    "category": "Income & Taxes",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "emergency-fund-calculator": {
    "name": "Emergency Fund Calculator",
    "category": "Bonus Tools",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "inflation-calculator": {
    "name": "Inflation Calculator",
    "category": "Bonus Tools",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "savings-goal-calculator": {
    "name": "Savings Goal Calculator",
    "category": "Bonus Tools",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "budget-planner": {
    "name": "Budget Planner",
    "category": "Bonus Tools",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "expense-tracker": {
    "name": "Expense Tracker",
    "category": "Bonus Tools",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "cash-flow-calculator": {
    "name": "Cash Flow Calculator",
    "category": "Bonus Tools",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "wealth-growth-calculator": {
    "name": "Wealth Growth Calculator",
    "category": "Bonus Tools",
    "engine": "compound",
    "inputs": [
      {
        "id": "principal",
        "label": "Initial Investment ($)",
        "default": 10000,
        "type": "number"
      },
      {
        "id": "monthly",
        "label": "Monthly Contribution ($)",
        "default": 500,
        "type": "number"
      },
      {
        "id": "rate",
        "label": "Annual Return (%)",
        "default": 7,
        "type": "number"
      },
      {
        "id": "years",
        "label": "Years to Grow",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "financial-independence-calculator": {
    "name": "Financial Independence Calculator",
    "category": "Bonus Tools",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "passive-income-calculator": {
    "name": "Passive Income Calculator",
    "category": "Bonus Tools",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  },
  "millionaire-calculator": {
    "name": "Millionaire Calculator",
    "category": "Bonus Tools",
    "engine": "arithmetic",
    "inputs": [
      {
        "id": "value1",
        "label": "Primary Amount ($)",
        "default": 50000,
        "type": "number"
      },
      {
        "id": "value2",
        "label": "Secondary Amount (%)",
        "default": 20,
        "type": "number"
      }
    ]
  }
};
