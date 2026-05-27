import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BankTieups from "@/components/BankTieups";
import ContactCTA from "@/components/ContactCTA";
import { Building2, Shield, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Bank Tie-ups | NR Innovative Solutions",
  description:
    "NR Innovative Solutions partners with 159+ banks and NBFCs across India for competitive loan rates and higher approval rates.",
};

const benefits = [
  {
    icon: Building2,
    title: "Wide Lender Choice",
    text: "Compare offers from public sector banks, private banks, housing finance companies, and leading NBFCs.",
  },
  {
    icon: TrendingUp,
    title: "Better Rates",
    text: "Competition among lenders helps us negotiate favourable interest rates and terms for your profile.",
  },
  {
    icon: Shield,
    title: "Higher Approval Odds",
    text: "If one lender declines, we quickly pivot to alternative partners suited to your income and credit profile.",
  },
];

export default function BankTieupsPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Bank Tie-ups"
        title="159+ Bank & NBFC Partners"
        subtitle="Our extensive partner network ensures you get the best loan match — not just the first available option."
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((b) => (
              <article
                key={b.title}
                className="hover-glow rounded-2xl border border-navy-800/8 p-8 text-center"
              >
                <b.icon className="mx-auto h-10 w-10 text-gold-600" />
                <h3 className="mt-4 font-semibold text-navy-900">{b.title}</h3>
                <p className="mt-2 text-sm text-silver-500">{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BankTieups />
      <ContactCTA />
    </>
  );
}
