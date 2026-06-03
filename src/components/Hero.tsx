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
    <section className="gradient-hero pattern-grid relative min-h-[92vh] overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-navy-950/45" />
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-navy-600/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/5 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-gold-400" />
              <span className="text-xs font-medium tracking-wide text-gold-400 uppercase">
                159+ Bank & NBFC Tie-Ups
              </span>
            </div>

            <h1 className="font-display text-4xl leading-tight font-bold text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl">
              All Loans,{" "}
              <span className="text-gold-400">One Trusted Solution</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-silver-200">
              Get the right loan through 159+ bank and NBFC tie-ups across India
              with a simple process and expert guidance.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/apply"
                className="group gradient-gold inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-navy-950 shadow-xl shadow-gold-500/25 transition hover:brightness-110"
              >
                Apply for Loan
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/calculators"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:border-gold-500/40 hover:bg-white/10"
              >
                Loan Calculators
              </Link>
              <a
                href={phoneHref(PRIMARY_PHONE)}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:border-gold-500/40 hover:bg-white/10"
              >
                <Phone className="h-5 w-5 text-gold-400" />
                Call Now
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {TRUST_BADGES.map((badge) => {
                const Icon = badgeIcons[badge.icon];
                return (
                  <div
                    key={badge.label}
                    className="glass-card hover-glow rounded-xl p-4 text-center"
                  >
                    <Icon className="mx-auto h-5 w-5 text-gold-400" />
                    <p className="mt-2 text-xs font-medium text-white">{badge.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="animate-fade-up animate-delay-200 relative hidden lg:block">
            <div className="relative rounded-2xl border border-white/25 bg-navy-950/80 p-8 shadow-2xl shadow-black/35 backdrop-blur-xl">
              <div className="absolute -top-3 -right-3 rounded-lg border border-gold-500/40 bg-gold-500/20 px-4 py-2">
                <p className="text-xs font-semibold text-gold-400">159+ Partners</p>
              </div>
              <h3 className="font-display text-2xl font-semibold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                Your Loan Journey Starts Here
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Free expert consultation",
                  "Best bank matching from 159+ lenders",
                  "Minimum documentation guidance",
                  "Quick approval coordination",
                  "Zero service charges",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white">
                    <FileCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                {[
                  { value: "159+", label: "Banks/NBFCs" },
                  { value: "100%", label: "Free Service" },
                  { value: "Pan", label: "India Coverage" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-display text-2xl font-bold text-gold-400">{stat.value}</p>
                    <p className="text-xs text-silver-300">{stat.label}</p>
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
