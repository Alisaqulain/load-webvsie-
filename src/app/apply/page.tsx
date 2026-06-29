import type { Metadata } from "next";
import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import ApplyForm from "@/components/ApplyForm";
import { Shield, Clock, Phone } from "lucide-react";
import { PHONES, phoneHref } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Apply Now",
  description:
    "Apply for any loan type online. Free consultation, quick response, and expert guidance from NR Innovative Solutions.",
  path: "/apply",
  keywords: ["apply for loan online", "loan application India", "free loan consultation"],
});

function FormFallback() {
  return (
    <div className="glass-card-light h-96 animate-pulse rounded-2xl" />
  );
}

export default function ApplyPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Apply Now"
        title="Apply for Your Loan"
        subtitle="Fill in your details and our loan advisor will contact you shortly — 100% free, no hidden charges."
      />

      <section className="section-padding bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="glass-card-light rounded-2xl p-6 sm:p-10">
                <Suspense fallback={<FormFallback />}>
                  <ApplyForm />
                </Suspense>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-navy-800/8 bg-white p-6">
                <h3 className="font-semibold text-navy-900">Why Apply With Us?</h3>
                <ul className="mt-4 space-y-4">
                  {[
                    { icon: Shield, text: "Zero service charges — 100% free consultancy" },
                    { icon: Clock, text: "Quick callback from loan advisor" },
                    { icon: Phone, text: "Expert guidance on documents & lenders" },
                  ].map((item) => (
                    <li key={item.text} className="flex gap-3 text-sm text-silver-500">
                      <item.icon className="h-5 w-5 shrink-0 text-gold-600" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="gradient-hero rounded-2xl p-6">
                <h3 className="font-semibold text-white">Prefer to Talk?</h3>
                <p className="mt-2 text-sm text-silver-300">
                  Call any of our advisors for instant consultation.
                </p>
                <ul className="mt-4 space-y-2">
                  {PHONES.map((phone) => (
                    <li key={phone}>
                      <a
                        href={phoneHref(phone)}
                        className="text-sm font-medium text-gold-400 hover:text-gold-300"
                      >
                        +91 {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
