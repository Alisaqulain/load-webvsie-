"use client";

import { useState, useEffect, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2 } from "lucide-react";
import { LOAN_TYPES } from "@/lib/data";

const SUCCESS_MESSAGE =
  "Thank you! Our loan advisor will contact you shortly.";

type ApplyFormProps = {
  className?: string;
  dark?: boolean;
};

export default function ApplyForm({ className = "", dark = false }: ApplyFormProps) {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [loanType, setLoanType] = useState("");

  useEffect(() => {
    const loan = searchParams.get("loan");
    if (loan) setLoanType(loan);
  }, [searchParams]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = dark
    ? "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-silver-500 focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/20 focus:outline-none"
    : "w-full rounded-xl border border-navy-800/15 bg-white px-4 py-3 text-navy-900 placeholder:text-silver-400 focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/20 focus:outline-none";

  const labelClass = dark
    ? "mb-1.5 block text-sm font-medium text-silver-300"
    : "mb-1.5 block text-sm font-medium text-navy-800";

  if (submitted) {
    return (
      <div
        className={`flex flex-col items-center justify-center rounded-2xl p-12 text-center ${dark ? "glass-card" : "glass-card-light"} ${className}`}
      >
        <CheckCircle2 className="h-16 w-16 text-gold-400" />
        <h3 className={`font-display mt-6 text-2xl font-semibold ${dark ? "text-white" : "text-navy-900"}`}>
          Application Received
        </h3>
        <p className={`mt-3 max-w-md text-lg ${dark ? "text-silver-300" : "text-silver-500"}`}>
          {SUCCESS_MESSAGE}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-5 ${dark ? "glass-card rounded-2xl p-6 sm:p-8" : ""} ${className}`}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-gold-500">*</span>
          </label>
          <input id="name" name="name" type="text" required className={inputClass} placeholder="Your full name" />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number <span className="text-gold-500">*</span>
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClass} placeholder="10-digit mobile" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" name="email" type="email" className={inputClass} placeholder="your@email.com" />
        </div>
        <div>
          <label htmlFor="city" className={labelClass}>
            City <span className="text-gold-500">*</span>
          </label>
          <input id="city" name="city" type="text" required className={inputClass} placeholder="Your city" />
        </div>
        <div>
          <label htmlFor="loanType" className={labelClass}>
            Loan Type <span className="text-gold-500">*</span>
          </label>
          <select
            id="loanType"
            name="loanType"
            required
            value={loanType}
            onChange={(e) => setLoanType(e.target.value)}
            className={inputClass}
          >
            <option value="" className="text-navy-900">
              Select loan type
            </option>
            {LOAN_TYPES.map((type) => (
              <option key={type} value={type} className="text-navy-900">
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="amount" className={labelClass}>
            Required Loan Amount <span className="text-gold-500">*</span>
          </label>
          <input id="amount" name="amount" type="text" required className={inputClass} placeholder="e.g. ₹10,00,000" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="employment" className={labelClass}>
            Employment / Business Type
          </label>
          <input id="employment" name="employment" type="text" className={inputClass} placeholder="Salaried, Self-employed, Business owner..." />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="income" className={labelClass}>
            Monthly Income / Turnover
          </label>
          <input id="income" name="income" type="text" className={inputClass} placeholder="Approximate monthly income or annual turnover" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={inputClass}
            placeholder="Tell us about your loan requirement..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="gradient-gold flex w-full items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-navy-950 shadow-lg transition hover:brightness-110 sm:w-auto"
      >
        <Send className="h-5 w-5" />
        Submit Application
      </button>
    </form>
  );
}
