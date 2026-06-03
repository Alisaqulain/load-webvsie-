"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";
import { calculateEMI, formatINR } from "@/lib/calculators";
import LeadGate from "./LeadGate";
import { useCalculatorLead } from "./useCalculatorLead";

export default function EMICalculator() {
  const [principal, setPrincipal] = useState("2500000");
  const [rate, setRate] = useState("10.5");
  const [tenure, setTenure] = useState("60");
  const { unlocked, handleUnlock } = useCalculatorLead();
  const [result, setResult] = useState<ReturnType<typeof calculateEMI> | null>(null);

  const handleCalculate = () => {
    const p = parseFloat(principal) || 0;
    const r = parseFloat(rate) || 0;
    const n = parseInt(tenure, 10) || 0;
    setResult(calculateEMI(p, r, n));
  };

  const inputClass =
    "w-full rounded-xl border border-navy-800/15 bg-white px-4 py-3 text-navy-900 focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/20 focus:outline-none";

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-800">
            Loan Amount (₹)
          </label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className={inputClass}
            min={0}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-800">
            Interest Rate (% p.a.)
          </label>
          <input
            type="number"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className={inputClass}
            min={0}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-800">
            Tenure (months)
          </label>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            className={inputClass}
            min={1}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={handleCalculate}
        className="gradient-gold inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-navy-950 transition hover:brightness-110"
      >
        <Calculator className="h-4 w-4" />
        Calculate EMI
      </button>

      {result && (
        <LeadGate unlocked={unlocked} onUnlock={handleUnlock} calculatorName="EMI">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Monthly EMI", value: formatINR(result.emi), highlight: true },
              { label: "Total Interest", value: formatINR(result.totalInterest) },
              { label: "Total Payment", value: formatINR(result.totalPayment) },
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
                  className={`mt-1 font-display text-2xl font-bold ${
                    item.highlight ? "text-gold-700" : "text-navy-900"
                  }`}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/apply?loan=Personal%20Loan"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-700 hover:text-gold-600"
          >
            Apply for this loan amount
            <ArrowRight className="h-4 w-4" />
          </Link>
        </LeadGate>
      )}
    </div>
  );
}
