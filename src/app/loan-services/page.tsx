import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import LoanCard from "@/components/LoanCard";
import BusinessLoanSection from "@/components/BusinessLoanSection";
import { SimpleLoanCard } from "@/components/LoanCard";
import ContactCTA from "@/components/ContactCTA";
import { LOAN_CATEGORIES, LOAN_TYPES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Loan Services | NR Innovative Solutions",
  description:
    "Explore all loan types — personal, business, housing, gold, vehicle, education, commercial, and industry-specific loans across India.",
};

export default function LoanServicesPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Loan Services"
        title="Comprehensive Loan Services"
        subtitle="All types of loans for individuals and businesses — matched with 159+ banks and NBFCs for the best rates and approval."
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-bold text-navy-900">Loan Categories</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {LOAN_CATEGORIES.map((cat) => (
              <LoanCard
                key={cat.title}
                title={cat.title}
                description={cat.description}
                loans={cat.loans}
                icon={cat.icon}
                href="/apply"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-bold text-navy-900">All Loan Types</h2>
          <p className="mt-2 text-silver-500">
            Click any loan type to start your free application.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {LOAN_TYPES.map((loan) => (
              <SimpleLoanCard key={loan} name={loan} />
            ))}
          </div>
        </div>
      </section>

      <BusinessLoanSection />
      <ContactCTA />
    </>
  );
}
