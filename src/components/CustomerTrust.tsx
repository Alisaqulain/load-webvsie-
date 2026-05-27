import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh K.",
    location: "Bangalore",
    loan: "Business Loan",
    text: "NR Innovative Solutions matched me with the right NBFC within days. Zero charges and very professional guidance throughout.",
  },
  {
    name: "Priya M.",
    location: "Hyderabad",
    loan: "Home Loan",
    text: "They handled all documentation and bank coordination. Got sanction faster than I expected. Highly recommended for housing loans.",
  },
  {
    name: "Suresh P.",
    location: "Kochi",
    loan: "Petrol Pump Loan",
    text: "Industry-specific loan expertise made the difference. They understood my business needs and found a lender with competitive rates.",
  },
];

export default function CustomerTrust() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-gold-600 uppercase">
            Customer Trust
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
            Trusted by Customers Across India
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="hover-glow relative rounded-2xl border border-navy-800/8 bg-gradient-to-b from-white to-slate-50 p-8"
            >
              <Quote className="h-8 w-8 text-gold-500/30" />
              <p className="mt-4 text-sm leading-relaxed text-silver-500">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-6 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <div className="mt-4 border-t border-navy-800/8 pt-4">
                <p className="font-semibold text-navy-900">{t.name}</p>
                <p className="text-xs text-silver-500">
                  {t.location} · {t.loan}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 rounded-2xl border border-gold-500/20 bg-navy-900 p-8 sm:grid-cols-4">
          {[
            { value: "10,000+", label: "Happy Customers" },
            { value: "159+", label: "Bank Partners" },
            { value: "40+", label: "Loan Products" },
            { value: "₹0", label: "Service Charges" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-bold text-gold-400 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-silver-400 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
