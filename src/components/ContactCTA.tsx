import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { PRIMARY_PHONE, PRIMARY_WHATSAPP, phoneHref } from "@/lib/data";

export default function ContactCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="gradient-hero pattern-grid absolute inset-0" />
      <div className="absolute inset-0 bg-navy-950/45" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.6)] sm:text-4xl">
          Ready to Get Your Loan Approved?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-silver-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
          Speak with our loan advisors today. Free consultation, zero service charges,
          and expert guidance from application to disbursement.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={PRIMARY_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:brightness-110"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Now
          </a>
          <a
            href={phoneHref(PRIMARY_PHONE)}
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:border-gold-500/40"
          >
            <Phone className="h-5 w-5 text-gold-400" />
            Call for Free Consultation
          </a>
          <Link
            href="/apply"
            className="gradient-gold inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-navy-950 shadow-lg transition hover:brightness-110"
          >
            <FileText className="h-5 w-5" />
            Apply for Loan
          </Link>
        </div>
      </div>
    </section>
  );
}
