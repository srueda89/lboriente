import Link from "next/link";

export function PollaFooter() {
  return (
    <footer className="border-t border-blue-400/15 bg-[#020817]/90 px-6 py-8 text-white">
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
        <Link
          href="/polla-mundial/tratamiento-datos"
          className="hover:text-cyan-200"
        >
          Datos personales
        </Link>
        <Link href="/" className="hover:text-cyan-200">
          LBOriente
        </Link>
      </div>
    </footer>
  );
}