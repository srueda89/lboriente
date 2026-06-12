import { redirect } from "next/navigation";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PollaHero } from "@/components/polla/PollaHero";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/polla-mundial/login");
  }

  const displayName =
    user.user_metadata?.full_name ||
    user.user_metadata?.name ||
    user.email ||
    "Usuario";

  return (
    <main className="px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <Breadcrumb items={[{ label: "Mi polla" }]} />

        <PollaHero
          title={`Hola, ${displayName}`}
          description="Aquí aparecerán tus próximos partidos, predicciones guardadas y posición en el ranking."
        />

        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-blue-400/15 bg-blue-950/20 p-6 shadow-lg shadow-blue-950/20">
            <h2 className="text-xl font-black">Próximos partidos</h2>
            <p className="mt-3 text-sm text-white/60">
              Todavía no hay partidos cargados.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-400/15 bg-blue-950/20 p-6 shadow-lg shadow-blue-950/20">
            <h2 className="text-xl font-black">Tu posición</h2>
            <p className="mt-3 text-sm text-white/60">
              Cuando empiece la polla, aquí verás tus puntos y posición.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}