import Link from "next/link";

export function PollaFooter() {
  return (
    <footer className="border-t border-blue-400/10 bg-[#020617] px-6 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Polla LBOriente.</p>

        <div className="flex flex-wrap items-center gap-4">
          <Link href="/polla-mundial" className="hover:text-cyan-200">
            Inicio
          </Link>
          <Link href="/polla-mundial/ranking" className="hover:text-cyan-200">
            Ranking
          </Link>
          <Link href="/polla-mundial/reglas" className="hover:text-cyan-200">
            Reglas
          </Link>
          <Link href="/" className="hover:text-cyan-200">
            LBOriente
          </Link>
        </div>
      </div>
    </footer>
  );
}