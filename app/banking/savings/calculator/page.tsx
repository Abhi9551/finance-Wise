import type { Metadata } from "next"
import SavingsCalculatorClient from "./SavingsCalculatorClient"

export const metadata: Metadata = {
  title: "Savings Calculator - Calculate Interest & Growth | FinanceWise",
  description:
    "Use our free savings calculator to see how your money grows with compound interest. Plan your savings goals and compare different scenarios.",
  keywords: "savings calculator, compound interest calculator, savings growth, interest calculator",
}

export default function SavingsCalculatorPage() {
  return <SavingsCalculatorClient />
}
