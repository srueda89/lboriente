import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PollaHero } from "@/components/polla/PollaHero";

export default function PollaMundialPage() {
  return (
    <main className="px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <Breadcrumb items={[]} />

        <PollaHero
          title="Polla Mundial"
          description="Pronostica los marcadores, compite con el grupo y sube en el ranking general de la Polla LBOriente."
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/polla-mundial/login"
              className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500"
            >
              Entrar con Google
            </Link>

            <Link
              href="/polla-mundial/reglas"
              className="rounded-full border border-blue-400/30 px-6 py-3 text-center text-sm font-bold text-white transition hover:border-cyan-300 hover:bg-blue-600/20"
            >
              Ver reglas
            </Link>
          </div>
        </PollaHero>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-blue-400/15 bg-blue-950/20 p-6 shadow-lg shadow-blue-950/20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Paso 1
            </p>
            <h2 className="mt-3 text-xl font-black text-white">Ingresa</h2>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Usa tu cuenta de Google para entrar rápido. Solo guardamos nombre
              y correo.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-400/15 bg-blue-950/20 p-6 shadow-lg shadow-blue-950/20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Paso 2
            </p>
            <h2 className="mt-3 text-xl font-black text-white">Pronostica</h2>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Elige el marcador de cada partido antes de la hora límite.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-400/15 bg-blue-950/20 p-6 shadow-lg shadow-blue-950/20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Paso 3
            </p>
            <h2 className="mt-3 text-xl font-black text-white">Compite</h2>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Suma puntos, revisa el ranking y pelea por el primer lugar.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}