import Link from "next/link";
import { Calculator, Home, Layers, ArrowRight } from "lucide-react";

const tools = [
  {
    icon: Calculator,
    title: "EMI Calculator",
    text: "Know your monthly EMI, total interest, and repayment before applying.",
    href: "/calculators",
  },
  {
    icon: Home,
    title: "Home Affordability",
    text: "Find the maximum home loan and property value you can afford.",
    href: "/calculators",
  },
  {
    icon: Layers,
    title: "Debt Consolidation",
    text: "Merge multiple loans and estimate monthly savings instantly.",
    href: "/calculators",
  },
];

export default function FinancialCalculatorsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-widest text-gold-600 uppercase">
              Financial Tools
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
              Smart Loan Calculators
            </h2>
            <p className="mt-4 text-silver-500">
              Plan smarter with free EMI, home affordability, and debt consolidation
              calculators — then get expert advice from our loan advisors.
            </p>
          </div>
          <Link
            href="/calculators"
            className="inline-flex items-center gap-2 rounded-xl border border-navy-800/15 px-6 py-3 text-sm font-semibold text-navy-900 transition hover:border-gold-500/40 hover:text-gold-700"
          >
            Open All Calculators
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="hover-glow group rounded-2xl border border-navy-800/8 bg-gradient-to-b from-white to-slate-50 p-8"
            >
              <tool.icon className="h-8 w-8 text-gold-600 transition group-hover:scale-110" />
              <h3 className="mt-4 font-semibold text-navy-900">{tool.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-silver-500">{tool.text}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-700">
                Try now
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
