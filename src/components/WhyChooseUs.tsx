import {
  Network,
  Wallet,
  UserCheck,
  FileText,
  Clock,
  Globe,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/data";

const icons = {
  network: Network,
  wallet: Wallet,
  advisor: UserCheck,
  docs: FileText,
  clock: Clock,
  globe: Globe,
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-gold-600 uppercase">
            Why Choose Us
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
            Why Choose NR Innovative Solutions
          </h2>
          <p className="mt-4 text-silver-500">
            Professional loan consultancy backed by India&apos;s largest lender network —
            with zero charges and expert guidance at every step.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article
                key={item.title}
                className="hover-glow group rounded-2xl border border-navy-800/8 bg-gradient-to-b from-white to-slate-50/80 p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 transition group-hover:bg-gold-600">
                  <Icon className="h-6 w-6 text-gold-400 transition group-hover:text-navy-950" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-silver-500">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
