export function formatINR(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

export function parseAmount(input: string): number {
  const cleaned = input.replace(/[^\d.]/g, "");
  return parseFloat(cleaned) || 0;
}

/** Monthly EMI for reducing balance loan */
export function calculateEMI(
  principal: number,
  annualRatePercent: number,
  tenureMonths: number
): { emi: number; totalPayment: number; totalInterest: number } {
  if (principal <= 0 || tenureMonths <= 0) {
    return { emi: 0, totalPayment: 0, totalInterest: 0 };
  }
  if (annualRatePercent <= 0) {
    const emi = principal / tenureMonths;
    return { emi, totalPayment: emi * tenureMonths, totalInterest: 0 };
  }
  const r = annualRatePercent / 12 / 100;
  const factor = Math.pow(1 + r, tenureMonths);
  const emi = (principal * r * factor) / (factor - 1);
  const totalPayment = emi * tenureMonths;
  return {
    emi,
    totalPayment,
    totalInterest: totalPayment - principal,
  };
}

/** Max loan from affordable EMI */
export function loanFromEMI(
  emi: number,
  annualRatePercent: number,
  tenureMonths: number
): number {
  if (emi <= 0 || tenureMonths <= 0) return 0;
  if (annualRatePercent <= 0) return emi * tenureMonths;
  const r = annualRatePercent / 12 / 100;
  const factor = Math.pow(1 + r, tenureMonths);
  return (emi * (factor - 1)) / (r * factor);
}

export function calculateHomeAffordability(
  monthlyIncome: number,
  existingEMI: number,
  annualRatePercent: number,
  tenureYears: number,
  downPaymentPercent: number,
  emiRatioPercent: number = 45
): {
  maxEMI: number;
  maxLoan: number;
  maxPropertyValue: number;
  downPayment: number;
} {
  const maxEMI = Math.max(
    0,
    monthlyIncome * (emiRatioPercent / 100) - existingEMI
  );
  const maxLoan = loanFromEMI(maxEMI, annualRatePercent, tenureYears * 12);
  const downRatio = downPaymentPercent / 100;
  const maxPropertyValue =
    downRatio >= 1 ? maxLoan : maxLoan / (1 - downRatio);
  const downPayment = maxPropertyValue * downRatio;

  return { maxEMI, maxLoan, maxPropertyValue, downPayment };
}

export type DebtLoan = {
  outstanding: number;
  rate: number;
  remainingMonths: number;
};

export function calculateDebtConsolidation(
  debts: DebtLoan[],
  consolidatedRate: number,
  consolidatedTenureMonths: number
): {
  currentTotalEMI: number;
  currentTotalInterest: number;
  consolidatedEMI: number;
  consolidatedTotalInterest: number;
  monthlySavings: number;
  totalInterestSavings: number;
  consolidatedPrincipal: number;
} {
  let currentTotalEMI = 0;
  let currentTotalInterest = 0;
  let consolidatedPrincipal = 0;

  for (const d of debts) {
    if (d.outstanding <= 0 || d.remainingMonths <= 0) continue;
    consolidatedPrincipal += d.outstanding;
    const { emi, totalInterest } = calculateEMI(
      d.outstanding,
      d.rate,
      d.remainingMonths
    );
    currentTotalEMI += emi;
    currentTotalInterest += totalInterest;
  }

  const { emi: consolidatedEMI, totalInterest: consolidatedTotalInterest } =
    calculateEMI(consolidatedPrincipal, consolidatedRate, consolidatedTenureMonths);

  return {
    currentTotalEMI,
    currentTotalInterest,
    consolidatedEMI,
    consolidatedTotalInterest,
    monthlySavings: currentTotalEMI - consolidatedEMI,
    totalInterestSavings: currentTotalInterest - consolidatedTotalInterest,
    consolidatedPrincipal,
  };
}
