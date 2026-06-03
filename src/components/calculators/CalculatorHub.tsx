"use client";

import { useState } from "react";
import { Calculator, Home, Layers } from "lucide-react";
import EMICalculator from "./EMICalculator";
import HomeAffordabilityCalculator from "./HomeAffordabilityCalculator";
import DebtConsolidationCalculator from "./DebtConsolidationCalculator";

const tabs = [
  {
    id: "emi",
    label: "EMI Calculator",
    icon: Calculator,
    description: "Calculate monthly EMI, total interest, and repayment for any loan.",
  },
  {
    id: "home",
    label: "Home Affordability",
    icon: Home,
    description: "Find how much home you can afford based on your income.",
  },
  {
    id: "debt",
    label: "Debt Consolidation",
    icon: Layers,
    description: "Compare current EMIs vs one consolidated loan and estimate savings.",
  },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function CalculatorHub() {
  const [active, setActive] = useState<TabId>("emi");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-3">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`hover-glow rounded-2xl border p-5 text-left transition ${
                isActive
                  ? "border-gold-500/50 bg-gold-500/10 shadow-lg shadow-gold-500/10"
                  : "border-navy-800/10 bg-white hover:border-gold-500/30"
              }`}
            >
              <Icon
                className={`h-6 w-6 ${isActive ? "text-gold-600" : "text-navy-700"}`}
              />
              <p className="mt-3 font-semibold text-navy-900">{tab.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-silver-500">{tab.description}</p>
            </button>
          );
        })}
      </div>

      <div className="glass-card-light mt-8 rounded-2xl p-6 sm:p-8">
        <h3 className="font-display text-xl font-semibold text-navy-900">{current.label}</h3>
        <p className="mt-1 text-sm text-silver-500">{current.description}</p>
        <div className="mt-6">
          {active === "emi" && <EMICalculator />}
          {active === "home" && <HomeAffordabilityCalculator />}
          {active === "debt" && <DebtConsolidationCalculator />}
        </div>
      </div>
    </div>
  );
}
