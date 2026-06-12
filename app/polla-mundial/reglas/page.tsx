import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PollaHero } from "@/components/polla/PollaHero";

export default function ReglasPage() {
  return (
    <main className="px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <Breadcrumb items={[{ label: "Reglas" }]} />

        <PollaHero
          title="Reglas"
          description="Sistema de puntos, cierres de predicción y condiciones básicas para competir."
        />

        <section className="max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <div className="space-y-5 text-white/75">
            <p>
              Cada usuario puede registrar una predicción por partido. La
              predicción puede editarse hasta la hora límite definida para cada
              juego.
            </p>

            <ul className="list-disc space-y-3 pl-6">
              <li>Marcador exacto: 5 puntos.</li>
              <li>Ganador o empate correcto: 3 puntos.</li>
              <li>Diferencia de gol correcta: 2 puntos.</li>
              <li>Goles correctos de un equipo: 1 punto.</li>
            </ul>

            <p>
              Después del cierre, las predicciones quedan bloqueadas. El ranking
              se actualiza cuando el administrador carga el resultado oficial.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}