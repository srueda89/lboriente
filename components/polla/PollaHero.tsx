type PollaHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function PollaHero({
  eyebrow = "Polla LBOriente",
  title,
  description,
  children,
}: PollaHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-[#D8A72F]/20 bg-white/[0.04] px-6 py-10 shadow-2xl shadow-black/20 sm:px-10 sm:py-14">
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-600/25 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#D8A72F]/10 blur-3xl" />

      <div className="relative max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F5D36B]">
          {eyebrow}
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
          {title}
        </h1>

        {description ? (
          <p className="mt-6 text-lg leading-8 text-white/70">
            {description}
          </p>
        ) : null}

        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}