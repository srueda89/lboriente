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
    <section className="relative overflow-hidden rounded-3xl border border-blue-300/20 bg-blue-950/35 px-6 py-10 shadow-2xl shadow-blue-950/40 sm:px-10 sm:py-14">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/35 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

      <div className="relative max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          {eyebrow}
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
          {title}
        </h1>

        {description ? (
          <p className="mt-6 text-lg leading-8 text-blue-50/75">
            {description}
          </p>
        ) : null}

        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}