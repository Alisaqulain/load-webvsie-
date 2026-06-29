import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CalculatorHub from "@/components/calculators/CalculatorHub";
import ContactCTA from "@/components/ContactCTA";
import { Calculator, TrendingUp, Users } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Loan Calculators",
  description:
    "Free EMI calculator, home loan affordability calculator, and debt consolidation estimator. Get instant results and expert loan advice across India.",
  path: "/calculators",
  keywords: ["EMI calculator", "home loan calculator", "debt consolidation calculator India"],
});

const benefits = [
  {
    icon: Calculator,
    title: "Instant Estimates",
    text: "Accurate EMI and affordability calculations based on standard loan formulas used by banks.",
  },
  {
    icon: TrendingUp,
    title: "Smart Decisions",
    text: "Compare consolidation savings and plan your loan amount before you apply.",
  },
  {
    icon: Users,
    title: "Free Expert Follow-up",
    text: "Our advisors contact you with the best bank options from 159+ partners — zero charges.",
  },
];

export default function CalculatorsPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Financial Tools"
        title="Loan Calculators"
        subtitle="Plan your loan with premium calculators — EMI, home affordability, and debt consolidation. 100% free with expert guidance."
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {benefits.map((b) => (
              <article
                key={b.title}
                className="rounded-2xl border border-navy-800/8 bg-slate-50 p-6"
              >
                <b.icon className="h-8 w-8 text-gold-600" />
                <h2 className="mt-4 font-semibold text-navy-900">{b.title}</h2>
                <p className="mt-2 text-sm text-silver-500">{b.text}</p>
              </article>
            ))}
          </div>

          <CalculatorHub />
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
