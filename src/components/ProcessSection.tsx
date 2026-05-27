import { PROCESS_STEPS } from "@/lib/data";

export default function ProcessSection() {
  return (
    <section className="section-padding gradient-hero pattern-grid relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-navy-950/50" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-gold-400 uppercase">
            Simple Process
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
            From Application to Disbursement
          </h2>
          <p className="mt-4 text-silver-300">
            A clear, guided journey designed for quick approvals and stress-free funding.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-5">
          {PROCESS_STEPS.map((step, index) => (
            <div key={step.step} className="relative">
              {index < PROCESS_STEPS.length - 1 && (
                <div className="absolute top-10 left-[calc(50%+2rem)] hidden h-0.5 w-[calc(100%-4rem)] bg-gradient-to-r from-gold-500/50 to-gold-500/10 md:block" />
              )}
              <article className="glass-card hover-glow rounded-2xl p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold-500/50 bg-gold-500/10">
                  <span className="font-display text-lg font-bold text-gold-400">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-silver-400">
                  {step.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
