import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { PHONES, whatsappHref, phoneHref } from "@/lib/data";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | NR Innovative Solutions",
  description:
    "Contact NR Innovative Solutions for free loan consultation. Call or WhatsApp our advisors — pan India service.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Contact Us"
        title="Get in Touch"
        subtitle="Reach our loan advisors via phone or WhatsApp. We serve customers across India with free consultation."
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="hover-glow rounded-2xl border border-navy-800/8 p-8">
                <Phone className="h-8 w-8 text-gold-600" />
                <h2 className="mt-4 font-display text-xl font-semibold text-navy-900">
                  Call for Free Consultation
                </h2>
                <ul className="mt-4 space-y-3">
                  {PHONES.map((phone) => (
                    <li key={phone}>
                      <a
                        href={phoneHref(phone)}
                        className="text-lg font-medium text-navy-800 transition hover:text-gold-700"
                      >
                        +91 {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hover-glow rounded-2xl border border-green-500/20 bg-green-50/50 p-8">
                <MessageCircle className="h-8 w-8 text-green-600" />
                <h2 className="mt-4 font-display text-xl font-semibold text-navy-900">
                  WhatsApp Now
                </h2>
                <p className="mt-2 text-sm text-silver-500">
                  Message us on WhatsApp for quick responses and document sharing.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {PHONES.map((phone) => (
                    <a
                      key={phone}
                      href={whatsappHref(
                        phone,
                        "Hello, I would like a free loan consultation from NR Innovative Solutions."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
                    >
                      <MessageCircle className="h-4 w-4" />
                      +91 {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Service Area",
                  text: "Pan India — metros, tier-2 cities, towns, and rural areas. Remote consultation via phone and WhatsApp.",
                },
                {
                  icon: Clock,
                  title: "Working Hours",
                  text: "Monday to Saturday, 9:00 AM – 7:00 PM IST. WhatsApp queries answered as promptly as possible.",
                },
                {
                  icon: Mail,
                  title: "Quick Apply",
                  text: "Prefer online? Submit your loan application and our advisor will call you back.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-navy-800/8 p-6"
                >
                  <item.icon className="h-6 w-6 shrink-0 text-gold-600" />
                  <div>
                    <h3 className="font-semibold text-navy-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-silver-500">{item.text}</p>
                  </div>
                </div>
              ))}

              <Link
                href="/apply"
                className="gradient-gold flex w-full items-center justify-center rounded-xl px-8 py-4 text-base font-semibold text-navy-950 shadow-lg transition hover:brightness-110"
              >
                Apply for Loan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
