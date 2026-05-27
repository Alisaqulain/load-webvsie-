import Link from "next/link";
import { Building2, ArrowRight } from "lucide-react";
import { PARTNER_BANKS } from "@/lib/data";

type BankTieupsProps = {
  compact?: boolean;
};

export default function BankTieups({ compact = false }: BankTieupsProps) {
  const banks = compact ? PARTNER_BANKS.slice(0, 18) : PARTNER_BANKS;

  return (
    <section className={`section-padding ${compact ? "bg-slate-50" : "bg-white"}`}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-widest text-gold-600 uppercase">
              Partner Network
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
              159+ Bank & NBFC Tie-ups
            </h2>
            <p className="mt-4 text-silver-500">
              We work with leading public sector banks, private banks, housing finance
              companies, and NBFCs to secure the best loan options for your profile.
            </p>
          </div>
          <Link
            href="/bank-tieups"
            className="inline-flex items-center gap-2 rounded-xl border border-navy-800/15 bg-white px-6 py-3 text-sm font-semibold text-navy-900 transition hover:border-gold-500/40 hover:text-gold-700"
          >
            View All Partners
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {banks.map((bank) => (
            <div
              key={bank}
              className="hover-glow flex items-center gap-3 rounded-xl border border-navy-800/8 bg-white px-4 py-3.5 shadow-sm"
            >
              <Building2 className="h-4 w-4 shrink-0 text-gold-600" />
              <span className="text-xs font-medium text-navy-800 sm:text-sm">{bank}</span>
            </div>
          ))}
        </div>

        {!compact && (
          <p className="mt-8 text-center text-sm text-silver-500">
            And 129+ more banks, NBFCs, and housing finance companies across India.
          </p>
        )}
      </div>
    </section>
  );
}
