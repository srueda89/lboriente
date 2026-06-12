import Link from "next/link";

export default function PollaMundialPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Polla LBOriente
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Polla Mundial
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/75">
            Pronostica los marcadores, compite con el grupo y sube en el
            ranking general.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/polla-mundial/login"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-bold text-[#050816] transition hover:bg-blue-100"
            >
              Entrar con Google
            </Link>

            <Link
              href="/polla-mundial/reglas"
              className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
            >
              Ver reglas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}