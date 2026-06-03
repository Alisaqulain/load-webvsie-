"use client";

import { FormEvent, ReactNode } from "react";
import { Lock, Send, CheckCircle2 } from "lucide-react";
import { LOAN_TYPES } from "@/lib/data";

type LeadGateProps = {
  unlocked: boolean;
  onUnlock: (e: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  calculatorName: string;
};

export default function LeadGate({
  unlocked,
  onUnlock,
  children,
  calculatorName,
}: LeadGateProps) {
  if (unlocked) {
    return (
      <div>
        {children}
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-50 px-4 py-3 text-sm text-green-800">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          Thank you! Our loan advisor will contact you with personalized options shortly.
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gold-500/25 bg-gradient-to-br from-navy-900 to-navy-800 p-6 sm:p-8">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gold-500/20 blur-3xl" />
      </div>
      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/20">
            <Lock className="h-5 w-5 text-gold-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Unlock Your Results</h3>
            <p className="text-sm text-silver-300">
              Enter your email, phone, and loan requirements to view {calculatorName} results —
              100% free, no obligation.
            </p>
          </div>
        </div>

        <form onSubmit={onUnlock} className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="lead-email" className="mb-1 block text-xs font-medium text-silver-300">
              Email *
            </label>
            <input
              id="lead-email"
              name="email"
              type="email"
              required
              className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-silver-500 focus:border-gold-500/50 focus:outline-none"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="lead-phone" className="mb-1 block text-xs font-medium text-silver-300">
              Phone Number *
            </label>
            <input
              id="lead-phone"
              name="phone"
              type="tel"
              required
              pattern="[0-9]{10}"
              title="10-digit mobile number"
              className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-silver-500 focus:border-gold-500/50 focus:outline-none"
              placeholder="10-digit mobile"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="lead-type" className="mb-1 block text-xs font-medium text-silver-300">
              Loan Type *
            </label>
            <select
              id="lead-type"
              name="loanType"
              required
              defaultValue=""
              className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white focus:border-gold-500/50 focus:outline-none [&>option]:text-navy-900"
            >
              <option value="" disabled>
                Select loan type
              </option>
              {LOAN_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="lead-amount" className="mb-1 block text-xs font-medium text-silver-300">
              Required Loan Amount *
            </label>
            <input
              id="lead-amount"
              name="loanAmount"
              type="text"
              required
              className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-silver-500 focus:border-gold-500/50 focus:outline-none"
              placeholder="e.g. ₹25,00,000"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="lead-req" className="mb-1 block text-xs font-medium text-silver-300">
              Loan Requirements *
            </label>
            <textarea
              id="lead-req"
              name="requirements"
              required
              rows={3}
              className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-silver-500 focus:border-gold-500/50 focus:outline-none"
              placeholder="Purpose, timeline, property details, existing loans..."
            />
          </div>
          <button
            type="submit"
            className="gradient-gold sm:col-span-2 flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-navy-950 transition hover:brightness-110"
          >
            <Send className="h-4 w-4" />
            View My Results
          </button>
        </form>
      </div>
    </div>
  );
}
