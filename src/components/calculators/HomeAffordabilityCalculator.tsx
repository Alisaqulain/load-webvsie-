"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import { calculateHomeAffordability, formatINR } from "@/lib/calculators";
import LeadGate from "./LeadGate";
import { useCalculatorLead } from "./useCalculatorLead";

export default function HomeAffordabilityCalculator() {
  const [income, setIncome] = useState("80000");
  const [existingEMI, setExistingEMI] = useState("0");
  const [rate, setRate] = useState("8.75");
  const [tenureYears, setTenureYears] = useState("20");
  const [downPayment, setDownPayment] = useState("20");
  const { unlocked, handleUnlock } = useCalculatorLead();
  const [result, setResult] = useState<ReturnType<
    typeof calculateHomeAffordability
  > | null>(null);

  const handleCalculate = () => {
    setResult(
      calculateHomeAffordability(
        parseFloat(income) || 0,
        parseFloat(existingEMI) || 0,
        parseFloat(rate) || 0,
        parseInt(tenureYears, 10) || 0,
        parseFloat(downPayment) || 0
      )
    );
  };

  const inputClass =
    "w-full rounded-xl border border-navy-800/15 bg-white px-4 py-3 text-navy-900 focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/20 focus:outline-none";

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-800">
            Net Monthly Income (₹)
          </label>
          <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-800">
            Existing EMIs (₹)
          </label>
          <input type="number" value={existingEMI} onChange={(e) => setExistingEMI(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-800">
            Interest Rate (% p.a.)
          </label>
          <input type="number" step="0.1" value={rate} onChange={(e) => setRate(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-800">
            Loan Tenure (years)
          </label>
          <input type="number" value={tenureYears} onChange={(e) => setTenureYears(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-800">
            Down Payment (%)
          </label>
          <input type="number" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} className={inputClass} />
        </div>
      </div>

      <button
        type="button"
        onClick={handleCalculate}
        className="gradient-gold inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-navy-950 transition hover:brightness-110"
      >
        <Home className="h-4 w-4" />
        Check Affordability
      </button>

      {result && (
        <LeadGate
          unlocked={unlocked}
          onUnlock={handleUnlock}
          calculatorName="Home Loan Affordability"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Affordable EMI", value: formatINR(result.maxEMI), highlight: true },
              { label: "Max Loan Amount", value: formatINR(result.maxLoan) },
              { label: "Max Property Value", value: formatINR(result.maxPropertyValue) },
              { label: "Down Payment Needed", value: formatINR(result.downPayment) },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-xl border p-5 ${
                  item.highlight
                    ? "border-gold-500/40 bg-gold-500/10"
                    : "border-navy-800/10 bg-slate-50"
                }`}
              >
                <p className="text-xs font-medium text-silver-500 uppercase">{item.label}</p>
                <p
                  className={`mt-1 font-display text-xl font-bold ${
                    item.highlight ? "text-gold-700" : "text-navy-900"
                  }`}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-silver-500">
            Based on 45% of net income for EMI (standard lender guideline). Actual eligibility may vary.
          </p>
          <Link
            href="/apply?loan=Home%20Loan"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-700 hover:text-gold-600"
          >
            Apply for Home Loan
            <ArrowRight className="h-4 w-4" />
          </Link>
        </LeadGate>
      )}
    </div>
  );
}
