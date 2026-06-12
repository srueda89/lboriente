import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PollaHero } from "@/components/polla/PollaHero";

export default function PartidosPage() {
  return (
    <main className="px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <Breadcrumb items={[{ label: "Partidos" }]} />

        <PollaHero
          title="Partidos"
          description="Listado de juegos disponibles para pronosticar antes del cierre."
        />

        <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-xl font-black">Sin partidos todavía</h2>
          <p className="mt-3 text-sm text-white/60">
            Cuando el administrador cargue partidos, aparecerán en esta sección.
          </p>
        </section>
      </div>
    </main>
  );
}