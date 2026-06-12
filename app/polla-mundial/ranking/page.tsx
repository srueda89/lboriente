import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PollaHero } from "@/components/polla/PollaHero";

export default function RankingPage() {
  return (
    <main className="px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <Breadcrumb items={[{ label: "Ranking" }]} />

        <PollaHero
          title="Ranking"
          description="Tabla general de posiciones de la Polla Mundial LBOriente."
        />

        <section className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
          <div className="grid grid-cols-4 border-b border-white/10 px-6 py-4 text-sm font-bold text-white/60">
            <span>#</span>
            <span className="col-span-2">Usuario</span>
            <span className="text-right">Puntos</span>
          </div>

          <div className="px-6 py-8 text-center text-sm text-white/50">
            El ranking aparecerá cuando existan predicciones calificadas.
          </div>
        </section>
      </div>
    </main>
  );
}