"use client";

import { useState } from "react";
import Link from "next/link";
import { Layers, Plus, Trash2, ArrowRight } from "lucide-react";
import { calculateDebtConsolidation, formatINR, type DebtLoan } from "@/lib/calculators";
import LeadGate from "./LeadGate";
import { useCalculatorLead } from "./useCalculatorLead";

const emptyDebt = (): DebtLoan => ({
  outstanding: 0,
  rate: 12,
  remainingMonths: 36,
});

export default function DebtConsolidationCalculator() {
  const [debts, setDebts] = useState<DebtLoan[]>([
    { outstanding: 500000, rate: 14, remainingMonths: 48 },
    { outstanding: 200000, rate: 18, remainingMonths: 24 },
  ]);
  const [consolidatedRate, setConsolidatedRate] = useState("11");
  const [consolidatedTenure, setConsolidatedTenure] = useState("60");
  const { unlocked, handleUnlock } = useCalculatorLead();
  const [result, setResult] = useState<ReturnType<
    typeof calculateDebtConsolidation
  > | null>(null);

  const updateDebt = (index: number, field: keyof DebtLoan, value: number) => {
    setDebts((prev) =>
      prev.map((d, i) => (i === index ? { ...d, [field]: value } : d))
    );
  };

  const addDebt = () => setDebts((prev) => [...prev, emptyDebt()]);
  const removeDebt = (index: number) =>
    setDebts((prev) => (prev.length > 1 ? prev.filter((_, i) => i !== index) : prev));

  const handleCalculate = () => {
    setResult(
      calculateDebtConsolidation(
        debts,
        parseFloat(consolidatedRate) || 0,
        parseInt(consolidatedTenure, 10) || 0
      )
    );
  };

  const inputClass =
    "w-full rounded-xl border border-navy-800/15 bg-white px-3 py-2.5 text-sm text-navy-900 focus:border-gold-500/50 focus:outline-none";

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-3 text-sm font-medium text-navy-800">Your Current Loans</p>
        <div className="space-y-3">
          {debts.map((debt, index) => (
            <div
              key={index}
              className="grid gap-3 rounded-xl border border-navy-800/10 bg-slate-50 p-4 sm:grid-cols-4"
            >
              <div>
                <label className="mb-1 block text-xs text-silver-500">Outstanding (₹)</label>
                <input
                  type="number"
                  value={debt.outstanding || ""}
                  onChange={(e) =>
                    updateDebt(index, "outstanding", parseFloat(e.target.value) || 0)
                  }
                  className={inputClass}
                />
              </div>
              <div>
                <label className="mb-1 block text-xs text-silver-500">Rate (% p.a.)</label>
                <input
                  type="number"
                  step="0.1"
                  value={debt.rate}
                  onChange={(e) =>
                    updateDebt(index, "rate", parseFloat(e.target.value) || 0)
                  }
                  className={inputClass}
                />
              </div>
              <div>
                <label className="mb-1 block text-xs text-silver-500">Months Left</label>
                <input
                  type="number"
                  value={debt.remainingMonths}
                  onChange={(e) =>
                    updateDebt(index, "remainingMonths", parseInt(e.target.value, 10) || 0)
                  }
                  className={inputClass}
                />
              </div>
              <div className="flex items-end">
                <button
                  type="button"
                  onClick={() => removeDebt(index)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-red-200 text-red-500 transition hover:bg-red-50"
                  aria-label="Remove loan"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={addDebt}
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-gold-700 hover:text-gold-600"
        >
          <Plus className="h-4 w-4" />
          Add another loan
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-800">
            Consolidated Loan Rate (% p.a.)
          </label>
          <input
            type="number"
            step="0.1"
            value={consolidatedRate}
            onChange={(e) => setConsolidatedRate(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy-800">
            New Tenure (months)
          </label>
          <input
            type="number"
            value={consolidatedTenure}
            onChange={(e) => setConsolidatedTenure(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={handleCalculate}
        className="gradient-gold inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-navy-950 transition hover:brightness-110"
      >
        <Layers className="h-4 w-4" />
        Estimate Consolidation Savings
      </button>

      {result && result.consolidatedPrincipal > 0 && (
        <LeadGate
          unlocked={unlocked}
          onUnlock={handleUnlock}
          calculatorName="Debt Consolidation"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: "Current Total EMI",
                value: formatINR(result.currentTotalEMI),
              },
              {
                label: "New Consolidated EMI",
                value: formatINR(result.consolidatedEMI),
                highlight: true,
              },
              {
                label: "Monthly Savings",
                value: formatINR(Math.max(0, result.monthlySavings)),
                positive: result.monthlySavings > 0,
              },
              {
                label: "Total Outstanding",
                value: formatINR(result.consolidatedPrincipal),
              },
              {
                label: "Interest Saved (Est.)",
                value: formatINR(Math.max(0, result.totalInterestSavings)),
                positive: result.totalInterestSavings > 0,
              },
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
                    item.highlight
                      ? "text-gold-700"
                      : item.positive
                        ? "text-green-700"
                        : "text-navy-900"
                  }`}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          {result.monthlySavings <= 0 && (
            <p className="mt-3 text-sm text-amber-700">
              Consolidation may not reduce EMI with these inputs. Our advisor can suggest better options.
            </p>
          )}
          <Link
            href="/apply?loan=Personal%20Loan"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-700 hover:text-gold-600"
          >
            Get free consolidation advice
            <ArrowRight className="h-4 w-4" />
          </Link>
        </LeadGate>
      )}
    </div>
  );
}
