import Link from "next/link";
import {
  Building2,
  MapPin,
  Shield,
  Zap,
  FileCheck,
  Phone,
  ArrowRight,
} from "lucide-react";
import { TRUST_BADGES, phoneHref, PRIMARY_PHONE } from "@/lib/data";

const badgeIcons = {
  building: Building2,
  map: MapPin,
  shield: Shield,
  zap: Zap,
  file: FileCheck,
};

export default function Hero() {
  return (
    <section className="gradient-hero pattern-grid relative min-h-[85dvh] overflow-hidden pt-24 pb-12 sm:min-h-[88vh] sm:pt-28 sm:pb-16 lg:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-navy-950/45" />
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-navy-600/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/5 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-up">
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1.5 sm:px-4">
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-gold-400" />
              <span className="text-[11px] font-medium tracking-wide text-gold-400 uppercase sm:text-xs">
                159+ Bank & NBFC Tie-Ups
              </span>
            </div>

            <h1 className="font-display text-[1.75rem] leading-tight font-bold text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl">
              All Loans,{" "}
              <span className="text-gold-400">One Trusted Solution</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-silver-200 sm:mt-6 sm:text-lg">
              Get the right loan through 159+ bank and NBFC tie-ups across India
              with a simple process and expert guidance.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/apply"
                className="group gradient-gold mobile-full-btn inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-navy-950 shadow-xl shadow-gold-500/25 transition hover:brightness-110 sm:px-8 sm:py-4"
              >
                Apply for Loan
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/calculators"
                className="mobile-full-btn inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:border-gold-500/40 hover:bg-white/10 sm:px-8 sm:py-4"
              >
                Loan Calculators
              </Link>
              <a
                href={phoneHref(PRIMARY_PHONE)}
                className="mobile-full-btn inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:border-gold-500/40 hover:bg-white/10 sm:px-8 sm:py-4"
              >
                <Phone className="h-5 w-5 shrink-0 text-gold-400" />
                Call Now
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-2.5 sm:mt-12 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5">
              {TRUST_BADGES.map((badge) => {
                const Icon = badgeIcons[badge.icon];
                return (
                  <div
                    key={badge.label}
                    className="glass-card hover-glow rounded-xl p-3 text-center sm:p-4"
                  >
                    <Icon className="mx-auto h-4 w-4 text-gold-400 sm:h-5 sm:w-5" />
                    <p className="mt-1.5 text-[11px] font-medium text-white sm:mt-2 sm:text-xs">
                      {badge.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="animate-fade-up animate-delay-200 relative lg:block">
            <div className="relative rounded-2xl border border-white/25 bg-navy-950/80 p-5 shadow-2xl shadow-black/35 backdrop-blur-xl sm:p-8">
              <div className="absolute -top-3 -right-3 rounded-lg border border-gold-500/40 bg-gold-500/20 px-3 py-1.5 sm:px-4 sm:py-2">
                <p className="text-[11px] font-semibold text-gold-400 sm:text-xs">
                  159+ Partners
                </p>
              </div>
              <h3 className="font-display text-xl font-semibold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] sm:text-2xl">
                Your Loan Journey Starts Here
              </h3>
              <ul className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
                {[
                  "Free expert consultation",
                  "Best bank matching from 159+ lenders",
                  "Minimum documentation guidance",
                  "Quick approval coordination",
                  "Zero service charges",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white">
                    <FileCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-300 sm:h-5 sm:w-5" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 sm:mt-8 sm:gap-4 sm:pt-8">
                {[
                  { value: "159+", label: "Banks/NBFCs" },
                  { value: "100%", label: "Free Service" },
                  { value: "Pan", label: "India Coverage" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-display text-xl font-bold text-gold-400 sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="text-[10px] text-silver-300 sm:text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
