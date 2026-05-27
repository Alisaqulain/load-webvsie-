import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ContactCTA from "@/components/ContactCTA";
import { LOAN_DETAILS } from "@/lib/data";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Loan Details | NR Innovative Solutions",
  description:
    "Detailed information on personal, business, home, LAP, vehicle, and gold loans — amounts, tenure, rates, and features.",
};

export default function LoanDetailsPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Loan Details"
        title="Loan Details & Features"
        subtitle="Understand loan amounts, tenure, indicative rates, and key features before you apply."
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {LOAN_DETAILS.map((loan) => (
              <article
                key={loan.slug}
                className="hover-glow rounded-2xl border border-navy-800/8 bg-gradient-to-b from-white to-slate-50 p-8"
              >
                <h2 className="font-display text-2xl font-semibold text-navy-900">
                  {loan.name}
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl bg-navy-900/5 p-4">
                    <p className="text-xs font-medium text-silver-500 uppercase">Amount</p>
                    <p className="mt-1 text-sm font-semibold text-navy-900">{loan.amount}</p>
                  </div>
                  <div className="rounded-xl bg-navy-900/5 p-4">
                    <p className="text-xs font-medium text-silver-500 uppercase">Tenure</p>
                    <p className="mt-1 text-sm font-semibold text-navy-900">{loan.tenure}</p>
                  </div>
                  <div className="rounded-xl bg-navy-900/5 p-4">
                    <p className="text-xs font-medium text-silver-500 uppercase">Rate</p>
                    <p className="mt-1 text-sm font-semibold text-navy-900">{loan.rate}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-2">
                  {loan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-silver-500">
                      <CheckCircle2 className="h-4 w-4 text-gold-600" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/apply?loan=${encodeURIComponent(loan.name)}`}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold-700 hover:text-gold-600"
                >
                  Apply for {loan.name}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-silver-500">
            * Rates and amounts are indicative and subject to lender policies, credit profile,
            and documentation. Contact our advisors for exact offers.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
