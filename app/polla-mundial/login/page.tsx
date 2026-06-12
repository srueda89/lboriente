import { GoogleLoginButton } from "@/components/auth/GoogleLoginButton";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PollaHero } from "@/components/polla/PollaHero";

export default function LoginPage() {
  return (
    <main className="px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <Breadcrumb items={[{ label: "Entrar" }]} />

        <PollaHero
          title="Entrar"
          description="Ingresa con Google para registrar tus predicciones en la Polla Mundial."
        />

        <section className="mx-auto max-w-md rounded-3xl border border-blue-400/15 bg-blue-950/20 p-6 shadow-lg shadow-blue-950/20">
          <GoogleLoginButton />

          <p className="mt-4 text-center text-xs leading-5 text-white/50">
            Al ingresar, solo guardaremos la información necesaria para administrar tu
            participación, tus predicciones y el ranking.
          </p>
        </section>
      </div>
    </main>
  );
}