import Link from "next/link";

const navItems = [
  {
    label: "Inicio",
    href: "/polla-mundial",
  },
  {
    label: "Partidos",
    href: "/polla-mundial/partidos",
  },
  {
    label: "Ranking",
    href: "/polla-mundial/ranking",
  },
  {
    label: "Reglas",
    href: "/polla-mundial/reglas",
  },
];

export function PollaHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-blue-400/10 bg-[#020617]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
        <Link href="/polla-mundial" className="group">
          <span className="block text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Polla
          </span>
          <span className="block text-xl font-black tracking-tight text-white transition group-hover:text-cyan-100">
            LBOriente
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-semibold text-white/65 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-cyan-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/polla-mundial/login"
          className="rounded-full border border-blue-400/30 bg-blue-600/25 px-4 py-2 text-sm font-bold text-white transition hover:border-cyan-300 hover:bg-blue-500/30"
        >
          Entrar
        </Link>
      </div>
    </header>
  );
}