export interface NavDropdownSubItem {
  title: string
  href?: string
}

export interface NavDropdownItem {
  title: string
  href?: string
  subItems?: NavDropdownSubItem[]
}

export interface NavItem {
  title: string
  href?: string
  dropdown?: NavDropdownItem[]
}

export interface NavItems {
  [key: string]: NavItem
}

export const navItems: NavItems = {
  creditCards: {
    title: "Credit cards",
    href: "/credit-cards",
    dropdown: [
      {
        title: "Best credit cards",
        href: "/credit-cards/best",
        subItems: [
          { title: "Best credit cards", href: "/credit-cards/best" },
          { title: "Best credit card bonus offers", href: "/credit-cards/best-bonus-offers" },
          { title: "Best balance transfer credit cards", href: "/credit-cards/best-balance-transfer" },
          { title: "Best travel credit cards", href: "/credit-cards/best-travel" },
          { title: "Best cash back credit cards", href: "/credit-cards/best-cash-back" },
          { title: "Best 0% APR credit cards", href: "/credit-cards/best-zero-apr" },
          { title: "Best rewards credit cards", href: "/credit-cards/best-rewards" },
          { title: "Best airline credit cards", href: "/credit-cards/best-airline" },
          { title: "Best college student credit cards", href: "/credit-cards/best-student" },
          { title: "Best credit cards for groceries", href: "/credit-cards/best-groceries" },
        ],
      },
      {
        title: "Compare credit cards",
        href: "/credit-cards/compare",
      },
      {
        title: "Get a card recommendation",
        href: "/credit-cards/recommendation",
        subItems: [
          { title: "Travel rewards and perks", href: "/credit-cards/recommendation/travel-rewards" },
          { title: "Earn cash back", href: "/credit-cards/recommendation/cash-back" },
          { title: "Pay down debt", href: "/credit-cards/recommendation/debt-payoff" },
          { title: "Make a big purchase", href: "/credit-cards/recommendation/big-purchase" },
          { title: "Get your approval odds", href: "/credit-cards/recommendation/approval-odds" },
          { title: "Card recommendation quiz", href: "/credit-cards/recommendation/quiz" },
        ],
      },
      {
        title: "Credit card reviews",
        href: "/credit-cards/reviews",
      },
      {
        title: "Credit card calculators",
        href: "/credit-cards/calculators",
        subItems: [
          { title: "Balance transfer savings calculator", href: "/credit-cards/calculators/balance-transfer" },
          { title: "Credit card interest calculator", href: "/credit-cards/calculators/interest" },
        ],
      },
      {
        title: "Guides and resources",
        href: "/credit-cards/guides",
        subItems: [
          { title: "Get your free credit score", href: "/credit-cards/guides/free-credit-score" },
          { title: "Credit card basics", href: "/credit-cards/guides/basics" },
          { title: "Applying for a credit card", href: "/credit-cards/guides/applying" },
          { title: "Choosing a credit card", href: "/credit-cards/guides/choosing" },
          { title: "Managing credit card debt", href: "/credit-cards/guides/debt-management" },
          { title: "Credit card resources", href: "/credit-cards/guides/resources" },
        ],
      },
      {
        title: "Explore more credit card resources",
        href: "/credit-cards/resources",
      },
    ],
  },
  banking: {
    title: "Banking",
    href: "/banking",
    dropdown: [
      {
        title: "Savings accounts",
        href: "/banking/savings",
        subItems: [
          { title: "Best high-yield savings accounts", href: "/banking/savings/best-high-yield" },
          { title: "Best savings accounts", href: "/banking/savings/best" },
          { title: "Savings account alternatives", href: "/banking/savings/alternatives" },
          { title: "Savings calculator", href: "/banking/savings/calculator" },
          { title: "Explore more savings accounts", href: "/banking/savings/explore" },
        ],
      },
      {
        title: "CDs",
        href: "/banking/cds",
        subItems: [
          { title: "Best CD rates", href: "/banking/cds/best-rates" },
          { title: "Best 3-month CD rates", href: "/banking/cds/best-3-month" },
          { title: "Best 6-month CD rates", href: "/banking/cds/best-6-month" },
          { title: "Best 1-year CD rates", href: "/banking/cds/best-1-year" },
          { title: "Best 3-year CD rates", href: "/banking/cds/best-3-year" },
          { title: "Best 5-year CD rates", href: "/banking/cds/best-5-year" },
          { title: "CD calculator", href: "/banking/cds/calculator" },
          { title: "Explore more CDs", href: "/banking/cds/explore" },
        ],
      },
      {
        title: "Checking accounts",
        href: "/banking/checking",
        subItems: [
          { title: "Best checking accounts", href: "/banking/checking/best" },
          { title: "Best free checking accounts", href: "/banking/checking/best-free" },
          { title: "Best online checking accounts", href: "/banking/checking/best-online" },
          { title: "Checking account alternatives", href: "/banking/checking/alternatives" },
          { title: "Explore more checking accounts", href: "/banking/checking/explore" },
        ],
      },
      {
        title: "NerdWallet's banking picks",
        href: "/banking/picks",
        subItems: [
          { title: "Best bank bonuses and promotions", href: "/banking/picks/bonuses" },
          { title: "Best online banks", href: "/banking/picks/online-banks" },
          { title: "Best money market accounts", href: "/banking/picks/money-market" },
          { title: "Best credit unions", href: "/banking/picks/credit-unions" },
        ],
      },
      {
        title: "Bank reviews",
        href: "/banking/reviews",
      },
      {
        title: "Banking calculators",
        href: "/banking/calculators",
        subItems: [
          { title: "Compound interest calculator", href: "/banking/calculators/compound-interest" },
          { title: "Emergency fund calculator", href: "/banking/calculators/emergency-fund" },
          { title: "Explore more banking resources", href: "/banking/calculators/explore" },
        ],
      },
    ],
  },
  home: {
    title: "Home",
    href: "/home",
    dropdown: [
      {
        title: "Mortgage rates",
        href: "/home/mortgage-rates",
        subItems: [
          { title: "Today's mortgage rates", href: "/home/mortgage-rates/today" },
          { title: "30 year mortgage rates", href: "/home/mortgage-rates/30-year" },
          { title: "5-year ARM rates", href: "/home/mortgage-rates/5-year-arm" },
          { title: "3-year ARM rates", href: "/home/mortgage-rates/3-year-arm" },
          { title: "FHA mortgage rates", href: "/home/mortgage-rates/fha" },
          { title: "VA mortgage rates", href: "/home/mortgage-rates/va" },
        ],
      },
      {
        title: "Best mortgage lenders",
        href: "/home/mortgage-lenders",
        subItems: [
          { title: "Best mortgage lenders", href: "/home/mortgage-lenders/best" },
          { title: "Best lenders for FHA loans", href: "/home/mortgage-lenders/best-fha" },
          { title: "Best lenders for low- and no-down-payment", href: "/home/mortgage-lenders/low-down-payment" },
          { title: "Best VA mortgage lenders", href: "/home/mortgage-lenders/best-va" },
        ],
      },
      {
        title: "Refinance and HELOC",
        href: "/home/refinance",
        subItems: [
          { title: "Today's refinance rates", href: "/home/refinance/rates-today" },
          { title: "Best refinance lenders", href: "/home/refinance/best-lenders" },
          { title: "30-year fixed refinance rates", href: "/home/refinance/30-year-fixed" },
          { title: "15-year fixed refinance rates", href: "/home/refinance/15-year-fixed" },
          { title: "Best cash-out refinance lenders", href: "/home/refinance/cash-out" },
          { title: "Best HELOC Lenders", href: "/home/refinance/heloc" },
          { title: "Explore more refinance and home equity", href: "/home/refinance/explore" },
        ],
      },
      {
        title: "Buying a home",
        href: "/home/buying",
        subItems: [
          { title: "Get pre-approved for a mortgage", href: "/home/buying/pre-approval" },
          { title: "Home affordability", href: "/home/buying/affordability" },
          { title: "First-time homebuyers guide", href: "/home/buying/first-time-guide" },
          { title: "Down payment", href: "/home/buying/down-payment" },
          { title: "How much can I borrow mortgage calculator", href: "/home/buying/borrow-calculator" },
          { title: "Inspections and appraisals", href: "/home/buying/inspections" },
          { title: "Mortgage lender reviews", href: "/home/buying/lender-reviews" },
          { title: "Explore more home buying resources", href: "/home/buying/explore" },
        ],
      },
      {
        title: "Homeownership",
        href: "/home/ownership",
        subItems: [
          { title: "Managing a mortgage", href: "/home/ownership/managing-mortgage" },
          { title: "Refinancing and equity", href: "/home/ownership/refinancing-equity" },
          { title: "Home improvement", href: "/home/ownership/improvement" },
          { title: "Home value", href: "/home/ownership/value" },
          { title: "Home insurance", href: "/home/ownership/insurance" },
          { title: "Explore more homeownership resources", href: "/home/ownership/explore" },
        ],
      },
      {
        title: "Selling a home",
        href: "/home/selling",
      },
      {
        title: "Home calculators",
        href: "/home/calculators",
        subItems: [
          { title: "Mortgage calculator", href: "/home/calculators/mortgage" },
          { title: "Down payment calculator", href: "/home/calculators/down-payment" },
          { title: "How much house can I afford calculator", href: "/home/calculators/affordability" },
          { title: "Closing costs calculator", href: "/home/calculators/closing-costs" },
          { title: "Cost of living calculator", href: "/home/calculators/cost-of-living" },
          { title: "Mortgage amortization calculator", href: "/home/calculators/amortization" },
          { title: "Refinance calculator", href: "/home/calculators/refinance" },
          { title: "Rent vs buy calculator", href: "/home/calculators/rent-vs-buy" },
        ],
      },
      {
        title: "First-time homebuyer's guide",
        href: "/home/first-time-guide",
      },
      {
        title: "Explore more home resources",
        href: "/home/explore",
      },
    ],
  },
  loans: {
    title: "Loans",
    href: "/loans",
    dropdown: [
      {
        title: "Personal loans",
        href: "/loans/personal",
        subItems: [
          { title: "Pre-qualify for a personal loan", href: "/loans/personal/pre-qualify" },
          { title: "Compare top lenders", href: "/loans/personal/compare-lenders" },
          { title: "Personal loan reviews", href: "/loans/personal/reviews" },
          { title: "Personal loan calculator", href: "/loans/personal/calculator" },
          { title: "How to qualify", href: "/loans/personal/how-to-qualify" },
          { title: "How to consolidate credit card debt", href: "/loans/personal/debt-consolidation" },
          { title: "Average personal loan interest rates", href: "/loans/personal/interest-rates" },
          { title: "Explore more personal loan resources", href: "/loans/personal/explore" },
        ],
      },
      {
        title: "Student loans",
        href: "/loans/student",
        subItems: [
          { title: "Paying for college", href: "/loans/student/paying-for-college" },
          { title: "FAFSA and federal student aid", href: "/loans/student/fafsa" },
          { title: "Taking out student loans", href: "/loans/student/taking-out" },
          { title: "Paying off student loans", href: "/loans/student/paying-off" },
          { title: "Student loan refinance", href: "/loans/student/refinance" },
          { title: "Student loan interest rates", href: "/loans/student/interest-rates" },
          { title: "Student loan calculator", href: "/loans/student/calculator" },
          { title: "Explore more student loan resources", href: "/loans/student/explore" },
        ],
      },
      {
        title: "Auto loans",
        href: "/loans/auto",
        subItems: [
          { title: "Best auto loans for good and bad credit", href: "/loans/auto/best" },
          { title: "Best auto loans refinance loans", href: "/loans/auto/refinance" },
          { title: "Best lease buyout loans", href: "/loans/auto/lease-buyout" },
          { title: "Explore more auto loan resources", href: "/loans/auto/explore" },
        ],
      },
      {
        title: "Explore more loan resources",
        href: "/loans/explore",
      },
    ],
  },
  insurance: {
    title: "Insurance",
    href: "/insurance",
    dropdown: [
      {
        title: "Auto insurance",
        href: "/insurance/auto",
        subItems: [
          { title: "Compare car insurance rates", href: "/insurance/auto/compare-rates" },
          { title: "Best car insurance companies", href: "/insurance/auto/best-companies" },
          { title: "Cheapest car insurance companies", href: "/insurance/auto/cheapest" },
          { title: "Car insurance reviews", href: "/insurance/auto/reviews" },
          { title: "Auto insurance calculator", href: "/insurance/auto/calculator" },
          { title: "Explore more auto insurance resources", href: "/insurance/auto/explore" },
        ],
      },
      {
        title: "Life insurance",
        href: "/insurance/life",
        subItems: [
          { title: "Compare life insurance", href: "/insurance/life/compare" },
          { title: "Best life insurance companies", href: "/insurance/life/best-companies" },
          { title: "Life insurance reviews", href: "/insurance/life/reviews" },
          { title: "Life insurance quotes", href: "/insurance/life/quotes" },
          { title: "Life insurance calculator", href: "/insurance/life/calculator" },
          { title: "Explore more life insurance resources", href: "/insurance/life/explore" },
        ],
      },
      {
        title: "Home insurance",
        href: "/insurance/home",
        subItems: [
          { title: "Compare home insurance rates", href: "/insurance/home/compare-rates" },
          { title: "Best home insurance companies", href: "/insurance/home/best-companies" },
          { title: "Home insurance reviews", href: "/insurance/home/reviews" },
          { title: "Home insurance calculator", href: "/insurance/home/calculator" },
          { title: "Home insurance 101", href: "/insurance/home/basics" },
          { title: "Explore more home insurance resources", href: "/insurance/home/explore" },
        ],
      },
      {
        title: "Pet insurance",
        href: "/insurance/pet",
        subItems: [
          { title: "Best pet insurance", href: "/insurance/pet/best" },
          { title: "Cheapest pet insurance", href: "/insurance/pet/cheapest" },
          { title: "What does pet insurance cover", href: "/insurance/pet/coverage" },
          { title: "How much does pet insurance cost", href: "/insurance/pet/cost" },
          { title: "Explore more pet insurance resources", href: "/insurance/pet/explore" },
        ],
      },
      {
        title: "Medicare",
        href: "/insurance/medicare",
        subItems: [
          { title: "Medicare 101", href: "/insurance/medicare/basics" },
          { title: "Medicare eligibility", href: "/insurance/medicare/eligibility" },
          { title: "How to sign up for Medicare", href: "/insurance/medicare/signup" },
          { title: "Medicare costs", href: "/insurance/medicare/costs" },
          { title: "What's covered under Medicare", href: "/insurance/medicare/coverage" },
          { title: "Explore more Medicare resources", href: "/insurance/medicare/explore" },
        ],
      },
      {
        title: "Renters insurance",
        href: "/insurance/renters",
        subItems: [
          { title: "Best renters insurance", href: "/insurance/renters/best" },
          { title: "Cheapest renters insurance", href: "/insurance/renters/cheapest" },
          { title: "Explore more renters insurance resources", href: "/insurance/renters/explore" },
        ],
      },
      {
        title: "Explore more insurance resources",
        href: "/insurance/explore",
      },
    ],
  },
  personalFinance: {
    title: "Personal finance",
    href: "/personal-finance",
    dropdown: [
      {
        title: "Tracking credit",
        href: "/personal-finance/credit",
        subItems: [
          { title: "Get your free credit score", href: "/personal-finance/credit/free-score" },
          { title: "Your credit report", href: "/personal-finance/credit/report" },
          { title: "Understanding your credit score", href: "/personal-finance/credit/understanding-score" },
          { title: "Using your credit", href: "/personal-finance/credit/using" },
          { title: "Improving your credit", href: "/personal-finance/credit/improving" },
          { title: "Protecting your credit", href: "/personal-finance/credit/protecting" },
        ],
      },
      {
        title: "Managing money",
        href: "/personal-finance/money",
        subItems: [
          { title: "Saving money", href: "/personal-finance/money/saving" },
          { title: "Handling bills and expenses", href: "/personal-finance/money/bills-expenses" },
          { title: "Shopping", href: "/personal-finance/money/shopping" },
          { title: "Financial health", href: "/personal-finance/money/financial-health" },
          { title: "Savings goal calculator", href: "/personal-finance/money/savings-calculator" },
          { title: "Net worth calculator", href: "/personal-finance/money/net-worth-calculator" },
          { title: "Explore more money management", href: "/personal-finance/money/explore" },
        ],
      },
      {
        title: "Making money",
        href: "/personal-finance/making-money",
        subItems: [
          { title: "Gig work", href: "/personal-finance/making-money/gig-work" },
          { title: "Making money online", href: "/personal-finance/making-money/online" },
          { title: "Explore more money making resources", href: "/personal-finance/making-money/explore" },
        ],
      },
      {
        title: "Managing debt",
        href: "/personal-finance/debt",
        subItems: [
          { title: "Paying debt", href: "/personal-finance/debt/paying" },
          { title: "Dealing with debt collection", href: "/personal-finance/debt/collection" },
          { title: "Debt relief", href: "/personal-finance/debt/relief" },
          { title: "Explore more debt management resources", href: "/personal-finance/debt/explore" },
        ],
      },
      {
        title: "Travel",
        href: "/personal-finance/travel",
        subItems: [
          { title: "Best travel credit cards", href: "/personal-finance/travel/credit-cards" },
          { title: "Travel insurance", href: "/personal-finance/travel/insurance" },
          { title: "Explore more travel resources", href: "/personal-finance/travel/explore" },
        ],
      },
      {
        title: "Explore more resources",
        href: "/personal-finance/explore",
      },
    ],
  },
  investing: {
    title: "Investing",
    href: "/investing",
    dropdown: [
      {
        title: "Best investment accounts",
        href: "/investing/accounts",
        subItems: [
          { title: "Best brokerage accounts", href: "/investing/accounts/brokerage" },
          { title: "Best robo-advisors", href: "/investing/accounts/robo-advisors" },
          { title: "Best trading platforms", href: "/investing/accounts/trading-platforms" },
          { title: "Best online brokers for beginners", href: "/investing/accounts/beginners" },
          { title: "Best Roth IRA accounts", href: "/investing/accounts/roth-ira" },
          { title: "Best IRA accounts", href: "/investing/accounts/ira" },
          { title: "Best investing apps", href: "/investing/accounts/apps" },
          { title: "Explore more investment accounts", href: "/investing/accounts/explore" },
        ],
      },
      {
        title: "Investments",
        href: "/investing/investments",
        subItems: [
          { title: "Best investments right now", href: "/investing/investments/best-now" },
          { title: "Stocks", href: "/investing/investments/stocks" },
          { title: "Funds", href: "/investing/investments/funds" },
          { title: "Bonds", href: "/investing/investments/bonds" },
          { title: "Cryptocurrency", href: "/investing/investments/cryptocurrency" },
          { title: "Real estate and alternative investments", href: "/investing/investments/real-estate" },
        ],
      },
      {
        title: "Retirement",
        href: "/investing/retirement",
        subItems: [
          { title: "Roth IRA basics", href: "/investing/retirement/roth-ira-basics" },
          { title: "IRA basics", href: "/investing/retirement/ira-basics" },
          { title: "401(k)s", href: "/investing/retirement/401k" },
          { title: "Self-employed retirement plans", href: "/investing/retirement/self-employed" },
          { title: "Social Security", href: "/investing/retirement/social-security" },
          { title: "Explore more retirement resources", href: "/investing/retirement/explore" },
        ],
      },
      {
        title: "Investing and retirement calculators",
        href: "/investing/calculators",
        subItems: [
          { title: "Retirement calculator", href: "/investing/calculators/retirement" },
          { title: "401(k) calculator", href: "/investing/calculators/401k" },
          { title: "Roth IRA calculator", href: "/investing/calculators/roth-ira" },
          { title: "Investment return calculator", href: "/investing/calculators/investment-return" },
          { title: "Social Security benefits calculator", href: "/investing/calculators/social-security" },
          { title: "Inflation calculator", href: "/investing/calculators/inflation" },
        ],
      },
      {
        title: "Financial advisors",
        href: "/investing/advisors",
        subItems: [
          { title: "Best financial advisors", href: "/investing/advisors/best" },
          { title: "How to choose a financial advisor", href: "/investing/advisors/how-to-choose" },
          { title: "Financial advisor fees", href: "/investing/advisors/fees" },
        ],
      },
      {
        title: "Explore more investing resources",
        href: "/investing/explore",
      },
    ],
  },
  smallBusiness: {
    title: "Small business",
    href: "/small-business",
    dropdown: [
      {
        title: "Funding your business",
        href: "/small-business/funding",
        subItems: [
          { title: "Small-business loans", href: "/small-business/funding/loans" },
          { title: "SBA loans", href: "/small-business/funding/sba-loans" },
          { title: "Business lines of credit", href: "/small-business/funding/lines-of-credit" },
          { title: "Business grants", href: "/small-business/funding/grants" },
          { title: "Startup business loans", href: "/small-business/funding/startup-loans" },
        ],
      },
      {
        title: "Managing business finances",
        href: "/small-business/finances",
        subItems: [
          { title: "Business bank accounts", href: "/small-business/finances/bank-accounts" },
          { title: "Business credit cards", href: "/small-business/finances/credit-cards" },
          { title: "Accounting software", href: "/small-business/finances/accounting-software" },
          { title: "Business taxes", href: "/small-business/finances/taxes" },
        ],
      },
      {
        title: "Starting a business",
        href: "/small-business/starting",
        subItems: [
          { title: "How to start a business", href: "/small-business/starting/how-to-start" },
          { title: "Business ideas", href: "/small-business/starting/ideas" },
          { title: "Writing a business plan", href: "/small-business/starting/business-plan" },
          { title: "Entrepreneurship", href: "/small-business/starting/entrepreneurship" },
        ],
      },
      {
        title: "Running your business",
        href: "/small-business/running",
        subItems: [
          { title: "Payment processing companies", href: "/small-business/running/payment-processing" },
          { title: "Payroll & HR software", href: "/small-business/running/payroll-hr" },
          { title: "E-commerce software", href: "/small-business/running/ecommerce" },
          { title: "Marketing software", href: "/small-business/running/marketing" },
          { title: "Business insurance", href: "/small-business/running/insurance" },
          { title: "Business legal", href: "/small-business/running/legal" },
        ],
      },
      {
        title: "Explore more small-business resources",
        href: "/small-business/explore",
      },
    ],
  },
  taxes: {
    title: "Taxes",
    href: "/taxes",
    dropdown: [
      {
        title: "Tax brackets and rates",
        href: "/taxes/brackets-rates",
      },
      {
        title: "Tax calculators",
        href: "/taxes/calculators",
        subItems: [
          { title: "Federal income tax calculator", href: "/taxes/calculators/federal-income" },
          { title: "Capital gains tax calculator", href: "/taxes/calculators/capital-gains" },
        ],
      },
      {
        title: "Tax preparation and filing",
        href: "/taxes/preparation",
        subItems: [
          { title: "Tax credits and deductions", href: "/taxes/preparation/credits-deductions" },
          { title: "Tax forms", href: "/taxes/preparation/forms" },
          { title: "Best tax software", href: "/taxes/preparation/best-software" },
          { title: "Tax preparation basics", href: "/taxes/preparation/basics" },
          { title: "View all tax preparation and filing", href: "/taxes/preparation/all" },
        ],
      },
      {
        title: "Tax strategy and planning",
        href: "/taxes/strategy-planning",
      },
      {
        title: "Solving tax issues",
        href: "/taxes/issues",
      },
      {
        title: "Explore more tax resources",
        href: "/taxes/explore",
      },
    ],
  },
}
