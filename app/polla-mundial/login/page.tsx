export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-12 text-white">
      <section className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          Polla LBOriente
        </p>

        <h1 className="mt-4 text-4xl font-black">Entrar</h1>

        <p className="mt-4 text-white/70">
          Ingresa con Google para registrar tus predicciones.
        </p>

        <button className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#050816]">
          Continuar con Google
        </button>
      </section>
    </main>
  );
}