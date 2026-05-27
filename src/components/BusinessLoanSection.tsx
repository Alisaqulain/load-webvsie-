import Link from "next/link";
import { Store } from "lucide-react";
import { SimpleLoanCard } from "./LoanCard";
import { BUSINESS_LOAN_CATEGORIES } from "@/lib/data";

export default function BusinessLoanSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <div className="flex items-center gap-2">
              <Store className="h-5 w-5 text-gold-600" />
              <p className="text-sm font-semibold tracking-widest text-gold-600 uppercase">
                Sector-Specific Loans
              </p>
            </div>
            <h2 className="font-display mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
              Business Loan Categories
            </h2>
            <p className="mt-4 text-silver-500">
              Specialized funding for hospitals, retail, manufacturing, transport,
              distributors, and more — tailored to your industry.
            </p>
          </div>
          <Link
            href="/loan-services"
            className="text-sm font-semibold text-gold-700 hover:text-gold-600"
          >
            View all services →
          </Link>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {BUSINESS_LOAN_CATEGORIES.map((loan) => (
            <SimpleLoanCard key={loan} name={loan} />
          ))}
        </div>
      </div>
    </section>
  );
}
