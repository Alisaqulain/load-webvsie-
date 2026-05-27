import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ContactCTA from "@/components/ContactCTA";
import { ELIGIBILITY_SECTIONS } from "@/lib/data";
import { FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Eligibility & Documents | NR Innovative Solutions",
  description:
    "Check loan eligibility criteria and required documents for salaried, self-employed, home loans, and commercial loans in India.",
};

export default function EligibilityPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Eligibility"
        title="Eligibility & Documents"
        subtitle="General eligibility guidelines and document checklists — our advisors will customize requirements for your chosen lender."
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {ELIGIBILITY_SECTIONS.map((section) => (
              <article
                key={section.title}
                className="hover-glow rounded-2xl border border-navy-800/8 p-8"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-gold-600" />
                  <h2 className="font-display text-xl font-semibold text-navy-900">
                    {section.title}
                  </h2>
                </div>
                <ul className="mt-6 space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-silver-500">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-gold-500/20 bg-gold-500/5 p-8 text-center">
            <p className="text-silver-500">
              Document requirements vary by lender and loan type. Share your profile with us for
              a personalized checklist.
            </p>
            <Link
              href="/apply"
              className="gradient-gold mt-6 inline-flex rounded-xl px-8 py-3 text-sm font-semibold text-navy-950"
            >
              Apply for Loan
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
