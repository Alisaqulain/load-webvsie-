type PageHeaderProps = {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
};

export default function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <section className="gradient-hero pattern-grid relative pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-navy-950/45" />
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {breadcrumb && (
          <p className="text-sm font-semibold tracking-widest text-gold-400 drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)] uppercase">
            {breadcrumb}
          </p>
        )}
        <h1 className="font-display mt-2 text-4xl font-bold text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.6)] sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-silver-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
