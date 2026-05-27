import Link from "next/link";
import {
  User,
  Home,
  Briefcase,
  Factory,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  user: User,
  home: Home,
  briefcase: Briefcase,
  factory: Factory,
};

type LoanCardProps = {
  title: string;
  description: string;
  loans: readonly string[];
  icon: string;
  href?: string;
};

export default function LoanCard({
  title,
  description,
  loans,
  icon,
  href = "/loan-services",
}: LoanCardProps) {
  const Icon = iconMap[icon] ?? Briefcase;

  return (
    <article className="glass-card-light hover-glow group rounded-2xl p-6 sm:p-8">
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 shadow-lg">
          <Icon className="h-7 w-7 text-gold-400" />
        </div>
        <Link
          href={href}
          className="rounded-lg p-2 text-navy-700 opacity-0 transition group-hover:opacity-100 hover:bg-gold-500/10"
          aria-label={`View ${title}`}
        >
          <ArrowUpRight className="h-5 w-5" />
        </Link>
      </div>

      <h3 className="font-display mt-5 text-xl font-semibold text-navy-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-silver-500">{description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {loans.slice(0, 4).map((loan) => (
          <li
            key={loan}
            className="rounded-full border border-navy-800/10 bg-navy-900/5 px-3 py-1 text-xs font-medium text-navy-800"
          >
            {loan}
          </li>
        ))}
        {loans.length > 4 && (
          <li className="rounded-full bg-gold-500/15 px-3 py-1 text-xs font-medium text-gold-700">
            +{loans.length - 4} more
          </li>
        )}
      </ul>

      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold-700 transition hover:text-gold-600"
      >
        Explore loans
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

type SimpleLoanCardProps = {
  name: string;
  className?: string;
};

export function SimpleLoanCard({ name, className = "" }: SimpleLoanCardProps) {
  return (
    <Link
      href={`/apply?loan=${encodeURIComponent(name)}`}
      className={`hover-glow group flex items-center justify-between rounded-xl border border-navy-800/8 bg-white px-4 py-3.5 shadow-sm transition ${className}`}
    >
      <span className="text-sm font-medium text-navy-900 group-hover:text-gold-700">
        {name}
      </span>
      <ArrowUpRight className="h-4 w-4 text-silver-400 transition group-hover:text-gold-600" />
    </Link>
  );
}
