export default function ReglasPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-12 text-white">
      <section className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          Polla LBOriente
        </p>

        <h1 className="mt-4 text-4xl font-black">Reglas</h1>

        <div className="mt-8 space-y-5 text-white/75">
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
    </main>
  );
}