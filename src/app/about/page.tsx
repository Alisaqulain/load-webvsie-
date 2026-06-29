import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactCTA from "@/components/ContactCTA";
import { Target, Eye, Award, Users } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about NR Innovative Solutions — India's trusted loan consultancy with 159+ bank tie-ups, zero service charges, and pan India support.",
  path: "/about",
  keywords: [
    "about NR Innovative Solutions",
    "loan consultancy India",
    "trusted loan advisor",
  ],
});

const values = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To make loan access simple, transparent, and affordable for every Indian — whether salaried, self-employed, or business owner.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be India's most trusted loan consultancy, known for integrity, lender partnerships, and customer-first advisory.",
  },
  {
    icon: Award,
    title: "Our Promise",
    text: "Zero service charges, no hidden fees, expert guidance, and the best bank match from our 159+ partner network.",
  },
  {
    icon: Users,
    title: "Who We Serve",
    text: "Individuals, families, MSMEs, retailers, hospitals, industries, and professionals across urban and rural India.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumb="About Us"
        title="About NR Innovative Solutions"
        subtitle="Your trusted partner for all types of loans across India — with expertise, integrity, and zero service charges."
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-navy-900">
                Leading Loan Consultancy Across India
              </h2>
              <p className="mt-6 leading-relaxed text-silver-500">
                NR Innovative Solutions is a premium loan consultancy firm dedicated to helping
                customers secure the right financing from the right lender. With tie-ups across
                159+ banks and NBFCs, we offer an unmatched network that increases approval
                chances and delivers competitive interest rates.
              </p>
              <p className="mt-4 leading-relaxed text-silver-500">
                Our team of experienced loan advisors understands the nuances of personal,
                housing, business, commercial, and industry-specific loans. We guide you from
                eligibility assessment and documentation to bank matching, sanction, and
                disbursement — entirely free of service charges.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "159+", label: "Bank & NBFC Partners" },
                { value: "40+", label: "Loan Products" },
                { value: "100%", label: "Free Consultancy" },
                { value: "Pan", label: "India Coverage" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="hover-glow rounded-2xl border border-navy-800/8 bg-gradient-to-br from-navy-900 to-navy-800 p-6 text-center"
                >
                  <p className="font-display text-3xl font-bold text-gold-400">{item.value}</p>
                  <p className="mt-2 text-sm text-silver-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <article
                key={v.title}
                className="hover-glow rounded-2xl border border-navy-800/8 p-8"
              >
                <v.icon className="h-8 w-8 text-gold-600" />
                <h3 className="mt-4 font-semibold text-navy-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-silver-500">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
