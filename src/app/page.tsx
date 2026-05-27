import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import LoanCard from "@/components/LoanCard";
import ProcessSection from "@/components/ProcessSection";
import BankTieups from "@/components/BankTieups";
import BusinessLoanSection from "@/components/BusinessLoanSection";
import CustomerTrust from "@/components/CustomerTrust";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import { LOAN_CATEGORIES } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />

      <WhyChooseUs />

      <section className="section-padding bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold tracking-widest text-gold-600 uppercase">
                Our Services
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
                Loan Categories
              </h2>
              <p className="mt-4 max-w-xl text-silver-500">
                From personal needs to large commercial projects — explore our comprehensive
                loan solutions backed by 159+ lenders.
              </p>
            </div>
            <Link
              href="/loan-services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-700 hover:text-gold-600"
            >
              All loan types
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {LOAN_CATEGORIES.map((cat) => (
              <LoanCard
                key={cat.title}
                title={cat.title}
                description={cat.description}
                loans={cat.loans}
                icon={cat.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <BankTieups compact />
      <BusinessLoanSection />
      <CustomerTrust />
      <FAQ />
      <ContactCTA />
    </>
  );
}
